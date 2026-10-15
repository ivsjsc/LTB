/** Thông tin doanh nghiệp & liên hệ — dữ liệu lấy từ Stitch. */
export const SITE = {
  name: 'Long Thanh Beer Company Limited',
  legalName: 'CÔNG TY TNHH BIA LONG THÀNH',
  taxCode: '3603823707',
  hotline: '0899 447 181',
  hotlineTel: '0899447181',
  /** Một hộp thư chung duy nhất (business rule). TODO: xác nhận địa chỉ chính thức với LTB. */
  sharedEmail: 'sales@bialongthanh.vn',
  address: '1401/2, Tổ 17, Ấp Phước Hòa, Xã Long Phước, Huyện Long Thành, Tỉnh Đồng Nai, Việt Nam',
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
