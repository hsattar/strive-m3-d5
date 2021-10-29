const userEmail = document.querySelector('#user-email')
const userPw = document.querySelector('#user-pw')
const loginBtn = document.querySelector('#log-in')
const alertMsg = document.querySelector('#alert-message')
let attemptsRemaining = 3

userEmail.addEventListener('keyup', e => {
    e.preventDefault()
    if (e.keyCode === 13) {
        loginBtn.click()
    }
})

userPw.addEventListener('keyup', e => {
    e.preventDefault()
    if (e.keyCode === 13) {
        loginBtn.click()
    }
})

loginBtn.addEventListener('click', () => {
    if (attemptsRemaining === 0) return alert('Please try Again Later') 
    if (userEmail.value === 'user@strive.school' && userPw.value === 'password') {
        window.location.href = '../index.html'
    } else {
        attemptsRemaining--
        alertMsg.innerText =`Incorrect Details - ${attemptsRemaining} attempts remaining`
        alertMsg.className = 'alert alert-danger d-block'
    }
})
