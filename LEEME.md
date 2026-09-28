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
