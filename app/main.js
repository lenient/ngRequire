require.config({
  /*baseUrl: '/',*/
  paths: {
    'angular': '../node_modules/angular/angular',
    'angular-ui-router': '../node_modules/angular-ui-router/release/angular-ui-router'
  },
  shim: {
    'angular-ui-router': ['angular']
  }
});

requirejs(['app']);