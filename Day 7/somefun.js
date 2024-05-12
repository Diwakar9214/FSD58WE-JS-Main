// findIndex
const arr=[111,223,333,444,235,233,644,567,823]
const index1=arr.findIndex((ele)=>ele>300)
    console.log(index1);

// find function

    const index=arr.find((ele)=>ele>100 && ele<200)
    console.log(index);
// Some Function
    const output=arr.some((ele)=>ele>200 && ele<300)
    console.log(output); 
    //Every function
    const output1=arr.every((ele)=>ele>200 && ele<300)
    console.log(output1); 
    // sort function
    const sortarr=arr.sort()
    console.log(sortarr);
    // define property

    const obj={
        name:"Priyanka",
        age:23,
        }
        // // defineproperty for object
        // Object.defineProperty(obj,
        //     "lang",{
        //         value:"Hindi",
        //         enumerable:true
        //     }
        
         
        // )
        // for(const key in obj) {
        //   console.log(key);          
        // }
         // defineproperties for object
         Object.defineProperties(obj,{
            lang:{
                value:"Hindi",
                enumerable:true
            }}
        
         
        )
        for(const key in obj) {
            console.log(key);          
          }