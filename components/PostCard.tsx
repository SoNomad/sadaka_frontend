import { Post } from "@/types/type";
import Image from "next/image";

export interface IPostCard {
  post: Post;
}

export default function PostCard({ post }: IPostCard) {
  return (
    <div key={post.id} className="bg-white mx-auto mb-3 md:w-2/3">
      <div className="mb-3">
        <Image
          alt={post.name}
          width={400}
          height={400}
          src={post.images}
          style={{ objectFit: "contain" }}
        />
      </div>
      <div>
        <h2 className="text-xl font-bold text-center">{post.name}</h2>
        <h3>{post.address}</h3>
      </div>
    </div>
  );
}
