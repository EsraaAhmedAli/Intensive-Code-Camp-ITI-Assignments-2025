function fetchUsers() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

    xhr.onload = function () {
        if (xhr.status === 200) {
            const users = JSON.parse(xhr.responseText);
            const userList = document.getElementById("userList");
            userList.innerHTML = ""; // Clear list if needed

            users.forEach(user => {
                const li = document.createElement("li");
                li.textContent = user.name;
                userList.appendChild(li);
            });

            console.log("Users loaded:", users);
        } else {
            console.error("Request failed with status:", xhr.status);
        }
    };

    xhr.onerror = function () {
        console.error("Network Error during the request.");
    };

    xhr.send();
}


fetchUsers();
