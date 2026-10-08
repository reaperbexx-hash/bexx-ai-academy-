import bcrypt from 'bcryptjs';
import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import { db } from './db';
const secret = new TextEncoder().encode(process.env.JWT_SECRET || 'dev-only-secret');
export async function hashPassword(p){return bcrypt.hash(p,12)}
export async function checkPassword(p,h){return bcrypt.compare(p,h)}
export async function createSession(user){
  const token=await new SignJWT({sub:user.id,role:user.role,email:user.email}).setProtectedHeader({alg:'HS256'}).setIssuedAt().setExpirationTime('7d').sign(secret);
  cookies().set('session',token,{httpOnly:true,sameSite:'lax',secure:process.env.NODE_ENV==='production',path:'/',maxAge:604800});
}
export async function getUser(){try{const token=cookies().get('session')?.value;if(!token)return null;const {payload}=await jwtVerify(token,secret);return db.user.findUnique({where:{id:payload.sub}})}catch{return null}}
export function clearSession(){cookies().set('session','',{httpOnly:true,expires:new Date(0),path:'/'})}
