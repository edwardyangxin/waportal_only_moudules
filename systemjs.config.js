  /**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function(global) {

  // map tells the System loader where to look for things
  var map = {
    'app':                        'app', // 'dist',

    '@angular':                   'node_modules/@angular',
    'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
    'rxjs':                       'node_modules/rxjs',
    'primeng':                    'node_modules/primeng',
    'hammer':                    'node_modules/hammerjs',
    '@angular2-material':         'node_modules/@angular2-material',
    'ng2-uploader':         'node_modules/ng2-uploader',
  };

  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'main.js',  defaultExtension: 'js' },
    'rxjs':                       { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },
    'primeng':                    { defaultExtension: 'js' },
    'hammer': {defaultExtension: 'js' },
    'ng2-uploader': { main: 'index.js', defaultExtension: 'js'}
  };

  var materialComponents = [
    'button',
    'card',
    'core',
    'checkbox',
    'grid-list',
    'icon',
    'input',
    'list',
    'menu',
    'progress-bar',
    'progress-circle',
    'radio',
    'sidenav',
    'slider',
    'slide-toggle',
    'button-toggle',
    'tabs',
    'toolbar',
    'tooltip',
  ];

  materialComponents.forEach(function(name){
    packages['@angular2-material/'+name] = {
      format: 'cjs',
      defaultExtension: 'js',
      main: name+'.js',
    };
});

  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'forms',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'router-deprecated',
    'upgrade',
  ];

  // Individual files (~300 requests):
  function packIndex(pkgName) {
    packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }

  // Bundled (~40 requests):
  function packUmd(pkgName) {
    packages['@angular/'+pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
  }

  // Most environments should use UMD; some (Karma) need the individual index files
  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;

  // Add package entries for angular packages
  ngPackageNames.forEach(setPackageConfig);

  // No umd for router yet
  packages['@angular/router'] = { main: 'index.js', defaultExtension: 'js' };

  // CodeMirror lib
  map['codemirror'] = 'node_modules/codemirror';
  packages['codemirror'] = { main: 'lib/codemirror.js', defaultExtension: 'js' };

  // ng2-codemirror
  map['ng2-codemirror'] = 'node_modules/ng2-codemirror';
  packages['ng2-codemirror'] = { main: 'lib/Codemirror.js', defaultExtension: 'js' };

  var config = {
    map: map,
    packages: packages
  };

  System.config(config);

})(this);
