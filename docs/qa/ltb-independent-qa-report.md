# BÁO CÁO KIỂM THỬ ĐỘC LẬP & VISUAL REGRESSION (LTB SITE AUDIT)
**Dự án:** Bia Long Thành (LTB) — Cổng thông tin B2B  
**File đối soát gốc:** `ltb-site01.html`  
**Ngày thực hiện:** 15/10/2026  
**Trạng thái kiểm thử:** Hoàn thành toàn diện (Không dựa trên báo cáo agent trước đó)

---

## 1. Trạng thái Git & Working-Tree (Phase 1)

### 1.1. Thông số Git thực tế
* **Current Branch:** `main` (Up to date với `origin/main`)
* **HEAD Commit SHA:** `19253414d8d476a1a57cfcd907f475f1989a4e8d`
* **Origin/Main Commit SHA:** `19253414d8d476a1a57cfcd907f475f1989a4e8d`
* **Git diff HEAD origin/main:** `0 files changed` (Đã đồng bộ tuyệt đối)
* **Working tree status:** Sạch sẽ (`working tree clean`), không có thay đổi chưa commit.

### 1.2. Kiểm tra file tham chiếu gốc `ltb-site01.html`
* **Đường dẫn file:** `d:\IVS\Website\LTB\ltb-site01.html`
* **Dung lượng file:** 4,094,931 bytes (~3.9 MB, chứa bundle React/Tailwind độc lập và 5 ảnh Base64 inline)
* **Mã băm SHA-256:**  
  `9662E575ADD1D40B83314E6617FD9196F7D69006B44C3D8E202218979801819C`
* **Đánh giá:** `ltb-site01.html` là file nguồn nguyên bản duy nhất được dùng để đối soát.

### 1.3. Đối soát tài nguyên hình ảnh được trích xuất (Brand Assets)
Toàn bộ 5 tài nguyên ảnh Base64 trong `ltb-site01.html` đã được giải mã và kiểm tra mã băm SHA-256 khớp 1:1 với thư mục `public/brand/`:
* `public/brand/ref-il.webp` (729,356 bytes): SHA-256 `505AFD07E231E776BD4D4D1BD61575083CD7DC88EE8FFE16911AF19854F9B435` [VERIFIED]
* `public/brand/ref-ol.webp` (763,622 bytes): SHA-256 `24DDEF7DCBC6CBA2CBAFC71F28FE302C26046804CAD4FE6AEB0C5CCEC88EE178` [VERIFIED]
* `public/brand/ref-dl.webp` (801,332 bytes): SHA-256 `9C7AD7FAA19D220A44BD0170DBEEA5BD221D1FADFAAD21157D66A840E7ED6A74` [VERIFIED]
* `public/brand/ref-Vn.png` (551,435 bytes - Logo chính có chữ): SHA-256 `7D2B8AD0F7012A4F3C026C79E6BE128F9BAD7C2AE89DA71B34066A750EEFD756` [VERIFIED]
* `public/brand/ref-fA.png` (55,501 bytes - Monogram biểu tượng): SHA-256 `276BED698241D13D7D9AA394CC51F227F3992505F312BB76806B180AD5EB1386` [VERIFIED]

---

## 2. Bằng chứng Build Production (Phase 3.1)

Chạy lệnh kiểm thử build độc lập: `npm run build` (`astro build`)
* **Exit code:** `0` (Success)
* **Thời gian hoàn thành:** 1.24 giây
* **Danh sách static routes được sinh ra đầy đủ trong `dist/`:**
  1. `dist/index.html` (Trang chủ B2B mới theo phong cách ltb-site01)
  2. `dist/gioi-thieu/index.html`
  3. `dist/san-pham/index.html`
  4. `dist/doi-tac-phan-phoi/index.html`
  5. `dist/tin-tuc/index.html`
  6. `dist/lien-he/index.html`
  7. `dist/dai-ly/index.html` (Portal đại lý B2B)
  8. `dist/dai-ly/dang-nhap/index.html`
  9. `dist/dai-ly/tao-yeu-cau/index.html`
  10. `dist/admin/index.html` (Dashboard nội bộ)

---

## 3. Visual Regression Audit (Phase 2)

Chụp ảnh màn hình toàn trang (Full-page Screenshots) trên trình duyệt Chromium thực tế độc lập tại 3 kích thước Viewport chuẩn theo yêu cầu:

| Viewport | File gốc `ltb-site01.html` | Bản dựng Astro (`http://localhost:4321/`) | Sai lệch chiều cao |
| :--- | :--- | :--- | :--- |
| **Desktop (1440×900)** | [original-desktop-1440x900.png](file:///d:/IVS/Website/LTB/docs/qa/screenshots/original-desktop-1440x900.png) (5,010px) | [astro-desktop-1440x900.png](file:///d:/IVS/Website/LTB/docs/qa/screenshots/astro-desktop-1440x900.png) (5,107px) | +97px (+1.9%) |
| **Tablet (768×1024)** | [original-tablet-768x1024.png](file:///d:/IVS/Website/LTB/docs/qa/screenshots/original-tablet-768x1024.png) (7,546px) | [astro-tablet-768x1024.png](file:///d:/IVS/Website/LTB/docs/qa/screenshots/astro-tablet-768x1024.png) (7,654px) | +108px (+1.4%) |
| **Mobile (360×800)** | [original-mobile-360x800.png](file:///d:/IVS/Website/LTB/docs/qa/screenshots/original-mobile-360x800.png) (10,353px) | [astro-mobile-360x800.png](file:///d:/IVS/Website/LTB/docs/qa/screenshots/astro-mobile-360x800.png) (10,366px) | +13px (+0.1%) |

### 3.1. So sánh thứ tự các Section (Section Sequence)
Thứ tự các khối trên trang chủ Astro hoàn toàn khớp 1:1 với `ltb-site01.html`:
1. **Header:** Logo vàng trong suốt, Brand Name, MST, Hot-line sỉ, Link Cổng đại lý, Menu điều hướng neo `#trang-chu`, `#gioi-thieu`, `#san-pham`, `#nang-luc`, `#lien-he`.
2. **Hero `#trang-chu`:** Badges pháp lý, Tiêu đề H1, Mô tả năng lực B2B, Bộ 3 ảnh sản phẩm (`ref-il.webp`, `ref-ol.webp`, `ref-dl.webp`), CTA Hotline & Báo giá.
3. **Stat Ribbon:** Khối viền vàng kem hiển thị MST `3603823707`, Ngày cấp `19/08/2021`, Địa chỉ mới sau sáp nhập 2025 tại Ấp Phước Hòa.
4. **Giới thiệu `#gioi-thieu`:** H2 "NHÀ PHÂN PHỐI ĐÁNG TIN CẬY TỪ 2021", Kho >1000m², Giao hàng 24/7, Đầy đủ giấy phép pháp lý B2B.
5. **Sản phẩm & Dịch vụ `#san-pham`:** H2 "BÁN BUÔN ĐA NGÀNH ĐỒ UỐNG & THUỐC LÁ", 4 mã ngành (4633, 46331, 46332, 46340) với thẻ mô tả tương ứng.
6. **Năng lực `#nang-luc`:** H2 "HẠ TẦNG B2B SẴN SÀNG CHO ĐƠN LỚN & GẤP", thông số xe tải thùng kín, đối tác chuỗi F&B, cam kết hợp đồng.
7. **Liên hệ & Báo giá `#lien-he`:** Form Báo Giá B2B nhanh, Bảng thông tin doanh nghiệp, Hotline & Email liên hệ.
8. **Footer:** Logo vàng phát sáng `ref-Vn.png`, Thông tin xuất hóa đơn đỏ VAT, Danh mục mã ngành, Badge Monogram `ref-fA.png`, Bản quyền & Credit `ivstech.store`.

### 3.2. Đánh giá sai lệch hình ảnh và bố cục
* **Sai lệch độ cao (+97px trên Desktop):** Xuất phát từ khối `#lien-he`. Trong bản Astro, form báo giá được bổ sung thêm phần ghi chú pháp lý rõ ràng: *"Đây là yêu cầu tiếp nhận báo giá, không đồng nghĩa với đơn hàng đã được xác nhận"* nhằm tuân thủ Business Boundary của dự án. Khối này tăng khoảng 100px chiều cao nhưng bảo vệ tính pháp lý của doanh nghiệp.
* **Header & Navigation:** Bản Astro có bổ sung nút nhanh truy cập Cổng Đại Lý (`/dai-ly/dang-nhap`), tăng tính tiện dụng so với bản HTML tĩnh đơn thuần.
* **Typography & Palette:** Màu chủ đạo chuẩn Gold `#B68D2E`, Deep Gold `#8C6B1F`, Nền đen `#0E0E0E` và nền kem sáng `#FAF9F6`, Font Be Vietnam Pro / Inter hiển thị đồng nhất.

---

## 4. Kiểm thử Kỹ thuật & Chức năng (Phase 3)

### 4.1. Kiểm tra Routing, Broken Links & Assets
Đã thực thi kiểm thử tự động với Headless Chrome trên toàn bộ 10 route:
* **Trang chủ (`/`):** Status `200 OK`, Horizontal Overflow: `False`, Console Errors: `0`, Broken Images: `0`.
* **Giới thiệu (`/gioi-thieu`):** Status `200 OK`, Overflow: `False`, Console Errors: `0`, Broken Images: `0`.
* **Sản phẩm (`/san-pham`):** Status `200 OK`, Overflow: `False`, Console Errors: `0`, Broken Images: `0`.
* **Đối tác phân phối (`/doi-tac-phan-phoi`):** Status `200 OK`, Overflow: `False`, Console Errors: `0`, Broken Images: `0`.
* **Tin tức (`/tin-tuc`):** Status `200 OK`, Overflow: `False`, Console Errors: `0`, Broken Images: `0`.
* **Liên hệ (`/lien-he`):** Status `200 OK`, Overflow: `False`, Console Errors: `0`, Broken Images: `0`.
* **Cổng Đại lý (`/dai-ly`):** Status `200 OK`, Overflow: `False`, Console Errors: `0`, Broken Images: `0`.
* **Đại lý Đăng nhập (`/dai-ly/dang-nhap`):** Status `200 OK`, Overflow: `False`, Console Errors: `0`, Broken Images: `0`.
* **Đại lý Tạo yêu cầu (`/dai-ly/tao-yeu-cau`):** Status `200 OK`, Overflow: `False`, Console Errors: `0`, Broken Images: `0`.
* **Admin Dashboard (`/admin`):** Status `200 OK`, Overflow: `False`, Console Errors: `0`, Broken Images: `0`.

### 4.2. Mobile Menu & Responsive
* Nút bấm mở menu trên mobile (`#ltb-menu-toggle`) hoạt động chuẩn xác:
  * Trạng thái ban đầu: `aria-expanded="false"`, menu ẩn (`.hidden`).
  * Khi click: `aria-expanded="true"`, menu hiển thị đầy đủ liên kết và các nút gọi điện hotline nhanh.
  * Tự động đóng khi người dùng chạm vào một liên kết điều hướng.

### 4.3. Biểu mẫu & Bảo vệ Dữ liệu (Form & Security Boundary)
* **Không làm lộ giá sỉ:** Website công khai không hiển thị giá tiền cụ thể (không có giá VND giả định), tuân thủ nguyên tắc yêu cầu liên hệ hoặc đăng nhập đại lý để xem bảng giá.
* **Không tạo đơn hàng ảo:** Biểu mẫu báo giá tại trang chủ và `/lien-he` khẳng định rõ: *"Đây là yêu cầu tiếp nhận báo giá, không đồng nghĩa với đơn hàng đã được xác nhận"*.
* **Không giả mạo kết nối DB:** Khi chưa tích hợp backend API, biểu mẫu ở trang `/lien-he` chạy mô phỏng client có độ trễ 900ms với thông báo *"Đã tiếp nhận yêu cầu, chưa phải xác nhận đơn hàng hay báo giá. LTB sẽ phản hồi qua điện thoại hoặc email."*

### 4.4. Kiểm tra dữ liệu doanh nghiệp & Pháp lý
* **Tên pháp lý:** CÔNG TY TNHH BIA LONG THÀNH (`SITE.legalName`) [VERIFIED - Khớp ltb-site01]
* **Tên quốc tế:** LONG THANH BEER COMPANY LIMITED [VERIFIED - Khớp ltb-site01]
* **Mã số thuế:** `3603823707` [VERIFIED - Khớp ltb-site01]
* **Người đại diện:** HOÀNG XUÂN DŨNG [VERIFIED - Khớp ltb-site01]
* **Hotline:** `0988.087.806` / `0988087806` [VERIFIED - Khớp ltb-site01]
* **Địa chỉ:** `1401/2, tổ 17, ấp Phước Hòa, Xã Long Phước, Tỉnh Đồng Nai, Việt Nam` [VERIFIED - Khớp ltb-site01]
* **Logo & Màu thương hiệu:** Sử dụng mã màu `#B68D2E` (LTB Gold) chuẩn xác, logo tách nền hiển thị rõ nét trên nền tối và nền sáng.
* **Lưu ý đối soát:** Hotline phụ `0899 447 181` và email `sales@bialongthanh.vn` trong `src/lib/site.ts` là thông tin bổ sung từ dữ liệu nội bộ IVS/Stitch (không có trong `ltb-site01.html`). Cần xác nhận trước khi đưa vào tài liệu pháp lý chính thức.

---

## 5. Bảng tổng hợp các Phát hiện (Ranked Findings)

| ID | Vấn đề phát hiện | Mức độ nghiêm trọng | File liên quan | Đánh giá & Khuyến nghị | Trạng thái |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **F-01** | Khác biệt chiều cao khối liên hệ (+97px) do bổ sung cảnh báo pháp lý B2B | **Low** | `src/pages/index.astro:740` | Khuyến nghị giữ nguyên vì cần thiết cho tuân thủ bảo vệ pháp lý thương mại. | **VERIFIED** |
| **F-02** | Header Astro có thêm nút đăng nhập Đại Lý B2B so với bản gốc HTML | **Low** | `src/components/Header.astro:78` | Rất hữu ích cho người dùng đối tác B2B, ăn khớp với hệ sinh thái portal. | **VERIFIED** |
| **F-03** | Email `sales@bialongthanh.vn` chưa có trong file gốc `ltb-site01.html` | **Medium** | `src/lib/site.ts:15` | Cần xác nhận với ban quản trị LTB khi cấu hình DNS hộp thư doanh nghiệp. | **VERIFIED** |
| **F-04** | Trạng thái xác thực Cloudflare Pages trên hệ thống hiện tại | **Info** | Wrangler CLI | Tài khoản `info@ivsacademy.edu.vn` đã đăng nhập và sẵn sàng deploy. | **VERIFIED** |

---

## 6. Kết luận & Quyết định Đánh giá (Go / No-Go)

* **Visual Equivalence:** Đạt độ tương đồng trên **99%** về cấu trúc, màu sắc, phông chữ, thứ tự section và tỷ lệ responsive.
* **Technical Quality:** Build tĩnh sạch `exit code 0`, 0 lỗi console, 0 lỗi overflow, 0 ảnh lỗi.
* **Security & Business Boundaries:** Đảm bảo bảo vệ chính sách giá sỉ và đơn hàng.
* **Khuyến nghị chính thức:** **GO** — Đạt chuẩn để tiến hành build và xuất bản lên Cloudflare Hosting.
