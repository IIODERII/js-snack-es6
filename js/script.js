"use strict" ;

(function oder2Snacks(){
    snack1() ;
    snack2() ;
    snack3() ;

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
        
        const listaSegnaPosto = tavoloVip.map((value, index) => {
            return {
                tableName: 'Tavolo Vip',
                guestName: value,
                place: index+1
            }
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

    function snack3(){
        const biciclette = [
            {
                nome: 'Atala',
                peso: ''
            },
            {
                nome: 'Basso',
                peso: ''
            },
            {
                nome: 'Bianchi',
                peso: ''
            },
            {
                nome: 'Bottecchia',
                peso: ''
            },
            {
                nome: 'Brinke ',
                peso: ''
            },
            {
                nome: 'Canellini',
                peso: ''
            },
            {
                nome: 'Lombardo',
                peso: ''
            },
            {
                nome: 'Pinarello',
                peso: ''
            },
            {
                nome: 'Scapin',
                peso: ''
            },
            {
                nome: 'Olympia',
                peso: ''
            },
        ]

        biciclette.forEach((value) => value.peso = getRndInteger(2,23));
        console.log('Ecco tutte le nostre biciclette: ');
        console.log(biciclette);

        const snack3Container = document.getElementById('snack-3');
        const lightBikeMsg = document.createElement('div');
        lightBikeMsg.className = 'fs-3 py-5 px-3';

        let lightBike = biciclette[0];

        biciclette.forEach((value) => lightBike = (lightBike.peso > value.peso) ? value : lightBike);

        lightBikeMsg.innerHTML = `
            Nome della bicicletta: ${lightBike.nome}.<br>
            Peso della bicicletta: ${lightBike.peso} kg.
        `;
        snack3Container.append(lightBikeMsg);
    }

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
}());
