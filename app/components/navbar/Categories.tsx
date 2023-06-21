'use client';

import Container from "../Container"

import { IoDiamond, IoLeaf } from "react-icons/io5"
import { FaPaw } from "react-icons/fa"
import { TbBeach} from "react-icons/tb"
import { GiAmphora} from "react-icons/gi"

import CategoryBox from "../CategoryBox"
import { usePathname, useSearchParams } from "next/navigation"
import { IoIosSnow } from "react-icons/io";

export const categories = [
    {
        label: 'Plage',
        icon: TbBeach,
        color: '#F59E0B',
        description:'Ce logement est proche de la plage!'
    },
    {
        label: 'Montagne',
        icon: IoIosSnow,
        color: '#FFFAFA',
        description:'Ce logement est situé dans les montagnes!'
    },
    {
        label: 'Safari',
        icon: FaPaw,
        color: '#F472B6',
        description:'Ce logement offre des safaris à proximité!'
    },
    {
        label: 'Culture locale',
        icon: GiAmphora,
        color: '#3B82F6',
        description:'Ce logement est proche de sites de culture locale!'
    },
    {
        label: 'Espaces verts',
        icon: IoLeaf,
        color: '#10B981',
        description:'Ce logement est entouré d\'espaces verts!'
    },
    {
        label: 'Luxe',
        icon: IoDiamond,
        color: '#EF4444',
        description:'Ce logement est luxueux!'
    },
]




const Categories = () => {  
    const params = useSearchParams();
    const category = params?.get('category');
    const pathname = usePathname();

    const isMainPage = pathname === '/';

    if (!isMainPage) {
        return null;
    }

    return (
        <Container>
            <div
                className="
                pt-4
                flex
                flex-row
                items-center
                justify-between
                oververflow-x-auto
                "
            >
                {categories.map((item) =>(
                    <CategoryBox
                    key={item.label}
                    label={item.label}
                    selected={category === item.label} // si la catégorie est sélectionnée alors on affiche la catégorie
                    icon={item.icon}
                    color={item.color}
                    />
                ))}
                </div>
        </Container>
    );
}

export default Categories;