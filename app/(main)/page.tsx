import LatestArticles from "@/components/HomePageComponents/LatestArticlesServer";
import { Hero } from "@/components/HomePageComponents/Hero";
import SocialMedias from "@/components/HomePageComponents/SocialMedias";
import ThanksForVisiting from "@/components/thanks-for-visiting";
import SignGuestBook from "@/components/sign.guestBook";
import IcreateContent from "@/components/icreate-content";
import Playlist from "@/components/playlist";
import Achievements from "@/components/HomePageComponents/Achievements";
import LatestProjects from "@/components/HomePageComponents/LatestProjects";
import Link from "next/link";
import InteractiveTile from "@/components/HomePageComponents/InteractiveTile";


export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white dark:bg-slate-900">
      <div className="relative grid grid-cols-12 min-h-screen ">
        <div className="sm:col-span-11 col-span-12  dark:bg-slate-900 sm:p-4">
          {/* <SignGuestBook /> */}
            <InteractiveTile gridSize={{ width: 30, height: 6 }} />
          <div className="grid grid-cols-12 gap-4  mt-5">
            <div className="md:col-span-8 col-span-12">
              <div className="sm:px-8 px-5 ">
                <Hero />
              </div>
              <div className="md:col-span-8 col-span-12 sm:px-8 px-5">
                <div className="sm:col-span-7 col-span-12 sm:h-20 mt-5 flex items-center justify-start gap-6">
                  <SocialMedias />
                </div>
                <div className="mt-3">
                  <p className="font-normal max-w-2xl text-slate-600 dark:text-slate-400">
                    I also create content to inspire and help others get started
                    with coding, and share my experiences as a developer and
                    entrepreneur.
                    I have a small but growing community of developers. Check it
                    out here - <Link href="https://www.youtube.com/@itsjasirhere" className="text-blue-500 underline">itsjasirhere</Link>
                  </p>
                </div>
                <LatestArticles />
                <Achievements/>
                <LatestProjects/>
              </div>
            </div>
            <div className="lg:col-span-4  col-span-12  lg:h-[34rem] h-[39rem]  lg:flex lg:flex-wrap justify-center lg:justify-end md:mt-[28rem] mt-3 px-4 lg:px-0">
              <ThanksForVisiting />
              <Playlist />
              <IcreateContent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
