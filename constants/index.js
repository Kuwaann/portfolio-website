import Placeholder from '../src/assets/imgplaceholder.jpg'
import Placeholder2 from '../src/assets/imgplaceholder2.jpg'
import { slugify } from '../src/lib/utils'

const skillsets = [
    {
        name: 'Pengembangan Web',
        skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Laravel', 'Tailwind CSS', 'React.js']
    },
    {
        name: 'Desain UI/UX',
        skills: ['Figma', 'UX Research', 'UI Design', 'Design Systems', 'Wireframing & Prototyping']
    },
    {
        name: 'Desain Grafis',
        skills: ['Adobe Photoshop', 'Adobe Illustrator', 'Canva', 'Figma']
    },
    {
        name: 'Video Editing',
        skills: ['Adobe Premiere Pro', 'Capcut']
    }
]

const processes = [
    {
        name: 'Pahami',
        description: 'Setiap proyek dimulai dengan memahami tujuan bisnis dan konteks yang melatarbelakanginya. Saya mengidentifikasi kebutuhan pengguna, masalah utama yang ingin diselesaikan, serta batasan teknis yang ada. Tahap ini menjadi fondasi agar solusi yang dirancang tidak hanya menarik secara visual, tetapi juga relevan dan terarah.'
    },
    {
        name: 'Susun',
        description: 'Setelah insight terkumpul, saya menyusun struktur yang solid. Mulai dari arsitektur informasi, alur interaksi, hingga kerangka sistem desain. Fokus saya adalah menciptakan pengalaman yang intuitif, terstruktur, dan mudah dipahami oleh pengguna.'
    },
    {
        name: 'Desain',
        description: 'Di tahap ini, struktur diterjemahkan menjadi visual. Saya merancang antarmuka dengan pendekatan yang presisi — memperhatikan tipografi, grid, warna, dan hierarki. Setiap elemen memiliki tujuan, dan setiap detail dirancang untuk memperkuat pengalaman.'
    },
    {
        name: 'Bangun',
        description: 'Desain kemudian diimplementasikan menjadi produk yang berjalan. Saya mengembangkan dengan fokus pada performa, kebersihan kode, serta kualitas interaksi. Animasi dan transisi dirancang agar terasa natural dan mendukung fungsi, bukan sekadar dekorasi.'
    },
    {
        name: 'Sempurnakan',
        description: 'Sebelum diluncurkan, saya melakukan pengujian dan evaluasi menyeluruh. Feedback dianalisis, detail diperbaiki, dan performa dioptimalkan. Bagi saya, kualitas tercapai saat pengalaman terasa halus, konsisten, dan benar-benar siap digunakan.'
    }
]

const projects = [
    {
        title: "6Packs",
        slug: slugify("6Packs"),
        client: "Self Project",
        year: 2026,
        tags: ["Tag 1", "Tag 2", "Tag 3", "Tag 4"],
        img: [Placeholder, Placeholder2, Placeholder, Placeholder2],
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, animi modi. Odit necessitatibus nemo facilis provident beatae mollitia vitae unde voluptates iusto, repellat harum illum ipsa dolore numquam aspernatur iure!"
    },
    {
        title: "Otho Metronik Landing Page",
        slug: slugify("Otho Metronik Landing Page"),
        client: "PT Otho Metronik Indonesia",
        year: 2026,
        tags: ["Tag 4", "Tag 5", "Tag 6"],
        img: [Placeholder2, Placeholder, Placeholder2, Placeholder],
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, animi modi. Odit necessitatibus nemo facilis provident beatae mollitia vitae unde voluptates iusto, repellat harum illum ipsa dolore numquam aspernatur iure!"
    },
    {
        title: "Petrostream",
        slug: slugify("Petrostream"),
        client: "Self Project",
        year: 2026,
        tags: ["Tag 7", "Tag 8", "Tag 9"],
        img: [Placeholder, Placeholder2, Placeholder, Placeholder2],
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, animi modi. Odit necessitatibus nemo facilis provident beatae mollitia vitae unde voluptates iusto, repellat harum illum ipsa dolore numquam aspernatur iure!"
    },
    {
        title: "Dusun Jetis Jamuskauman",
        slug: slugify("Dusun Jetis Jamuskauman"),
        client: "Dusun Jetis Jamuskauman",
        year: 2026,
        tags: ["Tag 4", "Tag 5", "Tag 6"],
        img: [Placeholder2, Placeholder, Placeholder2, Placeholder],
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, animi modi. Odit necessitatibus nemo facilis provident beatae mollitia vitae unde voluptates iusto, repellat harum illum ipsa dolore numquam aspernatur iure!"
    },
    {
        title: "Dummy Bank BKC",
        slug: slugify("Dummy Bank BKC"),
        client: "Self Project",
        year: 2026,
        tags: ["Tag 7", "Tag 8", "Tag 9"],
        img: [Placeholder, Placeholder2, Placeholder, Placeholder2],
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, animi modi. Odit necessitatibus nemo facilis provident beatae mollitia vitae unde voluptates iusto, repellat harum illum ipsa dolore numquam aspernatur iure!"
    },
]

const achievements = {
    clients: 1,
    projects: projects.length,
    experience: 0,
    certifications: 2
}

const featuredProjects = projects[0]

export {
    skillsets,
    processes,
    projects,
    achievements,
    featuredProjects
}