import { generateResume } from "./generateResume";

export async function copyLink() {
	const name = document.getElementById("name") as HTMLInputElement;
	const username = name.value;
	const url = `${window.location.origin}?username=${encodeURIComponent(
		username
	)}`;
	await navigator.clipboard.writeText(url).then(() => {
		alert("Link copied to clipboard!");
	});
}

export async function downloadPDF() {
	window.print();
}
