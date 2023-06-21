import {Nunito } from "next/font/google"

import "./globals.css"
import Navbar from "./components/navbar/Navbar"
import ClientOnly from "./components/ClientOnly"
import RegisterModal from "./components/modals/RegisterModal"
import ToasterProvider from "./providers/ToasterProvider"
import LoginModal from "./components/modals/LoginModal"
import getCurrentUser from "./actions/getCurrentsUser"
import RentModal from "./components/modals/RentModal"
import AdminNavbar from "./components/admin/AdminNavbar"


// Cela permet de le titre de la page:
export const metadata = {
    title: "Casas",
    description: "Agenge de location et reservation de maisons",
}

// Cela permet de charger la police:
const fonts = Nunito({
    subsets: ["latin"],
})

// Cela permet de charger les styles:
export default async function RootLayout ({
    children,
}: {
    children: React.ReactNode
    }) {
        const currentUser = await getCurrentUser();
        

    if (currentUser && currentUser.role === 'ADMIN') {
        return (
            <html lang="en">
                <body>
                    <ToasterProvider />
                    <AdminNavbar currentUser={currentUser} />
                    <div className="pd-20 pt-28">
                        {children}
                    </div>
                </body>
            </html>
        );
    } else {
        return (
            <html lang="en">
                <body className="{font.className">
                    <ClientOnly>
                        <ToasterProvider />
                        <RentModal />
                        <LoginModal />
                        <RegisterModal />
                        <Navbar currentUser={currentUser} />
                    </ClientOnly>
                    <div className="pd-20 pt-28">
                        {children}
                        <script src="//code.tidio.co/2sck1ygcclzvbvq41vt5wvb07kyhld4z.js" async>
                        </script>
                    </div>
                </body>
            </html>
        );
}
}
