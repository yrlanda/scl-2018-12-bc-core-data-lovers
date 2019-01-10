// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const example = () => {
  return 'example';
};

window.example = example;

//Funcion que ordena los datos de la alfabeticamente
const sortData = (data, sort) => {
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
  return ordered;

}

window.sortData = sortData;

//Funcion que verifica que si un personaje posee la clase enviada como parametro(Mago, Guerrero...)
const checkClass = (arr, val) => {
  return arr.some(function (arrVal) {
    return val === arrVal;
  });

}
window.checkClass = checkClass;

//Funcion que filtra la lista de personasjes por clase
const filterData = (data, filt) => {
  const filtered = {};

  Object.keys(data).sort().forEach(function (key) {

    if (checkClass(data[key].tags, filt)) {
      filtered[key] = data[key];
    }
  });
  return filtered;

}
window.filterData = filterData;
