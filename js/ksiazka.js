"use strict";

class Ksiazka {
    constructor(tytul, autor, przeczytana) {
        this.tytul = tytul;
        this.autor = autor;
        this.przeczytana = przeczytana;
    }
    opiszKsiazke() {
        var text = "Książka ma tytuł" + this.tytul + ", autorem jest " + this.autor + " i została ";

        if (this.przeczytana) {
            text += "przeczytana.";
        } else {
            text += "nieprzeczytana";
        }
        console.log(text);
    }
}

var ksiazka1 = new Ksiazka("Wiedzmin", "Sapkowski", true);
var ksiazka2 = new Ksiazka("Pan Tadeusz", "Mickiewicz", true);
var ksiazka3 = new Ksiazka("50 twarzy Greya", "James", false);

var tablica = [ksiazka1, ksiazka2, ksiazka3];

console.log(tablica);
