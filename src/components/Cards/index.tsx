import { FormatDateTimeView } from "../Utils/FormatDateTime";
import { RemoveAccents } from "../Utils/RemoveAccents";
import { MobileGrid, Section, TotalBalance, Transaction } from "./style";
import Pagination from "../Pagination";

interface CardsProps {
  filteredCurrentRowsMobile: Transferencia[];
  saldoTotal: number;
  saldoTotalNoPeriodo: number;
  currentPage: number;
  filteredTotalPages: number;
  onPageChange: (page: number) => void;
}

interface Transferencia {
  id: number;
  dataTransferencia: string;
  valor: number;
  tipo: string;
  nomeOperadorTransacao: string;
}

export default function Cards ({ filteredCurrentRowsMobile, saldoTotal, saldoTotalNoPeriodo, currentPage, 
  filteredTotalPages, onPageChange }: CardsProps) {

  const handlePageChange = (selected: { selected: number }) => {
    onPageChange(selected.selected);
  };

  return (
    <Section>
      <TotalBalance>
        <div>
          Saldo Total: <span style={{ color: saldoTotal < 0 ? 'red' : 'inherit' }}>{saldoTotal}</span>
        </div>
        <div>
          Saldo no período: <span>{saldoTotalNoPeriodo}</span>
        </div>
      </TotalBalance>
      <MobileGrid>
        {filteredCurrentRowsMobile.map((transferencia: Transferencia) => (
          <Transaction key={transferencia.id}>
            <div className="date-value">
              <div className="blue-text">{FormatDateTimeView(transferencia.dataTransferencia)}</div>
              <div className="gray-text">{transferencia.valor}</div>
            </div>
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
            <div className="operator">{transferencia.nomeOperadorTransacao}</div>
          </Transaction>
        ))}
        <Pagination
          pageCount={filteredTotalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </MobileGrid>
    </Section>
  )
}