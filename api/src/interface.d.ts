
interface ActorsRequestPayload {
    results: Actor[]
}

interface Actor {
    url: string,
    name: string,
    height: string,
    birth_year: string,
    gender: string
}

interface FilmsRequestPayload {
    results: Film[]
}

interface Film {
    url: string,
    title: string,
    producer: string,
    director: string,
    opening_crawl: string,
    created: Date
}