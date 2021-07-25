---
Title:    Fonctionnement Framework Gatsby  
layout:   post 
Author:   Victor de GERMAIN 
Date:     Jully 19, 2021  
Comment:  Note synthese sur le fonctionnement et l'utilisation du framework gatsby ( SSR CSR)
slug : '/gastby-tuto/'
---

# Rendu coté serveur (SSR)
- Le rendu côté serveur signifie utiliser un serveur pour générer du code HTML à partir de modules JavaScript en réponse à une demande d'URL.
- Le rendu côté serveur au moment de la construction signifie simplement que nous invoquons les mêmes API côté serveur invoquées par une application rendue côté serveur traditionnelle. Nous rendons un composant React en HTML optimisé et pré-rendu. Si nous considérons d'abord un composant React, par exemple
- Le SSR fonctionne identiqumement au serveur php ou C#. Le serveur basé sur NODE JS va generer donc le code html à partir du module javascript suite a une request(url).
Gastby build correspond a un type de serveur basé sur node qui va construire les page html a partir des differentes données agrégées
 - Le CSR : i le navigateur lit le code javascript qui va modifier le dom html pour le rendu coté client

les SPA ( single page application ) sont de type CSR car uen seul page . Toute les demandes url seront redirigé vers le meme document HTML. C'est ici qu'intervient le routage JAVACscript ( mecanisme de routage url coté client sur une page). 
React est basé coté client donc en CSR puisque javascript qui modifie le dom

-le routage JS : coté client les  URL -> MAJ du DOM
au chargement de la page, page vierge -> chargement du bundle JS
Chaque requête d'URL déclenche une mise à jour DOM au lieu d'une requête réseau.

- Avantage inconvenient du CSR :
-   temps d'attente au premier chargement ( bundle js loading)
-   rapidité de navigation interne car tout est chargé juste modification du DOM par la suite
-   pb de referencemenent puisque SPA, ( pas de metadonnée description etc ) est generé partielmeent par modification du NODE

- le SSR corrige le pb du temps de chargement et referencement

# Processus hydration :
[video explicative](https://www.youtube.com/watch?v=fypmxYZGrfA 'principe hydration')
-   Gatsby construit la page HTML au moement du build et sert la page de pré rendu du serveur au navigateur avec un MINIMUM de code JAvascript et valorise les donnée du dom par la methode ReactDOM.hydrate(). 
-   le site recuperer l'application non responsive ( pas d'interaction) , ensuite l'appli telecharge le fichier d'accompagnement a partir du serveur . ce fichier contient script avec le chargement de tous le sevenement et accroche les fonctionnalités sur les balise du render 
2 etape dans le processus de l'hydration : 
1- chargement du rendu sans evenement
2- chargement du script pour les interaction

2 Forme de hydration
![hydration](image/hydration.png)
- Génération statique (SSG): HTML est généré au moment de la construction.
- Rendu côté serveur: du HTML est généré à chaque demande utilisateur.


# creer noeud lors de la compilation
- CreateNodefonction sera appelée par Gatsby chaque fois qu'un nouveau nœudx²