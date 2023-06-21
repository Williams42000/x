// Importation des modules nécessaires pour la fonction.
import { NextResponse } from "next/server";
import getCurrentUser from "@/app/actions/getCurrentsUser";
import prisma from "@/app/libs/prismadb";

// Définition de l'interface pour le paramètre reservationId
interface IParams {
  reservationId?: string;
}

// Définition de la fonction DELETE qui sera appelée lorsqu'une requête HTTP DELETE sera reçue.
export async function DELETE(
  request: Request, 
  { params }: { params: IParams } // Destructuration des params
) {
  // Obtenir l'utilisateur courant
  const currentUser = await getCurrentUser();

  // Si l'utilisateur courant n'est pas trouvé, renvoyer une erreur
  if (!currentUser) {
    return NextResponse.error();
  }

  // Destructurer reservationId de params
  const { reservationId } = params;

  // Vérification de la validité de reservationId
  if (!reservationId || typeof reservationId !== 'string') {
    throw new Error('Invalid ID'); // Lancer une exception en cas d'ID invalide
  }

  // Supprimer la réservation correspondante à l'ID donné si l'utilisateur courant est l'utilisateur qui a fait la réservation 
  // ou si l'utilisateur courant est l'utilisateur qui possède la liste associée à la réservation.
  const reservation = await prisma.reservation.deleteMany({
    where: {
      id: reservationId,
      OR: [
        { userId: currentUser.id },
        { listing: { userId: currentUser.id } }
      ]
    }
  });

  // Renvoyer le résultat de l'opération de suppression sous forme de réponse JSON
  return NextResponse.json(reservation);
}
