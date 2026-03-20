export interface SiteMetric {
  value: string
  label: string
}

export interface FocusArea {
  title: string
  description: string
}

export interface ExperienceItem {
  title: string
  organization: string
  timeline: string
  summary: string
  bullets: string[]
}

export interface EducationItem {
  title: string
  organization: string
  detail: string
}

export interface ContactMethod {
  label: string
  value: string
  href?: string
  note?: string
}

export const siteContent = {
  name: 'Vân An',
  shortName: 'VA',
  title: 'Professional Host & Strategic Marketer',
  tagline: 'Multimedia Student | Professional Host | Strategic Marketer',
  motto: 'Where the heart is, there lies the treasure',
  intro:
    'Mang 4 năm bản lĩnh MC và tư duy quản trị F&B vào từng điểm chạm thương hiệu, Vân An theo đuổi triết lý hospitality-first: giao tiếp tử tế, xử lý linh hoạt và để lại niềm tin dài hạn.',
  careerObjective:
    'Vững tin với triết lý “Trái tim ở đâu, kho báu ở đó”, Vân An hướng tới môi trường tiêu chuẩn 5 sao quốc tế với quyết tâm bứt phá thành nhân sự chính thức sau 3 tháng bằng sự chân thành, năng lực giải quyết vấn đề và khả năng lan tỏa thông điệp ý nghĩa. Trong 5 năm tới, mục tiêu là phát triển lên vai trò Trưởng phòng PR với cam kết góp phần gia tăng 20% mật độ tín nhiệm thương hiệu thông qua những kết nối đối ngoại bền vững.',
  story: [
    'Điểm mạnh của Vân An nằm ở sự giao thoa giữa ba vùng năng lực: bản lĩnh sân khấu của một MC, tư duy chiến lược của người làm marketing và sự tận tâm trong cách chăm sóc trải nghiệm con người.',
    'Thay vì xem truyền thông chỉ là nội dung đẹp, Vân An tiếp cận thương hiệu như một hệ sinh thái gồm cảm xúc, vận hành, dịch vụ và độ tin cậy. Đó cũng là lý do triết lý “hospitality-first” xuất hiện xuyên suốt trong cách làm việc.',
    'Portfolio này vì vậy không chỉ là nơi trưng bày thành tích, mà là bản đồ năng lực cho thấy cách Vân An dẫn dắt câu chuyện, vận hành con người và tạo ra giá trị thực ở từng dự án.',
  ],
  metrics: [
    { value: '4+', label: 'Năm dẫn chương trình chuyên nghiệp' },
    { value: '50+', label: 'Sự kiện đã dẫn và điều phối' },
    { value: '3.000', label: 'Khán giả ở sân khấu quy mô lớn nhất' },
    { value: '700M', label: 'Doanh thu tháng đầu của case F&B' },
  ] satisfies SiteMetric[],
  focusAreas: [
    {
      title: 'Professional Hosting',
      description:
        'Dẫn dắt sân khấu bằng năng lượng ổn định, khả năng đọc khán giả và kỹ năng giữ nhịp chương trình.',
    },
    {
      title: 'Strategic Marketing',
      description:
        'Tư duy từ insight đến chuyển đổi, biết biến nội dung và trải nghiệm dịch vụ thành tăng trưởng thực tế.',
    },
    {
      title: 'Media Production & CSR',
      description:
        'Kết hợp sáng tạo nội dung với tổ chức sản xuất và giá trị cộng đồng để dự án vừa chạm vừa có ích.',
    },
    {
      title: 'Research & Innovation',
      description:
        'Quan tâm đến AI, AEO và hành vi tiêu dùng mới để xây chiến lược truyền thông có chiều sâu dài hạn.',
    },
  ] satisfies FocusArea[],
  skillGroups: [
    'Hospitality-first mindset',
    'Problem solving',
    'Public speaking',
    'Brand storytelling',
    'B2B negotiation',
    'CRM & community building',
    'Team leadership',
    'Event operations',
    'Marketing mix implementation',
    'Content hosting',
  ],
  experiences: [
    {
      title: 'Operations & Marketing Lead',
      organization: 'Nhà hàng Phương Dội',
      timeline: '06/2025 - Hiện tại',
      summary:
        'Kết hợp vai trò chiến lược thương hiệu, quản trị vận hành và phát triển đối tác để tạo tăng trưởng gắn với chất lượng dịch vụ.',
      bullets: [
        'Xây dựng nền tảng thương hiệu và USP giúp đạt 700 triệu VNĐ trong tháng đầu ra mắt.',
        'Duy trì chiến lược social 5-6 nội dung mỗi tuần theo tư duy hiệu suất.',
        'Đào tạo nhân sự hàng tuần và xây hệ sinh thái Zalo giúp tăng tỷ lệ khách quay lại.',
        'Đàm phán, xử lý hồ sơ thầu và hợp đồng với các đối tác B2B.',
      ],
    },
    {
      title: 'Professional MC',
      organization: 'Freelance | Giáo dục, văn hóa, nghệ thuật',
      timeline: '2022 - Hiện tại',
      summary:
        'Chuyên dẫn hội thảo quốc tế, lễ ký kết, gala dinner, talkshow và sự kiện nghệ thuật với phong cách truyền cảm hứng.',
      bullets: [
        'Điều phối sân khấu Open Stem Day 2026 với hơn 3.000 người tham dự.',
        'Dẫn các chương trình của hệ thống giáo dục FPT và các sự kiện văn hóa tại Đà Nẵng.',
        'Giữ nhịp chương trình, kết nối khách mời và xử lý tình huống trực tiếp linh hoạt.',
      ],
    },
    {
      title: 'CTV Phòng Tuyển sinh',
      organization: 'Đại học FPT Đà Nẵng',
      timeline: '11/2023 - 02/2024',
      summary:
        'Kết hợp tư vấn tuyển sinh, chăm sóc thí sinh và đại diện hình ảnh chuyên nghiệp của nhà trường.',
      bullets: [
        'Tư vấn trực tiếp tại các điểm trường THPT để hỗ trợ chuyển đổi.',
        'Theo sát hồ sơ thí sinh trong suốt hành trình đăng ký.',
        'Đảm nhận vai trò MC cho các workshop tuyển sinh.',
      ],
    },
    {
      title: 'CTV Phòng Tuyển sinh',
      organization: 'Trường THPT FPT (FSchool)',
      timeline: '09/2021 - 12/2022',
      summary:
        'Phụ trách điều phối tour, hỗ trợ tuyển sinh và làm host cho các nội dung số của nhà trường.',
      bullets: [
        'Dẫn các đoàn tham quan và hỗ trợ phụ huynh, học sinh trong mùa tuyển sinh.',
        'Làm host/livestream series Ôn luyện Toán tư duy trên Facebook.',
        'Tham gia vận hành các ngày hội tuyển sinh, hội thảo và chương trình âm nhạc.',
      ],
    },
  ] satisfies ExperienceItem[],
  education: [
    {
      title: 'Sinh viên năm 3 ngành Truyền thông đa phương tiện',
      organization: 'Đại học FPT',
      detail:
        'Sinh viên giỏi kỳ Summer 2025, học bổng FPTU Scholarship 1000.',
    },
  ] satisfies EducationItem[],
  certifications: [
    'Chứng chỉ MC sự kiện chuyên sâu',
    'Chứng chỉ Kỹ năng Sư phạm (Chuẩn Quốc tế IBSTPI) - Đại học FPT',
    'Marketing Mix Implementation Specialization - IE University (Coursera)',
  ],
  achievements: [
    'Top 5 Mentor hạng mục Dấu ấn của dự án Brothers & Sisters 2024.',
    'Giải thưởng Cóc Đọc 2024 với các video review sách đạt 44.000 và 54.000 lượt xem sau 48 giờ.',
    'Vice President, FDN Events (2021 - 2022), trực tiếp điều phối nhân sự và sự kiện Winter Story cho hơn 700 người.',
    'Co-founder Soleil Debate Station (SODES), dẫn dắt 4 đội vào Top 16 The Debate Challenge 2023 khu vực miền Trung.',
  ],
  contactMethods: [
    {
      label: 'Email chính thức',
      value: 'Cần bổ sung email của Vân An trước khi public portfolio.',
      note: 'Hiện mình chưa dùng lại email cũ để tránh hiển thị sai thông tin.',
    },
    {
      label: 'Số điện thoại',
      value: 'Cần bổ sung số điện thoại liên hệ chính thức.',
      note: 'Nên dùng số liên lạc dành riêng cho ứng tuyển và hợp tác.',
    },
    {
      label: 'CV PDF',
      value: 'Upload CV Vân An vào thư mục public để gắn nút tải CV.',
      note: 'Ví dụ: public/cv-van-an.pdf',
    },
    {
      label: 'Drive sản phẩm',
      value: 'Thêm link drive tổng hợp showreel, event photos, dashboard tăng trưởng và proposal mẫu.',
      note: 'Ưu tiên 1 folder tổng có quyền xem công khai.',
    },
  ] satisfies ContactMethod[],
}
