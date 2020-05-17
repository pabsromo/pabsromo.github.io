const doodle = document.querySelector('css-doodle');

/* update styles and refresh */
doodle.update(`
  @grid: 6 / 8em;
  background: rebeccapurple;
  margin: .5px;
`);

/* just refresh */
doodle.update();
