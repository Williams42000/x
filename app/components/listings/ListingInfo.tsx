'use strict';

import useCountries from "@/app/hooks/useCountries";
import { SafeUser } from "@/app/types";
import { IconType } from "react-icons";
import Avatar from "../Avatar";
import ListingCategory from "./ListingCategory";
import dynamic from "next/dynamic";
import LinkContact from "../LinkContact";
import useLoginModal from "@/app/hooks/useLoginModal";
import useSendEmailModal from "@/app/hooks/useSendEmailModal";

import LoginModal from "../modals/LoginModal";
import { useRouter } from "next/navigation";
import Button2 from "../Button2";

const Map = dynamic(() => import('../Map'), {
    ssr:false
});

interface ListingInfoProps {
    user: SafeUser;
    description: string;
    guestCount: number;
    roomCount: number;
    bathroomCount: number;
    category: {
        icon: IconType;
        label: string;
        color: string
        description: string;
    } | undefined;
    locationValue: string;
    currentUser?: SafeUser | null;
}

const ListingInfo: React.FC<ListingInfoProps> = (
   { user,
    description,
    guestCount,
    roomCount,
    bathroomCount,
    category,
    locationValue}
) => {

    const {getByValue} = useCountries();
    const sendEmailModal = useSendEmailModal();
    const loginModal = useLoginModal();
    const loginModall = useLoginModal();
    const coordinates = getByValue(locationValue)?.latlng
    const router = useRouter();

    return (
        <div className="col-span-4 flex flex-col gap-8">
            <div className="flex flex-col gap-2">
                <div
                className="
                    text-xl
                    font-semibold
                    flex
                    flex-row
                    items-center
                    gap-2
                "
                >
                    <div>Hébergé par {user?.name}</div>
                    <Avatar src={user?.image} />
                    <div>{user?.email}</div>
                </div>
                <div
                    className="
                        flex
                        flex-row
                        items-center
                        gap-4
                        font-light
                        text-neutral-500
                    ">
                        <div>
                            {guestCount} guests
                        </div>
                        <div>
                            {roomCount} rooms
                        </div>
                        <div>
                            {bathroomCount} bathrooms
                        </div>     
                </div>
                <Button2/>
                {/* <LinkContact 
                onClick={() => router.push("/contacts")} 
                label="Pour contacter " 
                email={user?.email} 
                labell=" cliquer ici " /> */}
            </div>
            <hr />
            {category && (
                <ListingCategory
                    icon={category.icon}
                    label={category.label}
                    description={category.description}
                    />
            )}
            <hr/>
            <div className="text-lg font-light text-neutral-900">
                {description}
            </div>
            <hr/>
            <Map center={coordinates} />
        </div>
    );
}

export default ListingInfo;