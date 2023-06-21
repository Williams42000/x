import prisma from "@/app/libs/prismadb"; // Importe le module Prisma pour interagir avec la base de données

interface IParams {
    listingId?: string;
}

// Fonction pour récupérer une liste par ID
export default async function getListingById(params: IParams) {
    try {
        const { listingId } = params; // Obtient l'ID de la liste à partir des paramètres

        // Recherche la liste correspondante dans la base de données
        const listing = await prisma.listing.findUnique({
            where: {
                id: listingId, // Utilise l'ID de la liste pour la recherche
            },
            include: {
                user: true, // Inclut également les informations de l'utilisateur lié à la liste
            },
        });

        // Vérifie si aucune liste n'est trouvée
        if (!listing) {
            return null; // Retourne null si aucune liste n'est trouvée
        }

        // Retourne un objet contenant les informations de la liste et de l'utilisateur
        return {
            ...listing,
            createdAt: listing.createdAt.toISOString(), // Convertit la date de création de la liste en format ISO
            user: {
                ...listing.user,
                createdAt: listing.user.createdAt.toISOString(), // Convertit la date de création de l'utilisateur en format ISO
                updatedAt: listing.user.updatedAt.toISOString(), // Convertit la date de mise à jour de l'utilisateur en format ISO
                emailVerified: listing.user.emailVerified?.toISOString() || null, // Convertit la date de vérification de l'e-mail de l'utilisateur en format ISO ou retourne null si non disponible
            },
        };
    } catch (error:any) {
        throw new Error(error); // Lance une erreur si une exception se produit
    }
}

