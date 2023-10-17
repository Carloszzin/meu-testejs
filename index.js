/* //isso é arrow function

var testei = ()=>{
    alert('davi');
}
testei();

*/

//isso é temple strings

/*

var nome = 'davi';
var others = `Deu certo!${nome}`;
console.log(others);

*/


// isso é block scopes
/*
{
    let zic = (tru)=>{
        console.log(tru);
    }
    zic('não sou criativo para nomes kkkkkk');
}
*/


// isso é destructure
/*
const nomes = ['Carlos', 'toki', 'ashe', 'must', 'misk', 'doc', 'dayk', 'mayke']

const[a,b,...c] = nomes;

alert(a);
*/


// isso é Rest e spread
/*
var nomes = [
    {
        nome: 'toki'
    },
    {
        nome: 'ashe'
    }
]

const objetos= [...nomes,{
    nome: 'Calos'
}];

console.log(objetos);
*/

/*
function teste(){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            const resultado = true;
            if(resultado){
                resolve('Deu certo');
            }else{
                reject('Deu errado');
            }
        },5000)
       

    })
}

async function teste2(){
    await teste().then(res=>{
        alert(res);
    });
    alert('Funcionou');
}

teste2(); 
*/


//ajax
/* var request = new XMLHttpRequest();
request.open('GET','https://jsonplaceholder.typicode.com/todos/1',true);

request.onload = function(){
    if(this.status >= 200 && this.status < 400){
        var data = JSON.parse(this.response);
        console.log(data);
    }else{
        //error
    }
}

request.onerror = function(){

}

request.send();
*/

//fetch

/*
fetch('https://jsonplaceholder.typicode.com/posts',{
    method:'POST',
    body:JSON.stringify({
        title:'Davi',
        body:'Conteudo meu',
        userId:10
    }),
    headers:{
        'Content-Type':'application/json; charset=UTF-8'
    }
})
.then(response=> response.json())
.then(json => console.log(json));
*/