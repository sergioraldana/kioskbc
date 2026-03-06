# Changelog

Todas las versiones (releases) y cambios notables de este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/), y este proyecto se adhiere a [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2026-03-06
### Añadido
- Inicialización del proyecto Kioskbc en Electron con ESM y TailwindCSS v4.
- Agregada interfaz tipo *Dark Glass AI* con menú lateral.
- Integradas vistas a servicios de biblioteca central: Catálogo, EBSCO, eLibro, LexGlobal y Tesis Digitales usando `<webview>` (sandbox isolation compatible).
- Agregado sistema de versionamiento semántico consumible desde `package.json` vía IPC.
- Sistema de modo Kiosk controlado vía variable de entorno `KIOSK_MODE`.
- Añadidos atajos de desarrollo para salida global en modo Kiosk.
- Configuración de empaquetado Snap para Ubuntu Frame con GitHub Actions (CI/CD).
