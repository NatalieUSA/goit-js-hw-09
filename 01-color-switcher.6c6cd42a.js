!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=null;function o(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}function d(){t.style.backgroundColor=o(),t.style.fontSize="30px",t.style.border="none",e.style.backgroundColor=o(),e.style.border="none",e.style.fontSize="30px"}e.disabled=!0,t.addEventListener("click",(function(d){t.disabled=!0,e.disabled=!1,n=setInterval((function(){document.body.style.backgroundColor=o()}),1e3)})),e.addEventListener("click",(function(o){t.disabled=!1,e.disabled=!0,clearInterval(n),d()})),d()}();
//# sourceMappingURL=01-color-switcher.6c6cd42a.js.map
