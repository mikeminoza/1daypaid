import { getLandingPageBySlug } from "@/utils/prismicio";
import NotFound from "../not-found";
import SampleHeroBanner from "@/components/hero-banner/sample-hero-banner";
import Head from "next/head";
import Wrapper from "@/layouts/wrapper";
import HeaderTwo from "@/layouts/headers/header-two";
import FooterTwo from "@/layouts/footers/footer-two";

interface Props {
  params: { slug: string };
}

export const revalidate = 60;

export default async function LandingPage({ params }: Props) {
  const { slug } = params;

  let page;
  try {
    page = await getLandingPageBySlug(slug);
  } catch {
    return <NotFound />;
  }

  if (!page) return <NotFound />;

  return (
    <Wrapper>
      <Head>
        <title>{page.data.meta_title}</title>
        <meta name="description" content={page.data.meta_description} />
      </Head>
      <HeaderTwo />
      <SampleHeroBanner
        title={page.data.title}
        heroImage={page.data.hero_image}
        body={page.data.body}
      />
      <FooterTwo />
    </Wrapper>
  );
}
