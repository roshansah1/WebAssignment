
let content = document.getElementsByClassName('content')[0];


function aToZ(countries) {
  for (let i = 0; i < countries.length; i++) {
    //console.log(countries[i])
    let div = document.createElement('div');
    div.setAttribute('class', 'box');
    content.appendChild(div);
    div.innerHTML = `<h3>${countries[i].toUpperCase()} </h3>`
  }
}
aToZ(countries);

let mainContent = document.getElementsByClassName('main-content')[0];

let contentTwo = document.createElement('div');
contentTwo.setAttribute('class', 'content-2');
mainContent.appendChild(contentTwo)

function zToA(countries) {
  for (let i = countries.length - 1; i >= 0; i--) {
    let div = document.createElement('div');
    div.setAttribute('class', 'box');
    contentTwo.appendChild(div);
    div.innerHTML = `<h3>${countries[i].toUpperCase()} </h3>`
  }
}
zToA(countries);


let thirdButton = document.getElementsByTagName('button')[2];

thirdButton.addEventListener('mouseup', () => {
  inputName.value = "";
  removePtag();
  thirdButton.style.backgroundColor = "#531ead"
  secondButton.style.backgroundColor = "#895be6"
  firstButton.style.backgroundColor = "#895be6"
  if(contentThree !== null){
    // mainContent.removeChild(contentThree);
    contentThree.style.display = "none";
  }
 
  if (content.style.display == "none") {
    content.style.display = "flex";
    contentTwo.style.display = "none";
  } else {
    content.style.display = "none";
    contentTwo.style.display = "flex";
  }
})


let secondButton = document.getElementsByTagName('button')[1];

secondButton.addEventListener('click', () => {
  inputName.value = "";
  thirdButton.style.backgroundColor = "#895be6"
  secondButton.style.backgroundColor = "#531ead"
  firstButton.style.backgroundColor = "#895be6"
  flag = false;
  getInputValue();

})

/********************************** */

let firstButton = document.getElementsByTagName('button')[0];
let flag = false;
firstButton.addEventListener('click', () => {
  inputName.value = "";
  thirdButton.style.backgroundColor = "#895be6"
  secondButton.style.backgroundColor = "#895be6"
  firstButton.style.backgroundColor = "#531ead"
  flag = true;
  getInputValue();
})


/*************** Getting input value ******************************/
let inputName;
function getInputValue() {
  inputName = document.getElementsByTagName('input')[0];
  inputName.addEventListener("keyup", createDiv)
  inputName.addEventListener('keydown', () => {
    if(mainContent.contains(contentThree)){
      mainContent.removeChild(contentThree);
    }
   
  })
}
function createDiv() {
  let name = inputName.value;
  contentThree = document.createElement('div');
  contentThree.setAttribute('class', 'content-3');
  mainContent.appendChild(contentThree)
  getAllCountries(countries, name);
}
getInputValue()

//************Getting all countries name *******************/
function getAllCountries(countries, startName) {
  startName = startName.toUpperCase();
  let lisOfCountries = [];
  if (startName === "") {
    removePtag();
    content.style.display = "flex";
    mainContent.removeChild(contentThree);
    return;
  } else {
    for (let i = 0; i < countries.length; i++) {
      let countryName = "" + countries[i];
      countryName = countryName.toUpperCase();
      if(flag) {
        if (countryName.startsWith(startName)) {
          lisOfCountries.push(countryName);
        }
      } else {
        if (countryName.includes(startName)) {
          lisOfCountries.push(countryName);
        }
      }
    }

  }
  content.style.display = "none";
  contentTwo.style.display = "none";
  if (lisOfCountries.length > 0) {
    createContentThree(lisOfCountries);
    contentThree.style.display = "flex";
  }

}


//******** crateing content for start with first str and with any str ************/
let contentThree = null;
function createContentThree(countries) {
  for (let i = 0; i < countries.length; i++) {
    //console.log(countries[i])
    let div = document.createElement('div');
    div.setAttribute('class', 'box');
    contentThree.appendChild(div);
    div.innerHTML = `<h3>${countries[i].toUpperCase()} </h3>`;
  }
  let str = inputName.value;
  let totalCountries = countries.length;
  addPtag(str, totalCountries)
}

//*******    no. of countries with corresponding value ******/

function addPtag(str, totalCountries){
  let pTag = document.getElementsByClassName('pTag')[0];
  pTag.innerHTML = `<p style="font-size:medium"> Countries starting with <span style="color:orange">${str}</span> are <span style="color:lightgreen">${totalCountries}</span> </p>`;
}

//***** remove pTag ****/

function removePtag() {
  let pTag = document.getElementsByClassName('pTag')[0];
  pTag.innerHTML = ``;
}


//total countries
let totalCountries = document.getElementById("total_countries");
totalCountries.innerText = countries.length;
