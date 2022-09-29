const input = document.querySelector("#input");
const search = document.querySelector("#search");
const clear = document.querySelector("#clear");

async function getWeather() {
    let name = input.value;
    let apiKey = "c2b94417d0c1c477f0618f5c852411f5";
    let api = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiKey}&units=metric`
    );
    if (!api.ok) {
        window.alert("City does not exist!");
        return;
    }
    let city = await api.json(); 
    weatherCard(city)
}

function weatherCard(city){
    let image = "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/draw1.webp"
    if(city.weather[0].main == "Cloudy") {
        image = `https://images.unsplash.com/photo-1536244636800-a3f74db0f3cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1092&q=80`
    } else if (city.weather[0].main == "Clear"){
        image = `https://images.unsplash.com/12/sun-trees.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1640&q=80`
    } else if ((city.weather[0].main == "Clear") {
        image = `https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1534274988757-a28bf1a57c17%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxM%5B%E2%80%A6%5DG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D735%26q%3D80https%3A%2F%2Fimages.unsplash.com%2Fphoto-1534274988757-a28bf1a57c17%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxM%5B%E2%80%A6%5DG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D735%26q%3D80`
    }
    let cities = `<div class="card bg-dark text-white" style="border-radius: 40px;">
    <div class="bg-image" style="border-radius: 35px;">
        <img src=${image}
            class="card-img" alt="weather" style="border-radius: 40px;" />
        <div class="mask" style="background-color: rgba(190, 216, 232, .5);"></div>
    </div>
    <div class="card-img-overlay text-dark p-5">
        <h4 class="mb-0">Juneau, Alaska, US</h4>
        <p class="display-2 my-3">1.28°C</p>
        <p class="mb-2">Feels Like: <strong>-1.08 °C</strong></p>
        <h5>Snowy</h5>
    </div>
</div>`
}

search.addEventListener("click", getWeather);

//cityname, country, state/province, temp, weather, feels like
