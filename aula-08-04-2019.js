
//Criando Função
function dividir (prim, seg){

    if(prim <= 0 | seg === 0){
        alert('Divisão não permitida! \n Numero menor ou igual a 0');
    }else {
        return prim / seg;
    }

} console.log(dividir(0,1));

function dividir (prim, seg){

    return seg <= 0 ? alert('Divisão não permitida! \n Numero menor ou igual a 0') : prim / seg; //if ternario

} console.log(dividir(0,1));

//Arrey e metodo
const anamais = ['Gato', 'Cachorro', 'Elefante','Macaco'];

const numb = [100, 2, 1000, 4, 67, 0];

function insertSort(numAtual, proxNum){
    return numAtual - proxNum;
}

console.log (numb.sort(function(numAtual,proxNum){
    return insertSort (numAtual,proxNum);
}))

//Arrey e metodo
const anamais = ['Gato', 'Cachorro', 'Elefante','Macaco'];

const numb = [100, 2, 1000, 4, 67, 0];

function insertSort(numAtual, proxNum){
    return numAtual - proxNum;
}

console.log (numb.sort(function(numAtual,proxNum){
    return insertSort (numAtual,proxNum);
}));

// Utilizando o método map (modificador)

const doubleNum = numb.map(function(mult){
    return numb * 2;
})
console.log(doubleNum);

// Utilizando o método Filter ()

const flt = numb.filter(function(compare){
    return numb >= 5;
})
console.log(flt);

//
const numb2 = [1,2,3,4,5,6,7,8,9,0];

function mod (number2){
    return number2 % 2 === 0;    
}

const par = numb2.filter(mod);

var anamais = ['Gato', 'Cachorro', 'Elefante','Macaco'];


function strDes(a, b) {
    if (a>b) return -1;
    else if (a<b) return 1;
    else return 0;
  }

console.log (anamais.sort(strDes));  

