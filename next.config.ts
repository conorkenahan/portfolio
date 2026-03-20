import type { NextConfig } from 'next'
import path from 'path'

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  async rewrites() {
    return [
      { source: '/looplab', destination: '/looplab/index.html' },
      { source: '/looplab/', destination: '/looplab/index.html' },
    ]
  },
}

export default nextConfig
