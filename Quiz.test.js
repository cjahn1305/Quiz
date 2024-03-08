const Fragen = require("./Quiz.js"); // Annahme: Die Quiz.js-Datei befindet sich im selben Verzeichnis wie die Testdatei

describe("Quiz Tests", () => {
  it("überprüft die Anzahl der Fragen", () => {
    // Testfall: Überprüft, ob die Anzahl der Fragen korrekt ist
    expect(Fragen.Fragen.length).toBe(5); // Diese Zeile deckt die Länge des Fragenarrays ab
  });

  it("überprüft, ob Fragen und Antworten vorhanden sind", () => {
    // Testfall: Überprüft, ob jede Frage ein Frage- und Antworttext hat
    Fragen.Fragen.forEach((frage) => {
      expect(frage.Frage).toBeTruthy(); // Überprüft, ob eine Frage vorhanden ist
      expect(frage.Antwort).toBeTruthy(); // Überprüft, ob eine Antwort vorhanden ist
    });
  });

  it("überprüft, ob die Frage-Keys eindeutig sind", () => {
    // Testfall: Überprüft, ob die Frage-Keys eindeutig sind
    const frageKeys = Fragen.Fragen.map((frage) => frage.Frage_key);
    const eindeutigeKeys = new Set(frageKeys);
    expect(frageKeys.length).toBe(eindeutigeKeys.size); // Überprüft, ob alle Frage-Keys eindeutig sind
  });
});
