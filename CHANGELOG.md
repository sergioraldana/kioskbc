# Changelog

Todas las versiones (releases) y cambios notables de este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/), y este proyecto se adhiere a [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-03-06
### Añadido
- Inicialización del proyecto Kioskbc en Electron con ESM y TailwindCSS v4.
- Agregada interfaz tipo *Dark Glass AI* con menú lateral.
- Integradas vistas a servicios de biblioteca central: Catálogo, EBSCO, eLibro, LexGlobal, Pearson y Tesis Digitales usando `<webview>` (sandbox isolation compatible).
- Agregado soporte consumible de versión global desde package.json.
- Añadidos atajos de desarrollo para salida global en modo Kiosk.
