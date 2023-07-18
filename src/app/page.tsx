import { Main, Container, Superior, Centro, DataInicio, DataFim, Label, Input, NomeOperador, ButtomPesquisar, TableContainer, Table, Caption, Thead, Thow, Tbody, TableHeader, TableData, TableFooter, PaginationButton } from './style';

export default function Home() {
  return (
    <Main>
      <Container>
        <Superior>
          <DataInicio>
            <Label>Data de Início:</Label>
            <Input />
          </DataInicio>
          <DataFim>
            <Label>Data de Fim:</Label>
            <Input />
          </DataFim>
          <NomeOperador>
            <Label>Nome do Operador Transacionado:</Label>
            <Input />
          </NomeOperador>
        </Superior>
        <Centro>
          <ButtomPesquisar>Pesquisar</ButtomPesquisar>
        </Centro>

        <TableContainer>
          <Table>
            <Caption> Saldo Total:    Saldo no Período:  </Caption>
              <Thead>
                <Thow>
                  <TableHeader>Dados</TableHeader>
                  <TableHeader>Valencia</TableHeader>
                  <TableHeader>Tipo</TableHeader>
                  <TableHeader>Nome do Operador Transacionado</TableHeader>
                </Thow>
              </Thead>
              <Tbody>             

                <Thow>
                  <TableData>dataTransferencia</TableData>
                  <TableData>valor</TableData>
                  <TableData>tipo</TableData>
                  <TableData>nomeOperadorTransacao</TableData>
                </Thow>

                <Thow>
                  <TableData>dataTransferencia</TableData>
                  <TableData>valor</TableData>
                  <TableData>tipo</TableData>
                  <TableData>nomeOperadorTransacao</TableData>
                </Thow>

                <Thow>
                  <TableData>dataTransferencia</TableData>
                  <TableData>valor</TableData>
                  <TableData>tipo</TableData>
                  <TableData>nomeOperadorTransacao</TableData>
                </Thow>

                <Thow>
                  <TableData>dataTransferencia</TableData>
                  <TableData>valor</TableData>
                  <TableData>tipo</TableData>
                  <TableData>nomeOperadorTransacao</TableData>
                </Thow>

              </Tbody>
              <TableFooter>
                <Thow>
                  <TableData colSpan={4}>
                    <PaginationButton>Anterior</PaginationButton>
                    <PaginationButton>Próxima</PaginationButton>
                  </TableData>
                </Thow>
              </TableFooter>
          </Table>
        </TableContainer>
      </Container>
    </Main>
  );
}