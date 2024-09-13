/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/generateResume.ts":
/*!*******************************!*\
  !*** ./src/generateResume.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateResume": () => (/* binding */ generateResume)
/* harmony export */ });
/* harmony import */ var _inputUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inputUtils */ "./src/inputUtils.ts");

function generateResume(name, email, countryCode, phone, educations, skills, workExperiences, profilePicture, github, linkedin) {
    return `
    <section class="personal-info">
        <figure>
            <img
                src="${profilePicture
        ? URL.createObjectURL(profilePicture)
        : "images/default-profile-picture.jpeg"}"
                alt="Profile Picture"
                width="140"
                height="170"
            />
            <figcaption><h1 data-editable="name" contenteditable="true">${name}</h1></figcaption>
        </figure>

        <div id="contact-details">
            <p id="email">
                <a href="mailto:${email}" target="_blank" rel="noopener noreferrer"><i class="bx bxs-envelope"></i> email</a>
            </p>

            <p id="github">
                <a href="${github}" target="_blank" rel="noopener noreferrer"><i class="bx bxl-github"></i> github</a>
            </p>

            <p id="linkedin">
                <a href="${linkedin}" target="_blank" rel="noopener noreferrer"><i class="bx bxl-linkedin-square"></i> linkedin</a>
            </p>

            <p id="number" target="_blank" rel="noopener noreferrer">
                <a href="tel:${(0,_inputUtils__WEBPACK_IMPORTED_MODULE_0__.processInput)("phone", phone, countryCode)}">${(0,_inputUtils__WEBPACK_IMPORTED_MODULE_0__.processInput)("phone", phone, countryCode)} <i class="bx bxs-phone"></i></a>
            </p>

        </div>

    </section>

    <section class="education">
        <h2>Education</h2>
        <ul>
            ${educations
        .map((education) => `<li data-editable="education" contenteditable="true">${education.value}</li>`)
        .join("")}
        </ul>
    </section>

    <section class="skills" style="display: none">
        <h2>Skills</h2>
        <ul>
            ${(0,_inputUtils__WEBPACK_IMPORTED_MODULE_0__.processInput)("skills", skills)
        .map((skill) => `<li data-editable="skills" contenteditable="true">${skill}</li>`)
        .join("")}
        </ul>
    </section>

    <section class="work-experience" style="display: none">
        <h2>Work Experience</h2>
        <ul>
            ${workExperiences
        .map((workExperience) => `<li data-editable="work-experience" contenteditable="true">${workExperience.value}</li>`)
        .join("")}
        </ul>
    </section>

    <button id="toggle-skills">Show More</button>
    `;
}


/***/ }),

/***/ "./src/inputUtils.ts":
/*!***************************!*\
  !*** ./src/inputUtils.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "processInput": () => (/* binding */ processInput)
/* harmony export */ });
// Implementation
function processInput(type, input, contryCode) {
    if (type === "skills") {
        // Process skills input
        const cleanedStr = input.replace(/[,;]+/g, ",");
        const skills = cleanedStr
            .split(",")
            .map((skill) => skill.trim())
            .filter((skill) => skill.length > 0);
        return skills;
    }
    else {
        // Process phone input
        const cleanedStr = contryCode + input.replace(/\D+/g, "0");
        return cleanedStr;
    }
}


/***/ }),

/***/ "./src/shearableUtils.ts":
/*!*******************************!*\
  !*** ./src/shearableUtils.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "copyLink": () => (/* binding */ copyLink),
/* harmony export */   "downloadPDF": () => (/* binding */ downloadPDF)
/* harmony export */ });
async function copyLink() {
    const name = document.getElementById("name");
    const username = name.value;
    const url = `${window.location.origin}?username=${encodeURIComponent(username)}`;
    await navigator.clipboard.writeText(url).then(() => {
        alert("Link copied to clipboard!");
    });
}
async function downloadPDF() {
    window.print();
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/script.ts ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _generateResume__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generateResume */ "./src/generateResume.ts");
/* harmony import */ var _shearableUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shearableUtils */ "./src/shearableUtils.ts");


document.addEventListener("DOMContentLoaded", () => {
    const anchors = document.querySelectorAll(".addTextArea");
    anchors.forEach((a) => {
        a.addEventListener("click", (event) => {
            event.preventDefault();
            const container = a.parentElement;
            const area = document.createElement("textarea");
            area.name = container.querySelector("textarea").name;
            area.setAttribute("contenteditable", "true");
            container.appendChild(area);
        });
    });
});
document.getElementById("resume-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const countryCode = document.getElementById("country-code").value;
    const phone = document.getElementById("phone").value;
    const github = document.getElementById("github")
        .value;
    const linkedin = document.getElementById("linkedin")
        .value;
    const profilePicture = document.getElementById("profile-picture").files?.[0];
    const skills = document.getElementById("skills")
        .value;
    const educations = document.querySelectorAll("textarea[name='education']");
    const workExperiences = document.querySelectorAll("textarea[name='work-experience']");
    const shearableLink = document.getElementById("shearable-link");
    const shearableLinkContainer = document.getElementById("shareable-container");
    const PDFButton = document.getElementById("generate-pdf");
    // Hiding form
    const form = document.getElementById("resume-form");
    form.style.display = "none";
    const resumeDiv = document.querySelector(".generated-resume");
    // Showing generated resume
    if (resumeDiv) {
        resumeDiv.innerHTML = (0,_generateResume__WEBPACK_IMPORTED_MODULE_0__.generateResume)(name, email, countryCode, phone, [...educations], skills, [...workExperiences], profilePicture, github, linkedin);
        resumeDiv.style.display = "block";
    }
    // Adding a click event listener to the toggle button
    const toggleButton = document.getElementById("toggle-skills");
    const skillsSection = document.querySelector(".skills");
    const workExperienceSection = document.querySelector(".work-experience");
    toggleButton?.addEventListener("click", () => {
        const isHidden = skillsSection?.style.display === "none";
        if (skillsSection && workExperienceSection) {
            skillsSection.style.display = isHidden ? "block" : "none";
            workExperienceSection.style.display = isHidden ? "block" : "none";
            toggleButton.innerText = isHidden ? "Show Less" : "Show More";
        }
    });
    // Revoke the object URL after use to free up memory
    if (profilePicture) {
        const profilePictureURL = URL.createObjectURL(profilePicture);
        URL.revokeObjectURL(profilePictureURL);
    }
    // Save changes made to the editable sections
    const editableElements = document.querySelectorAll("[contenteditable='true']");
    editableElements.forEach((element) => {
        const editableElement = element;
        editableElement.addEventListener("blur", () => {
            // Update the content in real-time
            const editableKey = editableElement.getAttribute("data-editable");
            const updatedContent = editableElement.innerText;
            // Find the corresponding input element using data-editable attribute
            const inputElement = document.querySelector(`[data-editable="${editableKey}"]`);
            if (inputElement) {
                inputElement.value = updatedContent;
            }
        });
    });
    // Shareable link
    shearableLinkContainer.style.display = "block";
    shearableLink.addEventListener("click", _shearableUtils__WEBPACK_IMPORTED_MODULE_1__.copyLink);
    // Save as PDF
    PDFButton.addEventListener("click", () => {
        const container = document.querySelector("#shareable-container");
        container.style.display = "none";
        (0,_shearableUtils__WEBPACK_IMPORTED_MODULE_1__.downloadPDF)().then(() => {
            container.style.display = "block";
        });
    });
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUE0QztBQUNyQztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEVBQTBFLEtBQUs7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsTUFBTTtBQUN4QztBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsT0FBTztBQUNsQztBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsU0FBUztBQUNwQztBQUNBO0FBQ0E7QUFDQSwrQkFBK0IseURBQVksOEJBQThCLElBQUkseURBQVksK0JBQStCO0FBQ3hIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZCxvRkFBb0YsZ0JBQWdCO0FBQ3BHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyx5REFBWTtBQUMxQiw2RUFBNkUsTUFBTTtBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZCwrRkFBK0YscUJBQXFCO0FBQ3BIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsRUE7QUFDTztBQUNQO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDaEJPO0FBQ1A7QUFDQTtBQUNBLG1CQUFtQix1QkFBdUIsWUFBWSw2QkFBNkI7QUFDbkY7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNPO0FBQ1A7QUFDQTs7Ozs7OztVQ1ZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTmtEO0FBQ087QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsK0RBQWM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJFQUEyRSxZQUFZO0FBQ3ZGO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBLDRDQUE0QyxxREFBUTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNERBQVc7QUFDbkI7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taWxlc3RvbmUtMS8uL3NyYy9nZW5lcmF0ZVJlc3VtZS50cyIsIndlYnBhY2s6Ly9taWxlc3RvbmUtMS8uL3NyYy9pbnB1dFV0aWxzLnRzIiwid2VicGFjazovL21pbGVzdG9uZS0xLy4vc3JjL3NoZWFyYWJsZVV0aWxzLnRzIiwid2VicGFjazovL21pbGVzdG9uZS0xL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21pbGVzdG9uZS0xL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9taWxlc3RvbmUtMS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL21pbGVzdG9uZS0xL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbWlsZXN0b25lLTEvLi9zcmMvc2NyaXB0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHByb2Nlc3NJbnB1dCB9IGZyb20gXCIuL2lucHV0VXRpbHNcIjtcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVJlc3VtZShuYW1lLCBlbWFpbCwgY291bnRyeUNvZGUsIHBob25lLCBlZHVjYXRpb25zLCBza2lsbHMsIHdvcmtFeHBlcmllbmNlcywgcHJvZmlsZVBpY3R1cmUsIGdpdGh1YiwgbGlua2VkaW4pIHtcbiAgICByZXR1cm4gYFxyXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJwZXJzb25hbC1pbmZvXCI+XHJcbiAgICAgICAgPGZpZ3VyZT5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPVwiJHtwcm9maWxlUGljdHVyZVxuICAgICAgICA/IFVSTC5jcmVhdGVPYmplY3RVUkwocHJvZmlsZVBpY3R1cmUpXG4gICAgICAgIDogXCJpbWFnZXMvZGVmYXVsdC1wcm9maWxlLXBpY3R1cmUuanBlZ1wifVwiXHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJQcm9maWxlIFBpY3R1cmVcIlxyXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIxNDBcIlxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTcwXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGZpZ2NhcHRpb24+PGgxIGRhdGEtZWRpdGFibGU9XCJuYW1lXCIgY29udGVudGVkaXRhYmxlPVwidHJ1ZVwiPiR7bmFtZX08L2gxPjwvZmlnY2FwdGlvbj5cclxuICAgICAgICA8L2ZpZ3VyZT5cclxuXHJcbiAgICAgICAgPGRpdiBpZD1cImNvbnRhY3QtZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICA8cCBpZD1cImVtYWlsXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwibWFpbHRvOiR7ZW1haWx9XCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPjxpIGNsYXNzPVwiYnggYnhzLWVudmVsb3BlXCI+PC9pPiBlbWFpbDwvYT5cclxuICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICAgPHAgaWQ9XCJnaXRodWJcIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIke2dpdGh1Yn1cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+PGkgY2xhc3M9XCJieCBieGwtZ2l0aHViXCI+PC9pPiBnaXRodWI8L2E+XHJcbiAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgIDxwIGlkPVwibGlua2VkaW5cIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIke2xpbmtlZGlufVwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj48aSBjbGFzcz1cImJ4IGJ4bC1saW5rZWRpbi1zcXVhcmVcIj48L2k+IGxpbmtlZGluPC9hPlxyXG4gICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICA8cCBpZD1cIm51bWJlclwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJ0ZWw6JHtwcm9jZXNzSW5wdXQoXCJwaG9uZVwiLCBwaG9uZSwgY291bnRyeUNvZGUpfVwiPiR7cHJvY2Vzc0lucHV0KFwicGhvbmVcIiwgcGhvbmUsIGNvdW50cnlDb2RlKX0gPGkgY2xhc3M9XCJieCBieHMtcGhvbmVcIj48L2k+PC9hPlxyXG4gICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICA8c2VjdGlvbiBjbGFzcz1cImVkdWNhdGlvblwiPlxyXG4gICAgICAgIDxoMj5FZHVjYXRpb248L2gyPlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgICAgJHtlZHVjYXRpb25zXG4gICAgICAgIC5tYXAoKGVkdWNhdGlvbikgPT4gYDxsaSBkYXRhLWVkaXRhYmxlPVwiZWR1Y2F0aW9uXCIgY29udGVudGVkaXRhYmxlPVwidHJ1ZVwiPiR7ZWR1Y2F0aW9uLnZhbHVlfTwvbGk+YClcbiAgICAgICAgLmpvaW4oXCJcIil9XHJcbiAgICAgICAgPC91bD5cclxuICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICA8c2VjdGlvbiBjbGFzcz1cInNraWxsc1wiIHN0eWxlPVwiZGlzcGxheTogbm9uZVwiPlxyXG4gICAgICAgIDxoMj5Ta2lsbHM8L2gyPlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgICAgJHtwcm9jZXNzSW5wdXQoXCJza2lsbHNcIiwgc2tpbGxzKVxuICAgICAgICAubWFwKChza2lsbCkgPT4gYDxsaSBkYXRhLWVkaXRhYmxlPVwic2tpbGxzXCIgY29udGVudGVkaXRhYmxlPVwidHJ1ZVwiPiR7c2tpbGx9PC9saT5gKVxuICAgICAgICAuam9pbihcIlwiKX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgPC9zZWN0aW9uPlxyXG5cclxuICAgIDxzZWN0aW9uIGNsYXNzPVwid29yay1leHBlcmllbmNlXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lXCI+XHJcbiAgICAgICAgPGgyPldvcmsgRXhwZXJpZW5jZTwvaDI+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAke3dvcmtFeHBlcmllbmNlc1xuICAgICAgICAubWFwKCh3b3JrRXhwZXJpZW5jZSkgPT4gYDxsaSBkYXRhLWVkaXRhYmxlPVwid29yay1leHBlcmllbmNlXCIgY29udGVudGVkaXRhYmxlPVwidHJ1ZVwiPiR7d29ya0V4cGVyaWVuY2UudmFsdWV9PC9saT5gKVxuICAgICAgICAuam9pbihcIlwiKX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgPC9zZWN0aW9uPlxyXG5cclxuICAgIDxidXR0b24gaWQ9XCJ0b2dnbGUtc2tpbGxzXCI+U2hvdyBNb3JlPC9idXR0b24+XHJcbiAgICBgO1xufVxuIiwiLy8gSW1wbGVtZW50YXRpb25cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZXNzSW5wdXQodHlwZSwgaW5wdXQsIGNvbnRyeUNvZGUpIHtcbiAgICBpZiAodHlwZSA9PT0gXCJza2lsbHNcIikge1xuICAgICAgICAvLyBQcm9jZXNzIHNraWxscyBpbnB1dFxuICAgICAgICBjb25zdCBjbGVhbmVkU3RyID0gaW5wdXQucmVwbGFjZSgvWyw7XSsvZywgXCIsXCIpO1xuICAgICAgICBjb25zdCBza2lsbHMgPSBjbGVhbmVkU3RyXG4gICAgICAgICAgICAuc3BsaXQoXCIsXCIpXG4gICAgICAgICAgICAubWFwKChza2lsbCkgPT4gc2tpbGwudHJpbSgpKVxuICAgICAgICAgICAgLmZpbHRlcigoc2tpbGwpID0+IHNraWxsLmxlbmd0aCA+IDApO1xuICAgICAgICByZXR1cm4gc2tpbGxzO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gUHJvY2VzcyBwaG9uZSBpbnB1dFxuICAgICAgICBjb25zdCBjbGVhbmVkU3RyID0gY29udHJ5Q29kZSArIGlucHV0LnJlcGxhY2UoL1xcRCsvZywgXCIwXCIpO1xuICAgICAgICByZXR1cm4gY2xlYW5lZFN0cjtcbiAgICB9XG59XG4iLCJleHBvcnQgYXN5bmMgZnVuY3Rpb24gY29weUxpbmsoKSB7XG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmFtZVwiKTtcbiAgICBjb25zdCB1c2VybmFtZSA9IG5hbWUudmFsdWU7XG4gICAgY29uc3QgdXJsID0gYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0/dXNlcm5hbWU9JHtlbmNvZGVVUklDb21wb25lbnQodXNlcm5hbWUpfWA7XG4gICAgYXdhaXQgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQodXJsKS50aGVuKCgpID0+IHtcbiAgICAgICAgYWxlcnQoXCJMaW5rIGNvcGllZCB0byBjbGlwYm9hcmQhXCIpO1xuICAgIH0pO1xufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRvd25sb2FkUERGKCkge1xuICAgIHdpbmRvdy5wcmludCgpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBnZW5lcmF0ZVJlc3VtZSB9IGZyb20gXCIuL2dlbmVyYXRlUmVzdW1lXCI7XG5pbXBvcnQgeyBjb3B5TGluaywgZG93bmxvYWRQREYgfSBmcm9tIFwiLi9zaGVhcmFibGVVdGlsc1wiO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIGNvbnN0IGFuY2hvcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFkZFRleHRBcmVhXCIpO1xuICAgIGFuY2hvcnMuZm9yRWFjaCgoYSkgPT4ge1xuICAgICAgICBhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCBjb250YWluZXIgPSBhLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICBjb25zdCBhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgICAgICAgICAgYXJlYS5uYW1lID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCJ0ZXh0YXJlYVwiKS5uYW1lO1xuICAgICAgICAgICAgYXJlYS5zZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwgXCJ0cnVlXCIpO1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFyZWEpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn0pO1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXN1bWUtZm9ybVwiKT8uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hbWVcIikudmFsdWU7XG4gICAgY29uc3QgZW1haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVtYWlsXCIpLnZhbHVlO1xuICAgIGNvbnN0IGNvdW50cnlDb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3VudHJ5LWNvZGVcIikudmFsdWU7XG4gICAgY29uc3QgcGhvbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBob25lXCIpLnZhbHVlO1xuICAgIGNvbnN0IGdpdGh1YiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2l0aHViXCIpXG4gICAgICAgIC52YWx1ZTtcbiAgICBjb25zdCBsaW5rZWRpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlua2VkaW5cIilcbiAgICAgICAgLnZhbHVlO1xuICAgIGNvbnN0IHByb2ZpbGVQaWN0dXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9maWxlLXBpY3R1cmVcIikuZmlsZXM/LlswXTtcbiAgICBjb25zdCBza2lsbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNraWxsc1wiKVxuICAgICAgICAudmFsdWU7XG4gICAgY29uc3QgZWR1Y2F0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0ZXh0YXJlYVtuYW1lPSdlZHVjYXRpb24nXVwiKTtcbiAgICBjb25zdCB3b3JrRXhwZXJpZW5jZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwidGV4dGFyZWFbbmFtZT0nd29yay1leHBlcmllbmNlJ11cIik7XG4gICAgY29uc3Qgc2hlYXJhYmxlTGluayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hlYXJhYmxlLWxpbmtcIik7XG4gICAgY29uc3Qgc2hlYXJhYmxlTGlua0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hhcmVhYmxlLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBQREZCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdlbmVyYXRlLXBkZlwiKTtcbiAgICAvLyBIaWRpbmcgZm9ybVxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc3VtZS1mb3JtXCIpO1xuICAgIGZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGNvbnN0IHJlc3VtZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2VuZXJhdGVkLXJlc3VtZVwiKTtcbiAgICAvLyBTaG93aW5nIGdlbmVyYXRlZCByZXN1bWVcbiAgICBpZiAocmVzdW1lRGl2KSB7XG4gICAgICAgIHJlc3VtZURpdi5pbm5lckhUTUwgPSBnZW5lcmF0ZVJlc3VtZShuYW1lLCBlbWFpbCwgY291bnRyeUNvZGUsIHBob25lLCBbLi4uZWR1Y2F0aW9uc10sIHNraWxscywgWy4uLndvcmtFeHBlcmllbmNlc10sIHByb2ZpbGVQaWN0dXJlLCBnaXRodWIsIGxpbmtlZGluKTtcbiAgICAgICAgcmVzdW1lRGl2LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgfVxuICAgIC8vIEFkZGluZyBhIGNsaWNrIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSB0b2dnbGUgYnV0dG9uXG4gICAgY29uc3QgdG9nZ2xlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2dnbGUtc2tpbGxzXCIpO1xuICAgIGNvbnN0IHNraWxsc1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNraWxsc1wiKTtcbiAgICBjb25zdCB3b3JrRXhwZXJpZW5jZVNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndvcmstZXhwZXJpZW5jZVwiKTtcbiAgICB0b2dnbGVCdXR0b24/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzSGlkZGVuID0gc2tpbGxzU2VjdGlvbj8uc3R5bGUuZGlzcGxheSA9PT0gXCJub25lXCI7XG4gICAgICAgIGlmIChza2lsbHNTZWN0aW9uICYmIHdvcmtFeHBlcmllbmNlU2VjdGlvbikge1xuICAgICAgICAgICAgc2tpbGxzU2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gaXNIaWRkZW4gPyBcImJsb2NrXCIgOiBcIm5vbmVcIjtcbiAgICAgICAgICAgIHdvcmtFeHBlcmllbmNlU2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gaXNIaWRkZW4gPyBcImJsb2NrXCIgOiBcIm5vbmVcIjtcbiAgICAgICAgICAgIHRvZ2dsZUJ1dHRvbi5pbm5lclRleHQgPSBpc0hpZGRlbiA/IFwiU2hvdyBMZXNzXCIgOiBcIlNob3cgTW9yZVwiO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy8gUmV2b2tlIHRoZSBvYmplY3QgVVJMIGFmdGVyIHVzZSB0byBmcmVlIHVwIG1lbW9yeVxuICAgIGlmIChwcm9maWxlUGljdHVyZSkge1xuICAgICAgICBjb25zdCBwcm9maWxlUGljdHVyZVVSTCA9IFVSTC5jcmVhdGVPYmplY3RVUkwocHJvZmlsZVBpY3R1cmUpO1xuICAgICAgICBVUkwucmV2b2tlT2JqZWN0VVJMKHByb2ZpbGVQaWN0dXJlVVJMKTtcbiAgICB9XG4gICAgLy8gU2F2ZSBjaGFuZ2VzIG1hZGUgdG8gdGhlIGVkaXRhYmxlIHNlY3Rpb25zXG4gICAgY29uc3QgZWRpdGFibGVFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbY29udGVudGVkaXRhYmxlPSd0cnVlJ11cIik7XG4gICAgZWRpdGFibGVFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGVkaXRhYmxlRWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIGVkaXRhYmxlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCAoKSA9PiB7XG4gICAgICAgICAgICAvLyBVcGRhdGUgdGhlIGNvbnRlbnQgaW4gcmVhbC10aW1lXG4gICAgICAgICAgICBjb25zdCBlZGl0YWJsZUtleSA9IGVkaXRhYmxlRWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWVkaXRhYmxlXCIpO1xuICAgICAgICAgICAgY29uc3QgdXBkYXRlZENvbnRlbnQgPSBlZGl0YWJsZUVsZW1lbnQuaW5uZXJUZXh0O1xuICAgICAgICAgICAgLy8gRmluZCB0aGUgY29ycmVzcG9uZGluZyBpbnB1dCBlbGVtZW50IHVzaW5nIGRhdGEtZWRpdGFibGUgYXR0cmlidXRlXG4gICAgICAgICAgICBjb25zdCBpbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1lZGl0YWJsZT1cIiR7ZWRpdGFibGVLZXl9XCJdYCk7XG4gICAgICAgICAgICBpZiAoaW5wdXRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgaW5wdXRFbGVtZW50LnZhbHVlID0gdXBkYXRlZENvbnRlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vIFNoYXJlYWJsZSBsaW5rXG4gICAgc2hlYXJhYmxlTGlua0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIHNoZWFyYWJsZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNvcHlMaW5rKTtcbiAgICAvLyBTYXZlIGFzIFBERlxuICAgIFBERkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NoYXJlYWJsZS1jb250YWluZXJcIik7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGRvd25sb2FkUERGKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBjb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==