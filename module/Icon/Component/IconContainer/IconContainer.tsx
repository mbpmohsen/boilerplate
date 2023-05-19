import { FC } from 'react';
import cs from 'classnames';
import { IBaseComponentProps } from '@/module/Application/Model/DataModel/IBaseComponentProps';
import s from './IconContainer.module.scss';

const IconContainer: FC<IBaseComponentProps> = (
  { children, className },
) => <div className={cs('mb__icon', s.icon, className)}>{children}</div>;

export default IconContainer;
