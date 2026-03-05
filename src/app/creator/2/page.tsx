import Link from "next/link";
import type { ReactNode } from "react";

export default function Page() {
  const steps = [
    { step: "STEP 1", title: "작품 올리기", desc: "웹툰/웹소설 원고를 귀엽고 쉬운 흐름으로 업로드" },
    { step: "STEP 2", title: "분위기 선택", desc: "러블리, 청량, 소녀감성 같은 무드 프리셋 선택" },
    { step: "STEP 3", title: "캐릭터 연출", desc: "표정/톤/말투를 예쁘게 정리" },
    { step: "STEP 4", title: "미리보기 만들기", desc: "짧은 티저나 프리뷰 자동 생성" },
    { step: "STEP 5", title: "표지 꾸미기", desc: "썸네일과 소개문구를 감성적으로 구성" },
    { step: "STEP 6", title: "공개하기", desc: "팬 반응 받고 작품 페이지 공유" },
  ];

  const quickCards = [
    { title: "새 작품 시작", desc: "처음부터 러블리한 프로젝트 만들기" },
    { title: "표정셋 만들기", desc: "감정선에 맞는 캐릭터 표정 프리셋" },
    { title: "티저 자동 편집", desc: "짧고 예쁜 예고편 바로 생성" },
    { title: "팬 공개 페이지", desc: "작품 소개를 예쁘게 꾸며서 공개" },
  ];

  function Chip({ children }: { children: ReactNode }) {
    return (
      <span className="inline-flex items-center rounded-full border border-[#f7bfd6] bg-white/75 px-3 py-1 text-xs font-semibold text-[#c76790] shadow-sm">
        {children}
      </span>
    );
  }

  return (
    <main className="min-h-screen text-[#6f4b67]">
      {/* background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#fff8fc_0%,#fff4f7_20%,#fff7ef_48%,#eef9ff_100%)]" />
        <div className="absolute left-[-80px] top-[-100px] h-[320px] w-[320px] rounded-full bg-[#ffd8ec] blur-[70px]" />
        <div className="absolute right-[-60px] top-[80px] h-[280px] w-[280px] rounded-full bg-[#dff4ff] blur-[70px]" />
        <div className="absolute bottom-[-100px] left-[18%] h-[300px] w-[300px] rounded-full bg-[#fff1b8] blur-[90px]" />
        <div className="absolute bottom-[-80px] right-[12%] h-[320px] w-[320px] rounded-full bg-[#e7dcff] blur-[90px]" />
      </div>

      <div className="mx-auto max-w-6xl px-5 py-8">
        {/* nav */}
        <div className="mb-7 flex items-center justify-between">
          <Link
            href="/"
            className="rounded-full border border-[#f5d4e1] bg-white/80 px-4 py-2 text-sm font-medium text-[#b46b89] shadow-sm transition hover:bg-white"
          >
            ← 홈
          </Link>

          <Link
            href="/ott/2"
            className="rounded-full border border-[#f6bfd8] bg-[#fff0f7] px-4 py-2 text-sm font-medium text-[#c76790] shadow-sm transition hover:bg-[#ffe8f3]"
          >
            OTT 시안 2 보기 →
          </Link>
        </div>

        {/* header */}
        <header className="mb-10 rounded-[34px] border border-[#ffe0eb] bg-white/82 p-6 shadow-[0_24px_60px_rgba(255,192,218,0.18)] backdrop-blur-xl">
          <div className="mb-3 flex flex-wrap gap-2">
            <Chip>CREATOR STUDIO</Chip>
            <Chip>PRETTY & EASY</Chip>
            <Chip>PASTEL MOOD</Chip>
          </div>

          <h1 className="text-3xl font-extrabold text-[#6f4b67] sm:text-5xl">
            작가 시안 2 · Bright Lovely Studio
          </h1>

          <p className="mt-4 max-w-3xl text-sm leading-6 text-[#8f7186] sm:text-base">
            OTT 2와 같은 파스텔 톤을 공유하는 작가 페이지.
            대시보드가 차갑고 어려운 느낌이 아니라,
            <span className="font-bold text-[#c76790]"> 예쁘고 쉬워 보여서 만들고 싶어지는 화면 </span>
            으로 잡았어.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <button className="rounded-full bg-[linear-gradient(135deg,#ff9cc3,#ffc7df)] px-5 py-3 text-sm font-bold text-white shadow-[0_12px_24px_rgba(255,160,200,0.35)] transition hover:brightness-105">
              새 작품 만들기
            </button>
            <button className="rounded-full border border-[#f6c8da] bg-white/80 px-5 py-3 text-sm font-medium text-[#bb7391] transition hover:bg-white">
              샘플 프로젝트 보기
            </button>
            <button className="rounded-full border border-[#dcecff] bg-[#f4fbff] px-5 py-3 text-sm font-medium text-[#78a7c5] transition hover:bg-white">
              가이드 보기
            </button>
          </div>
        </header>

        {/* main grid */}
        <section className="mb-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[30px] border border-[#ffe0eb] bg-white/82 p-5 shadow-[0_20px_50px_rgba(255,192,218,0.16)]">
            <div className="mb-5 flex items-end justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#cf89a7]">
                  Workflow
                </p>
                <h2 className="mt-2 text-2xl font-extrabold text-[#6f4b67]">
                  예쁘고 쉬운 제작 흐름
                </h2>
              </div>
              <span className="text-sm font-medium text-[#be8aa3]">6 steps</span>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {steps.map((item, index) => (
                <div
                  key={item.step}
                  className={`rounded-[24px] border p-4 transition hover:-translate-y-0.5 ${
                    index % 3 === 0
                      ? "border-[#ffd9e7] bg-[#fff8fc]"
                      : index % 3 === 1
                      ? "border-[#ffecc6] bg-[#fffaf1]"
                      : "border-[#dceeff] bg-[#f4fbff]"
                  }`}
                >
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#c28aa3]">
                    {item.step}
                  </p>
                  <p className="mt-2 text-lg font-extrabold text-[#6f4b67]">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#91798a]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[26px] border border-[#ffe0eb] bg-white/82 p-5 shadow-[0_18px_40px_rgba(255,186,211,0.18)]">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#cf89a7]">
                Current Project
              </p>
              <p className="mt-2 text-3xl font-extrabold text-[#6f4b67]">04</p>
              <p className="mt-2 text-sm text-[#9a7f91]">지금 진행 중인 작품</p>
              <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-[#ffeaf2]">
                <div className="h-full w-[64%] rounded-full bg-[linear-gradient(90deg,#ff9cc3,#ffd5e5)]" />
              </div>
            </div>

            <div className="rounded-[26px] border border-[#ddecff] bg-[#f5fbff] p-5 shadow-[0_18px_40px_rgba(191,224,255,0.18)]">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#6fa9ca]">
                Preview
              </p>
              <p className="mt-2 text-2xl font-extrabold text-[#557c94]">미리보기 준비 완료</p>
              <p className="mt-2 text-sm text-[#7898ab]">
                티저 만들기나 썸네일 꾸미기에 잘 맞는 톤
              </p>
            </div>

            <div className="rounded-[26px] border border-[#ffe8c8] bg-[#fffaf0] p-5 shadow-[0_18px_40px_rgba(255,221,165,0.18)]">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#d0a160]">
                Brand Mood
              </p>
              <p className="mt-2 text-2xl font-extrabold text-[#7f6658]">Cute / Easy / Lovely</p>
              <p className="mt-2 text-sm text-[#a28b80]">
                차가운 툴보다 친근하고 여성스럽고 예쁜 제작실
              </p>
            </div>
          </div>
        </section>

        {/* quick actions */}
        <section className="pb-10">
          <div className="mb-4 flex items-end justify-between">
            <h2 className="text-xl font-extrabold text-[#7b5770]">빠른 시작</h2>
            <span className="text-sm font-medium text-[#be8aa3]">Quick actions</span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {quickCards.map((item, index) => (
              <div
                key={item.title}
                className={`rounded-[26px] border p-5 shadow-sm transition hover:-translate-y-1 ${
                  index % 3 === 0
                    ? "border-[#ffd9e7] bg-[#fff8fc]"
                    : index % 3 === 1
                    ? "border-[#ffecc6] bg-[#fffaf1]"
                    : "border-[#dceeff] bg-[#f4fbff]"
                }`}
              >
                <p className="text-lg font-extrabold text-[#6f4b67]">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-[#91798a]">{item.desc}</p>

                <button className="mt-4 rounded-full border border-[#f6bfd8] bg-white/75 px-4 py-2 text-sm font-semibold text-[#c76790] transition hover:bg-white">
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