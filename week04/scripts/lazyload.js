const year = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

const today = new Date();

year.innerHTML = today.getFullYear();

lastModified.innerHTML = `Last modified: ${document.lastModified}`;
