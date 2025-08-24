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

export interface GameListingFormData {
  game_name: string;
  listing_title: string;
  category_id: string;
  price: string;
  description: string;
  images: (File | string)[];
  user_id: string;
  login_credentials: string;
}

export interface GameAccount {
  id: string;
  user_id: string;
  gamename: string;
  price: number;
  status: string;
  created_at: string;
  thumbnail_image?: string;
  description?: string;
}

export interface GameListing {
  id: string;
  game_name: string;
  account_title: string;
  price: number;
  status: string;
  image_paths: string[];
  created_at: string;
}

export interface VerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;
  prompt(): Promise<void>;
}
