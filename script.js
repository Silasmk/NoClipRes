document.addEventListener('DOMContentLoaded', function() {

    const imageLinks = [
        { "src": "images/image1.png", "url": "https://noclip.website/#dks/m15_01_00_00;ShareData=AK0L~9Z,Wa9V?{TUY*f-+:U}YQkCpEUddHKT)-H?V4|N:9uv:[T33Hc9SOuHVt" }
    ]

    const gallery = document.getElementById('ImageWrapper');

    imageLinks.forEach(image => {
        const container = document.createElement('div');
        container.classList.add('image-container');

        const link = document.createElement('a');
        link.href = image.url;
        link.target = '_blank';

        const img = document.createElement('img');
        img.src = image.src;
        img.alt = 'Image';

        link.appendChild(img);
        container.appendChild(link);
        gallery.appendChild(container);
    });
});
