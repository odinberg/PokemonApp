import React from "react";
import { StyleSheet, Text } from "react-native";
import { Characteristic } from "../api/PokeApi";


type Props = { pokemon: Characteristic };

export default function PokemonCharacteristic({ pokemon }: Props) {
  return (
    <Text style={styles.pokemonCharacteristic}>
      {`Hva er greia til ${pokemon ?? "unknown"}? <= Insert here`}
    </Text>
  );
}

const styles = StyleSheet.create({
  pokemonCharacteristic: { color: "gray", fontSize: 16 },
});
