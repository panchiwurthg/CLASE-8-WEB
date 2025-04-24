const filas = document.querySelector("tbody");
const texto = document.querySelector("#promedio");

    var total = 0;
    async function notas() {
        let consulta = await fetch("https://raw.githubusercontent.com/profesorfaco/opr/refs/heads/main/clase-08/notas.json");
        let data = await consulta.json();
        console.log(data);
    data.forEach((d)=>{
    filas.innerHTML += `
        <tr>
            <td>${d.nombre}</td>
            <td>
                <div class="nota-con-barra">
                ${barrita(d.nota)}
                <span class="emoji">${carita(d.nota)}</span>
                </div>
            </td>
            <td></td>
        </tr>`;
        
        total += d.nota;                    
    });

        texto.innerHTML = (total/12).toFixed(2);
            }
            notas().catch((error) => console.error(error));

            function carita(n){
                var emoji;
                if(n > 5.9){
                        emoji = "😁";
                    } else if (n == 5.9){
                        emoji = "😐";
                    } else {
                        emoji = "😕";
                    }
                    return emoji
                }


function barrita(n) {
    let mono = `
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 140 20" width="140" height="20">
        <rect x="0" y="0" width="140" height="20" fill="#FFEAC2" rx="4" ry="4"></rect>
        <rect x="0" y="0" width="${(n / 7) * 140}" height="20" fill="#A30036" rx="4" ry="4"></rect>
        <text fill="white" font-size="12" x="6" y="15" font-weight="bold">${n.toFixed(1)}</text>
    </svg>`;

    return mono;
}
