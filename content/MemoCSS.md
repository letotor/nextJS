---
Title:    Cours sur le CSS
layout: post 
Author:   v de GERMAIN  
Date:     17 octobre 2020  
Comment:  This is a comment intended to demonstrate  
          metadata that spans multiple lines, yet  
          is treated as a single value.  
CSS:      http://example.com/standard.css
slug : /monCours/css/
---


# Tout sur le CSS

* Box sizing

```CSS

```

1- Integration du CSS de plusieur maniere   
=> inline   
=>feuille de style sheet.css
=>


## En inline , il faut ecrire du JSX par double {{}} sur l'attribut style ( on saisit en fait du CSS dans {}). De plus l'ecriture des attribut suit la convention CAMELCASE :  
```CSS 
<p style={{fontStyle : 
50px', color : 'red'}}>Commentaire</p>
``` 
Uneautre maniere de faire est de declarer une variable en entete de fichier :  
```CSS
const titleRouge = { 
    fontSize: '50px', 
    color: 'red' 
}
....
<p style={titleRouge} ... 

```  
Autre maniere par import d'un fichier externe monCss.css et l'attribut className : 
```CSS
import '../static/CSS/monCSS.css'
...
<p className="maClasse">Commentaire</p>
```  
fichier monCSS.css : 
```CSS
.maClasse   
{
    color : blue
}
```
Possibilité d'utiliser les backtick pour passer des variable dans l'attribut className et ainsi faire suivre plusieur classe . Example : 


 * Remarque importante :
 * Il y a deux facons de faire l'import dans une classe parents. Ces deux facons n'agissent pas de la meme maniere vers les classes enfants.   
  1- Import du parents et **Egalement** applicable au enfents :
  `import "../static/CSS/monCSS.css";`   
  `<p className="maClasseCSS">Commentaire</p>`  
  2- Import **Uniquement** valable sur la classe concerné sans impacté les enfants:
  `import styles "../static/CSS/monCSS.css";`   
  `<p className={styles.maClasseCSS}>Commentaire</p>` 

  # Bootstrap permet de styler tres facilement un site :
  1- installation de la dependance
  `npm install bootstrap` 
Ceci va modifer le fichier package.json en ajoutant  
`"react-bootstrap": "^1.4.0",`
Ensute realiser l'import dans fichier index.js:  
`import 'bootstrap/dist/css/bootstrap.min.css'`

exemple dans une balise avec une props className:
```CSS
<button className='btn btn-primary' onClick={() => { this.uneFonctionMAJstate(maClasseName)}}>Valider</button>
```  

2- Style components:  
C'est une librairie qui permet de styliser nos composant de maniere tres ciblée ce qui en fait sa force 
[site web](https://styled-components.com/ 'style-component')  
En effet contrairement a bootstrap lui se charge pour toute les pages en question , styled-componenent uniquement au besoins du composant .
il permet de coder du CSS dynamiquement aussi (SAACSS )
installation :
`npm install styled-components`
et ajouter l'extension style-component pour la coloration syntaxique
ajouter dans le composant :
```JS
import styled from 'styled-components'

const Title =styled.h1`
    color: red;
    font-size: 80px;
`
....
  <Title >Commentaire</Title>

``` 

# Cours Graphikart CSS:
## les selecteurs : 
* classname
* id
* type
* combination

Pour appliquer un **style à un élément uniquement s'il a les deux classes**, votre sélecteur ne doit utiliser **aucun espace** entre les noms de classe.

```CSS    
.class1.class2 { color: #f00; }
.class1 .class2 { color: #0f0; }
.class1, .class2 { font-weight: bold; }
```  

```HTML
<div class='class1 class2'>Bold Red Text</div>
<div class='class1'>Bold Text (not red)</div>
<div class='class1'><div class='class2'>Bold Green Text</div></div>
```

**La virgule regroupe les classes** (leur applique le même style à toutes), **un espace vide indique que le sélecteur suivant doit être dans le premier sélecteur** (pas necessairement un enfant).

Par conséquent
```CSS  
.container_12 .grid_6,
.container_16 .grid_8 {
    width: 460px;
}
```  
applique ce style uniquement à la classe .grid_6qui est dans la .container_12classe et à la .grid_8classe qui est à l'intérieur .container_16.

[un exemple pour comprendre](https://qastack.fr/programming/3344284/what-do-commas-and-spaces-in-multiple-classes-mean-in-css 'selecteur CSS')  
## Les differentes box
* type display bloc qui prend une largeur une hauteur et tout les bloc qui suivent vont s'emplier ( deux bloc ne peuvent pas etre a coté l'un de lautre mais en dessous).
il a une largeur et une hauteur et delclenche le passage a la ligne des element suivant

* dislplay inline specifie les element en ling et qui prend en compte que la largeur de leur contenu conteneu (span)
Cet element est en ligne et  il ne fait qu'entouré le contenu 

* display inline bloc est a mis chemin (exemple input) . C'est un inline avec une largeur et une hauteur. 

il en existe plein display bloc, didsplay inline bloc, display inline, display flex etc...


margin : marge interieur
padding marge exterieur
image : style inline box particulier 

le navigateur met un margin  de 8px sur body par defaut :(user agent stylesheet
body dans chrome). Prou al supprimer on doit affecter a l'element body dans le css une nouvelle valeur 
```CSS
body {
	margin: 0;
}
```
LA regele veut que ce soit les styles du navigateur par defaut qui soit chargé en premier . Donc si on ecrit notre regle elle ecrasera celle du navigateur.  

**Fusion de marge :**   
* lorsque deux element adjacent ont des marge c'est lelement qui a des marge la plus grande qui l'emporte l'autre n'est pas visible
 * Il y a aussi des debordement de marge du au element enfant par exemple avec un titre qui a une marge auto de 19px pour remedier il faut jouer sur le padding de l'element parent ( et non le margin a 0 qui n'aura aucune influence car plus petit) . Sinon possibilité d'utiliser la propriete `overflow : hidden`  .
 * LE margin sur les hauteur ne fonctoinne que sur les inline-block ou block pas sur les type inline.

Pour les lien il est preferable d'uiliser un padding plutot que margin pour avoir une zonne cliquable en dehors du texte mais sur toute la boite. 
* Pour les element inline bloc comme les liens il ya toujorus un petit espace entre car cela est du au code html et au saut de ligne entre les balise . Le probleme est remedier si on acccole les balise ( <a/><a/> ) 