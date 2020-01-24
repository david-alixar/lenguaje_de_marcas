## II.4 Alineación vertical de los elementos flexibles

En apartados anteriores hemos visto que desde el contenedor FLEX se puede establecer la alineación vertical de todos los elementos flexibles que contiene. Esto lo hacíamos con la propiedad CSS **align-items**.

En ocasiones puedo necesitar que un elemento flexible tenga una alineación vertical diferente al resto. En este caso, en el elemento para el que quiero una alineación diferente, debo añadir la propiedad CSS **align-self** que puede tomar los mismo valores (y con el mismo significado) que la propiedad **_align-items_**.

- **flex-start**
- **flex-end**
- **center**
- **strecth** (no debe tener altura establecida)
- **baseline**

**NOTA:** Los elementos flex no hace caso a la propiedad _vertical-align_.

Podemos ver un ejemplo de todo esto en la siguiente imagen:

![Align-Self](./img/alignself.png)

Curso desarrollado por [pekechis](http://github.com/pekechis) para [OpenWebinars](https://openwebinars.net/)
