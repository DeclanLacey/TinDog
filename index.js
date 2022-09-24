import {DogInfo} from "/Dog.js"
import {dogs} from "/data.js"

const likeBadge = document.getElementById("like-badge")
const dislikeBadge = document.getElementById("dislike-badge")
const likeBtn = document.getElementById("like-btn")
const dislikeBtn = document.getElementById("dislike-btn")
let dogProfileSection = document.getElementById("dog-profile-section")

let dogArray = ["1", "2", "3"]
let endOfFeed = false

let firstDog = new DogInfo(dogs[0])
dogProfileSection.innerHTML = firstDog.getDogHtml()

function getNewDog() {
    let newDog = new DogInfo(dogs[dogArray.shift()])
    dogProfileSection.innerHTML = newDog.getDogHtml()
        
}

function checkForEnd() {
    if (dogArray.length <= 2) {
        endOfFeed = true
    }
}

likeBtn.addEventListener("click", function() {
    if (!endOfFeed) {
        checkForEnd()
        getNewDog()
        likeBtn.disabled = true
        likeBadge.style.display = "block"
            setTimeout(function() {
                    likeBadge.style.display = "none"
                    likeBtn.disabled = false
            }, 700)
    }
})

dislikeBtn.addEventListener("click", function() {
    if (!endOfFeed) {
        checkForEnd()
        getNewDog()
        dislikeBtn.disabled = true
        dislikeBadge.style.display = "block"
            setTimeout(function() {
                dislikeBadge.style.display = "none"
                dislikeBtn.disabled = false
        }, 1000)
    }
})