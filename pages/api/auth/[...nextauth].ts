import { PrismaAdapter } from "@next-auth/prisma-adapter"; //Importe l'adaptateur Prisma pour NextAuth.
import NextAuth, { AuthOptions } from "next-auth"; //Importe NextAuth et AuthOptions.
import  GithubProvider  from "next-auth/providers/github"; //Importe le fournisseur d'authentification Github
import GoogleProvider from "next-auth/providers/google"; //Importe le fournisseur d'authentification Google
import CredentialsProvider from "next-auth/providers/credentials"; //Importe le fournisseur d'authentification Credentials
import bcrypt from "bcrypt"; //Importe bcrypt pour comparer les mots de passe cryptés.

import prisma from "@/app/libs/prismadb"; //Importe la connexion à la base de données Prisma.


export const authOptions: AuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: "email", type: "text" },
                password: { label: "password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error("Les identifiants sont manquants");
                }

                const user = await prisma.user.findUnique({
                    where:{
                        email: credentials.email
                    }
                });

                if (!user || !user?.hashedPassword) {
                    throw new Error("Le compte n'existe pas");
                }
                console.log(user.hashedPassword);
                console.log(credentials.password);

                const isCorrectPassword = await bcrypt.compare(
                    credentials.password,
                    user.hashedPassword
                );

                if (!isCorrectPassword) {
                    throw new Error("Le mot de passe est incorrect");
                }

                return user;
            },
        }),
    ],

    pages: {
        signIn: "/",
    },
    debug: process.env.NODE_ENV === "development",
    session: {
        strategy: "jwt"
    },
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
    async jwt({ token, user }) {      
        return ({...token,...user });
    },
    session({ session, token, user }) 
    {
        if(token && session.user){
        session.user = token;
        }
        return session ;
    }
  }
}

export default NextAuth(authOptions);


// NOTE:

// 10-28. Définit les options d'authentification :
// - adapter: Utilise l'adaptateur Prisma pour stocker les sessions et les comptes d'utilisateurs.
// - providers: Spécifie les fournisseurs d'authentification, y compris Github, Google et les identifiants.
// - pages: Personnalise la page de connexion.
// - debug: Active le mode debug en fonction de l'environnement de développement.
// - session: Définit la stratégie de session pour utiliser JWT.
// - secret: Utilise une clé secrète pour les sessions JWT.

// Exporte les options d'authentification par défaut pour NextAuth.
// En résumé, ce fichier configure NextAuth pour utiliser l'adaptateur Prisma et les fournisseurs d'authentification Github, 
// Google et par identifiants. Il définit également une fonction d'autorisation personnalisée pour le fournisseur d'identifiants, 
// qui vérifie les identifiants de l'utilisateur et les compare à ceux stockés dans la base de données. 
// Les options d'authentification sont ensuite exportées et utilisées par défaut pour NextAuth.