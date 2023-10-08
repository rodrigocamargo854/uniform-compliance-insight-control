"use client"

import { useState } from 'react';

interface AccordionProps {
  title: string;
  observationTime: number;
  numberOfChildrenWithout: number;
  numberOfChildrenWin:number
  date: Date; // Propriedade para a data
}

// Função para formatar a data
function formatDate(date: Date) {
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'short', // Abreviado
    year: 'numeric',
    month: 'short',   // Abreviado
    day: 'numeric'
  };
  return date.toLocaleDateString('pt-BR', options);
}
const Accordion: React.FC<AccordionProps> = ({ title, observationTime, numberOfChildrenWithout, date ,numberOfChildrenWin}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-lg p-4 my-4 w-7/10 mx-auto transition-all duration-300 bg-gray-900 text-gray-100"> {/* Adicionado w-7/10 e mx-auto */}
      <div className="flex justify-between items-center cursor-pointer text-left" onClick={() => setIsOpen(!isOpen)}> {/* Adicionado text-left */}
        <h2 className="text-xl font-semibold">{`Dia ${title}`}</h2>
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && (
        <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-40' : 'max-h-0'} text-left`}>
          <p className="mt-4 text-cyan-100">Data: {formatDate(date)}</p> {/* Usando a data passada como prop */}
          <p className='text-cyan-200'>Tempo de observação: {observationTime} minutos</p>
          <p className='text-red-500'>Sem Uniforme na entrada {numberOfChildrenWithout}</p>
          <p className='text-red-500'>Sem Uniforme na Saida {numberOfChildrenWin}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
