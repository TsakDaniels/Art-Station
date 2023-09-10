class Painting {
    constructor(title, image) {
        this.title = title;
        this.image = image;
    }

    displayInfo() {
        console.log(`Title:${this.title}`);
    }
}

const paintings = [
    new Painting("Green Shirt Woman", "1.png"),
    new Painting("Tiktoker", "2.png"),
    new Painting("067", "3.png"),
    new Painting("Green Hair", "4.png"),
    new Painting("Android 17", "6.jpg"),
    new Painting("Android 18", "7.png"),
    new Painting("Taking Pictures", "8.png"),
    new Painting("Old School", "9.jpg"),
    new Painting("Green Shirt Woman", "1.png"),
    new Painting("Tiktoker", "2.png"),
    new Painting("067", "3.png"),
    new Painting("Green Hair", "4.png"),
    new Painting("Android 17", "6.jpg"),
    new Painting("Android 18", "7.png"),
    new Painting("Taking Pictures", "8.png"),
    new Painting("Old School", "9.jpg"),
    new Painting("Green Shirt Woman", "1.png"),
    new Painting("Tiktoker", "2.png"),
    new Painting("067", "3.png"),
    new Painting("Green Hair", "4.png"),
    new Painting("Android 17", "6.jpg"),
    new Painting("Android 18", "7.png"),
    new Painting("Taking Pictures", "8.png"),
    new Painting("Old School", "9.jpg"),
    
];

console.log(paintings);

// Function to display paintings in the grid
function displayPaintings() {
    const paintingsGrid = document.getElementById("paintings-grid");

    paintings.forEach((painting) => {
        // Create a new painting container div
        const paintingContainer = document.createElement("div");
        paintingContainer.classList.add("painting");

       const paintingTitle = document.createElement("h2");
       paintingTitle.textContent = painting.title;
       
        paintingTitle.classList.add("custom-font");
        // Create an image element for the painting
        const paintingImage = document.createElement("img");
        paintingImage.src = painting.image;


        // Append the painting container to the grid
        paintingsGrid.appendChild(paintingContainer);


        // Append the image to the painting container
        paintingContainer.appendChild(paintingImage);

        //Append the painting title
        paintingContainer.appendChild(paintingTitle);
        
    });
}

// Call the function to display paintings
displayPaintings();

closeLightbox();
function openLightbox(imageSrc) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-image");
    lightboxImage.src = imageSrc;
    lightbox.style.display = "block"; // Show the lightbox
}

// Function to close the lightbox
function closeLightbox() {
    lightbox.style.display = "none"; // Hide the lightbox
}

// Add an event listener to each painting thumbnail
const painting = document.querySelectorAll(".painting img");
painting.forEach(painting => {
    painting.addEventListener("click", () => {
        openLightbox(painting.src, painting.alt);
    });
});


document.addEventListener("keydown", function (event){
    if (event.key === "Escape") {
        closeLightbox();
    }
});


lightbox.addEventListener("click", function (event) {
    if (event.target === lightbox) {
        closeLightbox();
    }
});