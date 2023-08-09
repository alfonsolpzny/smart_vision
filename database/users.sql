BEGIN TRANSACTION;
CREATE DATABASE IF NOT EXISTS dbui;
USE dbui;
--DROP TABLE IF EXISTS "program";

--Create Tables
CREATE TABLE IF NOT EXISTS users (
    username VARCHAR(50) NOT NULL PRIMARY KEY,
    password VARCHAR(50) NOT NULL,
    fullname VARCHAR(50) NOT NULL
);

INSERT INTO users(username, password, fullname) VALUES 
('gkn', '$2a$10$WsM1W6efPpKmygkBugLl/..oCsN4U1oS14VPD4Iw/MY5yohgnVWl.','gkn');
