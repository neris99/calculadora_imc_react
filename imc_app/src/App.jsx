import React, { useState } from 'react';

function App() {
  const [altura, setAltura] = useState(0);
  const [peso, setPeso] = useState(0);
  const [resultado, setResultado] = useState(0);

  const calcularIMC = () => {
    const imc = peso / (altura * altura);
    setResultado(imc.toFixed(2));
  };

  return (
    <>
      <div>
        <h1>Calculadora de IMC</h1>
        <form>
          <label htmlFor="altura">Altura (em metros):</label>
          <input type="number" id="altura" name="altura" step="0.01" value={altura} onChange={(e) => setAltura(e.target.value)} required />
          <label htmlFor="peso">Peso (em kg):</label>
          <input type="number" id="peso" name="peso" value={peso} onChange={(e) => setPeso(e.target.value)} required />
          <button type="button" onClick={calcularIMC}>Calcular</button>
        </form>
        <div className='resultado'>
        {resultado !== 0 && <div>Seu IMC é {resultado}</div>}
        </div>
      </div>  
    </>
  )
}

export default App;

