window.addEventListener('load', function() {



    $('#translate').click(function() {
        var text = '';
        var translatedTxt = '';

        var toTranslate = $('.toTranslate p');

        toTranslate.each(function() {

            text = $(this).text();
            translatedTxt = Dictionary.translateString(text);

            $(this).text(translatedTxt);
        });
    });


    var dict = {
        pies: 'dog',
        psa: 'dog',
        kot: 'cat',
        kota: 'cat',
        ryba: 'fish',
        rybe: 'fish',
        homara: 'lobster',
        je: 'eat',
        i: 'and',
        a: 'and',
        lubi: 'like',
        obiad: 'dinner',
        na: 'on',
        ma: 'have',
        albo: 'or',
        Ola: 'Alex',
        mowila: 'said',
        homar: 'lobster',
        Obiekty: 'Objects',
        bezpośrednie: 'Direct',
        Najprostrzym: 'The easiest',
        sposobem: 'way',
        utworzenia: 'create',
        nowego: 'new',
        jest: 'is',
        jego: 'his',
        utworzenie: 'create',
        inline: 'inline',
        czyli: 'so',
        tzw: 'called',
        Obiekt: 'Object',
        literal: 'literal',
        jest: 'is',
        to: 'it',
        przydatne: 'useful',
        jeśli: 'if',
        potrzebujemy: 'need',
        utworzyć: 'create',
        tylko: 'only',
        jedną: 'one',
        instancję: 'instance',
        obiektu: 'object',
        dupa: 'ass',
        następna: 'nexti szmalexti',
        Funkcje: 'Functions',
        jako: 'as',
        konstruktory: 'constructors',
        Drugim: 'second',
        ze: 'from',
        sposobów: 'way',
        utworzenia: 'create',
        w: 'in',
        języku: 'language',
        JavaScript: 'JS',
        jest: 'is',
        użycie: 'use',
        funkcji: 'function',
        jak: 'like',
        konstruktora: 'Constructor',
        Wewnątrz: 'inside',
        lecz: 'but',
        Wyrazów: 'Words'
    };

    function Translator(dictionary) {
        this.dict = {};

        this.__construct = function() {
            if (dictionary) {
                this.dict = dictionary;
            }
            this.translateWord = function(word) {
                return this.dict[word];
            };
            this.addWord = function(plWord, enWord) {
                this.dict[plWord] = enWord;
            };
            this.deleteWord = function(word) {
                delete this.dict[word];
            };
            this.translateString = function(sentence) {
                var translatedWord = '';
                //  console.log(sentence);
                var splitted = sentence.split(' ');

                for (let item of splitted) {
                    translatedWord += this.translateWord(item) ? this.translateWord(item) + ' ' : item + ' ';
                }
                console.log(sentence);
                //console.log(translatedWord);
                return translatedWord;
            };
        };
        this.__construct();
    }
    var Dictionary = new Translator(dict);

});