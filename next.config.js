/** @type {import('next').NextConfig} */
const nextConfig = {
  // 禁用页面缓存
  generateEtags: false,
  // 在开发模式下禁用缓存
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 0,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 2,
  }
}

module.exports = nextConfig
