"use client"

// Importation des bibliothèques, des composants et des types nécessaires
import { toast } from "react-hot-toast";
import axios from "axios";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { SafeReservation, SafeUser } from "@/app/types";
import Heading from "@/app/components/Heading";
import Container from "@/app/components/Container";
import ListingCard from "@/app/components/listings/ListingCard";

// Définition des propriétés de composant ReservationsClient
interface ReservationsClientProps {
  reservations: SafeReservation[],
  currentUser?: SafeUser | null,
}

// Définition du composant ReservationsClient
const ReservationsClient: React.FC<ReservationsClientProps> = ({
  reservations,
  currentUser
}) => {
  // Utilisation du hook useRouter pour accéder à l'objet de navigation
  const router = useRouter();

  // Utilisation du hook useState pour gérer l'état de l'ID de la réservation en cours de suppression
  const [deletingId, setDeletingId] = useState('');

  // Fonction pour annuler une réservation. Cette fonction est mise en cache avec useCallback
  const onCancel = useCallback((id: string) => {
    // Définir l'ID de la réservation à supprimer
    setDeletingId(id);

    // Envoyer une requête DELETE à l'API pour annuler la réservation
    axios.delete(`/api/reservations/${id}`)
    .then(() => {
      // Si la requête est réussie, afficher une notification de succès et rafraîchir la page
      toast.success('Reservation annulée');
      router.refresh();
    })
    .catch(() => {
      // Si la requête échoue, afficher une notification d'erreur
      toast.error('Something went wrong.')
    })
    .finally(() => {
      // Quoi qu'il arrive, réinitialiser l'ID de suppression à la fin
      setDeletingId('');
    })
  }, [router]);

  // Rendu du composant
  return (
    <Container>
      <Heading
        title="Réservations des clients"
        subtitle="Mes réservations en cours"
      />
      <div 
        className="
          mt-10
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4
          xl:grid-cols-5
          2xl:grid-cols-6
          gap-8
        "
      >
        {/* Rendu des cartes de listing pour chaque réservation */}
        {reservations.map((reservation: any) => (
          <ListingCard
            key={reservation.id}
            data={reservation.listing}
            reservation={reservation}
            actionId={reservation.id}
            onAction={onCancel}
            disabled={deletingId === reservation.id}
            actionLabel="Annulation de la réservation du client"
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
  );
}

// Export du composant pour pouvoir l'utiliser ailleurs dans l'application
export default ReservationsClient;
