# Proposta do projeto

Após a realização do projeto de software, foi implementado uma pequena parte deste para desenvolver as competências técnicas da disciplina de Construção de software para internet.
Foi utilizado a plataforma Netflix como estudo de caso, e o objetivo é implementar a exibição do catálogo da mesma.

## Tecnologias envolvidas

Usamos como banco de dados o MongoDB, para o frontend React, e para interpretar tudo usamos node.js.

## Começar

A execução da aplicação requer 3 passos:

- Popular o banco de dados com o arquivo csv (MongoDB);
- Inicializar o back-end;
- Rodar a aplicação front-end.

A partir da raíz temos 3 sub-pastas, backend, frontend e util. Vamos acessar cada uma delas para configurar o projeto.

## Popular o banco de dados  

Acesse a pasta `util`.

Execute o comando `yarn`. 

Crie o arquivo `.env` na raíz do projeto com o conteúdo abaixo com as devidas modificações:
> MONGO_URL=<cole_aqui_sua_url>

Agora execute a aplicação para popular o banco com o comando `yarn start`. Após receber a mensagem "CSV file successfully processed" pode parar a aplicação. Só precisa fazer esse processo uma única vez.

## Inicializar o back-end

Acesse a pasta `backend`.

Execute o comando `yarn`. 

Crie o arquivo `.env` na raíz do projeto com o conteúdo abaixo com as devidas modificações:
> APP_URL=<cole_aqui_a_url>

> MONGO_URL=<cole_aqui_a_url>

Execute o comando `yarn start` e deixe o prompt aberto para manter o servidor ativo.

## Rodar a aplicação front-end.

Acesse a pasta `frontend`.

Execute o comando `yarn`.

Após a instalação das dependências execute o comando `yarn start`.



