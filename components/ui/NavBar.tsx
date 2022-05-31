import Image from "next/image";
import { useTheme, Text, Spacer } from "@nextui-org/react";

export const NavBar = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "start",
        padding: "20px 0",
        backgroundColor: theme?.colors.accents1.value,
      }}
    >
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        width={80}
        height={80}
        alt="img"
      />

      <Text color="white" h2>
        Pokemon
      </Text>
      <Spacer css={{ flex: 1 }} />
      <Text color="white">Favoritos</Text>
    </div>
  );
};
