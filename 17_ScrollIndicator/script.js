const progressBar = document.querySelector('.progress-bar')
const postContainer = document.querySelector('.post-container')

async function fetchPosts() {
    const response = await fetch('https://dummyjson.com/posts')
    const result = await response.json()
    console.log(result.posts);

    showPosts(result.posts)
}

function showPosts(getData) {
    postContainer.innerHTML = getData.map(postItem => `
            <div class='post'>
                <p class='title'>${postItem.title}</p>
                <p class='body'>${postItem.body}</p>
                <p class='tags'>${postItem.tags.map(tag => tag).join(', ')}</p>
            </div>
    `).join('')
}

window.onscroll = function () {
    handleScroll()
}

function handleScroll() {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement
    progressBar.style.width = `${(scrollTop / (scrollHeight - clientHeight)) * 100}%`
}

fetchPosts()