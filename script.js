document.addEventListener('DOMContentLoaded', function() {

    const imageLinks = [
        //{ "src": "images/image1.png", "url": "link" },
        { "src": "images/image9.png", "url": "https://noclip.website/#dq8/DQ8;ShareData=AE-lk92:qd9bjm(UTVTfVslKlP)OgwUv9+sT($B=U(/iI9Z=S/UFr)R9zS2l+d" },
        { "src": "images/image8.png", "url": "https://noclip.website/#dq8/DQ8;ShareData=AAABrUV{Gx4TEy;4x?J@UTPUhPT|eYUr8yaT62&@U|7S-P6z:I8@Wi{UlFs_VS" },
        { "src": "images/image7.png", "url": "https://noclip.website/#dq8/DQ8;ShareData=AQy@k8*p!f9FqfLUwVH8VYFIp5}S59UswNiT@9tiVl;W?95_6=TF_Qa8{{!WVS" },
        { "src": "images/image6.png", "url": "https://noclip.website/#oot3d/kokiri;ShareData=AQbySUmqxPSF@Rz8w3VW9~!tpP7eaxUrC4XTNpA(VgO51ThW8,8T*E[UY!7DVt" },
        { "src": "images/image5.png", "url": "https://noclip.website/#oot3d/mahouya;ShareData=AYlhPUo9hM8+i^UT^aofUmflx5ocIqUjzL~T3bq}VdZfz9Q4(j8],1cUt!=ZVt" },
        { "src": "images/image4.png", "url": "https://noclip.website/#oot3d/shop_drag;ShareData=AZJVqUul/i9L927UtY|^+ZIWs4zcWBUr|D+URu+fVV&GF9pP?g9S5dbUZ:2*Vt" },
        { "src": "images/image1.png", "url": "https://noclip.website/#dks/m15_01_00_00;ShareData=AK0L~9Z,Wa9V?{TUY*f-+:U}YQkCpEUddHKT)-H?V4|N:9uv:[T33Hc9SOuHVt" },
        { "src": "images/image2.png", "url": "https://noclip.website/#Halo/deathisland;ShareData=AIkGVUg+7F7q^-M8wmKOU&ydp6LQgGUcS?(86GZ+U)*p]TcyoqTf&u+UazMh+C" },
        { "src": "images/image3.png", "url": "https://noclip.website/#WorldOfWarcraft/Ironforge,%20Dun%20Morogh-775971;ShareData=AH*4/9ia{Z8;a[d9p@{KWzUSX6I4N0UuKqJ8}JZsV8/E;Uo]t~8[K4y9jLUCWq" }
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
