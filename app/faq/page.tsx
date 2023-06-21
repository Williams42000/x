import ClientOnly from '../components/ClientOnly';
import Faq from './Faq';
import Footer from '../components/Footer';

const PropertiesPage = async () => {
    

    return (
        <ClientOnly>
            <Faq/>
            <Footer />
        </ClientOnly>
    )
}

export default PropertiesPage;