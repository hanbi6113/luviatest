export default function OttPage3() {
  const featuredWorks = [
    {
      title: "Red Chase",
      genre: "액션 · 추격",
      desc: "도심 한복판, 멈추지 않는 추격전의 시작.",
      tag: "TOP 10",
    },
    {
      title: "Silent Trigger",
      genre: "액션 · 스릴러",
      desc: "고요할수록 더 위험한 작전이 시작된다.",
      tag: "NEW",
    },
    {
      title: "Night District",
      genre: "범죄 · 느와르",
      desc: "어둠이 짙어질수록 진실은 더 붉어진다.",
      tag: "HOT",
    },
    {
      title: "Last Arena",
      genre: "서바이벌 · 액션",
      desc: "끝까지 버틴 자만이 살아남는다.",
      tag: "LIVE",
    },
  ];

  const actionCollections = [
    "지금 가장 뜨거운 액션",
    "다크 히어로 컬렉션",
    "숨 막히는 추격전",
    "범죄 느와르 특집",
  ];

  const rankingWorks = [
    "Crimson Line",
    "Zero Hour",
    "Break Point",
    "Black Siren",
    "Final Code",
  ];

  return (
    <main className="min-h-screen bg-[#090909] text-white">
      <div className="mx-auto max-w-[1440px] px-6 py-6 md:px-10 lg:px-14">
        <header className="mb-8 flex items-center justify-between border-b border-white/10 pb-5">
          <div className="flex items-center gap-10">
            <div className="text-2xl font-extrabold tracking-[0.2em] text-[#d11f2f]">
              ACTION+
            </div>

            <nav className="hidden items-center gap-6 md:flex">
              <a href="#" className="text-sm text-white/80 transition hover:text-white">
                홈
              </a>
              <a href="#" className="text-sm text-white/80 transition hover:text-white">
                액션
              </a>
              <a href="#" className="text-sm text-white/80 transition hover:text-white">
                스릴러
              </a>
              <a href="#" className="text-sm text-white/80 transition hover:text-white">
                범죄
              </a>
              <a href="#" className="text-sm text-white/80 transition hover:text-white">
                NEW & HOT
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <button className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:text-white">
              검색
            </button>
            <button className="rounded-full bg-[#d11f2f] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#b91c2b]">
              로그인
            </button>
          </div>
        </header>

        <section className="relative overflow-hidden rounded-[28px] border border-[#ffffff12] bg-[radial-gradient(circle_at_top_right,_rgba(209,31,47,0.22),_transparent_30%),linear-gradient(135deg,#151515_0%,#0b0b0b_45%,#12070a_100%)] px-6 py-10 md:px-10 md:py-14 lg:px-14 lg:py-16">
          <div className="absolute -right-16 top-10 h-44 w-44 rounded-full bg-[#d11f2f]/20 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-[#00000070] to-transparent" />

          <div className="relative grid items-end gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-[#d11f2f]/30 bg-[#d11f2f]/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.22em] text-[#ff7b86]">
                Concept 03 · Red Action Zone
              </p>

              <h1 className="max-w-3xl text-4xl font-extrabold leading-tight md:text-6xl">
                붉은 긴장감이
                <br />
                시작되는 액션관
              </h1>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/70 md:text-base">
                어두운 공간 속에서 가장 강렬한 순간만 남긴 OTT 메인 시안입니다.
                블랙과 차콜을 중심으로, 딥레드 포인트만 절제해서 사용해
                프리미엄 액션 영화관 같은 분위기를 만들었습니다.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button className="rounded-full bg-[#d11f2f] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#b81b29]">
                  지금 감상하기
                </button>
                <button className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10">
                  작품 둘러보기
                </button>
              </div>

              <div className="mt-8 flex flex-wrap gap-3 text-xs text-white/60 md:text-sm">
                <span className="rounded-full border border-white/10 px-3 py-1.5">
                  액션
                </span>
                <span className="rounded-full border border-white/10 px-3 py-1.5">
                  스릴러
                </span>
                <span className="rounded-full border border-white/10 px-3 py-1.5">
                  범죄 느와르
                </span>
                <span className="rounded-full border border-white/10 px-3 py-1.5">
                  서바이벌
                </span>
              </div>
            </div>

            <div className="rounded-[24px] border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-bold">Tonight Premiere</h2>
                <span className="rounded-full bg-[#d11f2f]/15 px-3 py-1 text-xs font-semibold text-[#ff8691]">
                  LIVE
                </span>
              </div>

              <div className="overflow-hidden rounded-[20px] border border-white/10 bg-gradient-to-br from-[#1d1d1d] to-[#101010] p-4">
                <div className="mb-3 h-56 rounded-[18px] bg-[linear-gradient(135deg,rgba(209,31,47,0.22),rgba(255,255,255,0.02)),linear-gradient(180deg,#1a1a1a_0%,#0f0f0f_100%)]" />

                <h3 className="text-2xl font-bold">RED VELOCITY</h3>
                <p className="mt-2 text-sm leading-6 text-white/65">
                  제한 시간 24시간. 도시는 봉쇄됐고, 타겟은 사라졌다.
                  단 하나의 단서만 남은 밤, 끝까지 질주해야 한다.
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-sm text-white/60">
                  <span>Episode 01-08</span>
                  <span>4K · Dolby Atmos</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-2xl font-bold">큐레이션</h2>
            <button className="text-sm text-white/50 transition hover:text-white/80">
              전체 보기
            </button>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {actionCollections.map((item) => (
              <div
                key={item}
                className="group rounded-[22px] border border-white/10 bg-[#111111] p-5 transition hover:border-[#d11f2f]/30 hover:bg-[#151515]"
              >
                <div className="mb-4 h-28 rounded-[16px] bg-[linear-gradient(135deg,rgba(209,31,47,0.18),rgba(255,255,255,0.02)),#171717]" />
                <p className="text-lg font-semibold">{item}</p>
                <p className="mt-2 text-sm leading-6 text-white/55">
                  액션 특유의 긴장감과 몰입감을 중심으로 선별한 테마 컬렉션입니다.
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-2xl font-bold">추천 작품</h2>
            <button className="text-sm text-white/50 transition hover:text-white/80">
              더 보기
            </button>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {featuredWorks.map((work) => (
              <article
                key={work.title}
                className="group overflow-hidden rounded-[24px] border border-white/10 bg-[#111111] transition duration-300 hover:-translate-y-1 hover:border-[#d11f2f]/35"
              >
                <div className="relative h-[320px] bg-[linear-gradient(180deg,rgba(209,31,47,0.20),rgba(255,255,255,0.02)),linear-gradient(135deg,#202020_0%,#111111_100%)]">
                  <span className="absolute left-4 top-4 rounded-full bg-[#d11f2f] px-3 py-1 text-xs font-bold text-white">
                    {work.tag}
                  </span>
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/70 to-transparent" />
                </div>

                <div className="p-5">
                  <p className="text-xs uppercase tracking-[0.18em] text-[#ff7c87]">
                    {work.genre}
                  </p>
                  <h3 className="mt-2 text-xl font-bold">{work.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/60">
                    {work.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[24px] border border-white/10 bg-[#101010] p-6">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-xl font-bold">실시간 랭킹</h2>
              <span className="text-sm text-white/45">오늘 기준</span>
            </div>

            <div className="space-y-3">
              {rankingWorks.map((title, index) => (
                <div
                  key={title}
                  className="flex items-center justify-between rounded-[18px] border border-white/8 bg-white/[0.03] px-4 py-4"
                >
                  <div className="flex items-center gap-4">
                    <span className="w-7 text-lg font-extrabold text-[#d11f2f]">
                      {index + 1}
                    </span>
                    <span className="font-medium text-white/90">{title}</span>
                  </div>
                  <span className="text-sm text-white/45">Action</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[24px] border border-white/10 bg-[linear-gradient(135deg,#141414_0%,#0d0d0d_100%)] p-6">
            <h2 className="text-xl font-bold">시안 3 디자인 포인트</h2>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div className="rounded-[18px] border border-white/8 bg-white/[0.03] p-4">
                <p className="text-sm font-semibold text-[#ff7b86]">색감</p>
                <p className="mt-2 text-sm leading-6 text-white/65">
                  블랙과 차콜을 중심으로 깔고, 딥레드를 한 번씩 강하게 넣어
                  액션관 분위기를 살렸습니다.
                </p>
              </div>

              <div className="rounded-[18px] border border-white/8 bg-white/[0.03] p-4">
                <p className="text-sm font-semibold text-[#ff7b86]">무드</p>
                <p className="mt-2 text-sm leading-6 text-white/65">
                  네온 클럽보다는 프리미엄 영화관에 가깝게, 조용하지만 긴장감 있는
                  인상을 주도록 구성했습니다.
                </p>
              </div>

              <div className="rounded-[18px] border border-white/8 bg-white/[0.03] p-4">
                <p className="text-sm font-semibold text-[#ff7b86]">카드 구조</p>
                <p className="mt-2 text-sm leading-6 text-white/65">
                  카드마다 빨강을 다 쓰지 않고 hover 또는 뱃지 중심으로만 포인트를
                  넣어서 정돈된 느낌을 유지했습니다.
                </p>
              </div>

              <div className="rounded-[18px] border border-white/8 bg-white/[0.03] p-4">
                <p className="text-sm font-semibold text-[#ff7b86]">브랜드성</p>
                <p className="mt-2 text-sm leading-6 text-white/65">
                  시네마틱한 무드를 유지하면서도 OTT 서비스 메인다운 구조감이
                  살아있도록 설계했습니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer className="mt-14 border-t border-[#d11f2f]/20 py-8 text-sm text-white/40">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p>ACTION+ OTT Concept 03</p>
            <p>Dark · Red · Premium Action Mood</p>
          </div>
        </footer>
      </div>
    </main>
  );
}