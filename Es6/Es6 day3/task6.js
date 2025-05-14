function getPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            if (!response.ok) {
                throw new Error("HTTP error");
            }
            return response.json();
        })
        .then(posts => {
            const firstFive = posts.slice(0, 5);
            console.log("First 5 posts:");
            firstFive.forEach((post, index) => {
                console.log(`${index + 1}. ${post.title}`);
            });
        })
        .catch(() => {
            console.error("Error fetching posts");
        });
}


getPosts();
