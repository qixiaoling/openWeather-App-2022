
export function createDateString (timeStamp) {
    const day = new Date (timeStamp * 1000);//seconds to milliseconds
    return day.toLocaleDateString('nl-NL', {weekday: "long"});//translate to Maandag
}