({
  baseUrl: "./app",
  findNestedDependencies: true,
  paths: {
    'angular': '../node_modules/angular/angular',
    'angular-ui-router': '../node_modules/angular-ui-router/release/angular-ui-router'
  },
  name: "main",
  out: "./dist/main-built.js"
})