## II.3 Elementos flexibles. Ajustando el orden y el tamaño.

Además de modificando las propiedades del contenedor FLEX, podemos actuar sobre los elementos flexibles modificando otra serie de propiedades relacionadas.

En este apartado nos vamos a ocupar de cómo modificar el orden en el que aparecerán los elementos flexibles y de cómo podemos controlar que se encojan o crezcan.

### El orden de los elementos flexibles.

Los elementos flexibles se muestran dentro del contenedor flex en el mismo orden en que están escritos en nuestro código HTML.

Si queremos modificar esto debemos añadir la propiedad CSS **_order_** a los elementos cuyo orden queremos modificar.

Por defecto este valor es 0 y se mostrarán en orden ascendente (primero los de menor valor). En caso de empate se muestra antes el que primero estuviera en el código.

### Ajustando el tamaño de los elementos flexibles.

Para controlar el tamañó de los elementos flexibles disponemos de varias propiedades relacionadas interesantes:

- **flex-grow:** que sirve para indicar, mediante un número, el factor de crecimiento de un elemento flexible cuando se distribuye entre los elementos flexibles el espacio restante. Por defecto es 1 pero si quiero que un elemento participe en el reparto debo añadirle esta propiedad.
- **flex-shrink:** que sirve para indicar, mediante un número el factor de contracción de un elemento flexible cuando el tamaño de todos sobrepasa el tamaño del contenedor. Por defecto es 1 pero si quiero que un elemento participe en la contracción debo añadirle esta propiedad.
- **flex-basic:** que sirve para indicar el tamaño de un elemento antes de que el espacio restante (negativo positivo) se distribuya. Por defecto el valor de esta propiedad es _auto_ y hace que la anchura del elemento flexible se ajusta a su contenido.

Debemos de tener en cuenta que para una correcta maquetación debemos considerar las tres propiedades de manera conjunta. Además, se puede expresar de manera unitaria con la propiedad CSS **flex**. Por ejemplo:

```css
flex: grow-factor shrink-factor flex-basis-value;
```

Para una total comprensión de cómo encogen/crecen estos elementos debemos entender qué es lo que se reparte.

En caso de que los elementos deban crecer (_grow_):

![Flex-Grow](./img/grow.png)

Ese espacio a crecer se repartirá atendiendo al valor que tengan los elementos flexibles en la propiedad **_flex-grow_**.

Así si esos valores fueran: 2,2 y 4 el espacio tendría 8 partes y cada uno crecería la cantidad de partes de su valor.

En caso de que los elementos deban encoger (_shrink_):

![Flex-Grow](./img/shrink.png)

Ese espacio a encoger se repartirá atendiendo al valor que tengan los elementos flexibles en la propiedad **_flex-shrink_**.

Así si esos valores fueran: 2,2 y 4 el espacio tendría 8 partes y cada uno encogería la cantidad de partes de su valor.

Curso desarrollado por [pekechis](http://github.com/pekechis) para [OpenWebinars](https://openwebinars.net/)
