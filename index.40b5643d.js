var r;function t(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=Array(t);e<t;e++)n[e]=r[e];return n}function e(r){var t=r.replace(/([A-Z])/g," $1");return t[0].toUpperCase()+t.slice(1)}((function(r){if(Array.isArray(r))return t(r)})(r=document.querySelectorAll("input"))||function(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(r)||function(r,e){if(r){if("string"==typeof r)return t(r,void 0);var n=Object.prototype.toString.call(r).slice(8,-1);if("Object"===n&&r.constructor&&(n=r.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(r,void 0)}}(r)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).forEach(function(r){r.placeholder=e(r.name);var t=document.createElement("label");t.classList.add("field-label"),t.setAttribute("for",r.id),t.textContent=e(r.name),r.parentElement.prepend(t)});
//# sourceMappingURL=index.40b5643d.js.map
