import React from 'react';
import {Svg} from '../../styles/svg';

export const DownloadIcon = () => {
   return (
      <Svg
         width="20"
         height="20"
         viewBox="0 0 24 24"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         css={{
            '& path': {
               fill: '$accents9',
            },
         }}
      >
         <Svg.Path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
      </Svg>
   );
};

