import { Metadata } from 'next';
import { MDXComponents } from '@/components/mdx/mdx-components';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';

const AboutPage = async () => {
	const filePath = path.join(process.cwd(), 'src/contents/about.mdx');
	const fileContent = fs.readFileSync(filePath, 'utf8');
	const { content, data } = matter(fileContent);

	return (
		<div className="space-y-12 container mx-auto my-20 max-md:mb-32 overflow-visible relative">
			<div className="text-center mb-8 relative z-10">
				<h2 className="text-lg text-muted-foreground/60 text-center mb-2 tracking-wider">
					{data.subtitle}
				</h2>
				<h2 className="text-3xl md:text-4xl text-center font-bold mb-4 gradient-text">
					{data.title}
				</h2>
			</div>

			<div className="flex flex-col items-center justify-center text-center gap-4 max-w-3xl m-auto relative z-10">
				<MDXRemote source={content} components={MDXComponents as any} />
			</div>

			{data.stats && <MDXComponents.Stats stats={data.stats} />}
		</div>
	);
};

export default AboutPage;

export const metadata: Metadata = {
	title: 'About',
};
