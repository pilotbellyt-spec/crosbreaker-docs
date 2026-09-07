import React from 'react';
import {useDoc} from '@docusaurus/plugin-content-docs/client';

export default function Compatibility() {
  const {frontMatter: page} = useDoc();
  return <aside className="compatibility margin-bottom--lg" aria-label="Compatibility">
    <div><strong>Platform version:</strong> {page.minPlatformVersion} – {page.maxPlatformVersion}</div>
    <div><strong>Boards:</strong> {page.affectedBoards.join(', ')}</div>
    {typeof page.keyrolled === 'boolean' && <div><strong>Keyrolled:</strong> {page.keyrolled ? 'Yes' : 'No'}</div>}
  </aside>;
}
