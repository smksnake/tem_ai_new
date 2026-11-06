# Tem Aí? Tem Aqui! — Plataforma Web de Inclusão Digital e Gestão Simplificada para Pequenos Comerciantes

> **Projeto Integrador II — UNIVESP (Universidade Virtual do Estado de São Paulo)**  
> **Curso:** Engenharia da Computação  
> **Polo:** CEU Heliópolis  
> **Tutor:** Yeison David Correa Cuellar  
> **Estudo de Caso:** Banca Bueno (Sr. Renato) — Comércio tradicional com aproximadamente 40 anos de história  

---

## 🎯 Sobre o Projeto

O **"Tem Aí? Tem Aqui!"** é um protótipo de software web desenvolvido para solucionar a dor dos picos de demanda em pequenos comércios de bairro (como lançamentos de álbuns de figurinhas da Copa do Mundo, revistas e jornais), evitando deslocamentos desnecessários e frustração dos clientes.

O grande diferencial de engenharia da solução reside na **inclusão digital**: combater a barreira tecnológica que afeta comerciantes mais velhos (como o Sr. Renato). A interface do lojista foi projetada com base nos princípios de **Interação Humano-Computador (IHC) e Usabilidade (CYBIS, BETIOL e FAUST, 2010)**, substituindo telas burocráticas de PDV/ERP por botões de toque amplo, alto contraste e fluxos executados em **no máximo três cliques**.

---

## 📱 Funcionalidades Implementadas

### 1. Visão do Cliente (Desktop e Mobile — Figuras 1 e 2 do Relatório Parcial)
- **Catálogo de Alta Demanda:** Consulta em tempo real de produtos da Banca Bueno e parceiros (Papelaria da Praça, Livraria do Bairro).
- **Busca Inteligente com Autocompletar:** Localização instantânea por nome, categoria ou loja.
- **Filtro Rápido por Categorias:** Figurinhas, Livros e Revistas, Lançamentos, Papelaria, Colecionáveis.
- **Sinalizador de Disponibilidade:** Indicação imediata de status (*"Disponível · 15 un."* ou *"Esgotado"*).
- **Mapa do Bairro Integrado:** Mini-mapa lateral e mapa interativo ampliado de Heliópolis com distâncias aproximadas (300m, 750m, 1.2km).
- **Fluxo de Reserva Garantida:**
  - Tela detalhada do produto.
  - Seleção de quantidade com ajuste de valor estimado.
  - **Geração de Voucher Destacado (ex.: `#4587`):** Código de 4 dígitos para retirada rápida na banca sem filas.
  - **Integração com WhatsApp:** Botão direto com mensagem pré-formatada pronta para envio ao comerciante.
  - **Área Minhas Reservas:** Separação entre reservas ativas e histórico, com opção de cancelamento (estornando o estoque).

### 2. Visão do Comerciante (Sr. Renato — IHC & Baixa Fluência Digital — Figura 2)
- **Painel Acessível com 4 Grandes Botões de Ação Direta:**
  1. ➕ **Cadastrar Produto ou Disponibilidade:** Formulário simplificado em poucos segundos.
  2. 📦 **Meus Produtos e Estoque Rápido:** Controle com botões gigantes `+` e `−` (1 clique para atualizar).
  3. 📋 **Reservas Recebidas:** Lista de vouchers para confirmação de entrega presencial.
  4. 📊 **Estatísticas da Banca:** Métricas humanas (itens mais procurados pelos vizinhos).
- **Baixa e Reposição em 1 Toque:** Possibilidade de zerar o estoque ou adicionar unidades instantaneamente.
- **Comunicação Direta com o Cliente:** Envio de mensagem pelo WhatsApp para avisar sobre a retirada.

### 3. Recursos Acadêmicos & Demonstração (UNIVESP)
- **Barra Superior de Controle Acadêmico:**
  - 🔄 **Alternar Modo:** Troca imediata entre a visão do cliente e a visão do Sr. Renato.
  - 📱 **Simulador de Celular:** Transforma a interface na moldura de um smartphone na própria tela do navegador, facilitando a gravação do vídeo de apresentação (Quinzena 6).
  - 🔄 **Restaurar Dados:** Restaura o estado inicial de demonstração caso você faça testes de cancelamento ou edição.

---

## 🚀 Como Executar

O projeto foi construído com tecnologias web puras (**HTML5 semântico, CSS3 moderno e JavaScript ES6+**), sem a necessidade de instalar Node.js, compiladores ou servidores complexos.

1. **Abra o arquivo `index.html` em qualquer navegador moderno** (Google Chrome, Microsoft Edge, Firefox, Safari):
   - Basta dar um duplo clique em `index.html`, ou
   - Clicar com o botão direito e escolher *"Abrir com > Google Chrome"*.
2. Caso use o **Visual Studio Code**, você pode instalar a extensão **Live Server** e clicar em *"Go Live"*.

---

## 🎬 Roteiro Sugerido para o Vídeo de Apresentação (Quinzena 6)

1. **Abertura (30s):** Apresentação do grupo, polo Heliópolis e o tema: inclusão digital de pequenos comércios e o estudo de caso da Banca Bueno.
2. **Visão do Cliente (1m):**
   - Mostrar a tela inicial e buscar por *"Álbum"*.
   - Clicar no produto *"Álbum de Figurinhas Copa 2026"*.
   - Fazer uma reserva e mostrar a geração do **código `#4587`** e o botão do WhatsApp.
3. **Visão do Comerciante (1m30s):**
   - Clicar em *"Ver Modo Comerciante (Sr. Renato)"*.
   - Destacar os botões grandes e o alto contraste pensados para idosos (IHC).
   - Ajustar o estoque do Álbum usando os botões `+` e `−`.
   - Abrir as *"Reservas Recebidas"*, localizar a reserva recém-feita e clicar em *"Confirmar Entrega ao Cliente"*.
4. **Fechamento (30s):** Ressaltar o impacto social da digitalização acessível e o cumprimento do plano de ação do PI II.

---

## 📚 Referências Bibliográficas

- **CYBIS, W. A.; BETIOL, A. H.; FAUST, R.** *Ergonomia e Usabilidade: Conhecimentos, Métodos e Aplicações*. 2. ed. São Paulo: Novatec Editora, 2010.
- **SEBRAE.** *Transformação Digital para Micro e Pequenas Empresas*. Serviço Brasileiro de Apoio às Micro e Pequenas Empresas. Brasília: SEBRAE, 2021.
