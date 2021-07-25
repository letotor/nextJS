---
Title:    Cours sur docker issu de Dyma
layout: post 
Author:   v de GERMAIN  
Date:     15 fevrier 2021 
Comment:  This is a comment intended to demonstrate  
          metadata that spans multiple lines, yet  
          is treated as a single value.  
CSS:      http://example.com/docker.docker
slug : /monCours/mysql
---

# connection a mysql
mysql -u root

## montrer toute els base
show databases;

## se connecter a une base
connect mabase;

## lister les table
show tables;


## creer une BDD en ligne ed commande
mysql -uroot -e "CREATE DATABASE wordpress;"