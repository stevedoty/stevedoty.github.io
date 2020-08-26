var array = [
  {
    summary:"Visualization of sorting algorithms",
    backgroundImg: "images/pic09.jpg",
    title: "Sorting Animator",
    screenShot: "",
    gH: "https://stevedoty.github.io/sorting-animator/",
    gHpages: "https://github.com/stevedoty/sorting-animator",
  },
  {
    summary:"E-commerce Website",
    backgroundImg: "images/pic04.jpg",
    title: "Crown Clothing",
    screenShot: "images/crwn-clothing1.png",
    gH: "https://stevedoty.github.io/crwn-clothing/",
    gHpages: "https://github.com/stevedoty/crwn-clothing",
  },
  {
    summary:"Search engine application",
    backgroundImg: "images/pic01.jpg",
    title: "Rolodex",
    screenShot: "images/monsters-rolodex1.png",
    gH: "https://stevedoty.github.io/Monsters-Rolodex/",
    gHpages: "https://github.com/stevedoty/Monsters-Rolodex",
  },
  {
    summary:"Various games written in HTML & JS",
    backgroundImg: "images/pic02.jpg",
    title: "HTML Games",
    screenShot: "",
    gH: "https://stevedoty.github.io/html-games/",
    gHpages: "https://github.com/stevedoty/html-games",
  },
  {
    summary:"E-commerce website",
    backgroundImg: "images/pic03.jpg",
    title: "Davad Leather",
    screenShot: "",
    gH: "https://stevedoty.github.io/davad-leather/",
    gHpages: "https://github.com/stevedoty/davad-leather",
  },
  {
    summary:"Stock tool for share/price ratio",
    backgroundImg: "images/pic04.jpg",
    title: "Stock App",
    screenShot: "images/stock-app1.png",
    gH: "https://stevedoty.github.io/stock-app/",
    gHpages: "https://github.com/stevedoty/stock-app",
  },
  {
    summary:"Phone todo/note application",
    backgroundImg: "images/pic08.jpg",
    title: "Todo App",
    screenShot: "",
    gH: "https://stevedoty.github.io/phone-todo/",
    gHpages: "https://github.com/stevedoty/phone-todo",
  },
  {
    summary:"Boilerplate summary",
    backgroundImg: "images/pic04.jpg",
    title: "Boilerplate",
    screenShot: "",
    gH: "https://stevedoty.github.io/crwn-clothing/",
    gHpages: "https://github.com/stevedoty/crwn-clothing",
  },
  {
    summary:"Messaging application",
    backgroundImg: "images/pic05.jpg",
    title: "Chat App",
    screenShot: "",
    gH: "https://stevedoty.github.io/crwn-clothing/",
    gHpages: "https://github.com/stevedoty/crwn-clothing",
  },
  {
    summary:"Video call application",
    backgroundImg: "images/pic06.jpg",
    title: "Video App",
    screenShot: "",
    gH: "https://stevedoty.github.io/crwn-clothing/",
    gHpages: "https://github.com/stevedoty/crwn-clothing",
  },
];


function createArticle(item, i){
  var newTile = document.createElement('article');
  newTile.className = "style" + ((i % 6) + 1);
  var s = '<span class="image"><img src="'+item.backgroundImg+'" alt="" /></span>    <a><h2>'+item.title+'</h2><div class="content"><img id="project_screenshot" src="'+item.screenShot+'" alt="" /><p>'+item.summary+'</p><button class="tile-button" onclick="goTo('+item.gH+')">Run</button><button class="tile-button" onclick="goTo('+item.gHpages+')">Source</button></div></a>';
  newTile.innerHTML = s;
  return newTile;
}

function renderArticleTiles(){
  var toAdd = document.querySelector("#tile-gallery");
  array.forEach((item, i) => {
    toAdd.appendChild( createArticle(item, i) );
  });
}
renderArticleTiles();

// '<article class="style4"><span class="image"><img src="'+images/pic04.jpg+'" alt="" /></span><a><h2>'+E-Commerce+'</h2><div class="content"><img id="project_screenshot" src="images/crwn-clothing1.png" alt="" /><p>JS TS <b>|</b> CSS SASS <b>|</b> HTML <b>|</b> REACT REDUX <b>|</b> FIREBASE STRIPE <b>|</b> GIT CLI API</p><button class="tile-button" onclick="goTo(''+https://stevedoty.github.io/crwn-clothing/+'')">Run</button><button class="tile-button" onclick="goTo(''+https://github.com/stevedoty/crwn-clothing+'')">Source</button></div></a></article>'
