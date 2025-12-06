export interface PortfolioItem {
  id: number
  title: string
  category: string
  categories: string[]
  image: string
  images?: string[] // Array of images for detail page
  link?: string
  description?: string
  director?: string
  producer?: string
  client?: string
  year?: string
  tags?: string[]
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: '🔥 "HIP TO DA HOP" - 2nd DfP DANCE PROJECT 🔥',
    category: 'Music Videos',
    categories: ['Music Videos', 'Dance'],
    image: '/Hiptodashow/1.jpg',
    images: Array.from({ length: 11 }, (_, i) => `/Hiptodashow/${i + 1}.jpg`),
    description: `BTS | 🔥 "HIP TO DA HOP" - 2nd DfP DANCE PROJECT 🔥

Music: HOTEL LOBBY + DOPEBWOY + READY SET

Choreography: Nguyễn Trí

Dancers: Nguyễn Trí Mai Hy, Pinkk Quân, Chi Nguyễn, Quyên Nguyễn

Director: Chú Hải

Photographer: Tai Anh Nguyễn Phạm Viết Thông

Equipment: Huỳnh Phan Ngọc Thưởng, Nguyễn Phạm Viết Thông, Thành Long

Location: Sân vận động Hòa Xuân

Special thanks to:
Như Hoàng
Thành Long

Chân thành cảm ơn DfP - Dance for Passion đã trao cơ hội để mình thực hiện dự án này!`,
    director: 'Chú Hải',
    client: 'DfP - Dance for Passion',
    year: '2024',
    tags: ['Music Video', 'Dance', 'BTS'],
  },
  {
    id: 2,
    title: 'BTS | MAKING OF HÔ DANH MUỘI MV',
    category: 'Music Videos',
    categories: ['Music Videos', 'BTS'],
    image: '/MAKING OF HÔ DANH MUỘI MV/1.jpg',
    images: Array.from({ length: 30 }, (_, i) => `/MAKING OF HÔ DANH MUỘI MV/${i + 1}.jpg`),
    link: 'https://youtu.be/x-gqaWaexWI?si=A5a5Nd7sbHRZkk6t',
    description: `BTS | MAKING OF HÔ DANH MUỘI MV

Hô Danh Muội - Lim x AnhLucProd (ft.Noise Makers)

Một sản phẩm với sự góp mặt đông đảo anh em homie Đà Thành.

Hãy cook con nhạc Gọi Tên Em - Min cùng chúng tớ nhé!!

Hiện đã có mặt tại:
- Kênh Youtube Phan Hiển: https://youtu.be/x-gqaWaexWI?si=A5a5Nd7sbHRZkk6t
- Fanpage Noise Makers - Bring the Beat, Break the Silence: https://www.facebook.com/share/v/1HwDKY8t3S/

Prod. AnhLucProd

Mixing/Mastering: AnhLuc | Phan Anh Lực

Recording: AnhLuc, Lim | Phan Anh Lực Phan Hiển

Composers: AnhLuc, Lim

Director – Colorist: Chú Hải

CamOP: Dalos, Chú Hải | Nam Trung Đào

BTS: Phạm Ân

Editor: Phan Gia Tốc

Artworks: Hezip(youngart), em Chí (youngart), YoungLynk (youngart)

Noise Makers:
Lâm Lê Huyền • Nhật Trương • Trần Thị Thùy Linh • Zidann • Navanneee

Và các homie te te te…

Chúc mừng anh em đã hoàn thành quả bom này 💥💥BÙM`,
    director: 'Chú Hải',
    client: 'Noise Makers',
    year: '2024',
    tags: ['Music Video', 'BTS', 'MV'],
  },
  {
    id: 3,
    title: 'Trương Tâm Như',
    category: 'Photography',
    categories: ['Photography', 'Portrait'],
    image: '/TamNhuTruong/1.jpg',
    images: Array.from({ length: 4 }, (_, i) => `/TamNhuTruong/${i + 1}.jpg`),
    description: `Màu đỏ chứng tỏ …

📷: Đoàn Phước Trường Hải

💄: Minh Vy, TAM NHU TRUONG`,
    director: 'Đoàn Phước Trường Hải',
    client: 'Photography',
    year: '2024',
    tags: ['Photography', 'Portrait', 'Fashion'],
  },
  {
    id: 4,
    title: 'Trong bóng đêm anh chỉ còn thấy bóng đêm. Nhìn vào mắt em anh thấy hai cái tròng đen.',
    category: 'Photography',
    categories: ['Photography', 'Portrait', 'Birthday'],
    image: '/BACHHOANG/1.jpg',
    images: Array.from({ length: 5 }, (_, i) => `/BACHHOANG/${i + 1}.jpg`),
    description: `Trong bóng đêm anh chỉ còn thấy bóng đêm.

Nhìn vào mắt em anh thấy hai cái tròng đen.

-----------------------------

BIRTHDAY PHOTOSHOOT

Photographer: Chú Hải

Model: Bạch Hoàng

Stylist: Thiều Oanh

Location & Lighting: Era Studio Anh Nguyen`,
    director: 'Chú Hải',
    client: 'Bạch Hoàng',
    year: '2024',
    tags: ['Photography', 'Portrait', 'Birthday'],
  },
]

