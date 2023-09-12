const counter = document.querySelector(".counter-number");
async function updateCounter() {
	let response = await fetch("https://sxgf7oh7sdk4f5m2e7jmvhns4a0wifjv.lambda-url.us-east-1.on.aws/");
	let data = await response.json();
	counter.innerHTML = `Views: ${data}`;
}

updateCounter();