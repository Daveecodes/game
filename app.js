const table = document.querySelector('.table')
const popUpClose = document.querySelector('.pop_close')
const popUp = document.querySelector('.pop_up')
const bulletCount = document.querySelector('.bullet_count')
const timeCount = document.querySelector('.time_count')
const hurryUP = document.querySelector('.time_text')
const bottomClose = document.querySelector('.bottom_close')
const modal = document.querySelector('.modal')
// const restart = document.querySelector('.restart_button')


// restart.addEventListener('click', function(){
//   popUp.classList.remove('open')
// })

function countBullets(){
  let countBullet = table.querySelectorAll('.bullet').length

  bulletCount.textContent = countBullet
  
}



// bottomClose.addEventListener('click', function(){
//   modal.classList.remove('open')
// })

popUpClose.addEventListener('click', function(){
  popUp.classList.remove('open')

  let time = 30

  if(time.length <= 10){
    hurryUP.classList.add('active')
  }


  let intervalID = setInterval(writeTime, 1000)
  
  function writeTime(){
    if(time !== 0){
      time = time - 1
      timeCount.textContent = `00:${time < 10 ? '0' + time : time}`
    }
    else{
      clearInterval(intervalID)
      modal.classList.add('open')
    }
  }

})

for (let i = 1; i <= 10; i++) {
  let tr = document.createElement('tr')

  for (let j = 1; j <= 10; j++) {
   let td = document.createElement('td')
    tr.appendChild(td)
  }
    table.appendChild(tr)
}

function generateNumbers(){
  let numbers = []
  let random = Math.floor(Math.random() * 100)
  while(numbers.length !== 30){
    if(!numbers.includes(random)){
      numbers.push(random)
    }
    random = Math.floor(Math.random() * 100)
  }

  return numbers
}

const cells = table.querySelectorAll('td')
const randomNumbers = generateNumbers()

for (let i = 0; i < cells.length; i++){
  let cell = cells[i]
  cell.addEventListener('click', function(){
    cell.classList.add('animate')
    if(randomNumbers.includes(i)){
      cell.classList.add('bullet')
    }
    else{
      cell.classList.add('tank')
    }
    countBullets()
  })
}



