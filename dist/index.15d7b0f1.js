const t=document.querySelectorAll("[data-expand-container"),e=document.querySelectorAll("[data-text-container]"),a=document.querySelectorAll("[data-expand-button]");function n(t){t.target.closest("[data-expand-container").classList.toggle("expand"),buttonContent=t.target.closest("[data-expand-container]").classList.contains("expand")?"Read less":"Read more",t.target.textContent=buttonContent}console.log(t),console.log(e),console.log(a),e.forEach(t=>{t.scrollHeight>t.clientHeight?t.closest("[data-expand-container]").setAttribute("data-overflow","true"):t.closest("[data-expand-container]").setAttribute("data-overflow","false")}),a.forEach(t=>{t.addEventListener("click",n)});
//# sourceMappingURL=index.15d7b0f1.js.map
