 // ==UserScript==
 // @name        qeqehax vertex custom version
 // @namespace   http://tampermonkey.net/
 // @match       https://voxiom.io/*
 // @run-at      document-start
 // @grant       none
 // @version     1.0
 // @author      qeqeqeplayer533
 // @description Aimbot, triggerbot, chams, no-recoil and more for voxiom.io
 // @license     GPL
 // @require     https://unpkg.com/three@0.150.0/build/three.min.js
 // @icon        https://www.google.com/s2/favicons?sz=64&domain=voxiom.io
 // @downloadURL https://update.greasyfork.org/scripts/520188/Aimbot%2C%20Triggerbot%2C%20ESP%20and%20more%20-%20voxiomio.user.js
 // @updateURL   https://update.greasyfork.org/scripts/520188/Aimbot%2C%20Triggerbot%2C%20ESP%20and%20more%20-%20voxiomio.meta.js
 // ==/UserScript==

 const THREE = window.THREE;
 delete window.THREE;

 // Player count element
 let playerCountElement = document.createElement('div');
 playerCountElement.id = 'player-count';
 playerCountElement.innerHTML = 'player-count-element'; // Will be updated dynamically
 playerCountElement.style.position = 'absolute';
 playerCountElement.style.top = '50px'; // Different initial position to avoid overlap
 playerCountElement.style.left = '400px';
 playerCountElement.style.background = 'rgba(192, 192, 255, 0.3)';
 playerCountElement.style.color = '#e6f0ff';
 playerCountElement.style.padding = '5px 10px';
 playerCountElement.style.borderRadius = '4px';
 playerCountElement.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
 playerCountElement.style.cursor = 'grab';
 playerCountElement.style.zIndex = '1002';
 playerCountElement.style.fontSize = '24px';
 playerCountElement.style.display = 'none';
 document.body.appendChild(playerCountElement);

 // Make Player Count Draggable
 makeWatermarkDraggable(playerCountElement); // Reuse existing makeWatermarkDraggable function

 // INSERT HERE: Hack List Element
 let hackListElement = document.createElement('div');
 hackListElement.id = 'hack-list';
 hackListElement.innerHTML = 'Hack List';
 hackListElement.style.position = 'absolute';
 hackListElement.style.top = '30%';
 hackListElement.style.left = '0px';
 hackListElement.style.background = 'rgba(0, 0, 0, 0.5)';
 hackListElement.style.color = '#e6f0ff';
 hackListElement.style.padding = '10px';
 hackListElement.style.borderRadius = '4px';
 hackListElement.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
 hackListElement.style.cursor = 'grab';
 hackListElement.style.zIndex = '1002';
 hackListElement.style.fontSize = '18px';
 hackListElement.style.display = 'block';
 hackListElement.style.textAlign = 'center';
 hackListElement.style.minWidth = '150px';
 document.body.appendChild(hackListElement);

 // Make Hack List Draggable
 makeWatermarkDraggable(hackListElement);

 // Avoid detection
 const matchDetection = /^function\(\){\w+\['\w+'\]\(\);}$/;
 const setIntervalHandler = {
 	apply: function(target, thisArg, argumentsList) {
 		const callback = argumentsList[0];
 		const delay = argumentsList[1];
 		if (delay === 1000 && callback && callback.toString().match(matchDetection)) {
 			console.log('Blocked detection');
 			return null;
 		}
 		return Reflect.apply(...arguments);
 	}
 };
 window.setInterval = new Proxy(window.setInterval, setIntervalHandler);

 // GUI Container
 const guiContainer = document.createElement('div');
 guiContainer.id = 'custom-gui';
 guiContainer.style.display = 'flex';
 guiContainer.style.position = 'absolute';
 guiContainer.style.top = '10px';
 guiContainer.style.left = '10px';
 guiContainer.style.zIndex = '1001';
 document.body.appendChild(guiContainer);
 // Watermark Element
 const watermark = document.createElement('div');
 watermark.id = 'custom-watermark';
 watermark.innerHTML = 'qeqehax vertex';
 watermark.style.position = 'absolute';
 watermark.style.top = '50px';
 watermark.style.left = '100px';
 watermark.style.color = '#e6f0ff';
 watermark.style.padding = '5px 10px';
 watermark.style.borderRadius = '4px';
 watermark.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
 watermark.style.cursor = 'grab';
 watermark.style.zIndex = '1002';
 watermark.style.fontSize = '24px';

 document.body.appendChild(watermark);

 // Make Watermark Draggable
 function makeWatermarkDraggable(element) {
 	let isDragging = false;
 	let startX, startY;
 	element.addEventListener('mousedown', (e) => {
 		isDragging = true;
 		startX = e.clientX - element.offsetLeft;
 		startY = e.clientY - element.offsetTop;
 	});
 	document.addEventListener('mousemove', (e) => {
 		if (isDragging) {
 			element.style.left = `${e.clientX - startX}px`;
 			element.style.top = `${e.clientY - startY}px`;
 		}
 	});
 	document.addEventListener('mouseup', () => {
 		isDragging = false;
 	});
 }
 makeWatermarkDraggable(watermark);



 // Configuration
 window.abc123 = true;
 let a1 = abc123 ? 0.5 : 0.5;
 window.friends = [];
 let friendCount = friends.length;

 let espConfig = {
 	heightLine: 1.15,
 	sneakHeight: 0.77,
 	ennemyDistance: 50,
 	maxAngleInRadians: 0.1,
 	noRecoil: false,
 	showBox: 0,
 	show2dBox: 0,
 	showOutline: 0,
 	showPlayer: 0,
 	showLine: 0,
 	showWireframe: 0,
 	xray: 0,
 	allEnnemies: false,
 	gunDelay: 0,
 	aimbot: 0,
 	triggerBot: 0,
 	aimbotIgnoreWall: false,
 	mapZoom: 100,
 	mapOffsetZ: 0,
 	autoClaimAds: false,
 	antiAFK: false,
 	rainbow: false,
 	aimRadius: false,
 	sprint: false,
 	spinbot: false,
 	fastReload: false,
 	customCrosshair: 0,
 	showNameTags: false,
 	showItems: 0,
 	twerk: 0,
 	jumpAim: 0.12,
 	zoom: 3,
 	itemLimit: 100,
 	aimDelay: 0,
 	freecam: false,
 	autoRespawn: false,
 	distanceTracers: false,
 	prediction: 0,
 	friends: [],
 	freecamSpeed: 1,
 	waterMark: true,
 	playerCount: false,
 	adBlock: false,
 	hackList: false,
 	oreEsp: false,
 	chestEsp: false,
 	dungeonBlockEsp: false,
 	blockLimit: 20,
 	autoHvh: 0,
 	aimPowerX: 1,
 	aimPowerY: 1,
 };

 // Categories and their controls
 const categories = {
 	Aimbot: [{
 			type: 'select',
 			label: 'Aimbot (-)',
 			key: 'aimbot',
 			options: {
 				Off: 0,
 				FKey: 1,
 				Always: 2
 			}
 		},
 		{
 			type: 'select',
 			label: 'TriggerBot (=)',
 			key: 'triggerBot',
 			options: {
 				Off: 0,
 				FKey: 1
 			}
 		},
 		{
 			type: 'select',
 			label: 'Gun Delay ([)',
 			key: 'gunDelay',
 			options: {
 				None: 0,
 				Normal: 1,
 				Sniper: 2,
 				EliteAR: 3
 			}
 		},
 		{
 			type: 'select',
 			label: 'Jumper (;)',
 			key: 'autoHvh',
 			options: {
 				Off: 0,
 				On: 1
 			}
 		},
 		{
 			type: 'checkbox',
 			label: 'No Recoil',
 			key: 'noRecoil'
 		},
 		{
 			type: 'checkbox',
 			label: 'All Enemies',
 			key: 'allEnnemies'
 		},
 		{
 			type: 'checkbox',
 			label: 'Ignore Walls',
 			key: 'aimbotIgnoreWall'
 		},
 		{
 			type: 'checkbox',
 			label: 'Aim Radius',
 			key: 'aimRadius'
 		},
 		{
 			type: 'checkbox',
 			label: 'Fast Reload',
 			key: 'fastReload'
 		},
 		{
 			type: 'select',
 			label: 'Spinbot',
 			key: 'spinbot',
 			options: {
 				Off: false,
 				On: true
 			}
 		},
 		{
 			type: 'slider',
 			label: 'Max Angle',
 			key: 'maxAngleInRadians',
 			min: 0.01,
 			max: 0.5,
 			step: 0.01
 		},
 		{
 			type: 'slider',
 			label: 'Height Line',
 			key: 'heightLine',
 			min: 0.5,
 			max: 1.25,
 			step: 0.01
 		},
 		{
 			type: 'slider',
 			label: 'Sneak Height',
 			key: 'sneakHeight',
 			min: 0.5,
 			max: 0.9,
 			step: 0.01
 		},
 		{
 			type: 'slider',
 			label: 'Jump Aim',
 			key: 'jumpAim',
 			min: 0,
 			max: 0.5,
 			step: 0.01
 		},
 		{
 			type: 'slider',
 			label: 'Aim Delay',
 			key: 'aimDelay',
 			min: 0,
 			max: 60,
 			step: 1
 		},
 		{
 			type: 'slider',
 			label: 'Prediction',
 			key: 'prediction',
 			min: 0,
 			max: 2,
 			step: 0.01
 		},
 		{
 			type: 'slider',
 			label: 'Aim Power X',
 			key: 'aimPowerX',
 			min: 0,
 			max: 1,
 			step: 0.01
 		},
 		{
 			type: 'slider',
 			label: 'Aim Power Y',
 			key: 'aimPowerY',
 			min: 0,
 			max: 1,
 			step: 0.01
 		},
 	],
 	Chams: [{
 			type: 'select',
 			label: 'Show Players',
 			key: 'showPlayer',
 			options: {
 				Off: 0,
 				Enemies: 1,
 				All: 2
 			}
 		},
 		{
 			type: 'select',
 			label: 'Show Lines',
 			key: 'showLine',
 			options: {
 				Off: 0,
 				Enemies: 1,
 				All: 2
 			}
 		},
 		{
 			type: 'select',
 			label: 'Show Outline',
 			key: 'showOutline',
 			options: {
 				Off: 0,
 				Enemies: 1,
 				All: 2
 			}
 		},
 		{
 			type: 'select',
 			label: 'Show Box',
 			key: 'showBox',
 			options: {
 				Off: 0,
 				Enemies: 1,
 				All: 2
 			}
 		},
 		{
 			type: 'select',
 			label: 'Show Wireframe',
 			key: 'showWireframe',
 			options: {
 				Off: 0,
 				Enemies: 1,
 				All: 2
 			}
 		},
 		{
 			type: 'select',
 			label: 'Show 2d Box',
 			key: 'show2dBox',
 			options: {
 				Off: 0,
 				Enemies: 1,
 				All: 2
 			}
 		},
 		{
 			type: 'select',
 			label: 'X-Ray (.)',
 			key: 'xray',
 			options: {
 				Off: 0,
 				Wireframe: 1,
 				Xray: 2
 			}
 		},
 		{
 			type: 'select',
 			label: 'Crosshair',
 			key: 'customCrosshair',
 			options: {
 				Off: 0,
 				Normal: 1,
 				Always: 2
 			}
 		},
 		{
 			type: 'select',
 			label: 'Show Items',
 			key: 'showItems',
 			options: {
 				Off: 0,
 				Item: 1,
 				Block: 2,
 				Both: 3
 			}
 		},
 		{
 			type: 'slider',
 			label: 'Enemy Distance',
 			key: 'ennemyDistance',
 			min: 10,
 			max: 100,
 			step: 1
 		},
 		{
 			type: 'slider',
 			label: 'Map Zoom',
 			key: 'mapZoom',
 			min: 20,
 			max: 100,
 			step: 1
 		},
 		{
 			type: 'slider',
 			label: 'Map Offset Z',
 			key: 'mapOffsetZ',
 			min: -50,
 			max: 50,
 			step: 1
 		},
 		{
 			type: 'slider',
 			label: 'Zoom (v, b)',
 			key: 'zoom',
 			min: 1,
 			max: 4,
 			step: 0.01
 		},
 		{
 			type: 'slider',
 			label: 'Item Limit',
 			key: 'itemLimit',
 			min: 0,
 			max: 500,
 			step: 1
 		},
 		{
 			type: 'slider',
 			label: 'Block Limit',
 			key: 'blockLimit',
 			min: 0,
 			max: 100,
 			step: 1
 		},
 		{
 			type: 'checkbox',
 			label: 'Distance Tracers',
 			key: 'distanceTracers'
 		},
 		{
 			type: 'checkbox',
 			label: 'Rainbow',
 			key: 'rainbow'
 		},
 		{
 			type: 'checkbox',
 			label: 'Show Name Tags',
 			key: 'showNameTags'
 		},
 		{
 			type: 'checkbox',
 			label: 'Show Ores',
 			key: 'oreEsp'
 		},
 		{
 			type: 'checkbox',
 			label: 'Show Chests',
 			key: 'chestEsp'
 		},
 		{
 			type: 'checkbox',
 			label: 'Show Dungeon Blocks',
 			key: 'dungeonBlockEsp'
 		},
 	],
 	Tools: [{
 			type: 'select',
 			label: 'Sprint ( , )',
 			key: 'sprint',
 			options: {
 				Off: false,
 				On: true
 			}
 		},
 		{
 			type: 'select',
 			label: 'Twerk (")',
 			key: 'twerk',
 			options: {
 				Off: 0,
 				OnSneak: 1,
 				Normal: 2
 			}
 		},
 		{
 			type: 'select',
 			label: 'Freecam ( ] )',
 			key: 'freecam',
 			options: {
 				Off: false,
 				On: true
 			}
 		},
 		{
 			type: 'slider',
 			label: 'Freecam Speed',
 			key: 'freecamSpeed',
 			min: 0.1,
 			max: 5,
 			step: 0.1
 		},
 		{
 			type: 'checkbox',
 			label: 'Auto Respawn',
 			key: 'autoRespawn'
 		},
 		{
 			type: 'checkbox',
 			label: 'Auto Claim Ads',
 			key: 'autoClaimAds'
 		},
 		{
 			type: 'checkbox',
 			label: 'Anti AFK',
 			key: 'antiAFK'
 		},
 		{
 			type: 'checkbox',
 			label: 'Player Count',
 			key: 'playerCount'
 		},
 		{
 			type: 'checkbox',
 			label: 'Ad Blocker',
 			key: 'adBlock'
 		},
 		{
 			type: 'checkbox',
 			label: 'Hack List',
 			key: 'hackList'
 		},
 		{
 			type: 'checkbox',
 			label: 'Water Mark',
 			key: 'waterMark'
 		},
 	],
 	Config: [{
 			type: 'text',
 			label: 'Config Name',
 			key: 'configName',
 			value: 'qeqehax'
 		},
 		{
 			type: 'button',
 			label: 'Export Config',
 			action: exportConfig
 		},
 		{
 			type: 'button',
 			label: 'Import Config',
 			action: importConfig
 		},
 		{
 			type: 'button',
 			label: 'Reset Config',
 			action: resetConfig
 		},
 		{
 			type: 'button',
 			label: 'Add Friend',
 			action: addFriend
 		},
 		{
 			type: 'button',
 			label: 'Remove Friend',
 			action: removeFriend
 		},
 		{
 			type: 'button',
 			label: 'Reset GUI',
 			action: resetGuiPositions
 		},
 	],
 };

 // Default config for reset
 const defaultConfig = JSON.stringify(espConfig);

 function resetGuiPositions() {
 	// Reset watermark position
 	watermark.style.top = '50px';
 	watermark.style.left = '100px';

 	// Reset player count position
 	playerCountElement.style.top = '50px';
 	playerCountElement.style.left = '400px';

 	// Reset hack list position
 	hackListElement.style.top = '30%';
 	hackListElement.style.left = '0px';

 	// Reset GUI panels
 	document.querySelectorAll('.gui-panel').forEach((panel, index) => {
 		panel.style.top = '100px';
 		panel.style.left = `${200 + index * 250}px`;
 	});
 }

 // Create a panel for each category
 function createPanel(category, controls, index) {
 	const panel = document.createElement('div');
 	panel.className = 'gui-panel';
 	panel.style.left = `${200 + index * 250}px`;
 	panel.style.top = `${100}px`;
 	panel.innerHTML = `<div class="title">${category}</div>`;
 	controls.forEach(control => {
 		const controlElement = document.createElement('div');
 		controlElement.className = 'control';
 		let input;
 		if (control.type === 'checkbox') {
 			input = document.createElement('input');
 			input.type = 'checkbox';
 			input.checked = espConfig[control.key];
 			input.addEventListener('change', () => {
 				espConfig[control.key] = input.checked;
 				saveConfig();
 			});
 		} else if (control.type === 'select') {
 			input = document.createElement('select');
 			for (let option in control.options) {
 				const opt = document.createElement('option');
 				opt.value = control.options[option];
 				opt.text = option;
 				input.appendChild(opt);
 			}
 			input.value = espConfig[control.key];
 			input.addEventListener('change', () => {
 				espConfig[control.key] = parseInt(input.value) || input.value === 'true';
 				saveConfig();
 			});
 		} else if (control.type === 'slider') {
 			const sliderContainer = document.createElement('div');
 			sliderContainer.className = 'slider-container';

 			input = document.createElement('input');
 			input.type = 'range';
 			input.min = control.min;
 			input.max = control.max;
 			input.step = control.step;
 			input.value = espConfig[control.key];

 			const numberInput = document.createElement('input');
 			numberInput.type = 'number';
 			numberInput.min = control.min;
 			numberInput.max = control.max;
 			numberInput.step = control.step;
 			numberInput.value = espConfig[control.key];

 			input.addEventListener('input', () => {
 				espConfig[control.key] = parseFloat(input.value);
 				numberInput.value = input.value;
 				saveConfig();
 			});

 			numberInput.addEventListener('change', () => {
 				let value = parseFloat(numberInput.value);
 				if (value < control.min) value = control.min;
 				if (value > control.max) value = control.max;
 				espConfig[control.key] = value;
 				input.value = value;
 				saveConfig();
 			});

 			sliderContainer.appendChild(input);
 			sliderContainer.appendChild(numberInput);
 			controlElement.innerHTML = `<label>${control.label}</label>`;
 			controlElement.appendChild(sliderContainer);
 		} else if (control.type === 'text') {
 			input = document.createElement('input');
 			input.type = 'text';
 			input.value = control.value;
 			input.addEventListener('change', () => {
 				espConfig[control.key] = input.value;
 				saveConfig();
 			});
 		} else if (control.type === 'button') {
 			input = document.createElement('button');
 			input.textContent = control.label;
 			input.addEventListener('click', control.action);
 		}
 		if (control.type !== 'slider') {
 			controlElement.innerHTML = `<label>${control.label}</label>`;
 			controlElement.appendChild(input);
 		}
 		panel.appendChild(controlElement);
 	});
 	guiContainer.appendChild(panel);
 	makeDraggable(panel);
 }

 // Config management functions
 function exportConfig() {
 	const currentConfig = JSON.stringify(espConfig, null, 2);
 	const element = document.createElement('a');
 	element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(currentConfig));
 	element.setAttribute('download', espConfig.configName + '.json');
 	element.style.display = 'none';
 	document.body.appendChild(element);
 	element.click();
 	document.body.removeChild(element);
 }

 function importConfig() {
 	const input = document.createElement('input');
 	input.type = 'file';
 	input.accept = '.json';
 	input.onchange = (e) => {
 		const file = e.target.files[0];
 		const reader = new FileReader();
 		reader.onload = (e) => {
 			const loadedConfig = JSON.parse(e.target.result);
 			Object.assign(espConfig, loadedConfig);
 			guiContainer.innerHTML = '';
 			Object.keys(categories).forEach((category, index) => {
 				createPanel(category, categories[category], index);
 			});
 			saveConfig();
 		};
 		reader.readAsText(file);
 	};
 	input.click();
 }

 function resetConfig() {
 	Object.assign(espConfig, JSON.parse(defaultConfig));
 	guiContainer.innerHTML = '';
 	Object.keys(categories).forEach((category, index) => {
 		createPanel(category, categories[category], index);
 	});
 	localStorage.removeItem('qeqehax');
 }

 function addFriend() {
 	const friendName = window.prompt("Enter name of friend to add:");
 	if (friendName) {
 		espConfig.friends.push(friendName);
 		friends = espConfig.friends;
 		saveConfig();
 	}
 }

 function removeFriend() {
 	let friendList = "";
 	for (let i = 0; i < espConfig.friends.length; i++) {
 		friendList += espConfig.friends[i];
 		friendList += "(" + i + ")";
 		if (i != espConfig.friends.length - 1) {
 			friendList += ", ";
 		}
 	}
 	window.alert(friendList);
 	let itemToRemove = window.prompt("Enter name or index of friend to remove:");
 	let removed;
 	if (itemToRemove === null) {
 		window.alert("Removal canceled.");
 		return;
 	}
 	let index = parseInt(itemToRemove, 10);
 	if (!isNaN(index) && index >= 0 && index < espConfig.friends.length) {
 		removed = espConfig.friends.splice(index, 1);
 	} else {
 		for (let i = 0; i < espConfig.friends.length; i++) {
 			if (espConfig.friends[i] === itemToRemove) {
 				removed = espConfig.friends.splice(i, 1);
 				break;
 			}
 		}
 	}
 	if (removed && removed.length > 0) {
 		window.alert(removed[0] + " is removed from friend list.");
 	} else {
 		window.alert(itemToRemove + " not found.");
 	}
 	friends = espConfig.friends;
 	saveConfig();
 }

 function saveConfig() {
 	localStorage.setItem('qeqehax', JSON.stringify(espConfig));
 }

 // Load saved config
 const savedConfig = localStorage.getItem('qeqehax');
 if (savedConfig) {
 	console.log('Loaded config', savedConfig);
 	Object.assign(espConfig, JSON.parse(savedConfig));
 }

 // Create panels
 Object.keys(categories).forEach((category, index) => {
 	createPanel(category, categories[category], index);
 });

 // Make panels draggable
 function makeDraggable(element) {
 	let isDragging = false;
 	let startX, startY;
 	element.addEventListener('mousedown', (e) => {
 		if (e.target.className === 'title') {
 			isDragging = true;
 			startX = e.clientX - element.offsetLeft;
 			startY = e.clientY - element.offsetTop;
 		}
 	});
 	document.addEventListener('mousemove', (e) => {
 		if (isDragging) {
 			element.style.left = `${e.clientX - startX}px`;
 			element.style.top = `${e.clientY - startY}px`;
 		}
 	});
 	document.addEventListener('mouseup', () => {
 		isDragging = false;
 	});
 }

 // Toggle GUI visibility
 let guiVisible = true;
 document.addEventListener('keydown', (e) => {
 	if (e.key === '/' || e.key === '?') {
 		guiVisible = !guiVisible;
 		guiContainer.style.display = guiVisible ? 'flex' : 'none';
 	}
 });

 // Styles
 const guiStyle = document.createElement('style');
 guiStyle.innerHTML = `
#custom-gui {
    display: flex;
    gap: 10px;
}
.gui-panel {
    background: rgba(80, 0, 128, 0.8);
    border-radius: 8px;
    padding: 10px;
    width: 225px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    position: absolute;
}
.title {
    color: #fff;
    font-weight: bold;
    margin-bottom: 10px;
    cursor: grab;
    text-align: center;
}
.control {
    margin-bottom: 8px;
    display: flex;
    align-items: center;
}
label {
    color: #e6f0ff;
    margin-right: 5px;
    flex: 1;
}
input[type="checkbox"], select, input[type="range"], input[type="text"], button {
    background: rgba(0, 51, 102, 0.7);
    color: #fff;
    border: none;
    padding: 5px;
    border-radius: 4px;
}
input[type="range"] {
    width: 75px;
    margin: 0 5px;
    padding: 0;
    height: 20px;
    -webkit-appearance: none;
    background: transparent;
}
input[type="range"]::-webkit-slider-runnable-track {
    width: 100%;
    height: 6px;
    background: rgba(0, 51, 102, 0.7);
    border-radius: 3px;
}
input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 14px;
    height: 14px;
    background: #fff;
    border-radius: 50%;
    margin-top: -4px;
    cursor: pointer;
}
input[type="range"]::-moz-range-track {
    width: 100%;
    height: 6px;
    background: rgba(0, 51, 102, 0.7);
    border-radius: 3px;
}
input[type="range"]::-moz-range-thumb {
    width: 14px;
    height: 14px;
    background: #fff;
    border: none;
    border-radius: 50%;
    cursor: pointer;
}
input[type="number"] {
    width: 50px;
    background: rgba(0, 51, 102, 0.7);
    color: #fff;
    border: none;
    padding: 5px;
    border-radius: 4px;
}
.slider-container {
    display: flex;
    align-items: center;
    flex: 1;
}
button {
    cursor: pointer;
    flex: 1;
}
button:hover, select:hover, input[type="range"]:hover, input[type="number"]:hover {
    background: rgba(0, 68, 136, 0.9);
}
input[type="range"]:hover::-webkit-slider-thumb {
    background: #e6f0ff;
}
input[type="range"]:hover::-moz-range-thumb {
    background: #e6f0ff;
}
.hack-item {
    color: #e6f0ff;
    font-size: 14px;
    text-align: center;
    width: 100%;
}
#hack-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
}
.hack-list-item {
    color: #e6f0ff;
    font-size: 16px;
    text-align: center;
    width: 100%;
}
#custom-watermark {
    background: linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet, red);
    background-size: 200% 200%;
    animation: rainbow 99s linear infinite;
}
@keyframes rainbow {
    0% { background-position: 0% 0%; }
    100% { background-position: 200% 200%; }
}
`;
 document.head.appendChild(guiStyle);

 function updateGUI() {
 	document.querySelectorAll('.gui-panel .control').forEach(control => {
 		const input = control.querySelector('input, select');
 		if (!input) return;
 		const label = control.querySelector('label').textContent;
 		const controlConfig = Object.values(categories).flat().find(c => c.label === label);
 		if (!controlConfig) return;

 		const key = controlConfig.key;
 		if (controlConfig.type === 'checkbox') {
 			input.checked = espConfig[key];
 			if (key === 'waterMark') {
 				watermark.style.display = espConfig.waterMark ? 'block' : 'none';
 			}
 			if (key === 'playerCount') {
 				playerCountElement.style.display = espConfig.playerCount ? 'block' : 'none';
 			}
 			if (key === 'hackList') {
 				hackListElement.style.display = espConfig.hackList ? 'block' : 'none';
 			}
 		} else if (controlConfig.type === 'select') {
 			input.value = espConfig[key];
 		} else if (controlConfig.type === 'slider') {
 			input.value = espConfig[key];
 			const numberInput = control.querySelector('input[type="number"]');
 			if (numberInput) numberInput.value = espConfig[key];
 		} else if (controlConfig.type === 'text') {
 			input.value = espConfig[key];
 		}
 	});
 }

 // Replace the key bindings event listener (lines 663-693)
 document.addEventListener('keydown', (e) => {
 	let configChanged = false;
 	if (e.key === '-' || e.key === '_') {
 		espConfig.aimbot = (espConfig.aimbot + 1) % 3;
 		configChanged = true;
 	}
 	if (e.key === '=' || e.key === '+') {
 		espConfig.triggerBot = (espConfig.triggerBot + 1) % 2;
 		configChanged = true;
 	}
 	if (e.key === '.' || e.key === '>') {
 		espConfig.xray = (espConfig.xray + 1) % 3;
 		configChanged = true;
 	}
 	if (e.key === ',' || e.key === '<') {
 		espConfig.sprint = !espConfig.sprint;
 		configChanged = true;
 	}
 	if (e.key === ';' || e.key === ':') {
 		espConfig.autoHvh = (espConfig.autoHvh + 1) % 2;
 		configChanged = true;
 	}
 	if (e.key === '"' || e.key === "'") {
 		espConfig.twerk = (espConfig.twerk + 1) % 3;
 		configChanged = true;
 	}
 	if (e.key === '[' || e.key === '{') {
 		espConfig.gunDelay = (espConfig.gunDelay + 1) % 4;
 		configChanged = true;
 	}
 	if (e.key === ']' || e.key === '}') {
 		espConfig.freecam = !espConfig.freecam;
 		configChanged = true;
 	}
 	if (e.key === 'e') {
 		if (espConfig.autoClaimAds) {
 			setTimeout(() => {
 				claimAds();
 			}, 100);
 		}
 	}
 	if (configChanged) {
 		saveConfig(); // Save the updated config
 		updateGUI(); // Refresh the GUI to reflect the new config
 	}
 });

 // No-recoil
 let foundRecoil = false;
 const arrayPushHandler = {
 	apply: function(target, thisArg, argumentsList) {
 		if (!foundRecoil && argumentsList.length === 1) {
 			const item = argumentsList[0];
 			if (item && typeof item === 'object') {
 				const keys = Object.keys(item);
 				if (keys.length === 44) {
 					for (const key in item) {
 						if (item[key] === 0.3) {
 							console.log('Recoil key found', key);
 							foundRecoil = true;
 							Object.defineProperty(Object.prototype, key, {
 								get: () => {
 									return espConfig.noRecoil && abc123 ? 0 : item[key];
 								},
 								set: (baseRecoil) => {
 									_baseRecoil = baseRecoil;
 								}
 							});
 							break;
 						}
 					}
 				}
 			}
 		}
 		return Reflect.apply(...arguments);
 	}
 };
 Array.prototype.push = new Proxy(Array.prototype.push, arrayPushHandler);

 // Mouse events
 let isLeftClick = false;
 let isRightClick = false;
 document.addEventListener('mousedown', (e) => {
 	if (e.button === 0) {
 		isLeftClick = true;
 	}
 	if (e.button === 2) {
 		isRightClick = true;
 	}
 });
 document.addEventListener('mouseup', (e) => {
 	if (e.button === 0) {
 		isLeftClick = false;
 	}
 	if (e.button === 2) {
 		isRightClick = false;
 	}
 });

 // Additional key states
 let offX = 0;
 let offY = 0;
 let offZ = 0;
 let vKey = false;
 let bKey = false;
 let wKey = false;
 let aKey = false;
 let sKey = false;
 let dKey = false;
 let fKey = false;
 let cKey = false;
 let uKey = false;
 let iKey = false;
 let oKey = false;
 let jKey = false;
 let kKey = false;
 let lKey = false;
 let shKey = false;
 let space = false;

 document.addEventListener('keydown', (e) => {
 	if (e.key === 'w' || e.key === 'W') {
 		wKey = true;
 	}
 	if (e.key === 'a' || e.key === 'A') {
 		aKey = true;
 	}
 	if (e.key === 's' || e.key === 'S') {
 		sKey = true;
 	}
 	if (e.key === 'd' || e.key === 'D') {
 		dKey = true;
 	}
 	if (e.key === 'f' || e.key === 'F') {
 		fKey = true;
 	}
 	if (e.key === 'c' || e.key === 'C') {
 		cKey = true;
 	}
 	if (e.key === ' ') {
 		space = true;
 	}
 	if (e.key === 'v' || e.key === 'V') {
 		vKey = true;
 	}
 	if (e.key === 'b' || e.key === 'B') {
 		bKey = true;
 	}
 	if (e.key === 'u' || e.key === 'U') {
 		uKey = true;
 	}
 	if (e.key === 'i' || e.key === 'I') {
 		iKey = true;
 	}
 	if (e.key === 'o' || e.key === 'O') {
 		oKey = true;
 	}
 	if (e.key === 'j' || e.key === 'J') {
 		jKey = true;
 	}
 	if (e.key === 'k' || e.key === 'K') {
 		kKey = true;
 	}
 	if (e.key === 'l' || e.key === 'L') {
 		lKey = true;
 	}
 	if (e.key === 'Shift') {
 		shKey = true;
 	}
 	if ((e.key === 'r' || e.key === 'R') && espConfig.fastReload && abc123) {
 		setTimeout(() => {
 			document.dispatchEvent(new WheelEvent('wheel', {
 				deltaY: 1,
 				deltaX: 0,
 				deltaMode: 0,
 				bubbles: true
 			}));
 			setTimeout(() => {
 				document.dispatchEvent(new WheelEvent('wheel', {
 					deltaY: -1,
 					deltaX: 0,
 					deltaMode: 0,
 					bubbles: true
 				}));
 			}, 60);
 		}, 60);
 	}
 });

 document.addEventListener('keyup', (e) => {
 	if (e.key === 'w' || e.key === 'W') {
 		wKey = false;
 	}
 	if (e.key === 'a' || e.key === 'A') {
 		aKey = false;
 	}
 	if (e.key === 's' || e.key === 'S') {
 		sKey = false;
 	}
 	if (e.key === 'd' || e.key === 'D') {
 		dKey = false;
 	}
 	if (e.key === 'f' || e.key === 'F') {
 		fKey = false;
 	}
 	if (e.key === 'c' || e.key === 'C') {
 		cKey = false;
 	}
 	if (e.key === 'v' || e.key === 'V') {
 		vKey = false;
 	}
 	if (e.key === 'b' || e.key === 'B') {
 		bKey = false;
 	}
 	if (e.key === 'u' || e.key === 'U') {
 		uKey = false;
 	}
 	if (e.key === 'i' || e.key === 'I') {
 		iKey = false;
 	}
 	if (e.key === 'o' || e.key === 'O') {
 		oKey = false;
 	}
 	if (e.key === 'j' || e.key === 'J') {
 		jKey = false;
 	}
 	if (e.key === 'k' || e.key === 'K') {
 		kKey = false;
 	}
 	if (e.key === 'l' || e.key === 'L') {
 		lKey = false;
 	}
 	if (e.key === 'Shift') {
 		shKey = false;
 	}
 	if (e.key === ' ') {
 		space = false;
 	}
 });

 // Obfuscated keys
 let worldScene = null;
 let childrenKey = null;
 let worldCamera = null;
 let projectionMatrixKey = null;
 let matrixWorldKey = null;
 let matrixElKey = null;

 // Three.js setup
 const scene = new THREE.Scene();
 const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
 camera.rotation.order = 'YXZ';
 let saveViewport = new THREE.Vector4();
 let saveScissor = new THREE.Vector4();
 let minimapViewport = new THREE.Vector4(20, window.innerHeight - 250 - 20, 250, 250);
 const minimapCamera = new THREE.OrthographicCamera(-espConfig.mapZoom, espConfig.mapZoom, espConfig.mapZoom, -espConfig.mapZoom, 0.1, 1000);
 minimapCamera.rotation.order = 'YXZ';
 minimapCamera.position.set(0, 50, 0);
 minimapCamera.lookAt(0, 0, 0);
 const renderer = new THREE.WebGLRenderer({
 	alpha: true,
 	antialias: true
 });
 renderer.setSize(window.innerWidth, window.innerHeight);
 renderer.setPixelRatio(window.devicePixelRatio);
 renderer.domElement.id = 'overlayCanvas';
 document.body.appendChild(renderer.domElement);

 // Styles for overlay canvas
 const canvasStyle = document.createElement('style');
 canvasStyle.innerHTML = `
#overlayCanvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1000;
}
`;
 document.head.appendChild(canvasStyle);

 function setTransform(target, transform, isMatrix = true) {
 	const matrix = new THREE.Matrix4().fromArray(isMatrix ? transform : transform[matrixWorldKey][matrixElKey]);
 	matrix.decompose(target.position, target.quaternion, target.scale);
 }

 doOnce = (fn) => {
 	let done = false;
 	return (...args) => {
 		if (!done) {
 			done = true;
 			return fn(...args);
 		}
 	};
 };

 function checkWorldCamera(object) {
 	if (worldCamera && object.uuid === worldCamera.uuid) {
 		return;
 	}
 	let hasProjectionMatrix = false;
 	for (const key in object) {
 		const element = object[key];
 		if (!element) continue;
 		if (typeof element == 'object') {
 			if (hasProjectionMatrix) continue;
 			const valueKey = Object.keys(element)[0];
 			const value = element[valueKey];
 			if (Array.isArray(value) && value[11] === -1) {
 				hasProjectionMatrix = true;
 				matrixElKey = valueKey;
 				projectionMatrixKey = key;
 			}
 		} else if (typeof element === 'function') {
 			const code = element.toString();
 			const match = /verse'\]\(this\['([^']+)'\]\);/.exec(code);
 			if (match) {
 				matrixWorldKey = match[1];
 			}
 		}
 		if (hasProjectionMatrix && matrixWorldKey) {
 			console.log('Found camera', {
 				object
 			}, object);
 			worldCamera = object;
 			object[projectionMatrixKey] = new Proxy(object[projectionMatrixKey], {
 				get: function(target, prop, receiver) {
 					setTransform(camera, object, false);
 					camera.near = worldCamera.near;
 					camera.far = worldCamera.far;
 					camera.aspect = worldCamera.aspect;
 					camera.fov = worldCamera.fov;
 					camera.updateProjectionMatrix();
 					worldCamera = object;
 					window.worldCamera = object;
 					return Reflect.get(...arguments);
 				}
 			});
 			break;
 		}
 	}
 }

 function checkWorldScene(object) {
 	if (worldScene || object instanceof THREE.Scene) return;
 	for (const key in object) {
 		const element = object[key];
 		if (!element) continue;
 		if (Array.isArray(element) && element.length === 9) {
 			const value = element[0];
 			if (value && typeof value === 'object' && value.hasOwnProperty('uuid')) {
 				childrenKey = key;
 			}
 		}
 		if (childrenKey) {
 			console.log('Found scene', {
 				childrenKey
 			}, object);
 			worldScene = object;
 			window.worldScene = object;
 			renderer.setAnimationLoop(animate);
 			break;
 		}
 	}
 }

 Object.defineProperty(Object.prototype, 'overrideMaterial', {
 	get: function() {
 		checkWorldScene(this);
 		return this._overrideMaterial;
 	},
 	set: function(value) {
 		this._overrideMaterial = value;
 	}
 });
 Object.defineProperty(Object.prototype, 'far', {
 	get: function() {
 		checkWorldCamera(this);
 		return this._far;
 	},
 	set: function(value) {
 		this._far = value;
 	}
 });

 function isPlayer(entity) {
 	try {
 		return entity[childrenKey].length > 2 || !entity[childrenKey][1].geometry;
 	} catch {
 		return false;
 	}
 }

 function isBlock(entity) {
 	try {
 		const mesh = entity[childrenKey][0];
 		return mesh.geometry.index.count === 36;
 	} catch {
 		return false;
 	}
 }

 function isItem(entity) {
 	try {
 		const mesh = entity[childrenKey][0];
 		if (mesh.geometry) {
 			return ((!isBlock(entity)) && (!isPlayer(entity)));
 		} else {
 			return !(entity[childrenKey].length > 2 || !entity[childrenKey][1].geometry);
 		}
 	} catch (e) {
 		return false;
 	}
 }

 function claimAds() {
 	document.querySelectorAll('svg').forEach(svg => {
 		if (svg.getAttribute('data-icon') === 'play-circle') {
 			svg.closest('div').click();
 			console.log('Claimed ads');
 		}
 	});
 }

 const context2DFillTextHandler = {
 	apply: function(target, thisArg, argumentsList) {
 		thisArg.canvas.lastText = argumentsList[0];
 		return Reflect.apply(...arguments);
 	}
 };
 CanvasRenderingContext2D.prototype.fillText = new Proxy(CanvasRenderingContext2D.prototype.fillText, context2DFillTextHandler);

 function isEnnemy(entity) {
 	for (const child of entity[childrenKey]) {
 		try {
 			const matImage = child.material.map.image;
 			if ((matImage instanceof HTMLCanvasElement && matImage.hasOwnProperty('lastText'))) {
 				entity.playerName = matImage.lastText;
 				if (entity.playerName && /^\d+$/.test(entity.playerName.trim())) {
 					let number = Number(entity.playerName);
 					if (number >= 1 && number <= 100) {
 						console.log(number + " Is enemy corrected");
 						return true;
 					}
 				}
 				return false;
 			}
 		} catch {}
 	}
 	return true;
 }

 function isFriend(entity) {
 	for (let friend of friends) {
 		if (entity.playerName) {
 			if (entity.playerName.toLowerCase() == friend.toLowerCase()) {
 				// console.log(entity.playerName + ' is a friend');
 				return true;
 			}
 		}
 	}
 	return false;
 }

 function fireDown(fireKey) {
 	if (fireKey === "key") {
 		document.dispatchEvent(new KeyboardEvent('keydown', {
 			bubbles: true,
 			cancelable: true,
 			key: 'f',
 			code: 'KeyF',
 			keyCode: 70,
 			charCode: 102
 		}));
 	} else if (fireKey === "mouse") {
 		document.dispatchEvent(new MouseEvent('mousedown', {
 			bubbles: true,
 			cancelable: true,
 			button: 0
 		}));
 	} else {
 		console.log("error");
 	}
 }

 function fireUp(fireKey) {
 	if (fireKey === "key") {
 		document.dispatchEvent(new KeyboardEvent('keyup', {
 			bubbles: true,
 			cancelable: true,
 			key: 'f',
 			code: 'KeyF',
 			keyCode: 70,
 			charCode: 102
 		}));
 	} else if (fireKey === "mouse") {
 		document.dispatchEvent(new MouseEvent('mouseup', {
 			bubbles: true,
 			cancelable: true,
 			button: 0
 		}));
 	} else {
 		console.log("error");
 	}
 }

 let temp1 = 1;

 function setFiring(shouldFire, targetDistance) {
 	let mode = "mouse";
 	if (shouldFire) {
 		temp1 = 1;
 		let fireDelay = 0;
 		let slowFire = false;
 		if (espConfig.gunDelay == 1 && targetDistance > 40) {
 			fireDelay = 100 + Math.min(50, targetDistance - 40);
 			slowFire = true;
 		} else if (espConfig.gunDelay == 3 && targetDistance > 25) {
 			fireDelay = 150 + Math.min(50, targetDistance - 30) * 4;
 			slowFire = true;
 		} else if (espConfig.gunDelay == 2 || espConfig.gunDelay == 3) {
 			fireDelay = 50;
 		}
 		if ((fireDelay > 0 && !slowFire) || (slowFire && !isLeftClick)) {
 			setTimeout(() => {
 				fireDown(mode);
 				setTimeout(() => {
 					fireUp(mode);
 				}, 30);
 			}, fireDelay);
 		} else {
 			fireDown(mode);
 		}
 	}
 	if (temp1 == 1 && !shouldFire) {
 		temp1 = 0;
 		setTimeout(() => {
 			fireUp(mode);
 		}, 10);
 	}
 }

 const colors = {
 	ennemy: new THREE.Color(0xff0000),
 	player: new THREE.Color(0x00ff00),
 	blue: new THREE.Color(0x0000ff),
 	orange: new THREE.Color(0xff7f00),
 	purple: new THREE.Color(0xbf00ff),
 	self: new THREE.Color(0x00FFFF)
 };

 const outlineMats = {
 	ennemy: new THREE.LineBasicMaterial({
 		color: colors.ennemy
 	}),
 	player: new THREE.LineBasicMaterial({
 		color: colors.player
 	}),
 	friend: new THREE.LineBasicMaterial({
 		color: colors.blue
 	}),
 	item: new THREE.LineBasicMaterial({
 		color: colors.orange
 	}),
 	block: new THREE.LineBasicMaterial({
 		color: colors.purple
 	}),
 	chunk: new THREE.LineBasicMaterial({
 		color: colors.blue
 	})
 };
 const meshMats = {
 	ennemy: new THREE.MeshBasicMaterial({
 		color: colors.ennemy,
 		transparent: true,
 		opacity: 0.5
 	}),
 	player: new THREE.MeshBasicMaterial({
 		color: colors.player,
 		transparent: true,
 		opacity: 0.5
 	}),
 	friend: new THREE.MeshBasicMaterial({
 		color: colors.blue,
 		transparent: true,
 		opacity: 0.5
 	}),
 	item: new THREE.MeshBasicMaterial({
 		color: colors.orange,
 		transparent: true,
 		opacity: 0.65
 	}),
 	block: new THREE.MeshBasicMaterial({
 		color: colors.purple,
 		transparent: true,
 		opacity: 0.65
 	})
 };
 const boxMeshMats = {
 	ennemy: new THREE.MeshBasicMaterial({
 		color: colors.ennemy,
 		transparent: true,
 		opacity: meshMats.ennemy.opacity / 2
 	}),
 	player: new THREE.MeshBasicMaterial({
 		color: colors.player,
 		transparent: true,
 		opacity: meshMats.player.opacity / 2
 	}),
 	friend: new THREE.MeshBasicMaterial({
 		color: colors.blue,
 		transparent: true,
 		opacity: meshMats.friend.opacity / 2
 	}),
 	item: new THREE.MeshBasicMaterial({
 		color: colors.orange,
 		transparent: true,
 		opacity: meshMats.item.opacity / 2
 	}),
 	block: new THREE.MeshBasicMaterial({
 		color: colors.purple,
 		transparent: true,
 		opacity: meshMats.block.opacity / 2
 	}),
 	self: new THREE.MeshBasicMaterial({
 		color: colors.self,
 		transparent: true,
 		opacity: meshMats.block.opacity / 2
 	})
 };

 const raycaster = new THREE.Raycaster();
 const edgesGeometry = new THREE.EdgesGeometry(new THREE.BoxGeometry(1, 1, 1).translate(0, 0.5, 0));
 const boxGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
 const box2dGeometry = new THREE.PlaneGeometry(1, 1);
 const box2dEdge = new THREE.EdgesGeometry(box2dGeometry);

 const lineGeometry = new THREE.BufferGeometry();
 const lineMaterial = new THREE.LineBasicMaterial({
 	vertexColors: true,
 	transparent: true
 });
 const line = new THREE.LineSegments(lineGeometry, lineMaterial);
 line.frustumCulled = false;
 scene.add(line);

 const dummyLookAt = new THREE.PerspectiveCamera();
 const myDummy = new THREE.PerspectiveCamera();

 const color = new THREE.Color();

 const chunkMaterial = new THREE.MeshNormalMaterial();

 const boxPlayerGeometry = new THREE.BoxGeometry(1, 1, 1);

 // Crosshair circle
 const crosshairGeometry = new THREE.CircleGeometry(0.5, 16);
 const crosshairMaterial = new THREE.LineBasicMaterial({
 	color: 0xffffff,
 	transparent: true,
 	opacity: 1
 });
 const crosshair = new THREE.LineLoop(crosshairGeometry, crosshairMaterial);
 const crosshairGeometry2 = new THREE.CircleGeometry(0.5, 16);
 const crosshairMaterial2 = new THREE.LineBasicMaterial({
 	color: 0x0000ff,
 	transparent: true,
 	opacity: 0.5
 });
 const crosshair2 = new THREE.LineLoop(crosshairGeometry2, crosshairMaterial2);
 camera.add(crosshair);
 camera.add(crosshair2);
 scene.add(camera);

 function calculateValue(maxAngleInRadians) {
 	const a = -79.83;
 	const b = -30.06;
 	const c = -0.90;
 	return a * Math.exp(b * maxAngleInRadians) + c;
 }

 function lookUp(camPos, tarPos) {
 	let flatDist = Math.sqrt((tarPos.x - camPos.x) * (tarPos.x - camPos.x) + (tarPos.z - camPos.z) * (tarPos.z - camPos.z));
 	let vertDist = tarPos.y - camPos.y;
 	if (vertDist > flatDist / 3) {
 		return true;
 	}
 	return false;
 }
 let temp3;

 function update() {
 	worldCamera.rotation.set(dummyLookAt.rotation.x, dummyLookAt.rotation.y, dummyLookAt.rotation.z);
 	requestAnimationFrame(update);
 }

 function createSprite(text, bgColor = '#000') {
 	const fontSize = 40;
 	const strokeSize = 10;
 	const font = 'normal ' + fontSize + 'px Arial';

 	const canvas = document.createElement('canvas');
 	const ctx = canvas.getContext('2d');

 	ctx.font = font;
 	canvas.width = ctx.measureText(text).width + strokeSize * 2;
 	canvas.height = fontSize + strokeSize * 2;

 	ctx.fillStyle = bgColor;
 	ctx.fillRect(0, 0, canvas.width, canvas.height);

 	ctx.font = font;
 	ctx.fillStyle = 'white';
 	ctx.textBaseline = 'top';
 	ctx.textAlign = 'left';
 	ctx.lineWidth = strokeSize;
 	ctx.strokeText(text, strokeSize, strokeSize);
 	ctx.fillText(text, strokeSize, strokeSize);

 	const material = new THREE.SpriteMaterial({
 		map: new THREE.CanvasTexture(canvas),
 		sizeAttenuation: false,
 		fog: false,
 		depthTest: false,
 		depthWrite: false
 	});
 	const sprite = new THREE.Sprite(material);
 	sprite.center.y = 0;

 	sprite.scale.y = 0.02;
 	sprite.scale.x = sprite.scale.y * canvas.width / canvas.height;

 	return sprite;
 }

 function autoRespawn() {
 	if (espConfig.autoRespawn === true) {
 		const respawnbtn = document.querySelector('.sc-kdneuM.faxTIQ')
 		if (respawnbtn) {
 			respawnbtn.click();
 		}
 	}
 }
 setInterval(autoRespawn, 100);

 function adBlock() {
 	if (!espConfig.adBlock) return;
 	var ad1 = document.getElementById('voxiom-io_300X250_1');
 	var ad2 = document.getElementById('voxiom-io_970X250_1');
 	var ad3 = document.querySelector('ad_unit');
 	var ad4 = document.getElementById('voxiom-io_300X250_3');
 	var ad5 = document.getElementById('voxiom-io_300X250_2');
 	var ad6 = document.getElementById('mys-wrapper');
 	var ad7 = document.getElementsByClassName('default-creative-container');
 	var ad8 = document.getElementById('voxiom-io_728x90_1');
 	var ad9 = document.getElementById('voxiom-io_728x90_2');
 	var ad10 = document.getElementById('voxiom-io_728x90_3');
 	var ad11 = document.getElementById('ad_position_box');

 	if (ad1) ad1.remove();
 	if (ad2) ad2.remove();
 	if (ad3) ad3.remove();
 	if (ad4) ad4.remove();
 	if (ad5) ad5.remove();
 	if (ad6) ad6.remove();
 	if (ad7.length > 0) {
 		for (let i = 0; i < ad7.length; i++) {
 			ad7[i].remove();
 		}
 	}
 	if (ad8) ad8.remove();
 	if (ad9) ad9.remove();
 	if (ad10) ad10.remove();
 	if (ad11) ad11.remove();
 }
 setInterval(adBlock, 100);

 function key2pos(source) {
 	const values = Object.values(source);
 	return {
 		x: values[0],
 		y: values[1],
 		z: values[2]
 	};
 }

 const cube = new THREE.Mesh(boxPlayerGeometry, boxMeshMats.self);
 scene.add(cube);

 function pos2key(obj, pos) {
 	const keys = Object.keys(obj);
 	return {
 		[keys[0]]: pos.x,
 		[keys[1]]: pos.y,
 		[keys[2]]: pos.z
 	};
 }

 function getDist(camPos, tarPos, isChunk) {
 	tarPos = key2pos(tarPos);
 	let offset = isChunk ? 8 : 0;
 	let dx, dy, dz;
 	if ("Ybb" in tarPos) {
 		dx = tarPos.Ybb - offset - camPos.x;
 		dy = tarPos.YbY - offset - camPos.y;
 		dz = tarPos.YbM - offset - camPos.z;
 	} else if ("x" in tarPos) {
 		dx = tarPos.x - offset - camPos.x;
 		dy = tarPos.y - offset - camPos.y;
 		dz = tarPos.z - offset - camPos.z;
 	} else {
 		console.log(tarPos || "error");
 	}
 	return Math.sqrt(dx * dx + dy * dy + dz * dz);
 }

 function xyz2YawPitch(camera) {
 	const direction = new THREE.Vector3();
 	camera.getWorldDirection(direction);
 	const yaw = Math.atan2(direction.x, -direction.z);
 	const pitch = Math.asin(direction.y);
 	return {
 		yaw: yaw,
 		pitch: pitch
 	}
 }

 function yawPitch2XYZ(camera) {
 	const dummy = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
 	// setTransform(dummy, worldCamera, false);
 	const cosPitch = Math.cos(camera.pitch);
 	const direction = new THREE.Vector3(
 		-Math.sin(camera.yaw) * cosPitch,
 		Math.sin(camera.pitch),
 		-Math.cos(camera.yaw) * cosPitch
 	);
 	dummy.position.set(0, 0, 0);
 	dummy.lookAt(direction);
 	return {
 		x: dummy.rotation.x,
 		y: -dummy.rotation.y,
 		z: -dummy.rotation.z
 	};
 }

 function r2d(cam) {
 	let c = 180 / Math.PI;
 	let y = cam.yaw * c;
 	let p = cam.pitch * c;
 	let limit = 91; // no limit
 	if (p > limit) {
 		p = limit;
 	} else if (p < -limit) {
 		p = -limit;
 	}
 	return {
 		yaw: y,
 		pitch: p
 	}
 }

 function d2r(cam) {
 	let c = Math.PI / 180;
 	let y = cam.yaw * c;
 	let p = cam.pitch * c;
 	return {
 		yaw: y,
 		pitch: p
 	}
 }

 function angleDiff(a, b) {
 	let diff = a - b;
 	while (diff > Math.PI) diff -= 2 * Math.PI;
 	while (diff < -Math.PI) diff += 2 * Math.PI;
 	return diff;
 }

 window.debug = false;
 let currentRot = {
 	yaw: 0,
 	pitch: 0
 };
 let wasAimbotActive = false;

 function animate(time) {
 	a1 = abc123 ? 0.5 : 0.5;
 	if (!abc123) {
 		return;
 	}
 	let cam1 = xyz2YawPitch(worldCamera);
 	let cam2 = yawPitch2XYZ(cam1);
 	let selfPos = key2pos(worldCamera.position);
 	watermark.style.display = espConfig.waterMark ? 'block' : 'none';
 	// Update Hack List
 	if (espConfig.hackList) {
 		let enabledHacks = [];
 		Object.values(categories).flat().forEach(control => {
 			if (control.type === 'checkbox' && espConfig[control.key] === true) {
 				enabledHacks.push(control.label);
 			} else if (control.type === 'select' && espConfig[control.key] !== 0 && espConfig[control.key] !== false) {
 				enabledHacks.push(`${control.label}: ${Object.keys(control.options).find(key => control.options[key] === espConfig[control.key])}`);
 			}
 		});
 		hackListElement.innerHTML = 'Hack List';
 		hackListElement.innerHTML += enabledHacks.length > 0 ? enabledHacks.map(hack => `<div class="hack-list-item">${hack}</div>`).join('') : 'No Hacks Enabled';
 	} else {
 		hackListElement.innerHTML = 'Hack List';
 	}
 	hackListElement.style.display = espConfig.hackList ? 'block' : 'none';
 	espConfig.friends = friends;
 	let freecamMove = {
 		x: 0,
 		y: 0,
 		z: 0
 	}
 	if (uKey) freecamMove.y = -0.1;
 	if (oKey) freecamMove.y = 0.1;
 	if (kKey) freecamMove.z = 0.1;
 	if (iKey) freecamMove.z = -0.1;
 	if (lKey) freecamMove.x = 0.1;
 	if (jKey) freecamMove.x = -0.1;
 	let freecamPos = camera.localToWorld(new THREE.Vector3(freecamMove.x * espConfig.freecamSpeed, freecamMove.y * espConfig.freecamSpeed, freecamMove.z * espConfig.freecamSpeed));
 	cube.position.copy(selfPos);
 	if (cKey) {
 		cube.scale.set(0.5, 0.9, 0.5);
 		cube.position.y += 0.45;
 		cube.position.y -= 0.77;
 	} else {
 		cube.scale.set(0.5, 1.25, 0.5);
 		cube.position.y += 0.625;
 		cube.position.y -= 1.15;
 	}
 	if (espConfig.sprint && wKey) {
 		temp3 = 1;
 		setTimeout(() => {
 			document.dispatchEvent(new KeyboardEvent('keydown', {
 				key: 'Shift',
 				keyCode: 16,
 				code: 'ShiftLeft',
 				shiftKey: true,
 				bubbles: false
 			}));
 		}, 10);
 		if (isLeftClick || fKey) {
 			setTimeout(() => {
 				document.dispatchEvent(new KeyboardEvent('keyup', {
 					key: 'Shift',
 					keyCode: 16,
 					code: 'ShiftLeft',
 					shiftKey: true,
 					bubbles: false
 				}));
 			}, 10);
 		}
 	}
 	if ((!espConfig.sprint || !wKey) && temp3 == 1) {
 		setTimeout(() => {
 			document.dispatchEvent(new KeyboardEvent('keyup', {
 				key: 'Shift',
 				keyCode: 16,
 				code: 'ShiftLeft',
 				shiftKey: true,
 				bubbles: false
 			}));
 		}, 50);
 		temp3 = 0;
 	}
 	if (fKey && ((espConfig.twerk == 1 && cKey) || (espConfig.twerk == 2))) {
 		setTimeout(() => {
 			document.dispatchEvent(new KeyboardEvent('keydown', {
 				key: 'c',
 				keyCode: 67,
 				code: 'KeyC',
 				shiftKey: false,
 				bubbles: false
 			}));
 		}, 100);
 		setTimeout(() => {
 			document.dispatchEvent(new KeyboardEvent('keyup', {
 				key: 'c',
 				keyCode: 67,
 				code: 'KeyC',
 				shiftKey: false,
 				bubbles: false
 			}));
 		}, 300);
 	}
 	var now = Date.now();
 	const entities = childrenKey ? worldScene[childrenKey][5][childrenKey] : [];
 	const lineOrigin = camera.localToWorld(new THREE.Vector3(0, 0, -10));
 	const linePositions = [];
 	crosshair.position.z = calculateValue(0.02);
 	crosshair2.position.z = calculateValue(espConfig.maxAngleInRadians);
 	crosshair.visible = (espConfig.customCrosshair == 2) || (espConfig.customCrosshair == 1 && !fKey);
 	crosshair2.visible = espConfig.aimRadius;
 	const colorArray = [];
 	const aimbotTarget = {
 		angleDifference: Infinity
 	};
 	const chunks = [];
 	const gameChunks = childrenKey ? worldScene[childrenKey][4][childrenKey] : [];
 	gameChunks.sort((a, b) => {
 		const distanceA2 = getDist(camera.position, a.position, true);
 		const distanceB2 = getDist(camera.position, b.position, true);
 		return distanceA2 - distanceB2;
 	});
 	let chunkLimit = 1;
 	for (const chunk of gameChunks) {
 		if (!chunk || !chunk.geometry) continue;
 		const chunkPositions = chunk.geometry.attributes.position.array;
 		if (!chunkPositions || !chunkPositions.length) continue;
 		if (!chunk.myChunk) {
 			const geometry = new THREE.BufferGeometry();
 			geometry.setAttribute('position', new THREE.Float32BufferAttribute(chunkPositions, 3));
 			geometry.setIndex(new THREE.BufferAttribute(chunk.geometry.index.array, 1));
 			geometry.computeVertexNormals();
 			geometry.computeBoundingBox();
 			chunk.myChunk = new THREE.Mesh(geometry, chunkMaterial);
 			chunk.myChunk.box = new THREE.Box3();
 		}
 		const myChunk = chunk.myChunk;
 		if (chunk.material) {
 			chunk.material.wireframe = (espConfig.xray == 1);
 			let keys = Object.keys(chunk.material);
 			chunk.material[keys[18]] = !(espConfig.xray == 2);
 			// console.log(keys);
 		}
 		setTransform(myChunk, chunk, false);
 		myChunk.updateMatrixWorld();
 		myChunk.box.copy(myChunk.geometry.boundingBox).applyMatrix4(myChunk.matrixWorld);
 		chunks.push(myChunk);
 	}

 	chunks.sort((a, b) => {
 		const distanceA = getDist(camera.position, a.position, false);
 		const distanceB = getDist(camera.position, b.position, false);
 		return distanceB - distanceA;
 	});
 	entities.sort((a, b) => {
 		const distanceA2 = getDist(selfPos, a.position, false);
 		const distanceB2 = getDist(selfPos, b.position, false);
 		return distanceA2 - distanceB2;
 	});
 	const shouldAimbot = espConfig.aimbot === 3 || (espConfig.aimbot === 1 && fKey) || (espConfig.aimbot === 2);

 	let zoom = espConfig.zoom;
 	if (bKey) {
 		worldCamera.zoom = zoom * (1 + zoom / 2);
 		camera.zoom = zoom * (1 + zoom / 2);
 	} else if (vKey) {
 		worldCamera.zoom = zoom;
 		camera.zoom = zoom;
 	} else {
 		worldCamera.zoom = 1;
 		camera.zoom = 1;
 	}
 	try {
 		const blockColors = {
 			goldenChest: new THREE.Color(0xFF7F00), // Bright Vivid Orange (Gold-like, high visibility)
 			ironChest: new THREE.Color(0xD8D8F0), // Cool Silvery-Gray (easier to see than pure white)
 			woodenChest: new THREE.Color(0x8B4513), // SaddleBrown (natural wood tone)
 			bombChest: new THREE.Color(0xFF3300), // Strong Red-Orange (intense and urgent)
 			ironOre: new THREE.Color(0xB0C4DE), // LightSteelBlue (cool metallic tone)
 			emeraldOre: new THREE.Color(0x50C878), // Emerald Green (classic gem look)
 			rubyOre: new THREE.Color(0xE0115F), // Deep Ruby Red
 			sapphireOre: new THREE.Color(0x0F52BA), // Sapphire Blue (deep and vivid)
 			sulfurOre: new THREE.Color(0xFFFF00), // Bright Yellow (sulfur-like and highly visible)
 			don1: new THREE.Color(0xADD8E6), // Light Blue (unchanged)
 			don2: new THREE.Color(0xADD8E6), // Light Blue (unchanged)
 			don3: new THREE.Color(0xADD8E6) // Light Blue (unchanged)
 		};

 		const keys2skip = {
 			goldenChest: espConfig.chestEsp,
 			ironChest: espConfig.chestEsp,
 			woodenChest: espConfig.chestEsp,
 			bombChest: espConfig.chestEsp,
 			ironOre: espConfig.oreEsp,
 			emeraldOre: espConfig.oreEsp,
 			rubyOre: espConfig.oreEsp,
 			sapphireOre: espConfig.oreEsp,
 			sulfurOre: espConfig.oreEsp,
 			don1: espConfig.dungeonBlockEsp,
 			don2: espConfig.dungeonBlockEsp,
 			don3: espConfig.dungeonBlockEsp
 		};
 		if (RenderBlocks) {
 			const playerPos = key2pos(worldCamera.position);
 			for (let key in RenderBlocks) {
 				if (!keys2skip[key]) {
 					for (let block of RenderBlocks[key]) {
 						block.logged = false;
 						if (block.myObject3D && block.myObject3D.renderBox) {
 							block.myObject3D.remove(block.myObject3D.renderBox);
 							scene.remove(block.myObject3D); // Optional: remove entire object
 							block.myObject3D.renderBox = null;
 							block.myObject3D = null;
 						}
 					}
 					continue;
 				}
 				RenderBlocks[key].sort((a, b) => {
 					const da = (a.x / 2 - playerPos.x) ** 2 + (a.y / 2 - playerPos.y) ** 2 + (a.z / 2 - playerPos.z) ** 2;
 					const db = (b.x / 2 - playerPos.x) ** 2 + (b.y / 2 - playerPos.y) ** 2 + (b.z / 2 - playerPos.z) ** 2;
 					return da - db; // Closest first
 				});
 				let color = blockColors[key] || new THREE.Color(0xffffff);
 				const mat = new THREE.MeshBasicMaterial({
 					color,
 					transparent: true,
 					opacity: 0.5
 				});
 				for (let i = 0; i < Math.min(espConfig.blockLimit, RenderBlocks[key].length); i++) {
 					let block = RenderBlocks[key][i];
 					let temp = {
 						x: block.x / 2,
 						y: block.y / 2,
 						z: block.z / 2,
 					}
 					block.distance = getDist(camera.position, temp, false);
 					for (let j = RenderBlocks[key].length - 1; j > i; j--) {
 						let block2 = RenderBlocks[key][j];
 						let dupe = (block.x == block2.x) && (block.y == block2.y) && (block.z == block2.z);
 						if (dupe) RenderBlocks[key].splice(j, 1);
 					}
 					if (!block.myObject3D) {
 						block.myObject3D = new THREE.Object3D();
 						block.myObject3D.frustumCulled = false;
 						block.logged = false;
 						block.discovered = now;
 						continue;
 					}

 					if (typeof block.visible === 'boolean' && !block.visible) {
 						block.myObject3D.visible = false;
 						continue;
 					}

 					if (!block.loaded && now - block.discovered < 500) continue;
 					if (!block.logged) {
 						block.logged = true;
 						const renderBox = new THREE.Mesh(boxGeometry, mat);
 						renderBox.scale.set(1, 1, 1);
 						renderBox.frustumCulled = false;
 						block.myObject3D.add(renderBox);
 						block.myObject3D.renderBox = renderBox;
 						scene.add(block.myObject3D);
 					}
 					block.myObject3D.visible = true;
 					block.myObject3D.renderBox.visible = true;
 					block.myObject3D.position.x = block.x / 2 + 0.25;
 					block.myObject3D.position.y = block.y / 2 + 0.25;
 					block.myObject3D.position.z = block.z / 2 + 0.25;
 				}
 			}
 		}
 	} catch (e) {
 		// console.error('Render error:', e);
 	}
 	let itemLimit = espConfig.itemLimit == 0 ? 1e10 : espConfig.itemLimit;
 	let first = true;
 	entities.forEach(entity => {
 		if (!entity || !entity.parent) return;
 		if (!entity.myObject3D) {
 			entity.myObject3D = new THREE.Object3D();
 			entity.myObject3D.frustumCulled = false;
 			entity.discovered = now;
 			entity.loaded = false;
 			entity.logged = false;
 			entity.ennemy = null;
 			return;
 		}
 		if (typeof entity.visible === 'boolean' && !entity.visible) {
 			entity.myObject3D.visible = false;
 			return;
 		}
 		if (!entity.loaded && now - entity.discovered < 500) return;
 		entity.loaded = true;
 		entity.distance = getDist(selfPos, entity.position);
 		if (isItem(entity) && ((espConfig.showItems == 0 || espConfig.showItems == 2) || itemLimit <= 0)) {
 			entity.logged = false;
 			return;
 		}
 		if (isBlock(entity) && ((espConfig.showItems == 0 || espConfig.showItems == 1) || itemLimit <= 0)) {
 			entity.logged = false;
 			return;
 		}
 		if (itemLimit > 0 && (!entity.logged)) {
 			entity.logged = true;
 			if (isItem(entity)) {
 				entity.isItem = true;
 				const itemBox = new THREE.LineSegments(edgesGeometry, outlineMats.item);
 				itemBox.scale.set(0.15, 0.15, 0.15);
 				itemBox.frustumCulled = false;
 				entity.myObject3D.add(itemBox);
 				entity.myObject3D.itemBox = itemBox;
 				setTransform(entity.myObject3D, entity, false);
 				scene.add(entity.myObject3D);
 			} else if (isBlock(entity)) {
 				entity.isBlock = true;
 				const blockBox = new THREE.LineSegments(edgesGeometry, outlineMats.block);
 				blockBox.scale.set(0.15, 0.15, 0.15);
 				blockBox.frustumCulled = false;
 				entity.myObject3D.add(blockBox);
 				entity.myObject3D.itemBox = blockBox;
 				setTransform(entity.myObject3D, entity, false);
 				scene.add(entity.myObject3D);
 			}
 		}
 		if ((!entity.logged || entity.friend != isFriend(entity)) && isPlayer(entity)) {
 			const skinnedMesh = entity[childrenKey][1][childrenKey][3];
 			const isSneak = skinnedMesh.skeleton.bones[4].rotation._x > 0.1;
 			entity.isPlayer = true;
 			entity.logged = true;
 			entity.ennemy = isEnnemy(entity);
 			entity.friend = isFriend(entity);
 			const sprite = createSprite(entity.playerName, colors.friend);
 			entity.myObject3D.add(sprite);
 			entity.myObject3D.sprite = sprite;
 			if (friendCount != friends.length && entity.friend) {
 				friendCount = friends.length;
 			}
 			const playerMesh = new THREE.Mesh(skinnedMesh.geometry, entity.ennemy ? meshMats.ennemy : entity.friend ? meshMats.friend : meshMats.player);
 			entity.myObject3D.add(playerMesh);
 			entity.myObject3D.playerMesh = playerMesh;
 			const playerMiniMap = new THREE.Mesh(skinnedMesh.geometry, entity.ennemy ? meshMats.ennemy : entity.friend ? meshMats.friend : meshMats.player);
 			playerMiniMap.visible = false;
 			entity.myObject3D.add(playerMiniMap);
 			entity.myObject3D.playerMiniMap = playerMiniMap;
 			const outline = new THREE.LineSegments(edgesGeometry, entity.ennemy ? outlineMats.ennemy : entity.friend ? outlineMats.friend : outlineMats.player);
 			outline.frustumCulled = false;
 			entity.myObject3D.add(outline);
 			entity.myObject3D.outline = outline;
 			const boxMesh = new THREE.Mesh(boxPlayerGeometry, entity.ennemy ? boxMeshMats.ennemy : entity.friend ? boxMeshMats.friend : boxMeshMats.player);
 			boxMesh.position.y = 0.625;
 			entity.myObject3D.add(boxMesh);
 			entity.myObject3D.boxMesh = boxMesh;
 			const playerWireframe = new THREE.LineSegments(skinnedMesh.geometry, entity.ennemy ? outlineMats.ennemy : entity.friend ? outlineMats.friend : outlineMats.player);
 			entity.myObject3D.add(playerWireframe);
 			entity.myObject3D.playerWireframe = playerWireframe;
 			const box2d = new THREE.LineSegments(box2dEdge, entity.ennemy ? outlineMats.ennemy : entity.friend ? outlineMats.friend : outlineMats.player);
 			box2d.position.y = 0.625;
 			entity.myObject3D.add(box2d);
 			entity.myObject3D.box2d = box2d;
 			const triggerMesh = new THREE.Mesh(boxPlayerGeometry, entity.ennemy ? boxMeshMats.ennemy : entity.friend ? boxMeshMats.friend : boxMeshMats.player);
 			triggerMesh.position.y = 0.625;
 			entity.myObject3D.add(triggerMesh);
 			entity.myObject3D.triggerMesh = triggerMesh;
 			const dir = new THREE.Vector3(0, 0, -1);
 			const origin = new THREE.Vector3(0, 1, 0);
 			const arrowLookingAt = new THREE.ArrowHelper(dir, origin, 1, entity.ennemy ? colors.ennemy : colors.player, 0.5, .4);
 			playerMiniMap.add(arrowLookingAt);
 			setTransform(entity.myObject3D, entity, false);
 			scene.add(entity.myObject3D);
 		}
 		if (entity.isPlayer) {
 			let Ox1 = camera.position.clone();
 			entity.myObject3D.box2d.lookAt(Ox1);
 			if (!entity.lastPosition) {
 				entity.lastPosition = entity.myObject3D.position.clone();
 			}
 			let mtp = espConfig.prediction;
 			entity.predictedTargetPosition = key2pos(entity.position);
 			entity.predictedTargetPosition.x += ((entity.predictedTargetPosition.x - entity.lastPosition.x) * mtp);
 			entity.predictedTargetPosition.y += ((entity.predictedTargetPosition.y - entity.lastPosition.y) * mtp);
 			entity.predictedTargetPosition.z += ((entity.predictedTargetPosition.z - entity.lastPosition.z) * mtp);
 			if (first) {
 				if (espConfig.autoHvh && (entity.ennemy || espConfig.allEnnemies)) {
 					first = false;
 					let current = key2pos(entity.position)
 					let speed = current.y - entity.lastPosition.y;
 					if (speed >= 0.1) {
 						// Simulate spacebar press
 						document.dispatchEvent(new KeyboardEvent('keydown', {
 							bubbles: true,
 							cancelable: true,
 							key: ' ',
 							code: 'Space',
 							keyCode: 32,
 							charCode: 32
 						}));

 						// Simulate spacebar release after 100ms
 						setTimeout(() => {
 							document.dispatchEvent(new KeyboardEvent('keyup', {
 								bubbles: true,
 								cancelable: true,
 								key: ' ',
 								code: 'Space',
 								keyCode: 32,
 								charCode: 32
 							}));
 						}, 100);

 					}
 				}
 			}

 			entity.myObject3D.playerMesh.rotation.y = -entity[childrenKey][1].rotation._y;
 			entity.myObject3D.outline.rotation.y = -entity[childrenKey][1].rotation._y;
 			entity.myObject3D.boxMesh.rotation.y = -entity[childrenKey][1].rotation._y;
 			entity.myObject3D.playerWireframe.rotation.y = -entity[childrenKey][1].rotation._y;
 			entity.myObject3D.playerMiniMap.rotation.y = -entity[childrenKey][1].rotation._y;
 			entity.myObject3D.triggerMesh.rotation.y = -entity[childrenKey][1].rotation._y;
 			const skinnedMesh = entity[childrenKey][1][childrenKey][3];
 			const isSneak = skinnedMesh.skeleton.bones[4].rotation._x > 0.1;
 			entity.myObject3D.boxMesh.scale.set(0.6, isSneak ? 0.9 : 1.25, 0.35);
 			entity.myObject3D.outline.scale.set(0.6, isSneak ? 0.9 : 1.25, 0.35);
 			entity.myObject3D.playerMesh.scale.set(1, isSneak ? .7 : 1, 1);
 			entity.myObject3D.playerWireframe.scale.set(1, isSneak ? .7 : 1, 1);
 			entity.myObject3D.triggerMesh.scale.set(0.35, isSneak ? 0.875 : 1.25, 0.35);
 			entity.myObject3D.box2d.scale.set(0.5, isSneak ? 0.9 : 1.25);
 			entity.myObject3D.sprite.position.y = entity.isSneak ? 1.1 : 1.5;

 			if (isSneak) {
 				entity.myObject3D.boxMesh.position.y = 0.45;
 				entity.myObject3D.box2d.position.y = 0.45;
 				entity.myObject3D.triggerMesh.position.y = 0.45;
 			} else {
 				entity.myObject3D.boxMesh.position.y = 0.625;
 				entity.myObject3D.box2d.position.y = 0.625;
 				entity.myObject3D.triggerMesh.position.y = 0.625;
 			}

 			entity.myObject3D.visible = true;
 			entity.myObject3D.playerMesh.visible = espConfig.showPlayer === 2 || (espConfig.showPlayer === 1 && (entity.ennemy || entity.friend));
 			entity.myObject3D.boxMesh.visible = espConfig.showBox === 2 || (espConfig.showBox === 1 && (entity.ennemy || entity.friend));
 			entity.myObject3D.outline.visible = espConfig.showOutline === 2 || (espConfig.showOutline === 1 && (entity.ennemy || entity.friend));
 			entity.myObject3D.playerWireframe.visible = espConfig.showWireframe === 2 || (espConfig.showWireframe === 1 && (entity.ennemy || entity.friend));
 			entity.myObject3D.box2d.visible = espConfig.show2dBox === 2 || (espConfig.show2dBox === 1 && (entity.ennemy || entity.friend));
 			entity.myObject3D.sprite.visible = espConfig.showNameTags && !entity.ennemy;
 			entity.myObject3D.triggerMesh.visible = debug;

 			setTransform(entity.myObject3D, entity, false);

 			const pos = entity.myObject3D.position.clone();
 			if (espConfig.prediction > 0) {
 				pos.x = entity.predictedTargetPosition.x;
 				pos.y = entity.predictedTargetPosition.y;
 				pos.z = entity.predictedTargetPosition.z;
 			} else {
 				pos.copy(key2pos(entity.position));
 			}
 			pos.y += espConfig.gunDelay == 2 ? isSneak ? 0.75 : 1.1 : isSneak ? espConfig.sneakHeight : espConfig.heightLine;
 			if (espConfig.gunDelay != 2 && space) {
 				pos.y -= espConfig.jumpAim;
 			} else if (space) {
 				pos.y -= espConfig.jumpAim / 3;
 			}
 			if (lookUp(selfPos, pos) && espConfig.gunDelay != 2 && (isSneak ? espConfig.sneakHeight < 0.875 : espConfig.heightLine < 1.25)) {
 				pos.y += Math.min(0.1, (isSneak ? 0.875 - espConfig.sneakHeight : 1.25 - espConfig.heightLine));
 			}
 			let maxHeight = isSneak ? 0.875 : 1.25;
 			let pos2 = key2pos(entity.position);
 			if (pos.y > pos2.y + maxHeight) {
 				pos.y = pos2.y + maxHeight;
 			}
 			if (espConfig.showLine === 2 || (espConfig.showLine === 1 && (entity.ennemy || entity.friend))) {
 				if (espConfig.rainbow) {
 					color.setHSL(time % 2000 / 2000, 1, 0.5);
 				} else if (entity.friend) {
 					color.set(colors.blue);
 				} else if (espConfig.distanceTracers) {
 					color.lerpColors(colors.ennemy, colors.player, pos.distanceTo(selfPos) / espConfig.ennemyDistance);
 				} else if (entity.ennemy) {
 					color.set(colors.ennemy);
 				} else {
 					color.set(colors.player);
 				}
 				color.a = 1;
 				linePositions.push(lineOrigin.x, lineOrigin.y, lineOrigin.z);
 				linePositions.push(pos.x, pos.y, pos.z);
 				colorArray.push(color.r, color.g, color.b, color.a);
 				colorArray.push(color.r, color.g, color.b, color.a);
 			}
 			if (shouldAimbot && (entity.ennemy || espConfig.allEnnemies)) {
 				if (entity.friend) {
 					return;
 				}
 				const distance = pos.distanceTo(selfPos);
 				const target = pos.clone();
 				const dummy = new THREE.PerspectiveCamera();
 				setTransform(dummy, worldCamera, false);
 				dummy.lookAt(target);
 				const cameraVector = new THREE.Vector3(0, 0, -1).applyQuaternion(camera.quaternion);
 				const targetVector = new THREE.Vector3(0, 0, -1).applyQuaternion(dummy.quaternion);
 				let angleDifference = cameraVector.angleTo(targetVector);
 				if (!espConfig.aimRadius) {
 					angleDifference = 0;
 				}
 				if (angleDifference < espConfig.maxAngleInRadians && angleDifference < aimbotTarget.angleDifference) {
 					const directionV3 = new THREE.Vector3();
 					directionV3.subVectors(target, selfPos).normalize();
 					raycaster.set(selfPos, directionV3);
 					let behindBlock = false;
 					if (espConfig.aimbotIgnoreWall) {
 						aimbotTarget.angleDifference = angleDifference;
 						aimbotTarget.target = target;
 					} else {
 						for (const chunk of chunks) {
 							if (raycaster.ray.intersectsBox(chunk.box)) {
 								const hit = raycaster.intersectObject(chunk)[0];
 								if (hit && hit.distance < distance) {
 									behindBlock = true;
 									break;
 								}
 							}
 						}
 						if (!behindBlock) {
 							aimbotTarget.angleDifference = angleDifference;
 							aimbotTarget.target = target;
 							color.setHSL(time % 2000 / 2000, 1, 0.5);
 						}
 					}
 				}
 			}
 			entity.lastPosition = entity.myObject3D.position.clone();
 		} else if ((entity.isItem || entity.isBlock) && espConfig.showItems != 0 && itemLimit > 0) {
 			itemLimit--;
 			entity.myObject3D.visible = true;
 			entity.myObject3D.itemBox.visible = true;
 			setTransform(entity.myObject3D, entity, false);
 		}
 	});
 	if (espConfig.spinbot && !wKey && !aKey && !sKey && !dKey && !fKey && !cKey && !space) {
 		let tempRot = {
 			x: Math.random() * 10000 - 5000,
 			y: -1e9, //worldCamera.position.YbY,
 			z: Math.random() * 10000 - 5000,
 		}
 		setTransform(dummyLookAt, worldCamera, false);
 		dummyLookAt.lookAt(tempRot.x, tempRot.y, tempRot.z);
 		worldCamera.rotation.set(dummyLookAt.rotation.x, dummyLookAt.rotation.y, dummyLookAt.rotation.z);
 	}
 	// Always update realRot with the current camera rotation (recoil included)
 	realRot = xyz2YawPitch(worldCamera);

 	const aimbotActive = espConfig.aimbot && shouldAimbot && aimbotTarget.target;

 	if (aimbotActive) {
 		// Calculate target look direction
 		setTransform(dummyLookAt, worldCamera, false);
 		dummyLookAt.position = key2pos(worldCamera.position);
 		dummyLookAt.lookAt(aimbotTarget.target);
 		const targetDir = xyz2YawPitch(dummyLookAt);

 		// Compute total yaw/pitch from real camera + current aimbot offset
 		const combinedYaw = realRot.yaw + currentRot.yaw;
 		const combinedPitch = realRot.pitch + currentRot.pitch;

 		// Difference between desired and current combined rotation
 		let deltaYaw = angleDiff(targetDir.yaw, combinedYaw);
 		let deltaPitch = angleDiff(targetDir.pitch, combinedPitch);

 		// Instant threshold (in radians)
 		const instantThreshold = 1e5 * Math.PI / 180;

 		if (Math.abs(deltaYaw) > instantThreshold || Math.abs(deltaPitch) > instantThreshold) {
 			// Instant snap to target
 			currentRot.yaw = angleDiff(targetDir.yaw, realRot.yaw);
 			currentRot.pitch = angleDiff(targetDir.pitch, realRot.pitch);
 		} else {
 			// Smoothly approach target
 			const aimLerpYaw = espConfig.aimPowerX;
 			const aimLerpPitch = espConfig.aimPowerY;
 			currentRot.yaw += deltaYaw * aimLerpYaw;
 			currentRot.pitch += deltaPitch * aimLerpPitch;
 		}

 		// Final target rotation = real camera rotation + offset
 		const finalYaw = realRot.yaw + currentRot.yaw;
 		const finalPitch = realRot.pitch + currentRot.pitch;

 		const tempCam = yawPitch2XYZ({
 			yaw: finalYaw,
 			pitch: finalPitch
 		});

 		if (espConfig.aimDelay === 0) {
 			worldCamera.rotation.set(tempCam.x, tempCam.y, tempCam.z);
 		} else {
 			setTimeout(() => {
 				worldCamera.rotation.set(tempCam.x, tempCam.y, tempCam.z);
 			}, espConfig.aimDelay);
 		}

 		wasAimbotActive = true;
 	} else {
 		// Reset offset if not aiming
 		currentRot = {
 			yaw: 0,
 			pitch: 0
 		};
 		wasAimbotActive = false;
 	}

 	const shouldTrigger = espConfig.triggerBot === 3 || (espConfig.triggerBot === 1 && fKey) || (espConfig.triggerBot === 2 && isRightClick);
 	let targetDistance = -1;
 	if (shouldTrigger) {
 		raycaster.set(selfPos, camera.getWorldDirection(new THREE.Vector3()));
 		let hasHit = false;
 		for (const entity of entities) {
 			if (!entity.myObject3D.visible) continue;
 			if (entity.isPlayer && (entity.ennemy || espConfig.allEnnemies)) {
 				let temp = entity.myObject3D.triggerMesh;
 				let bp = key2pos(entity.position);
 				let ofst = temp.scale.y / 2;
 				temp.isTemp = true;
 				temp.position.x = entity.predictedTargetPosition.x - bp.x;
 				temp.position.y = entity.predictedTargetPosition.y - bp.y + ofst;
 				temp.position.z = entity.predictedTargetPosition.z - bp.z;
 				const hit = raycaster.intersectObject(temp);
 				temp.position = bp;
 				if (hit.length) {
 					hasHit = true;
 					if (entity.friend) {
 						hasHit = false;
 						break;
 					}
 					const distance = hit[0].distance;
 					for (const chunk of chunks) {
 						if (raycaster.ray.intersectsBox(chunk.box)) {
 							const hitBlock = raycaster.intersectObject(chunk)[0];
 							if (hitBlock && hitBlock.distance < distance) {
 								hasHit = false;
 								break;
 							}
 						}
 					}
 					if (hasHit) {
 						targetDistance = getDist(selfPos, entity.position, false);
 						break;
 					}
 				}
 			}
 		}
 		setFiring(hasHit, targetDistance);
 	} else {
 		setFiring(false, targetDistance);
 	}
 	line.geometry.setAttribute('color', new THREE.Float32BufferAttribute(colorArray, 4));
 	line.geometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
 	line.visible = espConfig.showLine;

 	renderer.render(scene, camera);

 	// Minimap
 	const scale = espConfig.mapZoom / 3;
 	entities.forEach(entity => {
 		if (entity.isPlayer) {
 			entity.myObject3D.playerMesh.visible = false;
 			entity.myObject3D.playerWireframe.visible = false;
 			entity.myObject3D.boxMesh.visible = false;
 			entity.myObject3D.outline.visible = false;
 			entity.myObject3D.playerMiniMap.visible = true;
 			entity.myObject3D.playerMiniMap.scale.set(scale, 1, scale);
 		}
 	});
 	if (worldCamera) {
 		line.visible = false;
 		crosshair.visible = false;
 		minimapCamera.left = -espConfig.mapZoom;
 		minimapCamera.right = espConfig.mapZoom;
 		minimapCamera.top = espConfig.mapZoom;
 		minimapCamera.bottom = -espConfig.mapZoom;
 		minimapCamera.position.copy(camera.position);
 		minimapCamera.position.y += 50;
 		minimapCamera.position.z += espConfig.mapOffsetZ;
 		minimapCamera.rotation.y = camera.rotation.y;
 		minimapCamera.updateProjectionMatrix();

 		renderer.getViewport(saveViewport);
 		renderer.getScissor(saveScissor);
 		let saveScissorTest = renderer.getScissorTest();
 		renderer.setViewport(minimapViewport);
 		renderer.setScissor(minimapViewport);
 		renderer.setScissorTest(true);

 		renderer.render(scene, minimapCamera);

 		renderer.setViewport(saveViewport);
 		renderer.setScissor(saveScissor);
 		renderer.setScissorTest(saveScissorTest);
 	}
 	let playerCount = 0;
 	entities.forEach(entity => {
 		if (entity.isPlayer) {
 			playerCount++;
 			entity.myObject3D.playerMiniMap.visible = false;
 		}
 	});
 	let color2;
 	if (playerCount === 0) {
 		color2 = '#018a1f';
 	} else if (playerCount >= 1 && playerCount <= 4) {
 		color2 = '#b0b300';
 	} else if (playerCount >= 5 && playerCount <= 9) {
 		color2 = '#cf8002';
 	} else if (playerCount >= 10 && playerCount <= 14) {
 		color2 = '#b82e00';
 	} else {
 		color2 = '#630000';
 	}
 	playerCountElement.innerHTML = 'Player count: ' + playerCount;
 	playerCountElement.style.color = color2;
 	playerCountElement.style.display = espConfig.playerCount ? 'block' : 'none';

 	const childrenToRemove = [];
 	scene.children.forEach(child => {
 		let temp = child.itemBox || child.blockBox || child.renderBox;
 		if ((child.visible === false && child.type === 'Object3D' && temp)) {
 			childrenToRemove.push(child);
 		}
 		if (child.type === 'Object3D') {
 			child.visible = false;
 		}
 	});
 	childrenToRemove.forEach(child => scene.remove(child));
 	if (espConfig.freecam) {
 		cube.visible = true;
 		worldCamera.position.copy(pos2key(worldCamera.position, freecamPos));
 	} else {
 		cube.visible = false;
 	}
 }
 window.addEventListener('resize', () => {
 	renderer.setSize(window.innerWidth, window.innerHeight);
 });

 // Anti-AFK
 setInterval(() => {
 	if (espConfig.antiAFK) {
 		document.dispatchEvent(new KeyboardEvent('keydown', {
 			keyCode: 87
 		}));
 		setTimeout(() => {
 			document.dispatchEvent(new KeyboardEvent('keyup', {
 				keyCode: 87
 			}));
 			document.dispatchEvent(new KeyboardEvent('keydown', {
 				keyCode: 83
 			}));
 			setTimeout(() => {
 				document.dispatchEvent(new KeyboardEvent('keyup', {
 					keyCode: 83
 				}));
 			}, 500);
 		}, 500);
 	}
 }, 5000);
 // Wait for load
 window.addEventListener('load', () => {
 	console.log('Loaded');
 	if (espConfig.autoClaimAds) {
 		setTimeout(() => {
 			claimAds();
 		}, 500);
 	}
 });
