"use client"

import { useLanguage } from '@/context/LanguageContext'
import Image from 'next/image'

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className='fixed top-5 right-5 z-50 flex gap-3'>
      <button
        onClick={() => setLanguage('en')}
        className={`transition-opacity cursor-pointer ${
          language === 'en' ? 'opacity-100' : 'opacity-50 hover:opacity-75'
        }`}
        title='English'
      >
        <Image
          src='/icons/usa.png'
          alt='US Flag'
          width={32}
          height={32}
          priority
        />
      </button>
      <button
        onClick={() => setLanguage('pt')}
        className={`transition-opacity cursor-pointer ${
          language === 'pt' ? 'opacity-100' : 'opacity-50 hover:opacity-75'
        }`}
        title='Português Brasileiro'
      >
        <Image
          src='/icons/brazil.png'
          alt='Brazil Flag'
          width={32}
          height={32}
          priority
        />
      </button>
    </div>
  )
}
