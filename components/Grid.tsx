"use client"

import { useLanguage } from '@/context/LanguageContext'
import { getGridItems } from '@/data/translations'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'

const Grid = () => {
  const { language } = useLanguage()
  const gridItems = getGridItems(language)

  return (
    <section id='about'>
      <BentoGrid>
        {gridItems.map(({ id, title, description, className, img, imgClassName, titleClassName, spareImg }) => (
          <BentoGridItem
            id={id}
            key={id}
            title={title}
            description={description}
            className={className}
            img={img}
            imgClassName={imgClassName}
            titleClassName={titleClassName}
            spareImg={spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  )
}

export default Grid
