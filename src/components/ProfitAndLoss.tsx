import {
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

export function ProfitAndLoss() {
  return (
    <TableContainer>
      <Table size="sm">
        <Thead>
          <Tr>
            <Th></Th>
            <Th isNumeric>2022</Th>
            <Th isNumeric>2023</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>
              <Heading size="md" m={0}>
                Revenue
              </Heading>
            </Td>
            <Td />
            <Td />
          </Tr>
          <Tr color="#807e98">
            <Td pl={12}>
              <Text>Products</Text>
            </Td>
            <Td isNumeric>
              <Text>13,896.06</Text>
            </Td>
            <Td isNumeric>
              <Text>13,896.06</Text>
            </Td>
          </Tr>
          <Tr color="#807e98">
            <Td pl={12}>
              <Text>Services</Text>
            </Td>
            <Td isNumeric>
              <Text>13,896.06</Text>
            </Td>
            <Td isNumeric>
              <Text>13,896.06</Text>
            </Td>
          </Tr>

          <Tr borderBottom="1px solid #2d2d3d" borderTop="1px solid #2d2d3d">
            <Td>
              <Text as="strong">Total Revenue</Text>
            </Td>
            <Td isNumeric>
              <Text>13,896.06</Text>
            </Td>
            <Td isNumeric>
              <Text>13,896.06</Text>
            </Td>
          </Tr>
          <Tr>
            <Td pt={8}>
              <Heading size="md" m={0}>
                Expenses
              </Heading>
            </Td>
            <Td />
            <Td />
          </Tr>
          <Tr color="#807e98">
            <Td pl={12}>
              <Text>Salaries</Text>
            </Td>
            <Td isNumeric>
              <Text>13,896.06</Text>
            </Td>
            <Td isNumeric>
              <Text>13,896.06</Text>
            </Td>
          </Tr>
          <Tr color="#807e98">
            <Td pl={12}>
              <Text>Server Costs</Text>
            </Td>
            <Td isNumeric>
              <Text>13,896.06</Text>
            </Td>
            <Td isNumeric>
              <Text>13,896.06</Text>
            </Td>
          </Tr>

          <Tr borderBottom="1px solid #2d2d3d" borderTop="1px solid #2d2d3d">
            <Td>
              <Text as="strong">Total Expenses</Text>
            </Td>
            <Td isNumeric>
              <Text>13,896.06</Text>
            </Td>
            <Td isNumeric>
              <Text>13,896.06</Text>
            </Td>
          </Tr>
        </Tbody>
      </Table>
      <Table size="sm" mt={8}>
        <Tbody>
          <Tr>
            <Td>
              <Text>Income Before Tax</Text>
            </Td>
            <Td isNumeric>
              <Text>13,896.06</Text>
            </Td>
            <Td isNumeric>
              <Text>13,896.06</Text>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Text>Income Tax</Text>
            </Td>
            <Td isNumeric>
              <Text>13,896.06</Text>
            </Td>
            <Td isNumeric>
              <Text>13,896.06</Text>
            </Td>
          </Tr>
          <Tr borderBottom="1px solid #2d2d3d" borderTop="1px solid #2d2d3d">
            <Td>
              <Text as="strong">Net Profit/Loss</Text>
            </Td>
            <Td isNumeric>
              <Text>13,896.06</Text>
            </Td>
            <Td isNumeric>
              <Text>13,896.06</Text>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
}
