function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.5;
            if (success) {
                resolve("Data received");
            } else {
                reject("Network Error");
            }
        }, 2000);
    });
}

// Using promise chaining with error handling
fetchData()
    .then((data) => {
        console.log("Original:", data);
        return data.toUpperCase();
    })
    .then((uppercasedData) => {
        console.log("Uppercased:", uppercasedData);
    })
    .catch((error) => {
        console.log("Error:", error);
    });
