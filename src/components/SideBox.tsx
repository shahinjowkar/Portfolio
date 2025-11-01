'use client';

import LinkBox from './LinkBox';
import MazeBox from './MazeBox';
import PcBox from './PcBox';
import UniversityBox from './UniversityBox';

type BoxContentType = 'link' | 'maze' | 'pc' | 'university';

interface SideBoxProps {
  contentType: BoxContentType;
  logoUrls?: {
    shield: string;
    logo: string;
    emblem: string;
  };
}

export default function SideBox({ contentType, logoUrls }: SideBoxProps) {
  // Mapping of content type to component
  if (contentType === 'link') {
    if (!logoUrls) {
      throw new Error('logoUrls is required for link content type');
    }
    return <LinkBox logoUrls={logoUrls} />;
  }
  
  if (contentType === 'maze') {
    return <MazeBox />;
  }
  
  if (contentType === 'pc') {
    return <PcBox />;
  }
  
  if (contentType === 'university') {
    return <UniversityBox />;
  }
  
  return null;
}

