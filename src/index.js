const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let result = []
    let array = []
    let size = 10
    let arr = expr.split('')
    for (let i = 0; i < Math.ceil(arr.length / size); i++) {
        array[i] = arr.slice(i * size, (i * size) + size).join('')
    }
    array.forEach(arr => {
        arr = arr.replace(/^0+/gi, '')
        arr = arr.replace(/10/gi, '.')
        arr = arr.replace(/11/gi, '-')
        arr = arr.replace('**********', ' ')
        for (const [key, value] of Object.entries(MORSE_TABLE)) {
            if (arr === key) {
                arr = arr.replace(arr, value)
            }
        }
        result.push(arr)
    })
    return result.join('')
}

module.exports = {
    decode
}