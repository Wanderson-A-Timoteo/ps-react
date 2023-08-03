'use client'

import { useState } from 'react';
import Header from '@/components/Header';
import Forms from '@/components/Forms';
import Table from '@/components/Table';
import Pagination from '@/components/Pagination';
import { Main, Container } from './style';
import { FormatDateTimeAPI } from '@/components/Utils/FormatDateTime';
import axios from 'axios';
import Footer from '@/components/Footer';

export default function Home() {
  const [transferencias, setTransferencias] = useState([]);
  const [saldoTotal, setSaldoTotal] = useState(0);
  const [saldoTotalNoPeriodo, setSaldoTotalNoPeriodo] = useState(0);

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;
  const pageCount = Math.ceil(transferencias.length / itemsPerPage);

  const handlePageChange = (selected: { selected: number }) => {
    setCurrentPage(selected.selected);
  };

  const handleSearch = async (dataInicio: string, dataFim: string, nomeOperador: string) => {
    try {
      const params : { [key: string]: any } = {};

      if (dataInicio) {
        params.dataInicio = FormatDateTimeAPI(dataInicio);
      }

      if (dataFim) {
        params.dataFim = FormatDateTimeAPI(dataFim);
      }

      if (nomeOperador) {
        params.nomeOperador = nomeOperador;
      }

      const response = await axios.get('http://localhost:8080/transferencias', {
        params: params
      });
      
      const data = response.data.transferencias;
      const total = response.data.saldoTotal;
      const totalNoPeriodo = response.data.saldoTotalNoPeriodo;

      setTransferencias(data);
      setSaldoTotal(total);
      setSaldoTotalNoPeriodo(totalNoPeriodo);

    } catch (error) {
      console.error('Erro ao buscar as transferências:', error);
    }
  };

  const displayedTransferencias = transferencias.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );
  
  return (
    <Main>
      <Header />
      <Container>
        <Forms onSearch={handleSearch} />
        <Table
          displayedTransferencias={displayedTransferencias}
          saldoTotal={saldoTotal}
          saldoTotalNoPeriodo={saldoTotalNoPeriodo}
        />
        <Pagination
          pageCount={pageCount}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </Container>
      <Footer />
    </Main>
  );
}
