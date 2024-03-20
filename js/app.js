//////SNACK 1

//CREARE UN ARRAY CON GLI INVITATI AL PARTY

const myFriends = ['Brad Pitt',
    'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo',
    'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez',
    'George Clooney', 'Amal Clooney', 'Maneskin']

//CREARE IL SEGNAPOSTO
//CREARE UN MAP PER AGGIUNGERE TUTTE LE CARATTERISTICHE 
const copyMyFriends = myFriends.map((el, i) => {
    //RITORNARE LE CARATTERISTICHE
    return {
        nameOfVip: el,
        tableName: 'tavolo VIP',
        tablePlace: i + 1
    }
})

//STAMPARE I SEGNAPOSTO
console.log(copyMyFriends);




//////SNACK 2

//CREARE LA LISTA DI STUDENTI
const students = [
    {
        id: 213,
        nome: 'Marco della Rovere',
        grades: 78
    },

    {
        id: 110,
        nome: 'Paola Cortellessa',
        grades: 96
    },

    {
        id: 250,
        nome: 'Andrea Mantegna ',
        grades: 48
    },

    {
        id: 145,
        nome: 'Gaia Borromini',
        grades: 74
    },

    {
        id: 196,
        nome: 'Luigi Grimaldello ',
        grades: 68
    },

    {
        id: 102,
        nome: 'Piero della Francesca   ',
        grades: 50
    },

    {
        id: 120,
        nome: 'Francesca da Polenta',
        grades: 84
    },
]


//CREARE LA LISTA CON I NOMI IN MAIUSCOLO
// function capitalize(string) {
//     let newString = string.toUpperCase()
//     return newString
// }

const formattedElementArray = []

students.forEach((el) => {
    const nameLower = el.nome.toUpperCase()
    formattedElementArray.push(nameLower)
})

console.log(formattedElementArray);

//CREARE UNA LISTA DI TUTTI GLI STUDENTI CHE HANNO DEI VOTI SUPERIORI A 70
let studentsGoods = students.filter((el) => el.grades > 70)
console.log(studentsGoods);

//CREARE UNA LISTA DI TUTTI GLI STUDENTI CHE HANNO DEI VOTI SUPERIORI A 70 E ID SUPERIORE A 120
let studentsGoodsId = students.filter((el) => el.grades > 70 && el.id > 120)
console.log(studentsGoodsId);



/////SNACK 3

// CREARE UN ARRAY DI BICI
const bicycles = [
    {
        nome: 'hiland',
        peso: 10
    },

    {
        nome: 'galano',
        peso: 8
    },

    {
        nome: 'MU',
        peso: 9
    },

    {
        nome: 'kabon',
        peso: 6
    },

    {
        nome: 'pinarello',
        peso: 7
    },


]

//TROVARE LA BICI CON IL PESO MINORE

let lowestWeightFound = bicycles[0]

for (let i = 1; i < bicycles.length; i++) {
    const currentWeight = bicycles[i]
    if (currentWeight.peso < lowestWeightFound.peso) {
        lowestWeightFound = currentWeight;
    }
}
// STAMPARE IN CONSOLE LA BICI CON IL PESO MINORE

console.log(lowestWeightFound);



////SNACK 4
//CREARE UN ARRAY DI OGGETTI DI SQUADRE DI CALCIO
const footballClubs = [
    {
        nome: 'juve',
        puntiFatti: 0,
        falliSubiti: 0
    },

    {
        nome: 'napoli',
        puntiFatti: 0,
        falliSubiti: 0
    },

    {
        nome: 'palermo',
        puntiFatti: 0,
        falliSubiti: 0
    },

    {
        nome: 'milan',
        puntiFatti: 0,
        falliSubiti: 0
    },

    {
        nome: 'inter',
        puntiFatti: 0,
        falliSubiti: 0
    },


]


//CAMBIARE I PUNTI FATTI E I FALLI SUBITI CON DEI NUMERI RANDOM

for(let i = 0; i < footballClubs.length; i++){
    const currentClub = footballClubs[i]
    currentClub.puntiFatti = Math.floor(Math.random() * 115)
    currentClub.falliSubiti = Math.floor(Math.random() * 180)
}
console.log(footballClubs);




//CREARE UN NUOVO ARRAY SOLO CON I NOMI DELLE SQUADRE E I FALLI SUBITI
const updatedFootballClubs = footballClubs.map((club) => {
    const { nome, falliSubiti } = club
    return {
        nome,
        falliSubiti
    }
});

//STAMPARE IL NUOVO ARRAY IN CONSOLE

console.log(updatedFootballClubs);