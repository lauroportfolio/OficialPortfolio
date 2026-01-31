import { Language } from '@/lib/i18n'
import { translations } from '@/lib/i18n'

export function getGridItems(language: Language) {
  const t = translations[language] || translations.en
  
  return [
    {
      id: 1,
      title: t.grid.item1,
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: t.grid.item2,
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: t.grid.item3,
      description: t.grid.item3Desc,
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: t.grid.item4,
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
    {
      id: 5,
      title: t.grid.item5,
      description: t.grid.item5Desc,
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: t.grid.item6,
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ]
}

export function getNavItems(language: Language) {
  const t = translations[language] || translations.en
  
  return [
    { name: t.nav.about, link: "#about" },
    { name: t.nav.projects, link: "#projects" },
    { name: t.nav.testimonials, link: "#testimonials" },
    { name: t.nav.contact, link: "#contact" },
  ]
}
