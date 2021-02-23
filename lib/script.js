console.log("hello world!")
let sgfilms = document.querySelectorAll(".sgfilm")

// let id = "2baf70d1-42bb-4437-b551-e5fed5a87abe"
// res.title + " " + res.director + " " + res["release_date"] + " " + res.description
// fetch('https://ghibliapi.herokuapp.com/films/' + id)
//     .then(res => res.json())
//     .then(res => console.log(res["release_date"]))


for (let i = 0; i < sgfilms.length; i++) {

    sgfilms[i].addEventListener("click", function() {
        let id = sgfilms[i].dataset.id
        modalPopUp(id)
    })
    // console.log(sgfilms[i].dataset.id)
}

function modalPopUp(id) {
    console.log(id)
    fetch('https://ghibliapi.herokuapp.com/films/' + id)
        .then(res => res.json())
        .then(res => modalInfo(res))   
}

function modalInfo(res) {
    console.log(res.director)
}