import Head from "next/head";
import { NavBar } from "../ui/NavBar";

interface Props {
  children: JSX.Element | JSX.Element[];
  title?: string;
}

export const Layout = ({ children, title }: Props) => {
  return (
    <>
      <Head>
        <title>{title ? title : "pokedex"}</title>
        <meta name="author" content="dilan" />
        <meta name="description" content={`informacion del pokemon ${title}`} />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
      </Head>

      <NavBar />

      <main
        style={{
          padding: "0 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};
