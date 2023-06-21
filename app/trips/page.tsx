import EmptryState from '../components/EmptyState';
import ClientOnly from '../components/ClientOnly';

import getCurrentUser from '../actions/getCurrentsUser';
import getReservation from '../actions/getReservation';
import TripsClient from './TripsClient';

const TripsPage = async () => {
    const currentUser = await getCurrentUser();
    

    if (!currentUser) {
        return (
            <ClientOnly>
                <EmptryState
                title="Pas d'autorisations"
                subtitle="Vous devez être connecté pour voir vos réservations"
                />
            </ClientOnly>
        )
    }

    const reservations = await getReservation({
        userId: currentUser.id,
    });

    if (reservations.length === 0) {
        return (
            <ClientOnly>
                <EmptryState
                title="Pas de réservations"
                subtitle="Vous n'avez pas encore de réservations"
                />
            </ClientOnly>
        )
    }

    return (
        <ClientOnly>
            <TripsClient
                reservations={reservations}
                currentUser={currentUser}
            />
        </ClientOnly>
    )
}

export default TripsPage;