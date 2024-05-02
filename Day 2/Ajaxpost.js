//Post Method

const xhr=new XMLHttpRequest()
xhr.open("POST","https://reqres.in/api/users")
xhr.responseType="JSON"
xhr.onload=function(){
    console.log(xhr.response)
    }
    let parms={
        "name":"Hari",
        "id":"100",
        "job":"Reader"
    }
    xhr.send(JSON.stringify(parms))