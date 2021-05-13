
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

export function since(datestring: string): string {
    const today = new Date()
    const pastDate = new Date(datestring)

    const daysSince: number = ((today.getTime() - pastDate.getTime()) / (1000 * 3600 * 24))

    let since: string = '';
    switch (true) {
        case (daysSince < 0):
            since = `Payment not yet made`
            break
        case (daysSince.toFixed(0) === "0"):
            since = `today`
            break
        case (daysSince > 1 && daysSince < 30):
            since = `${daysSince.toFixed(0)} day${daysSince < 2 ? '': 's' } ago`
            break
        case (30 <= daysSince && daysSince < 365 ):
            since = `${(daysSince / 30).toFixed(0) } month${(daysSince / 30) < 2 ? '': 's' } ago`
            break
        case (daysSince >= 365):
            since = `Over ${(daysSince / 365).toFixed(0)} year${(daysSince / 365) < 2 ? '': 's' } ago`
            break
    }

    return since

}

console.log(convertDateString("2018-04-03T18:13:55Z"))
const yesterday = "2021-03-12"
console.log(since(yesterday))
