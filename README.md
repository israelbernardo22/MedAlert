# MedAlert24 - Seu Aliado no Controle de Medicamentos

## Sobre a Aplicação

**MedAlert24** é uma aplicação web inteligente e intuitiva designed para ajudar no gerenciamento de medicamentos para você e sua família. Com um foco em segurança e facilidade de uso, a aplicação oferece lembretes de horários de medicação, histórico de dosagens e gerenciamento de múltiplos perfis para atender toda a família.

A aplicação utiliza inteligência artificial (Google Gemini) para fornecer informações sobre medicamentos e ajudar na melhor compreensão dos tratamentos.

## Público-Alvo

- **Pacientes crônicos** que precisam tomar medicamentos regularmente
- **Cuidadores** que gerenciam medicamentos de familiares idosos
- **Pais e mães** que precisam controlar medicamentos de filhos
- **Qualquer pessoa** que busca melhor organização e controle de sua medicação

## Funcionalidades Principais

✅ **Gerenciamento de Perfis** - Crie perfis para você e seus familiares  
✅ **Cadastro de Medicamentos** - Adicione medicamentos com dosagem e horários personalizados  
✅ **Lembretes Inteligentes** - Receba notificações nos horários programados  
✅ **Histórico de Dosagens** - Acompanhe o histórico completo de medicações tomadas  
✅ **Suporte a Múltiplos Horários** - Configure vários horários por dia para cada medicamento  
✅ **Tratamentos com Duração** - Defina medicamentos contínuos ou com duração específica em dias  
✅ **Inteligência Artificial** - Informações automáticas sobre medicamentos via Google Gemini  
✅ **Interface Responsiva** - Funciona perfeitamente em dispositivos móveis e desktop  

## Como Usar

### Pré-requisitos

- Node.js 16 ou superior
- Uma chave de API do Google Gemini

### Instalação e Execução Local

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/israelbernardo22/medAlert24.git
   cd medAlert24
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure a chave de API:**
   - Crie um arquivo `.env.local` na raiz do projeto
   - Adicione sua chave de API do Google Gemini:
     ```
     GEMINI_API_KEY=sua_chave_aqui
     ```

4. **Inicie a aplicação em modo desenvolvimento:**
   ```bash
   npm run dev
   ```
   A aplicação estará disponível em `http://localhost:5173`

### Build para Produção

```bash
npm run build
npm run preview
```

## Stack Tecnológico

- **Frontend Framework**: React 19
- **Linguagem**: TypeScript
- **Bundler**: Vite
- **Styling**: Tailwind CSS
- **IA**: Google Gemini API (@google/genai)
- **Estado**: React Hooks (Context/Custom Hooks)
- **Armazenamento**: localStorage

## Estrutura do Projeto

```
medAlert24/
├── components/           # Componentes React reutilizáveis
│   ├── AlertModal.tsx
│   ├── Header.tsx
│   ├── HistoryView.tsx
│   ├── Icons.tsx
│   ├── MedicationDashboard.tsx
│   ├── MedicationForm.tsx
│   └── MedicationForm.tsx
├── hooks/                # Custom React Hooks
│   ├── useAlerts.ts
│   └── useMedicationStore.ts
├── services/             # Serviços externos
│   └── geminiService.ts
├── types.ts              # Definições de tipos TypeScript
├── App.tsx               # Componente principal
├── vite.config.ts        # Configuração do Vite
└── package.json          # Dependências do projeto
```

## Recursos de Segurança

- ✅ Autenticação simulada (pode ser integrada com um backend)
- ✅ Confirmação antes de deletar medicamentos
- ✅ Confirmação antes de deletar perfis
- ✅ Dados armazenados localmente no navegador
- ✅ Histórico completo de todas as medicações

## Autores

- **Israel Bernardo de Assis Silva RA:325130743** - Desenvolvimento Principal
- **Pedro Henrique Soares RA:323220287** - Desenvolvimento Principal
- **Marcos Vinicius Gonçalves RA:323220450** - Desenvolvimento Principal
- **Rafael Cangussú Moreira RA:32321034** - Desenvolvimento Principal
- ** Pedro Rodrigues Pezzini RA:325131349** - Desenvolvimento Principal

---

**MedAlert24** - Porque sua saúde é importante! 💊❤️
