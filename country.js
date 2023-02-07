class Country {
    constructor(name, lang, greeting, colors, flag) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
        this.flag = flag
    } 
}

    let usa = new Country("USA", "Mixed", "Hello There!", ["red", "white", "blue"],"https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png");
    let germany = new Country("Germany", "German", "Guten Tag!", ["black", "red", "gold"],"https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png");
    let hungary = new Country("Hungary", "Hungarian", "Jó reggelt kívánok!", ["red", "white", "green"],"https://cdn.britannica.com/55/1455-004-5897143C/Flag-Hungary.jpg");
    let sierraLeone = new Country("Sierra Leone", "Krio", "Kushɛ Kushɛ-o Kabɔ Adu!", ["green", "white", "blue"],"https://cdn.britannica.com/72/5072-004-B35C4877/Flag-Sierra-Leone.jpg");
    let grenada = new Country("Grenada", "Mixed", "Good Morning!", ["green", "yellow", "red"],"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Grenada.svg/1200px-Flag_of_Grenada.svg.png");

    function ChangeColors(country){

        document.getElementById('Color1').style.background = country.colors[0];
        document.getElementById('Color2').style.background = country.colors[1];
        document.getElementById('Color3').style.background = country.colors[2];
    }

    function ChangeText(country){
        document.getElementById('CountryName').innerText = country.name;
        document.getElementById('Language').innerText = country.lang;
        document.getElementById('greeting').innerText = country.greeting;
    }

    function SwitchCountry() {
        
        let button = document.getElementById('CountryList');
        let input  = button.value;
    
        if (input == "USA") {
            country = usa;
            let img = document.getElementById("flag");
            img.setAttribute('src', country.flag);
            ChangeText(country)
            ChangeColors(country)
            

        }
        else if (input == "Germany") {
            country = germany;
            let img = document.getElementById("flag");
            img.setAttribute('src', country.flag);
            ChangeText(country)
            ChangeColors(country)
        }
        else if (input == "Hungary") {
            country = hungary;
            let img = document.getElementById("flag");
            img.setAttribute('src', country.flag);
            ChangeText(country)
            ChangeColors(country)
        }
        else if (input == "Sierra Leone") {
            country = sierraLeone;
            let img = document.getElementById("flag");
            img.setAttribute('src', country.flag);
            ChangeText(country)
            ChangeColors(country)
        }
        else if (input == "Grenada") {
            country = grenada;
            let img = document.getElementById("flag");
            img.setAttribute('src', country.flag);
            ChangeText(country)
            ChangeColors(country)
        }
    
    }