import { PrismaClient } from "@prisma/client"; 

declare global { 
    var prisma: PrismaClient | undefined;
}

const client = globalThis.prisma || new PrismaClient(); 
if (process.env.NODE_ENV === "production") globalThis.prisma = client; 

export default client; 

// RESUMER:

// Ce code crée une instance de PrismaClient et l'exporte pour être utilisée dans votre application.
// L'utilisation d'un espace de noms global permet de réutiliser la même instance de PrismaClient à travers les différentes parties de votre application, 
// ce qui améliore les performances en évitant de créer de nouvelles connexions à la base de données pour chaque requête.

// Dans un environnement de production, l'instance de PrismaClient est stockée dans l'espace de noms global pour être réutilisée à travers les requêtes, 
// tandis que dans un environnement de développement, une nouvelle instance est créée pour chaque requête, ce qui facilite le débogage et le développement.

// En important et en utilisant l'instance de PrismaClient exportée par ce module,
// vous pouvez effectuer des opérations sur la base de données en utilisant le client Prisma dans votre application.


// NOTE:

// // Importe la classe PrismaClient depuis le module @prisma/client
// import { PrismaClient } from "@prisma/client";

// // Déclare un espace de noms global pour éviter de créer plusieurs instances de PrismaClient
// declare global {
//     var prisma: PrismaClient | undefined;
// }

// // Crée une nouvelle instance de PrismaClient si elle n'existe pas déjà dans l'espace de noms global
// const client = globalThis.prisma || new PrismaClient();

// // Si l'application est en environnement de production, assigne l'instance de PrismaClient
// // à l'espace de noms global pour réutiliser l'instance existante et éviter de créer
// // de nouvelles connexions à chaque requête
// if (process.env.NODE_ENV === "production") globalThis.prisma = client;

// // Exporte l'instance de PrismaClient pour être utilisée dans d'autres parties de l'application
// export default client;
