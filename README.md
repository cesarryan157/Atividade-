Autor: Cesar Ryan Matos de Souza
Matrícula: 03346754


---

📘 Descrição

Sistema web para gerenciar usuários, projetos e tarefas da empresa TechManage Solutions.
Permite cadastrar, listar, atualizar e excluir registros diretamente no banco de dados MySQL por meio de uma API REST desenvolvida em Node.js + Express + Sequelize.


---

🗂️ Estrutura do Projeto

techmanage/
│
├─ src/
│  ├─ controllers/     # Lógica das rotas e regras de negócio
│  ├─ models/          # Modelos do banco de dados (Sequelize)
│  ├─ routes/          # Definições de rotas
│  └─ server.js        # Servidor Express principal
│
├─ frontend/
│  ├─ index.html       # Interface web básica
│  ├─ style.css        # Estilos da página
│  └─ script.js        # Comunicação com a API (fetch)
│
├─ .env                # Variáveis de ambiente
└─ package.json        # Dependências e scripts do projeto


---

⚙️ Instalação

1️⃣ Clonar o repositório:

git clone https://github.com/cesarryanmatos/TechManage.git
cd TechManage

2️⃣ Instalar dependências:

npm install

3️⃣ Configurar variáveis de ambiente:

Crie um arquivo .env baseado em .env.example:

PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASS=sua_senha
DB_NAME=techmanage_db


---

🗃️ Criar e popular o banco de dados

npx sequelize-cli db:create
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all


---

▶️ Rodar o servidor

npm run dev

Servidor rodando em:
👉 http://localhost:3000


---

💻 Abrir o frontend

Abra o arquivo:

frontend/index.html

no navegador (ou utilize a extensão Live Server no VS Code).


---

🚀 Uso

Cadastrar usuários, projetos e tarefas pelo frontend.

Listar registros diretamente na interface.

Para atualizar ou excluir registros, use ferramentas como Postman, Insomnia ou outro cliente de API.



---

🔧 Tecnologias Utilizadas

Node.js (v18+)

Express.js

Sequelize ORM

MySQL

HTML, CSS, JavaScript (frontend básico)
