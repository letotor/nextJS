// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  
  // res.status(200).json({ name: 'John Doe' })
  console.log(req);
  console.log("appel d'une fonctionne lambada api hello");

  res.status(200).json({
                        AUTH0_ISSUER_BASE_URL: `${process.env.AUTH0_ISSUER_BASE_URL}`,
                        AUTH0_SECRET: `${process.env.AUTH0_SECRET}`,
                        AUTH0_CLIENT_ID: `${process.env.AUTH0_CLIENT_ID}`,

                        AUTH0_CLIENT_SECRET: `${process.env.AUTH0_CLIENT_SECRET}`,
  });
 


   }
