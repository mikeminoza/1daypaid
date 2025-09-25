import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FirstBracket, FirstBracketTwo, RightArrow, SvgBg } from "../svg";
import icon from "@/assets/img/home-03/service/sv-icon-1.png";

const service_data = [
  {
    id: 1,
    title: "AI Image Generation",
    desc: "Generate stunning, high-quality images for your social media and webshop content with the power of AI. No design skills required.",
    category: ["AI-Powered", "Content Creation", "Social Media"],
  },
  {
    id: 2,
    title: "All-in-one Hub",
    desc: "Manage all your content in one place. From idea to publication, our Airtable template streamlines your entire workflow.",
    category: ["Airtable", "Workflow", "Organization"],
  },
  {
    id: 3,
    title: "Unlimited Customization",
    desc: "Customize the template to your heart's content. Adapt it to your brand, your workflow, and your unique needs. The possibilities are endless.",
    category: ["Customizable", "Branding", "No-Code"],
  },
];
export default function ServiceFour() {
  return (
    <div className="tp-service-3-area pt-130 pb-130">
      <div className="container">
        <div className="row">
          <div className="col-xl-9">
            <div className="tp-service-3-title-box mb-60 p-relative">
              <div className="tp-service-3-icon">
                <Image src={icon} alt="icon" />
              </div>
              <span className="tp-section-subtitle-2 tp_fade_bottom">
                <span>
                  <FirstBracket />
                </span>
                <span className="tp-subtitle-text tp_text_invert">
                  Our approach
                </span>
                <span>
                  <FirstBracketTwo />
                </span>
              </span>
              <h4 className="tp-section-title-90 tp_text_invert tp_fade_bottom">
                Creative <br /> development studio
              </h4>
            </div>
          </div>
        </div>

        {service_data.map((item) => (
          <div key={item.id} className="tp-service-3-wrap tp_fade_bottom">
            <div className="row align-items-start">
              <div className="col-xl-3 col-lg-3">
                <div className="tp-service-3-title-box">
                  <h4 className="tp-service-3-title">
                    <Link href="/service">{item.title}</Link>
                  </h4>
                </div>
              </div>
              <div className="col-xl-7 col-lg-7">
                <div className="tp-service-3-content">
                  <p dangerouslySetInnerHTML={{ __html: item.desc }}></p>
                  <div className="tp-service-3-category">
                    {item.category.map((c, i) => (
                      <span key={i}>{c}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2">
                <div className="tp-service-3-btn-box text-start text-md-end">
                  <Link className="tp-btn-zikzak-sm p-relative" href="/service">
                    <span className="zikzak-content">
                      See <br /> Details
                      <RightArrow clr="currentColor" />
                    </span>
                    <span>
                      <SvgBg />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
