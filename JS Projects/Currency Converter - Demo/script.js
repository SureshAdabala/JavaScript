function getAmount() {
    let input = document.getElementById("input").value;
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    convertMoney(input, from, to)
}
async function convertMoney(input, from, to) {
    const url = `https://currency-conversion-and-exchange-rates.p.rapidapi.com/convert?from=${from}&to=${to}&amount=${input}`;
    const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '7a4bee2195msh942db397a84fb3ap14f92ajsn0e612748c38b',
		'x-rapidapi-host': 'currency-conversion-and-exchange-rates.p.rapidapi.com'
	}
};

try {
	const res = await fetch(url, options);
    if(!res.ok) {
        throw new Error("Something Went Wrong");
    }
	const result1 = await res.json();
	getMoney(result1);
} catch (error) {
	console.log(error.message);
}
}
function getMoney(dabbu) {
    let div = document.getElementById("mains")
    div.innerHTML = `Converted Amount : ${dabbu.result}`;
}