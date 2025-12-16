document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const icon = hamburger.querySelector('i');
    const body = document.querySelector('body');

    hamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        
        // Toggle Icon
        if (mobileMenu.classList.contains('active')) {
            icon.classList.remove('ri-menu-line');
            icon.classList.add('ri-close-line');
            body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
        } else {
            icon.classList.remove('ri-close-line');
            icon.classList.add('ri-menu-line');
            body.style.overflow = 'auto';
        }
    });
 document.querySelectorAll('.pill').forEach(p=>{
    p.addEventListener('click', ()=>{
      document.querySelectorAll('.pill').forEach(x=>x.classList.remove('active'));
      p.classList.add('active');
    })
  });
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target) && mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            icon.classList.remove('ri-close-line');
            icon.classList.add('ri-menu-line');
            body.style.overflow = 'auto';
        }
    });

    // 2. Scroll Animation (Fade In Elements)
    const observerOptions = {
        threshold: 0.15, // Trigger when 15% visible
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    // 3. Navbar color change on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)";
            navbar.style.padding = "15px 5%";
        } else {
            navbar.style.boxShadow = "none";
            navbar.style.padding = "20px 5%";
        }
    });
// Subtle image hover animation
document.querySelectorAll(".gift-card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-6px)";
    card.style.transition = "0.3s ease";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
  });
});
document.querySelectorAll(".card button").forEach(button => {
  button.addEventListener("click", () => {
    alert("Redirecting to collection...");
  });
});

// Subtle interaction (optional)
document.querySelectorAll(".feature").forEach(item => {
  item.addEventListener("mouseenter", () => {
    item.style.transform = "translateY(-4px)";
  });

  item.addEventListener("mouseleave", () => {
    item.style.transform = "translateY(0)";
  });
});


// Subtle zoom on hover
document.querySelectorAll(".promo-card").forEach(card => {
  const img = card.querySelector("img");

  card.addEventListener("mouseenter", () => {
    img.style.transform = "scale(1.05)";
    img.style.transition = "0.5s ease";
  });

  card.addEventListener("mouseleave", () => {
    img.style.transform = "scale(1)";
  });
});
    // 4. Cart Interaction
    const addButtons = document.querySelectorAll('.add-btn');
    const cartDot = document.querySelector('.cart-dot');
    
    // addButtons.forEach(btn => {
    //     btn.addEventListener('click', function() {
    //         let originalText = this.innerText;
            
    //         // Visual Feedback on Button
    //         this.innerText = "Added";
    //         this.style.background = "#103025";
    //         this.style.color = "white";
    //         this.style.borderColor = "#103025";
            
    //         // Activate Cart Dot
    //         cartDot.classList.add('active');
            
    //         // Revert Button after 2 seconds
    //         setTimeout(() => {
    //             this.innerText = originalText;
    //             this.style.background = "transparent";
    //             this.style.color = "#222";
    //             this.style.borderColor = "#ddd";
    //         }, 2000);
    //     });
    // });

    // 5. Category Tab Switching (Visual Only)
    const tabs = document.querySelectorAll('.filter-tabs span');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
        });
    });
});