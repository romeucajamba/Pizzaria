const NomeCompleto = document.querySelector('#nome');
const numeroDePessoa = document.querySelector('#numero');
const Reserva = document.querySelector('#reserva');


Reserva.addEventListener('onclick', (e) => {
    e.preventDefault();
    reservar();

});

function reservar(){

   const nomeValue = NomeCompleto.value;
    const numeroValue = numeroDePessoa.value;
    if(nomeValue == '' || numeroDePessoa == ''){
        alert("Preencha todos os campos");
    } else {
        alert("Sua reserva foi feita, aguardamos a tua presença!")
    }
}
