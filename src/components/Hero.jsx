import React from 'react'
import { useTranslation } from "react-i18next";

// const languages = [
//     {
//       code: 'en',
//       name: 'English',
//       country_code: 'gb'
//     },
//   {
//     code: 'sq',
//     name: 'Albanian',
//     country_code: 'al'
//   },
// ]

export default function Hero() {
    const { t } = useTranslation();
  return (
    <>
    {/* This is a tailwindcss block from tailblocks.cc */}
     <section class="text-gray-600 body-font">
       <div class="container px-5 py-32 m-auto">
         <div class="flex flex-col text-center w-full mb-20">
           <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">{t('UpperTitle')}</h2>
           <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">{t('Title')}</h1>
         </div>
         <div class="flex flex-wrap -m-4">
           <div class="p-4 md:w-1/3">
             <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
               <div class="flex items-center mb-3">
                 <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                   <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                     <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                   </svg>
                 </div>
                 <h2 class="text-gray-900 text-lg title-font font-medium">{t('CardTitle1')}</h2>
               </div>
               <div class="flex-grow">
                 <p class="leading-relaxed text-base">{t('CardBody1')}</p>
                 <a href class="mt-3 text-indigo-500 inline-flex items-center">{t('Learn')}
                   <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                     <path d="M5 12h14M12 5l7 7-7 7"></path>
                   </svg>
                 </a>
               </div>
             </div>
           </div>
           <div class="p-4 md:w-1/3">
             <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
               <div class="flex items-center mb-3">
                 <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                   <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                     <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                     <circle cx="12" cy="7" r="4"></circle>
                   </svg>
                 </div>
                 <h2 class="text-gray-900 text-lg title-font font-medium">{t('CardTitle2')}</h2>
               </div>
               <div class="flex-grow">
                 <p class="leading-relaxed text-base">{t('CardBody2')}</p>
                 <a href class="mt-3 text-indigo-500 inline-flex items-center">{t('Learn')}
                   <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                     <path d="M5 12h14M12 5l7 7-7 7"></path>
                   </svg>
                 </a>
               </div>
             </div>
           </div>
           <div class="p-4 md:w-1/3">
             <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
               <div class="flex items-center mb-3">
                 <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                   <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                     <circle cx="6" cy="6" r="3"></circle>
                     <circle cx="6" cy="18" r="3"></circle>
                     <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                   </svg>
                 </div>
                 <h2 class="text-gray-900 text-lg title-font font-medium">{t('CardTitle3')}</h2>
               </div>
               <div class="flex-grow">
                 <p class="leading-relaxed text-base">{t('CardBody3')}</p>
                 <a href class="mt-3 text-indigo-500 inline-flex items-center">{t('Learn')}
                   <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                     <path d="M5 12h14M12 5l7 7-7 7"></path>
                   </svg>
                 </a>
               </div>
             </div>
           </div>
         </div>
       </div>
     </section>
    </>
  )
}
