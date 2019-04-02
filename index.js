const button = document.querySelector('#button')
button.addEventListener('click', function(event) {
	console.log('elo');
	navigator.bluetooth.requestDevice({ filters: [{ name: 'Kontakt-8MqY' }] })
		.then(console.log)
		.catch(console.error)
  });
  