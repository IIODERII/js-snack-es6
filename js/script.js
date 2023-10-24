"use strict" ;

(function oder2Snacks(){
    snack1() ;

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
    
        console.log(listaSegnaPosto);
    }
}());
