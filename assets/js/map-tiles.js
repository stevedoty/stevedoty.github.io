var array = [
  {
    backgroundImg: "images/pic04.jpg",
    title: "E-Commerce",
    screenShot: "images/crwn-clothing1.png",
    gH: "https://stevedoty.github.io/crwn-clothing/",
    gHpages: "https://github.com/stevedoty/crwn-clothing",
  },
  {
    backgroundImg: "images/pic04.jpg",
    title: "E-Commerce",
    screenShot: "images/crwn-clothing1.png",
    gH: "https://stevedoty.github.io/crwn-clothing/",
    gHpages: "https://github.com/stevedoty/crwn-clothing",
  },
  {
    backgroundImg: "images/pic04.jpg",
    title: "E-Commerce",
    screenShot: "images/crwn-clothing1.png",
    gH: "https://stevedoty.github.io/crwn-clothing/",
    gHpages: "https://github.com/stevedoty/crwn-clothing",
  },
  {
    backgroundImg: "images/pic04.jpg",
    title: "E-Commerce",
    screenShot: "images/crwn-clothing1.png",
    gH: "https://stevedoty.github.io/crwn-clothing/",
    gHpages: "https://github.com/stevedoty/crwn-clothing",
  }
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
