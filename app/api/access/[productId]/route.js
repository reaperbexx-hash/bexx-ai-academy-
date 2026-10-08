import {db} from '../../../../lib/db';
import {getUser} from '../../../../lib/auth';
export async function GET(req,{params}){
  const u=await getUser();
  if(!u)return new Response('Unauthorized',{status:401});
  const a=await db.access.findUnique({where:{userId_productId:{userId:u.id,productId:params.productId}},include:{product:true}});
  if(!a||!a.product.fileUrl)return new Response('Access not available yet.',{status:404});
  return Response.redirect(new URL(a.product.fileUrl,req.url));
}
