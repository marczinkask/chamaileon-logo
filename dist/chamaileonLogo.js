(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.chamaileonLogo = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function createChamaileonLogo(config) {
	config = config || {};
	var eyeR = config.eyeR || 5.9367;
	var withLogo = typeof config.withLogo === "undefined" ? true : config.withLogo;
	var withText = config.withText;
	var changeColors = config.changeColors;
	var viewBox = config.viewBox;
	var middle = {
		x: 81.4629 / 2,
		y: 83.3113 / 2
	};
	
	function createPath(d) {
		var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
		path.setAttribute("d", d);
		return path;
	}

	var atSign = createPath("M52.7219,22.3359l-0.3618,3.6613c-3.4074-2.795-7.6477-4.6842-12.2445-4.6842c-11.2485,0-20.3657,9.1185-20.3657,20.3664c0,11.2472,9.1172,20.3651,20.3657,20.3651c5.5375,0,10.5539-2.474,14.2244-6.1472c2.3168,3.6146,5.8085,6.1472,10.8105,6.1472c12.3141,0,16.3123-11.2722,16.3123-24.1547C81.4629,15.3453,63.5599,0,41.3945,0C18.4712,0,0,18.6607,0,41.6787s18.4712,41.6326,41.3945,41.6326c8.9988,0,17.6437-2.9365,24.1797-7.9568l-5.3743-5.9716c-5.3388,3.6778-11.9142,5.8768-18.8054,5.8768c-18.1871,0-32.8693-15.0151-32.8693-33.5811S23.2074,8.0515,41.3945,8.0515c18.0924,0,31.7327,12.4089,31.7327,29.6487c0,9.7566-1.4406,16.2926-7.3136,16.2926c-2.5575,0-3.9574-1.3675-4.7336-2.8417c-0.6052-1.1459-0.6644-2.7891-0.6683-4.6928V22.3359H52.7219z M40.1157,53.5527c-6.5583,0-11.8747-5.3151-11.8747-11.8741c0-6.5577,5.3164-11.8741,11.8747-11.8741c6.557,0,11.8735,5.3163,11.8735,11.8741C51.9891,48.2377,46.6727,53.5527,40.1157,53.5527z");

	var chars = {
		c: createPath("M111.7681,41.6557c0-9.2468,6.9175-17.0708,17.5227-17.0708c6.5952,0,10.6696,3.3627,12.7391,5.4315l-5.2388,5.8197c-2.0681-2.1984-4.3968-3.2977-7.1122-3.2977c-5.9492,0-9.3119,4.3324-9.3119,9.1172s3.3627,9.1178,9.3119,9.1178c2.7155,0,5.0441-1.0992,7.1122-3.2983l5.2388,5.8197c-2.0695,2.0695-6.1439,5.4315-12.7391,5.4315C118.6855,58.7264,111.7681,50.9024,111.7681,41.6557"),
		h: createPath("M178.4882,38.2936v19.4632h-8.5357v-18.041c0-4.6553-2.7812-7.1774-6.4662-7.1774c-4.8507,0-6.5965,3.8798-6.5965,9.0528v16.1656h-8.5344V11.3294h8.5344v18.1055c2.5221-3.3627,6.1439-4.85,9.7-4.85C175.1899,24.5849,178.4882,30.2105,178.4882,38.2936z"),
		a: createPath("M218.9604,25.5545v32.2023h-8.2765l-0.129-3.491c-2.9101,3.0384-6.7898,4.4606-10.4118,4.4606c-9.6987,0-16.1649-8.018-16.1649-17.0708s6.4662-17.0708,16.1649-17.0708c3.6219,0,7.5016,1.2932,10.346,4.2028l0.1947-3.2331H218.9604z M210.6839,41.6557c0-5.1085-4.01-9.1172-9.0528-9.1172c-5.0441,0-9.1172,4.0087-9.1172,9.1172s4.0732,9.1178,9.1172,9.1178C206.6739,50.7735,210.6839,46.7642,210.6839,41.6557z"),
		m: createPath("M279.2985,38.2936v19.4632h-8.5356v-18.041c0-4.6553-2.7155-7.1774-6.4018-7.1774c-4.8494,0-6.5952,3.8798-6.5952,9.0528v16.1656h-8.5356v-18.041c0-4.6553-2.7799-7.1774-6.4662-7.1774c-4.8494,0-6.5965,3.8798-6.5965,9.0528v16.1656h-8.5344V25.5545h8.2121l0.1934,4.0093c2.522-3.4916,6.2084-4.9789,9.8289-4.9789c5.3032,0,8.6002,2.1984,10.3459,5.7552c2.1339-3.7508,5.8848-5.7552,10.0224-5.7552C274.8359,24.5849,279.2985,30.2105,279.2985,38.2936z"),
		a2: createPath("M320.2457,25.5545v32.2023h-8.2779l-0.1289-3.491c-2.9101,3.0384-6.7899,4.4606-10.4105,4.4606c-9.7,0-16.1663-8.018-16.1663-17.0708s6.4663-17.0708,16.1663-17.0708c3.6206,0,7.5004,1.2932,10.346,4.2028l0.1934-3.2331H320.2457z M311.9678,41.6557c0-5.1085-4.0086-9.1172-9.0527-9.1172c-5.0427,0-9.1172,4.0087-9.1172,9.1172s4.0745,9.1178,9.1172,9.1178C307.9592,50.7735,311.9678,46.7642,311.9678,41.6557z"),
		i: createPath("M328.9498,25.5545h8.5356v32.2023h-8.5356V25.5545z"),
		l: createPath("M346.1107,11.3294h8.5357v46.4274h-8.5357V11.3294z"),
		e: createPath("M394.3898,44.4362h-24.5073c1.2288,4.8493,5.5611,6.4012,8.6002,6.4012c4.8493,0,7.3714-1.9392,9.3764-3.4266l5.1086,5.8197c-1.9405,1.4873-6.7899,5.496-14.0968,5.496c-10.4105,0-17.7174-7.1774-17.7174-17.2004c0-10.5394,7.9529-16.9412,17.0056-16.9412c9.5698,0,16.1663,6.7248,16.2307,16.6827V44.4362z M370.076,38.2285h15.519c-0.7762-3.2976-3.4916-5.8196-7.5003-5.8196C373.9557,32.4089,371.1113,34.7368,370.076,38.2285z"),
		o: createPath("M398.8168,41.5261c0-9.3757,7.6293-16.9412,17.4583-16.9412c9.7,0,17.3951,7.501,17.3951,16.9412c0,9.5704-7.7595,17.2004-17.3951,17.2004C406.5764,58.7264,398.8168,50.9669,398.8168,41.5261z M425.3923,41.5912c0-5.4967-4.2679-9.0528-9.0528-9.0528c-4.8493,0-9.1817,3.6212-9.1817,9.0528c0,5.4967,4.3968,9.1823,9.1817,9.1823C421.06,50.7735,425.3923,47.1516,425.3923,41.5912z"),
		n: createPath("M469.1786,38.2936v19.4632h-8.5357v-18.041c0-4.6553-2.7812-7.1774-6.4662-7.1774c-4.8507,0-6.5952,3.8798-6.5952,9.0528v16.1656h-8.5357V25.5545h8.2121l0.1934,4.0093c2.522-3.4916,6.2084-4.9789,9.8289-4.9789C465.8804,24.5849,469.1786,30.2105,469.1786,38.2936z")
	};

	var textGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
	for (var prop in chars) {
		var act = chars[prop];

		textGroup.appendChild(act);
	}

	var iDot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	iDot.setAttribute("cx", 333.2499);
	iDot.setAttribute("cy", 15.6098);
	iDot.setAttribute("r", 5.9367);

	textGroup.appendChild(iDot);

	var pupil = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	pupil.setAttribute("cx", middle.x);
	pupil.setAttribute("cy", middle.y);
	pupil.setAttribute("r", eyeR);

	var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	
	svg.setAttribute("version", "1.1");
	svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
	svg.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
	svg.setAttribute("xml:space", "preserve");

	if (withLogo && withText) {
		svg.setAttribute("viewBox", "0 0 500 83.3113");
	} else if (withText) {
		svg.setAttribute("viewBox", "81.4629 0 469.1786 83.3113");
	} else {
		svg.setAttribute("viewBox", "0 0 81.4629 83.3113");
	}

	if (viewBox) {
		svg.setAttribute("viewBox", viewBox);
	}

	if (withLogo) {
		svg.appendChild(atSign);
	}

	if (withText) {
		svg.appendChild(textGroup);
	}

	svg.appendChild(pupil);

	var maxDist = 5;

	function setEyeProps(x, y) {
		var transform = svg.getScreenCTM();
		var inverseTransform = transform.inverse();

		var transformedPoint = svg.createSVGPoint();
		transformedPoint.x = x;
		transformedPoint.y = y;

		transformedPoint = transformedPoint.matrixTransform(inverseTransform);


		var dx = transformedPoint.x - middle.x;
		var dy = transformedPoint.y - middle.y;

		var dist = Math.sqrt(dx * dx + dy * dy);


		var rad = Math.atan2(dx, dy);
		var r = eyeR;

		if (dist > maxDist) {
			dx = Math.sin(rad) * maxDist;
			dy = Math.cos(rad) * maxDist;
		} else {
			r /= maxDist / dist;
		}

		if (changeColors) {
			svg.style.fill = "rgb( 200, 200, " +  Math.floor(dist > 255 ? 255 : Math.floor(dist)) + ")";
		}

		pupil.setAttribute("cx", middle.x + dx);
		pupil.setAttribute("cy", middle.y + dy);
		pupil.setAttribute("r", r);
	}


	var randomX = Math.random() * window.innerWidth;
	var randomY = Math.random() * window.innerHeight;

	function setRandomPosition() {
		randomX += Math.floor(Math.random() * 1000 - 500);
		randomY += Math.floor(Math.random() * 1000 - 500);

		setEyeProps(randomX, randomY);
	}

	var timeoutId = null;
	function startRandomizing() {
		setRandomPosition();
		timeoutId = setTimeout(startRandomizing, Math.floor(Math.random() * 2000));
	}
	setTimeout(startRandomizing, 0);

	addEventListener("mousemove", function(event) {
		if (timeoutId) {
			clearTimeout(timeoutId);
			timeoutId = null;
		}

		setEyeProps(event.clientX, event.clientY);
	});

	return svg;
};

},{}],2:[function(require,module,exports){
var createChamaileonLogo = require("./createChamaileonLogo");

(function (name, definition){
	if (typeof this.define === "function"){ // AMD
		this.define(definition);
	} else if (typeof module !== "undefined" && module.exports) { // Node.js
		module.exports = definition();
	} else { // Browser
		var theModule = definition();
		var global = this;
		var old = global[name];
		theModule.noConflict = function () {
			global[name] = old;
			return theModule;
		};
		global[name] = theModule;
	}
})("chamaileonLogo", function () {
	return createChamaileonLogo;
});
},{"./createChamaileonLogo":1}]},{},[2])(2)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvY3JlYXRlQ2hhbWFpbGVvbkxvZ28uanMiLCJzcmMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGVDaGFtYWlsZW9uTG9nbyhjb25maWcpIHtcblx0Y29uZmlnID0gY29uZmlnIHx8IHt9O1xuXHR2YXIgZXllUiA9IGNvbmZpZy5leWVSIHx8IDUuOTM2Nztcblx0dmFyIHdpdGhMb2dvID0gdHlwZW9mIGNvbmZpZy53aXRoTG9nbyA9PT0gXCJ1bmRlZmluZWRcIiA/IHRydWUgOiBjb25maWcud2l0aExvZ287XG5cdHZhciB3aXRoVGV4dCA9IGNvbmZpZy53aXRoVGV4dDtcblx0dmFyIGNoYW5nZUNvbG9ycyA9IGNvbmZpZy5jaGFuZ2VDb2xvcnM7XG5cdHZhciB2aWV3Qm94ID0gY29uZmlnLnZpZXdCb3g7XG5cdHZhciBtaWRkbGUgPSB7XG5cdFx0eDogODEuNDYyOSAvIDIsXG5cdFx0eTogODMuMzExMyAvIDJcblx0fTtcblxuXHRmdW5jdGlvbiBjcmVhdGVQYXRoKGQpIHtcblx0XHR2YXIgcGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwicGF0aFwiKTtcblx0XHRwYXRoLnNldEF0dHJpYnV0ZShcImRcIiwgZCk7XG5cdFx0cmV0dXJuIHBhdGg7XG5cdH1cblxuXHR2YXIgYXRTaWduID0gY3JlYXRlUGF0aChcIk01Mi43MjE5LDIyLjMzNTlsLTAuMzYxOCwzLjY2MTNjLTMuNDA3NC0yLjc5NS03LjY0NzctNC42ODQyLTEyLjI0NDUtNC42ODQyYy0xMS4yNDg1LDAtMjAuMzY1Nyw5LjExODUtMjAuMzY1NywyMC4zNjY0YzAsMTEuMjQ3Miw5LjExNzIsMjAuMzY1MSwyMC4zNjU3LDIwLjM2NTFjNS41Mzc1LDAsMTAuNTUzOS0yLjQ3NCwxNC4yMjQ0LTYuMTQ3MmMyLjMxNjgsMy42MTQ2LDUuODA4NSw2LjE0NzIsMTAuODEwNSw2LjE0NzJjMTIuMzE0MSwwLDE2LjMxMjMtMTEuMjcyMiwxNi4zMTIzLTI0LjE1NDdDODEuNDYyOSwxNS4zNDUzLDYzLjU1OTksMCw0MS4zOTQ1LDBDMTguNDcxMiwwLDAsMTguNjYwNywwLDQxLjY3ODdzMTguNDcxMiw0MS42MzI2LDQxLjM5NDUsNDEuNjMyNmM4Ljk5ODgsMCwxNy42NDM3LTIuOTM2NSwyNC4xNzk3LTcuOTU2OGwtNS4zNzQzLTUuOTcxNmMtNS4zMzg4LDMuNjc3OC0xMS45MTQyLDUuODc2OC0xOC44MDU0LDUuODc2OGMtMTguMTg3MSwwLTMyLjg2OTMtMTUuMDE1MS0zMi44NjkzLTMzLjU4MTFTMjMuMjA3NCw4LjA1MTUsNDEuMzk0NSw4LjA1MTVjMTguMDkyNCwwLDMxLjczMjcsMTIuNDA4OSwzMS43MzI3LDI5LjY0ODdjMCw5Ljc1NjYtMS40NDA2LDE2LjI5MjYtNy4zMTM2LDE2LjI5MjZjLTIuNTU3NSwwLTMuOTU3NC0xLjM2NzUtNC43MzM2LTIuODQxN2MtMC42MDUyLTEuMTQ1OS0wLjY2NDQtMi43ODkxLTAuNjY4My00LjY5MjhWMjIuMzM1OUg1Mi43MjE5eiBNNDAuMTE1Nyw1My41NTI3Yy02LjU1ODMsMC0xMS44NzQ3LTUuMzE1MS0xMS44NzQ3LTExLjg3NDFjMC02LjU1NzcsNS4zMTY0LTExLjg3NDEsMTEuODc0Ny0xMS44NzQxYzYuNTU3LDAsMTEuODczNSw1LjMxNjMsMTEuODczNSwxMS44NzQxQzUxLjk4OTEsNDguMjM3Nyw0Ni42NzI3LDUzLjU1MjcsNDAuMTE1Nyw1My41NTI3elwiKTtcblxuXHR2YXIgY2hhcnMgPSB7XG5cdFx0YzogY3JlYXRlUGF0aChcIk0xMTEuNzY4MSw0MS42NTU3YzAtOS4yNDY4LDYuOTE3NS0xNy4wNzA4LDE3LjUyMjctMTcuMDcwOGM2LjU5NTIsMCwxMC42Njk2LDMuMzYyNywxMi43MzkxLDUuNDMxNWwtNS4yMzg4LDUuODE5N2MtMi4wNjgxLTIuMTk4NC00LjM5NjgtMy4yOTc3LTcuMTEyMi0zLjI5NzdjLTUuOTQ5MiwwLTkuMzExOSw0LjMzMjQtOS4zMTE5LDkuMTE3MnMzLjM2MjcsOS4xMTc4LDkuMzExOSw5LjExNzhjMi43MTU1LDAsNS4wNDQxLTEuMDk5Miw3LjExMjItMy4yOTgzbDUuMjM4OCw1LjgxOTdjLTIuMDY5NSwyLjA2OTUtNi4xNDM5LDUuNDMxNS0xMi43MzkxLDUuNDMxNUMxMTguNjg1NSw1OC43MjY0LDExMS43NjgxLDUwLjkwMjQsMTExLjc2ODEsNDEuNjU1N1wiKSxcblx0XHRoOiBjcmVhdGVQYXRoKFwiTTE3OC40ODgyLDM4LjI5MzZ2MTkuNDYzMmgtOC41MzU3di0xOC4wNDFjMC00LjY1NTMtMi43ODEyLTcuMTc3NC02LjQ2NjItNy4xNzc0Yy00Ljg1MDcsMC02LjU5NjUsMy44Nzk4LTYuNTk2NSw5LjA1Mjh2MTYuMTY1NmgtOC41MzQ0VjExLjMyOTRoOC41MzQ0djE4LjEwNTVjMi41MjIxLTMuMzYyNyw2LjE0MzktNC44NSw5LjctNC44NUMxNzUuMTg5OSwyNC41ODQ5LDE3OC40ODgyLDMwLjIxMDUsMTc4LjQ4ODIsMzguMjkzNnpcIiksXG5cdFx0YTogY3JlYXRlUGF0aChcIk0yMTguOTYwNCwyNS41NTQ1djMyLjIwMjNoLTguMjc2NWwtMC4xMjktMy40OTFjLTIuOTEwMSwzLjAzODQtNi43ODk4LDQuNDYwNi0xMC40MTE4LDQuNDYwNmMtOS42OTg3LDAtMTYuMTY0OS04LjAxOC0xNi4xNjQ5LTE3LjA3MDhzNi40NjYyLTE3LjA3MDgsMTYuMTY0OS0xNy4wNzA4YzMuNjIxOSwwLDcuNTAxNiwxLjI5MzIsMTAuMzQ2LDQuMjAyOGwwLjE5NDctMy4yMzMxSDIxOC45NjA0eiBNMjEwLjY4MzksNDEuNjU1N2MwLTUuMTA4NS00LjAxLTkuMTE3Mi05LjA1MjgtOS4xMTcyYy01LjA0NDEsMC05LjExNzIsNC4wMDg3LTkuMTE3Miw5LjExNzJzNC4wNzMyLDkuMTE3OCw5LjExNzIsOS4xMTc4QzIwNi42NzM5LDUwLjc3MzUsMjEwLjY4MzksNDYuNzY0MiwyMTAuNjgzOSw0MS42NTU3elwiKSxcblx0XHRtOiBjcmVhdGVQYXRoKFwiTTI3OS4yOTg1LDM4LjI5MzZ2MTkuNDYzMmgtOC41MzU2di0xOC4wNDFjMC00LjY1NTMtMi43MTU1LTcuMTc3NC02LjQwMTgtNy4xNzc0Yy00Ljg0OTQsMC02LjU5NTIsMy44Nzk4LTYuNTk1Miw5LjA1Mjh2MTYuMTY1NmgtOC41MzU2di0xOC4wNDFjMC00LjY1NTMtMi43Nzk5LTcuMTc3NC02LjQ2NjItNy4xNzc0Yy00Ljg0OTQsMC02LjU5NjUsMy44Nzk4LTYuNTk2NSw5LjA1Mjh2MTYuMTY1NmgtOC41MzQ0VjI1LjU1NDVoOC4yMTIxbDAuMTkzNCw0LjAwOTNjMi41MjItMy40OTE2LDYuMjA4NC00Ljk3ODksOS44Mjg5LTQuOTc4OWM1LjMwMzIsMCw4LjYwMDIsMi4xOTg0LDEwLjM0NTksNS43NTUyYzIuMTMzOS0zLjc1MDgsNS44ODQ4LTUuNzU1MiwxMC4wMjI0LTUuNzU1MkMyNzQuODM1OSwyNC41ODQ5LDI3OS4yOTg1LDMwLjIxMDUsMjc5LjI5ODUsMzguMjkzNnpcIiksXG5cdFx0YTI6IGNyZWF0ZVBhdGgoXCJNMzIwLjI0NTcsMjUuNTU0NXYzMi4yMDIzaC04LjI3NzlsLTAuMTI4OS0zLjQ5MWMtMi45MTAxLDMuMDM4NC02Ljc4OTksNC40NjA2LTEwLjQxMDUsNC40NjA2Yy05LjcsMC0xNi4xNjYzLTguMDE4LTE2LjE2NjMtMTcuMDcwOHM2LjQ2NjMtMTcuMDcwOCwxNi4xNjYzLTE3LjA3MDhjMy42MjA2LDAsNy41MDA0LDEuMjkzMiwxMC4zNDYsNC4yMDI4bDAuMTkzNC0zLjIzMzFIMzIwLjI0NTd6IE0zMTEuOTY3OCw0MS42NTU3YzAtNS4xMDg1LTQuMDA4Ni05LjExNzItOS4wNTI3LTkuMTE3MmMtNS4wNDI3LDAtOS4xMTcyLDQuMDA4Ny05LjExNzIsOS4xMTcyczQuMDc0NSw5LjExNzgsOS4xMTcyLDkuMTE3OEMzMDcuOTU5Miw1MC43NzM1LDMxMS45Njc4LDQ2Ljc2NDIsMzExLjk2NzgsNDEuNjU1N3pcIiksXG5cdFx0aTogY3JlYXRlUGF0aChcIk0zMjguOTQ5OCwyNS41NTQ1aDguNTM1NnYzMi4yMDIzaC04LjUzNTZWMjUuNTU0NXpcIiksXG5cdFx0bDogY3JlYXRlUGF0aChcIk0zNDYuMTEwNywxMS4zMjk0aDguNTM1N3Y0Ni40Mjc0aC04LjUzNTdWMTEuMzI5NHpcIiksXG5cdFx0ZTogY3JlYXRlUGF0aChcIk0zOTQuMzg5OCw0NC40MzYyaC0yNC41MDczYzEuMjI4OCw0Ljg0OTMsNS41NjExLDYuNDAxMiw4LjYwMDIsNi40MDEyYzQuODQ5MywwLDcuMzcxNC0xLjkzOTIsOS4zNzY0LTMuNDI2Nmw1LjEwODYsNS44MTk3Yy0xLjk0MDUsMS40ODczLTYuNzg5OSw1LjQ5Ni0xNC4wOTY4LDUuNDk2Yy0xMC40MTA1LDAtMTcuNzE3NC03LjE3NzQtMTcuNzE3NC0xNy4yMDA0YzAtMTAuNTM5NCw3Ljk1MjktMTYuOTQxMiwxNy4wMDU2LTE2Ljk0MTJjOS41Njk4LDAsMTYuMTY2Myw2LjcyNDgsMTYuMjMwNywxNi42ODI3VjQ0LjQzNjJ6IE0zNzAuMDc2LDM4LjIyODVoMTUuNTE5Yy0wLjc3NjItMy4yOTc2LTMuNDkxNi01LjgxOTYtNy41MDAzLTUuODE5NkMzNzMuOTU1NywzMi40MDg5LDM3MS4xMTEzLDM0LjczNjgsMzcwLjA3NiwzOC4yMjg1elwiKSxcblx0XHRvOiBjcmVhdGVQYXRoKFwiTTM5OC44MTY4LDQxLjUyNjFjMC05LjM3NTcsNy42MjkzLTE2Ljk0MTIsMTcuNDU4My0xNi45NDEyYzkuNywwLDE3LjM5NTEsNy41MDEsMTcuMzk1MSwxNi45NDEyYzAsOS41NzA0LTcuNzU5NSwxNy4yMDA0LTE3LjM5NTEsMTcuMjAwNEM0MDYuNTc2NCw1OC43MjY0LDM5OC44MTY4LDUwLjk2NjksMzk4LjgxNjgsNDEuNTI2MXogTTQyNS4zOTIzLDQxLjU5MTJjMC01LjQ5NjctNC4yNjc5LTkuMDUyOC05LjA1MjgtOS4wNTI4Yy00Ljg0OTMsMC05LjE4MTcsMy42MjEyLTkuMTgxNyw5LjA1MjhjMCw1LjQ5NjcsNC4zOTY4LDkuMTgyMyw5LjE4MTcsOS4xODIzQzQyMS4wNiw1MC43NzM1LDQyNS4zOTIzLDQ3LjE1MTYsNDI1LjM5MjMsNDEuNTkxMnpcIiksXG5cdFx0bjogY3JlYXRlUGF0aChcIk00NjkuMTc4NiwzOC4yOTM2djE5LjQ2MzJoLTguNTM1N3YtMTguMDQxYzAtNC42NTUzLTIuNzgxMi03LjE3NzQtNi40NjYyLTcuMTc3NGMtNC44NTA3LDAtNi41OTUyLDMuODc5OC02LjU5NTIsOS4wNTI4djE2LjE2NTZoLTguNTM1N1YyNS41NTQ1aDguMjEyMWwwLjE5MzQsNC4wMDkzYzIuNTIyLTMuNDkxNiw2LjIwODQtNC45Nzg5LDkuODI4OS00Ljk3ODlDNDY1Ljg4MDQsMjQuNTg0OSw0NjkuMTc4NiwzMC4yMTA1LDQ2OS4xNzg2LDM4LjI5MzZ6XCIpXG5cdH07XG5cblx0dmFyIHRleHRHcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwiZ1wiKTtcblx0Zm9yICh2YXIgcHJvcCBpbiBjaGFycykge1xuXHRcdHZhciBhY3QgPSBjaGFyc1twcm9wXTtcblxuXHRcdHRleHRHcm91cC5hcHBlbmRDaGlsZChhY3QpO1xuXHR9XG5cblx0dmFyIGlEb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcImNpcmNsZVwiKTtcblx0aURvdC5zZXRBdHRyaWJ1dGUoXCJjeFwiLCAzMzMuMjQ5OSk7XG5cdGlEb3Quc2V0QXR0cmlidXRlKFwiY3lcIiwgMTUuNjA5OCk7XG5cdGlEb3Quc2V0QXR0cmlidXRlKFwiclwiLCA1LjkzNjcpO1xuXG5cdHRleHRHcm91cC5hcHBlbmRDaGlsZChpRG90KTtcblxuXHR2YXIgcHVwaWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcImNpcmNsZVwiKTtcblx0cHVwaWwuc2V0QXR0cmlidXRlKFwiY3hcIiwgbWlkZGxlLngpO1xuXHRwdXBpbC5zZXRBdHRyaWJ1dGUoXCJjeVwiLCBtaWRkbGUueSk7XG5cdHB1cGlsLnNldEF0dHJpYnV0ZShcInJcIiwgZXllUik7XG5cblx0dmFyIHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwic3ZnXCIpO1xuXHRcblx0c3ZnLnNldEF0dHJpYnV0ZShcInZlcnNpb25cIiwgXCIxLjFcIik7XG5cdHN2Zy5zZXRBdHRyaWJ1dGUoXCJ4bWxuc1wiLCBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIpO1xuXHRzdmcuc2V0QXR0cmlidXRlKFwieG1sbnM6eGxpbmtcIiwgXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIpO1xuXHRzdmcuc2V0QXR0cmlidXRlKFwieG1sOnNwYWNlXCIsIFwicHJlc2VydmVcIik7XG5cblx0aWYgKHdpdGhMb2dvICYmIHdpdGhUZXh0KSB7XG5cdFx0c3ZnLnNldEF0dHJpYnV0ZShcInZpZXdCb3hcIiwgXCIwIDAgNDY5LjE3ODYgODMuMzExM1wiKTtcblx0fSBlbHNlIGlmICh3aXRoVGV4dCkge1xuXHRcdHN2Zy5zZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIsIFwiODEuNDYyOSAwIDQ2OS4xNzg2IDgzLjMxMTNcIik7XG5cdH0gZWxzZSB7XG5cdFx0c3ZnLnNldEF0dHJpYnV0ZShcInZpZXdCb3hcIiwgXCIwIDAgODEuNDYyOSA4My4zMTEzXCIpO1xuXHR9XG5cblx0aWYgKHZpZXdCb3gpIHtcblx0XHRzdmcuc2V0QXR0cmlidXRlKFwidmlld0JveFwiLCB2aWV3Qm94KTtcblx0fVxuXG5cdGlmICh3aXRoTG9nbykge1xuXHRcdHN2Zy5hcHBlbmRDaGlsZChhdFNpZ24pO1xuXHR9XG5cblx0aWYgKHdpdGhUZXh0KSB7XG5cdFx0c3ZnLmFwcGVuZENoaWxkKHRleHRHcm91cCk7XG5cdH1cblxuXHRzdmcuYXBwZW5kQ2hpbGQocHVwaWwpO1xuXG5cdHZhciBtYXhEaXN0ID0gNTtcblxuXHRmdW5jdGlvbiBzZXRFeWVQcm9wcyh4LCB5KSB7XG5cdFx0dmFyIHRyYW5zZm9ybSA9IHN2Zy5nZXRTY3JlZW5DVE0oKTtcblx0XHR2YXIgaW52ZXJzZVRyYW5zZm9ybSA9IHRyYW5zZm9ybS5pbnZlcnNlKCk7XG5cblx0XHR2YXIgdHJhbnNmb3JtZWRQb2ludCA9IHN2Zy5jcmVhdGVTVkdQb2ludCgpO1xuXHRcdHRyYW5zZm9ybWVkUG9pbnQueCA9IHg7XG5cdFx0dHJhbnNmb3JtZWRQb2ludC55ID0geTtcblxuXHRcdHRyYW5zZm9ybWVkUG9pbnQgPSB0cmFuc2Zvcm1lZFBvaW50Lm1hdHJpeFRyYW5zZm9ybShpbnZlcnNlVHJhbnNmb3JtKTtcblxuXG5cdFx0dmFyIGR4ID0gdHJhbnNmb3JtZWRQb2ludC54IC0gbWlkZGxlLng7XG5cdFx0dmFyIGR5ID0gdHJhbnNmb3JtZWRQb2ludC55IC0gbWlkZGxlLnk7XG5cblx0XHR2YXIgZGlzdCA9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG5cblxuXHRcdHZhciByYWQgPSBNYXRoLmF0YW4yKGR4LCBkeSk7XG5cdFx0dmFyIHIgPSBleWVSO1xuXG5cdFx0aWYgKGRpc3QgPiBtYXhEaXN0KSB7XG5cdFx0XHRkeCA9IE1hdGguc2luKHJhZCkgKiBtYXhEaXN0O1xuXHRcdFx0ZHkgPSBNYXRoLmNvcyhyYWQpICogbWF4RGlzdDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ciAvPSBtYXhEaXN0IC8gZGlzdDtcblx0XHR9XG5cblx0XHRpZiAoY2hhbmdlQ29sb3JzKSB7XG5cdFx0XHRzdmcuc3R5bGUuZmlsbCA9IFwicmdiKDIwMCwgMjAwLCBcIiArICBNYXRoLmZsb29yKGRpc3QgPiAyNTUgPyAyNTUgOiBNYXRoLmZsb29yKGRpc3QpKSArIFwiKVwiO1xuXHRcdH1cblxuXHRcdHB1cGlsLnNldEF0dHJpYnV0ZShcImN4XCIsIG1pZGRsZS54ICsgZHgpO1xuXHRcdHB1cGlsLnNldEF0dHJpYnV0ZShcImN5XCIsIG1pZGRsZS55ICsgZHkpO1xuXHRcdHB1cGlsLnNldEF0dHJpYnV0ZShcInJcIiwgcik7XG5cdH1cblxuXG5cdHZhciByYW5kb21YID0gTWF0aC5yYW5kb20oKSAqIHdpbmRvdy5pbm5lcldpZHRoO1xuXHR2YXIgcmFuZG9tWSA9IE1hdGgucmFuZG9tKCkgKiB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cblx0ZnVuY3Rpb24gc2V0UmFuZG9tUG9zaXRpb24oKSB7XG5cdFx0cmFuZG9tWCArPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwIC0gNTAwKTtcblx0XHRyYW5kb21ZICs9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAgLSA1MDApO1xuXG5cdFx0c2V0RXllUHJvcHMocmFuZG9tWCwgcmFuZG9tWSk7XG5cdH1cblxuXHR2YXIgdGltZW91dElkID0gbnVsbDtcblx0ZnVuY3Rpb24gc3RhcnRSYW5kb21pemluZygpIHtcblx0XHRzZXRSYW5kb21Qb3NpdGlvbigpO1xuXHRcdHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoc3RhcnRSYW5kb21pemluZywgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjAwMCkpO1xuXHR9XG5cdHNldFRpbWVvdXQoc3RhcnRSYW5kb21pemluZywgMCk7XG5cblx0YWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBmdW5jdGlvbihldmVudCkge1xuXHRcdGlmICh0aW1lb3V0SWQpIHtcblx0XHRcdGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xuXHRcdFx0dGltZW91dElkID0gbnVsbDtcblx0XHR9XG5cblx0XHRzZXRFeWVQcm9wcyhldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZKTtcblx0fSk7XG5cblx0cmV0dXJuIHN2Zztcbn07XG4iLCJ2YXIgY3JlYXRlQ2hhbWFpbGVvbkxvZ28gPSByZXF1aXJlKFwiLi9jcmVhdGVDaGFtYWlsZW9uTG9nb1wiKTtcblxuKGZ1bmN0aW9uIChuYW1lLCBkZWZpbml0aW9uKXtcblx0aWYgKHR5cGVvZiB0aGlzLmRlZmluZSA9PT0gXCJmdW5jdGlvblwiKXsgLy8gQU1EXG5cdFx0dGhpcy5kZWZpbmUoZGVmaW5pdGlvbik7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBtb2R1bGUuZXhwb3J0cykgeyAvLyBOb2RlLmpzXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBkZWZpbml0aW9uKCk7XG5cdH0gZWxzZSB7IC8vIEJyb3dzZXJcblx0XHR2YXIgdGhlTW9kdWxlID0gZGVmaW5pdGlvbigpO1xuXHRcdHZhciBnbG9iYWwgPSB0aGlzO1xuXHRcdHZhciBvbGQgPSBnbG9iYWxbbmFtZV07XG5cdFx0dGhlTW9kdWxlLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRnbG9iYWxbbmFtZV0gPSBvbGQ7XG5cdFx0XHRyZXR1cm4gdGhlTW9kdWxlO1xuXHRcdH07XG5cdFx0Z2xvYmFsW25hbWVdID0gdGhlTW9kdWxlO1xuXHR9XG59KShcImNoYW1haWxlb25Mb2dvXCIsIGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIGNyZWF0ZUNoYW1haWxlb25Mb2dvO1xufSk7Il19
