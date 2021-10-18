import Axios from "axios";

Axios.defaults.baseURL = "https://pokeapi.co/api/v2/";

export type Pokemon = {
    id: number;
    name: string;
    base_experience: number;
    sprites: {front_shiny: string}
}

export type PokemonColor = {
    id: number;
    name: string;
}
// export type EggGroup = {
//     id: number;
//     name: string;
// }
export type Characteristic = {
    id: number;
    descriptions: 
        {
            description: string;
            language: {name: string};
        }[];
}
export type Berry = {
    id: number;
    name: string;
    growth_time: string;
    natural_gift_power: string;
}

const getPokemon = async (pokemon: number | string) => {
    try {
        const response = await Axios.get<Pokemon>(`pokemon/${pokemon}`)
        return response.data;
        
    } catch (error) {
        throw "Feil ved henting av pokemon: " + error
        
    }
}

// const getEggGroup = async (eggId: number ) => {
//     try {
//         const response = await Axios.get<EggGroup>(`egg-group/${eggId}`)
//         console.log(response.data)
//         return response.data;
//     } catch (error) {
//         throw "Feil ved henting av pokemon: " + error
//     }
// }

const getBerry = async (berryId: number) => {
    try {
        const response = await Axios.get<Berry>(`berry/${berryId}`)
        console.log(response.data)
        return response.data
    } catch (error) {
        throw "Feil ved henting av pokemon: " + error
    } 
}

const getPokemonColor = async (pokemon: number | string) => {
    try {
        const response = await Axios.get<PokemonColor>(`pokemon-color/${pokemon}`)
        return response.data;
        
    } catch (error) {
        throw "Feil ved henting av pokemon: " + error
        
    }
}
const getCharacteristic = async (pokemonId: number) => {
    try {
        const response = await Axios.get<Characteristic>(`characteristic/${pokemonId}`)
        return response.data;
        
    } catch (error) {
        throw "Feil ved henting av pokemon: " + error
        
    }
}



export default {
    getPokemon,
    getBerry,
    getPokemonColor,
    getCharacteristic,
    // getEggGroup,
}