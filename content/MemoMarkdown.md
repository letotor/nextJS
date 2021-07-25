---
Title:    A Sample MultiMarkdown Document 
layout: post 
Author:   Fletcher T. Penney  
Date:     February 9, 2011  
Comment:  This is a comment intended to demonstrate  
          metadata that spans multiple lines, yet  
          is treated as a single value.  
CSS:      http://example.com/standard.css
slug : /markdown/
---

#  Memo MarkDown
  

[reference] :  
[markdown syntax](https://www.markdownguide.org/basic-syntax/ "tuto texte")  
[markdown syntax](https://www.youtube.com/watch?v=6hikjzymd0c "tuto video")  
keyword: *markdown, fontmatter,markitup*
## Mon header H1 avec === en dessous
===

## mon H2 avec deux diese pas de trait  
### mon H3 avec trois dieses etc...  
--------------- 
~~~
#H1 

H1
---
~~~

Mon header H2 avec === en dessous
===================

Une liste a puce :
---
* une etoie un espace
* l2

Une liste ordonne :
---
1. mon premier chiffre suivit d'un point
2. mon seconde
```JS
1.
2.
```


Mettre son texte en italique
---
*mon texte en italique avec etoile en debut et fin*

Mettre son texte en gras
---
**en gras deux etoile en debut et fin**

un bloc de code :
--- 
``` !<p> ici il est mis mon code avec trois quote
encore du code et encore 
smldfkmsdlfkdfsdf

```

faire un tableau 
---
|dslkfjsldkfj

parser en react
---
```JS
var MarkdownViewer = React.createClass({
    render: function() {
        // pseudo code here, depends on the parser
        var markdown = markdown.parse(this.props.markdown);
        return <div dangerouslySetInnerHTML={{__html:markdown}} />;
    }
});
```
```JAVA 
rem ipsum dolor sit amet consectetur adipisicing elit. Autem, adipisci asperiores. Quam at ad ducimus totam quasi, aut, voluptates rerum autem animi sunt veritatis consectetur minus dignissimos architecto aliquid, reprehenderit nulla voluptas culpa maiores magni. Ipsa cupiditate vero quo quas magnam nam dolore sint magni, quod quia deserunt beatae quisquam dolores tempore harum omnis minima soluta quam odit libero. Magnam dolor aut adipisci optio. Ipsum voluptate repudiandae tempore vel saepe aut dolore sapiente perspiciatis consequuntur, ipsam ex fugit id blanditiis esse sequi dicta odio quibusdam, expedita unde assumenda quam deleniti suscipit itaque. Error cumque sint, consequatur quidem quos amet recusandae enim accusantium culpa, nisi dolorum quaerat consectetur illo, nostrum saepe sequi commodi fugit assumenda sed repudiandae libero necessitatibus odio expedita vel. Reiciendis amet quibusdam quasi, ipsam officiis velit rem nulla a nobis officia minima alias corrupti doloribus laudantium vel animi rerum facere accusantium enim consequuntur in repellat. Consequatur eaque et nam distinctio labore iure harum debitis omnis magnam voluptatibus. Inventore quo error fuga adipisci itaque possimus libero, eligendi vero non ducimus deleniti porro nostrum dolore? Iste adipisci nihil ut, iusto dignissimos est nobis aliquid vel quod nam quibusdam eligendi nisi. Dignissimos, recusandae dolores? Ad dolorum sed voluptatem ***provident*** accusantium veritatis!  
sdfsdfsdf











```
Lo


# Inscrustation d'une images

![Drag Racing](Dragster.jpg)