const opts = {
  base: {
    demand: true,
    alias: "b",
  },
  limite: {
    default: 10,
    alias: "l",
  },
};

const argv = require("yargs")
  .command("listar", "Muestra en consola la tabla de Multiplicar", opts)
  .command("crear", "Crea la tabla de multiplicar", opts)
  .help().argv;

module.exports = {
  argv
}