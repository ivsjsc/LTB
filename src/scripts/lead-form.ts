  /* Script dùng chung cho mọi form có [data-lead-form] (LeadForm, phiếu đăng ký đại lý, bản tin). */
  function errorFor(form: HTMLFormElement, el: HTMLElement): HTMLElement {
    const key = (el as HTMLInputElement).name || el.id;
    let p = form.querySelector<HTMLElement>('[data-error-for="' + key + '"]');
    if (!p) {
      p = document.createElement('p');
      p.className = 'field-error hidden font-label-sm text-error';
      p.dataset.errorFor = key;
      const anchor = el.closest('label, div.flex.items-start') ?? el;
      anchor.insertAdjacentElement('afterend', p);
    }
    return p;
  }
  function message(el: HTMLInputElement): string {
    if (el.type === 'checkbox') return 'Cần xác nhận để tiếp tục.';
    if (el.type === 'email') return 'Email không hợp lệ.';
    if (el.type === 'tel') return 'Số điện thoại không hợp lệ (tối thiểu 9 chữ số).';
    if (el.tagName === 'SELECT') return 'Vui lòng chọn một mục.';
    if (el.tagName === 'TEXTAREA') return 'Vui lòng mô tả (tối thiểu 10 ký tự).';
    return 'Vui lòng nhập thông tin (tối thiểu 2 ký tự).';
  }
  function invalid(el: HTMLInputElement): boolean {
    const v = (el.value ?? '').trim();
    if (el.type === 'checkbox') return !el.checked;
    if (el.type === 'email') return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
    if (el.type === 'tel') return v.replace(/\D/g, '').length < 9;
    if (el.tagName === 'SELECT') return v === '';
    if (el.tagName === 'TEXTAREA') return v.length < 10;
    return v.length < 2;
  }
  function check(form: HTMLFormElement) {
    let first: HTMLElement | null = null;
    form.querySelectorAll<HTMLInputElement>('input[required], select[required], textarea[required]').forEach((el) => {
      const bad = invalid(el);
      const p = errorFor(form, el);
      p.textContent = bad ? message(el) : '';
      p.classList.toggle('hidden', !bad);
      el.setAttribute('aria-invalid', String(bad));
      el.classList.toggle('!border-error', bad);
      if (bad && !first) first = el;
    });
    (first as HTMLElement | null)?.focus();
    return !first;
  }
  function show(form: HTMLFormElement, which: 'success' | 'error' | null) {
    form.querySelectorAll<HTMLElement>('[data-state]').forEach((n) => {
      const on = n.dataset.state === which;
      n.classList.toggle('hidden', !on);
      n.classList.toggle('flex', on);
    });
    if (which) form.querySelector<HTMLElement>('[data-state="' + which + '"]')?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }
  function busy(form: HTMLFormElement, on: boolean) {
    const b = form.querySelector<HTMLButtonElement>('[data-submit]')!;
    const ic = form.querySelector<HTMLElement>('[data-submit-icon]');
    const lb = form.querySelector<HTMLElement>('[data-submit-label]');
    b.disabled = on;
    b.setAttribute('aria-busy', String(on));
    if (!lb || !ic) return;
    if (on) { form.dataset.label = lb.textContent ?? ''; lb.textContent = 'Đang gửi yêu cầu...'; ic.textContent = 'progress_activity'; ic.classList.add('animate-spin'); }
    else { lb.textContent = form.dataset.label ?? lb.textContent; ic.textContent = 'send'; ic.classList.remove('animate-spin'); }
  }
  async function send(form: HTMLFormElement) {
    busy(form, true); show(form, null);
    try {
      const endpoint = form.dataset.endpoint;
      const force = new URLSearchParams(location.search).get('formstate'); // ?formstate=error để xem state lỗi
      if (force === 'error') throw new Error('forced');
      if (endpoint) {
        const r = await fetch(endpoint, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(Object.fromEntries(new FormData(form))) });
        if (!r.ok) throw new Error(String(r.status));
      } else {
        await new Promise((r) => setTimeout(r, 900)); // chưa có API: mô phỏng phía client
      }
      show(form, 'success'); form.reset();
    } catch { show(form, 'error'); }
    finally { busy(form, false); }
  }
  document.querySelectorAll<HTMLFormElement>('[data-lead-form]').forEach((form) => {
    const sku = new URLSearchParams(location.search).get('sku');
    const msg = form.elements.namedItem('message') as HTMLTextAreaElement | null;
    if (sku && msg && !msg.value) msg.value = 'Yêu cầu báo giá sản phẩm ' + sku + '. ';
    form.addEventListener('submit', (e) => { e.preventDefault(); if (check(form)) send(form); });
    form.querySelector('[data-retry]')?.addEventListener('click', () => { if (check(form)) send(form); });
    form.addEventListener('input', () => show(form, null));
  });
