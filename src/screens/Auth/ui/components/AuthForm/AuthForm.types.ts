export interface AuthFormProps {
  title: 'Login' | 'Register';
  submit: (data: { login: string; password: string }) => void;
}
