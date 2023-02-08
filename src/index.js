module.exports = function toReadable (number) {
    const ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen','eighteen', 'nineteen']
    const tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty','ninety']

    if(number >= 0 && number <= 19) {
        return ones[number];
    };

    if (number >= 20 && number <= 99) {
        if (number % 10 < 1) {
            return `${tens[Math.floor((number / 10) - 2)]}`;
        } else {
            return `${tens[Math.floor((number / 10) - 2)]} ${ones[Math.floor(number % 10)]}`;
        }
    };

    if (number >= 100) {
        if (number % 100 == 0) {
            return `${ones[Math.floor(number / 100)]} hundred`;
        } else if (number % 100 <= 19) {
            return `${ones[Math.floor(number / 100)]} hundred ${ones[Math.floor(number % 100)]}`
        } else if (number % 10 === 0) {
            return `${ones[Math.floor(number / 100)]} hundred ${tens[Math.floor(((number / 10) % 10) - 2)]}`;
        } else {
            return `${ones[Math.floor(number / 100)]} hundred ${tens[Math.floor(((number / 10) % 10) - 2)]} ${ones[Math.floor(number % 10)]}`;
        }
    };
}