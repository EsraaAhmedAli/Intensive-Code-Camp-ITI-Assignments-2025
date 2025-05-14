function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data received");
        }, 2000);
    });
}

// Using promise chaining
fetchData()
    .then((data) => {
        console.log("Original:", data);
        return data.toUpperCase();
    })
    .then((uppercasedData) => {
        console.log("Uppercased:", uppercasedData);
    });
