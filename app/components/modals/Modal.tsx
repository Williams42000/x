'use client'


import React, { useCallback, useEffect, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import Button from '../Button';

interface modalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: () => void;
    title?: string;
    body?: React.ReactElement;
    footer?: React.ReactElement;
    actionLabel?: string;
    disabled?: boolean;
    secondaryAction?: () => void;
    secondaryActionLabel?: string;
}

const Modal:React.FC<modalProps> = ({ 
    isOpen,
    onClose,
    onSubmit,
    title,
    body,
    footer,
    actionLabel,
    disabled,
    secondaryAction,
    secondaryActionLabel,
    }: any) => {
        const [showModal, setShowModal] = useState(isOpen); // on initialise la modal à false

        useEffect(() => {
            setShowModal(isOpen); // on ouvre la modal
        }, [isOpen]);

        const handleClose = useCallback (() => { // useCallback permet de ne pas recharger la fonction à chaque fois
            if (disabled) {
            return;
            }
            setShowModal(false); // on ferme la modal
            setTimeout(() => { // on attend 300ms
                onClose();
            }, 300);

        }, [disabled, onClose]); // pour éviter les boucles infinies

        const handleSubmit = useCallback (() => {
            if (disabled) {
                return;
            }

            onSubmit();
        }, [disabled, onSubmit]);

        const handleSecondaryAction = useCallback (() => {
            if (disabled) {
                return;
            }

            secondaryAction();
        }, [disabled, secondaryAction]);

        if (!isOpen) {
            return null;
        }

    return (
        <>
            <div
                className="
                    justify-center
                    items-center
                    flex
                    overflow-x-hidden
                    overflow-y-auto
                    fixed
                    inset-0
                    z-50
                    outline-none
                    focus:outline-none
                    bg-neutral-800/70
                    
                "
            >
                <div
                    className="
                        relative
                        w-full
                        md:w-4/6
                        lg:w-3/6
                        xl:w-2/6
                        my-6
                        mx-auto
                        h-full
                        lg:h-auto
                        md:h-auto
                        "
                >
                    {/* <!--content--> */}
                    <div
                        className={`
                           translate
                           duration-300
                           h-full
                           ${showModal ? "translate-y-0" : "translate-y-full"}
                           ${showModal ? "opacity-100" : "opacity-0"}
                        `}
                    >
                        {/* <!--body--> */}
                        <div
                            className="
                            translate
                            h-full
                            lg:h-auto
                            md:h-auto
                            
                            rounded-lg
                            shadow-lg
                            relative
                            flex
                            flex-col
                            w-full
                            
                            bg-gradient-to-r from-rose-100 to-teal-100 
                            outline-none
                            focus:outline-none
                            "
                        >
                            {/* <!--header--> */}
                            <div
                                className="
                                flex
                                items-center
                                p-6
                                rounded-t
                                justify-center
                                relative
                                border-b-[1px]
                                "

                            >
                                <button
                                    onClick={handleClose}
                                    className="
                                    p-1
                                    border-0
                                    hover:opacity-70
                                    transition
                                    absolute
                                    left-9
                                    "
                                >
                                    <IoMdClose size={18}/>
                                </button>

                                <div className='text-lg font-semibold'>
                                    {title}
                                    
                                </div>

                            </div>

                            {/* <!--body--> */}
                            <div className='relative p-6 flex-auto' >
                                {body}
                            </div>

                            {/* <!--footer--> */}
                            <div className='flex flex-col gap-2 p-6'>
                                <div
                                    className="
                                    flex
                                    flex-row
                                    items-center
                                    gap-4
                                    w-full
                                    "
                                >
                                    {secondaryAction && secondaryActionLabel && ( 
                                    // si on a une secondaryAction et un secondaryActionLabel alors on affiche le bouton
                                        
                                    <Button
                                    outline
                                        disabled={disabled}
                                        label={secondaryActionLabel}
                                        onClick={handleSecondaryAction}
                                    />
                                    )}
                                    <Button // sinon on affiche le bouton principal
                                        disabled={disabled}
                                        label={actionLabel}
                                        onClick={handleSubmit}
                                    />
                                </div>
                                {footer}
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </>
    );
}

export default Modal;