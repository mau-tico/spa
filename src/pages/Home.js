import getData from "../utils/getData";

const Home = async () => {
    const characters = await getData();
    const view = `
    <div class="Characters">

        ${characters.results.map(characters => `
        <article class="Character-item">
            <a href="#/${characters.id}/">
                <img src="${characters.image}" alt="${characters.name}">
                <h2>${characters.name}</h2>
            </a>
        </article>  
        `).join('')}

    </div>
    `;
    return view;
};

export default Home;