
function getCity() {
    let select = document.getElementById("countries");

    select.addEventListener("change", function () {
        let country = select.value;
        let city = select.options[select.selectedIndex].dataset.city;

        let params = {
            country: country,
            city: city
        }


        axios.get("https://api.aladhan.com/v1/timingsByCity", {
            params: params
        })
        .then((response) => {
            let data = response.data.data.timings;
            let timzeone = response.data.data.date.readable;
            let city = select.options[select.selectedIndex].dataset.city;
            console.log(city);
            AutoFillPrayers("fajr", data.Fajr, timzeone,city);
            AutoFillPrayers("dhuhr", data.Dhuhr, timzeone,city);
            AutoFillPrayers("asr", data.Asr, timzeone,city);
            AutoFillPrayers("maghrib", data.Maghrib, timzeone,city);
            AutoFillPrayers("isha", data.Isha, timzeone,city);

        })
        .catch((error) => {
            console.error(error);
        })




    })
}

function AutoFillPrayers(id, time, timzeone,city) {
    let now = new Date();
    let nowtime = now.toLocaleTimeString();

    document.getElementById(id).innerText = time
    document.getElementById("currentDay").innerText = timzeone + " - " + nowtime
    document.getElementById("cityName").innerText = city
}

getCity()

window.onload = function () {
  myFunction();
};

function myFunction() {
  let now = new Date();
  let nowtime = now.toLocaleTimeString();
  document.getElementById("currentDay").innerText = nowtime
}


 