import { GetStaticProps, NextPage } from "next";
import { Layout } from "../components/layouts/Layout";
import pokeApi from "../api/pokeApi";
import { PokemonListResponse } from "../interfaces/pokemonList";
import { Pokemon } from "../interfaces/pokemonList";

const Home: NextPage<{ pokemons: Pokemon[] }> = ({ pokemons }) => {
  return (
    <Layout title="listado de pokemons">
      <ul>
        {pokemons.map((pokemon, index) => (
          <li key={index + 1}>
            <p>{pokemon.name}</p>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>("pokemon?limit=151");

  return {
    props: { pokemons: data.results },
  };
};

export default Home;
