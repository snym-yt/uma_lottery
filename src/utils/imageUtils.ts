import { UmaMusume } from '@/data/characters';

// 画像URL生成関数
export function getCharacterImageUrl(character: UmaMusume): string {
  // プレースホルダー画像サービスを使用
  const colors = {
    umamusume: ['FF69B4', 'FFB6C1', 'DDA0DD', 'F0E68C', 'FFE4E1', 'F5DEB3'],
    other: ['87CEEB', 'B0E0E6', 'ADD8E6', '98FB98', 'F0F8FF', 'E0FFFF']
  };
  
  const colorPalette = colors[character.category || 'umamusume'];
  const colorIndex = Math.abs(character.name.charCodeAt(0) + character.name.charCodeAt(character.name.length - 1)) % colorPalette.length;
  const color = colorPalette[colorIndex];
  
  // キャラクター名をエンコード
  const encodedName = encodeURIComponent(character.name);
  
  return `https://via.placeholder.com/200x250/${color}/FFFFFF?text=${encodedName}`;
}

// 画像のフォールバック処理
export function getCharacterFallbackIcon(character: UmaMusume): string {
  return character.category === 'umamusume' ? '🏃‍♀️' : '👨‍🏫';
}

// 画像読み込みエラー時の処理
export function handleImageError(event: React.SyntheticEvent<HTMLImageElement>, character: UmaMusume): void {
  const img = event.target as HTMLImageElement;
  const fallbackContainer = img.nextElementSibling as HTMLElement;
  
  if (fallbackContainer) {
    img.style.display = 'none';
    fallbackContainer.style.display = 'flex';
    fallbackContainer.textContent = getCharacterFallbackIcon(character);
  }
}
