function getPeople(handshake) {

    let shakedHands = 0



    for (let countHuman = 1; shakedHands < handshake; countHuman++) {


        shakedHands += countHuman;

        console.log('Handshakes:', shakedHands, 'People entered:', countHuman);


    }

    return shakedHands;


}

getPeople(120)

