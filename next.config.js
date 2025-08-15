const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  output: 'export', // static export for GitHub Pages
  images: { unoptimized: true },
  basePath: isProd ? '' : '',
  assetPrefix: isProd ? '' : '',
}
