# :file_cabinet: Sequelize e ORM com NodeJS e MySQL

<p>
	<a href="https://www.linkedin.com/in/fabrizio-abreu-88925587/"><img src="https://img.icons8.com/bubbles/50/000000/linkedin.png" alt="LinkedIn"/></a>
	<a href="https://www.instagram.com/fabrizioabreuu/"><img src="https://img.icons8.com/bubbles/50/000000/instagram.png" alt="Instagram"/></a>
</p>

# Descrição do projeto

API para um sistema de controle de alunos e turmas de uma escola de inglês.
Vamos partir de um diagrama de banco, onde as tabelas já estão dadas.

# Ferramentas utilizadas

- MySQL
- NodeJs v10.20.1
- Npm 6.14.4
- Postman

# Dependências instaladas

```sh
npm install mysql2
```

```sh
npm install --save-dev nodemon
```

(https://sequelize.org/)

```sh
npm install sequelize sequelize-cli path
```

(https://sequelize.org/docs/v6/other-topics/migrations/)

```sh
npx sequelize-cli init
```

# Tecnologias utilizadas

- Usaremos um ORM, um mapeador de objeto relacional.
- Sequelize é o nome do ORM que usaremos.
  O Sequelize abstrai os comandos de operações de SQL.
  No nosso projeto, não iremos inserir queries de SQL dentro da aplicação que está escrita em JavaScript, utilizaremos apenas JavaScript.
- Aplicação organizada no padrão MVC
- CRUD com Sequelize

# Inicialização

- Para iniciar o projeto primeiro precisa instalar as dependências com: `sh npm install `
- Para rodar o projeto, utilizar o comando: node api/index.js

- Projeto inicia na porta 3000.
- Link: http://localhost:3000

# Status do projeto

Em desenvolvimento
