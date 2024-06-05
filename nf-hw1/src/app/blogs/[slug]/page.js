import path from 'path';
import fs from 'fs';
import {notFound} from 'next/navigation';

async function fetchBlogData(slug) {
    const filePath = path.join(process.cwd(), 'data', 'data.json');
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    const blogs = JSON.parse(jsonData);
    console.log('Fetched blogs:', blogs);
    return blogs.find(blog => blog.slug === slug);
}

export async function generateStaticParams() {
    const filePath = path.join(process.cwd(), 'data', 'data.json');
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    const blogs = JSON.parse(jsonData);

    return blogs.map(blog => ({
        slug: blog.slug,
    }));
}

export default async function BlogDetail({params}) {
    console.log('Params:', params);
    const blog = await fetchBlogData(params.slug);
    console.log('Fetched blog:', blog);

    if (!blog) {
        notFound();
    }

    return (
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 max-w-6xl mx-auto py-8 md:py-12">
            <div className="flex-1">
                <article className="prose prose-gray max-w-none dark:prose-invert">
                    <div className="space-y-4 not-prose">
                        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
                            {blog.title}
                        </h1>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <img src={blog.authorImage} width={32} height={32} alt="Author avatar"
                                     className="rounded-full"/>
                                <span className="text-gray-500 dark:text-gray-400">{blog.author}</span>
                            </div>
                            <span className="text-gray-500 dark:text-gray-400">{blog.date}</span>
                        </div>
                    </div>
                    <img src={blog.image} alt={blog.title}
                         className="aspect-video overflow-hidden rounded-lg object-cover"/>
                    <div dangerouslySetInnerHTML={{__html: blog.content}}></div>
                </article>
            </div>
        </div>
    );
}
