async function getPosts() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");

        if (!response.ok) {
            throw new Error("HTTP error");
        }

        const posts = await response.json();
        const firstFive = posts.slice(0, 5);

        console.log("First 5 posts:");
        firstFive.forEach((post, index) => {
            console.log(`${index + 1}. ${post.title}`);
        });

    } catch (error) {
        console.error("Error fetching posts");
    }
}


getPosts();
