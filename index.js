    /*
h1 = document.getElementsByTagName("h1");
for (let i = 0; i < im.length; i++){
    h1[i].innerText = "Focus!";
}
h2 = document.getElementsByTagName("h2");
for (let i = 0; i < im.length; i++){
    h2[i].innerText = "Focus!";
}

h3 = document.getElementsByTagName("h3");
for (let i = 0; i < im.length; i++){
    h3[i].innerText = "Focus!";
}

h4 = document.getElementsByTagName("h4");
for (let i = 0; i < im.length; i++){
    h4[i].innerText = "Focus!";
}

h5 = document.getElementsByTagName("h5");
for (let i = 0; i < im.length; i++){
    h5[i].innerText = "Focus!";
}

h6 = document.getElementsByTagName("h6");
for (let i = 0; i < im.length; i++){
    h1[i].innerText = "Focus!";
}

p = document.getElementsByTagName("p");
for (let i = 0; i < im.length; i++){
    p[i].innerText = "Focus!";
}

a = document.getElementsByTagName("a");
for (let i = 0; i < im.length; i++){
    a[i].innerText= "Focus!";
}
*/
const body = document.getElementsByTagName("body")[0];
const tex = document.createElement("h1");
const tex2= document.createElement("h2");
const block1 = document.createElement("div");
const block2 = document.createElement("div");
body.innerHTML ="";
body.appendChild(block1);
body.appendChild(block2);
tex.innerHTML="Look! a cute dog";
tex2.innerHTML="Now back to work";
fetch(
    'https://dog.ceo/api/breeds/image/random'
    
  )
    .then(data => data.json())
    .then(function (data){
        const im = document.createElement("img");
        im.src = data.message;
        block1.appendChild(im);
        block1.classList.add("pos")
    })
    block2.appendChild(tex);
    block2.appendChild(tex2);

    

