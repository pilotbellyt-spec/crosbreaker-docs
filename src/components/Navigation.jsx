import React from 'react';
import Link from '@docusaurus/Link';
import {usePluginData} from '@docusaurus/useGlobalData';
import {useDoc} from '@docusaurus/plugin-content-docs/client';

export function useDocs() {
  return usePluginData('doc-catalog');
}

export function Hero() {
  const {frontMatter} = useDoc();
  return <section className="hero-intro">
    <p>{frontMatter.hero.tagline}</p>
    <div className="hero-actions">{frontMatter.hero.actions.map(action =>
      <Link key={action.link} className="button button--primary" to={action.link}>{action.text}</Link>
    )}</div>
  </section>;
}

export function ProjectShowcase() {
  const docs = useDocs().filter(doc => doc.id.startsWith('quickstart/exploits/Code Exec/'));
  return <div className="doc-grid">{docs.map(doc =>
    <Link className="card padding--md" key={doc.id} to={doc.path}>
      <strong>{doc.title}</strong><span>{doc.description}</span>
    </Link>
  )}</div>;
}

export function QuickLinks() {
  const docs = useDocs().filter(doc => doc.id === 'quickstart/index' || doc.id.startsWith('quickstart/exploits/Misc/'));
  return <ul>{docs.map(doc => <li key={doc.id}><Link to={doc.path}>{doc.title}</Link></li>)}</ul>;
}
