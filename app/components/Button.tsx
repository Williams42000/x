'use client';

import { ReactNode } from "react";
import { IconType } from "react-icons";

interface ButtonProps {
    label: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    outline?: boolean;
    small?: boolean;
    icon?: IconType;
    
}

const Button: React.FC<ButtonProps> = ({ 
    label,
    onClick,
    disabled,
    outline,
    small,
    icon: Icon,
    }: any) => {

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`
            relative
            disabled:opacity-70
            disabled:cursor-not-allowed
            rounded-lg
            hover:opacity-80
            transition
            w-full
            ${outline ?  'bg-white' : 'bg-gradient-to-r from-yellow-200 via-cyan-200 to-sky-500'}
            ${outline ?  'border-black' : 'bg-gradient-to-r from-yellow-200 via-cyan-200 to-sky-500'}
            ${outline ?  'text-black' : 'text-white'}
            ${small?  'py-1' : 'py-3'}
            ${small?  'text-sm' : 'text-md'}
            ${small?  'font-light' : 'font-semibold'}
            ${small?  'border-[1px]' : 'border-2'}
            `}
        >
            {Icon && (
                <Icon
                    size={24}
                    className="
                    absolute
                    left-4
                    top-3
                    "
                />
            )}
            {label}
        </button>
    );
}

export default Button;

// RESUMER:

// Ce code définit un composant Button en React qui peut être réutilisé dans votre application avec différentes propriétés pour personnaliser son apparence et son comportement.
// Le composant Button accepte des propriétés telles que label, onClick, disabled, outline, 
// small et icon pour personnaliser le bouton en fonction de vos besoins.


// NOTE:

// // Importe le type IconType depuis le module react-icons
// import { IconType } from "react-icons";

// // Définit les propriétés du composant Button
// interface ButtonProps {
//     label: string; // Le texte à afficher sur le bouton
//     onClick: (e: React.MouseEvent<HTMLButtonElement>) => void; // La fonction à appeler lors du clic sur le bouton
//     disabled?: boolean; // Si le bouton doit être désactivé (facultatif)
//     outline?: boolean; // Si le bouton doit être affiché avec un contour (facultatif)
//     small?: boolean; // Si le bouton doit être affiché en petite taille (facultatif)
//     icon?: IconType; // L'icône à afficher dans le bouton (facultatif)
// }

// // Déclaration du composant Button en utilisant les propriétés définies ci-dessus
// const Button: React.FC<ButtonProps> = ({
//     label,
//     onClick,
//     disabled,
//     outline,
//     small,
//     icon: Icon,
// }: any) => {
//     // Rendu du composant Button
//     return (
//         <button
//             onClick={onClick} // Gestion du clic sur le bouton
//             disabled={disabled} // Désactivation du bouton si nécessaire
//             className={`
//             relative
//             disabled:opacity-70
//             disabled:cursor-not-allowed
//             rounded-lg
//             hover:opacity-80
//             transition
//             w-full
//             ${outline ? 'bg-white' : 'bg-rose-500'} // Applique la couleur de fond en fonction de la propriété "outline"
//             ${outline ? 'border-black' : 'border-rose-500'} // Applique la couleur de bordure en fonction de la propriété "outline"
//             ${outline ? 'text-black' : 'text-white'} // Applique la couleur du texte en fonction de la propriété "outline"
//             ${small ? 'py-1' : 'py-3'} // Applique le padding vertical en fonction de la propriété "small"
//             ${small ? 'text-sm' : 'text-md'} // Applique la taille du texte en fonction de la propriété "small"
//             ${small ? 'font-light' : 'font-semibold'} // Applique l'épaisseur de la police en fonction de la propriété "small"
//             ${small ? 'border-[1px]' : 'border-2'} // Applique la largeur de la bordure en fonction de la propriété "small"
//             `}
//         >
//             {Icon && (
//                 <Icon
//                     size={24} // Définit la taille de l'icône
//                     className="
//                     absolute
//                     left-4
//                     top-3
//                     " // Positionne l'icône dans le bouton
//                 />
//             )}
//             {label} // Affiche le texte du bouton
//         </button>
//     );
// }

// // Exporte le composant Button pour être utilisé dans d'autres parties de l'application
// export default Button;
