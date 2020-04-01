document.getElementById('formulario').addEventListener('submit', cadastraVeiculo);

function cadastraVeiculo(e){
  var modeloCarro = document.getElementById('modeloCarro').value;
  var placaCarro = document.getElementById('placaCarro').value;
  var time = new Date();

  carro = {
    modelo: modeloCarro,
    placa: placaCarro,
    hours: time.getHours(),
    minutes: time.getMinutes()
  }

  if(localStorage.getItem('patio') === null){
    var carros = [];
    carros.push('carro');
    localStorage.setItem('patio', JSON.stringify(carros));
  }


  e.preventDefault();
}