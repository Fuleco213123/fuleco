function Rodar100(){
    var cemD = Math.floor(Math.random()*100-1+1)+1
    console.log(`Do rodar 100: ${cemD}`)
    document.getElementById('cem').innerHTML = cemD
}
function rodar9(){
    var noveD = Math.floor(Math.random()*9-2+1)+2
    console.log(`Do rodar 9: ${noveD}`)
    document.getElementById('nove').innerHTML = noveD
}
function rodar7(){
    var seteD = Math.floor(Math.random()*7-2+1)+2
    console.log(`Do rodar 7:${seteD}`)
    document.getElementById('sete').innerHTML = seteD
    window.open()
}
function rodar13(){
    var trezeD = Math.floor(Math.random()*13-3+1)+3
    console.log(`Do rodar 13:${trezeD}`)
    document.getElementById('treze').innerHTML = trezeD
}