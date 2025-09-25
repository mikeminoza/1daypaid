"use client";
import { gsap } from "gsap";
import React, { useEffect } from "react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderFive from "@/layouts/headers/header-five";
import HeroBannerFour from "@/components/hero-banner/hero-banner-four";
import GalleryOne from "@/components/gallery/gallery-one";
import AboutThree from "@/components/about/about-three";
import BrandThree from "@/components/brand/brand-three";
import ProjectFour from "@/components/project/project-four";
import CounterOne from "@/components/counter/counter-one";
import VideoTwo from "@/components/video/video-two";
import ServiceFour from "@/components/service/service-four";
import ContactOne from "@/components/contact/contact-one";
import FooterFive from "@/layouts/footers/footer-five";
import { textInvert } from "@/utils/text-invert";
import { fadeAnimation, revelAnimationOne } from "@/utils/title-animation";
import { projectThreeAnimation } from "@/utils/project-anim";
import { ctaAnimation } from "@/utils/cta-anim";
import HeaderTwo from "@/layouts/headers/header-two";

const HomeAirtableMain = () => {
  useScrollSmooth();
  useEffect(() => {
    document.body.classList.add("tp-smooth-scroll");
    return () => {
      document.body.classList.remove("tp-smooth-scroll");
    };
  }, []);

  useGSAP(() => {
    const timer = setTimeout(() => {
      fadeAnimation();
      revelAnimationOne();
      projectThreeAnimation();
      ctaAnimation();
      textInvert();
    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>
      {/* header area start */}
      {/* <HeaderFive /> */}
      <HeaderTwo />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* hero area start */}
            <HeroBannerFour />
            {/* hero area end */}

            {/* gallery area start */}
            <GalleryOne />
            {/* gallery area end */}

            {/* about area start */}
            <AboutThree />
            {/* about area end */}

            {/* brand area start */}
            <BrandThree />
            {/* brand area end */}

            {/* project area start */}
            <ProjectFour />
            {/* project area end */}

            {/* counter area start */}
            <CounterOne />
            {/* counter area end */}

            {/* video area start */}
            <VideoTwo />
            {/* video area end */}

            {/* service area start */}
            <ServiceFour />
            {/* service area end */}

            {/* contact area start */}
            <ContactOne />
            {/* contact area end */}
          </main>

          {/* footer area */}
          <FooterFive />
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default HomeAirtableMain;
