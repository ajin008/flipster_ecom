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
}

export interface LoginContextType {
  loginFormData: LoginProp | null;
  setLoginFormData: (data: LoginProp | null) => void;
  handleLogin: (data: LoginProp) => void;
}

export interface SignupContextType {
  signUpData: SignupProp | null;
  setSignUpData: (data: SignupProp | null) => void;
}
