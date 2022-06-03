
function getPeople(handshake) {

    handshake = 0;


    for (let countHuman = 1; handshake < 120; countHuman++) {


        handshake += countHuman;

        console.log('Handshakes:', handshake, 'People entered:', countHuman);


    }

    return handshake;


}


console.log(getPeople())
