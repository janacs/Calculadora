import React, { useState } from 'react';
import './Calculator.scss';

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Função que calcula com base na operação
  const handleCalculate = (operator) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (operator === '+') setResult(n1 + n2);
    else if (operator === '-') setResult(n1 - n2);
    else if (operator === '*') setResult(n1 * n2);
    else if (operator === '/') setResult(n1 / n2);
  };

  // Alterna entre modo claro e escuro
  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.className = isDarkMode ? 'light-mode' : 'dark-mode';
  };

  // Função para zerar os valores
  const clearValues = () => {
    setNum1('');
    setNum2('');
    setResult(null);
  };

  return (
    <div className="calculator">
      <h1>Calculadora Halloween</h1>
      <input
        type="number"
        placeholder="Número 1"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        type="number"
        placeholder="Número 2"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <div className="buttons">
        <button onClick={() => handleCalculate('+')}>+</button>
        <button onClick={() => handleCalculate('-')}>-</button>
        <button onClick={() => handleCalculate('*')}>*</button>
        <button onClick={() => handleCalculate('/')}>/</button>
        <button onClick={clearValues}>C</button>
        <button onClick={toggleMode} className="mode-button">
  {isDarkMode ? 'Modo Claro' : 'Modo Escuro'}
</button>

      </div>
      {result !== null && <h2>Resultado: {result}</h2>}
    </div>
  );
}

export default Calculator;
