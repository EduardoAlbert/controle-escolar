CREATE DATABASE 'ControleEscolar'
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

create table IF NOT EXISTS salasdeaula (
    saladeaulaid bigserial constraint pk_salasdeaula PRIMARY KEY,
    descricao VARCHAR(60),
    localizacao VARCHAR(60),
    capacidade INTEGER,
    removido boolean DEFAULT false
);