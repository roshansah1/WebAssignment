
let input = document.getElementById('input');
let emojiBox = document.getElementById('emoji-box');
let box = document.getElementsByClassName('box')[0];
init();

function init() {
  renderEmojis();
  input.addEventListener('keyup', renderEmojis)
}

function renderEmojis() {
  let html = "";
  let emojiListCopy = [...emojiList];
  let inputValue = input.value;
  emojiListCopy = emojiListCopy.filter((emoji) => {
    let flag = false;
    for (let i = 0; i < emoji.tags.length; i++) {
      if (emoji.tags[i].toUpperCase().startsWith(inputValue.toUpperCase())) {
        flag = true
      }
    }
   if(emoji.aliases[0].toUpperCase().includes(inputValue.toUpperCase())){
      flag = true
    }
    if(emoji.description.toUpperCase().includes(inputValue.toUpperCase())) {
      flag = true
    }
    return flag;
  })
  for (let i = 0; i < emojiListCopy.length; i++) {
    let newAliases = emojiListCopy[i].aliases[0].replaceAll("_", " ");
    html += `<div class="box"> <div class="emojiName"><span style="font-size:300%">${emojiListCopy[i].emoji}</span> <span style="font-size:150%; text-transform: capitalize;">${newAliases}</span></div> <div class="desc"><p>${emojiListCopy[i].description}</p></div> </div>`
  }
  emojiBox.innerHTML = html;

}
