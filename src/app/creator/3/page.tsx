export default function CreatorPage3() {
  const stats = [
    { label: "총 작품 수", value: "12", sub: "이번 달 +2" },
    { label: "총 조회수", value: "1.28M", sub: "전주 대비 +8.4%" },
    { label: "관심 등록", value: "24.6K", sub: "오늘 +431" },
    { label: "업로드 완료", value: "84 EP", sub: "예약 업로드 3건" },
  ];

  const works = [
    {
      title: "Crimson Shadow",
      status: "연재중",
      visibility: "공개",
      episode: "EP 18",
      updatedAt: "2026.03.06",
    },
    {
      title: "Trigger Room",
      status: "검수중",
      visibility: "비공개",
      episode: "EP 04",
      updatedAt: "2026.03.05",
    },
    {
      title: "District No.7",
      status: "연재중",
      visibility: "공개",
      episode: "EP 27",
      updatedAt: "2026.03.03",
    },
    {
      title: "Red Manual",
      status: "휴재",
      visibility: "공개",
      episode: "EP 12",
      updatedAt: "2026.02.28",
    },
  ];

  const recentActivity = [
    "신규 에피소드 예약 업로드가 완료되었습니다.",
    "대표 썸네일 변경 사항이 반영되었습니다.",
    "작품 통계 리포트가 업데이트되었습니다.",
    "댓글 신고 검토 항목이 2건 있습니다.",
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="flex min-h-screen">
        <aside className="hidden w-[270px] shrink-0 border-r border-white/10 bg-[#0d0d0d] px-6 py-8 lg:block">
          <div className="mb-10">
            <p className="text-2xl font-extrabold tracking-[0.18em] text-[#d11f2f]">
              STUDIO RED
            </p>
            <p className="mt-3 text-sm leading-6 text-white/45">
              액션 세계관을 유지하면서도, 창작과 관리에 집중할 수 있도록 만든
              시안 3 작가 페이지입니다.
            </p>
          </div>

          <nav className="space-y-2">
            <button className="flex w-full items-center justify-between rounded-[16px] bg-[#d11f2f]/12 px-4 py-3 text-left text-sm font-semibold text-white">
              <span>대시보드</span>
              <span className="text-[#ff8892]">●</span>
            </button>

            <button className="flex w-full items-center rounded-[16px] px-4 py-3 text-left text-sm text-white/65 transition hover:bg-white/5 hover:text-white">
              작품 관리
            </button>

            <button className="flex w-full items-center rounded-[16px] px-4 py-3 text-left text-sm text-white/65 transition hover:bg-white/5 hover:text-white">
              에피소드
            </button>

            <button className="flex w-full items-center rounded-[16px] px-4 py-3 text-left text-sm text-white/65 transition hover:bg-white/5 hover:text-white">
              통계
            </button>

            <button className="flex w-full items-center rounded-[16px] px-4 py-3 text-left text-sm text-white/65 transition hover:bg-white/5 hover:text-white">
              정산
            </button>

            <button className="flex w-full items-center rounded-[16px] px-4 py-3 text-left text-sm text-white/65 transition hover:bg-white/5 hover:text-white">
              설정
            </button>
          </nav>

          <div className="mt-10 rounded-[22px] border border-white/10 bg-[linear-gradient(135deg,rgba(209,31,47,0.14),rgba(255,255,255,0.02))] p-5">
            <p className="text-sm font-semibold text-[#ff7e89]">Quick Upload</p>
            <p className="mt-2 text-sm leading-6 text-white/55">
              새 작품 등록, 썸네일 교체, 예약 업로드를 빠르게 진행할 수 있는
              전용 영역입니다.
            </p>
            <button className="mt-5 w-full rounded-full bg-[#d11f2f] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#b91c2b]">
              새 작품 업로드
            </button>
          </div>
        </aside>

        <section className="flex-1 px-5 py-6 md:px-8 lg:px-10">
          <header className="mb-8 flex flex-col gap-4 border-b border-white/10 pb-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-[#ff7d88]">
                Creator Concept 03
              </p>
              <h1 className="mt-2 text-3xl font-extrabold md:text-4xl">
                Red Action Studio Dashboard
              </h1>
              <p className="mt-3 text-sm leading-6 text-white/55">
                OTT 시안 3의 무드를 이어받되, 더 차분하고 실무적인 구조로 정리한
                작가 전용 관리 페이지입니다.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button className="rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white/80 transition hover:bg-white/10">
                미리보기
              </button>
              <button className="rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white/80 transition hover:bg-white/10">
                통계 보기
              </button>
              <button className="rounded-full bg-[#d11f2f] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#b91c2b]">
                업로드하기
              </button>
            </div>
          </header>

          <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-[22px] border border-white/10 bg-[#111111] p-5"
              >
                <p className="text-sm text-white/50">{item.label}</p>
                <p className="mt-3 text-3xl font-extrabold">{item.value}</p>
                <p className="mt-2 text-sm text-[#ff7d88]">{item.sub}</p>
              </div>
            ))}
          </section>

          <section className="mt-8 grid gap-5 xl:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-[26px] border border-white/10 bg-[#101010] p-6">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold">내 작품 관리</h2>
                  <p className="mt-1 text-sm text-white/45">
                    현재 등록된 작품과 진행 상태를 한눈에 확인할 수 있습니다.
                  </p>
                </div>

                <button className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10">
                  전체 보기
                </button>
              </div>

              <div className="space-y-4">
                {works.map((work) => (
                  <article
                    key={work.title}
                    className="grid gap-4 rounded-[20px] border border-white/8 bg-white/[0.03] p-4 md:grid-cols-[88px_1fr_auto]"
                  >
                    <div className="h-[110px] rounded-[16px] bg-[linear-gradient(135deg,rgba(209,31,47,0.20),rgba(255,255,255,0.02)),#171717]" />

                    <div className="flex flex-col justify-center">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-lg font-bold">{work.title}</h3>
                        <span
                          className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                            work.status === "연재중"
                              ? "bg-[#d11f2f]/15 text-[#ff8691]"
                              : work.status === "검수중"
                              ? "bg-yellow-500/15 text-yellow-300"
                              : "bg-white/10 text-white/65"
                          }`}
                        >
                          {work.status}
                        </span>

                        <span className="rounded-full bg-white/8 px-2.5 py-1 text-xs text-white/65">
                          {work.visibility}
                        </span>
                      </div>

                      <div className="mt-3 flex flex-wrap gap-4 text-sm text-white/50">
                        <span>{work.episode}</span>
                        <span>최종 수정일 {work.updatedAt}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 md:flex-col">
                      <button className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10">
                        수정
                      </button>
                      <button className="rounded-full bg-[#d11f2f] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#b91c2b]">
                        관리
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <div className="rounded-[26px] border border-white/10 bg-[linear-gradient(135deg,#141414_0%,#0e0e0e_100%)] p-6">
                <div className="mb-5 flex items-center justify-between">
                  <h2 className="text-xl font-bold">최근 활동</h2>
                  <span className="text-sm text-white/40">실시간 반영</span>
                </div>

                <div className="space-y-3">
                  {recentActivity.map((item) => (
                    <div
                      key={item}
                      className="rounded-[18px] border border-white/8 bg-white/[0.03] px-4 py-4"
                    >
                      <p className="text-sm leading-6 text-white/70">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[26px] border border-white/10 bg-[#101010] p-6">
                <h2 className="text-xl font-bold">시안 3 작가 페이지 포인트</h2>

                <div className="mt-5 space-y-4">
                  <div className="rounded-[18px] border border-white/8 bg-white/[0.03] p-4">
                    <p className="text-sm font-semibold text-[#ff7d88]">OTT와의 통일감</p>
                    <p className="mt-2 text-sm leading-6 text-white/60">
                      같은 블랙/레드 세계관을 유지하지만, 감상 중심이 아닌 관리
                      중심 화면이므로 더 정돈된 밀도로 구성했습니다.
                    </p>
                  </div>

                  <div className="rounded-[18px] border border-white/8 bg-white/[0.03] p-4">
                    <p className="text-sm font-semibold text-[#ff7d88]">실무적 UI</p>
                    <p className="mt-2 text-sm leading-6 text-white/60">
                      카드, 리스트, 상태 뱃지, CTA 버튼 중심으로 구성해서 실제
                      창작자 대시보드처럼 보이게 만들었습니다.
                    </p>
                  </div>

                  <div className="rounded-[18px] border border-white/8 bg-white/[0.03] p-4">
                    <p className="text-sm font-semibold text-[#ff7d88]">과한 장식 최소화</p>
                    <p className="mt-2 text-sm leading-6 text-white/60">
                      레드 색상을 전면 사용하지 않고, 선택 상태와 핵심 액션에서만
                      사용해서 너무 화려해 보이지 않도록 제어했습니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}