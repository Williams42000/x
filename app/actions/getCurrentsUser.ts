// Importation des modules nécessaires
import { getServerSession } from "next-auth/next"; // Module pour récupérer la session côté serveur
import { authOptions } from "@/pages/api/auth/[...nextauth]"; // Options d'authentification
import prisma from "@/app/libs/prismadb"; // Prisma ORM pour interagir avec la base de données

// Fonction pour obtenir la session de l'utilisateur
export async function getSession() {
    return await getServerSession(authOptions);
}

// Fonction principale pour récupérer l'utilisateur actuellement connecté
export default async function getCurrentUser() {
    try {
        const session = await getSession(); // Obtient la session de l'utilisateur

        // Vérifie si l'adresse e-mail de l'utilisateur est présente dans la session
        if (!session?.user?.email) {
            return null; // Retourne null si l'adresse e-mail n'est pas trouvée
        }

        // Recherche l'utilisateur correspondant dans la base de données
        const currentUser = await prisma.user.findUnique({
            where: {
                email: session.user.email as string, // Utilise l'adresse e-mail de la session
            },
        });

        // Vérifie si aucun utilisateur n'est trouvé
        if (!currentUser) {
            return null; // Retourne null si aucun utilisateur n'est trouvé
        }

        // Retourne un objet contenant les informations de l'utilisateur trouvé
        return {
            ...currentUser,
            createdAt: currentUser.createdAt.toISOString(), // Convertit la date de création en format ISO
            updatedAt: currentUser.updatedAt.toISOString(), // Convertit la date de mise à jour en format ISO
            emailVerified: currentUser.emailVerified?.toISOString() || null, // Convertit la date de vérification de l'e-mail en format ISO ou retourne null si non disponible
        };
    }
    catch (error:any) {
        return null; // Retourne null en cas d'erreur
    }
}
