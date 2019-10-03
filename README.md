# Meetup
Uma Aplicação com as seguntes funcionalidades:

- Gerenciamento de arquivos
Rota para upload de arquivos que cadastra em uma tabela o caminho e nome do arquivo e retorna todos dados do arquivo cadastrado.

- Gerenciamento de meetups
O usuário pode cadastrar meetups na plataforma com título do meetup, descrição, localização, data e hora e imagem (banner). Todos campos são obrigatórios. Adiciona também um campo user_id que armazena o ID do usuário que organiza o evento.
Sistema com verificação de dulicidade.

O usuário também pode editar todos dados de meetups que ainda não aconteceram e que ele é organizador.
Rota para listar os meetups que são organizados pelo usuário logado.

O usuário deve poder cancelar meetups organizados por ele e que ainda não aconteceram. 

- Inscrição no meetup
O usuário pode se inscrever em meetups que não organiza.
O usuário não pode se inscrever em meetups que já aconteceram.
O usuário não pode se inscrever no mesmo meetup duas vezes.
O usuário não pode se inscrever em dois meetups que acontecem no mesmo horário.
Sempre que um usuário se inscrever no meetup, o sistema envia um e-mail ao organizador contendo os dados relacionados ao usuário inscrito.

- Listagem de meetups
Rota para listar os meetups com filtro por data, os resultados tem paginação. 
Abaixo tem um exemplo de chamada para a rota de listagem dos meetups:
http://localhost:3330/meetups?date=2019-10-15&page=2

- Listagem de inscrições
Rota para listar os meetups em que o usuário logado está inscrito.
Liste apenas meetups que ainda não passaram e ordene meetups mais próximos como primeiros da lista.


************
Sistema com o intuito de estudo no Curso da Rocketseat / 10/2019 - Turma 8 bootcamp
