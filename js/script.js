"use strict" ;

(function oder2Snacks(){
    snack1() ;
    snack2() ;

    function snack1(){
        const tavoloVip = [ 'Brad Pitt',
                            'Johnny Depp', 
                            'Lady Gaga', 
                            'Cristiano Ronaldo', 
                            'Georgina Rodriguez', 
                            'Chiara Ferragni', 
                            'Fedez', 
                            'George Clooney', 
                            'Amal Clooney', 
                            'Maneskin'];
    
        const listaSegnaPosto = [];
    
        tavoloVip.forEach((value, index) => {
            const currentUser = {
                tableName: 'Tavolo Vip',
                guestName: value,
                place: index+1
            }
            listaSegnaPosto.push(currentUser);
        })
        console.log('Lista segnaposti:');
        console.log(listaSegnaPosto);
    }

    function snack2(){
        const students = [
            {
                id: 213,
                name: 'Marco della Rovere',
                grades: 78
            },
            {
                id: 110,
                name: 'Paola Cortellessa',
                grades: 96
            },
            {
                id: 250,
                name: 'Andrea Mantegna',
                grades: 48
            },
            {
                id: 145,
                name: 'Gaia Borromini',
                grades: 74
            },
            {
                id: 196,
                name: 'Luigi Grimaldello',
                grades: 68
            },
            {
                id: 102,
                name: 'Piero della Francesca',
                grades: 50
            },
            {
                id: 120,
                name: 'Francesca da Polenta',
                grades: 84
            },
        ];

        const nameUppList = [];
        students.forEach((value) => {
            nameUppList.push(value.name.toUpperCase());
        })
        console.log('La lista dei nomi in maiuscolo');
        console.log(nameUppList);

        const studUp70 = students.filter((value) => value.grades > 70);
        console.log('La lista degli studenti che hanno un totale di voti superiore a 70');
        console.log(studUp70);

        const studUp70and120 = students.filter((value) => value.grades > 70 && value.id > 120);
        console.log('La lista degli studenti che hanno un totale di voti superiore a 70 e id superiore a 120');
        console.log(studUp70and120);
    }
}());
