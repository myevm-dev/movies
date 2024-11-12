import type { QueryItem } from '~/types'

export const QUERY_LIST = {
  movie: <QueryItem[]>([
    { type: 'movie', title: 'Upcoming Movie Fan Clubs', query: 'upcoming' },
    { type: 'movie', title: 'Now Playing Movie Fan Clubs', query: 'now_playing' },
    { type: 'movie', title: 'Popular Movie Fan Clubs', query: 'popular' },
    { type: 'movie', title: 'Top Rated Movie Fan Clubs', query: 'top_rated' },

  ]),
  tv: <QueryItem[]>([
    { type: 'tv', title: 'Popular TV Shows', query: 'popular' },
    { type: 'tv', title: 'Top Rated TV Shows', query: 'top_rated' },
    { type: 'tv', title: 'TV Shows Airing Today', query: 'airing_today' },
  ]),
}
