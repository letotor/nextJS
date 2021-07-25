---
Title:    Cours sur docker issu de Dyma
layout: post 
Author:   v de GERMAIN  
Date:     15 fevrier 2021 
Comment:  This is a comment intended to demonstrate  
          metadata that spans multiple lines, yet  
          is treated as a single value.  
CSS:      http://example.com/docker.docker
slug : /monCours/integration/docker
---

# Fonctionnement Docker
- Docker utilise le noyau Linux et l'environnement GNU de votre système.
- Docker utilise un seul système d'exploitation GNU/Linux.
- Docker lance un conteneur qui est un processus.Docker partage le système d'exploitation entre tous les conteneurs qu'il lance, qui sont des simples processus légers.Chaque conteneur a son propre système de fichiers isolé.fourni par une image Docker
- Docker est écrit en langage Go 
- Docker utilise les namespaces Linux qui permettent de créer des espaces isolés sur un système d'exploitation Linux qu permet :  
**l'isolation des processus du conteneur**  
**l'isolation des interfaces réseaux du conteneur**  
**l'isolation des ressources de communications inter-processus**  
**l'isolation du système de fichiers**  
**l'isolation des identifiants du noyau et des versions**  

- Docker utilise également les control groups (cgroups) et  permet de limiter l'accès aux ressources à des processus. Grâce à cela, Docker partage les ressources système disponibles entre tous les conteneurs (RAM, CPU, accès réseaux et lecture / écriture disques etc).

  - Docker Engine contient  (demon+ client)
  -- Le serveur dockerd
  -- L'API REST-
  - - Le client (CLI)

Les objet Docker:
-- Une image Docker :  est un schéma en lecture seule qui contient les instructions pour créer un conteneur Docker.
-- Un conteneur : est une instance d'une image en cours d'exécution qui peut prendre des options de configuration passées lors du lancement.
-- Les volumes : permettent aux conteneurs de stocker des données.
--- Docker permet de Scaler avec Docker
-- Docker Compose est l'outil Docker permettant de définir et de lancer des applications multi-conteneurs.( exemple :un service pour votre base de données, un service pour l'authentification et un troisième pour votre application serveur.
)

- Kuberante et Docker Swarm est un orchestrateur qui permet de gérer facilement plusieurs conteneurs (souvent nombreux) sur de multiples serveurs.