import type { Props as ProductProps } from '../components/ProductCard.astro';

/** Danh mục sản phẩm — dữ liệu lấy nguyên từ Stitch. KHÔNG có giá, KHÔNG có tồn kho. */
export const products: (ProductProps & { modalDesc: string })[] = [
  {
    sku: 'LTB-KEG-AMB01', name: 'LTB Craft Amber Lager — Keg 20L', category: 'keg', pack: 'keg20',
    image: '/images/stitch/11b96c51df.jpg', imageAlt: 'Keg inox 20 lít bia tươi LTB Craft Amber Lager',
    badge: 'Bia tươi Keg', badgeTone: 'primary', packLabel: 'Keg Inox 20L', meta: 'ABV 5.2% • IBU 22',
    desc: 'Dòng bia tươi hổ phách thủ công trứ danh, hương malt caramen đượm đà, hậu vị cân bằng sạch sẽ. Chuyên dụng cho Beer Club, Nhà hàng nướng và Khách sạn cao cấp.',
    specs: [{ label: 'Quy cách:', value: 'Keg Inox A-Type 20 Lít' }, { label: 'Nhiệt độ phục vụ:', value: '2°C – 4°C qua tháp lạnh' }],
    moq: 'Tối thiểu từ 02 Keg',
    modalDesc: 'Bia tươi hổ phách thủ công cao cấp. Mạch nha caramen chuẩn nhập khẩu, quy trình lên men lạnh nghiêm ngặt 28 ngày tại nhà máy Đồng Nai.',
  },
  {
    sku: 'LTB-KEG-WHT02', name: 'Golden Wheat Ale — Keg 20L', category: 'keg', pack: 'keg20',
    image: '/images/stitch/06f682cbcc.jpg', imageAlt: 'Keg bia lúa mì Golden Wheat Ale 20 lít',
    badge: 'Bia tươi Keg', badgeTone: 'primary', packLabel: 'Keg Inox 20L', meta: 'ABV 4.8% • IBU 15',
    desc: 'Bia lúa mì phong cách Bỉ tự nhiên, bọt mịn mượt dày dặn, phảng phất hương vỏ cam vàng và hạt mùi. Thùng Keg chuẩn van A-type chịu áp cao.',
    specs: [{ label: 'Quy cách:', value: 'Keg Sanitize Khí CO2 20L' }, { label: 'Nhiệt độ bảo quản:', value: 'Kho mát 0°C – 4°C' }],
    moq: 'Tối thiểu từ 02 Keg',
    modalDesc: 'Dòng bia lúa mì bọt tuyết dày mịn, thơm thoang thoảng vỏ cam và thảo mộc. Thích hợp bài trí trên tháp rót hiện đại.',
  },
  {
    sku: 'LTB-CAN-PIL24', name: 'Premium Pilsner Canned 330ml', category: 'pack', pack: 'can24',
    image: '/images/stitch/3c9a9c4e19.jpg', imageAlt: 'Thùng 24 lon bia Premium Pilsner 330ml',
    badge: 'Bia lon', badgeTone: 'neutral', packLabel: 'Thùng 24 Lon', meta: 'ABV 5.0% • 330ml',
    desc: 'Hương hoa bia Saaz Tiệp truyền thống, vị đắng thanh lịch, hậu vị khô giòn sảng khoái. Đóng gói thùng carton 5 lớp gia cường cho vận chuyển xa.',
    specs: [{ label: 'Quy cách:', value: '24 lon nhôm x 330ml' }, { label: 'Hạn sử dụng:', value: '12 tháng kể từ NSX' }],
    moq: 'Tối thiểu từ 10 Thùng',
    modalDesc: 'Quy chuẩn đóng lon nhôm tiệt trùng hiện đại, giữ trọn vẹn hương vị hoa bia Saaz tươi mới. Đóng gói tiện lợi cho đại lý bán buôn.',
  },
  {
    sku: 'LTB-BTL-STT24', name: 'Dark Stout Artisanal — Chai 330ml', category: 'pack', pack: 'bottle24',
    image: '/images/stitch/a0c0cb3d9f.jpg', imageAlt: 'Thùng 24 chai bia đen Dark Stout Artisanal 330ml',
    badge: 'Bia đen thủ công', badgeTone: 'primary', packLabel: 'Thùng 24 Chai', meta: 'ABV 6.5% • 330ml',
    desc: 'Bia đen mạch nha rang thơm nồng ngậy vị socola đắng và cà phê Moka. Độ cồn đầm ấm, thích hợp cho danh mục đồ uống đặc sản tại Lounge bar.',
    specs: [{ label: 'Quy cách:', value: '24 chai thủy tinh x 330ml' }, { label: 'Hạn sử dụng:', value: '09 tháng ở nhiệt độ phòng' }],
    moq: 'Tối thiểu từ 10 Thùng',
    modalDesc: 'Dòng bia đen thủ công đậm chất nghệ thuật, tầng hương socola và cà phê rang đậm. Vỏ chai nâu tiêu chuẩn cản tia UV.',
  },
  {
    sku: 'LTB-WTR-ION500', name: 'Nước Khoáng Ion Kiềm Long Thành', category: 'non-alc', pack: 'bottle24',
    image: '/images/stitch/11bc6cac30.jpg', imageAlt: 'Thùng 24 chai nước khoáng ion kiềm 500ml',
    badge: 'Không cồn', badgeTone: 'tint', packLabel: 'Thùng 24 Chai', meta: 'pH 8.5+ • 500ml', metaTone: 'tint',
    desc: 'Khai thác từ mạch ngầm tự nhiên, bổ sung vi khoáng nhẹ, độ pH kiềm tính giúp cân bằng thể trạng. Phân phối số lượng lớn cho hội nghị, chuỗi lưu trú và sự kiện.',
    specs: [{ label: 'Quy cách:', value: '24 chai PET tái chế x 500ml' }, { label: 'Tiêu chuẩn:', value: 'QCVN 6-1:2010/BYT' }],
    moq: 'Tối thiểu từ 20 Thùng',
    modalDesc: 'Khai thác mạch nguồn khoáng vi lượng tự nhiên, kiềm nhẹ pH 8.5+, hỗ trợ thanh lọc và phục hồi cơ thể.',
  },
  {
    sku: 'LTB-TEA-SPK250', name: 'Trà Trái Cây Lên Men Sparkling', category: 'non-alc', pack: 'can24',
    image: '/images/stitch/950b88fdec.jpg', imageAlt: 'Thùng 24 lon slim trà trái cây lên men Sparkling 250ml',
    badge: 'Không cồn', badgeTone: 'tint', packLabel: 'Thùng 24 Lon Slim', meta: '0.0% Cồn • 250ml', metaTone: 'tint',
    desc: 'Trà búp ủ lên men thanh trùng tự nhiên hòa cùng gas nhẹ sảng khoái. Lựa chọn không cồn tinh tế phục vụ phân khúc khách hàng trẻ tại Bistro, Cafe hiện đại.',
    specs: [{ label: 'Quy cách:', value: '24 lon nhôm thanh mảnh x 250ml' }, { label: 'Bảo quản:', value: 'Khô ráo, tránh ánh sáng trực tiếp' }],
    moq: 'Tối thiểu từ 10 Thùng',
    modalDesc: 'Giải khát thanh trùng tự nhiên không cồn, bổ sung chất điện giải và sủi bọt vi sinh nhẹ nhàng, sảng khoái.',
  },
];
