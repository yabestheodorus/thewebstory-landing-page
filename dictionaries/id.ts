import { Dictionary } from './en'

export const id: Dictionary = {
  nav: {
    work: 'Karya',
    services: 'Layanan',
    faq: 'FAQ',
    contact: 'Kontak',
  },
  hero: {
    overline: 'Platform Design & Development — Tangerang, Indonesia',

    headline_p1: 'Website kamu ',
    headline_p2: 'harus bisa lebih.',

    subheadline: 'Kita desain website high-converting yang maksimalkan tiap visitor—biar traffic kamu nggak cuma numpang lewat, tapi beneran jadi customer & cuan nyata.',

    cta_primary: 'Lihat Contohnya',
    cta_secondary: 'Bangun Website Kamu',

    meta_location: 'Stay di Tangerang, Indonesia. Bangun sistem buat growth global.',

    ticker: 'FOKUS KONVERSI · OPTIMASI SEO · SPEED NOMOR SATU · ',

    pills: ['E-commerce', 'Bisnis', 'Portofolio', 'Booking'],

    stats: [
      { val: '100%', label: 'Kepemilikan' },
      { val: '∞', label: 'Scalability' },
      { val: '0%', label: 'Bebas Ketergantungan' },
    ],

    rotating_texts: ['mesin jualan.', 'alat konversi.', 'magnet lead.', 'pusat booking.'],

    headline_prefix: 'Bikin jadi',

    what_we_build: 'Dibangun buat nemenin kamu growth',

    label_drag: 'Geser buat liat-liat',

    meta_suffix_1: 'Tarik — Konversi — Tumbuh',
    meta_suffix_2: 'Sistem Bukan Cuma Statis',

    quote: '"Website kamu harusnya kerja buat bisnis kamu."',
  },
  statement: {
    overline: 'Dampak Konversi',

    metric_label: 'Rata-rata kenaikan conversion rate',

    fee_platform: 'Visitor',
    fee_ads: 'Klik',
    fee_vouchers: 'Peluang Terbuang',

    heading: 'Kebanyakan visitor cuma mampir.',

    description: 'Traffic kamu udah ada. Masalahnya, mereka ngapain pas udah sampe? Kita bikin website high-converting yang nuntun mereka, ngurangin drama, dan bikin visitor beneran jadi customer.',

    badges: {
      acquisition: 'Traffic',
      retention: 'Lebih Banyak Customer',
      yours: 'Lebih Banyak Visitor',
    },

    trust_heading: 'Integrasi Terpercaya.',
    trust_description: 'Kita terintegrasi dengan payment gateway dan logistik yang udah dipercaya sama customer di Indonesia.',

    steps: {
      s1: 'Traffic',
      s1_desc: 'Orang nemu dan mampir ke situs kamu.',

      s2: 'Website Kamu',
      s2_desc: 'Arahin perhatian biar nggak langsung kabur.',

      s3: 'Lebih Banyak Customer',
      s3_desc: 'Ubah visitor jadi customer beneran.',
    }
  },
  works: {
    overline: 'Keahlian Kita',
    heading: 'Kita bikin website yang rasanya kayak produk.',
    services_count: 'Layanan',
    cta: 'Mulai proyek',
    labels: {
      deliverable: 'Hasil Akhir',
      timeline: 'Timeline',
      category: 'Kategori',
      service: 'Layanan',
    },
    services: [
      {
        id: '01',
        title: 'Company Profile Website',
        category: 'Presence',
        deliverable: 'Website lengkap',
        timeline: '2–4 minggu',
        description: 'Etalase digital premium yang nyeritain brand kamu. Animasi cakep, kenceng, dan emang didesain biar visitor langsung pengen nanya-nanya.',
        keywords: ['About', 'Services', 'Contact', 'SEO-ready'],
      },
      {
        id: '02',
        title: 'Product Landing Page',
        category: 'Launch',
        deliverable: 'Landing page',
        timeline: '1–2 minggu',
        description: 'Satu produk. Satu halaman. Satu tujuan — konversi. Layout penuh motion yang fokus buat pamerin jualanmu dan dorong orang buat gercep.',
        keywords: ['Hero section', 'Fokus CTA', 'Mobile-first', 'Analytics'],
      },
      {
        id: '03',
        title: 'Katalog Produk',
        category: 'Showcase',
        deliverable: 'Situs katalog',
        timeline: '2–4 minggu',
        description: 'Pamerin semua produk kamu di satu tempat. Customer bisa liat-liat, filter, dan langsung chat — cocok buat brand yang belum butuh checkout online.',
        keywords: ['Grid produk', 'Filter', 'Link WhatsApp', 'Formulir tanya'],
      },
      {
        id: '04',
        title: 'Toko Online',
        category: 'Commerce',
        deliverable: 'Situs E-commerce',
        timeline: '4–8 minggu',
        description: 'Toko kamu sendiri — bukan cuma numpang di marketplace. Keranjang, checkout, dan integrasi bayar yang kamu kontrol penuh.',
        keywords: ['Add to cart', 'Alur checkout', 'Konfirmasi order', 'Payment gateway'],
      },
      {
        id: '05',
        title: 'Portofolio & Personal Brand',
        category: 'Identity',
        deliverable: 'Situs portofolio',
        timeline: '2–3 minggu',
        description: 'Buat kreator, freelancer, atau founder yang butuh rumah digital. Pamerin karya, ceritain kisahmu, dan miliki audiens sendiri.',
        keywords: ['Studi kasus', 'Galeri', 'Blog-ready', 'Social links'],
      },
      {
        id: '06',
        title: 'Integrasi Pembayaran',
        category: 'Checkout',
        deliverable: 'Sistem bayar',
        timeline: '1–2 minggu',
        description: 'Kita sambungin situs kamu ke payment gateway yang udah dipercaya di Indonesia. Checkout aman yang rasanya kayak di marketplace.',
        keywords: ['GoPay', 'OVO', 'BCA', 'QRIS', 'Visa'],
        logos: [
          { name: 'GoPay', src: '/images/logos/gopay.png' },
          { name: 'OVO', src: '/images/logos/ovo.png' },
          { name: 'BCA', src: '/images/logos/bca.png' },
          { name: 'QRIS', src: '/images/logos/qris.png' },
          { name: 'Visa', src: '/images/logos/visa.png' },
        ],
      },
    ],
  },
  faq: {
    hero_overline: 'FAQ',
    hero_title: 'Ada yang bikin bingung?',
    hero_desc: 'Tanya-tanya soal proses, tech, atau kenapa brand kamu butuh panggung sendiri.',
    items: [
      {
        q: 'Kenapa butuh website kalo udah ada marketplace?',
        a: 'Marketplace oke buat dicari orang, tapi data sama customer-nya punya mereka. Dengan website sendiri, 100% cuan masuk ke kamu, bisa bikin loyalitas langsung, dan tampil jauh lebih premium dibanding ribuan toko biasa.'
      },
      {
        q: 'Berapa lama jadinya?',
        a: 'Landing page kenceng biasanya 2-3 minggu. Kalo e-commerce lengkap yang banyak integrasi kustom, biasanya 4-6 minggu tergantung seberapa kompleks maunya.'
      },
      {
        q: 'Pake tech apa aja?',
        a: 'Kita pake Next.js biar ngebut dan SEO-nya mantap. Pake GSAP buat animasi sinematik dan Tailwind CSS biar stylenya kece tapi tetep ringan. Website kamu bakal awet deh!'
      },
      {
        q: 'Kodenya jadi milik saya?',
        a: 'Pastinya. Beda sama builder langganan, kamu punya domain, aset, sampe kodenya. Kamu yang pegang kendali penuh platformnya.'
      },
      {
        q: 'SEO udah termasuk?',
        a: 'Yup, dari awal. Performa kenceng sama SEO teknis udah jadi standar kita. Dari load time sampe metadata, kita setting biar brand kamu gampang nemu di Google.'
      }
    ]
  },
  cta: {
    heading: 'Siap ubah visitor jadi pelanggan?',
    subheading: 'Ceritain proyek kamu, atau mau sapa doang juga boleh.',
    form: {
      name: 'Nama Kamu',
      contact: 'Kontak (WA/Email)',
      type: 'Tipe Proyek',
      message: 'Ceritain dikit ceritanya...',
      send_wa: 'Kirim via WhatsApp',
      send_email: 'Email aja',
    },
    location: 'Stay di Tangerang, Indonesia',
  },
  work: {
    hero_overline: 'Karya Terpilih',
    hero_year_range: '2024 – 2026',
    hero_headline_1: 'Karya yang',
    hero_headline_2: 'ceritain',
    hero_headline_3: 'dirinya sendiri.',
    stat_projects_label: 'Proyek live',
    stat_industries_label: 'Industri',
    stat_launch_label: 'Rata-rata rilis',
    stat_launch_val: '3 minggu',
    hero_desc: 'Semua proyek di bawah udah live, punya brand-nya masing-masing, dan emang dibangun buat konversi.',
    scroll_cue: 'Scroll ke bawah',
    grid_featured_overline: 'Unggulan',
    grid_all_overline: 'Semua Proyek',
    grid_projects_suffix: 'proyek',
    grid_head_project: 'Proyek',
    grid_head_category: 'Kategori',
    grid_head_year: 'Tahun',
    footer_overline: 'Mulai proyekmu',
    footer_heading_1: 'Brand kamu layak',
    footer_heading_2: 'punya panggung sendiri.',
    footer_cta: 'Mulai proyek',
    footer_back: '← Balik ke Beranda',
  },
  project_detail: {
    breadcrumb_home: 'Beranda',
    breadcrumb_work: 'Karya',
    labels: {
      client: 'Klien',
      scope: 'Cakupan',
      timeline: 'Timeline',
      year: 'Tahun',
      deliverables: 'Hasil Akhir',
      results: 'Dampak & Hasil',
      tech_stack: 'Teknologi',
      testimonial: 'Kata Mereka',
      next_project: 'Proyek Selanjutnya'
    },
    sections: {
      brief: 'The Brief',
      build: 'The Build',
      overview: 'Overview',
      deliverables: 'Apa yang Kita Kirim',
      deliverables_desc: 'Tiap komponen yang kita bangun dan alasan di baliknya.',
      results: 'Dampak & Hasil',
      results_desc: 'Hasil nyata dan performa di lapangan.'
    },
    cta: {
      launch: 'Luncurkan Situs',
      visit: 'Kunjungi',
      next_cta: 'Lihat studi kasus'
    }
  }
}
