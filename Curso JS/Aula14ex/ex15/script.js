function contando(iv_ini, iv_passo, iv_fim){

/*    if (iv_ini < iv_fim){
        return iv_ini.toString() + `\u{1F449}` + contando(iv_ini+iv_passo, iv_passo, iv_fim)
    } else if (iv_ini==iv_fim) {
        return  iv_ini.toString() + `\u{1F3C1}`
    } else {
        return  `\u{1F3C1}`
    } */

    let i = Number(iv_ini)
    let f = Number(iv_fim)
    let p = Number(iv_passo)
    let ret = ''

    if (i < f ){
        for(let c=i; c <= f; c+= p){
            ret +=  ` ${c} \u{1F449}`
        }
    } else {
        for(let c=i; c >= f; c-= p){
            ret +=  ` ${c} \u{1F449}`
        }
    }
    return ret += `\u{1F3C1}`


}

function Contar(){
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')

    var res = document.getElementById('res')

    if ( inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ) {
        res.innerHTML = 'Impossível conta!'
        return
    } else {
        if (passo.value == 0 ){
            window.alert('Passo não informado, assumindo passo 1')
            passo.value = 1
        }
        var valor = contando( inicio.value, passo.value, fim.value)
        res.innerHTML = `Contando: <br> <p> ${valor} </p>`

    }


}