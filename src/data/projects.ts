export interface Project {
  slug: string;
  title: string;
  category: string;
  client: string;
  year: string;
  role: string;
  coverImage: string;
  bannerImage: string;
  driveUrl: string;
  liveUrl: string;
  tags: string[];
  overview: string;
  objective: string;
  method: {
    description: string;
    tools: string[];
  };
  result: {
    description: string;
    metrics: string[];
  };
}

export const projects: Project[] = [
  {
    slug: "perencanaan-dan-penanggulangan-banjir-bengawan-solo",
    title: "Perencanaan & Penanggulangan Banjir Sungai Bengawan Solo di Desa Sembayat & Bungah, Kab. Gresik",
    category: "Bangunan Air · Album Gambar",
    client: "PT. Raya Karya Consulting & Engineering.",
    year: "2024",
    role: "Drafter & Perencana Teknis",
    coverImage: "/img/Bengawan.png",
    bannerImage: "/img/Bengawan.png",
    driveUrl: "#",
    liveUrl: "https://drive.google.com/file/d/1PEOAnQ1tU_GD3CWVCcITLlC_7Kl8BDzR/view?usp=sharing",
    tags: ["Bangunan Air", "Hidrologi", "AutoCAD", "Kolam Retensi", "Sheet Pile"],
    overview:
      "Proyek terintegrasi ini memodelkan perencanaan penanggulangan banjir di Sungai Bengawan Solo yang melintasi Desa Sembayat dan Bungah, Kecamatan Sembayat dan Bungah, Kabupaten Gresik. Fokus utama proyek meliputi pembangunan kolam retensi untuk menampung air hujan, perbaikan struktur sheet pile untuk perkuatan tebing sungai, serta perencanaan bangunan rumah pompa sebagai sistem pengendalian debit aliran. Sebagai drafter dalam tim proyek, saya bertanggung jawab dalam penyusunan gambar teknik, perhitungan hidrolika, dan pemetaan lokasi menggunakan data survei lapangan dengan skala 1:2000.",
    objective:
      "Sungai Bengawan Solo memerlukan solusi penanggulangan banjir yang komprehensif untuk melindungi pemukiman warga di Desa Sembayat dan Bungah. Tantangan utama adalah merancang sistem kolam retensi yang efektif, struktur sheet pile yang kuat untuk menahan tekanan air, serta rumah pompa dengan kapasitas optimal — semuanya harus terintegrasi dengan kondisi topografi existing dan mempertimbangkan faktor keamanan jangka panjang.",
    method: {
      description:
        "Proses dimulai dengan survei lapangan dan pengumpulan data hidrologi Sungai Bengawan Solo. Dilanjutkan dengan analisis debit banjir menggunakan perhitungan empiris, perencanaan geometri kolam retensi dengan kapasitas tampungan yang sesuai, desain struktur sheet pile untuk perkuatan tebing, dan perhitungan spesifikasi rumah pompa. Seluruh gambar teknik disusun dalam format album gambar proyek dengan 31 lembar dokumentasi, meliputi peta lokasi, detail struktur, dan legenda teknis lengkap.",
      tools: ["AutoCAD", "Survei Topografi", "Perhitungan Hidrolika", "Album Gambar Proyek"],
    },
    result: {
      description:
        "Album gambar proyek berhasil disusun dengan 31 lembar dokumentasi teknis yang mencakup peta lokasi skala 1:2000, detail kolam retensi, struktur sheet pile, rumah pompa, dan legenda lengkap. Dokumentasi ini menjadi referensi teknis untuk implementasi konstruksi penanggulangan banjir di lapangan.",
      metrics: ["31 Lembar Album Gambar", "1:2000 Skala Peta", "2 Desa Area Cakupan", "3 Struktur Utama Kolam Retensi, Sheet Pile, Rumah Pompa"],
    },
  },
  {
    slug: "bim",
    title: "Penugasan BIM: Model 3D Sekolah",
    category: "BIM · 3D MODELING · REVIT",
    client: "Proyek Akademik ITS",
    year: "2025",
    role: "BIM Modeler",
    coverImage: "/img/bim.jpg",
    bannerImage: "/img/bim.jpg",
    driveUrl: "#",
    liveUrl: "https://drive.google.com/drive/folders/1c1ZcNjyEJmXX5LncQKzzjTh-QUPjY2rH?usp=drive_link",
    tags: ["BIM", "Revit", "3D Modeling", "Teknik Sipil"],
    overview:
      "Penugasan Building Information Modeling (BIM) ini merupakan proyek pembuatan model 3D bangunan sekolah menggunakan Autodesk Revit. Proyek ini bertujuan untuk mengaplikasikan kemampuan pemodelan informasi bangunan dalam format 3D view, termasuk struktur bangunan, elevasi, dan detail konstruksi.",
    objective:
      "Mengembangkan keterampilan pemodelan BIM menggunakan Autodesk Revit untuk menghasilkan representasi digital bangunan sekolah yang akurat. Fokus pada pemahaman tools Revit, pembuatan family components, pengaturan elevasi, dan visualisasi 3D yang siap untuk dokumentasi teknis maupun presentasi proyek.",
    method: {
      description:
        "Proses pemodelan dimulai dari setup project dengan template structural, pembuatan grid dan level bangunan, penempatan structural components (column, beam, floor), hingga penambahan arsitektural elements seperti wall, door, window, roof, dan railing. Setiap komponen diberikan properties sesuai spesifikasi material dan dimensi aktual. Model dikembangkan dalam berbagai view: 3D View, Floor Plans, Elevations (North, South, East, West), serta Section Views untuk memastikan kelengkapan dokumentasi dari semua sudut pandang teknis.",
      tools: ["Autodesk Revit", "Structural Modeling", "3D View Configuration", "Family Components"],
    },
    result: {
      description:
        "Model 3D sekolah berhasil diselesaikan dengan tampilan 3D View yang komprehensif, meliputi struktur lengkap dengan elevasi yang terintegrasi. Model ini mencakup detail arsitektural dan structural yang dapat digunakan untuk analisis lebih lanjut, estimasi material, atau presentasi proyek konstruksi.",
      metrics: ["100% Model 3D Complete", "4 Views", "Structural & Architectural Integration"],
    },
  },
  {
    slug: "photogearhub",
    title: "PhotoGearHub - Platform Penyewaan Alat Fotografi",
    category: "WIRAUSAHA · IYT 2024",
    client: "-",
    year: "2024",
    role: "CFO (Chief Financial Officer)",
    coverImage: "/img/photogearhub.png",
    bannerImage: "/img/photogearhub.png",
    driveUrl: "#",
    liveUrl: "https://www.instagram.com/photogearhubb?igsh=b3EyMjk5ZmgycWkw",
    tags: ["Photography", "IYT 2024", "Kewirausahaan"],
    overview:
      "PhotoGearHub adalah platform penyewaan alat fotografi yang dikembangkan dalam program inkubasi bisnis tahunan Institut Teknologi Sepuluh Nopember (ITS) — ITS Youth Technopreneur (IYT) 2024. Platform ini memfasilitasi mahasiswa dan komunitas fotografi untuk menyewa peralatan kamera dengan mudah, aman, dan terjangkau.",
    objective:
      "Menciptakan solusi penyewaan alat fotografi yang accessible bagi mahasiswa ITS dan komunitas kreator, mengurangi hambatan finansial dalam memperoleh peralatan berkualitas, serta membangun ekosistem kolaboratif bagi para fotografer pemula maupun profesional di lingkungan kampus.",
    method: {
      description:
        "Diawali dengan riset kebutuhan mahasiswa terhadap akses peralatan fotografi, dilanjutkan dengan pengembangan platform digital melalui website photogearhub.my.id. Strategi pemasaran dilakukan melalui media sosial Instagram dengan konten visual yang menarik, sistem pemesanan yang streamlined, dan layanan customer service responsif. Program ini dibina oleh @kewirausahaan_its dan @its_campus dengan dukungan mentoring bisnis dan teknologi secara berkala.",
      tools: ["Instagram Marketing", "Linktree Integration"],
    },
    result: {
      description:
        "Platform berhasil diluncurkan secara official dengan website aktif photogearhub.my.id dan akun Instagram @photogearhubb yang mengelola 24+ postingan dengan 35 followers aktif. PhotoGearHub menjadi salah satu startup yang lolos program inkubasi IYT 2024, membuka peluang kolaborasi dengan komunitas fotografi kampus.",
      metrics: ["24+ Postingan Instagram", "IYT 2024 Program Inkubasi (Pendanaan)", "Officially Launched Platform Aktif"],
    },
  },
];
