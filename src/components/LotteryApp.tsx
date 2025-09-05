'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Character, getAllCharactersWithFallback } from '@/data/static-characters';
import {
 CookieManager,
 LotteryHistory,
 weightedLottery,
 generateLotteryId,
 formatDateTime,
 formatRelativeTime,
 calculateStatistics
} from '@/utils/lotteryUtils';

export default function LotteryApp() {
 const [characters, setCharacters] = useState<Character[]>([]);
 const [loading, setLoading] = useState(true);
 const [lotteryCount, setLotteryCount] = useState(1);
 const [lotteryResults, setLotteryResults] = useState<Character[]>([]);
 const [showResults, setShowResults] = useState(false);
 const [showHistory, setShowHistory] = useState(false);
 const [showSettings, setShowSettings] = useState(false);
 const [lotteryHistory, setLotteryHistory] = useState<LotteryHistory[]>([]);
 const [isLotteryRunning, setIsLotteryRunning] = useState(false);
 const [selectedTab, setSelectedTab] = useState<'umamusume' | 'other' | 'all'>('all');

 // 初期化
 useEffect(() => {
   const initializeApp = async () => {
     try {
       const allChars = getAllCharactersWithFallback();
       const savedSettings = CookieManager.loadCharacterSettings();

       // 保存された設定を復元
       if (savedSettings.length > 0) {
         const settingsMap = new Map(savedSettings.map(s => [s.id, s]));
         const restoredChars = allChars.map(char => {
           const saved = settingsMap.get(char.id);
           return saved ? { ...char, selected: saved.selected, weight: saved.weight } : char;
         });
         setCharacters(restoredChars);
       } else {
         setCharacters(allChars);
       }

       // 履歴を読み込み
       setLotteryHistory(CookieManager.getLotteryHistories());
     } catch (error) {
       console.error('初期化エラー:', error);
       setCharacters(getAllCharactersWithFallback());
     } finally {
       setLoading(false);
     }
   };

   initializeApp();
 }, []);

 // キャラクター設定の保存
 useEffect(() => {
   if (characters.length > 0 && !loading) {
     CookieManager.saveCharacterSettings(characters);
   }
 }, [characters, loading]);

 // フィルター済みキャラクター
 const filteredCharacters = characters.filter(char => {
   if (selectedTab === 'all') return true;
   return char.category === selectedTab;
 });

 const selectedCharacters = characters.filter(char => char.selected);

 // キャラクター選択の切り替え
 const toggleCharacterSelection = (id: string) => {
   setCharacters(prev => prev.map(char =>
     char.id === id ? { ...char, selected: !char.selected } : char
   ));
 };

 // 重みの変更
 const updateCharacterWeight = (id: string, weight: number) => {
   if (weight < 1 || weight > 10) return;
   setCharacters(prev => prev.map(char =>
     char.id === id ? { ...char, weight } : char
   ));
 };

 // 全選択/全解除
 const toggleAllSelection = () => {
   const filtered = filteredCharacters;
   const allSelected = filtered.every(char => char.selected);

   setCharacters(prev => prev.map(char => {
     if (selectedTab === 'all' || char.category === selectedTab) {
       return { ...char, selected: !allSelected };
     }
     return char;
   }));
 };

 // 抽選実行
 const performLottery = async () => {
   if (selectedCharacters.length === 0) {
     alert('キャラクターを選択してください');
     return;
   }

   if (lotteryCount > selectedCharacters.length) {
     alert(`抽選人数が多すぎます（最大: ${selectedCharacters.length}人）`);
     return;
   }

   setIsLotteryRunning(true);

   // アニメーション効果
   await new Promise(resolve => setTimeout(resolve, 1000));

   try {
     const results = weightedLottery(characters, lotteryCount);
     setLotteryResults(results);
     setShowResults(true);

     // 履歴に保存
     const newHistory: LotteryHistory = {
       id: generateLotteryId(),
       timestamp: Date.now(),
       selectedCount: lotteryCount,
       results,
       settings: {
         totalSelected: selectedCharacters.length,
         lotteryCount
       }
     };

     CookieManager.saveLotteryHistory(newHistory);
     setLotteryHistory(CookieManager.getLotteryHistories());
   } catch (error) {
     console.error('抽選エラー:', error);
     alert('抽選に失敗しました');
   } finally {
     setIsLotteryRunning(false);
   }
 };

 // 統計情報
 const statistics = calculateStatistics(lotteryHistory);

 if (loading) {
   return (
     <div className="min-h-screen bg-white flex items-center justify-center">
       <div className="flex flex-col items-center space-y-4">
         <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500"></div>
         <p className="text-gray-600">読み込み中...</p>
       </div>
     </div>
   );
 }

 return (
   <div className="min-h-screen bg-white">
     {/* ヘッダー */}
     <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
       <div className="max-w-7xl mx-auto px-4 py-4">
         <div className="flex items-center justify-between">
           <h1 className="text-2xl font-bold text-gray-900">🎲 ウマ娘抽選</h1>
           <div className="flex items-center space-x-3">
             <button
               onClick={() => setShowHistory(true)}
               className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
               title="履歴を見る"
            >
               📊
             </button>
             <button
               onClick={() => setShowSettings(true)}
               className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
               title="設定"
            >
               ⚙️
             </button>
           </div>
         </div>
       </div>
     </header>

     {/* メインコンテンツ */}
     <main className="max-w-7xl mx-auto px-4 py-6">
       {/* 抽選パネル */}
       <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-6 p-6">
         <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
           <div className="flex items-center space-x-4">
             <div className="flex items-center space-x-2">
               <span>👥</span>
               <span className="text-gray-700">選択中: {selectedCharacters.length}人</span>
             </div>
             <div className="flex items-center space-x-2">
               <label htmlFor="lotteryCount" className="text-gray-700">抽選数:</label>
               <input
                 id="lotteryCount"
                 type="number"
                 min="1"
                 max={selectedCharacters.length}
                 value={lotteryCount}
                 onChange={(e) => setLotteryCount(Math.max(1, parseInt(e.target.value) || 1))}
                 className="w-20 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
               />
             </div>
           </div>

           <button
             onClick={performLottery}
             disabled={isLotteryRunning || selectedCharacters.length === 0}
             className="bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2"
          >
             {isLotteryRunning ? (
               <>
                 <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                 <span>抽選中...</span>
               </>
             ) : (
               <>
                 <span>🎲</span>
                 <span>抽選開始</span>
               </>
             )}
           </button>
         </div>
       </div>

       {/* フィルタータブ */}
       <div className="flex space-x-2 mb-6">
         {[
           { key: 'all', label: '全て', icon: '📱' },
           { key: 'umamusume', label: 'ウマ娘', icon: '🐎' },
           { key: 'other', label: 'その他', icon: '👥' }
         ].map(tab => (
           <button
             key={tab.key}
             onClick={() => setSelectedTab(tab.key as any)}
             className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
               selectedTab === tab.key
                 ? 'bg-blue-100 text-blue-700 border border-blue-200'
                 : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
             }`}
          >
             <span>{tab.icon}</span>
             <span>{tab.label}</span>
             <span className="bg-white rounded-full px-2 py-1 text-xs">
               {characters.filter(c => tab.key === 'all' || c.category === tab.key).length}
             </span>
           </button>
         ))}
       </div>

       {/* 一括操作 */}
       <div className="flex items-center justify-between mb-4">
         <button
           onClick={toggleAllSelection}
           className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
        >
           <span>
             {filteredCharacters.every(c => c.selected) ? '☑️' : '⬜'}
           </span>
           <span>
             {filteredCharacters.every(c => c.selected) ? '全て解除' : '全て選択'}
           </span>
         </button>

         <div className="text-sm text-gray-500">
           {filteredCharacters.filter(c => c.selected).length} / {filteredCharacters.length} 選択中
         </div>
       </div>

       {/* キャラクターグリッド */}
       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
         {filteredCharacters.map(character => (
           <div
             key={character.id}
             className={`relative group cursor-pointer rounded-lg overflow-hidden transition-all ${
               character.selected
                 ? 'ring-2 ring-blue-500 shadow-lg'
                 : 'ring-1 ring-gray-200 hover:ring-gray-300 hover:shadow-md'
             }`}
             onClick={() => toggleCharacterSelection(character.id)}
          >
             {/* キャラクター画像 */}
             <div className="aspect-square relative">
               <Image
                 src={character.imageUrl}
                 alt={character.name}
                 fill
                 className={`object-cover transition-all ${
                   character.selected ? 'brightness-100' : 'brightness-75 group-hover:brightness-90'
                 }`}
                 sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 16vw, 12vw"
               />

               {/* 選択状態オーバーレイ */}
               {character.selected && (
                 <div className="absolute inset-0 bg-blue-500 bg-opacity-20 flex items-center justify-center">
                   <div className="bg-blue-500 text-white rounded-full p-1">
                     <span className="text-lg">✓</span>
                   </div>
                 </div>
               )}

               {/* 重み表示 */}
               {character.selected && character.weight > 1 && (
                 <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                   ×{character.weight}
                 </div>
               )}
             </div>

             {/* キャラクター名 */}
             <div className="p-2 bg-white">
               <p className="text-xs text-center font-medium text-gray-900 truncate">
                 {character.name}
               </p>
             </div>

             {/* 重み調整ボタン */}
             {character.selected && (
               <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity">
                 <div className="flex items-center justify-center space-x-1 p-2">
                   <button
                     onClick={(e) => {
                       e.stopPropagation();
                       updateCharacterWeight(character.id, character.weight - 1);
                     }}
                     className="text-white hover:text-orange-300 transition-colors"
                     disabled={character.weight <= 1}
                  >
                     <span className="text-lg">➖</span>
                   </button>
                   <span className="text-white text-sm font-bold mx-2">
                     {character.weight}
                   </span>
                   <button
                     onClick={(e) => {
                       e.stopPropagation();
                       updateCharacterWeight(character.id, character.weight + 1);
                     }}
                     className="text-white hover:text-orange-300 transition-colors"
                     disabled={character.weight >= 10}
                    >
                     <span className="text-lg">➕</span>
                   </button>
                 </div>
               </div>
             )}
           </div>
         ))}
       </div>
     </main>

     {/* 抽選結果モーダル */}
     {showResults && (
       <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
         <div className="bg-white rounded-xl max-w-2xl w-full max-h-[80vh] overflow-hidden">
           <div className="p-6 border-b border-gray-200">
             <div className="flex items-center justify-between">
               <h2 className="text-xl font-bold text-gray-900">🎉 抽選結果</h2>
               <button
                 onClick={() => setShowResults(false)}
                 className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                 ❌
               </button>
             </div>
           </div>

           <div className="p-6 overflow-y-auto">
             <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
               {lotteryResults.map((character, index) => (
                 <div key={character.id} className="text-center">
                   <div className="relative aspect-square rounded-lg overflow-hidden mb-2 shadow-md">
                     <Image
                       src={character.imageUrl}
                       alt={character.name}
                       fill
                       className="object-cover"
                       sizes="(max-width: 640px) 50vw, 33vw"
                     />
                     <div className="absolute top-2 left-2 bg-yellow-500 text-white text-sm font-bold px-2 py-1 rounded-full">
                       #{index + 1}
                     </div>
                   </div>
                   <p className="font-medium text-gray-900">{character.name}</p>
                 </div>
               ))}
             </div>
           </div>
         </div>
       </div>
     )}

     {/* 履歴モーダル */}
     {showHistory && (
       <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
         <div className="bg-white rounded-xl max-w-4xl w-full max-h-[80vh] overflow-hidden">
           <div className="p-6 border-b border-gray-200">
             <div className="flex items-center justify-between">
               <h2 className="text-xl font-bold text-gray-900">📊 抽選履歴</h2>
               <div className="flex items-center space-x-2">
                 <button
                   onClick={() => {
                     if (confirm('履歴を全て削除しますか？')) {
                       CookieManager.clearHistory();
                       setLotteryHistory([]);
                     }
                   }}
                   className="text-red-600 hover:text-red-700 transition-colors text-sm"
                  >
                   履歴削除
                 </button>
                 <button
                   onClick={() => setShowHistory(false)}
                   className="text-gray-500 hover:text-gray-700 transition-colors"
                   >
                   ❌
                 </button>
               </div>
             </div>
           </div>

           <div className="p-6 overflow-y-auto">
             {/* 統計情報 */}
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
               <div className="bg-blue-50 rounded-lg p-4 text-center">
                 <div className="text-2xl font-bold text-blue-600">{statistics.totalLotteries}</div>
                 <div className="text-sm text-gray-600">総抽選回数</div>
               </div>
               <div className="bg-green-50 rounded-lg p-4 text-center">
                 <div className="text-2xl font-bold text-green-600">{statistics.totalCharactersDrawn}</div>
                 <div className="text-sm text-gray-600">総当選数</div>
               </div>
               <div className="bg-orange-50 rounded-lg p-4 text-center">
                 <div className="text-2xl font-bold text-orange-600">{statistics.averageLotterySize}</div>
                 <div className="text-sm text-gray-600">平均抽選数</div>
               </div>
               <div className="bg-purple-50 rounded-lg p-4 text-center">
                 <div className="text-2xl font-bold text-purple-600">
                   {statistics.mostPopularCharacter?.count || 0}
                 </div>
                 <div className="text-sm text-gray-600">最多当選</div>
               </div>
             </div>

             {/* 履歴リスト */}
             <div className="space-y-4">
               {lotteryHistory.length === 0 ? (
                 <div className="text-center py-8 text-gray-500">
                   <span className="text-4xl mb-2 block">📭</span>
                   <p>履歴がありません</p>
                 </div>
               ) : (
                 lotteryHistory.map(history => (
                   <div key={history.id} className="border border-gray-200 rounded-lg p-4">
                     <div className="flex items-center justify-between mb-3">
                       <div className="flex items-center space-x-2">
                         <span>📅</span>
                         <span className="font-medium">{formatDateTime(history.timestamp)}</span>
                         <span className="text-sm text-gray-500">
                           ({formatRelativeTime(history.timestamp)})
                         </span>
                       </div>
                       <div className="text-sm text-gray-600">
                         {history.results.length}人抽選
                       </div>
                     </div>

                     <div className="flex flex-wrap gap-2">
                       {history.results.map(character => (
                         <div key={character.id} className="flex items-center space-x-2 bg-gray-50 rounded-lg px-3 py-1">
                           <div className="w-8 h-8 rounded-full overflow-hidden">
                             <Image
                               src={character.imageUrl}
                               alt={character.name}
                               width={32}
                               height={32}
                               className="object-cover"
                             />
                           </div>
                           <span className="text-sm">{character.name}</span>
                         </div>
                       ))}
                     </div>
                   </div>
                 ))
               )}
             </div>
           </div>
         </div>
       </div>
     )}

     {/* 設定モーダル */}
     {showSettings && (
       <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
         <div className="bg-white rounded-xl max-w-md w-full">
           <div className="p-6 border-b border-gray-200">
             <div className="flex items-center justify-between">
               <h2 className="text-xl font-bold text-gray-900">⚙️ 設定</h2>
               <button
                 onClick={() => setShowSettings(false)}
                 className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                 ❌
               </button>
             </div>
           </div>

           <div className="p-6 space-y-4">
             <button
               onClick={() => {
                 if (confirm('全ての設定をリセットしますか？')) {
                   CookieManager.clearSettings();
                   const resetChars = getAllCharactersWithFallback();
                   setCharacters(resetChars);
                 }
               }}
               className="w-full bg-red-100 text-red-700 py-3 rounded-lg hover:bg-red-200 transition-colors"
               >
               設定をリセット
             </button>

             <button
               onClick={() => {
                 if (confirm('履歴と設定を全て削除しますか？')) {
                   CookieManager.clearHistory();
                   CookieManager.clearSettings();
                   setLotteryHistory([]);
                   const resetChars = getAllCharactersWithFallback();
                   setCharacters(resetChars);
                 }
               }}
               className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-colors"
               >
               全データ削除
             </button>
           </div>
         </div>
       </div>
     )}
   </div>
 );
}