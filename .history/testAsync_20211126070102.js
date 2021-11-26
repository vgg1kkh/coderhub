async function fn(){
    await setTimeout(()=>console.log("The right hand site of await"),200)
    console.log("await=")
    console.log("after await")
}
fn()

console.log("After fn")