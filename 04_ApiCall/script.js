const postContainer = document.querySelector('.post-container')
const requestUrl = 'https://jsonplaceholder.typicode.com/posts'

// <-------------------- using XHR -------------------->

// function usingXHR() {
//     const xhr = new XMLHttpRequest()
//     xhr.open('GET', requestUrl)
//     xhr.responseType = 'json'
//     xhr.send()
//     xhr.onload = () => {
//         if (xhr.status === 200) {
//             const data = xhr.response
//             // console.log(data);
//             displayPost(data)
//         } else {
//             alert('Something wrong...')
//         }
//     }
// }

// usingXHR()

// <-------------------- using fetch -------------------->

// function usingFetch() {
//     fetch(requestUrl)
//         .then((response) => response.json())
//         .then((data) => displayPost(data))
//         .catch((e) => console.log('error'))
// }

// usingFetch()

// <-------------------- using async-await -------------------->

// async function usingAsyncAwait() {
//     const response = await fetch(requestUrl)
//     const data = await response.json()
//     console.log(data);
//     displayPost(data)
// }

// usingAsyncAwait()

// <-------------------- using XHR-async-await -------------------->

function helper(method, url) {
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open(method, url)
        xhr.responseType = 'json'
        xhr.send()
        xhr.onload = () => {
            if (xhr.status === 200) {
                resolve(xhr.response)
            } else {
                reject(xhr.response)
            }
        }
    })
    return promise
}

async function usingXHRAsyncAwait() {
    const response = await helper('GET', requestUrl)
    console.log(response);
    displayPost(response)
}

usingXHRAsyncAwait()

function displayPost(response) {
    postContainer.innerHTML = response.map((post) => `
        <div class="post">
            <h3>${post.title}</h3>
            <p>${post.body}</p>
        </div>
    `).join(' ')
}