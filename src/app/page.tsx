'use client'

import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import { Main, Container, Superior, Centro, DataInicio, DataFim, Label, Input, NomeOperador, ButtomPesquisar, TableContainer, Caption, TableHeader, TableData, TableFooter, StyledReactPaginate } from './style';

export default function Home() {
  const [transferencias, setTransferencias] = useState([]);
  const [saldoTotal, setSaldoTotal] = useState(0);
  const [saldoTotalNoPeriodo, setSaldoTotalNoPeriodo] = useState(0);
  const [dataInicio, setDataInicio] = useState('');
  const [dataFim, setDataFim] = useState('');
  const [nomeOperador, setNomeOperador] = useState('');

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;
  const pageCount = Math.ceil(transferencias.length / itemsPerPage);

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  const displayedTransferencias = transferencias.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handleSearch = async () => {
    try {
      const formattedDataInicio = formatDateTime(dataInicio);
      const formattedDataFim = formatDateTime(dataFim);

      const response = await axios.get('http://localhost:8080/transferencias', {
        params: {
          dataInicio: formattedDataInicio,
          dataFim: formattedDataFim,
          nomeOperador,
        },
      });
      const data = response.data.transferencias;
      const total = response.data.saldoTotal;
      const totalNoPeriodo = response.data.saldoTotalNoPeriodo;
      setTransferencias(data);
      setSaldoTotal(total);
      setSaldoTotalNoPeriodo(totalNoPeriodo);

      console.log(response.data)

    } catch (error) {
      console.error('Erro ao buscar as transferências:', error);
    }
  };

  const formatDateTime = (datetime: any) => {
    const date = new Date(datetime);
    const formattedDate = date.toISOString().split('T')[0];
    const formattedTime = date.toTimeString().split(' ')[0];
    return `${formattedDate}T${formattedTime}`;
  };

  return (
    <Main>
      <Container>
        <Superior>
          <DataInicio>
            <Label>Data de Início:</Label>
            <Input type="date" value={dataInicio} onChange={(e) => setDataInicio(e.target.value)} />
          </DataInicio>
          <DataFim>
            <Label>Data de Fim:</Label>
            <Input type="date" value={dataFim} onChange={(e) => setDataFim(e.target.value)} />
          </DataFim>
          <NomeOperador>
            <Label>Nome do Operador Transacionado:</Label>
            <Input type="text" value={nomeOperador} onChange={(e) => setNomeOperador(e.target.value)} />
          </NomeOperador>
        </Superior>
        <Centro>
          <ButtomPesquisar onClick={handleSearch}>Pesquisar</ButtomPesquisar>
        </Centro>

        <TableContainer>
          <Caption>
            <div>Saldo Total: <span>{saldoTotal}</span></div>
            <div>Saldo no Período: <span>{saldoTotalNoPeriodo}</span></div>
          </Caption>
          <TableHeader>
            <div>Dados</div>
            <div>Valencia</div>
            <div>Tipo</div>
            <div>Nome do Operador Transacionado</div>
          </TableHeader>
          {displayedTransferencias.map((transferencia) => (
            <TableData key={transferencia.id}>
              <div>{transferencia.dataTransferencia}</div>
              <div>{transferencia.valor}</div>
              <div>{transferencia.tipo}</div>
              <div>{transferencia.nomeOperadorTransacao}</div>
            </TableData>
          ))}
          <TableFooter>
            <StyledReactPaginate
              previousLabel={'Anterior'}
              nextLabel={'Próxima'}
              breakLabel={'...'}
              breakClassName={'break-me'}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageChange}
              containerClassName={'pagination'}
              activeClassName={'active'}
            />
          </TableFooter>
        </TableContainer>
      </Container>
    </Main>
  );
}