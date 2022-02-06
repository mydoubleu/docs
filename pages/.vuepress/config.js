var CONST = require("./const");

module.exports = {
  base: '/docs/',
  lang: 'en-US',
  title: '지식창고',
  description: 'My Personal Wiki',
  
  theme: '@vuepress/theme-default',
  themeConfig: {
    navbar: [
      CONST.CentOS,
      CONST.SpringBoot,
      CONST.ETC,
    ],
    sidebar: {
      '/centos7': [
        CONST.CentOS
      ],
      '/spring-boot': [
        CONST.SpringBoot
      ],
      '/etc': [
        CONST.ETC
      ]
    },
  },
}
