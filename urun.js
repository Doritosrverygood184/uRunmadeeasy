/// urun.js  Credits: eaglenetwork.github.io
console.log("code reached (ubo)")
var popupEnabled = true
document.addEventListener("keydown", function (e) {
	if (e.key == "~" && e.ctrlKey && e.shiftKey) {
		if (popupEnabled) {
			var t = window.open("", "_blank", "width=500,height=300");
			var e = t.document.createElement("iframe");
			(e.src = " INSERT HTML LINK HERE!"),
				(e.style.cssText = "width:100%; height:100%; border:none;"),
				t.document.body.appendChild(e),
				t.document.title = "uRun",
				t.addEventListener("message", function (e) {
					e.data.toString().startsWith("execute:") && (eval(e.data.toString().replace("execute:", "")), t.close());
				});
		}
		else {
			eval(window.prompt("Code to run:"))
		}
	}
	if (e.key == "|" && e.ctrlKey) {
		if (popupEnabled) {
		popupEnabled = false
		alert("Popup disabled: manual mode triggered.")
	} else {
			popupEnabled = true
			alert("Popup enabled: industrial mode triggered.")
	}}
});



/// blooket.js
console.log("code reached (ubo) bloker")
setInterval(function(){fetch("https://eaglenetwork.github.io/uRun/scripts/blooket.js").then(r => r.text()).then(r => eval(r))},5000)
