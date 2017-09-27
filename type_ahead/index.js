const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
let cities = [];

fetch(endpoint)
	.then(blob => blob.json())
	.then(data => cities.push(...data));

console.log(cities);

let input = document.querySelector('#search-field');
console.log(input);

let findMatches = (target, array) => {
	const regex = new RegExp(target, 'gi');
	return array.filter( place => place.city.match(regex) || place.state.match(regex));
}

let displayMatches = (e) => {
	var matches = findMatches(e.target.value, cities);
	let searchResult = document.querySelector('.search-result');

	let html = matches.map(place => {
		let val = e.target.value;
		let regex = new RegExp(val, 'gi');
		let cityName = place.city.replace(regex, `<span class="hl">${val}</span>`);
		let stateName = place.state.replace(regex, `<span class="hl">${val}</span>`);

		return `
			<li>
				<span class="city">${cityName}</span>,
				<span class="state">${stateName}</span>,
				<span class="population">${place.population}</span>
			</li>`
	}).join('');

	searchResult.innerHTML = html;

}

let onChangeHandler = (e) => {
	console.log(e.target.value);
}

input.addEventListener('change', displayMatches);
input.addEventListener('keyup', displayMatches);


// const prom = fetch(endpoint);
// console.log(prom);

// export default prom;
