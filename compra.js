 const comprar = document.querySelector('#button');
 const Input = document.getElementsByTagName('input');
 const inputs = document.querySelector('.input')
  
 inputs.innerHTML = Input.value;
 
 comprar.addEventListener("onclick", compras);
 function compras() {
    inputs.innerHTML = this.value; 
    alert("A compra foi efetuada no valor desejado será entregue em breve. A gradecemos a preferência!");
 }
 

    