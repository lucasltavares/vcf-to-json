const vcardString = `BEGIN:VCARD
  VERSION:2.1
  N:;Bruno;;;
  FN:Bruno
  TEL;CELL:+5511920874443
  TEL;CELL:+5511920874443
  ORG:Company
  END:VCARD`;

const vcardToJson = (vcard) => {
  
  const vcardFormated = [];
  
  //Removendo quebras de linha.
  const split = vcard.split(/\r?\n/);

  split.forEach((el) => {
    //Remove os espaços em branco no início e fim de cada linha
    let line = el.trim();
    //Divide os items do array pelo caracter ":"
    const line2 = line.split(":");
    vcardFormated.push(line2)
  });  
  
const obj = {};

for (const element of vcardFormated) {
  obj[element[0]] = element[1];
}

//Transforma o objeto em JSON.
const json = JSON.stringify(obj);

console.log(json); 
  
}

vcardToJson(vcardString);
