---
Title:    tuto sur tailwind
layout:   post 
Author:   victor de GERMAIN 
Date:     21 juillet 2021 
Comment:  This is a comment intended to demonstrate  
          metadata that spans multiple lines, yet  
          is treated as a single value.  
CSS:      http://example.com/standard.css
slug : /blog/memo/tailwind
---

# Installation de Tailwind couplé a nextJS ( version >10)
1- installation des dependance  
`yarn -D tailwindcss@latest postcss@latest autoprefixer@latest`  
2- Generation des  fichier de config tailwind.config.js & postcss.config.js  
`npx tailwindcss init -p`  
3- suppresion des style inutilisé en prod dans le fichier tailwind.config.js  
  ` purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],`   
4- inclusion de tailwind pour style globaux CSS dans './styles/globals.css' ( ce dernier doit etre inclus dans le premier composant app.js)  
```CSS 
/* ./styles/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```


