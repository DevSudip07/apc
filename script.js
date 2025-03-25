document.addEventListener("DOMContentLoaded", function () {

    document.querySelector(".bars").addEventListener("click", function () {
        this.classList.toggle("active");
        let menu = document.querySelector("nav ul");
        menu.classList.toggle("show");
    });

    const video = document.querySelector(".welcome-video");
    const overlay = document.querySelector(".overlay");
    const button = document.querySelector(".play-btn");

    function playVideo() {
        if (video.paused) {
            video.setAttribute("controls", "");
            video.play();
            overlay.style.display = "none";
        }
    }

    button.addEventListener("click", () => {
        playVideo();
    });

    video.addEventListener("ended", function () {
        video.load();
        video.removeAttribute("controls");
        overlay.style.display = "block";
    });


    const galleryImages = [
        { src: "./assets/img/i-1.webp", alt: "Image 1" },
        { src: "./assets/img/i-2.webp", alt: "Image 2" },
        { src: "./assets/img/i-3.webp", alt: "Image 3" },
        { src: "./assets/img/i-4.webp", alt: "Image 4" },
        { src: "./assets/img/i-5.webp", alt: "Image 5" },
        { src: "./assets/img/i-6.webp", alt: "Image 6" },
        { src: "./assets/img/i-7.webp", alt: "Image 7" },
    ];

    const galleryContainer = document.getElementById("galleryContainer");

    galleryImages.forEach(image => {
        const slide = document.createElement("div");
        slide.classList.add("swiper-slide");

        slide.innerHTML = `<img src="${image.src}" alt="${image.alt}">`;
        galleryContainer.appendChild(slide);
    });




    //   fetch(`https://67e1334058cc6bf78524c2f2.mockapi.io/review`).then(res => res.json()).then((data)=> {
    //     // console.log(data[0].studentname);
    //     let clutter = "";
    //     let reviewContainer = document.querySelector("#reviewContainer")
    //     data.forEach(val => {
    //         // console.log(val)
    //         clutter+=`<div class="swiper-slide">${val.studentname}</div>`;
    //     });
    //     reviewContainer.innerHTML = clutter;
    //   });


    let reviewContainer = document.querySelector("#reviewContainer");

    fetch(`https://67e1334058cc6bf78524c2f2.mockapi.io/review`)
        .then(res => res.json())
        .then((data) => {
            let clutter = "";
            data.forEach(val => {
                clutter += `<div class="swiper-slide">
            <div class="student-details">
              <img src="${val.image}" alt="Image">
              <div class="name">
                <h3>${val.studentname || userData.studentname}</h3>
                <p>${val.status}</p>
              </div>
            </div>
            <p>${val.message}</p>
          </div>`;
            });
            // .catch(err => console.error("Error fetching reviews:", err));
            reviewContainer.innerHTML = clutter;
            // Swiper.js Init (Ensure Swiper starts after data is loaded)
            var swipers = new Swiper(".reviewSwiper", {
                effect: "cards",
                grabCursor: true,
            });
        });



    // var swipers = new Swiper(".reviewSwiper", {
    //     effect: "cards",
    //     grabCursor: true,
    // })
});

function postReview() {
    let form = document.querySelector("form");
    
    // if (localStorage.getItem("hasSubmittedReview")) {
    //     form.style.display = "none"; 
    //     alert("আপনি ইতিমধ্যে রিভিউ দিয়েছেন!");
    // }


    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let studentname = document.querySelector("#name").value;
        let status = document.querySelector("#status").value;
        let image = document.querySelector("#image").value;
        let message = document.querySelector("#message").value;
        let userData  = {studentname, status, image, message};

        fetch(`https://67e1334058cc6bf78524c2f2.mockapi.io/review`,
            {
                method: "post",
                headers: {
                    'Content-Type': 'application/json' // Specify JSON format
                },
                body: JSON.stringify(userData)
            }).then(res => res.json).then(() => {
                localStorage.setItem("hasSubmittedReview", "true");
                form.style.display = "none"; 
                alert("Thank you for your review");

                window.location.reload()

               
            })
            .catch(err => console.error("Error:", err));


    });


}
postReview();

const reviewButton = document.querySelector(".review-btn");
const formContainer = document.querySelector(".form-container");
const overlay = document.querySelector("#review .overlay");
const closeForm = document.querySelector("#review .close-form");

reviewButton.addEventListener("click", ()=> {
    overlay.style.display = "block";
    formContainer.style.top = "50%";
})

closeForm.addEventListener("click", ()=> {
    overlay.style.display = "none";
    formContainer.style.top = "200%";
})