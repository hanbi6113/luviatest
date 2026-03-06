import Image from "next/image";
import Link from "next/link";

export default function OttPage7() {
  const spectrumTags = [
    "미래도시",
    "AI 문명",
    "우주 항로",
    "실험 구역",
    "디스토피아",
    "네온 인터페이스",
  ];

  const cityCards = [
    {
      title: "Neo District 9",
      sub: "수직 도시와 네온 구역",
      image: "/images/img12.jpg",
    },
    {
      title: "Glass Core Lab",
      sub: "유리 실험 구역과 AI 시설",
      image: "/images/img13.jpg",
    },
    {
      title: "Orbit Signal",
      sub: "도시 상공을 가르는 우주 신호",
      image: "/images/img14.jpg",
    },
  ];

  const infoPanels = [
    {
      label: "CITY FEED",
      title: "지금 가장 강한 SF 세계",
      text: "미래도시, 네온 인터페이스, 인공 문명과 우주적 확장이 한 번에 느껴지는 SF 큐레이션.",
    },
    {
      label: "SCIENCE GRID",
      title: "과학과 실험이 중심이 되는 작품",
      text: "연구시설, 생체 기술, 유리 실험실, 차세대 장치가 핵심 무드로 작동하는 SF 작품들.",
    },
    {
      label: "COSMIC ACCESS",
      title: "도시 너머까지 확장되는 서사",
      text: "지상 도시만이 아니라 궤도, 항로, 신호망까지 이어지는 대형 SF 세계관 모음.",
    },
  ];

  const ranking = [
    "Quantum Street",
    "Axiom Sector",
    "Blue Chamber",
    "Signal 14",
    "Nova Line",
  ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#060b14] text-white">
      {/* background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#050912_0%,#07101a_32%,#09111f_58%,#0c0d24_100%)]" />
        <div className="absolute left-[-110px] top-[-90px] h-[320px] w-[320px] rounded-full bg-[#00d1ff]/20 blur-[120px]" />
        <div className="absolute right-[-100px] top-[20px] h-[340px] w-[340px] rounded-full bg-[#8b5dff]/20 blur-[120px]" />
        <div className="absolute bottom-[-120px] left-[18%] h-[320px] w-[320px] rounded-full bg-[#00ffa8]/12 blur-[120px]" />
        <div className="absolute bottom-[-100px] right-[12%] h-[320px] w-[320px] rounded-full bg-[#ff4fd8]/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 py-8 md:px-8 lg:px-10">
        {/* top nav */}
        <header className="mb-8 flex items-center justify-between border-b border-white/10 pb-5">
          <Link
            href="/"
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/75 transition hover:bg-white/10 hover:text-white"
          >
            ← 홈
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            <a href="#" className="text-sm text-white/65 transition hover:text-white">
              홈
            </a>
            <a href="#" className="text-sm text-white/65 transition hover:text-white">
              SF
            </a>
            <a href="#" className="text-sm text-white/65 transition hover:text-white">
              미래도시
            </a>
            <a href="#" className="text-sm text-white/65 transition hover:text-white">
              AI
            </a>
            <a href="#" className="text-sm text-white/65 transition hover:text-white">
              우주
            </a>
          </div>

          <Link
            href="/creator/7"
            className="rounded-full bg-[linear-gradient(135deg,#00d1ff,#4d7cff,#965dff)] px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(77,124,255,0.28)] transition hover:brightness-110"
          >
            작가 시안 7 보기 →
          </Link>
        </header>

        {/* main futuristic command stage */}
        <section className="relative mb-14 overflow-hidden rounded-[40px] border border-white/15 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_28px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl md:p-7">
          <div className="grid gap-6 xl:grid-cols-[1.08fr_0.92fr]">
            {/* left main zone */}
            <div className="relative min-h-[700px] overflow-hidden rounded-[34px] border border-white/15 bg-[#0a1220] shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_24px_60px_rgba(0,0,0,0.24)]">
              <div className="absolute inset-0">
                <Image
                  src="/images/img12.jpg"
                  alt="sf city main"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 100vw, 58vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(6,12,22,0.82)_8%,rgba(6,12,22,0.28)_40%,rgba(6,12,22,0.12)_100%)]" />
              </div>

              {/* floating HUD top */}
              <div className="absolute left-5 top-5 flex flex-wrap gap-3">
                <div className="rounded-full border border-[#00d1ff]/35 bg-[linear-gradient(135deg,rgba(255,255,255,0.10),rgba(0,209,255,0.08))] px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-[#7ee8ff] shadow-[inset_0_1px_0_rgba(255,255,255,0.20)] backdrop-blur-xl">
                  SF Zone · Concept 07
                </div>
                <div className="rounded-full border border-[#8b5dff]/35 bg-[linear-gradient(135deg,rgba(255,255,255,0.10),rgba(139,93,255,0.08))] px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-[#d7c9ff] shadow-[inset_0_1px_0_rgba(255,255,255,0.20)] backdrop-blur-xl">
                  Hyper Future Access
                </div>
              </div>

              {/* hero content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10">
                <p className="text-xs font-bold uppercase tracking-[0.34em] text-[#84e9ff]">
                  FUTURE CITY STREAM
                </p>

                <h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-[1.02] text-white sm:text-5xl lg:text-6xl">
                  유리와 네온,
                  <br />
                  과학과 도시가 겹쳐진 SF존
                </h1>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/72 sm:text-base">
                  미래도시, 실험실, 홀로그램 인터페이스, 우주적 확장감을 전부 섞어서
                  가장 화려하고 미래적인 SF 메인으로 잡았어.
                  도시를 보는 느낌이면서 동시에 시스템 속으로 접속하는 느낌이 들도록 구성했어.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <button className="rounded-full bg-[linear-gradient(135deg,#00d1ff,#4d7cff)] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(77,124,255,0.28)] transition hover:brightness-110">
                    접속 시작
                  </button>
                  <button className="rounded-full border border-white/20 bg-[linear-gradient(135deg,rgba(255,255,255,0.10),rgba(255,255,255,0.03))] px-5 py-3 text-sm font-medium text-white/85 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-xl transition hover:bg-white/10">
                    예고편 보기
                  </button>
                  <button className="rounded-full border border-[#8b5dff]/30 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(139,93,255,0.08))] px-5 py-3 text-sm font-medium text-[#d5c7ff] shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-xl transition hover:bg-[#8b5dff]/15">
                    세계관 저장
                  </button>
                </div>

                <div className="mt-7 flex flex-wrap gap-2">
                  {spectrumTags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/15 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] px-3 py-1.5 text-xs font-medium text-white/72 shadow-[inset_0_1px_0_rgba(255,255,255,0.16)] backdrop-blur-xl"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* floating data windows - fully transparent */}
              <div className="absolute right-5 top-24 w-[220px] rounded-[24px] border border-white/20 bg-transparent p-4 shadow-[0_10px_30px_rgba(0,0,0,0.20)]">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#88ebff]">
                  System Load
                </p>
                <p className="mt-3 text-4xl font-extrabold text-white">94%</p>
                <p className="mt-2 text-sm text-white/56">도시 신호 활성도</p>
              </div>

              <div className="absolute left-6 top-[130px] w-[180px] rounded-[22px] border border-white/20 bg-transparent p-4 shadow-[0_10px_30px_rgba(0,0,0,0.20)]">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#cebfff]">
                  Glass Lab
                </p>
                <p className="mt-2 text-sm leading-6 text-white/62">
                  생체 연구와 AI 실험이 동시에 작동하는 중심 구역
                </p>
              </div>
            </div>

            {/* right futuristic board */}
            <div className="grid gap-5">
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-1">
                <div className="overflow-hidden rounded-[30px] border border-white/18 bg-[linear-gradient(135deg,rgba(255,255,255,0.09),rgba(255,255,255,0.02))] shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_18px_45px_rgba(0,0,0,0.22)] backdrop-blur-xl">
                  <div className="relative h-[260px]">
                    <Image
                      src="/images/img13.jpg"
                      alt="sf lab"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1280px) 100vw, 30vw"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(6,12,22,0.70)_10%,rgba(6,12,22,0.10)_52%,rgba(255,255,255,0)_100%)]" />
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.26em] text-[#84e9ff]">
                      Science Zone
                    </p>
                    <h2 className="mt-2 text-2xl font-extrabold text-white">
                      유리 실험 구역의 SF 무드
                    </h2>
                  </div>
                </div>

                <div className="rounded-[30px] border border-white/18 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(0,209,255,0.06),rgba(139,93,255,0.05))] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_18px_45px_rgba(0,0,0,0.20)] backdrop-blur-xl">
                  <p className="text-xs font-bold uppercase tracking-[0.26em] text-[#d1c4ff]">
                    Future Mix
                  </p>
                  <p className="mt-3 text-3xl font-extrabold text-white">
                    City / Lab / Orbit / Neon
                  </p>
                  <p className="mt-3 text-sm leading-7 text-white/58">
                    미래도시, 과학 실험실, 우주 신호, 네온 인터페이스를 한 화면 안에서 섞은 시안 구조.
                  </p>
                </div>
              </div>

              <div className="rounded-[30px] border border-white/18 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.20),0_18px_45px_rgba(0,0,0,0.22)] backdrop-blur-xl">
                <div className="mb-5 flex items-center justify-between">
                  <h3 className="text-2xl font-extrabold text-white">실시간 SF 순위</h3>
                  <span className="text-sm text-white/40">Today</span>
                </div>

                <div className="space-y-3">
                  {ranking.map((item, index) => (
                    <div
                      key={item}
                      className="flex items-center justify-between rounded-[18px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.14)] backdrop-blur-xl"
                    >
                      <div className="flex items-center gap-4">
                        <span className="w-7 text-lg font-extrabold text-[#63cfff]">
                          {index + 1}
                        </span>
                        <span className="font-medium text-white/90">{item}</span>
                      </div>
                      <span className="text-sm text-white/40">SF</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* futuristic cards row */}
        <section className="mb-14">
          <div className="mb-5 flex items-end justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#84e9ff]">
                Hyper Visual Selection
              </p>
              <h2 className="mt-2 text-3xl font-extrabold text-white">
                미래 구역별 큐레이션
              </h2>
            </div>
            <span className="text-sm font-medium text-white/42">3 sectors</span>
          </div>

          <div className="grid gap-5 xl:grid-cols-[1fr_0.9fr_1.05fr]">
            {cityCards.map((card, index) => (
              <article
                key={card.title}
                className={`overflow-hidden rounded-[32px] border border-white/18 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_20px_50px_rgba(0,0,0,0.22)] backdrop-blur-xl ${
                  index === 1 ? "xl:translate-y-8" : index === 2 ? "xl:-translate-y-4" : ""
                }`}
              >
                <div className={`relative ${index === 0 ? "h-[360px]" : "h-[300px]"}`}>
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1280px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(6,12,22,0.72)_10%,rgba(6,12,22,0.10)_52%,rgba(255,255,255,0)_100%)]" />
                </div>

                <div className="p-6">
                  <p
                    className={`text-sm font-semibold ${
                      index === 0
                        ? "text-[#84e9ff]"
                        : index === 1
                        ? "text-[#a9d8ff]"
                        : "text-[#d2c4ff]"
                    }`}
                  >
                    {card.sub}
                  </p>
                  <h3 className="mt-2 text-2xl font-extrabold text-white">
                    {card.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* new bottom layout */}
        <section className="space-y-5">
          {/* wide hero glass panel */}
          <div className="overflow-hidden rounded-[34px] border border-white/18 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] shadow-[inset_0_1px_0_rgba(255,255,255,0.20),0_20px_55px_rgba(0,0,0,0.24)] backdrop-blur-xl">
            <div className="relative min-h-[420px]">
              <Image
                src="/images/img14.jpg"
                alt="sf final visual"
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(5,11,20,0.82)_10%,rgba(5,11,20,0.14)_50%,rgba(255,255,255,0)_100%)]" />

              <div className="absolute bottom-0 left-0 right-0 p-7">
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d1c4ff]">
                  Final Future Mood
                </p>
                <h2 className="mt-3 text-4xl font-extrabold text-white">
                  SF는 차갑기만 한 게 아니라
                  <br />
                  가장 화려할 수도 있어
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/66">
                  시안 7은 미래도시, 과학적 유리질감, 실험실 무드, 네온 인터페이스를 모두 섞어서
                  가장 하이엔드한 SF존으로 구성했어.
                </p>
              </div>
            </div>
          </div>

          {/* 3 info panels */}
          <div className="grid gap-5 lg:grid-cols-3">
            {infoPanels.map((panel, index) => (
              <div
                key={panel.title}
                className={`rounded-[30px] border border-white/18 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.20),0_18px_40px_rgba(0,0,0,0.20)] backdrop-blur-xl ${
                  index === 0
                    ? "bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(0,209,255,0.06))]"
                    : index === 1
                    ? "bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(77,124,255,0.06))]"
                    : "bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(150,93,255,0.08))]"
                }`}
              >
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-white/72">
                  {panel.label}
                </p>
                <h3 className="mt-3 text-2xl font-extrabold text-white">
                  {panel.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/58">{panel.text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}