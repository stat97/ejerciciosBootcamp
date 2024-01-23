Edita el fichero style.css en las líneas indicadas para conseguir el resultado propuesta en la siguiente imagen.

**Resultado deseado**

---
![Alt text](<Captura de Pantalla 2022-09-05 a las 17.14.13.png>)


**Autoevaluación**

---

- El primer div y el tercer div tienen 32 píxeles entre el texto y el borde.
- El primer div tiene 12 pixeles entre si mismo y otro elemento.
- Hay un hueco de 48 pixeles entre el segundo div y el tercer div.
- El tercer div está alineado a la derecha y utiliza solamente margin para ello.

**Html code**

---

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Margin and Padding 1</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <div class="one">
      PRIMER DIV
    </div>
    <div class="two">
      SEGUNDO DIV
    </div>
    <div class="three">
      TERCER DIV
    </div>
  </body>
</html>
```

**Css code**

---

```css
body {
  max-width: 600px;
  margin: 0 auto;
}

.one {
  background: pink;
  border: 3px solid black;
  /* CAMBIAR */
  padding: 0px;
  margin: 0px;
}

.two {
  background: lightblue;
  border: 3px solid black;
  /* CAMBIAR */
  margin-bottom: 0px;
}

.three {
  background: peachpuff;
  border: 3px solid black;
  width: 200px;
  /* CAMBIAR */
  padding: 0px;
  margin-left: 0px;
}
```