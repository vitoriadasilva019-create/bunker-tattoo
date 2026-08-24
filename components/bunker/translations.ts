export type Lang = 'en' | 'pt'

export interface ProcessCard {
  phase: string
  num: string
  title: string
  text: string
  icon: string
  tag: string
}

export interface GalleryItem {
  src: string
  alt: string
  obra: string
  title: string
  style: string
  filter: string
}

export interface Artist {
  initials: string
  index: string
  name: string
  spec: string
  bio: string
  photo?: string
  photoAlt?: string
}

interface Dictionary {
  nav: {
    brand: string
    process: string
    collections: string
    artists: string
    start: string
  }
  progress: string
  intro: {
    line1: string
    line2: string
    scroll: string
    logoAlt: string
  }
  brand: {
    text1: string
    text2: string
    subtext: string
  }
  immersion: {
    eyebrow: string
    title: string
    desc: string
    close01: string
    frame1Title: string
    close02: string
    frame2Title: string
  }
  process: {
    eyebrow: string
    title: string
    cards: ProcessCard[]
  }
  portfolio: {
    eyebrow: string
    title: string
    items: GalleryItem[]
  }
  artistsSection: {
    eyebrow: string
    title: string
    subtitle: string
    portraitSoon: string
    list: Artist[]
  }
  cta: {
    phase1: string
    phase2: string
    button: string
    note: string
  }
  footer: {
    copyright: string
    privacy: string
    instagram: string
    location: string
  }
}

export const translations: Record<Lang, Dictionary> = {
  en: {
    nav: {
      brand: 'The Brand',
      process: 'The Process',
      collections: 'Collections',
      artists: 'Artists',
      start: 'Begin',
    },
    progress: 'Journey',
    intro: {
      line1: 'Your skin. Your story.',
      line2: 'Our art.',
      scroll: 'Scroll to begin',
      logoAlt: 'Bunker Tattoo — Art & Identity',
    },
    brand: {
      text1: "We don't tattoo drawings.",
      text2: 'We immortalize stories.',
      subtext:
        "Skin is the last blank canvas. We don't create temporary adornments. We create symbols of power, vulnerability, and eternity.",
    },
    immersion: {
      eyebrow: 'Macro Aesthetic',
      title: 'The obsession with the millimeter.',
      desc: 'The precision of the needle meets the volatility of the ink. Each drop penetrates like poetry into the architecture of the human body.',
      close01: 'Camera Close 01',
      frame1Title: 'The Fusion of the Needle',
      close02: 'Camera Close 02',
      frame2Title: 'Art Coming to Life',
    },
    process: {
      eyebrow: 'How it works',
      title: 'The Evolution of the Work',
      cards: [
        {
          phase: 'Phase I',
          num: '01',
          title: 'The Spark / Concept',
          text: 'We map your personal narrative, your emotional scars and triumphs. The process begins with a deep conversation, free of any initial aesthetic pretension.',
          icon: 'solar:dialog-linear',
          tag: 'Psychological Understanding',
        },
        {
          phase: 'Phase II',
          num: '02',
          title: 'Visual Deconstruction',
          text: 'Our artists craft original designs, deconstructing traditional references to shape a visual anatomy perfectly adapted to you.',
          icon: 'solar:pen-linear',
          tag: 'Aesthetic Haute Couture',
        },
        {
          phase: 'Phase III',
          num: '03',
          title: 'Anatomical Alignment',
          text: 'Projection of the design over your specific muscular curves. The art is alive and must flow harmoniously with your natural movement.',
          icon: 'solar:ruler-linear',
          tag: 'Body Fluidity & Symmetry',
        },
        {
          phase: 'Phase IV',
          num: '04',
          title: 'The Ritualistic Execution',
          text: "This is the moment the tattoo begins and the message starts to take shape. The artist's rhythm is meditative, focused on the softness of the line, the absolute integrity of the skin, and the client's unique experience.",
          icon: 'solar:magic-stick-linear',
          tag: 'With a private space for greater comfort',
        },
        {
          phase: 'Phase V',
          num: '05',
          title: 'Eternal Transparency',
          text: 'Aftercare is followed individually. The final result becomes part of who you are. Intangible, undeniable, unrepeatable.',
          icon: 'solar:crown-minimalistic-linear',
          tag: 'Immortalized Legacy',
        },
      ],
    },
    portfolio: {
      eyebrow: 'Private Collection',
      title: 'Exhibition Studio',
      items: [
        {
          src: '/images/obra-slash.png',
          alt: 'Realistic tattoo of a Gibson Les Paul guitar headstock with the Slash signature',
          obra: 'Piece I',
          title: 'Tribute in Strings',
          style: 'B&W Realism',
          filter: 'contrast-105 brightness-95',
        },
        {
          src: '/images/obra-dragao.jpg',
          alt: 'Oriental dragon back tattoo with cherry blossoms and a red moon',
          obra: 'Piece II',
          title: 'Eastern Guardian',
          style: 'Oriental',
          filter: 'contrast-105 brightness-95',
        },
        {
          src: '/images/obra-lobos.jpg',
          alt: 'Colorful watercolor wolf tattoos on the calves',
          obra: 'Piece III',
          title: 'Wild Soul',
          style: 'Watercolor',
          filter: 'contrast-105 brightness-95',
        },
        {
          src: '/images/obra-anime.png',
          alt: 'Illustrative anime-style tattoo on the forearm',
          obra: 'Piece IV',
          title: 'Ninja Heritage',
          style: 'Realism',
          filter: 'contrast-105 brightness-95',
        },
        {
          src: '/images/obra-fineline.png',
          alt: 'Fine line floral tattoo with a geometric triangle on the ribs',
          obra: 'Piece V',
          title: 'Botanical Geometry',
          style: 'Fine Line',
          filter: 'contrast-105 brightness-95',
        },
        {
          src: '/images/obra-girassol.png',
          alt: 'Colorful sunflower tattoo with a signature-shaped stem on the forearm',
          obra: 'Piece VI',
          title: 'To Bloom',
          style: 'Fine Line',
          filter: 'contrast-105 brightness-95',
        },
      ],
    },
    artistsSection: {
      eyebrow: 'Master Artist',
      title: 'The Cast of the Uncommon',
      subtitle:
        "We don't hire technicians. We recruit visionaries who master the matter of the body and the mystique of the craft.",
      portraitSoon: 'Portrait coming soon',
      list: [
        {
          initials: 'LG',
          index: '01 / Fine Line & Realism',
          name: 'Lewis Green',
          spec: 'Fine Line / Realism',
          bio: "Lewis was born and raised in Cuiabá, Brazil, with art running through his veins. For 12 years he has turned skin into works of art and immortalized stories, always obsessed with detail. Outside the studio, he's a bass player — because talent like this can't be confined to a single instrument. Line or note, the result is always the same: art that resonates.",
          photo: '/images/lewis-green.png',
          photoAlt: 'Portrait of Lewis Green',
        },
      ],
    },
    cta: {
      phase1: "Your next tattoo doesn't begin with a needle.",
      phase2: 'It begins with a story.',
      button: 'Book my appointment',
      note: 'Private Environment with High Exclusivity',
    },
    footer: {
      copyright: 'Bunker Tattoo © 2024',
      privacy: 'Privacy',
      instagram: 'Instagram',
      location: 'Location',
    },
  },
  pt: {
    nav: {
      brand: 'A Marca',
      process: 'O Processo',
      collections: 'Coleções',
      artists: 'Artistas',
      start: 'Iniciar',
    },
    progress: 'Jornada',
    intro: {
      line1: 'Sua pele. Sua história.',
      line2: 'Nossa arte.',
      scroll: 'Desça para iniciar',
      logoAlt: 'Bunker Tattoo — Art & Identity',
    },
    brand: {
      text1: 'Nós não tatuamos desenhos.',
      text2: 'Nós eternizamos histórias.',
      subtext:
        'A pele é a última tela em branco. Não criamos adornos temporários. Criamos símbolos de poder, vulnerabilidade e eternidade.',
    },
    immersion: {
      eyebrow: 'Estética Macro',
      title: 'A obsessão pelo milímetro.',
      desc: 'A precisão da agulha encontra a volatilidade da tinta. Cada gota penetra como poesia na arquitetura do corpo humano.',
      close01: 'Câmera Close 01',
      frame1Title: 'A Fusão da Agulha',
      close02: 'Câmera Close 02',
      frame2Title: 'A Arte Tomando Vida',
    },
    process: {
      eyebrow: 'Como funciona',
      title: 'A Evolução da Obra',
      cards: [
        {
          phase: 'Fase I',
          num: '01',
          title: 'A Centelha / Conceito',
          text: 'Mapeamos sua narrativa pessoal, cicatrizes emocionais e triunfos. O processo começa em uma conversa profunda e sem pretensões estéticas iniciais.',
          icon: 'solar:dialog-linear',
          tag: 'Compreensão Psicológica',
        },
        {
          phase: 'Fase II',
          num: '02',
          title: 'A Desconstrução Visual',
          text: 'Nossos artistas projetam designs autorais, desconstruindo referências tradicionais para formular uma anatomia visual perfeitamente adaptada a você.',
          icon: 'solar:pen-linear',
          tag: 'Alta Alfaiataria Estética',
        },
        {
          phase: 'Fase III',
          num: '03',
          title: 'Alinhamento Anatômico',
          text: 'Projeção do design sobre suas curvas musculares específicas. A arte é viva e precisa fluir harmoniosamente com a sua movimentação natural.',
          icon: 'solar:ruler-linear',
          tag: 'Fluidez & Simetria Corporal',
        },
        {
          phase: 'Fase IV',
          num: '04',
          title: 'A Execução Ritualística',
          text: 'É neste momento que a tatuagem começa e a mensagem passa a ganhar forma. O ritmo do artista é meditativo, focado na suavidade do traço, na integridade absoluta da pele e na experiência única do cliente.',
          icon: 'solar:magic-stick-linear',
          tag: 'Com espaço privativo para melhor comodidade',
        },
        {
          phase: 'Fase V',
          num: '05',
          title: 'A Transparência Eterna',
          text: 'O pós-tratamento é acompanhado individualmente. O resultado final se torna parte de quem você é. Intangível, inegável, irrepetível.',
          icon: 'solar:crown-minimalistic-linear',
          tag: 'Legado Imortalizado',
        },
      ],
    },
    portfolio: {
      eyebrow: 'Acervo Privado',
      title: 'Estúdio de Exposição',
      items: [
        {
          src: '/images/obra-slash.png',
          alt: 'Tatuagem realista de headstock de guitarra Gibson Les Paul com assinatura Slash',
          obra: 'Obra I',
          title: 'Homenagem em Cordas',
          style: 'Realismo P&B',
          filter: 'contrast-105 brightness-95',
        },
        {
          src: '/images/obra-dragao.jpg',
          alt: 'Tatuagem oriental de dragão nas costas com cerejeiras e lua vermelha',
          obra: 'Obra II',
          title: 'Guardião Oriental',
          style: 'Oriental',
          filter: 'contrast-105 brightness-95',
        },
        {
          src: '/images/obra-lobos.jpg',
          alt: 'Tatuagens de lobos em aquarela colorida nas panturrilhas',
          obra: 'Obra III',
          title: 'Alma Selvagem',
          style: 'Aquarela',
          filter: 'contrast-105 brightness-95',
        },
        {
          src: '/images/obra-anime.png',
          alt: 'Tatuagem ilustrativa estilo anime no antebraço',
          obra: 'Obra IV',
          title: 'Herança Ninja',
          style: 'Realismo',
          filter: 'contrast-105 brightness-95',
        },
        {
          src: '/images/obra-fineline.png',
          alt: 'Tatuagem fine line floral com triângulo geométrico nas costelas',
          obra: 'Obra V',
          title: 'Geometria Botânica',
          style: 'Fine Line',
          filter: 'contrast-105 brightness-95',
        },
        {
          src: '/images/obra-girassol.png',
          alt: 'Tatuagem colorida de girassol com caule em forma de assinatura no antebraço',
          obra: 'Obra VI',
          title: 'Florescer',
          style: 'Fine Line',
          filter: 'contrast-105 brightness-95',
        },
      ],
    },
    artistsSection: {
      eyebrow: 'Mestre Artista',
      title: 'O Elenco do Incomum',
      subtitle:
        'Não contratamos técnicos. Recrutamos visionários que dominam a matéria do corpo e a mística da marca.',
      portraitSoon: 'Retrato em breve',
      list: [
        {
          initials: 'LG',
          index: '01 / Fine Line & Realism',
          name: 'Lewis Green',
          spec: 'Fine Line / Realism',
          bio: 'Lewis nasceu e cresceu na cidade de Cuiabá, no Brasil, com a arte correndo nas veias. Há 12 anos transforma pele em obra de arte e eterniza histórias, sempre obcecado pelo detalhe. Fora do estúdio, é baixista, porque talento assim não cabe só num instrumento. Linha ou nota, o resultado é sempre o mesmo: arte que ressoa.',
          photo: '/images/lewis-green.png',
          photoAlt: 'Retrato de Lewis Green',
        },
      ],
    },
    cta: {
      phase1: 'Sua próxima tatuagem não começa com uma agulha.',
      phase2: 'Começa com uma história.',
      button: 'Agendar meu horário',
      note: 'Ambiente Privado com Alta Exclusividade',
    },
    footer: {
      copyright: 'Bunker Tattoo © 2024',
      privacy: 'Privacidade',
      instagram: 'Instagram',
      location: 'Localização',
    },
  },
}
