// object literals

let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@thenetninja.co.uk',
    location: 'berlin',
    blogs: [
        {title: 'why mac & cheese rules', likes: 30},
        {title: '10 things to make with marmite', likes: 50}
    ],
    login: () => console.log('the user logged in'),
    logout: (username) => {
        const days = new Date();
        const h = days.getHours();
        const m = days.getMinutes();
        const s = days.getSeconds();
        let time = `${h}:${m}:${s}`

        console.log(`
        the ${username} logged out
        latest ${time}
        `);
    },

    logBlogs() {
        this.blogs.forEach(blog => console.log(`${blog.title} punya ${blog.likes}`));
    }

}

user.logBlogs();