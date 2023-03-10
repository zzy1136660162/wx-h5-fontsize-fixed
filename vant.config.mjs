export default {
  name: 'wx-h5-fontsize-fixed',
  build: {
    packageManager: 'pnpm',
    extensions: {
      esm: '.mjs',
    },
    css: {
      preprocessor: 'less',
      removeSourceFile: true,
    },
    site: {
      publicPath: '/wx-h5-fontsize-fixed/',
    },
  },
  site: {
    title: 'wx-h5-fontsize-fixed',
    logo: 'https://fastly.jsdelivr.net/npm/@vant/assets/logo.png',
    nav: [
      {
        title: '开发指南',
        items: [
          {
            path: 'home',
            title: '介绍',
          },
          {
            path: 'quickstart',
            title: '快速上手',
          },
        ],
      },
      {
        title: '基础组件',
        items: [
          {
            path: 'fontsize-fixed',
            title: 'FontsizeFixed 字体固定',
          },
        ],
      },
    ],
  },
};
