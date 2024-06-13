/* tslint:disable */
/* eslint-disable */
import { GrantedAuthority } from '../models/granted-authority';
export interface User {
  accountNonExpired?: boolean;
  accountNonLocked?: boolean;
  authorities?: Array<GrantedAuthority>;
  creationDate?: string;
  credentialsNonExpired?: boolean;
  email?: string;
  enabled?: boolean;
  firstname?: string;
  fullName?: string;
  id?: number;
  lastname?: string;
  name?: string;
  password?: string;
  phoneNumber?: number;
  role?: 'USER' | 'ADMIN';
  username?: string;
}
