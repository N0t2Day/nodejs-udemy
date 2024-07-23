setTimeout(() => console.log('Timeout'), 0)
function fib(index) {
    if (typeof index !== 'number') {
        return 0
    }

    if (index === 0 || index === 1) {
        return index
    }
    return fib(index - 1) + fib(index - 2)
}
const result = fib(20)

console.log(result)
