const loginHandler = async (e) => {
    e.preventDefault();
    const user_name = $('user-name').val().trim();
    const password = $('password').val().trim();

        if (user_name == "") {
            $(`#user-name`).attr("style", "background-color: rgb(255, 245, 235); border-color: red; ")
            $(`user-name`).attr("placeholder", "Please enter a username:")
        }

        if (password == "") {
            $('password').attr("style", "background-color: rgb(255, 245, 235); border-color: red; ")
            $('password').attr("placeholder", "Pleaseenter a password")
        }

        if (user_name && password) {
            const response = await fetch('/api/login', {
                method: 'POST',
                body: JSON.stringify({ user_name, password }),
                headers: { 'Content-type' : 'application/json'}
            });
            const data = await response.json();
            if(response.status === 400 || response.status === 401) {
                return alert(data.message);
            }
        }

    }

    $('#login-btn').click(loginHandler);