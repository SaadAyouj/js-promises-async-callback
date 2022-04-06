//CallBacks

const blogs = [
    { title: 'Title One', body: 'This is the blog one' },
    { title: 'Title Two', body: 'This is the blog two' }
];

function getBlogs() {
    setTimeout(() => {
        let output = '';
        blogs.forEach((blog, index) => {
            output += `<li>${blog.title}</li>`
        });
        document.body.innerHTML = output
    }, 1000);
}

function createBlog(blog, callback) {
    setTimeout(() => {
        blogs.push(blog);
        callback();
    }, 2000);
}

getBlogs();

createBlog({ title: 'Title Three', body: 'This is the blog three' }, getBlogs);