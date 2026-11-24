# Asistente de Auditoría y Cargue FÉNIX - Supersalud
### E.S.E. Hospital San José de Maicao • Agente Especial Interventor

Herramienta local de auditoría y asistencia de cargue diseñada específicamente para el equipo de intervención de la **E.S.E. Hospital San José de Maicao** para auditar y montar de forma segura, modular y libre de inconsistencias los **16 indicadores técnico-científicos** en la plataforma FÉNIX de la Superintendencia Nacional de Salud (`https://fenix.supersalud.gov.co/`).

---

## 🎯 Solución en 1 Clic para tu Navegador BRAVE

Ya **NO necesitas abrir la consola de desarrollador (F12), ni copiar códigos negros intimidantes, ni pegar comandos**. Todo está diseñado para funcionar en **Brave** con 1 solo clic:

### Opción 1 (Recomendada): Extensión para Brave (Aparece Sola en Fénix)
Instálala una sola vez en 15 segundos:
1. Abre tu navegador **Brave** y ve a la dirección: `brave://extensions`
2. Activa la casilla **"Modo de desarrollador"** (arriba a la derecha).
3. Haz clic en **"Cargar descomprimida"** (arriba a la izquierda).
4. Selecciona la carpeta: `C:\PROYECTOS\fenix-hospital-uploader\extension-chrome`
5. **¡Listo!** A partir de ese momento:
   - Entras a Fénix (`fenix.supersalud.gov.co`) y pones tu Usuario y Clave normalmente.
   - El Asistente aparecerá **automáticamente flotando en tu pantalla**.
   - Al abrir cualquier indicador, solo pulsas el botón verde:
     `[ ⚡ 1 CLIC: AUDITAR E INYECTAR TODO ]`
   - Él inyecta el Comentario, inyecta el Resultado y te deja en la pestaña de Soportes para adjuntar y guardar 💾.

### Opción 2: Marcador de 1 Clic en Brave (Bookmarklet)
Si prefieres no instalar extensiones:
1. Abre `abrir_asistente.bat`.
2. Presiona `Ctrl + Shift + B` en Brave para ver tu barra de favoritos.
3. Arrastra el botón amarillo **"⭐ Bot Fénix 1-Clic"** a tu barra de favoritos.
4. Cuando estés en Fénix con el indicador abierto, le das **1 solo clic** a ese marcador en tu barra de Brave y el panel flotante aparecerá en la pantalla.

---

## 🤖 ¿Y la Subida 100% Automática ("Solo pedir Usuario y Clave y que haga el resto")?

Para que un programa tome los 169 archivos de tu disco duro (`C:\PROYECTOS\fenix-hospital-uploader\soportes`) y los suba **totalmente solo a Fénix** sin que tengas que abrir ventanas ni interactuar:

### ¿Qué se necesita técnicamente?
1. **Un Robot de Automatización de Escritorio (Python + Playwright):**
   - Los navegadores web normales (por seguridad de Windows y de la web) **bloquean** que una página web común tome archivos de tu disco duro y los envíe en secreto a otro servidor.
   - Un robot de escritorio sí tiene permisos de Windows para adjuntar archivos automáticamente.
2. **Autenticación en Fénix:**
   - La plataforma Fénix de Supersalud suele tener mecanismos de seguridad (Captcha de texto/imágenes o tokens de sesión).
   - Con el robot, tú solo ingresas tu **Usuario y Clave** (y resuelves el Captcha una sola vez si Fénix lo solicita), y el robot toma el control, abriendo y subiendo los 16 indicadores de corrido.

---

## 📁 Estructura del Proyecto en C:\PROYECTOS

```
C:\PROYECTOS\fenix-hospital-uploader\
├── abrir_asistente.bat            # Acceso directo para abrir la herramienta en Brave
├── index.html                     # Panel visual de auditoría mensual y generador de comentarios
├── bot_fenix_octubre.js           # Script del asistente con auditoría y 1-clic
├── extension-chrome/              # Extensión lista para cargar en Brave (brave://extensions)
│   ├── manifest.json              # Configuración Manifest V3
│   └── content.js                 # Inyector con botón [ ⚡ 1 CLIC: AUDITAR E INYECTAR TODO ]
├── INDICADORES FENIX OCTUBRE/     # Modelo de carpetas con las 16 subcarpetas y 169 archivos
└── soportes/                      # Archivos de soporte organizados para cargue
```

---

## 🚀 Cómo Usar el Asistente en 3 Pasos Hoy

1. **Paso 1 (Auditoría):** Haz doble clic en `abrir_asistente.bat`. Revisa que ningún documento individual supere los 4 MB y confirma que las fórmulas matemáticas coincidan con lo certificado.
2. **Paso 2 (Activar Extensión en Brave):** Ve a `brave://extensions`, activa Modo Desarrollador y carga `C:\PROYECTOS\fenix-hospital-uploader\extension-chrome`.
3. **Paso 3 (Subir en Fénix):** Inicia sesión en Fénix con tu usuario y clave. Abre el indicador deseado y haz clic en `[ ⚡ 1 CLIC: AUDITAR E INYECTAR TODO ]`. Adjunta los soportes y guarda con el disquete 💾.
