const isDev = process.env.isLocal === 'true';
const name = '{{page}}';

module.exports = {
    solutions: [
        {
            solution: '@bfun/solution-webpack4-vue2',
            ssr: true,
        },
    ],
    configure: (chain) => {
        chain.merge({
            output: {
                filename: 'js/[name].[hash:8].js',
                publicPath: isDev ? '/' : `//src.example.com/static/${name}/`,
            },
            optimization: {
                splitChunks: {
                    chunks: 'all',
                },
            },
        });
    },
};
