
export interface IActorsPayload {
    results: IActor[]
}

export interface IActor {
    url: string,
    name: string,
    height: string,
    birth_year: string,
    gender: string,
    films: IFilm[]
}

export interface IFilmsPayload {
    results: IFilm[]
}

export interface IFilm {
    url: string,
    title: string,
    producer: string,
    director: string,
    opening_crawl: string,
    created: Date
}