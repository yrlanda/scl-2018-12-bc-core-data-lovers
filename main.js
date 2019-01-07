window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

window.onload = () => {
    let list = ordenar(LOL.data, 1);
    draw_champions(list);
    filter(list, "Mage");

    document.getElementById('az').addEventListener('click', (evento) => {
        evento.preventDefault();
        clear_grid();
        let list = ordenar(LOL.data, 1);
        draw_champions(list);
    });

    document.getElementById('za').addEventListener('click', (evento) => {
        evento.preventDefault();
        clear_grid();
        let list = ordenar(LOL.data, 2);
        draw_champions(list);
    });

    document.getElementById('all').addEventListener('click', (evento) => {
        clear_grid();
        document.getElementById('categoria').textContent = "Champions";
        let list = ordenar(LOL.data, 1);
        draw_champions(list);
    });

    document.getElementById('mage').addEventListener('click', (evento) => {
        evento.preventDefault();
        clear_grid();
        document.getElementById('categoria').textContent = "Mago";
        let filtered_list = filter(list, "Mage");
        draw_champions(filtered_list);
    });

    document.getElementById('tank').addEventListener('click', (evento) => {
        evento.preventDefault();
        document.getElementById('categoria').textContent = "Tanque";
        clear_grid();
        let filtered_list = filter(list, "Tank");
        draw_champions(filtered_list);
    });
    document.getElementById('support').addEventListener('click', (evento) => {
        evento.preventDefault();
        clear_grid();
        document.getElementById('categoria').textContent = "Apoyo";
        let filtered_list = filter(list, "Support");
        draw_champions(filtered_list);
    });
    document.getElementById('marksman').addEventListener('click', (evento) => {
        evento.preventDefault();
        clear_grid();
        document.getElementById('categoria').textContent = "Tirador";
        let filtered_list = filter(list, "Marksman");
        draw_champions(filtered_list);
    });
    document.getElementById('assassin').addEventListener('click', (evento) => {
        evento.preventDefault();
        clear_grid();
        document.getElementById('categoria').textContent = "Asesino";
        let filtered_list = filter(list, "Assassin");
        draw_champions(filtered_list);
    });
    document.getElementById('fighter').addEventListener('click', (evento) => {
        evento.preventDefault();
        clear_grid();
        document.getElementById('categoria').textContent = "Guerrero";
        let filtered_list = filter(list, "Fighter");
        draw_champions(filtered_list);
    });



    function clear_grid() {
        var myNode = document.getElementById('lista');
        while (myNode.firstChild) {
            myNode.removeChild(myNode.firstChild);
        }
    }

    function ordenar(data, sort) {
        const ordered = {};

        if (sort == 1) {
            Object.keys(data).sort().forEach(function (key) {
                ordered[key] = data[key];
            });
        } else {
            Object.keys(data).sort().reverse().forEach(function (key) {
                ordered[key] = data[key];
            });
        }
        return ordered

    }

    function checkClass(arr, val) {
        return arr.some(function (arrVal) {
            return val === arrVal;
        });
    }

    function filter(data, filt) {
        const filtered = {};

        Object.keys(data).sort().forEach(function (key) {

            if (checkClass(data[key].tags, filt)) {
                filtered[key] = data[key];
            }
        });
        return filtered
    }

    function draw_champions(list) {
        const lista = document.getElementById('lista')
        let i = 0;
        console.log(typeof (list));

        for (var champ in list) {
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

    function pintar_fila() {
        var row = document.createElement('div');
        row.className = 'row justify-content-start';
        return row;
    }

    function pintar_caja_inicial(champion, row) {

        // console.log(champion.name);

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

    function pintar_caja_estandar(champion, row) {
        // console.log(champion.name);

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