var path = require("path");

module.exports = {
  entry: "./src/index.tsx", // входная точка - исходный файл
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
  },
  output: {
    path: path.resolve(__dirname, "./dist"), // путь к каталогу выходных файлов - папка public
    filename: "index.js", // название создаваемого файла
  },
  module: {
    rules: [
      //загрузчик для jsx
      {
        test: /\.(js|ts)x?$/, // определяем тип файлов
        exclude: /(node_modules)/, // исключаем из обработки папку node_modules
        loader: "babel-loader", // определяем загрузчик
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"], // используемые плагины
        },
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
