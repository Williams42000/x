// Importation des modules nécessaires
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useCallback, useMemo } from 'react';
import { toast } from "react-hot-toast";

import { SafeUser } from '../types';
import useLoginModal from './useLoginModal';

// Définition de l'interface pour les paramètres d'entrée du hook personnalisé useFavorite
interface IUseFavorite {
    listingId: string;
    currentUser?: SafeUser | null;
}

// Définition du hook personnalisé useFavorite
const useFavorite = ({ 
    listingId, 
    currentUser 
}: IUseFavorite) => {
    const router = useRouter(); // Utilisation du hook useRouter pour accéder à l'objet router
    const loginModal = useLoginModal(); // Utilisation du hook personnalisé useLoginModal

    // Utilisation du hook useMemo pour déterminer si l'utilisateur a mis le listing en favoris
    const hasFavorited = useMemo(() => {
        const list = currentUser?.favoriteIds || []; // Récupération de la liste des favoris de l'utilisateur (ou une liste vide si non définie)

        return list.includes(listingId); // Retourne true si la liste des favoris contient le listingId, false sinon
    }, [currentUser, listingId]); // Les dépendances du hook useMemo sont currentUser et listingId

    // Définition de la fonction toggleFavorite à l'aide du hook useCallback
    const toggleFavorite = useCallback(async (
        e: React.MouseEvent<HTMLDivElement>
    ) => {
        e.stopPropagation(); // Arrête la propagation de l'événement pour éviter des comportements indésirables

        // Si l'utilisateur n'est pas connecté, ouvrir le modal de connexion
        if (!currentUser) {
            return loginModal.onOpen();
        }

        try {
            let request;

            // Si l'utilisateur a déjà mis le listing en favoris, préparer une requête DELETE
            if (hasFavorited) {
                request = () => axios.delete(`/api/favorites/${listingId}`);
            } else { // Sinon, préparer une requête POST
                request = () => axios.post(`/api/favorites/${listingId}`);
            }
          
            // Exécuter la requête
            await request();
            // Rafraîchir la page
            router.refresh();
            // Afficher un toast de succès
            toast.success('Favori mis à jour');
        } catch (error) {
            // En cas d'erreur, afficher un toast d'erreur
            toast.error("Quelque chose s'est mal passé");
        }
    },
     [ // Les dépendances du hook useCallback sont les suivantes :
        currentUser,
        listingId,
        hasFavorited,
        loginModal,
        router,  
     ]);

        // Le hook retourne un objet avec les deux valeurs suivantes :
        return {
            hasFavorited,
            toggleFavorite
        }   
};

// Exportation du hook
export default useFavorite;

// Resumer:
// Ce hook personnalisé useFavorite est conçu pour être utilisé dans les composants React afin de gérer l'ajout et la suppression de favoris pour l'utilisateur courant. 
// Il renvoie un booléen indiquant si l'utilisateur a mis le listing spécifié en favoris, ainsi qu'une fonction pour basculer cet état.