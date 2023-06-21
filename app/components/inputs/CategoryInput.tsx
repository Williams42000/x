'use client';

import { IconType } from "react-icons";

// Définition de l'interface pour les props du composant.
// Il prend une icône, un label, une valeur booléenne pour indiquer si la catégorie est sélectionnée et une fonction à appeler lorsqu'on clique sur la catégorie.
interface CategoryInputProps {
    label: string;
    icon: IconType;
    selected?: boolean;
    color?: string;
    onClick: (value: string) => void;
}

// Définition du composant `CategoryInput`.
// Il affiche une icône, un label et modifie son style en fonction de la prop `selected`.
// Lorsqu'on clique sur le composant, il appelle la fonction `onClick` avec le label comme argument.
const CategoryInput: React.FC<CategoryInputProps> = ({
    label,
    icon: Icon,
    color,
    selected,
    onClick,

}) => {
    return (
        <div
            onClick={() => onClick(label)}
            className={`
            rounded-xl
            border-2
            p-4
            flex
            flex-col
            gap-3
            hover:border-black
            transition
            cursor-pointer
            ${selected ? "border-black" : "border-neutral-200"}
            `}
        >
            <Icon size={30} color={color} />
            <div className="font-semibold">
                {label}
            </div>
            </div>
    );
};

export default CategoryInput;

// RESuMER:
// En résumé, ce composant affiche une catégorie d'éléments avec une icône et un label. Lorsqu'il est sélectionné, il change son style pour le montrer. 
// Lorsqu'on clique dessus, il appelle une fonction fournie par le parent avec le label de la catégorie comme argument.