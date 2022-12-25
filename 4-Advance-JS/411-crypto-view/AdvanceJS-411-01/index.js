let trendingCoinsSlideshow = document.getElementById('trending_coins_slideshow')


function scrollAnimation() {
  let count = 0
  let flag = true 
  setInterval(() => {
     
      const endPoint =  trendingCoinsSlideshow.scrollWidth - trendingCoinsSlideshow.offsetWidth
      if (flag) {
          count += 1
          if (count === endPoint) {
              flag = false
          }
      } else {
          count -= 1
          if (count === 0) {
              flag = true
          }
      }
      trendingCoinsSlideshow.scrollTo(count, 0)
  }, 15)

}

  function bitcoinPrice(){
    
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr')
    .then(res => res.json())
    .then((data) => {
      
        const conversionRate = data.bitcoin.inr;
        trendingCoins(conversionRate)
    })
  }
  bitcoinPrice()
  
  function trendingCoins(conversionRate) {
    fetch('https://api.coingecko.com/api/v3/search/trending')
    .then(res => res.json())
    .then((data) => {
        
        for (let i = 0; i < data.coins.length; i++) {
            const singleCoin = data.coins[i];
            const index = i + 1;
            const logo = singleCoin.item.small;
            const name = singleCoin.item.name;
            const symbol = singleCoin.item.symbol;
            const coinId = singleCoin.id;
            const price = Math.round (singleCoin.item.price_btc * conversionRate * 10000) / 10000;
      
            let content = document.getElementById('trending_coins_slideshow')

            content.innerHTML += `<div class="box"> <img src="${logo}"> <div class="right_box"> <h1> ${name} (${symbol})</h1> <p> ₹  ${price}  </p> </div> </div>`
      
          }
          scrollAnimation()
    })
  }


 