import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    providers: [
        CredentialsProvider({

          name: "Credentials",

          credentials: {
            email: { label: "Email", type: "text", placeholder: "email" },
            password: { label: "Password", type: "password", placeholder: 'password' }
          },

          async authorize(credentials, req) {

            const user = await fetch('https://ecommerce-api-k3g5.onrender.com/api/v1/auth/login', {
            method: 'POST',
            body: JSON.stringify({
                email: credentials?.email,
                password: credentials?.password
            }),
            headers: {
                'Content-Type': 'application/json',
            }
            }).then(res => {
              if(res.ok){
                return res.json();
              }
            });       
      
            if (user) {           
              return user
            } else {              
              return null
            }
          }
        })
      ],
      callbacks:{
        async jwt ({token,user}){
          return {...token,...user}
        },
        async session({session,token,user}) {
          session.user = token; 
          return session;
        }
      },
      pages: {
        signIn: '/login'
      },
      secret: process.env.NEXTAUTH_SECRET
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }