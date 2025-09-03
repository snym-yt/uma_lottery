'use client';

import { UmaMusume } from '@/data/characters';
import { getCharacterImageUrl, getCharacterFallbackIcon } from '@/utils/imageUtils';

interface CharacterCardProps {
  character: UmaMusume;
  index?: number;
}

export default function CharacterCard({ character, index = 0 }: CharacterCardProps) {
  const imageUrl = getCharacterImageUrl(character);
  const fallbackIcon = getCharacterFallbackIcon(character);

  const handleImageError = (event: any) => {
    const img = event.target;
    const fallbackContainer = img.nextElementSibling;
    
    if (fallbackContainer) {
      img.style.display = 'none';
      fallbackContainer.style.display = 'flex';
    }
  };

  return (
    <div
      className={`border-2 rounded-lg p-4 text-center transform hover:scale-105 transition-all animate-fade-in ${
        character.category === 'umamusume' ? 
          'bg-gradient-to-br from-pink-50 to-purple-50 border-pink-200' : 
          'bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200'
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="mb-3">
        <img 
          src={imageUrl}
          alt={character.name}
          className={`w-20 h-24 mx-auto rounded-lg object-cover border-2 ${
            character.category === 'umamusume' ? 'border-pink-300' : 'border-blue-300'
          }`}
          loading="lazy"
          onError={handleImageError}
        />
        <div 
          className={`w-20 h-24 mx-auto rounded-lg flex items-center justify-center text-4xl ${
            character.category === 'umamusume' ? 'bg-pink-100' : 'bg-blue-100'
          }`}
          style={{ display: 'none' }}
        >
          {fallbackIcon}
        </div>
      </div>
      <h3 className="font-bold text-gray-800 text-sm leading-tight">{character.name}</h3>
      {character.category === 'other' && (
        <p className="text-xs text-gray-500 mt-1">サポート</p>
      )}
    </div>
  );
}
