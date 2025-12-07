import React, { useState } from 'react';

interface SmartImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallback?: string;
}

const SVG_PLACEHOLDER = '<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900"><rect width="100%" height="100%" fill="#0b1020"/><g fill="#cbd" font-family="Space Grotesk, sans-serif"><text x="50%" y="45%" font-size="48" text-anchor="middle" font-weight="700">Image unavailable</text><text x="50%" y="55%" font-size="20" text-anchor="middle">Please check connection or source</text></g></svg>';
const DEFAULT_FALLBACK = 'data:image/svg+xml;utf8,' + encodeURIComponent(SVG_PLACEHOLDER);

const SmartImageClean: React.FC<SmartImageProps> = ({ src = '', alt = '', className = '', fallback, ...rest }) => {
  const [current, setCurrent] = useState<string>(src as string);
  const fallbackSrc = fallback || DEFAULT_FALLBACK;

  const handleError = () => {
    if (current !== fallbackSrc) setCurrent(fallbackSrc);
  };

  return (
    <img
      src={current}
      alt={alt}
      className={className}
      loading="lazy"
      onError={handleError}
      {...rest}
    />
  );
};

export default SmartImageClean;
export { SmartImageClean };
