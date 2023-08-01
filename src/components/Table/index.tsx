import { Caption, TableContainer, TableData, TableHeader } from "./style";

interface TableProps {
  displayedTransferencias: Transferencia[];
  saldoTotal: number;
  saldoTotalNoPeriodo: number;
}

interface Transferencia {
  id: number;
  dataTransferencia: string;
  valor: number;
  tipo: string;
  nomeOperadorTransacao: string;
}

export default function Table ({ displayedTransferencias, saldoTotal, saldoTotalNoPeriodo } : TableProps) {
  return (
    <TableContainer>
      <Caption>
        <div>
          Saldo Total: <span>{saldoTotal}</span>
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
          <div>{transferencia.dataTransferencia}</div>
          <div>{transferencia.valor}</div>
          <div>{transferencia.tipo}</div>
          <div>{transferencia.nomeOperadorTransacao}</div>
        </TableData>
      ))}
    </TableContainer>
  )
}
