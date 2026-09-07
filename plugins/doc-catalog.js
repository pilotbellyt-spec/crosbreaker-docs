module.exports = function docCatalog() {
  return {
    name: 'doc-catalog',
    allContentLoaded({allContent, actions}) {
      const {docs} = allContent['docusaurus-plugin-content-docs'].default.loadedVersions[0];
      actions.setGlobalData(docs.map(doc => ({
        id: doc.id,
        path: doc.permalink,
        title: doc.title,
        description: doc.description,
        frontMatter: doc.frontMatter,
      })));
    },
  };
};
