//Get Method

const xhr=new XMLHttpRequest()
xhr.open("GET","https://reqres.in/api/users?id=1")
xhr.onload=function(){
    console.log(JSON.parse(xhr.response))
}
xhr.send()