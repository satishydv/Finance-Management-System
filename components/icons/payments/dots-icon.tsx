import React from 'react';
import {Svg} from '../../styles/svg';

export const DotsIcon = () => {
   return (
      <Svg
         width="20"
         height="20"
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
         <Svg.Path
            d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
         />
      </Svg>
   );
};

