const rawData = 'marco/nine/muddan/vuddan'
const data = rawData.split('/')

function reverseString(str) {
    return str.split('').reverse().join('')
}

const result = data
    .filter(name => name.length % 2 === 0)
    .map(reverseString)
    .join()

console.log(result)