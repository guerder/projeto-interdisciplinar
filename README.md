## Proposta do projeto

Após a realização do projeto de software, foi implementado uma pequena parte deste para desenvolver as competências técnicas da disciplina de Construção de software para internet.
Foi utilizado a plataforma Netflix como estudo de caso, e o objetivo é implementar a exibição do catálogo da mesma.

## Tecnologias envolvidas

Usamos como banco de dados o MongoDB, para o frontend React, e para interpretar tudo usamos node.js.

## Começar

A execução da aplicação requer 3 passos:

- Popular o banco de dados com o arquivo csv (MongoDB);
- Inicializar o back-end;
- Rodar a aplicação front-end.

## Popular o banco de dados  

A partir da raíz temos 3 sub-pastas, backend, frontend e util. Vamos acessar cada uma delas para configurar o projeto.

Na pasta **util** configure a url do MongoDB, se necessário, no arquivo db.js linha 4 que está na pasta config.

Rode o comando **yarn** ou **npm install**. 

Agora rode a aplicação para popular o banco com o comando **node index.js**. Após receber a mensagem "CSV file successfully processed" pode parar a apicação. Só precisa fazer esse processo uma única vez.

## Inicializar o back-end

Na pasta **backend** configure a url do MongoDB, se necessário, no arquivo **.env** linha 3.

Rode o comando **yarn** ou **npm install**. Após a instalação das dependências rode o comando **yarn start** ou **npm start** e deixe o prompt aberto para manter o servidor ativo.

## Rodar a aplicação front-end.

Rode o comando **yarn** ou **npm install**.

Após a instalação das dependências rode o comando **yarn start** ou **npm start**.



