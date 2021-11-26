async function fn(){
    const result = await console.log("The right hand site of await")
    console.log("await=",result)
    console.log("after await")
}
fn()

console.log("After fn")