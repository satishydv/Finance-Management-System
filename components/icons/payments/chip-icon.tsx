import React from 'react';
import {Svg} from '../../styles/svg';

export const ChipIcon = () => {
   return (
      <Svg
         width="40"
         height="30"
         viewBox="0 0 40 30"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
      >
         <Svg.Rect
            x="2"
            y="2"
            width="36"
            height="26"
            rx="2"
            css={{
               fill: 'rgba(255, 255, 255, 0.1)',
               stroke: 'rgba(255, 255, 255, 0.3)',
               strokeWidth: '1',
            }}
         />
         <Svg.Rect
            x="6"
            y="6"
            width="28"
            height="18"
            rx="1"
            css={{
               fill: 'rgba(255, 255, 255, 0.05)',
            }}
         />
      </Svg>
   );
};

