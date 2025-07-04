export interface User {
  _id?: string;
  name: {
    firstName: string;
    lastName: string;
  };
  email: string;
  password: string;
  createdAt: Date;
  isBusiness: boolean;
  business?: {
    name: string;
    phone: string;
    website: string;
    socialMedia: {
      facebook?: string;
      instagram?: string;
      linkedin?: string;
      twitter?: string;
    };
    providesServices: boolean;
    serviceCategories: string[];
    description: string;
  };
}

export interface UserSession {
  id: string;
  email: string;
  name: {
    firstName: string;
    lastName: string;
  };
  isBusiness: boolean;
  business?: {
    name: string;
    phone: string;
    website: string;
    socialMedia: {
      facebook?: string;
      instagram?: string;
      linkedin?: string;
      twitter?: string;
    };
    providesServices: boolean;
    serviceCategories: string[];
    description: string;
  };
  createdAt: Date;
}

export default User;
