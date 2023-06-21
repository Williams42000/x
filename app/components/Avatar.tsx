// Importe le module 'client' pour être utilisé dans l'application coté client 
"use client";

// Importe le composant 'Image' de la bibliothèque Next.js pour optimiser les images
import Image from "next/image";

interface AvatarProps {
    src: string | null | undefined;
};

// Crée un composant fonctionnel React nommé 'Avatar'
const Avatar: React.FC<AvatarProps> = ({
    src,
}) => {
    // Retourne le JSX du composant
    return (
      // Utilise le composant 'Image' de Next.js avec les propriétés suivantes  
      <Image
          className="rounded-full"
          height ="30"
          width="30"
          alt="Avatar"
          src={src || "/images/aa4.png"}
          />
    );
}

// Exporte le composant 'Avatar' pour pouvoir être utilisé dans d'autres fichiers
export default Avatar;