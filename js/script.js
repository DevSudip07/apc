document.addEventListener("DOMContentLoaded", async function () {

    // ✅ Navbar Toggle
    document.querySelector(".bars").addEventListener("click", function () {
        this.classList.toggle("active");
        document.querySelector("nav ul").classList.toggle("show");
    });

    // ✅ Video Play Functionality
    const video = document.querySelector(".welcome-video");
    const overlay = document.querySelector(".welcome-overlay");
    const playButton = document.querySelector(".play-btn");

    playButton.addEventListener("click", () => {
        if (video.paused) {
            video.setAttribute("controls", "");
            video.play();
            overlay.style.display = "none";
        }
    });

    video.addEventListener("ended", () => {
        video.load();
        video.removeAttribute("controls");
        overlay.style.display = "block";
    });


    // ✅ Load Gallery Images
    const galleryImages = [
        { src: "./assets/img/i-1.webp", alt: "Image 1" },
        { src: "./assets/img/i-2.webp", alt: "Image 2" },
        { src: "./assets/img/i-3.webp", alt: "Image 3" },
        { src: "./assets/img/i-4.webp", alt: "Image 4" },
        { src: "./assets/img/i-5.webp", alt: "Image 5" },
        { src: "./assets/img/i-6.webp", alt: "Image 6" },
        { src: "./assets/img/i-7.webp", alt: "Image 7" }
    ];

    const galleryContainer = document.querySelector("#galleryContainer");

    if (galleryContainer) {
        galleryContainer.innerHTML = galleryImages.map(image => `
            <div class="swiper-slide">
                <img src="${image.src}" alt="${image.alt}">
            </div>
        `).join("");

        new Swiper(".gallerySwiper", {
            slidesPerView: 3,
            spaceBetween: 10,
            loop: true,
            autoplay: { delay: 3000 },
            pagination: { el: ".swiper-pagination", clickable: true },
            navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }
        });
    }


    // ✅ Fetch and Display Reviews
    const reviewContainer = document.querySelector("#reviewContainer");

    // async function fetchReviews() {
    //     try {
    //         const res = await fetch("https://67e1334058cc6bf78524c2f2.mockapi.io/review");
    //         if (!res.ok) throw new Error("Failed to fetch reviews");

    //         const data = await res.json();
    //         if (!data.length) return;

    //         reviewContainer.innerHTML = data.map(val => `
    //                 <div class="swiper-slide">
    //                     <div class="student-details">
    //                         <img src="${val.image ? val.image : 'https://via.placeholder.com/100'}" alt="${val.studentname}">
    //                         <div class="name">
    //                             <h3>${val.studentname || "Unknown"}</h3>
    //                             <p>${val.status || "No Status"}</p>
    //                         </div>
    //                     </div>
    //                     <p>${val.message || "No Message"}</p>
    //                 </div>
    //             `).join("");

    //         new Swiper(".reviewSwiper", {
    //             effect: "cards",
    //             grabCursor: true,
    //             pagination: { el: ".swiper-pagination", clickable: true },
    //             navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }
    //         });

    //     } catch (error) {
    //         console.error("Error fetching reviews:", error);
    //     }
    // }


    async function fetchReviews() {
        try {
            const res = await fetch("https://67e1334058cc6bf78524c2f2.mockapi.io/review");
            if (!res.ok) throw new Error("Failed to fetch reviews");
    
            const data = await res.json();
            console.log("Fetched Reviews:", data); // ✅ Console এ Check
    
            if (!data.length) return;
    
            reviewContainer.innerHTML = data.map(val => `
                <div class="swiper-slide">
                    <div class="student-details">
                        <img src="${val.image || 'https://via.placeholder.com/100'}" 
                             alt="${val.studentname}" 
                             onerror="this.src='https://via.placeholder.com/100'">
                        <div class="name">
                            <h3>${val.studentname || "Unknown"}</h3>
                            <p>${val.status || "No Status"}</p>
                        </div>
                    </div>
                    <p>${val.message || "No Message"}</p>
                </div>
            `).join("");
    
            new Swiper(".reviewSwiper", {
                effect: "cards",
                grabCursor: true,
                pagination: { el: ".swiper-pagination", clickable: true },
                navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }
            });
    
        } catch (error) {
            console.error("Error fetching reviews:", error);
        }
    }

    fetchReviews();

    // ✅ Handle Review Submission (Fixed Version)
    const form = document.querySelector("#review form");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const studentname = document.querySelector("#name").value.trim();
        const status = document.querySelector("#status").value.trim();
        let image = document.querySelector("#image").value.trim();
        const file = image.files[0]; // ✅ ফাইল ডাটা ঠিকমতো নেওয়া হলো
        const message = document.querySelector("#message").value.trim();

        if (!studentname || !status || !message) {
            alert("All fields are required!");
            return;
        }
        
        // ✅ ইমেজ URL Validate করা
        // let image = "";

        if (file) {
            // ✅ লোকাল ফাইলকে Base64 তে কনভার্ট করে API তে পাঠানো
            image = await convertToBase64(file);
        } else {
            image = ""; // Default Image
        }

        console.log("Fetched Image URL:", val.image);
        const newReview = { studentname, status, image, message };

        try {
            const res = await fetch("https://67e1334058cc6bf78524c2f2.mockapi.io/review", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newReview)
            });

            if (!res.ok) throw new Error("Failed to submit review");

            const result = await res.json();
            console.log("Review Submitted:", result);

            localStorage.setItem("hasSubmittedReview", "true");
            alert("Thank you for your review!");
            window.location.reload();

        } catch (error) {
            console.error("Error submitting review:", error);
            alert("Failed to submit review. Please try again!");
        }
    });

         // ✅ লোকাল ফাইল থেকে Base64 তে কনভার্ট করার ফাংশন
    function convertToBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }

    // ✅ Open & Close Review Form
    const reviewButton = document.querySelector(".review-btn");
    const formContainer = document.querySelector(".form-container");
    const reviewOverlay = document.querySelector("#review .overlay");
    const closeForm = document.querySelector("#review .close-form");

    reviewButton.addEventListener("click", () => {
        reviewOverlay.style.display = "block";
        formContainer.style.top = "50%";
    });

    closeForm.addEventListener("click", () => {
        reviewOverlay.style.display = "none";
        formContainer.style.top = "200%";
    });

});
