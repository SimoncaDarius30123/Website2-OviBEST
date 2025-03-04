function updateStatus() {
    const statusData = document.querySelector("#statusData");
    let d = new Date();
    let day = d.getDay();
    let hours = d.getHours();

    if (day === 6 || day===0 || hours >= 16 || hours < 8) {
      statusData.textContent = "Closed";
      statusData.style.color = "red";
    } else {
      statusData.textContent = "Open";
      statusData.style.color = "green";
    }
  }

  // Actualizare periodică la fiecare 60 de secunde
  setInterval(updateStatus, 100);


  