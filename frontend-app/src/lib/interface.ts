export interface LoginProp {
  email: string;
  password: string;
}

export interface LeftBannerProps {
  type: "login" | "signup";
}

export interface SignupProp {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  agreeToTerms: boolean;
  otp: string;
}

export interface LoginContextType {
  loginFormData: LoginProp | null;
  setLoginFormData: (data: LoginProp | null) => void;
  handleLogin: (data: LoginProp) => void;
  loading: boolean;
}

export interface SignupContextType {
  signUpData: SignupProp | null;
  setSignUpData: (data: SignupProp | null) => void;
  handleSignup: (data: SignupProp) => void;
  loading: boolean;
}

export interface IUserId {
  id: string;
}

export interface IUser {
  id: string;
  email: string;
  username: string;
}
