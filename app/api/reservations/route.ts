// Importation des modules nécessaires pour la fonction.
import { NextResponse } from 'next/server';
import prisma from '@/app/libs/prismadb';
import getCurrentUser from '@/app/actions/getCurrentsUser';

// Définition de la fonction POST qui sera appelée lorsqu'une requête HTTP POST sera reçue.
export async function POST (
    request: Request
) {
    // Obtenir l'utilisateur courant
    const currentUser =await getCurrentUser();

    // Si l'utilisateur courant n'est pas trouvé, renvoyer une erreur
    if (!currentUser) {
        return NextResponse.error();
    }

    // Lire le corps de la requête et le convertir en objet JSON
    const body = await request.json();

    // Extraire les données nécessaires du corps de la requête
    const {
        listingId,
        startDate,
        endDate,
        totalPrice,
    } = body;

    // Vérifier que toutes les données nécessaires sont présentes
    if (!listingId || !startDate || !endDate || !totalPrice) {
        return NextResponse.error(); // Si une donnée est manquante, renvoyer une erreur
    }

    // Mettre à jour la liste correspondante dans la base de données avec une nouvelle réservation
    const listingAndReservation = await prisma.listing.update({
        where: {
            id: listingId // Utiliser l'ID de la liste pour la requête de mise à jour
        },
        data: {
            reservations: {
                create: { // Créer une nouvelle réservation
                    userId: currentUser.id, // Associer la réservation à l'utilisateur courant
                    startDate, // Date de début de la réservation
                    endDate, // Date de fin de la réservation
                    totalPrice, // Prix total de la réservation
                },
            },
        },
    });

    // Renvoyer la liste mise à jour avec la nouvelle réservation sous forme de réponse JSON
    return NextResponse.json(listingAndReservation);
}
