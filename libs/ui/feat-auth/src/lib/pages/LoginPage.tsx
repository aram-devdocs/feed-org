'use client';

import { LoginForm } from '../components';
import { useLogin } from '../hooks';

export const LoginPage = () => {
  const { login } = useLogin();
  return <LoginForm onSubmit={login} />;
};
