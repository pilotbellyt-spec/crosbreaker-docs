import React, {useState} from 'react';
import Link from '@docusaurus/Link';
import {useDocs} from './Navigation';

function compareVersions(a, b) {
  const left = a.split('.').map(Number);
  const right = b.split('.').map(Number);
  for (let i = 0; i < 3; i++) {
    const difference = (left[i] ?? 0) - (right[i] ?? 0);
    if (difference) return difference;
  }
  return 0;
}

export default function DevicePicker() {
  const [board, setBoard] = useState('');
  const [version, setVersion] = useState('');
  const docs = useDocs().filter(doc => doc.id.startsWith('quickstart/exploits/') && !doc.frontMatter.draft);
  const query = board.trim().toLowerCase();
  const platform = version.trim();
  const valid = !platform || /^\d+\.\d+\.\d+$/.test(platform);
  const matches = valid ? docs.filter(({frontMatter: page}) =>
    (!query || page.affectedBoards.some(name => name === '*' || name.toLowerCase().includes(query))) &&
    (!platform || (compareVersions(platform, page.minPlatformVersion) >= 0 && compareVersions(platform, page.maxPlatformVersion) <= 0))
  ) : [];

  return <section aria-label="Find documentation">
    <div className="picker-fields">
      <label>Board codename<input value={board} onChange={e => setBoard(e.target.value)} placeholder="octopus" /></label>
      <label>Platform version<input value={version} onChange={e => setVersion(e.target.value)} placeholder="16151.0.0" aria-invalid={!valid} aria-describedby="picker-status" /></label>
    </div>
    <p id="picker-status" role="status">{valid ? `${matches.length} matching guides` : 'Enter a platform version with three numbers, such as 16151.0.0.'}</p>
    <div className="doc-grid">{matches.map(doc => <Link className="card padding--md" key={doc.id} to={doc.path}>
      <strong>{doc.title}</strong><small>{doc.id.split('/').slice(2, -1).join(' / ')}</small><span>{doc.description}</span>
    </Link>)}</div>
  </section>;
}
