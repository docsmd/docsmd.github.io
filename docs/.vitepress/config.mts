import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "DSA Docs",
  description: "DSA Documents",
  base: '/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        collapsed: false,
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ]
      },
      {
        text: 'String',
        collapsed: false,
        items: [
          { text: 'Sliding Window', link: '/dsa/string/sliding-window/test' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/codeonstorm' }
    ]
  }
})
