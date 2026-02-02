"use client"
import { useLanguage } from '@/context/LanguageContext'
import { useTranslation } from '@/lib/i18n'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { companies, testimonials } from '@/data'

const Clients = () => {
    const { language } = useLanguage()
    const t = useTranslation(language)

    // 1. Criamos a lista traduzida garantindo a presença da 'quote'
    const translatedTestimonials = testimonials.map((item, index) => ({
        ...item,
        // Forçamos a garantia de que 'quote' existe para o TS não reclamar
        quote: t.testimonials[`quote${index + 1}` as keyof typeof t.testimonials] || "",
        // Tradução do Title (NOVO)
        // Buscamos 'undertitle1', 'undertitle2', etc. Se falhar, usa o original do index.ts
        title: t.testimonials[`undertitle${index + 1}` as keyof typeof t.testimonials] || item.title
    }));

    return (
        <div className='py-20' id='testimonials'>
            <h1 className='heading'>
                {t.testimonials.prefix}
                <span className='text-purple'>{' '}{t.testimonials.highlight}</span>
            </h1>

            <div className='flex flex-col items-center max-lg:mt-10 mt-5'>
                <div className="h-[50vh] md:h-120 rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
                    <InfiniteMovingCards
                        // 2. CORREÇÃO: Passamos 'translatedTestimonials' em vez de 'testimonials'
                        items={translatedTestimonials}
                        direction='right'
                        speed='normal'
                    />
                </div>

                <div className='flex flex-wrap items-center justify-center gap-4 md:gap-16 mt-10'>
                    {companies.map(({ id, img, name, nameImg }) => (
                        <div key={id} className='flex md:max-w-60 max-w-32 gap-2'>
                            <img src={img} alt={name} className='md:w-10 w-5' />
                            <img src={nameImg} alt={name} className='md:w-24 w-20' />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Clients