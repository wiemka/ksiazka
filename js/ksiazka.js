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
