fetch(
        'https://dog.ceo/api/breeds/image/random'

    )
    .then(data => data.json())
    .then(function (data) {
        const im = document.getElementsByTagName("img")[0];
        const tex = document.getElementsByTagName("h1")[0];
        tex.innerHTML = "Here's a cute dog";
        im.src = data.message;
        im.style = "width: 400px";
    })

    
var x = Math.floor(Math.random() * 3);
fetch("https://api.jokes.one/jod/categories")
    .then(data => data.json())
    .then(function (data) {
        var category = data.contents.categories[x].name;
        fetch("https://api.jokes.one/jod?category=" + category)
            .then(data => data.json())
            .then(function (data) {
                const joketext = data.contents.jokes[0].joke.text;
                const title = document.createElement("h2");
                const joke = document.createElement("h3");
                const body = document.getElementsByTagName("body")[0];
                title.innerHTML = " And here's a joke";
                if (data.success.total == 1) {
                    joke.innerHTML = joketext;
                } else {
                    joke.innerHTML = "Wa77l w barra";
                }
                body.appendChild(title);
                body.appendChild(joke);

            })
    })