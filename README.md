<br>
<p align="center">
  <img src="img/favicon/favicon.svg" alt="Profit and Ego Logo" width="300">
</p>

# ** Profit and Ego Website Files profitandego.com**

![A+ Security Grade](https://img.shields.io/badge/Security_Headers-A%2B-brightgreen?style=for-the-badge&logo=cloudflare)
![Lighthouse Performance](https://img.shields.io/badge/Lighthouse-96%25-blueviolet?style=for-the-badge&logo=lighthouse)
![Built with Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

Welcome to the official repository for [profitandego.com](https://profitandego.com)!

## What is this?

This project is, first and foremost, a bit of fun. It started with a domain name that was too good to pass up and has evolved into a digital playground for testing web technologies in a live environment.

The primary goals of this site are:

* **A Learning Sandbox:** A space to experiment with new web technologies, libraries, and coding techniques.
* **A Testing Ground:** A place to explore and test various features of the Cloudflare platform.
* **Purely for Fun:** The content and features are satirical and not meant to be taken seriously. It's all about building something enjoyable.

## Project Evolution

This is a living project, which means you can expect it to **change frequently and without notice**. Don't get too attached to any one version!

The site began as a simple, single-page gag. Since then, it has been a proving ground for:

* **Hardening Security:** Implemented a robust Content Security Policy (CSP) and other security headers via a `_headers` file to achieve an A+ rating on [securityheaders.com](https://securityheaders.com).
* **Performance Optimization:** Migrated from the Tailwind CSS CDN to a local build process. This scans the project's files and generates a highly optimized, minimal CSS file containing only the styles that are actually used, significantly improving load times.

## Tech Stack

The core of this project is intentionally simple, but it leverages modern tools and powerful platforms for hosting, security, and performance.

* **Frontend:**
    * **HTML5:** The structural backbone.
    * **Tailwind CSS:** For utility-first styling. The project uses a local build process to compile and minify the CSS for production.
    * **Vanilla JavaScript:** For all client-side interactivity. No large frameworks needed!
* **Deployment & Hosting:**
    * **GitHub:** Source code management.
    * **Cloudflare Pages:** For continuous deployment, hosting, and CDN services.
* **Tooling:**
    * **Node.js / npm:** For managing development dependencies (like Tailwind CSS).

## Running Locally

To run this project on your own machine:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/KnowOneActual/profitandego_website.git](https://github.com/KnowOneActual/profitandego_website.git)
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd profitandego_website
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```
4.  **Build the CSS:**
    * To build the CSS for production (a single, minified file):
        ```bash
        npm run build
        ```
    * To watch for changes in your HTML/JS and automatically rebuild the CSS as you work:
        ```bash
        npm run watch
        ```
5.  **Open `index.html`** in your browser to see the site.
