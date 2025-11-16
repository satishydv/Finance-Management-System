import React from 'react';
import {Svg} from '../../styles/svg';

export const CopyIcon = () => {
   return (
      <Svg
         width="16"
         height="16"
         viewBox="0 0 24 24"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         css={{
            'cursor': 'pointer',
            '& path': {
               fill: '$accents7',
            },
            '&:hover path': {
               fill: '$accents9',
            },
         }}
      >
         <Svg.Path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
      </Svg>
   );
};

