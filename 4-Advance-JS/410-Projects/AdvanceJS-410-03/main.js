let input = document.getElementById('input');

input.addEventListener('keyup', (e) => {
    e.preventDefault()
    let parent = document.getElementById('content');
    parent.innerHTML = ""
   
    let inputName = e.target.value;
    
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + inputName)
        .then(res => res.json())
        .then((data) => {
            console.log(inputName)
            console.log(data)
            let parent = document.getElementById('content');
            if(inputName == ""){
                  parent.innerHTML = ""
                  return
            }
            for (let i = 0; i < data.meals.length; i++) {
                let image = data.meals[i].strMealThumb;
                let recipe = data.meals[i].strSource;
                let box = document.createElement('div');
                box.setAttribute('class', 'box')
                box.innerHTML = `<a href="${recipe}" target="_blank"><img src="${image}"></a>`
                parent.appendChild(box)
            //     input.addEventListener('keydown', () => {
            //         box.remove();
            //   })
            }
        
        })
        
})

