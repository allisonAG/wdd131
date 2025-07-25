const year = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

const today = new Date();

year.innerHTML = today.getFullYear();

lastModified.innerHTML = `Last modified: ${document.lastModified}`;

// Menu
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

// Array of temple objects

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
        templeName: "Austin Texas",
        location: "Austin, Texas, United States",
        dedicated: "2024, August, 17",
        area: 30000,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/austin-texas-temple/austin-texas-temple-40361.jpg"
    },
    {
        templeName: "London England",
        location: "London, England, United Kingdom",
        dedicated: "1953, August, 10",
        area: 42652,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/london-england-temple/london-england-temple-61779.jpg"
    },
    {
        templeName: "Merida Mexico",
        location: "Merida, Mexico",
        dedicated: "1999, January, 16",
        area: 10700,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/merida-mexico-temple/merida-mexico-temple-46047.jpg"
    }
];

createTempleCard(temples);

// temples nav

const old = document.getElementById("old");
const newTemple = document.getElementById("new");
const large = document.getElementById("large");
const small = document.getElementById("small");
const home = document.getElementById("home");

old.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => 
        parseInt(temple.dedicated.slice(0, 4)) < 1900)
    );
});

newTemple.addEventListener("click", () => {
    createTempleCard(temples.filter(temple =>
        parseInt(temple.dedicated.slice(0, 4)) > 2000)
    );
});

large.addEventListener("click", () => {
    createTempleCard(temples.filter(temple =>
        parseInt(temple.area) > 90000)
    );
});

small.addEventListener("click", () => {
    createTempleCard(temples.filter(temple =>
        parseInt(temple.area) < 10000)
    );
});

home.addEventListener("click", () => {
    createTempleCard(temples);
});

// temple cards

function createTempleCard(filteredTemples) {
    document.getElementById("cards").innerHTML = "";
    filteredTemples.forEach((temple) => {
        const card = document.createElement("section");
        card.classList.add("temple-card");

        const title = document.createElement("h3");
        title.textContent = temple.templeName;

        const ul = document.createElement("ul");

        const locationLi = document.createElement("li");
        locationLi.innerHTML = `<span class="label"> LOCATION:</span> ${temple.location}`;

        const dedicatedLi = document.createElement("li");
        dedicatedLi.innerHTML = `<span class="label"> DEDICATED:</span> ${temple.dedicated}`;

        const areaLi = document.createElement("li");
        areaLi.innerHTML = `<span class="label"> SIZE:</span> ${temple.area} sq ft`;

        const image = document.createElement("img");
        image.src = temple.imageUrl;
        image.alt = temple.templeName;
        image.loading = "lazy";

        ul.appendChild(locationLi);
        ul.appendChild(dedicatedLi);
        ul.appendChild(areaLi);

        card.appendChild(title);
        card.appendChild(ul);
        card.appendChild(image);

        document.getElementById("cards").appendChild(card);
    });
}
