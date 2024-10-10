function CallApi( word, definition ) {
	const url = "https://api.urbandictionary.com/v0/random";

	fetch(url)
		.then((response) => {
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			return response.json();
		})
		.then((json) => {
			let index = (json.list.length * Math.random());
			index = Math.floor(index);
			console.log(index);
			const item = json.list[index];
			console.log(item.definition);
			word.innerHTML += `${item.word}`
			definition.innerHTML += `${item.definition}`
		})
		.catch((error) => {
			console.error("Error:", error);
		});
}

const word = document.getElementById("word");
const definition = document.getElementById("definition");

CallApi( word, definition );
