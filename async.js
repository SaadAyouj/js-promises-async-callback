//Async & await

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

function createBlog(blog) {
    //resolve si tout ce passe bien
    //reject si quelque chose va mal affiche erreur
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            blogs.push(blog);

            const error = false;

            if (!error) {
                resolve();
            } else {
                reject('Error: Something goes wrong !!');
            }
        }, 2000);
    })
    
}

//break
async function init() {
    //lecture
    await createBlog({ title: 'Title Three', body: 'This is the blog three' });

    getBlogs();
}

init();

//2 eme facon pour consommer une API

async function fetchPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/10') //endpoint
    const data = await res.json();
    console.log(data);
}

fetchPosts();