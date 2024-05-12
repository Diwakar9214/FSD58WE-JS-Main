// Reduce function
    const arr=[1,2,3,4,5,,6,7,8]
    const total=arr.reduce((accumulator,currentvalue)=>accumulator+currentvalue)
    console.log((total));
    // 2. Method
   
    const total1=arr.reduce((acc,item)=>{
        console.log("Accumulator:",acc);
        console.log("Current value",item);
        return acc+item})
    console.log((total1));

    // 3. Scenario

    const orders=[
        {id:1,
            items:[
                {price:10,quantity:1},{price:5,quantity:2},
            ],
            id:2,
            items:[
                {price:15,quantity:1},{price:20,quantity:2}
            ],      
        }  ]

        // 1Scenario calcualte total price per order
        function calcualteprice(order){
            console.log(order);
            let sum=0
            for(const item of order.items)
                {
                    sum+=item.price*item.quantity
                
                }
                return sum
        }
        const totalpriceperorder=orders.map(calcualteprice)
        console.log(totalpriceperorder);

    // 2.Scenario using reduce
        const calcualte=((order)=>
        order.items.reduce((acc,item)=>acc+item.quantity*item.price,0))
        const totalpriceorder=orders.map(calcualte)
        console.log(totalpriceorder);