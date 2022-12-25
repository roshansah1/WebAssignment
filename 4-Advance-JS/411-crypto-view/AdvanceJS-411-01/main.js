let searchButton = document.getElementById('search_button');
let searchInput = document.getElementById('search_input');

searchButton.addEventListener('click', () => {
  getCoins()
})

searchInput.addEventListener('keyup', (event) => {
  if(event.keyCode == 13)
  getCoins()
})
getCoins()
function getCoins() {
  let input = searchInput.value;
  fetch(`https://api.coingecko.com/api/v3/search?query=${input}`)
  .then(res => res.json())
  .then((data) => {
       //console.log(data.coins)
       data = data.coins
      let topData = [...data];
      topData = topData.splice(0,100);
      //console.log(topData)
      renderCoins(topData)
  })
}  


function renderCoins(data) {
  let content = document.getElementById('content')
  content.innerHTML = "" 
    for (let i = 0; i < data.length; i++) {
      const singleCoin = data[i];
      const index = i + 1;
      const logo = singleCoin.thumb;
      const name = singleCoin.name;
      const symbol = singleCoin.symbol;
      const coinId = singleCoin.id;
      

      content.innerHTML += `<div class="content_box"><div class="left_content">
      <p> ${index} </p> <img src="${logo}"> <h2> ${name} </h2> <h3> ${symbol} </h3></div>
      <div class="right_content"> <a id="a_tag" href="details.html?id=${coinId}"> More Info </a> </div></div>`
      
    }
    
  }

