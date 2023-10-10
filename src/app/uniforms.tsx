"use client";
import Accordion from "@/components/Accordion";
import UniformsChart from "@/components/UniformsChart";

const data = [
  { name: "14/09", Entrada: 15, Saída: 13 },
  { name: "15/09", Entrada: 13, Saída: 11 },
  { name: "18/09", Entrada: 12, Saída: 10 },
  { name: "19/09", Entrada: 8, Saída: 7 },
  { name: "20/09", Entrada: 10, Saída: 9 },
  { name: "21/09", Entrada: 13, Saída: 12 },
  { name: "22/09", Entrada: 12, Saída: 10 },
  { name: "25/09", Entrada: 8, Saída: 7 },
  { name: "26/09", Entrada: 15, Saída: 13 },
  { name: "27/09", Entrada: 13, Saída: 11 },
  { name: "28/09", Entrada: 12, Saída: 10 },
  { name: "29/09", Entrada: 8, Saída: 7 },
  { name: "02/10", Entrada: 10, Saída: 8 },
  { name: "03/10", Entrada: 13, Saída: 11 },
  { name: "04/10", Entrada: 12, Saída: 10 },
  { name: "10/10", Entrada: 9, Saída: 10 },

  
];

const convertToDate = (str : string) => {
  const [day, month] = str.split("/");
  const year = new Date().getFullYear(); // assume o ano atual
  return new Date(`${year}-${month}-${day}`);
};

const filteredData = data.map((item) => ({
  name: item.name,
  Entrada: item.Entrada,
  Saída: item.Saída,
}));
const UniformsPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 py-4 sm:py-12 px-2 sm:px-4 lg:px-8">
      <div className="max-w-full sm:max-w-md mx-auto rounded-lg shadow-md overflow-hidden md:max-w-2xl">
        <div className="p-4 sm:p-8 text-center">
          <h2 className="mt-4 text-2xl leading-tight font-medium text-gray-100">
            Observação quantitativa de vestimentas diárias de alunos
          </h2>
          <p className="mt-4 text-2xl leading-tight font-medium text-cyan-200">
            Amostras aleatórias diárias excluindo alunos do 9º ano
          </p>
          <div className="mt-6 w-7/10 mx-auto">
            {data.map((item, index) => (
              <Accordion
              key={index}
                title={item.name}
                observationTime={6}
                numberOfChildrenWithout={item.Entrada}
                date={convertToDate(item.name)}
                numberOfChildrenWin={item.Saída}
              />
            ))}
          </div>

          <UniformsChart data={filteredData} />
        </div>
        <div className="bg-gray-800 p-6">
        <div className="bg-gray-800 p-6">
  <h2 className="text-2xl text-white mb-4">Análise da Conformidade do Uniforme</h2>
  <div className="divide-y divide-gray-700">
    {[
      "Inconsistência na Aplicação: Empresas ou indivíduos terceirizados podem não estar tão familiarizados com as políticas da escola ou podem interpretá-las de maneira diferente.",
      "Frequência das Inspeções: Se as inspeções terceirizadas ocorrerem em dias ou horários específicos, isso pode explicar por que há dias com maior conformidade.",
      "Inconsistência no Cumprimento das Regras: A variação observada sugere que a regra do uniforme não é consistentemente aplicada ou que há exceções.",
      "Possíveis Exceções ou Falhas no Controle: A diferença nos números sugere que pode haver momentos em que a regra do uniforme é mais rigorosamente aplicada.",
      "Cultura e Comportamento dos Alunos: A variação também pode ser influenciada pelo comportamento dos próprios alunos.",
      "Necessidade de Investigação Adicional: Seria útil investigar mais a fundo para entender completamente a situação.",
      "Aplicação Seletiva da Regra: Em algumas ocasiões, a regra do uniforme foi foi aplicada de forma seletiva para determinados alunos por motivos desconhecidos, enquanto para outros foi menos rigorosa.",
      
    ].map((text, index) => (
      <details key={index} className="mb-4">
        <summary className="text-white text-lg cursor-pointer hover:underline">
          {text.split(":")[0]}
        </summary>
        <p className="text-white text-sm mt-2 pl-4">
          {text.split(":")[1]}
        </p>
      </details>
    ))}
  </div>
</div>

</div>

      </div>
    </div>
  );
};

export default UniformsPage;
