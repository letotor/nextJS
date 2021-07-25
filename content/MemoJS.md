---
Title:    Cours sur docker issu de Dyma
layout: post 
Author:   v de GERMAIN  
Date:     15 fevrier 2021 
Comment:  This is a comment intended to demonstrate  
          metadata that spans multiple lines, yet  
          is treated as a single value.  
CSS:      http://example.com/docker.docker
slug : /monCours/JS
---

# CH 4-1 Les protoyype 
[ resumé](https://tutowebdesign.com/prototype-javascript.php "tutowebdesign")  
Le prototype est donc un objet qui représente le constructeur d’objet. 
```JS  
let employee = {
    firstName : 'Damien',
    lastName : 'Bruyndonckx',
    country : 'Belgium',
    sayHello : function(){
        console.log(`${this.firstName} vous dit bonjour !`);
    }
}

console.log(employee);
```  


cela renvoie "[object Object]"
la premiere valeur object est la valeur qui serait retourner par l'operateur typeof
le deuxeimee correspond au constructeur qui a créee la variable employee et c'est la methode constructeur Object

Plusieur objet differents peuvent utiliser le **MEME prototype** et vont herité du prototype commun

Tous les objet JS sont des descendants de pres ou de loin de ce protoype minimal Objet :

```JS
    <prototype>: {…}
    __defineGetter__: function __defineGetter__()
    __defineSetter__: function __defineSetter__()
    __lookupGetter__: function __lookupGetter__()
    __lookupSetter__: function __lookupSetter__()
    __proto__: 
    constructor: function Object()
    hasOwnProperty: function hasOwnProperty()
    isPrototypeOf: function isPrototypeOf()
    propertyIsEnumerable: function propertyIsEnumerable()
    toLocaleString: function toLocaleString()
    toString: function toString()
    valueOf: function valueOf()
    <get __proto__()>: function __proto__()
    <set __proto__()>: __proto__()
```

Le protoype du constructeur Array devient par la suite le prototype de l'objet construit
let tab=[2, 3, 4] un Array est un le nom constructeur primitif
Array.protoype est identique a Object.getPrototypeOf(tab)


constructeur employee :  
    
```JS  
function Employee (firstName, lastName, country='Belgium'){
    this.firstName = firstName;
    this.lastName = lastName;
    this.country = country;
    this.sayHello = function(){
        return `${this.firstName} vous dit bonjour !`;
    }
}

let employee = new Employee('Hans', 'Surless', 'France');
console.log("test");
```  

Employee est le constructeur ( ou fonction constructeur) . Pour creer nouvel ojet on utilise new qui va creer un type Objet
Employee.prototype nous renseigne sur le type ici il s'agit d'un objet ( pas un type primitif) qui a la propriete constructor
identique a 
Object.getPrototypeof(employee)

**LES CONSTRUCTEUR ONT EUX MEME UN PROTOTYPE CAR UN CONSTRUCTEUR EST UNE FONCTION  et QU4UNE FONCTION EST UN OBJET**  
**LE PROTOTYPE DU CONSTRUCTEUR DEVIENT PAR LA SUITE LE PROTOTYPE DE L'OBJET CONSTRUIT**  
