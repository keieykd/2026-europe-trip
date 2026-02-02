(function() {
    // === 1. 自動插入 Favicon (網站圖示) ===
    // 這樣您就不用每個 HTML 檔案都去加那行長長的代碼了
    const link = document.createElement('link');
    link.rel = 'icon';
    link.href = 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🏔️</text></svg>';
    document.head.appendChild(link);

    // === 2. 定義導航列 HTML ===
    const navHTML = `
    <nav class="navbar" id="mainNav">
        <div class="nav-container">
            <a href="index.html" class="nav-item"><span class="nav-icon">📅</span>行程</a>
            <a href="driving.html" class="nav-item"><span class="nav-icon">🚗</span>自駕</a>
            <a href="cooking.html" class="nav-item"><span class="nav-icon">🍳</span>下廚</a>
            <a href="refuel.html" class="nav-item"><span class="nav-icon">⛽</span>加油</a>
            <a href="lifestyle.html" class="nav-item"><span class="nav-icon">🏠</span>生活</a>
            <a href="photo.html" class="nav-item"><span class="nav-icon">📷</span>攝影</a>
            <a href="checklist.html" class="nav-item"><span class="nav-icon">📋</span>清單</a>
            <a href="communication.html" class="nav-item" style="color: #ffccbc;"><span class="nav-icon">🆘</span>救命</a>
        </div>
    </nav>
    `;
    
    // 插入導航列到 body 最開頭
    document.body.insertAdjacentHTML('afterbegin', navHTML);

    // === 3. 自動亮燈邏輯 (Active State) ===
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll('.nav-item');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        // 判斷當前頁面是否符合連結，或是首頁的情況
        if (currentPage.includes(linkHref) || (currentPage === "" && linkHref === "index.html")) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // === 4. 自動隱藏邏輯 (Auto-Hide) ===
    let lastScrollY = window.scrollY;
    const navbar = document.getElementById('mainNav');

    window.addEventListener('scroll', () => {
        if (window.scrollY > lastScrollY && window.scrollY > 50) {
            // 往下滾 -> 隱藏
            navbar.classList.add('nav-hidden');
        } else {
            // 往上滾 -> 顯示
            navbar.classList.remove('nav-hidden');
        }
        lastScrollY = window.scrollY;
    });
})();