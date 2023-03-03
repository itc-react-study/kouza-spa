// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');

module.exports = {
  mode: 'development', // 'development'或'production'，不指定的话控制台会有warning信息
  entry: './src/index.tsx', // 入口文件
  output: {
    path: path.join(__dirname, 'dist'), // 打包的输出目录
    filename: 'main.js', // 打包的输出文件名
  },
  // 在import .ts/.tsx/.js/.jsx文件时，不用包含拓展名了
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    // 根据不同的拓展名，使用不同的loader来解析文件，因为默认只认识.js, .json文件
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' },
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
          {
            loader: 'ts-loader',
            options: {
              configFile: path.resolve(__dirname, 'tsconfig.json'),
            },
          },
        ],
      },
      // 注意顺序，先style-loader，再css-loader和其他loader
      {
        test: /\.(css|less)$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
      },
    ],
  },
  // 缓存来提高二次构建速度
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename],
    },
    name: 'development-cache',
  },
  plugins: [
    // 生成html文件
    new HtmlWebpackPlugin({
      template: './public/index.html', // 基于模板创建html文件
      filename: './index.html', // 生成html文件的名字
    }),
    // 清理上次打包的文件
    new CleanWebpackPlugin({
      path: path.join(__dirname, 'dist'),
    }),
    new InterpolateHtmlPlugin({
      PUBLIC_URL: 'static', // can modify `static` to another name or get it from `process`
    }),
  ],
  devServer: {
    port: 3000,
    static: path.join(__dirname, 'dist'), // 临时的打包目录（在内存中）
    open: true,
    proxy: {
      '/': {
        target: 'http://localhost:8001',
        changeOrigin: true,
      },
    },
  },
};
