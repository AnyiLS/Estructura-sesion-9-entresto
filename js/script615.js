$(document).ready(function () {
	let bandera = false
	let bandera1 = false
	let bandera2 = false
	let bandera3 = false
	$('#abrir1').on('click', function () {
		localStorage.setItem('slide615-1', 'true')
		if (localStorage.getItem('slide615-2') === 'true') {
			$('.boton-next').show()
			$('.vutom-col').hide()
		}
		$('.cursor').hide()
		if (bandera) {
			$('.menu1').css('display', 'none')
			bandera = !bandera
		} else {
			$('.menu1').css('display', 'block')
			$('.menu2').css('display', 'none')
			$('.menu3').css('display', 'none')
			$('.menu4').css('display', 'none')
			bandera = !bandera
			bandera1 = false
			bandera2 = false
			bandera3 = false
		}
	})

	$('#abrir2').on('click', function () {
		localStorage.setItem('slide615-2', 'true')
		if (localStorage.getItem('slide615-1') === 'true') {
			$('.boton-next').show()
			$('.vutom-col').hide()
		}
		$('.cursor1').hide()
		if (bandera1) {
			$('.menu2').css('display', 'none')
			bandera1 = !bandera1
		} else {
			$('.menu2').css('display', 'block')
			$('.menu1').css('display', 'none')
			$('.menu3').css('display', 'none')
			$('.menu4').css('display', 'none')
			bandera1 = !bandera1
			bandera = false
			bandera2 = false
			bandera3 = false
		}
	})

	$('#abrir3').on('click', function () {
		localStorage.setItem('slide615-3', 'true')
		if (localStorage.getItem('slide615-1') === 'true') {
			$('.boton-next').show()
			$('.vutom-col').hide()
		}
		$('.cursor2').hide()
		if (bandera2) {
			$('.menu3').css('display', 'none')
			bandera2 = !bandera2
		} else {
			$('.menu3').css('display', 'block')
			$('.menu1').css('display', 'none')
			$('.menu2').css('display', 'none')
			$('.menu4').css('display', 'none')
			bandera2 = !bandera2
			bandera1 = false
			bandera = false
			bandera3 = false
		}
	})

	$('#abrir4').on('click', function () {
		localStorage.setItem('slide615-4', 'true')
		if (localStorage.getItem('slide615-1') === 'true') {
			$('.boton-next').show()
			$('.vutom-col').hide()
		}
		$('.cursor3').hide()
		if (bandera3) {
			$('.menu4').css('display', 'none')
			bandera3 = !bandera3
		} else {
			$('.menu4').css('display', 'block')
			$('.menu1').css('display', 'none')
			$('.menu2').css('display', 'none')
			$('.menu3').css('display', 'none')
			bandera3 = !bandera3
			bandera1 = false
			bandera2 = false
			bandera = false
		}
	})
})
