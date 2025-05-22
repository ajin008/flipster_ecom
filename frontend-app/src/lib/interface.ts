export interface LoginProp {
  email: string;
  password: string;
}

export interface LeftBannerProps {
  type: "login" | "signup";
}

export interface SignupData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface LoginContextType {
  loginFormData: LoginProp | null;
  setLoginFormData: (data: LoginProp | null) => void;
}
