---
Title:    Cours sur docker issu de Dyma
layout: post 
Author:   v de GERMAIN  
Date:     15 fevrier 2021 
Comment:  This is a comment intended to demonstrate  
          metadata that spans multiple lines, yet  
          is treated as a single value.  
CSS:      http://example.com/docker.docker
slug : /monCours/prestashop
---

/* Webbax - TUTO 62 - contenu HTML illimité */


1-inserer un bloc avant ou apres un autre block donc la classe est defini par jquery $('.block-category')
Il faut inspecter l'lement via l'inspecteur sur le site en front 
recuperer le nom de la classe de l'element
definir son style dans l'attribut class (par defaut  card card-block)
```JS
/* test séquence 1 */
$('.block-category').before('<div class="card card-block">Voilà mon texte avant dans la catégorie</div>');
$('.block-category').after('<div class="card card-block">Voilà mon texte après dans la catégorie</div>');
 

/* test séquence 2 */
if(prestashop.language.language_code=="fr"){
    var message = 'Actuellement 10% sur tout le catalogue';
}
if(prestashop.language.language_code=="de"){
    var message = 'Derzeit 10% auf den gesamten Katalog';
}
$('#search_filters').after('<div class="card card-block">'+message+'</div>');

/* test séquence 3 */
$('#search_filters').after('<div class="card card-block"><img src="https://www.webbax.ch/wp-content/uploads/2017/01/cropped-webbax.png" style="width:100%" /></div>');

/* test séquence 4 */
$('#contact-link a').prepend('>> ');
$('#contact-link a').append(' <<');

``` 

# AJOUTER UNE FONCTIONNALITÉ PRESTASHOP SURCHAGE de FONCTION ( modification de la pagination des commandes )
exemple :
- On veut etendre une classe controllers/admin/AdminOrdersContollers.php qui se trouve dans le dossier ./controllers. Elle gere la pagination apres analyse
-  Or celle ci herite deja de la classe AdminControllers.php dans dossier ./classes
 racine
- on surcharge cette classe dans le dossier override en gardant la structure interne. ici .override/classes/controlller/AdminControllers.php

```CSS 
class AdminController extends AdminControllerCore{
      /** @var array Number of results in list per page (used in select field) */
    protected $_pagination = array(20, 50, 100, 300, 1000);

    /** @var int Default number of results in list per page */
    protected $_default_pagination = 50;
}
``` 

- ensuite vide le cache coté navigateur et aussi dans var/cache/{ENV}/classe_index.php a SUPPRIMER.

# CREER UN MODULE PRESTASHOP


# Migration prestashop
- Export de la BDD en .zip configuration personnalisé dans l'export phpMyadmin
- Export de fichier sur O2switch via JetBackup -> File manager 
- import du fichier .sql en  caracterset UTF8 par defaut
- dezippage du dossier des fichieer ftp
- 
- configuration
- ps_shop_url : UPDATE `pscz_shop_url` SET `domain` = 'creacultureperma.local', `domain_ssl` = 'creacultureperma.local', `physical_uri` = '/'  WHERE `pscz_shop_url`.`id_shop_url` = 1;
- ps_configuration : ligne PS_SSL_ENABLED/ ( activation du ssl)
                        UPDATE `pscz_configuration` SET `value` = '1' WHERE `pscz_configuration`.`name` = `PS_SSL_ENABLED`;
                    ligne  	PS_SSL_ENABLED_EVERYWHERE/ ( activation du ssl)
                        UPDATE `pscz_configuration` SET `value` = '1' WHERE `pscz_configuration`.`name` = `PS_SSL_ENABLED_EVERYWHERE`;
                    ligne PS_SHOP_DOMAIN
                    UPDATE `pscz_configuration` SET `value` = 'creacultureperma.com' WHERE `pscz_configuration`.`name` = `PS_SHOP_DOMAIN`;
                    ligne PS_SHOP_DOMAIN_SSL
                    UPDATE `pscz_configuration` SET `value` = 'creacultureperma.com' WHERE `pscz_configuration`.`name` = `PS_SHOP_DOMAIN_SSL`;
                    
 - Modification du fichier parameter.php -> creacultureperma\app\config>parameter.php:
   'database_host' => 'localhost',
    'database_port' => '',
    'database_name' => 'uxkn8309_crea',
    'database_user' => 'uxkn8309_crea',
    'database_password' => '3pf]p@SB63',

- verifier les lien url du site a jour et les images aussi