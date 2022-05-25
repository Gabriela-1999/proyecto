
const getInformacion = async () => {
    const pocke = [];
    for(let indice = 1; indice <= 151; indice++) {
    let responseAPI = await fetch (`https://pokeapi.co/api/v2/pokemon/${indice}`);
    let informacionJSON= await responseAPI.json();
        pocke.push(informacionJSON);
        console.log(informacionJSON);
      
    }
    const poki = pocke.map ((pokemon) => ({
        name: pokemon.name,
        image: pokemon.sprites['front_default'],
		default: pokemon.is_default,
        
    }));

    const container$$ = document.querySelector(".container");
    for (const pokemon of poki) {
        const div$$ = document.createElement("div");
        const h$$ = document.createElement("h2");
        h$$.innerText=pokemon.name;
        
        const p$$ = document.createElement("p");
        p$$.innerText= pokemon.default;
        const image$$ = document.createElement("img");
        image$$.src=pokemon.image;

        div$$.appendChild(p$$);
        div$$.appendChild(h$$);
        div$$.appendChild(image$$);
        
        container$$.appendChild(div$$);
    }

}
    
getInformacion();