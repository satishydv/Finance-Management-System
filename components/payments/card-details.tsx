import React, {useState} from 'react';
import {Card, Text, Badge, Button, Tooltip} from '@nextui-org/react';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';
import {PaymentCardData} from './index';
import {EyeIcon} from '../icons/payments/eye-icon';
import {DownloadIcon} from '../icons/payments/download-icon';
import {SettingsIcon} from '../icons/payments/settings-icon';
import {ShieldIcon} from '../icons/payments/shield-icon';
import {BuildingIcon} from '../icons/payments/building-icon';
import {CardRequestIcon} from '../icons/payments/card-request-icon';
import {CopyIcon} from '../icons/payments/copy-icon';
import {CardIcon} from '../icons/payments/card-icon';

interface Props {
   card: PaymentCardData;
}

export const CardDetails = ({card}: Props) => {
   const [showCardNumber, setShowCardNumber] = useState(false);
   const [copied, setCopied] = useState(false);

   const maskedCardNumber = showCardNumber
      ? card.cardNumber.match(/.{1,4}/g)?.join(' ')
      : '•••• •••• •••• ' + card.cardNumber.slice(-4);

   const handleCopy = () => {
      navigator.clipboard.writeText(card.cardNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
   };

   return (
      <Card>
         <Card.Body css={{p: '$8'}}>
            <Flex direction="column" css={{gap: '$8'}}>
               {/* Header */}
               <Box>
                  <Flex css={{gap: '$2', alignItems: 'center', mb: '$4'}}>
                     <CardIcon />
                     <Text h4>Card Details</Text>
                  </Flex>
               </Box>

               {/* Current Balance */}
               <Box
                  css={{
                     p: '$6',
                     bg: '$accents0',
                     borderRadius: '$lg',
                  }}
               >
                  <Text span css={{color: '$accents7', fontSize: '$sm'}}>
                     Current Balance
                  </Text>
                  <Text
                     h3
                     css={{
                        mt: '$2',
                        fontWeight: '$bold',
                     }}
                  >
                     ${card.balance.toLocaleString('en-US', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                     })}{' '}
                     EUR
                  </Text>
               </Box>

               {/* Card Information */}
               <Flex direction="column" css={{gap: '$4'}}>
                  <Flex
                     css={{
                        justifyContent: 'space-between',
                        alignItems: 'center',
                     }}
                  >
                     <Text span css={{color: '$accents7', fontSize: '$sm'}}>
                        Card Type
                     </Text>
                     <Text span weight="semibold">
                        {card.type}
                     </Text>
                  </Flex>

                  <Flex
                     css={{
                        justifyContent: 'space-between',
                        alignItems: 'center',
                     }}
                  >
                     <Text span css={{color: '$accents7', fontSize: '$sm'}}>
                        Card Holder
                     </Text>
                     <Text span weight="semibold">
                        {card.cardHolder}
                     </Text>
                  </Flex>

                  <Flex
                     css={{
                        justifyContent: 'space-between',
                        alignItems: 'center',
                     }}
                  >
                     <Text span css={{color: '$accents7', fontSize: '$sm'}}>
                        Card Number
                     </Text>
                     <Flex css={{gap: '$2', alignItems: 'center'}}>
                        <Text span weight="semibold">
                           {maskedCardNumber}
                        </Text>
                        <Tooltip content={copied ? 'Copied!' : 'Copy'}>
                           <Box
                              css={{
                                 cursor: 'pointer',
                                 '&:hover': {
                                    opacity: 0.7,
                                 },
                              }}
                              onClick={handleCopy}
                           >
                              <CopyIcon />
                           </Box>
                        </Tooltip>
                     </Flex>
                  </Flex>

                  <Flex
                     css={{
                        justifyContent: 'space-between',
                        alignItems: 'center',
                     }}
                  >
                     <Text span css={{color: '$accents7', fontSize: '$sm'}}>
                        Expiry Date
                     </Text>
                     <Text span weight="semibold">
                        {card.expiryDate}
                     </Text>
                  </Flex>

                  <Flex
                     css={{
                        justifyContent: 'space-between',
                        alignItems: 'center',
                     }}
                  >
                     <Text span css={{color: '$accents7', fontSize: '$sm'}}>
                        Status
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

                  <Flex
                     css={{
                        justifyContent: 'space-between',
                        alignItems: 'center',
                     }}
                  >
                     <Text span css={{color: '$accents7', fontSize: '$sm'}}>
                        Security
                     </Text>
                     <Badge color="success" variant="flat" size="sm">
                        Unlocked
                     </Badge>
                  </Flex>
               </Flex>

               {/* Primary Actions */}
               <Flex direction="column" css={{gap: '$3'}}>
                  <Button
                     flat
                     css={{
                        width: '100%',
                        justifyContent: 'flex-start',
                     }}
                     iconLeft={<EyeIcon />}
                     onClick={() => setShowCardNumber(!showCardNumber)}
                  >
                     {showCardNumber ? 'Hide Card Number' : 'Show Card Number'}
                  </Button>
                  <Button
                     flat
                     css={{
                        width: '100%',
                        justifyContent: 'flex-start',
                     }}
                     iconLeft={<DownloadIcon />}
                  >
                     Download Statement
                  </Button>
               </Flex>

               {/* Quick Actions */}
               <Box>
                  <Flex
                     css={{
                        gap: '$2',
                        alignItems: 'center',
                        mb: '$4',
                     }}
                  >
                     <SettingsIcon />
                     <Text h5>Quick Actions</Text>
                  </Flex>
                  <Flex direction="column" css={{gap: '$3'}}>
                     <Button
                        light
                        css={{
                           width: '100%',
                           justifyContent: 'flex-start',
                        }}
                        iconLeft={<ShieldIcon />}
                     >
                        Set as Default
                     </Button>
                     <Button
                        light
                        css={{
                           width: '100%',
                           justifyContent: 'flex-start',
                        }}
                        iconLeft={<BuildingIcon />}
                     >
                        Update Billing Address
                     </Button>
                     <Button
                        light
                        css={{
                           width: '100%',
                           justifyContent: 'flex-start',
                        }}
                        iconLeft={<CardRequestIcon />}
                     >
                        Request New Card
                     </Button>
                  </Flex>
               </Box>
            </Flex>
         </Card.Body>
      </Card>
   );
};

