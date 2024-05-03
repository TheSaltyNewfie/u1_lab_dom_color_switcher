// Write your DOM code here!
const redbtn = document.querySelector('.red')
const whitebtn = document.querySelector('.white')
const bluebtn = document.querySelector('.blue')
const yellowbtn = document.querySelector('.yellow')

redbtn.addEventListener('click', () => {
    document.body.style.backgroundColor = 'red'
})

whitebtn.addEventListener('click', () => {
    document.body.style.backgroundColor = 'white'
})

bluebtn.addEventListener('click', () => {
    document.body.style.backgroundColor = 'blue'
})

yellowbtn.addEventListener('click', () => {
    document.body.style.backgroundColor = 'yellow'
})