# Projeto de Gerenciamento de Carros

Este projeto implementa um sistema simples para gerenciamento de carros usando Node.js. Ele permite operações CRUD (Criar, Ler, Atualizar, Deletar) sobre uma tabela de carros em um banco de dados MySQL.

## Funcionalidades

- Listar todos os carros
- Buscar detalhes de um carro específico por ID
- Adicionar um novo carro
- Atualizar um carro existente
- Excluir um carro

## Tecnologias Utilizadas

- **Node.js:** Ambiente de execução do servidor.
- **Express:** Framework web para Node.js.
- **MySQL:** Sistema de gerenciamento de banco de dados.

## Estrutura do Projeto

- `/db`: Contém scripts para configuração do banco de dados.
- `/services`: Lógica de negócios e interação com o banco de dados.
- `/controllers`: Controladores para tratar as requisições e respostas HTTP.
- `/routes`: Definição das rotas da API.

## Como Configurar

### Pré-requisitos

- Node.js instalado na sua máquina
- MySQL instalado e rodando na sua máquina

### Configuração do Banco de Dados

1. Crie um banco de dados no MySQL:

```sql
CREATE DATABASE gerenciamento_carros;
```

2. Crie a tabela de carros:

```sql
USE gerenciamento_carros;
CREATE TABLE carros (
    id INT AUTO_INCREMENT PRIMARY KEY,
    modelo VARCHAR(255) NOT NULL,
    placa VARCHAR(255) NOT NULL
);
```

### Configuração do Projeto

1. Clone o repositório:

```bash
git clonehttps://github.com/JoaovitorCarvalho20/JPJCars.git
cd seu-repositorio
```

2. Instale as dependências:

```bash
npm install
```

3. Configure o arquivo de conexão com o banco de dados em `/db/index.js` ajustando as credenciais de acesso conforme o necessário.

## Como Rodar

Execute o servidor usando:

```bash
node index.js
```

O servidor estará disponível em `http://localhost:3000`.

## Exemplos de Uso

Você pode testar as funcionalidades da API usando uma ferramenta como Postman ou curl. Aqui estão alguns exemplos de como interagir com a API:

- **Buscar todos os carros:**

  `GET /carros`

- **Buscar um carro por ID:**

  `GET /carros/{id}`

- **Adicionar um novo carro:**

  `POST /carros` com JSON body `{ "modelo": "Modelo do Carro", "placa": "Placa do Carro" }`

- **Atualizar um carro:**

  `PUT /carros/{id}` com JSON body `{ "modelo": "Novo Modelo", "placa": "Nova Placa" }`

- **Excluir um carro:**

  `DELETE /carros/{id}`




