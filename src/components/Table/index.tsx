import Pagination from "../Pagination";
import { FormatDateTimeView } from "../Utils/FormatDateTime";
import { RemoveAccents } from "../Utils/RemoveAccents";
import { Caption, TableContainer, TableData, TableHeader } from "./style";

interface TableProps {
  displayedTransferencias: Transferencia[];
  saldoTotal: number;
  saldoTotalNoPeriodo: number;
  filteredTotalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

interface Transferencia {
  id: number;
  dataTransferencia: string;
  valor: number;
  tipo: string;
  nomeOperadorTransacao: string;
}

export default function Table({ displayedTransferencias, saldoTotal, saldoTotalNoPeriodo, filteredTotalPages, currentPage, onPageChange }: TableProps) {
  
  const handlePageChange = (selected: { selected: number }) => {
    onPageChange(selected.selected);
  };

  return (
    <TableContainer>
      <Caption>
        <div>
          Saldo Total: <span style={{ color: saldoTotal < 0 ? 'red' : 'inherit' }}>{saldoTotal}</span>
        </div>
        <div>
          Saldo no Período: <span>{saldoTotalNoPeriodo}</span>
        </div>
      </Caption>
      <TableHeader>
        <div>Dados</div>
        <div>Valencia</div>
        <div>Tipo</div>
        <div>Nome do Operador Transacionado</div>
      </TableHeader>
      {displayedTransferencias.map((transferencia: Transferencia) => (
        <TableData key={transferencia.id}>
          <div>{FormatDateTimeView(transferencia.dataTransferencia)}</div>
          <div>{transferencia.valor}</div>
          <div>
            <span
              className={`transaction-type ${
                RemoveAccents(transferencia.tipo.toUpperCase()) === RemoveAccents('DEPOSITO') ||
                RemoveAccents(transferencia.tipo.toUpperCase()) === RemoveAccents('TRANSFERENCIA ENTRADA')
                  ? 'green-bg'
                  : 'yellow-bg'
              }`}
            >
              {transferencia.tipo}
            </span>
          </div>
          <div>{transferencia.nomeOperadorTransacao}</div>
        </TableData>
      ))}
      <Pagination
        pageCount={filteredTotalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </TableContainer>
  );
}
