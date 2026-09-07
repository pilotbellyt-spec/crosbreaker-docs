import React, {useState} from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function ArchiveImage({src, alt, ...props}) {
  const imageUrl = useBaseUrl(src);
  const [missing, setMissing] = useState(false);
  if (missing) return <span className="alert alert--secondary missing-image" role="img" aria-label={alt || src}>
    Image unavailable: {src.split('/').pop()}
  </span>;
  return <img {...props} src={imageUrl} alt={alt || src.split('/').pop()} onError={() => setMissing(true)} />;
}
