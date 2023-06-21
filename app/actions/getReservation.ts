import prisma from "@/app/libs/prismadb"; // Importe le module Prisma pour interagir avec la base de données

interface IParams {
  listingId?: string;
  userId?: string;
  authorId?: string;
}

// Fonction pour récupérer les réservations
export default async function getReservations(params: IParams) {
  try {
    const { listingId, userId, authorId } = params; // Obtient les paramètres de recherche

    const query: any = {}; // Déclare un objet vide pour la requête de recherche

    // Ajoute les conditions de recherche à l'objet de requête
    if (listingId) {
      query.listingId = listingId;
    }

    if (userId) {
      query.userId = userId;
    }

    if (authorId) {
      query.listing = { userId: authorId };
    }

    // Effectue la recherche des réservations dans la base de données
    const reservations = await prisma.reservation.findMany({
      where: query,
      include: {
        listing: true, // Inclut également les informations de la liste associée à chaque réservation
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    // Transforme les dates des réservations et de la liste en format ISO
    const safeReservations = reservations.map((reservation) => ({
      ...reservation,
      createdAt: reservation.createdAt.toISOString(),
      startDate: reservation.startDate.toISOString(),
      endDate: reservation.endDate.toISOString(),
      listing: {
        ...reservation.listing,
        createdAt: reservation.listing.createdAt.toISOString(),
      },
    }));

    return safeReservations; // Retourne les réservations sécurisées avec les dates en format ISO
  } catch (error: any) {
    throw new Error(error); // Lance une erreur si une exception se produit
  }
}
