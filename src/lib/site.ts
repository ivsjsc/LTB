/** Thông tin doanh nghiệp & liên hệ — dữ liệu lấy từ Stitch. */
export const SITE = {
  name: 'Long Thanh Beer Company Limited',
  legalName: 'CÔNG TY TNHH BIA LONG THÀNH',
  taxCode: '3603823707',
  representative: 'HOÀNG XUÂN DŨNG',
  foundingDate: '19/08/2021',
  hotline: '0988.087.806',
  hotlineTel: '0988087806',
  hotlineAlt: '0899 447 181',
  hotlineAltTel: '0899447181',
  zaloUrl: 'https://zalo.me/0988087806',
  openingHours: '7:00 - 19:00 (T2 - CN)',
  /** Một hộp thư chung duy nhất (business rule). TODO: xác nhận địa chỉ chính thức với LTB. */
  sharedEmail: 'sales@bialongthanh.vn',
  address: '1401/2, tổ 17, ấp Phước Hòa, Xã Long Phước, Tỉnh Đồng Nai, Việt Nam',
};

/** State machine yêu cầu đặt hàng (đã chốt). */
export type OrderStatus = 'draft' | 'submitted' | 'under_review' | 'revision_requested' | 'confirmed' | 'rejected' | 'cancelled';

export const ORDER_STATUS_LABEL: Record<OrderStatus, string> = {
  draft: 'Bản nháp',
  submitted: 'Đã gửi yêu cầu',
  under_review: 'Đang xem xét',
  revision_requested: 'Cần chỉnh sửa',
  confirmed: 'Đã được LTB xác nhận',
  rejected: 'Từ chối',
  cancelled: 'Đã hủy',
};

/** Chỉ được sửa/hủy khi chưa confirmed (và chưa ở trạng thái cuối). */
export const canModify = (s: OrderStatus) => ['draft', 'submitted', 'under_review', 'revision_requested'].includes(s);
export const canCancel = (s: OrderStatus) => s === 'submitted';
