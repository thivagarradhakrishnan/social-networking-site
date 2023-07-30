
		function redirect() {
			var email = document.getElementById('email').value;
			var password = document.getElementById('password').value;
			var errorMessage = document.getElementById('error');


			if (email === 'abc@123' && password === 'password') {
				errorMessage.textContent = ''; 
				window.location.href = 'home.html'; 
				return false;
			} else {
				errorMessage.textContent = 'Invaild Credentials'; 
				return false; 
			}
		}