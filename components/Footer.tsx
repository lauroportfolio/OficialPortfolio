import { useLanguage } from '@/context/LanguageContext';
import { useTranslation } from '@/lib/i18n';
import React from 'react'
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa6';
import { socialMedia } from '@/data';

const Footer = () => {
    const { language } = useLanguage();
    const t = useTranslation(language);

    return (
        <footer className='w-full pb-10 mb-25 md:mb-5' id='contact'>
            <div className='flex flex-col items-center'>
                <h1 className='heading lg:max-w-[45vw]'>
                    {t.footer.prefix} <span className='text-purple'>{t.footer.highlight1}</span> {t.footer.sufix} <span className='text-purple'>{t.footer.highlight2}</span>
                </h1>
                <p className='text-white-200 md:mt-10 my-5 text-center'>
                    {t.footer.description}
                </p>
                <a href="mailto:lauroportfolio@gmail.com" >
                    <MagicButton
                        title={t.footer.emailButton}
                        icon={<FaLocationArrow />}
                        position='right'
                    />
                </a>
            </div>

            <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
                <p className='md:text-base text-sm md:font-normal font-light'>{t.footer.copyright}</p>

                <div className='flex items-center md:gap-3 gap-6'>
                    {socialMedia.map((profile) => {
                        // LÓGICA DE TROCA DE LINK DO LINKEDIN
                        let profileLink = profile.link;

                        // Verifica se é o LinkedIn (pelo ID 3 ou pelo nome) e se está em inglês
                        if (profile.id === 3 && language === 'en') {
                            profileLink = "https://www.linkedin.com/in/lauro-flores/?locale=en_US";
                        }

                        return (
                            <a 
                                key={profile.id} 
                                href={profileLink}
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 mt-5 transition-transform hover:scale-110"
                            >
                                <img
                                    src={profile.img}
                                    alt={profile.name}
                                    width={20}
                                    height={20}
                                />
                            </a>
                        )
                    })}
                </div>
            </div>
        </footer>
    )
}

export default Footer