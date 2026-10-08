## Versión 5.4.1 — Botones de la derecha al grabar
- Los botones redondos de la derecha (brújula, luna, voz, centrar, capas, compartir) ya no quedan tapados por la tarjeta de abajo.
- Si no caben, se quedan los más usados (🌙 ahorro, 🔊 voz, centrar) y el resto va al botón «⋯»: al tocarlo salen al lado y se cierran solos.
- El texto de los créditos del mapa (Waymarked Trails, OpenStreetMap…) va arriba a la izquierda y recogido.

## Versión 5.4 — Revisión antes de salir
- En cada salida programada: botón «✅ Revisión antes de salir · tiempo y lista».
- Semáforo 🟢🟡🔴 con los avisos (tormenta, rachas, lluvia, calor, frío/hielo, llegar de noche o salir antes del amanecer).
- Fiabilidad según los días que faltan (orientativa >4 días, bastante fiable 3–4, fiable mañana, muy fiable hoy).
- «Cambios desde tu última revisión»: 🔺 empeora / 🔻 mejora (lluvia, rachas, viento, temperaturas).
- Hora a hora durante la salida (temperatura, lluvia, viento con flecha y rachas) y viento en la ruta (primera y segunda mitad).
- Lista para marcar (bici, kit, agua, móvil…) que añade sola chubasquero, abrigo o crema según el tiempo. A pie, lista de senderismo.
- «📲 Mandar el parte al grupo» por WhatsApp con enlace directo a la revisión.
- El recordatorio de la víspera abre directamente la revisión (función «recordatorioSalidas» actualizada: cmd_funcion_v5.4.txt).

## Versión 5.3 — Previsión más exacta: consenso de 3 modelos
- El viento, las rachas, la lluvia y las tormentas se calculan cruzando 3 modelos: ECMWF IFS 9 km (el europeo de referencia), ICON (alemán) y Météo‑France (AROME de alta resolución cerca de Francia y Cataluña; ARPEGE en el resto).
- Viento: el valor del medio de los 3. Rachas: la más fuerte de los 3 (por seguridad). Lluvia: cuántos modelos la ven → «seguro», «probable» o «posible» (p. ej. «🌧️ Lluvia probable en la próxima hora (2 de 3 modelos)»).
- Se usa en: viento en ruta, semáforo de «¿salgo hoy?», planificación con viento por horas y el tiempo de las salidas (hasta 4 días vista).
- Si ese servicio falla, la app sigue con la previsión de siempre (Open‑Meteo y MET Norway).

## Versión 5.2 — Avisos también en iGPSPORT, Wahoo, Bryton y relojes
- Perfil → «⌚ Avisos en mi Garmin, iGPSPORT o reloj»: ahora se elige la marca (Garmin · iGPSPORT · Wahoo, Bryton, reloj…) y salen sus pasos.
- iGPSPORT: activar las notificaciones en la app iGPSPORT, dar «Acceso a notificaciones» a iGPSPORT en Android y batería «Sin restricciones».
- El botón de prueba dice el nombre de tu aparato.
- Corregido el paso 1: el interruptor se llama «🔔 Avisos con la app cerrada».

## Versión 5.1 — Viento en ruta, avisos del tiempo y menos batería
- Al grabar, debajo de la velocidad sale el viento: «22 km/h en contra / a favor / de costado», rachas y de dónde viene. La flecha indica cómo te da respecto a tu marcha.
- Lo dice en voz al empezar y cuando cambia (al girar la carretera, si se mantiene). Tocando la tarjeta del viento lo repite.
- Avisos en voz, vibración y notificación: 🌧️ lluvia en la próxima hora, ⛈️ tormenta, 💨 rachas fuertes (45 km/h en bici, 60 a pie) y 🔋 batería baja.
- Se mira el tiempo cada 15 minutos o al avanzar 8 km (Open‑Meteo; si falla, MET Norway). Gasta muy pocos datos.
- Ahorro de batería: con la pantalla apagada o en modo ahorro 🌙 no se pinta nada; el mapa se mueve cada 2 s en vez de cada segundo y la línea se redibuja cada 3 s.
- Con la batería al 30% se activa solo el ahorro (el mapa se mueve cada 5 s). En la pantalla negra también sale el viento.

## Versión 5.0.2 — Más mapa en el diseñador
- Botón «⌄ Ver más mapa» arriba de la tarjeta (o deslizarla hacia abajo): la tarjeta se queda en una barra fina abajo y se ve casi todo el mapa (también se oculta la barra de menús).
- La barra muestra km y desnivel y tiene ↶ Deshacer, 🛣️/📏 Caminos o Recta y 🚵 Senderos. Se sigue tocando el mapa para añadir puntos.
- «⌃ Abrir» vuelve a mostrar la tarjeta entera.
- El título es más corto («Diseñador») para que se vean bien «Detalles» y «Cancelar».

## Versión 5.0.1 — Avisos de las salidas programadas
- Con «🔔 Avisos con la app cerrada» activado (Perfil), llegan al móvil:
  · 🚴 Salida nueva de tu club (o de tu grupeta).
  · ⚠️ Cambio de día, hora o lugar, y ❌ salida cancelada (a los apuntados).
  · Recordatorio la víspera (a partir de las 20:00) y ⏰ 1 hora antes (a los apuntados).
- Necesita subir las funciones «salidaAviso» y «recordatorioSalidas» (cmd_funcion_v5.0.1.txt).

## Versión 5.0 — Diseñador de rutas (como gpx.studio / Trailforks)
- Rutas → «Planificar» o «✏️ Diseñador de rutas»: tocas el mapa punto a punto.
- Nuevo selector: «🛣️ Por caminos» (sigue carreteras y pistas) o «📏 Línea recta» (para senderos y trialeras que no salen en el mapa). Se pueden mezclar en la misma ruta.
- «🚵 Ver senderos»: pinta encima del mapa las rutas marcadas de OpenStreetMap (Waymarked Trails): BTT en Montaña, senderismo en A pie, cicloturismo en Carretera. También en «Capas».
- «⇄ Invertir»: la ruta al revés.
- Retocar cualquier ruta o GPX: al verla, «✏️ Editar esta ruta en el diseñador». Se convierte en puntos que se arrastran; lo que no tocas mantiene el trazado original.
- Perfil: al tocarlo (o pasar el dedo) sale en el mapa ese punto, con km, altitud y % de pendiente.
- El GPX descargado lleva la altitud.
- Navegar un GPX o una ruta en línea recta ya no la cambia por la de Mapbox; si te sales, te lleva de vuelta al trazado un poco más adelante.

## Versión 4.9.3 — Privacidad
- En Perfil el correo de la cuenta sale tapado (pe•••@gmail.com). También en la Consola Master.

## Versión 4.9.2 — Consultas con respuesta dentro de la app
- Perfil → «💬 Consultas e incidencias» → «📨 Enviar a RideSafe IA»: la consulta llega a la Consola Master (💬 Consultas).
- Tú contestas en la consola y al ciclista le llega un aviso al móvil; ve la respuesta en «📬 Mis consultas» (y «Respuesta nueva» en Perfil).
- WhatsApp y correo siguen disponibles (para mandar capturas).
- Necesita las reglas v4.4 y la función «consultaAviso».

## Versión 4.9.1 — Por dónde pasaste y velocidad en el 3D
- Arriba sale por dónde vas en cada momento: «📍 A-364 · Arahal» (carretera y pueblo).
- Abajo, «Pasaste por:» con los pueblos de la ruta; al tocar uno, el 3D salta a ese punto.
- Velocidad: 🐢 Muy lenta · Lenta · Normal · ⏩ Rápida. Más despacio = cámara más cerca (más detalle). Se puede acercar o alejar con dos dedos.
- El vídeo para compartir usa la velocidad elegida (hasta 90 s), lleva el pueblo por el que pasas y al final «Por dónde has pasado».
- Los pueblos se buscan una sola vez por salida y se guardan.

## Versión 4.9 — Vídeo del recorrido en 3D para compartir
- Actividades → la salida → «🎬 Vídeo 3D para WhatsApp y redes» (o dentro del 3D: «🎬 Crear vídeo…»).
- Crea en el propio móvil un vídeo vertical (720×1280, 15-30 s) con el satélite en relieve, el punto que avanza, la línea por altitud, MÁX/MÍN, los datos y la marca RideSafe IA. Al final se aleja para ver la ruta entera.
- Botones: 📤 Compartir (WhatsApp, Instagram, Facebook…) y 💾 Guardar.
- No se sube a ningún sitio.

## Versión 4.8.1 — Arreglos tras la prueba
- La foto con tus datos de una ruta a pie sale con el icono de senderista 🥾 (antes salía una bici).
- Subir GPX: ahora pregunta si es una ruta para hacer (se guarda en «Mis rutas», se puede crear una salida o compartirla con el club) o una salida ya hecha (Actividades). Botón «📂 Subir una ruta GPX» también en «Mis rutas».
- Modo ahorro (pantalla negra): hay que tocar 3 veces seguidas para volver, así no se enciende sin querer.
- Botones más rápidos al tocar; el panel del pelotón ya no rehace sus botones cada segundo.

## Versión 4.8 — Senderismo
- Nuevo modo 🥾 «A pie» junto a Carretera y Montaña (en Rutas, arriba, y al planificar): las rutas van por senderos y caminos, con tiempo a pie (4,5 km/h y +1 h cada 500 m de subida).
- Nueva modalidad «Senderismo» al crear una salida y para las grupetas.
- Grabar a pie: la salida se guarda como «Ruta a pie» 🥾, no suma km a la bici ni al ranking ciclista del club (sí al de una grupeta de senderismo).
- «Alcanza tu grupo», el aviso de caída y la navegación se adaptan a la velocidad a pie.
- Todo lo demás (pelotón en vivo, avisos, cámara, familia, 3D) funciona igual.

## Versión 4.7 — Cámara en ruta y salida que no se pierde
- Durante la salida, botón 📷 junto a «Terminar»: fotos y vídeos (hasta 2 min) sin salir de la app. El GPS, la voz, el pelotón y los avisos siguen funcionando.
- Cada foto queda marcada en el mapa donde se hizo y guardada con la salida (Actividades → la salida → «📷 Fotos y vídeos»). También se guarda en Descargas del móvil (en iPhone, con «Compartir → Guardar»).
- En «Foto con tus datos» se puede usar una foto hecha durante la salida.
- Copia de seguridad de la salida cada 15 s: si el móvil cierra la app, al volver pregunta «Seguir grabando / Terminarla y guardarla / Descartarla».
- Si la app estuvo en segundo plano, los km de ese tramo ya se suman al volver.
- Incluye la revisión de seguridad 4.6.1.

## Versión 4.6.1 — Revisión de seguridad
- Corregidos fallos que permitían meter código dañino con nombres o identificadores raros (salidas, grupetas, miembros, reportes, escudo del club, enlace familiar).
- La consola Master y el panel de reportes solo borran contenidos válidos.
- Al dejar de compartir con la familia se borra la posición y el recorrido guardados.
- El service worker no guarda errores ni la vuelta de Strava, y los avisos solo abren páginas de la app.

## Versión 4.6 — Recorrido en 3D animado (como Suunto)
- Actividades → abrir una salida → «▶ Ver recorrido en 3D».
- Satélite inclinado con relieve, línea fina (3 px) coloreada por altitud (amarillo bajo → rojo alto) y carteles MÁX / MÍN.
- ▶ Reproducir: un punto recorre la ruta y la cámara lo sigue; barra para avanzar o retroceder; km, tiempo, altitud y media.
- Botones: 2D/3D (plano si el móvil va lento) y 🗺️/🛰️ (mapa o satélite). ✕ vuelve a la actividad.
- Gratis: satélite de Esri (el mismo de «Capas») y relieve de Terrain Tiles (AWS).

## Versión 4.5.4 — Brújula mejorada con el rumbo
- Brújula más clara: letras N (roja), E, S y O alrededor y aguja más grande.
- Al activarla (segundo toque, con el norte arriba) aparece arriba en grande hacia dónde vas: «NE · Vas hacia el noreste · 47°», y la voz lo dice una vez (si la voz está activada).
- Movimiento suavizado (sin temblores). Si el móvil no da señal de brújula en 4 s, avisa: «Mueve el móvil haciendo un ocho».
- Funciona en el mapa de Rutas y durante la salida.

## Versión 4.5.3 — Alcanzar al grupo cuando ya has empezado la salida
- Si llegas tarde y pulsas «Empezar salida», en la pantalla de la salida aparece «🚴 Tu grupo va a X km · Alcánzalos» (cuando el compañero más cercano está a más de 800 m).
- Al tocarlo, alternativas: 🧭 Ir al mejor punto para juntarme (o ☕ Esperarles más adelante), 📍 Ir directo hacia donde están ahora, ✋ Pedirles que me esperen (aviso «Esperad» al móvil y al Garmin) y 📣 Avisar «Voy para allá».
- Guía con voz; al juntarte (150 m durante 45 s): «¡Ya estás con tu grupo!», aviso al grupo y la guía pasa a la ruta de la salida. «Yendo a por tu grupo · toca para dejarlo» para cancelar.

## Versión 4.5.2 — Dibujar ruta: botón «Listo» y paradas que se pueden quitar
- Botón grande «✓ Listo · ¿qué hago con la ruta?»: Empezar a rodar, Guardar, Crear salida, Compartir con el club, GPX o ver perfil/semáforo/paradas. Antes había que abrir «Detalles».
- Interruptor «💧☕ Bares y fuentes en el mapa» en el panel para quitarlos o ponerlos. Además se esconden solos al alejar mucho el mapa.
- El tiempo de la ruta ya no se corta con la letra grande («10 h 31»).

## Versión 4.5.1 — Brújula en el mapa
- Brújula arriba en la barra del mapa y en la pantalla de la salida: la aguja roja apunta siempre al norte aunque gires el mapa.
- 1 toque: norte arriba. Con el norte arriba, otro toque: el mapa gira según hacia dónde miras con el móvil (borde verde); otro toque vuelve al norte. En iPhone pide permiso la primera vez.

## Versión 4.5 — Dibujar ruta (como Strava)
- «Planificar» abre directamente el modo «✏️ Dibujar ruta»: tocas el mapa punto a punto y la ruta sigue las carreteras sola (Carretera: asfalto sin autovías · Montaña: caminos).
- Abajo, siempre a la vista: km, subida, bajada y tiempo, y tres botones grandes: ↶ Deshacer, 🔁 Volver al inicio (cierra la vuelta) y 🗑️ Borrar. «📍 Empezar desde donde estoy» para el primer punto.
- Los puntos se pueden arrastrar para mover la ruta. Los intermedios son puntos blancos pequeños (A salida, B llegada).
- Hasta 60 puntos (se calcula por tramos de 25).
- «⌃ Detalles» muestra perfil, semáforo, paradas, Iniciar, Guardar, Crear salida, GPX…
- Los otros modos (De A a B, por etapas, circular por km) siguen en «Otros modos» y en el botón «+».

## Versión 4.4.5 — Botón de filtros del mapa
- El botón ☰ junto a «Buscar lugar» (antes decía «Filtros: próximamente») abre «Qué ver en el mapa» con tres interruptores: 🚩 Salidas del club, ⭐ Puntos ciclistas del club y 💧 Fuentes, bares y farmacias de la zona. La elección se guarda en el móvil.

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
