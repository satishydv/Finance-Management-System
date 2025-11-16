import React from 'react';
import {Svg} from '../../styles/svg';

export const DollarIcon = () => {
   return (
      <Svg
         width="24"
         height="24"
         viewBox="0 0 24 24"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         css={{
            '& path': {
               fill: '$accents9',
            },
         }}
      >
         <Svg.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.92c-1.84-.24-3.41-1.08-4.09-2.41l1.85-1.85c.51.89 1.55 1.62 2.93 1.89v-3.4c-2.25-.5-4.5-1.28-4.5-3.5 0-1.78 1.41-3.18 3.5-3.5V4h2.67v1.92c1.84.24 3.41 1.08 4.09 2.41l-1.85 1.85c-.51-.89-1.55-1.62-2.93-1.89v3.4c2.25.5 4.5 1.28 4.5 3.5 0 1.78-1.41 3.18-3.5 3.5z"
         />
      </Svg>
   );
};

