async function getData() {
    let input = document.getElementById("input")
    showWeather(input.value);
}
async function showWeather(city) {
    const url = `https://open-weather13.p.rapidapi.com/city?city=${city}&lang=EN`;
    const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'e22555f4e7msh4fd5574373923a3p147e8ejsn05be712a252a',
		'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
	}
}
try {
    const res = await fetch(url, options) 
    if(!res.ok) {
        throw new Error("SOmething Wrong");
    }
    const resu = await res.json();
    getWeather(resu);
} catch (error) {
    console.log(error.message);
}
};
function getWeather(data) {
    let div = document.getElementById("main");
    div.innerHTML = data.main.temp$data.main.humidity;
}