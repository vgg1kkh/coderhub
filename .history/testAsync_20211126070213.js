async function fn(){
    await setTimeout(()=>console.log("The right hand site of await"))
    console.log("await=")
    console.log("after await")
}
fn()

console.log("After fn")