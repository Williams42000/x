import ClientOnly from '../components/ClientOnly';
import Client from './client';
import Footer from '../components/Footer';

const PropertiesPage = async () => {
    

    return (
        <ClientOnly>
            <Client/>
            <Footer />
        </ClientOnly>
    )
}

export default PropertiesPage;