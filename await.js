function sum(a, b) {
    return Promise.resolve(a + b)
}
async function main(m, callback) {
    var m = await sum(3, 5)
    return m
}
let c = main(sum(3, 5), "God is good")
c.then(() => {
        console.log(c)
    })