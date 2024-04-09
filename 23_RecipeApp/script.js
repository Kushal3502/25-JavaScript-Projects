const recipeContainer = document.querySelector('.recipe-container')
const recipeDetails = document.querySelector('.recipe-details')
const loader = document.querySelector('.loader')
const requestUrl = 'https://dummyjson.com/recipes'

function showLoader() {
    loader.classList.add('show')
    recipeContainer.classList.add('hide')
}

function hideLoader() {
    loader.classList.remove('show')
    recipeContainer.classList.remove('hide')
}

async function fetchRecipes() {
    showLoader()
    const response = await fetch(requestUrl)
    const result = await response.json()
    console.log(result.recipes);
    hideLoader()
    displayCards(result.recipes)
}

function displayCards(recipeData) {
    recipeData.forEach(item => {
        const { id, image, name, cuisine, ingredients, mealType, rating } = item

        // <-------------------- card -------------------->
        const card = document.createElement('div')
        card.classList.add('card')

        // <-------------------- image -------------------->
        const img = document.createElement('img')
        img.src = image

        // <-------------------- name -------------------->
        const recipeName = document.createElement('h2')
        recipeName.classList.add('recipe-name')
        recipeName.textContent = name

        // <-------------------- cuisine -------------------->
        const recipeCuisine = document.createElement('p')
        recipeCuisine.classList.add('recipe-cuisine')
        recipeCuisine.textContent = cuisine

        // <-------------------- ingredients -------------------->
        const recipeIngredients = document.createElement('div')
        recipeIngredients.classList.add('ingredients')
        recipeIngredients.textContent = ingredients.map(item => item).join(' ')

        // <-------------------- meal type -------------------->
        const recipeMealType = document.createElement('p')
        recipeMealType.classList.add('recipe-meal-type')
        recipeMealType.textContent = mealType

        // <-------------------- rating -------------------->
        const recipeRating = document.createElement('p')
        recipeRating.classList.add('recipe-rating')
        recipeRating.textContent = rating

        // <-------------------- view details -------------------->
        const detailsBtn = document.createElement('button')
        detailsBtn.classList.add('view-details')
        detailsBtn.textContent = 'View Details'
        detailsBtn.addEventListener('click', () => {
            getRecipeDetails(id)
        })

        card.appendChild(img)
        card.appendChild(recipeName)
        card.appendChild(recipeCuisine)
        card.appendChild(recipeIngredients)
        card.appendChild(recipeMealType)
        card.appendChild(recipeRating)
        card.appendChild(detailsBtn)

        recipeContainer.appendChild(card)
    })
}

async function getRecipeDetails(id) {
    const response = await fetch(`${requestUrl}/${id}`)
    const result = await response.json()
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
    });
    showInstructions(result)
}

function showInstructions(recipe) {
    recipeDetails.innerHTML = ''
    const { name, instructions } = recipe

    // <-------------------- instruction message -------------------->
    const p = document.createElement('p')
    p.classList.add('message')
    p.textContent = `Instructions to make ${name}`

    // <-------------------- instructions -------------------->
    const instructionList = document.createElement('ul');
    instructionList.classList.add('instructions')

    instructions.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        instructionList.appendChild(li);
    });

    // recipeInstructions.appendChild(instructionList);

    recipeDetails.appendChild(p);
    recipeDetails.appendChild(instructionList);
}

fetchRecipes()