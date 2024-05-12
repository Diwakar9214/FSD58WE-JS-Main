// Factory function
function personfactory(name)
{
    return{
        greet:function(){
            console.log("Hello, I am a",name)
        }
    }
}
const p1=personfactory("priyanka")
const p2=personfactory("Ravi")