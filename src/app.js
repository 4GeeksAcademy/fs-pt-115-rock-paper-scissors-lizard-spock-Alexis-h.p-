window.onload = function () {

  const elegibles = ["rock", "paper", "scissors", "lizard", "spock"]


  function generar() {
    let elegir = Math.floor(Math.random() * 5);
    let generado = (elegibles[elegir]);
    return generado
  }

  const guest = prompt("rock", "paper", "scissors", "lizard", "spock")

  let elegido = generar();

  if (guest == elegido) {
    console.log("empate")
  } else if (guest == "rock") {
    if (elegido == "paper" || elegido == "spock") {
      console.log("you are a loser")
    } else if (elegido == "scissors" ||elegido == "Lizard") {
      console.log("you are a winner")
    }
  } else if (guest == "paper") {
    if (elegido == "scissors" || elegido == "lizard") {
      console.log("you are a loser")
    } else if (elegido == "rock" || elegido == "spock") {
      console.log("you are a winner")
    }

  } else if (guest == "lizard") {
    if (elegido == "scissors" || elegido == "rock") {
      console.log("you are a loser")
    } else if (elegido == "paper" || elegido == "spock") {
      console.log("you are a winner")
    }

  } else if (guest == "spock") {
    if (elegido == "paper" || elegido == "lizard") {
      console.log("you are a loser")
    } else if (elegido == "rock" || elegido == "scissors") {
      console.log("you are a winner")
    }

  }else if (guest == "scissors") {
    if (elegido == "rock" || elegido == "spock") {
      console.log("you are a loser")
    } else if (elegido == "paper" || elegido == "lizard") {
      console.log("you are a winner")
    }

 }

}
