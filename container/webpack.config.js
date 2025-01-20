const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 3000,
    historyApiFallback: true,
    hot: false,
    headers: {
      'Access-Control-Allow-Origin': '*', // Fix cross-origin issues
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
        test: /\.(ts|tsx)$/, // Match TypeScript and TSX files
        use: 'ts-loader', // Use ts-loader to handle TypeScript files
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/, // For JavaScript and JSX files
        use: 'babel-loader', // Use Babel for JavaScript files
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/, // Match .scss files
        use: [
          'style-loader', // Inject CSS into DOM
          'css-loader',   // Translates CSS into CommonJS
          'sass-loader',  // Compiles SCSS into CSS
        ],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        Components: 'Components@http://localhost:1000/ComponentsEntry.js',
        Login: 'Login@http://localhost:3001/LoginEntry.js',
        // Landlord: 'Landlord@http://localhost:3002/LandlordEntry.js',
        // Payments: 'Payments@http://localhost:3003/PaymentsEntry.js',
        // Rewards: 'Rewards@http://localhost:3004/RewardsEntry.js',
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  devtool: 'eval-source-map', // Better debugging
  stats: {
    warnings: false, // Suppress all warnings in the terminal
    errors: true, // Keep errors
    errorDetails: true, // Show error details
  },
  infrastructureLogging: {
    level: 'error', // Suppress warnings and info logs
  },
};
