I am creating a Hindi version of these tools in a `/hi/` subdirectory.
Please generate the corresponding `index.html` files for the `/hi/` directory based on the attached English files.

**Target Path:** `/hi/[tool-name]/index.html` (You need to create the folders if missing)

**Action Requirements:**

1.  **TRANSLATION & LOCALIZATION (Crucial):**
    * Translate all visible UI text (H1, H2, p, button labels, instructions) into **natural, professional Hindi**.
    * **Style:** Use a mix of formal Hindi for headers and conversational Hindi for instructions.
    * **Technical Terms:** KEEP technical terms in English (e.g., "JSON", "PDF", "JPG", "Base64", "CSS"). Do NOT translate these.
    * **Do NOT translate:** Class names, IDs, variable names, or any code logic.

2.  **SEO OPTIMIZATION (Hindi + Hinglish):**
    * **<title>:** Translate to Hindi, but append the English keyword in brackets.
        * *Example:* "JSON Formatter (JSON फॉर्मेटर) - Free Tool"
    * **<meta description>:** Write a compelling description in Hindi that includes keywords Indian users might search for.
    * **Keywords:** Indian users often search in English or Hinglish. Ensure the content naturally includes the English terms too.

3.  **HREFLANG TAGS (SEO Mandatory):**
    * In the `<head>`, ADD these two lines to link the versions:
        ```html
        <link rel="alternate" hreflang="en" href="[https://webutilitykit.com/](https://webutilitykit.com/)[tool-name]/" />
        <link rel="alternate" hreflang="hi" href="[https://webutilitykit.com/hi/](https://webutilitykit.com/hi/)[tool-name]/" />
        ```

4.  **PATH CORRECTION & LOCALIZED ASSETS (Crucial for Subdirectory):**
    * Change `<html lang="en">` to `<html lang="hi">`.
    * Update ALL CSS/JS/Image links to use **Absolute Paths** from the root, pointing to Hindi localized versions where available.
        * `../assets/css/styles.css`  -> `/assets/css/styles.css` (Global CSS)
        * `../assets/js/components.js` -> `/hi/assets/js/components.js` (Localized Components)
        * `../tools-config.js`        -> `/hi/tools-config.js` (Localized Config)
        * `../assets/js/app.js`       -> `/hi/assets/js/app.js` (Localized App Logic)
    * Update Navigation links:
        * Home link `/` -> `/hi/` (Keep users inside the Hindi site)
    * **Related Tools Check:** Ensure the `injectRelatedTools` container is present in the HTML to allow the localized `app.js` to render recommendations.

**Output:**
Directly create/write the files to the `/hi/` directory.