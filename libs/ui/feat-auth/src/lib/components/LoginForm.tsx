import {
  Typography,
  Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  Box,
  Input,
} from '@feed-org/design-system';
import { LoginFormInput } from '@feed-org/types';

export interface LoginFormProps {
  onSubmit: (input: LoginFormInput) => void;
}

export const LoginForm = ({ onSubmit }: LoginFormProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        width: '300px',
        margin: 'auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
      }}
    >
      <Typography variant="h6">Login</Typography>
      <FormControl>
        <FormGroup>
          <FormControlLabel label="Family" control={<Input />} />
          <FormControlLabel label="Username" control={<Input />} />
        </FormGroup>
      </FormControl>
      <Button>Login</Button>
    </Box>
  );
};
