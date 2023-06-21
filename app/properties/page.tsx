import EmptryState from '../components/EmptyState';
import ClientOnly from '../components/ClientOnly';

import getCurrentUser from '../actions/getCurrentsUser';
import PropertiesClient from './PropertiesClient';
import getListings from '../actions/getListings';
import Footer from '../components/Footer';

const PropertiesPage = async () => {
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

    const listings = await getListings({
        userId: currentUser.id,
    });

    if (listings.length === 0) {
        return (
            <ClientOnly>
                <EmptryState
                title="Pas de propriétés"
                subtitle="Vous n'avez pas encore de réservations"
                />
            </ClientOnly>
        )
    }

    return (
        <ClientOnly>
            <PropertiesClient
                listings={listings}
                currentUser={currentUser}
            />
            <Footer />
        </ClientOnly>
    )
}

export default PropertiesPage;