# TÀI LIỆU PHÂN TÍCH BỐ CỤC VÀ HỆ THỐNG GIAO DIỆN ltb-site01.html

## 1. Thông Tin Phiên Bản & Nguồn File
- **File tham chiếu chuẩn**: `ltb-site01.html`
- **Kho lưu trữ (Repository)**: `https://github.com/ivsjsc/LTB/blob/main/ltb-site01.html`
- **Đường dẫn cục bộ**: `D:\IVS\Website\LTB\ltb-site01.html`
- **Branch**: `main`
- **Commit SHA thực tế**: `65b36e6277fa8138eec29ddcc4a466db5fea1d3b` (đồng bộ hoàn toàn giữa local và `origin/main`).
- **Xác nhận đối chiếu**: File cục bộ và trên GitHub `origin/main` trùng khớp tuyệt đối, không có sai khác diff (`git diff origin/main..HEAD` rỗng).

---

## 2. Tổng Quan Bố Cục & Kiến Trúc Nguồn
File `ltb-site01.html` là một gói ứng dụng React 18 đơn trang (Single Page Application / React Artifact) được nhúng inline với Tailwind CSS v3.4.18, Google Fonts (`Be Vietnam Pro` & `Inter`), và Lucide Icons.

Bố cục của trang chủ gồm 6 khu vực chính theo thứ tự liên tục:
1. **Full-page Loading Screen Overlay (Splash)**:
   - Nền tối `#0E0E0E`, hiệu ứng pulse vòng tròn vàng hổ phách, logo vàng phát sáng `ref-Vn.png`, thanh progress bar hiệu ứng trượt gradient `#B68D2E` -> `#8C6B1F`. Tự tắt sau 900ms.
2. **Sticky Header Navigation**:
   - Nền sáng `bg-white`, border bottom `#ece6d3`, chiều cao `h-[72px] lg:h-[76px]`.
   - Cột trái: Logo vàng trong suốt `ref-Vn.png` (`h-[40px] lg:h-[52px]`) kèm chữ `BIA LONG THÀNH`, sub-brand `LONG THANH BEER CO.,LTD` (#B68D2E), mã số thuế `MST 3603823707 • LTB GOLD #B68D2E`.
   - Menu giữa (desktop): 5 mục liên kết nội bộ (`Trang chủ`, `Giới thiệu`, `Sản phẩm`, `Năng lực`, `Liên hệ`) với chỉ báo active gạch chân vàng `#B68D2E`.
   - Nút CTA phải: `Báo giá sỉ 0988.087.806` (gradient vàng kim, bo tròn full, đổ bóng mềm).
   - Nút hamburger mobile: Mở drawer dropdown chứa danh sách 5 mục + nút gọi điện thoại.
3. **Hero Section (`#trang-chu`)**:
   - Nền tối `#0E0E0E`, text sáng `#faf9f6`. Các lớp nền hoa văn turbulence/noise và radial gradient ánh vàng.
   - Cột trái:
     - Badge 1: `Hoạt động từ 2021 • MST 3603823707 • Đã cập nhật địa chỉ mới` (dot xanh vàng pulse).
     - Badge 2: `LTB • MST 3603823707 • LOGO VÀNG #B68D2E TRONG SUỐT` (kèm icon logo `ref-fA.png`).
     - H1 lớn: `NHÀ PHÂN PHỐI BIA & ĐỒ UỐNG UY TÍN TẠI LONG THÀNH - ĐỒNG NAI` (chữ "BIA & ĐỒ UỐNG" dùng gradient chữ vàng).
     - Đoạn văn mô tả pháp lý, MST 3603823707, ngành nghề bán buôn đồ uống, giao 24/7.
     - Nhóm CTA kép: `Liên hệ báo giá` (nền gradient vàng kim) và `Xem sản phẩm` (nền tối viền vàng).
     - 3 thẻ chỉ số nhanh: `500+ Đại lý & quán`, `24/7 Giao hàng`, `VAT Hóa đơn đầy đủ`.
   - Cột phải:
     - Khung ảnh sản phẩm chính `ref-il.webp` (Bia Việt Premium Splash) bo góc tròn `rounded-[28px]`, viền vàng nhạt `border-[#B68D2E]/20`, hiệu ứng parallax cuộn nhẹ.
     - Badge góc trên: `LONG THANH BEER • MST 3603823707` + icon Wheat.
     - Badge góc dưới: `Kho Phước Hòa • Giao nhanh Long Thành`.
     - Card thẻ nổi góc dưới bên trái: Nền trắng, viền vàng kim, ghi nhận thông tin pháp lý công ty `CÔNG TY TNHH BIA LONG THÀNH`, MST 3603823707, Ngày cấp 19/08/2021, Bán buôn 4633.
4. **Dải Băng Pháp Lý & Thông Tin Doanh Nghiệp (Credential Banner)**:
   - Nền kem nhạt `#fdfbf3`, viền phân tách `#ece6d3`, grid 4 cột (responsive 1 -> 2 -> 4 cột):
     - `Mã số thuế`: 3603823707 (Ngày cấp: 19/08/2021)
     - `Địa chỉ sau sáp nhập`: 1401/2, tổ 17, ấp Phước Hòa (Xã Long Phước, Đồng Nai)
     - `Người đại diện`: HOÀNG XUÂN DŨNG (Đại diện pháp luật)
     - `Tên quốc tế`: LONG THANH BEER (COMPANY LIMITED • LTB)
5. **Section Giới Thiệu (`#gioi-thieu`)**:
   - Nền sáng `bg-white`, layout 2 cột:
     - Cột trái: Hình ảnh kho hàng thực tế `ref-ol.webp` (Kho phân phối bia Long Thành tại Phước Hòa) kèm thẻ năng lực cốt lõi góc dưới: `Kho >1000m² tại Phước Hòa`, `Giao hàng 24/7 toàn Đồng Nai`, `Đầy đủ giấy phép 4633`.
     - Cột phải: Badge `Về chúng tôi • LTB GOLD`, Tiêu đề `Nhà phân phối đáng tin cậy từ 2021`, đoạn giới thiệu chi tiết ngành 4633, 46331, 46332, 46340. Grid 4 thế mạnh (Hàng chính hãng, Giá sỉ cạnh tranh, Giấy phép đầy đủ, Hỗ trợ xuất VAT), và Timeline 3 mốc (2021 Thành lập, 2022 Mở rộng kho Phước Hòa, 2024 Cập nhật địa chỉ sáp nhập 2025).
6. **Section Danh Mục Sản Phẩm & Ngành Nghề (`#san-pham`)**:
   - Nền tối `#0E0E0E`, ảnh mờ nền `ref-dl.webp`.
   - Tiêu đề: `Bán buôn đa ngành đồ uống & thuốc lá`, giới thiệu mã ngành 4633, 46331, 46332, 46340.
   - Grid 4 card sản phẩm cao cấp viền vàng hổ phách:
     - Thẻ 1 (`46331`): `Bia & Đồ uống có cồn` (Heineken, Tiger, Saigon, 333, Budweiser, Larue... thùng, lon, chai).
     - Thẻ 2 (`46332`): `Đồ uống không cồn` (Coca, Pepsi, Redbull, nước suối, trà...).
     - Thẻ 3 (`46340`): `Thuốc lá & Thuốc lào` (Bán buôn hợp pháp, xuất hóa đơn VAT).
     - Thẻ 4 (`LOGISTICS`): `Dịch vụ bán buôn & Giao hàng` (Đội xe tải riêng, phủ sóng Đồng Nai, kho Phước Hòa).
     - Mỗi card có danh sách đặc điểm, nút `Báo giá nhóm này` dẫn mượt về form báo giá.
7. **Section Năng Lực Phân Phối & Đối Tác (`#nang-luc`)**:
   - Nền sáng `bg-white`:
     - Khối trên: 2 cột giới thiệu `Hạ tầng B2B sẵn sàng cho đơn lớn & gấp` và 4 card năng lực (`>1000m² Kho Phước Hòa`, `6+ Đội xe giao hàng`, `Toàn Đồng Nai Phủ sóng`, `OMS Quản lý đơn hàng`).
     - Khối dưới: Box liên kết đối tác thương hiệu nền kem `#fdfbf3`, danh sách huy hiệu hãng (HEINEKEN, TIGER, SAIGON, 333, BUDWEISER, LARUE, COCA-COLA, PEPSI, REDBULL) + 4 cam kết chất lượng (Hàng chính hãng 100%, Giá sỉ tốt, Hóa đơn VAT, Đổi trả lỗi NSX).
8. **Section Liên Hệ & Form Báo Giá Sỉ (`#lien-he`)**:
   - Nền tối `#0E0E0E`, watermark logo `ref-fA.png`. Layout 2 cột:
     - Cột trái: Khung Form báo giá sỉ nền đen vàng `#15130e` gồm các trường: Tên đại lý/Người liên hệ, Số điện thoại, Loại hàng cần báo giá, Số lượng ước tính, Ghi chú thêm. Nút submit gradient vàng hổ phách, kèm cảnh báo bảo mật thanh toán VAT MST 3603823707.
     - Cột phải: Card pháp lý nền kem `#fdfbf3` ghi rõ MST 3603823707, ngày cấp, người đại diện HOÀNG XUÂN DŨNG, giờ mở cửa 7:00 - 19:00, nút gọi điện thoại nhanh và chat Zalo `0988.087.806`, cùng bản đồ Google Maps nhúng đúng định vị Công ty TNHH Bia Long Thành tại Phước Hòa, Long Phước. Kèm box lưu ý xuất hóa đơn VAT.
9. **Footer Đẳng Cấp Thương Hiệu**:
   - Nền tối gradient `#0E0E0E` -> `#1a1a1a`, chia 3 cột:
     - Cột 1: Logo vàng phát sáng `ref-Vn.png` (`h-[120px]`), tên công ty `CÔNG TY TNHH BIA LONG THÀNH`, MST, mô tả ngành nghề và cập nhật địa chỉ sáp nhập.
     - Cột 2: Toàn bộ thông tin đăng ký kinh doanh và xuất hóa đơn VAT (MST, Ngày cấp, Địa chỉ, Đại diện, Điện thoại).
     - Cột 3: Danh mục mã ngành 4633, 46331, 46332, 46340, thẻ logo vàng không nền, bản quyền 2026.
   - Dải bản quyền dưới cùng: `© 2026 Công ty TNHH Bia Long Thành. MST 3603823707` và credit `Thiết kế bởi IVS Tech - URL: ivstech.store`.

---

## 3. Bảng Màu & Typography (Design Tokens)

### Bảng Màu Chủ Đạo:
- **Màu nền sáng chính**: `#faf9f6` (Off-white ấm) và `#ffffff`
- **Màu nền tối chính**: `#0E0E0E` (Charcoal Black sâu)
- **Màu thẻ & hộp phụ sáng**: `#fdfbf3`, `#fdf6de`, `#f5f1e6`
- **Màu thẻ & hộp phụ tối**: `#15130e`, `#17150e`, `#1a1912`, `#1e1c12`, `#232115`
- **Vàng kim chủ đạo (Gold Primary)**: `#B68D2E`
- **Vàng sáng nhấn (Gold Light)**: `#D4AA4A`
- **Vàng đồng trầm (Gold Deep)**: `#8C6B1F`
- **Gradient Vàng Kim**: `linear-gradient(102deg, #B68D2E 0%, #8C6B1F 100%)`
- **Text tối**: `#0e0e0e`, `#1a1a1a`, `#3a3a3a`, `#6b6b6b`
- **Text sáng**: `#faf9f6`, `#f5f0d8`, `#c9c2ab`, `#b8b29c`, `#9a9585`
- **Đường viền (Borders)**: `#ece6d3`, `#e8dfbe`, `#e8d9a8`, và `rgba(182, 141, 46, 0.15 ... 0.35)`

### Typography:
- Font chữ: `Be Vietnam Pro` phối hợp cùng `Inter` và sans-serif hệ thống.
- Tiêu đề H1/H2/H3: Uppercase đậm (`font-black`, `tracking-[-0.03em]`, leading gọn `0.92 - 0.95`).
- Subtitle/Nhãn: Uppercase (`font-bold`, `tracking-[0.14em - 0.18em]`).

---

## 4. Tài Nguyên Đồ Họa & Nguồn Gốc (Assets)
Từ file `ltb-site01.html`, 5 file ảnh đồ họa base64 chất lượng cao đã được trích xuất an toàn vào `public/brand/`:
1. `ref-Vn.png` (`public/brand/ref-Vn.png`, 551 KB): Logo chính thức LTB chữ vàng ánh kim trong suốt 100%, không nền, sắc nét cao.
2. `ref-fA.png` (`public/brand/ref-fA.png`, 55.5 KB): Monogram biểu trưng LTB thu nhỏ trong suốt, dùng làm watermark, favicon và biểu tượng thẻ.
3. `ref-il.webp` (`public/brand/ref-il.webp`, 729 KB): Hình ảnh splash chai Bia Việt Premium dùng cho Hero Showcase.
4. `ref-ol.webp` (`public/brand/ref-ol.webp`, 763 KB): Hình ảnh kho bãi phân phối bia Long Thành thực tế tại Phước Hòa.
5. `ref-dl.webp` (`public/brand/ref-dl.webp`, 801 KB): Ảnh nền kết cấu thùng hàng và chai bia nghệ thuật cho section Sản phẩm.

---

## 5. Bảng So Sánh Chi Tiết: File Nguồn HTML vs Astro Hiện Tại

| Khu vực | File Nguồn `ltb-site01.html` | Codebase Astro Hiện Tại | Thay đổi cần làm trong Phase B |
|---|---|---|---|
| **Header** | Nền trắng `#ffffff`, viền `#ece6d3`, logo vàng trong suốt `ref-Vn.png`, text `BIA LONG THÀNH`, hotline Báo giá sỉ `0988.087.806`, CTA bo tròn gradient vàng. | Nền xanh rừng rậm/cream Stitch cũ, logo monogram SVG cũ, nút hotline `0899...`. | Cập nhật `Header.astro` chuẩn hóa logo `ref-Vn.png`, layout, màu sắc, font, hotline `0988.087.806`, giữ routing Astro và thêm liên kết mượt. |
| **Hero Section** | Nền đen `#0E0E0E`, text sáng, badge đôi MST 3603823707, H1 lớn, cụm nút kép, 3 thẻ KPI, ảnh Hero `ref-il.webp` có 3 badge nổi. | Nền xanh đậm Stitch, ảnh tĩnh, typography font cũ. | Xây dựng lại Hero trên `src/pages/index.astro` chuẩn 100% bố cục và lớp đồ họa của nguồn. |
| **Dải Pháp Lý** | Dải 4 thẻ ngang nền `#fdfbf3` viền `#ece6d3`: MST, Địa chỉ mới, Người đại diện HOÀNG XUÂN DŨNG, Tên quốc tế. | Nằm rải rác hoặc trong footer. | Chuyển thành section chuẩn ngay dưới Hero. |
| **Giới Thiệu** | 2 cột: Ảnh kho `ref-ol.webp` có badge năng lực + Cột thông tin 4 thế mạnh và timeline 3 mốc (2021-2022-2024). | Dạng văn bản đơn thuần, không có ảnh kho và timeline trực quan. | Chuyển đổi chính xác bố cục 2 cột, ảnh kho Phước Hòa, grid 4 card và timeline. |
| **Sản Phẩm** | Nền đen `#0E0E0E`, ảnh nền `ref-dl.webp`, 4 card lớn đại diện cho 46331 (Bia), 46332 (Nước ngọt), 46340 (Thuốc lá), LOGISTICS (Giao hàng). | Danh sách card sản phẩm thương mại kiểu cũ. | Đồng bộ giao diện trang chủ theo 4 nhóm dịch vụ bán buôn chuẩn xác, liên kết về form báo giá. |
| **Năng Lực** | Nền trắng: 2 cột giới thiệu hạ tầng + 4 card chỉ số + Hộp đối tác thương hiệu & 4 cam kết. | Thiết kế đơn điệu, thiếu box đối tác và huy hiệu. | Chuyển đổi toàn bộ layout năng lực, grid hãng phân phối (Heineken, Tiger, v.v.). |
| **Liên Hệ & Form** | Nền đen `#0E0E0E`: Form báo giá sỉ nền `#15130e` viền vàng + Cột thông tin công ty nền `#fdfbf3`, nút gọi, chat Zalo, Google Maps Phước Hòa. | Dùng LeadForm cũ màu xanh rêu, bản đồ chưa tích hợp đúng vị trí. | Tái tạo form báo giá sỉ chuẩn bố cục nguồn, tích hợp Google Maps Phước Hòa và thông báo xác nhận an toàn theo quy tắc nghiệp vụ. |
| **Footer** | Nền đen gradient, logo phát sáng `ref-Vn.png` 120px, 3 cột thông tin pháp lý chi tiết, credit IVS Tech chuẩn. | Nền xanh xám cũ, thiếu các chi tiết nhận diện vàng kim. | Cập nhật `Footer.astro` kế thừa phong cách sang trọng từ file nguồn. |
| **Responsive** | Mobile (<640px), Tablet (768px), Desktop (1024px, 1240px max-width) mượt mà không overflow ngang. | Một số phần tử chữ bị ngắt hoặc vỡ layout ở 360px. | Kiểm thử và tinh chỉnh ở 360px, 768px, 1440px. |

---

## 6. Chiến Lược Kiến Trúc Astro & Bảo Toàn Business Rules

1. **Giữ nguyên Business Rules LTB**:
   - Không công khai giá đại lý trên web. Nút báo giá mở form thu thập nhu cầu (tên, SĐT, loại hàng, SL ước tính).
   - Form gửi yêu cầu chỉ là "tiếp nhận yêu cầu báo giá", không giả lập xác nhận đơn hay luồng thanh toán.
   - Thông tin pháp lý chuẩn xác: MST 3603823707, CÔNG TY TNHH BIA LONG THÀNH, Người đại diện HOÀNG XUÂN DŨNG, địa chỉ 1401/2 Phước Hòa, Long Phước, Long Thành, Đồng Nai.
2. **Không gây xáo trộn Dealer Portal & Admin**:
   - `src/pages/dai-ly/*` và `src/pages/admin/*` sử dụng `DealerLayout.astro` riêng biệt, độc lập với `PublicLayout.astro`.
   - Các tokens vàng kim `#B68D2E` được cấu hình bổ sung vào Tailwind config hoặc namespace riêng, đảm bảo không gây regression giao diện bảng biểu của Dealer Portal.
3. **Thành phần hóa (Component Architecture)**:
   - `src/components/Header.astro`: Dùng chung cho toàn bộ các trang công khai (`/`, `/gioi-thieu`, `/san-pham`, `/doi-tac-phan-phoi`, `/tin-tuc`, `/lien-he`).
   - `src/components/Footer.astro`: Dùng chung cho toàn bộ các trang công khai.
   - Thêm font `Be Vietnam Pro` vào `BaseLayout.astro` để typography sắc nét và đúng nguyên bản.
   - Trang chủ `src/pages/index.astro` được xây dựng tái hiện 100% bố cục từ `ltb-site01.html`.
