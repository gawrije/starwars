interface IFilmPayload {
    results: IFilm[];
}

interface IFilm {
    title: string;
    producer: string;
    director: string;
    opening_crawl: string;
    created: string;
}


interface IActorsPayload {
    actors: IActor[];
}

interface IActor {
    name: string;
    height: string;
    birth_year: string;
    gender: string;
    id: string;
}
