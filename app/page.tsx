import Search from "@/components/SearchInput";
import { Post } from "@/types/type";
import PostCard from "@/components/PostCard";
import Image from "next/image";
import { Button } from "@/ui/Button/Button";

// async function getPosts() {
//   const res = await fetch("http://localhost:4000/Product", {
//     method: "GET",
//   });
//   return res.json();
// }

export default async function Home() {
  // const posts: Post[] = await getPosts();

  return (
    <main>
      <Search />
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-white">Posts</h1>
        <Button variant="primary">
          Позвонить
        </Button>

        {/* <section className="md:grid md:justify-center">
          <div className="mt-10 md:grid md:grid-cols-2 lg:grid-cols-3 md:grid-rows-4 md:gap-3">
            {posts.map((post) => (
              <PostCard post={post} />
            ))}
          </div>
        </section> */}
      </div>
    </main>
  );
}
