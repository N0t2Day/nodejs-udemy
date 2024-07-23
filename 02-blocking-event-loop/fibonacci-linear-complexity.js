function info(text) {
    console.log(text, performance.now().toFixed(2))
}

info('Start')
setTimeout(() => info('Timeout'), 0)

function fib(n) {
    if (n === 0 || n === 1) {
        return n
    }

    let fib1 = 0
    let fib2 = 1
    let sum
    for (let i = 1; i < n; i++) {
        sum = fib1 + fib2
        fib1 = fib2
        fib2 = sum
    }
    return sum
}

const result = fib(1000)
console.log(result)
info('End')
