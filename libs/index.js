/**
 * Docsify config
 */
gitalkConfig = {
  clientID: 'c2295954961678f4f65d',
  clientSecret: '03454ccdc6312e28d7ab2d80d496acacf1becf7e',
  repo: 'cocos-creator-tutorial',
  owner: 'potato47',
  admin: ['potato47'],
  distractionFreeMode: false
},
window.$docsify = {
  name: 'cocos-creator-tutorial',
  repo: 'https://github.com/potato47/cocos-creator-tutorial',
  auto2top: true,
  loadSidebar: true,
  subMaxLevel: 2,
  homepage: 'README.md',
  ga: 'UA-122081516-1',
  search: {
    noData: {
      '/': '找不到结果!'
    },
    paths: 'auto',
    placeholder: {
      '/': '搜索'
    }
  },
  plugins: [
    function(hook, vm) {
      hook.beforeEach(function (html) {
        var url = 'https://github.com/potato47/cocos-creator-tutorial/blob/master/' + vm.route.file;
        var editHtml = '[📝 EDIT DOCUMENT](' + url + ')\n';
        
        return editHtml + html;
      })

      hook.doneEach(function(){
        var label, domObj, main, divEle, gitalk;
        label = vm.route.path.split('/').join('');
        domObj = Docsify.dom;
        main = domObj.getNode("#main");

        /**
         * render gittalk
         */
        Array.apply(null,document.querySelectorAll("div.gitalk-container")).forEach(function(ele){ele.remove()});
        divEle = domObj.create("div");
        divEle.id = "gitalk-container-" + label;
        divEle.className = "gitalk-container";
        divEle.style = "width: " + main.clientWidth + "px; margin: 0 auto 20px;";
        domObj.appendTo(domObj.find(".content"), divEle);
        gitalk = new Gitalk(Object.assign(gitalkConfig, {id: !label ? "home" : label}))
        gitalk.render('gitalk-container-' + label)
      })
    }
  ]
}