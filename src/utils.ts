
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

export function formatPhone(phone: string): string {

    const digitsOnly: RegExp = /^\d+$/

    if (!digitsOnly.test(phone)) {
        return `this is not a phone number`
    }
    else if (phone.length === 10) {
        return `(${phone.slice(0,3)}) ${phone.slice(3, 6)}-${phone.slice(6)}`
    } else {
        // If not valid 10 digit US number, split up into 3 char chunks anyway for easy reading

        // regex checks for digits using positive lookahead per 3 digits
        const regex = new RegExp(/\d{1,3}(?=(\d{3})*$)/g)
        const chunk = phone.match(regex) || []
        return chunk.join(' ')
    }
}

// console.log(convertDateString("2018-04-03T18:13:55Z"))
// const yesterday = "2021-03-12"
// console.log(since(yesterday))
