import { NextResponse } from 'next/server'; // Importe le module NextResponse pour gérer les réponses de l'API

import prisma from '@/app/libs/prismadb'; // Importe le module Prisma pour interagir avec la base de données
import getCurrentUser from '@/app/actions/getCurrentsUser'; // Importe la fonction pour obtenir l'utilisateur actuel

// Fonction pour gérer la requête POST
export async function POST(request: Request) {
    const currentUser = await getCurrentUser(); // Obtient l'utilisateur actuel

    if (!currentUser) {
        return NextResponse.error(); // Retourne une erreur si aucun utilisateur n'est trouvé
    }

    const body = await request.json(); // Obtient les données du corps de la requête JSON
    const {
        title,
        description,
        imageSrc,
        category,
        roomCount,
        bathroomCount,
        guestCount,
        location,
        price,
    } = body; // Extrait les données du corps de la requête

    // Vérifie si toutes les propriétés du corps de la requête ont une valeur
    Object.keys(body).forEach((value: any) => {
        if (!body[value]) {
            NextResponse.error(); // Retourne une erreur si une propriété n'a pas de valeur
        }
    });

    // Crée une nouvelle annonce dans la base de données
    const listing = await prisma.listing.create({
        data: {
            title,
            description,
            imageSrc,
            category,
            roomCount,
            bathroomCount,
            guestCount,
            locationValue: location.value,
            price: parseInt(price, 10),
            userId: currentUser.id,
        },
    });

    return NextResponse.json(listing); // Retourne la nouvelle annonce en format JSON
}
