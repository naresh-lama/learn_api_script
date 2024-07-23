const weatherCity = document.querySelector(".city__input");
const searchBtn = document.querySelector(".search__btn");
const teMp = document.querySelector(".weather-sect__temp");
const huMi = document.querySelector(".weather-sect__humi");
const laTi = document.querySelector(".weather-sect__lati");
const loNg = document.querySelector(".weather-sect__long");
const City = document.querySelector(".container-sect__span");

function renderData(city) {
  async function fetchingFunc() {
    try {
      const data = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&key=93Y5PBPC3H2UWBWWP433VGUZ8`
      );
      const data1 = await data.json();

      City.textContent = city;
      teMp.textContent = Math.round(
        (data1.currentConditions.temp - 32) * (5 / 9)
      );
      huMi.textContent = data1.currentConditions.humidity;
      laTi.textContent = data1.latitude;
      loNg.textContent = data1.longitude;
    } catch (err) {
      alert("Something went wrong.");
    }
  }

  fetchingFunc();
}

renderData("Tokyo");

searchBtn.addEventListener("click", function () {
  renderData(weatherCity.value);
});