export const dynamic = 'force-dynamic';

import getCurrentUser from "./actions/getCurrentsUser";
import getListings, { IListingsParams } from "./actions/getListings";
import Carousel from "./components/Carousel";

import ClientOnly from "./components/ClientOnly";
import Container from "./components/Container";
import EmptyState from "./components/EmptyState";
import Footer from "./components/Footer";
import ListingCard from "./components/listings/ListingCard";

import dotenv from 'dotenv';

interface HomeProps {
  searchParams: IListingsParams;
}

const Home = async ({ searchParams }: HomeProps) => {
  const listings = await getListings(searchParams); // Permet de recuperer la liste des annonces
  const currentUser = await getCurrentUser(); // Permet de recuperer l'utilisateur connecter

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState showReset/>
      </ClientOnly>
    )
  }
  
  return (
    
      <ClientOnly>
        <Container>
        <Carousel />
          <div className="
          pt-24
          grid
          grid-col-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-5
          2xl:grid-cols-6
          gap-8
          ">
            
            {listings.map((listing) => { // Permet de lister tout les elements qui sint dans la liste lier au model Listing
            return (
            <ListingCard
            currentUser={currentUser}
            key={listing.id}
            data={listing}
            />
            )
          })}
          </div>
          </Container>
          <Footer />
        </ClientOnly>
    
  )
}

export default Home;
