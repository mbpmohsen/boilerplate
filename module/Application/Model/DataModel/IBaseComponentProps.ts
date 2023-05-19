import { CSSProperties } from 'react';
import { IProps } from '@/module/Application/Model/DataModel/IProps';

export interface IBaseComponentProps extends IProps{
  className?: string;
  style?: CSSProperties;
  testName?: string;
}
