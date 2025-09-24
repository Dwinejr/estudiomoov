import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Função para gerar caminhos de assets que funcionem tanto em desenvolvimento quanto em produção
export function getAssetPath(path: string): string {
  // Usa caminho relativo para funcionar tanto em desenvolvimento quanto em produção
  return path
}
