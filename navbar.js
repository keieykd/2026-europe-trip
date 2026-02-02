(function() {
    // 1. 定義導航列 HTML
    const navHTML = `
    <nav class="navbar" id="mainNav">
        <div class="nav-container">
            <a href="index.html" class="nav-item"><span class="nav-icon">📅</span>行程</a>
            <a href="driving.html" class="nav-item"><span class="nav-icon">🚗</span>自駕</a>
            <a href="refuel.html" class="nav-item"><span class="nav-icon">⛽</span>加油</a>
            <a href="cooking.html" class="nav-item"><span class="nav-icon">🍳</span>下廚</a>
            <a href="lifestyle.html" class="nav-item"><span class="nav-icon">🏠</span>生活</a>
            <a href="survival.html" class="nav-item"><span class="nav-icon">🛡️</span>退稅</a>
            <a href="communication.html" class="nav-item" style="color: #ffccbc;"><span class="nav-icon">🆘</span>救命</a>
        </div>
    </nav>
    `;
    document.body.insertAdjacentHTML('afterbegin', navHTML);

    // 2. 自動亮燈邏輯
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll('.nav-item');
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (currentPage.includes(linkHref) || (currentPage === "" && linkHref === "index.html")) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // 3. 自動隱藏邏輯
    let lastScrollY = window.scrollY;
    const navbar = document.getElementById('mainNav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > lastScrollY && window.scrollY > 50) {
            navbar.classList.add('nav-hidden');
        } else {
            navbar.classList.remove('nav-hidden');
        }
        lastScrollY = window.scrollY;
    });
})();