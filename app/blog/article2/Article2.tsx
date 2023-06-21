"use client";

// Importation des bibliothèques et des composants nécessaires
import Container from "@/app/components/Container";

// Définition des propriétés du composant PropertiesClient
interface PropertiesClientProps {}

// Définition du composant PropertiesClient
const Article2: React.FC<PropertiesClientProps> = ({}) => {
  // Rendu du composant
  return (
    <Container>
      <section className='py-20 bg-black overflow-hidden'>
        <div className='container mx-auto px-4'>
          <div className='relative max-w-xl mx-auto text-center mb-12'>
            <img
              className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-96'
              src='boldui-assets/elements/ellipse.svg'
              alt=''
            />
            <ul className='relative flex items-center justify-center mb-10'>
              <li className='flex items-center mr-3'>
                <a
                  className='inline-block mr-3 text-xs text-gray-500 uppercase font-semibold'
                  href='/'
                >
                  Home
                </a>
                <svg
                  width={16}
                  height={10}
                  viewBox='0 0 16 10'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M12.01 6.18506H0L0 4.10173H12.01V0.976726L16 5.14339L12.01 9.31006V6.18506Z'
                    fill='#7E7E7E'
                  />
                </svg>
              </li>
              <li className='flex items-center mr-3'>
                <a
                  className='inline-block mr-3 text-xs text-gray-500 uppercase font-semibold'
                  href='/blog'
                >
                  Blog
                </a>
                <svg
                  width={16}
                  height={10}
                  viewBox='0 0 16 10'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M12.01 6.18506H0L0 4.10173H12.01V0.976726L16 5.14339L12.01 9.31006V6.18506Z'
                    fill='#7E7E7E'
                  />
                </svg>
              </li>
              <li>
                <a
                  className='inline-block text-xs text-gray-500 uppercase font-semibold'
                  href='#'
                >
                  Article
                </a>
              </li>
            </ul>
            <h2 className='mb-4 text-3xl text-white uppercase font-heading'>
              Les 5 Secrets des meilleurs hosts de Casas : Devenez un Hôte Exceptionnel
            </h2>
            <div className='flex items-center justify-center'>
              <img
                className='h-24'
                src='boldui-assets/images/team6.png'
                alt=''
              />
              <div className='ml-4'>
                <h3 className='mb-2 text-white font-heading'>Williams Mk</h3>
                <p className='text-xs text-gray-500 uppercase font-semibold tracking-widest'>
                  Publié le 12/05/2023
                </p>
              </div>
            </div>
          </div>
          <img
            className='w-full h-96 md:h-128 object-cover mb-12'
            src='/images/design19.png'
            alt=''
          />
          <div className='max-w-xl mx-auto'>
            <p className='mb-8 text-lg text-gray-500'>
            Être un hôte Casas exceptionnel demande un savoir-faire particulier. 
            Dans cet article, nous vous dévoilerons les cinq secrets des Superhosts, 
            ces hôtes qui reçoivent des éloges de la part de leurs invités et connaissent un grand succès sur la plateforme. 
            Découvrez ces astuces précieuses pour offrir à vos invités une expérience inoubliable et obtenir des évaluations cinq étoiles.
            </p>
            <p className='text-lg text-gray-500'>
              1. Soignez votre communication : 
              La clé pour être un hôte exceptionnel est une communication claire, rapide et amicale. 
              Répondez rapidement aux demandes et aux questions des voyageurs, soyez disponible pour les aider avant et pendant leur séjour, 
              et assurez-vous de fournir toutes les informations nécessaires pour rendre leur expérience agréable et sans souci.
              <br/>
              <br/>
              2. Créez une atmosphère accueillante : Faites en sorte que vos invités se sentent comme chez eux dès leur arrivée. 
              Préparez un espace propre et bien rangé, fournissez des draps et des serviettes de qualité, 
              et ajoutez des petites touches supplémentaires comme des fleurs fraîches, 
              des collations ou des recommandations locales pour rendre leur séjour encore plus spécial.
              <br/>
              <br/>
              3. Offrez une expérience unique : Démarquez-vous en proposant une expérience unique à vos invités. 
              Que ce soit en offrant des équipements spéciaux tels qu&apos;un jacuzzi ou une terrasse panoramique, 
              en proposant des visites guidées ou des ateliers locaux, ou en partageant vos conseils et recommandations personnalisés, 
              cherchez des moyens d&apos;offrir une valeur ajoutée et de créer des souvenirs durables.
              <br/>
              <br/>
              4. Soyez réactif et attentif : 
              Veillez à répondre rapidement aux demandes et aux préoccupations de vos invités. 
              En étant attentif à leurs besoins et en résolvant les problèmes rapidement et efficacement, 
              vous créerez une expérience positive et vous obtiendrez des évaluations élogieuses. 
              N&apos;oubliez pas de demander régulièrement des retours d&apos;expérience pour améliorer continuellement votre offre.
              <br/>
              <br/>
              5. Cultivez des évaluations positives :
               Les évaluations et les commentaires positifs des invités sont essentiels pour réussir en tant qu&apos;hôte Casas. 
               Assurez-vous de fournir une expérience exceptionnelle à chaque invité et encouragez-les à laisser des évaluations honnêtes après leur séjour. 
               Des évaluations positives renforceront votre réputation en ligne et attireront davantage de voyageurs vers votre annonce.
              
            </p>
          </div>
        </div>
      </section>
    </Container>
  );
};

// Export du composant pour pouvoir l'utiliser ailleurs dans l'application
export default Article2;
