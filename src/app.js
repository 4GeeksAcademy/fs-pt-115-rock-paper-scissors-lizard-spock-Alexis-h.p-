window.onload = function () {

  const elegibles = ["rock","paper","scissors","lizard","spock"]


  function generar() {
    let numeroAleatorio = Math.floor(Math.random() * 5);
    let opcionGenerada = (elegibles[numeroAleatorio]);
    return opcionGenerada
  }

  const guest = prompt("Elige: rock, paper, scissors, lizard o spock", "rock").toLowerCase()

  let opcionElegida = generar();

  if (guest == opcionElegida) {
    console.log("empate")
  } else if (guest == "rock") {
    if (opcionElegida == "paper" || opcionElegida == "spock") {
      console.log("you are a loser")
    } else if (opcionElegida == "scissors" ||opcionElegida == "Lizard") {
      console.log("you are a winner")
    }
  } else if (guest == "paper") {
    if (opcionElegida == "scissors" || opcionElegida == "lizard") {
      console.log("you are a loser")
    } else if (opcionElegida == "rock" || opcionElegida == "spock") {
      console.log("you are a winner")
    }

  } else if (guest == "lizard") {
    if (opcionElegida == "scissors" || opcionElegida == "rock") {
      console.log("you are a loser")
    } else if (opcionElegida == "paper" || opcionElegida == "spock") {
      console.log("you are a winner")
    }

  } else if (guest == "spock") {
    if (opcionElegida == "paper" || opcionElegida == "lizard") {
      console.log("you are a loser")
    } else if (opcionElegida == "rock" || opcionElegida == "scissors") {
      console.log("you are a winner")
    }

  }else if (guest == "scissors") {
    if (opcionElegida == "rock" || opcionElegida == "spock") {
      console.log("you are a loser")
    } else if (opcionElegida == "paper" || opcionElegida == "lizard") {
      console.log("you are a winner")
    }

 }

}
