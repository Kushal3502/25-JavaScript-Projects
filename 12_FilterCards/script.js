const category = ["All", "Men", "Women", "Kids"];
const data = [
    {
        id: "Men",
        label: "Men Shirt 1",
    },
    {
        id: "Men",
        label: "Men Shirt 2",
    },
    {
        id: "Men",
        label: "Men Shirt 3",
    },
    {
        id: "Men",
        label: "Men Shirt 4",
    },
    {
        id: "Men",
        label: "Men Shirt 5",
    },
    {
        id: "Women",
        label: "Women Shirt 1",
    },
    {
        id: "Women",
        label: "Women Shirt 2",
    },
    {
        id: "Women",
        label: "Women Shirt 3",
    },
    {
        id: "Women",
        label: "Women Shirt 4",
    },
    {
        id: "Women",
        label: "Women Shirt 5",
    },
    {
        id: "Kids",
        label: "Kids Shirt 1",
    },
    {
        id: "Kids",
        label: "Kids Shirt 2",
    },
    {
        id: "Kids",
        label: "Kids Shirt 3",
    },
    {
        id: "Kids",
        label: "Kids Shirt 4",
    },
    {
        id: "Kids",
        label: "Kids Shirt 5",
    },
];

// <-------------------- functionality -------------------->

const buttonWrapper = document.querySelector(".button-wrapper");
const contentWrapper = document.querySelector(".content-wrapper");

// <-------------------- display filter buttons -------------------->

category.map((category) => {
    const categoryBtn = document.createElement("button");
    categoryBtn.classList.add("filter", category);
    categoryBtn.innerHTML = `${category}`;
    buttonWrapper.appendChild(categoryBtn);
});

// <-------------------- display cards -------------------->

data.map((item) => {
    const card = document.createElement("div");
    card.classList.add("card", item.id, "show", "All");
    card.innerHTML = `${item.label}`;
    contentWrapper.appendChild(card);
});

// <-------------------- filter -------------------->

const cards = document.querySelectorAll(".card");
const filterBtn = document.querySelectorAll(".filter");

filterBtn.forEach((category) => {
    category.addEventListener("click", () => {
        if (category.classList.contains("All")) {
            filterCards(cards, "All");
        }

        if (category.classList.contains("Men")) {
            filterCards(cards, "Men");
        }

        if (category.classList.contains("Women")) {
            filterCards(cards, "Women");
        }

        if (category.classList.contains("Kids")) {
            filterCards(cards, "Kids");
        }
    });
});

function filterCards(cards, category) {
    cards.forEach((card) => {
        if (!card.classList.contains(category)) {
            if (card.classList.contains("show")) {
                card.classList.remove("show");
                card.classList.add("hide");
            }
        } else {
            if (card.classList.contains("hide")) {
                card.classList.remove("hide");
                card.classList.add("show");
            }
        }
    });
}
