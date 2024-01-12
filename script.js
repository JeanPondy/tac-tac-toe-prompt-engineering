/* 1. Array mit 9 mal null */
let fields = [
  null,
  "circle",
  "circle",
  "circle",
  null,
  null,
  "cross",
  "cross",
  null,
];

function init() {
  render();
}

// Deine render-Funktion
function render() {
  // Holen Sie sich das HTML-Element mit der ID "content"
  const contentDiv = document.getElementById("content");

  // Generiere den HTML-Code für die Tabelle
  let tableHtml = "<table>";

  // Schleife über die Zeilen der Tabelle
  for (let i = 0; i < 3; i++) {
    tableHtml += "<tr>"; // Öffne eine neue Tabellenzeile (Row)

    // Schleife über die Spalten der Tabelle
    for (let j = 0; j < 3; j++) {
      // Berechne den Index für das aktuelle Feld
      const index = i * 3 + j;

      // Initialisiere das Symbol als leeren String
      let symbol = "";

      // Überprüfe den Zustand des Feldes und setze das Symbol entsprechend
      if (fields[index] == "circle") {
        symbol = "o";
      } else if (fields[index] == "cross") {
        symbol = "x";
      }

      // Füge die Zelle mit dem entsprechenden Symbol zum HTML-Code hinzu
      tableHtml += `<td>${symbol}</td>`;
    }

    tableHtml += "</tr>"; // Schließe die Tabellenzeile (Row)
  }

  tableHtml += "</table>"; // Schließe die Tabelle

  // Setze den generierten HTML-Code in das contentDiv
  contentDiv.innerHTML = tableHtml;
}
