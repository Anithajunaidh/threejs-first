// SVGPath.tsx
import React from 'react';

const SVGPath: React.FC = () => {
  return (
    <svg width="0" height="0" viewBox="0 0 500 500">
      <path id="motionPath" d="M100 400 Q 200 100 300 400" fill="none" />
    </svg>
  );
};

export default SVGPath;
