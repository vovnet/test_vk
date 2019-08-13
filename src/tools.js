export function shuffle(arr) {
    return arr.sort(function(){
        return Math.random() - 0.5;
    });
}

export function toUppercaseFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}