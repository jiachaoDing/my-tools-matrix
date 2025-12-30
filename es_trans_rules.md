# Spanish (Español) Localization & SEO Rules

**Goal:** Create a high-quality Spanish version of the provided tools in the `/es/` subdirectory.

## 1. Action Steps
For each English source file provided in the context:
1.  **Create Directory:** Create a corresponding folder in `/es/[tool-name]/`.
2.  **Create File:** Create `index.html` inside that folder.
3.  **Process Content:** Copy structure from source and apply the rules below.

## 2. Translation Rules (Spanish/Español)
* **UI Text:** Translate all visible text into **Neutral Spanish (Español Neutro)**. Avoid slang specific to Spain or Mexico.
* **Keywords to Integrate:**
    * Use "Gratis" (Free) frequently.
    * Use "Sin marca de agua" (No watermark) if applicable.
    * Use "En línea" or "Online" (both are used).
* **NO Translation:** Keep Technical terms (JSON, PDF, Base64, SQL, CSS, Hex) in English.
* **Tone:** Professional and direct.

## 3. SEO Requirements
* **<title>:** Format: `[Spanish Title] (English Keyword) - [BrandName]`.
    * *Example:* "Formateador JSON (JSON Formatter) - Herramienta Gratis"
* **<meta description>:** engaging description in Spanish, mentioning it's free and secure.
* **<html> Tag:** Update to `<html lang="es">`.

## 4. Technical Constraints (STRICT)
    * Update ALL CSS/JS/Image links to use **Absolute Paths** from the root, pointing to Hindi localized versions where available.
        * `../assets/css/styles.css`  -> `/assets/css/styles.css` (Global CSS)
        * `../assets/js/components.js` -> `/es/assets/js/components.js` (Localized Components)
        * `../tools-config.js`        -> `/es/tools-config.js` (Localized Config)
        * `../assets/js/app.js`       -> `/es/assets/js/app.js` (Localized App Logic)
    * Update Navigation links:
        * Home link `/` -> `/es/` (Keep users inside the Hindi site)

## 5. Hreflang Tags (The Expansion)
You need to link all existing versions. Insert this block in `<head>`:

```html
<link rel="alternate" hreflang="en" href="[https://webutilitykit.com/](https://webutilitykit.com/)[tool-name]/" />
<link rel="alternate" hreflang="hi" href="[https://webutilitykit.com/hi/](https://webutilitykit.com/hi/)[tool-name]/" />
<link rel="alternate" hreflang="es" href="[https://webutilitykit.com/es/](https://webutilitykit.com/es/)[tool-name]/" />