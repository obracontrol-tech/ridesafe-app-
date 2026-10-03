## Versión 4.4.4 — Fuentes, bares y farmacias a la vista
- Botón ☕ del mapa: ahora pregunta «¿Qué quieres hacer?» → «Ver fuentes, bares y farmacias aquí» (salen en el mapa de la zona que miras: 💧 agua, ☕ bares, 🛒 tiendas, 💊 farmacias, 🔧 talleres; toca uno → «Cómo llegar») o «Añadir un punto ciclista». Antes ese botón solo servía para añadir.
- Al planificar una ruta, las paradas en la ruta se cargan solas (ya no hay que bajar hasta el final y pulsar «Ver paradas»).

## Versión 4.4.3 — El viento y el semáforo ya no fallan si un servicio no responde
- Antes, si Open‑Meteo (el servicio gratuito del tiempo) no respondía, desaparecían a la vez el perfil de desnivel, el semáforo de la ruta y el botón «☕ Ver paradas», y el viento daba «No se pudo consultar».
- Ahora se reintenta y, si sigue sin responder, se usan servicios gratuitos de respaldo: desnivel con OpenTopoData; viento y tiempo con MET Norway (instituto meteorológico de Noruega). La tarjeta del viento indica qué fuente se ha usado.
- El semáforo y «Ver paradas» se muestran siempre que haya ruta. Sin ningún dato, el semáforo sale en gris «Sin datos ahora» con botón «Volver a intentarlo» (antes salía en verde sin haber comprobado nada).
- Paradas (fuentes, bares, farmacias, talleres): 4 servidores de mapas en vez de 2, con 20 s de espera cada uno.

## Versión 4.4.2
- Planificador «De A a B»: al buscar la salida o la llegada, la pantalla queda limpia. Se esconde el panel de la ruta que asomaba por detrás, el mapa se ve claro (solo se oscurece un poco abajo) y la ventana muestra en grande qué punto eliges: 🟢 A salida, 🔴 B llegada o ➕ parada.
- sw-maps.js igualado con sw.js (copia de seguridad del service worker).

## Versión 4.4.1
- Arreglado: con la letra grande del móvil, la ventana «Para no perderte ningún aviso» (al empezar una salida) no dejaba ver el botón «Entendido» y la app se quedaba bloqueada. Ahora todas las ventanas de aviso se pueden deslizar, el botón queda siempre a la vista y tocando fuera también se cierra. Texto de la ventana más corto.

## Versión 4.4 — Alcanza tu grupo
- Para quien llega tarde a una salida que ya ha empezado. Aparece sola en la ficha de la salida y en Inicio («Tu grupo ya ha salido») si estás apuntado y no estás rodando con ellos.
- Muy sencilla: «Tu grupo está a 3 km. Llegas en unos 9 minutos», un mapa pequeño (🔵 Tú, 🟢 Tu grupo, 🚩 Os juntáis) y dos botones: «🧭 Llévame con mi grupo» y «📣 Avisar: Voy para allá».
- Si van muy rápido: «Espera a tu grupo · Espéralos en [sitio]. Pasarán sobre las 10:30». Si no da tiempo: «Hoy no llegas a tiempo» con botón para avisar.
- Por dentro: sitúa al grupo sobre la ruta con las posiciones en directo (o con la hora de salida si nadie comparte), busca el punto de la ruta POR DELANTE del grupo al que llegas antes que ellos y más cerca de ti (nunca en sentido contrario ni por donde ya han pasado) y te guía con voz sin autovías.
- Al juntarte con el grupo (a menos de 150 m durante 45 s): «¡Ya estás con tu grupo!», el grupo recibe «✅ Ya está con vosotros» y la guía pasa a la ruta de la salida.
- Avisos nuevos 🚴 «Voy para allá» y ✅ «Ya está con vosotros» (suaves, sin sirena). Para que lleguen con la app cerrada y al Garmin hay que volver a desplegar la función con cmd_funcion_v4.4.txt en Cloud Shell.
- Mientras vienes de camino no sales como «descolgado» en los avisos del grupo.

## Versión 4.3 — Avisos en el Garmin
- Avisos nuevos durante la salida (botón «➕ Más»): ⚙️ Avería, 🚑 Caída, 🐢 Me quedo atrás y 📣 Aviso del jefe de ruta (con texto; solo organizador, administrador, jefe de pelotón o responsable de la grupeta).
- Textos cortos pensados para la pantalla del Garmin o del reloj: «🔧 Toni: PINCHAZO».
- Perfil → «⌚ Avisos en mi Garmin»: modelos compatibles, pasos para activarlo y botón «Probar aviso en mi Garmin».
- Función de Firebase avisoPeloton actualizada (hay que volver a desplegarla con cmd_funcion_v4.3.txt en Cloud Shell).

## Versión 4.2 — Máximo desarrollador: ética, sanciones y novedades
- Código ético del ciclista (8 normas), visible para todos en Perfil → Ayuda.
- Consola Master → «⚖️ Ética y sanciones»: sancionar ciclistas (aviso, suspensión 7 o 30 días, expulsión con opción de borrar su contenido) y clubes (aviso a sus administradores o suspensión), con motivo del código ético y explicación; levantar sanciones; historial completo.
- El servidor (reglas v4.2) bloquea a los sancionados: no pueden publicar, apuntarse ni entrar en clubes. Un club suspendido queda bloqueado para sus miembros y su administrador no puede quitarse la sanción.
- En la app: aviso al ciclista con «Entendido», banner de suspensión o expulsión con el motivo, banner de club suspendido o avisado.
- Consola Master → «🚀 Novedades»: anunciar próximas actualizaciones y novedades ya disponibles. En la app salen en Comunidad y en Perfil → «Novedades y próximas actualizaciones».

## Versión 4.1 — Consola Master
- Nueva página privada master.html («Consola Master»), oscura y con la imagen de RideSafe IA, solo para el propietario: Resumen con gráficas, Clubes (oficial, administradores, jefes, ver, borrar), Ciclistas (puntos, bloquear, borrar contenido, Excel), Salidas (todas, limpiar antiguas), Contenido, Reportes, Aviso general y Copias y restaurar (copia de seguridad .json y restauración con confirmación).
- Acceso: entrar con Google; la comprobación la hacen las reglas de Firebase (v4.1). No está enlazada para los usuarios y no aparece en buscadores.
- En la app: Panel de administración → «🖥️ Abrir Consola Master».

## Versión 4.0 — Clubes privados
- Cada club es un espacio privado: salidas, rutas, actividad, puntos ciclistas, ranking y ciclistas cercanos solo los ven los miembros de ese club. Lo garantizan las reglas de Firebase v4.0 (hay que publicarlas).
- Grupetas dentro del club (MTB, Carretera adultos, Veteranos, Escuela infantil…) con modalidad, nivel y responsables. Cada ciclista se apunta a las suyas; el administrador del club puede cambiarlo.
- Crear salida: «¿Para quién es?» → Todo el club o una grupeta. Las rutas compartidas también se asignan al club o a una grupeta.
- Nuevo papel: 🛡️ Administrador del club (el creador y los que él nombre). Pantalla «Administración del club»: Grupetas, Salidas y rutas (borrar, limpiar historial), Rankings (reiniciar o borrar por grupeta), Miembros (grupetas, papeles, quitar del club, descargar lista del club) y Privacidad.
- Ranking del club por kilómetros: general y por grupeta. Se suma al terminar cada salida.
- 🎯 Responsable de grupeta: gestiona las salidas de su grupeta.
- Propietario de la app: botón «🔧 Pasar datos antiguos a su club» (Panel → Resumen) y 🛡️ para nombrar administradores de cualquier club.

## Versión 3.9.1
- Tarjeta para redes sociales (Actividades → foto con tus datos): formatos Historia 9:16, Publicación 4:5 y Cuadrada 1:1; escudo del club; recorrido opcional; botón «📤 Publicar en redes» (menú del móvil: Instagram, Facebook, WhatsApp, Strava, X…) y texto (sin emoticonos) con hashtags que se copia solo.
- Desnivel: si el GPS del móvil no da altitud (salía «+0 m»), se calcula con el mapa de altitudes (Open‑Meteo) al terminar la salida o al hacer la foto.
- Arreglado: la foto ya no se dibuja dos veces si se cambia de formato rápido.

## Versión 3.9
- «🧭 Cómo llegar» ya no abre Google Maps: guía dentro de la app con Mapbox (mapa, km, minutos, hora de llegada, indicaciones en español, En bici / En coche y «▶ Guiarme con voz»).
- Funciona en punto de salida, punto de encuentro, puntos ciclistas, aviso de un compañero (durante la salida, sin cortar la grabación) y en la página de la familia (camino en coche dibujado en el mapa).
- Quitado el botón «Abrir en Google Maps» del planificador. Queda «📱 Abrir en otra app de mapas» como opción secundaria.

## Versión 3.8.1
- Tarjeta dedicada al viento: botón «🌬️ Ver previsión del viento por horas» en el detalle de la salida y «🕐 Ver por horas» al crearla. Muestra viento a la hora de salida, consejo, aviso si el viento cambia durante la mañana, previsión hora a hora (suave / moderado / fuerte), botón Actualizar, enlace al mapa del viento (Windy) y la fuente (Open‑Meteo, gratis).

## Versión 3.8
- Crear/editar salida: tarjetas «Recorrido previsto» (pueblos por los que se pasa, en orden), «Parada prevista» (café, desayuno, avituallamiento o descanso, hora y notas) y «Planificación con viento».
- Botón «🌬️ Consultar viento»: velocidad, rachas, dirección con flecha, hora de consulta y consejo (ida con viento en contra, vuelta a favor). Datos gratis de Open-Meteo para el día y hora de la salida.
- La tarjeta de la salida, el detalle, el mensaje de WhatsApp y la tarjeta-imagen muestran recorrido, parada y viento.

## Versión 3.7
- Planificar rutas más fácil: con A y B puestos, cada toque en el mapa añade una parada «pasar por aquí» en el sitio lógico del recorrido; los puntos se arrastran.
- Carretera = solo asfalto (sin caminos, pistas ni autovías). Montaña = caminos y pistas. Selector dentro del planificador; al cambiarlo, la ruta se recalcula.
- Botón «🗺️ Ver mapa» para plegar el panel y ver más mapa.

## Versión 3.6
- Modo ahorro 🌙 durante la salida: pantalla totalmente negra (casi no gasta en pantallas OLED), el GPS sigue grabando y los avisos siguen sonando. Dos toques para volver. Si llega un aviso del pelotón, la pantalla se enciende sola.
- (La conexión con Strava queda preparada pero desactivada hasta poner el Client ID.)

## Versión 3.5
- Strava: botón «Conectar con Strava» en Actividades. Las salidas en bici del reloj se importan solas (últimos 30 días la primera vez; luego al abrir la app cada 30 min o con «Sincronizar ahora»). Enlace «Ver en Strava» en cada actividad importada.
- Necesita: Client ID de Strava en index.html (STRAVA_CLIENT_ID), el secreto en Firebase y desplegar las funciones nuevas.

## Versión 3.4
- Ubicación para la familia: tarjeta en Comunidad (y botón 📡 durante la salida). Se envía por WhatsApp un enlace a familia.html: el familiar ve el mapa en directo sin instalar nada. 1, 3 u 8 horas, o mientras dure la salida. Barra verde arriba con «Parar».
- Archivo NUEVO: familia.html (hay que subirlo también).

## Versión 3.3
- Barra inferior adaptable: Rutas, Comunidad, Actividades y Perfil caben enteros en cualquier móvil, también con letra grande.

## Versión 3.2 — Seguridad
- La app limpia todo texto que llega de la base de datos (evita inyección de código).
- Escudos: solo se aceptan imágenes válidas.
- Reglas: no se pueden listar grupos ni enlaces familiares; la posición en vivo solo la ven los apuntados; salidas «del grupo» solo por miembros; identificadores validados.
- ¡Reglas nuevas! Firestore → Reglas → pegar firestore.rules → Publicar.

## Versión 3.1
- Jefes de pelotón por club/grupo: el creador del grupo (o el administrador desde Panel → Contenido → Grupos → ⭐) nombra jefes. Pueden editar y cancelar las salidas del grupo, borrar comentarios, expulsar ciclistas, poner un aviso al grupo y el escudo (si es club).
- ¡Reglas nuevas! Firestore → Reglas → pegar firestore.rules → Publicar.
- Subir a GitHub: index.html, sw.js y sw-maps.js (no tocar CNAME).

## Versión 3.0.1
- «🛰️ Empezar salida» aparece también antes del día (pide confirmación), para poder probar el pelotón y los avisos.

## Versión 3.0
- Notificaciones push (Firebase Cloud Messaging): avisos del pelotón aunque la app esté cerrada. Interruptor en Perfil.
- Necesita: plan Blaze, clave Web Push (VAPID) en index.html, la función de RideSafe_notificaciones.zip y reglas nuevas.

## Versión 2.9
- Avisos del pelotón también por WhatsApp (suena aunque la app esté cerrada): tras 🔧/✋/🆘/✅ aparece «📲 Enviar también por WhatsApp» con el mensaje y la ubicación.
- Al empezar una salida en grupo: consejo para dejar la app abierta en el manillar y petición de permiso de notificaciones.
- Si la app está en segundo plano pero viva, llega una notificación con vibración.
- Subir a GitHub: index.html, sw.js y sw-maps.js (no tocar CNAME).

## Versión 2.8
- Botón de asistencia más claro: «✋ Voy» para apuntarse; «Apuntado ✓ · Toca para cancelar» cuando ya vas; al pulsarlo pregunta «¿Quieres desapuntarte?» (Cancelar / Desapuntarme). El organizador ve «👑 Organizas tú».
- Subir a GitHub: index.html, sw.js y sw-maps.js (no tocar CNAME).

## Versión 2.7
- Pantalla del mapa más limpia: todos los botones a la mitad de tamaño y los laterales agrupados en una sola columna.
- Subir a GitHub: index.html, sw.js y sw-maps.js (no tocar CNAME).

## Versión 2.6
- Capas del mapa nuevas (Mapbox): Outdoors, Calles, Híbrido, Satélite, Carretera, Noche, Claro y Oscuro, más el Normal sin conexión. Menú con vista previa real de cada capa.
- Subir a GitHub: index.html, sw.js y sw-maps.js (no tocar CNAME).

## Versión 2.5
- Actividades: la tarjeta «Sube tu salida» se puede cerrar con ✕ (queda un botón pequeño «⬆️ Subir» arriba).
- Subir a GitHub: index.html, sw.js y sw-maps.js (no tocar CNAME).

## Versión 2.4
- Tarjeta principal: la bicicleta decorativa pasa arriba, detrás del título y el texto, con baja opacidad; los botones quedan libres.
- Subir a GitHub: index.html, sw.js y sw-maps.js (no tocar CNAME).

## Versión 2.3
- Todas las ventanas se pueden cerrar: botón ✕ siempre visible, botón «atrás» del móvil, deslizar hacia abajo o tocar fuera.
- Subir a GitHub: index.html, sw.js y sw-maps.js (no tocar CNAME).

## Versión 2.2
- Pantalla de grabación rediseñada: sin panel negro; datos y botones en tarjetas flotantes translúcidas con desenfoque. El mapa se ve detrás de todo.
- Subir a GitHub: index.html, sw.js y sw-maps.js (no tocar CNAME). Reglas: usar firestore.rules de la 2.1.2.

## Versión 2.1
- Club oficial con escudo: el administrador marca un grupo como club (Panel → Contenido → Grupos → 🏅). Solo los clubes pueden poner escudo (el admin o el creador del grupo).
- El escudo aparece en la tarjeta del grupo, en su ficha, en sus salidas y en la tarjeta de WhatsApp.
- ¡Hay reglas nuevas! Firebase → Firestore → Reglas → pegar firestore.rules → Publicar.
- Subir a GitHub: index.html, sw.js y sw-maps.js (no tocar CNAME).

## Versión 2.0
- Avisos al pelotón en una salida en grupo: 🔧 Pinchazo, ✋ Esperad, 🆘 Ayuda.
- A los demás: pantalla completa de color, sirena fuerte, vibración y voz con el nombre y la distancia; botones Ver en el mapa / Cómo llegar. El que avisa pulsa ✅ Solucionado.
- El aviso queda escrito en los comentarios de la salida con la ubicación.
- Comunidad → Probar aviso de pinchazo (para comprobar el volumen).
- Subir a GitHub: index.html, sw.js y sw-maps.js (no tocar CNAME). Las reglas de Firebase no cambian.

## Versión 1.9
- Tarjeta de la salida para WhatsApp: imagen con título, día, hora, mapa (Mapbox Outdoors) con salida y encuentro, datos y enlace para apuntarse.
- En cada salida: botón "📲 Compartir en WhatsApp" → Compartir / Guardar / Solo texto.
- Subir a GitHub: index.html, sw.js y sw-maps.js (no tocar CNAME). Las reglas de Firebase no cambian.

## Versión 1.8
- Nuevo selector de mapa (botón de capas): Normal, Outdoors (Mapbox) y Satélite. La app recuerda la elección.
- Outdoors necesita conexión; los mapas sin conexión siguen siendo el Normal.
- Subir a GitHub: index.html, sw.js y sw-maps.js (no tocar CNAME). Las reglas de Firebase no cambian.

# RideSafe IA — versión 1.7 (panel de administración ampliado)

Perfil → 🛡️ Panel de administración (solo tu cuenta de Google):
- 📊 Resumen: ciclistas, activos 24 h, salidas, publicaciones, puntos, rutas, grupos, reportes
  + gráficas de ciclistas nuevos y salidas creadas (últimos 14 días).
- 👥 Ciclistas: buscador, ficha de cada uno, ✏️ ajustar puntos, 🚫 bloquear/desbloquear
  (bloqueado = no puede crear salidas, publicar, comentar ni añadir puntos o rutas),
  🗑️ borrar todo su contenido, ⬇️ descargar la lista en Excel (CSV).
- 📅 Salidas: todas las próximas con apuntados; ver o borrar.
- 🗂️ Contenido: publicaciones, puntos, rutas y grupos con botón de borrar.
- ⚠️ Reportes: borrar contenido o descartar.
- 📣 Aviso: mensaje que ven todos arriba en Comunidad (se puede quitar).

1. FIREBASE (imprescindible): Firestore → Reglas → pegar firestore.rules → Publicar.
2. GITHUB (ridesafe-app-): sube index.html, sw.js y sw-maps.js. No toques CNAME.
