const countdown = document.getElementById("countdown");
const weddingDate = new Date("2025-05-18T00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  if (distance < 0) {
    countdown.innerHTML = "We're Married! 💍";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.innerHTML = `⏳ ${days}d ${hours}h ${minutes}m ${seconds}s`;
}

updateCountdown();
setInterval(updateCountdown, 1000);

// 2. Story Section

// Scroll-triggered animation for story section
function animateOnScroll() {
  const items = document.querySelectorAll(".timeline-item");
  items.forEach((item) => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      item.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", animateOnScroll);
window.addEventListener("load", animateOnScroll);


// 3. Event Section

// Animate on scroll
const cards = document.querySelectorAll('.event-card');
window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight * 0.85;
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerBottom) {
      card.classList.add('show');
    }
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const animatedItems = document.querySelectorAll('.animate-on-scroll');

  const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 150); // Staggered delay
      }
    });
  }, {
    threshold: 0.15
  });

  animatedItems.forEach(item => {
    observer.observe(item);
  });
});


// 4. Gallery Section

 let currentIndex = 0;
let autoSlideInterval;

// Show current slide by index
function showSlide(index) {
  const carousel = document.getElementById("carousel");
  const images = document.querySelectorAll(".carousel-img");
  const total = images.length;
  if (index >= total) currentIndex = 0;
  else if (index < 0) currentIndex = total - 1;
  else currentIndex = index;
  const offset = -currentIndex * images[0].clientWidth;
  carousel.style.transform = `translateX(${offset}px)`;
}

// Manual Controls
function nextSlide() {
  showSlide(currentIndex + 1);
}
function prevSlide() {
  showSlide(currentIndex - 1);
}

// Auto-play Carousel
function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    nextSlide();
  }, 4000);
}
function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

// Lightbox Viewer
document.querySelectorAll(".carousel-img, .grid-img").forEach(img => {
  img.addEventListener("click", () => {
    document.getElementById("lightbox").style.display = "block";
    document.getElementById("lightbox-img").src = img.src;
  });
});
function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

// Animate on Scroll
document.addEventListener('DOMContentLoaded', () => {
  const animatedItems = document.querySelectorAll('.animate-on-scroll');
  const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 150);
      }
    });
  }, { threshold: 0.1 });
  animatedItems.forEach(item => observer.observe(item));

  // Start autoplay
  startAutoSlide();
});

// Touch / Swipe Support
let touchStartX = 0;
let touchEndX = 0;

const carousel = document.getElementById("carousel");

carousel.addEventListener('touchstart', e => {
  touchStartX = e.changedTouches[0].screenX;
});

carousel.addEventListener('touchend', e => {
  touchEndX = e.changedTouches[0].screenX;
  handleGesture();
});

function handleGesture() {
  if (touchEndX < touchStartX - 50) nextSlide();
  if (touchEndX > touchStartX + 50) prevSlide();
}


// 5. Profile Section

document.addEventListener('DOMContentLoaded', () => {
  const animatedItems = document.querySelectorAll('.animate-on-scroll');

  const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 150);
      }
    });
  }, { threshold: 0.15 });

  animatedItems.forEach(item => observer.observe(item));
});


// 5. Gift Section

document.addEventListener('DOMContentLoaded', () => {
  const animatedItems = document.querySelectorAll('.animate-on-scroll');
  const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 150);
      }
    });
  }, { threshold: 0.1 });

  animatedItems.forEach(item => observer.observe(item));
});


// 6. Timer Section

document.addEventListener('DOMContentLoaded', () => {
  const animatedItems = document.querySelectorAll('.animate-on-scroll');
  const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 100);
      }
    });
  }, { threshold: 0.1 });

  animatedItems.forEach(item => observer.observe(item));

  // Countdown Timer Logic
  const targetDate = new Date("2026-05-18T11:00:00").getTime();

  const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      clearInterval(countdown);
      document.getElementById("countdown").innerHTML = "<p>The big day has arrived!</p>";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days.toString().padStart(2, '0');
    document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');
  }, 1000);
});

// 7. Wishes Section

document.addEventListener('DOMContentLoaded', () => {
  const animatedItems = document.querySelectorAll('.animate-on-scroll');
  const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 150);
      }
    });
  }, { threshold: 0.1 });

  animatedItems.forEach(item => observer.observe(item));

  // Wish form (dummy submission)
  const form = document.getElementById('wish-form');
  const status = document.getElementById('wish-status');
  form?.addEventListener('submit', e => {
    e.preventDefault();
    status.textContent = "Submitting...";
    setTimeout(() => {
      status.textContent = "Thank you for your lovely wishes!";
      form.reset();
    }, 1500);
  });
});


// 8. footer Section

// Scroll Reveal Animation for Footer
window.addEventListener("scroll", () => {
  const footer = document.getElementById("footer-scroll");
  const rect = footer.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;

  if (rect.top < windowHeight - 100) {
    footer.classList.add("show");
  }
});


// 8. Video Section

  // 🕒 On Page Load - Hide All Share Options
// 🕒 On Page Load - Hide All Share Options
window.addEventListener("DOMContentLoaded", () => {
  const allShareOptions = document.querySelectorAll(".share-options");
  allShareOptions.forEach(option => option.style.display = "none");
});

// 🔍 Live Search
const searchInput = document.getElementById("searchInput");
const videoCards = document.querySelectorAll(".video-card");
const noResultMessage = document.getElementById("noResultMessage");

function filterVideos(query) {
  let match = false;
  const lowerQuery = query.toLowerCase().trim();

  videoCards.forEach(card => {
    const title = card.dataset.title?.toLowerCase() || "";
    const heading = card.querySelector("h3")?.textContent.toLowerCase() || "";
    const description = card.querySelector("p")?.textContent.toLowerCase() || "";

    const visible = title.includes(lowerQuery) || heading.includes(lowerQuery) || description.includes(lowerQuery);
    card.style.display = visible ? "block" : "none";

    if (visible) match = true;
  });

  noResultMessage.style.display = match ? "none" : "block";
}

if (searchInput) {
  searchInput.addEventListener("input", () => {
    filterVideos(searchInput.value);
  });
}

// 🎙 Voice Search
const voiceSearch = document.getElementById("voiceSearch");
if (voiceSearch) {
  voiceSearch.addEventListener("click", () => {
    if ('webkitSpeechRecognition' in window) {
      const recognition = new webkitSpeechRecognition();
      recognition.lang = "en-US";
      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        searchInput.value = transcript;
        filterVideos(transcript);
      };
      recognition.start();
    } else {
      alert("Voice search not supported in your browser.");
    }
  });
}

// ▶️ Play Only One Video at a Time
function playVideo(thumbnailEl) {
  const allCards = document.querySelectorAll('.video-card');

  allCards.forEach(card => {
    const thumb = card.querySelector('.thumbnail');
    const wrapper = card.querySelector('.video-wrapper');

    if (thumb !== thumbnailEl && wrapper.innerHTML !== '') {
      wrapper.innerHTML = '';
      wrapper.style.display = 'none';
      thumb.style.display = 'block';
    }
  });

  const card = thumbnailEl.closest('.video-card');
  const wrapper = card.querySelector('.video-wrapper');
  const videoSrc = card.dataset.video;

  thumbnailEl.style.display = 'none';
  wrapper.innerHTML = `
    <iframe 
      src="${videoSrc}" 
      frameborder="0" 
      allow="autoplay; fullscreen" 
      allowfullscreen 
      loading="lazy"></iframe>`;
  wrapper.style.display = 'block';
}

// 🔗 Share Button Functionality
function toggleShare(button) {
  const options = button.nextElementSibling;
  if (!options) return;

  const isVisible = options.style.display === "flex";
  options.style.display = isVisible ? "none" : "flex";

  if (!isVisible) {
    const videoCard = button.closest(".video-card");
    const videoSrc = videoCard?.dataset.video || "";
    const encodedURL = encodeURIComponent(videoSrc);

    const whatsapp = options.querySelector(".whatsapp");
    const facebook = options.querySelector(".facebook");
    const instagram = options.querySelector(".instagram");
    const linkedin = options.querySelector(".linkedin");

    if (whatsapp) whatsapp.href = `https://wa.me/?text=${encodedURL}`;
    if (facebook) facebook.href = `https://www.facebook.com/sharer/sharer.php?u=${encodedURL}`;
    if (instagram) instagram.href = `https://www.instagram.com/?url=${encodedURL}`;
    if (linkedin) linkedin.href = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedURL}`;
  }
}




// 10. Navbar Section

  // 🔁 Toggle dark mode
const darkModeToggle = document.getElementById("darkModeToggle");
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Toggle icon between sun and moon
  const icon = darkModeToggle.querySelector("i");
  icon.classList.toggle("fa-moon");
  icon.classList.toggle("fa-sun");
});

// 📱 Toggle hamburger menu
const hamburgerBtn = document.getElementById("hamburgerBtn");
const navLinks = document.getElementById("navLinks");

hamburgerBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});










