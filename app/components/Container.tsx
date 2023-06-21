//Voici le container qui va contenir tout le contenu de la page

'use client'; // Cela permet de ne pas avoir de conflit avec le serveur car utiliser par le client

interface ContainerProps {
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({
    children,
}) => {
    return (
        <div 
        className="
          max-w-[2520px]
          mx-auto
          xl:px-20
          md:px-10
          sm:px-2
          px-4
         "
        >
            {children}
         </div>
    )
};
export default Container;

// RESUMER:

// Ce code définit un composant Container en React qui permet de créer un conteneur pour le contenu de la page. 
// Ce composant gère la mise en page du contenu, y compris la largeur maximale, le centrage et les marges intérieures horizontales.

// Le composant Container utilise des classes utilitaires de Tailwind CSS pour gérer la mise en page du contenu. 
// Il définit la largeur maximale, centre horizontalement le conteneur, et applique des marges intérieures horizontales en fonction de la taille de l'écran. 
// Ensuite, il affiche les éléments enfants passés en tant que propriété children.

// NOTE:

// "use client" signifie que ce composant est destiné à être utilisé côté client

// Importe le type ReactNode depuis le module react
// import { ReactNode } from "react";

// // Définit les propriétés du composant Container
// interface ContainerProps {
//     children: React.ReactNode; // Les éléments enfants du composant
// }

// // Déclaration du composant Container en utilisant les propriétés définies ci-dessus
// const Container: React.FC<ContainerProps> = ({
//     children,
// }) => {
//     // Rendu du composant Container
//     return (
//         <div 
//         className="
//           max-w-[2520px] // Largeur maximale du conteneur
//           mx-auto // Centre horizontalement le conteneur
//           xl:px-20 // Padding horizontal pour les écrans extra larges (xl)
//           md:px-10 // Padding horizontal pour les écrans moyens (md)
//           sm:px-2 // Padding horizontal pour les écrans petits (sm)
//           px-4 // Padding horizontal pour les écrans par défaut
//          "
//         >
//             {children} // Affiche les éléments enfants du composant
//          </div>
//     )
// };

// // Exporte le composant Container pour être utilisé dans d'autres parties de l'application
// export default Container;



