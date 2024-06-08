const input = document.querySelector("#input");
const result = document.querySelector("#result");
const button = document.querySelector("#button");
const list = document.querySelectorAll("li");

input.addEventListener("input", function() {
    const searchInput = input.value.toLowerCase().trim();
    for (let fruit of list) {
        const fruitText = fruit.innerText.toLowerCase();
        if(fruitText.includes(searchInput)) {
            fruit.style.display = "list-item"
        } else {
            fruit.style.display = "none"
        }
    }
})