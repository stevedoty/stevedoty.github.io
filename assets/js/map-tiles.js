var array = [
  {
    backgroundImg: "images/pic09.jpg",
    title: "Sorting Animator",
    screenShot: "",
    gH: "https://stevedoty.github.io/sorting-animator/",
    gHpages: "https://github.com/stevedoty/sorting-animator",
  },
  {
    backgroundImg: "images/pic04.jpg",
    title: "E-Commerce",
    screenShot: "images/crwn-clothing1.png",
    gH: "https://stevedoty.github.io/crwn-clothing/",
    gHpages: "https://github.com/stevedoty/crwn-clothing",
  },
  {
    backgroundImg: "images/pic01.jpg",
    title: "Rolodex",
    screenShot: "",
    gH: "https://stevedoty.github.io/Monsters-Rolodex/",
    gHpages: "https://github.com/stevedoty/Monsters-Rolodex",
  },
  {
    backgroundImg: "images/pic02.jpg",
    title: "HTML Games",
    screenShot: "images/crwn-clothing1.png",
    gH: "https://stevedoty.github.io/html-games/",
    gHpages: "https://github.com/stevedoty/html-games",
  },
  {
    backgroundImg: "images/pic03.jpg",
    title: "Davad Leather",
    screenShot: "images/crwn-clothing1.png",
    gH: "https://stevedoty.github.io/davad-leather/",
    gHpages: "https://github.com/stevedoty/davad-leather",
  },
  {
    backgroundImg: "images/pic04.jpg",
    title: "Stock App",
    screenShot: "images/crwn-clothing1.png",
    gH: "https://stevedoty.github.io/stock-app/",
    gHpages: "https://github.com/stevedoty/stock-app",
  },
  {
    backgroundImg: "images/pic08.jpg",
    title: "Todo App",
    screenShot: "images/crwn-clothing1.png",
    gH: "https://stevedoty.github.io/phone-todo/",
    gHpages: "https://github.com/stevedoty/phone-todo",
  },
  {
    backgroundImg: "images/pic04.jpg",
    title: "E-Commerce",
    screenShot: "images/crwn-clothing1.png",
    gH: "https://stevedoty.github.io/crwn-clothing/",
    gHpages: "https://github.com/stevedoty/crwn-clothing",
  },
  {
    backgroundImg: "images/pic05.jpg",
    title: "Chat App",
    screenShot: "images/crwn-clothing1.png",
    gH: "https://stevedoty.github.io/crwn-clothing/",
    gHpages: "https://github.com/stevedoty/crwn-clothing",
  },
  {
    backgroundImg: "images/pic06.jpg",
    title: "Video App",
    screenShot: "images/crwn-clothing1.png",
    gH: "https://stevedoty.github.io/crwn-clothing/",
    gHpages: "https://github.com/stevedoty/crwn-clothing",
  },
];


function createArticle(item, i){
  var newTile = document.createElement('article');
  newTile.class = "style6";
  var s = '<span class="image"><img src="'+item.backgroundImg+'" alt="" /></span>    <a><h2>'+item.title+'</h2><div class="content"><img id="project_screenshot" src="'+item.screenShot+'" alt="" /><p>JS TS <b>|</b> CSS SASS <b>|</b> HTML <b>|</b> REACT REDUX <b>|</b> FIREBASE STRIPE <b>|</b> GIT CLI API</p><button class="tile-button" onclick="goTo('+item.gH+')">Run</button><button class="tile-button" onclick="goTo('+item.gHpages+')">Source</button></div></a>';
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