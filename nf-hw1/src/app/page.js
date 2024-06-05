import path from 'path';
import Card from "@/app/components/Card";
import fs from "fs";

async function fetchData() {
    const filePath = path.join(process.cwd(), 'data', 'data.json');
    console.log(filePath)
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(jsonData);
}

export default async function Home() {
    const blogs = await fetchData();
    const latestBlogs = blogs.slice(0, 3);

    return (
        <main className="min-h-screen">
            <section className="p-8 flex flex-col md:flex-row items-center justify-center bg-white">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5rlH1RWKuZicrLPnZqGm885HZPJSXz4bTzw&usqp=CAU"
                    alt="Blog Post"
                    className="w-full md:w-1/2 rounded-lg shadow-lg mb-4 md:mb-0"/>
                <div className="md:ml-8 text-center md:text-left">
                    <a className="text-4xl font-bold mb-4 block">I applied for 300 jobs so you don't have to.</a>
                    <p className="text-xl mb-4">What I learned after 313 job applications (and 295 rejections).</p>
                    <p className="text-gray-500">May 17, 2023 - Dias Sadikov</p>
                </div>
            </section>
            <hr className="w-full border-t border-gray-300 my-8"/>
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <p className="text-2xl font-semibold mb-4">Latest</p>
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {latestBlogs.map((blog) => (
                        <Card key={blog.id} blog={blog}/>
                    ))}
                </section>
            </div>
        </main>
    );
}
