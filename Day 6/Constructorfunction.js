function person(name)
{
    this.name=name
    this.greet=function()
    {
        console.log("Hello, I am a", name)
    }
}
 const p1=new person("priyanka")
 const p2=new person("Ravi")   
 console.log("P1:",p1)
 console.log("p2:",p2)
//  console
// p1.greet()
// p2.greet()