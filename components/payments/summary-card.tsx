import React from 'react';
import {Card, Text} from '@nextui-org/react';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

interface Props {
   title: string;
   value: string;
   change: string;
   changeType: 'positive' | 'negative' | 'neutral';
   icon: React.ReactNode;
}

export const SummaryCard = ({
   title,
   value,
   change,
   changeType,
   icon,
}: Props) => {
   return (
      <Card
         css={{
            flex: '1',
            minWidth: '200px',
            bg: '$accents0',
         }}
      >
         <Card.Body css={{p: '$6'}}>
            <Flex css={{gap: '$4', alignItems: 'flex-start'}}>
               <Box
                  css={{
                     p: '$3',
                     bg: '$accents1',
                     borderRadius: '$lg',
                  }}
               >
                  {icon}
               </Box>
               <Flex direction="column" css={{flex: '1', minWidth: 0}}>
                  <Text span css={{color: '$accents7', fontSize: '$sm'}}>
                     {title}
                  </Text>
                  <Text
                     h4
                     css={{
                        mt: '$2',
                        mb: '$1',
                        fontWeight: '$bold',
                     }}
                  >
                     {value}
                  </Text>
                  {change && (
                     <Text
                        span
                        css={{
                           fontSize: '$xs',
                           color:
                              changeType === 'positive'
                                 ? '$success'
                                 : changeType === 'negative'
                                 ? '$error'
                                 : '$accents7',
                        }}
                     >
                        {change}
                     </Text>
                  )}
               </Flex>
            </Flex>
         </Card.Body>
      </Card>
   );
};

