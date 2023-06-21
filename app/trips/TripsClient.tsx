"use client"

// Importation des bibliothèques et des composants nécessaires
import { toast } from "react-hot-toast";
import axios from "axios";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { SafeReservation, SafeUser } from "@/app/types";
import Heading from "@/app/components/Heading";
import Container from "@/app/components/Container";
import ListingCard from "@/app/components/listings/ListingCard";

// Définition des propriétés du composant TripsClient
interface TripsClientProps {
  reservations: SafeReservation[],
  currentUser?: SafeUser | null,
}

// Définition du composant TripsClient
const TripsClient: React.FC<TripsClientProps> = ({
  reservations,
  currentUser
}) => {
  // Utilisation du hook useRouter pour accéder à l'objet de navigation
  const router = useRouter();

  // Utilisation du hook useState pour gérer l'état de l'ID de la réservation en cours de suppression
  const [deletingId, setDeletingId] = useState('');

  // Fonction pour annuler une réservation. Cette fonction est mise en cache avec useCallback
  const onCancel = useCallback((id: string) => {
    // Définir l'ID de la réservation à annuler
    setDeletingId(id);

    // Envoyer une requête DELETE à l'API pour annuler la réservation
    axios.delete(`/api/reservations/${id}`)
    .then(() => {
      // Si la requête est réussie, afficher une notification de succès et rafraîchir la page
      toast.success('Reservation annulée');
      router.refresh();
    })
    .catch((error) => {
      // Si la requête échoue, afficher une notification d'erreur avec le message d'erreur provenant de la réponse de l'API
      toast.error(error?.response?.data?.error)
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
        title="Mes réservations"
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
            actionLabel="Annuler la réservation"
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
  );
}
 
// Export du composant pour pouvoir l'utiliser ailleurs dans l'application
export default TripsClient;
