const main = document.getElementById('App')

const title = document.getElementById('title')

const tokyo = document.getElementById('Tokyo')
const kyoto = document.getElementById('Kyoto')
const osaka = document.getElementById('Osaka')
const nara = document.getElementById('Nara')
const glitch = document.getElementById('glitch')
const backMenu = document.getElementById('backMenu')

const classLists = ['bg-japan', 'bg-tokyo', 'bg-kyoto', 'bg-osaka', 'bg-nara']

const changePage = (pageName) => {
	glitch.classList.remove('hidden')

	classLists.forEach((cl) => {
		main.classList.remove(cl)
	})

	main.classList.add(`bg-${pageName}`)
	title.innerHTML = pageName.toUpperCase()

	setTimeout(() => glitch.classList.add('hidden'), 500)
}

tokyo.addEventListener('click', () => changePage('tokyo'))
kyoto.addEventListener('click', () => changePage('kyoto'))
osaka.addEventListener('click', () => changePage('osaka'))
nara.addEventListener('click', () => changePage('nara'))
backMenu.addEventListener('click', () => changePage('japan'))
