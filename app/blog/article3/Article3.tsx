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
      <section className="py-20 bg-black overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="relative max-w-xl mx-auto text-center mb-12">
            <img
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-96"
              src="boldui-assets/elements/ellipse.svg"
              alt=""
            />
            <ul className="relative flex items-center justify-center mb-10">
              <li className="flex items-center mr-3">
                <a
                  className="inline-block mr-3 text-xs text-gray-500 uppercase font-semibold"
                  href="/"
                >
                  Home
                </a>
                <svg
                  width={16}
                  height={10}
                  viewBox="0 0 16 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.01 6.18506H0L0 4.10173H12.01V0.976726L16 5.14339L12.01 9.31006V6.18506Z"
                    fill="#7E7E7E"
                  />
                </svg>
              </li>
              <li className="flex items-center mr-3">
                <a
                  className="inline-block mr-3 text-xs text-gray-500 uppercase font-semibold"
                  href="/blog"
                >
                  Blog
                </a>
                <svg
                  width={16}
                  height={10}
                  viewBox="0 0 16 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.01 6.18506H0L0 4.10173H12.01V0.976726L16 5.14339L12.01 9.31006V6.18506Z"
                    fill="#7E7E7E"
                  />
                </svg>
              </li>
              <li>
                <a
                  className="inline-block text-xs text-gray-500 uppercase font-semibold"
                  href="#"
                >
                  Article
                </a>
              </li>
            </ul>
            <h2 className="mb-4 text-3xl text-white uppercase font-heading">
            Trouver le Logement Idéal sur Airbnb : Les Meilleures Pratiques à Suivre
            </h2>
            <div className="flex items-center justify-center">
              <img
                className="h-24"
                src="boldui-assets/images/team6.png"
                alt=""
              />
              <div className="ml-4">
                <h3 className="mb-2 text-white font-heading">Williams Mk</h3>
                <p className="text-xs text-gray-500 uppercase font-semibold tracking-widest">
                  Publié le 12/05/2023
                </p>
              </div>
            </div>
          </div>
          <img
            className="w-full h-96 md:h-128 object-cover mb-12"
            src="/images/design19.png"
            alt=""
          />
          <div className="max-w-xl mx-auto">
            <p className="mb-8 text-lg text-gray-500">
            La recherche du logement parfait sur Airbnb peut parfois être déroutante avec tant d&apos;options disponibles. 
            Dans cet article, nous partagerons les meilleures pratiques pour vous aider à trouver le logement idéal qui répondra à vos besoins et dépassera vos attentes. 
            Suivez ces conseils avisés pour une expérience de réservation sans stress et pour trouver le logement parfait pour votre prochaine aventure.
            </p>
            <p className="text-lg text-gray-500">
              1. Définissez vos besoins et vos préférences : Avant de commencer
              votre recherche, prenez le temps de définir clairement vos besoins
              et vos préférences. Quel est votre budget ? Quelle est la taille
              idéale du logement ? Quels équipements et commodités sont
              essentiels pour vous ? En ayant ces critères en tête, vous pourrez
              affiner votre recherche et trouver le logement qui correspond le
              mieux à vos attentes.
              <br />
              <br />
              2. Utilisez les filtres de recherche : Airbnb propose une variété
              de filtres de recherche pour vous aider à spécifier vos critères.
              Utilisez-les judicieusement pour affiner les résultats en fonction
              de l&apos;emplacement, du type de logement, des équipements, des prix,
              etc. Ces filtres vous permettront de gagner du temps en vous
              présentant des options qui répondent à vos besoins spécifiques.
              <br />
              <br />
              3. Lisez attentivement les descriptions et les avis : Prenez le
              temps de lire attentivement les descriptions des logements qui
              vous intéressent. Vérifiez les détails sur les équipements,
              l&apos;emplacement, les règles de la maison, etc. N&apos;oubliez pas de
              consulter les avis des voyageurs précédents pour vous faire une
              idée de leur expérience. Ces avis constituent souvent une source
              précieuse d&apos;informations sur la qualité du logement et la
              fiabilité de l&apos;hôte.
              <br />
              <br />
              4. Posez des questions à l&apos;hôte : Si vous avez des doutes ou des
              questions supplémentaires concernant le logement, n&apos;hésitez pas à
              contacter l&apos;hôte. Posez des questions sur les aspects qui vous
              préoccupent et demandez des clarifications si nécessaire. Une
              bonne communication avec l&apos;hôte peut vous aider à prendre une
              décision éclairée et à éviter les surprises désagréables.
              <br />
              <br />
              5. Comparez les prix et les offres : Ne vous contentez pas du
              premier logement qui semble convenir à vos besoins. Prenez le
              temps de comparer les prix et les offres similaires dans la
              région. Vous pourriez trouver des logements similaires à des prix
              plus avantageux ou avec des offres spéciales. La comparaison vous
              permettra d&apos;obtenir le meilleur rapport qualité-prix et de
              maximiser votre expérience sur Airbnb.
              <br />
              <br />
              6. Réservez à l&apos;avance : Si vous trouvez le logement idéal qui
              correspond à tous vos critères, ne tardez pas à réserver. Les
              logements populaires sont souvent réservés rapidement, surtout
              pendant les périodes de forte demande. En réservant à l&apos;avance,
              vous vous assurez d&apos;obtenir le logement de votre
            </p>
          </div>
        </div>
      </section>
    </Container>
  );
};

// Export du composant pour pouvoir l'utiliser ailleurs dans l'application
export default Article2;
