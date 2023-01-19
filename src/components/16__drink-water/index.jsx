import './style/style.css'

export default function DrinkWater() {
  return (
    <div className='app-16'>
      <div className='body'>
        <h1>Drink Water</h1>
        <h3>Goal: 2 Liters</h3>
        <div className='cup'>
          <div
            className='remained'
            id='remained'>
            <span id='liters'></span>
            <small>Remained</small>
          </div>

          <div
            className='percentage'
            id='percentage'></div>
        </div>
        <p className='text'>Select how many glasses of water that you have drunk</p>

        <div className='cups'>
          <div className='cup cup-small'>250 ml</div>
          <div className='cup cup-small'>250 ml</div>
          <div className='cup cup-small'>250 ml</div>
          <div className='cup cup-small'>250 ml</div>
          <div className='cup cup-small'>250 ml</div>
          <div className='cup cup-small'>250 ml</div>
          <div className='cup cup-small'>250 ml</div>
          <div className='cup cup-small'>250 ml</div>
        </div>
      </div>
    </div>
  )
}

const smallCups = document.querySelectorAll('.cup-small') // Node list of all the small cups
const liters = document.getElementById('liters') // the number above 'Remained'
const percentage = document.getElementById('percentage') // below Remained - the percentage full for the big cup
const remained = document.getElementById('remained') // the div around the liters and the 'Remained'

updateBigCup()

smallCups.forEach((cup, idx) => {
  //add an event listener for each of the cups
  cup.addEventListener('click', () => highlightCups(idx))
})

function highlightCups(idx) {
  //  check that if the cup they are clicking on is full, then toggle it to empty
  if (smallCups[idx].classList.contains('full')) {
    // if it is the last one
    if (idx === smallCups.length - 1) {
      idx--
      // if the next one is
    } else if (!smallCups[idx].nextElementSibling.classList.contains('full')) {
      idx--
    }
  }

  // go through each of the cups and if they are before or equal to the clicked cup, add .full, and if they are after, remove .full
  smallCups.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add('full')
    } else {
      cup.classList.remove('full')
    }
  })

  updateBigCup()
}

function updateBigCup() {
  const fullCups = document.querySelectorAll('.cup-small.full').length
  const totalCups = smallCups.length

  if (fullCups === 0) {
    percentage.style.visibility = 'hidden'
    percentage.style.height = '0'
  } else {
    percentage.style.visibility = 'visible'
    percentage.style.height = `${(fullCups / totalCups) * 330}px`
    percentage.innerText = `${(fullCups / totalCups) * 100}%`
  }

  if (fullCups === totalCups) {
    remained.style.visibility = 'hidden'
    remained.style.height = 0
  } else {
    remained.style.visibility = 'visible'
    liters.innerText = `${2 - (250 * fullCups) / 1000}L`
  }
}
