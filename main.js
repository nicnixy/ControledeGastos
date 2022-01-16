const controleGastos = {
  orcamento: 0,
  despesas: 0,
  saldo: 0
};

const campEntOrc = document.querySelector('.formEntOrc input');
const buttonOrc = document.querySelector('.formEntOrc button');

buttonOrc.addEventListener('click', capturarValOrc);
function capturarValOrc() {
  const valOrc = Number(campEntOrc.value)
  
  controleGastos.orcamento = valOrc;
  controleGastos.saldo = valOrc;
  
  atualizarInterface();
}

const campNomDes = document.querySelector('.formEntDes_nome');
const campValDes = document.querySelector('.formEntDes_valor');
const buttonDes = document.querySelector('.formEntDes button');

buttonDes.addEventListener('click', capturarValDes);
function capturarValDes() {
  const nomeDes = campNomDes.value;
  const valDes = Number(campValDes.value);
  
  controleGastos.despesas += valDes;
  controleGastos.saldo -= valDes;
  
  atualizarInterface();
  addDesInterface(nomeDes, valDes);
}

const orçamento = document.querySelector('.secImpresResult_orcamento p');
const despesa= document.querySelector('.secImpresResult_despesa p');
const valor = document.querySelector('.secImpresResult_valor p');


function atualizarInterface() {
  orçamento.innerText = `+ R$ ${controleGastos.orcamento}`;
  despesa.innerText = `- R$ ${controleGastos.despesas}`;
  valor.innerText = `R$ ${controleGastos.saldo}`;
}

const listaDespesas = document.querySelector('.contDes_lista')

function addDesInterface(nomeDes, valDes) {
  const li = document.createElement('li');
  const h3 = document.createElement('h3');
  const p = document.createElement('p');
  const img = document.createElement('img');
  
  h3.innerText = nomeDes;
  p.innerText = `R$ ${valDes}`;
  
  img.src = 'img/lixo.png';
  img.addEventListener('click', removerDespesa);
  
  li.dataset.valor = valDes;
  li.appendChild(h3)
  li.appendChild(p)
  li.appendChild(img)
  
listaDespesas.appendChild(li);
}

function removerDespesa(evento) {
  const despesaClicada = evento.target.parentNode;
  const valDesClick = Number(despesaClicada.dataset.valor);
  
  controleGastos.despesas -= valDesClick;
  controleGastos.saldo += valDesClick;
  
  atualizarInterface();
  despesaClicada.remove();
}