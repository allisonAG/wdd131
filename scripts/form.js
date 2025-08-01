//Last modified
const year = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

const today = new Date();

year.innerHTML = today.getFullYear();

lastModified.innerHTML = `Last modified: ${document.lastModified}`;

const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

const selectOptions = document.querySelector("#product");
const product = products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    selectOptions.append(option);
});

// Number of reviews completed

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".pRw");

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();

            let numReviews = Number(localStorage.getItem("numReviews-ls")) || 0;
            numReviews++;
            localStorage.setItem("numReviews-ls", numReviews);

            window.location.href = "review.html";
        });
    }
});

