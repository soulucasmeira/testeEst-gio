const string = "Meu nome é Lucas Meira";

function invertendoString(string) {
  let stringInvertida = "";

  for (let i = string.length - 1; i >= 0; i--) {
    stringInvertida += string[i];
  }

  return stringInvertida;
}

const stringInvertida = invertendoString(string);

console.log(`String original: ${string}`);
console.log(`String invertida: ${stringInvertida}`);
