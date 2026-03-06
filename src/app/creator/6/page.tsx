import Image from "next/image";
import Link from "next/link";

export default function CreatorPage6() {
  const quickMenu = [
    "세계관 중심축",
    "마법 시스템",
    "정령/종족",
    "차원문 구조",
    "환경 톤",
    "공개 설정",
  ];

  const worldPanels = [
    {
      title: "정령 에너지 흐름",
      desc: "세계 안에서 빛과 정령, 자연 에너지가 어떻게 순환하는지 정리하는 패널.",
      color: "green",
    },
    {
      title: "차원문 활성 조건",
      desc: "언제 열리고 누가 통과할 수 있는지, 차원의 규칙과 연결 구조를 설계하는 패널.",
      color: "purple",
    },
    {
      title: "세계 분위기 톤",
      desc: "초록, 파랑, 보라의 균형과 장면별 빛의 감도를 조절하는 패널.",
      color: "blue",
    },
  ];

  const visualCards = [
    {
      title: "숲과 생태 설계",
      desc: "빛나는 식생, 물결치는 공기, 정령의 흔적이 남는 자연 세계 설계.",
      image: "/images/img9.jpg",
    },
    {
      title: "차원과 공간 설정",
      desc: "겹쳐지는 하늘, 다층 구조의 포털, 이동 가능한 차원 공간 기획.",
      image: "/images/img10.jpg",
    },
    {
      title: "마법과 종족 구조",
      desc: "마법의 분류와 종족 간 에너지 관계를 연결하는 세계관 구조 설계.",
      image: "/images/img11.jpg",
    },
  ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f3fbff] text-[#2d3553]">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#f8fdff_0%,#f0fbff_28%,#eef5ff_58%,#f5efff_100%)]" />
        <div className="absolute left-[-110px] top-[-80px] h-[340px] w-[340px] rounded-full bg-[#62efbe]/28 blur-[120px]" />
        <div className="absolute right-[-90px] top-[10px] h-[320px] w-[320px] rounded-full bg-[#7a7cff]/24 blur-[120px]" />
        <div className="absolute bottom-[-90px] left-[16%] h-[280px] w-[280px] rounded-full bg-[#5bd2ff]/24 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 py-8 md:px-8 lg:px-10">
        <div className="mb-8 flex items-center justify-between border-b border-[#d5e9f8] pb-5">
          <Link
            href="/"
            className="rounded-full border border-[#dcecf7] bg-white/70 px-4 py-2 text-sm font-medium text-[#60729b] transition hover:bg-white"
          >
            ← 홈
          </Link>

          <Link
            href="/ott/6"
            className="rounded-full bg-[linear-gradient(135deg,#55e0b0,#57b6ff,#9778ff)] px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(103,147,255,0.25)] transition hover:brightness-110"
          >
            OTT 시안 6 보기 →
          </Link>
        </div>

        <section className="mb-10 grid gap-6 xl:grid-cols-[1.08fr_0.92fr]">
          <div className="rounded-[38px] border border-white/65 bg-white/38 p-7 shadow-[0_24px_70px_rgba(122,144,209,0.16)] backdrop-blur-xl">
            <p className="text-xs font-bold uppercase tracking-[0.34em] text-[#4ebd9c]">
              Fantasy Creator Studio
            </p>

            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-[#314065] sm:text-5xl">
              세계관을 설계하는
              <br />
              빛나는 작업실
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#6b7598] sm:text-base">
              이번 작가 페이지는 어두운 제어실보다 더 밝고 화려한 판타지 스튜디오로 바꿨어.
              마법, 정령, 종족, 차원 구조를 설계하는 공간이지만,
              전체적으로는 신비롭고 몽환적이고 오묘한 공기감이 흐르도록 잡았어.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <button className="rounded-full bg-[linear-gradient(135deg,#55e0b0,#57b6ff)] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(87,182,255,0.22)] transition hover:brightness-110">
                새 세계 만들기
              </button>
              <button className="rounded-full border border-white/65 bg-white/70 px-5 py-3 text-sm font-medium text-[#62749d] transition hover:bg-white">
                포털 맵 열기
              </button>
              <button className="rounded-full border border-[#9a84ff]/30 bg-[#9a84ff]/12 px-5 py-3 text-sm font-medium text-[#7b67d8] transition hover:bg-[#9a84ff]/18">
                마법 규칙 편집
              </button>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[24px] border border-white/65 bg-[linear-gradient(135deg,rgba(98,239,190,0.18),rgba(255,255,255,0.45))] p-4">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#4ebd9c]">
                  Active Worlds
                </p>
                <p className="mt-3 text-4xl font-extrabold text-[#314065]">08</p>
                <p className="mt-2 text-sm text-[#6b7598]">활성화된 세계관 수</p>
              </div>

              <div className="rounded-[24px] border border-white/65 bg-[linear-gradient(135deg,rgba(87,182,255,0.18),rgba(255,255,255,0.45))] p-4">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#4f92ff]">
                  Magic Types
                </p>
                <p className="mt-3 text-4xl font-extrabold text-[#314065]">17</p>
                <p className="mt-2 text-sm text-[#6b7598]">등록된 마법 구조</p>
              </div>

              <div className="rounded-[24px] border border-white/65 bg-[linear-gradient(135deg,rgba(151,120,255,0.18),rgba(255,255,255,0.45))] p-4">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8167ff]">
                  Spirit Links
                </p>
                <p className="mt-3 text-4xl font-extrabold text-[#314065]">12</p>
                <p className="mt-2 text-sm text-[#6b7598]">정령 연결 수</p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[38px] border border-white/65 bg-white/35 shadow-[0_24px_70px_rgba(122,144,209,0.16)] backdrop-blur-xl">
            <div className="relative min-h-[560px]">
              <Image
                src="/images/img10.jpg"
                alt="fantasy creator main"
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(to-top,rgba(246,250,255,0.26)_10%,rgba(255,255,255,0.00)_55%,rgba(255,255,255,0.08)_100%)]" />

              <div className="absolute left-5 top-5 rounded-full border border-white/70 bg-white/45 px-4 py-2 text-xs font-bold uppercase tracking-[0.26em] text-[#4ebd9c] backdrop-blur-md">
                World Design Deck
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-7">
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#8167ff]">
                  Active Project
                </p>
                <h2 className="mt-3 text-4xl font-extrabold text-[#314065]">
                  The Living Realm
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-7 text-[#667493]">
                  살아 있는 숲과 빛의 흐름, 차원문과 정령 구조를 함께 설계하는 현재 작업 중인 대표 세계관.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 xl:grid-cols-[280px_1fr]">
          <aside className="space-y-5">
            <div className="rounded-[30px] border border-white/65 bg-white/40 p-4 shadow-[0_18px_40px_rgba(122,144,209,0.12)] backdrop-blur-xl">
              <div className="space-y-2">
                {quickMenu.map((item, index) => (
                  <button
                    key={item}
                    className={`flex w-full items-center justify-between rounded-[18px] px-4 py-3 text-left text-sm font-medium transition ${
                      index === 0
                        ? "bg-[linear-gradient(135deg,rgba(98,239,190,0.18),rgba(87,182,255,0.16))] text-[#314065]"
                        : "bg-white/35 text-[#6b7598] hover:bg-white/60 hover:text-[#314065]"
                    }`}
                  >
                    <span>{item}</span>
                    {index === 0 && <span className="text-[#4ebd9c]">●</span>}
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-[30px] border border-white/65 bg-white/40 p-5 shadow-[0_18px_40px_rgba(122,144,209,0.12)] backdrop-blur-xl">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8167ff]">
                Studio Energy
              </p>
              <p className="mt-3 text-5xl font-extrabold text-[#314065]">95</p>
              <p className="mt-2 text-sm text-[#6b7598]">현재 판타지 에너지 강도</p>
              <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-white/60">
                <div className="h-full w-[95%] rounded-full bg-[linear-gradient(90deg,#55e0b0,#57b6ff,#9778ff)]" />
              </div>
            </div>
          </aside>

          <div className="space-y-6">
            <div className="grid gap-5 lg:grid-cols-3">
              {worldPanels.map((panel) => (
                <div
                  key={panel.title}
                  className={`rounded-[30px] border border-white/65 p-6 shadow-[0_18px_40px_rgba(122,144,209,0.12)] backdrop-blur-xl ${
                    panel.color === "green"
                      ? "bg-[linear-gradient(135deg,rgba(98,239,190,0.18),rgba(255,255,255,0.48))]"
                      : panel.color === "purple"
                      ? "bg-[linear-gradient(135deg,rgba(151,120,255,0.18),rgba(255,255,255,0.48))]"
                      : "bg-[linear-gradient(135deg,rgba(87,182,255,0.18),rgba(255,255,255,0.48))]"
                  }`}
                >
                  <h3 className="text-2xl font-extrabold text-[#314065]">{panel.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#6b7598]">{panel.desc}</p>
                </div>
              ))}
            </div>

            <div>
              <div className="mb-5 flex items-end justify-between">
                <h2 className="text-3xl font-extrabold text-[#314065]">
                  판타지 제작 패널
                </h2>
                <span className="text-sm font-medium text-[#7280a0]">3 panels</span>
              </div>

              <div className="grid gap-5 lg:grid-cols-3">
                {visualCards.map((card, index) => (
                  <article
                    key={card.title}
                    className={`overflow-hidden rounded-[32px] border border-white/65 shadow-[0_20px_45px_rgba(122,144,209,0.14)] backdrop-blur-xl ${
                      index === 0
                        ? "bg-[linear-gradient(135deg,rgba(98,239,190,0.16),rgba(255,255,255,0.38))]"
                        : index === 1
                        ? "bg-[linear-gradient(135deg,rgba(87,182,255,0.16),rgba(255,255,255,0.38))]"
                        : "bg-[linear-gradient(135deg,rgba(151,120,255,0.16),rgba(255,255,255,0.38))]"
                    }`}
                  >
                    <div className="relative h-[240px]">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(to-top,rgba(255,255,255,0.20)_10%,rgba(255,255,255,0.00)_52%,rgba(255,255,255,0.08)_100%)]" />
                    </div>

                    <div className="p-6">
                      <h3 className="text-2xl font-extrabold text-[#314065]">
                        {card.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-[#6b7598]">{card.desc}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}