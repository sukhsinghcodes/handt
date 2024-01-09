import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Container,
  HStack,
  Heading,
  Hide,
  SimpleGrid,
  Stat,
  StatNumber,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from '@chakra-ui/react';
import { BalanceSheet, Logo, ProfitAndLoss } from './components';

export function Financials() {
  return (
    <>

      <Container maxW="6xl" py={4}>
        <HStack as="header" spacing={4} mb={10} justifyContent="space-between">
          <Logo />
          <HStack>
            <Hide below="md">
              <Tabs variant="menu">
                <TabList>
                  <Tab>ABOUT</Tab>
                  <Tab>MEET THE PARTNERS</Tab>
                  <Tab>CAREERS</Tab>
                </TabList>
              </Tabs>
            </Hide>
            <Button variant='outline' color='white'>CONTACT US</Button>
          </HStack>
        </HStack>
        <HStack spacing={4} alignItems="center" mb={12}>

          <VStack alignItems="flex-start" spacing={0}>
            <Heading size="md" mb={1}>
              Financials
            </Heading>
            <Text color="#0071ce">
              Providing full transparency on all our finances
            </Text>
          </VStack>
        </HStack>
        <VStack spacing={4} alignItems="stretch">
          <Tabs variant="soft-rounded">
            <TabList>
              <Tab>Balance Sheet</Tab>
              <Tab>Profit and Loss</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <SimpleGrid spacing={4} columns={[1, 1, 2]} mb={4}>
                  <Card>
                    <CardHeader>Total Assets</CardHeader>
                    <CardBody>
                      <Stat>
                        <StatNumber>$13,896 M</StatNumber>
                      </Stat>
                    </CardBody>
                  </Card>
                  <Card>
                    <CardHeader>Total Liabilities and Equity</CardHeader>
                    <CardBody>
                      <Stat>
                        <StatNumber>$13,896 M</StatNumber>
                      </Stat>
                    </CardBody>
                  </Card>
                </SimpleGrid>

                <Card>
                  <BalanceSheet />
                </Card>
              </TabPanel>
              <TabPanel>
                <SimpleGrid spacing={4} columns={[1, 1, 3]} mb={4}>
                  <Card>
                    <CardHeader>Total Revenue</CardHeader>
                    <CardBody>
                      <Stat>
                        <StatNumber>$13,896 M</StatNumber>
                      </Stat>
                    </CardBody>
                  </Card>
                  <Card>
                    <CardHeader>Total Expenses</CardHeader>
                    <CardBody>
                      <Stat>
                        <StatNumber>$13,896 M</StatNumber>
                      </Stat>
                    </CardBody>
                  </Card>
                  <Card>
                    <CardHeader>Net Profit/Loss</CardHeader>
                    <CardBody>
                      <Stat>
                        <StatNumber>$13,896 M</StatNumber>
                      </Stat>
                    </CardBody>
                  </Card>
                </SimpleGrid>
                <Card>
                  <ProfitAndLoss />
                </Card>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </VStack>
      </Container>
    </>
  );
}
