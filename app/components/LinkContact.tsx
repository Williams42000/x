'use client';

// C'est l'interface qui permet de définir les propriétés de l'élément
// C'est le petit bonhomme avatar tout à droite
interface LinkContactProps {
    onClick: () => void;
    label: string;
    email: string;
    labell: string;
}

// C'est la fonction qui permet de définir le composant
const LinkContact: React.FC<LinkContactProps> = ({
    onClick,
    label,
    email,
    labell
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
          {email}
          {labell}
        </div>
    );
}

export default LinkContact;