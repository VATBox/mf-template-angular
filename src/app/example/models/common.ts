export interface UserDetails {
  email: string;
  name: string;
  tags: string[];
  position: string;
  lastLogin?: Date;
  accesses: any[];
  accounts: any[];
  roles?: any[];
  enabled: boolean;
}
