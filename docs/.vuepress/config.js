module.exports = {
  title: 'Innovet IOT All Things Talk',
  description: 'Cursus rond IOT platform van All Things Talk',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Company', link: 'https://vti.sint-rembert.be/' },
      { text: 'License', link: '/LICENSE.md' },
    ],
    sidebar: [
      ['/', 'Home'],
      ['/inleiding/', 'Inleiding'],
      ['/analoge-waarde/', 'Analoge waarde'],
      ['/actuator/', 'actuator'],
      ['/componentenlijst/', 'Componentenlijst']
    ],
    repo: 'https://github.com/KrisWerbrouck1/Innovet-All-Things-Talk-SO.git',
    docsDir: 'docs',
    docsBranch: 'master'
  },
  markdown: {
    lineNumbers: true,
  },
  serviceWorker: true,
  plugins: [
    ['vuepress-plugin-zooming', {
      // selector for images that you want to be zoomable
      // default: '.content img'
      selector: 'img',

      // make images zoomable with delay after entering a page
      // default: 500
      // delay: 1000,

      // options of zooming
      // default: {}
      options: {
        bgColor: 'black',
        zIndex: 10000,
      },
    }],
  ],
}
