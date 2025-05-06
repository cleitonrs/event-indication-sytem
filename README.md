
# Event Indication System

O **Event Indication System** é uma aplicação web moderna desenvolvida para facilitar a indicação e gerenciamento de eventos. Construída com tecnologias de ponta, a aplicação oferece uma interface intuitiva e responsiva, garantindo uma experiência de usuário excepcional.

## 🚀 Tecnologias Utilizadas

- **Next.js**: Framework React para aplicações web com renderização híbrida (SSR e SSG).
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática, proporcionando maior segurança e escalabilidade ao código.
- **Tailwind CSS**: Framework CSS utilitário para estilização rápida e responsiva.
- **Orval**: Ferramenta para geração automática de clients API a partir de especificações OpenAPI.

## 📁 Estrutura do Projeto

```
.
├── .vscode/                 # Configurações do editor
├── public/                  # Arquivos públicos e estáticos
├── src/                     # Código-fonte da aplicação
├── next.config.ts           # Configurações do Next.js
├── orval.config.ts          # Configurações do Orval para geração de APIs
├── package.json             # Dependências e scripts do projeto
├── postcss.config.mjs       # Configurações do PostCSS
└── tsconfig.json            # Configurações do TypeScript
```

## 📦 Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/cleitonrs/event-indication-sytem.git
   cd event-indication-sytem
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**

   ```bash
   npx next dev
   ```

   A aplicação estará disponível em `http://localhost:3000`.

## 🛠️ Scripts Disponíveis

- `npm next dev`: Inicia o servidor de desenvolvimento.
- `npm next build`: Cria uma versão de produção da aplicação.
- `npm next start`: Inicia o servidor em modo de produção.
- `npm next lint`: Executa o linter para análise estática do código.
- `npm run generate:api`: Gera os clients API utilizando o Orval.

## Screenshots

![Image](https://github.com/user-attachments/assets/88f725b9-0b67-46e7-af78-d6b40dec4424)
![Image](https://github.com/user-attachments/assets/baf9ec87-53aa-4c05-9d0e-16ab301c9a4b)

## Repositório da API

https://github.com/rocketseat-education/nlw-connect-node

**Inicie o banco de dados**
```bash
npm run db;migrate
```

**Inicie a API**
```bash
npm run dev
```


