// app.js
import { fetchUsers } from './api.js';

async function displayUserNames() {
    const users = await fetchUsers();
    if (users) {
        console.log("User Names:");
        users.forEach(user => {
            console.log(user.name);
        });
    }
}


displayUserNames();
