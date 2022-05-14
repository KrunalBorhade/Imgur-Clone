async function getData(){
    try{
        let res = await fetch("https://api.unsplash.com/photos/?per_page=30?client_id=s6cc2fVFovfJoYi3kOWiYxUGXPgOi6U0y8v1RwY9TRQ")
        let data = await res.json();
        console.log(data)
        showData(data)
    }
    catch(err){
        console.log(err)
    }
}
getData()


function showData(data){
    data.map(function(e){
        let div1 = document.createElement("div")
        div1.id="gridCon"

    let img = document.createElement("img")
    img.src=e.urls.raw
    img.id="splashImg"

    div1.append(img)
  

   document.getElementById("container").append(div1)
})
}