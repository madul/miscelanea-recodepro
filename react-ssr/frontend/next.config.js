// Arquivo para mudar algumas configurações do next. No caso, o webpack, para ignorar o fs
// e load de imagens, para conseguir arquivos png, jpeg e svg.

const withCSS = require('@zeit/next-css')
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const nextConfig = {
    webpack: (config, { isServer }) => {
      // Fixes npm packages that depend on `fs` module
      if (!isServer) {
        config.node = {
          fs: 'empty'
        }
      }
      return config
    },
};

module.exports = withPlugins([
    [optimizedImages, {
        handleImages: ['jpeg', 'png', 'svg'],
    }],
    withCSS
    ],
    nextConfig
);

