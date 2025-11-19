import { cn } from '@/helpers/cn';
import Link from 'next/link';
import { Separator } from '../ui/separator';
import { generateHeadingId } from '@/helpers/generate-headingId';
import { extractTextFromElement } from '@/helpers/extract-text-from-element';
import * as Icons from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Fragment } from 'react';

export const MDXComponents = {
	...Icons,
	h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
		<h1
			id={generateHeadingId(extractTextFromElement(props.children))}
			className={cn('mt-2 scroll-m-20 text-4xl font-bold', className)}
			{...props}
		/>
	),
	h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
		<h2
			id={generateHeadingId(extractTextFromElement(props.children))}
			className={cn(
				'mt-12 scroll-m-20 pb-2 border-b text-2xl font-semibold tracking-tight first:mt-0',
				className
			)}
			{...props}
		/>
	),
	h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
		<h3
			id={generateHeadingId(extractTextFromElement(props.children))}
			className={cn(
				'mt-8 scroll-m-20 text-xl font-semibold tracking-tight',
				className
			)}
			{...props}
		/>
	),
	h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
		<h4
			className={cn(
				'mt-8 scroll-m-20 text-lg font-semibold tracking-tight',
				className
			)}
			{...props}
		/>
	),
	h5: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
		<h5
			className={cn(
				'mt-8 scroll-m-20 text-lg font-semibold tracking-tight',
				className
			)}
			{...props}
		/>
	),
	h6: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
		<h6
			className={cn(
				'mt-8 scroll-m-20 text-base font-semibold tracking-tight',
				className
			)}
			{...props}
		/>
	),
	a: ({
		className,
		href,
		...props
	}: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
		<Link
			href={href ?? '#'}
			className={cn('font-medium underline underline-offset-4', className)}
			{...props}
		/>
	),
	p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
		<p
			className={cn(
				'leading-7 [&:not(:first-child)]:mt-6 text-muted-foreground',
				className
			)}
			{...props}
		/>
	),
	ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
		<ul
			className={cn('my-3 ml-6 list-disc text-muted-foreground', className)}
			{...props}
		/>
	),
	ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
		<ol
			className={cn('my-3 ml-6 list-decimal text-muted-foreground', className)}
			{...props}
		/>
	),
	li: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
		<li className={cn('mt-2 text-muted-foreground', className)} {...props} />
	),
	blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
		<blockquote
			className={cn('mt-6 border-l-2 pl-6 italic', className)}
			{...props}
		/>
	),
	img: ({
		className,
		alt,
		...props
	}: React.ImgHTMLAttributes<HTMLImageElement>) => (
		// eslint-disable-next-line @next/next/no-img-element
		<img className={cn('rounded-md', className)} alt={alt} {...props} />
	),
	hr: ({ ...props }: React.HTMLAttributes<HTMLHRElement>) => (
		<Separator className="my-4 md:my-8" {...props} />
	),
	table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
		<div className="my-6 w-full overflow-y-auto rounded-lg">
			<table
				className={cn('w-full overflow-hidden rounded-lg', className)}
				{...props}
			/>
		</div>
	),
	tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
		<tr className={cn('m-0 border-t p-0', className)} {...props} />
	),
	th: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
		<th
			className={cn(
				'border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right',
				className
			)}
			{...props}
		/>
	),
	td: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
		<td
			className={cn(
				'border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right',
				className
			)}
			{...props}
		/>
	),
	code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
		<code
			className={cn(
				'relative rounded bg-muted px-[0.3rem] py-[0.2rem] text-base tracking-wide font-bricolage-grotesque',
				className
			)}
			{...props}
		/>
	),
	Stats: ({
		stats,
	}: {
		stats: Array<{ title: string; description: string }>;
	}) => (
		<div className="flex items-center justify-center flex-col">
			<Card>
				<CardContent className="grid grid-cols-[1fr_10px_1fr] sm:flex items-center gap-y-4 gap-x-9 justify-center p-6 text-center">
					{stats.map((stat, i) => (
						<Fragment key={i}>
							{i !== 0 && (
								<Separator
									orientation="vertical"
									className="h-14 w-px hidden max-sm:[&:nth-child(2)]:block max-sm:[&:nth-child(7)]:block sm:block"
								/>
							)}
							{i === 2 && (
								<Separator
									orientation="horizontal"
									className="h-px w-full sm:hidden col-span-3"
								/>
							)}
							<div className="flex flex-col items-center justify-center">
								<h3 className="text-xl md:text-2xl xl:text-3xl font-medium">
									{stat.title}
								</h3>
								<p className="text-sm md:text-base text-muted-foreground">
									{stat.description}
								</p>
							</div>
						</Fragment>
					))}
				</CardContent>
			</Card>
		</div>
	),
	// pre: ({
	//   children,
	//   ...props
	// }: React.HTMLAttributes<HTMLElement> & {
	//   wrapButton?: boolean;
	// }) => {
	//   const regex = /language\s*=\s*"([^"]+)"/;
	//   const match = props.className?.match(regex);
	//   const lang = match ? match[1] : "js";
	//   const code = (
	//     (children as ReactElement)?.props?.children as string
	//   )?.trim();
	//   return <HighlightCode language={lang} code={code} {...props} />;
	// },
};
