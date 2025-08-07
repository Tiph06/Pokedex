// Récupère les 36 premiers Pokémon avec leurs noms en français depuis PokéAPI
export async function getPokemonListFr() {
const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=36");
const data = await res.json();

const detailedPokemons = await Promise.all(
    data.results.map(async (pokemon: any) => {

        const id = pokemon.url.split("/").filter(Boolean).pop();

    const speciesRes = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
    
    const speciesData = await speciesRes.json();

    const frName = speciesData.names.find((n: any) => n.language.name === "fr")?.name || "Inconnu";

return {
    id: Number(id),
    name: frName,
};

}));

return detailedPokemons;
}