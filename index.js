// const pilihan = (playerId, compId) => {
//   var playerElement = document.getElementById(
//     'player-' + playerId.toLowerCase(),
//   )
//   var comElement = document.getElementById('comp-' + compId.toLowerCase())
//   playerElement.classList.add('pilihan')
//   comElement.classList.add('pilihan')
// }

// const pilihanComp = () => {
//   var pilihan = ['batu', 'gunting', 'kertas']
//   var pilihanAcak = Math.floor(Math.random() * 3)
//   return pilihan[pilihanAcak]
// }

// // const pilihanPlayer = document.querySelector('.player-')
// // pilihanPlayer.addEventListener('click', function () {
// //   let pilihanPlayer = pilihanPlayer.className
// // })

// const getHasil = (pilihanPlayer, pilihanComp) => {
//   if (
//     (pilihanPlayer === 'kertas' && pilihanComp === 'batu') ||
//     (pilihanPlayer === 'batu' && pilihanComp === 'gunting') ||
//     (pilihanPlayer === 'gunting' && pilihanComp === 'kertas')
//   ) {
//     document.getElementById('text-vs').innerHTML =
//       '<h3 class="text-vs-win">Player 1 Win</h3>'
//     return 'Win'
//   } else if (pilihanPlayer === pilihanComp) {
//     document.getElementById('text-vs').innerHTML =
//       '<h3 class="text-vs-draw">Draw</h3>'
//     return 'Draw'
//   } else {
//     document.getElementById('text-vs').innerHTML =
//       '<h3 class="text-vs-lose">Com Won</h3>'
//     return 'Lose'
//   }
// }

// const pilihanPlayer = (value) => {
//   let pilihanComps = pilihanComp()
//   let Hasil = getHasil(value, pilihanComp)

//   pilihanComp(value, pilihanComps)

//   console.log('Player Choice => ' + value)
//   console.log('Computer Choice => ' + pilihanComps)
//   console.log('Result => ' + Hasil)
//   console.log(
//     '=====================================================================',
//   )
// }

// var compImg = document.getElementsByClassName('imgComp')
// setInterval(function () {
//   imgComp[0].style.backgoundColor = 'red'
//   imgComp[1].style.backgoundColor = 'red'
//   imgComp[2].style.backgoundColor = 'red'

//   setTimeout(function () {
//     imgComp[0].style.backgoundColor = 'red'
//     imgComp[1].style.backgoundColor = 'red'
//     imgComp[2].style.backgoundColor = 'red'
//   }, 500)
// }, 500)

// function loop(array) {
//   const newArray = []
//   for (let i = 0; i < array.length; i++) {
//     newArray.push(array[i])
//   }
//   return newArray
// }
// const array = ['1, 2, 3']
// console.log(loop(array))
