function getPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(posts => {
            const firstFive = posts.slice(0, 5); // أخذ أول 5 منشورات
            console.log("First 5 posts:");
            firstFive.forEach((post, index) => {
                console.log(`${index + 1}. ${post.title}`); // طباعة العنوان
            });
        });
}

getPosts();
