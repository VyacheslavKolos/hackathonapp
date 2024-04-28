import { FC, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useLocalStorage } from 'usehooks-ts';
import Routes from '../routes.enum.ts';

type Props = {
  children: ReactNode;
};
const AccessTokenGuard: FC<Props> = ({ children }) => {
  const [tokens] = useLocalStorage('tokens', '');
  console.log(tokens);
  // @ts-ignore
  if (!!tokens?.access && tokens?.access !== '') {
    return <Navigate to={Routes.Home} replace />;
  }

  return children;
};

export default AccessTokenGuard;
