<template>
  <div>
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
import style from "../public/pagedjs/style.css";
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
      }
  },
};
</script>
