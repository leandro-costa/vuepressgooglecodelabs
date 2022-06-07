<template>
  <div>
    <!-- 1.0 Cover Page -->
    <div class="cover-page">
      <h1>Poo</h1>
      <h3 class="cover-header no-counter">
        Versão de impressão by Leandro Souza
      </h3>
      <h3 class="cover-header no-counter">Junho 2022</h3>
    </div>

    <!-- 2.0 Table of Contents -->
    <div class="table-of-contents">
      <h1 class="toc-header" id="toc-start">Sumário</h1>
      <ol id="toc">
        <!-- toc.js will automatically insert TOC here -->
      </ol>
    </div>

    <!-- 3.0 Start of Main Content -->

    <!-- Setting the footer -->
    <p class="footer"><a href="#toc-start">Sumário</a></p>

    <!-- Reseting the header counters (as cover page also uses them) -->
    <div class="counter-reset"></div>
    <Content />
  </div>
</template>

<script>
export default {
  name: "PrintLayout",
  created() {
      if (typeof window !== 'undefined') {
        let headElement = window.document.createElement("script");
        headElement.setAttribute("src", "/vuepressgooglecodelabs/pagedjs/toc.js");
        window.document.head.appendChild(headElement);

        headElement = window.document.createElement("script");
        headElement.setAttribute("src", "/vuepressgooglecodelabs/pagedjs/paged.polyfill.js");
        window.document.head.appendChild(headElement);

        headElement = window.document.createElement("link");
        headElement.setAttribute("rel", "stylesheet");
        headElement.setAttribute("href", "/vuepressgooglecodelabs/pagedjs/style.css");
        window.document.head.appendChild(headElement);    
      }
  },
};
</script>
