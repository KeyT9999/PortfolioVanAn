import Link from 'next/link'

const projects = [
  {
    slug: 'phuong-doi',
    label: 'Case Study 01 · 06/2025 – Hiện tại',
    category: 'Brand Management · F&B Operations',
    title: 'Quản Trị Thương Hiệu & Vận Hành F&B',
    subtitle: 'Nhà Hàng Phương Dội',
    summary:
      'Xây dựng nền tảng thương hiệu và chuẩn hóa vận hành từ giai đoạn ra mắt, nhắm vào nhóm khách trung niên 30–55 tuổi. Đạt 700M VNĐ doanh thu tháng đầu tiên.',
    image: 'https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/515440688_122122229132857159_4797721852972162905_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeGePAXTWx7RDKvpB828nmKnZrPgbhzTlBFms-BuHNOUEWiX3jC54Tcxw5zRhZPNyNZG82Ts6OeV1-eIUob8PjyX&_nc_ohc=8m7xh9-AlYQQ7kNvwGoxyru&_nc_oc=AdrpqsBgR9HsTHwbXcuqbbUcqEbB0JXJ8Fd3AMaQ1JQbaQQwk7C55uKLdgyiE5VEkVY&_nc_zt=23&_nc_ht=scontent.fsgn2-7.fna&_nc_gid=T74vjQqYWfGr9lphU8akYg&_nc_ss=7a3a8&oh=00_Af21E67d73MrKu-TFoq2nvniLLUqdckBhxlwmioXpjxapg&oe=69D670AF',
    imageAlt: 'Nhà Hàng Phương Dội',
    metrics: [
      { value: '700M', label: 'Doanh thu tháng đầu (VNĐ)' },
      { value: '+28%', label: 'Tăng trưởng doanh thu' },
      { value: '223', label: 'Thành viên Zalo OA' },
    ],
    icon: 'restaurant',
    accentColor: 'border-primary',
  },
  {
    slug: 'nguoi-gieu-mam-xanh',
    label: 'Case Study 02 · 06 – 07/2025',
    category: 'Production Director · Strategic PR',
    title: 'Đạo Diễn Sản Xuất & PR',
    subtitle: 'MV "Người Gieo Mầm Xanh"',
    summary:
      'Phim âm nhạc thiện nguyện tôn vinh giáo viên vùng cao Nam Trà My. Điều phối 46 nhân sự, xây dựng chiến lược PR thuần organic đạt 18.000 lượt xem sau một tuần.',
    image: '/Marketing/Thumbnail.png',
    imageAlt: 'Thumbnail MV Người Gieo Mầm Xanh',
    metrics: [
      { value: '18K', label: 'Lượt xem organic sau 1 tuần' },
      { value: '46', label: 'Nhân sự điều phối' },
      { value: '0đ', label: 'Ngân sách quảng cáo' },
    ],
    icon: 'movie',
    accentColor: 'border-primary/70',
  },
  {
    slug: 'review-sach',
    label: 'Dự án mới · Tự do',
    category: 'Content Creator · Video Production',
    title: 'Review Sách',
    subtitle: 'Video Content & Review',
    summary:
      'Sản xuất và chia sẻ video review sách ý nghĩa, lan tỏa văn hóa đọc qua lăng kính cá nhân.',
    image: '/VAN/z7693913991422_104b2ffd832cc40e408a1e08a4d273fc.jpg',
    imageAlt: 'Thumbnail Review Sách',
    metrics: [
      { value: '99K', label: 'Lượt xem organic sau 3 ngày' },
      { value: '588', label: 'Lượt like' },
      { value: '0đ', label: 'Ngân sách quảng cáo' },
    ],
    icon: 'menu_book',
    accentColor: 'border-primary/50',
  },
]

export default function Marketing() {
  return (
    <section id="marketing" className="pt-8 pb-8 mb-8 max-w-[1920px] mx-auto px-6 md:px-12">
      {/* Section Header */}
      <div className="mb-20">
        <span className="font-label uppercase tracking-[0.2rem] text-primary text-xs mb-4 block">
          Dự án thực chiến
        </span>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <h2 className="font-headline text-5xl lg:text-6xl text-on-surface leading-tight tracking-tighter">
            Marketing <span className="italic font-normal font-serif">Projects</span>
          </h2>
          <p className="max-w-sm text-on-surface-variant font-body leading-relaxed text-base">
            Những dự án mình đã trực tiếp dẫn dắt, từ chiến lược đến thực thi, với kết quả đo lường được.
          </p>
        </div>
        <div className="h-[1px] w-full bg-outline-variant/20 mt-12" />
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/marketing/${project.slug}`}
            className="group bg-surface-container-lowest border border-outline-variant/10 rounded-sm overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all duration-400 flex flex-col"
          >

            {/* Card Image */}
            <div className="w-full aspect-[16/9] overflow-hidden bg-surface-container-low">
              <img
                src={project.image}
                alt={project.imageAlt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Accent bar */}
            <div className="h-[3px] w-full bg-primary" />

            <div className="p-10 flex flex-col flex-1">
              {/* Meta */}
              <div className="flex items-center justify-between mb-8">
                <span className="font-label text-[10px] uppercase tracking-widest text-primary">
                  {project.label}
                </span>
                <span className="material-symbols-outlined text-outline-variant/40 text-3xl group-hover:text-primary transition-colors duration-300">
                  {project.icon}
                </span>
              </div>

              {/* Category tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.category.split(' · ').map((cat) => (
                  <span
                    key={cat}
                    className="px-3 py-1 bg-surface-container-high text-[10px] font-label uppercase tracking-wider rounded-sm text-on-surface-variant"
                  >
                    {cat}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3 className="font-headline text-2xl md:text-3xl text-on-surface leading-tight mb-2 group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>
              <p className="font-serif italic text-on-surface-variant text-lg mb-6">
                {project.subtitle}
              </p>

              {/* Summary */}
              <p className="font-body text-on-surface-variant leading-relaxed text-sm mb-10 flex-1">
                {project.summary}
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 border-t border-outline-variant/15 pt-8 mb-8">
                {project.metrics.map((m) => (
                  <div key={m.label}>
                    <div className="font-headline text-2xl text-on-surface">{m.value}</div>
                    <div className="font-label text-[9px] uppercase tracking-wider text-outline mt-1 leading-tight">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex items-center gap-2 text-primary font-label text-xs uppercase tracking-widest font-semibold group-hover:gap-4 transition-all duration-300">
                <span>Xem chi tiết dự án</span>
                <span className="material-symbols-outlined text-sm">arrow_right_alt</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
