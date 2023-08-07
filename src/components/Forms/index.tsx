import { Superior, DataInicio, Label, Input, DataFim, NomeOperador, Centro, ButtomPesquisar } from "./style";

interface FormProps {
  onSearch: (dataInicio: string, dataFim: string, nomeOperador: string) => void;
  dataInicio: string;
  setDataInicio: React.Dispatch<React.SetStateAction<string>>;
  dataFim: string;
  setDataFim: React.Dispatch<React.SetStateAction<string>>;
  nomeOperador: string;
  setNomeOperador: React.Dispatch<React.SetStateAction<string>>;
}

export default function Forms({ onSearch, dataInicio, setDataInicio, dataFim, setDataFim, nomeOperador, setNomeOperador }: FormProps) {

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(dataInicio, dataFim, nomeOperador);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <Superior>
        <DataInicio>
          <Label>Data de Início:</Label>
          <Input
            type="date"
            value={dataInicio}
            onChange={(e) => setDataInicio(e.target.value)}
          />
        </DataInicio>
        <DataFim>
          <Label>Data de Fim:</Label>
          <Input
            type="date"
            value={dataFim}
            onChange={(e) => setDataFim(e.target.value)}
          />
        </DataFim>
        <NomeOperador>
          <Label>Nome do Operador Transacionado:</Label>
          <Input
            type="text"
            value={nomeOperador}
            onChange={(e) => setNomeOperador(e.target.value)}
          />
        </NomeOperador>
      </Superior>
      <Centro>
        <ButtomPesquisar type="submit">Pesquisar</ButtomPesquisar>
      </Centro>
    </form>
  );
}
