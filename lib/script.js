console.log("hello world!")
let sgfilms = document.querySelectorAll(".sgfilm")
let filmTitle = document.querySelector("#film-title")
let filmDirector = document.querySelector("#film-director")
let filmDate = document.querySelector("#film-release-date")
let filmDescription = document.querySelector("#film-description")
let modal = document.querySelector(".modal")
let close = document.querySelector(".close")

for (let i = 0; i < sgfilms.length; i++) {

    sgfilms[i].addEventListener("click", function() {
        let id = sgfilms[i].dataset.id
        console.log(sgfilms[i].style.background)
        modalPopUp(id)
    })
}

function modalPopUp(id) {
    fetch('https://ghibliapi.herokuapp.com/films/' + id)
        .then(res => res.json())
        .then(res => modalInfo(res))   
}

function modalInfo(res) {
    console.log(res.title)
    filmTitle.innerHTML = res.title
    filmDirector.innerHTML = res.director
    filmDate.innerHTML = res["release_date"]
    filmDescription.innerHTML = res.description
    modal.classList.toggle("visible")
}

close.addEventListener("click", function(){
    modal.classList.toggle("visible")

})