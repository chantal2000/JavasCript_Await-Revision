function sum(a, b) {
    return Promise.resolve(a + b)
}
async function main(m, callback) { // Here I was creating callback ;This function main takes fun sum as an argument
    var m = await sum(3, 5)
    return m
}
// console.log(main(sum(3, 5), "God is good"))  when i run without this keyword then it gives me promise{<pending>} so; i think because it is promises i have to use it

let c = main(sum(3, 5), "God is good") //Here i was just creating an expression to give me output.I have called function main but when i call it as normal function it doesn't give me output. So; i have changed it to an expression to call it in promises but still do the same.
c.then(() => {
    console.log(c)
})