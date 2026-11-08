/**
 * ============================================================================
 * TEM AÍ? TEM AQUI! — PLATAFORMA DE CONSULTA E RESERVAS NO COMÉRCIO LOCAL
 * Arquitetura de Front-End interativo baseado nos esboços da plataforma
 * ============================================================================
 */

(function () {
  "use strict";

  /**
   * Categorias oficiais da plataforma.
   * Fonte única da verdade: home, filtros, formulário de cadastro e edição usam esta lista.
   */
  const CATEGORIES = [
    { name: "Figurinhas", icon: "⚽", colorClass: "icon-lightblue" },
    { name: "Livros e revistas", icon: "📖", colorClass: "icon-blue" },
    { name: "Papelaria", icon: "✏️", colorClass: "icon-blue" },
    { name: "Games e colecionáveis", icon: "🎮", colorClass: "icon-blue" },
    { name: "Lançamentos", icon: "★", colorClass: "icon-green" },
    { name: "Presentes", icon: "🎁", colorClass: "icon-blue" },
  ];

  // IMAGENS DE ALTA FIDELIDADE BASEADAS NOS ESBOÇOS (SVG / DATA URLs)
  const PRODUCT_PRESETS = {
    album:
      "data:image/svg+xml,%3Csvg width='300' height='200' viewBox='0 0 300 200' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='300' height='200' fill='%231E3A8A'/%3E%3Crect x='40' y='20' width='220' height='160' rx='8' fill='%232563EB' stroke='%23FBBF24' stroke-width='4'/%3E%3Ctext x='150' y='65' fill='%23FFF' font-family='sans-serif' font-weight='900' font-size='22' text-anchor='middle'%3EÁLBUM DE%3C/text%3E%3Ctext x='150' y='95' fill='%23FEF08A' font-family='sans-serif' font-weight='900' font-size='22' text-anchor='middle'%3EFIGURINHAS%3C/text%3E%3Ctext x='150' y='125' fill='%2393C5FD' font-family='sans-serif' font-weight='700' font-size='14' text-anchor='middle'%3ECOPA 2026%3C/text%3E%3Ccircle cx='150' cy='155' r='16' fill='%23FFF' stroke='%23000' stroke-width='2'/%3E%3Cpath d='M150 143L157 149L154 158L146 158L143 149Z' fill='%23000'/%3E%3C/svg%3E",
    jornal:
      "data:image/svg+xml,%3Csvg width='300' height='200' viewBox='0 0 300 200' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='300' height='200' fill='%23E2E8F0'/%3E%3Crect x='30' y='25' width='240' height='150' rx='4' fill='%23F8FAFC' stroke='%2394A3B8' stroke-width='2'/%3E%3Crect x='45' y='40' width='210' height='26' fill='%230F172A'/%3E%3Ctext x='150' y='58' fill='%23FFF' font-family='serif' font-weight='900' font-size='16' text-anchor='middle'%3EJORNAL DO DIA%3C/text%3E%3Crect x='45' y='75' width='100' height='60' fill='%23CBD5E1'/%3E%3Cline x1='155' y1='80' x2='255' y2='80' stroke='%23334155' stroke-width='4'/%3E%3Cline x1='155' y1='92' x2='255' y2='92' stroke='%2364748B' stroke-width='3'/%3E%3Cline x1='155' y1='104' x2='255' y2='104' stroke='%2364748B' stroke-width='3'/%3E%3Cline x1='155' y1='116' x2='240' y2='116' stroke='%2364748B' stroke-width='3'/%3E%3Cline x1='45' y1='145' x2='255' y2='145' stroke='%2364748B' stroke-width='3'/%3E%3Cline x1='45' y1='155' x2='200' y2='155' stroke='%2364748B' stroke-width='3'/%3E%3C/svg%3E",
    canetas:
      "data:image/svg+xml,%3Csvg width='300' height='200' viewBox='0 0 300 200' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='300' height='200' fill='%23FEF3C7'/%3E%3Crect x='60' y='20' width='180' height='160' rx='8' fill='%23FFFFFF' stroke='%23F59E0B' stroke-width='2'/%3E%3Crect x='80' y='40' width='10' height='120' rx='4' fill='%23EF4444'/%3E%3Crect x='98' y='40' width='10' height='120' rx='4' fill='%23F97316'/%3E%3Crect x='116' y='40' width='10' height='120' rx='4' fill='%23FBBF24'/%3E%3Crect x='134' y='40' width='10' height='120' rx='4' fill='%2322C55E'/%3E%3Crect x='152' y='40' width='10' height='120' rx='4' fill='%2306B6D4'/%3E%3Crect x='170' y='40' width='10' height='120' rx='4' fill='%233B82F6'/%3E%3Crect x='188' y='40' width='10' height='120' rx='4' fill='%236366F1'/%3E%3Crect x='206' y='40' width='10' height='120' rx='4' fill='%23A855F7'/%3E%3Ctext x='150' y='172' fill='%23B45309' font-family='sans-serif' font-weight='800' font-size='12' text-anchor='middle'%3EKIT 10 CORES EM GEL%3C/text%3E%3C/svg%3E",
    pokemon:
      "data:image/svg+xml,%3Csvg width='300' height='200' viewBox='0 0 300 200' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='300' height='200' fill='%231E1B4B'/%3E%3Crect x='70' y='20' width='160' height='160' rx='8' fill='%233B82F6' stroke='%23FACC15' stroke-width='4'/%3E%3Ccircle cx='150' cy='95' r='42' fill='%23EF4444' stroke='%23000' stroke-width='3'/%3E%3Cpath d='M108 95H192' stroke='%23000' stroke-width='6'/%3E%3Ccircle cx='150' cy='95' r='14' fill='%23FFF' stroke='%23000' stroke-width='4'/%3E%3Ctext x='150' y='160' fill='%23FEF08A' font-family='sans-serif' font-weight='900' font-size='15' text-anchor='middle'%3EDECK INICIAL%3C/text%3E%3C/svg%3E",
    revista:
      "data:image/svg+xml,%3Csvg width='300' height='200' viewBox='0 0 300 200' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='300' height='200' fill='%23E0E7FF'/%3E%3Crect x='60' y='20' width='180' height='160' rx='6' fill='%23EEF2FF' stroke='%234F46E5' stroke-width='3'/%3E%3Crect x='60' y='20' width='180' height='36' fill='%234F46E5'/%3E%3Ctext x='150' y='44' fill='%23FFF' font-family='sans-serif' font-weight='900' font-size='16' text-anchor='middle'%3EREVISTAS & VARIEDADES%3C/text%3E%3Crect x='80' y='70' width='140' height='80' rx='4' fill='%23C7D2FE'/%3E%3Ctext x='150' y='115' fill='%233730A3' font-family='sans-serif' font-weight='800' font-size='13' text-anchor='middle'%3EPASSATEMPOS%3C/text%3E%3C/svg%3E",
  };

  // BANCO DE DADOS INICIAL DE LOJAS COM ENDEREÇO REAL PARA REFERÊNCIA NO MAPA
  const INITIAL_STORES = [
    {
      id: "banca-bueno",
      name: "Banca Bueno",
      category: "Banca de Jornal & Revistas",
      distance: "500 m",
      address: "Av. Heliópolis, 120 — Heliópolis, São Paulo - SP",
      phone: "(11) 98256-5530",
      icon: "🏪",
      thumb: PRODUCT_PRESETS.album,
      status: "Aberta",
      email: "banca@exemplo.com",
      realCoordinates: "Ponto A: Esquina Av. Heliópolis",
    },
    {
      id: "papelaria-praca",
      name: "Papelaria da Praça",
      category: "Papelaria e Material Escolar",
      distance: "1,2 km",
      address: "Praça Central, 45 — Heliópolis, São Paulo - SP",
      phone: "(11) 91234-5678",
      icon: "✏️",
      thumb: PRODUCT_PRESETS.canetas,
      status: "Aberta",
      email: "papelaria@exemplo.com",
      realCoordinates: "Ponto B: Em frente à Praça",
    },
    {
      id: "livraria-bairro",
      name: "Livraria do Bairro",
      category: "Livraria e Colecionáveis",
      distance: "2,3 km",
      address: "Rua das Flores, 88 — Heliópolis, São Paulo - SP",
      phone: "(11) 97654-3210",
      icon: "📚",
      thumb: PRODUCT_PRESETS.pokemon,
      status: "Aberta",
      email: "livraria@exemplo.com",
      realCoordinates: "Ponto C: Rua das Flores",
    },
    {
      id: "mercadinho-ze",
      name: "Mercadinho do Zé",
      category: "Conveniência e Utilidades",
      distance: "2,8 km",
      address: "Rua do Comércio, 14 — Heliópolis, São Paulo - SP",
      phone: "(11) 99887-7665",
      icon: "🛒",
      thumb: PRODUCT_PRESETS.jornal,
      status: "Aberta",
      email: "ze@exemplo.com",
      realCoordinates: "Ponto D: Rua do Comércio",
    },
  ];

  // PRODUTOS INICIAIS BASEADOS NOS ESBOÇOS
  const INITIAL_PRODUCTS = [
    {
      id: 1,
      name: "Álbum de Figurinhas Copa 2026",
      category: "Figurinhas",
      storeId: "banca-bueno",
      store: "Banca Bueno",
      distance: "500 m",
      stock: 50,
      price: 12.0,
      image: PRODUCT_PRESETS.album,
      description:
        "Álbum oficial capa tradicional com páginas numeradas para colar todas as figurinhas da Copa 2026.",
      demand: "Alta procura",
      featured: true,
    },
    {
      id: 2,
      name: "Jornal do Dia",
      category: "Livros e revistas",
      storeId: "banca-bueno",
      store: "Banca Bueno",
      distance: "500 m",
      stock: 30,
      price: 2.5,
      image: PRODUCT_PRESETS.jornal,
      description:
        "Edição matutina com notícias da cidade, economia, esportes e caderno de variedades.",
      demand: "Diária",
      featured: true,
    },
    {
      id: 3,
      name: "Canetas coloridas (kit c/ 10)",
      category: "Papelaria",
      storeId: "papelaria-praca",
      store: "Papelaria da Praça",
      distance: "1,2 km",
      stock: 0,
      price: 19.9,
      image: PRODUCT_PRESETS.canetas,
      description:
        "Kit com 10 canetas em gel ponta fina 0.7mm cores sortidas para estudo e lettering.",
      demand: "Em breve",
      featured: true,
    },
    {
      id: 4,
      name: "Cartas Pokémon (Deck inicial)",
      category: "Games e colecionáveis",
      storeId: "livraria-bairro",
      store: "Livraria do Bairro",
      distance: "2,3 km",
      stock: 5,
      price: 49.9,
      image: PRODUCT_PRESETS.pokemon,
      description:
        "Baralho inicial completo com 60 cartas pronto para jogar, moeda metalizada e playmat.",
      demand: "Colecionável",
      featured: true,
    },
    {
      id: 5,
      name: "Revistas em Geral",
      category: "Livros e revistas",
      storeId: "banca-bueno",
      store: "Banca Bueno",
      distance: "500 m",
      stock: 20,
      price: 15.0,
      image: PRODUCT_PRESETS.revista,
      description:
        "Seleção variada de revistas semanais, passatempos, culinária e tecnologia.",
      demand: "Recorrente",
      featured: false,
    },
  ];

  // RESERVAS INICIAIS (BASEADAS NO ESBOÇO CELULAR TELA 4)
  const INITIAL_RESERVATIONS = [
    {
      code: "#4587",
      product: "Álbum de Figurinhas Copa 2026",
      productId: 1,
      customerId: "usr-cliente",
      storeId: "banca-bueno",
      store: "Banca Bueno",
      customerName: "Maria da Silva",
      customerPhone: "(11) 98765-1122",
      quantity: 1,
      unitPrice: 12.0,
      totalPrice: 12.0,
      status: "Pendente",
      deadline: "Retirar até: 12/04",
      createdAt: "10/04 às 09:30",
    },
    {
      code: "#3271",
      product: "Jornal do Dia",
      productId: 2,
      customerId: "usr-cliente",
      storeId: "banca-bueno",
      store: "Banca Bueno",
      customerName: "Maria da Silva",
      customerPhone: "(11) 98765-1122",
      quantity: 1,
      unitPrice: 2.5,
      totalPrice: 2.5,
      status: "Confirmada",
      deadline: "Retirar até: 10/04",
      createdAt: "09/04 às 07:15",
    },
    {
      code: "#2840",
      product: "Revista Veja",
      productId: 5,
      customerId: "usr-cliente",
      storeId: "banca-bueno",
      store: "Banca Bueno",
      customerName: "Maria da Silva",
      customerPhone: "(11) 98765-1122",
      quantity: 1,
      unitPrice: 15.0,
      totalPrice: 15.0,
      status: "Concluída",
      deadline: "Retirado em: 08/04",
      createdAt: "08/04 às 11:20",
    },
  ];

  // CONTAS DE USUÁRIOS
  const INITIAL_USERS = [
    {
      id: "usr-cliente",
      type: "customer",
      name: "Maria da Silva",
      email: "cliente@exemplo.com",
      phone: "(11) 98765-1122",
    },
    {
      id: "usr-renato",
      type: "merchant",
      name: "Renato Bueno",
      storeName: "Banca Bueno",
      storeId: "banca-bueno",
      email: "banca@exemplo.com",
      phone: "(11) 98256-5530",
    },
  ];

  // ESTADO GLOBAL DA APLICAÇÃO
  let stores = loadStorage("temai_stores", INITIAL_STORES);
  let products = loadStorage("temai_products", INITIAL_PRODUCTS);
  let reservations = loadStorage("temai_reservations", INITIAL_RESERVATIONS);
  let users = loadStorage("temai_users", INITIAL_USERS);
  let currentUser = loadStorage("temai_current_user", null); // null, ou objeto de usuário

  let currentNav = "client-home";
  let activeCategory = "";
  let activeSearchTerm = "";
  let isMobileMode = false;
  let selectedProductForDetail = null;
  let selectedProductForReserve = null;
  let currentProductImageBase64 = null; // Para upload de imagem

  /**
   * Clona um objeto de forma segura em qualquer navegador.
   * structuredClone não existe em navegadores antigos; usamos JSON como fallback.
   */
  function safeClone(obj) {
    try {
      return typeof structuredClone === "function"
        ? structuredClone(obj)
        : JSON.parse(JSON.stringify(obj));
    } catch {
      return JSON.parse(JSON.stringify(obj));
    }
  }

  function loadStorage(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      if (raw === null) return safeClone(fallback);
      return JSON.parse(raw);
    } catch (err) {
      console.warn(
        `[loadStorage] Falha ao ler "${key}", usando fallback.`,
        err,
      );
      return safeClone(fallback);
    }
  }

  /**
   * Salva tudo com tratamento de cota.
   * Retorna true se salvou; false se o storage estourou.
   */
  function saveStorage() {
    try {
      localStorage.setItem("temai_stores", JSON.stringify(stores));
      localStorage.setItem("temai_products", JSON.stringify(products));
      localStorage.setItem("temai_reservations", JSON.stringify(reservations));
      localStorage.setItem("temai_users", JSON.stringify(users));
      localStorage.setItem("temai_current_user", JSON.stringify(currentUser));
      return true;
    } catch (err) {
      if (err && (err.name === "QuotaExceededError" || err.code === 22)) {
        showToast(
          "⚠️ Armazenamento cheio! Remova fotos antigas de produtos ou limpe dados do navegador.",
        );
        console.error("[saveStorage] QuotaExceededError:", err);
      } else {
        showToast("⚠️ Erro ao salvar dados. Verifique o console.");
        console.error("[saveStorage]", err);
      }
      return false;
    }
  }

  function formatMoney(value) {
    return Number(value || 0).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  function formatDateBR(date) {
    return date.toLocaleDateString("pt-BR");
  }

  function formatDateTimeBR(date) {
    return date.toLocaleString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  /**
   * Compacta e redimensiona imagens usando a HTML5 Canvas API
   * Evita estourar a cota de armazenamento do localStorage (~5 MB)
   * Reduz fotos pesadas de celulares (3 MB - 10 MB) para JPEG leve (< 100 KB) com excelente qualidade visual
   */
  function compressImageWithCanvas(file, maxWidth = 640, quality = 0.82) {
    return new Promise((resolve, reject) => {
      if (!file || !file.type.startsWith("image/")) {
        reject(new Error("O arquivo selecionado não é uma imagem válida."));
        return;
      }

      const reader = new FileReader();
      reader.onerror = () =>
        reject(new Error("Erro ao ler o arquivo de imagem."));
      reader.onload = (e) => {
        const img = new Image();
        img.onerror = () => reject(new Error("Erro ao decodificar a imagem."));
        img.onload = () => {
          let width = img.width;
          let height = img.height;

          // Redimensiona proporcionalmente mantendo o aspect ratio
          if (width > maxWidth) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
          }

          const canvas = document.createElement("canvas");
          canvas.width = width;
          canvas.height = height;

          const ctx = canvas.getContext("2d");
          ctx.imageSmoothingEnabled = true;
          ctx.imageSmoothingQuality = "high";
          ctx.drawImage(img, 0, 0, width, height);

          // Gera Data URL compactado em JPEG
          const compressedDataUrl = canvas.toDataURL("image/jpeg", quality);
          const compressedBytes = Math.round(
            (compressedDataUrl.length * 3) / 4,
          );

          resolve({
            dataUrl: compressedDataUrl,
            originalSize: file.size,
            compressedSize: compressedBytes,
          });
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    });
  }

  function formatBytes(bytes) {
    if (!bytes || bytes <= 0) return "0 B";
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1048576) return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / 1048576).toFixed(1) + " MB";
  }

  function escapeHTML(str) {
    return String(str || "").replace(
      /[&<>"']/g,
      (c) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        })[c],
    );
  }

  function showToast(msg) {
    const toast = document.getElementById("toast");
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2800);
  }

  // ==========================================================================
  // SISTEMA DE NOTIFICAÇÕES
  // ==========================================================================

  /** Notificações descartadas (lidas), persistidas no localStorage */
  let readNotifications = loadStorage("temai_notif_read", []);

  /**
   * Deriva a lista de notificações do estado atual do app.
   * Cada notificação tem { id, icon, title, text, time, targetNav }.
   */
  function buildNotifications() {
    const list = [];

    if (!currentUser) {
      // Visitante: só uma dica de boas-vindas
      list.push({
        id: "welcome-guest",
        icon: "👋",
        title: "Bem-vindo ao Tem Aí? Tem Aqui!",
        text: "Entre como cliente para reservar produtos do comércio local.",
        time: "Agora",
        targetNav: null,
        action: "login-customer",
      });

      // Higiene: descarta IDs de notificações lidas que não existem mais.
      // Faz isso uma vez a cada chamada, é barato e evita crescimento infinito.
      const currentIds = new Set(list.map((n) => n.id));
      const before = readNotifications.length;
      readNotifications = readNotifications.filter((id) => currentIds.has(id));
      if (readNotifications.length !== before) saveReadNotifications();

      return list;
    }

    if (currentUser.type === "customer") {
      // Reservas pendentes do cliente
      const myActive = reservations.filter(
        (r) =>
          r.customerId === currentUser.id &&
          (r.status === "Pendente" || r.status === "Aguardando Retirada"),
      );
      myActive.forEach((r) => {
        list.push({
          id: `res-pending-${r.code}`,
          icon: "🎟️",
          title: "Reserva aguardando retirada",
          text: `${r.product} na ${r.store} — código ${r.code}.`,
          time: r.deadline || "Confira o prazo",
          targetNav: "client-reservations",
        });
      });

      // Reservas confirmadas (prontas para retirar)
      const confirmed = reservations.filter(
        (r) => r.customerId === currentUser.id && r.status === "Confirmada",
      );
      confirmed.forEach((r) => {
        list.push({
          id: `res-confirmed-${r.code}`,
          icon: "✅",
          title: "Reserva confirmada pela loja",
          text: `${r.product} já pode ser retirado na ${r.store}.`,
          time: r.deadline || "",
          targetNav: "client-reservations",
        });
      });
    }

    if (currentUser.type === "merchant") {
      const myStoreId = currentUser.storeId;

      // Reservas pendentes recebidas
      const pendingForStore = reservations.filter(
        (r) => r.storeId === myStoreId && r.status === "Pendente",
      );
      pendingForStore.forEach((r) => {
        list.push({
          id: `merch-res-${r.code}`,
          icon: "📦",
          title: "Nova reserva recebida",
          text: `${r.customerName} reservou ${r.product} (${r.quantity} un.). Código ${r.code}.`,
          time: r.createdAt || "",
          targetNav: "merchant-reservations",
        });
      });

      // Produtos esgotados
      const outOfStock = products.filter(
        (p) => p.storeId === myStoreId && p.stock === 0,
      );
      outOfStock.slice(0, 3).forEach((p) => {
        list.push({
          id: `merch-out-${p.id}`,
          icon: "⚠️",
          title: "Produto esgotado",
          text: `${p.name} está sem estoque. Atualize para não perder vendas.`,
          time: "Atenção",
          targetNav: "merchant-products",
        });
      });
    }

    return list;
  }

  /** Retorna notificações ainda não marcadas como lidas */
  function getUnreadNotifications() {
    return buildNotifications().filter(
      (n) => !readNotifications.includes(n.id),
    );
  }

  /** Atualiza o badge do sino */
  function updateNotificationBadge() {
    const badge = document.getElementById("notif-badge");
    if (!badge) return;
    const count = getUnreadNotifications().length;
    badge.textContent = count > 9 ? "9+" : String(count);
    badge.classList.toggle("hidden", count === 0);
  }

  /** Renderiza o painel de notificações */
  function renderNotificationsPanel() {
    const body = document.getElementById("notif-panel-body");
    if (!body) return;

    const all = buildNotifications();

    if (all.length === 0) {
      body.innerHTML = `<div class="notif-empty">🔕<br>Nenhuma notificação no momento.</div>`;
      return;
    }

    body.innerHTML = all
      .map((n) => {
        const isUnread = !readNotifications.includes(n.id);
        return `
        <div class="notif-item ${isUnread ? "unread" : ""}" data-notif-id="${escapeHTML(n.id)}" data-target-nav="${escapeHTML(n.targetNav || "")}" data-action="${escapeHTML(n.action || "")}">
          <div class="notif-item-icon">${n.icon}</div>
          <div class="notif-item-content">
            <div class="notif-item-title">${escapeHTML(n.title)}</div>
            <div class="notif-item-text">${escapeHTML(n.text)}</div>
            <div class="notif-item-time">${escapeHTML(n.time || "")}</div>
          </div>
        </div>
      `;
      })
      .join("");

    // Eventos de clique em cada item
    body.querySelectorAll(".notif-item").forEach((item) => {
      item.addEventListener("click", () => {
        const id = item.dataset.notifId;
        const nav = item.dataset.targetNav;
        const action = item.dataset.action;

        // Marca como lida
        if (!readNotifications.includes(id)) {
          readNotifications.push(id);
          saveReadNotifications();
        }

        // Fecha o painel
        closeNotificationsPanel();

        // Ação
        if (action === "login-customer") {
          openAuthModal("customer");
        } else if (nav) {
          navigateTo(nav);
        } else {
          updateNotificationBadge();
        }
      });
    });
  }

  function saveReadNotifications() {
    try {
      localStorage.setItem(
        "temai_notif_read",
        JSON.stringify(readNotifications),
      );
    } catch (err) {
      console.warn("[notifications] Não foi possível persistir leituras.", err);
    }
  }

  function openNotificationsPanel() {
    const panel = document.getElementById("notifications-panel");
    const btn = document.getElementById("notifications-btn");
    if (!panel || !btn) return;
    renderNotificationsPanel();
    panel.classList.remove("hidden");
    btn.setAttribute("aria-expanded", "true");
  }

  function closeNotificationsPanel() {
    const panel = document.getElementById("notifications-panel");
    const btn = document.getElementById("notifications-btn");
    if (!panel || !btn) return;
    panel.classList.add("hidden");
    btn.setAttribute("aria-expanded", "false");
  }

  function toggleNotificationsPanel() {
    const panel = document.getElementById("notifications-panel");
    if (!panel) return;
    panel.classList.contains("hidden")
      ? openNotificationsPanel()
      : closeNotificationsPanel();
  }

  /** Atualiza badge + fecha painel ao trocar de sessão */
  function refreshNotificationsUI() {
    updateNotificationBadge();
    // Se o painel estiver aberto, re-renderiza
    const panel = document.getElementById("notifications-panel");
    if (panel && !panel.classList.contains("hidden")) {
      renderNotificationsPanel();
    }
  }

  // ELEMENTOS DO DOM
  const mainContent = document.getElementById("main-content");
  const deviceWrapper = document.getElementById("device-wrapper");
  const deviceToggleBtn = document.getElementById("device-toggle-btn");
  const deviceModeLabel = document.getElementById("device-mode-label");
  const authQuickActions = document.getElementById("auth-quick-actions");
  const userHeaderProfile = document.getElementById("user-header-profile");
  const mobileBottomNav = document.getElementById("mobile-bottom-nav");
  const sideNavMerchant = document.getElementById("side-nav-merchant");
  const searchInput = document.getElementById("search-input");
  const clearSearchBtn = document.getElementById("clear-search-btn");
  const searchSuggestions = document.getElementById("search-suggestions");
  const sideReservationsList = document.getElementById(
    "side-reservations-list",
  );
  const sideResBadge = document.getElementById("side-res-badge");

  // MODAIS
  const customerAuthModal = document.getElementById("customer-auth-modal");
  const merchantAuthModal = document.getElementById("merchant-auth-modal");
  const merchantEditModal = document.getElementById("merchant-edit-modal");
  const productDetailModal = document.getElementById("product-detail-modal");
  const productDetailBody = document.getElementById("product-detail-body");
  const reserveModal = document.getElementById("reserve-modal");
  const reserveSuccessModal = document.getElementById("reserve-success-modal");
  const mapModal = document.getElementById("map-modal");

  // ==========================================================================
  // INICIALIZAÇÃO
  // ==========================================================================
  function init() {
    migrateStorage();
    setupAuthListeners();
    setupGlobalListeners();
    updateUserSessionUI();
    renderSideReservationsWidget();
    renderCurrentView();
    refreshNotificationsUI();
  }

  // Migração/Sincronização de dados persistidos no localStorage
  function migrateStorage() {
    let updated = false;
    stores.forEach((s) => {
      if (s.id === "banca-renato") {
        s.id = "banca-bueno";
        s.name = "Banca Bueno";
        s.phone = "(11) 98256-5530";
        updated = true;
      }
    });
    products.forEach((p) => {
      if (p.storeId === "banca-renato") {
        p.storeId = "banca-bueno";
        p.store = "Banca Bueno";
        updated = true;
      }
    });
    reservations.forEach((r) => {
      if (r.storeId === "banca-renato") {
        r.storeId = "banca-bueno";
        r.store = "Banca Bueno";
        updated = true;
      }
    });
    if (currentUser && currentUser.storeId === "banca-renato") {
      currentUser.storeId = "banca-bueno";
      currentUser.storeName = "Banca Bueno";
      updated = true;
    }
    if (updated) {
      saveStorage();
    }
  }

  // ==========================================================================
  // CONTROLE DE AUTENTICAÇÃO E PERFIL (CLIENTE vs COMERCIANTE)
  // ==========================================================================
  function updateUserSessionUI() {
    // 1. Atualiza cabeçalho superior e barra de utilitários
    if (currentUser) {
      if (currentUser.type === "merchant") {
        authQuickActions.innerHTML = `
          <span style="color:#86efac; font-weight:700;">🏪 ${escapeHTML(currentUser.storeName || "Minha Loja")}</span>
        `;
        userHeaderProfile.innerHTML = `
          <div class="logged-user-pill">
            <span class="logged-avatar">🏪</span>
            <div class="logged-meta">
              <span>Comerciante</span>
              <strong>${escapeHTML(currentUser.storeName || "Minha Loja")}</strong>
            </div>
            <button class="btn-logout-small" id="header-logout-btn" title="Encerrar sessão">Sair</button>
          </div>
        `;
        if (sideNavMerchant) sideNavMerchant.classList.remove("hidden");
      } else {
        authQuickActions.innerHTML = `
          <span style="color:#bae6fd; font-weight:600;">Olá, ${escapeHTML(currentUser.name)}</span>
        `;
        userHeaderProfile.innerHTML = `
          <div class="logged-user-pill">
            <span class="logged-avatar">👤</span>
            <div class="logged-meta">
              <span>Olá,</span>
              <strong>${escapeHTML(currentUser.name)}</strong>
            </div>
            <button class="btn-logout-small" id="header-logout-btn" title="Encerrar sessão">Sair</button>
          </div>
        `;
        if (sideNavMerchant) sideNavMerchant.classList.add("hidden");
      }
    } else {
      // Deslogado (Visitante): botões SÓ no topbar branco.
      authQuickActions.innerHTML = "";
      userHeaderProfile.innerHTML = `
        <button class="btn-header-login" id="header-login-cust-btn">
          <span>👤</span> Entrar
        </button>
        <button class="btn-header-merchant-entry" id="header-login-merch-btn">
          <span>🏪</span> Sou Comerciante
        </button>
      `;
      if (sideNavMerchant) sideNavMerchant.classList.add("hidden");
    }

    attachAuthButtonEvents();
    renderMobileBottomNav();
    refreshNotificationsUI();
  }

  function attachAuthButtonEvents() {
    const logoutBtns = document.querySelectorAll("#header-logout-btn");
    logoutBtns.forEach((b) => b.addEventListener("click", handleLogout));

    const custLoginBtns = document.querySelectorAll("#header-login-cust-btn");
    custLoginBtns.forEach((b) =>
      b.addEventListener("click", () => openAuthModal("customer")),
    );

    const merchLoginBtns = document.querySelectorAll("#header-login-merch-btn");
    merchLoginBtns.forEach((b) =>
      b.addEventListener("click", () => openAuthModal("merchant")),
    );
  }

  function openAuthModal(type) {
    if (type === "customer") {
      customerAuthModal.showModal();
    } else {
      merchantAuthModal.showModal();
    }
  }

  function handleLogout() {
    currentUser = null;
    saveStorage();
    updateUserSessionUI();
    showToast("Você saiu da sessão.");
    // Se estava em tela do comerciante, redireciona para a home
    if (currentNav.startsWith("merchant-")) {
      navigateTo("client-home");
    } else {
      renderCurrentView();
    }
  }

  // ==========================================================================
  // NAVEGAÇÃO MOBILE (BOTTOM NAV)
  // ==========================================================================
  function renderMobileBottomNav() {
    if (!mobileBottomNav) return;

    if (currentUser && currentUser.type === "merchant") {
      // Bottom Nav para Comerciante (Esboço Celular Comerciante)
      mobileBottomNav.innerHTML = `
        <button class="mob-nav-item ${currentNav === "merchant-dashboard" ? "active" : ""}" data-nav="merchant-dashboard">
          <span class="mob-icon">🏠</span>
          <span>Início</span>
        </button>
        <button class="mob-nav-item ${currentNav === "merchant-products" ? "active" : ""}" data-nav="merchant-products">
          <span class="mob-icon">📦</span>
          <span>Produtos</span>
        </button>
        <button class="mob-nav-item ${currentNav === "merchant-reservations" ? "active" : ""}" data-nav="merchant-reservations">
          <span class="mob-icon">📋</span>
          <span>Reservas</span>
        </button>
        <button class="mob-nav-item ${currentNav === "merchant-edit-profile" ? "active" : ""}" data-nav="merchant-edit-profile">
          <span class="mob-icon">⚙️</span>
          <span>Loja</span>
        </button>
      `;
    } else {
      // Bottom Nav para Cliente (Esboço Celular Cliente)
      const myResCount = reservations.filter(
        (r) => r.status === "Pendente" || r.status === "Aguardando Retirada",
      ).length;
      mobileBottomNav.innerHTML = `
        <button class="mob-nav-item ${currentNav === "client-home" ? "active" : ""}" data-nav="client-home">
          <span class="mob-icon">🏠</span>
          <span>Início</span>
        </button>
        <button class="mob-nav-item ${currentNav === "client-products" ? "active" : ""}" data-nav="client-products">
          <span class="mob-icon">🔍</span>
          <span>Buscar</span>
        </button>
        <button class="mob-nav-item ${currentNav === "client-reservations" ? "active" : ""}" data-nav="client-reservations">
          <span class="mob-icon">📋</span>
          <span>Reservas</span>
          ${myResCount > 0 ? `<span class="nav-badge-dot">${myResCount}</span>` : ""}
        </button>
        <button class="mob-nav-item ${currentNav === "user-profile" ? "active" : ""}" data-nav="user-profile">
          <span class="mob-icon">👤</span>
          <span>Perfil</span>
        </button>
      `;
    }

    mobileBottomNav.querySelectorAll(".mob-nav-item").forEach((btn) => {
      btn.addEventListener("click", () => {
        const target = btn.dataset.nav;
        if (target === "merchant-edit-profile") {
          openMerchantEditModal();
        } else {
          navigateTo(target);
        }
      });
    });
  }

  function navigateTo(targetNav) {
    // Segurança: se tentar acessar Modo Comerciante sem estar logado como tal
    if (targetNav.startsWith("merchant-")) {
      if (!currentUser || currentUser.type !== "merchant") {
        showToast("Acesso restrito: faça login como comerciante.");
        openAuthModal("merchant");
        return;
      }
    }

    currentNav = targetNav;
    updateNavButtonsState();
    renderCurrentView();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function updateNavButtonsState() {
    document.querySelectorAll(".side-nav-item").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.nav === currentNav);
    });
    renderMobileBottomNav();
  }

  // ==========================================================================
  // RENDERIZAÇÃO DAS TELAS
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
      case "user-profile":
        renderUserProfile();
        break;
      case "merchant-dashboard":
        renderMerchantDashboard();
        break;
      case "merchant-products":
        renderMerchantProductsList();
        break;
      case "merchant-add-product":
        renderMerchantAddProduct();
        break;
      case "merchant-reservations":
        renderMerchantReservationsList();
        break;
      case "merchant-stats":
        renderMerchantStats();
        break;
      default:
        renderClientHome();
    }
    updateSideReservationsBadge();
  }

  // --------------------------------------------------------------------------
  // 1. TELA DO CLIENTE: HOME (ESBOÇOS DESKTOP E MOBILE)
  // --------------------------------------------------------------------------
  function renderClientHome() {
    const categories = [
      { name: "Lançamentos", icon: "★", colorClass: "icon-green" },
      { name: "Livros e revistas", icon: "📖", colorClass: "icon-blue" },
      { name: "Figurinhas", icon: "⚽", colorClass: "icon-lightblue" },
      { name: "Games e colecionáveis", icon: "🎮", colorClass: "icon-blue" },
      { name: "Papelaria", icon: "✏️", colorClass: "icon-blue" },
      { name: "Presentes", icon: "🎁", colorClass: "icon-blue" },
      { name: "E muito mais!", icon: "🏷️", colorClass: "icon-blue" },
    ];

    const term = activeSearchTerm.trim().toLowerCase();
    const filteredProducts = products.filter((p) => {
      // "E muito mais!" é atalho para "ver todas", não um filtro real
      const matchCat =
        !activeCategory ||
        activeCategory === "E muito mais!" ||
        p.category === activeCategory;
      const matchSearch =
        !term ||
        [p.name, p.store, p.category, p.description].some((v) =>
          (v || "").toLowerCase().includes(term),
        );
      return matchCat && matchSearch;
    });

    mainContent.innerHTML = `
      <!-- Banner Hero com Foto de Fundo e Selo Amarelo Rotacionado -->
      <section class="hero-banner">
        <div class="hero-text">
          <h1>O que você procura,<br>pode estar pertinho de você!</h1>
          <p>Consulte a disponibilidade, reserve e compre no comércio local.</p>
        </div>
        <div class="sticker-badge" aria-hidden="true">
          Apoie seu bairro!
        </div>
      </section>

      <!-- Categorias em Destaque (Círculos Coloridos do Esboço) -->
      <section class="content-section">
        <div class="section-header">
          <h2>Categorias em destaque</h2>
          <button class="btn-link-action" id="btn-see-all-cats">Ver todas ➔</button>
        </div>
        <div class="categories-circles-row">
          ${categories
            .map(
              (c) => `
            <button class="cat-circle-btn ${activeCategory === c.name ? "active" : ""}" data-cat="${c.name}">
              <div class="cat-circle-icon ${c.colorClass}">
                ${c.icon}
              </div>
              <span class="cat-circle-label">${escapeHTML(c.name)}</span>
            </button>
          `,
            )
            .join("")}
        </div>
      </section>

      <!-- Produtos Disponíveis Perto de Você (Grade do Esboço) -->
      <section class="content-section">
        <div class="section-header">
          <div>
            <h2>Produtos disponíveis perto de você</h2>
            <p class="muted-info" style="margin-bottom:0;">
              ${filteredProducts.length} ${filteredProducts.length === 1 ? "produto encontrado" : "produtos encontrados"}
              ${activeCategory ? `em <strong>${escapeHTML(activeCategory)}</strong>` : ""}
            </p>
          </div>
          ${activeCategory ? `<button class="btn-link-action" id="btn-clear-cat-filter">Limpar filtro</button>` : ""}
        </div>

        ${
          filteredProducts.length
            ? `
          <div class="products-grid">
            ${filteredProducts
              .map(
                (p) => `
              <article class="product-card" data-id="${p.id}">
                <button class="product-fav-btn" title="Favoritar produto">♡</button>
                <div class="product-img-wrap">
                  <img src="${p.image}" alt="${escapeHTML(p.name)}" class="product-real-img" loading="lazy">
                  <div class="product-stock-tag">
                    <span class="${p.stock > 0 ? "pill-disponivel" : p.demand === "Em breve" ? "pill-embreve" : "pill-esgotado"}">
                      ${p.stock > 0 ? "✓ Disponível" : p.demand === "Em breve" ? "Em breve" : "Esgotado"}
                    </span>
                  </div>
                </div>
                <div class="product-body">
                  <h3 class="product-title">${escapeHTML(p.name)}</h3>
                  <div class="product-store-row">
                    <span>🏪</span> <strong>${escapeHTML(p.store)}</strong>
                  </div>
                  <div class="product-distance-line">
                    ${escapeHTML(p.distance)} · <a href="#" class="link-map-inline" data-store-id="${p.storeId}">Ver no mapa</a>
                  </div>
                  <div class="product-price-action-row">
                    <span class="product-card-price">${formatMoney(p.price)}</span>
                    <button class="btn-reserve-action ${!currentUser || currentUser.type !== "customer" ? "locked-login" : ""}" data-product-id="${p.id}" ${p.stock < 1 ? "disabled" : ""}>
                      ${p.stock < 1 ? "Indisponível" : !currentUser || currentUser.type !== "customer" ? "Entrar para reservar" : "💬 Reservar"}
                    </button>
                  </div>
                </div>
              </article>
            `,
              )
              .join("")}
          </div>
        `
            : `
          <div class="text-center" style="padding: 40px 20px;">
            <p style="font-size:2.8rem; margin-bottom:8px;">🔍</p>
            <h3>Nenhum produto encontrado</h3>
            <p class="muted-info">Não encontramos itens disponíveis para esse filtro ou termo de busca.</p>
            <button class="btn-secondary" id="btn-reset-search">Limpar busca e filtros</button>
          </div>
        `
        }
      </section>

      <!-- Lojas Mais Próximas (Esboço Desktop) -->
      <section class="content-section">
        <div class="section-header">
          <h2>Lojas mais próximas</h2>
          <button class="btn-link-action" id="btn-see-all-stores">Ver todas ➔</button>
        </div>
        <div class="stores-horizontal-list">
          ${stores
            .map(
              (s) => `
            <div class="store-compact-card" data-store-id="${s.id}">
              <img src="${s.thumb}" alt="${escapeHTML(s.name)}" class="store-compact-thumb">
              <div class="store-compact-info">
                <h4>${escapeHTML(s.name)}</h4>
                <span class="store-compact-dist">${escapeHTML(s.distance)}</span>
                <div class="store-status-dot-row">
                  <span class="dot-green"></span>
                  <span>${escapeHTML(s.status)}</span>
                </div>
              </div>
            </div>
          `,
            )
            .join("")}
        </div>
      </section>
    `;

    // Eventos da Home
    mainContent.querySelectorAll(".cat-circle-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const cat = btn.dataset.cat;

        // "E muito mais!" funciona como botão "Ver todas"
        if (cat === "E muito mais!") {
          activeCategory = "";
          renderClientHome();
          return;
        }

        activeCategory = activeCategory === cat ? "" : cat;
        renderClientHome();
      });
    });

    const seeAllCats = mainContent.querySelector("#btn-see-all-cats");
    if (seeAllCats)
      seeAllCats.addEventListener("click", () => {
        activeCategory = "";
        renderClientHome();
      });

    const clearCatFilter = mainContent.querySelector("#btn-clear-cat-filter");
    if (clearCatFilter)
      clearCatFilter.addEventListener("click", () => {
        activeCategory = "";
        renderClientHome();
      });

    const resetSearch = mainContent.querySelector("#btn-reset-search");
    if (resetSearch)
      resetSearch.addEventListener("click", () => {
        activeCategory = "";
        activeSearchTerm = "";
        if (searchInput) searchInput.value = "";
        renderClientHome();
      });

    const seeAllStores = mainContent.querySelector("#btn-see-all-stores");
    if (seeAllStores)
      seeAllStores.addEventListener("click", () => navigateTo("client-stores"));

    mainContent.querySelectorAll(".btn-reserve-action").forEach((btn) => {
      btn.addEventListener("click", () => {
        const prodId = Number(btn.dataset.productId);
        handleReserveClick(prodId);
      });
    });

    mainContent.querySelectorAll(".product-card").forEach((card) => {
      card.addEventListener("click", (e) => {
        if (
          e.target.closest(".btn-reserve-action") ||
          e.target.closest(".product-fav-btn") ||
          e.target.closest(".link-map-inline")
        )
          return;
        const id = Number(card.dataset.id);
        openProductDetailModal(id);
      });
    });

    mainContent.querySelectorAll(".link-map-inline").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        openMapModalWithStore(link.dataset.storeId);
      });
    });

    mainContent.querySelectorAll(".store-compact-card").forEach((c) => {
      c.addEventListener("click", () =>
        openMapModalWithStore(c.dataset.storeId),
      );
    });
  }

  // --------------------------------------------------------------------------
  // INTERCEPTADOR DE RESERVA: EXIGE CLIENTE LOGADO
  // --------------------------------------------------------------------------
  function handleReserveClick(productId) {
    const product = products.find((p) => p.id === productId);
    if (!product || product.stock < 1) return;

    if (!currentUser) {
      showToast("Para fazer a reserva, entre como cliente.");
      openAuthModal("customer");
      return;
    }

    if (currentUser.type !== "customer") {
      showToast(
        "Você está no perfil de Comerciante. Entre como Cliente para reservar.",
      );
      return;
    }

    // Cliente logado: abre formulário de confirmação de reserva
    openReservationForm(product);
  }

  // --------------------------------------------------------------------------
  // 2. MODAL DE DETALHES DO PRODUTO (ESBOÇO CELULAR TELA 2)
  // --------------------------------------------------------------------------
  function openProductDetailModal(productId) {
    const product = products.find((p) => p.id === productId);
    if (!product) return;
    selectedProductForDetail = product;

    productDetailBody.innerHTML = `
      <img src="${product.image}" alt="${escapeHTML(product.name)}" class="product-detail-hero-img">
      <h2 style="font-size:1.35rem; font-weight:800; color:var(--ink-900);">${escapeHTML(product.name)}</h2>
      
      <div class="product-detail-store-badge">
        <span style="font-size:1.3rem;">🏪</span>
        <div>
          <strong>${escapeHTML(product.store)}</strong>
          <div style="font-size:0.78rem; color:var(--ink-500);">${escapeHTML(product.distance)} · <a href="#" id="modal-link-map">Ver no mapa</a></div>
        </div>
      </div>

      <div style="display:flex; align-items:center; justify-content:space-between; margin:14px 0;">
        <span class="${product.stock > 0 ? "pill-disponivel" : "pill-esgotado"}">
          ${product.stock > 0 ? `✓ Disponível (${product.stock} un.)` : "Esgotado"}
        </span>
        <span style="font-size:1.6rem; font-weight:900; color:var(--secondary);">
          ${formatMoney(product.price)}
        </span>
      </div>

      <p class="muted-info" style="line-height:1.45;">${escapeHTML(product.description)}</p>

      <div style="display:flex; flex-direction:column; gap:10px; margin-top:20px;">
        <button class="btn-primary full-btn" id="btn-modal-do-reserve" ${product.stock < 1 ? "disabled" : ""}>
          ${product.stock < 1 ? "Produto indisponível" : !currentUser || currentUser.type !== "customer" ? "Fazer login para reservar" : "Reservar"}
        </button>
        <a class="btn-whatsapp-outline" target="_blank" rel="noopener noreferrer" href="https://wa.me/5511987654321?text=${encodeURIComponent(`Olá! Vi o produto "${product.name}" no Tem Aí? Tem Aqui! e gostaria de tirar uma dúvida.`)}">
          💬 Falar com o comerciante
        </a>
      </div>
    `;

    productDetailModal.showModal();

    const linkMap = productDetailBody.querySelector("#modal-link-map");
    if (linkMap) {
      linkMap.addEventListener("click", (e) => {
        e.preventDefault();
        productDetailModal.close();
        openMapModalWithStore(product.storeId);
      });
    }

    const doReserveBtn = productDetailBody.querySelector(
      "#btn-modal-do-reserve",
    );
    if (doReserveBtn) {
      doReserveBtn.addEventListener("click", () => {
        productDetailModal.close();
        handleReserveClick(product.id);
      });
    }
  }

  // --------------------------------------------------------------------------
  // 3. MODAL DE FORMULÁRIO DE RESERVA E CONFIRMAÇÃO
  // --------------------------------------------------------------------------
  function openReservationForm(product) {
    selectedProductForReserve = product;
    const title = document.getElementById("reserve-form-title");
    const subtitle = document.getElementById("reserve-form-subtitle");
    const custName = document.getElementById("reserve-customer-name");
    const custPhone = document.getElementById("reserve-customer-phone");
    const qtyInput = document.getElementById("reserve-qty-input");

    title.textContent = product.name;
    subtitle.textContent = `Estabelecimento: ${product.store} (${product.distance})`;

    // Pré-preenche dados do cliente logado
    custName.value = currentUser ? currentUser.name : "";
    custPhone.value = currentUser ? currentUser.phone : "";
    qtyInput.value = 1;
    qtyInput.max = product.stock;

    updateReserveFormSummary();
    reserveModal.showModal();
  }

  function updateReserveFormSummary() {
    if (!selectedProductForReserve) return;
    const qtyInput = document.getElementById("reserve-qty-input");
    const unitPriceEl = document.getElementById("summary-unit-price");
    const totalPriceEl = document.getElementById("summary-total-price");

    const qty = parseInt(qtyInput.value, 10) || 1;
    unitPriceEl.textContent = formatMoney(selectedProductForReserve.price);
    totalPriceEl.textContent = formatMoney(
      qty * selectedProductForReserve.price,
    );
  }

  // --------------------------------------------------------------------------
  // 4. TELA DO CLIENTE: MINHAS RESERVAS (ESBOÇO CELULAR TELA 4)
  // --------------------------------------------------------------------------

  function renderClientReservations() {
    if (!currentUser || currentUser.type !== "customer") {
      mainContent.innerHTML = `
      <section class="content-section text-center" style="padding:50px 20px;">
        <p style="font-size:3rem; margin-bottom:12px;">🔒</p>
        <h2>Área de Reservas do Cliente</h2>
        <p class="muted-info">Faça login com sua conta de cliente para visualizar seus vouchers de retirada.</p>
        <button class="btn-primary" id="btn-login-to-see-res">Entrar como Cliente</button>
      </section>
    `;
      mainContent
        .querySelector("#btn-login-to-see-res")
        .addEventListener("click", () => openAuthModal("customer"));
      return;
    }

    // Filtra somente as reservas do cliente conectado
    const myReservations = reservations.filter(
      (r) => r.customerId === currentUser.id,
    );

    // Separa as reservas ativas
    const pending = myReservations.filter(
      (r) => r.status === "Pendente" || r.status === "Aguardando Retirada",
    );

    // Separa o histórico
    const history = myReservations.filter(
      (r) => r.status !== "Pendente" && r.status !== "Aguardando Retirada",
    );

    mainContent.innerHTML = `
    <section class="content-section">
      <div class="section-header">
        <div>
          <h2>Minhas Reservas</h2>
          <p class="muted-info" style="margin-bottom:0;">Apresente o código de reserva na loja para retirar seu produto.</p>
        </div>
        <button class="btn-secondary" id="btn-back-home-res">Voltar ao Início</button>
      </div>

      <div class="segmented-tabs" id="reservations-client-tabs">
        <button class="segmented-tab active" data-tab="active">Ativas (${pending.length})</button>
        <button class="segmented-tab" data-tab="history">Histórico (${history.length})</button>
      </div>

      <div id="client-res-content">
        ${renderClientResCards(pending, true)}
      </div>
    </section>
  `;

    mainContent
      .querySelector("#btn-back-home-res")
      .addEventListener("click", () => navigateTo("client-home"));

    const tabBtns = mainContent.querySelectorAll(
      "#reservations-client-tabs .segmented-tab",
    );

    tabBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        tabBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        const isAct = btn.dataset.tab === "active";
        const container = mainContent.querySelector("#client-res-content");

        container.innerHTML = renderClientResCards(
          isAct ? pending : history,
          isAct,
        );

        attachClientResEvents();
      });
    });

    attachClientResEvents();
  }

  function renderClientResCards(list, isActive) {
    if (!list.length) {
      return `
        <div class="text-center" style="padding: 40px 20px;">
          <p style="font-size:2.8rem; margin-bottom:8px;">📋</p>
          <h3>Nenhuma reserva nesta lista</h3>
          <p class="muted-info">${isActive ? "Você não possui nenhuma reserva aguardando retirada." : "Não há reservas concluídas no histórico."}</p>
        </div>
      `;
    }

    return `
      <div style="display:flex; flex-direction:column; gap:14px;">
        ${list
          .map(
            (r) => `
          <div class="merchant-res-item-card">
            <div class="merchant-res-client-meta">
              <div class="client-avatar-circle">🎟️</div>
              <div class="client-res-texts">
                <h4>${escapeHTML(r.product)}</h4>
                <p>🏪 ${escapeHTML(r.store)} · ${r.quantity} un. · <strong>${formatMoney(r.totalPrice)}</strong></p>
                <small>Código: <strong>${escapeHTML(r.code)}</strong> · ${escapeHTML(r.deadline)}</small>
              </div>
            </div>
            <div class="merchant-res-actions">
              <span class="res-status-pill ${r.status === "Pendente" ? "status-pendente" : r.status === "Confirmada" ? "status-confirmada" : "status-concluida"}">
                ${escapeHTML(r.status)}
              </span>
              ${
                isActive
                  ? `
                <button class="btn-secondary btn-cancel-client-res" data-code="${r.code}">
                  Cancelar
                </button>
              `
                  : ""
              }
            </div>
          </div>
        `,
          )
          .join("")}
      </div>
    `;
  }

  function attachClientResEvents() {
    mainContent.querySelectorAll(".btn-cancel-client-res").forEach((btn) => {
      btn.addEventListener("click", () => {
        const code = btn.dataset.code;
        if (
          confirm(
            `Deseja cancelar a reserva ${code}? O produto voltará ao estoque do comércio.`,
          )
        ) {
          const res = reservations.find((r) => r.code === code);
          if (res) {
            res.status = "Cancelada";
            const product = products.find((p) => p.id === res.productId);
            if (product) product.stock += res.quantity;
            saveStorage();
            renderSideReservationsWidget();
            renderClientReservations();
            refreshNotificationsUI();
            showToast(`Reserva ${code} cancelada.`);
          }
        }
      });
    });
  }

  // --------------------------------------------------------------------------
  // 5. TELA DO COMERCIANTE: PAINEL PRINCIPAL (ESBOÇO CELULAR TELA 1)
  // --------------------------------------------------------------------------
  function renderMerchantDashboard() {
    const store =
      stores.find(
        (s) => s.id === (currentUser ? currentUser.storeId : "banca-bueno"),
      ) || stores[0];
    const myProducts = products.filter((p) => p.storeId === store.id);
    const myReservations = reservations.filter(
      (r) => r.storeId === store.id && r.status === "Pendente",
    );

    mainContent.innerHTML = `
      <!-- Cabeçalho do Comércio com Botão de Edição de Dados -->
      <div class="merchant-store-header-banner">
        <div class="merchant-store-meta">
          <div class="merchant-store-avatar">${store.icon}</div>
          <div class="merchant-store-titles">
            <h2>${escapeHTML(store.name)}</h2>
            <p>Seu estabelecimento · 📍 ${escapeHTML(store.address)}</p>
          </div>
        </div>
        <div class="merchant-header-actions">
          <button class="btn-secondary" id="btn-edit-store-data">
            ✏️ Editar dados da loja
          </button>
          <button class="btn-primary" id="btn-view-client-mode">
            👁️ Ver como cliente
          </button>
        </div>
      </div>

      <!-- OS 3 GRANDES BOTÕES DE AÇÃO DO COMERCIANTE (ESBOÇO CELULAR TELA 1) -->
      <div class="merchant-big-action-cards">
        <!-- Botão 1 (+): Cadastrar Produto -->
        <button class="merch-action-card card-blue" id="btn-go-add-prod">
          <div class="merch-action-icon">➕</div>
          <div class="merch-action-content">
            <h3>Cadastrar produto ou disponibilidade</h3>
            <p>Com foto, categoria e estoque rápido.</p>
          </div>
        </button>

        <!-- Botão 2: Meus Produtos e Reservas -->
        <button class="merch-action-card card-green" id="btn-go-my-prods">
          <div class="merch-action-icon">📦</div>
          <div class="merch-action-content">
            <h3>Meus produtos e reservas</h3>
            <p>${myProducts.length} itens cadastrados no catálogo.</p>
          </div>
        </button>

        <!-- Botão 3: Ver Estatísticas -->
        <button class="merch-action-card card-orange" id="btn-go-stats">
          <div class="merch-action-icon">📊</div>
          <div class="merch-action-content">
            <h3>Ver estatísticas (vendas e acessos)</h3>
            <p>Produtos com maior procura no bairro.</p>
          </div>
        </button>
      </div>

      <!-- Atalho Rápido de Reservas Pendentes -->
      <section class="content-section">
        <div class="section-header">
          <div>
            <h2>Reservas aguardando retirada (${myReservations.length})</h2>
            <p class="muted-info" style="margin-bottom:0;">Clientes que reservaram produtos e aguardam retirada no balcão.</p>
          </div>
          <button class="btn-link-action" id="btn-link-all-res">Ver todas as reservas ➔</button>
        </div>

        <div class="merchant-reservations-grid">
          ${
            myReservations.length
              ? myReservations
                  .map(
                    (r) => `
            <div class="merchant-res-item-card">
              <div class="merchant-res-client-meta">
                <div class="client-avatar-circle">👤</div>
                <div class="client-res-texts">
                  <h4>${escapeHTML(r.customerName)}</h4>
                  <p>${escapeHTML(r.product)} · ${r.quantity} un. · <strong>${formatMoney(r.totalPrice)}</strong></p>
                  <small>Código: <strong>${escapeHTML(r.code)}</strong> · ${escapeHTML(r.deadline)}</small>
                </div>
              </div>
              <div class="merchant-res-actions">
                <span class="res-status-pill status-pendente">${escapeHTML(r.status)}</span>
                <button class="btn-confirm-pickup" data-code="${r.code}">
                  ✓ Confirmar retirada
                </button>
              </div>
            </div>
          `,
                  )
                  .join("")
              : `<p class="muted-info" style="padding:20px; text-align:center;">Nenhuma reserva pendente no momento.</p>`
          }
        </div>
      </section>
    `;

    // Eventos do painel
    mainContent
      .querySelector("#btn-edit-store-data")
      .addEventListener("click", openMerchantEditModal);
    mainContent
      .querySelector("#btn-view-client-mode")
      .addEventListener("click", () => navigateTo("client-home"));
    mainContent
      .querySelector("#btn-go-add-prod")
      .addEventListener("click", () => navigateTo("merchant-add-product"));
    mainContent
      .querySelector("#btn-go-my-prods")
      .addEventListener("click", () => navigateTo("merchant-products"));
    mainContent
      .querySelector("#btn-go-stats")
      .addEventListener("click", () => navigateTo("merchant-stats"));
    mainContent
      .querySelector("#btn-link-all-res")
      .addEventListener("click", () => navigateTo("merchant-reservations"));

    mainContent.querySelectorAll(".btn-confirm-pickup").forEach((btn) => {
      btn.addEventListener("click", () => {
        const code = btn.dataset.code;
        const res = reservations.find((r) => r.code === code);
        if (res) {
          res.status = "Concluída";
          saveStorage();
          renderMerchantReservationsList();
          refreshNotificationsUI();
          showToast(`Reserva ${code} concluída.`);
        }
        if (res) {
          res.status = "Concluída";
          saveStorage();
          renderMerchantDashboard();
          refreshNotificationsUI();
          showToast(`Reserva ${code} entregue com sucesso.`);
        }
      });
    });
  }

  // --------------------------------------------------------------------------
  // 6. TELA DO COMERCIANTE: MEUS PRODUTOS
  // --------------------------------------------------------------------------
  function renderMerchantProductsList() {
    const store =
      stores.find(
        (s) => s.id === (currentUser ? currentUser.storeId : "banca-bueno"),
      ) || stores[0];
    const myProducts = products.filter((p) => p.storeId === store.id);

    mainContent.innerHTML = `
      <section class="content-section">
        <div class="section-header">
          <div>
            <h2>Meus Produtos</h2>
            <p class="muted-info" style="margin-bottom:0;">Ajuste o estoque rapidamente com os botões + e −.</p>
          </div>
          <div style="display:flex; gap:10px;">
            <button class="btn-secondary" id="btn-back-merch-hub">← Voltar</button>
            <button class="btn-primary" id="btn-add-prod-shortcut">➕ Cadastrar Produto</button>
          </div>
        </div>

        <div class="segmented-tabs">
          <button class="segmented-tab active">Em estoque (${myProducts.length})</button>
        </div>

        <div class="merchant-products-list">
          ${myProducts
            .map(
              (p) => `
            <div class="merchant-prod-row">
              <div class="merchant-prod-info">
                <img src="${p.image}" alt="${escapeHTML(p.name)}" class="merchant-prod-thumb">
                <div class="merchant-prod-titles">
                  <h4>${escapeHTML(p.name)}</h4>
                  <p>${escapeHTML(p.category)} · Preço: ${formatMoney(p.price)}</p>
                </div>
              </div>
              <div style="display:flex; align-items:center; gap:14px;">
                <span class="stock-tag-green" id="stock-tag-${p.id}">${p.stock} disponíveis</span>
                <div class="stock-stepper-wrap">
                  <button class="btn-step-stock btn-stepper-dec" data-id="${p.id}" aria-label="Diminuir estoque">−</button>
                  <span class="stock-number-display" id="stock-num-${p.id}">${p.stock}</span>
                  <button class="btn-step-stock btn-stepper-inc" data-id="${p.id}" aria-label="Aumentar estoque">+</button>
                </div>
              </div>
            </div>
          `,
            )
            .join("")}
        </div>
      </section>
    `;

    mainContent
      .querySelector("#btn-back-merch-hub")
      .addEventListener("click", () => navigateTo("merchant-dashboard"));
    mainContent
      .querySelector("#btn-add-prod-shortcut")
      .addEventListener("click", () => navigateTo("merchant-add-product"));

    mainContent.querySelectorAll(".btn-stepper-dec").forEach((btn) => {
      btn.addEventListener("click", () =>
        updateStockFast(Number(btn.dataset.id), -1),
      );
    });

    mainContent.querySelectorAll(".btn-stepper-inc").forEach((btn) => {
      btn.addEventListener("click", () =>
        updateStockFast(Number(btn.dataset.id), 1),
      );
    });
  }

  function updateStockFast(prodId, delta) {
    const prod = products.find((p) => p.id === prodId);
    if (!prod) return;
    prod.stock = Math.max(0, prod.stock + delta);
    saveStorage();

    const numEl = document.getElementById(`stock-num-${prodId}`);
    if (numEl) numEl.textContent = prod.stock;
    const tagEl = document.getElementById(`stock-tag-${prodId}`);
    if (tagEl) tagEl.textContent = `${prod.stock} disponíveis`;

    refreshNotificationsUI();
    showToast(`Estoque de "${prod.name}": ${prod.stock} un.`);
  }

  // --------------------------------------------------------------------------
  // 7. TELA DO COMERCIANTE: CADASTRAR PRODUTO COM UPLOAD DE IMAGEM (ESBOÇO CELULAR TELA 2)
  // --------------------------------------------------------------------------
  function renderMerchantAddProduct() {
    currentProductImageBase64 = PRODUCT_PRESETS.album; // Padrão inicial

    mainContent.innerHTML = `
      <section class="content-section" style="max-width:760px; margin:0 auto;">
        <div class="section-header">
          <div>
            <h2>Cadastrar Produto</h2>
            <p class="muted-info" style="margin-bottom:0;">Anuncie itens novos com foto, categoria e quantidade inicial.</p>
          </div>
          <button class="btn-secondary" id="btn-back-from-add">← Voltar</button>
        </div>

        <form id="form-add-product" class="modal-form">
          <div class="form-group">
            <label for="prod-name-input">Nome do produto:</label>
            <input type="text" id="prod-name-input" required placeholder="Ex.: Álbum de Figurinhas Copa 2026" maxlength="100">
          </div>

          <!-- UPLOAD DE IMAGEM DO PRODUTO -->
          <div class="form-group">
            <label>Foto do produto:</label>
            <div class="image-upload-dropzone" id="img-dropzone">
              <input type="file" id="prod-file-input" accept="image/*" style="display:none;">
              <div class="upload-icon">📷</div>
              <strong>Clique aqui para fazer upload de uma imagem do seu computador</strong>
              <div class="upload-hint">Formatos suportados: PNG, JPG, WebP ou GIF.</div>
            </div>

            <!-- Preview da Imagem Selecionada -->
            <div class="image-preview-container" id="img-preview-box">
              <img src="${currentProductImageBase64}" alt="Preview" class="preview-thumb" id="img-preview-thumb">
              <div class="preview-meta">
                <strong id="preview-filename">Imagem selecionada</strong>
                <div><button type="button" class="btn-remove-preview" id="btn-reset-img">Usar outra imagem</button></div>
              </div>
            </div>

            <!-- Exemplos rápidos para demonstração -->
            <div class="sample-presets-row">
              <span style="font-size:0.75rem; color:var(--ink-500); align-self:center;">Exemplos rápidos:</span>
              <button type="button" class="preset-chip" data-preset="album">Álbum Copa</button>
              <button type="button" class="preset-chip" data-preset="jornal">Jornal</button>
              <button type="button" class="preset-chip" data-preset="canetas">Canetas</button>
              <button type="button" class="preset-chip" data-preset="pokemon">Pokémon</button>
              <button type="button" class="preset-chip" data-preset="revista">Revista</button>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group flex-2">
              <label for="prod-cat-input">Categoria:</label>
              <select id="prod-cat-input" required>
                <option value="Figurinhas">Figurinhas</option>
                <option value="Livros e revistas">Livros e revistas</option>
                <option value="Lançamentos">Lançamentos</option>
                <option value="Games e colecionáveis">Games e colecionáveis</option>
                <option value="Papelaria">Papelaria</option>
                <option value="Presentes">Presentes</option>
                <option value="Outros">Outros</option>
                
              </select>
            </div>
            <div class="form-group flex-1">
              <label for="prod-price-input">Preço (opcional):</label>
              <input type="number" id="prod-price-input" min="0" step="0.50" value="12.00">
            </div>
          </div>

          <div class="form-group">
            <label for="prod-stock-input">Quantidade disponível:</label>
            <div class="stepper-input">
              <button type="button" class="step-btn" id="prod-stock-dec">−</button>
              <input type="number" id="prod-stock-input" min="0" value="50" readonly>
              <button type="button" class="step-btn" id="prod-stock-inc">+</button>
            </div>
          </div>

          <div class="form-group">
            <label for="prod-desc-input">Descrição rápida:</label>
            <input type="text" id="prod-desc-input" placeholder="Ex.: Acompanha pacote com brindes" maxlength="150">
          </div>

          <button type="submit" class="btn-primary full-btn" style="font-size:1.1rem; padding:14px; margin-top:12px;">
            Salvar
          </button>
        </form>
      </section>
    `;

    mainContent
      .querySelector("#btn-back-from-add")
      .addEventListener("click", () => navigateTo("merchant-dashboard"));

    // Eventos do Upload de Imagem
    const dropzone = mainContent.querySelector("#img-dropzone");
    const fileInput = mainContent.querySelector("#prod-file-input");
    const previewThumb = mainContent.querySelector("#img-preview-thumb");
    const previewName = mainContent.querySelector("#preview-filename");
    const resetImgBtn = mainContent.querySelector("#btn-reset-img");

    dropzone.addEventListener("click", () => fileInput.click());

    fileInput.addEventListener("change", async (e) => {
      const file = e.target.files[0];
      if (file) {
        try {
          showToast("Otimizando imagem com Canvas API...");
          const result = await compressImageWithCanvas(file, 640, 0.82);
          currentProductImageBase64 = result.dataUrl;
          previewThumb.src = currentProductImageBase64;
          previewName.textContent = `${file.name} (${formatBytes(result.compressedSize)})`;
          showToast(
            `Imagem otimizada com sucesso (${formatBytes(result.originalSize)} ➔ ${formatBytes(result.compressedSize)})!`,
          );
        } catch (err) {
          console.warn(
            "[upload] Compressão via Canvas falhou. Tentando reduzir qualidade...",
            err,
          );

          // Tentativa de recompressão mais agressiva
          try {
            const result = await compressImageWithCanvas(file, 480, 0.65);
            currentProductImageBase64 = result.dataUrl;
            previewThumb.src = currentProductImageBase64;
            previewName.textContent = `${file.name} (${formatBytes(result.compressedSize)})`;
            showToast(
              `Imagem otimizada em modo leve (${formatBytes(result.compressedSize)}).`,
            );
            return;
          } catch (err2) {
            console.error("[upload] Recompressão também falhou.", err2);
          }

          // Fallback: ler direto, mas avisar
          const reader = new FileReader();
          reader.onload = function (evt) {
            currentProductImageBase64 = evt.target.result;
            previewThumb.src = currentProductImageBase64;
            previewName.textContent = file.name;
            showToast(
              `Imagem "${file.name}" carregada sem compressão. Isso pode encher o armazenamento.`,
            );
          };
          reader.onerror = () => showToast("Não foi possível ler a imagem.");
          reader.readAsDataURL(file);
        }
      }
    });

    resetImgBtn.addEventListener("click", () => {
      fileInput.click();
    });

    mainContent.querySelectorAll(".preset-chip").forEach((chip) => {
      chip.addEventListener("click", () => {
        const pKey = chip.dataset.preset;
        if (PRODUCT_PRESETS[pKey]) {
          currentProductImageBase64 = PRODUCT_PRESETS[pKey];
          previewThumb.src = currentProductImageBase64;
          previewName.textContent = `Modelo: ${chip.textContent}`;
          showToast(`Modelo de imagem selecionado: ${chip.textContent}`);
        }
      });
    });

    // Stepper
    const stockInput = mainContent.querySelector("#prod-stock-input");
    mainContent
      .querySelector("#prod-stock-dec")
      .addEventListener("click", () => {
        let val = Number(stockInput.value) || 0;
        if (val > 0) stockInput.value = val - 1;
      });
    mainContent
      .querySelector("#prod-stock-inc")
      .addEventListener("click", () => {
        let val = Number(stockInput.value) || 0;
        stockInput.value = val + 1;
      });

    // Envio do Formulário
    mainContent
      .querySelector("#form-add-product")
      .addEventListener("submit", (e) => {
        e.preventDefault();
        const store =
          stores.find(
            (s) => s.id === (currentUser ? currentUser.storeId : "banca-bueno"),
          ) || stores[0];
        const name = mainContent.querySelector("#prod-name-input").value.trim();
        const category = mainContent.querySelector("#prod-cat-input").value;
        const price =
          parseFloat(mainContent.querySelector("#prod-price-input").value) || 0;
        const stock = parseInt(stockInput.value, 10) || 0;
        const desc =
          mainContent.querySelector("#prod-desc-input").value.trim() ||
          `Produto disponível na ${store.name}.`;

        const newProduct = {
          id: Date.now(),
          name,
          category,
          storeId: store.id,
          store: store.name,
          distance: store.distance,
          stock,
          price,
          image: currentProductImageBase64 || PRODUCT_PRESETS.album,
          description: desc,
          demand: "Novo",
          featured: true,
        };

        products.unshift(newProduct);
        saveStorage();
        showToast(`Produto "${name}" cadastrado na sua loja!`);
        navigateTo("merchant-products");
      });
  }

  // --------------------------------------------------------------------------
  // 8. TELA DO COMERCIANTE: RESERVAS RECEBIDAS (ESBOÇO CELULAR TELA 4)
  // --------------------------------------------------------------------------
  function renderMerchantReservationsList() {
    const store =
      stores.find(
        (s) => s.id === (currentUser ? currentUser.storeId : "banca-bueno"),
      ) || stores[0];
    const myRes = reservations.filter((r) => r.storeId === store.id);
    const toPickup = myRes.filter((r) => r.status === "Pendente");
    const finished = myRes.filter(
      (r) => r.status === "Concluída" || r.status === "Confirmada",
    );

    mainContent.innerHTML = `
      <section class="content-section">
        <div class="section-header">
          <div>
            <h2>Reservas — ${escapeHTML(store.name)}</h2>
            <p class="muted-info" style="margin-bottom:0;">Gerencie os pedidos de clientes e confirme as entregas no balcão.</p>
          </div>
          <button class="btn-secondary" id="btn-back-hub-res">← Voltar</button>
        </div>

        <div class="segmented-tabs" id="merchant-res-tabs">
          <button class="segmented-tab active" data-tab="all">Todas (${myRes.length})</button>
          <button class="segmented-tab" data-tab="pickup">A retirar (${toPickup.length})</button>
          <button class="segmented-tab" data-tab="finished">Retiradas (${finished.length})</button>
        </div>

        <div id="merchant-res-list-box" class="merchant-reservations-grid">
          ${renderMerchantResItems(myRes)}
        </div>
      </section>
    `;

    mainContent
      .querySelector("#btn-back-hub-res")
      .addEventListener("click", () => navigateTo("merchant-dashboard"));

    const tabs = mainContent.querySelectorAll(
      "#merchant-res-tabs .segmented-tab",
    );
    tabs.forEach((t) => {
      t.addEventListener("click", () => {
        tabs.forEach((b) => b.classList.remove("active"));
        t.classList.add("active");
        const mode = t.dataset.tab;
        const targetList =
          mode === "pickup" ? toPickup : mode === "finished" ? finished : myRes;
        mainContent.querySelector("#merchant-res-list-box").innerHTML =
          renderMerchantResItems(targetList);
        attachPickupConfirmEvents();
      });
    });

    attachPickupConfirmEvents();
  }

  function renderMerchantResItems(list) {
    if (!list.length) {
      return `<p class="muted-info" style="padding:30px; text-align:center;">Nenhuma reserva nesta categoria.</p>`;
    }

    return list
      .map(
        (r) => `
      <div class="merchant-res-item-card">
        <div class="merchant-res-client-meta">
          <div class="client-avatar-circle">👤</div>
          <div class="client-res-texts">
            <h4>${escapeHTML(r.customerName)}</h4>
            <p>${escapeHTML(r.product)} · ${r.quantity} un. · <strong>${formatMoney(r.totalPrice)}</strong></p>
            <small>Código: <strong>${escapeHTML(r.code)}</strong> · ${escapeHTML(r.deadline)}</small>
          </div>
        </div>
        <div class="merchant-res-actions">
          <span class="res-status-pill ${r.status === "Pendente" ? "status-pendente" : r.status === "Confirmada" ? "status-confirmada" : "status-concluida"}">
            ${escapeHTML(r.status)}
          </span>
          ${
            r.status === "Pendente"
              ? `
            <button class="btn-confirm-pickup" data-code="${r.code}">
              ✓ Confirmar retirada
            </button>
          `
              : ""
          }
          <a class="btn-whatsapp-outline" target="_blank" rel="noopener noreferrer" href="https://wa.me/5511987654321?text=${encodeURIComponent(`Olá ${r.customerName}! Aqui é da ${r.store} sobre sua reserva ${r.code} do produto ${r.product}.`)}">
            💬 WhatsApp
          </a>
        </div>
      </div>
    `,
      )
      .join("");
  }

  function attachPickupConfirmEvents() {
    mainContent.querySelectorAll(".btn-confirm-pickup").forEach((btn) => {
      btn.addEventListener("click", () => {
        const code = btn.dataset.code;
        const res = reservations.find((r) => r.code === code);
        if (res) {
          res.status = "Concluída";
          saveStorage();
          renderMerchantReservationsList();
          showToast(`Reserva ${code} concluída.`);
        }
      });
    });
  }

  // --------------------------------------------------------------------------
  // 9. TELA DO COMERCIANTE: ESTATÍSTICAS
  // --------------------------------------------------------------------------
  function renderMerchantStats() {
    const store =
      stores.find(
        (s) => s.id === (currentUser ? currentUser.storeId : "banca-bueno"),
      ) || stores[0];
    const myProds = products.filter((p) => p.storeId === store.id);
    const myRes = reservations.filter((r) => r.storeId === store.id);
    const finishedCount = myRes.filter((r) => r.status === "Concluída").length;

    mainContent.innerHTML = `
      <section class="content-section">
        <div class="section-header">
          <div>
            <h2>Estatísticas da Loja — ${escapeHTML(store.name)}</h2>
            <p class="muted-info" style="margin-bottom:0;">Acompanhe o movimento e produtos mais procurados no seu bairro.</p>
          </div>
          <button class="btn-secondary" id="btn-back-from-stats">← Voltar</button>
        </div>

        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:16px; margin-bottom:24px;">
          <div class="side-card">
            <span style="font-size:0.85rem; color:var(--ink-500);">Produtos Cadastrados</span>
            <h3 style="font-size:1.8rem; font-weight:900; color:var(--primary); margin-top:4px;">${myProds.length} itens</h3>
          </div>
          <div class="side-card">
            <span style="font-size:0.85rem; color:var(--ink-500);">Reservas Recebidas</span>
            <h3 style="font-size:1.8rem; font-weight:900; color:var(--accent-orange); margin-top:4px;">${myRes.length} pedidos</h3>
          </div>
          <div class="side-card">
            <span style="font-size:0.85rem; color:var(--ink-500);">Retiradas Realizadas</span>
            <h3 style="font-size:1.8rem; font-weight:900; color:var(--secondary); margin-top:4px;">${finishedCount} entregues</h3>
          </div>
        </div>

        <div class="content-section" style="border:1.5px solid var(--border-light);">
          <h3 style="font-size:1.15rem; margin-bottom:14px;">🏆 Produtos Mais Procurados pelos Clientes</h3>
          ${(() => {
            const ranked = myProds
              .map((p) => ({
                name: p.name,
                reservations: myRes.filter((r) => r.productId === p.id).length,
              }))
              .sort((a, b) => b.reservations - a.reservations)
              .slice(0, 3);

            if (!ranked.length) {
              return `<p class="muted-info" style="padding:16px;">Ainda não há produtos cadastrados para ranquear.</p>`;
            }

            return `
          <ul style="list-style:none; display:flex; flex-direction:column; gap:10px;">
            ${ranked
              .map(
                (item, i) => `
              <li style="display:flex; justify-content:space-between; align-items:center; padding:12px; background:#f8fafc; border-radius:8px;">
                <strong>${i + 1}º ${escapeHTML(item.name)}</strong>
                <span class="pill-disponivel">${item.reservations} reserva(s)</span>
              </li>
            `,
              )
              .join("")}
          </ul>
        `;
          })()}
        </div>
      </section>
    `;

    mainContent
      .querySelector("#btn-back-from-stats")
      .addEventListener("click", () => navigateTo("merchant-dashboard"));
  }

  // --------------------------------------------------------------------------
  // 10. EDIÇÃO DOS DADOS DO COMÉRCIO (ENDEREÇO REAL, WHATSAPP, NOME)
  // --------------------------------------------------------------------------
  function openMerchantEditModal() {
    if (!currentUser || currentUser.type !== "merchant") return;
    const store = stores.find((s) => s.id === currentUser.storeId) || stores[0];

    const nameInput = document.getElementById("edit-store-name");
    const catInput = document.getElementById("edit-store-category");
    const phoneInput = document.getElementById("edit-store-phone");
    const addrInput = document.getElementById("edit-store-address");

    nameInput.value = store.name;
    catInput.value = store.category;
    phoneInput.value = store.phone;
    addrInput.value = store.address;

    merchantEditModal.showModal();
  }

  // --------------------------------------------------------------------------
  // 11. MAPA COMPLETO DOS COMÉRCIOS COM ENDEREÇO REAL
  // --------------------------------------------------------------------------
  function openMapModalWithStore(storeId) {
    const view = document.getElementById("map-interactive-view");
    view.innerHTML = `
      <div style="background:#e0f2fe; padding:20px; border-radius:8px; border:1px solid #bae6fd; margin-bottom:16px;">
        <h4 style="color:#0369a1; margin-bottom:4px;">📍 Mapa das Ruas e Comércios de Bairro</h4>
        <p style="font-size:0.85rem; color:#0c4a6e;">Os endereços reais abaixo foram cadastrados pelos próprios lojistas para facilitar sua localização:</p>
      </div>

      <div class="stores-map-grid">
        ${stores
          .map(
            (s) => `
          <div class="store-map-card ${s.id === storeId ? "active-store" : ""}">
            <div style="display:flex; align-items:center; gap:10px; margin-bottom:8px;">
              <span style="font-size:2rem;">${s.icon}</span>
              <div>
                <strong style="font-size:1.05rem;">${escapeHTML(s.name)}</strong>
                <div style="font-size:0.78rem; color:var(--ink-500);">${escapeHTML(s.category)}</div>
              </div>
            </div>
            <div style="font-size:0.85rem; color:var(--ink-700); margin-bottom:6px;">
              📍 <strong>Endereço Real:</strong><br>${escapeHTML(s.address)}
            </div>
            <div style="font-size:0.82rem; color:var(--ink-500); margin-bottom:12px;">
              Distância estimada: <strong>${escapeHTML(s.distance)}</strong>
            </div>
            <a class="btn-whatsapp-outline" target="_blank" rel="noopener noreferrer" href="https://wa.me/5511987654321?text=${encodeURIComponent(`Olá! Localizei a ${s.name} no Tem Aí? Tem Aqui! e gostaria de tirar uma dúvida.`)}">
              💬 Contato WhatsApp
            </a>
          </div>
        `,
          )
          .join("")}
      </div>
    `;
    mapModal.showModal();
  }

  // --------------------------------------------------------------------------
  // 12. TELA: LOJAS DO BAIRRO
  // --------------------------------------------------------------------------
  function renderClientStores() {
    mainContent.innerHTML = `
      <section class="content-section">
        <div class="section-header">
          <div>
            <h2>Lojas e Comércios do Bairro</h2>
            <p class="muted-info" style="margin-bottom:0;">Conheça os pontos físicos e endereços reais cadastrados na plataforma.</p>
          </div>
          <button class="btn-primary" id="btn-open-stores-map">🗺️ Ver Mapa Completo</button>
        </div>

        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:20px;">
          ${stores
            .map((s) => {
              const count = products.filter((p) => p.storeId === s.id).length;
              return `
              <div class="content-section" style="border: 2px solid var(--border-light); box-shadow:none;">
                <div style="display:flex; align-items:center; gap:12px; margin-bottom:12px;">
                  <span style="font-size:2.4rem;">${s.icon}</span>
                  <div>
                    <h3 style="font-size:1.15rem; margin-bottom:2px;">${escapeHTML(s.name)}</h3>
                    <span class="pill-disponivel">${escapeHTML(s.status)}</span>
                  </div>
                </div>
                <p style="font-size:0.88rem; color:var(--ink-700); margin-bottom:6px;">📍 <strong>${escapeHTML(s.address)}</strong></p>
                <p style="font-size:0.82rem; color:var(--ink-500); margin-bottom:12px;">Distância: <strong>${escapeHTML(s.distance)}</strong> · ${count} produtos cadastrados</p>
                <div style="display:flex; flex-direction:column; gap:8px;">
                  <button class="btn-secondary btn-store-filter-prods" data-store-name="${s.name}">
                    Ver produtos desta loja
                  </button>
                  <a class="btn-whatsapp-outline" target="_blank" rel="noopener noreferrer" href="https://wa.me/5511987654321?text=${encodeURIComponent(`Olá! Encontrei a ${s.name} no Tem Aí? Tem Aqui!`)}">
                    💬 WhatsApp da Loja
                  </a>
                </div>
              </div>
            `;
            })
            .join("")}
        </div>
      </section>
    `;

    mainContent
      .querySelector("#btn-open-stores-map")
      .addEventListener("click", () => openMapModalWithStore(""));
    mainContent.querySelectorAll(".btn-store-filter-prods").forEach((b) => {
      b.addEventListener("click", () => {
        activeSearchTerm = b.dataset.storeName;
        if (searchInput) searchInput.value = activeSearchTerm;
        navigateTo("client-home");
      });
    });
  }

  // --------------------------------------------------------------------------
  // 13. TELA: CATÁLOGO GERAL DE PRODUTOS
  // --------------------------------------------------------------------------
  function renderClientProducts() {
    mainContent.innerHTML = `
      <section class="content-section">
        <div class="section-header">
          <div>
            <h2>Todos os Produtos</h2>
            <p class="muted-info" style="margin-bottom:0;">Explore o catálogo completo de produtos anunciados na sua região.</p>
          </div>
          <button class="btn-secondary" id="btn-back-from-all-prods">Voltar ao Início</button>
        </div>

        <div class="products-grid">
          ${products
            .map(
              (p) => `
            <article class="product-card" data-id="${p.id}">
              <div class="product-img-wrap">
                <img src="${p.image}" alt="${escapeHTML(p.name)}" class="product-real-img">
                <div class="product-stock-tag">
                  <span class="${p.stock > 0 ? "pill-disponivel" : "pill-esgotado"}">
                    ${p.stock > 0 ? "✓ Disponível" : "Esgotado"}
                  </span>
                </div>
              </div>
              <div class="product-body">
                <h3 class="product-title">${escapeHTML(p.name)}</h3>
                <div class="product-store-row">
                  <span>🏪</span> <strong>${escapeHTML(p.store)}</strong>
                </div>
                <div class="product-distance-line">${escapeHTML(p.distance)}</div>
                <div class="product-price-action-row">
                  <span class="product-card-price">${formatMoney(p.price)}</span>
                  <button class="btn-reserve-action ${!currentUser || currentUser.type !== "customer" ? "locked-login" : ""}" data-product-id="${p.id}" ${p.stock < 1 ? "disabled" : ""}>
                    ${p.stock < 1 ? "Indisponível" : !currentUser || currentUser.type !== "customer" ? "Entrar para reservar" : "💬 Reservar"}
                  </button>
                </div>
              </div>
            </article>
          `,
            )
            .join("")}
        </div>
      </section>
    `;

    mainContent
      .querySelector("#btn-back-from-all-prods")
      .addEventListener("click", () => navigateTo("client-home"));
    mainContent.querySelectorAll(".btn-reserve-action").forEach((btn) => {
      btn.addEventListener("click", () =>
        handleReserveClick(Number(btn.dataset.productId)),
      );
    });
    mainContent.querySelectorAll(".product-card").forEach((c) => {
      c.addEventListener("click", (e) => {
        if (e.target.closest(".btn-reserve-action")) return;
        openProductDetailModal(Number(c.dataset.id));
      });
    });
  }

  // --------------------------------------------------------------------------
  // 14. TELA: PERFIL DO USUÁRIO
  // --------------------------------------------------------------------------
  function renderUserProfile() {
    if (!currentUser) {
      mainContent.innerHTML = `
        <section class="content-section text-center" style="padding:50px 20px;">
          <p style="font-size:3rem; margin-bottom:12px;">👤</p>
          <h2>Acesse seu Perfil</h2>
          <p class="muted-info">Escolha como deseja acessar a plataforma Tem Aí? Tem Aqui!:</p>
          <div style="display:flex; justify-content:center; gap:14px; margin-top:20px; flex-wrap:wrap;">
            <button class="btn-primary" id="btn-login-cust-profile">Entrar como Cliente</button>
            <button class="btn-secondary" id="btn-login-merch-profile" style="background:#074ea6; color:#fff;">Acesso do Comerciante</button>
          </div>
        </section>
      `;
      mainContent
        .querySelector("#btn-login-cust-profile")
        .addEventListener("click", () => openAuthModal("customer"));
      mainContent
        .querySelector("#btn-login-merch-profile")
        .addEventListener("click", () => openAuthModal("merchant"));
      return;
    }

    if (currentUser.type === "merchant") {
      const store =
        stores.find((s) => s.id === currentUser.storeId) || stores[0];
      mainContent.innerHTML = `
        <section class="content-section" style="max-width:600px; margin:0 auto;">
          <div class="section-header">
            <h2>Perfil do Comerciante</h2>
            <button class="btn-secondary" id="btn-logout-profile">Sair da Conta</button>
          </div>
          <div style="display:flex; align-items:center; gap:16px; margin-bottom:20px;">
            <div style="width:64px; height:64px; border-radius:50%; background:#e0f2fe; color:#0369a1; display:grid; place-items:center; font-size:2rem;">🏪</div>
            <div>
              <h3 style="font-size:1.3rem;">${escapeHTML(store.name)}</h3>
              <p class="muted-info" style="margin:0;">Responsável: ${escapeHTML(currentUser.name)}</p>
            </div>
          </div>
          <div style="background:#f8fafc; padding:16px; border-radius:10px; border:1px solid var(--border-light); margin-bottom:20px;">
            <p>📍 <strong>Endereço:</strong> ${escapeHTML(store.address)}</p>
            <p>📞 <strong>WhatsApp:</strong> ${escapeHTML(store.phone)}</p>
            <p>✉️ <strong>E-mail:</strong> ${escapeHTML(currentUser.email)}</p>
          </div>
          <div style="display:flex; gap:10px;">
            <button class="btn-primary" id="btn-goto-merch-panel">Abrir Painel da Loja</button>
            <button class="btn-secondary" id="btn-edit-store-from-profile">Editar Dados</button>
          </div>
        </section>
      `;
      mainContent
        .querySelector("#btn-logout-profile")
        .addEventListener("click", handleLogout);
      mainContent
        .querySelector("#btn-goto-merch-panel")
        .addEventListener("click", () => navigateTo("merchant-dashboard"));
      mainContent
        .querySelector("#btn-edit-store-from-profile")
        .addEventListener("click", openMerchantEditModal);
    } else {
      mainContent.innerHTML = `
        <section class="content-section" style="max-width:600px; margin:0 auto;">
          <div class="section-header">
            <h2>Perfil do Cliente</h2>
            <button class="btn-secondary" id="btn-logout-profile">Sair da Conta</button>
          </div>
          <div style="display:flex; align-items:center; gap:16px; margin-bottom:20px;">
            <div style="width:64px; height:64px; border-radius:50%; background:#dbeafe; color:#074ea6; display:grid; place-items:center; font-size:2rem;">👤</div>
            <div>
              <h3 style="font-size:1.3rem;">${escapeHTML(currentUser.name)}</h3>
              <p class="muted-info" style="margin:0;">Cliente cadastrado</p>
            </div>
          </div>
          <div style="background:#f8fafc; padding:16px; border-radius:10px; border:1px solid var(--border-light); margin-bottom:20px;">
            <p>📞 <strong>Telefone / WhatsApp:</strong> ${escapeHTML(currentUser.phone)}</p>
            <p>✉️ <strong>E-mail:</strong> ${escapeHTML(currentUser.email)}</p>
          </div>
          <button class="btn-primary" id="btn-goto-my-reservations">Ver Minhas Reservas</button>
        </section>
      `;
      mainContent
        .querySelector("#btn-logout-profile")
        .addEventListener("click", handleLogout);
      mainContent
        .querySelector("#btn-goto-my-reservations")
        .addEventListener("click", () => navigateTo("client-reservations"));
    }
  }

  // --------------------------------------------------------------------------
  // 15. WIDGET LATERAL: SUAS ÚLTIMAS RESERVAS (DESKTOP)
  // --------------------------------------------------------------------------
  function renderSideReservationsWidget() {
    if (!sideReservationsList) return;
    const recents = reservations.slice(0, 3);
    if (!recents.length) {
      sideReservationsList.innerHTML = `<p class="muted-info" style="font-size:0.8rem;">Nenhuma reserva recente.</p>`;
      return;
    }

    sideReservationsList.innerHTML = recents
      .map(
        (r) => `
      <div class="side-res-card-item">
        <img src="${r.productImage || products.find((p) => p.id === r.productId)?.image || PRODUCT_PRESETS.album}" alt="${escapeHTML(r.product)}" class="side-res-thumb">
        <div class="side-res-info">
          <div class="side-res-title">${escapeHTML(r.product)}</div>
          <div class="side-res-store">🏪 ${escapeHTML(r.store)}</div>
          <div class="side-res-date">${escapeHTML(r.createdAt || "Hoje")} · ${r.quantity} un.</div>
        </div>
        <span class="pill-disponivel" style="font-size:0.7rem;">${escapeHTML(r.status)}</span>
      </div>
    `,
      )
      .join("");
  }

  function updateSideReservationsBadge() {
    const activeCount = reservations.filter(
      (r) => r.status === "Pendente" || r.status === "Aguardando Retirada",
    ).length;
    if (sideResBadge) {
      sideResBadge.textContent = activeCount;
      sideResBadge.classList.toggle("hidden", activeCount === 0);
    }
  }

  // ==========================================================================
  // CONFIGURAÇÃO DOS EVENTOS GLOBAIS E MODAIS
  // ==========================================================================
  function setupGlobalListeners() {
    // Alternador de Dispositivo: "Modo Celular" <-> "Modo Computador"

    // --- Sino de notificações ---
    const notifBtn = document.getElementById("notifications-btn");
    if (notifBtn) {
      notifBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleNotificationsPanel();
      });
    }

    const markAllReadBtn = document.getElementById("notif-mark-all-read");
    if (markAllReadBtn) {
      markAllReadBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        const all = buildNotifications();
        all.forEach((n) => {
          if (!readNotifications.includes(n.id)) readNotifications.push(n.id);
        });
        saveReadNotifications();
        updateNotificationBadge();
        renderNotificationsPanel();
        showToast("Todas as notificações foram marcadas como lidas.");
      });
    }

    // Fecha o painel ao clicar fora
    document.addEventListener("click", (e) => {
      const panel = document.getElementById("notifications-panel");
      const btn = document.getElementById("notifications-btn");
      if (!panel || !btn) return;
      if (
        !panel.classList.contains("hidden") &&
        !panel.contains(e.target) &&
        !btn.contains(e.target)
      ) {
        closeNotificationsPanel();
      }
    });

    if (deviceToggleBtn) {
      deviceToggleBtn.addEventListener("click", () => {
        isMobileMode = !isMobileMode;
        deviceWrapper.classList.toggle("device-mobile", isMobileMode);
        deviceWrapper.classList.toggle("device-standard", !isMobileMode);

        // Nomes exatos solicitados pelo usuário
        deviceModeLabel.textContent = isMobileMode
          ? "Modo Computador"
          : "Modo Celular";
        showToast(
          isMobileMode
            ? "Visualização no Modo Celular ativada."
            : "Visualização no Modo Computador ativada.",
        );
      });
    }

    // Navegação Sidebar
    document.querySelectorAll(".side-nav-item").forEach((btn) => {
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

    // Busca com Autocomplete
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        const val = e.target.value;
        activeSearchTerm = val;
        clearSearchBtn.classList.toggle("hidden", !val);

        if (val.trim().length >= 2) {
          const matches = products
            .filter(
              (p) =>
                p.name.toLowerCase().includes(val.toLowerCase()) ||
                p.category.toLowerCase().includes(val.toLowerCase()) ||
                p.store.toLowerCase().includes(val.toLowerCase()),
            )
            .slice(0, 5);

          if (matches.length) {
            searchSuggestions.innerHTML = matches
              .map(
                (m) => `
              <div class="suggestion-item" data-id="${m.id}">
                <img src="${m.image}" alt="${escapeHTML(m.name)}" class="suggestion-thumb">
                <div class="suggestion-info">
                  <div class="suggestion-name">${escapeHTML(m.name)}</div>
                  <div class="suggestion-meta">🏪 ${escapeHTML(m.store)} · ${formatMoney(m.price)}</div>
                </div>
                <span class="${m.stock > 0 ? "pill-disponivel" : "pill-esgotado"}">
                  ${m.stock > 0 ? "Disponível" : "Esgotado"}
                </span>
              </div>
            `,
              )
              .join("");
            searchSuggestions.classList.remove("hidden");

            searchSuggestions
              .querySelectorAll(".suggestion-item")
              .forEach((item) => {
                item.addEventListener("click", () => {
                  const id = Number(item.dataset.id);
                  searchSuggestions.classList.add("hidden");
                  openProductDetailModal(id);
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
      if (
        searchSuggestions &&
        !searchSuggestions.contains(e.target) &&
        e.target !== searchInput
      ) {
        searchSuggestions.classList.add("hidden");
      }
    });

    // Modais Close
    const closeCustAuth = document.getElementById("close-customer-auth");
    if (closeCustAuth)
      closeCustAuth.addEventListener("click", () => customerAuthModal.close());

    const closeMerchAuth = document.getElementById("close-merchant-auth");
    if (closeMerchAuth)
      closeMerchAuth.addEventListener("click", () => merchantAuthModal.close());

    const closeMerchEdit = document.getElementById("close-merchant-edit");
    if (closeMerchEdit)
      closeMerchEdit.addEventListener("click", () => merchantEditModal.close());

    const cancelEditStore = document.getElementById("cancel-edit-store");
    if (cancelEditStore)
      cancelEditStore.addEventListener("click", () =>
        merchantEditModal.close(),
      );

    const closeProdDetail = document.getElementById("close-product-detail");
    if (closeProdDetail)
      closeProdDetail.addEventListener("click", () =>
        productDetailModal.close(),
      );

    const closeResForm = document.getElementById("close-reserve-form");
    if (closeResForm)
      closeResForm.addEventListener("click", () => reserveModal.close());

    const cancelResBtn = document.getElementById("cancel-reserve-btn");
    if (cancelResBtn)
      cancelResBtn.addEventListener("click", () => reserveModal.close());

    const closeMap = document.getElementById("close-map-modal");
    if (closeMap) closeMap.addEventListener("click", () => mapModal.close());

    // Reserva Stepper
    const resQtyDec = document.getElementById("reserve-qty-dec");
    const resQtyInc = document.getElementById("reserve-qty-inc");
    const resQtyInput = document.getElementById("reserve-qty-input");

    if (resQtyDec) {
      resQtyDec.addEventListener("click", () => {
        let val = parseInt(resQtyInput.value, 10) || 1;
        if (val > 1) {
          resQtyInput.value = val - 1;
          updateReserveFormSummary();
        }
      });
    }

    if (resQtyInc) {
      resQtyInc.addEventListener("click", () => {
        let val = parseInt(resQtyInput.value, 10) || 1;
        const max = selectedProductForReserve
          ? selectedProductForReserve.stock
          : 99;
        if (val < max) {
          resQtyInput.value = val + 1;
          updateReserveFormSummary();
        } else {
          showToast(`Limite em estoque: ${max} un.`);
        }
      });
    }

    // Confirmação de Reserva
    const reserveForm = document.getElementById("reserve-submit-form");
    if (reserveForm) {
      reserveForm.addEventListener("submit", (e) => {
        e.preventDefault();
        if (!selectedProductForReserve) return;

        const custName = document
          .getElementById("reserve-customer-name")
          .value.trim();
        const custPhone = document
          .getElementById("reserve-customer-phone")
          .value.trim();
        const qty = parseInt(resQtyInput.value, 10) || 1;

        if (qty > selectedProductForReserve.stock) {
          showToast("A quantidade solicitada supera o estoque.");
          return;
        }

        selectedProductForReserve.stock -= qty;

        // Gera código de voucher: #4587
        const voucherCode = `#${Math.floor(1000 + Math.random() * 9000)}`;
        const pickupDate = new Date();
        pickupDate.setDate(pickupDate.getDate() + 3);

        const deadline = formatDateBR(pickupDate);
        const totalPrice = qty * selectedProductForReserve.price;

        const newReservation = {
          code: voucherCode,
          customerId: currentUser.id,
          product: selectedProductForReserve.name,
          productId: selectedProductForReserve.id,
          productImage: selectedProductForReserve.image,
          storeId: selectedProductForReserve.storeId,
          store: selectedProductForReserve.store,
          customerName: custName,
          customerPhone: custPhone,
          quantity: qty,
          unitPrice: selectedProductForReserve.price,
          totalPrice,
          status: "Pendente",
          deadline,
          createdAt: formatDateTimeBR(new Date()),
        };

        reservations.unshift(newReservation);
        saveStorage();

        reserveModal.close();

        // Tela de Sucesso (Esboço Celular Tela 3)
        document.getElementById("success-product-title").textContent =
          "Reserva realizada!";
        document.getElementById("success-store-info").textContent =
          `Seu item foi reservado na ${selectedProductForReserve.store}.`;
        document.getElementById("success-voucher-code").textContent =
          voucherCode;
        document.getElementById("success-voucher-deadline").textContent =
          `Retire até: ${deadline}`;

        const wppMsg = `Olá, ${selectedProductForReserve.store}! Fiz a reserva ${voucherCode} do produto "${selectedProductForReserve.name}" pelo Tem Aí? Tem Aqui! e gostaria de confirmar a retirada.`;
        document.getElementById("success-whatsapp-link").href =
          `https://wa.me/5511987654321?text=${encodeURIComponent(wppMsg)}`;

        reserveSuccessModal.showModal();
        renderSideReservationsWidget();
        renderCurrentView();
        refreshNotificationsUI();
        showToast(`Reserva ${voucherCode} realizada com sucesso!`);
      });
    }

    const successHomeBtn = document.getElementById("success-home-btn");
    if (successHomeBtn) {
      successHomeBtn.addEventListener("click", () => {
        reserveSuccessModal.close();
        navigateTo("client-reservations");
      });
    }

    // Mapa Full
    const btnOpenFullMap = document.getElementById("btn-open-full-map");
    if (btnOpenFullMap)
      btnOpenFullMap.addEventListener("click", () => openMapModalWithStore(""));

    const btnSideViewAllRes = document.getElementById("btn-side-view-all-res");
    if (btnSideViewAllRes)
      btnSideViewAllRes.addEventListener("click", () =>
        navigateTo("client-reservations"),
      );
  }

  // ==========================================================================
  // CONFIGURAÇÃO DOS FORMULÁRIOS DE AUTH (LOGIN / CADASTRO)
  // ==========================================================================
  function setupAuthListeners() {
    // Tabs de Autenticação Cliente
    const tabCustLogin = document.getElementById("tab-cust-login");
    const tabCustReg = document.getElementById("tab-cust-register");
    const formCustLogin = document.getElementById("form-cust-login");
    const formCustReg = document.getElementById("form-cust-register");

    if (tabCustLogin && tabCustReg) {
      tabCustLogin.addEventListener("click", () => {
        tabCustLogin.classList.add("active");
        tabCustReg.classList.remove("active");
        formCustLogin.classList.add("active");
        formCustReg.classList.remove("active");
      });
      tabCustReg.addEventListener("click", () => {
        tabCustReg.classList.add("active");
        tabCustLogin.classList.remove("active");
        formCustReg.classList.add("active");
        formCustLogin.classList.remove("active");
      });
    }

    // Tabs de Autenticação Comerciante
    const tabMerchLogin = document.getElementById("tab-merch-login");
    const tabMerchReg = document.getElementById("tab-merch-register");
    const formMerchLogin = document.getElementById("form-merch-login");
    const formMerchReg = document.getElementById("form-merch-register");

    if (tabMerchLogin && tabMerchReg) {
      tabMerchLogin.addEventListener("click", () => {
        tabMerchLogin.classList.add("active");
        tabMerchReg.classList.remove("active");
        formMerchLogin.classList.add("active");
        formMerchReg.classList.remove("active");
      });
      tabMerchReg.addEventListener("click", () => {
        tabMerchReg.classList.add("active");
        tabMerchLogin.classList.remove("active");
        formMerchReg.classList.add("active");
        formMerchLogin.classList.remove("active");
      });
    }

    // Botão de Login Rápido (Cliente Demonstração)
    const btnQuickCust = document.getElementById("btn-quick-customer");
    if (btnQuickCust) {
      btnQuickCust.addEventListener("click", () => {
        currentUser = {
          id: "usr-cliente",
          type: "customer",
          name: "Maria da Silva",
          email: "cliente@exemplo.com",
          phone: "(11) 98765-1122",
        };
        saveStorage();
        customerAuthModal.close();
        updateUserSessionUI();
        showToast("Você entrou como Cliente (Maria da Silva).");
        renderCurrentView();
      });
    }

    // Botão de Login Rápido (Banca Bueno)
    const btnQuickMerch = document.getElementById("btn-quick-merchant");
    if (btnQuickMerch) {
      btnQuickMerch.addEventListener("click", () => {
        currentUser = {
          id: "usr-renato",
          type: "merchant",
          name: "Renato Bueno",
          storeName: "Banca Bueno",
          storeId: "banca-bueno",
          email: "banca@exemplo.com",
          phone: "(11) 98256-5530",
        };
        saveStorage();
        merchantAuthModal.close();
        updateUserSessionUI();
        showToast("Modo Comerciante ativado: Banca Bueno.");
        navigateTo("merchant-dashboard");
      });
    }

    // Envio Login Cliente
    if (formCustLogin) {
      formCustLogin.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("cust-login-email").value.trim();
        currentUser = {
          id: "usr-" + Date.now(),
          type: "customer",
          name: email.split("@")[0] || "Cliente",
          email: email,
          phone: "(11) 99999-8888",
        };
        saveStorage();
        customerAuthModal.close();
        updateUserSessionUI();
        showToast(`Bem-vindo, ${currentUser.name}!`);
        renderCurrentView();
      });
    }

    // Envio Cadastro Cliente
    if (formCustReg) {
      formCustReg.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("cust-reg-name").value.trim();
        const email = document.getElementById("cust-reg-email").value.trim();
        const phone = document.getElementById("cust-reg-phone").value.trim();

        currentUser = {
          id: "usr-" + Date.now(),
          type: "customer",
          name,
          email,
          phone,
        };
        users.push(currentUser);
        saveStorage();
        customerAuthModal.close();
        updateUserSessionUI();
        showToast(`Conta de cliente criada com sucesso!`);
        renderCurrentView();
      });
    }

    // Envio Login Comerciante
    if (formMerchLogin) {
      formMerchLogin.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("merch-login-email").value.trim();
        const store = stores.find((store) => store.email === email);

        if (!store) {
          showToast("Usuário não Encontrado");
        }

        currentUser = {
          id: "usr-" + Date.now(),
          type: "merchant",
          name: "Lojista",
          email: email,
          ...{ storeName: store.name, storeId: store.id, ...store },
        };

        saveStorage();
        merchantAuthModal.close();
        updateUserSessionUI();
        showToast(`Bem-vindo à gestão da ${store.name}!`);
        navigateTo("merchant-dashboard");
      });
    }

    // Envio Cadastro Novo Comércio (com Endereço Real para Referência no Mapa)
    if (formMerchReg) {
      formMerchReg.addEventListener("submit", (e) => {
        e.preventDefault();
        const storeName = document
          .getElementById("merch-reg-store-name")
          .value.trim();
        const category = document.getElementById("merch-reg-category").value;
        const phone = document.getElementById("merch-reg-phone").value.trim();
        const address = document
          .getElementById("merch-reg-address")
          .value.trim();
        const cep = document.getElementById("merch-reg-cep").value.trim();
        const number = document.getElementById("merch-reg-number").value.trim();
        const complement = document
          .getElementById("merch-reg-complement")
          .value.trim();
        const email = document.getElementById("merch-reg-email").value.trim();

        const newStoreId = "store-" + Date.now();
        const newStore = {
          id: newStoreId,
          name: storeName,
          category,
          distance: "800 m",
          address,
          cep,
          number,
          complement,
          phone,
          icon: category.includes("Banca")
            ? "🏪"
            : category.includes("Papelaria")
              ? "✏️"
              : "📚",
          thumb: PRODUCT_PRESETS.album,
          status: "Aberta",
          email,
          realCoordinates: "Endereço cadastrado",
        };

        stores.push(newStore);

        currentUser = {
          id: "usr-" + Date.now(),
          type: "merchant",
          name: "Responsável",
          storeName: storeName,
          storeId: newStoreId,
          email,
          phone,
          address,
          cep,
          number,
          complement,
        };
        users.push(currentUser);
        saveStorage();

        merchantAuthModal.close();
        updateUserSessionUI();
        showToast(`Parabéns! ${storeName} cadastrada e referenciada no mapa.`);
        navigateTo("merchant-dashboard");
      });
    }

    // Formulário de Edição dos Dados do Comércio
    const formMerchEdit = document.getElementById("form-merch-edit");
    if (formMerchEdit) {
      formMerchEdit.addEventListener("submit", (e) => {
        e.preventDefault();
        if (!currentUser || currentUser.type !== "merchant") return;
        const store = stores.find((s) => s.id === currentUser.storeId);
        if (store) {
          const newName = document
            .getElementById("edit-store-name")
            .value.trim();
          const newCat = document.getElementById("edit-store-category").value;
          const newPhone = document
            .getElementById("edit-store-phone")
            .value.trim();
          const newAddr = document
            .getElementById("edit-store-address")
            .value.trim();

          store.name = newName;
          store.category = newCat;
          store.phone = newPhone;
          store.address = newAddr;
          currentUser.storeName = newName;

          // Atualiza também nos produtos dessa loja
          products.forEach((p) => {
            if (p.storeId === store.id) p.store = newName;
          });

          saveStorage();
          merchantEditModal.close();
          updateUserSessionUI();
          renderMerchantDashboard();
          showToast(
            `Dados da loja e endereço no mapa atualizados com sucesso!`,
          );
        }
      });
    }
  }

  // Executa ao carregar
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

async function consultaCep(value) {
  const numbers = value.replace("-", "");
  if (numbers.length != 8) return;
  const url = new URL(`https://viacep.com.br/ws/${numbers}/json/`);
  const request = await fetch(url);
  const response = await request.json();
  const addrImput = document.getElementById("merch-reg-address");
  const { logradouro, bairro, localidade, uf } = response;
  addrImput.value = `${logradouro} - ${bairro} - ${localidade}/${uf}`;
}
