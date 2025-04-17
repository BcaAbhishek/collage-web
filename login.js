function validateLogin() {
	const regId = document.getElementById('regId').value.trim();
	const password = document.getElementById('password').value.trim();
	const error = document.getElementById('error-message');

	const validCredentials = [
		{ regId: "U18FY23S0001", password: "Abhi@123" },
		{ regId: "U18FY23S0002", password: "who are u" },
		{ regId: "U18FY23S0003", password: "123456" }
	];

	const user = validCredentials.find(user => user.regId === regId && user.password === password);

	if (regId === "" || password === "") {
		error.style.color = "red";
		error.textContent = "Please enter both Registration ID and Password.";
		return;
	}

	if (user) {
		window.location.href = "collage.html";  
	} else {
		error.style.color = "red";
		error.textContent = "Wrong Registration ID or Password.";
	}
}

function resetForm() {
	document.getElementById('regId').value = "";
	document.getElementById('password').value = "";
	document.getElementById('error-message').textContent = "";
}

function forgotPassword() {
	alert("Please contact the college administration to recover your password.");
}