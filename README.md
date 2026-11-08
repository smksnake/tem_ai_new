# 🏪 Tem Aí? Tem Aqui! — Plataforma Web de Consulta e Reserva Local

> **Projeto Integrador II — Engenharia da Computação**  
> **Universidade Virtual do Estado de São Paulo (UNIVESP)**  
> **Polo:** CEU Heliópolis | **Ano:** 2026  

---

## 📌 Sobre o Projeto

O **"Tem Aí? Tem Aqui!"** é uma plataforma web responsiva desenvolvida como solução tecnológica para promover a **inclusão digital de pequenos comerciantes tradicionais** e otimizar a experiência de compra em comércios de bairro.

O projeto toma como estudo de caso real a **Banca Bueno** (propriedade do **Sr. Renato Bueno**), um comércio tradicional com 40 anos de atuação na comunidade de **Heliópolis (São Paulo - SP)**.

### ❓ O Problema

Muitos pequenos comerciantes experientes possuem baixa fluência digital e operam com controle 100% manual. Em períodos de pico de demanda por produtos específicos (como álbuns de figurinhas, jornais ou lançamentos), clientes frequentemente realizam deslocamentos desnecessários até o estabelecimento sem saber se o produto está disponível. Sistemas comerciais de Ponto de Venda (PDV) tradicionais costumam ser complexos, intimidadores e caros para essa realidade.

### 💡 A Solução

Uma aplicação web leve, inclusiva e minimalista baseada em duas visões unificadas:

1. **Visão do Consumidor:** Permite consultar a disponibilidade em tempo real, verificar a distância do comércio, realizar reservas com geração de voucher (`#4587`) e abrir canal direto de comunicação via WhatsApp.
2. **Visão do Comerciante (Lojista):** Interface focada em acessibilidade e IHC (Interação Humano-Computador), com botões grandes, contraste adaptado e controle de estoque simplificado via seletores `+` e `−`, reduzindo o tempo de atualização para poucos segundos.

---

## 🚀 Demonstração Online

🔗 **Acesse o sistema no ar (GitHub Pages):** [https://github.com/smksnake/tem_ai_new](https://github.com/smksnake/tem_ai_new)

> **Nota:** Se o link acima não abrir, verifique se o GitHub Pages está ativado em **Settings ➔ Pages** no repositório.

---

## ✨ Principais Funcionalidades

### 📱 Visão do Cliente

- 🔍 **Busca e Categorias:** Filtros rápidos (*Figurinhas, Livros e Revistas, Papelaria, Games*) e busca em tempo real com autocomplete.
- 📍 **Localização e Mapa:** Mini-mapa interativo com referência a endereços reais dos comércios de Heliópolis.
- 🎟️ **Reserva Garantida:** Proteção com login de cliente, seleção de quantidade e geração imediata de voucher para retirada presencial no balcão.
- 💬 **Integração WhatsApp:** Link direto configurado com o número real do comércio e mensagem pré-formatada.

### ⚙️ Modo Comerciante (Painel de Gestão)

- ➕ **Cadastro Ágil de Produtos:** Upload de fotos com compressão automática em Canvas para economizar armazenamento local.
- 📦 **Ajuste Rápido de Estoque:** Botões diretos `+` e `−` para alteração de saldo sem necessidade de digitar números.
- 📋 **Gestão de Vouchers:** Abas organizadas (*Todas*, *A retirar*, *Retiradas*) com confirmação de entrega em um toque.
- ✏️ **Edição do Estabelecimento:** Manutenção de nome, categoria, telefone e endereço real referenciado no mapa.
- 🏠 **Busca de CEP Automática:** Integração com a API ViaCEP para preenchimento automático de endereço no cadastro de novos comércios.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído inteiramente com tecnologias web nativas (**Vanilla JS**), priorizando performance, portabilidade e facilidade de execução em qualquer navegador sem necessidade de instalação de dependências ou servidores backend:

- **HTML5:** Estruturação semântica e acessível (Diretrizes W3C/WCAG).
- **CSS3:** Design System responsivo baseado em CSS Variables, Flexbox, CSS Grid e simulação de modos Desktop/Mobile.
- **JavaScript (ES6+):** Lógica de estado global, manipuladores de eventos e persistência local.
- **HTML5 Canvas API:** Otimização e compressão automática de imagens Base64 no upload.
- **Web Storage API (`localStorage`):** Persistência completa de dados (usuários, lojas, produtos e reservas).
- **ViaCEP API:** Consulta externa para autocompletar endereços a partir do CEP.

---

## 📁 Como Executar o Projeto Localmente

1. Clone este repositório ou faça o download dos arquivos:

   ```bash
   git clone https://github.com/smksnake/tem_ai_new.git

2. Abra a pasta do projeto.

3. Dê um duplo clique no arquivo index.html para abrir diretamente no seu navegador de preferência (Chrome, Edge, Firefox, Safari).

🧪 Dados para Testes Rápidos
Como Cliente: Clique em "Entrar" ➔ "Entrar como Cliente Demonstração".

Como Comerciante: Clique em "Sou Comerciante" ➔ "Entrar como Banca Bueno".

## ♿ Acessibilidade e IHC
Um dos diferenciais do projeto é o foco em Interação Humano-Computador para um público com baixa fluência digital:

Botões grandes e áreas de toque ampliadas no Modo Comerciante.

Contraste adaptado entre texto e fundo, seguindo as diretrizes WCAG.

Uso de <dialog> semântico em vez de divs para modais.

aria-label, role="search" e aria-live no toast de feedback e nos modais.

prefers-reduced-motion respeitado no CSS para usuários sensíveis a animações.

Steppers +/− para reduzir a necessidade de digitação.

### 🔬 Auditoria Lighthouse

O projeto foi auditado com **Google Lighthouse** (Chrome DevTools) na versão desktop. Os resultados completos estão em [`lighthouse-report.html`](./lighthouse-report.html).

| Categoria | Score |
|---|---|
| **Performance** | 95 |
| **Acessibilidade** | 94 |
| **Boas Práticas** | 100 |
| **SEO** | 100 |

> Os scores validam a preocupação do projeto com **performance, acessibilidade e inclusão digital**. O score perfeito em Boas Práticas indica código seguro e sem vulnerabilidades comuns. O score em SEO garante que a plataforma é indexável em motores de busca.

## 🧪 Limitações e Trabalhos Futuros
Este é um projeto acadêmico com escopo intencionalmente limitado. A ausência de backend foi uma decisão de escopo, não uma falha — ela permite que a solução rode em qualquer navegador sem instalação, o que é alinhado ao público-alvo (comerciantes com baixa fluência digital e sem infraestrutura técnica).

Limitações atuais (conscientes)
Sem backend (decisão de escopo): todos os dados ficam no localStorage do navegador. Isso significa:

dados não sincronizam entre dispositivos;

limpar o cache do site apaga tudo;

há um limite de armazenamento (~5 MB) que pode ser atingido com muitas imagens.

Impacto na segurança: não há autenticação real. Em produção, seria necessário hash de senha (bcrypt), JWT e HTTPS.

Autenticação simplificada: os formulários de login não validam senha (é uma simulação para demonstração). Não use senhas reais no teste.

Sem suporte offline: a aplicação precisa de internet apenas para o Google Fonts e para a API do ViaCEP. Fora isso, roda offline.

Mapa é uma representação visual, não integração real com Google Maps ou OpenStreetMap.

Trabalhos futuros (em ordem de prioridade)
Backend real (Node.js + Express, Firebase ou Supabase) para persistência multi-dispositivo.

Autenticação segura com hash de senha (bcrypt) e sessão via JWT.

PWA (Progressive Web App): adicionar manifest.json e service worker para instalação e uso offline.

Integração com mapas reais (Google Maps API ou Leaflet + OpenStreetMap).

Testes automatizados com Jest ou Vitest.

## 👨‍🎓 Equipe e Autoria
Universidade Virtual do Estado de São Paulo (UNIVESP)
Curso: Engenharia da Computação
Tutor / Orientador: Yeison David Correa Cuellar

Integrantes do Grupo:

ANTONELLO, Eraldo de Souza (Aluno Responsável)

BATINGA, Rafael de Melo

FEITOSA, Nayron Kelson Leite

GONCALVES, Elisabeth dos Santos

LIMA, Emerson da Silva

NOGUEIRA, Ellen

PEREIRA, Pedro Henrique da Silva

SOUSA, Emerson Aparecido de

📄 Licença e Agradecimentos
Trabalho desenvolvido estritamente para fins acadêmicos na disciplina de Projeto Integrador II.

Agradecimento especial ao Sr. Renato Bueno e à comunidade de Heliópolis pela cooperação, entrevistas e acolhimento durante a fase de levantamento de requisitos.
