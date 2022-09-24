import {dogs} from "/data.js"

class DogInfo {
    constructor(data) {
        Object.assign(this, data)
    }
    
    getDogHtml() {
        const {name, avatar, age, bio, hasBeenSwiped, hasBeenLiked} = this
        return `
            <img src="${avatar}" class="dog-img">
            <div class="dog-name-age"> ${name}, ${age} </div>
            <div class="dog-bio"> ${bio} </div>
        `
        hasBeenSwiped = true
    }
}

export {DogInfo}