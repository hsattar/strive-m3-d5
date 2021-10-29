const changeName = function(event){
    let getClassOfFirstInput = document.querySelector('.form-control')
    let getpClassName = document.querySelector('.name')
    getpClassName.innerText = getClassOfFirstInput.value
    getClassOfFirstInput.value= "";
}

const changePassword = function(event){
    let getClassOfThirdInput = document.querySelector('.form2')
    let getpClassName2 = document.querySelector('.password')
    getpClassName2.innerText = getClassOfThirdInput.value
    getClassOfThirdInput.value= "";
}

const changeEmail = function(event){
    let getClassOfSecondInput = document.querySelector('.form3')
    let getpClassName3 = document.querySelector('.email')
    getpClassName3.innerText = getClassOfSecondInput.value
    getClassOfSecondInput.value= "";
}


const changeAge = function(event){
    let getClassOfFourthInput = document.querySelector('.form4')
    let getpClassName4 = document.querySelector('.age')
    getpClassName4.innerText = getClassOfFourthInput.value
    getClassOfFourthInput.value= "";
}


