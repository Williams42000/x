import Footer from '@/app/components/Footer';
import Article3 from './Article3';
import ClientOnly from '@/app/components/ClientOnly';

const PropertiesPage = async () => {
    

    return (
        <ClientOnly>
            <Article3/>
            <Footer />
        </ClientOnly>
    )
}

export default PropertiesPage;