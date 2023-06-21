import ClientOnly from '../components/ClientOnly';
import History from './History';
import Footer from '../components/Footer';

const PropertiesPage = async () => {
    

    return (
        <ClientOnly>
            <History/>
            <Footer />
        </ClientOnly>
    )
}

export default PropertiesPage;