//const webpack = require('webpack')
const withCSS = require('@zeit/next-css')
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
//const path = require('path');
//const isDevelopment = process.env.NODE_ENV === 'development'
//const isProduction = process.env.NODE_ENV === 'production';

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




/* const withCss = require('@zeit/next-css')

module.exports = withCss({
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty'
      }
    }
    return config
  }
})
 */
/* 

module.exports = withCss()



const webpack = require('webpack')
const withCSS = require('@zeit/next-css')
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const path = require('path');
const isDevelopment = process.env.NODE_ENV === 'development'
const isProduction = process.env.NODE_ENV === 'production';

const nextConfig = {
    webpack: (config, { dev }) => {
        config.plugins.push(
            new webpack.EnvironmentPlugin(process.env),
        );
        
        config.resolve.alias['components'] = path.join(__dirname, 'components')
        config.resolve.alias['static'] = path.join(__dirname, 'static')

        return config;
    },
};

module.exports = withPlugins([
    [optimizedImages, {
        handleImages: ['jpeg', 'png'],
    }],
    withCSS
    ],
    nextConfig
); */