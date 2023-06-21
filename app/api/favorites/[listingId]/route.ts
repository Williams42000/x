// Importation des modules nécessaires
import { NextResponse } from 'next/server';
import getCurrentUser from '@/app/actions/getCurrentsUser';
import prisma from '@/app/libs/prismadb';


// Définition de l'interface pour le paramètre listingId
interface IParams {
    listingId?: string;
}

// Définition de la fonction POST
export async function POST(
    request: Request,
    {params}: { params: IParams} // Destructuration des params
    ) {
        // Obtenir l'utilisateur courant
        const currentUser = await getCurrentUser();

        // Si l'utilisateur courant n'est pas trouvé, renvoyer une erreur
        if (!currentUser) {
            return NextResponse.error();
        }

        // Destructurer listingId de params
        const { listingId } = params;
        
        // Vérification de la validité de listingId
        if (!listingId || typeof listingId !== 'string') {
            throw new Error(' Invalid ID '); // Lancer une exception en cas d'ID invalide
        }

        // Récupérer la liste des favoris de l'utilisateur courant (ou une liste vide si non définie)
        let favoriteIds = [...(currentUser.favoriteIds || [])];

        favoriteIds.push(listingId); 

         // Mise à jour de l'utilisateur dans la base de données à l'aide de prisma
         const user = await prisma.user.update({
            where: {
                id: currentUser.id // Utiliser l'ID de l'utilisateur courant pour la requête de mise à jour
            },
            data: {
                favoriteIds // Mise à jour de la liste des favoris
            }
        });

        // Renvoyer l'utilisateur mis à jour sous forme de réponse JSON
        return NextResponse.json(user);
    }


    // Définition de la fonction DELETE
export async function DELETE(
    request: Request,
    {params}: { params: IParams} // Destructuration des params
    ) {
        // Obtenir l'utilisateur courant
        const currentUser = await getCurrentUser();
        
        // Si l'utilisateur courant n'est pas trouvé, renvoyer une erreur
        if (!currentUser) {
            return NextResponse.error();
        }

        // Destructurer listingId de params
        const { listingId } = params;
        
        // Vérification de la validité de listingId
        if (!listingId || typeof listingId !== 'string') {
            throw new Error('Invalid ID '); // Lancer une exception en cas d'ID invalide
        }

        // Récupérer la liste des favoris de l'utilisateur courant (ou une liste vide si non définie)
        let favoriteIds = [...(currentUser.favoriteIds || [])];
    
        // Filtrer la liste des favoris pour supprimer le listingId fourni
        favoriteIds = favoriteIds.filter((id) => id !== listingId);
    
        // Mise à jour de l'utilisateur dans la base de données à l'aide de prisma
        const user = await prisma.user.update({
            where: {
                id: currentUser.id, // Utiliser l'ID de l'utilisateur courant pour la requête de mise à jour
            },
            data: {
                favoriteIds // Mise à jour de la liste des favoris
            }
        });
    
        // Renvoyer l'utilisateur mis à jour sous forme de réponse JSON
        return NextResponse.json(user);
    }

    //Resumer:

//Deux fonctions d'API serverless basées sur le framework Next.js. Ces fonctions interagissent avec une base de données à l'aide de l'ORM Prisma.

// Fonction POST:

// Cette fonction est destinée à ajouter une nouvelle liste (listing) aux favoris de l'utilisateur actuellement connecté.

// Au début, elle tente d'obtenir l'utilisateur courant avec la fonction getCurrentUser(). 
// Si cet utilisateur n'est pas trouvé, elle retourne une erreur NextResponse.

// Elle vérifie ensuite si un listingId a été fourni et si c'est bien une chaîne de caractères. 
// Si ce n'est pas le cas, elle lève une exception.

// Elle récupère ensuite la liste actuelle des IDs de favoris de l'utilisateur (s'ils existent) et ajoute le nouvel ID à cette liste.

// Ensuite, elle met à jour l'utilisateur dans la base de données à l'aide de Prisma en utilisant l'ID de l'utilisateur et en définissant les nouveaux favoriteIds.

// Finalement, elle retourne l'utilisateur mis à jour sous forme de réponse JSON.


// Fonction DELETE:

// Cette fonction est destinée à supprimer un listing des favoris de l'utilisateur actuellement connecté.

// Comme dans la fonction POST, elle commence par obtenir l'utilisateur courant et vérifie si un listingId a été fourni.

// Elle récupère la liste actuelle des IDs de favoris de l'utilisateur, puis elle filtre cette liste pour supprimer le listingId fourni.

// Elle met à jour l'utilisateur dans la base de données avec la nouvelle liste des favoriteIds.

// Enfin, elle retourne l'utilisateur mis à jour sous forme de réponse JSON.

// À noter qu'il y a une anomalie dans votre code. Dans la fonction POST, vous ne semblez pas ajouter le listingId à la liste des favoriteIds. 
// Vous pouvez corriger ce problème en ajoutant favoriteIds.push(listingId); 
// avant de faire la mise à jour de l'utilisateur dans la base de données.