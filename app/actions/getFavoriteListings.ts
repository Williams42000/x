import prisma from "@/app/libs/prismadb"; // Importe le module Prisma pour interagir avec la base de données
import getCurrentUser from "./getCurrentsUser"; // Importe la fonction getCurrentUser depuis le fichier local

// Fonction principale pour récupérer la liste des favoris
export default async function getFavoriteListings() {
    try {
        const currentUser = await getCurrentUser(); // Obtient l'utilisateur actuellement connecté

        // Vérifie si aucun utilisateur n'est trouvé
        if (!currentUser) {
            return []; // Retourne un tableau vide si aucun utilisateur n'est trouvé
        }

        // Recherche les listes de favoris dans la base de données
        const favorites = await prisma.listing.findMany({
            where: {
                id: {
                    in: [...(currentUser.favoriteIds || [])], // Filtre les favoris par les IDs de favoris de l'utilisateur actuel
                },
            },
        });

        // Transforme les dates de création des favoris en format ISO
        const safeFavorites = favorites.map((favorite) => ({
            ...favorite,
            createdAt: favorite.createdAt.toISOString(),
        }));

        return safeFavorites; // Retourne les favoris sécurisés avec les dates de création en format ISO
    } catch (error:any) {
        throw new Error(error); // Lance une erreur si une exception se produit
    }
}
