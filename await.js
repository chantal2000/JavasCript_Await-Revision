function sum(a, b) {
    return Promise.resolve(a + b)
}
async function main(m, callback) {
    var m = await sum(3, 5)
    return m
}
// console.log(main(sum(3, 5), "God is good"))  when i Learn without this keyword then it gives me promise{<pending>} so; i think because it is promises i have to use it

let c = main(sum(3, 5), "God is good")
c.then(() => {
    console.log(c)
})