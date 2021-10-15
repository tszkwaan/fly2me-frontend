module.exports = {
    transpileDependencies: ['vuetify'],
    pluginOptions: {
        compression:{
          brotli: {
            filename: '[file].br[query]',
            algorithm: 'brotliCompress',
            include: /\.(js|css|html|svg|json)(\?.*)?$/i,
            minRatio: 0.8,
          },
          gzip: {
            filename: '[file].gz[query]',
            algorithm: 'gzip',
            include: /\.(js|css|html|svg|json)(\?.*)?$/i,
            minRatio: 0.8,
          }
        }
      }
};
