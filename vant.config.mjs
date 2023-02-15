export default {
  name: '有爱wx-h5-fontsize-fixed',
  build: {
    css: {
      preprocessor: 'less',
    },
    site: {
      publicPath: '/wx-h5-fontsize-fixed/',
    },
  },
  site: {
    title: '有爱wx-h5-fontsize-fixed',
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
