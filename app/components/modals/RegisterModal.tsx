'use client';

import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import {
    FieldValues,
    SubmitHandler,
    useForm,
} from 'react-hook-form';

import useRegisterModal from '@/app/hooks/useRegisterModal';
import useLoginModal from '@/app/hooks/useLoginModal';

import Modal from './Modal';
import Heading from '../Heading';
import Input from '../inputs/Input';
import toast from 'react-hot-toast';
import Button from '../Button';
import { signIn } from 'next-auth/react';


const RegisterModal = () => {
    const registerModal = useRegisterModal(); // on récupère la modal
    const loginModal = useLoginModal(); // on récupère la modal
    const [isLoading, setIsLoading] = useState(false); // on initialise la modal à false

    const {
        register,
        handleSubmit,
        formState: { 
            errors, 
        }
    } = useForm<FieldValues>({ // on initialise le formulaire
        defaultValues: {
            name: '', // on initialise les champs
            email: '',
            password: ''
        }
    });

   // On initialise la fonction onSubmit pour le formulaire: 
    const onSubmit: SubmitHandler<FieldValues> = (data) => { // useCallback permet de ne pas recharger la fonction à chaque fois
        setIsLoading(true); // on affiche le loader
        
        axios.post('/api/register', data) // on envoie les données
            .then(() => {
                toast.success('Votre compte a bien été créé');
                registerModal.onClose(); // on ferme la modal
                loginModal.onOpen(); // on ouvre la modal
            })
            .catch ((error) => {
                toast.error('Il y a quelque chose qui ne fonctionne pas'); // Avant on avait mis console.log(error) mais on a remplacé par toast
            })
            .finally (() => {
            setIsLoading(false); // on cache le loader
        })
    }

    // On change de fenetre pour ouvrir la modal de connexion
    const toggle = useCallback(() => {
        registerModal.onClose(); // on ouvre la modal
        loginModal.onOpen(); // on ferme la modal
    }, [loginModal, registerModal]); 

    const bodyContent = (
        <div className="flex flex-col gap-4">
                <Heading 
                    title='Bienvenue dans notre agence de location'
                    subtitle='Veuillez vous inscrire pour continuer'
                />
                <Input
                id="email"
                label="email"
                type="text"
                disabled={isLoading}
                register={register}
                errors={errors}
                required 
                />
                <Input
                id="name"
                label="name"
                type="text"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
                />
                <Input
                id="password"
                type="password"
                label="password"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
                />

            </div>
    );

    const footerContent = (
        <div className="flex flex-col gap-4 mt-3">
            <hr />
            <Button
            outline
            label="Se connecter avec Google"
            icon={FcGoogle}
            onClick={() => signIn('google')}
            />

            <div
                className="
                  text-black
                    text-center
                    mt-4
                    font-light
                "
            >
                <div className='justify-center flex flex-row items-center gap-2'>
                    <div>
                    Vous avez déjà un compte ?
                    </div>
                    <div
                       onClick={toggle} // on ferme la modal
                       className='
                       text-yellow-100
                       cursor-pointer
                       hover:underline
                       '
                    >
                        Connexion
                    </div>

                    </div>
            </div>

            </div>
    )

    return (
    
        <Modal
        disabled={isLoading} // on désactive le bouton si on est en train de charger
        isOpen={registerModal.isOpen} // on récupère la modal
        title='Inscription' // on affiche le titre
        actionLabel='Continuer' // on affiche le bouton
        onClose={registerModal.onClose} // on ferme la modal
        onSubmit={handleSubmit(onSubmit)} // on envoie les données
        body={bodyContent} // on affiche le corps de la modal
        footer={footerContent} // on affiche le footer de la modal
        />
    );
}

export default RegisterModal;