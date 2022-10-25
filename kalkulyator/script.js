let firstNum = prompt("Birinci ededi daxil edin:");
let secNum = prompt("Ikinci ededi daxil edin:");
let deyisen = prompt("+,-,*,/ Daxil edin:");
switch(deyisen)
 {
    case "+":
        var cem= parseFloat(firstNum)+parseFloat(secNum);
        alert(`${firstNum}+${secNum}=${cem}`);
        break;
        case "-":
        var cem= parseFloat(firstNum)-parseFloat(secNum);
        alert(`${firstNum}-${secNum}=${cem}`);
        break;
        case "*":
        var cem= parseFloat(firstNum)*parseFloat(secNum);
        alert(`${firstNum}*${secNum}=${cem}`);
        break;
        case "/":
        var cem= parseFloat(firstNum)/parseFloat(secNum);
        alert(`${firstNum}/${secNum}=${cem}`);
        break;
        default:
            alert("Error")
 }