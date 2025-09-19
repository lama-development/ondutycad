function updateDateTime() {
  const now = new Date();

  const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };

  const dateString = now.toLocaleDateString("en-US", dateOptions);

  const timeOptions = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  };

  const timeString = now.toLocaleTimeString("en-US", timeOptions);

  const dateElement = document.getElementById("current-date");
  const timeElement = document.getElementById("current-time");

  if (dateElement) dateElement.textContent = dateString;
  if (timeElement) timeElement.textContent = timeString;
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", function () {
  updateDateTime();
  setInterval(updateDateTime, 1000);
});
