import IcreateContent from '@/components/icreate-content'
import ThanksForVisiting from '@/components/thanks-for-visiting'
import Playlist from '@/components/playlist'
import Projects from '@/components/ProjectsPageComponents/Projects'
import SignGuestBook from '@/components/sign.guestBook'
import React from 'react'

const page = () => {
  return (
   <div className="min-h-screen w-full bg-white dark:bg-slate-900">
      <div className="relative grid grid-cols-12 min-h-screen ">
        <div className="sm:col-span-11 col-span-12  dark:bg-slate-900 sm:p-4">
          {/* <SignGuestBook /> */}
          <div className="grid grid-cols-12 gap-4  mt-5">
            
            <div className="md:col-span-8 col-span-12 sm:px-8 px-5">
            <Projects/>
            </div>
            <div className="lg:col-span-4  col-span-12  lg:h-[26rem]  h-[39rem]  lg:flex lg:flex-wrap justify-center lg:justify-end md:mt-[3rem] mt-3 px-4 lg:px-0">
              <Playlist />
              <ThanksForVisiting />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page