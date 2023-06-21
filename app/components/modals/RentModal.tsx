'use client';

import { useMemo, useState } from "react";

import useRentModal from "@/app/hooks/useRentModal";

import Modal from "./Modal";
import Heading from "../Heading";
import { categories } from "../navbar/Categories";
import CategoryInput from "../inputs/CategoryInput";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import CountrySelect from "../inputs/CountrySelect";
import dynamic from "next/dynamic";
import Counter from "../inputs/Counter";
import ImageUpload from "../inputs/ImageUpload";
import Input from "../inputs/Input";
import axios from "axios";
import { toast } from "react-hot-toast";

import { useRouter } from "next/navigation";



// Définition d'une énumération pour les différentes étapes du processus de location
enum STEPS {
    CATEGORY = 0, 
    LOCATION = 1,
    INFO = 2,
    IMAGES = 3,
    DESCRIPTION = 4, 
    PRICE = 5
}

const RentModal = () => {
    const router = useRouter();
    // Utilisation de l'hook useRentModal pour obtenir les informations sur le modal de location
    const rentModal = useRentModal();

    // Utilisation de l'hook useState pour garder une trace de l'étape actuelle du processus de location
    const [step, setStep] = useState(STEPS.CATEGORY);

    const [isLoading, setIsLoading] = useState(false);

    // Utilisation de l'hook useForm pour gérer le formulaire de location
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
        reset
    } = useForm<FieldValues>({
        defaultValues: {
        category: "",
        location: null,
        guestCount: 1,
        roomCount: 1,
        bathroomCount: 1,
        imagesSrc: "", // on le retrouve dans prisma.schema
        price: 1,
        title: "",
        description: "",
            
        },
    });

    // Suivi de la catégorie sélectionnée
    const category = watch("category");
    const location = watch("location");
    const guestCount = watch("guestCount");
    const roomCount = watch("roomCount");
    const bathroomCount = watch("bathroomCount");
    const imageSrc = watch("imageSrc");

    const Map = useMemo(() => dynamic(() => import("../Map"), {
        ssr: false
    }), [location]);

    // Fonction pour définir une valeur personnalisée pour un champ
    const setCustomeValue = (id: string, value: any) => {
        setValue(id, value, {
            shouldValidate: true,
            shouldDirty: true,
            shouldTouch: true,
            });
    };
    

    // Fonctions pour avancer et reculer dans le processus de location
    const onBack = () => {
        setStep((value) => value - 1);
    };

    const onNext = () => {
        setStep((value) => value + 1);
    };

    // Fonction pour gérer la soumission du formulaire afin d'envoyer les données au serveur a la fin du modal lier au prix du logement:
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        if (step !== STEPS.PRICE) {
            return onNext();
        }

        setIsLoading(true);

        axios.post("/api/listings", data)
        .then(() => {
            toast.success("Votre logement a été créé");
            router.refresh();
            reset();
            setStep(STEPS.CATEGORY);
            rentModal.onClose();
    })
        .catch(() => {
            toast.error("Il y a eu un problème");
        }).finally(() => {
            setIsLoading(false);
        })
    };
      

    // Détermination du label à afficher pour l'action principale en fonction de l'étape actuelle
    const actionLabel = useMemo(() => {
        if (step === STEPS.PRICE) {
            return "Création";
        }

        return "Suivant";
    }, [step]);

    // Détermination du label à afficher pour l'action secondaire en fonction de l'étape actuelle
    const secondaryActionLabel = useMemo(() => {
        if (step === STEPS.CATEGORY) {
            return undefined;
        }

        return "Précédent";
    }, [step]);

    // Définition du contenu du corps du modal en fonction de l'étape actuelle
    let bodyContent = (
        <div className="flex flex-col gap-8 ">
            <Heading
                title="Quel type de logement proposez-vous ?"
                subtitle="Sélectionnez une catégorie"
            />
                <div
                   className="
                   grid
                   grid-cols-1
                   md:grid-cols-2
                   gap-3
                   max-h-[50vh]
                   overflow-y-auto
                   "
                >
                    {categories.map((item) => (
                        <div key={item.label} className="col-span-1" >
                            <CategoryInput
                              onClick={(category) => 
                                setCustomeValue("category", category)}
                              selected={category === item.label}
                              label={item.label}
                              icon={item.icon}
                              color={item.color}
                            />
                        </div>
                        ))}
                </div>
            </div>
    )
    
    if (step === STEPS.LOCATION) {
        bodyContent = (
            <div className="flex flex-col gap-8">
                <Heading
                    title="Où se trouve votre logement ?"
                    subtitle="Aidez les voyageurs à trouver votre logement"
                />
                <CountrySelect
                value={location}
                onChange={(value) => setCustomeValue("location", value)}
                    
                />

                <Map
                    center={location?.latlng}
                />
                
            </div>
        );
    }

    if (step === STEPS.INFO) {
        bodyContent = (
            <div className="flex flex-col gap-8">
                <Heading
                    title="Partager quelques informations sur votre logement"
                    subtitle="Quelles commodités avez-vous ?"
                />
                <Counter
                    title="Les invités"
                    subtitle="Combien de voyageurs pouvez-vous accueillir ?"
                    value={guestCount}
                    onChange={(value) => setCustomeValue("guestCount", value)}
                />
                <hr/>
                <Counter
                    title="Les pièces"
                    subtitle="Combien de pièce avez vous ?"
                    value={roomCount}
                    onChange={(value) => setCustomeValue("roomCount", value)}
                />
                <hr/>
                <Counter
                    title="Salle de bains"
                    subtitle="Combien de salle de bains avez vous ?"
                    value={bathroomCount}
                    onChange={(value) => setCustomeValue("bathroomCount", value)}
                />
                </div>
        );
    }

    if (step === STEPS.IMAGES) {
        bodyContent = (
            <div className="flex flex-col gap-8">
                <Heading
                    title="Ajouter des photos de votre logement"
                    subtitle="Montrez votre logement aux voyageurs"
                />
                <ImageUpload
                    value={imageSrc}
                    onChange={(value) => setCustomeValue("imageSrc", value)}
                />
            </div>
        );
    }

    if (step === STEPS.DESCRIPTION) {
        bodyContent = (
            <div className="flex flex-col gap-8">
                <Heading
                    title="Ajouter un titre et une description"
                    subtitle="Donnez un titre à votre annonce"
                />
                <Input
                    id="title"
                    label="Titre"
                    type="text"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                />

                <hr/>

                <Input
                    id="description"
                    label="Description"
                    type="text"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                />
            </div>
        );
    }

    if (step === STEPS.PRICE) {
        bodyContent = (
            <div className="flex flex-col gap-8">
                <Heading
                    title="Définir un prix"
                    subtitle="Combien coûte une nuit dans votre logement ?"
                />
                <Input
                    id="price"
                    label="Prix"
                    type="number"
                    formatPrice
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                />
            </div>
        );
    }
    

    // Le composant retourne un Modal qui affiche le contenu approprié en fonction de l'étape actuelle du processus de location.
    return (  
        <Modal
        isOpen={rentModal.isOpen}
        onClose={rentModal.onClose}
        onSubmit={handleSubmit(onSubmit)}
        actionLabel={actionLabel}
        secondaryActionLabel={secondaryActionLabel}
        secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
        title="Vos habitations"
        body={bodyContent}
        
        />
    );
}

export default RentModal;

// RESUMER:
// Dans ce code, vous créez un composant RentModal pour gérer le processus de location d'un logement. 
// Le composant utilise une combinaison de hooks pour gérer l'état de l'interface utilisateur, y compris les valeurs de formulaire, 
// l'étape actuelle du processus de location et les actions à effectuer lorsque l'utilisateur clique sur les boutons "Précédent" et "Suivant".
// Le contenu du modal change en fonction de l'étape actuelle du processus, et les labels des boutons d'action sont mis à jour en conséquence. 
// Lorsque l'utilisateur sélectionne une catégorie, cette information est stockée dans l'état du formulaire.
// En résumé, ce code est un composant bien structuré qui gère l'interaction utilisateur pour le processus de location d'un logement, 
// utilisant une combinaison d'états, d'effets et de mémoïsation pour optimiser les performances et offrir une expérience utilisateur fluide.