document.addEventListener('DOMContentLoaded', function() {

    const imageLinks = [
        //{ "src": "images/image1.jpg", "url": "link" },
        { "src": "images/image9.jpg", "url": "https://noclip.website/#dq8/m07i01;ShareData=AWr]{Ub[2uS+^k68Z$DM9T;:V3*0&3Usw-hUG?;wVAY7*TAdJM9gW;rUu@1eU!" },
        { "src": "images/image8.jpg", "url": "https://noclip.website/#dq8/m04i04;ShareData=AS/{;92UMd8/hq3UT2~aVfP|W5=He4UXytvUELZ5VQA979cX^xUNy0g97Trw+d" },
        { "src": "images/image7.jpg", "url": "https://noclip.website/#dq8/m08i04;ShareData=AP4qDS7v749Z$A8UW*kBU&7F_Q2a_NUaWZ+T}[~NVs/+S9n;vo7n[NMS_S1EVS" },
        { "src": "images/image6.jpg", "url": "https://noclip.website/#oot3d/kokiri;ShareData=AQbySUmqxPSF@Rz8w3VW9~!tpP7eaxUrC4XTNpA(VgO51ThW8,8T*E[UY!7DVt" },
        { "src": "images/image5.jpg", "url": "https://noclip.website/#oot3d/mahouya;ShareData=AYlhPUo9hM8+i^UT^aofUmflx5ocIqUjzL~T3bq}VdZfz9Q4(j8],1cUt!=ZVt" },
        { "src": "images/image4.jpg", "url": "https://noclip.website/#oot3d/shop_drag;ShareData=AZJVqUul/i9L927UtY|^+ZIWs4zcWBUr|D+URu+fVV&GF9pP?g9S5dbUZ:2*Vt" },
        { "src": "images/image3.jpg", "url": "https://noclip.website/#WorldOfWarcraft/Ironforge,%20Dun%20Morogh-775971;ShareData=AH*4/9ia{Z8;a[d9p@{KWzUSX6I4N0UuKqJ8}JZsV8/E;Uo]t~8[K4y9jLUCWq" },
        { "src": "images/image2.jpg", "url": "https://noclip.website/#Halo/deathisland;ShareData=AIkGVUg+7F7q^-M8wmKOU&ydp6LQgGUcS?(86GZ+U)*p]TcyoqTf&u+UazMh+C" },
        { "src": "images/image1.jpg", "url": "https://noclip.website/#dks/m15_01_00_00;ShareData=AK0L~9Z,Wa9V?{TUY*f-+:U}YQkCpEUddHKT)-H?V4|N:9uv:[T33Hc9SOuHVt" }
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
