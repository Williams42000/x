'use client';

// Importe les types nécessaires depuis les modules react-hook-form et react-icons
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { BiDollar } from "react-icons/bi";

// Définit les propriétés du composant Input
interface InputProps {
    id: string; // L'identifiant du champ
    label: string;
    type?: string;
    disabled?: boolean;
    formatPrice?: boolean;
    required?: boolean;
    register?: UseFormRegister<FieldValues>,
    errors: FieldErrors
}

// Déclaration du composant Input en utilisant les propriétés définies ci-dessus
const Input: React.FC<InputProps> = ({
    id,
    label,
    type = 'text',
    disabled,
    formatPrice,
    required,
    register,
    errors,
}) => {
    // Rendu du composant Input
    return (
        <div className="w-full relative" >
           {formatPrice && (
                <BiDollar
                    size={24}
                    className="
                    text-neutral-700
                    absolute
                    top-5
                    left-2
                    "
                />
           )}  
           
            <input // Affiche le champ de saisie avec les attributs et les styles appropriés
                id={id}
                disabled={disabled}
                {...register && register(id, { required })}
                placeholder=" "
                type={type}
                className={`
                    peer
                    w-full
                    p-4
                    pt-6
                    font-light
                    bg-white
                    border-2
                    rounded-md
                    outline-none
                    transition
                    disabled:opacity-70
                    disabled:cursor-not-allowed
                    ${formatPrice ? 'pl-9' : 'pl-4'}
                    ${errors[id] ? 'border-rose-500' : 'border-neutral-300'}
                    ${errors[id] ? 'focus-border-rose-500' : 'focus:border-black'}
                    `
                }
                />
            <label // Affiche l'étiquette avec les styles appropriés
                className={`
                absolute
                text-md
                duration-150
                transform
                -translate-y-3
                top-5
                z-10
                origin-[0]
                ${formatPrice ? 'left-9' : 'left-4'}
                peer-placeholder-shown:scale-100
                peer-placeholder-shown:translate-y-0
                peer-focus:scale-75
                peer-focus:-translate-y-4
                ${errors[id] ? 'text-rose-500' : 'text-zinc-500'}
                `}
                
            >
                {label}
            </label>
        </div>
    );
}

export default Input;

// RESUMER:

// Le composant Input est un composant personnalisé pour les champs de saisie. 
// Il prend plusieurs propriétés, telles que l'identifiant, l'étiquette, le type de champ, l'état désactivé, le format de prix, l'obligation et les erreurs de validation du formulaire. 
// Le composant gère également l'enregistrement du champ avec react-hook-form. 
// Il contient un champ de saisie et une étiquette avec des styles appropriés pour les différents états et erreurs du champ. 
// Le composant Input gère également l'affichage d'une icône de dollar lorsqu'il est configuré pour afficher un format de prix. 
// Les styles du champ et de l'étiquette sont modifiés en fonction des erreurs de validation du formulaire, de l'état de concentration du champ et de l'affichage du texte d'espace réservé. 
// Ce composant facilite la réutilisation et la gestion cohérente des champs de saisie dans l'ensemble de l'application.

// NOTE:

