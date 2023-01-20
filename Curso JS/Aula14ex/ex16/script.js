function GerarTabuada(){
    let num = document.getElementById('Num')
    let select = document.getElementById('selTab')

    if (num.value.length == 0){
        window.alert('Informar um número para cálcular')
        return
    } else {

        for(let i=0;i<=10;i++){
            let numI = Number(num.value)
            let res = i * numI

            var option = document.createElement("option")
            option.text = `${i} x ${numI} = ${res}`
            select.add(option,i)

        }

    }
}