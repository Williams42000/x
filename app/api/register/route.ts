// Pour envoyer, les données rentrez dans le formulaire dans la base de données Atlas MongoDB:

// Importe bcrypt pour le hachage des mots de passe.
import bcrypt from 'bcrypt';
// Importe la connexion à la base de données Prisma.
import prisma from '../../libs/prismadb';
// Importe NextResponse pour manipuler les réponses du serveur Next.
import { NextResponse } from 'next/server';

// Déclare la fonction POST asynchrone qui prend une requête en argument.
export async function POST(
    request: Request
) {
    // Extrait le corps de la requête sous forme de JSON.
    const body = await request.json();
    // Déstructure l'email, le nom et le mot de passe du corps de la requête.
    const { 
        email,
        name, 
        password 
    } = body;

    // Hache le mot de passe à l'aide de bcrypt avec un facteur de coût de 12.
    const hashedPassword = await bcrypt.hash(password, 12);

    // Crée un nouvel utilisateur dans la base de données Prisma avec les données fournies.
    const user = await prisma.user.create({
        data: {
            email,
            name,
            hashedPassword
        }
    });

    // Retourne la réponse JSON contenant les informations de l'utilisateur créé.
    return NextResponse.json(user);
}

