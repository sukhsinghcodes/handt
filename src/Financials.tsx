import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Container,
  HStack,
  Heading,
  Hide,
  IconButton,
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
import { ArrowBackIcon } from '@chakra-ui/icons';

export function Financials() {
  return (
    <>
      <HStack
        spacing={4}
        mb={2}
        justifyContent="center"
        alignItems="center"
        backgroundColor="#232334"
        borderBottom="solid 1px #2d2d3d"
        fontSize="0.8125rem"
        color="#c8c7d8"
        p={3}
      >
        <Text>
          Interested in bridging your DYDX tokens from Ethereum to dYdX Chain?
        </Text>
        <Button size="sm">Migrate</Button>
      </HStack>
      <Container maxW="6xl" py={4}>
        <HStack as="header" spacing={4} mb={10} justifyContent="space-between">
          <Logo />
          <HStack>
            <Hide below="md">
              <Tabs variant="menu">
                <TabList>
                  <Tab>Dashboard</Tab>
                  <Tab>Migrate</Tab>
                  <Tab>History</Tab>
                  <Tab>Forums</Tab>
                  <Tab>Trade</Tab>
                </TabList>
              </Tabs>
            </Hide>
            <Button>Connect</Button>
          </HStack>
        </HStack>
        <HStack spacing={4} alignItems="center" mb={12}>
          <IconButton
            isRound
            variant="secondary"
            aria-label="Back"
            icon={<ArrowBackIcon />}
          />
          <VStack alignItems="flex-start" spacing={0}>
            <Text as="small" color="#807e98" m={0}>
              FINANCES
            </Text>
            <Heading size="md" mb={1}>
              Financials
            </Heading>
            <Text color="#807e98">
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
                        <StatNumber>$13,896.06</StatNumber>
                      </Stat>
                    </CardBody>
                  </Card>
                  <Card>
                    <CardHeader>Total Liabilities and Equity</CardHeader>
                    <CardBody>
                      <Stat>
                        <StatNumber>$13,896.06</StatNumber>
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
                        <StatNumber>$13,896.06</StatNumber>
                      </Stat>
                    </CardBody>
                  </Card>
                  <Card>
                    <CardHeader>Total Expenses</CardHeader>
                    <CardBody>
                      <Stat>
                        <StatNumber>$13,896.06</StatNumber>
                      </Stat>
                    </CardBody>
                  </Card>
                  <Card>
                    <CardHeader>Net Profit/Loss</CardHeader>
                    <CardBody>
                      <Stat>
                        <StatNumber>$13,896.06</StatNumber>
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
