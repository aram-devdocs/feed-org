import { LoginFormInput } from '@feed-org/types';
export const useLogin = () => {
  return {
    login: ({ family, username }: LoginFormInput) => {
      console.log(`Login with family: ${family} and username: ${username}`);
    },
  };
};
