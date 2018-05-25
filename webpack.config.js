const path = require('path');

// npx webpack --config webpack.config.js
module.exports = {
    /**
     * or use cli flag: -p to represent production
     */
    // mode: 'development', // get the code unoptimized
    mode: 'production', // get the code optimized
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
    // ,
    // module: {
    //     rules: [{
    //         include: path.resolve("node_modules", "lodash"),
    //         sideEffects: false
    //     }]
    // }
};