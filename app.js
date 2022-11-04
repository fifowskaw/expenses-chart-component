const MON_PLACE = document.querySelector("#mon");
const TUE_PLACE = document.querySelector("#tue");
const WED_PLACE = document.querySelector("#wed");
const THU_PLACE = document.querySelector("#thu");
const FRI_PLACE = document.querySelector("#fri");
const SAT_PLACE = document.querySelector("#sat");
const SUN_PLACE = document.querySelector("#sun");

const currentDay = new Date();
console.log(currentDay.getDay());

const setCurrentDay = () => {
    const CURRENT_DAY = document.querySelector(".current-day");
    CURRENT_DAY.classList.remove("current-day");
    console.log(CURRENT_DAY);

    const day = currentDay.getDay();

    switch (day) {
        case 0:
            SUN_PLACE.classList.add("current-day");
            break;
        case 1:
            MON_PLACE.classList.add("current-day");
            break;
        case 2:
            TUE_PLACE.classList.add("current-day");
            break;
        case 3:
            WED_PLACE.classList.add("current-day");
            break;
        case 4:
            THU_PLACE.classList.add("current-day");
            break;
        case 5:
            FRI_PLACE.classList.add("current-day");
            break;
        case 6:
            SAT_PLACE.classList.add("current-day");
            break;
        default:
    }
};

async function getData() {
    const response = await fetch("data.json");
    const data = await response.json();

    return data;
}

async function drawBarChart() {
    const data = await getData();
    console.log(data);

    console.log(data[0].amount);

    MON_PLACE.style.height = `calc(3 * ${data[0].amount}px)`;
    const monAmount = document.createElement("div");
    monAmount.classList.add("detail");
    monAmount.textContent = `$${data[0].amount}`;
    MON_PLACE.appendChild(monAmount);

    TUE_PLACE.style.height = `calc(3 * ${data[1].amount}px)`;
    const tueAmount = document.createElement("div");
    tueAmount.classList.add("detail");
    tueAmount.textContent = `$${data[1].amount}`;
    TUE_PLACE.appendChild(tueAmount);

    WED_PLACE.style.height = `calc(3 * ${data[2].amount}px)`;
    const wedAmount = document.createElement("div");
    wedAmount.classList.add("detail");
    wedAmount.textContent = `$${data[2].amount}`;
    WED_PLACE.appendChild(wedAmount);

    THU_PLACE.style.height = `calc(3 * ${data[3].amount}px)`;
    const thuAmount = document.createElement("div");
    thuAmount.classList.add("detail");
    thuAmount.textContent = `$${data[3].amount}`;
    THU_PLACE.appendChild(thuAmount);

    FRI_PLACE.style.height = `calc(3 * ${data[4].amount}px)`;
    const friAmount = document.createElement("div");
    friAmount.classList.add("detail");
    friAmount.textContent = `$${data[4].amount}`;
    FRI_PLACE.appendChild(friAmount);

    SAT_PLACE.style.height = `calc(3 * ${data[5].amount}px)`;
    const satAmount = document.createElement("div");
    satAmount.classList.add("detail");
    satAmount.textContent = `$${data[5].amount}`;
    SAT_PLACE.appendChild(satAmount);

    SUN_PLACE.style.height = `calc(3 * ${data[6].amount}px)`;
    const sunAmount = document.createElement("div");
    sunAmount.classList.add("detail");
    sunAmount.textContent = `$${data[5].amount}`;
    SUN_PLACE.appendChild(sunAmount);
}

drawBarChart();
setCurrentDay();
