let newelement = document.createElement("div");




newelement.innerHTML=`

<div class="fixed-top bg-pink p-2 text-dark bg-opacity-25" >
<nav class="navbar sticky-top navbar-dark bg-light shadow-lg border-bottom-30 " id="header">
    
        <h1>Pokemon</h1>
        <nav aria-label="Page navigation example">
  <ul class="pagination">
  
    <li class="page-item"><a class="page-link" id="previous" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" id="next" href="#">Next</a></li>
    <li class="page-item"><a class="page-link" id="pageno" href="#">Page: 1</a></li>
  </ul>
</nav>
        </div>

      </nav>
      </div>
      <br><br><br>
      <br><br>
`

let body1 = document.querySelector("#body");

let pagenumber = 1;

body1.appendChild(newelement);   // to add nav bar and search


let url ='https://pokeapi.co/api/v2/pokemon/';

let previous = document.querySelector("#previous");
let next = document.querySelector("#next");
let pp = document.querySelector("#pageno");






next.addEventListener("click", function() {

pokemon(url).then(m => {

  console.log("next",m);
  let nextpage = (m.next);
  if(nextpage != null)
  {
  url = nextpage;


pokemon(nextpage).then(m1 =>{

let length = m1.results.length;

let poke1 = m1.results;
deletepok ();

create(length,poke1);
pp.innerHTML = `Page: ${++pagenumber}`;
 });

  }

});


});

previous.addEventListener("click", function() {

  pokemon(url).then(m => {
  
  console.log("next",m);
  let prepage = (m.previous);
if(prepage != null)
{
  url = prepage;
  
 
  pokemon(url).then(m1 =>{
  
    let length = m1.results.length;
    
    let poke1 = m1.results;

    deletepok ();
    
    create(length,poke1);

    if(pagenumber>1){
      pp.innerHTML = `Page: ${--pagenumber}`;
    }
   
    
     });

}
  
  

  
  
  
  
  
   });
  
  
  });
  




async function pokemon(x) {
    try{
      const response = await fetch(x);
      let users = await response.json();
      console.log(users);
      return users;
     }catch(err){
       console.error(err); 
     }
   }
    
pokemon(url).then(m => {


let length = m.results.length;
let poke1 = m.results;

create(length,poke1);





});

function deletepok ()
{

let containerall = document.querySelectorAll("#pokemon");

for(let j=0;j<containerall.length;j++)    
{
    while (containerall[j].firstChild) {
        containerall[j].removeChild(containerall[j].firstChild);
    }
}


}

function create (n,poke)

{



let container = document.createElement("div");
container.className="container";
container.id="pokemon";
body1.appendChild(container); 


   for(let i=0; i<(n/2);i++){
    

    let element = document.createElement("div");

   
    
    element.innerHTML=`
    
    <div class="row">


    <div class="col-lg-6 col-md-6 col-sm-12 " id="divt">
      <div class="shadow-lg p-3 mb-5 bg-white rounded"> 
        <div class="card-body">
        <img class="card-img-top " src="" alt="Card image cap">
                      <h3 class="card-title">Card title</h3>
                      <h5 >Type: <span class="card-title1"  ></span> </h5>
                      <h5 >Ability: <span class="card-text1" ></span> </h5>
             <div class="text-wrap"> <p class="card-text2"> </p>   
             <h6 >Moves: <span class="card-text3" ></span> </h6> 
             </div>
         </div>
     </div>
</div>

     <div class="col-lg-6 col-md-6 col-sm-12" id="divt">
     <div class="shadow-lg p-3 mb-5 bg-white rounded"> 
         <div class="card-body">
         <img class="card-img-top" src="..." alt="Card image cap">
                      <h3 class="card-title">Card title</h3>
                      <h5 >Type: <span class="card-title1"  ></span> </h5>
                      <h5 >Ability: <span class="card-text1" ></span> </h5>
                      
                      <div class="text-wrap"><p class="card-text2"> </p> 
                                             <h6 >Moves: <span class="card-text3" ></span> </h6>  
                                        
                </div>
          </div>
      </div>
</div> 
</div>
    
    `
   
    let eachbook = document.querySelector("#pokemon");
    

    eachbook.appendChild(element);
    
    }


let name1 = document.querySelectorAll(".card-title");
let detailtype = document.querySelectorAll(".card-title1");
let detailability = document.querySelectorAll(".card-text1");
let detailhw = document.querySelectorAll(".card-text2");
let detailmoves = document.querySelectorAll(".card-text3");

let pic1 = document.querySelectorAll(".card-img-top");
  

let idpic ={};

for(let i=0;i<name1.length;i++){

  
let typ ="";
let detail = poke[i].url;


async function f() {
  const response = await fetch(detail);
  const m = await response.json();
  let id = m.id;
//  console.log(i,id);
  idpic[i] = id;

if(Object.keys(idpic).length >=n)
{


for (const property in idpic) {   // for image load

  console.log(`${property}: ${idpic[property]}`);

  pic1[`${property}`].src = `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${idpic[property]}.svg`;
 console.log(`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${idpic[property]}.svg`);
}




}

//  console.log(idpic);
detailhw[i].innerText = `Height: ${m.height} decimetres || Weight: ${m.weight}  hectograms`
for(let j=0;j<m.types.length;j++)
{
  name1[i].innerText = poke[i].name;
detailtype[i].innerText = m.types[j].type.name + " " + detailtype[i].innerText  ;
}


 for(let j=0;j<m.abilities.length;j++)
 {
 detailability[i].innerText = m.abilities[j].ability.name + " " + detailability[i].innerText  ;
}



for(let j=0;j<4;j++)
 {
 detailmoves[i].innerText = m.moves[j].move.name + " " + detailmoves[i].innerText  ;
}



  return m;
}
f().then(m1=> {
  
});


}




}
