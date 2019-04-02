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
		.then(server => {
			serverContainer.innerHTML = `
			Server \n
			Connected: ${server.connected ? 'true' : 'false'}\n
			`;
			console.log('server', server);
			return server.getPrimaryService('0000180a-0000-1000-8000-00805f9b34fb');
		})
		.then(service => {
			console.log(service)
		})
		.catch(err => console.error('server', err))

  });
  