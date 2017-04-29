const PORT = 2333
const SRC = 'src'
const DIST = 'dist'
const ENTRY = 'src/index.js'
const TEMPLATE = 'src/index.html'
const TITLE = 'Cloudpense'
const CDN = '/h5dev/dist/'
const ENV = process.env.NODE_ENV === 'development' ? 'dev' : 'prod'

module.exports = {
  PORT,
  SRC,
  DIST,
  ENTRY,
  TEMPLATE,
  TITLE,
  CDN,
  ENV
}
