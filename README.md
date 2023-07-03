# tstestes

## Configurando e Executando o Código
Este é um guia para configurar e executar o código do projeto "tstestes". Certifique-se de ter as dependências e os requisitos necessários instalados antes de seguir as etapas abaixo.

## Pré-requisitos
Certifique-se de ter o seguinte instalado em seu sistema:

- Node.js (versão 12 ou superior)
- npm (gerenciador de pacotes do Node.js)

## Instalação
Siga as etapas abaixo para configurar o projeto:

1. Clone o repositório do GitHub:

 
``` bash
git clone https://github.com/Nishiyama13/tstestes.git
```

2. Acesse o diretório do projeto:

``` bash
cd tstestes
```

3. Instale as dependências do projeto:

``` bash
npm install
```

4. Configuração
Antes de executar o projeto, você precisa configurar as variáveis de ambiente. Siga as etapas abaixo:

- Crie um arquivo chamado .env na raiz do projeto.

- Abra o arquivo .env e adicione as seguintes linhas:

``` bash
PORT=5000
DATABASE_URL=postgresql://postgres:secretpassword@localhost:5432/dbname
```

- Certifique-se de substituir dbname, postgres e secretpassword pelas suas próprias configurações de banco de dados.

5. Executando o Projeto

Depois de concluir as etapas de instalação e configuração, você pode executar o projeto. Existem duas opções disponíveis: modo de desenvolvimento e modo de produção.

## Modo de Desenvolvimento:

``` bash
npm run dev
```

O comando acima iniciará o servidor em modo de desenvolvimento usando nodemon. Isso permitirá que o servidor reinicie automaticamente sempre que houver alterações nos arquivos.

## Modo de Produção:

``` bash
npm run build
npm start
```
O primeiro comando irá compilar o código TypeScript e gerar o código JavaScript na pasta dist. O segundo comando iniciará o servidor em modo de produção.

## Testando as Rotas
Para testar as rotas da aplicação, você pode usar uma ferramenta como o Thunder Client ou o Postman.

Certifique-se de enviar as solicitações HTTP para as seguintes rotas:

- GET: http://localhost:5000/user - Retorna todos os usuários.
- GET: http://localhost:5000/user/:id - Retorna um usuário específico pelo ID.
- POST: http://localhost:5000/user - Cria um novo usuário.
- PUT: http://localhost:5000/user/:id - Atualiza um usuário existente pelo ID.
- DELETE: http://localhost:5000/user/:id - Exclui um usuário pelo ID.

Lembre-se de substituir :id pelo ID real do usuário nas rotas GET, PUT e DELETE.

Certifique-se de que o banco de dados esteja em execução e acessível nas configurações fornecidas no arquivo .env.

Agora você deve estar pronto para executar e testar o projeto "tstestes". Se tudo estiver configurado corretamente, você poderá fazer solicitações para as rotas e receberá as respostas adequadas.