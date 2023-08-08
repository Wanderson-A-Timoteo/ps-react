'use client'

import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

import Header from '@/components/Header';
import Forms from '@/components/Forms';
import Table from '@/components/Table';
import Footer from '@/components/Footer';
import Cards from '@/components/Cards';
import { FormatDateTimeAPI } from '@/components/Utils/FormatDateTime';

import { Main, Container } from './style';

interface Transferencia {
  id: number;
  dataTransferencia: string;
  valor: number;
  tipo: string;
  nomeOperadorTransacao: string;
}

export default function Home() {

  const [transferencias, setTransferencias] = useState<Transferencia[]>([]);
  const [saldoTotal, setSaldoTotal] = useState(0);
  const [saldoTotalNoPeriodo, setSaldoTotalNoPeriodo] = useState(0);
  const [dataInicio, setDataInicio] = useState('');
  const [dataFim, setDataFim] = useState('');
  const [nomeOperadorPesquisa, setNomeOperadorPesquisa] = useState('');

  // Estado para armazenar os resultados filtrados pela pesquisa
  const [filteredTransferencias, setFilteredTransferencias] = useState<Transferencia[]>([]);

  // Estado original para a paginação
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);

  // Calcula o número de páginas
  const rowsPerPage = 4;
  const totalPages = Math.ceil(filteredTransferencias.length / rowsPerPage);

  // Cria um array com as linhas atuais da tabela com base na página atual
  const currentRows = filteredTransferencias.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  // Lida com o clique nos botões de paginação
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    handleSearch();
  };

  // Calcula quais botões de páginas devem ser exibidos
  const pagesToShow = [];
  const pagesBefore = 2; // Número de páginas anteriores a serem exibidas
  const pagesAfter = 2; // Número de páginas seguintes a serem exibidas

  for (let page = currentPage - pagesBefore; page <= currentPage + pagesAfter; page++) {
    if (page > 0 && page <= totalPages) {
      pagesToShow.push(page);
    }
  }
  
  const handleSearch = useCallback(async () => {
    try {
      const params: { dataInicio?: string; dataFim?: string; nomeOperadorPesquisa?: string } = {};
  
      if (dataInicio) {
        params.dataInicio = FormatDateTimeAPI(dataInicio);
      }
  
      if (dataFim) {
        params.dataFim = FormatDateTimeAPI(dataFim);
      }
  
      if (nomeOperadorPesquisa) {
        params.nomeOperadorPesquisa = nomeOperadorPesquisa;
      }
  
      // Faz uma chamada à API com os parâmetros de pesquisa
      const response = await axios.get('http://localhost:8080/transferencias', {
        params: params
      });
  
      // Obtém os resultados da API
      const data = response.data.transferencias;
      const total = response.data.saldoTotal;
      const totalNoPeriodo = response.data.saldoTotalNoPeriodo;
  
      // Atualiza os estados com os resultados da API
      if (data !== transferencias) {
        setTransferencias(data);
      }
  
      if (total !== saldoTotal) {
        setSaldoTotal(total);
      }
  
      if (totalNoPeriodo !== saldoTotalNoPeriodo) {
        setSaldoTotalNoPeriodo(totalNoPeriodo);
      }
  
      // Filtra os dados em transferencias e armazena os resultados em filteredTransferencias
      if (nomeOperadorPesquisa) {
        // Expressão regular para fazer a busca por parte do nome do operador
        const nomeOperadorRegex = new RegExp(nomeOperadorPesquisa, 'i');
        const filteredData = data.filter(
          (transferencia: Transferencia) =>
            nomeOperadorRegex.test(transferencia.nomeOperadorTransacao)
        );
        setFilteredTransferencias(filteredData);
      } else {
        // Caso não tenha nome de pesquisa, armazena os resultados da API diretamente em filteredTransferencias
        setFilteredTransferencias(data);
      }
  
      console.log(params);
    } catch (error) {
      console.error('Erro ao buscar as transferências:', error);
    }
  }, [dataInicio, dataFim, nomeOperadorPesquisa]);

  useEffect(() => {
    handleSearch();
  }, []);

  useEffect(() => {
    // Atualiza o número de páginas toda vez que o resultado filtrado muda
    const totalPages = Math.ceil(filteredTransferencias.length / rowsPerPage);
    setPageCount(totalPages);
  }, [filteredTransferencias]);

  return (
    <Main>
    <Header />
    <Container>
      <Forms 
        onSearch={handleSearch} 
        dataInicio={dataInicio}
        setDataInicio={setDataInicio}
        dataFim={dataFim}
        setDataFim={setDataFim}
        nomeOperador={nomeOperadorPesquisa}
        setNomeOperador={setNomeOperadorPesquisa}
      />
      <Table
        displayedTransferencias={currentRows}
        saldoTotal={saldoTotal}
        saldoTotalNoPeriodo={saldoTotalNoPeriodo}
        filteredTotalPages={pageCount}
        currentPage={currentPage} 
        onPageChange={handlePageChange}
      />
      <Cards 
        filteredCurrentRowsMobile={currentRows}
        saldoTotal={saldoTotal}
        saldoTotalNoPeriodo={saldoTotalNoPeriodo}
        filteredTotalPages={pageCount}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </Container>
    <Footer />
  </Main>
  );
}
