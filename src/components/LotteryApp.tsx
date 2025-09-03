'use client';

import { useState } from 'react';
import { UmaMusume, getRandomCharacters, getCharacterCounts } from '@/data/characters';
import CharacterCard from './CharacterCard';

export default function LotteryApp() {
  const [selectedCount, setSelectedCount] = useState<number>(1);
  const [includeOthers, setIncludeOthers] = useState<boolean>(false);
  const [results, setResults] = useState<UmaMusume[]>([]);
  const [isDrawing, setIsDrawing] = useState(false);

  const characterCounts = getCharacterCounts();
  const maxCount = includeOthers ? characterCounts.total : characterCounts.umamusume;

  const handleDraw = async () => {
    setIsDrawing(true);
    
    // アニメーション効果のため少し待つ
    setTimeout(() => {
      try {
        const randomCharacters = getRandomCharacters(selectedCount, includeOthers);
        setResults(randomCharacters);
      } catch (error) {
        alert(error instanceof Error ? error.message : '抽選に失敗しました');
      } finally {
        setIsDrawing(false);
      }
    }, 1000);
  };

  const handleReset = () => {
    setResults([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-blue-100 p-6">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            🏃‍♀️ ウマ娘抽選アプリ 🏃‍♀️
          </h1>
          <p className="text-gray-600">
            ウマ娘{characterCounts.umamusume}人{includeOthers && `（+その他${characterCounts.others}人）`}から、指定した人数をランダムに抽選します
          </p>
        </header>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex flex-col gap-4 mb-6">
            {/* 抽選設定 */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <label htmlFor="count" className="text-lg font-medium text-gray-700">
                抽選する人数:
              </label>
              <input
                id="count"
                type="number"
                min="1"
                max={maxCount}
                value={selectedCount}
                onChange={(e) => setSelectedCount(Math.max(1, parseInt(e.target.value) || 1))}
                className="border border-gray-300 rounded-lg px-3 py-2 text-center w-20 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                disabled={isDrawing}
              />
              <span className="text-gray-600">人 (最大{maxCount}人)</span>
            </div>

            {/* フィルター設定 */}
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={includeOthers}
                  onChange={(e) => {
                    setIncludeOthers(e.target.checked);
                    // 最大値を超えている場合は調整
                    const newMaxCount = e.target.checked ? characterCounts.total : characterCounts.umamusume;
                    if (selectedCount > newMaxCount) {
                      setSelectedCount(newMaxCount);
                    }
                  }}
                  className="w-4 h-4 text-pink-500 border-gray-300 rounded focus:ring-pink-500"
                  disabled={isDrawing}
                />
                <span className="text-gray-700">トレーナーやサポートキャラクターも含める</span>
              </label>
            </div>
            
            {/* 抽選ボタン */}
            <div className="flex gap-2">
              <button
                onClick={handleDraw}
                disabled={isDrawing}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  isDrawing
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-pink-500 hover:bg-pink-600 active:scale-95'
                } text-white`}
              >
                {isDrawing ? '抽選中...' : '🎲 抽選開始'}
              </button>
              
              {/* {results.length > 0 && (
                <button
                  onClick={handleReset}
                  disabled={isDrawing}
                  className="px-6 py-2 rounded-lg font-medium bg-gray-500 hover:bg-gray-600 text-white transition-all active:scale-95"
                >
                  🔄 リセット
                </button>
              )} */}
            </div>
          </div>

          {isDrawing && (
            <div className="text-center py-8">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500"></div>
              <p className="mt-4 text-gray-600">抽選中...</p>
            </div>
          )}

          {results.length > 0 && !isDrawing && (
            <div className="mt-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                🎉 抽選結果 🎉
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {results.map((character, index) => (
                  <CharacterCard
                    key={character.id}
                    character={character}
                    index={index}
                  />
                ))}
              </div>
              <div className="text-center mt-6">
                <p className="text-gray-600">
                  選ばれた{results.length}体のキャラクターです！
                </p>
              </div>
            </div>
          )}
        </div>

        <footer className="text-center text-gray-500 text-sm">
          <p>※ このアプリはファン作品です。公式とは関係ありません。</p>
          <p className="mt-1">※ キャラクターデータは公式サイトから取得（2025年9月時点）</p>
        </footer>
      </div>
    </div>
  );
}
