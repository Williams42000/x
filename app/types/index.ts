// Importation du type User à partir de Prisma Client
import { Listing, Reservation, User } from "@prisma/client";


export type SafeListing = Omit<
    Listing,
    "createdAt"
> & {
    createdAt: string;
};

export type SafeReservation = Omit<
    Reservation,
    "createdAt" | "startDate" | "endDate"
> & {
    createdAt: string;
    startDate: string;
    endDate: string;
    listing: SafeListing;
};


// Déclaration du type SafeUser, qui est une modification du type User
export type SafeUser = Omit<
    User, // Base du type à modifier
    // Liste des champs à supprimer du type User
    "createdAt" | "updatedAt" | "emailVerified"
 > & {  // L'opérateur '&' est utilisé pour combiner deux types
    // Définition des nouveaux types pour les champs supprimés
    createdAt: string;
    updatedAt: string;
    emailVerified: string | null;
};

// Résumé :
// Dans ce code, on défini un nouveau type SafeUser à l'aide du type User fourni par Prisma Client.
// On utilise l'utilitaire de type Omit de TypeScript pour supprimer certains champs (createdAt, updatedAt, et emailVerified) du type User.
// Ensuite, vous ajoutez à nouveau ces champs avec des types modifiés (tous étant des chaînes de caractères, emailVerified pouvant également être null) en utilisant l'opérateur de combinaison de type '&'.
// Le but de ce code est généralement de convertir les instances de Date en chaînes de caractères pour une meilleure compatibilité avec JSON ou d'autres formats de données.