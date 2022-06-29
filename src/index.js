// write your code here
function fetchLoad() {
    fetch("http://localhost:3000/ramens")
        .then((response) => response.json())
        .then((obj) => { displayRamen(obj) })
}


function displayRamen(ramens) {

    ramens.forEach(element => {
        let img = document.createElement("img")
        img.src = element.image
        menu.appendChild(img)

        img.addEventListener("click", () => {
            let bigPic = document.querySelector(".detail-image")
            let imgName = document.querySelector(".name")
            let imgPlace = document.querySelector(".restaurant")
            let rate = document.querySelector("#rating-display")
            let comment = document.querySelector("#comment-display")
            bigPic.src = element.image
            imgName.innerText = element.name
            imgPlace.innerText = element.restaurant
            rate.innerText = element.rating
            comment.innerText = element.comment
        })
    });
}

document.addEventListener("DOMContentLoaded", fetchLoad)
const newRamenForm = document.getElementById("new-ramen").addEventListener("submit", (newRamen))
const menu = document.getElementById("ramen-menu")


function newRamen(e) {
    e.preventDefault()
    let newRamenObj = {
        image: e.target.image.value,
        restaurant: e.target.restaurant.value,
        name: e.target.name.value,
        comment: e.target.comment.value,
        rating: e.target.rating.value,
    }

    const configurationObject = {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(newRamenObj)
    };

    fetch("http://localhost:3000/ramens", configurationObject)
        .then((response) => response.json())
        .then((obj) => {
            let img = document.createElement("img")
            menu.appendChild(img)
            img.src = obj.image
        })
        .then(() => document.location.reload())



}
