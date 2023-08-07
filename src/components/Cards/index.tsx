import { useState } from "react";
import { FormatDateTimeView } from "../Utils/FormatDateTime";
import { RemoveAccents } from "../Utils/RemoveAccents";
import { MobileGrid, PaginationWrapper, Section, TotalBalance, Transaction } from "./style";

interface CardsProps {
  filteredCurrentRowsMobile: Transferencia[];
  saldoTotal: number;
  saldoTotalNoPeriodo: number;
  filteredCurrentPageMobile: number;
  filteredTotalPagesMobile: number;
  handleFilteredPageChangeMobile: (page: number) => void;
  filteredPagesToShowMobile: number[];
}

interface Transferencia {
  id: number;
  dataTransferencia: string;
  valor: number;
  tipo: string;
  nomeOperadorTransacao: string;
}

export default function Cards ({ filteredCurrentRowsMobile, saldoTotal, saldoTotalNoPeriodo, filteredCurrentPageMobile, filteredTotalPagesMobile, handleFilteredPageChangeMobile, filteredPagesToShowMobile } : CardsProps) {
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
      </MobileGrid>
      {/* Paginação para dispositivos móveis */}
      <PaginationWrapper>
        {filteredCurrentPageMobile > 1 && (
          <button onClick={() => handleFilteredPageChangeMobile(filteredCurrentPageMobile - 1)}>
            {"<<"}
          </button>
        )}

        {filteredPagesToShowMobile.map((page) => (
          <button
            key={page}
            className={filteredCurrentPageMobile === page ? "active" : ""}
            onClick={() => handleFilteredPageChangeMobile(page)}
          >
            {page}
          </button>
        ))}

        {filteredCurrentPageMobile < filteredTotalPagesMobile && (
          <button onClick={() => handleFilteredPageChangeMobile(filteredCurrentPageMobile + 1)}>
            {">>"}
          </button>
        )}
      </PaginationWrapper>
    </Section>
  )
}