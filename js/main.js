document.addEventListener("DOMContentLoaded", function () {
  // ヘッダーのスクロール制御
  const header = document.querySelector(".js-header");
  const hamburger = document.querySelector(".js-hamburger");
  const globalNav = document.querySelector(".js-global-nav");

  // ハンバーガーメニューの開閉
  hamburger.addEventListener("click", function () {
    this.classList.toggle("is-active");
    globalNav.classList.toggle("is-active");
    document.body.classList.toggle("no-scroll");
  });

  // ナビゲーションリンクをクリックしたらメニューを閉じる
  const navLinks = document.querySelectorAll(".global-nav__item a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      hamburger.classList.remove("is-active");
      globalNav.classList.remove("is-active");
      document.body.classList.remove("no-scroll");
    });
  });

  // スクロール時の処理
  window.addEventListener("scroll", function () {
    // ヘッダーの背景変更
    if (window.scrollY > 100) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }

    // 要素が画面内に入ったらアニメーション実行
    animateOnScroll();
  });

  // スクロールアニメーション
  function animateOnScroll() {
    const animElements = document.querySelectorAll(
      ".business-card, .section__title, .about__content, .company__content, .contact__content"
    );

    animElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementTop < windowHeight * 0.85) {
        element.classList.add("fade-in");
      }
    });
  }

  // スクロールアニメーション用のCSSを動的に追加
  const style = document.createElement("style");
  style.textContent = `
    .business-card, .section__title, .about__content, .company__content, .contact__content {
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 0.8s ease, transform 0.8s ease;
    }
    
    .fade-in {
      opacity: 1;
      transform: translateY(0);
    }
    
    .business-card:nth-child(2) {
      transition-delay: 0.1s;
    }
    
    .business-card:nth-child(3) {
      transition-delay: 0.2s;
    }
    
    .business-card:nth-child(4) {
      transition-delay: 0.3s;
    }
    
    .business-card:nth-child(5) {
      transition-delay: 0.4s;
    }
    
    .business-card:nth-child(6) {
      transition-delay: 0.5s;
    }
    
    .business-card:nth-child(7) {
      transition-delay: 0.6s;
    }
    
    body.no-scroll {
      overflow: hidden;
    }
  `;
  document.head.appendChild(style);

  // 初回実行
  setTimeout(animateOnScroll, 300);
});
