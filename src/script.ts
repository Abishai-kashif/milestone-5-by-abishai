import { generateResume } from "./generateResume";
import { copyLink, downloadPDF } from "./shearableUtils";

document.addEventListener("DOMContentLoaded", () => {
	const anchors = document.querySelectorAll(".addTextArea");
	anchors.forEach((a) => {
		a.addEventListener("click", (event) => {
			event.preventDefault();

			const container = a.parentElement as HTMLElement;

			const area = document.createElement(
				"textarea"
			) as HTMLTextAreaElement;

			area.name = (
				container.querySelector("textarea") as HTMLTextAreaElement
			).name;
			area.setAttribute("contenteditable", "true");

			container.appendChild(area);
		});
	});
});

document.getElementById("resume-form")?.addEventListener("submit", (event) => {
	event.preventDefault();

	const name = (document.getElementById("name") as HTMLInputElement).value;
	const email = (document.getElementById("email") as HTMLInputElement).value;

	const countryCode = (
		document.getElementById("country-code") as HTMLSelectElement
	).value;

	const phone = (document.getElementById("phone") as HTMLInputElement).value;
	const github = (document.getElementById("github") as HTMLInputElement)
		.value;

	const linkedin = (document.getElementById("linkedin") as HTMLInputElement)
		.value;

	const profilePicture = (
		document.getElementById("profile-picture") as HTMLInputElement
	).files?.[0] as File;

	const skills = (document.getElementById("skills") as HTMLTextAreaElement)
		.value;

	const educations = document.querySelectorAll(
		"textarea[name='education']"
	) as NodeListOf<HTMLTextAreaElement>;

	const workExperiences = document.querySelectorAll(
		"textarea[name='work-experience']"
	) as NodeListOf<HTMLTextAreaElement>;

	const shearableLink = document.getElementById(
		"shearable-link"
	) as HTMLAnchorElement;

	const shearableLinkContainer = document.getElementById(
		"shareable-container"
	) as HTMLDivElement;

	const PDFButton = document.getElementById(
		"generate-pdf"
	) as HTMLButtonElement;

	// Hiding form
	const form = document.getElementById("resume-form") as HTMLFormElement;
	form.style.display = "none";

	const resumeDiv = document.querySelector(
		".generated-resume"
	) as HTMLDivElement;

	// Showing generated resume
	if (resumeDiv) {
		resumeDiv.innerHTML = generateResume(
			name,
			email,
			countryCode,
			phone,
			[...educations],
			skills,
			[...workExperiences],
			profilePicture,
			github,
			linkedin
		);

		resumeDiv.style.display = "block";
	}

	// Adding a click event listener to the toggle button
	const toggleButton = document.getElementById(
		"toggle-skills"
	) as HTMLButtonElement;

	const skillsSection: HTMLElement | null = document.querySelector(".skills");
	const workExperienceSection: HTMLElement | null =
		document.querySelector(".work-experience");

	toggleButton?.addEventListener("click", () => {
		const isHidden: boolean = skillsSection?.style.display === "none";

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
	const editableElements = document.querySelectorAll(
		"[contenteditable='true']"
	);
	editableElements.forEach((element) => {
		const editableElement = element as HTMLElement;

		editableElement.addEventListener("blur", () => {
			// Update the content in real-time
			const editableKey = editableElement.getAttribute("data-editable");
			const updatedContent = editableElement.innerText;

			// Find the corresponding input element using data-editable attribute
			const inputElement = document.querySelector(
				`[data-editable="${editableKey}"]`
			) as HTMLInputElement | HTMLTextAreaElement;
			if (inputElement) {
				inputElement.value = updatedContent;
			}
		});
	});

	// Shareable link
	shearableLinkContainer.style.display = "block";

	shearableLink.addEventListener("click", copyLink);

	// Save as PDF
	PDFButton.addEventListener("click", () => {
		const container = document.querySelector(
			"#shareable-container"
		) as HTMLDivElement;
		container.style.display = "none";
		downloadPDF().then(() => {
			container.style.display = "block";
		});
	});
});
