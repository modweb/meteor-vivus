Package.describe({
  name: 'modweb:vivus',
  version: '0.1.2',
  summary: 'Library to make drawing animation on SVG',
  git: 'https://github.com/modweb/meteor-vivus',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.0');

  api.export('Vivus', 'client');

  api.addFiles('pathformer.js', 'client');
  api.addFiles('vivus.js', 'client');
});

Package.onTest(function(api) {
  api.use(['tinytest', 'test-helpers']);
  api.use('modweb:vivus');
  api.addFiles('vivus-tests.js', 'client');
});
