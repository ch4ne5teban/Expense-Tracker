
//Prevent negative integer input
const min = 0;
const dailyLimitInput = document.getElementById('daily-limit');
dailyLimitInput.addEventListener('change', () => {
  let inputValue = parseInt(dailyLimitInput.value);

  if (inputValue < min) {
    dailyLimitInput.value = min;
  }

});