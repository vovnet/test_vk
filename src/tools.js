export function shuffle(arr) {
    return arr.sort(function(){
        return Math.random() - 0.5;
    });
}

export function toUppercaseFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function getRandomArray(arr, length) {
    if (arr.length <= length) return arr;

    let result = shuffle(arr);
    return arr.slice(-length);
}

export function getPercent(priv, general, reverse = false) {
    let result = priv / general * 100;
    return parseInt(reverse ? 100 - result : result);
}