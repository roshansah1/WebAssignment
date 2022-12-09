let button = document.getElementById('button');

button.addEventListener('click', (e) => {
    e.preventDefault()

    var input = document.getElementById('input').value;
    fetch('https://www.dictionaryapi.com/api/v3/references/learners/json/' + input + '?key=75466890-2d5c-4a38-8dc2-b058d2c8de44')
        .then(res => res.json())
        .then((data) => {
            console.log(data[0].meta.id.charAt(0))
            let parent = document.getElementById('result_container');
            parent.innerHTML = `<p> ${data[0].shortdef[0]} </p>
                            <audio controls>
                            <source src="https://media.merriam-webster.com/audio/prons/en/us/mp3/${data[0].meta.id.charAt(0)}/${data[0].hwi.prs[0].sound.audio}.mp3">
                            </audio>`
        })

})