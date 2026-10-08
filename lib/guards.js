import { getUser } from './auth';
export async function requireUser(){const u=await getUser();if(!u)throw new Error('UNAUTHORIZED');return u}
export async function requireAdmin(){const u=await requireUser();if(u.role!=='ADMIN')throw new Error('FORBIDDEN');return u}
