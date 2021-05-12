import data from './data.json';

interface Customer {
    readonly id: number
    readonly first_name: string
    readonly last_name: string
    readonly purchased: string
    readonly lastpayment: string
    readonly phone: string
    readonly make: string
    readonly model: string
    readonly city: string
}

function capitalize(word: string): string {
    return word[0].toUpperCase() + word.slice(1)
}

function getFirstName(customer: Customer): string {
    return capitalize(customer.first_name)
}

const getLastName = (customer: Customer): string => {
    return capitalize(customer.last_name)
}

function getAllNames(data: Customer[]): string[] {
    const names = data.map(customer  => {
        return `${getFirstName(customer)} ${getLastName(customer)}`
    })
    return names
}

console.log(getAllNames(data))
