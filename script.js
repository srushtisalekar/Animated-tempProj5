const tempLoad = () => {
    let temp =  document.getElementById('temp');
    temp.innerHTML = "&#xf2cb";
    temp.style.color = ""; // Reset color if needed

    setTimeout(() => {
        temp.innerHTML = "&#xf2ca";
        temp.style.color = "#f8b627";
    }, 1000); //1000=1s

    setTimeout(() => {
        temp.innerHTML = "&#xf2c9";
    }, 2000);

    setTimeout(() => {
        temp.innerHTML = "&#xf2c8";
    }, 3000);

    setTimeout(() => {
        temp.innerHTML = "&#xf2c7";
        temp.style.color = "#d63031";
    }, 4000);
}

// Call tempLoad() once to start the sequence
tempLoad();

// Set tempLoad() to run every 5 seconds to create an infinite loop
setInterval(tempLoad, 5000);
