// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const example = () => {
  return 'example';
};

window.example = example;

const ordenar = (data, sort) => {
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

window.ordenar = ordenar;

const checkClass = (arr, val) => {
  return arr.some(function (arrVal) {
    return val === arrVal;
  });

}

const filter = (data, filt) => {
  const filtered = {};

  Object.keys(data).sort().forEach(function (key) {

    if (checkClass(data[key].tags, filt)) {
      filtered[key] = data[key];
    }
  });
  return filtered;

}
window.filter = filter;
