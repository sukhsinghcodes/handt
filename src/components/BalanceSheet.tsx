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

export function BalanceSheet() {
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
                Assets
              </Heading>
            </Td>
            <Td />
            <Td />
          </Tr>
          <Tr color="#807e98">
            <Td pl={12}>
              <Text>Cash and Cash Equivalents</Text>
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
              <Text>Current Assets</Text>
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
              <Text>Property, Plant and Equipment</Text>
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
              <Text as="strong">Total Assets</Text>
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
                Liabilities and Equity
              </Heading>
            </Td>
            <Td />
            <Td />
          </Tr>
          <Tr color="#807e98">
            <Td pl={12}>
              <Text>Liabilities</Text>
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
              <Text>Equities</Text>
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
              <Text as="strong">Total Liabilities and Equity</Text>
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
