// Import des différents composants et fonctions nécessaires pour la page
import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";
import getCurrentUser from "../actions/getCurrentsUser";
import getReservation from "../actions/getReservation";
import ReservationsClient from "./ReservationsClient";
import Footer from "../components/Footer";

// Définition de la page de réservations
const ReservationsPage = async () => {
    // Récupération des informations de l'utilisateur courant
    const currentUser = await getCurrentUser();

    // Si aucun utilisateur n'est connecté, on affiche un message d'erreur
    if (!currentUser) {
      return (
        <ClientOnly> 
          <EmptyState
            title="Pas d'autorisations"
            subtitle="Vous devez être connecté"
          />
          <Footer />
        </ClientOnly>
      )
    }
  
    // Récupération des réservations de l'utilisateur
    const reservations = await getReservation({ authorId: currentUser.id });

    // Si l'utilisateur n'a pas de réservations, on affiche un message d'information
    if (reservations.length === 0) {
      return (
        <ClientOnly>
          <EmptyState
            title="Aucune réservation"
            subtitle="Il semble que vous n'ayez aucune réservation sur vos propriétés."
          />
          <Footer />
        </ClientOnly>
      );
    }
  
    // Si l'utilisateur a des réservations, on affiche la liste des réservations
    return (
      <ClientOnly>
        <ReservationsClient
          reservations={reservations}
          currentUser={currentUser}
        />
        <Footer />
      </ClientOnly>
    );
}

// Export de la page de réservations pour pouvoir l'utiliser ailleurs dans l'application
export default ReservationsPage;
