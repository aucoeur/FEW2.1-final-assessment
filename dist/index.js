"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var data_json_1 = __importDefault(require("./data.json"));
var utils_1 = require("./utils");
// woops this wasn't necessary
// function getFirstName(customer: Customer): string {
//     return capitalize(customer.first_name)
// }
// function getLastName(customer: Customer): string {
//     return capitalize(customer.last_name)
// }
// challenge 1
function getFullName(customer) {
    return utils_1.capitalize(customer.first_name) + " " + utils_1.capitalize(customer.last_name);
}
// challenge 2 - with arrow function
var getPurchasedDate = function (customer) {
    return utils_1.convertDateString(customer.purchased);
};
function getAllCustomers(data) {
    var customers = data.map(function (c) {
        var customer = {
            name: getFullName(c),
            purchased: getPurchasedDate(c),
            // challenge 3
            lastPayment: utils_1.since(c.lastpayment),
            // challenge 4
            phone: utils_1.formatPhone(c.phone)
        };
        return customer;
    });
    return customers;
}
console.log(getAllCustomers(data_json_1.default));
//# sourceMappingURL=index.js.map