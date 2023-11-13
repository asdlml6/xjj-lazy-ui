const path = require('path');
const glob = require('glob');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// 自动清除打包目录
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const getManyEntry = () => {
    const entry = {};
    const entryFiles = glob.sync('./src/components/*/index.tsx');
    Object.keys(entryFiles).map(index => { 
        const entryFile = entryFiles[index]
        const match =  entryFile.match(/src\/(.*)\/index\.tsx/)
        const pageName = match && match[1]
        const entryName = pageName.split('/')[1];
        entry[entryName] = `./src/${pageName}/index.tsx`
    })
    entry['index'] = `./src/index.ts`;

    return {
        entry
    }
}
const {entry} = getManyEntry();

module.exports = {
    mode: 'production',
    // 单入口的打包方式
    // entry: {
    //     app: [path.join(__dirname, "../src/index.ts")]
    // },
    // output: {
    //     path: path.join(__dirname, '../build'),
    //     filename: 'js/[name].[hash].js',
    //     chunkFilename: 'js/[name].[chunkhash].js',
    //     libraryTarget: "umd"
    // },
    
    // 多入口的打包方式
    entry,
    output: {
        path: path.join(__dirname,"./lib"),
        filename: '[name].js',
        libraryTarget: 'umd',
        library: 'xjj-lazy-ui',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            babelrc: true,
                        }
                    }
                ],
                // 指定需要处理的js文件，与之对应的是exclude（不打包exclude的文件或者目录），exclude的优先级高于 include、test
                include: path.join(__dirname, './src')
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.(sass|scss)$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            },
            {
                test: /\.(png|jpg|jpeg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            outputPath: 'images',
                            publicPath:"../images/"
                        }
                    }
                ]
            }
        ]
    },
    plugins: [ 
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'style/[name].css'
        })
    ],
    devtool: "inline-source-map",
    resolve: {
        alias: {
            componenta: path.join(__dirname, "./src/components"),
            src: path.join(__dirname, "./src")
        },
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
    }
}