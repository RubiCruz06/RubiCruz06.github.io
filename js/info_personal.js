let abrirInfo=document.getElementById('info__personal');
let botonAbrir=document.getElementById('box__information');
botonAbrir.addEventListener('click',()=>{
    abrirInfo.style.visibility = "visible";
}
);

let cerrarInfo=document.getElementById('info__personal');
let botonCerrar=document.getElementById('cerrarCaja');
botonCerrar.addEventListener('click',()=>{
    cerrarInfo.style.visibility = "hidden";
});
