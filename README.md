# 📝 Gerenciador de Tarefas

Aplicação web de gerenciamento de tarefas desenvolvida com React. Permite adicionar, editar, concluir e remover tarefas de forma simples e intuitiva.

![Preview do projeto](./preview.png)

## ✨ Funcionalidades

- ✅ **Adicionar** tarefas
- ✏️ **Editar** tarefas existentes (com suporte a Enter e Escape)
- ☑️ **Concluir** tarefas clicando no círculo
- 🗑️ **Remover** tarefas
- 💾 Interface responsiva com tema dark navy

## 🚀 Tecnologias utilizadas

- [React](https://react.dev/) — biblioteca para construção de interfaces
- [Vite](https://vitejs.dev/) — ferramenta de build e desenvolvimento
- [Bootstrap 5](https://getbootstrap.com/) — estilização e layout

## 📁 Estrutura do projeto

```
src/
├── components/
│   ├── AdicionarTarefas.jsx   # Formulário para adicionar tarefas
│   ├── ListaTarefas.jsx       # Renderiza a lista de tarefas
│   └── ItemTarefa.jsx         # Cada item individual da lista
├── App.jsx                    # Componente raiz — gerencia o estado global
├── App.css                    # Estilos customizados
└── main.jsx                   # Ponto de entrada da aplicação
```

## ⚙️ Como rodar o projeto localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado na máquina

### Passo a passo

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/gerenciador-de-tarefas.git

# Acesse a pasta do projeto
cd gerenciador-de-tarefas

# Instale as dependências
npm install

# Rode o projeto em modo de desenvolvimento
npm run dev
```

Acesse em: [http://localhost:5173](http://localhost:5173)

## 💡 Conceitos praticados

- Componentização no React
- `useState` para gerenciamento de estado local e global
- Passagem de props e callbacks entre componentes
- Renderização condicional
- Renderização de listas com `.map()` e `key`
- Estilização com Bootstrap via classes utilitárias

## 👨‍💻 Autor

Feito por **João** — estudante de desenvolvimento web.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/seu-usuario)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/seu-usuario)