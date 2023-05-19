// @ts-nocheck
import { FC } from 'react';
import { IIconProps } from '@/module/Icon/Model/IIconProps';
import IconContainer from '@/module/Icon/Component/IconContainer/IconContainer';
const IconFilter: FC<IIconProps> = ({...props}) => (
  <IconContainer {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" width="13.5" height="11.5" viewBox="0 0 13.5 11.5">
          <g id="Sort" transform="translate(-5.25 -6.25)">
              <path id="Path_425" data-name="Path 425" fill='none' stroke="#999" strokeLinecap="round" strokeWidth="1.5" className="cls-1" d="M16 12H8"/>
              <path id="Path_426" data-name="Path 426" fill='none' stroke="#999" strokeLinecap="round" strokeWidth="1.5" d="M18 7H6"/>
              <path id="Path_427" data-name="Path 427" fill='none' stroke="#999" strokeLinecap="round" strokeWidth="1.5" d="M10 17h4"/>
          </g>
      </svg>
  </IconContainer>
);

export default IconFilter;
