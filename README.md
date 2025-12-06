# Portfolio Chu Hai

Portfolio website được xây dựng với Next.js 14, TypeScript, Tailwind CSS và Framer Motion.

## Công nghệ sử dụng

- **Next.js 14** - React framework với App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## Tính năng

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Smooth scrolling và animations
- ✅ Portfolio grid với filter categories
- ✅ Navigation với mobile menu
- ✅ Hero section với call-to-action
- ✅ About/Profile section
- ✅ Contact section với form
- ✅ Modern UI/UX

## Cài đặt

```bash
# Cài đặt dependencies
npm install

# Chạy development server
npm run dev

# Build cho production
npm run build

# Chạy production server
npm start
```

Mở [http://localhost:3000](http://localhost:3000) để xem kết quả.

## Cấu trúc dự án

```
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/
│   ├── Navigation.tsx   # Navigation bar
│   ├── Hero.tsx         # Hero section
│   ├── Portfolio.tsx    # Portfolio grid với filter
│   ├── About.tsx        # About/Profile section
│   └── Contact.tsx      # Contact section
└── public/              # Static files
```

## Tùy chỉnh

- Thay đổi thông tin cá nhân trong các components
- Cập nhật portfolio items trong `components/Portfolio.tsx`
- Thay đổi màu sắc trong `tailwind.config.ts`
- Thêm/sửa categories trong filter

## Học hỏi từ portfolio.nguyenminhphu.com

Portfolio này được tạo dựa trên thiết kế và tính năng của portfolio.nguyenminhphu.com:

- Layout tương tự với Hero, Portfolio, About, Contact sections
- Filter system cho portfolio items
- Smooth animations và transitions
- Responsive design
- Modern UI với black & white theme

