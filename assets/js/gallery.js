document.addEventListener("DOMContentLoaded", () => {

    const imageSources = [
        "./assets/img/i-1.webp",
        "./assets/img/i-2.webp",
        "./assets/img/i-3.webp",
        "./assets/img/i-4.webp",
        "./assets/img/i-5.webp",
        "./assets/img/i-6.webp",
        "./assets/img/i-7.webp",
        "./assets/img/i-8.webp",
        "./assets/img/i-9.webp",
        "./assets/img/i-10.webp",
        "./assets/img/i-11.webp",
        "https://scontent.fccu31-2.fna.fbcdn.net/v/t39.30808-6/490090411_122193278654264466_5579569535942080016_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=EGUOKusNmOAQ7kNvwGNR14J&_nc_oc=AdmKCqrE1OS0RJGebBB3Ms1mIlKP2bH8Y62VGOxjkCtLJoSElhzLv2AtA_cwskhbDVg&_nc_zt=23&_nc_ht=scontent.fccu31-2.fna&_nc_gid=rZhrPv0SNjpzWXfAymmchw&oh=00_AfEWe0sab_Cr0lqpGrO6nsdj25A7xIoOPoa1-alMKCaVYg&oe=6813F826",
        "https://scontent.fccu31-2.fna.fbcdn.net/v/t39.30808-6/490194719_122193278630264466_379474902546382569_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=yNjhVc3F58cQ7kNvwEoNq55&_nc_oc=AdkC_kmUItFBqeclE2RWtdpMZCpLI-te2e0VnQlKhvZvGEeWrxG32H_-rUi5mbJ42d8&_nc_zt=23&_nc_ht=scontent.fccu31-2.fna&_nc_gid=jdfxUB34omybOQZWtdUqRw&oh=00_AfHVM6k3FZ7Q-ZhzS2_Rqi1cRJuMvvrssJcCPyaFa3yXhA&oe=681410D1",
        "https://scontent.fccu31-1.fna.fbcdn.net/v/t39.30808-6/490133452_122193278522264466_1879475736044022773_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ZbcO4hvjbOgQ7kNvwG2L4NA&_nc_oc=Adlc4Tszn1ERAsaBwr-2TSk-cyPb3L7scXa9uhZOtthtiaoZxnUqSpTptC6vndQqyJE&_nc_zt=23&_nc_ht=scontent.fccu31-1.fna&_nc_gid=cdpLiomN-GtrCwlsNfScYg&oh=00_AfEF7DsYFgJNdtLEFOXoPJQKKso8DtecZ_0DZ4K1ZZQ1Ew&oe=68141470",
        "https://scontent.fccu31-2.fna.fbcdn.net/v/t39.30808-6/490416845_122193278504264466_3528345079685514185_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=3pYCaIvgXMYQ7kNvwHJTIpY&_nc_oc=AdlFSSWBSH3X-Bx7nzL1Fyykc4Ua6821R65nbGmMQwbwRVSuqzPmkjiwDEItq_DxfeU&_nc_zt=23&_nc_ht=scontent.fccu31-2.fna&_nc_gid=80lsVJtTyvC9rqZS7Qt0vg&oh=00_AfGjYjnctI_HvnLz56IMVNSDG4W266d71OzIuI5LBubR3w&oe=68142149",
        "https://scontent.fccu31-2.fna.fbcdn.net/v/t39.30808-6/489957439_122193277520264466_45644990238628698_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=mbDgxVYO180Q7kNvwGBCzBU&_nc_oc=Adn5mvJ9cPlT50CDyi9Tjv9o89K_Tk9F3Wr9JW8QK6B5UkRDrX9gJSKRxX-m5Qj1wYQ&_nc_zt=23&_nc_ht=scontent.fccu31-2.fna&_nc_gid=KaOyQ_kTywzV8A0ZUEwOKQ&oh=00_AfFia-m8psczSDDYtPKjXqDs7s4eS0vYMcc1axasFHAUbg&oe=6814016A",
        "https://scontent.fccu31-2.fna.fbcdn.net/v/t39.30808-6/476342487_122181556682264466_7348928808995744542_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=vy6dpSANtxQQ7kNvwEd3ruH&_nc_oc=AdkuNGudOLzmALV5CBiSKOZ9OwcpyMjqiq2nOud-OPJFYCr8HfLhTHhVsqoGWbLdp0s&_nc_zt=23&_nc_ht=scontent.fccu31-2.fna&_nc_gid=YxOIcbG_S1twvg1XfZR25w&oh=00_AfErg3dDR7d7ClP3r-5SO9IpP4CTG5yGecWxpmx_et9MCA&oe=6814252B",
        "https://scontent.fccu31-2.fna.fbcdn.net/v/t39.30808-6/476497833_122181557600264466_2853489697909922106_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=2985_UuHtJUQ7kNvwEIjGKP&_nc_oc=Adm2ysDzBCNB196QYlCuqXrk4aMoSWwbpSFGFV6WyRc4jYAEcfHK4Vzh5M4QG2XnlAY&_nc_zt=23&_nc_ht=scontent.fccu31-2.fna&_nc_gid=XD9eo83htq54G5xJm0_IBQ&oh=00_AfHr0L1Awq06QCxLk7od2e5SuE843-qLOttiXvy9E8S4uw&oe=68142308",
        "https://scontent.fccu31-2.fna.fbcdn.net/v/t39.30808-6/476082193_122181556862264466_133068518632449336_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=5cLZ6e3GV9IQ7kNvwEIk8iN&_nc_oc=AdnQ6BX-COhaBQ8AzbQDiFNxyHRZB2lvNUw6ikcBqcOAVR8m5D6z3zgYcmIVLMQfawU&_nc_zt=23&_nc_ht=scontent.fccu31-2.fna&_nc_gid=pg1TXey_o4FYYVCj4RnItg&oh=00_AfHXBd5Y8MAUDJWRGwHGFttSe1rwh4KNDzJCnulN5mglQg&oe=6813F899",
        "https://scontent.fccu31-1.fna.fbcdn.net/v/t39.30808-6/476228276_122181556820264466_2599355559791416596_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=D1ul1FEpDd4Q7kNvwFHVsV_&_nc_oc=AdntNLvcBWDENXwsVQTenWaOzKpD28aD5DgGmcgQbSkRqQH5nC_NADqe4HPts3I0vZ4&_nc_zt=23&_nc_ht=scontent.fccu31-1.fna&_nc_gid=wwl8ovJa4quyEpLggqE4rA&oh=00_AfEkYBCyj0O4AT6GgTh_WbeZdTlOc8CA4tZFg3jocMQ6xg&oe=68142E5A",
        "https://scontent.fccu31-2.fna.fbcdn.net/v/t39.30808-6/475961682_122181557000264466_1565788486082597096_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=fOZAiJm77UsQ7kNvwGkjcRa&_nc_oc=Adn8ErpBs9FZlCetep2UfxvTU8S_FmB2Q3GdTvkINAFINUHF7LoOmKURH-BFzWLFbTc&_nc_zt=23&_nc_ht=scontent.fccu31-2.fna&_nc_gid=ARFx7Q-C3C1y1JzFPHyVEQ&oh=00_AfEGpEhgMmLMFMqXD3bBXWBcRcsJ3BvFNacqmkVk5CWwHQ&oe=6814283F",
        "https://scontent.fccu31-1.fna.fbcdn.net/v/t39.30808-6/475859350_122181556772264466_8346532268017954185_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=gCbhIL0Id7IQ7kNvwFWDrTg&_nc_oc=AdmapntqAniOVhp46zTbHwcdEd6ADCcNjPt6xNDaAbg1zYb1A1IzK4Ko9j7kP_beLo4&_nc_zt=23&_nc_ht=scontent.fccu31-1.fna&_nc_gid=gKHsL08DYXknUxxrKUgexg&oh=00_AfFxQc26549XrC83boKXQjfebQK1bXwFBhERX5tqLKdG1Q&oe=681426E5",

    ];

    const galleryContent = document.getElementById('gallery-content');

    // Function to append images to the gallery
    function loadImages() {
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');

        imageSources.forEach((src) => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = `Gallery Image`;
            img.loading = 'lazy';
            galleryItem.appendChild(img);
        });

        galleryContent.appendChild(galleryItem);
    }

    // Call the function to load images when the page is ready
    loadImages();



});