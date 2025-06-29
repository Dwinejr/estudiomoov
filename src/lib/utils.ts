import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Função para gerar caminhos de assets que funcionem tanto em desenvolvimento quanto em produção
export function getAssetPath(path: string): string {
  // Se estiver em desenvolvimento (localhost), usa caminho relativo
  if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
    return path
  }
  
  // Se estiver em produção (GitHub Pages), adiciona o base path
  return `/estudiomoov${path}`
}
