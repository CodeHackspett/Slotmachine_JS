const WinMessage = {
  no_win: "No win!",
  win: "Small Win!!",
  big: "Big Win!!!"
};

// Function to determine type of win message
let GetWin = (a, b, c) => {
  if (a == b && b == c) {
    return WinMessage.big;
  } else if (a == b || a == c || b == c) {
    return WinMessage.win;
  } else {
    return WinMessage.no_win;
  }
};

// Show the slots and compute the win message
let outputHandler = response => {
  let res = JSON.parse(response);
  document.getElementById("result-container").classList.remove("hide");
  document.getElementById("topMessage").innerText =
    GetWin(res.slotArray[0], res.slotArray[1], res.slotArray[2]);

  // Assign related images to slots
  for (let i = 0; i < 3; i++) {
    let id = "result" + (i + 1);
    let imgSrc = "/img/Symbol_" + res.slotArray[i] + ".png";
    document.getElementById(id).setAttribute("src", imgSrc);
  }
  // Show/Hide bonus message
  let bonus = document.getElementById("bonus").classList;
    if(bonus.contains("hide")){
        bonus.remove("hide");
    } else {
    if (!bonus.contains("hide")) bonus.add("hide");
  }
};

let clickHandler = () => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      outputHandler(this.response);
    }
  };

  xhttp.open("GET", "/play", true);
  xhttp.send();
};
