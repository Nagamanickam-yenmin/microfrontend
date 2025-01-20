const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 3001,
    historyApiFallback: true,
    hot: false, 
    headers: {
      'Access-Control-Allow-Origin': '*', 
    },
    client: {
      overlay: false, // Disable overlay for warnings and errors in the browser console
      logging: 'none', // Disables all Webpack Dev Server logs in the browser console
    },
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  entry: './src/index.tsx',  
  output: {
    publicPath: 'auto',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'Login',
      filename: 'LoginEntry.js', 
      remotes: {
        Components: 'Components@http://localhost:1000/ComponentsEntry.js',
      },
      exposes: {
        './Auth': './src/App.tsx',
      },
      shared: {
        react: {
          singleton: true,
          eager: true, // Force eager loading
          requiredVersion: require('./package.json').dependencies.react,
        },
        'react-dom': {
          singleton: true,
          eager: true, // Force eager loading
          requiredVersion: require('./package.json').dependencies['react-dom'],
        },
        'react-router-dom': {
          singleton: true,
          requiredVersion: require('./package.json').dependencies['react-router-dom'],
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  watch: true,
  devtool: 'eval-source-map', // Better debugging
  stats: {
    warnings: false,
    errors: true,
  },
};
