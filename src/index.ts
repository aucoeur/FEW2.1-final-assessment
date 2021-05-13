import data from './data.json';
import { capitalize, convertDateString, since, formatPhone } from './utils'

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

interface DisplayCustomer {
    name: string
    purchased: string
    lastPayment: string
    phone: string
}

// woops this wasn't necessary
// function getFirstName(customer: Customer): string {
//     return capitalize(customer.first_name)
// }

// function getLastName(customer: Customer): string {
//     return capitalize(customer.last_name)
// }

// challenge 1
function getFullName(customer: Customer): string {
    return `${capitalize(customer.first_name)} ${capitalize(customer.last_name)}`
}

// challenge 2 - with arrow function
const getPurchasedDate = (customer: Customer): string => {
    return convertDateString(customer.purchased)
}

function getAllCustomers(data: Customer[]): DisplayCustomer[] {
    const customers = data.map(c  => {
        let customer: DisplayCustomer = {
            name: getFullName(c),
            purchased:  getPurchasedDate(c),
            // challenge 3
            lastPayment: since(c.lastpayment),
            // challenge 4
            phone: formatPhone(c.phone)
        }
        return customer
    })
    return customers
}

console.log(getAllCustomers(data))
