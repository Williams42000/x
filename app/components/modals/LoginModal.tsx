'use client';

import { signIn } from 'next-auth/react';
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
import { useRouter } from 'next/navigation';
import { sign } from 'crypto';
import { getSession } from 'next-auth/react';

interface SessionUser {
  name?: string | null | undefined;
  email?: string | null | undefined;
  image?: string | null | undefined;
  role: string;
  favoriteIds: string[];
  iat: number;
  exp: number;
  jti: string;
}

const LoginModal = () => {
    const router = useRouter();

    const loginModal = useLoginModal(); // on récupère la modal
    const registerModal = useRegisterModal(); // on récupère la modal
    const [isLoading, setIsLoading] = useState(false); // on initialise la modal à false

    const {
        register,
        handleSubmit,
        formState: { 
            errors, 
        }
    } = useForm<FieldValues>({ // on initialise le formulaire
        defaultValues: {
            email: '',
            password: ''
        }
    });

   // On initialise la fonction onSubmit pour le formulaire: 
    const onSubmit: SubmitHandler<FieldValues> = async (data) => { // useCallback permet de ne pas recharger la fonction à chaque fois
        setIsLoading(true); // on affiche le loader // Début du chargement
     try {
      const response = await signIn('credentials', {
        ...data,
        redirect: false,
      });

      if (response && response.ok) {
          const session = await getSession();
          
          if (session) {
            const userRole = (session.user as SessionUser)?.role;
            setIsLoading(false);
              
              if (userRole === 'ADMIN') {
                toast.success('Vous êtes connecté'); 
                loginModal.onClose();
                router.refresh();
                router.push('/admin'); 

            } else { //autres rôles
            toast.success('Vous êtes connecté'); 
            router.refresh(); // on rafraichit la page
            loginModal.onClose(); // on ferme la modal
            }
          }

      } else {
       toast.error('Vous êtes pas connecté');  
      }
    } catch (error: any) {
       toast.error(error as string); 
    }
}
    // Lier a la partie api/auth/[...nextauth].ts ( voir plus bas détail)

    // On change de fenetre pour ouvrir la modal d'inscription
    const toggle = useCallback(() => {
        loginModal.onClose(); // on ferme la modal
        registerModal.onOpen(); // on ouvre la modal
    }, [loginModal, registerModal]); 

    const bodyContent = (
        <div className="flex flex-col gap-4">
                <Heading 
                    title='Content de vous revoir parmi nous'
                    subtitle='Connectez-vous à votre compte !'
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
                id="password"
                label="password"
                type="password"
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
                    Etes vous nouveau sur notre site ?
                    </div>
                    <div
                       onClick={toggle} // on ferme la modal
                       className='
                       text-yellow-100
                       cursor-pointer
                       hover:underline
                       '
                    >
                        Créer un compte
                    </div>

                    </div>
            </div>

            </div>
    )

    return (
    
        <Modal
        disabled={isLoading} // on désactive le bouton si on est en train de charger
        isOpen={loginModal.isOpen} // on récupère la modal
        title='Connexion' // on affiche le titre
        actionLabel='Continuer' // on affiche le bouton
        onClose={loginModal.onClose} // on ferme la modal
        onSubmit={handleSubmit(onSubmit)} // on envoie les données
        body={bodyContent} // on affiche le corps de la modal
        footer={footerContent} // on affiche le footer de la modal
        />
    );
}

export default LoginModal;

