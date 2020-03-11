function getParams() {
	var idx = document.URL.indexOf('?');
	var params = new Array();
	if (idx != -1) {
		var pairs = document.URL.substring(idx + 1, document.URL.length).split('&');
		for (var i = 0; i < pairs.length; i++) {
			nameVal = pairs[i].split('=');
			params[nameVal[0]] = nameVal[1];
		}
	}
	return params;
}

window.onload = loginLoad;
function loginLoad() {
	// วิธีใช้ getParams()
	var parameter = getParams();
	var submitButton = document.getElementById("myLogin");
	submitButton.onsubmit = checkLogin;
}

function checkLogin() {
	var parameter = getParams();
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
	var loginForm = document.getElementById("myLogin");
	if (loginForm.username.value == parameter["username"]
		&& loginForm.password.value == parameter["password"]) {
		alert("Log in");
		return false;
	}

	else {
		alert("Username or Password incorrect");
		return false;
	}
}

