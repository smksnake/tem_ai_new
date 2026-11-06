/**
 * ============================================================================
 * TEM AÍ? TEM AQUI! — PLATAFORMA DE INCLUSÃO DIGITAL PARA PEQUENOS COMÉRCIOS
 * Estudo de Caso: Banca Bueno (Sr. Renato) — Heliópolis, São Paulo
 * Projeto Integrador II — Engenharia da Computação — UNIVESP
 * Fundamentação Teórica: IHC e Acessibilidade (Cybis, Betiol e Faust, 2010)
 * ============================================================================
 */

(function () {
  "use strict";

  // DADOS INICIAIS DE DEMONSTRAÇÃO (SEED DATA)
  const INITIAL_STORES = [
    {
      id: "banca-bueno",
      name: "Banca do Renato (Banca Bueno)",
      category: "Banca de Jornal & Revistas",
      distance: "300 m",
      address: "Av. Principal, 120 — Heliópolis",
      phone: "5511987654321",
      icon: "🏪",
      isPartner: true,
      badge: "Ponto Piloto do PI"
    },
    {
      id: "papelaria-praca",
      name: "Papelaria da Praça",
      category: "Papelaria e Material Escolar",
      distance: "750 m",
      address: "Praça Central, 45 — Heliópolis",
      phone: "5511912345678",
      icon: "✏️",
      isPartner: true,
      badge: "Parceiro do Bairro"
    },
    {
      id: "livraria-bairro",
      name: "Livraria do Bairro",
      category: "Livraria e Colecionáveis",
      distance: "1.2 km",
      address: "Rua das Flores, 88 — Heliópolis",
      phone: "5511976543210",
      icon: "📚",
      isPartner: true,
      badge: "Parceiro do Bairro"
    },
    {
      id: "mercadinho-ze",
      name: "Mercadinho do Zé",
      category: "Conveniência e Utilidades",
      distance: "1.5 km",
      address: "Rua do Comércio, 14 — Heliópolis",
      phone: "5511998877665",
      icon: "🛒",
      isPartner: false,
      badge: "Comércio Local"
    }
  ];

  const INITIAL_PRODUCTS = [
    {
      id: 1,
      name: "Álbum de Figurinhas Copa 2026",
      category: "Figurinhas",
      storeId: "banca-bueno",
      store: "Banca do Renato",
      distance: "300 m",
      stock: 15,
      price: 12.00,
      icon: "⚽",
      description: "Álbum oficial capa tradicional com páginas para colar todas as figurinhas da Copa do Mundo 2026.",
      demand: "Alta procura",
      featured: true
    },
    {
      id: 2,
      name: "Pacote de Figurinhas Copa 2026 (Kit 10 envelopes)",
      category: "Figurinhas",
      storeId: "banca-bueno",
      store: "Banca do Renato",
      distance: "300 m",
      stock: 35,
      price: 40.00,
      icon: "📦",
      description: "Pacote promocional contendo 10 envelopes originais lacrados. Cada envelope contém 5 figurinhas.",
      demand: "Alta procura",
      featured: true
    },
    {
      id: 3,
      name: "Jornal do Dia — Edição Completa",
      category: "Livros e revistas",
      storeId: "banca-bueno",
      store: "Banca do Renato",
      distance: "300 m",
      stock: 18,
      price: 5.00,
      icon: "📰",
      description: "Edição matutina com caderno de notícias locais, economia, esportes e caderno cultural.",
      demand: "Diária",
      featured: true
    },
    {
      id: 4,
      name: "Revistas de Palavras Cruzadas & Passatempos",
      category: "Livros e revistas",
      storeId: "banca-bueno",
      store: "Banca do Renato",
      distance: "300 m",
      stock: 10,
      price: 8.50,
      icon: "✏️",
      description: "Edição nível médio e difícil para exercícios mentais, caça-palavras e sudokus.",
      demand: "Recorrente",
      featured: false
    },
    {
      id: 5,
      name: "Cartas Pokémon (Deck Inicial Treinador)",
      category: "Games e colecionáveis",
      storeId: "livraria-bairro",
      store: "Livraria do Bairro",
      distance: "1.2 km",
      stock: 5,
      price: 49.90,
      icon: "🃏",
      description: "Baralho inicial pronto para jogar contendo 60 cartas, moeda metalizada e manual de regras.",
      demand: "Colecionável",
      featured: true
    },
    {
      id: 6,
      name: "Kit Canetas Coloridas Gel (10 cores)",
      category: "Papelaria",
      storeId: "papelaria-praca",
      store: "Papelaria da Praça",
      distance: "750 m",
      stock: 0,
      price: 19.90,
      icon: "🖍️",
      description: "Canetas ponta 0.7mm com tinta em gel de alta pigmentação para anotações e desenhos.",
      demand: "Esgotado",
      featured: true
    },
    {
      id: 7,
      name: "Caderno Universitário Capa Dura (10 Matérias)",
      category: "Papelaria",
      storeId: "papelaria-praca",
      store: "Papelaria da Praça",
      distance: "750 m",
      stock: 12,
      price: 24.90,
      icon: "📓",
      description: "Caderno espiral com 160 folhas pautadas, bolsa plástica interna e adesivos.",
      demand: "Volta às aulas",
      featured: false
    },
    {
      id: 8,
      name: "Mangá Colecionável (Lançamento Semanal)",
      category: "Lançamentos",
      storeId: "livraria-bairro",
      store: "Livraria do Bairro",
      distance: "1.2 km",
      stock: 4,
      price: 34.90,
      icon: "📖",
      description: "Volume recém-lançado com tradução oficial em português e páginas especiais coloridas.",
      demand: "Lançamento",
      featured: true
    }
  ];

  // SEED DE RESERVAS (inclui o exemplo clássico #4587 da Figura 2 do relatório!)
  const INITIAL_RESERVATIONS = [
    {
      code: "#4587",
      product: "Álbum de Figurinhas Copa 2026",
      productId: 1,
      store: "Banca do Renato",
      storeId: "banca-bueno",
      customerName: "Eraldo Antonello",
      phone: "(11) 98765-1122",
      quantity: 1,
      unitPrice: 12.00,
      totalPrice: 12.00,
      status: "Aguardando Retirada",
      deadline: "Sábado, até 18:00",
      createdAt: "Hoje às 08:30"
    },
    {
      code: "#3371",
      product: "Jornal do Dia — Edição Completa",
      productId: 3,
      store: "Banca do Renato",
      storeId: "banca-bueno",
      customerName: "Carlos Pereira",
      phone: "(11) 97766-5544",
      quantity: 1,
      unitPrice: 5.00,
      totalPrice: 5.00,
      status: "Aguardando Retirada",
      deadline: "Hoje, até 17:00",
      createdAt: "Hoje às 07:15"
    },
    {
      code: "#2840",
      product: "Revistas em Geral",
      productId: 4,
      store: "Banca do Renato",
      storeId: "banca-bueno",
      customerName: "Mariana Silva",
      phone: "(11) 96655-4433",
      quantity: 2,
      unitPrice: 8.50,
      totalPrice: 17.00,
      status: "Concluída",
      deadline: "05/04",
      createdAt: "05/04 às 10:10"
    }
  ];

  // ESTADO DA APLICAÇÃO
  let products = loadStorage("temai_products", INITIAL_PRODUCTS);
  let stores = loadStorage("temai_stores", INITIAL_STORES);
  let reservations = loadStorage("temai_reservations", INITIAL_RESERVATIONS);

  let currentRole = "customer"; // "customer" ou "merchant"
  let currentNav = "client-home";
  let activeCategory = "";
  let activeSearchTerm = "";
  let selectedProductForDetail = null;
  let selectedProductForReserve = null;
  let isMobileSimulated = false;

  // AUXILIARES DE STORAGE E FORMATAÇÃO
  function loadStorage(key, fallback) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : structuredClone(fallback);
    } catch {
      return structuredClone(fallback);
    }
  }

  function saveStorage() {
    localStorage.setItem("temai_products", JSON.stringify(products));
    localStorage.setItem("temai_stores", JSON.stringify(stores));
    localStorage.setItem("temai_reservations", JSON.stringify(reservations));
  }

  function formatMoney(value) {
    return Number(value || 0).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    });
  }

  function escapeHTML(str) {
    return String(str || "").replace(/[&<>"']/g, c => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }[c]));
  }

  function showToast(msg) {
    const toast = document.getElementById("toast");
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2800);
  }

  // ELEMENTOS DO DOM
  const mainContent = document.getElementById("main-content");
  const searchInput = document.getElementById("search-input");
  const clearSearchBtn = document.getElementById("clear-search-btn");
  const searchSuggestions = document.getElementById("search-suggestions");
  const headerModeToggle = document.getElementById("header-mode-toggle");
  const quickSwitchMerchantBtn = document.getElementById("quick-switch-merchant-btn");
  const toggleDeviceBtn = document.getElementById("toggle-device-btn");
  const resetDemoBtn = document.getElementById("reset-demo-btn");
  const deviceWrapper = document.getElementById("device-wrapper");
  const userLabel = document.getElementById("user-label");
  const userAvatar = document.getElementById("user-avatar");
  const sideRecentReservations = document.getElementById("side-recent-reservations");
  const sideResCount = document.getElementById("side-res-count");
  const mobResCount = document.getElementById("mob-res-count");

  // MODAIS
  const productDetailModal = document.getElementById("product-detail-modal");
  const productDetailBody = document.getElementById("product-detail-body");
  const closeProductDetail = document.getElementById("close-product-detail");

  const reserveModal = document.getElementById("reserve-modal");
  const closeReserveForm = document.getElementById("close-reserve-form");
  const cancelReserveBtn = document.getElementById("cancel-reserve-btn");
  const reserveSubmitForm = document.getElementById("reserve-submit-form");
  const reserveFormTitle = document.getElementById("reserve-form-title");
  const reserveFormSubtitle = document.getElementById("reserve-form-subtitle");
  const reserveCustomerName = document.getElementById("reserve-customer-name");
  const reserveCustomerPhone = document.getElementById("reserve-customer-phone");
  const reserveQtyInput = document.getElementById("reserve-qty-input");
  const reserveQtyDec = document.getElementById("reserve-qty-dec");
  const reserveQtyInc = document.getElementById("reserve-qty-inc");
  const summaryUnitPrice = document.getElementById("summary-unit-price");
  const summaryTotalPrice = document.getElementById("summary-total-price");

  const reserveSuccessModal = document.getElementById("reserve-success-modal");
  const successProductTitle = document.getElementById("success-product-title");
  const successStoreInfo = document.getElementById("success-store-info");
  const successVoucherCode = document.getElementById("success-voucher-code");
  const successVoucherDeadline = document.getElementById("success-voucher-deadline");
  const successWhatsappLink = document.getElementById("success-whatsapp-link");
  const successFinishBtn = document.getElementById("success-finish-btn");
  const successHomeBtn = document.getElementById("success-home-btn");

  const mapModal = document.getElementById("map-modal");
  const mapInteractiveView = document.getElementById("map-interactive-view");
  const closeMapModal = document.getElementById("close-map-modal");
  const btnOpenMap = document.getElementById("btn-open-map");
  const miniMapTrigger = document.getElementById("mini-map-trigger");
  const btnViewAllRes = document.getElementById("btn-view-all-res");

  // ==========================================================================
  // INICIALIZAÇÃO E CONTROLE DE ESTADO
  // ==========================================================================
  function init() {
    setupEventListeners();
    updateBadges();
    renderCurrentView();
  }

  function updateBadges() {
    const activeResCount = reservations.filter(r => r.status === "Aguardando Retirada").length;
    if (sideResCount) {
      sideResCount.textContent = activeResCount;
      sideResCount.classList.toggle("hidden", activeResCount === 0);
    }
    if (mobResCount) {
      mobResCount.textContent = activeResCount;
      mobResCount.classList.toggle("hidden", activeResCount === 0);
    }
    renderSideRecentReservations();
  }

  function renderSideRecentReservations() {
    if (!sideRecentReservations) return;
    const recents = reservations.slice(0, 3);
    if (!recents.length) {
      sideRecentReservations.innerHTML = `<p class="muted-info" style="font-size:0.8rem;">Nenhuma reserva recente.</p>`;
      return;
    }
    sideRecentReservations.innerHTML = recents.map(r => `
      <div class="side-res-item">
        <div>
          <strong>${escapeHTML(r.product)}</strong>
          <span>${escapeHTML(r.store)} · ${r.quantity} un.</span>
        </div>
        <span class="res-status-tag ${r.status === "Concluída" ? "done" : "active"}">
          ${escapeHTML(r.code)}
        </span>
      </div>
    `).join("");
  }

  function setRole(role) {
    currentRole = role;
    if (role === "merchant") {
      userLabel.textContent = "Sr. Renato (Lojista)";
      userAvatar.textContent = "🏪";
      headerModeToggle.textContent = "Voltar para Visão do Cliente";
      quickSwitchMerchantBtn.querySelector(".switch-label").textContent = "Mudar para Modo Cliente";
      currentNav = "merchant-hub";
    } else {
      userLabel.textContent = "Olá, Cliente";
      userAvatar.textContent = "👤";
      headerModeToggle.textContent = "Área do Comerciante";
      quickSwitchMerchantBtn.querySelector(".switch-label").textContent = "Ver Modo Comerciante (Sr. Renato)";
      currentNav = "client-home";
    }
    updateNavButtons();
    renderCurrentView();
    showToast(`Modo alterado: ${role === "merchant" ? "Painel do Sr. Renato" : "Visão do Cliente"}`);
  }

  function navigateTo(navTarget) {
    currentNav = navTarget;
    if (navTarget.startsWith("merchant-")) {
      currentRole = "merchant";
      userLabel.textContent = "Sr. Renato (Lojista)";
      userAvatar.textContent = "🏪";
      headerModeToggle.textContent = "Voltar para Visão do Cliente";
      quickSwitchMerchantBtn.querySelector(".switch-label").textContent = "Mudar para Modo Cliente";
    } else {
      currentRole = "customer";
      userLabel.textContent = "Olá, Cliente";
      userAvatar.textContent = "👤";
      headerModeToggle.textContent = "Área do Comerciante";
      quickSwitchMerchantBtn.querySelector(".switch-label").textContent = "Ver Modo Comerciante (Sr. Renato)";
    }
    updateNavButtons();
    renderCurrentView();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function updateNavButtons() {
    document.querySelectorAll(".side-nav-item, .mob-nav-item").forEach(btn => {
      const target = btn.dataset.nav;
      btn.classList.toggle("active", target === currentNav);
    });
  }

  // ==========================================================================
  // RENDERIZAÇÃO DAS TELAS PRINCIPAIS
  // ==========================================================================
  function renderCurrentView() {
    switch (currentNav) {
      case "client-home":
        renderClientHome();
        break;
      case "client-products":
        renderClientProducts();
        break;
      case "client-stores":
        renderClientStores();
        break;
      case "client-reservations":
        renderClientReservations();
        break;
      case "merchant-hub":
        renderMerchantHub();
        break;
      case "merchant-stock":
        renderMerchantStock();
        break;
      case "merchant-reservations":
        renderMerchantReservations();
        break;
      case "merchant-add":
        renderMerchantAddProduct();
        break;
      case "merchant-stats":
        renderMerchantStats();
        break;
      default:
        renderClientHome();
    }
  }

  // --------------------------------------------------------------------------
  // 1. VISÃO DO CLIENTE: HOME (FIGURA 1 DO RELATÓRIO PARCIAL)
  // --------------------------------------------------------------------------
  function renderClientHome() {
    const categories = [
      { name: "Lançamentos", icon: "★" },
      { name: "Livros e revistas", icon: "📖" },
      { name: "Figurinhas", icon: "⚽" },
      { name: "Games e colecionáveis", icon: "🎮" },
      { name: "Papelaria", icon: "✏️" },
      { name: "Outros", icon: "🎁" }
    ];

    const term = activeSearchTerm.trim().toLowerCase();
    const filteredProducts = products.filter(p => {
      const matchCat = !activeCategory || p.category === activeCategory;
      const matchSearch = !term || [p.name, p.store, p.category, p.description].some(v => (v || "").toLowerCase().includes(term));
      return matchCat && matchSearch;
    });

    mainContent.innerHTML = `
      <!-- Hero Banner (Visão Desktop/Mobile Figura 1) -->
      <section class="hero-banner">
        <div class="hero-text">
          <span class="eyebrow-badge">APOIE O COMÉRCIO LOCAL</span>
          <h1>O que você procura,<br><span>pode estar pertinho</span> de você!</h1>
          <p>Consulte a disponibilidade em tempo real e reserve produtos de alta demanda na Banca Bueno e comércios da comunidade.</p>
          <div class="hero-tags">
            <span class="hero-tag">✓ Sem taxa de reserva</span>
            <span class="hero-tag">✓ Retirada garantida</span>
            <span class="hero-tag">✓ Fale no WhatsApp do lojista</span>
          </div>
        </div>
        <div class="hero-illustration" aria-hidden="true">🏪</div>
      </section>

      <!-- Categorias em Destaque -->
      <section class="content-section">
        <div class="section-header">
          <h2>Categorias em destaque</h2>
          <div class="section-actions">
            ${activeCategory ? `<button class="btn-link" id="btn-clear-category">Limpar filtro (${escapeHTML(activeCategory)})</button>` : `<button class="btn-link" id="btn-show-all-cats">Ver todas</button>`}
          </div>
        </div>
        <div class="categories-grid">
          ${categories.map(c => `
            <button class="category-card ${activeCategory === c.name ? "active" : ""}" data-category="${c.name}">
              <div class="category-icon">${c.icon}</div>
              <span class="category-title">${escapeHTML(c.name)}</span>
            </button>
          `).join("")}
        </div>
      </section>

      <!-- Grade de Produtos com Indicador de Estoque em Tempo Real -->
      <section class="content-section">
        <div class="section-header">
          <div>
            <h2>Produtos disponíveis perto de você</h2>
            <p class="muted-info" style="margin-bottom:0;">
              ${filteredProducts.length} ${filteredProducts.length === 1 ? "produto encontrado" : "produtos encontrados"}
              ${activeCategory ? `na categoria <strong>${escapeHTML(activeCategory)}</strong>` : ""}
              ${term ? `para o termo "<strong>${escapeHTML(term)}</strong>"` : ""}
            </p>
          </div>
        </div>

        ${filteredProducts.length ? `
          <div class="products-grid">
            ${filteredProducts.map(p => `
              <article class="product-card" data-product-id="${p.id}">
                <div class="product-badge-corner">
                  <span class="badge-pill ${p.stock > 0 ? "badge-in-stock" : "badge-out-of-stock"}">
                    ${p.stock > 0 ? `Disponível · ${p.stock} un.` : "Esgotado"}
                  </span>
                </div>
                <div class="product-image-box">
                  <span>${p.icon}</span>
                  <span class="store-tag">📍 ${escapeHTML(p.distance)}</span>
                </div>
                <div class="product-info">
                  <h3>${escapeHTML(p.name)}</h3>
                  <div class="product-store-distance">
                    <span>🏪 ${escapeHTML(p.store)}</span>
                  </div>
                  <div class="product-price-row">
                    <span class="product-price">${formatMoney(p.price)}</span>
                  </div>
                  <div class="product-actions">
                    <button class="btn-primary btn-open-detail" data-id="${p.id}">
                      Ver detalhes e reservar
                    </button>
                  </div>
                </div>
              </article>
            `).join("")}
          </div>
        ` : `
          <div class="text-center" style="padding: 40px 20px;">
            <p style="font-size:3rem; margin-bottom:8px;">🔍</p>
            <h3>Nenhum produto encontrado</h3>
            <p class="muted-info">Não encontramos itens para o filtro selecionado. Experimente limpar os filtros ou buscar por outro termo.</p>
            <button class="btn-secondary" id="btn-reset-filters">Limpar filtros de busca</button>
          </div>
        `}
      </section>

      <!-- Lojas Mais Próximas -->
      <section class="content-section">
        <div class="section-header">
          <h2>Lojas mais próximas</h2>
          <button class="btn-link" id="btn-goto-stores">Ver mapa completo</button>
        </div>
        <div class="stores-row">
          ${stores.map(s => `
            <div class="store-card">
              <div class="store-avatar">${s.icon}</div>
              <div class="store-details">
                <h4>${escapeHTML(s.name)}</h4>
                <p>📍 ${escapeHTML(s.distance)} · ${escapeHTML(s.category)}</p>
              </div>
            </div>
          `).join("")}
        </div>
      </section>
    `;

    // Eventos locais da Home
    mainContent.querySelectorAll(".category-card").forEach(btn => {
      btn.addEventListener("click", () => {
        const cat = btn.dataset.category;
        activeCategory = activeCategory === cat ? "" : cat;
        renderClientHome();
      });
    });

    const clearCatBtn = mainContent.querySelector("#btn-clear-category");
    if (clearCatBtn) clearCatBtn.addEventListener("click", () => { activeCategory = ""; renderClientHome(); });

    const showAllCatsBtn = mainContent.querySelector("#btn-show-all-cats");
    if (showAllCatsBtn) showAllCatsBtn.addEventListener("click", () => { activeCategory = ""; renderClientHome(); });

    const resetFiltersBtn = mainContent.querySelector("#btn-reset-filters");
    if (resetFiltersBtn) resetFiltersBtn.addEventListener("click", () => {
      activeCategory = "";
      activeSearchTerm = "";
      if (searchInput) searchInput.value = "";
      renderClientHome();
    });

    const gotoStoresBtn = mainContent.querySelector("#btn-goto-stores");
    if (gotoStoresBtn) gotoStoresBtn.addEventListener("click", () => navigateTo("client-stores"));

    mainContent.querySelectorAll(".btn-open-detail").forEach(btn => {
      btn.addEventListener("click", () => openProductDetail(Number(btn.dataset.id)));
    });
  }

  // --------------------------------------------------------------------------
  // 2. VISÃO DO CLIENTE: CATÁLOGO COMPLETO DE PRODUTOS
  // --------------------------------------------------------------------------
  function renderClientProducts() {
    mainContent.innerHTML = `
      <section class="content-section">
        <div class="section-header">
          <div>
            <h2>Catálogo Geral de Produtos do Bairro</h2>
            <p class="muted-info" style="margin-bottom:0;">Consulte produtos em tempo real na Banca Bueno e parceiros da vizinhança.</p>
          </div>
          <button class="btn-secondary" id="btn-back-home">Voltar ao Início</button>
        </div>

        <div class="products-grid">
          ${products.map(p => `
            <article class="product-card" data-product-id="${p.id}">
              <div class="product-badge-corner">
                <span class="badge-pill ${p.stock > 0 ? "badge-in-stock" : "badge-out-of-stock"}">
                  ${p.stock > 0 ? `Disponível · ${p.stock} un.` : "Esgotado"}
                </span>
              </div>
              <div class="product-image-box">
                <span>${p.icon}</span>
                <span class="store-tag">📍 ${escapeHTML(p.distance)}</span>
              </div>
              <div class="product-info">
                <h3>${escapeHTML(p.name)}</h3>
                <div class="product-store-distance">
                  <span>🏪 ${escapeHTML(p.store)}</span>
                </div>
                <p class="muted-info" style="font-size:0.8rem; line-height:1.3; margin:0;">${escapeHTML(p.description)}</p>
                <div class="product-price-row">
                  <span class="product-price">${formatMoney(p.price)}</span>
                </div>
                <div class="product-actions">
                  <button class="btn-primary btn-open-detail" data-id="${p.id}">
                    Ver detalhes e reservar
                  </button>
                </div>
              </div>
            </article>
          `).join("")}
        </div>
      </section>
    `;

    mainContent.querySelector("#btn-back-home").addEventListener("click", () => navigateTo("client-home"));
    mainContent.querySelectorAll(".btn-open-detail").forEach(btn => {
      btn.addEventListener("click", () => openProductDetail(Number(btn.dataset.id)));
    });
  }

  // --------------------------------------------------------------------------
  // 3. VISÃO DO CLIENTE: MINHAS RESERVAS (FIGURA 2 - MOBILE TELA 4)
  // --------------------------------------------------------------------------
  function renderClientReservations() {
    const activeRes = reservations.filter(r => r.status === "Aguardando Retirada");
    const historyRes = reservations.filter(r => r.status !== "Aguardando Retirada");

    mainContent.innerHTML = `
      <section class="content-section">
        <div class="section-header">
          <div>
            <h2>Minhas Reservas</h2>
            <p class="muted-info" style="margin-bottom:0;">Acompanhe os códigos de retirada gerados para apresentação na banca.</p>
          </div>
          <button class="btn-secondary" id="btn-back-home">Voltar ao Início</button>
        </div>

        <div style="display:flex; gap:12px; margin-bottom:20px;">
          <button class="academic-btn primary-switch" id="tab-active-res">
            Ativas (${activeRes.length})
          </button>
          <button class="academic-btn" id="tab-history-res">
            Histórico (${historyRes.length})
          </button>
        </div>

        <div id="reservations-list-container">
          ${renderReservationsCards(activeRes, true)}
        </div>
      </section>
    `;

    mainContent.querySelector("#btn-back-home").addEventListener("click", () => navigateTo("client-home"));

    const tabActive = mainContent.querySelector("#tab-active-res");
    const tabHistory = mainContent.querySelector("#tab-history-res");
    const container = mainContent.querySelector("#reservations-list-container");

    tabActive.addEventListener("click", () => {
      tabActive.className = "academic-btn primary-switch";
      tabHistory.className = "academic-btn";
      container.innerHTML = renderReservationsCards(activeRes, true);
      attachReservationCardEvents();
    });

    tabHistory.addEventListener("click", () => {
      tabActive.className = "academic-btn";
      tabHistory.className = "academic-btn primary-switch";
      container.innerHTML = renderReservationsCards(historyRes, false);
      attachReservationCardEvents();
    });

    attachReservationCardEvents();
  }

  function renderReservationsCards(list, isActive) {
    if (!list.length) {
      return `
        <div class="text-center" style="padding: 40px 20px;">
          <p style="font-size:3rem; margin-bottom:8px;">🎟️</p>
          <h3>Nenhuma reserva nesta lista</h3>
          <p class="muted-info">${isActive ? "Você não possui nenhuma reserva pendente para retirada." : "Não há reservas concluídas no histórico deste navegador."}</p>
          <button class="btn-primary" id="btn-go-reserve">Buscar produtos para reservar</button>
        </div>
      `;
    }

    return `
      <div style="display:flex; flex-direction:column; gap:16px;">
        ${list.map(r => `
          <div class="merchant-res-card ${r.status === "Aguardando Retirada" ? "pending" : "confirmed"}">
            <div class="merchant-res-top">
              <span class="voucher-highlight-merchant">${escapeHTML(r.code)}</span>
              <span class="res-status-tag ${r.status === "Concluída" ? "done" : "active"}">
                ${escapeHTML(r.status)}
              </span>
            </div>
            <div class="merchant-res-details">
              <div>
                <span>Produto reservado:</span>
                <strong>${escapeHTML(r.product)}</strong>
              </div>
              <div>
                <span>Estabelecimento:</span>
                <strong>🏪 ${escapeHTML(r.store)}</strong>
              </div>
              <div>
                <span>Quantidade e Total:</span>
                <strong>${r.quantity} un. · ${formatMoney(r.totalPrice)}</strong>
              </div>
              <div>
                <span>Prazo de retirada:</span>
                <strong>📅 ${escapeHTML(r.deadline)}</strong>
              </div>
            </div>
            ${isActive ? `
              <div class="merchant-res-actions">
                <a class="btn-wpp-merchant" target="_blank" rel="noopener noreferrer" href="https://wa.me/5511987654321?text=${encodeURIComponent(`Olá, Sr. Renato! Fiz a reserva ${r.code} do produto ${r.product} pelo Tem Aí? Tem Aqui! e gostaria de confirmar a retirada.`)}">
                  💬 Falar com o comerciante via WhatsApp
                </a>
                <button class="btn-secondary btn-cancel-res" data-code="${r.code}">
                  Cancelar reserva
                </button>
              </div>
            ` : ""}
          </div>
        `).join("")}
      </div>
    `;
  }

  function attachReservationCardEvents() {
    const goReserveBtn = mainContent.querySelector("#btn-go-reserve");
    if (goReserveBtn) goReserveBtn.addEventListener("click", () => navigateTo("client-home"));

    mainContent.querySelectorAll(".btn-cancel-res").forEach(btn => {
      btn.addEventListener("click", () => {
        const code = btn.dataset.code;
        if (confirm(`Tem certeza que deseja cancelar a reserva ${code}? O item voltará ao estoque da banca.`)) {
          const res = reservations.find(r => r.code === code);
          if (res) {
            res.status = "Cancelada";
            // Devolve quantidade ao estoque
            const product = products.find(p => p.id === res.productId);
            if (product) product.stock += res.quantity;
            saveStorage();
            updateBadges();
            renderClientReservations();
            showToast(`Reserva ${code} cancelada e estoque restabelecido.`);
          }
        }
      });
    });
  }

  // --------------------------------------------------------------------------
  // 4. VISÃO DO CLIENTE: LOJAS E MAPA DO BAIRRO
  // --------------------------------------------------------------------------
  function renderClientStores() {
    mainContent.innerHTML = `
      <section class="content-section">
        <div class="section-header">
          <div>
            <h2>Lojas e Pequenos Comércios do Bairro</h2>
            <p class="muted-info" style="margin-bottom:0;">Rede de apoio local cadastrada no projeto piloto em Heliópolis.</p>
          </div>
          <button class="btn-primary" id="btn-open-interactive-map">🗺️ Abrir Mapa Interativo</button>
        </div>

        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap:20px;">
          ${stores.map(s => {
            const storeProducts = products.filter(p => p.storeId === s.id);
            return `
              <div class="content-section" style="border: 2px solid var(--border-light); box-shadow:none;">
                <div style="display:flex; align-items:center; gap:12px; margin-bottom:12px;">
                  <span style="font-size:2.4rem;">${s.icon}</span>
                  <div>
                    <h3 style="font-size:1.15rem; margin-bottom:2px;">${escapeHTML(s.name)}</h3>
                    <span class="badge-pill ${s.isPartner ? "badge-in-stock" : "badge-out-of-stock"}">${escapeHTML(s.badge)}</span>
                  </div>
                </div>
                <p style="font-size:0.9rem; color:var(--ink-700); margin-bottom:6px;">📍 ${escapeHTML(s.address)}</p>
                <p style="font-size:0.85rem; color:var(--ink-500); margin-bottom:12px;">Distância aproximada: <strong>${escapeHTML(s.distance)}</strong></p>
                <div style="font-size:0.85rem; margin-bottom:16px;">
                  <span>Itens disponíveis no catálogo: <strong>${storeProducts.length}</strong></span>
                </div>
                <div style="display:flex; flex-direction:column; gap:8px;">
                  <a class="btn-whatsapp" target="_blank" rel="noopener noreferrer" href="https://wa.me/${s.phone}?text=${encodeURIComponent(`Olá! Encontrei sua loja no Tem Aí? Tem Aqui! e gostaria de tirar uma dúvida.`)}">
                    💬 WhatsApp da Loja
                  </a>
                </div>
              </div>
            `;
          }).join("")}
        </div>
      </section>
    `;

    mainContent.querySelector("#btn-open-interactive-map").addEventListener("click", openMapModal);
  }

  // --------------------------------------------------------------------------
  // 5. VISÃO DO COMERCIANTE: PAINEL PRINCIPAL (SR. RENATO - FIGURA 2 - TELA 1)
  // --------------------------------------------------------------------------
  function renderMerchantHub() {
    const renatoProducts = products.filter(p => p.storeId === "banca-bueno");
    const renatoReservations = reservations.filter(r => r.storeId === "banca-bueno" && r.status === "Aguardando Retirada");

    mainContent.innerHTML = `
      <!-- Cabeçalho Acolhedor e Acessível para o Sr. Renato -->
      <div class="merchant-welcome-header">
        <div>
          <h1>Banca do Renato — Seu Estabelecimento</h1>
          <p>Painel de controle simplificado: atualize itens e consulte reservas em poucos toques.</p>
        </div>
        <div class="merchant-status-badge">
          <span class="status-dot-green"></span>
          <span>Banca Aberta no Bairro</span>
        </div>
      </div>

      <!-- OS 4 GRANDES BOTÕES DE AÇÃO DIRETA (IHC - CYBIS, BETIOL E FAUST) -->
      <div class="merchant-big-actions">
        <!-- Botão 1: Cadastrar Produto -->
        <button class="big-action-card card-action-blue" id="btn-merchant-action-add">
          <div>
            <div class="card-icon">➕</div>
            <h3>Cadastrar produto ou disponibilidade</h3>
            <p>Anuncie itens novos de alta procura (álbuns, jornais, figurinhas).</p>
          </div>
          <span style="font-weight:800; font-size:1.1rem; text-decoration:underline;">Novo Produto →</span>
        </button>

        <!-- Botão 2: Meus Produtos e Estoque Rápido -->
        <button class="big-action-card card-action-green" id="btn-merchant-action-stock">
          <div>
            <div class="card-icon">📦</div>
            <h3>Meus produtos e estoque</h3>
            <p>Aumente ou diminua a quantidade com botões gigantes <strong>+</strong> e <strong>−</strong>.</p>
          </div>
          <span style="font-weight:800; font-size:1.1rem; text-decoration:underline;">Ver ${renatoProducts.length} itens →</span>
        </button>

        <!-- Botão 3: Reservas Recebidas -->
        <button class="big-action-card card-action-purple" id="btn-merchant-action-reservations">
          <div>
            <div class="card-icon">📋</div>
            <h3>Reservas recebidas</h3>
            <p>Veja os códigos dos clientes e confirme a entrega presencial.</p>
          </div>
          <span style="font-weight:800; font-size:1.1rem; text-decoration:underline;">${renatoReservations.length} aguardando retirada →</span>
        </button>

        <!-- Botão 4: Estatísticas Simples -->
        <button class="big-action-card card-action-orange" id="btn-merchant-action-stats">
          <div>
            <div class="card-icon">📊</div>
            <h3>Ver estatísticas da banca</h3>
            <p>Descubra os produtos mais procurados pelos vizinhos.</p>
          </div>
          <span style="font-weight:800; font-size:1.1rem; text-decoration:underline;">Consultar números →</span>
        </button>
      </div>

      <!-- Visão Rápida dos Itens Mais Procurados -->
      <section class="content-section">
        <div class="section-header">
          <div>
            <h2>Controle Rápido de Estoque (1 Toque)</h2>
            <p class="muted-info" style="margin-bottom:0;">Aperte o botão <strong>+</strong> para repor ou <strong>−</strong> para dar baixa instantaneamente:</p>
          </div>
          <button class="btn-link" id="btn-view-all-stock-fast">Ver lista completa</button>
        </div>

        <div class="merchant-stock-table">
          ${renatoProducts.slice(0, 4).map(p => `
            <div class="stock-control-row">
              <div class="stock-product-meta">
                <h4>${p.icon} ${escapeHTML(p.name)}</h4>
                <span class="category-tag">${escapeHTML(p.category)} · Preço: ${formatMoney(p.price)}</span>
              </div>
              <div class="stock-stepper-control">
                <button class="btn-stepper-large btn-fast-dec" data-id="${p.id}" aria-label="Diminuir estoque">−</button>
                <span class="stock-qty-display" id="stock-val-${p.id}">${p.stock}</span>
                <button class="btn-stepper-large btn-fast-inc" data-id="${p.id}" aria-label="Aumentar estoque">+</button>
              </div>
              <span class="stock-status-pill ${p.stock > 0 ? "badge-in-stock" : "badge-out-of-stock"}">
                ${p.stock > 0 ? "Em Estoque" : "Esgotado"}
              </span>
            </div>
          `).join("")}
        </div>
      </section>
    `;

    // Eventos locais
    mainContent.querySelector("#btn-merchant-action-add").addEventListener("click", () => navigateTo("merchant-add"));
    mainContent.querySelector("#btn-merchant-action-stock").addEventListener("click", () => navigateTo("merchant-stock"));
    mainContent.querySelector("#btn-merchant-action-reservations").addEventListener("click", () => navigateTo("merchant-reservations"));
    mainContent.querySelector("#btn-merchant-action-stats").addEventListener("click", () => navigateTo("merchant-stats"));
    mainContent.querySelector("#btn-view-all-stock-fast").addEventListener("click", () => navigateTo("merchant-stock"));

    mainContent.querySelectorAll(".btn-fast-dec").forEach(btn => {
      btn.addEventListener("click", () => updateProductStock(Number(btn.dataset.id), -1));
    });
    mainContent.querySelectorAll(".btn-fast-inc").forEach(btn => {
      btn.addEventListener("click", () => updateProductStock(Number(btn.dataset.id), 1));
    });
  }

  // --------------------------------------------------------------------------
  // 6. VISÃO DO COMERCIANTE: AJUSTE DE ESTOQUE COMPLETO (+ / -) (FIGURA 2 - TELA 3)
  // --------------------------------------------------------------------------
  function renderMerchantStock() {
    const renatoProducts = products.filter(p => p.storeId === "banca-bueno");

    mainContent.innerHTML = `
      <section class="content-section">
        <div class="section-header">
          <div>
            <h2>Meus Produtos & Estoque da Banca</h2>
            <p class="muted-info" style="margin-bottom:0;">Atualize as quantidades disponíveis com facilidade sem precisar preencher formulários complicados.</p>
          </div>
          <div style="display:flex; gap:10px;">
            <button class="btn-secondary" id="btn-back-hub">← Voltar ao Painel</button>
            <button class="btn-primary" id="btn-go-add">➕ Cadastrar Novo</button>
          </div>
        </div>

        <div class="merchant-stock-table">
          ${renatoProducts.map(p => `
            <div class="stock-control-row">
              <div class="stock-product-meta">
                <h4>${p.icon} ${escapeHTML(p.name)}</h4>
                <span class="category-tag">${escapeHTML(p.category)} · Valor: ${formatMoney(p.price)}</span>
                <p style="font-size:0.8rem; color:var(--ink-500); margin-top:2px;">${escapeHTML(p.description)}</p>
              </div>
              <div class="stock-stepper-control">
                <button class="btn-stepper-large btn-stock-dec" data-id="${p.id}" aria-label="Diminuir estoque">−</button>
                <span class="stock-qty-display" id="stock-val-full-${p.id}">${p.stock}</span>
                <button class="btn-stepper-large btn-stock-inc" data-id="${p.id}" aria-label="Aumentar estoque">+</button>
              </div>
              <button class="btn-secondary btn-stock-toggle" data-id="${p.id}">
                ${p.stock > 0 ? "Zerar Estoque" : "Repor (+10)"}
              </button>
            </div>
          `).join("")}
        </div>
      </section>
    `;

    mainContent.querySelector("#btn-back-hub").addEventListener("click", () => navigateTo("merchant-hub"));
    mainContent.querySelector("#btn-go-add").addEventListener("click", () => navigateTo("merchant-add"));

    mainContent.querySelectorAll(".btn-stock-dec").forEach(btn => {
      btn.addEventListener("click", () => updateProductStock(Number(btn.dataset.id), -1));
    });
    mainContent.querySelectorAll(".btn-stock-inc").forEach(btn => {
      btn.addEventListener("click", () => updateProductStock(Number(btn.dataset.id), 1));
    });
    mainContent.querySelectorAll(".btn-stock-toggle").forEach(btn => {
      btn.addEventListener("click", () => {
        const product = products.find(p => p.id === Number(btn.dataset.id));
        if (product) {
          product.stock = product.stock > 0 ? 0 : 10;
          saveStorage();
          renderMerchantStock();
          showToast(`Estoque de "${product.name}" atualizado para ${product.stock} un.`);
        }
      });
    });
  }

  function updateProductStock(productId, delta) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    product.stock = Math.max(0, product.stock + delta);
    saveStorage();

    const display1 = document.getElementById(`stock-val-${productId}`);
    if (display1) display1.textContent = product.stock;
    const display2 = document.getElementById(`stock-val-full-${productId}`);
    if (display2) display2.textContent = product.stock;

    showToast(`"${product.name}": estoque ajustado para ${product.stock} un.`);
  }

  // --------------------------------------------------------------------------
  // 7. VISÃO DO COMERCIANTE: CADASTRO SIMPLIFICADO (FIGURA 2 - TELA 2)
  // --------------------------------------------------------------------------
  function renderMerchantAddProduct() {
    mainContent.innerHTML = `
      <section class="content-section">
        <div class="section-header">
          <div>
            <h2>Cadastrar Novo Produto ou Disponibilidade</h2>
            <p class="muted-info" style="margin-bottom:0;">Formulário simplificado para o Sr. Renato cadastrar itens em poucos segundos.</p>
          </div>
          <button class="btn-secondary" id="btn-back-hub">← Voltar ao Painel</button>
        </div>

        <form id="merchant-add-form" class="simple-form">
          <div class="form-group">
            <label for="new-product-name">Nome do Produto:</label>
            <input type="text" id="new-product-name" required placeholder="Ex.: Álbum de Figurinhas Copa 2026" maxlength="100">
          </div>

          <div class="form-row">
            <div class="form-group flex-2">
              <label for="new-product-category">Categoria:</label>
              <select id="new-product-category">
                <option value="Figurinhas">⚽ Figurinhas</option>
                <option value="Livros e revistas">📖 Livros e revistas</option>
                <option value="Lançamentos">★ Lançamentos</option>
                <option value="Games e colecionáveis">🎮 Games e colecionáveis</option>
                <option value="Papelaria">✏️ Papelaria</option>
                <option value="Outros">🎁 Outros</option>
              </select>
            </div>
            <div class="form-group flex-1">
              <label for="new-product-price">Preço R$ (Opcional):</label>
              <input type="number" id="new-product-price" min="0" step="0.50" value="12.00">
            </div>
          </div>

          <div class="form-group">
            <label for="new-product-qty">Quantidade Inicial em Estoque:</label>
            <div class="stepper-input">
              <button type="button" class="step-btn" id="new-qty-dec">−</button>
              <input type="number" id="new-product-qty" min="0" value="20" readonly>
              <button type="button" class="step-btn" id="new-qty-inc">+</button>
            </div>
          </div>

          <div class="form-group">
            <label for="new-product-desc">Observação / Descrição Rápida:</label>
            <input type="text" id="new-product-desc" placeholder="Ex.: Capa dura, acompanha 2 pacotinhos grátis" maxlength="140">
          </div>

          <div class="modal-actions" style="justify-content: flex-start; gap:16px;">
            <button type="submit" class="btn-primary" style="padding: 14px 28px; font-size:1.1rem;">
              Salvar Produto na Banca
            </button>
            <button type="button" class="btn-secondary" id="btn-cancel-add">
              Cancelar
            </button>
          </div>
        </form>
      </section>
    `;

    mainContent.querySelector("#btn-back-hub").addEventListener("click", () => navigateTo("merchant-hub"));
    mainContent.querySelector("#btn-cancel-add").addEventListener("click", () => navigateTo("merchant-hub"));

    const qtyInput = mainContent.querySelector("#new-product-qty");
    mainContent.querySelector("#new-qty-dec").addEventListener("click", () => {
      let val = Number(qtyInput.value) || 0;
      if (val > 0) qtyInput.value = val - 1;
    });
    mainContent.querySelector("#new-qty-inc").addEventListener("click", () => {
      let val = Number(qtyInput.value) || 0;
      qtyInput.value = val + 1;
    });

    mainContent.querySelector("#merchant-add-form").addEventListener("submit", (e) => {
      e.preventDefault();
      const name = mainContent.querySelector("#new-product-name").value.trim();
      const category = mainContent.querySelector("#new-product-category").value;
      const price = parseFloat(mainContent.querySelector("#new-product-price").value) || 0;
      const stock = parseInt(qtyInput.value, 10) || 0;
      const desc = mainContent.querySelector("#new-product-desc").value.trim() || "Produto disponível na Banca do Renato.";

      let icon = "📦";
      if (category === "Figurinhas") icon = "⚽";
      else if (category === "Livros e revistas") icon = "📖";
      else if (category === "Papelaria") icon = "✏️";
      else if (category === "Games e colecionáveis") icon = "🎮";

      const newProd = {
        id: Date.now(),
        name,
        category,
        storeId: "banca-bueno",
        store: "Banca do Renato",
        distance: "300 m",
        stock,
        price,
        icon,
        description: desc,
        demand: "Novo",
        featured: true
      };

      products.unshift(newProd);
      saveStorage();
      showToast(`Sucesso! "${name}" foi adicionado ao catálogo.`);
      navigateTo("merchant-stock");
    });
  }

  // --------------------------------------------------------------------------
  // 8. VISÃO DO COMERCIANTE: GESTÃO DE RESERVAS (FIGURA 2 - TELA 4)
  // --------------------------------------------------------------------------
  function renderMerchantReservations() {
    const renatoRes = reservations.filter(r => r.storeId === "banca-bueno");
    const pendingList = renatoRes.filter(r => r.status === "Aguardando Retirada");
    const completedList = renatoRes.filter(r => r.status !== "Aguardando Retirada");

    mainContent.innerHTML = `
      <section class="content-section">
        <div class="section-header">
          <div>
            <h2>Reservas Recebidas — Banca do Renato</h2>
            <p class="muted-info" style="margin-bottom:0;">Confira os clientes que reservaram e confirme as entregas presenciais.</p>
          </div>
          <button class="btn-secondary" id="btn-back-hub">← Voltar ao Painel</button>
        </div>

        <div style="display:flex; gap:12px; margin-bottom:20px;">
          <button class="academic-btn primary-switch" id="tab-merchant-pending">
            Aguardando Retirada (${pendingList.length})
          </button>
          <button class="academic-btn" id="tab-merchant-all">
            Todas (${renatoRes.length})
          </button>
        </div>

        <div id="merchant-res-container" class="merchant-reservations-list">
          ${renderMerchantResCards(pendingList)}
        </div>
      </section>
    `;

    mainContent.querySelector("#btn-back-hub").addEventListener("click", () => navigateTo("merchant-hub"));

    const tabPending = mainContent.querySelector("#tab-merchant-pending");
    const tabAll = mainContent.querySelector("#tab-merchant-all");
    const container = mainContent.querySelector("#merchant-res-container");

    tabPending.addEventListener("click", () => {
      tabPending.className = "academic-btn primary-switch";
      tabAll.className = "academic-btn";
      container.innerHTML = renderMerchantResCards(pendingList);
      attachMerchantResEvents();
    });

    tabAll.addEventListener("click", () => {
      tabPending.className = "academic-btn";
      tabAll.className = "academic-btn primary-switch";
      container.innerHTML = renderMerchantResCards(renatoRes);
      attachMerchantResEvents();
    });

    attachMerchantResEvents();
  }

  function renderMerchantResCards(list) {
    if (!list.length) {
      return `
        <div class="text-center" style="padding: 40px 20px;">
          <p style="font-size:3rem; margin-bottom:8px;">✅</p>
          <h3>Nenhuma reserva pendente no momento!</h3>
          <p class="muted-info">Quando clientes reservarem produtos da Banca Bueno pelo site, eles aparecerão aqui com o código de retirada.</p>
        </div>
      `;
    }

    return list.map(r => `
      <div class="merchant-res-card ${r.status === "Aguardando Retirada" ? "pending" : "confirmed"}">
        <div class="merchant-res-top">
          <span class="voucher-highlight-merchant">${escapeHTML(r.code)}</span>
          <span class="res-status-tag ${r.status === "Concluída" ? "done" : "active"}">
            ${escapeHTML(r.status)}
          </span>
        </div>
        <div class="merchant-res-details">
          <div>
            <span>Cliente:</span>
            <strong>👤 ${escapeHTML(r.customerName)}</strong>
          </div>
          <div>
            <span>Item:</span>
            <strong>${escapeHTML(r.product)}</strong>
          </div>
          <div>
            <span>Quantidade e Valor:</span>
            <strong>${r.quantity} un. · ${formatMoney(r.totalPrice)}</strong>
          </div>
          <div>
            <span>Prazo de Retirada:</span>
            <strong>📅 ${escapeHTML(r.deadline)}</strong>
          </div>
        </div>
        <div class="merchant-res-actions">
          ${r.status === "Aguardando Retirada" ? `
            <button class="btn-confirm-delivery" data-code="${r.code}">
              ✓ Confirmar Entrega ao Cliente
            </button>
          ` : ""}
          <a class="btn-wpp-merchant" target="_blank" rel="noopener noreferrer" href="https://wa.me/5511987654321?text=${encodeURIComponent(`Olá ${r.customerName}! Aqui é o Sr. Renato da Banca Bueno sobre sua reserva ${r.code} do produto ${r.product}.`)}">
            💬 Enviar WhatsApp ao Cliente
          </a>
        </div>
      </div>
    `).join("");
  }

  function attachMerchantResEvents() {
    mainContent.querySelectorAll(".btn-confirm-delivery").forEach(btn => {
      btn.addEventListener("click", () => {
        const code = btn.dataset.code;
        const res = reservations.find(r => r.code === code);
        if (res) {
          res.status = "Concluída";
          saveStorage();
          updateBadges();
          renderMerchantReservations();
          showToast(`Reserva ${code} entregue com sucesso pelo Sr. Renato!`);
        }
      });
    });
  }

  // --------------------------------------------------------------------------
  // 9. VISÃO DO COMERCIANTE: ESTATÍSTICAS SIMPLES
  // --------------------------------------------------------------------------
  function renderMerchantStats() {
    const renatoProducts = products.filter(p => p.storeId === "banca-bueno");
    const renatoRes = reservations.filter(r => r.storeId === "banca-bueno");
    const completedCount = renatoRes.filter(r => r.status === "Concluída").length;
    const totalStock = renatoProducts.reduce((acc, p) => acc + p.stock, 0);

    mainContent.innerHTML = `
      <section class="content-section">
        <div class="section-header">
          <div>
            <h2>Estatísticas e Movimento da Banca</h2>
            <p class="muted-info" style="margin-bottom:0;">Números simples e fáceis de entender para ajudar o Sr. Renato a planejar suas compras.</p>
          </div>
          <button class="btn-secondary" id="btn-back-hub">← Voltar ao Painel</button>
        </div>

        <div class="stats-cards-grid">
          <div class="stat-card">
            <div class="stat-icon">📦</div>
            <div class="stat-content">
              <span>Produtos no Catálogo</span>
              <strong>${renatoProducts.length} itens</strong>
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-icon" style="background:#dcfce7; color:#15803d;">🔢</div>
            <div class="stat-content">
              <span>Total de Itens em Estoque</span>
              <strong>${totalStock} un.</strong>
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-icon" style="background:#fef3c7; color:#b45309;">🎟️</div>
            <div class="stat-content">
              <span>Reservas Realizadas</span>
              <strong>${renatoRes.length} pedidos</strong>
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-icon" style="background:#e0f2fe; color:#0369a1;">🤝</div>
            <div class="stat-content">
              <span>Entregas Concluídas</span>
              <strong>${completedCount} retiradas</strong>
            </div>
          </div>
        </div>

        <div class="content-section" style="border: 1.5px solid var(--border-light); margin-top:20px;">
          <h3 style="font-size:1.15rem; margin-bottom:12px;">🏆 Itens Mais Procurados pelos Clientes do Bairro</h3>
          <ul style="list-style:none; display:flex; flex-direction:column; gap:10px;">
            <li style="display:flex; justify-content:space-between; padding:12px; background:#f8fafc; border-radius:8px;">
              <strong>1º Álbum de Figurinhas Copa 2026</strong>
              <span class="badge-pill badge-in-stock">38 consultas essa semana</span>
            </li>
            <li style="display:flex; justify-content:space-between; padding:12px; background:#f8fafc; border-radius:8px;">
              <strong>2º Pacote de Figurinhas (Kit 10 envelopes)</strong>
              <span class="badge-pill badge-in-stock">29 consultas essa semana</span>
            </li>
            <li style="display:flex; justify-content:space-between; padding:12px; background:#f8fafc; border-radius:8px;">
              <strong>3º Jornal do Dia — Edição Completa</strong>
              <span class="badge-pill badge-in-stock">18 consultas diárias</span>
            </li>
          </ul>
        </div>
      </section>
    `;

    mainContent.querySelector("#btn-back-hub").addEventListener("click", () => navigateTo("merchant-hub"));
  }

  // ==========================================================================
  // MODAIS E FLUXO DE RESERVA (FIGURA 2 - MOBILE TELAS 2 E 3)
  // ==========================================================================
  function openProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    selectedProductForDetail = product;

    productDetailBody.innerHTML = `
      <div class="product-detail-layout">
        <div class="product-detail-visual">
          <span>${product.icon}</span>
        </div>
        <div class="product-detail-header">
          <span class="modal-eyebrow">${escapeHTML(product.category.toUpperCase())}</span>
          <h2>${escapeHTML(product.name)}</h2>
          <div class="product-detail-meta">
            <span class="product-detail-store">🏪 ${escapeHTML(product.store)}</span>
            <span class="muted-info">· 📍 ${escapeHTML(product.distance)} de você</span>
          </div>
        </div>

        <div style="display:flex; align-items:center; gap:12px;">
          <span class="badge-pill ${product.stock > 0 ? "badge-in-stock" : "badge-out-of-stock"}">
            ${product.stock > 0 ? `Disponível (${product.stock} un. em estoque)` : "Esgotado no momento"}
          </span>
          <span class="product-detail-price">${formatMoney(product.price)}</span>
        </div>

        <div class="product-detail-desc">
          <p>${escapeHTML(product.description)}</p>
        </div>

        <div class="product-detail-actions">
          <button class="btn-primary" id="btn-proceed-reserve" style="font-size:1.1rem; padding:14px;" ${product.stock < 1 ? "disabled" : ""}>
            ${product.stock > 0 ? "Reservar este item" : "Produto indisponível"}
          </button>
          <a class="btn-whatsapp" target="_blank" rel="noopener noreferrer" href="https://wa.me/5511987654321?text=${encodeURIComponent(`Olá! Vi o produto "${product.name}" no Tem Aí? Tem Aqui! e gostaria de tirar uma dúvida.`)}">
            💬 Falar com o Comerciante via WhatsApp
          </a>
        </div>
      </div>
    `;

    productDetailModal.showModal();

    const proceedBtn = productDetailBody.querySelector("#btn-proceed-reserve");
    if (proceedBtn) {
      proceedBtn.addEventListener("click", () => {
        productDetailModal.close();
        openReservationForm(product);
      });
    }
  }

  function openReservationForm(product) {
    selectedProductForReserve = product;
    reserveFormTitle.textContent = product.name;
    reserveFormSubtitle.textContent = `Estabelecimento: ${product.store} (${product.distance})`;
    reserveQtyInput.value = 1;
    reserveQtyInput.max = product.stock;
    reserveCustomerName.value = "";
    reserveCustomerPhone.value = "";

    updateReserveSummary();
    reserveModal.showModal();
  }

  function updateReserveSummary() {
    if (!selectedProductForReserve) return;
    const qty = parseInt(reserveQtyInput.value, 10) || 1;
    const total = qty * selectedProductForReserve.price;
    summaryUnitPrice.textContent = formatMoney(selectedProductForReserve.price);
    summaryTotalPrice.textContent = formatMoney(total);
  }

  // ==========================================================================
  // MAPA INTERATIVO AMPLIADO
  // ==========================================================================
  function openMapModal() {
    mapInteractiveView.innerHTML = `
      <div style="background:#dbeafe; padding:20px; border-radius:8px; position:relative; min-height:220px; overflow:hidden;">
        <div style="position:absolute; inset:0; background-image:radial-gradient(#93c5fd 1.5px, transparent 1.5px); background-size:16px 16px; opacity:0.6;"></div>
        <div style="position:relative; z-index:2;">
          <h4 style="color:#1e3a8a; margin-bottom:4px;">📍 Mapa das Ruas de Heliópolis</h4>
          <p style="font-size:0.85rem; color:#1e40af; margin-bottom:16px;">Localização aproximada dos estabelecimentos participantes do projeto integrador:</p>
          <div style="display:flex; flex-wrap:wrap; gap:12px;">
            <div style="background:#fff; padding:10px 14px; border-radius:8px; border:2px solid var(--secondary); box-shadow:var(--shadow-sm);">
              <strong>🏪 Banca Bueno (Sr. Renato)</strong>
              <div style="font-size:0.8rem; color:#15803d;">Av. Principal, 120 (a 300 metros)</div>
            </div>
            <div style="background:#fff; padding:10px 14px; border-radius:8px; border:1px solid #cbd5e1; box-shadow:var(--shadow-sm);">
              <strong>✏️ Papelaria da Praça</strong>
              <div style="font-size:0.8rem; color:var(--ink-500);">Praça Central, 45 (a 750 metros)</div>
            </div>
            <div style="background:#fff; padding:10px 14px; border-radius:8px; border:1px solid #cbd5e1; box-shadow:var(--shadow-sm);">
              <strong>📚 Livraria do Bairro</strong>
              <div style="font-size:0.8rem; color:var(--ink-500);">Rua das Flores, 88 (a 1.2 km)</div>
            </div>
          </div>
        </div>
      </div>
      <div class="map-points-list">
        ${stores.map(s => `
          <div class="map-point-card ${s.isPartner ? "featured" : ""}">
            <div style="display:flex; align-items:center; gap:8px; margin-bottom:6px;">
              <span style="font-size:1.8rem;">${s.icon}</span>
              <strong>${escapeHTML(s.name)}</strong>
            </div>
            <p style="font-size:0.82rem; color:var(--ink-500); margin-bottom:6px;">${escapeHTML(s.address)}</p>
            <span class="badge-pill ${s.isPartner ? "badge-in-stock" : "badge-out-of-stock"}">${escapeHTML(s.badge)}</span>
          </div>
        `).join("")}
      </div>
    `;
    mapModal.showModal();
  }

  // ==========================================================================
  // CONFIGURAÇÃO GERAL DE EVENTOS
  // ==========================================================================
  function setupEventListeners() {
    // Alternadores Acadêmicos
    if (toggleDeviceBtn) {
      toggleDeviceBtn.addEventListener("click", () => {
        isMobileSimulated = !isMobileSimulated;
        deviceWrapper.classList.toggle("device-mobile", isMobileSimulated);
        deviceWrapper.classList.toggle("device-standard", !isMobileSimulated);
        toggleDeviceBtn.querySelector(".btn-text").textContent = isMobileSimulated ? "Modo Tela Cheia" : "Simular Celular";
        showToast(isMobileSimulated ? "Modo celular ativado (formato mobile do relatório)." : "Modo padrão expandido ativado.");
      });
    }

    if (quickSwitchMerchantBtn) {
      quickSwitchMerchantBtn.addEventListener("click", () => {
        setRole(currentRole === "customer" ? "merchant" : "customer");
      });
    }

    if (headerModeToggle) {
      headerModeToggle.addEventListener("click", () => {
        setRole(currentRole === "customer" ? "merchant" : "customer");
      });
    }

    if (resetDemoBtn) {
      resetDemoBtn.addEventListener("click", () => {
        if (confirm("Deseja restaurar todos os produtos e reservas iniciais da Banca Bueno?")) {
          products = structuredClone(INITIAL_PRODUCTS);
          stores = structuredClone(INITIAL_STORES);
          reservations = structuredClone(INITIAL_RESERVATIONS);
          saveStorage();
          updateBadges();
          renderCurrentView();
          showToast("Dados originais do protótipo restaurados com sucesso.");
        }
      });
    }

    // Navegação (Sidebar e Bottom Nav)
    document.querySelectorAll(".side-nav-item, .mob-nav-item").forEach(btn => {
      btn.addEventListener("click", () => {
        const target = btn.dataset.nav;
        navigateTo(target);
      });
    });

    const brandLogo = document.getElementById("brand-logo");
    if (brandLogo) {
      brandLogo.addEventListener("click", (e) => {
        e.preventDefault();
        navigateTo("client-home");
      });
    }

    // Busca com Sugestões
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        const val = e.target.value;
        activeSearchTerm = val;
        clearSearchBtn.classList.toggle("hidden", !val);

        if (val.trim().length >= 2) {
          const matches = products.filter(p =>
            p.name.toLowerCase().includes(val.toLowerCase()) ||
            p.category.toLowerCase().includes(val.toLowerCase()) ||
            p.store.toLowerCase().includes(val.toLowerCase())
          ).slice(0, 5);

          if (matches.length) {
            searchSuggestions.innerHTML = matches.map(m => `
              <div class="suggestion-item" data-id="${m.id}">
                <div>
                  <div class="suggestion-name">${escapeHTML(m.name)}</div>
                  <div class="suggestion-meta">🏪 ${escapeHTML(m.store)} · ${formatMoney(m.price)}</div>
                </div>
                <span class="badge-pill ${m.stock > 0 ? "badge-in-stock" : "badge-out-of-stock"}">
                  ${m.stock > 0 ? "Em estoque" : "Esgotado"}
                </span>
              </div>
            `).join("");
            searchSuggestions.classList.remove("hidden");

            searchSuggestions.querySelectorAll(".suggestion-item").forEach(item => {
              item.addEventListener("click", () => {
                const id = Number(item.dataset.id);
                searchSuggestions.classList.add("hidden");
                openProductDetail(id);
              });
            });
          } else {
            searchSuggestions.classList.add("hidden");
          }
        } else {
          searchSuggestions.classList.add("hidden");
        }

        if (currentNav === "client-home" || currentNav === "client-products") {
          renderCurrentView();
        }
      });
    }

    if (clearSearchBtn) {
      clearSearchBtn.addEventListener("click", () => {
        searchInput.value = "";
        activeSearchTerm = "";
        clearSearchBtn.classList.add("hidden");
        searchSuggestions.classList.add("hidden");
        renderCurrentView();
      });
    }

    document.addEventListener("click", (e) => {
      if (searchSuggestions && !searchSuggestions.contains(e.target) && e.target !== searchInput) {
        searchSuggestions.classList.add("hidden");
      }
    });

    // Modais e Diálogos
    if (closeProductDetail) closeProductDetail.addEventListener("click", () => productDetailModal.close());
    if (closeReserveForm) closeReserveForm.addEventListener("click", () => reserveModal.close());
    if (cancelReserveBtn) cancelReserveBtn.addEventListener("click", () => reserveModal.close());

    // Controle de Quantidade na Reserva (+ e -)
    if (reserveQtyDec) {
      reserveQtyDec.addEventListener("click", () => {
        let val = parseInt(reserveQtyInput.value, 10) || 1;
        if (val > 1) {
          reserveQtyInput.value = val - 1;
          updateReserveSummary();
        }
      });
    }

    if (reserveQtyInc) {
      reserveQtyInc.addEventListener("click", () => {
        let val = parseInt(reserveQtyInput.value, 10) || 1;
        const max = selectedProductForReserve ? selectedProductForReserve.stock : 99;
        if (val < max) {
          reserveQtyInput.value = val + 1;
          updateReserveSummary();
        } else {
          showToast(`Limite disponível no momento: ${max} un.`);
        }
      });
    }

    // Envio do Formulário de Reserva
    if (reserveSubmitForm) {
      reserveSubmitForm.addEventListener("submit", (e) => {
        e.preventDefault();
        if (!selectedProductForReserve) return;

        const customerName = reserveCustomerName.value.trim();
        const customerPhone = reserveCustomerPhone.value.trim() || "(11) 99999-9999";
        const quantity = parseInt(reserveQtyInput.value, 10) || 1;

        if (quantity > selectedProductForReserve.stock) {
          showToast("A quantidade solicitada supera o estoque atual.");
          return;
        }

        // Dá baixa no estoque
        selectedProductForReserve.stock -= quantity;

        // Gera código de voucher amigável estilo "#4587"
        const voucherCode = `#${Math.floor(1000 + Math.random() * 9000)}`;
        const deadline = "Sábado, até 18:00";
        const totalPrice = quantity * selectedProductForReserve.price;

        const newReservation = {
          code: voucherCode,
          product: selectedProductForReserve.name,
          productId: selectedProductForReserve.id,
          store: selectedProductForReserve.store,
          storeId: selectedProductForReserve.storeId,
          customerName,
          phone: customerPhone,
          quantity,
          unitPrice: selectedProductForReserve.price,
          totalPrice,
          status: "Aguardando Retirada",
          deadline,
          createdAt: "Agora"
        };

        reservations.unshift(newReservation);
        saveStorage();
        updateBadges();

        // Fecha formulário e abre tela de sucesso (Figura 2 - Mobile Tela 3)
        reserveModal.close();

        successProductTitle.textContent = selectedProductForReserve.name;
        successStoreInfo.textContent = `Reservado na ${selectedProductForReserve.store} (${selectedProductForReserve.distance} de você)`;
        successVoucherCode.textContent = voucherCode;
        successVoucherDeadline.textContent = `Retirar até: ${deadline}`;

        // Link dinâmico para WhatsApp
        const wppMsg = `Olá, ${selectedProductForReserve.store}! Fiz a reserva ${voucherCode} do produto "${selectedProductForReserve.name}" (${quantity} un.) pelo Tem Aí? Tem Aqui! e gostaria de confirmar a retirada.`;
        successWhatsappLink.href = `https://wa.me/5511987654321?text=${encodeURIComponent(wppMsg)}`;

        reserveSuccessModal.showModal();
        renderCurrentView();
        showToast(`Reserva ${voucherCode} realizada com sucesso!`);
      });
    }

    if (successFinishBtn) {
      successFinishBtn.addEventListener("click", () => {
        reserveSuccessModal.close();
        navigateTo("client-reservations");
      });
    }

    if (successHomeBtn) {
      successHomeBtn.addEventListener("click", () => {
        reserveSuccessModal.close();
        navigateTo("client-home");
      });
    }

    // Mapa
    if (btnOpenMap) btnOpenMap.addEventListener("click", openMapModal);
    if (miniMapTrigger) miniMapTrigger.addEventListener("click", openMapModal);
    if (closeMapModal) closeMapModal.addEventListener("click", () => mapModal.close());
    if (btnViewAllRes) btnViewAllRes.addEventListener("click", () => navigateTo("client-reservations"));
  }

  // Executa na carga da página
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

})();
