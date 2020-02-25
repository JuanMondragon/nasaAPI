

const apodUrl ="https://api.nasa.gov/planetary/apod?api_key=fezuFrAxXaSIyfxe6ZTWCl7jtfpuGVNuGnrG7tRV"
function contentLoaded (){
    const apod= document.getElementById("apod");
fetch(`${apodUrl}`)
.then(res=>res.json())
.then(data=>{

    let media ="";
    if(data.media_type ==="image"){
        media =`<img src="${data.url}">`
    } else {
        media=`<iframe src="${data.url}"`

    }


    apod.innerHTML =`
    <div class="card-image">
        ${media}
        <span class="card-title">${data.title}</span>
    </div>
    <div class="card-content">
        <p class="flow-text">${data.explanation}</p>
        <p class="flow-text center-align">${data.date}</p>
        
    </div>
    <div class="card-action">
        <a href="https://www.nasa.gov/">The Offical NASA website</a>
    </div>`

});

}

window.addEventListener("DOMContentLoaded", contentLoaded)