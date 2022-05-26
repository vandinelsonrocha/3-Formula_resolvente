let result = document.querySelector('p#res')
let a = Number(prompt('Digite o valor de a:'))
let b = Number(prompt('Digite o valor de b:'))
let c = Number(prompt('Digite o valor de c:'))

let delta = b*b-4*a*c
let d = Math.sqrt(delta)
let x11 = (-b-d)/(2*a)
let x12 = (-b+d)/(2*a)
let x1 = x11
let x2 = x12

function solucao()  {
    result.innerHTML = `${a}x<sup>2</sup> + ${b}x + ${c} = 0<br><br>`

    if(delta<0)  {
        result.innerHTML += `x1 = <strong>${-b}-raíz(${delta})/${2*a}</strong><br>`
        result.innerHTML += `x2 = <strong>${-b}+raíz(${delta})/${2*a}</strong><br>`
    } else  {
        result.innerHTML += `x1 = <strong>${x1}</strong><br>`
        result.innerHTML += `x2 = <strong>${x2}</strong><br>`
    }
}
function passoApasso()  {
    if(delta<0)  {
        result.innerHTML = '<h3>Resolução passo a passo:</h3>'
        result.innerHTML += `${a}x<sup>2</sup> + ${b}x + ${c} = 0<br><br>`
        result.innerHTML += `1º&nbsp;&nbsp;&nbsp;x = ${-b} +- raíz(${b}<sup>2</sup>-4x${a}x${c}) / 2x${a}<br>`
        result.innerHTML += `2º&nbsp;&nbsp;&nbsp;x = ${-b} +- raíz(${delta}) / ${2*a}<br>`
        result.innerHTML += `3º&nbsp;&nbsp;&nbsp;x1 = <strong>${-b}-raíz(${delta}) / ${2*a}</strong><br>`
        result.innerHTML += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x2 = <strong>${-b}+raíz(${delta}) / ${2*a}</strong><br>`
    } else  {
        result.innerHTML = '<h3>Resolução passo a passo:</h3>'
        result.innerHTML += `${a}x<sup>2</sup> + ${b}x + ${c} = 0<br><br>`
        result.innerHTML += `1º&nbsp;&nbsp;&nbsp;x = ${-b} +- raíz(${b}<sup>2</sup>-4x${a}x${c}) / 2x${a}<br>`
        result.innerHTML += `2º&nbsp;&nbsp;&nbsp;x = ${-b} +- raíz(${delta}) / ${2*a}<br>`
        result.innerHTML += `3º&nbsp;&nbsp;&nbsp;x1 = ${-b}-${d} / ${2*a} e x2 = ${-b}+${d} / ${2*a}<br>`
        result.innerHTML += `4º&nbsp;&nbsp;&nbsp;x1 = ${-b-d} / ${2*a} e x2 = ${-b+d} / ${2*a}<br>`
        result.innerHTML += `5º&nbsp;&nbsp;&nbsp;x1 = <strong>${x1}</strong><br>`
        result.innerHTML += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x2 = <strong>${x2}</strong>`
    }
}
