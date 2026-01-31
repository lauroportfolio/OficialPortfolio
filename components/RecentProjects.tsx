"use client"

import { useLanguage } from '@/context/LanguageContext'
import { projects } from '@/data'
import { useTranslation } from '@/lib/i18n'
import { PinContainer } from './ui/PinContainer'
import { FaLocationArrow } from 'react-icons/fa6'

const RecentProjects = () => {
    const { language } = useLanguage()
    const t = useTranslation(language)

    return (
        <div className='py-20' id='projects'>
            <h1 className='heading'>
                {t.recentProjects.prefix}
                <span className='text-purple'>{t.recentProjects.highlight}</span>
            </h1>

            <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10'>
                {projects.map(({ id, img, iconLists, link }) => (
                    <div key={id} className='sm:h-164 h-128 lg:min-h-130 flex items-center justify-center sm:w-142.5 w-[80vw]'>
                        <PinContainer title={link} href={link}>
                            <div className='relative flex items-center justify-center sm:w-142.5 w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10'>
                                <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162D]'>
                                    <img src="/bg.png" alt="bg-img" />
                                </div>
                                <img src={img} alt="cover" className='z-10 absolute bottom-0' />
                            </div>

                            {/* TÍTULO TRADUZIDO DINAMICAMENTE */}
                            <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
                                {t.projects[`title${id}` as keyof typeof t.projects]}
                            </h1>

                            {/* DESCRIÇÃO TRADUZIDA DINAMICAMENTE */}
                            <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>
                                {t.projects[`des${id}` as keyof typeof t.projects]}
                            </p>

                            <div className='flex items-center justify-between mt-7 mb-3'>
                                <div className='flex items-center'>
                                    {iconLists.map((icon, index) => (
                                        <div
                                            key={index}
                                            className="border border-white/20 rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                                            style={{
                                                transform: `translateX(-${5 * index + 2}px)`,
                                            }}
                                        >
                                            <img src={icon} alt={icon} className='p-2' />
                                        </div>
                                    ))}
                                </div>

                                <div className='flex justify-center items-center'>
                                    <p className='flex lg:text-xl md:text-xs text-sm'>
                                        {t.recentProjects.checkLive}
                                    </p>
                                    <FaLocationArrow className='ms-3' color='#CBACF9' />
                                </div>
                            </div>
                        </PinContainer>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RecentProjects