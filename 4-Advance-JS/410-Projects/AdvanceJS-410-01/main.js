let button = document.getElementById('button');

button.addEventListener('click', (e) => {
    e.preventDefault()

    var input = document.getElementById('input').value;
    fetch('https://api.github.com/search/users?q=' + input)
        .then(res => res.json())
        .then((data) => {
            return data;
        })
        .then((item) => {
            for (let i = 0; i < item.items.length; i++) {
                let parent = document.getElementById('parent');
                let items = item.items[i];
                let box = document.createElement('div');
                box.setAttribute('class', 'box')
                box.innerHTML = `
            <div class="image">
            <img src="${items.avatar_url}">
            </div>
            <div class="name_profile">
            <p> ${items.login} </p>
            <a href="${items.html_url}" target="_blank"> Visit profile </a>
            </div>`
                parent.appendChild(box);
                button.addEventListener('mousedown', () => {
                    let del = document.getElementsByClassName('box')[0];
                    del.remove();
                })
            }
        })
        .catch(err => console.error(err));
})


let clear = document.getElementById('clear');

clear.addEventListener('click', () => {
    let parent = document.getElementById('parent');
    let input = document.getElementById('input');
    parent.innerHTML = "";
    input.value = "";
})






