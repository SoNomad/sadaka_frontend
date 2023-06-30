"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export interface ISearchProps {}

export default function Search(props: ISearchProps) {
  const [searchQwery, setSearchQwery] = useState("");
  const router = useRouter();

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const encodedSearchQuery = encodeURI(searchQwery);
    router.push(`/${encodedSearchQuery}`);
  };

  return (
    <form className="w-2/3 mx-auto flex justify-center" onSubmit={onSearch}>
      <input
        value={searchQwery}
        onChange={(e) => setSearchQwery(e.target.value)}
        className="md:w-full px-5 py-3  text-zinc-200 bg-gray-600 rounded-2xl my-5 focus:outline-slate-500 transition-all duration-500 "
        placeholder="поиск"
      />
    </form>
  );
}
