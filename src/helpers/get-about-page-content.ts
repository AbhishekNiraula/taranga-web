import path from "path";
import fs from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import { MDXComponents } from "@/components/mdx/mdx-components";
import { ReactElement } from "react";

const PATH_T0_ABOUT_PAGE = "src/contents/about.mdx";

export type AboutPageContent = {
  title: string;
  subtitle: string;
  stats: {
    title: string,
    description: string
  }[];
  content: ReactElement;
};

export const getAboutPageContent = async (): Promise<AboutPageContent | null> => {
  try {
    const fullPath = path.join(process.cwd(), PATH_T0_ABOUT_PAGE);
    const source = fs.readFileSync(fullPath, "utf-8");
    const { frontmatter, content } = await compileMDX<AboutPageContent>({
      source: source,
      // @ts-expect-error error
      components: MDXComponents,
      options: {
        parseFrontmatter: true,
      },
    });

    return {
      title: frontmatter.title,
      content: content,
      subtitle: frontmatter.subtitle,
      stats: frontmatter.stats
    };


  } catch (error) {
    console.log(error);
    return null
  }
};
