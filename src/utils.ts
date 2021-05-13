
// String Helpers
export function capitalize(word: string): string {
    return word[0].toUpperCase() + word.slice(1)
}

// Date Helpers
export const months: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

export function convertDateString(datestring: string): string {
    const date = new Date(datestring)
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
}

console.log(convertDateString("2018-04-03T18:13:55Z"))
