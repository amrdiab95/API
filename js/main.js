
function getApi(){
    var xhttp = new XMLHttpRequest;
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status==200){
            var item = JSON.parse(this.responseText); //hna saving it in array of object img.
            var result = "";
    for (var i=0; i<item.length; i++){
        var cartoona =   `
                        <div class="col-md-4">
                        <img src="${item[i].url}" class="img-fluid">
                        <h3>${item[i].id}</h3>
                        <h5>${item[i].title}</h5>
                        </div>
                        `;
                        result = result + cartoona ;
                         }

  document.querySelector(".test").innerHTML = result;
        }
    }
    xhttp.open("GET","https://jsonplaceholder.typicode.com/photos",true); //(to be Async) it is false by default mean it is sync.");  // default enha get ela lw ana 3amel form b method post.
    xhttp.send();
}
getApi();

//====================================================================
//====================================================================
//========2nd method============================================================

// fetch("https://jsonplaceholder.typicode.com/photos")
// .then(function(data){
//     return data.json();  //yt7wl el response l sort json 3shan b3d kda a3raf at3amil m3ah ka array of objects.

// })
// .then(function(item){
//     console.log(item);
//     document.querySelector(".test img").src = item[0].url ; 
//     document.querySelector(".test h3").innerHTML = item[0].id ; 
//     document.querySelector(".test h5").innerHTML = item[0].title ;
// })   // Async method by default. 

//=======================================================================
//=======================================================================
//===============3rd method==============================================


// async function getApi() {
//     var data= await fetch("https://jsonplaceholder.typicode.com/photos");
//     var item = await data.json();
//     var result = "";
//     for (var i=0; i<item.length; i++){
//         var cartoona =   `
//                         <div class="col-md-4">
//                         <img src="${item[i].url}" class="img-fluid">
//                         <h3>${item[i].id}</h3>
//                         <h5>${item[i].title}</h5>
//                         </div>
//                         `;
//                         result = result + cartoona ;
//                          }

//   document.querySelector(".test").innerHTML = result;
// }
// getApi();


