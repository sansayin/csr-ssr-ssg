const NextJSObfuscatorPlugin = require("nextjs-obfuscator");
module.exports = {
  webpack: (config, { dev }) => {
    if (!dev) {
      config.plugins.push(new NextJSObfuscatorPlugin({}))
    }

    return config;
  },
  env: {
    limits: process.env.LIMITS,
  },
  async headers() {
    return [
      {
        // Only work in SSR(Server Side Render ~ CGI/ASP/PHP) mode
        source: '/index_ssr',
        headers: [
          {
            key: 'x-custom-header',
            value: 'my custom header value',
          },
          {
            key: 'x-another-custom-header',
            value: 'my other custom header value',
          },
        ],
      },
    ]
  },
}
