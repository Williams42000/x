'use client';

interface HeadingProps {
   title: string;
   subtitle?: string;
   center?: boolean;
}

const Heading: React.FC<HeadingProps> = ({
    title,
    subtitle,
    center,
}) => {
    return (
        <div className={center ? 'text-center' : 'text-start'}>
            <div className="text-2xl font-bold">
                {title}
            </div>
            <div className="font-light text-black mt-2" >
                {subtitle}
            </div>
            
        </div>
    );
}

export default Heading

// RESEMER:

// Ce code définit un composant Heading en React qui permet d'afficher un titre et un sous-titre.
// Ce composant prend en charge la mise en page du titre et du sous-titre, y compris la taille de la police, 
// la graisse de la police et le centrage du texte.

// Le composant Heading utilise des classes utilitaires de Tailwind CSS pour gérer la mise en page et le style du texte. 
// Il définit la taille de la police, la graisse de la police et la couleur du texte pour le titre et le sous-titre. 
// Ensuite, il utilise la propriété center pour déterminer si le texte doit être centré ou aligné à gauche.

// NOTE:

// "use client" signifie que ce composant est destiné à être utilisé côté client

// Définit les propriétés du composant Heading
// interface HeadingProps {
//     title: string; // Le titre principal
//     subtitle?: string; // Le sous-titre, optionnel
//     center?: boolean; // Un booléen pour centrer le texte, optionnel
//  }
 
//  // Déclaration du composant Heading en utilisant les propriétés définies ci-dessus
//  const Heading: React.FC<HeadingProps> = ({
//      title,
//      subtitle,
//      center,
//  }) => {
//      // Rendu du composant Heading
//      return (
//          <div className={center ? 'text-center' : 'text-start'}>
//              // Affiche le titre avec une taille de police de 2xl et une graisse de police en gras
//              <div className="text-2xl font-bold">
//                  {title}
//              </div>
//              // Affiche le sous-titre avec une graisse de police légère et une couleur de texte neutre, avec une marge supérieure de mt-2
//              <div className="font-light text-neutral-500 mt-2" >
//                  {subtitle}
//              </div>
//          </div>
//      );
//  }
 
//  // Exporte le composant Heading pour être utilisé dans d'autres parties de l'application
//  export default Heading;
 