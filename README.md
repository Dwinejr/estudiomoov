# Guia de Uso - Estúdio Moov (Versão Otimizada)

Este documento contém instruções para executar e manter o site otimizado do Estúdio Moov.

## Sobre a Otimização

O projeto foi otimizado para remover dependências desnecessárias e atualizar as bibliotecas essenciais para versões mais recentes e estáveis. Isso resolve o problema de compatibilidade encontrado anteriormente e torna o projeto mais leve e fácil de manter.

## Dependências Principais

O projeto agora utiliza apenas:
- React 18.2.0
- React DOM 18.2.0
- Vite (para build e desenvolvimento)
- Tailwind CSS (para estilos)

## Como Executar o Projeto Localmente

1. **Instalar as dependências**:
   ```
   npm install
   ```
   ou
   ```
   yarn install
   ```
   ou
   ```
   pnpm install
   ```

2. **Iniciar o servidor de desenvolvimento**:
   ```
   npm run dev
   ```
   ou
   ```
   yarn dev
   ```
   ou
   ```
   pnpm dev
   ```

3. **Acessar o site**:
   Abra seu navegador e acesse `http://localhost:5173`

## Como Gerar a Versão de Produção

1. **Construir o projeto**:
   ```
   npm run build
   ```
   ou
   ```
   yarn build
   ```
   ou
   ```
   pnpm build
   ```

2. **Visualizar a versão de produção localmente** (opcional):
   ```
   npm run preview
   ```
   ou
   ```
   yarn preview
   ```
   ou
   ```
   pnpm preview
   ```

3. **Implantar**:
   Após a construção, os arquivos estáticos estarão na pasta `dist` prontos para serem implantados em qualquer servidor web.

## Estrutura do Projeto

- `src/components/`: Contém todos os componentes React do site
- `src/animations.css`: Contém as animações CSS personalizadas
- `public/`: Contém arquivos estáticos como imagens e ícones
- `index.html`: Arquivo HTML principal

## Personalização

### Para adicionar ou modificar seções:
1. Crie ou edite os componentes em `src/components/`
2. Importe e adicione-os em `src/App.jsx`

### Para modificar estilos:
- Use classes Tailwind CSS diretamente nos componentes
- Para estilos personalizados, edite `src/index.css` ou `src/animations.css`

### Para adicionar novas imagens:
1. Adicione as imagens na pasta `public/assets/`
2. Referencie-as nos componentes usando o caminho `/assets/nome-da-imagem.jpg`

## Manutenção

- **Atualização de dependências**: Execute `npm outdated` para verificar atualizações disponíveis e `npm update` para atualizá-las.
- **Adição de novas funcionalidades**: Mantenha a estrutura de componentes e evite adicionar dependências desnecessárias.
