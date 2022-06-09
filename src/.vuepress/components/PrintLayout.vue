<template>
  <div>
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
