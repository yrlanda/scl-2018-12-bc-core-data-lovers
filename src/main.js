
//Funciones para el boton de volver arriba
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        topFunction();
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

window.onload = () => {
    // let list = window.sortData(window.LOL.data, 1);
    // draw_champions(list);

    // document.getElementById('az').addEventListener('click', (evento) => {
    //     evento.preventDefault();
    //     clear_grid();
    //     let list = window.sortData(window.LOL.data, 1);
    //     draw_champions(list);
    // });

    // document.getElementById('za').addEventListener('click', (evento) => {
    //     evento.preventDefault();
    //     clear_grid();
    //     let list = window.sortData(window.LOL.data, 2);
    //     draw_champions(list);
    // });

    // document.getElementById('all').addEventListener('click', (evento) => {
    //     evento.preventDefault();
    //     clear_grid();
    //     document.getElementById('categoria').textContent = "Champions";
    //     let list = window.sortData(window.LOL.data, 1);
    //     draw_champions(list);
    // });

    // document.getElementById('mage').addEventListener('click', (evento) => {
    //     evento.preventDefault();
    //     clear_grid();
    //     document.getElementById('categoria').textContent = "Mago";
    //     let filtered_list = window.filterData(list, "Mage");
    //     draw_champions(filtered_list);
    // });

    // document.getElementById('tank').addEventListener('click', (evento) => {
    //     evento.preventDefault();
    //     document.getElementById('categoria').textContent = "Tanque";
    //     clear_grid();
    //     let filtered_list = window.filterData(list, "Tank");
    //     draw_champions(filtered_list);
    // });
    // document.getElementById('support').addEventListener('click', (evento) => {
    //     evento.preventDefault();
    //     clear_grid();
    //     document.getElementById('categoria').textContent = "Apoyo";
    //     let filtered_list = window.filterData(list, "Support");
    //     draw_champions(filtered_list);
    // });
    // document.getElementById('marksman').addEventListener('click', (evento) => {
    //     evento.preventDefault();
    //     clear_grid();
    //     document.getElementById('categoria').textContent = "Tirador";
    //     let filtered_list = window.filterData(list, "Marksman");
    //     draw_champions(filtered_list);
    // });
    // document.getElementById('assassin').addEventListener('click', (evento) => {
    //     evento.preventDefault();
    //     clear_grid();
    //     document.getElementById('categoria').textContent = "Asesino";
    //     let filtered_list = window.filterData(list, "Assassin");
    //     draw_champions(filtered_list);
    // });
    // document.getElementById('fighter').addEventListener('click', (evento) => {
    //     evento.preventDefault();
    //     clear_grid();
    //     document.getElementById('categoria').textContent = "Guerrero";
    //     let filtered_list = window.filterData(list, "Fighter");
    //     draw_champions(filtered_list);
    // });



    //Funcion que borra las tarjetas de personajes de la pantalla
    function clear_grid() {
        let myNode = document.getElementById('lista');
        while (myNode.firstChild) {
            myNode.removeChild(myNode.firstChild);
        }
    }



    //funcion que recibe como parametro la lista de personaje y dibuja las tarjetas
    //de todos los personajes de la lista enviada
    function draw_champions(list) {
        const lista = document.getElementById('lista')
        let i = 0;
        for (let champ in list) {
            if (i % 5 === 0) {
                if (i > 0) {
                    lista.appendChild(row);
                }
                var row = pintar_fila();
                pintar_caja_inicial(list[champ], row);
            } else {
                pintar_caja_estandar(list[champ], row);
            }
            i++
        }
        lista.appendChild(row);


    }
    //funcion que agrega a traves del DOM una fila nueva a la lista
    function pintar_fila() {
        let row = document.createElement('div');
        row.className = 'row justify-content-start';
        return row;
    }

    //Funcion que dibuja la primera tarjeta de cada linea de la lista de personajes
    function pintar_caja_inicial(champion, row) {

        // console.log(champion.name);

        let div = document.createElement('div');
        div.className = 'col-sm-2 offset-sm-1';
        div.onclick = function () { champion_profile(champion) }
        div.setAttribute('data-target', '.bd-example-modal-lg');
        div.setAttribute('data-toggle', 'modal');

        let card = document.createElement('div');
        card.className = 'card text-center tarjeta';

        let card_img = document.createElement('img');
        card_img.className = 'card-img-top';
        card_img.src = champion.splash

        let card_body = document.createElement('div');
        card_body.className = 'card-body';

        let card_title = document.createElement('h5');
        card_title.className = 'card-title';
        card_title.textContent = champion.name;

        let card_text = document.createElement('p');
        card_text.className = 'card-text';
        card_text.textContent = champion.title;


        card_body.appendChild(card_title);
        card_body.appendChild(card_text);
        card.appendChild(card_img);
        card.appendChild(card_body);
        div.appendChild(card);
        row.appendChild(div);
    }
    function champion_profile(champion) {
        document.getElementById('champ_name').innerHTML = champion.name;
        document.getElementById('champ_splash').src = champion.splash;
        document.getElementById('champ_title').innerHTML = champion.title;
        document.getElementById('champ_blurb').innerHTML = champion.blurb;
        document.getElementById('champ_attack').innerHTML = champion.info.attack;
        document.getElementById('champ_defense').innerHTML = champion.info.defense;
        document.getElementById('champ_magic').innerHTML = champion.info.magic;
        document.getElementById('champ_difficulty').innerHTML = champion.info.difficulty;
    }

    //Funcion que dibuja las tarjetas de la lista de personajes (excepto la primera de cada fila)
    function pintar_caja_estandar(champion, row) {

        let div = document.createElement('div');
        div.className = 'col-sm-2';
        div.onclick = function () { champion_profile(champion) }
        div.setAttribute('data-target', '.bd-example-modal-lg');
        div.setAttribute('data-toggle', 'modal');

        let card = document.createElement('div');
        card.className = 'card text-center tarjeta';

        let card_img = document.createElement('img');
        card_img.className = 'card-img-top';
        card_img.src = champion.splash
        card_img.onclick = function () { champion_profile(champion) }


        let card_body = document.createElement('div');
        card_body.className = 'card-body';

        let card_title = document.createElement('h5');
        card_title.className = 'card-title';
        card_title.textContent = champion.name;

        let card_text = document.createElement('p');
        card_text.className = 'card-text';
        card_text.textContent = champion.title;


        card_body.appendChild(card_title);
        card_body.appendChild(card_text);
        card.appendChild(card_img);
        card.appendChild(card_body);
        div.appendChild(card);
        row.appendChild(div);

    }
    // var myPieChart = new Chart(ctx,{
    //     type: 'pie',
    //     data: data,
    //     options: options
    // });

    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'polarArea',

        // The data for our dataset
        data: {
            labels: ["Tanques", "Magos", "Apoyos", "Asesinos", "Tiradores", "Guerreros"],
            datasets: [{
                label: "My First dataset",
                backgroundColor: ['#ac2e17', '#3c0090', '#66b6d1', '#c1a432', '#d0c430', 'white'], 
                data: [5, 8, 5, 9, 2, 10],
            }]
        },

        // Configuration options go here
        options: {
            responive
        }
    });



}




// var myPieChart = new Chart(ctx,{
//     type: 'pie',
//     data: data,
//     options: options
// });

