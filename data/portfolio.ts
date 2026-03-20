export interface PortfolioMetric {
  label: string
  value: string
}

export interface PortfolioStarBlock {
  title: 'Situation' | 'Task' | 'Action' | 'Result'
  points: string[]
}

export type PortfolioAccent = 'hosting' | 'marketing' | 'csr' | 'research'

export interface PortfolioItem {
  id: number
  title: string
  category: string
  categories: string[]
  timeline: string
  role: string
  summary: string
  highlight: string
  accent: PortfolioAccent
  metrics: PortfolioMetric[]
  skills: string[]
  proofPoints: string[]
  mediaNote: string
  star: PortfolioStarBlock[]
  link?: string
  linkLabel?: string
}

export const portfolioAccentStyles: Record<
  PortfolioAccent,
  {
    panel: string
    badge: string
    border: string
  }
> = {
  hosting: {
    panel: 'from-[#9f4b3e] via-[#c57c56] to-[#f0ded0]',
    badge: 'bg-[#4d2017]/80 text-[#fff7f1]',
    border: 'border-[#d1a183]',
  },
  marketing: {
    panel: 'from-[#1f4d4d] via-[#3b7a78] to-[#d8ece8]',
    badge: 'bg-[#153434]/85 text-[#eefaf8]',
    border: 'border-[#7db7ad]',
  },
  csr: {
    panel: 'from-[#84613a] via-[#c39a5f] to-[#f4ead7]',
    badge: 'bg-[#4b3517]/85 text-[#fff8ec]',
    border: 'border-[#d4b07b]',
  },
  research: {
    panel: 'from-[#3c4268] via-[#6d74a6] to-[#e6e9fb]',
    badge: 'bg-[#242947]/85 text-[#f4f6ff]',
    border: 'border-[#a6add9]',
  },
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'Professional Hosting & Stage Presence',
    category: 'Hosting',
    categories: ['Hosting'],
    timeline: '2022 - Present',
    role: 'Professional MC | Event Host | Brand Representative',
    summary:
      '4 năm dẫn dắt sân khấu qua các hội thảo quốc tế, lễ ký kết, gala dinner, talkshow và sự kiện nghệ thuật, với phong cách truyền cảm hứng và kiểm soát không khí tốt.',
    highlight:
      'Bản lĩnh sân khấu của Vân An không chỉ nằm ở giọng nói hay cảm xúc, mà ở khả năng giữ nhịp, kết nối đa nhóm khán giả và bảo toàn tinh thần thương hiệu trong các sự kiện quy mô lớn.',
    accent: 'hosting',
    metrics: [
      { label: 'Kinh nghiệm', value: '4+ năm' },
      { label: 'Sự kiện', value: '50+ chương trình' },
      { label: 'Quy mô lớn nhất', value: '3.000 người' },
      { label: 'Điểm chạm', value: 'Giáo dục, văn hóa, nghệ thuật' },
    ],
    skills: [
      'Public speaking',
      'Run-of-show coordination',
      'Audience engagement',
      'Storytelling',
      'Live problem solving',
      'Stakeholder communication',
    ],
    proofPoints: [
      'MC Khai mạc & Bế mạc Open Stem Day 2026 tại Fschool Huế với hơn 3.000 người tham dự.',
      'MC Lễ Khai mạc Triển lãm Đàling Art Space tại Công viên APEC.',
      'MC Cơ Tu-Gether trong chuỗi Ngày hội Di sản văn hóa Đà Nẵng 2025.',
      'Host Open Mic mùa 7 và 8 cùng band MAYDAY.',
      'Dẫn định kỳ các chương trình học thuật và nội bộ của hệ thống giáo dục FPT.',
    ],
    mediaNote:
      'Nên bổ sung showreel 60-90 giây và bộ ảnh sân khấu chuyên nghiệp để tăng sức thuyết phục cho section này.',
    star: [
      {
        title: 'Situation',
        points: [
          'Nhiều sự kiện giáo dục, nghệ thuật và cộng đồng cần một người dẫn vừa giữ nhịp chương trình vừa truyền được cảm xúc.',
          'Khán giả thường đa dạng về độ tuổi, từ học sinh, phụ huynh đến khách mời chuyên môn và đối tác.',
        ],
      },
      {
        title: 'Task',
        points: [
          'Đảm bảo dòng chảy chương trình liền mạch, đúng tinh thần thương hiệu và đúng nhịp cảm xúc của từng phân đoạn.',
          'Kết nối các đại diện, khách mời và khán giả trong cùng một câu chuyện sự kiện.',
        ],
      },
      {
        title: 'Action',
        points: [
          'Chuẩn bị kịch bản dẫn linh hoạt theo nhiều kịch bản phát sinh thay vì chỉ bám lời thoại cố định.',
          'Điều phối năng lượng sân khấu theo từng nhóm đối tượng, giữ tương tác liên tục nhưng không làm loãng thông điệp.',
          'Phối hợp chặt với tổ kỹ thuật, nội dung và vận hành để xử lý tình huống trực tiếp.',
        ],
      },
      {
        title: 'Result',
        points: [
          'Xây dựng hình ảnh một host có thể đại diện cho các chương trình mang tính học thuật lẫn nghệ thuật.',
          'Trở thành gương mặt được tin tưởng ở các sân khấu quy mô lớn, giúp trải nghiệm khán giả mượt và chuyên nghiệp hơn.',
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'Operations & Marketing Lead | Nhà hàng Phương Dội',
    category: 'Marketing',
    categories: ['Marketing'],
    timeline: '06/2025 - Present',
    role: 'Operations & Marketing Lead',
    summary:
      'Dẫn dắt chiến lược thương hiệu, vận hành và phát triển đối tác cho nhà hàng Phương Dội, với tư duy performance-driven và hospitality-first.',
    highlight:
      'Đây là case study thể hiện rõ nhất khả năng đi từ insight, sản phẩm, marketing đến trải nghiệm dịch vụ và tăng trưởng doanh thu của Vân An.',
    accent: 'marketing',
    metrics: [
      { label: 'Doanh thu tháng đầu', value: '700 triệu VNĐ' },
      { label: 'Phục hồi doanh thu', value: '+28% từ 350 lên 450 triệu' },
      { label: 'Nội dung social', value: '5-6 bài/tuần' },
      { label: 'Cộng đồng Zalo', value: '223+ thành viên' },
    ],
    skills: [
      'Brand strategy',
      'Performance marketing',
      'Service operations',
      'CRM & community building',
      'B2B negotiation',
      'Proposal and contract handling',
    ],
    proofPoints: [
      'Nghiên cứu insight khách hàng và xác lập USP ngay từ giai đoạn xây dựng thương hiệu.',
      'Duy trì hệ nhịp nội dung social nhất quán, có chiến lược và bám mục tiêu chuyển đổi.',
      'Tổ chức đào tạo nhân sự hàng tuần để chuyển trọng tâm từ marketing sang sản phẩm cốt lõi và chất lượng phục vụ.',
      'Thiết lập group xe dịch vụ 153 thành viên và group khách hàng thân thiết 70 thành viên.',
      'Đàm phán và xử lý hồ sơ dịch vụ với các đơn vị lữ hành, công ty đặt tiệc và đối tác B2B.',
    ],
    mediaNote:
      'Có thể bổ sung dashboard doanh thu, ảnh vận hành nhà hàng, growth chart fanpage và ảnh proposal B2B đã ẩn thông tin nhạy cảm.',
    star: [
      {
        title: 'Situation',
        points: [
          'Thương hiệu F&B mới cần xây nền nhận diện rõ ràng, nhanh có doanh thu và giữ được đà tăng trưởng sau giai đoạn ra mắt.',
          'Khi doanh thu đi vào vùng bão hòa, bài toán không còn là truyền thông đơn thuần mà là tối ưu lại sản phẩm và trải nghiệm.',
        ],
      },
      {
        title: 'Task',
        points: [
          'Thiết lập chiến lược thương hiệu có khả năng chuyển đổi thực tế.',
          'Tái cân bằng giữa marketing, vận hành dịch vụ và phát triển đối tác để tạo tăng trưởng bền vững.',
        ],
      },
      {
        title: 'Action',
        points: [
          'Nghiên cứu insight, xác định USP và xây nền thương hiệu ngay từ giai đoạn đầu.',
          'Triển khai nội dung social theo tư duy hiệu suất, giữ tần suất 5-6 nội dung mỗi tuần.',
          'Đào tạo nhân sự hàng tuần, nâng chất lượng phục vụ để đưa sản phẩm và dịch vụ về đúng trọng tâm.',
          'Mở rộng cộng đồng bằng hệ sinh thái Zalo và trực tiếp tham gia đàm phán B2B, hồ sơ thầu và hợp đồng.',
        ],
      },
      {
        title: 'Result',
        points: [
          'Đạt 700 triệu VNĐ ngay trong tháng đầu ra mắt.',
          'Kéo doanh thu từ 350 triệu VNĐ lên 450 triệu VNĐ, tương đương tăng khoảng 28%, và giữ đà tăng trưởng ổn định.',
          'Tạo được nguồn khách quay lại và nền tảng đối tác thực tế cho hoạt động vận hành lâu dài.',
        ],
      },
    ],
  },
  {
    id: 3,
    title: 'Người Gieo Mầm Xanh | Media Production & CSR',
    category: 'CSR',
    categories: ['CSR'],
    timeline: '06/2025 - 07/2025',
    role: 'Production Director & Executive Producer',
    summary:
      'Dự án phóng sự âm nhạc kết hợp hoạt động cộng đồng tại Nam Trà My, nơi Vân An phụ trách cả chiến lược nội dung, vận hành sản xuất và tác động xã hội.',
    highlight:
      'Đây là “spotlight project” rất phù hợp để kể câu chuyện trái tim và năng lực điều phối quy mô lớn của Vân An.',
    accent: 'csr',
    metrics: [
      { label: 'Organic views', value: '18.000 trong tuần đầu' },
      { label: 'Ngân sách ads', value: '0 đồng' },
      { label: 'Nhân sự điều phối', value: '46 người' },
      { label: 'Quà trao tặng', value: '100 suất' },
    ],
    skills: [
      'Executive production',
      'Creative direction',
      'Master planning',
      'Volunteer coordination',
      'Copyright clearance',
      'CSR storytelling',
    ],
    proofPoints: [
      'Chủ trì masterplan, biên kịch và hoàn thiện quy trình xin bản quyền âm nhạc.',
      'Điều phối 16 thành viên sản xuất và 30 tình nguyện viên tại địa bàn vùng cao.',
      'Tổ chức giao lưu nghệ thuật song hành cùng hoạt động thiện nguyện.',
      'Giám sát chất lượng hậu kỳ hình ảnh và âm thanh để giữ tinh thần tri ân xuyên suốt sản phẩm.',
    ],
    mediaNote:
      'Khi có asset thật, nên ưu tiên trailer ngắn, behind-the-scenes và một gallery hậu trường để tăng chiều sâu cảm xúc.',
    star: [
      {
        title: 'Situation',
        points: [
          'Dự án vừa yêu cầu một sản phẩm truyền thông đủ mạnh để lan tỏa thông điệp, vừa phải bảo đảm hoạt động cộng đồng diễn ra hiệu quả tại Nam Trà My.',
          'Khối lượng công việc lớn, nhân sự đông và điều kiện triển khai thực địa phức tạp.',
        ],
      },
      {
        title: 'Task',
        points: [
          'Xây dựng một sản phẩm có chất lượng chuyên nghiệp, chạm cảm xúc và vẫn vận hành được chuỗi hoạt động CSR ngoài hiện trường.',
          'Điều phối đội ngũ lớn mà không làm đứt mạch sáng tạo lẫn hậu cần.',
        ],
      },
      {
        title: 'Action',
        points: [
          'Lên masterplan sản xuất, biên kịch và chuẩn hóa quy trình pháp lý cho âm nhạc sử dụng trong MV.',
          'Điều phối toàn bộ nhân sự sản xuất và tình nguyện viên theo vai trò rõ ràng.',
          'Kết hợp hoạt động giao lưu nghệ thuật với chương trình trao tặng nhu yếu phẩm và đồ dùng học tập.',
          'Giám sát hậu kỳ để bảo đảm âm thanh, hình ảnh và thông điệp tri ân đi cùng nhau.',
        ],
      },
      {
        title: 'Result',
        points: [
          'MV đạt 18.000 lượt xem hữu cơ ngay trong tuần đầu mà không dùng quảng cáo.',
          'Hoàn thành điều phối 46 cộng sự và trao tặng 100 suất quà cho trẻ em vùng cao.',
          'Tạo ra một dự án vừa có hiệu quả truyền thông vừa có giá trị xã hội rõ ràng.',
        ],
      },
    ],
  },
  {
    id: 4,
    title: 'AI & AEO Research in Tourism',
    category: 'Research',
    categories: ['Research'],
    timeline: '12/2025 - 05/2026',
    role: 'Student Researcher | Finalist',
    summary:
      'Đề tài nghiên cứu tác động của review được tạo bởi AI đến niềm tin khách hàng và quyết định đặt phòng trong ngành du lịch Việt Nam.',
    highlight:
      'Case này cho thấy Vân An không chỉ mạnh về giao tiếp và vận hành, mà còn có năng lực đọc xu hướng công nghệ, phân tích hành vi người dùng và tư duy chiến lược dài hạn.',
    accent: 'research',
    metrics: [
      { label: 'Trạng thái', value: 'Finalist' },
      { label: 'Bối cảnh', value: 'Du lịch Việt Nam' },
      { label: 'Địa bàn nghiên cứu', value: 'Đà Nẵng' },
      { label: 'Trục phân tích', value: 'AI reviews & AEO' },
    ],
    skills: [
      'Research framing',
      'Consumer insight',
      'AEO thinking',
      'Trend analysis',
      'Strategic marketing',
      'Technology translation',
    ],
    proofPoints: [
      'Đề tài: The Influence of AI-Generated Online Reviews on Consumer Trust and Booking Decisions in Vietnam’s Tourism Industry.',
      'Tập trung phân tích niềm tin khách hàng khi AI tham gia tổng hợp và tái phân phối thông tin đánh giá.',
      'Liên hệ trực tiếp với bài toán hiển thị thương hiệu trong Answer Engine Optimization.',
    ],
    mediaNote:
      'Nên bổ sung infographic nghiên cứu, sơ đồ insight và 1 trang executive summary để phù hợp với nhà tuyển dụng khối hospitality và PR.',
    star: [
      {
        title: 'Situation',
        points: [
          'Ngành du lịch đang chịu tác động ngày càng mạnh từ review do AI tạo ra và cách công cụ trả lời mới tổng hợp thông tin cho người dùng.',
          'Niềm tin khách hàng và hành vi đặt phòng vì thế không còn phụ thuộc riêng vào OTA hoặc fanpage truyền thống.',
        ],
      },
      {
        title: 'Task',
        points: [
          'Làm rõ AI-generated reviews ảnh hưởng thế nào đến niềm tin và quyết định booking của người dùng Việt Nam.',
          'Kết nối phát hiện nghiên cứu với góc nhìn ứng dụng cho thương hiệu du lịch và hospitality.',
        ],
      },
      {
        title: 'Action',
        points: [
          'Xây dựng đề tài nghiên cứu theo hướng kết hợp hành vi người tiêu dùng, niềm tin số và AEO.',
          'Theo dõi cách AI tổng hợp dữ liệu đánh giá và ảnh hưởng tới khả năng hiển thị thương hiệu.',
          'Diễn giải kết quả nghiên cứu theo ngôn ngữ có thể áp dụng cho marketing và quản trị thương hiệu.',
        ],
      },
      {
        title: 'Result',
        points: [
          'Đề tài trở thành một điểm nhấn học thuật giúp hồ sơ của Vân An nổi bật ở tư duy phân tích và cập nhật công nghệ.',
          'Mở ra góc nhìn chiến lược cho các thương hiệu hospitality muốn xây niềm tin trong bối cảnh AI đang thay đổi hành vi tìm kiếm.',
        ],
      },
    ],
  },
]

export const portfolioCategories = [
  'ALL',
  ...Array.from(new Set(portfolioItems.flatMap((item) => item.categories))),
]
