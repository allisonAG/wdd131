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

// Books Array

const books = [
    {
        bookName: "Ensayo sobre la ceguera",
        author: "Jose Saramago",
        genre: "Dystopian fiction",
        synopsis: "A sudden epidemic of blindness strikes a city, throwing society into chaos. Through intense and allegorical prose, Saramago explores the fragility of civilization and the depths of human nature.",
        imageUrl: "https://m.media-amazon.com/images/I/717ZqBXBF9L.jpg"
    },
    {
        bookName: "Kitchen",
        author: "Banana Yoshimoto",
        genre: "Contemporary fiction",
        synopsis: "A young woman grapples with grief and loss while forming unexpected bonds. Set in modern Japan, this intimate novella explores healing, love, and the comforting power of food and connection.",
        imageUrl: "https://m.media-amazon.com/images/I/91hdDGZem0L._UF894,1000_QL80_.jpg"
    },
    {
        bookName: "The Martian Chronicles",
        author: "Ray Bradbury",
        genre: "Science fiction",
        synopsis: "A poetic collection of interconnected stories that chronicles humanity’s colonization of Mars. Bradbury explores themes of identity, nostalgia, colonization, and the human condition with lyrical depth and imagination.",
        imageUrl: "https://m.media-amazon.com/images/I/613HKMdb1rL.jpg"
    },
    {
        bookName: "Norwegian Wood",
        author: "Haruki Murakami",
        genre: "Coming-of-age fiction",
        synopsis: "A nostalgic and melancholic story of love and loss, following a university student in 1960s Tokyo as he navigates relationships, mental health, and the passage into adulthood.",
        imageUrl: "https://m.media-amazon.com/images/I/81RARTnoWjL._UF894,1000_QL80_.jpg"
    },
    {
        bookName: "The House of the Spirits",
        author: "Isabel Allende",
        genre: "Magical realism",
        synopsis: "Spanning generations, this epic tale blends politics, family, and the supernatural in a richly woven narrative about a Chilean family’s triumphs and tragedies.",
        imageUrl: "https://m.media-amazon.com/images/I/711IbpCaZ5L.jpg"
    },
    {
        bookName: "The Left Hand of Darkness",
        author: "Ursula K. Le Guin",
        genre: "Science fiction",
        synopsis: "Set on a distant planet where inhabitants have no fixed gender, this classic novel challenges norms of identity, politics, and trust as an envoy from Earth attempts to unite civilizations.",
        imageUrl: "https://m.media-amazon.com/images/I/71XqE4caMNL.jpg"
    }
];

if (document.getElementById("cards")) {
    createBookCard(books);
}

function createBookCard(books) {
    document.getElementById("cards").innerHTML = "";
    books.forEach(book => {
        const card = document.createElement("section");
        card.classList.add("book-card");

        const title = document.createElement("h3");
        title.textContent = book.bookName;

        const ul = document.createElement("ul");

        const authorLi = document.createElement("li");
        authorLi.innerHTML = `<span class="label">Author:</span> ${book.author}`;

        const genreLi = document.createElement("li");
        genreLi.innerHTML = `<span class="label">Genre:</span> ${book.genre}`;

        const synopsisLi = document.createElement("li");
        synopsisLi.innerHTML = `<span class="label">Synopsis:</span> ${book.synopsis}`;

        const image = document.createElement("img");
        image.src = book.imageUrl;
        image.alt = book.bookName;
        image.loading = "lazy";

        ul.appendChild(authorLi);
        ul.appendChild(genreLi);
        ul.appendChild(synopsisLi);
        
        card.appendChild(title);
        card.appendChild(ul);
        card.appendChild(image);

        document.getElementById("cards").appendChild(card);
    });
}

// Form

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".mform");

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const nameInput = document.querySelector("#name");
            const emailInput = document.querySelector("#email");

            const name = nameInput.value.trim();
            const email = emailInput.value.trim();


            let members = JSON.parse(localStorage.getItem("members-ls")) || []
            
            const newMember = { name, email };
            members.push(newMember);

            localStorage.setItem("members-ls", JSON.stringify(members));
            localStorage.setItem("numMembers-ls", members.length);

            window.location.href = "welcome.html";
        });
    }
});