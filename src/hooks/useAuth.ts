import { use } from 'react';

import { AuthContext } from '../context';

export function useAuth() {
  return use(AuthContext);
}
