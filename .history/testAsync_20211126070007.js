async function fn(){
    const result = await setTimeout(()=>console.log("The right hand site of await"),200
    console.log("await=",result)
    console.log("after await")
}
fn()

console.log("After fn")