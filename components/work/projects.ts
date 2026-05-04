export type Project = {
  id: string
  slug: string
  title: string
  client: string
  url: string
  year: string
  category: string
  tags: string[]
  description: string
  featured?: boolean
  color: 'sand' | 'warm' | 'ink' | 'blaze'
  // Case study detail fields
  headline?: string
  headlineHighlights?: string[]
  challenge?: string
  solution?: string
  results?: { value: string; label: string; suffix?: string }[]
  deliverables?: { title: string; description: string }[]
  services?: string[]
  timeline?: string
  techStack?: string[]
  testimonial?: { quote: string; author: string; role: string }
  videoDesktop?: string
  videoMobile?: string
  backgroundImage?: string
  isConcept?: boolean
}

const projects_en: Project[] = [
  {
    id: '01',
    slug: 'celune',
    title: 'Célune',
    client: 'Célune Skincare (Case Studies)',
    url: 'https://celune.yabestheo.dev',
    year: '2026',
    category: 'E-commerce',
    tags: ['Online Store', 'Motion UI', 'Checkout'],
    description:
      'A botanical skincare brand elevated from social selling to a fully-owned online store with editorial-grade product showcases and integrated payment.',
    featured: true,
    color: 'sand',
    headline: 'From social selling to a store that converts while you sleep.',
    headlineHighlights: ['converts while you sleep'],
    challenge:
      'Célune was managing orders through Instagram DMs and WhatsApp — no cart, no checkout, no customer data ownership. As demand grew, the manual process became a bottleneck. High-intent browsers dropped off when buying meant sending a message and waiting for a reply.',
    solution:
      'We built a fully-owned e-commerce experience with an editorial design language that matches the brand\'s botanical identity. GSAP-powered scroll animations, countdown-driven product launches, and a streamlined checkout through Midtrans — GoPay, OVO, and bank transfer — all on a mobile-first layout designed for the way Indonesian customers actually shop.',
    results: [
      { value: '3', label: 'Weeks to launch' },
      { value: '45', suffix: '%', label: 'Reduction in manual DMs' },
      { value: '1', label: 'Fully-owned sales engine' },
    ],
    deliverables: [
      { title: 'Product Catalogue', description: 'Editorial product pages with skin-condition filters, ratings, and dynamic pricing display.' },
      { title: 'Checkout & Payment', description: 'Cart-to-confirmation flow with GoPay, OVO, and bank transfer integrated through Midtrans.' },
      { title: 'Motion UI System', description: 'GSAP-powered page transitions, scroll reveals, countdown timers, and hover micro-interactions across every section.' },
      { title: 'Mobile-First Layout', description: 'Touch-optimised navigation, swipe product galleries, and sticky purchase CTAs built for mobile-dominant traffic.' },
    ],
    services: ['UX & Visual Design', 'Frontend Development', 'Motion UI', 'SEO'],
    timeline: '3 weeks',
    techStack: ['Next.js', 'Typescript', 'GSAP', 'Tailwind CSS', 'Vercel'],
    testimonial: {
      quote: '"We used to lose customers somewhere between the DMs. Now the store closes sales at 2am while we sleep."',
      author: 'Founder',
      role: 'Célune Skincare',
    },
    backgroundImage: '/images/screenshots/celune_img.png',
    videoDesktop: '/videos/celune_desktop.mp4',
    videoMobile: '/videos/celune_phone.mp4',
  },

  {
    id: '02',
    slug: 'formique',
    title: 'Formique',
    client: 'Formique Architecture (Case Studies)',
    url: 'https://formique.yabestheo.dev',
    year: '2026',
    category: 'Company Profile',
    tags: ['Architecture', 'Motion UI', 'Scroll Animation'],
    description:
      'A portfolio piece — a scroll-driven company profile for a fictional architecture studio specialising in residential cluster housing across Indonesia.',
    featured: true,
    color: 'ink',
    headline: 'An architecture studio website built to feel as considered as the buildings.',
    headlineHighlights: ['as considered as the buildings'],
    challenge:
      'Architecture firms in Indonesia often rely on generic WordPress templates or marketplace listings that flatten their work into thumbnail grids. The brief was to design a studio website where the digital experience reflects the same spatial awareness and material sensibility as the built projects.',
    solution:
      'We designed a scroll-driven company profile with GSAP-powered section transitions that mirror architectural movement — slow reveals, deliberate pacing, and generous whitespace. Project showcases use parallax imagery and pinned layouts that let each residential cluster breathe on screen the way it would in person.',
    results: [
      { value: '6', suffix: '+', label: 'Scroll sequences' },
      { value: '1', label: 'Seamless experience' },
      { value: '2', label: 'Weeks to build' },
    ],
    deliverables: [
      { title: 'Scroll-Driven Layout', description: 'Pinned hero, parallax project imagery, and choreographed section reveals that guide the visitor through the studio narrative.' },
      { title: 'Project Showcases', description: 'Full-bleed image layouts for residential cluster projects with location tags, specs, and smooth gallery transitions.' },
      { title: 'Motion Typography', description: 'GSAP-animated headlines with staggered character reveals and slow easing tuned to match the architectural tone.' },
      { title: 'Mobile-First Build', description: 'Reduced motion for mobile, touch-friendly navigation, and optimised image loading for Indonesian mobile networks.' },
    ],
    services: ['Company Profile Design', 'Scroll Animation', 'Motion UI', 'Frontend Development', 'SEO'],
    timeline: '2 weeks',
    techStack: ['Next.js', 'GSAP', 'ScrollTrigger', 'Tailwind CSS', 'Vercel'],
    backgroundImage: '/images/screenshots/formique_img.png',
    videoDesktop: '/videos/formique_desktop.mp4',
    videoMobile: '/videos/formique_phone.mp4',
  },
  {
    id: '03',
    slug: 'aman-nusa',
    title: 'Aman Nusa',
    client: 'Aman Nusa Travel',
    url: 'https://amannusa.yabestheo.dev',
    year: '2024',
    category: 'Brand Experience',
    tags: ['Identity', 'UX Design', 'Editorial'],
    description: 'An editorial approach to high-end curation. Discover the soul of the archipelago through the lens of Aman Nusa.',
    color: 'sand',
    headline: "Indonesia's Hidden Treasures",
    headlineHighlights: ['Hidden Treasures'],
    challenge: 'Aman Nusa had a decade of heritage in physical luxury travel but lacked a digital identity that matched the soul of their curation. They needed a way to convey the "unseen" stories and ancient landscapes to a global discerning audience through a lens of high-fidelity editorial design.',
    solution: 'A full digital brand identity translated to the web: editorial grid layouts, curated typeface pairing, a Sanity-powered journal, and an inquiry flow that reflects the privacy and personal care of a private concierge.',
    results: [
      { value: '4', label: 'Weeks to launch' },
      { value: '0', suffix: '%', label: 'Platform commission' },
      { value: '100', suffix: '%', label: 'Data ownership' },
    ],
    deliverables: [
      { title: 'Brand Identity System', description: 'Typography scale, colour palette, spacing tokens, and editorial usage guidelines.' },
      { title: 'Editorial Website', description: 'Lookbook-style layout with curated destination pages, a signature itinerary section, and an editorial journal.' },
      { title: 'CMS Integration', description: 'Headless Sanity CMS so the team updates journals and destination details without a developer.' },
      { title: 'Inquiry Flow', description: 'High-touch consultation booking with real-time concierge availability and personal preference modeling.' },
    ],
    services: ['Brand Identity', 'UX Design', 'Frontend Development', 'Sanity CMS', 'Editorial Typography'],
    timeline: '4 weeks',
    techStack: ['Next.js', 'Sanity CMS', 'GSAP', 'Tailwind CSS', 'Vercel'],
    testimonial: {
      quote: '"Aman Nusa didn\'t just show us Indonesia; they allowed us to feel its heartbeat. The attention to detail and cultural reverence is something I\'ve never experienced with any other agency."',
      author: 'Julian Vercetti',
      role: 'Architect & Cultural Historian',
    },
    backgroundImage: '/images/screenshots/amannusa_img.png',
    videoDesktop: '/videos/amannusa_desktop.mp4',
    videoMobile: '/videos/amannusa_phone.mp4',
  },
  {
    id: '04',
    slug: 'zentry',
    title: 'Zentry',
    client: 'Zentry (Case Study)',
    url: 'https://zentry.yabestheo.dev',
    year: '2025',
    featured: true,
    color: 'blaze',
    category: 'Gamified Experience',
    tags: ['Motion UI', 'WebGL', 'Gamification'],
    description: 'An immersive, award-winning gamified landing page clone. Featuring complex GSAP motion systems, scroll-driven video orchestration, and a non-linear "metaverse" narrative.',
    headline: 'The Metagame Layer: A digital odyssey into the metaverse of play.',
    headlineHighlights: ['digital odyssey', 'metaverse of play'],
    challenge: "Traditional gaming sites are often static and fail to capture the kinetic energy of the games they represent. The challenge was to build a web experience that feels like a playable environment, maintaining 60fps performance while orchestrating heavy video and motion assets.",
    solution: 'We implemented a sophisticated motion architecture using GSAP ScrollTrigger and Framer Motion. This included a custom video-preloader, parallax-scrolling hero sections, and WebGL-powered transitions that guide users through the Zentry universe with fluid, high-fidelity pacing.',
    results: [
      { value: 'SOTD', label: 'Reference Standard' },
      { value: '60', suffix: 'fps', label: 'Motion Performance' },
      { value: '100', label: 'Performance Score' },
    ],
    deliverables: [
      { title: 'Gamified UI', description: 'Interactive interface with hover-triggered audio-visuals and dynamic grid transitions.' },
      { title: 'Motion Orchestra', description: 'Deep integration of GSAP and Framer Motion for frame-accurate scroll animations.' },
      { title: 'Video Engine', description: 'Optimized multi-video playback system with seamless transitions and low-latency loading.' },
    ],
    services: ['Frontend Development', 'Motion UI Design', 'Gamification', 'Performance Engineering'],
    timeline: '3 weeks',
    techStack: ['React', 'GSAP', 'Framer Motion', 'Tailwind CSS', 'Vite'],
    backgroundImage: '/images/screenshots/zentry_img.png',
    videoDesktop: '/videos/zentry_desktop.mp4',
    videoMobile: '/videos/zentry_phone.mp4',
    isConcept: true,
  },
  {
    id: '07',
    slug: 'kinetic-monolith',
    title: 'Kinetic Monolith',
    client: 'Performance Artifacts',
    url: 'https://kinetic.yabestheo.dev',
    year: '2026',
    category: 'High-Performance Web',
    tags: ['Motion UI', 'Performance', 'WebGL'],
    description: 'A high-performance digital artifact showcasing advanced motion systems and layout transitions with zero layout shift.',
    color: 'warm',
    featured: true,
    headline: 'Engineering the edge of performance.',
    headlineHighlights: ['edge of performance'],
    challenge: 'Most motion-heavy websites sacrifice performance for aesthetics. The challenge was to build a system where complex layout transformations and heavy motion occur without dropping frame rates or compromising the user experience on low-power devices.',
    solution: 'We built a monolithic motion architecture using specialized transition logic. By leveraging pre-calculated layout states and efficient render loops, we achieved a fluid, high-fidelity experience that maintains 60fps even during complex transformations.',
    results: [
      { value: '60', suffix: 'fps', label: 'Consistent Performance' },
      { value: '0.1', suffix: 's', label: 'Interactive Latency' },
      { value: '100', label: 'Performance Score' },
    ],
    deliverables: [
      { title: 'Motion Engine', description: 'Custom transition logic optimized for high-frequency updates and variable refresh rates.' },
      { title: 'Layout Orchestration', description: 'System for managing complex component states and transitions without layout shift.' },
      { title: 'Artifact Interface', description: 'A sleek, dashboard-like UI designed for professional metrics and artifact visualization.' },
    ],
    services: ['Performance Optimization', 'Motion Systems', 'Frontend Engineering'],
    timeline: '2 weeks',
    techStack: ['React', 'Typescript', 'Framer Motion', 'Vite', 'Tailwind CSS'],
    videoDesktop: '/videos/kinetic_desktop.mp4',
    videoMobile: '/videos/kinetic_phone.mp4',
    backgroundImage: '/images/screenshots/kinetic_img.png',
    isConcept: true,
  },
]

const projects_id: Project[] = [
  {
    id: '01',
    slug: 'celune',
    title: 'Célune',
    client: 'Célune Skincare (Studi Kasus)',
    url: 'https://celune.yabestheo.dev',
    year: '2026',
    category: 'E-commerce',
    tags: ['Toko Online', 'Motion UI', 'Checkout'],
    description:
      'Brand skincare botani yang dikembangkan dari jualan di medsos menjadi toko online mandiri dengan showcase produk kelas editorial dan pembayaran terintegrasi.',
    featured: true,
    color: 'sand',
    headline: 'Dari jualan di medsos jadi toko yang menghasilkan saat kamu tidur.',
    headlineHighlights: ['menghasilkan saat kamu tidur'],
    challenge:
      'Célune sebelumnya mengelola pesanan melalui DM Instagram dan WhatsApp — tanpa keranjang belanja, tanpa checkout, dan tanpa kepemilikan data pelanggan. Seiring bertambahnya permintaan, proses manual ini menjadi hambatan. Calon pembeli sering kali membatalkan niat belanja ketika harus mengirim pesan dan menunggu balasan.',
    solution:
      'Kami membangun pengalaman e-commerce mandiri dengan bahasa desain editorial yang sesuai dengan identitas botani brand tersebut. Animasi scroll berbasis GSAP, peluncuran produk berbasis countdown, dan sistem checkout yang efisien melalui Midtrans — GoPay, OVO, dan transfer bank — semuanya dalam tata letak mobile-first yang dirancang sesuai dengan kebiasaan belanja pelanggan di Indonesia.',
    results: [
      { value: '3', label: 'Minggu sampai rilis' },
      { value: '45', suffix: '%', label: 'Pengurangan DM manual' },
      { value: '1', label: 'Mesin jualan mandiri' },
    ],
    deliverables: [
      { title: 'Katalog Produk', description: 'Halaman produk editorial dengan filter kondisi kulit, rating, dan tampilan harga dinamis.' },
      { title: 'Checkout & Pembayaran', description: 'Alur dari keranjang hingga konfirmasi dengan GoPay, OVO, dan transfer bank terintegrasi melalui Midtrans.' },
      { title: 'Sistem Motion UI', description: 'Transisi halaman berbasis GSAP, scroll reveal, timer countdown, dan mikro-interaksi hover di setiap bagian.' },
      { title: 'Tata Letak Mobile-First', description: 'Navigasi yang dioptimasi untuk sentuhan, galeri produk geser, dan CTA pembelian lengket yang dibangun untuk traffic seluler.' },
    ],
    services: ['Desain UX & Visual', 'Pengembangan Frontend', 'Motion UI', 'SEO'],
    timeline: '3 minggu',
    techStack: ['Next.js', 'Typescript', 'GSAP', 'Tailwind CSS', 'Vercel'],
    testimonial: {
      quote: '"Dulu kami sering kehilangan pelanggan di tengah jalan saat lewat DM. Sekarang toko bisa jualan sendiri jam 2 pagi pas kami lagi tidur."',
      author: 'Founder',
      role: 'Célune Skincare',
    },
    backgroundImage: '/images/screenshots/celune_img.png',
    videoDesktop: '/videos/celune_desktop.mp4',
    videoMobile: '/videos/celune_phone.mp4',
  },
  {
    id: '02',
    slug: 'formique',
    title: 'Formique',
    client: 'Formique Architecture (Studi Kasus)',
    url: 'https://formique.yabestheo.dev',
    year: '2026',
    category: 'Profil Perusahaan',
    tags: ['Arsitektur', 'Motion UI', 'Animasi Scroll'],
    description:
      'Karya portofolio — profil perusahaan berbasis scroll untuk studio arsitektur fiktif yang berspesialisasi dalam perumahan klaster di seluruh Indonesia.',
    featured: true,
    color: 'ink',
    headline: 'Website studio arsitektur yang dibangun dengan pertimbangan sedalam bangunannya.',
    headlineHighlights: ['sedalam bangunannya'],
    challenge:
      'Firma arsitektur di Indonesia sering kali mengandalkan template WordPress generik atau marketplace yang meratakan karya mereka menjadi grid thumbnail. Brief-nya adalah merancang website studio di mana pengalaman digital mencerminkan kesadaran spasial dan sensibilitas material yang sama dengan proyek yang dibangun.',
    solution:
      'Kami merancang profil perusahaan berbasis scroll dengan transisi bagian berbasis GSAP yang mencerminkan pergerakan arsitektural — pengungkapan lambat, tempo yang disengaja, dan ruang kosong yang luas. Showcase proyek menggunakan citra parallax dan tata letak yang disematkan sehingga setiap klaster hunian terasa hidup di layar seperti aslinya.',
    results: [
      { value: '6', suffix: '+', label: 'Urutan scroll' },
      { value: '1', label: 'Pengalaman mulus' },
      { value: '2', label: 'Minggu pengerjaan' },
    ],
    deliverables: [
      { title: 'Layout Berbasis Scroll', description: 'Hero tetap, citra proyek parallax, dan pengungkapan bagian yang dikoreografikan untuk memandu pengunjung melalui narasi studio.' },
      { title: 'Showcase Proyek', description: 'Tata letak gambar layar penuh untuk proyek klaster hunian dengan tag lokasi, spesifikasi, dan transisi galeri yang mulus.' },
      { title: 'Tipografi Motion', description: 'Headline beranimasi GSAP dengan pengungkapan karakter bertahap dan pelambatan lambat yang disesuaikan dengan nada arsitektural.' },
      { title: 'Build Mobile-First', description: 'Motion yang dikurangi untuk ponsel, navigasi ramah sentuh, dan pemuatan gambar yang dioptimalkan untuk jaringan seluler Indonesia.' },
    ],
    services: ['Desain Profil Perusahaan', 'Animasi Scroll', 'Motion UI', 'Pengembangan Frontend', 'SEO'],
    timeline: '2 minggu',
    techStack: ['Next.js', 'GSAP', 'ScrollTrigger', 'Tailwind CSS', 'Vercel'],
    backgroundImage: '/images/screenshots/formique_img.png',
    videoDesktop: '/videos/formique_desktop.mp4',
    videoMobile: '/videos/formique_phone.mp4',
  },
  {
    id: '03',
    slug: 'aman-nusa',
    title: 'Aman Nusa',
    client: 'Aman Nusa Travel',
    url: 'https://amannusa.yabestheo.dev',
    year: '2024',
    category: 'Pengalaman Brand',
    tags: ['Identitas', 'Desain UX', 'Editorial'],
    description: 'Pendekatan editorial untuk kurasi kelas atas. Temukan jiwa nusantara melalui lensa Aman Nusa.',
    color: 'sand',
    headline: "Harta Karun Tersembunyi Indonesia",
    headlineHighlights: ['Harta Karun Tersembunyi'],
    challenge: 'Aman Nusa memiliki warisan dekade dalam perjalanan mewah fisik tetapi kurang memiliki identitas digital yang sesuai dengan jiwa kurasi mereka. Mereka membutuhkan cara untuk menyampaikan kisah "tak terlihat" dan lanskap kuno kepada audiens global melalui lensa desain editorial high-fidelity.',
    solution: 'Identitas brand digital lengkap yang diterjemahkan ke web: tata letak grid editorial, pasangan typeface terkurasi, jurnal berbasis Sanity, dan alur pertanyaan yang mencerminkan privasi dan perawatan pribadi dari pramutamu pribadi.',
    results: [
      { value: '4', label: 'Minggu sampai rilis' },
      { value: '0', suffix: '%', label: 'Komisi platform' },
      { value: '100', suffix: '%', label: 'Kepemilikan data' },
    ],
    deliverables: [
      { title: 'Sistem Identitas Brand', description: 'Skala tipografi, palet warna, token jarak, dan panduan penggunaan editorial.' },
      { title: 'Website Editorial', description: 'Tata letak gaya lookbook dengan halaman destinasi terkurasi, bagian rencana perjalanan khas, dan jurnal editorial.' },
      { title: 'Integrasi CMS', description: 'Headless Sanity CMS agar tim dapat memperbarui jurnal dan detail destinasi tanpa developer.' },
      { title: 'Alur Pertanyaan', description: 'Pemesanan konsultasi kelas atas dengan ketersediaan pramutamu real-time dan pemodelan preferensi pribadi.' },
    ],
    services: ['Identitas Brand', 'Desain UX', 'Pengembangan Frontend', 'Sanity CMS', 'Tipografi Editorial'],
    timeline: '4 minggu',
    techStack: ['Next.js', 'Sanity CMS', 'GSAP', 'Tailwind CSS', 'Vercel'],
    testimonial: {
      quote: '"Aman Nusa nggak cuma nunjukin Indonesia; mereka bikin kita ngerasain detak jantungnya. Detail sama rasa hormat ke budayanya bener-bener beda."',
      author: 'Julian Vercetti',
      role: 'Arsitek & Sejarawan Budaya',
    },
    backgroundImage: '/images/screenshots/amannusa_img.png',
    videoDesktop: '/videos/amannusa_desktop.mp4',
    videoMobile: '/videos/amannusa_phone.mp4',
  },
  {
    id: '04',
    slug: 'zentry',
    title: 'Zentry',
    client: 'Zentry (Studi Kasus)',
    url: 'https://zentry.yabestheo.dev',
    year: '2025',
    featured: true,
    color: 'blaze',
    category: 'Pengalaman Gamifikasi',
    tags: ['Motion UI', 'WebGL', 'Gamifikasi'],
    description: 'Kloning halaman landing tergamifikasi yang imersif dan pemenang penghargaan. Menampilkan sistem motion GSAP yang kompleks, orkestrasi video berbasis scroll, dan narasi "metaverse" non-linear.',
    headline: 'Metagame Layer: Sebuah pengembaraan digital ke dalam metaverse permainan.',
    headlineHighlights: ['pengembaraan digital', 'metaverse permainan'],
    challenge: "Situs game tradisional sering kali statis dan gagal menangkap energi kinetik dari game yang mereka wakili. Tantangannya adalah membangun pengalaman web yang terasa seperti lingkungan yang dapat dimainkan, mempertahankan performa 60fps sambil mengorkestrasi aset video dan motion yang berat.",
    solution: 'Kami menerapkan arsitektur motion canggih menggunakan GSAP ScrollTrigger and Framer Motion. Ini termasuk preloader video kustom, bagian hero parallax-scrolling, dan transisi berbasis WebGL yang memandu pengguna melalui alam semesta Zentry dengan alur high-fidelity yang lancar.',
    results: [
      { value: 'SOTD', label: 'Standar Referensi' },
      { value: '60', suffix: 'fps', label: 'Performa Motion' },
      { value: '100', label: 'Skor Performa' },
    ],
    deliverables: [
      { title: 'UI Tergamifikasi', description: 'Antarmuka interaktif dengan audio-visual yang dipicu hover dan transisi grid dinamis.' },
      { title: 'Orkestra Motion', description: 'Integrasi mendalam GSAP dan Framer Motion untuk animasi scroll yang akurat per frame.' },
      { title: 'Video Engine', description: 'Sistem pemutaran multi-video yang dioptimalkan dengan transisi mulus dan pemuatan latensi rendah.' },
    ],
    services: ['Pengembangan Frontend', 'Desain Motion UI', 'Gamifikasi', 'Rekayasa Performa'],
    timeline: '3 minggu',
    techStack: ['React', 'GSAP', 'Framer Motion', 'Tailwind CSS', 'Vite'],
    backgroundImage: '/images/screenshots/zentry_img.png',
    videoDesktop: '/videos/zentry_desktop.mp4',
    videoMobile: '/videos/zentry_phone.mp4',
    isConcept: true,
  },
  {
    id: '07',
    slug: 'kinetic-monolith',
    title: 'Kinetic Monolith',
    client: 'Performance Artifacts',
    url: 'https://kinetic.yabestheo.dev',
    year: '2026',
    category: 'Web Performa Tinggi',
    tags: ['Motion UI', 'Performa', 'WebGL'],
    description: 'Artefak digital berperforma tinggi yang memamerkan sistem motion canggih dan transisi tata letak tanpa pergeseran tata letak (layout shift).',
    color: 'warm',
    featured: true,
    headline: 'Merekayasa batas performa.',
    headlineHighlights: ['batas performa'],
    challenge: 'Kebanyakan website yang berat di motion mengorbankan performa demi estetika. Tantangannya adalah membangun sistem di mana transformasi tata letak yang kompleks dan motion yang berat terjadi tanpa menurunkan frame rate atau mengompromikan pengalaman pengguna di perangkat berdaya rendah.',
    solution: 'Kami membangun arsitektur motion monolitik menggunakan logika transisi khusus. Dengan memanfaatkan status tata letak yang dihitung sebelumnya dan render loop yang efisien, kami mencapai pengalaman high-fidelity yang lancar dan mempertahankan 60fps bahkan selama transformasi kompleks.',
    results: [
      { value: '60', suffix: 'fps', label: 'Performa Konsisten' },
      { value: '0.1', suffix: 's', label: 'Latensi Interaktif' },
      { value: '100', label: 'Skor Performa' },
    ],
    deliverables: [
      { title: 'Motion Engine', description: 'Logika transisi kustom yang dioptimalkan untuk pembaruan frekuensi tinggi dan refresh rate variabel.' },
      { title: 'Orkestrasi Layout', description: 'Sistem untuk mengelola status komponen dan transisi yang kompleks tanpa pergeseran tata letak.' },
      { title: 'Antarmuka Artefak', description: 'UI ramping bergaya dashboard yang dirancang untuk metrik profesional dan visualisasi artefak.' },
    ],
    services: ['Optimasi Performa', 'Sistem Motion', 'Rekayasa Frontend'],
    timeline: '2 minggu',
    techStack: ['React', 'Typescript', 'Framer Motion', 'Vite', 'Tailwind CSS'],
    videoDesktop: '/videos/kinetic_desktop.mp4',
    videoMobile: '/videos/kinetic_phone.mp4',
    backgroundImage: '/images/screenshots/kinetic_img.png',
    isConcept: true,
  },
]

export const projects = projects_en // Legacy export

export function getProjects(lang: string): Project[] {
  return lang === 'id' ? projects_id : projects_en
}
