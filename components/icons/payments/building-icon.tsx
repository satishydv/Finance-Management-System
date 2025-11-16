import React from 'react';
import {Svg} from '../../styles/svg';

export const BuildingIcon = () => {
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
         <Svg.Path d="M12 7V3H2v18h20V7H12zm-2 12H4v-2h6v2zm0-4H4v-2h6v2zm0-4H4V9h6v2zm10 12h-8V9h8v10zm-2-8h-4v2h4v-2zm0 4h-4v2h4v-2z" />
      </Svg>
   );
};

