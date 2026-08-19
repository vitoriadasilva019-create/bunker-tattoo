/** @type {import('next').NextConfig} */
const nextConfig = {
  // Gera um site 100% estático (HTML/CSS/JS) na pasta `out/`,
  // pronto para subir em qualquer hospedagem como a Hostinger.
  output: 'export',
  // Garante que cada rota vire uma pasta com index.html (URLs limpas).
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
