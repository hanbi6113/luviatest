import Link from "next/link";

export default function Page() {
  const ott = [
    { id: 1, name: "프리미엄 시네마 느낌" },
    { id: 2, name: "로맨스 판타지(로판)" },
    { id: 3, name: "액션" },
    { id: 4, name: "로맨스" },
    { id: 5, name: "공포" },
    { id: 6, name: "판타지" },
    { id: 7, name: "SF" },
    { id: 8, name: "키즈" },
    { id: 9, name: "오티티 메인페이지(통합)" },
    { id: 10, name: "Youth Healing" },
  ];

  const creator = [
    { id: 1, name: "Cinematic Premium (Creator)" },
    { id: 2, name: "Bright Lovely Studio" },
    { id: 3, name: "Action Creator Studio" },
    { id: 4, name: "Romance Creator Studio" },
    { id: 5, name: "Horror Creator Studio" },
    { id: 6, name: "Fantasy Creator Studio" },
    { id: 7, name: "SF Creator Lab" },
    { id: 8, name: "Kids Creator Studio" },
    { id: 9, name: "작가페이지도 통합" },
    { id: 10, name: "Youth Creator Studio" },
  ];

  return (
    <main className="min-h-screen bg-[#07060a] text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#2a0f1d_0%,#07060a_52%,#05050a_100%)]" />
        <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:28px_28px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 py-10">
        {/* Header */}
        <header className="mb-10 rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <p className="text-xs uppercase tracking-[0.32em] text-white/60">
            Ani Studio · Design Prototypes
          </p>
          <h1 className="mt-3 text-3xl font-semibold sm:text-5xl">
            OTT + 작가 제작 플랫폼 시안
          </h1>
        </header>

        {/* OTT */}
        <section className="mb-12">
          <div className="mb-4 flex items-end justify-between">
            <h2 className="text-2xl font-semibold">OTT 시안</h2>
            <span className="text-sm text-white/55">1 ~ 10</span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ott.map((item) => (
              <Link
                key={`ott-${item.id}`}
                href={`/ott/${item.id}`}
                className="group rounded-[26px] border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:border-white/25 hover:bg-white/7"
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="rounded-full border border-white/15 bg-black/10 px-3 py-1 text-xs uppercase tracking-[0.22em] text-white/70">
                    OTT
                  </span>
                  <span className="text-sm text-white/50 transition group-hover:text-white/85">
                    열기 →
                  </span>
                </div>

                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xl font-semibold">시안 {item.id}</p>
                    <p className="mt-1 text-sm text-white/65">{item.name}</p>
                  </div>

                  <div className="h-10 w-10 rounded-2xl border border-[#d4b26b]/25 bg-[radial-gradient(circle_at_top,#d4b26b33_0%,#ffffff0a_55%,transparent_100%)]" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Creator */}
        <section>
          <div className="mb-4 flex items-end justify-between">
            <h2 className="text-2xl font-semibold">작가 페이지(B2C) 시안</h2>
            <span className="text-sm text-white/55">1 ~ 10</span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {creator.map((item) => (
              <Link
                key={`creator-${item.id}`}
                href={`/creator/${item.id}`}
                className="group rounded-[26px] border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:border-white/25 hover:bg-white/7"
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="rounded-full border border-white/15 bg-black/10 px-3 py-1 text-xs uppercase tracking-[0.22em] text-white/70">
                    B2C
                  </span>
                  <span className="text-sm text-white/50 transition group-hover:text-white/85">
                    열기 →
                  </span>
                </div>

                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xl font-semibold">시안 {item.id}</p>
                    <p className="mt-1 text-sm text-white/65">{item.name}</p>
                  </div>

                  <div className="h-10 w-10 rounded-2xl border border-[#d4b26b]/25 bg-[radial-gradient(circle_at_top,#d4b26b33_0%,#ffffff0a_55%,transparent_100%)]" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        <footer className="mt-12 text-xs text-white/45">
          TIP: 아직 페이지 파일을 안 만들면, 버튼 눌렀을 때 404가 뜨는 게 정상.
        </footer>
      </div>
    </main>
  );
}