import Link from "next/link";

export default function Page() {
  const steps = [
    { k: "STEP 1", t: "원고 업로드", d: "웹툰/웹소설 원고를 프로젝트로 생성" },
    { k: "STEP 2", t: "장면 분리", d: "컷/문단을 장면 단위로 자동 분리" },
    { k: "STEP 3", t: "보이스 가이드", d: "대사 기반 타이밍/톤 추천" },
    { k: "STEP 4", t: "모션 스타일", d: "표정/카메라/연출 프리셋 선택" },
    { k: "STEP 5", t: "미리보기 렌더", d: "짧은 프리뷰로 결과 확인" },
    { k: "STEP 6", t: "배포", d: "OTT 공개/링크 공유/피드백 수집" },
  ];

  const quickActions = [
    { t: "새 프로젝트 만들기", d: "원고 업로드부터 바로 시작" },
    { t: "스토리보드 자동 생성", d: "컷 분할 → 구성 제안" },
    { t: "캐릭터 표정셋 생성", d: "감정선 기반 표정 프리셋" },
    { t: "예고편 자동 편집", d: "하이라이트 컷을 자동 편집" },
  ];

  function Chip({ children }: { children: React.ReactNode }) {
    return (
      <span className="inline-flex items-center rounded-full border border-[#d4b26b]/35 bg-[#d4b26b]/10 px-3 py-1 text-xs font-medium text-[#f4e6c0]">
        {children}
      </span>
    );
  }

  return (
    <main className="min-h-screen text-white">
      {/* Same palette as OTT 1 */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#4a0f26_0%,#12070c_45%,#07060a_100%)]" />
        <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:30px_30px]" />
        <div className="absolute -top-36 left-24 h-[520px] w-[520px] rounded-full bg-[#d4b26b]/12 blur-[90px]" />
        <div className="absolute -bottom-52 right-[-120px] h-[620px] w-[620px] rounded-full bg-[#8a2b55]/22 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-6xl px-5 py-8">
        {/* Top nav */}
        <div className="mb-7 flex items-center justify-between">
          <Link
            href="/"
            className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 hover:border-white/25 hover:bg-white/10"
          >
            ← 홈
          </Link>
          <Link
            href="/ott/1"
            className="rounded-full border border-[#d4b26b]/35 bg-[#d4b26b]/10 px-4 py-2 text-sm text-[#f4e6c0] hover:bg-[#d4b26b]/15"
          >
            OTT 시안 1 보기 →
          </Link>
        </div>

        {/* Header */}
        <header className="mb-10 rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <div className="mb-3 flex flex-wrap gap-2">
            <Chip>CREATOR WORKBENCH</Chip>
            <Chip>AI ANIMATION PIPELINE</Chip>
            <Chip>PREMIUM</Chip>
          </div>
          <h1 className="text-3xl font-semibold sm:text-5xl">
            작가 시안 1 · Cinematic Premium 제작실
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-white/70 sm:text-base">
            OTT 1번과 같은 브랜드 톤(와인/골드/극장조명)을 유지하면서,
            내용은 “작가가 실제로 제작하는 화면” 중심으로 구성했어.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <button className="rounded-full bg-[#d4b26b] px-5 py-3 text-sm font-semibold text-[#1a0c10] hover:brightness-105">
              새 프로젝트 만들기
            </button>
            <button className="rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white hover:bg-white/15">
              샘플 프로젝트 열기
            </button>
            <button className="rounded-full border border-white/15 bg-black/10 px-5 py-3 text-sm text-white/85 hover:border-white/25">
              가이드 보기
            </button>
          </div>
        </header>

        {/* Two-column: pipeline + stats */}
        <section className="mb-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
            <div className="mb-5 flex items-end justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-white/55">
                  Pipeline
                </p>
                <h2 className="mt-2 text-2xl font-semibold">제작 파이프라인</h2>
              </div>
              <span className="text-sm text-white/55">6 steps</span>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {steps.map((s) => (
                <div
                  key={s.k}
                  className="rounded-[22px] border border-white/10 bg-white/5 p-4 hover:border-white/20"
                >
                  <p className="text-xs uppercase tracking-[0.22em] text-white/55">
                    {s.k}
                  </p>
                  <p className="mt-2 text-lg font-semibold">{s.t}</p>
                  <p className="mt-2 text-sm text-white/65">{s.d}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[24px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.24em] text-white/55">
                Projects
              </p>
              <p className="mt-2 text-3xl font-semibold">12</p>
              <p className="mt-2 text-sm text-white/65">진행 중 프로젝트</p>
              <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[58%] rounded-full bg-[#d4b26b]/70" />
              </div>
            </div>

            <div className="rounded-[24px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.24em] text-white/55">
                Render Queue
              </p>
              <p className="mt-2 text-3xl font-semibold">09</p>
              <p className="mt-2 text-sm text-white/65">렌더 대기열</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Chip>Priority</Chip>
                <Chip>Night Render</Chip>
                <Chip>Auto Cut</Chip>
              </div>
            </div>

            <div className="rounded-[24px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.24em] text-white/55">
                Release
              </p>
              <p className="mt-2 text-2xl font-semibold">Next 공개: 2일 후</p>
              <p className="mt-2 text-sm text-white/65">
                배포까지 이어지는 “작가 동선”을 강조한 구조
              </p>
            </div>
          </div>
        </section>

        {/* Quick actions */}
        <section className="pb-10">
          <div className="mb-4 flex items-end justify-between">
            <h2 className="text-xl font-semibold">빠른 시작</h2>
            <span className="text-sm text-white/55">Quick actions</span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {quickActions.map((a) => (
              <div
                key={a.t}
                className="rounded-[22px] border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:border-white/25 hover:bg-white/7"
              >
                <p className="text-lg font-semibold">{a.t}</p>
                <p className="mt-2 text-sm text-white/65">{a.d}</p>
                <button className="mt-4 rounded-full border border-[#d4b26b]/35 bg-[#d4b26b]/10 px-4 py-2 text-sm text-[#f4e6c0] hover:bg-[#d4b26b]/15">
                  시작 →
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}