const isDev = process.env.isLocal === 'true';
const name = '{{page}}';

module.exports = {
    solutions: [ '@bfun/solution-webpack4-vue2' ],
    configure: {
        output: {
            filename: 'js/[name].[hash:8].js',
            publicPath: isDev ? '/' : `//src.example.com/static/${name}/`,
        },
    },
};
