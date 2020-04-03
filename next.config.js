const images = require('remark-images')
const emoji = require('remark-emoji')

const withMDX = require('@zeit/next-mdx')({
  extension: /\.(md|mdx)?$/,
  options:{
    mdPlugins: [images, emoji]
  }
})

const nextServer = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
});

nextServer.target = 'serverless';

module.exports = nextServer;
