# Buscador de Recursos - KioskBC

KioskBC es una aplicación de escritorio diseñada para funcionar como un quiosco digital interactivo, ofreciendo acceso rápido y seguro a plataformas académicas (Catálogo, Tesis, EBSCO, eLibro, LexGlobal, etc.) de la Biblioteca Central. Está construida usando **Electron**, **Vite/ESM**, y **Tailwind CSS v4** con una interfaz de tipo *Glassmorphism*.

## Arquitectura del Proyecto

- **Framework Core:** Electron (con ESM activado).
- **Styling:** Tailwind CSS v4 para diseño dinámico, moderno y adaptable sin ataduras.
- **Webviews Persistentes:** La aplicación usa de forma nativa la etiqueta `<webview>` aislando la sesión de los usuarios con una partición `persist:library`. Esto además hace un *spoofing* (camuflaje) del User-Agent para evitar que bases de datos estrictas bloqueen la renderización o presenten errores reiterativos de inicio de sesión.
- **Kiosk Mode:** Integración nativa a entornos de pantalla completa, bloqueando atajos y salidas de teclado estándar.

---

## 🛠 Entorno de Desarrollo Local

Si deseas probar, diseñar o extender la aplicación en tu entorno local (Windows o macOS), sigue estos pasos rápidos:

### Requisitos Previos
* [Node.js](https://nodejs.org/) (versión 20+ recomendada).

### Configuración e Inicialización

1. **Clona el repositorio**
   ```bash
   git clone git@github.com:sergioraldana/kioskbc.git
   cd kioskbc
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Crea el archivo de entorno**
   Crea un archivo llamado `.env` en la raíz del proyecto para decirle a la aplicación si deseas iniciarla a pantalla completa, o en ventana normal para desarrollo:
   ```env
   # .env
   KIOSK_MODE=false
   ```

4. **Inicia el Servidor de Desarrollo (Live Reload)**
   ```bash
   npm run dev
   ```
   *(Este comando levantará Tailwind en modo watch y abrirá la ventana de Electron en simultáneo).*

---

## 🚀 Despliegue en Producción (Ubuntu Frame)

La aplicación está destinada a desplegarse en **Ubuntu Server corriendo Ubuntu Frame** (un compositor Wayland especializado para quioscos de Canonical). Para que Ubuntu Frame autorice la ejecución de la aplicación, es necesario empaquetarla en formato **Snap** con permisos estrictos habilitados.

### Integración Continua (CI/CD) - **El Método Más Fácil**

¡El repositorio ya tiene magia automatizada! Ya no necesitas instalar pesadas máquinas de Linux (como Multipass, Docker o WSL) en tu computadora personal para lograr sacar el ejecutable final:

1. Programa e investiga localmente en tu Mac/Windows.
2. Agrega los cambios y haz commit:
   ```bash
   git add .
   git commit -m "Añadí una nueva base de datos al menú"
   ```
3. Empuja tu código en Github:
   ```bash
   git push origin main
   ```
4. **Al empujar la rama `main`, Github entrará en acción**: Los servidores gratuitos de Github alojarán una máquina de Linux durante aproximadamente un minuto. Ejecutarán el constructor `electron-builder` en la nube, firmarán el archivo y empujarán de regreso el `.snap` final.
5. Ve a la pestaña de [Actions](https://github.com/sergioraldana/kioskbc/actions) en tu repositorio para descargar el instalador (`KioskBC-Snap-Installer`) calientito desde la Nube.

### Instalación Manual en el Quiosco físico

Una vez descargado el instalador Snap en el servidor/mini-pc destino, instálalo usando la bandera `dangerous` (ya que no está publicado o firmado oficialmente por la Snap Store):

```bash
sudo snap install kioskbc_1.0.0_arm64.snap --dangerous 
```
*(Nota final: reemplaza el nombre del archivo si la versión actual y arquitectura varían).*
