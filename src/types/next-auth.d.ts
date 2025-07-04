import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
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
    };
  }

  interface User {
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
}

declare module "next-auth/jwt" {
  interface JWT {
    user: {
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
    };
  }
} 