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

const computeStats = (data) => {
  let stats = {
    mage: 0,
    tank: 0,
    support: 0,
    marksman: 0,
    assassin: 0,
    fighter: 0
  }

  let mage_dif = 0;
  let mage_count = 0;
  let tank_dif = 0;
  let tank_count = 0;
  let support_count = 0;
  let support_dif = 0;
  let assassin_dif = 0;
  let assassin_count = 0;
  let fighter_dif = 0;
  let fighter_count = 0;
  let marksman_dif = 0;
  let marksman_count = 0;



  Object.keys(data).sort().forEach(function (key) {

    if (checkClass(data[key].tags, "Mage")) {
      mage_dif += data[key].info.difficulty;
      mage_count++
    }
    if (checkClass(data[key].tags, "Tank")) {
      tank_dif += data[key].info.difficulty;
      tank_count++
    }
    if (checkClass(data[key].tags, "Support")) {
      support_dif += data[key].info.difficulty;
      support_count++
    }
    if (checkClass(data[key].tags, "Assassin")) {
      assassin_dif += data[key].info.difficulty;
      assassin_count++
    }
    if (checkClass(data[key].tags, "Fighter")) {
      fighter_dif += data[key].info.difficulty;
      fighter_count++
    }
    if (checkClass(data[key].tags, "Marksman")) {
      marksman_dif += data[key].info.difficulty;
      marksman_count++
    }
  });

  stats.mage = parseInt(mage_dif / mage_count);
  stats.tank = parseInt(tank_dif / tank_count);
  stats.support = parseInt(support_dif / support_count);
  stats.assassin = parseInt(assassin_dif / assassin_count);
  stats.fighter = parseInt(fighter_dif / fighter_count);
  stats.marksman = parseInt(marksman_dif / marksman_count);

  return stats;
}

window.computeStats = computeStats;
