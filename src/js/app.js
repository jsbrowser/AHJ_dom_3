/* eslint-disable no-unused-vars */
/* eslint-disable no-nested-ternary */
let file = [{
  id: 26,
  title: 'Побег из Шоушенка',
  imdb: 9.30,
  year: 1994,
},
{
  id: 25,
  title: 'Крёстный отец',
  imdb: 9.20,
  year: 1972,
},
{
  id: 27,
  title: 'Крёстный отец 2',
  imdb: 9.00,
  year: 1974,
},
{
  id: 1047,
  title: 'Тёмный рыцарь',
  imdb: 9.00,
  year: 2008,
},
{
  id: 223,
  title: 'Криминальное чтиво',
  imdb: 8.90,
  year: 1994,
},
];
let variable = '';

const loadTable = () => {
  const trEl = document.createElement('table');
  const idArr = [];
  const titleArr = [];
  const imdbArr = [];
  const yearArr = [];
  for (let i = 0; i < 5; i += 1) {
    idArr[i] = file[i].id;
    titleArr[i] = file[i].title;
    imdbArr[i] = file[i].imdb.toFixed(2);
    yearArr[i] = file[i].year;
  }

  trEl.innerHTML = `
  <table id = "table">
  <thead>
    <tr>
      <th id='id'>id</th>
      <th id='title'>title</th>
      <th id='year'>year</th>
      <th id='imdb'>imdb</th>
    </tr>
    </thead>
    <tbody>
    <tr data-id="${idArr[0]}" data-title="${titleArr[0]}" data-year="${yearArr[0]}" data-imdb="${imdbArr[0]}">
      <th>${idArr[0]}</th>
      <th>${titleArr[0]}</th>
      <th>(${yearArr[0]})</th>
      <th>imdb: ${imdbArr[0]}</th>
    </tr>
    <tr data-id="${idArr[1]}" data-title="${titleArr[1]}" data-year="${yearArr[1]}" data-imdb="${imdbArr[1]}">
      <th>${idArr[1]}</th>
      <th>${titleArr[1]}</th>
      <th>(${yearArr[1]})</th>
      <th>imdb: ${imdbArr[1]}</th>
    </tr>
    <tr data-id="${idArr[2]}" data-title="${titleArr[2]}" data-year="${yearArr[2]}" data-imdb="${imdbArr[2]}">
      <th>${idArr[2]}</th>
      <th>${titleArr[2]}</th>
      <th>(${yearArr[2]})</th>
      <th>imdb: ${imdbArr[2]}</th>
    </tr>
    <tr data-id="${idArr[3]}" data-title="${titleArr[3]}" data-year="${yearArr[3]}" data-imdb="${imdbArr[3]}">
      <th>${idArr[3]}</th>
      <th>${titleArr[3]}</th>
      <th>(${yearArr[3]})</th>
      <th>imdb: ${imdbArr[3]}</th>
    </tr>
    <tr data-id="${idArr[4]}" data-title="${titleArr[4]}" data-year="${yearArr[4]}" data-imdb="${imdbArr[4]}">
      <th>${idArr[4]}</th>
      <th>${titleArr[4]}</th>
      <th>(${yearArr[4]})</th>
      <th>imdb: ${imdbArr[4]}</th>
    </tr>
    </tbody>
  </table>
  `;
  document.body.appendChild(trEl);

  document.getElementById('id').textContent = `${'id'}`;
  document.getElementById('title').textContent = `${'title'}`;
  document.getElementById('year').textContent = `${'year'}`;
  document.getElementById('imdb').textContent = `${'imdb'}`;
  if (variable !== '') {
    if (variable[0] === '-') {
      variable = variable.substr(1);
      document.getElementById(variable).textContent = `${variable} ↑`;
    } else {
      document.getElementById(variable).textContent = `${variable} ↓`;
    }
  }
};

const dynamicSort = (property) => {
  let prop = property;
  let sortOrder = 1;
  if (prop[0] === '-') {
    sortOrder = -1;
    prop = prop.substr(1);
  }
  const funct = (a, b) => ((a[prop] < b[prop]) ? -1 : (a[prop] > b[prop]) ? 1 : 0) * sortOrder;
};

const sortRows = (data) => {
  document.body.innerHTML = '';
  file = file.slice().sort(dynamicSort(data));
  variable = data;
  loadTable();
};

const arr = ['id', '-id', 'title', '-title', 'year', '-year', 'imdb', '-imdb'];

let i = 0;
setInterval(() => {
  sortRows(arr[i]);
  i += 1;
  if (i >= 8) { i = 0; }
}, 2000);
