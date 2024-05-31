const images = [
    {
        src: ['src/Merbabu.jpeg', 'src/Merbabu1.jpg', 'src/Merbabu2.jpg'],
        title: 'Dataran Tinggi Dieng',
        province: 'Jawa Tengah',
        description: 'Description for Dataran Tinggi Dieng',
        price: 'Rp 30.000',
        insideimage: 'src/PantaiMenganti.jpg'
    },
    {
        src: ['src/Merbabu1.jpg', 'src/Merbabu2.jpg', 'src/PantaiMenganti.jpg'],
        title: 'Rawa Pening',
        province: 'Jawa Tengah',
        description: 'Description for Rawa Pening',
        price: 'Rp 30.000',
        insideimage: 'src/PantaiMenganti.jpg'
    },
    {
        src: ['src/Merbabu2.jpg', 'src/PantaiMenganti.jpg', 'src/Merbabu.jpeg'],
        title: 'Gunung Merbabu',
        province: 'Jawa Tengah',
        description: 'Description for Gunung Merbabu',
        price: 'Rp 30.000',
        insideimage: 'src/PantaiMenganti.jpg'
    }
];

let currentIndex = 0;

function getImageIndexes(index) {
    const totalImages = images.length;
    return [
        (index + totalImages - 1) % totalImages,
        index,
        (index + 1) % totalImages
    ];
}

function displayImage(index, direction) {
    const [prevIndex, currentIndex, nextIndex] = getImageIndexes(index);

    const prevImage = images[prevIndex];
    const currentImage = images[currentIndex];
    const nextImage = images[nextIndex];

    document.getElementById('img-1').src = prevImage.src[0];
    document.getElementById('img-2').src = currentImage.src[1];
    document.getElementById('img-3').src = nextImage.src[2];
    document.getElementById('container-title').textContent = currentImage.title;
    document.getElementById('container-provinsi').textContent = currentImage.province; 
    document.getElementById('container-deskripsi').textContent = currentImage.description;
    document.getElementById('container-image').src = currentImage.insideimage;
    document.getElementById('container-price').textContent = currentImage.price; 

    // Add animation class
    const cardContainer = document.querySelector('.card-container');
    cardContainer.classList.add(direction === 'next' ? 'slide-left' : 'slide-right');

    // Remove animation class after a delay
    setTimeout(() => {
        cardContainer.classList.remove('slide-left', 'slide-right');
    }, 10); // Adjust delay time as needed
}

// Display initial image
displayImage(currentIndex, 'next');

function handleButtonClick(direction) {
    setTimeout(() => {
        if (direction === 'next') {
            currentIndex = (currentIndex + 1) % images.length;
            displayImage(currentIndex, 'next');
        } else {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            displayImage(currentIndex, 'prev');
        }
    }, 30000); // 300ms delay
}

// Event listener for Next Image button
document.getElementById('next-button').addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % images.length;
    displayImage(currentIndex, 'next');
});

// Event listener for Previous Image button
document.getElementById('prev-button').addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    displayImage(currentIndex, 'prev');
});
