docker run \
--user eduardomail@gmail.com \
 --name postgres \
 -e POSTGRES_USER=edusouzas \
 -e POSTGRES_PASSWORD=123456 \
 -e POSTGRES_DB=heroes \
 -p 5432:5432 \
 -d \
 postgres

 ------ ver o deamon que está rodando
 docker ps
 
 ------ entrar na imagem
 docker exec -it postgres /bin/bash

--- admin client
 docker run \
    --name adminer \
    -p 8080:8080 \
    --link postgres:postegres \
    -d \
    adminer

--- mongodb
docker run \
    --name mongodb \
    -p 27017:27017 \
    -e MONGO_INITDB_ROOT_USERNAME=admin \
    -e MONGO_INITDB_ROOT_PASSWORD=123456 \
    -d \
    mongo:4    