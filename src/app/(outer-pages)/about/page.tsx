import { Metadata } from 'next';
import { MDXComponents } from '@/components/mdx/mdx-components';
import { getAboutPageContent } from '@/helpers/get-about-page-content';
import RenderMdx from '@/components/mdx/render-mdx';

const AboutPage = async () => {
  const about = await getAboutPageContent()
  if (!about) return null
  return (
    <div className="space-y-12 container mx-auto my-20 max-md:mb-32 overflow-visible relative">
      <div className="text-center mb-8 relative z-10">
        <h2 className="text-lg text-muted-foreground/60 text-center mb-2 tracking-wider">
          {about.subtitle}
        </h2>
        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4 gradient-text">
          {about.title}
        </h2>
      </div>

      <div className="flex flex-col items-center justify-center text-center gap-4 max-w-3xl m-auto relative z-10">
        <RenderMdx
          id='about-page'
        >
          {about.content}
        </RenderMdx>
      </div>

      {about.stats && <MDXComponents.Stats stats={about.stats} />}
    </div>
  );
};

export default AboutPage;

export const metadata: Metadata = {
  title: 'About',
};
