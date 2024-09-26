function login(url, id) {
	return fetch(`${url}/login?id=${id}`)
		.then(raw => raw.text())
		.then(token => {
			sessionStorage.setItem("login-token", token);
			sessionStorage.setItem("user-id", id);
			return token;
		});
}

function loginWithUser(initKanban, restProvider, url, authContainer) {
	// 1) try to get credentials from previous session

	const token = sessionStorage.getItem("login-token");
	const userId = parseInt(sessionStorage.getItem("user-id"));
	if (token && userId) {
		if (authContainer)
			document.getElementById(authContainer).style.display = "none";
		initKanban(restProvider, url, token, userId);
		return;
	}

	// 2) initialize an auth panel and login with exact user

	const onAuth = userId => {
		login(url, userId).then(token => {
			document.getElementById(authContainer).style.display = "none";
			initKanban(restProvider, url, token, userId);
		});
	};

	sessionStorage.clear();
	restProvider
		.getUsers()
		.then(data => {
			_initAuthContainer(authContainer, data, onAuth);
		})
		.catch(err => {
			alert("can not fetch users");
			throw new Error(err);
		});
}

function _initAuthContainer(containerId, users, onAuth) {
	const container = document.getElementById(containerId);
	if (!container) {
		throw new Error("auth container not defined");
	}
	container.innerHTML = `
		<label for="users">Choose user:</label>
		<select name="users" id="users-select" style="padding: 4px; border: 1px solid #d2cfcf; font-size:14px; height: 32px; width: 200px; margin: 5px 0 10px;"></select>
		<button id="login-button" class="g-btn" style="min-width: 200px; border-radius: 0;">Login</button>
	`;

	const selectNode = document.getElementById("users-select");

	for (let i = 0; i < users.length; i++) {
		const option = document.createElement("option");
		option.text = users[i].label;
		option.value = users[i].id;
		selectNode.appendChild(option);
	}

	document.getElementById("login-button").onclick = () => {
		const userId = selectNode.value;
		if (!userId) {
			alert("choose user");
			return;
		}
		onAuth(userId);
	};
}
