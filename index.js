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

