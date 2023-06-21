import ClientOnly from '../components/ClientOnly';
import Contact from './Contact';
import Footer from '../components/Footer';

const PropertiesPage = async () => {
    

    return (
        <ClientOnly>
            <Contact/>
            <Footer />
        </ClientOnly>
    )
}

export default PropertiesPage;