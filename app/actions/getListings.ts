import prisma from "@/app/libs/prismadb"; // Importe le module Prisma pour interagir avec la base de données

export interface IListingsParams {
  userId?: string;
  guestCount?: number;
  roomCount?: number;
  bathroomCount?: number;
  startDate?: string;
  endDate?: string;
  locationValue?: string;
  category?: string;
}

// Fonction pour récupérer les annonces
export default async function getListings(params: IListingsParams) {
  try {
    const {
      userId,
      roomCount, 
      guestCount, 
      bathroomCount, 
      locationValue,
      startDate,
      endDate,
      category,
    } = params; // Obtient les paramètres de recherche

    let query: any = {}; // Déclare un objet vide pour la requête de recherche

    // Ajoute les conditions de recherche à l'objet de requête
    if (userId) {
      query.userId = userId;
    }

    if (category) {
      query.category = category;
    }

    if (roomCount) {
      query.roomCount = {
        gte: +roomCount
      };
    }

    if (guestCount) {
      query.guestCount = {
        gte: +guestCount
      };
    }

    if (bathroomCount) {
      query.bathroomCount = {
        gte: +bathroomCount
      };
    }

    if (locationValue) {
      query.locationValue = locationValue;
    }

    if (startDate && endDate) {
      query.NOT = {
        reservations: {
          some: {
            OR: [
              {
                endDate: { gte: startDate },
                startDate: { lte: startDate }
              },
              {
                startDate: { lte: endDate },
                endDate: { gte: endDate }
              }
            ]
          }
        }
      };
    }

    // Effectue la recherche des annonces dans la base de données
    const listings = await prisma.listing.findMany({
      where: query,
      orderBy: {
        createdAt: 'desc'
      }
    });

    // Transforme les dates de création des annonces en format ISO
    const safeListings = listings.map((listing) => ({
      ...listing,
      createdAt: listing.createdAt.toISOString(),
    }));

    return safeListings; // Retourne les annonces sécurisées avec les dates de création en format ISO
  } catch (error: any) {
    throw new Error(error); // Lance une erreur si une exception se produit
  }
}


// Résumé:
// Cette fonction permet d'obtenir tous les listings de votre base de données pour 
// un affichage ultérieur sur une page ou un composant de votre application.
// Les listings sont récupérés dans l'ordre décroissant de leur date de création, 
// ce qui signifie que les listings les plus récemment créés apparaîtront en premier.