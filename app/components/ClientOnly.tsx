'use client';

import { useState, useEffect } from "react";

interface ClientOnlyProps {
    children: React.ReactNode;
}

const ClientOnly:React.FC<ClientOnlyProps> = ({ 
    children
 }: any) => {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) return null;

    return children;
}

export default ClientOnly;

// RESUMER:

// Ce code définit un composant ClientOnly en React qui permet d'afficher ses éléments enfants uniquement côté client. 
// Ce composant est utile lorsque vous utilisez le rendu côté serveur (SSR) ou la génération statique (SSG) avec Next.js et que vous voulez vous assurer qu'un composant spécifique ne s'affiche que côté client.

// Le composant ClientOnly utilise un état hasMounted pour déterminer si le composant a été monté côté client. 
// Lorsque le composant est monté, il utilise l'effet useEffect pour mettre à jour l'état hasMounted. 
// Si le composant n'a pas encore été monté, il ne renvoie rien, ce qui empêche l'affichage des éléments enfants. 
// Une fois que le composant est monté côté client, les éléments enfants sont affichés.

// NOTE:

// // Importe les hooks useState et useEffect depuis le module react
// import { useState, useEffect } from "react";

// // Définit les propriétés du composant ClientOnly
// interface ClientOnlyProps {
//     children: React.ReactNode; // Les éléments enfants du composant
// }

// // Déclaration du composant ClientOnly en utilisant les propriétés définies ci-dessus
// const ClientOnly: React.FC<ClientOnlyProps> = ({
//     children,
// }: any) => {
//     // Utilise l'état pour déterminer si le composant a été monté côté client
//     const [hasMounted, setHasMounted] = useState(false);

//     // Utilise l'effet pour mettre à jour l'état lors du montage du composant côté client
//     useEffect(() => {
//         setHasMounted(true);
//     }, []);

//     // Si le composant n'a pas encore été monté côté client, ne renvoie rien
//     if (!hasMounted) return null;

//     // Sinon, renvoie les éléments enfants du composant
//     return children;
// }

// // Exporte le composant ClientOnly pour être utilisé dans d'autres parties de l'application
// export default ClientOnly;
