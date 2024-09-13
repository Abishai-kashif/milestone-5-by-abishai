import { processInput } from "./inputUtils";

export function generateResume(
	name: string,
	email: string,
	countryCode: string,
	phone: string,
	educations: HTMLTextAreaElement[],
	skills: string,
	workExperiences: HTMLTextAreaElement[],
	profilePicture: File,
	github: string,
	linkedin: string
) {
	return `
    <section class="personal-info">
        <figure>
            <img
                src="${
					profilePicture
						? URL.createObjectURL(profilePicture)
						: "images/default-profile-picture.jpeg"
				}"
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
                <a href="tel:${processInput(
					"phone",
					phone,
					countryCode
				)}">${processInput(
		"phone",
		phone,
		countryCode
	)} <i class="bx bxs-phone"></i></a>
            </p>

        </div>

    </section>

    <section class="education">
        <h2>Education</h2>
        <ul>
            ${educations
				.map(
					(education) =>
						`<li data-editable="education" contenteditable="true">${education.value}</li>`
				)
				.join("")}
        </ul>
    </section>

    <section class="skills" style="display: none">
        <h2>Skills</h2>
        <ul>
            ${processInput("skills", skills)
				.map(
					(skill) =>
						`<li data-editable="skills" contenteditable="true">${skill}</li>`
				)
				.join("")}
        </ul>
    </section>

    <section class="work-experience" style="display: none">
        <h2>Work Experience</h2>
        <ul>
            ${workExperiences
				.map(
					(workExperience) =>
						`<li data-editable="work-experience" contenteditable="true">${workExperience.value}</li>`
				)
				.join("")}
        </ul>
    </section>

    <button id="toggle-skills">Show More</button>
    `;
}
