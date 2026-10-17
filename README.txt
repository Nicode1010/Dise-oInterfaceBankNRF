# BANCO NRF
## Demostración de usabilidad y accesibilidad

**Proyecto académico | Diseño de Interfaces – Semana 8**

### 1. Descripción del proyecto

Banco NRF es un prototipo web de banca digital desarrollado con HTML5, CSS3 y JavaScript. Su propósito es demostrar cómo los principios de usabilidad, accesibilidad y diseño responsivo pueden aplicarse en una interfaz gráfica.

La aplicación utiliza información ficticia y permite explorar formularios, validaciones, mensajes de retroalimentación y opciones de visualización.

### 2. Tecnologías utilizadas

- **HTML5:** estructura y organización semántica del contenido.
- **CSS3:** estilos visuales, diseño responsivo, estados de interacción y opciones de contraste.
- **JavaScript:** gestión de eventos, validación de datos, mensajes de estado y cuadro de confirmación.

### 3. Requisitos para la ejecución

- Computador con un navegador web actualizado.
- Visual Studio Code o un editor de código equivalente.
- Extensión Live Server para ejecutar el proyecto localmente.

No se requiere una base de datos, conexión con servicios bancarios ni instalación de dependencias adicionales.

### 4. Instalación y ejecución

1. Descomprime la carpeta del proyecto.
2. Abre la carpeta `demo-usabilidad` en Visual Studio Code.
3. Comprueba que los archivos `index.html`, `styles.css` y `script.js` estén en la misma carpeta.
4. Instala la extensión **Live Server**, de Ritwick Dey, si aún no está instalada.
5. Haz clic derecho sobre `index.html` y selecciona **Open with Live Server**.
6. El navegador abrirá la interfaz para que puedas interactuar con sus funciones.

Si modificas el código, guarda los cambios y vuelve a comprobar la página en el navegador.

### 5. Funciones y pruebas recomendadas

**A. Opciones de visualización**
- Activa y desactiva **A+ Texto grande** para comprobar el cambio en el tamaño de los textos.
- Activa **Alto contraste** y revisa la legibilidad de los botones, formularios, mensajes y cuadros de diálogo.

**B. Validación del formulario**
- Envía el formulario vacío y verifica que aparezcan mensajes de error.
- Introduce un destinatario ficticio y un valor inferior a $1.000.
- Prueba un importe superior al saldo ficticio disponible.
- Ingresa datos válidos y comprueba que se muestre el resumen antes de confirmar.

**C. Confirmación y retroalimentación**
- Selecciona **Volver y modificar** para regresar al formulario.
- Confirma una simulación válida y verifica el mensaje final.
- Comprueba que el mensaje indique expresamente que no se movió dinero real.

**D. Navegación y diseño responsivo**
- Utiliza `Tab` y `Shift + Tab` para recorrer los controles.
- Usa `Enter` o `Espacio` para activar los botones.
- Reduce el ancho del navegador o activa la vista móvil de las herramientas de desarrollo.
- Comprueba que el contenido siga siendo legible y que no aparezca desplazamiento horizontal innecesario.

**E. Consulta de movimientos**
- Selecciona **Consultar movimientos**.
- Verifica que se muestre la lista de operaciones ficticias.
- Regresa a la opción de transferencia y comprueba que el formulario vuelva a estar disponible.

### 6. Criterios básicos de verificación

Durante las pruebas, registra si:

- Las validaciones impiden continuar con datos incorrectos.
- Los mensajes explican qué ocurrió y cómo corregir los errores.
- El cuadro de confirmación permite revisar los datos antes de continuar.
- Las opciones de visualización cambian correctamente.
- La interfaz puede recorrerse mediante teclado.
- Los elementos se adaptan a diferentes tamaños de pantalla.

Anota los errores encontrados, el comportamiento observado y las mejoras que consideres necesarias. La presencia de una función en el código no demuestra por sí sola que haya superado todas las pruebas.

### 7. Estructura del proyecto

- `index.html`: estructura y contenido de la interfaz.
- `styles.css`: estilos, contraste, estados visuales y adaptación a diferentes pantallas.
- `script.js`: eventos, validaciones, navegación y retroalimentación.
- `README.txt`: instrucciones de ejecución y guía de pruebas.

### 8. Alcance y limitaciones

Banco NRF es una demostración educativa desarrollada para la asignatura Diseño de Interfaces. No solicita credenciales bancarias, no se conecta con entidades financieras y no ejecuta pagos ni transferencias reales.

Los movimientos, el saldo y las operaciones son ficticios. Las pruebas descritas son una guía de verificación; los resultados deben registrarse después de ejecutar cada prueba. Este prototipo no constituye una certificación formal de accesibilidad ni de seguridad bancaria.

**Autor:** Nicolás Ríos Flórez  
**Asignatura:** Diseño de Interfaces  
**Actividad:** Reporte de práctica final – Semana 8