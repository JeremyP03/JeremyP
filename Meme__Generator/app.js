document.addEventListener("DOMContentLoaded", function(){
    const formInp = document.getElementById("form_input");
    const memeList = document.querySelector(".memes");
    formInp.addEventListener("submit", function(event){
        event.preventDefault();
    const memeSec = document.createElement('li');
    memeSec.classList.add("img_meme");


    const topTextBox = document.createElement('div');
    topTextBox.classList.add("text", "top");
    topTextBox.innerText = document.getElementById("textT").value;

    const bottTextBox = document.createElement('div');
    bottTextBox.classList.add("text", "bottom");
    bottTextBox.innerText = document.getElementById("textB").value;

    var topText = document.getElementById("textT");
    const inputUrl = document.getElementById("image_URL").value, src = inputUrl, img = document.createElement('img');
    img.src = src;

    const removeBox = document.createElement('div');
    removeBox.classList.add("X_Delete");
    removeBox.innerText = "X";
    removeBox.style.color = "grey";

    memeList.appendChild(memeSec);
    memeSec.appendChild(img);
    memeSec.appendChild(topTextBox);
    memeSec.appendChild(bottTextBox);
    memeSec.appendChild(removeBox);
    formInp.reset();


    });

    function remove(event){
        event.target.parentNode.remove();
    }

    memeList.addEventListener('click', remove, false);
});
