export interface User {
  id: string;
  name?: string | null;
  email?: string | null;
  emailVerified?: Date | null;
  image?: string | null;
  hashedPassword?: string | null;
  createdAt: Date;
  updatedAt: Date;
  favoriteIds: string[] | null;
  role: string;
  listings?: Listing[] | null;
}


export interface Listing {
  id: string;
  title?: string;
  category?: string;
  description?: string;
  price?: number;
  locationValue?: string;
  bathroomCount?: number;
  guestCount?: number;
  roomCount?: number;
  userId: string;
  imageSrc?: string;
}

export enum Role {
  USER,
  ADMIN,
}
