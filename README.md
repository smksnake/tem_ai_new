# 🏪 Tem Aí? Tem Aqui! — Plataforma Web de Consulta e Reserva Local

> **Projeto Integrador II — Engenharia da Computação**  
> **Universidade Virtual do Estado de São Paulo (UNIVESP)**  
> **Polo:** CEU Heliópolis | **Ano:** 2026  

---

## 📌 Sobre o Projeto

O **"Tem Aí? Tem Aqui!"** é uma plataforma web responsiva desenvolvida como solução tecnológica para promover a **inclusão digital de pequenos comerciantes tradicionais** e otimizar a experiência de compra em comércios de bairro.

O projeto toma como estudo de caso real a **Banca Bueno** (propriedade do **Sr. Renato Bueno**), um comércio tradicional com 40 anos de atuação na comunidade de **Heliópolis (São Paulo - SP)**.

### ❓ O Problema
Muitos pequenos comerciantes experientes possuem baixa fluência digital, operando via controle 100% manual. Em períodos de pico de demanda por produtos específicos (como álbuns de figurinhas, jornais ou lançamentos), clientes frequentemente realizam deslocamentos desnecessários até o estabelecimento sem saber se o produto está disponível. Sistemas comerciais de Ponto de Venda (PDV) tradicionais costumam ser complexos, intimidadores e caros para essa realidade.

### 💡 A Solução
Uma aplicação web leve, inclusiva e minimalista baseada em duas visões unificadas:
1. **Visão do Consumidor:** Permite consultar a disponibilidade em tempo real, verificar a distância do comércio, realizar reservas com geração de voucher (`#4587`) e abrir canal direto de comunicação via WhatsApp.
2. **Visão do Comerciante (Lojista):** Interface focada em acessibilidade e IHC (Interação Humano-Computador), com botões grandes, contraste adaptado e controle de estoque simplificado via seletores `+` e `−`, reduzindo o tempo de atualização para poucos segundos.

---

## 🚀 Demonstração Online

🔗 **Acesse o sistema no ar (GitHub Pages):** [https://seu-usuario.github.io/tem-ai-tem-aqui/](https://seu-usuario.github.io/tem-ai-tem-aqui/)  
*(Substitua `seu-usuario` pelo seu nome de usuário no GitHub)*

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

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído inteiramente com tecnologias web nativas (**Vanilla JS**), priorizando performance, portabilidade e facilidade de execução em qualquer navegador sem necessidade de instalação de dependências ou servidores backend:

- **HTML5:** Estruturação semântica e acessível (Diretrizes W3C/WCAG).
- **CSS3:** Design System responsivo baseado em CSS Variables, Flexbox, CSS Grid e simulação de modos Desktop/Mobile.
- **JavaScript (ES6+):** Lógica de estado global, manipuladores de eventos e persistência local.
- **HTML5 Canvas API:** Otimização e compressão automática de imagens Base64 no upload.
- **Web Storage API (`localStorage`):** Persistência completa de dados (usuários, lojas, produtos e reservas).

---

## 📁 Como Executar o Projeto Localmente

1. Clone este repositório ou faça o download dos arquivos:
   ```bash
   git clone [https://github.com/seu-usuario/tem-ai-tem-aqui.git](https://github.com/seu-usuario/tem-ai-tem-aqui.git)


2.Abra a pasta do projeto.

3. Dê um duplo clique no arquivo index.html para abrir diretamente no seu navegador de preferência (Chrome, Edge, Firefox, Safari).

**🧪 Dados para Testes Rápidos**
Como Cliente: Clique em "Entrar" ➔ "Entrar como Cliente Demonstração".

Como Comerciante: Clique em "Sou Comerciante" ➔ "Entrar como Banca Bueno".

**👨‍🎓 Equipe e Autoria**
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

**📄 Licença e Agradecimentos
Trabalho desenvolvido estritamente para fins acadêmicos na disciplina de Projeto Integrador II. Agradecimento especial ao Sr. Renato Bueno e à comunidade de Heliópolis pela cooperação, entrevistas e acolhimento durante a fase de levantamento de requisitos. **
