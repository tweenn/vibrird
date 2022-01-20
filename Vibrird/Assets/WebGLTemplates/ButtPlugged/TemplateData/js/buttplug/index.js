
let unityButtplugClient = '';

const init = async () => {
	return new Promise((resolve) => {
		Buttplug.buttplugInit()
		.then(() => {
			console.log("Library loaded");
			Buttplug.activateConsoleLogger("debug");
			unityButtplugClient = new Buttplug.ButtplugClient("unityClient");
			let connector = new Buttplug.ButtplugEmbeddedConnectorOptions();

			unityButtplugClient.connect(connector);

			unityButtplugClient.addListener("deviceadded", async (device) => {
				if (!device.messageAttributes(Buttplug.ButtplugDeviceMessageType.VibrateCmd)) {
					return;
				}

				try {
					await device.vibrate(1.0);
				} catch (err) {
					console.log(err);
					if (err instanceof Buttplug.ButtplugDeviceError) {
						console.log("got a device error!");
					}
				}
				await new Promise(r => setTimeout(r, 1000));
				await device.stop();
			});

			window.unityButtplugClient = unityButtplugClient;

			resolve(true);
		});
	});
}

export default init;
