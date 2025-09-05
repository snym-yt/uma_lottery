// 抽選履歴とユーティリティ関数
import { Character } from '@/data/static-characters';

export interface LotteryHistory {
 id: string;
 timestamp: number;
 selectedCount: number;
 results: Character[];
 settings: {
   totalSelected: number;
   lotteryCount: number;
 };
}

// Cookie管理
export const CookieManager = {
 // 履歴の保存
 saveLotteryHistory: (history: LotteryHistory) => {
   try {
     const existingHistories = CookieManager.getLotteryHistories();
     const newHistories = [history, ...existingHistories].slice(0, 50); // 最新50件まで保存

     const cookieValue = encodeURIComponent(JSON.stringify(newHistories));
     document.cookie = `lotteryHistory=${cookieValue}; path=/; max-age=${30 * 24 * 60 * 60}; SameSite=Lax`; // 30日間保存
   } catch (error) {
     console.error('履歴の保存に失敗しました:', error);
   }
 },

 // 履歴の取得
 getLotteryHistories: (): LotteryHistory[] => {
   try {
     const cookie = document.cookie
       .split('; ')
       .find(row => row.startsWith('lotteryHistory='));

     if (!cookie) return [];

     const value = decodeURIComponent(cookie.split('=')[1]);
     return JSON.parse(value) || [];
   } catch (error) {
     console.error('履歴の取得に失敗しました:', error);
     return [];
   }
 },

 // キャラクター選択状態の保存
 saveCharacterSettings: (characters: Character[]) => {
   try {
     const settings = characters.map(char => ({
       id: char.id,
       selected: char.selected,
       weight: char.weight
     }));

     const cookieValue = encodeURIComponent(JSON.stringify(settings));
     document.cookie = `characterSettings=${cookieValue}; path=/; max-age=${365 * 24 * 60 * 60}; SameSite=Lax`; // 1年間保存
   } catch (error) {
     console.error('設定の保存に失敗しました:', error);
   }
 },

 // キャラクター選択状態の復元
 loadCharacterSettings: (): { id: string; selected: boolean; weight: number }[] => {
   try {
     const cookie = document.cookie
       .split('; ')
       .find(row => row.startsWith('characterSettings='));

     if (!cookie) return [];

     const value = decodeURIComponent(cookie.split('=')[1]);
     return JSON.parse(value) || [];
   } catch (error) {
     console.error('設定の読み込みに失敗しました:', error);
     return [];
   }
 },

 // 履歴の削除
 clearHistory: () => {
   document.cookie = 'lotteryHistory=; path=/; max-age=0';
 },

 // 設定の削除
 clearSettings: () => {
   document.cookie = 'characterSettings=; path=/; max-age=0';
 }
};

// 重み付き抽選アルゴリズム（Fisher-Yates shuffle使用）
export function weightedLottery(characters: Character[], count: number): Character[] {
 const selectedCharacters = characters.filter(char => char.selected);

 if (selectedCharacters.length === 0) {
   throw new Error('キャラクターが選択されていません');
 }

 if (count > selectedCharacters.length) {
   throw new Error(`抽選人数が選択キャラクター数を超えています（最大: ${selectedCharacters.length}人）`);
 }

 // 重み付きプールの作成
 const weightedPool: Character[] = [];
 selectedCharacters.forEach(char => {
   for (let i = 0; i < char.weight; i++) {
     weightedPool.push(char);
   }
 });

 // Fisher-Yates shuffleで完全ランダム
 for (let i = weightedPool.length - 1; i > 0; i--) {
   const j = Math.floor(Math.random() * (i + 1));
   [weightedPool[i], weightedPool[j]] = [weightedPool[j], weightedPool[i]];
 }

 // 重複排除して指定数まで抽選
 const results: Character[] = [];
 const usedIds = new Set<string>();

 for (const char of weightedPool) {
   if (!usedIds.has(char.id) && results.length < count) {
     results.push(char);
     usedIds.add(char.id);
   }
 }

 return results;
}

// 一意IDの生成
export function generateLotteryId(): string {
 return `lottery_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

// 日時フォーマット
export function formatDateTime(timestamp: number): string {
 const date = new Date(timestamp);
 const year = date.getFullYear();
 const month = ('0' + (date.getMonth() + 1)).slice(-2);
 const day = ('0' + date.getDate()).slice(-2);
 const hours = ('0' + date.getHours()).slice(-2);
 const minutes = ('0' + date.getMinutes()).slice(-2);

 return `${year}/${month}/${day} ${hours}:${minutes}`;
}

// 相対時間フォーマット
export function formatRelativeTime(timestamp: number): string {
 const now = Date.now();
 const diff = now - timestamp;

 const minutes = Math.floor(diff / (1000 * 60));
 const hours = Math.floor(diff / (1000 * 60 * 60));
 const days = Math.floor(diff / (1000 * 60 * 60 * 24));

 if (minutes < 1) return '今';
 if (minutes < 60) return `${minutes}分前`;
 if (hours < 24) return `${hours}時間前`;
 if (days < 7) return `${days}日前`;

 return formatDateTime(timestamp);
}

// 統計情報の計算
export function calculateStatistics(histories: LotteryHistory[]) {
 if (histories.length === 0) {
   return {
     totalLotteries: 0,
     totalCharactersDrawn: 0,
     mostPopularCharacter: null,
     averageLotterySize: 0,
     characterFrequency: new Map<string, number>()
   };
 }

 const characterFrequency = new Map<string, number>();
 let totalCharactersDrawn = 0;

 histories.forEach(history => {
   totalCharactersDrawn += history.results.length;
   history.results.forEach(character => {
     const current = characterFrequency.get(character.id) || 0;
     characterFrequency.set(character.id, current + 1);
   });
 });

 const mostPopularEntry = Array.from(characterFrequency.entries())
   .sort((a, b) => b[1] - a[1])[0];

 return {
   totalLotteries: histories.length,
   totalCharactersDrawn,
   mostPopularCharacter: mostPopularEntry ? {
     id: mostPopularEntry[0],
     count: mostPopularEntry[1]
   } : null,
   averageLotterySize: Math.round(totalCharactersDrawn / histories.length * 10) / 10,
   characterFrequency
 };
}