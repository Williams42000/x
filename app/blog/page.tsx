import ClientOnly from '../components/ClientOnly';
import Blog from './Blog';
import Footer from '../components/Footer';

const PropertiesPage = async () => {
    

    return (
        <ClientOnly>
            <Blog/>
            <Footer />
        </ClientOnly>
    )
}

export default PropertiesPage;