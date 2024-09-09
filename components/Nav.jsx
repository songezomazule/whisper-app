"use client";
import Link from "next/link";
import Image from "next/image";
import { Fugaz_One } from "next/font/google";
import { useEffect, useState } from "react";
import { getProviders, signIn, signOut, useSession } from "next-auth/react";

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });

const Nav = () => {
  const [dropdown, setDropdown] = useState(false);

  // To sign in using next-auth, we need Providers
  const [providers, setProviders] = useState(null);
  const { data: session } = useSession();

  useEffect(() => {
    const setUpProviders = async () => {
      const respnse = await getProviders();

      setProviders(respnse);
    };
    setUpProviders();
  }, []);

  const toggleDropdown = () => {
    setDropdown((prevState) => !prevState);
  };

  return (
    <nav className="p-2 h-[50px] flex items-center justify-between">
      <Link className="flex items-center gap-2" href="/">
        <Image
          src="/images/logo1.png"
          width={45}
          height={45}
          className="rounded-full sm:flex hidden "
          alt="logo"
        ></Image>
        <p className={"text-base sm:text-sm " + fugaz.className}>Whisper</p>
      </Link>

      {/* Desktop Nav */}

      {session?.user ? (
        <div className="gap-2 items-center hidden sm:flex">
          <Link className="flex items-center" href="/create_secret">
            <button className="button-black-white text-sm py-2">Create</button>
          </Link>
          <button
            type="button"
            onClick={signOut}
            className="button-black-white text-sm h-[38px]"
          >
            Sign Out
          </button>
          <Link href="/profile">
            <Image
              src={session?.user.image}
              width={40}
              height={40}
              className="rounded-full "
              alt="profile"
            ></Image>
          </Link>
        </div>
      ) : (
        <>
          {providers &&
            Object.values(providers).map((provider) => (
              <button
                type="button"
                key={provider.name}
                onClick={() => signIn(provider.id)}
                className="button-black-white text-sm h-[38px]"
              >
                Sign In
              </button>
            ))}
        </>
      )}

      {/**Mobile Navigation */}

      {session?.user ? (
        <div className="relative flex flex-col justify-end sm:hidden">
          <button onClick={toggleDropdown}>
            <Image
              src={session?.user.image}
              width={35}
              height={35}
              className="rounded-full "
              alt="profile"
            ></Image>
          </button>
          {dropdown && (
            <div className="dropdown">
              <Link
                className="dropdown_link"
                href="/profile"
                onClick={() => setDropdown(false)}
              >
                <p>Profile</p>
              </Link>
              <Link
                className="dropdown_link"
                href="/create_secret"
                onClick={() => setDropdown(false)}
              >
                <p>Create Secret</p>
              </Link>
              <button
                type="button"
                onClick={signOut}
                className="button-black-white text-sm h-[38px]"
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      ) : (
        <></>
      )}
    </nav>
  );
};

export default Nav;
