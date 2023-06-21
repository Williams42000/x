"use client";

// Importation des bibliothèques et des composants nécessaires
import Container from "@/app/components/Container";

// Définition des propriétés du composant PropertiesClient
interface PropertiesClientProps {}

// Définition du composant PropertiesClient
const History: React.FC<PropertiesClientProps> = ({}) => {
  // Rendu du composant
  return (
    <Container>
      <section
        className="py-16 md:py-24 bg-white"
        style={{
          backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center top",
        }}
      >
        <div className="container px-4 mx-auto">
          <div className="md:max-w-2xl mx-auto mb-12 text-center">
            <h2 className="mb-4 text-3xl md:text-5xl leading-tight text-darkCoolGray-900 font-bold tracking-tighter">
              Notre histoire
            </h2>

            <div className="flex items-center justify-center text-left -mx-2">
              <div className="w-auto px-2"></div>
              <div className="w-auto px-2"></div>
            </div>
          </div>
        </div>
        <img
          className="w-full mb-10 mx-auto"
          src="images/design22.png"
          alt=""
        />
        <div className="container px-4 mx-auto">
          <div className="md:max-w-3xl mx-auto">
            <p className="mb-8 pb-10 text-lg md:text-xl font-medium text-coolGray-500 border-b border-coolGray-100">
              Notre entreprise de logement a été fondée avec une vision claire :
              offrir des expériences uniques et inoubliables à nos clients.
              Depuis notre création, nous nous efforçons de créer un
              environnement chaleureux et accueillant pour chaque voyageur. Nous
              croyons que le logement joue un rôle essentiel dans la création de
              souvenirs précieux et de connexions humaines.
            </p>
            <h3 className="mb-4 text-2xl md:text-3xl font-semibold text-coolGray-800">
                  Notre Vision
            </h3>
            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              Nos co-fondateurs, Williams MK, Béatrice TR, Hicham OLK, Saara BR,
              a une passion profonde pour les voyages et la découverte de
              nouvelles cultures. C&apos;est cette passion qui a inspiré la création
              de notre entreprise. John comprend l&apos;importance d&apos;un hébergement
              confortable et d&apos;une expérience authentique lors des voyages. Il a
              voulu offrir aux voyageurs du monde entier la possibilité de se
              sentir chez eux, peu importe où ils se trouvent.
            </p>
            <div className="mb-6 p-6 border-l-2 border-green-500">
              <p className="mb-4 text-xl md:text-2xl leading-tight font-medium text-coolGray-800">
                « Notre mission est de rendre chaque séjour inoubliable. Nous
                nous engageons à offrir des hébergements de qualité,
                soigneusement sélectionnés, et à fournir un service exceptionnel
                à nos clients. Nous croyons en la magie des voyages et nous
                voulons contribuer à créer des moments uniques et mémorables
                pour tous ceux qui choisissent de séjourner chez nous. »
              </p>
              <span className="text-base md:text-lg text-coolGray-400 font-medium">
                — Williams MK, Béatrice TR, Hicham OLK, Saara BR CEO &amp;
                Founder
              </span>
            </div>

            <div className="mb-4 max-w-max overflow-hidden rounded-md">
              <img src="images/design19.png" alt="" />
            </div>
            <p className="mb-8 text-base md:text-lg text-coolGray-400 font-medium">
              <span>Des logements comme dans vos reves</span>
            </p>
            <h3 className="mb-4 text-2xl md:text-3xl font-semibold text-coolGray-800">
              Notre engagement envers vous
            </h3>
            <p className="mb-14 text-base md:text-lg text-coolGray-500">
              Nous nous engageons à vous offrir une expérience de logement
              exceptionnelle. Nous sélectionnons soigneusement chaque
              hébergement pour garantir votre confort et votre satisfaction.
              Notre équipe est disponible pour répondre à vos questions et vous
              fournir un soutien 24 heures sur 24, 7 jours sur 7.
            </p>
            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              Nous comprenons l&apos;importance de vous offrir un environnement
              propice à la détente et à la tranquillité. C&apos;est pourquoi nous
              nous efforçons de créer des espaces accueillants, décorés avec
              goût et équipés de toutes les commodités nécessaires pour rendre
              votre séjour agréable.
            </p>

            <p className="mb-10 pb-10 text-base md:text-lg text-coolGray-500 border-b border-coolGray-100">
              <span>
                Notre objectif est de dépasser vos attentes et de vous offrir un
                service personnalisé. Nous sommes là pour vous aider à créer des
                souvenirs inoubliables et à vivre des moments magiques lors de
                votre séjour chez nous.
              </span>
              <span>
                Nous vous remercions de votre confiance et nous sommes
                impatients de vous accueillir dans notre établissement.
              </span>
            </p>
            <div className="flex items-center justify-center"></div>
          </div>
        </div>
      </section>
    </Container>
  );
};

// Export du composant pour pouvoir l'utiliser ailleurs dans l'application
export default History;
