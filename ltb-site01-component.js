function x9() {
  let [A, e] = gA.useState(!1),
    [n, f] = gA.useState(!1),
    [t, r] = gA.useState("trang-chu"),
    [v, u] = gA.useState({
      name: "",
      phone: "",
      type: "Bia - Đồ uống có cồn",
      qty: "",
      note: "",
    }),
    [l, d] = gA.useState(!0),
    s = gA.useRef(null),
    [p, X] = gA.useState(0);
  (gA.useEffect(() => {
    let z = () => {
      (f(window.scrollY > 12), X(window.scrollY * 0.06));
    };
    return (
      window.addEventListener("scroll", z, { passive: !0 }),
      () => window.removeEventListener("scroll", z)
    );
  }, []),
    gA.useEffect(() => {
      let z = setTimeout(() => d(!1), 900);
      try {
        document
          .querySelectorAll('link[rel="icon"], link[rel="apple-touch-icon"]')
          .forEach((a) => a.remove());
        let o = document.createElement("link");
        ((o.rel = "icon"),
          (o.type = "image/png"),
          (o.href = Vn),
          document.head.appendChild(o));
        let i = document.createElement("link");
        ((i.rel = "apple-touch-icon"),
          (i.href = Vn),
          document.head.appendChild(i));
      } catch {}
      return () => clearTimeout(z);
    }, []));
  let q = (z) => {
      (e(!1), r(z));
      try {
        window.location.hash = z;
      } catch {}
      document
        .getElementById(z)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    V = (z) => {
      if ((z.preventDefault(), !v.name || !v.phone)) {
        alert("Vui lòng nhập Tên và Số điện thoại để nhận báo giá sỉ.");
        return;
      }
      (alert(`Đã nhận yêu cầu báo giá!

Tên: ${v.name}
SĐT: ${v.phone}
Loại hàng: ${v.type}
Số lượng: ${v.qty}

Chúng tôi sẽ gọi lại trong 30 phút (7:00-19:00).
MST 3603823707 - CÔNG TY TNHH BIA LONG THÀNH`),
        u({
          name: "",
          phone: "",
          type: "Bia - Đồ uống có cồn",
          qty: "",
          note: "",
        }));
    };
  return c("div", {
    className:
      "min-h-screen w-full bg-[#faf9f6] text-[#0e0e0e] overflow-clip selection:bg-[#B68D2E] selection:text-black max-w-[100vw]",
    style: { paddingTop: "var(--safe-area-inset-top)" },
    children: [
      l &&
        c("div", {
          className:
            "fixed inset-0 z-[100] bg-[#0E0E0E] grid place-items-center",
          children: [
            c("div", {
              className: "flex flex-col items-center gap-6",
              children: [
                c("div", {
                  className: "relative",
                  children: [
                    P("div", {
                      className:
                        "absolute -inset-10 rounded-full bg-[radial-gradient(circle_at_center,rgba(182,141,46,0.45),transparent_70%)] blur-[12px] animate-[pulse_1.6s_ease-in-out_infinite]",
                    }),
                    P("div", {
                      className:
                        "absolute -inset-6 rounded-full bg-[radial-gradient(circle_at_center,rgba(212,170,74,0.25),transparent_70%)] blur-[16px]",
                    }),
                    P("img", {
                      src: Vn,
                      alt: "LTB Logo Gold Transparent - Bia Long Thanh",
                      className:
                        "relative h-[96px] w-auto object-contain logo-gold-glow animate-[pulse_1.4s_ease-in-out_infinite]",
                      style: {
                        filter:
                          "drop-shadow(0 0 24px rgba(182,141,46,0.65)) drop-shadow(0 0 48px rgba(182,141,46,0.35))",
                      },
                    }),
                  ],
                }),
                c("div", {
                  className: "text-center",
                  children: [
                    P("div", {
                      className:
                        "text-[18px] font-black tracking-[0.18em] text-[#D4AA4A] uppercase",
                      children: "Bia Long Thành",
                    }),
                    P("div", {
                      className:
                        "text-[11px] tracking-[0.32em] uppercase text-[#8C6B1F] font-bold mt-1",
                      children: "LTB • MST 3603823707 • GOLD #B68D2E",
                    }),
                    P("div", {
                      className:
                        "mt-5 h-[2px] w-[140px] mx-auto overflow-hidden rounded-full bg-[#1c1a12]",
                      children: P("div", {
                        className:
                          "h-full w-[65%] gold-gradient animate-[loading_1.1s_ease-in-out_infinite]",
                      }),
                    }),
                  ],
                }),
              ],
            }),
            P("style", {
              children:
                "@keyframes loading{0%{transform:translateX(-100%)}100%{transform:translateX(240%)}}",
            }),
          ],
        }),
      c("header", {
        className:
          "fixed left-0 right-0 z-50 bg-white border-b border-[#ece6d3] shadow-[0_2px_24px_rgba(182,141,46,0.06)] transition-all duration-300",
        style: { top: "var(--safe-area-inset-top)" },
        children: [
          c("div", {
            className:
              "mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 h-[72px] lg:h-[76px] flex items-center justify-between",
            children: [
              c("div", {
                className: "flex items-center gap-3 min-w-0",
                children: [
                  P("div", {
                    className:
                      "group relative flex items-center justify-center rounded-[14px] border border-transparent hover:border-[#B68D2E] bg-white px-2 py-1 transition-all duration-300 shrink-0",
                    children: P("img", {
                      src: Vn,
                      alt: "LTB - Long Thanh Beer - Logo vàng trong suốt",
                      className:
                        "h-[40px] lg:h-[52px] w-auto object-contain object-left logo-gold-shadow logo-hover",
                      style: {
                        filter: "drop-shadow(0 2px 4px rgba(182,141,46,0.25))",
                        imageRendering: "-webkit-optimize-contrast",
                      },
                    }),
                  }),
                  c("div", {
                    className: "leading-[1.08] min-w-0",
                    children: [
                      P("div", {
                        className:
                          "font-black text-[15px] lg:text-[17px] tracking-[-0.02em] text-[#1a1a1a] uppercase leading-[1.1]",
                        children: "BIA LONG THÀNH",
                      }),
                      P("div", {
                        className:
                          "text-[10px] lg:text-[11px] uppercase tracking-[0.16em] font-bold text-[#B68D2E] mt-0.5",
                        children: "LONG THANH BEER CO.,LTD",
                      }),
                      P("div", {
                        className:
                          "text-[9px] tracking-[0.12em] font-bold text-[#8C6B1F]/70 hidden sm:block",
                        children: "MST 3603823707 • LTB GOLD #B68D2E",
                      }),
                    ],
                  }),
                ],
              }),
              P("nav", {
                className: "hidden lg:flex items-center gap-7",
                children: cl.map((z) =>
                  c(
                    "button",
                    {
                      onClick: () => q(z.id),
                      "aria-current": t === z.id ? "page" : void 0,
                      className: `text-[13px] font-semibold tracking-wide uppercase transition relative ${t === z.id ? "text-[#B68D2E]" : "text-[#1a1a1a] opacity-80 hover:opacity-100 hover:text-[#B68D2E]"}`,
                      children: [
                        P("span", { children: z.label }),
                        t === z.id &&
                          P("span", {
                            className:
                              "absolute -bottom-2 left-0 right-0 h-[2px] rounded-full bg-[#B68D2E]",
                          }),
                      ],
                    },
                    z.id,
                  ),
                ),
              }),
              P("div", {
                className: "hidden lg:flex items-center gap-3",
                children: c("a", {
                  href: "tel:0988087806",
                  className:
                    "h-11 rounded-full px-6 bg-[linear-gradient(102deg,#B68D2E_0%,#8C6B1F_100%)] text-white font-bold text-[13px] tracking-wide flex items-center gap-2 shadow-[0_8px_20px_rgba(182,141,46,0.32)] hover:brightness-[1.08] hover:shadow-[0_10px_28px_rgba(182,141,46,0.42)] transition-all",
                  children: [
                    P(he, { className: "h-4 w-4" }),
                    " Báo giá sỉ 0988.087.806",
                  ],
                }),
              }),
              P("button", {
                onClick: () => e(!A),
                className:
                  "lg:hidden h-10 w-10 rounded-full border border-[#ece6d3] bg-white text-[#1a1a1a] grid place-items-center shadow-sm",
                children: A
                  ? P(bf, { className: "h-5 w-5" })
                  : P(jf, { className: "h-5 w-5" }),
              }),
            ],
          }),
          A &&
            P("div", {
              className:
                "lg:hidden border-t border-[#ece6d3] bg-white shadow-[0_16px_32px_rgba(0,0,0,0.08)]",
              children: c("div", {
                className: "px-4 py-4 flex flex-col gap-1",
                children: [
                  cl.map((z) =>
                    c(
                      "button",
                      {
                        onClick: () => q(z.id),
                        className: `text-left py-3 px-3 rounded-xl font-semibold transition ${t === z.id ? "bg-[#fdf6de] text-[#8C6B1F] border border-[#e8d9a8]" : "text-[#1a1a1a] hover:bg-[#faf6e9]"}`,
                        children: [z.label, " ", t === z.id ? "•" : ""],
                      },
                      z.id,
                    ),
                  ),
                  c("a", {
                    href: "tel:0988087806",
                    className:
                      "mt-3 h-12 rounded-full bg-[linear-gradient(102deg,#B68D2E_0%,#8C6B1F_100%)] text-white font-extrabold flex items-center justify-center gap-2",
                    children: [
                      " ",
                      P(he, { className: "h-5 w-5" }),
                      " Gọi báo giá 0988.087.806",
                    ],
                  }),
                ],
              }),
            }),
        ],
      }),
      c("section", {
        id: "trang-chu",
        ref: s,
        className:
          "relative pt-[72px] lg:pt-[76px] bg-[#0E0E0E] text-[#faf9f6] overflow-hidden",
        children: [
          P("div", {
            className: "absolute inset-0 opacity-[0.04] pointer-events-none",
            style: {
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            },
          }),
          P("div", {
            className: "absolute inset-0 opacity-[0.06]",
            style: {
              backgroundImage:
                "radial-gradient(circle at 1px 1px, #D4AA4A 1px, transparent 0)",
              backgroundSize: "28px 28px",
            },
          }),
          P("div", {
            className:
              "absolute -top-[30%] -right-[15%] h-[780px] w-[780px] rounded-full bg-[radial-gradient(circle_at_center,rgba(182,141,46,0.28),transparent_68%)] blur-[1px]",
          }),
          P("div", {
            className:
              "absolute -bottom-[20%] -left-[10%] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(140,107,31,0.18),transparent_70%)] blur-[2px]",
          }),
          P("div", {
            className:
              "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.05] pointer-events-none select-none",
            children: P("img", {
              src: fA,
              alt: "",
              "aria-hidden": "true",
              className: "h-[520px] lg:h-[720px] w-auto object-contain",
              style: { filter: "drop-shadow(0 0 30px rgba(182,141,46,0.2))" },
            }),
          }),
          P("div", {
            className:
              "absolute top-[92px] right-4 lg:right-[6%] opacity-[0.04] pointer-events-none select-none hidden lg:block",
            children: P("img", {
              src: fA,
              alt: "",
              "aria-hidden": "true",
              className: "h-[320px] w-auto object-contain",
            }),
          }),
          c("div", {
            className:
              "mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 py-10 lg:py-[84px] grid lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] gap-10 items-center relative",
            children: [
              c("div", {
                children: [
                  c("div", {
                    className:
                      "inline-flex items-center gap-2 rounded-full border border-[#B68D2E]/30 bg-[#1a1912] px-3 py-1 text-[11px] tracking-[0.14em] uppercase font-bold text-[#D4AA4A]",
                    children: [
                      P("span", {
                        className:
                          "h-2 w-2 rounded-full bg-[#B68D2E] animate-pulse",
                      }),
                      " Hoạt động từ 2021 • MST 3603823707 • Đã cập nhật địa chỉ mới",
                    ],
                  }),
                  c("div", {
                    className:
                      "mt-4 inline-flex items-center gap-2.5 rounded-full border border-[#B68D2E] bg-[#1e1c12] px-3.5 py-1.5 text-[11px] tracking-[0.16em] uppercase font-bold text-[#D4AA4A] shadow-[0_0_0_3px_rgba(182,141,46,0.08)]",
                    children: [
                      P("img", {
                        src: fA,
                        alt: "",
                        "aria-hidden": "true",
                        className: "h-[18px] w-auto object-contain",
                        style: {
                          filter: "drop-shadow(0 1px 2px rgba(182,141,46,0.4))",
                        },
                      }),
                      P("span", {
                        children:
                          "LTB • MST 3603823707 • LOGO VÀNG #B68D2E TRONG SUỐT",
                      }),
                    ],
                  }),
                  c("h1", {
                    className:
                      "mt-6 font-black leading-[0.92] tracking-[-0.03em] text-[32px] sm:text-[44px] lg:text-[54px] uppercase",
                    children: [
                      "NHÀ PHÂN PHỐI ",
                      P("span", {
                        className: "gold-text-gradient",
                        children: "BIA & ĐỒ UỐNG",
                      }),
                      " UY TÍN TẠI LONG THÀNH - ĐỒNG NAI",
                    ],
                  }),
                  c("p", {
                    className:
                      "mt-5 text-[15px] lg:text-[16px] leading-[1.7] text-[#c9c2ab] max-w-[560px]",
                    children: [
                      "Công ty TNHH Bia Long Thành - MST ",
                      P("span", {
                        className: "text-white font-semibold",
                        children: "3603823707",
                      }),
                      " - Chuyên bán buôn đồ uống có cồn, không cồn, thuốc lá. Giao hàng nhanh 24/7 tại Long Phước, Nhơn Trạch, Biên Hòa. Đầy đủ hóa đơn VAT, nguồn hàng chính hãng.",
                    ],
                  }),
                  c("div", {
                    className: "mt-7 flex flex-wrap gap-3",
                    children: [
                      c("button", {
                        onClick: () => q("lien-he"),
                        className:
                          "h-[48px] rounded-full px-7 bg-[linear-gradient(102deg,#B68D2E_0%,#8C6B1F_100%)] text-white font-extrabold text-[13px] tracking-wide uppercase flex items-center gap-2 shadow-[0_10px_28px_rgba(182,141,46,0.4)] hover:translate-y-[-1px] hover:brightness-110 transition-all",
                        children: [
                          "Liên hệ báo giá ",
                          P(qf, { className: "h-4 w-4" }),
                        ],
                      }),
                      P("button", {
                        onClick: () => q("san-pham"),
                        className:
                          "h-[48px] rounded-full px-7 bg-[#1c1c1c] border border-[#B68D2E]/20 text-[#f5f0d8] font-bold text-[13px] tracking-wide uppercase hover:bg-[#232323] hover:border-[#B68D2E]/40 transition",
                        children: "Xem sản phẩm",
                      }),
                    ],
                  }),
                  P("div", {
                    className: "mt-10 grid grid-cols-3 gap-3 max-w-[520px]",
                    children: [
                      { k: "500+", v: "Đại lý & quán", sub: "Tin cậy tại ĐN" },
                      { k: "24/7", v: "Giao hàng", sub: "Kể cả CN, Lễ" },
                      { k: "VAT", v: "Hóa đơn đầy đủ", sub: "MST 3603823707" },
                    ].map((z) =>
                      c(
                        "div",
                        {
                          className:
                            "rounded-[16px] bg-[#151515] border border-[#B68D2E]/15 p-4 hover:border-[#B68D2E]/30 transition-colors",
                          children: [
                            P("div", {
                              className:
                                "text-[22px] font-black text-[#D4AA4A] tracking-tight",
                              children: z.k,
                            }),
                            P("div", {
                              className:
                                "text-[12px] font-bold uppercase tracking-wide mt-1 text-white",
                              children: z.v,
                            }),
                            P("div", {
                              className: "text-[11px] text-[#8a8676] mt-1",
                              children: z.sub,
                            }),
                          ],
                        },
                        z.k,
                      ),
                    ),
                  }),
                ],
              }),
              c("div", {
                className: "relative min-w-0",
                children: [
                  P("div", {
                    className:
                      "absolute -inset-4 rounded-[32px] bg-[radial-gradient(circle_at_30%_30%,rgba(212,170,74,0.22),rgba(182,141,46,0.18)_30%,transparent_68%)] blur-[12px] pointer-events-none",
                  }),
                  c("div", {
                    className:
                      "relative rounded-[28px] overflow-hidden border border-[#B68D2E]/20 bg-[#111] shadow-[0_24px_80px_rgba(0,0,0,0.5)] max-w-full",
                    children: [
                      P("img", {
                        src: il,
                        alt: "Bia Việt Premium Splash - Nhà phân phối LTB",
                        className:
                          "w-full h-[520px] lg:h-[640px] object-cover max-w-full",
                        style: {
                          transform: `translateY(${p}px) scale(1.03)`,
                          transformOrigin: "center",
                        },
                      }),
                      P("div", {
                        className:
                          "absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent",
                      }),
                      c("div", {
                        className:
                          "absolute top-4 left-4 right-4 flex justify-between items-start",
                        children: [
                          c("div", {
                            className:
                              "rounded-full bg-black/60 backdrop-blur border border-[#B68D2E]/30 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] font-bold flex items-center gap-2 text-[#D4AA4A]",
                            children: [
                              P("img", {
                                src: fA,
                                alt: "",
                                "aria-hidden": "true",
                                className:
                                  "h-5 w-auto object-contain logo-gold-shadow",
                              }),
                              " LONG THANH BEER • MST 3603823707",
                            ],
                          }),
                          P("div", {
                            className:
                              "h-9 w-9 rounded-full bg-black/50 backdrop-blur border border-[#B68D2E]/20 grid place-items-center",
                            children: P(De, {
                              className: "h-5 w-5 text-[#B68D2E]",
                            }),
                          }),
                        ],
                      }),
                      c("div", {
                        className:
                          "absolute bottom-0 inset-x-0 p-5 flex items-center justify-between gap-4 max-w-full",
                        children: [
                          c("div", {
                            className:
                              "rounded-full bg-black/60 backdrop-blur border border-white/10 px-4 py-2 text-[11px] uppercase tracking-wide font-bold flex items-center gap-2 text-white",
                            children: [
                              P(He, { className: "h-4 w-4 text-[#B68D2E]" }),
                              " Kho Phước Hòa • Giao nhanh Long Thành",
                            ],
                          }),
                          P("div", {
                            className:
                              "h-10 w-10 rounded-full bg-[#0a0a0a] border border-[#B68D2E]/20 grid place-items-center overflow-hidden",
                            children: P("img", {
                              src: fA,
                              alt: "",
                              "aria-hidden": "true",
                              className: "h-7 w-auto object-contain",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  P("div", {
                    className:
                      "absolute -bottom-6 left-2 lg:left-4 rounded-[18px] bg-white text-black border border-[#e8dfbe] shadow-[0_18px_40px_rgba(0,0,0,0.3)] p-4 w-[min(320px,90%)] max-w-full",
                    children: c("div", {
                      className: "flex items-start gap-3",
                      children: [
                        P("div", {
                          className:
                            "h-10 w-10 rounded-full bg-[#0e0e0e] border border-[#B68D2E]/30 grid place-items-center overflow-hidden p-1",
                          children: P("img", {
                            src: fA,
                            alt: "",
                            "aria-hidden": "true",
                            className: "h-8 w-auto object-contain",
                          }),
                        }),
                        c("div", {
                          className: "leading-tight",
                          children: [
                            P("div", {
                              className:
                                "text-[11px] uppercase tracking-[0.16em] font-bold text-[#B68D2E]",
                              children: "Pháp lý rõ ràng • Logo vàng #B68D2E",
                            }),
                            P("div", {
                              className: "text-[13px] font-bold mt-1",
                              children: "CÔNG TY TNHH BIA LONG THÀNH",
                            }),
                            P("div", {
                              className: "text-[11px] text-[#6b6b6b] mt-1",
                              children:
                                "MST 3603823707 • Ngày cấp 19/08/2021 • Bán buôn 4633",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      P("section", {
        className: "bg-[#fdfbf3] border-y border-[#ece6d3]",
        children: P("div", {
          className:
            "mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 py-8 lg:py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",
          children: [
            {
              icon: mn,
              label: "Mã số thuế",
              value: "3603823707",
              sub: "Ngày cấp: 19/08/2021",
            },
            {
              icon: me,
              label: "Địa chỉ sau sáp nhập",
              value: "1401/2, tổ 17, ấp Phước Hòa",
              sub: "Xã Long Phước, Đồng Nai",
            },
            {
              icon: DA,
              label: "Người đại diện",
              value: "HOÀNG XUÂN DŨNG",
              sub: "Đại diện pháp luật",
            },
            {
              icon: yf,
              label: "Tên quốc tế",
              value: "LONG THANH BEER",
              sub: "COMPANY LIMITED • LTB",
            },
          ].map((z) =>
            c(
              "div",
              {
                className:
                  "group rounded-[20px] bg-white border border-[#ece6d3] p-5 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(182,141,46,0.12)] hover:border-[#B68D2E]/30 transition-all",
                children: [
                  c("div", {
                    className: "flex items-center gap-3",
                    children: [
                      P("div", {
                        className:
                          "h-10 w-10 rounded-full bg-[#0e0e0e] text-[#B68D2E] grid place-items-center border border-[#B68D2E]/20",
                        children: P(z.icon, { className: "h-5 w-5" }),
                      }),
                      P("div", {
                        className:
                          "text-[11px] uppercase tracking-[0.16em] font-bold text-[#8C6B1F]/70",
                        children: z.label,
                      }),
                    ],
                  }),
                  P("div", {
                    className:
                      "mt-4 text-[15px] font-extrabold tracking-tight leading-[1.25] text-[#1a1a1a]",
                    children: z.value,
                  }),
                  P("div", {
                    className: "text-[12px] text-[#6b6b6b] mt-1",
                    children: z.sub,
                  }),
                ],
              },
              z.label,
            ),
          ),
        }),
      }),
      c("section", {
        id: "gioi-thieu",
        className:
          "mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 py-14 lg:py-24 grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-10 lg:gap-16 items-start bg-white",
        children: [
          c("div", {
            className: "relative min-w-0",
            children: [
              P("div", {
                className:
                  "rounded-[28px] overflow-hidden border border-[#ece6d3] bg-white shadow-[0_8px_32px_rgba(182,141,46,0.08)]",
                children: P("img", {
                  src: ol,
                  alt: "Kho phân phối bia Long Thành tại Phước Hòa",
                  className:
                    "w-full h-[420px] lg:h-[560px] object-cover max-w-full",
                }),
              }),
              c("div", {
                className:
                  "absolute -bottom-6 right-2 lg:right-4 rounded-[20px] bg-[#0e0e0e] text-white p-5 border border-[#B68D2E]/20 w-[min(280px,92%)] shadow-[0_20px_50px_rgba(0,0,0,0.4)] max-w-full",
                children: [
                  c("div", {
                    className:
                      "flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] font-bold text-[#D4AA4A]",
                    children: [
                      P("img", {
                        src: fA,
                        alt: "",
                        "aria-hidden": "true",
                        className: "h-4 w-auto",
                      }),
                      " Năng lực cốt lõi",
                    ],
                  }),
                  P("div", {
                    className: "mt-3 space-y-3",
                    children: [
                      "Kho >1000m² tại Phước Hòa",
                      "Giao hàng 24/7 toàn Đồng Nai",
                      "Đầy đủ giấy phép 4633",
                    ].map((z) =>
                      c(
                        "div",
                        {
                          className:
                            "flex items-center gap-2 text-[13px] font-medium",
                          children: [
                            P(pn, { className: "h-4 w-4 text-[#B68D2E]" }),
                            " ",
                            z,
                          ],
                        },
                        z,
                      ),
                    ),
                  }),
                ],
              }),
            ],
          }),
          c("div", {
            className: "min-w-0",
            children: [
              c("div", {
                className:
                  "inline-flex items-center gap-2 rounded-full bg-[#fdf6de] border border-[#e8d9a8] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#8C6B1F]",
                children: [
                  P("img", {
                    src: fA,
                    alt: "",
                    "aria-hidden": "true",
                    className: "h-4 w-auto object-contain",
                  }),
                  " Về chúng tôi • LTB GOLD",
                ],
              }),
              c("h2", {
                className:
                  "mt-4 text-[30px] lg:text-[40px] font-black leading-[0.95] tracking-[-0.03em] uppercase text-[#1a1a1a]",
                children: [
                  "Nhà phân phối ",
                  P("br", {}),
                  "đáng tin cậy ",
                  P("br", {}),
                  P("span", {
                    className: "gold-text-gradient",
                    children: "từ 2021",
                  }),
                ],
              }),
              c("p", {
                className: "mt-5 text-[15px] leading-[1.75] text-[#3a3a3a]",
                children: [
                  "CÔNG TY TNHH BIA LONG THÀNH (LTB) hoạt động theo MST ",
                  P("b", {
                    className: "text-[#8C6B1F]",
                    children: "3603823707",
                  }),
                  " từ ngày 19/08/2021, chuyên bán buôn đồ uống có cồn, không cồn và sản phẩm thuốc lá theo mã ngành ",
                  P("b", { children: "4633, 46331, 46332, 46340" }),
                  ". Chúng tôi tập trung vào uy tín pháp lý, nguồn hàng chính hãng và dịch vụ giao hàng nhanh.",
                ],
              }),
              P("div", {
                className: "mt-6 grid sm:grid-cols-2 gap-3 min-w-0",
                children: [
                  {
                    t: "Nguồn hàng chính hãng",
                    d: "Heineken, Tiger, Saigon, 333, Budweiser... nhập trực tiếp, hóa đơn đầy đủ.",
                  },
                  {
                    t: "Giá sỉ cạnh tranh",
                    d: "Chiết khấu tốt cho đại lý, quán nhậu, tạp hóa, F&B khu vực Long Thành.",
                  },
                  {
                    t: "Giấy phép đầy đủ",
                    d: "Đủ điều kiện kinh doanh bán buôn đồ uống & thuốc lá theo quy định.",
                  },
                  {
                    t: "Hỗ trợ xuất VAT",
                    d: "Xuất hóa đơn VAT theo MST 3603823707 - LONG THANH BEER CO., LTD.",
                  },
                ].map((z) =>
                  c(
                    "div",
                    {
                      className:
                        "rounded-[16px] border border-[#ece6d3] bg-white p-4 min-w-0 hover:border-[#B68D2E]/30 transition-colors",
                      children: [
                        P("div", {
                          className:
                            "font-bold text-[13px] uppercase tracking-wide text-[#1a1a1a]",
                          children: z.t,
                        }),
                        P("div", {
                          className:
                            "mt-1 text-[12.5px] leading-[1.6] text-[#6b6b6b]",
                          children: z.d,
                        }),
                      ],
                    },
                    z.t,
                  ),
                ),
              }),
              P("div", {
                className: "mt-8 border-l-2 border-[#B68D2E]/30 pl-6 space-y-6",
                children: [
                  {
                    y: "2021",
                    t: "Thành lập",
                    d: "CÔNG TY TNHH BIA LONG THÀNH được cấp MST 3603823707, đại diện HOÀNG XUÂN DŨNG.",
                  },
                  {
                    y: "2022",
                    t: "Mở rộng kho Phước Hòa",
                    d: "Đầu tư kho >1000m², đội xe tải giao hàng nội huyện và liên tỉnh.",
                  },
                  {
                    y: "2024",
                    t: "Cập nhật địa chỉ mới",
                    d: "1401/2, tổ 17, ấp Phước Hòa, Xã Long Phước, Tỉnh Đồng Nai sau sáp nhập 2025.",
                  },
                ].map((z) =>
                  c(
                    "div",
                    {
                      className: "relative",
                      children: [
                        P("div", {
                          className:
                            "absolute -left-[31px] top-1 h-3 w-3 rounded-full bg-[#B68D2E] border-2 border-white shadow-[0_0_0_3px_rgba(182,141,46,0.15)]",
                        }),
                        P("div", {
                          className:
                            "text-[12px] font-black tracking-[0.16em] text-[#B68D2E]",
                          children: z.y,
                        }),
                        P("div", {
                          className: "font-bold mt-1 text-[#1a1a1a]",
                          children: z.t,
                        }),
                        P("div", {
                          className:
                            "text-[13px] text-[#6b6b6b] leading-[1.6] mt-1",
                          children: z.d,
                        }),
                      ],
                    },
                    z.y,
                  ),
                ),
              }),
            ],
          }),
        ],
      }),
      c("section", {
        id: "san-pham",
        className:
          "relative border-y border-[#1e1c14] bg-[#0E0E0E] text-white overflow-hidden",
        children: [
          P("div", {
            className: "absolute inset-0 opacity-[0.08]",
            children: P("img", {
              src: dl,
              alt: "",
              className: "h-full w-full object-cover",
            }),
          }),
          P("div", {
            className:
              "absolute inset-0 bg-gradient-to-b from-[#0E0E0E] via-[#0E0E0E]/92 to-[#0E0E0E]",
          }),
          P("div", {
            className: "absolute inset-0 opacity-[0.03]",
            style: {
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            },
          }),
          c("div", {
            className:
              "relative mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 py-14 lg:py-20",
            children: [
              c("div", {
                className: "flex flex-wrap items-end justify-between gap-6",
                children: [
                  c("div", {
                    children: [
                      c("div", {
                        className:
                          "inline-flex items-center gap-2 rounded-full border border-[#B68D2E]/30 bg-[#1a1912] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-[#D4AA4A]",
                        children: [
                          P(De, { className: "h-4 w-4 text-[#B68D2E]" }),
                          " Sản phẩm & Dịch vụ • LTB GOLD #B68D2E",
                        ],
                      }),
                      c("h2", {
                        className:
                          "mt-4 text-[28px] lg:text-[40px] font-black leading-[0.95] uppercase tracking-[-0.02em]",
                        children: [
                          "Bán buôn đa ngành",
                          P("br", {}),
                          P("span", {
                            className: "text-[#D4AA4A]",
                            children: "đồ uống & thuốc lá",
                          }),
                        ],
                      }),
                    ],
                  }),
                  c("p", {
                    className:
                      "max-w-[420px] text-[14px] leading-[1.7] text-[#b9b49f]",
                    children: [
                      "Mã ngành 4633, 46331, 46332, 46340 - đủ danh mục cho đại lý, tạp hóa, nhà hàng, quán nhậu tại Long Thành, Nhơn Trạch, Biên Hòa. Tông vàng ",
                      P("span", {
                        className: "text-[#B68D2E] font-bold",
                        children: "#B68D2E",
                      }),
                      " đồng bộ logo.",
                    ],
                  }),
                ],
              }),
              P("div", {
                className: "mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4",
                children: [
                  {
                    code: "46331",
                    icon: Vf,
                    title: "Bia & Đồ uống có cồn",
                    desc: "Heineken, Tiger, Saigon, 333, Budweiser, Larue... thùng, lon, chai đủ loại.",
                    bullets: [
                      "Giá sỉ theo thùng",
                      "Giao nhanh 24/7",
                      "Hàng chính hãng",
                    ],
                  },
                  {
                    code: "46332",
                    icon: Hn,
                    title: "Đồ uống không cồn",
                    desc: "Nước ngọt, tăng lực, nước suối, trà, sữa - phục vụ tạp hóa, quán.",
                    bullets: [
                      "Coca, Pepsi, Redbull",
                      "Đủ dung tích",
                      "CK tốt theo SL",
                    ],
                  },
                  {
                    code: "46340",
                    icon: xf,
                    title: "Thuốc lá & Thuốc lào",
                    desc: "Bán buôn sản phẩm thuốc lá theo quy định, có hóa đơn VAT.",
                    bullets: ["Nguồn hợp pháp", "Đủ giấy tờ", "Giao kín đáo"],
                  },
                  {
                    code: "LOGISTICS",
                    icon: qn,
                    title: "Dịch vụ bán buôn & Giao hàng",
                    desc: "Xe tải phủ sóng Đồng Nai, giao tận nơi, hỗ trợ xuất hóa đơn VAT.",
                    bullets: [
                      "Kho Phước Hòa",
                      "Đội xe riêng",
                      "Xuất VAT MST 3603823707",
                    ],
                  },
                ].map((z) =>
                  c(
                    "div",
                    {
                      className:
                        "group rounded-[22px] bg-[#17150e] border border-[#B68D2E]/15 p-5 hover:-translate-y-1 hover:border-[#B68D2E]/35 hover:shadow-[0_20px_50px_rgba(182,141,46,0.12)] transition-all",
                      children: [
                        c("div", {
                          className: "flex items-start justify-between",
                          children: [
                            P("div", {
                              className:
                                "h-12 w-12 rounded-[14px] bg-[#1f1d13] border border-[#B68D2E]/20 grid place-items-center text-[#B68D2E]",
                              children: P(z.icon, { className: "h-6 w-6" }),
                            }),
                            P("span", {
                              className:
                                "rounded-full bg-[#B68D2E] text-white text-[10px] font-black tracking-[0.14em] px-2.5 py-1",
                              children: z.code,
                            }),
                          ],
                        }),
                        P("div", {
                          className:
                            "mt-5 font-extrabold text-[15px] leading-[1.2] uppercase tracking-wide text-white",
                          children: z.title,
                        }),
                        P("div", {
                          className:
                            "mt-2 text-[13px] leading-[1.6] text-[#a8a391]",
                          children: z.desc,
                        }),
                        P("div", {
                          className: "mt-4 space-y-2",
                          children: z.bullets.map((w) =>
                            c(
                              "div",
                              {
                                className:
                                  "flex items-center gap-2 text-[12px] text-[#d8d2b9]",
                                children: [
                                  P(pn, {
                                    className: "h-3.5 w-3.5 text-[#B68D2E]",
                                  }),
                                  " ",
                                  w,
                                ],
                              },
                              w,
                            ),
                          ),
                        }),
                        P("button", {
                          onClick: () => q("lien-he"),
                          className:
                            "mt-5 w-full h-10 rounded-full bg-[#232115] border border-[#B68D2E]/20 text-[#D4AA4A] text-[12px] font-bold uppercase tracking-wide group-hover:bg-[#2a2618] group-hover:border-[#B68D2E]/40 transition",
                          children: "Báo giá nhóm này",
                        }),
                      ],
                    },
                    z.code,
                  ),
                ),
              }),
            ],
          }),
        ],
      }),
      c("section", {
        id: "nang-luc",
        className:
          "mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 py-14 lg:py-20 bg-white",
        children: [
          c("div", {
            className: "grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center",
            children: [
              c("div", {
                children: [
                  c("div", {
                    className:
                      "inline-flex items-center gap-2 rounded-full bg-[#fdf6de] border border-[#e8d9a8] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#8C6B1F]",
                    children: [
                      P("img", {
                        src: fA,
                        alt: "",
                        "aria-hidden": "true",
                        className: "h-4 w-auto object-contain",
                      }),
                      " Năng lực phân phối",
                    ],
                  }),
                  c("h2", {
                    className:
                      "mt-4 text-[30px] lg:text-[40px] font-black leading-[0.95] uppercase tracking-[-0.02em] text-[#1a1a1a]",
                    children: [
                      "Hạ tầng B2B",
                      P("br", {}),
                      "sẵn sàng cho",
                      P("br", {}),
                      P("span", {
                        className: "gold-text-gradient",
                        children: "đơn lớn & gấp",
                      }),
                    ],
                  }),
                  c("p", {
                    className:
                      "mt-4 text-[14px] leading-[1.7] text-[#6b6b6b] max-w-[420px]",
                    children: [
                      "Kho tại Phước Hòa, xe tải riêng, phủ sóng Long Phước, Long Thành, Nhơn Trạch, Biên Hòa. Quy trình xuất nhập - hóa đơn minh bạch theo MST ",
                      P("b", {
                        className: "text-[#B68D2E]",
                        children: "3603823707",
                      }),
                      ".",
                    ],
                  }),
                ],
              }),
              P("div", {
                className: "grid sm:grid-cols-2 gap-4",
                children: [
                  {
                    icon: Rf,
                    k: ">1000m²",
                    t: "Kho hàng tại Phước Hòa",
                    d: "Kệ cao, phân loại theo hãng, quản lý tồn kho theo ngày.",
                  },
                  {
                    icon: qn,
                    k: "6+",
                    t: "Đội xe giao hàng",
                    d: "Xe tải 1-3.5 tấn, giao 24/7, kể cả Chủ nhật & Lễ.",
                  },
                  {
                    icon: me,
                    k: "Toàn Đồng Nai",
                    t: "Phủ sóng",
                    d: "Tập trung Long Thành - Nhơn Trạch - Biên Hòa, giao trong ngày.",
                  },
                  {
                    icon: Hn,
                    k: "OMS",
                    t: "Quản lý đơn hàng",
                    d: "Tiếp nhận qua điện thoại, Zalo, form web, xác nhận nhanh.",
                  },
                ].map((z) =>
                  c(
                    "div",
                    {
                      className:
                        "rounded-[20px] border border-[#ece6d3] bg-white p-6 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(182,141,46,0.10)] hover:border-[#B68D2E]/30 transition-all",
                      children: [
                        c("div", {
                          className: "flex items-center gap-3",
                          children: [
                            P("div", {
                              className:
                                "h-10 w-10 rounded-full bg-[#0e0e0e] text-[#B68D2E] grid place-items-center border border-[#B68D2E]/20",
                              children: P(z.icon, { className: "h-5 w-5" }),
                            }),
                            P("div", {
                              className:
                                "text-[20px] font-black tracking-tight text-[#1a1a1a]",
                              children: z.k,
                            }),
                          ],
                        }),
                        P("div", {
                          className:
                            "mt-4 font-bold text-[14px] uppercase tracking-wide text-[#1a1a1a]",
                          children: z.t,
                        }),
                        P("div", {
                          className:
                            "mt-1 text-[12.5px] leading-[1.6] text-[#6b6b6b]",
                          children: z.d,
                        }),
                      ],
                    },
                    z.t,
                  ),
                ),
              }),
            ],
          }),
          c("div", {
            className:
              "mt-12 lg:mt-16 rounded-[28px] border border-[#ece6d3] bg-[#fdfbf3] p-6 lg:p-8",
            children: [
              c("div", {
                className: "flex flex-wrap items-center justify-between gap-6",
                children: [
                  c("div", {
                    className:
                      "text-[13px] font-bold uppercase tracking-[0.16em] text-[#8C6B1F] flex items-center gap-2",
                    children: [
                      P("img", {
                        src: fA,
                        alt: "",
                        "aria-hidden": "true",
                        className: "h-5 w-auto",
                      }),
                      " Đối tác & Hãng phân phối",
                    ],
                  }),
                  P("div", {
                    className: "flex flex-wrap gap-2",
                    children: [
                      "HEINEKEN",
                      "TIGER",
                      "SAIGON",
                      "333",
                      "BUDWEISER",
                      "LARUE",
                      "COCA-COLA",
                      "PEPSI",
                      "REDBULL",
                    ].map((z) =>
                      P(
                        "div",
                        {
                          className:
                            "h-9 rounded-full border border-[#e8d9a8] bg-white px-4 grid place-items-center text-[11px] font-black tracking-[0.12em] text-[#1a1a1a] hover:border-[#B68D2E] transition-colors",
                          children: z,
                        },
                        z,
                      ),
                    ),
                  }),
                ],
              }),
              P("div", {
                className: "mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-3",
                children: [
                  "Hàng chính hãng 100%",
                  "Giá sỉ tốt cho đại lý",
                  "Hóa đơn VAT đầy đủ",
                  "Đổi trả nếu lỗi NSX",
                ].map((z) =>
                  c(
                    "div",
                    {
                      className:
                        "flex items-center gap-2 rounded-full bg-white border border-[#ece6d3] px-4 py-3 text-[12px] font-bold text-[#1a1a1a]",
                      children: [
                        P(DA, { className: "h-4 w-4 text-[#B68D2E]" }),
                        " ",
                        z,
                      ],
                    },
                    z,
                  ),
                ),
              }),
            ],
          }),
        ],
      }),
      c("section", {
        id: "lien-he",
        className:
          "bg-[#0E0E0E] text-white border-t border-[#1e1c14] relative overflow-hidden",
        children: [
          P("div", {
            className:
              "absolute top-0 left-1/2 -translate-x-1/2 opacity-[0.03] pointer-events-none",
            children: P("img", {
              src: fA,
              alt: "",
              "aria-hidden": "true",
              className: "h-[600px] w-auto",
            }),
          }),
          c("div", {
            className:
              "mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 py-14 lg:py-20 grid lg:grid-cols-[1.05fr_0.95fr] gap-10 relative",
            children: [
              c("div", {
                className:
                  "rounded-[28px] bg-[#15130e] border border-[#B68D2E]/15 p-6 lg:p-8 shadow-[0_0_0_1px_rgba(182,141,46,0.05)]",
                children: [
                  c("div", {
                    className:
                      "flex items-center gap-2 text-[#D4AA4A] text-[11px] font-bold uppercase tracking-[0.16em]",
                    children: [
                      P(Nf, { className: "h-4 w-4 text-[#B68D2E]" }),
                      " Liên hệ & Báo giá sỉ",
                    ],
                  }),
                  c("h3", {
                    className:
                      "mt-3 text-[26px] lg:text-[32px] font-black leading-[0.95] uppercase",
                    children: ["Gửi yêu cầu", P("br", {}), "báo giá nhanh"],
                  }),
                  c("p", {
                    className: "mt-3 text-[13px] leading-[1.6] text-[#a8a391]",
                    children: [
                      "Điền form, chúng tôi gọi lại trong 30 phút (7:00-19:00). Xuất hóa đơn VAT theo MST ",
                      P("span", {
                        className: "text-[#B68D2E] font-bold",
                        children: "3603823707",
                      }),
                      ".",
                    ],
                  }),
                  c("form", {
                    onSubmit: V,
                    className: "mt-6 space-y-4",
                    children: [
                      c("div", {
                        className: "grid sm:grid-cols-2 gap-4",
                        children: [
                          c("label", {
                            className: "block",
                            children: [
                              P("span", {
                                className:
                                  "text-[11px] uppercase tracking-[0.14em] font-bold text-[#c9c2ab]",
                                children: "Tên đại lý / Người liên hệ *",
                              }),
                              P("input", {
                                value: v.name,
                                onChange: (z) =>
                                  u({ ...v, name: z.target.value }),
                                placeholder: "VD: Quán Hùng - Long Phước",
                                className:
                                  "mt-2 w-full h-11 rounded-full bg-[#1e1c13] border border-[#B68D2E]/20 px-4 text-[13px] outline-none focus:border-[#B68D2E] placeholder:text-[#6d695a] text-white",
                              }),
                            ],
                          }),
                          c("label", {
                            className: "block",
                            children: [
                              P("span", {
                                className:
                                  "text-[11px] uppercase tracking-[0.14em] font-bold text-[#c9c2ab]",
                                children: "Số điện thoại *",
                              }),
                              P("input", {
                                value: v.phone,
                                onChange: (z) =>
                                  u({ ...v, phone: z.target.value }),
                                placeholder: "0988 087 806",
                                className:
                                  "mt-2 w-full h-11 rounded-full bg-[#1e1c13] border border-[#B68D2E]/20 px-4 text-[13px] outline-none focus:border-[#B68D2E] placeholder:text-[#6d695a] text-white",
                              }),
                            ],
                          }),
                        ],
                      }),
                      c("div", {
                        className: "grid sm:grid-cols-2 gap-4",
                        children: [
                          c("label", {
                            className: "block",
                            children: [
                              P("span", {
                                className:
                                  "text-[11px] uppercase tracking-[0.14em] font-bold text-[#c9c2ab]",
                                children: "Loại hàng cần báo giá",
                              }),
                              c("select", {
                                value: v.type,
                                onChange: (z) =>
                                  u({ ...v, type: z.target.value }),
                                className:
                                  "mt-2 w-full h-11 rounded-full bg-[#1e1c13] border border-[#B68D2E]/20 px-4 text-[13px] outline-none focus:border-[#B68D2E] text-white",
                                children: [
                                  P("option", {
                                    children: "Bia - Đồ uống có cồn",
                                  }),
                                  P("option", {
                                    children: "Nước ngọt - Không cồn",
                                  }),
                                  P("option", { children: "Thuốc lá" }),
                                  P("option", { children: "Tất cả danh mục" }),
                                ],
                              }),
                            ],
                          }),
                          c("label", {
                            className: "block",
                            children: [
                              P("span", {
                                className:
                                  "text-[11px] uppercase tracking-[0.14em] font-bold text-[#c9c2ab]",
                                children: "Số lượng ước tính",
                              }),
                              P("input", {
                                value: v.qty,
                                onChange: (z) =>
                                  u({ ...v, qty: z.target.value }),
                                placeholder: "VD: 50 thùng Tiger",
                                className:
                                  "mt-2 w-full h-11 rounded-full bg-[#1e1c13] border border-[#B68D2E]/20 px-4 text-[13px] outline-none focus:border-[#B68D2E] placeholder:text-[#6d695a] text-white",
                              }),
                            ],
                          }),
                        ],
                      }),
                      c("label", {
                        className: "block",
                        children: [
                          P("span", {
                            className:
                              "text-[11px] uppercase tracking-[0.14em] font-bold text-[#c9c2ab]",
                            children: "Ghi chú thêm",
                          }),
                          P("textarea", {
                            value: v.note,
                            onChange: (z) => u({ ...v, note: z.target.value }),
                            placeholder:
                              "Địa chỉ giao, yêu cầu hóa đơn VAT, thời gian giao...",
                            rows: 3,
                            className:
                              "mt-2 w-full rounded-[18px] bg-[#1e1c13] border border-[#B68D2E]/20 p-4 text-[13px] outline-none focus:border-[#B68D2E] placeholder:text-[#6d695a] resize-none text-white",
                          }),
                        ],
                      }),
                      P("button", {
                        type: "submit",
                        className:
                          "w-full h-[48px] rounded-full bg-[linear-gradient(102deg,#B68D2E_0%,#8C6B1F_100%)] text-white font-black uppercase tracking-wide text-[13px] shadow-[0_12px_28px_rgba(182,141,46,0.35)] hover:brightness-110 hover:shadow-[0_16px_36px_rgba(182,141,46,0.45)] transition-all",
                        children: "Gửi yêu cầu báo giá",
                      }),
                      c("div", {
                        className:
                          "rounded-[14px] bg-[#1f1d13] border border-[#B68D2E]/15 px-4 py-3 text-[11px] leading-[1.6] text-[#b8b29c]",
                        children: [
                          "⚠️ Cảnh báo: Xuất hóa đơn VAT theo MST ",
                          P("b", {
                            className: "text-[#D4AA4A]",
                            children:
                              "3603823707 - CÔNG TY TNHH BIA LONG THÀNH",
                          }),
                          ". Vui lòng kiểm tra kỹ thông tin công ty trước khi chuyển khoản.",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              c("div", {
                className: "space-y-4",
                children: [
                  c("div", {
                    className:
                      "rounded-[28px] bg-[#fdfbf3] text-[#0e0e0e] border border-[#ece6d3] p-6 lg:p-8 shadow-[0_8px_32px_rgba(0,0,0,0.2)]",
                    children: [
                      c("div", {
                        className: "flex items-center gap-3",
                        children: [
                          P("div", {
                            className:
                              "h-12 w-12 rounded-[12px] bg-white border border-[#B68D2E]/30 grid place-items-center overflow-hidden p-1 shadow-[0_2px_8px_rgba(182,141,46,0.15)]",
                            children: P("img", {
                              src: fA,
                              alt: "",
                              "aria-hidden": "true",
                              className:
                                "h-10 w-auto object-contain logo-gold-shadow",
                            }),
                          }),
                          c("div", {
                            children: [
                              P("div", {
                                className:
                                  "font-black tracking-tight text-[#1a1a1a]",
                                children: "CÔNG TY TNHH BIA LONG THÀNH",
                              }),
                              P("div", {
                                className:
                                  "text-[11px] uppercase tracking-[0.16em] text-[#B68D2E] font-bold",
                                children: "LONG THANH BEER COMPANY LIMITED",
                              }),
                            ],
                          }),
                        ],
                      }),
                      c("div", {
                        className: "mt-6 space-y-4 text-[13px] leading-[1.6]",
                        children: [
                          c("div", {
                            className: "flex gap-3",
                            children: [
                              P(me, {
                                className:
                                  "h-5 w-5 text-[#B68D2E] shrink-0 mt-0.5",
                              }),
                              c("span", {
                                children: [
                                  P("b", {
                                    children: "Địa chỉ (sau sáp nhập):",
                                  }),
                                  P("br", {}),
                                  "1401/2, tổ 17, ấp Phước Hòa, Xã Long Phước, Tỉnh Đồng Nai, Việt Nam",
                                  P("br", {}),
                                  P("span", {
                                    className:
                                      "text-[11px] text-[#8C6B1F] font-bold",
                                    children:
                                      "Đã cập nhật Xã/phường, Tỉnh/Thành phố mới theo sáp nhập 2025",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          c("div", {
                            className: "flex gap-3",
                            children: [
                              P(mn, {
                                className: "h-5 w-5 text-[#B68D2E] shrink-0",
                              }),
                              c("span", {
                                children: [
                                  P("b", { children: "MST:" }),
                                  " 3603823707 - Ngày cấp: 19/08/2021",
                                  P("br", {}),
                                  P("b", { children: "Viết tắt:" }),
                                  " LTB",
                                ],
                              }),
                            ],
                          }),
                          c("div", {
                            className: "flex gap-3",
                            children: [
                              P(DA, {
                                className: "h-5 w-5 text-[#B68D2E] shrink-0",
                              }),
                              c("span", {
                                children: [
                                  P("b", { children: "Người đại diện:" }),
                                  " HOÀNG XUÂN DŨNG",
                                ],
                              }),
                            ],
                          }),
                          c("div", {
                            className: "flex gap-3",
                            children: [
                              P(gf, {
                                className: "h-5 w-5 text-[#B68D2E] shrink-0",
                              }),
                              c("span", {
                                children: [
                                  P("b", { children: "Giờ mở cửa:" }),
                                  " 7:00 - 19:00 (T2 - CN)",
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      c("div", {
                        className: "mt-6 grid grid-cols-2 gap-3",
                        children: [
                          c("a", {
                            href: "tel:0988087806",
                            className:
                              "h-12 rounded-full bg-[#0e0e0e] text-[#D4AA4A] font-bold text-[13px] flex items-center justify-center gap-2 border border-[#B68D2E]/20 hover:border-[#B68D2E]/40 transition-colors",
                            children: [
                              P(he, { className: "h-4 w-4 text-[#B68D2E]" }),
                              " 0988.087.806",
                            ],
                          }),
                          c("a", {
                            href: "https://zalo.me/0988087806",
                            target: "_blank",
                            rel: "noopener",
                            className:
                              "h-12 rounded-full bg-[linear-gradient(102deg,#B68D2E_0%,#8C6B1F_100%)] text-white font-bold text-[13px] flex items-center justify-center gap-2 shadow-[0_6px_16px_rgba(182,141,46,0.3)] hover:brightness-110 transition-all",
                            children: [
                              P(Of, { className: "h-4 w-4" }),
                              " Chat Zalo",
                            ],
                          }),
                        ],
                      }),
                      c("div", {
                        className:
                          "mt-6 rounded-[18px] overflow-hidden border border-[#e8d9a8] bg-[#fdf6de] relative",
                        children: [
                          c("div", {
                            className:
                              "flex items-center gap-2 px-4 py-2 text-[11px] font-bold uppercase tracking-wide text-[#8C6B1F] bg-[#fdf6de] border-b border-[#e8d9a8]",
                            children: [
                              P(me, { className: "h-4 w-4 text-[#B68D2E]" }),
                              " 1401/2 Phước Hòa, Long Phước, Đồng Nai",
                            ],
                          }),
                          P("iframe", {
                            title: "Bản đồ Công ty TNHH Bia Long Thành",
                            src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10.85546779632568!2d107.0051845799013!3d10.7129900796742!2m3!1f169.46036!2f90!3f0!3m2!1i1024!2i768!4f75!3m3!1m2!1s0x317519783a17b183%3A0x2c19865068a4c052!2sC%C3%94NG%20TY%20TNHH%20BIA%20LONG%20TH%C3%80NH!5e0!3m2!1svi!2s!4v1792023503147!5m2!1svi!2s",
                            className: "block w-full h-[300px] border-0",
                            style: { border: 0 },
                            allowFullScreen: "",
                            loading: "lazy",
                            referrerPolicy: "strict-origin-when-cross-origin",
                          }),
                        ],
                      }),
                    ],
                  }),
                  c("div", {
                    className:
                      "rounded-[20px] border border-[#B68D2E]/15 bg-[#15130e] p-4 flex items-center gap-3 text-[12px] text-[#b8b29c]",
                    children: [
                      P("div", {
                        className:
                          "h-10 w-10 rounded-full bg-[#1f1d13] border border-[#B68D2E]/20 grid place-items-center overflow-hidden",
                        children: P("img", {
                          src: fA,
                          alt: "",
                          "aria-hidden": "true",
                          className: "h-7 w-auto object-contain",
                        }),
                      }),
                      c("div", {
                        children: [
                          P("div", {
                            className: "font-bold text-white",
                            children: "Thông tin xuất hóa đơn",
                          }),
                          c("div", {
                            className: "mt-1",
                            children: [
                              "CÔNG TY TNHH BIA LONG THÀNH - MST 3603823707",
                              P("br", {}),
                              "1401/2, tổ 17, ấp Phước Hòa, Xã Long Phước, Đồng Nai",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      c("footer", {
        className:
          "relative bg-[linear-gradient(180deg,#0E0E0E_0%,#1a1a1a_100%)] text-[#9a9585] border-t border-[#B68D2E]/10 overflow-hidden",
        children: [
          P("div", {
            className: "absolute inset-0 opacity-[0.02] pointer-events-none",
            style: {
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            },
          }),
          c("div", {
            className:
              "mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 py-10 lg:py-14 grid lg:grid-cols-[1.2fr_0.8fr_0.8fr] gap-10 relative",
            children: [
              c("div", {
                children: [
                  c("div", {
                    className: "flex items-start gap-5",
                    children: [
                      P("div", {
                        className: "shrink-0",
                        children: P("img", {
                          src: Vn,
                          alt: "LTB - Long Thanh Beer Company Limited - Logo vàng trong suốt 100% phát sáng",
                          className:
                            "h-[120px] w-auto object-contain logo-gold-glow",
                          style: {
                            filter:
                              "drop-shadow(0 0 20px rgba(182,141,46,0.5)) drop-shadow(0 4px 12px rgba(182,141,46,0.3))",
                          },
                        }),
                      }),
                      c("div", {
                        className: "pt-2",
                        children: [
                          P("div", {
                            className:
                              "font-black text-white tracking-tight text-[17px] leading-tight",
                            children: "CÔNG TY TNHH BIA LONG THÀNH",
                          }),
                          P("div", {
                            className:
                              "text-[11px] uppercase tracking-[0.16em] font-bold text-[#B68D2E] mt-1",
                            children: "LONG THANH BEER COMPANY LIMITED",
                          }),
                          P("div", {
                            className:
                              "text-[10px] uppercase tracking-[0.16em] font-bold text-[#D4AA4A]/70 mt-1",
                            children:
                              "MST 3603823707 • LTB • Logo vàng #B68D2E • Trong suốt 100%",
                          }),
                          P("div", {
                            className:
                              "mt-3 inline-flex items-center gap-1.5 rounded-full border border-[#B68D2E]/30 bg-[#B68D2E]/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-[#D4AA4A]",
                            children:
                              "✦ PNG xóa phông hoàn hảo • Nổi bật trên nền đen",
                          }),
                        ],
                      }),
                    ],
                  }),
                  c("p", {
                    className:
                      "mt-6 text-[13px] leading-[1.7] max-w-[440px] text-[#c9c2ab]",
                    children: [
                      "Nhà phân phối bia & đồ uống bán buôn uy tín tại Long Thành - Đồng Nai. Chuyên 4633 Bán buôn đồ uống, 46331 có cồn, 46332 không cồn, 46340 thuốc lá. Giao nhanh 24/7, hóa đơn VAT đầy đủ. Logo ",
                      P("b", {
                        className: "text-[#B68D2E]",
                        children: "vàng lúa mạch #B68D2E",
                      }),
                      " đồng bộ toàn site.",
                    ],
                  }),
                  c("div", {
                    className:
                      "mt-5 inline-flex items-center gap-2 rounded-full border border-[#B68D2E]/20 bg-[#15130e] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#D4AA4A]",
                    children: [
                      P(De, { className: "h-3.5 w-3.5 text-[#B68D2E]" }),
                      " Đã cập nhật Xã/phường, Tỉnh/Thành phố mới theo sáp nhập 2025",
                    ],
                  }),
                ],
              }),
              c("div", {
                children: [
                  c("div", {
                    className:
                      "text-white font-bold uppercase tracking-[0.14em] text-[12px] flex items-center gap-2",
                    children: [
                      P("span", {
                        className: "h-1 w-6 rounded-full bg-[#B68D2E]",
                      }),
                      "Thông tin xuất hóa đơn",
                    ],
                  }),
                  c("div", {
                    className:
                      "mt-4 space-y-2 text-[12.5px] leading-[1.6] text-[#b8b29c]",
                    children: [
                      c("div", {
                        children: [
                          P("b", {
                            className: "text-[#D4AA4A]",
                            children: "Tên:",
                          }),
                          " CÔNG TY TNHH BIA LONG THÀNH",
                        ],
                      }),
                      c("div", {
                        children: [
                          P("b", {
                            className: "text-[#D4AA4A]",
                            children: "Tên QT:",
                          }),
                          " LONG THANH BEER COMPANY LIMITED",
                        ],
                      }),
                      c("div", {
                        children: [
                          P("b", {
                            className: "text-[#D4AA4A]",
                            children: "Viết tắt:",
                          }),
                          " LTB",
                        ],
                      }),
                      c("div", {
                        children: [
                          P("b", {
                            className: "text-[#D4AA4A]",
                            children: "MST:",
                          }),
                          " 3603823707 - Ngày cấp: 19/08/2021",
                        ],
                      }),
                      c("div", {
                        children: [
                          P("b", {
                            className: "text-[#D4AA4A]",
                            children: "Địa chỉ:",
                          }),
                          " 1401/2, tổ 17, ấp Phước Hòa, Xã Long Phước, Tỉnh Đồng Nai, Việt Nam",
                        ],
                      }),
                      c("div", {
                        children: [
                          P("b", {
                            className: "text-[#D4AA4A]",
                            children: "Đại diện:",
                          }),
                          " HOÀNG XUÂN DŨNG",
                        ],
                      }),
                      c("div", {
                        children: [
                          P("b", {
                            className: "text-[#D4AA4A]",
                            children: "Điện thoại:",
                          }),
                          " 0988087806",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              c("div", {
                children: [
                  c("div", {
                    className:
                      "text-white font-bold uppercase tracking-[0.14em] text-[12px] flex items-center gap-2",
                    children: [
                      P("span", {
                        className: "h-1 w-6 rounded-full bg-[#B68D2E]",
                      }),
                      "Ngành nghề",
                    ],
                  }),
                  P("div", {
                    className: "mt-4 space-y-2 text-[12px] text-[#b8b29c]",
                    children: [
                      "4633 Bán buôn đồ uống",
                      "46331 Bán buôn đồ uống có cồn",
                      "46332 Bán buôn đồ uống không có cồn",
                      "46340 Bán buôn sản phẩm thuốc lá, thuốc lào",
                    ].map((z) =>
                      c(
                        "div",
                        {
                          className: "flex items-center gap-2",
                          children: [
                            P("span", {
                              className:
                                "h-1.5 w-1.5 rounded-full bg-[#B68D2E]",
                            }),
                            " ",
                            z,
                          ],
                        },
                        z,
                      ),
                    ),
                  }),
                  c("div", {
                    className:
                      "mt-6 rounded-[14px] bg-[#15130e] border border-[#B68D2E]/15 p-3 flex items-center gap-3",
                    children: [
                      P("div", {
                        className:
                          "h-12 w-12 rounded-[10px] bg-white border border-[#B68D2E]/20 grid place-items-center overflow-hidden p-1",
                        children: P("img", {
                          src: fA,
                          alt: "",
                          "aria-hidden": "true",
                          className:
                            "h-10 w-auto object-contain logo-gold-shadow",
                        }),
                      }),
                      c("div", {
                        className: "text-[11px] leading-[1.5]",
                        children: [
                          P("div", {
                            className:
                              "font-bold text-[#D4AA4A] uppercase tracking-wide",
                            children: "Logo chính thức • PNG trong suốt",
                          }),
                          P("div", {
                            className: "text-[#8C6B1F]",
                            children:
                              "Vàng #B68D2E → #8C6B1F • Lúa mạch • Không nền",
                          }),
                        ],
                      }),
                    ],
                  }),
                  c("div", {
                    className: "mt-4 text-[11px] leading-[1.6] text-[#6b6b6b]",
                    children: [
                      "© 2026 LTB - CÔNG TY TNHH BIA LONG THÀNH. Thiết kế premium B2B, tông vàng đồng tin cậy ",
                      P("span", {
                        className: "text-[#B68D2E]",
                        children: "#B68D2E",
                      }),
                      " đồng bộ logo.",
                    ],
                  }),
                ],
              }),
            ],
          }),
          P("div", {
            className: "border-t border-[#B68D2E]/10 relative",
            children: c("div", {
              className:
                "mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 py-4 lg:h-[56px] flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-2 lg:gap-6",
              children: [
                c("span", {
                  className:
                    "flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] font-bold text-[#9a9585] text-center lg:text-left order-1",
                  children: [
                    P("img", {
                      src: fA,
                      alt: "",
                      "aria-hidden": "true",
                      className:
                        "h-4 w-auto opacity-90 logo-gold-shadow shrink-0",
                    }),
                    " © 2026 Công ty TNHH Bia Long Thành. MST 3603823707",
                  ],
                }),
                c("span", {
                  className:
                    "flex items-center justify-center gap-1.5 text-[13px] font-medium tracking-normal normal-case text-[#9ca3af] order-2 text-center",
                  children: [
                    P("span", {
                      className: "hidden sm:inline opacity-50",
                      children: "—",
                    }),
                    P("span", { children: "Thiết kế bởi" }),
                    P("a", {
                      href: "https://ivstech.store",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className:
                        "text-[#B68D2E] font-bold hover:underline underline-offset-[3px] decoration-[#B68D2E]/70 transition-all",
                      children: "IVS Tech",
                    }),
                    P("span", { className: "opacity-60", children: "-" }),
                    P("span", {
                      className: "hidden sm:inline",
                      children: "URL:",
                    }),
                    P("a", {
                      href: "https://ivstech.store",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className:
                        "text-[#9ca3af] hover:text-[#B68D2E] hover:underline underline-offset-[3px] transition-colors",
                      children: "ivstech.store",
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
      P("style", {
        children: `
        @media (max-width: 390px){
          h1{ font-size: 28px !important; }
        }
      `,
      }),
    ],
  });
}
Xl.createRoot(document.getElementById("root")).render(
  P(sl.default.StrictMode, { children: P(x9, {}) }),
);
