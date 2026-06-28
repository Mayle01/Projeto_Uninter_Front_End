# PROJETO MULTIDISCIPLINAR — TRILHA FRONT-END

## Rede "Raízes do Nordeste" — Sistema de Pedidos e Gestão

---

**Curso:** Análise e Desenvolvimento de Sistemas / Engenharia de Software  
**Disciplina:** Projeto Multidisciplinar  
**Aluno(a):** [INSERIR NOME COMPLETO]  
**RU:** [INSERIR RU]  
**Polo de Apoio:** [INSERIR POLO]  
**Semestre:** 2026/1  
**Professor(a):** Giuliano Lanes de Almeida, Luciane Yanase Hibara Kanashiro, Rodrigo da Silva do Nascimento, Winston Sen Lun Fung  
**Trilha Escolhida:** **Front-End**

---

## SUMÁRIO

1. Introdução
2. Análise e Requisitos
   - 2.1 Requisitos Funcionais
   - 2.2 Requisitos Não Funcionais
3. Modelagem e Arquitetura
   - 3.1 Arquitetura da Solução Front-End
   - 3.2 Diagrama de Navegação
   - 3.3 Estrutura de Componentes
   - 3.4 Design System
   - 3.5 Protótipos e Telas
4. Entrega Técnica
   - 4.1 Tecnologias Utilizadas
   - 4.2 Justificativa das Decisões Técnicas
   - 4.3 Descrição das Telas
   - 4.4 Design Responsivo
   - 4.5 Conformidade LGPD
   - 4.6 Links de Acesso
5. Plano de Testes e Evidências
   - 5.1 Estratégia de Testes
   - 5.2 Cenários de Teste
   - 5.3 Testes Não Funcionais
   - 5.4 Evidências
6. Conclusão
7. Referências

---

## 1. INTRODUÇÃO

O presente trabalho integra os conhecimentos adquiridos ao longo do curso por meio da análise, modelagem e desenvolvimento de uma solução front-end para o sistema da Rede Raízes do Nordeste — uma franquia de lanchonetes nordestinas em expansão por todo o Brasil.

### Contexto

A Raízes do Nordeste é uma rede de lanchonetes que nasceu em Recife, PE, como um pequeno negócio familiar e cresceu para mais de 25 unidades espalhadas por capitais e cidades do interior. A rede se diferencia pela culinária nordestina autêntica: tapiocas, cuscuz, bolos de macaxeira, sucos regionais e cafés da manhã completos.

### Problema

Com o crescimento acelerado, a empresa necessita de um sistema digital integrado que permita aos clientes realizarem pedidos por múltiplos canais (aplicativo, totem, balcão e pick-up), acompanharem seus pedidos em tempo real, e participarem de um programa de fidelização — tudo em conformidade com a LGPD. Simultaneamente, a matriz precisa de painéis administrativos para monitorar vendas, estoque e operações de todas as unidades.

### Objetivo do Projeto

Desenvolver as interfaces front-end completas do sistema, cobrindo:
- **Jornada do cliente:** desde a seleção de unidade até o acompanhamento do pedido
- **Programa de fidelização:** acúmulo de pontos e resgate de recompensas
- **Gestão administrativa:** dashboards para a matriz e gerentes de unidade
- **Conformidade LGPD:** consentimento explícito em todas as etapas

### Principais Usuários

| Perfil | Descrição |
|--------|-----------|
| **Cliente** | Pessoa que realiza pedidos pela plataforma, seja pelo app, totem ou balcão |
| **Gerente de Unidade** | Responsável pela operação diária: estoque, equipe e metas |
| **Administrador (Matriz)** | Dona Francisca e equipe — visão consolidada de vendas, auditoria e estratégia |

### Relevância

O sistema aborda desafios reais de negócio: multicanalidade, variações regionais de cardápio, sazonalidade de produtos, alta disponibilidade em horários de pico, integração com gateways de pagamento desacoplados e conformidade legal com a LGPD.

---

## 2. ANÁLISE E REQUISITOS

### 2.1 Requisitos Funcionais

| ID | Requisito Funcional | Prioridade | Tela Relacionada |
|----|---------------------|-----------|-----------------|
| RF01 | O sistema deve permitir que o cliente selecione a unidade desejada para visualizar o cardápio correspondente | Alta | Landing Page |
| RF02 | O sistema deve exibir o cardápio da unidade com categorias, filtros e busca por nome | Alta | Cardápio |
| RF03 | O sistema deve permitir filtrar produtos sazonais (período junino) | Média | Cardápio |
| RF04 | O sistema deve permitir adicionar produtos ao carrinho com controle de quantidade | Alta | Cardápio / Carrinho |
| RF05 | O sistema deve exibir o resumo do pedido com subtotal, taxa e total | Alta | Carrinho |
| RF06 | O sistema deve permitir selecionar o canal de retirada (pick-up, balcão, totem, app) | Alta | Carrinho |
| RF07 | O sistema deve simular o fluxo de pagamento desacoplado com gateway externo | Alta | Checkout |
| RF08 | O sistema deve solicitar consentimento LGPD antes de processar dados pessoais | Alta | Checkout / Login |
| RF09 | O sistema deve exibir o status do pedido em tempo real (Recebido → Preparando → Pronto → Entregue) | Alta | Acompanhamento |
| RF10 | O sistema deve permitir cadastro e login de clientes | Alta | Login |
| RF11 | O sistema deve exibir pontos acumulados, nível do cliente e recompensas disponíveis | Média | Fidelidade |
| RF12 | O sistema deve permitir resgate de recompensas com base nos pontos | Média | Fidelidade |
| RF13 | O dashboard administrativo deve exibir faturamento por unidade/região | Alta | Admin |
| RF14 | O dashboard deve exibir gráficos de vendas e distribuição por canal | Alta | Admin |
| RF15 | O sistema deve registrar e exibir logs de auditoria (cancelamentos, descontos, ajustes) | Alta | Admin |
| RF16 | O painel do gerente deve exibir o estoque local com alertas de nível baixo | Alta | Gerente |
| RF17 | O painel do gerente deve exibir a equipe do dia com status de presença | Média | Gerente |
| RF18 | O painel do gerente deve exibir metas e indicadores de desempenho da unidade | Média | Gerente |
| RF19 | O sistema deve validar formulários com feedback visual de erros | Média | Login / Checkout |
| RF20 | O sistema deve formatar automaticamente campos de CPF, telefone e cartão | Baixa | Login / Checkout |

### 2.2 Requisitos Não Funcionais

| ID | Requisito Não Funcional | Categoria | Como foi Atendido |
|----|------------------------|-----------|-------------------|
| RNF01 | O sistema deve ser responsivo para desktop, tablet e mobile | Usabilidade | CSS media queries em 4 breakpoints (480px, 768px, 1024px, 1400px) |
| RNF02 | As páginas devem carregar em menos de 3 segundos em conexões 3G | Desempenho | Imagens com lazy loading, CSS otimizado, JS sem frameworks pesados |
| RNF03 | O design deve seguir padrões de acessibilidade (contraste, semântica) | Acessibilidade | HTML5 semântico, alt em imagens, contraste mínimo 4.5:1 |
| RNF04 | O sistema deve funcionar nos navegadores Chrome, Firefox, Safari e Edge | Compatibilidade | CSS padrão com prefixos -webkit- para backdrop-filter |
| RNF05 | Dados do carrinho e sessão devem persistir durante a navegação | Disponibilidade | Uso de localStorage para estado do carrinho, autenticação e pedidos |
| RNF06 | O sistema deve seguir a LGPD com consentimento explícito | Segurança/Legal | Banner de cookies, checkbox obrigatório em cadastro e checkout |
| RNF07 | O código deve ser modular e manutenível | Manutenibilidade | Separação em CSS/JS por funcionalidade, design system com variáveis |
| RNF08 | O sistema deve suportar operação em múltiplas unidades simultaneamente | Escalabilidade | Seleção de unidade com cardápio dinâmico por localStorage |
| RNF09 | O sistema deve apresentar feedback visual para ações do usuário | Usabilidade | Toasts de notificação, animações de transição, loading states |
| RNF10 | Dados de pagamento não devem ser armazenados no sistema (desacoplamento) | Segurança | Simulação de gateway externo sem persistência de dados de cartão |

---

## 3. MODELAGEM E ARQUITETURA

### 3.1 Arquitetura da Solução Front-End

A arquitetura adotada segue o padrão de **aplicação estática modular**, onde cada página HTML é um módulo independente que compartilha um design system CSS global e utilitários JavaScript comuns.

```
┌───────────────────────────────────────────────────┐
│                    NAVEGADOR                       │
│  ┌─────────────────────────────────────────────┐  │
│  │           HTML5 (9 páginas)                  │  │
│  │  Landing | Cardápio | Carrinho | Checkout   │  │
│  │  Acompanhamento | Login | Fidelidade        │  │
│  │  Admin Dashboard | Gerente Painel            │  │
│  └─────────────────────────────────────────────┘  │
│  ┌──────────────┐  ┌──────────────────────────┐  │
│  │  CSS Design   │  │    JavaScript ES6+       │  │
│  │   System      │  │  app.js (global)         │  │
│  │  style.css    │  │  cardapio.js             │  │
│  │  responsive   │  │  + módulos por página    │  │
│  │  admin.css    │  │                          │  │
│  │  cardapio.css │  │  Estado: localStorage    │  │
│  └──────────────┘  └──────────────────────────┘  │
│  ┌─────────────────────────────────────────────┐  │
│  │          Integrações Externas                │  │
│  │  Chart.js (gráficos) | Google Fonts         │  │
│  │  Gateway de Pagamento (simulado)             │  │
│  └─────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────┘
```

### 3.2 Diagrama de Navegação

```
                    ┌─────────────┐
                    │  Landing    │
                    │  (index)    │
                    └──────┬──────┘
                           │
              ┌────────────┼────────────┐
              │            │            │
       ┌──────▼─────┐ ┌───▼───┐ ┌──────▼─────┐
       │  Cardápio   │ │ Login │ │ Fidelidade │
       └──────┬──────┘ └───┬───┘ └────────────┘
              │            │
       ┌──────▼──────┐     │
       │  Carrinho   │     │
       └──────┬──────┘     │
              │            │
       ┌──────▼──────┐     │
       │  Checkout   │◄────┘
       └──────┬──────┘
              │
       ┌──────▼───────────┐
       │  Acompanhamento  │
       └──────────────────┘

       ┌──────────┐  ┌──────────┐
       │  Admin   │  │ Gerente  │
       │ (Matriz) │  │(Unidade) │
       └──────────┘  └──────────┘
```

### 3.3 Estrutura de Componentes

```
Projeto Uninter/
├── index.html              ← Landing Page / Seleção de unidade
├── cardapio.html           ← Cardápio com filtros e busca
├── carrinho.html           ← Resumo do pedido e canal de retirada
├── checkout.html           ← Pagamento e consentimento LGPD
├── acompanhamento.html     ← Status em tempo real do pedido
├── login.html              ← Autenticação e cadastro
├── fidelidade.html         ← Programa de pontos e recompensas
├── admin.html              ← Dashboard da matriz (gráficos, auditoria)
├── gerente.html            ← Painel da unidade (estoque, equipe, metas)
├── css/
│   ├── style.css           ← Design System (480+ linhas)
│   ├── responsive.css      ← Media queries (4 breakpoints)
│   ├── cardapio.css        ← Estilos do cardápio
│   └── admin.css           ← Estilos dos painéis administrativos
├── js/
│   ├── app.js              ← Módulo global (Cart, Auth, LGPD, Toast)
│   └── cardapio.js         ← Dados e lógica do cardápio (18 produtos)
└── documentacao.md          ← Este documento
```

### 3.4 Design System

O design system foi projetado com **temática nordestina** aplicada em um layout moderno com dark mode e glassmorphism:

#### Paleta de Cores

| Variável | Cor | Uso |
|----------|-----|-----|
| `--primary` | `#E85D04` (Laranja) | Bandeirolas de São João, CTAs, destaques |
| `--secondary` | `#FAA307` (Amarelo) | Sol do sertão, informações secundárias |
| `--accent` | `#2D6A4F` (Verde) | Cacto/vegetação, badges de sucesso |
| `--bg-dark` | `#0A0E14` | Fundo principal |
| `--bg-surface` | `#0D1117` | Superfícies de cards e sidebar |
| `--success` | `#3FB950` | Status positivos, estoque OK |
| `--error` | `#F85149` | Alertas, validação de erros |

#### Tipografia

- **Títulos:** Outfit (Google Fonts) — Bold, display, impactante
- **Corpo:** Inter (Google Fonts) — Legível, moderno, neutro

#### Componentes Reutilizáveis

- **Navbar** com glassmorphism e menu mobile
- **Cards** com efeito glassmorphism e hover
- **Botões** (primary, secondary, outline) com gradientes
- **Formulários** com validação visual
- **Badges** de status coloridos
- **Toast notifications** para feedback
- **Status timeline** para acompanhamento de pedido
- **Progress bars** para estoque e metas
- **Tabelas** com hover e responsividade

### 3.5 Protótipos e Telas

As telas foram implementadas diretamente em código (HTML/CSS/JS), funcionando como protótipos funcionais de alta fidelidade. Cada tela cobre os requisitos identificados na análise:

| Tela | Requisitos Atendidos | Características |
|------|---------------------|-----------------|
| Landing Page | RF01 | Hero animado, seleção de unidade, seção de features |
| Cardápio | RF02, RF03, RF04 | Grid de produtos, filtros, modal de detalhes |
| Carrinho | RF04, RF05, RF06 | Lista editável, seleção de canal multicanal |
| Checkout | RF07, RF08 | Pagamento desacoplado, LGPD, feedback de processamento |
| Acompanhamento | RF09 | Timeline de status com simulação de atualização |
| Login | RF10, RF08 | Tabs login/cadastro, validação, consentimento LGPD |
| Fidelidade | RF11, RF12 | Pontos, níveis, recompensas resgatáveis |
| Admin | RF13, RF14, RF15 | Gráficos Chart.js, tabelas, auditoria |
| Gerente | RF16, RF17, RF18 | Estoque com alertas, equipe, metas com progress |

---

## 4. ENTREGA TÉCNICA

### 4.1 Tecnologias Utilizadas

| Tecnologia | Versão | Justificativa |
|-----------|--------|---------------|
| **HTML5** | - | Semântica, acessibilidade, SEO |
| **CSS3** (Vanilla) | - | Controle total do design sem dependência de frameworks |
| **JavaScript ES6+** | - | Lógica sem frameworks para melhor performance e aprendizado |
| **Google Fonts** | Inter + Outfit | Tipografia profissional e legível |
| **Chart.js** | 4.4.7 | Gráficos interativos no dashboard (via CDN) |
| **localStorage** | Web API | Persistência de carrinho, autenticação e pedidos |

### 4.2 Justificativa das Decisões Técnicas

**Por que CSS Vanilla ao invés de TailwindCSS ou Bootstrap?**
- Controle total sobre o design system, sem classes utilitárias genéricas
- Menor tamanho de bundle, sem CSS não utilizado
- Design system customizado com variáveis CSS para temática nordestina
- Demonstra compreensão profunda de CSS e layout moderno (Flexbox, Grid)

**Por que JavaScript puro ao invés de React/Vue?**
- Elimina tempo de build e configuração de bundlers
- Demonstra domínio dos fundamentos da linguagem
- Performance superior para aplicações estáticas
- Facilidade de deploy e publicação

**Por que localStorage para estado?**
- Persistência entre navegações sem backend
- Simula o comportamento de um carrinho real
- Dados do carrinho, autenticação e pedidos sobrevivem a recarregamentos

**Por que pagamento desacoplado (simulado)?**
- Conforme definido no estudo de caso: "A Raízes do Nordeste não processa pagamentos diretamente"
- O sistema simula a integração com gateway externo (solicita → aguarda → recebe confirmação)
- Nenhum dado de cartão é armazenado, seguindo boas práticas de segurança

### 4.3 Descrição das Telas

#### Tela 1 — Landing Page (index.html)
- Hero section com animações de entrada e elementos flutuantes
- Seção de features explicando os 4 canais de atendimento
- Grid de unidades com status (aberta/fechada), endereço e tipo (completa/reduzida)
- CTA para o programa de fidelidade
- Footer completo com navegação e contato
- Banner de cookies LGPD

#### Tela 2 — Cardápio (cardapio.html)
- 18 produtos em 7 categorias: Tapiocas, Cuscuz, Bolos & Doces, Sucos, Cafés, Salgados
- Filtro por categoria (botões com scroll horizontal no mobile)
- Campo de busca por nome ou descrição
- Filtro de produtos sazonais (período junino)
- Modal de detalhes do produto com controle de quantidade
- Produtos sazonais destacados com tag "🎉 Junino"

#### Tela 3 — Carrinho (carrinho.html)
- Lista de itens com imagem, nome, preço unitário e subtotal
- Controle de quantidade (+/−) por item
- Remoção de itens com confirmação via toast
- Resumo com subtotal, taxa de serviço e total
- Seleção de canal de retirada (4 opções visuais)
- Estado vazio com CTA para cardápio

#### Tela 4 — Checkout (checkout.html)
- Barra de progresso (Carrinho → Pagamento → Confirmação)
- 3 métodos de pagamento: Cartão de Crédito, Cartão de Débito, PIX
- Formulário de cartão com formatação automática (número em grupos de 4)
- Seção de consentimento LGPD com checkbox obrigatório
- Simulação de processamento (spinner de 3 segundos)
- Tela de sucesso com número do pedido e link para acompanhamento
- Validações: campos obrigatórios, LGPD, número do cartão

#### Tela 5 — Acompanhamento (acompanhamento.html)
- Card com número do pedido, unidade, canal e horário
- Timeline vertical com 4 estágios: Recebido → Em Preparo → Pronto → Retirado
- Estágio ativo com animação de pulsação (pulse glow)
- Lista de itens do pedido com valores
- Indicador "Atualização em tempo real" com dot animado
- Controles de simulação para demonstrar a transição entre status

#### Tela 6 — Login/Cadastro (login.html)
- Tabs alternáveis entre Login e Cadastro
- Login: email + senha
- Cadastro: nome, CPF (com formatação), email, telefone (com formatação), senha + confirmação
- Seção de proteção de dados LGPD detalhando as finalidades do tratamento
- Checkbox obrigatório de consentimento + checkbox opcional de marketing
- Validação de senhas coincidentes
- Links de acesso aos painéis administrativos

#### Tela 7 — Fidelidade (fidelidade.html)
- Card hero com nível do cliente (Bronze/Prata/Ouro/Diamante)
- Pontos acumulados com contador visual
- Barra de progresso para próximo nível
- 6 recompensas resgatáveis (café grátis até experiência VIP)
- Recompensas bloqueadas quando pontos insuficientes
- Histórico de pontos (ganhos e gastos)

#### Tela 8 — Admin Dashboard (admin.html)
- Sidebar com navegação entre seções
- 4 cards de KPI (faturamento, pedidos, clientes, avaliação)
- Gráfico de barras: vendas por região (Chart.js)
- Gráfico doughnut: distribuição por canal (Chart.js)
- Ranking de top 7 produtos mais vendidos
- Tabela de faturamento por unidade
- Log de atividade recente
- Seção de auditoria com registros de cancelamentos, descontos e ajustes

#### Tela 9 — Painel do Gerente (gerente.html)
- 4 cards de KPI da unidade (pedidos, faturamento, equipe, meta)
- Controle de estoque com barras de progresso coloridas (verde/amarelo/vermelho)
- Tabela da equipe com 10 colaboradores e status de presença
- 3 indicadores de desempenho: meta diária, tempo médio de preparo, satisfação
- Tabela dos últimos 5 pedidos com status

### 4.4 Design Responsivo

O sistema foi projetado com a abordagem **desktop-first** e adaptado para 4 breakpoints:

| Breakpoint | Dispositivo | Adaptações |
|------------|-------------|-----------|
| `> 1400px` | Desktop grande | Container expandido para 1320px |
| `≤ 1024px` | Tablet | Grids adaptados, sidebar colapsável |
| `≤ 768px` | Mobile grande | Menu hamburger, layouts em coluna, timeline vertical |
| `≤ 480px` | Mobile pequeno | Tipografia reduzida, cards compactos |

### 4.5 Conformidade LGPD

A conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018) foi implementada nas seguintes áreas:

| Área | Implementação |
|------|--------------|
| **Cookies** | Banner na parte inferior com opção de Aceitar/Recusar, exibido na primeira visita |
| **Cadastro** | Checkbox obrigatório com texto detalhado sobre tratamento de dados, finalidades listadas |
| **Checkout** | Seção de consentimento LGPD com checkbox obrigatório antes do pagamento |
| **Marketing** | Checkbox separado e opcional para comunicações promocionais |
| **Dados de pagamento** | Não são armazenados no sistema (gateway desacoplado) |
| **Anonimização** | Dados no localStorage podem ser limpos pelo usuário a qualquer momento |

### 4.6 Links de Acesso

> **⚠️ ATENÇÃO:** Preencha os links abaixo antes da entrega.

- **Repositório (GitHub):** [INSERIR LINK DO REPOSITÓRIO]
- **Publicação (Site):** [INSERIR LINK DA PUBLICAÇÃO — GitHub Pages, Vercel, Netlify etc.]

---

## 5. PLANO DE TESTES E EVIDÊNCIAS

### 5.1 Estratégia de Testes

A estratégia de testes adotada é baseada em **testes manuais** cobrindo:

1. **Testes funcionais:** validação de cada funcionalidade implementada
2. **Testes de usabilidade:** navegação intuitiva e feedback visual
3. **Testes de responsividade:** comportamento em diferentes tamanhos de tela
4. **Testes de compatibilidade:** funcionamento em diferentes navegadores
5. **Testes de conformidade LGPD:** verificação dos mecanismos de consentimento

### 5.2 Cenários de Teste

#### CT01 — Seleção de Unidade e Navegação ao Cardápio

| Campo | Detalhe |
|-------|---------|
| **Pré-condição** | Usuário na landing page |
| **Passos** | 1. Rolar até seção de unidades; 2. Clicar em uma unidade aberta |
| **Resultado esperado** | Toast de confirmação + redirecionamento para cardápio com nome da unidade exibido |
| **Resultado negativo** | Clicar em unidade fechada deve exibir aviso |

#### CT02 — Adicionar Produto ao Carrinho

| Campo | Detalhe |
|-------|---------|
| **Pré-condição** | Usuário na página de cardápio |
| **Passos** | 1. Clicar em "Adicionar" em um produto; 2. Verificar badge do carrinho |
| **Resultado esperado** | Toast "Produto adicionado!", badge atualizado com contagem |
| **Resultado negativo** | — (ação sempre bem-sucedida por design) |

#### CT03 — Filtro de Produtos Sazonais

| Campo | Detalhe |
|-------|---------|
| **Pré-condição** | Cardápio com todos os produtos visíveis |
| **Passos** | 1. Marcar checkbox "Apenas Sazonais (Junino)" |
| **Resultado esperado** | Grid exibe apenas produtos com tag "🎉 Junino" |
| **Resultado negativo** | Sem produtos sazonais → exibir estado vazio |

#### CT04 — Busca de Produto

| Campo | Detalhe |
|-------|---------|
| **Pré-condição** | Cardápio aberto |
| **Passos** | 1. Digitar "cuscuz" no campo de busca |
| **Resultado esperado** | Grid filtra mostrando apenas produtos com "cuscuz" no nome ou descrição |
| **Resultado negativo** | Termo sem resultado → exibir "Nenhum produto encontrado" |

#### CT05 — Fluxo Completo de Pedido (Positivo)

| Campo | Detalhe |
|-------|---------|
| **Pré-condição** | Carrinho com pelo menos 1 item, usuário logado |
| **Passos** | 1. Ir ao carrinho; 2. Selecionar canal; 3. Clicar "Finalizar"; 4. Preencher cartão; 5. Marcar LGPD; 6. Confirmar |
| **Resultado esperado** | Spinner de processamento → tela de sucesso com número do pedido |
| **Resultado negativo** | — (ver CT06 e CT07) |

#### CT06 — Checkout sem Consentimento LGPD

| Campo | Detalhe |
|-------|---------|
| **Pré-condição** | Todos os campos preenchidos, LGPD desmarcado |
| **Passos** | 1. Clicar "Confirmar Pagamento" |
| **Resultado esperado** | Toast de erro: "Você precisa aceitar o consentimento LGPD para continuar" |
| **Resultado negativo** | Pagamento processado sem consentimento (FALHA) |

#### CT07 — Checkout com Dados Incompletos

| Campo | Detalhe |
|-------|---------|
| **Pré-condição** | Campo "Nome no cartão" vazio |
| **Passos** | 1. Clicar "Confirmar Pagamento" |
| **Resultado esperado** | Toast de erro: "Preencha todos os campos do cartão" |
| **Resultado negativo** | Pagamento processado com dados incompletos (FALHA) |

#### CT08 — Cadastro com Senhas Diferentes

| Campo | Detalhe |
|-------|---------|
| **Pré-condição** | Formulário de cadastro aberto |
| **Passos** | 1. Digitar senha "123456"; 2. Digitar confirmação "654321"; 3. Submeter |
| **Resultado esperado** | Toast de erro: "As senhas não coincidem" |
| **Resultado negativo** | Cadastro aceito com senhas diferentes (FALHA) |

#### CT09 — Acompanhamento de Pedido

| Campo | Detalhe |
|-------|---------|
| **Pré-condição** | Pedido realizado com sucesso |
| **Passos** | 1. Acessar página de acompanhamento; 2. Clicar nos botões de simulação |
| **Resultado esperado** | Timeline atualiza, dot ativo pulsa, toast confirma mudança de status |
| **Resultado negativo** | Sem pedido ativo → exibir estado vazio com CTA |

#### CT10 — Resgate de Recompensa

| Campo | Detalhe |
|-------|---------|
| **Pré-condição** | Usuário logado com 150 pontos |
| **Passos** | 1. Clicar "Resgatar" no item "Café Grátis" (50 pts) |
| **Resultado esperado** | Toast de sucesso, pontos atualizados para 100, recompensa desaparece ou fica bloqueada |
| **Resultado negativo** | Clicar em recompensa de 200 pts → item bloqueado, sem botão de resgate |

### 5.3 Testes Não Funcionais

#### Responsividade

| Dispositivo/Tamanho | Teste | Resultado Esperado |
|---------------------|-------|-------------------|
| Desktop (1920x1080) | Todas as telas | Layout completo com grids multi-colunas |
| Tablet (768x1024) | Todas as telas | Grids adaptados, sidebar colapsável |
| Mobile (375x667) | Todas as telas | Menu hamburger, layout em coluna |
| Mobile pequeno (320x568) | Todas as telas | Tipografia legível, elementos não cortados |

#### Compatibilidade de Navegadores

| Navegador | Versão | Funcionalidades Testadas |
|-----------|--------|------------------------|
| Google Chrome | 125+ | Todas as telas, localStorage, animações |
| Mozilla Firefox | 127+ | Todas as telas, backdrop-filter |
| Microsoft Edge | 125+ | Todas as telas, Chart.js |
| Safari | 17+ | Todas as telas, -webkit-backdrop-filter |

#### Performance

| Métrica | Objetivo | Como foi Atendido |
|---------|----------|-------------------|
| Tamanho total | < 500 KB (sem imagens) | CSS ~20KB, JS ~15KB, HTML ~50KB |
| Tempo de carregamento | < 3s em 3G | Sem frameworks pesados, lazy loading |
| Interatividade | < 100ms | JavaScript puro, sem re-renders |

### 5.4 Evidências

> **Nota:** Capturas de tela devem ser inseridas aqui ao gerar o PDF final. Recomenda-se incluir:
> 1. Screenshot da landing page (desktop e mobile)
> 2. Screenshot do cardápio com filtros
> 3. Screenshot do carrinho com itens
> 4. Screenshot do checkout (pagamento + LGPD)
> 5. Screenshot do acompanhamento de pedido
> 6. Screenshot da página de login
> 7. Screenshot do programa de fidelidade
> 8. Screenshot do dashboard admin (com gráficos)
> 9. Screenshot do painel do gerente

---

## 6. CONCLUSÃO

### Lições Aprendidas

1. **Planejamento antecede implementação:** A fase de análise de requisitos e modelagem foi fundamental para guiar o desenvolvimento. Sem o levantamento prévio, seria fácil perder de vista as regras de negócio do estudo de caso.

2. **Design System como fundação:** A criação de um design system com variáveis CSS antes de codificar as telas garantiu consistência visual em todas as 9 páginas, acelerando significativamente o desenvolvimento.

3. **LGPD como requisito técnico:** A conformidade legal não pode ser tratada como um "extra" — precisa ser planejada desde a arquitetura e impacta o fluxo de todas as telas que tratam dados pessoais.

4. **Multicanalidade exige abstração:** O sistema precisa funcionar independentemente do canal (app, totem, balcão). Isso influencia diretamente as decisões de UI/UX e a estrutura dos dados.

5. **Responsividade é obrigatória:** Diferentes canais implicam diferentes dispositivos. O design precisa ser fluido desde o planejamento, não como ajuste posterior.

### Desafios Encontrados

- **Complexidade do estudo de caso:** As ambiguidades propositais exigiram tomada de decisão técnica autônoma (ex: como representar unidades com cardápios parcialmente diferentes).
- **Estado sem backend:** Simular uma aplicação real com persistência usando apenas localStorage foi um exercício de criatividade e organização.
- **Gráficos do dashboard:** A integração com Chart.js exigiu atenção ao responsivo e às cores do design system para manter a identidade visual.

### Evoluções Futuras

- Integração com backend real (Node.js/Express ou Java/Spring Boot)
- Implementação de notificações push reais para status do pedido
- Autenticação com OAuth2 (Google, Apple ID)
- PWA (Progressive Web App) para funcionamento offline
- Internacionalização (i18n) para expansão internacional
- Implementação de WebSocket para atualizações em tempo real
- Testes automatizados com Cypress ou Selenium

---

## 7. REFERÊNCIAS

1. MDN Web Docs. **HTML5 Reference**. Disponível em: https://developer.mozilla.org/pt-BR/docs/Web/HTML. Acesso em: jun. 2026.

2. MDN Web Docs. **CSS Reference**. Disponível em: https://developer.mozilla.org/pt-BR/docs/Web/CSS. Acesso em: jun. 2026.

3. MDN Web Docs. **JavaScript Reference**. Disponível em: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript. Acesso em: jun. 2026.

4. Chart.js. **Chart.js Documentation v4**. Disponível em: https://www.chartjs.org/docs/latest/. Acesso em: jun. 2026.

5. Google Fonts. **Inter e Outfit**. Disponível em: https://fonts.google.com/. Acesso em: jun. 2026.

6. BRASIL. **Lei nº 13.709/2018** (Lei Geral de Proteção de Dados Pessoais — LGPD). Disponível em: http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm. Acesso em: jun. 2026.

7. PRESSMAN, Roger S.; MAXIM, Bruce R. **Engenharia de Software: uma abordagem profissional**. 9ª ed. Porto Alegre: AMGH, 2021.

8. SOMMERVILLE, Ian. **Engenharia de Software**. 10ª ed. São Paulo: Pearson, 2019.

9. NIELSEN, Jakob. **10 Usability Heuristics for User Interface Design**. Disponível em: https://www.nngroup.com/articles/ten-usability-heuristics/. Acesso em: jun. 2026.

10. W3C. **Web Content Accessibility Guidelines (WCAG) 2.1**. Disponível em: https://www.w3.org/TR/WCAG21/. Acesso em: jun. 2026.

---

> **Reflexão Final:**  
> *"Se este trabalho fosse apresentado em uma empresa ou entrevista técnica, ele se sustentaria?"*  
> Este projeto demonstra capacidade de análise sistêmica, compreensão de regras de negócio, tomada de decisão técnica fundamentada, implementação funcional com código limpo e documentação profissional. A solução é coerente, modular, responsiva e preparada para integração com um backend real.
