import React from 'react';
import {Card, Text, Badge} from '@nextui-org/react';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';
import {PaymentCardData} from './index';
import {DotsIcon} from '../icons/payments/dots-icon';
import {ChipIcon} from '../icons/payments/chip-icon';

interface Props {
   card: PaymentCardData;
   isSelected?: boolean;
   onSelect?: () => void;
}

export const PaymentCard = ({card, isSelected, onSelect}: Props) => {
   const getCardGradient = () => {
      if (card.type === 'VISA') {
         return {
            background:
               'linear-gradient(60deg, rgb(21, 19, 51) 30%, rgb(253, 29, 29) 70%, rgb(252, 176, 69) 100%)',
            boxShadow:
               'rgba(0, 0, 0, 0.4) 0px 20px 35px -10px, rgba(0, 0, 0, 0.2) 0px 8px 15px -5px',
         };
      } else {
         return {
            background:
               'linear-gradient(135deg, rgb(21, 19, 19) 0%, rgb(106, 106, 106) 30%, rgb(15, 15, 15) 100%)',
            boxShadow:
               'rgba(0, 0, 0, 0.4) 0px 20px 35px -10px, rgba(0, 0, 0, 0.2) 0px 8px 15px -5px',
         };
      }
   };

   const maskedCardNumber = `•••• ${card.cardNumber.slice(-4)}`;
   const formattedCardNumber = card.cardNumber.match(/.{1,4}/g)?.join(' ');

   return (
      <Card
         css={{
            'cursor': 'pointer',
            'transition': 'all 0.2s ease',
            'border': isSelected ? '2px solid $primary' : '1px solid $border',
            '&:hover': {
               transform: 'translateY(-2px)',
               boxShadow: '$lg',
            },
         }}
         onClick={onSelect}
      >
         <Card.Body css={{p: 0}}>
            <Flex
               css={{
                  'gap': '$6',
                  'p': '$6',
                  'flexWrap': 'wrap',
                  '@sm': {
                     flexWrap: 'nowrap',
                  },
               }}
            >
               {/* Visual Card */}
               <Box
                  css={{
                     'minWidth': '280px',
                     'height': '160px',
                     'borderRadius': '$lg',
                     'p': '$6',
                     'position': 'relative',
                     'overflow': 'hidden',
                     'flex': '1',
                     ...getCardGradient(),
                  }}
               >
                  <Flex
                     css={{
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        height: '100%',
                        flexDirection: 'column',
                     }}
                  >
                     <Flex
                        css={{
                           width: '100%',
                           justifyContent: 'space-between',
                           alignItems: 'center',
                        }}
                     >
                        <Box
                           css={{
                              width: '40px',
                              height: '40px',
                              borderRadius: '50%',
                              bg: 'rgba(255, 255, 255, 0.2)',
                              backdropFilter: 'blur(10px)',
                           }}
                        />
                        <Text
                           span
                           css={{
                              color: 'white',
                              fontWeight: '$bold',
                              fontSize: '$lg',
                           }}
                        >
                           {card.type}
                        </Text>
                     </Flex>

                     <Box css={{width: '100%'}}>
                        <Text
                           span
                           css={{
                              color: 'white',
                              fontWeight: '$bold',
                              fontSize: '$xl',
                              letterSpacing: '2px',
                           }}
                        >
                           {formattedCardNumber}
                        </Text>
                     </Box>

                     <Flex
                        css={{
                           width: '100%',
                           justifyContent: 'space-between',
                           alignItems: 'flex-end',
                        }}
                     >
                        <Box>
                           <Text
                              span
                              css={{
                                 color: 'rgba(255, 255, 255, 0.7)',
                                 fontSize: '$xs',
                                 textTransform: 'uppercase',
                              }}
                           >
                              Card Holder Name
                           </Text>
                           <Text
                              span
                              css={{
                                 color: 'white',
                                 fontSize: '$sm',
                                 display: 'block',
                                 fontWeight: '$semibold',
                              }}
                           >
                              {card.cardHolder}
                           </Text>
                        </Box>
                        <Flex
                           css={{
                              gap: '$4',
                              alignItems: 'flex-end',
                           }}
                        >
                           <Box>
                              <Text
                                 span
                                 css={{
                                    color: 'rgba(255, 255, 255, 0.7)',
                                    fontSize: '$xs',
                                    textTransform: 'uppercase',
                                 }}
                              >
                                 Expiry Date
                              </Text>
                              <Text
                                 span
                                 css={{
                                    color: 'white',
                                    fontSize: '$sm',
                                    display: 'block',
                                    fontWeight: '$semibold',
                                 }}
                              >
                                 {card.expiryDate}
                              </Text>
                           </Box>
                           <ChipIcon />
                        </Flex>
                     </Flex>
                  </Flex>
               </Box>

               {/* Card Details */}
               <Flex
                  direction="column"
                  css={{
                     flex: '1',
                     gap: '$4',
                     minWidth: '200px',
                  }}
               >
                  <Flex
                     css={{
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                     }}
                  >
                     <Box>
                        <Flex css={{gap: '$2', alignItems: 'center', mb: '$2'}}>
                           <Text span weight="bold">
                              {card.type}
                           </Text>
                           <Badge
                              color={
                                 card.status === 'Active'
                                    ? 'success'
                                    : card.status === 'Locked'
                                    ? 'warning'
                                    : 'error'
                              }
                              variant="flat"
                              size="sm"
                           >
                              {card.status}
                           </Badge>
                        </Flex>
                        <Text span css={{color: '$accents7', fontSize: '$sm'}}>
                           Balance: ${card.balance.toLocaleString('en-US', {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                           })}{' '}
                           EUR
                        </Text>
                        <Text span css={{color: '$accents7', fontSize: '$sm'}}>
                           Expires: {card.expiryDate}
                        </Text>
                     </Box>
                     <DotsIcon />
                  </Flex>

                  <Flex
                     css={{
                        gap: '$6',
                        flexWrap: 'wrap',
                        '@sm': {
                           flexWrap: 'nowrap',
                        },
                     }}
                  >
                     <Box>
                        <Text
                           span
                           css={{color: '$accents7', fontSize: '$xs'}}
                        >
                           Card Number
                        </Text>
                        <Text span css={{fontSize: '$sm', display: 'block'}}>
                           {maskedCardNumber}
                        </Text>
                     </Box>
                     <Box>
                        <Text
                           span
                           css={{color: '$accents7', fontSize: '$xs'}}
                        >
                           Card Holder
                        </Text>
                        <Text span css={{fontSize: '$sm', display: 'block'}}>
                           {card.cardHolder}
                        </Text>
                     </Box>
                  </Flex>
               </Flex>
            </Flex>
         </Card.Body>
      </Card>
   );
};

