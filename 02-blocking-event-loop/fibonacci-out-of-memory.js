setTimeout(() => console.log('Timeout'), 0)

function fib(n) {
    return new Promise((resolve, reject) => {
        if (n === 0 || n === 1) {
            return resolve(n)
        }
        // breaking cycle
        setImmediate(() =>
            Promise.all([fib(n - 1), fib(n - 2)]).then(([fib1, fib2]) =>
                resolve(fib1 + fib2)
            )
        )
        // Promise.all([fib(n - 1), fib(n - 2)])
        // .then(([fib1, fib2]) => resolve(fib1 + fib2))
    })
}
// Heap out of memory
fib(40).then((val) => console.log(val))
