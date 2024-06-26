const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const svgToTinyDataUri = require('mini-svg-data-uri');
const packageJson = require('./package.json');

/** 从package.json中读取输出文件的路径和文件名 */
const [_, outputPath, outputFilename] = packageJson.files[0].match(/^(.*)\/([^/]+)$/);

const postCssLoader = {
  loader: 'postcss-loader',
  options: {
    postcssOptions: (loader) => ({
      plugins: [
        [
          'autoprefixer',
        ],
        ...(loader.mode === 'production' ? [['cssnano', { preset: 'default' }]] : []),
      ],
    }),
  },
};

/** @type {(_, argv: { mode: string }) => (import('webpack').Configuration)} */
module.exports = (_, argv) => {
  const isDevelopment = argv.mode === 'development';
  return {
    mode: argv.mode,
    entry: './src/index.ts',
    output: isDevelopment ? {
      filename: 'dev.js',
      path: path.resolve(__dirname, outputPath),
    } : {
      filename: outputFilename,
      path: path.resolve(__dirname, outputPath),
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          use: 'ts-loader',
        },
        {
          test: /\.js$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              targets: '> 0.35%, not dead',
            },
          },
        },
        {
          test: /\.css$/i,
          oneOf: [
            {
              assert: {
                type: 'string',
              },
              type: 'asset/source', // css文件作为文本导入
            },
            {
              use: [
                'style-loader',
                'css-loader',
                postCssLoader,
              ],
            },
          ],
        },
        {
          test: /\.s[ac]ss$/i,
          oneOf: [
            {
              assert: {
                type: 'string',
              },
              type: 'asset/source', // css文件作为文本导入
              use: [
                postCssLoader,
                'sass-loader',
              ],
            },
            {
              use: [
                'style-loader',
                'css-loader',
                postCssLoader,
                'sass-loader',
              ],
            },
          ],
        },
        {
          test: /\.svg$/,
          oneOf: [
            {
              assert: {
                type: 'xml',
              },
              type: 'asset/source',
            },
            {
              type: 'asset/inline',
              generator: {
                dataUrl: (content) => svgToTinyDataUri(content.toString()),
              },
            },
          ],
        },
        {
          test: /\.(png|jpe?g|gif)$/,
          type: 'asset',
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.js'],
      alias: {
        '@': path.resolve(__dirname, 'src/'),
      },
    },
    watchOptions: {
      ignored: /node_modules/,
    },
    devtool: isDevelopment ? 'eval-cheap-module-source-map' : false,
    devServer: {
      port: 8100,
      hot: true,
    },
    plugins: [new ForkTsCheckerWebpackPlugin()],
    optimization: {
      minimize: !isDevelopment,
      minimizer: [
        new TerserPlugin({
          extractComments: false,
          terserOptions: {
            output: {
              comments: false,
            },
            compress: {
              drop_console: ['log', 'info'],
            },
          },
        }),
      ],
    },
  };
};
