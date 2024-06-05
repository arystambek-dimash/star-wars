import Link from "next/link";
import Card from "@/app/components/Card";
import path from "path";
import fs from "fs";

async function fetchData() {
    const filePath = path.join(process.cwd(), 'data', 'data.json');
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(jsonData);
}

export default async function Blogs() {
    const blogs = await fetchData();
    return (
        <div className="container mx-auto py-8 px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {blogs.map((blog) => (
                        <Card key={blog.id} blog={blog}/>
                    ))}
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 h-[400px]">
                    <h3 className="text-xl font-bold mb-4">Categories</h3>
                    <div className="grid grid-cols-1 gap-2">
                        <Link
                            href="#"
                            className="text-gray-600 hover:text-primary-500 transition-colors duration-300"
                            prefetch={false}
                        >
                            Technology
                        </Link>
                        <Link
                            href="#"
                            className="text-gray-600 hover:text-primary-500 transition-colors duration-300"
                            prefetch={false}
                        >
                            Entrepreneurship
                        </Link>
                        <Link
                            href="#"
                            className="text-gray-600 hover:text-primary-500 transition-colors duration-300"
                            prefetch={false}
                        >
                            Personal Development
                        </Link>
                        <Link
                            href="#"
                            className="text-gray-600 hover:text-primary-500 transition-colors duration-300"
                            prefetch={false}
                        >
                            Marketing
                        </Link>
                        <Link
                            href="#"
                            className="text-gray-600 hover:text-primary-500 transition-colors duration-300"
                            prefetch={false}
                        >
                            Design
                        </Link>
                    </div>
                    <div className="mt-6">
                        <h3 className="text-xl font-bold mb-4">Search</h3>
                        <input
                            type="text"
                            placeholder="Search blog posts..."
                            className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
