// for in loop(return key)
    const obj={
    name:"Priyanka",
    age:23,
    }
    console.log(obj);

    const arr=[10,11,12,13,14]
    for(key in arr){
        console.log(key)
    }
    for(key in obj)
        {
            console.log(key);
        }
    obj.__prototype__={
    class:"Mern",
    }
    console.log(obj);