"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Leaf } from "../svg";
import defaultHero from "@/assets/img/home-02/hero/hero-bg-1.jpg";
import { PrismicRichText } from "@prismicio/react";
import type { RichTextField } from "@prismicio/client";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { useGSAP } from "@gsap/react";
import {
  bounceAnimation,
  heroBgAnimation,
  heroTitleAnim,
} from "@/utils/title-animation";

interface HeroBannerTwoProps {
  title?: string | RichTextField;
  heroImage?: { url: string; alt?: string };
  body?: RichTextField;
  ctaLink?: string;
  ctaText?: string;
}

const SampleHeroBanner: React.FC<HeroBannerTwoProps> = ({
  title,
  heroImage,
  body,
  ctaLink = "/",
  ctaText = "View More",
}) => {
  useScrollSmooth();
  useEffect(() => {
    document.body.classList.add("tp-smooth-scroll");
    return () => {
      document.body.classList.remove("tp-smooth-scroll");
    };
  }, []);

  useGSAP(() => {
    const timer = setTimeout(() => {
      heroTitleAnim();
      heroBgAnimation();
      bounceAnimation();
    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <div className="tp-hero-2-area tp-hero-2-pt">
      <div className="container container-1870">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-hero-2-wrapper-main">
              <div className="tp-hero-2-wrapper d-flex align-items-center p-relative">
                <div className="tp-hero-2-bg tp-gsap-bg tp-hero-bg-single">
                  <Image
                    src={heroImage?.url || defaultHero}
                    alt={heroImage?.alt || "Landing Page Hero Image"}
                    width={1200}
                    height={600}
                    priority
                  />
                </div>

                <div className="tp-hero-2-content-wrap p-relative">
                  <div className="tp-hero-2-title-box">
                    <h2 className="tp-hero-2-title text-1 z-index-5">
                      {typeof title === "string" ? title : "Fashion"}
                    </h2>
                  </div>

                  <div className="tp-hero-2-content">
                    {body ? (
                      <PrismicRichText field={body} />
                    ) : (
                      <p>
                        Bringing Your Fashion {"Brand's"} Unique Identity to
                        Life Through Strategic Marketing and Advertising.
                      </p>
                    )}

                    <Link className="tp-btn-white" href={ctaLink}>
                      {ctaText}
                      <span>
                        <Leaf />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SampleHeroBanner;
