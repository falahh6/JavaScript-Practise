export default class User {
    constructor(name, place) {
        this.name = name;
        this.place = place;
    }
}


export function printName(naam) {
    console.log(`my name is ${naam}`)
}

export function printPlace(place) {
    console.log(`i live in ${place}`);
}