# Práctica: Buscador de usuarios.
Paso 0: En primer lugar descargamos la base del proyecto y lo dejamos preparado para empezar. (Podemos crear el proyecto desde cero: yarn create vite, o descargar la base del repositorio correspondiente a la práctica).    

Paso 1: En este paso creamos el componente Header y añadimos el input para los usarios que queremos buscar y lo hacemos un componente controlado para cada vez que escribamos algo se repinte (con el estado y el onChange).    

Paso 2: Hemos creado el componente resultados el cuál solo lo vamos a mostrar/renderizar si existen resultados. Antes de bajarnos datos del servidor usamos unos datos de prueba para comprobar que la funcionalidad es la correcta. Como queremos que cada vez que cambien nuestros usuarios buscados repintarlos, creamos el estado resultados que hará que el componente resultados se repinte con los usuarios correspondintes.   

Paso 3: Hay que mirar siempre que datos nos traemos. En este caso data no es un array de users, sino que es un json por lo que tenemos que tomar la propiedad users para obtener el array y ya asi pintarlo correctamente en resultados.

Paso 4: Tenemos ahora 2 botones. En uno de ellos queremos que se traiga todos los usuarios de la API hasta el límite que tenemos en config y en el otroq ueremos que se traiga solo los que coincidan con lo que ha puesto el usario en el input. Para ellos podemos usar la misma función usando prámetros para distinguir que query usar dependiendo de qué boton se ha puslado y traernos unos usuarios u otros. (Una variable let solo existe dentro de el bloque {} en el que se ha creado)

