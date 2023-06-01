let weather = {
    fetchWeather: function (city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2cb61b9e5c6011a065bdcb9086df9769`)
            .then((response) => {
                if (!response.ok) {
                    alert("No weather found.");
                    throw new Error("No weather found.");
                }
                return response.json();
            })
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
        const country = data.sys.country;
        const icon = data.weather[0].icon;
        const temp = data.main.temp;
        const description = data.weather[0].description;
        const celsius = Math.round(temp -273);
        document.querySelector(".country").innerText = country;
        document.querySelector(".icon").src =`https://openweathermap.org/img/wn/${icon}.png`;
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = ` ${celsius}°C`;
  },
};
weather.fetchWeather("Eindhoven");

