export function randomItems(array) {
    return array.sort(() => Math.random() - 0.5);

    // let currentIndex = array.length, temporaryValue, randomIndex;

    // while (0 !== currentIndex) {

    //     randomIndex = Math.floor(Math.random() * currentIndex);
    //     currentIndex -= 1;

    //     temporaryValue = array[currentIndex];
    //     array[currentIndex] = array[randomIndex];
    //     array[randomIndex] = temporaryValue;
    // }

    // return array;
}
