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

ou

```sh
npm sequelize init
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

# Notas:

Cria DB pelo Docker

```sh
docker run -p 3306:3306 --name my_mysql -e MYSQL_ROOT_PASSWORD=root -d mysql:8.0
```

Cria uma Tabela Pessoas

```sh
npx sequelize-cli model:create --name Pessoas --attributes nome:string,ativo:boolean,email:string,role:string
```

Cria uma Tabela Niveis

```sh
npx sequelize-cli model:create --name Niveis --attributes descr_nivel:string
```

Cria uma Tabela Turmas

```sh
npx sequelize-cli model:create --name Turmas --attributes data_inicio:dateonly
```

Cria uma Tabela Matriculas

```sh
npx sequelize-cli model:create --name Matriculas --attributes status:string
```

Rodando Migration

```sh
npx sequelize-cli db:migrate
```

Voltar uma Migration <!-- Este comando vai desfazer somente a última migração feita -->

```sh
npx sequelize-cli db:migrate:undo
```

Cria uma seed

```sh
npx sequelize-cli seed:generate --name demo-pessoa
```

Enviar seed para DB

```sh
npx npx sequelize-cli db:seed:all
```

Desfazendo seeds
Para desfazer o último seed feito.

```sh
npx sequelize db:seed:undo
```

Para desfazer seeds de uma tabela específica.

```sh
npx sequelize-cli db:seed:undo --seed nome-do-arquivo
```
