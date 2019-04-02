const button = document.querySelector('#button');
const deviceContainer = document.querySelector('#device');
const serverContainer = document.querySelector('#server');
button.addEventListener('click', function(event) {
	console.log('mordo');
	navigator.bluetooth.requestDevice({
		filters: [{
				namePrefix: 'Kontakt'
			}],
		})
		.then(device => {
			deviceContainer.innerHTML = '';
			serverContainer.innerHTML = '';
			console.log('device', device);
			const { gatt, id, name } = device;
			deviceContainer.innerHTML = `
			Device \n
			Name: ${name}\n
			ID: ${id}\n
			Connected: ${gatt.connected ? 'true' : 'false'}\n
			\n
			`;
			device.addEventListener('gattserverdisconnected', () => console.log('REEEEEEEEEEEEEEEEEEE'));
			return device.gatt.connect();
		})
		.catch(err => console.error('connection', err))
		.then(server => {
			serverContainer.innerHTML = `
			Server \n
			Connected: ${server.connected ? 'true' : 'false'}\n
			`;
			console.log('server', server);
		})
		.catch(err => console.error('server', err))

  });
  