const postListsElm = document.getElementById("post-lists");

axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6").then((res) => {
    const posts = res.data;

    posts.forEach((post) => {
        postListsElm.innerHTML += `
        <div class="col">
            <div>
                <img class="pin" src="./img/pin.svg">
                <img class="photo" src="${post.url}"> 
            </div>
            <div class="text-card">
                <p>${post.title}</p>
            </div>
        </div>
        `;
    })

    const cards = document.querySelectorAll(".col")
    
    cards.forEach((card) => {

        card.addEventListener("click", () => {
            const cardImage = card.querySelector("p").innerHTML;
            console.log(cardImage);
        })
    })
});

