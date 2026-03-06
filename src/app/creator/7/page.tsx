import Image from "next/image";
import Link from "next/link";

export default function CreatorPage7() {
  const controlMenu = [
    "세계관 구조",
    "도시 구역",
    "실험 기술",
    "AI/종족",
    "타임라인",
    "공개 설정",
  ];

  const labPanels = [
    {
      title: "도시 구조 설계",
      desc: "수직 도시, 고층 구역, 교통 레이어, 하층/상층 문명 분리를 설계하는 패널.",
      color: "cyan",
    },
    {
      title: "과학 기술 체계",
      desc: "실험실, 생체 기술, 데이터 장치, 에너지 코어의 규칙을 구성하는 패널.",
      color: "blue",
    },
    {
      title: "네온 인터페이스 톤",
      desc: "홀로그램 UI, HUD 라인, 유리 질감과 조명 표현을 조절하는 패널.",
      color: "purple",
    },
  ];

  const studioCards = [
    {
      title: "도시 구역 제어",
      desc: "미래도시의 상업 구역, 연구 지구, 하층 구역, 궤도 연결 포인트를 나누는 패널.",
      image: "/images/img12.jpg",
    },
    {
      title: "실험실 시스템",
      desc: "유리 실험실, AI 코어, 캡슐 룸, 연구 프로토콜 같은 과학적 구조를 정리하는 패널.",
      image: "/images/img13.jpg",
    },
    {
      title: "우주 신호와 항로",
      desc: "도시 밖으로 확장되는 궤도와 항로, 외부 문명과 연결되는 신호망을 설계하는 패널.",
      image: "/images/img14.jpg",
    },
  ];

  const quickActions = [
    "새 SF 프로젝트 시작",
    "도시 구역 추가",
    "기술 문명 편집",
    "HUD 인터페이스 설정",
  ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050b14] text-white">
      {/* background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#050912_0%,#08111b_36%,#0a1020_62%,#0c0d24_100%)]" />
        <div className="absolute left-[-110px] top-[-80px] h-[320px] w-[320px] rounded-full bg-[#00d1ff]/16 blur-[120px]" />
        <div className="absolute right-[-90px] top-[10px] h-[320px] w-[320px] rounded-full bg-[#8b5dff]/16 blur-[120px]" />
        <div className="absolute bottom-[-100px] left-[18%] h-[280px] w-[280px] rounded-full bg-[#00ffa8]/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 py-8 md:px-8 lg:px-10">
        {/* nav */}
        <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-5">
          <Link
            href="/"
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/75 transition hover:bg-white/10 hover:text-white"
          >
            ← 홈
          </Link>

          <Link
            href="/ott/7"
            className="rounded-full bg-[linear-gradient(135deg,#00d1ff,#4d7cff,#965dff)] px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(77,124,255,0.28)] transition hover:brightness-110"
          >
            OTT 시안 7 보기 →
          </Link>
        </div>

        {/* futuristic lab console */}
        <section className="mb-10 grid gap-6 xl:grid-cols-[320px_1fr]">
          {/* left rail */}
          <aside className="space-y-5">
            <div className="rounded-[32px] border border-white/10 bg-white/[0.05] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.30)] backdrop-blur-md">
              <p className="text-xs font-bold uppercase tracking-[0.30em] text-[#82ebff]">
                SF Creator Lab
              </p>
              <h1 className="mt-3 text-3xl font-extrabold leading-tight text-white">
                미래 세계를
                <br />
                조립하는 컨트롤 랩
              </h1>
              <p className="mt-4 text-sm leading-7 text-white/58">
                이번 작가 페이지는 대시보드가 아니라 SF 세계관을 조립하는 실험실 콘솔처럼 보이게 잡았어.
                도시, 과학, 유리, 네온, 우주 확장을 각각 제어하는 느낌으로 구성했어.
              </p>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/[0.05] p-4 shadow-[0_18px_45px_rgba(0,0,0,0.26)] backdrop-blur-md">
              <div className="space-y-2">
                {controlMenu.map((item, index) => (
                  <button
                    key={item}
                    className={`flex w-full items-center justify-between rounded-[18px] px-4 py-3 text-left text-sm font-medium transition ${
                      index === 0
                        ? "bg-[linear-gradient(135deg,rgba(0,209,255,0.14),rgba(77,124,255,0.12))] text-white"
                        : "bg-transparent text-white/62 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <span>{item}</span>
                    {index === 0 && <span className="text-[#7fe9ff]">●</span>}
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(135deg,rgba(0,209,255,0.12),rgba(150,93,255,0.08),rgba(255,255,255,0.02))] p-5 shadow-[0_18px_45px_rgba(0,0,0,0.24)] backdrop-blur-md">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#d3c6ff]">
                Lab Energy
              </p>
              <p className="mt-3 text-5xl font-extrabold text-white">96</p>
              <p className="mt-2 text-sm text-white/56">현재 SF 시스템 활성도</p>
              <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[96%] rounded-full bg-[linear-gradient(90deg,#00d1ff,#4d7cff,#965dff)]" />
              </div>
            </div>
          </aside>

          {/* right workspace */}
          <div className="space-y-6">
            {/* top hero console */}
            <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
              <div className="overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.05] shadow-[0_22px_55px_rgba(0,0,0,0.28)] backdrop-blur-md">
                <div className="relative min-h-[470px]">
                  <Image
                    src="/images/img13.jpg"
                    alt="sf creator main"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1280px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(6,12,22,0.84)_10%,rgba(6,12,22,0.18)_50%,rgba(255,255,255,0)_100%)]" />

                  <div className="absolute left-5 top-5 rounded-full border border-[#00d1ff]/25 bg-[#00d1ff]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.26em] text-[#82ebff] backdrop-blur-sm">
                    World Control Deck
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-7">
                    <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d2c5ff]">
                      Active Project
                    </p>
                    <h2 className="mt-3 text-4xl font-extrabold text-white">
                      Neon Axis City
                    </h2>
                    <p className="mt-4 max-w-2xl text-sm leading-7 text-white/68">
                      수직 도시, 유리 연구소, 네온 간판, 우주 항로가 한 세계 안에서 이어지는 현재 작업 중인 대표 SF 프로젝트.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-5">
                <div className="rounded-[30px] border border-white/10 bg-[linear-gradient(135deg,rgba(0,209,255,0.12),rgba(255,255,255,0.02))] p-5 shadow-[0_18px_45px_rgba(0,0,0,0.24)] backdrop-blur-md">
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#84e9ff]">
                    System Status
                  </p>
                  <div className="mt-4 space-y-3">
                    <div className="rounded-[18px] border border-white/8 bg-white/[0.03] px-4 py-4">
                      <p className="text-sm font-semibold text-white">도시 구역 12개 활성</p>
                      <p className="mt-2 text-sm text-white/55">상층/하층/궤도 구역 연결 완료</p>
                    </div>
                    <div className="rounded-[18px] border border-white/8 bg-white/[0.03] px-4 py-4">
                      <p className="text-sm font-semibold text-white">과학 기술 분류 8개</p>
                      <p className="mt-2 text-sm text-white/55">생체, 에너지, AI, 수송 기술 포함</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-[30px] border border-white/10 bg-[linear-gradient(135deg,rgba(150,93,255,0.14),rgba(255,255,255,0.02))] p-5 shadow-[0_18px_45px_rgba(0,0,0,0.24)] backdrop-blur-md">
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#d2c5ff]">
                    Quick Commands
                  </p>
                  <div className="mt-4 flex flex-col gap-3">
                    {quickActions.map((item) => (
                      <button
                        key={item}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 text-left text-sm font-medium text-white/78 transition hover:bg-white/10 hover:text-white"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* mid panels */}
            <div className="grid gap-5 lg:grid-cols-3">
              {labPanels.map((panel) => (
                <div
                  key={panel.title}
                  className={`rounded-[30px] border border-white/10 p-6 shadow-[0_18px_40px_rgba(0,0,0,0.22)] backdrop-blur-md ${
                    panel.color === "cyan"
                      ? "bg-[linear-gradient(135deg,rgba(0,209,255,0.12),rgba(255,255,255,0.02))]"
                      : panel.color === "blue"
                      ? "bg-[linear-gradient(135deg,rgba(77,124,255,0.12),rgba(255,255,255,0.02))]"
                      : "bg-[linear-gradient(135deg,rgba(150,93,255,0.14),rgba(255,255,255,0.02))]"
                  }`}
                >
                  <h3 className="text-2xl font-extrabold text-white">{panel.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/58">{panel.desc}</p>
                </div>
              ))}
            </div>

            {/* bottom panels */}
            <div>
              <div className="mb-5 flex items-end justify-between">
                <h2 className="text-3xl font-extrabold text-white">
                  SF 제작 패널
                </h2>
                <span className="text-sm text-white/42">3 modules</span>
              </div>

              <div className="grid gap-5 xl:grid-cols-3">
                {studioCards.map((card, index) => (
                  <article
                    key={card.title}
                    className={`overflow-hidden rounded-[32px] border border-white/10 shadow-[0_20px_45px_rgba(0,0,0,0.24)] backdrop-blur-md ${
                      index === 0
                        ? "bg-[linear-gradient(135deg,rgba(0,209,255,0.10),rgba(255,255,255,0.02))]"
                        : index === 1
                        ? "bg-[linear-gradient(135deg,rgba(77,124,255,0.10),rgba(255,255,255,0.02))]"
                        : "bg-[linear-gradient(135deg,rgba(150,93,255,0.12),rgba(255,255,255,0.02))]"
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
                      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(6,12,22,0.72)_10%,rgba(6,12,22,0.08)_52%,rgba(255,255,255,0)_100%)]" />
                    </div>

                    <div className="p-6">
                      <h3 className="text-2xl font-extrabold text-white">
                        {card.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-white/58">{card.desc}</p>
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