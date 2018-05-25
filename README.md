# Tree Shaking

https://webpack.js.org/guides/tree-shaking/

Tree shaking is a term commonly used in the JavaScript context for dead-code elimination. It relies on the [static structure](http://exploringjs.com/es6/ch_modules.html#static-module-structure) of ES2015 module syntax, i.e. import and export. The name and concept have been popularized by the ES2015 module bundler [rollup](https://github.com/rollup/rollup).

The webpack 2 release came with built-in support for ES2015 modules (alias harmony modules) as well as unused module export detection. The new webpack 4 release expands on this capability with a way to provide hints to the compiler via the "sideEffects" package.json flag to denote which files in your project are "pure" and therefore safe to prune if unused.

## Mark the file as side-effect-free
* 
{
  "name": "your-project",
  "sideEffects": false
}

* If your code did have some side effects though, an array can be provided instead:

{
  "name": "your-project",
  "sideEffects": [
    "./src/some-side-effectful-file.js"
  ]
}

* If you use something like css-loader in your project and import a CSS file, it needs to be added to the side effect list so it will not be unintentionally dropped in production mode:
{
  "name": "your-project",
  "sideEffects": [
    "./src/some-side-effectful-file.js",
    "*.css"
  ]
}

* in webpack.config.js
module.rules: [
  {
    include: path.resolve("node_modules", "lodash"),
    sideEffects: false
  }
]

### some official examples:
[side-effect](https://github.com/webpack/webpack/tree/master/examples/side-effects)

#### TODO: the "sideEffects" config doesn't work till now(it may already work because when added it, the packaging time longer, let's see if it has big difference when bigger product)


### Minify the Output
with: 
* mode: "production";

* -p flag of cli


### Conclusion
So, what we've learned is that in order to take advantage of tree shaking, you must...

* Use ES2015 module syntax (i.e. import and export).
* Add a "sideEffects" entry to your project's package.json file.
* Include a minifier that supports dead code removal (e.g. the UglifyJSPlugin).