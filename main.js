window.onload = () => {
   const lista = document.getElementById('lista')
    let i = 0;

    for (var camp in LOL.data) {


        if (i % 5 === 0) {
            if (i > 0){
                lista.appendChild(row);
            }
            var row = pintar_fila();
            pintar_caja_inicial(LOL.data[camp]);
        } else {
            pintar_caja_estandar(LOL.data[camp]);
        }
        i++
    }
    

    function pintar_fila() {
        var row = document.createElement('div');
        row.className = 'row justify-content-start';
        return row;
    }


    function pintar_caja_inicial(champion) {
        console.log(champion.title);

        var div = document.createElement('div');
        div.className = 'col-sm-2 offset-sm-1';

        var card = document.createElement('div');
        card.className = 'card text-center tarjeta';

        var card_img = document.createElement('img');
        card_img.className = 'card-img-top';
        card_img.src = champion.splash

        var card_body = document.createElement('div');
        card_body.className = 'card-body';

        var card_title = document.createElement('h5');
        card_title.className = 'card-title';
        card_title.textContent = champion.name;

        var card_text = document.createElement('p');
        card_text.className = 'card-text';
        card_text.textContent = champion.title;


        card_body.appendChild(card_title);
        card_body.appendChild(card_text);
        card.appendChild(card_img);
        card.appendChild(card_body);
        div.appendChild(card);
        row.appendChild(div);
    }


    function pintar_caja_estandar(champion) {
        console.log(champion.title);

        var div = document.createElement('div');
        div.className = 'col-sm-2';

        var card = document.createElement('div');
        card.className = 'card text-center tarjeta';

        var card_img = document.createElement('img');
        card_img.className = 'card-img-top';
        card_img.src = champion.splash

        var card_body = document.createElement('div');
        card_body.className = 'card-body';

        var card_title = document.createElement('h5');
        card_title.className = 'card-title';
        card_title.textContent = champion.name;
        
        var card_text = document.createElement('p');
        card_text.className = 'card-text';
        card_text.textContent = champion.title;


        card_body.appendChild(card_title);
        card_body.appendChild(card_text);
        card.appendChild(card_img);
        card.appendChild(card_body);
        div.appendChild(card);
        row.appendChild(div);


    }


}