'use client';

// C'est l'interface qui permet de définir les propriétés de l'élément
// C'est le petit bonhomme avatar tout à droite
interface MenuItemProps {
    onClick: () => void;
    label: string;
}

// C'est la fonction qui permet de définir le composant
const MenuItem: React.FC<MenuItemProps> = ({
    onClick,
    label,
}) => {
    return (
        <div
         onClick={onClick}
         className="
          px-4
          py-3
          hover:bg-neutral-100 
          transition
          font-semibold
         "
        >
          {label}
        </div>
    );
}

export default MenuItem;