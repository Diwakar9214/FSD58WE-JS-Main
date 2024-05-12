
// For loop(retun value)
    const arr=[10,11,12,13,14]
    for (let i = 0; i < arr.length; i++) {
       
        console.log("For loop",arr[i]);
    }
    
// For of loop
    for (const num of arr) {
        console.log("For of loop",num);
    }
    const greetings="Hello Good Evening"
    for(const greet of greetings)
        {
            console.log(`Greet:_${greet}`)
        }
// Map
        const map=new Map();
        map.set("IN","India")
        map.set("US","United states of America")
        map.set("IN","IND")
        console.log(map);
        for(const m of map)
        {
            console.log(m)
        }
//Destructor
        for(const [key,value] of map)
            {
                console.log(key," ",value)
            }
