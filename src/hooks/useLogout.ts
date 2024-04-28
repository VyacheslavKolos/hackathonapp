import { useLocalStorage } from 'usehooks-ts';
import { useNavigate } from 'react-router-dom';
import Routes from './router/routes.enum.ts';

const useLogout = (): [() => void] => {
  const [, setTokens] = useLocalStorage<string | null>('tokens', null);
  const navigate = useNavigate();

  const clearTokens = () => {
    setTokens(null);
    navigate(Routes.Login);
  };

  return [clearTokens];
};

export default useLogout;
