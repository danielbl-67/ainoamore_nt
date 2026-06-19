
# 🏋️‍♀️ Web Profesional - Ainoa More (Nutricionista & Entrenadora Personal)

¡Bienvenido/a al repositorio de la plataforma web oficial de **@ainoamore_**! Este proyecto consiste en una Single Page Application (SPA) moderna, minimalista y con un enfoque completamente *aesthetic*, diseñada a medida para cubrir las necesidades de un perfil profesional del sector del fitness, la salud y el bienestar.

La interfaz utiliza una paleta cromática muy cuidada basada en tonos **Beis Claro** (`#F5F1EB`) y **Rosa Pastel/Maquillaje** (`#E6D1D1`), logrando transmitir calma, profesionalidad, salud y cercanía.

---

## 🚀 Características Clave

* **⚡ Arquitectura Angular Líder:** Desarrollada bajo componentes autónomos (*Standalone Components*) optimizados para la máxima velocidad y escalabilidad.
* **📱 Carrusel de TikTok Integrado:** Un módulo rotativo interactivo que consume directamente los IDs de los vídeos reales de entrenamiento, cambios físicos y asesorías del perfil oficial de Ainoa.
* **🥗 Sección de Recetas Fitness:** Espacio limpio y visual estructurado mediante tarjetas para destacar comidas saludables, organizadas por categorías y macros.
* **✍️ Blog de Divulgación Científica:** Módulo de artículos para potenciar la marca personal compartiendo trucos de mentalidad, mitos de nutrición y rutinas de ejercicio.
* **📅 Sistema Call-to-Action (CTA):** Enlaces directos distribuidos estratégicamente para captar clientes potenciales y redirigirlos hacia pasarelas de reservas (Calendly o WhatsApp).

---

## 🎨 Paleta de Colores Oficial

El diseño visual ha sido extraído de la identidad de marca, configurado mediante variables CSS globales:

| Elemento | Código Hexadecimal | Muestra Visual |
| :--- | :--- | :--- |
| **Fondo Global** | `#F5F1EB` | Beis Suave |
| **Fondo Bloques/Tarjetas** | `#F8F6F1` | Crema Claro |
| **Color Secundario / Detalles** | `#E6D1D1` | Rosa Pastel |
| **Texto / Contrastes** | `#1A1A1A` | Negro Carbón |

---

## 📂 Estructura del Proyecto

La arquitectura sigue una organización modular limpia, separando las responsabilidades de la interfaz:

```text
src/
└── app/
    ├── app.ts                  # Componente raíz u orquestador global
    ├── app.html                # Esqueleto estructural (Layout)
    ├── app.css                 # Variables y maquetación global (Beis/Rosa)
    └── components/
        ├── tiktok-carrusel/    # Componente del Carrusel con filtro SafeHtml
        ├── recetas/            # Componente de la cuadrícula de recetas
        └── blog/               # Componente del feed de artículos
