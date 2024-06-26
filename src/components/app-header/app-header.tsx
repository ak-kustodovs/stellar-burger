import { FC } from 'react';
import { AppHeaderUI } from '@ui';
import { useSelector } from '../../services/store';
import { getUser } from '../../services/slices/userSlice';

export const AppHeader: FC = () => {
  const user = useSelector(getUser);
  let userName = user?.name || '';
  return <AppHeaderUI userName={userName} />;
};
