const button = document.querySelector('#button')
button.addEventListener('click', function(event) {
	console.log('elo');
	navigator.bluetooth.requestDevice({ filters: [{ services: ['battery_service'] }] })
		.then(console.log)
		.catch(console.error)
  });
  