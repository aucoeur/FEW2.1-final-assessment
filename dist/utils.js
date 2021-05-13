"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatPhone = exports.since = exports.convertDateString = exports.months = exports.capitalize = void 0;
// String Helpers
function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
}
exports.capitalize = capitalize;
// Date Helpers
exports.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
function convertDateString(datestring) {
    var date = new Date(datestring);
    return exports.months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
}
exports.convertDateString = convertDateString;
function since(datestring) {
    var today = new Date();
    var pastDate = new Date(datestring);
    var daysSince = ((today.getTime() - pastDate.getTime()) / (1000 * 3600 * 24));
    var since = '';
    switch (true) {
        case (daysSince < 0):
            since = "Payment not yet made";
            break;
        case (daysSince.toFixed(0) === "0"):
            since = "today";
            break;
        case (daysSince > 1 && daysSince < 30):
            since = daysSince.toFixed(0) + " day" + (daysSince < 2 ? '' : 's') + " ago";
            break;
        case (30 <= daysSince && daysSince < 365):
            since = (daysSince / 30).toFixed(0) + " month" + ((daysSince / 30) < 2 ? '' : 's') + " ago";
            break;
        case (daysSince >= 365):
            since = "Over " + (daysSince / 365).toFixed(0) + " year" + ((daysSince / 365) < 2 ? '' : 's') + " ago";
            break;
    }
    return since;
}
exports.since = since;
function formatPhone(phone) {
    var digitsOnly = /^\d+$/;
    if (!digitsOnly.test(phone)) {
        return "this is not a phone number";
    }
    else if (phone.length === 10) {
        return "(" + phone.slice(0, 3) + ") " + phone.slice(3, 6) + "-" + phone.slice(6);
    }
    else {
        // If not valid 10 digit US number, split up into 3 char chunks anyway for easy reading
        // regex checks for digits using positive lookahead per 3 digits
        var regex = new RegExp(/\d{1,3}(?=(\d{3})*$)/g);
        var chunk = phone.match(regex) || [];
        return chunk.join(' ');
    }
}
exports.formatPhone = formatPhone;
// console.log(convertDateString("2018-04-03T18:13:55Z"))
// const yesterday = "2021-03-12"
// console.log(since(yesterday))
//# sourceMappingURL=utils.js.map