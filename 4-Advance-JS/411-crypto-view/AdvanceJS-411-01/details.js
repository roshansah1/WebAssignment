







function getCoinDetails() {
    const url_string = window.location.href;
    const url_obj = new URL(url_string);
    const params = new URLSearchParams(url_obj.search);
    if (!params.has('id')) {
        window.location.href = "/";
    }
    fetch(`https://api.coingecko.com/api/v3/coins/${params.get('id')}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`)
        .then(res => res.json())
        .then((data) => {
            console.log(data)
            fetch(`https://api.coingecko.com/api/v3/coins/${params.get('id')}/market_chart?vs_currency=inr&days=1&interval=hourly`)
                .then(res => res.json())
                .then((data) => {
                    renderChart(data)
                })
            const name = `${data.name} (${data.symbol.toUpperCase()})`;
            const description = data.description.en;
            const logo = data.image.large;

            const inr = data.market_data.current_price.inr;
            const usd = data.market_data.current_price.usd;
            const eur = data.market_data.current_price.eur;
            const gbp = data.market_data.current_price.gbp;

            let parent = document.getElementById('detail_content')

            parent.innerHTML = ` <img src="${logo}">
            <div class="right_detail_content">
                <h2> ${name} </h2>
                <div class="price_list">
                    <p>₹ ${inr}</p>
                    <p>$ ${usd}</p>
                    <p>€ ${eur}</p>
                    <p>£ ${gbp}</p>
                </div>
                <div class="description">
                    <h3> Description: </h3>
                    <p> ${description} </p>
                </div>
            </div>`
        })
}

getCoinDetails()

function renderChart(data) {
    const ctx = document.getElementById('myChart');
    
    let prices = data.prices
    console.log(prices)
    let timeStamp = []
    let price_inr = []

    for (let i = 0; i < prices.length; i++) {
        console.log(prices[i])

        let date = new Date(prices[i][0])
        let hours = date.getHours()
        let minutes = date.getMinutes()
         if(hours < 10){
            hours = "0"+hours
         }
         if(minutes < 10){
            minutes = "0"+minutes
         }
        timeStamp.push(`${hours}:${minutes}`)
        price_inr.push(prices[i][1])
    }

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: timeStamp,
            datasets: [{
                label: 'Price (in INR)',
                data: price_inr,
                borderColor: '#14213D',
                tension: 0.35,
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: false,
                }
            }
        }
    });
}