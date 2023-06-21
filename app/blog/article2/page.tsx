import Footer from '@/app/components/Footer';
import Article2 from './Article2';
import ClientOnly from '@/app/components/ClientOnly';

const PropertiesPage = async () => {
    

    return (
        <ClientOnly>
            <Article2/>
            <Footer />
        </ClientOnly>
    )
}

export default PropertiesPage;