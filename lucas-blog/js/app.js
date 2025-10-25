// 简单的交互功能
document.addEventListener('DOMContentLoaded', function() {
    // 导航栏切换
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // 购买按钮交互
    const buyButtons = document.querySelectorAll('.btn-premium');
    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.closest('.premium-card').querySelector('h3').textContent;
            alert(`即将购买: ${productName}\n\n此功能需要用户登录和支付集成。`);
        });
    });

    // 文章卡片点击
    const articleCards = document.querySelectorAll('.article-card');
    articleCards.forEach(card => {
        card.addEventListener('click', function(e) {
            if (!e.target.classList.contains('btn-premium')) {
                const isPremium = this.querySelector('.article-badge.premium');
                if (isPremium) {
                    alert('这是付费文章，需要购买后才能阅读。');
                } else {
                    // 这里可以跳转到文章详情页
                    console.log('跳转到免费文章详情');
                }
            }
        });
    });

    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// 模拟用户认证状态
let currentUser = null;

function simulateLogin() {
    currentUser = {
        id: 1,
        name: '示例用户',
        email: 'user@example.com',
        isPremium: false
    };
    updateUI();
}

function updateUI() {
    if (currentUser) {
        // 更新导航栏显示用户名
        const navLinks = document.querySelector('.nav-menu');
        if (navLinks) {
            const loginLink = navLinks.querySelector('a[href="login.html"]');
            if (loginLink) {
                loginLink.textContent = currentUser.name;
                loginLink.href = 'dashboard.html';
            }
        }
    }
}