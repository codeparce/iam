import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export interface Experiencia {
  titulo: string
  descripcion: string
  empresa: string
  tecnologias: string[]
  images?: string[]
  urls?: string[]
}

export interface FetchOptions {
  url: string
  method?: "GET" | "POST" | "PUT" | "DELETE"
  body?: unknown
  headers?: HeadersInit
}

export async function fetchData<T>({
  url,
  method = "GET",
  body,
  headers = {},
}: FetchOptions): Promise<T> {
  const response = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
  })

  if (!response.ok) {
    throw new Error(`Error ${response.status}: ${response.statusText}`)
  }

  return response.json() as Promise<T>
}