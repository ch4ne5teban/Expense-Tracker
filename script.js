
//create calendar grid day divs
const days = 31;
const calendar = document.querySelector(".calendar");
for (let i = 0; i < days; i++) {
  const day = document.createElement("div");
  day.textContent = i + 1;
  day.addEventListener("click", () => openModal(i));
  calendar.appendChild(day);
}


//Prevent negative integer input
const min = 0;
const dailyLimitInput = document.getElementById('daily-limit');
dailyLimitInput.addEventListener('change', () => {
  let inputValue = parseInt(dailyLimitInput.value);

  if (inputValue < min) {
    dailyLimitInput.value = min;
  }

});