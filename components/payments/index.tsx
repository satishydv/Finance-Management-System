import React, {useState} from 'react';
import {Text, Button} from '@nextui-org/react';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';
import {PaymentCard} from './payment-card';
import {CardDetails} from './card-details';
import {SummaryCard} from './summary-card';
import {DollarIcon} from '../icons/payments/dollar-icon';
import {CardIcon} from '../icons/payments/card-icon';
import {ChartIcon} from '../icons/payments/chart-icon';
import {ShieldIcon} from '../icons/payments/shield-icon';
import {PlusIcon} from '../icons/payments/plus-icon';

export interface PaymentCardData {
   id: number;
   type: 'VISA' | 'MASTERCARD';
   cardNumber: string;
   cardHolder: string;
   expiryDate: string;
   balance: number;
   status: 'Active' | 'Inactive' | 'Locked';
   cvv?: string;
}

const mockCards: PaymentCardData[] = [
   {
      id: 1,
      type: 'VISA',
      cardNumber: '3455 4562 7710 3507',
      cardHolder: 'Alexander Munoz',
      expiryDate: '02/30',
      balance: 34938,
      status: 'Active',
   },
   {
      id: 2,
      type: 'MASTERCARD',
      cardNumber: '5412 7534 8912 3456',
      cardHolder: 'John Carter',
      expiryDate: '05/31',
      balance: 12847.5,
      status: 'Active',
   },
   {
      id: 3,
      type: 'VISA',
      cardNumber: '4532 1876 5432 9876',
      cardHolder: 'Sarah Johnson',
      expiryDate: '11/29',
      balance: 5621.75,
      status: 'Inactive',
   },
];

export const Payments = () => {
   const [selectedCard, setSelectedCard] = useState<PaymentCardData | null>(
      mockCards[0]
   );

   const totalBalance = mockCards.reduce((sum, card) => sum + card.balance, 0);
   const activeCards = mockCards.filter((card) => card.status === 'Active')
      .length;
   const averageBalance = totalBalance / mockCards.length;
   const lockedCards = mockCards.filter((card) => card.status === 'Locked')
      .length;

   return (
      <Box
         css={{
            'overflow': 'hidden',
            'height': '100%',
            'px': '$10',
            'py': '$10',
            '@sm': {
               px: '$16',
            },
         }}
      >
         {/* Summary Statistics */}
         <Flex
            css={{
               'gap': '$6',
               'flexWrap': 'wrap',
               'mb': '$10',
               '@md': {
                  flexWrap: 'nowrap',
               },
            }}
         >
            <SummaryCard
               title="Total Balance"
               value={`$${totalBalance.toLocaleString('en-US', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
               })}`}
               change="+12.5%"
               changeType="positive"
               icon={<DollarIcon />}
            />
            <SummaryCard
               title="Active Cards"
               value={`${activeCards}/${mockCards.length}`}
               change=""
               changeType="neutral"
               icon={<CardIcon />}
            />
            <SummaryCard
               title="Average Balance"
               value={`$${averageBalance.toLocaleString('en-US', {
                  minimumFractionDigits: 3,
                  maximumFractionDigits: 3,
               })}`}
               change="+8.3%"
               changeType="positive"
               icon={<ChartIcon />}
            />
            <SummaryCard
               title="Security Status"
               value={`${lockedCards} Locked`}
               change=""
               changeType="neutral"
               icon={<ShieldIcon />}
            />
         </Flex>

         {/* Main Content */}
         <Flex
            css={{
               'gap': '$8',
               'flexDirection': 'column',
               '@lg': {
                  flexDirection: 'row',
               },
            }}
         >
            {/* Left Column - Cards List */}
            <Box
               css={{
                  'flex': '1',
                  'minWidth': '0',
                  '@lg': {
                     flex: '0 0 60%',
                  },
               }}
            >
               <Flex
                  css={{
                     'justifyContent': 'space-between',
                     'alignItems': 'center',
                     'mb': '$6',
                     'flexWrap': 'wrap',
                     'gap': '$4',
                  }}
               >
                  <Box>
                     <Text h3 css={{mb: '$2'}}>
                        Your Cards
                     </Text>
                     <Text span css={{color: '$accents7'}}>
                        Manage your payment cards and balances.
                     </Text>
                  </Box>
                  <Button
                     auto
                     iconRight={<PlusIcon />}
                     css={{
                        bg: '$orange600',
                        color: 'white',
                        '&:hover': {
                           bg: '$orange700',
                        },
                     }}
                  >
                     Add New Card
                  </Button>
               </Flex>

               <Flex
                  direction="column"
                  css={{
                     gap: '$6',
                  }}
               >
                  {mockCards.map((card) => (
                     <PaymentCard
                        key={card.id}
                        card={card}
                        isSelected={selectedCard?.id === card.id}
                        onSelect={() => setSelectedCard(card)}
                     />
                  ))}
               </Flex>
            </Box>

            {/* Right Column - Card Details */}
            <Box
               css={{
                  'flex': '1',
                  'minWidth': '0',
                  '@lg': {
                     flex: '0 0 40%',
                  },
               }}
            >
               {selectedCard ? (
                  <CardDetails card={selectedCard} />
               ) : (
                  <Box
                     css={{
                        p: '$10',
                        textAlign: 'center',
                        color: '$accents7',
                     }}
                  >
                     <Text>Select a card to view details</Text>
                  </Box>
               )}
            </Box>
         </Flex>
      </Box>
   );
};

