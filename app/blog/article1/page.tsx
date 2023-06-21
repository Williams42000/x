import Footer from '@/app/components/Footer';
import Article1 from './Article1';
import ClientOnly from '@/app/components/ClientOnly';

const PropertiesPage = async () => {
    

    return (
        <ClientOnly>
            <Article1/>
            <Footer />
        </ClientOnly>
    )
}

export default PropertiesPage;