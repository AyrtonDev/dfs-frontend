# DFS-Frontend

## 1. Objetivo do Projeto

Este projeto é a aplicação frontend desenvolvida para o desafio fullstack da Cubos Academy. Ele foi construído para consumir a API backend (DFS-Backend), proporcionando uma interface de usuário interativa e responsiva para exibir filmes, gerenciar uploads de imagens, autenticação de usuários e outras funcionalidades.

## 2. Tecnologias Utilizadas

O frontend foi desenvolvido com uma stack moderna e performática, focada em componentes reusáveis, experiência do usuário e tipagem. As principais tecnologias incluem:

-   **React**: Biblioteca JavaScript para construção de interfaces de usuário reativas.
-   **Vite**: Ferramenta de build rápida e otimizada para desenvolvimento frontend.
-   **TypeScript**: Linguagem de programação que adiciona tipagem estática ao JavaScript, aumentando a robustez do código.
-   **Tailwind CSS**: Framework CSS utilitário para estilização rápida e responsiva.
-   **Shadcn/ui**: Coleção de componentes UI construídos com Radix UI e estilizados com Tailwind CSS, para uma interface consistente e acessível.
-   **React Hook Form & Zod**: Para gerenciamento de formulários complexos e validação de dados eficiente.
-   **Axios**: Cliente HTTP para fazer requisições à API backend.
-   **React Router DOM**: Para roteamento de SPA (Single Page Application).
-   **Sonner**: Biblioteca para notificações (toasts) elegantes.
-   **ESLint & Prettier**: Ferramentas para garantir a qualidade, consistência e formatação do código.
-   **Vitest**: Framework de teste rápido e otimizado para React.

## 3. Instalação e Configuração

Siga os passos abaixo para configurar e rodar o projeto frontend em sua máquina.

### Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/en/) (versão LTS) instalado.

### Passo a passo

1.  **Clone o repositório**
    ```bash
    git clone [https://github.com/seu-usuario/dfs-frontend.git](https://github.com/seu-usuario/dfs-frontend.git)
    cd dfs-frontend
    ```

2.  **Instale as dependências**
    ```bash
    npm install
    ```

3.  **Configurar a URL da API (opcional, se diferente de localhost)**
    Por padrão, o frontend tentará se conectar ao backend em `http://localhost:3333`. Se o seu backend estiver rodando em outra URL (por exemplo, em um servidor de produção ou em uma porta diferente), você precisará configurar uma variável de ambiente.

    Crie um arquivo `.env.local` na raiz do projeto com o seguinte conteúdo:

    ```bash
    VITE_API_BASE_URL="http://localhost:3333"
    ```
    *Substitua `http://localhost:3333` pela URL real do seu backend.*

4.  **Inicie o servidor de desenvolvimento**
    ```bash
    npm run dev
    ```

    O aplicativo estará disponível em `http://localhost:5173` (ou outra porta disponível, conforme indicado no seu terminal).

### Scripts Úteis

-   `npm run dev`: Inicia o servidor de desenvolvimento do Vite com `hot-reload`.
-   `npm run build`: Compila o projeto para produção. Os arquivos estáticos serão gerados na pasta `dist`.
-   `npm run lint`: Executa o ESLint para verificar a qualidade do código.
-   `npm run preview`: Serve a build de produção localmente para pré-visualização.
-   `npm run test`: Executa os testes unitários e de integração com Vitest.