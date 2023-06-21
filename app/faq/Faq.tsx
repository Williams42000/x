"use client";

// Importation des bibliothèques et des composants nécessaires
import Container from "@/app/components/Container";
import ButtonA from "./button/ButtonA";
import ButtonB from "./button/ButtonB";
import ButtonC from "./button/ButtonC";
import ButtonD from "./button/ButtonD";
import ButtonE from "./button/ButtonE";

// Définition des propriétés du composant PropertiesClient
interface PropertiesClientProps {}

// Définition du composant PropertiesClient
const History: React.FC<PropertiesClientProps> = ({}) => {
  // Rendu du composant
  return (
    <Container>
      <section className="py-24 lg:py-32 bg-white overflow-hidden">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap -m-8">
            <div className="w-full md:w-1/2 p-8">
              <span
                className="inline-block max-w-max mb-6 px-3 py-1.5 text-sm text-white uppercase tracking-tight font-semibold bg-gray-600 rounded-full"
                style={{
                  background: 'url("basko-assets/images/gradient.png")',
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                
              </span>
              <h2 className="font-heading text-6xl tracking-tighter">
              Explorez notre FAQ pour obtenir des informations supplémentaires
              </h2>
            </div>
            <div className="w-full md:w-1/2 p-8">
              <div className="flex flex-wrap -m-1.5">
                <ButtonA
                  detailsText="Comment puis-je réserver un logement sur votre plateforme ?"
                  contactText="Pour réserver un logement sur notre plateforme, il vous suffit de créer un compte, de rechercher les options disponibles,
                   de sélectionner celle qui correspond à vos besoins, de vérifier les dates de disponibilité, puis de suivre les étapes de réservation indiquées."
                />
                <ButtonB
                  detailsText="Comment puis-je contacter un propriétaire pour poser des questions supplémentaires ?"
                  contactText="Vous pouvez contacter directement le propriétaire d'un logement en utilisant les informations de contact fournies sur la page de l'annonce.
                   Vous trouverez généralement un formulaire de contact ou un numéro de téléphone pour poser des questions supplémentaires."
                />
                <ButtonC
                  detailsText="Quelles sont les options de paiement acceptées sur votre plateforme ?"
                  contactText="Nous acceptons différents modes de paiement, tels que les cartes de crédit et les paiements en ligne sécurisés. 
                  Lorsque vous réservez un logement, vous verrez les options de paiement disponibles pour votre région."
                />
                <ButtonD
                  detailsText="Quelles sont les politiques d'annulation en cas d'imprévu ?"
                  contactText="Les politiques d'annulation varient en fonction des propriétaires et des logements. Lors de la réservation, veuillez vérifier les conditions d'annulation spécifiques indiquées sur la page de l'annonce. 
                  Certains propriétaires peuvent offrir des politiques d'annulation flexibles, tandis que d'autres peuvent avoir des conditions plus strictes.."
                />
                <ButtonE
                  detailsText="Que faire si j'ai un problème avec mon logement pendant mon séjour ?"
                  contactText="En cas de problème avec votre logement pendant votre séjour, nous vous encourageons à contacter immédiatement le propriétaire pour résoudre la situation.
                  Si vous ne parvenez pas à résoudre le problème directement avec le propriétaire, notre équipe d'assistance est disponible pour vous aider à trouver une solution adéquate."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

// Export du composant pour pouvoir l'utiliser ailleurs dans l'application
export default History;
