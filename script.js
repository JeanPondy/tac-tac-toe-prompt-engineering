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
        symbol = generateCircleSVG(); //
      } else if (fields[index] == "cross") {
        symbol = generateCrossSVG(); //generateCrossSVG()
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
/*  */

function generateCircleSVG() {
  const color = "#00B0EF";
  const width = 70;
  const height = 70;
  const svgHtml = /* HTML */ `
    <svg width="${width}" height="${height}">
      <circle
        cx="${width / 2}"
        cy="${height / 2}"
        r="${width / 2 - 2}"
        stroke="${color}"
        stroke-width="2"
        fill="none"
      />
    </svg>
  `;
  return svgHtml;
}

/*  */
function generateCrossSVG() {
  const color = "#fFC000";
  const width = 70;
  const height = 70;
  const svgHtml = /* HTML */ `
    <svg width="${width}" height="${height}">
      <line
        x1="0"
        y1="0"
        x2="${width}"
        y2="${height}"
        stroke="${color}"
        stroke-width="5"
      >
        <animate attributeName="x2" values="0; ${width}" dur="200ms" />
        <animate attributeName="y2" values="0; ${height}" dur="200ms" />
      </line>

      <line
        x1="${width}"
        y1="0"
        x2="0"
        y2="${height}"
        stroke="${color}"
        stroke-width="5"
      >
        <animate attributeName="x2" values="${width}; 0" dur="200ms" />
        <animate attributeName="y2" values="0; ${height}" dur="200ms" />
      </line>
    </svg>
  `;
  return svgHtml;
}
