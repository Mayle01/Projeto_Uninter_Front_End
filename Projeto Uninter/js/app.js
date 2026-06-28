/* ============================================
   RAÍZES DO NORDESTE — App.js (Global Logic)
   ============================================ */

// ---- Cart State (localStorage) ----
const Cart = {
  KEY: 'raizes_cart',

  getItems() {
    try {
      return JSON.parse(localStorage.getItem(this.KEY)) || [];
    } catch { return []; }
  },

  saveItems(items) {
    localStorage.setItem(this.KEY, JSON.stringify(items));
    this.updateBadge();
  },

  addItem(product) {
    const items = this.getItems();
    const existing = items.find(i => i.id === product.id);
    if (existing) {
      existing.qty += 1;
    } else {
      items.push({ ...product, qty: 1 });
    }
    this.saveItems(items);
    Toast.show(`${product.name} adicionado ao carrinho!`, 'success');
  },

  removeItem(id) {
    const items = this.getItems().filter(i => i.id !== id);
    this.saveItems(items);
  },

  updateQty(id, qty) {
    const items = this.getItems();
    const item = items.find(i => i.id === id);
    if (item) {
      item.qty = Math.max(1, qty);
      this.saveItems(items);
    }
  },

  getTotal() {
    return this.getItems().reduce((sum, i) => sum + i.price * i.qty, 0);
  },

  getCount() {
    return this.getItems().reduce((sum, i) => sum + i.qty, 0);
  },

  clear() {
    localStorage.removeItem(this.KEY);
    this.updateBadge();
  },

  updateBadge() {
    const badges = document.querySelectorAll('.cart-badge');
    const count = this.getCount();
    badges.forEach(b => {
      b.textContent = count;
      b.style.display = count > 0 ? 'flex' : 'none';
    });
  }
};

// ---- Toast Notifications ----
const Toast = {
  container: null,

  init() {
    if (!document.querySelector('.toast-container')) {
      this.container = document.createElement('div');
      this.container.className = 'toast-container';
      document.body.appendChild(this.container);
    } else {
      this.container = document.querySelector('.toast-container');
    }
  },

  show(message, type = 'info', duration = 3000) {
    if (!this.container) this.init();
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    const icons = { success: '✅', error: '❌', warning: '⚠️', info: 'ℹ️' };
    toast.innerHTML = `<span>${icons[type] || ''}</span><span>${message}</span>`;
    this.container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, duration);
  }
};

// ---- LGPD Cookie Banner ----
const LGPD = {
  KEY: 'raizes_lgpd_consent',

  init() {
    if (!localStorage.getItem(this.KEY)) {
      const banner = document.querySelector('.cookie-banner');
      if (banner) {
        setTimeout(() => banner.classList.add('show'), 1000);
      }
    }
  },

  accept() {
    localStorage.setItem(this.KEY, 'accepted');
    const banner = document.querySelector('.cookie-banner');
    if (banner) banner.classList.remove('show');
  },

  reject() {
    localStorage.setItem(this.KEY, 'rejected');
    const banner = document.querySelector('.cookie-banner');
    if (banner) banner.classList.remove('show');
  }
};

// ---- Auth State ----
const Auth = {
  KEY: 'raizes_user',

  getUser() {
    try {
      return JSON.parse(localStorage.getItem(this.KEY));
    } catch { return null; }
  },

  login(user) {
    localStorage.setItem(this.KEY, JSON.stringify(user));
    this.updateUI();
  },

  logout() {
    localStorage.removeItem(this.KEY);
    this.updateUI();
    window.location.href = 'index.html';
  },

  isLoggedIn() {
    return !!this.getUser();
  },

  updateUI() {
    const user = this.getUser();
    const loginBtns = document.querySelectorAll('.login-btn');
    const userMenus = document.querySelectorAll('.user-menu');

    loginBtns.forEach(btn => {
      btn.style.display = user ? 'none' : 'inline-flex';
    });

    userMenus.forEach(menu => {
      if (user) {
        menu.style.display = 'flex';
        const nameEl = menu.querySelector('.user-name');
        if (nameEl) nameEl.textContent = user.name;
      } else {
        menu.style.display = 'none';
      }
    });
  }
};

// ---- Mobile Nav Toggle ----
function toggleMobileNav() {
  const nav = document.querySelector('.navbar-nav');
  if (nav) nav.classList.toggle('open');
}

// ---- Scroll Animation ----
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.scroll-animate').forEach(el => {
    observer.observe(el);
  });
}

// ---- Format Currency (BRL) ----
function formatCurrency(value) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// ---- Generate Navbar HTML ----
function getNavbarHTML(activePage = '') {
  const user = Auth.getUser();
  const cartCount = Cart.getCount();

  return `
  <nav class="navbar" id="navbar-main">
    <div class="container">
      <a href="index.html" class="navbar-brand">
        <div class="brand-icon">🌿</div>
        <span>Raízes do <span class="text-gradient">Nordeste</span></span>
      </a>
      <div class="navbar-nav" id="navbarNav">
        <a href="index.html" class="${activePage === 'home' ? 'active' : ''}">Início</a>
        <a href="cardapio.html" class="${activePage === 'cardapio' ? 'active' : ''}">Cardápio</a>
        <a href="acompanhamento.html" class="${activePage === 'acompanhamento' ? 'active' : ''}">Meu Pedido</a>
        <a href="fidelidade.html" class="${activePage === 'fidelidade' ? 'active' : ''}">Fidelidade</a>
      </div>
      <div class="navbar-actions">
        <a href="carrinho.html" class="cart-btn" title="Carrinho">
          🛒
          <span class="cart-badge" style="display: ${cartCount > 0 ? 'flex' : 'none'}">${cartCount}</span>
        </a>
        ${user ? `
          <div class="user-menu flex gap-sm">
            <a href="fidelidade.html" class="btn btn-sm btn-secondary" style="font-size:0.8rem;">
              👤 <span class="user-name">${user.name}</span>
            </a>
            <button onclick="Auth.logout()" class="btn btn-sm btn-secondary" title="Sair" style="font-size:0.8rem;">🚪</button>
          </div>
        ` : `
          <a href="login.html" class="btn btn-sm btn-primary login-btn">Entrar</a>
        `}
        <div class="mobile-toggle" onclick="toggleMobileNav()">
          <span></span><span></span><span></span>
        </div>
      </div>
    </div>
  </nav>`;
}

// ---- Generate Footer HTML ----
function getFooterHTML() {
  return `
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <div class="footer-brand">🌿 Raízes do Nordeste</div>
          <p class="footer-desc">Levando a autêntica culinária nordestina para o dia a dia urbano, com rapidez, qualidade e identidade cultural. Tradição e sabor em cada pedido.</p>
        </div>
        <div>
          <div class="footer-title">Navegação</div>
          <ul class="footer-links">
            <li><a href="index.html">Início</a></li>
            <li><a href="cardapio.html">Cardápio</a></li>
            <li><a href="carrinho.html">Carrinho</a></li>
            <li><a href="fidelidade.html">Fidelidade</a></li>
          </ul>
        </div>
        <div>
          <div class="footer-title">Institucional</div>
          <ul class="footer-links">
            <li><a href="#">Sobre Nós</a></li>
            <li><a href="#">Franquias</a></li>
            <li><a href="#">Trabalhe Conosco</a></li>
            <li><a href="#">Política de Privacidade</a></li>
          </ul>
        </div>
        <div>
          <div class="footer-title">Contato</div>
          <ul class="footer-links">
            <li>📞 (81) 3333-0000</li>
            <li>📧 contato@raizesdonordeste.com.br</li>
            <li>📍 Recife, PE - Brasil</li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2026 Raízes do Nordeste. Todos os direitos reservados.</span>
        <span>Projeto Multidisciplinar — UNINTER</span>
      </div>
    </div>
  </footer>

  <!-- LGPD Cookie Banner -->
  <div class="cookie-banner" id="cookieBanner">
    <div class="cookie-content">
      <p>🍪 Utilizamos cookies e tecnologias semelhantes para melhorar sua experiência. Ao continuar navegando, você concorda com nossa <a href="#" style="color: var(--primary); text-decoration: underline;">Política de Privacidade</a> e com o tratamento dos seus dados conforme a <strong>LGPD</strong> (Lei Geral de Proteção de Dados).</p>
      <div class="cookie-actions">
        <button class="btn btn-primary btn-sm" onclick="LGPD.accept()">Aceitar</button>
        <button class="btn btn-secondary btn-sm" onclick="LGPD.reject()">Recusar</button>
      </div>
    </div>
  </div>`;
}

// ---- Init on DOM Load ----
document.addEventListener('DOMContentLoaded', () => {
  Toast.init();
  Cart.updateBadge();
  LGPD.init();
  Auth.updateUI();
  initScrollAnimations();
});
