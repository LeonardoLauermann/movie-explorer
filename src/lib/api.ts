import { GenreResponse } from '@/types/tmdb';

const BASE_URL = process.env.NEXT_PUBLIC_TMDB_BASE_URL;
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const IMAGE_BASE_URL = process.env.NEXT_PUBLIC_TMDB_IMAGE_URL;

interface FetchOptions extends RequestInit {
  params?: Record<string, string | number>;
}

export const imageUrl = (path: string | null) => {
  if (!path) {
    return '/page-not-found.png'
  }

  return `${IMAGE_BASE_URL}${path}`;
};

export async function fetchClient<T = unknown>(endpoint: string, {params, ...customConfig}: FetchOptions = {}): Promise<T> {

  const headers = {
    'Content-Type': 'application/json',
    ...customConfig.headers,
  };

  const searchParams = new URLSearchParams();
  if (API_KEY) searchParams.append('api_key', API_KEY);
  searchParams.append('language', 'pt-BR');

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      searchParams.append(key, String(value));
    });
  }

  const config: RequestInit = {
    ...customConfig,
    headers,
    next: {revalidate: 3600},
  };

  try {
    const response = await fetch(`${BASE_URL}${endpoint}?${searchParams.toString()}`, config);

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Erro na requisição: ${response.status} - ${errorMessage}`);
    }
    const data = await response.json();
    return data as T;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}

export async function getMovieGenres() {
  const data = await fetchClient<GenreResponse>(
    '/genre/movie/list',
    {
      params: { language: 'pt-BR' },
      next: { revalidate: 86400 },
    }
  );

  return data.genres;
}
