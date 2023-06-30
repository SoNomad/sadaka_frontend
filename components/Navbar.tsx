import Link from "next/link";

export interface INavbarProps {}

export default function Navbar(props: INavbarProps) {
  return (
    <header className="bg-slate-600 sticky z-10 top-0 text-white">
      <section className="max-w-5xl mx-auto p-4 flex justify-between items-center">
        <h1>
          <Link href="/" className="uppercase font-bold ">
            sadaka
          </Link>
        </h1>
        <div
          className="text-3xl md:hidden focus:outline-none"
          id="mobile-open-button"
        >
          &#9776;
        </div>
        <nav className="hidden md:block ">
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:opacity-80">
                Главная
              </Link>
            </li>
            <li>
              <Link href="/favourites" className="hover:opacity-80">
                Избранное
              </Link>
            </li>
            <li>
              <Link href="profile" className="hover:opacity-80">
                Добавленные
              </Link>
            </li>

            <li>
              <Link href="about" className="hover:opacity-80">
                О нас
              </Link>
            </li>
            <li>
              <Link href="profile" className="hover:opacity-80">
                Профиль
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
}
{
  /* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg> */
}
