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

// for (let i = 0; i < students.length; i++) {
//     const studentsElement = students[i];
//     const formattedElement = capitalize(studentsElement)
//     formattedElementArray.push(formattedElement)
    
// }

console.log(formattedElementArray);
//CREARE UNA LISTA DI TUTTI GLI STUDENTI CHE HANNO DEI VOTI SUPERIORI A 70
let studentsGoods = students.filter((el) => el.grades > 70)
console.log(studentsGoods);

//CREARE UNA LISTA DI TUTTI GLI STUDENTI CHE HANNO DEI VOTI SUPERIORI A 70 E ID SUPERIORE A 120
let studentsGoodsId = students.filter((el) => el.grades > 70 && el.id > 120)
console.log(studentsGoods);