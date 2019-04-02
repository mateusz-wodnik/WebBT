const button = document.querySelector('#button')
button.addEventListener('click', function(event) {
	console.log('mordo');
	navigator.bluetooth.requestDevice({ acceptAllDevices: true })
		.then(device => {
			console.log('device', device);
			device.addEventListener('gattserverdisconnected', () => console.log('REEEEEEEEEEEEEEEEEEE'));
			return device.gatt.connect();
		})
		.catch(err => console.error('connection', err))
		.then(server => {
			console.log('server', server);
			return server.getPrimaryService(0x1800);
		})
		.then(service => {
			console.log(service);
			console.log('elo :)')
		})
		.catch(err => console.error('server', err))

  });
  