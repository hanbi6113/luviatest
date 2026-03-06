import Image from "next/image";
import Link from "next/link";

export default function OttPage9() {
  const quickGenres = [
    "로맨스",
    "액션",
    "공포",
    "판타지",
    "SF",
    "키즈",
    "미스터리",
    "청춘",
  ];

  const trendingCards = [
    { title: "별의 심해", sub: "프리미엄 · 서사", image: "/images/img1.jpg" },
    { title: "솜사탕 별나라", sub: "로판 · 감성", image: "/images/img2.jpg" },
    { title: "액션 블레이드", sub: "액션 · 전투", image: "/images/img3.jpg" },
    { title: "사랑의 잔상", sub: "멜로 · 로맨스", image: "/images/img4.jpg" },
  ];

  const fantasyCards = [
    { title: "심야 복도", sub: "공포 · 스릴러", image: "/images/img5.jpg" },
    { title: "정령의 숲", sub: "판타지 · 모험", image: "/images/img9.jpg" },
    { title: "네온 시티", sub: "SF · 미래도시", image: "/images/img12.jpg" },
    { title: "반짝 놀이터", sub: "키즈 · 유아", image: "/images/img15.jpg" },
  ];

  const editorPicks = [
    {
      title: "유리숲 연대기",
      desc: "무드가 강한 작품부터 대중적인 장르물까지, 지금 메인에서 가장 먼저 보여주기 좋은 대표작.",
      image: "/images/img10.jpg",
      label: "Editor Pick",
    },
    {
      title: "Glass Core Lab",
      desc: "장르 톤이 확실한 작품들을 메인에서 분리해 보여주기 좋은 비주얼 중심 큐레이션.",
      image: "/images/img13.jpg",
      label: "Visual Pick",
    },
  ];

  const mixedRows = [
    {
      title: "지금 많이 보는 작품",
      items: [
        { name: "Moonlight Letter", img: "/images/img11.jpg" },
        { name: "Orbit Signal", img: "/images/img14.jpg" },
        { name: "토끼 우체국", img: "/images/img16.jpg" },
        { name: "반짝별 놀이터", img: "/images/img17.jpg" },
      ],
    },
    {
      title: "장르별 추천 시작점",
      items: [
        { name: "로맨스 시작", img: "/images/img2.jpg" },
        { name: "공포 시작", img: "/images/img6.jpg" },
        { name: "판타지 시작", img: "/images/img9.jpg" },
        { name: "SF 시작", img: "/images/img12.jpg" },
      ],
    },
  ];

  function MiniPoster({
    title,
    sub,
    image,
  }: {
    title: string;
    sub: string;
    image: string;
  }) {
    return (
      <article className="group overflow-hidden rounded-[26px] border border-[#ebe7f1] bg-white shadow-[0_14px_34px_rgba(30,30,50,0.06)] transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(30,30,50,0.10)]">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition duration-300 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 25vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(255,255,255,0.18)_8%,rgba(255,255,255,0.00)_45%,rgba(255,255,255,0.08)_100%)]" />
        </div>

        <div className="p-4">
          <h3 className="text-base font-bold text-[#2f2d38]">{title}</h3>
          <p className="mt-1 text-sm text-[#777385]">{sub}</p>
        </div>
      </article>
    );
  }

  return (
    <main className="min-h-screen bg-white text-[#2f2d38]">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#fbfbfd_42%,#f8f8fc_100%)]" />
        <div className="absolute left-[-80px] top-[-80px] h-[260px] w-[260px] rounded-full bg-[#ffd7e8]/45 blur-[85px]" />
        <div className="absolute right-[-70px] top-[40px] h-[280px] w-[280px] rounded-full bg-[#dff4ff]/55 blur-[95px]" />
        <div className="absolute bottom-[-100px] left-[12%] h-[260px] w-[260px] rounded-full bg-[#efe2ff]/45 blur-[90px]" />
        <div className="absolute bottom-[-90px] right-[10%] h-[280px] w-[280px] rounded-full bg-[#fff0c7]/50 blur-[95px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 py-8 md:px-8 lg:px-10">
        <header className="mb-8 flex items-center justify-between border-b border-[#ece8f3] pb-5">
          <Link
            href="/"
            className="rounded-full border border-[#e7e1ee] bg-white px-4 py-2 text-sm font-medium text-[#6f6a7b] shadow-sm transition hover:bg-[#fafafe]"
          >
            ← 홈
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            <a href="#" className="text-sm font-medium text-[#7b7589] transition hover:text-[#2f2d38]">
              홈
            </a>
            <a href="#" className="text-sm font-medium text-[#7b7589] transition hover:text-[#2f2d38]">
              전체
            </a>
            <a href="#" className="text-sm font-medium text-[#7b7589] transition hover:text-[#2f2d38]">
              인기작
            </a>
            <a href="#" className="text-sm font-medium text-[#7b7589] transition hover:text-[#2f2d38]">
              신작
            </a>
            <a href="#" className="text-sm font-medium text-[#7b7589] transition hover:text-[#2f2d38]">
              장르
            </a>
          </div>

          <Link
            href="/creator/9"
            className="rounded-full bg-[#1f1d25] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#15131a]"
          >
            작가 시안 9 보기 →
          </Link>
        </header>

        <section className="mb-12 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="overflow-hidden rounded-[34px] border border-[#ebe7f1] bg-white p-5 shadow-[0_20px_50px_rgba(20,20,40,0.06)]">
            <div className="relative min-h-[500px] overflow-hidden rounded-[28px] border border-[#efebf5]">
              <Image
                src="/images/img7.jpg"
                alt="ott main hero"
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 58vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(255,255,255,0.96)_10%,rgba(255,255,255,0.28)_48%,rgba(255,255,255,0.04)_100%)]" />

              <div className="absolute left-5 top-5 flex flex-wrap gap-2">
                <span className="rounded-full border border-[#ebe4f5] bg-white/85 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#7b6f97] shadow-sm">
                  OTT Main
                </span>
                <span className="rounded-full border border-[#f2d7e4] bg-[#fff8fb] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#c56e8f] shadow-sm">
                  Concept 09
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.30em] text-[#8f84a8]">
                  ALL GENRE MAIN HUB
                </p>

                <h1 className="mt-3 max-w-3xl text-4xl font-extrabold leading-[1.05] text-[#2f2d38] sm:text-5xl">
                  모든 장르가 한곳에 모인
                  <br />
                  OTT 메인 홈
                </h1>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-[#736f81] sm:text-base">
                  로맨스, 액션, 공포, 판타지, SF, 키즈까지 전부 섞어서
                  실제 서비스의 첫 화면처럼 구성한 종합 OTT 메인 시안이야.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <button className="rounded-full bg-[#2f2d38] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1f1d25]">
                    지금 탐색하기
                  </button>
                  <button className="rounded-full border border-[#e3deeb] bg-white px-5 py-3 text-sm font-medium text-[#6b6578] transition hover:bg-[#fafafe]">
                    인기작 보기
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {quickGenres.map((genre) => (
                <span
                  key={genre}
                  className="rounded-full border border-[#ebe7f1] bg-white px-4 py-2 text-xs font-medium text-[#7c768b] shadow-sm"
                >
                  {genre}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            <div className="rounded-[28px] border border-[#ebe7f1] bg-white p-5 shadow-[0_16px_38px_rgba(20,20,40,0.05)]">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8d86a0]">
                Main Mood
              </p>
              <p className="mt-3 text-3xl font-extrabold text-[#2f2d38]">
                Clean / Bright / Mixed
              </p>
              <p className="mt-3 text-sm leading-7 text-[#757082]">
                특정 장르 하나보다, 서비스 첫 화면처럼 여러 장르를 자연스럽게 섞어 보여주는 구조.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-1">
              <div className="overflow-hidden rounded-[28px] border border-[#ebe7f1] bg-white shadow-[0_16px_38px_rgba(20,20,40,0.05)]">
                <div className="relative h-[220px]">
                  <Image
                    src="/images/img11.jpg"
                    alt="editor visual"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1280px) 100vw, 30vw"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8f84a8]">
                    Mixed Curation
                  </p>
                  <h2 className="mt-2 text-2xl font-extrabold text-[#2f2d38]">
                    장르가 섞여도 메인은 정리돼야 해
                  </h2>
                </div>
              </div>

              <div className="rounded-[28px] border border-[#ebe7f1] bg-white p-5 shadow-[0_16px_38px_rgba(20,20,40,0.05)]">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8f84a8]">
                  Genre Access
                </p>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {["로맨스", "액션", "공포", "판타지", "SF", "키즈"].map((item) => (
                    <div
                      key={item}
                      className="rounded-[18px] border border-[#efebf5] bg-[#fafafe] px-4 py-3 text-sm font-semibold text-[#655f73]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="mb-5 flex items-end justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#8f84a8]">
                Trending Now
              </p>
              <h2 className="mt-2 text-3xl font-extrabold text-[#2f2d38]">
                지금 많이 보는 작품
              </h2>
            </div>
            <span className="text-sm font-medium text-[#8a8498]">See all →</span>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {trendingCards.map((item) => (
              <MiniPoster key={item.title} {...item} />
            ))}
          </div>
        </section>

        <section className="mb-12 grid gap-6 xl:grid-cols-2">
          {editorPicks.map((item) => (
            <article
              key={item.title}
              className="grid overflow-hidden rounded-[30px] border border-[#ebe7f1] bg-white shadow-[0_18px_42px_rgba(20,20,40,0.05)] md:grid-cols-[0.9fr_1.1fr]"
            >
              <div className="relative min-h-[260px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>

              <div className="flex flex-col justify-center p-7">
                <p className="text-xs font-bold uppercase tracking-[0.26em] text-[#9a90b0]">
                  {item.label}
                </p>
                <h3 className="mt-3 text-3xl font-extrabold text-[#2f2d38]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#767183]">{item.desc}</p>
                <div className="mt-6">
                  <button className="rounded-full border border-[#e4deec] bg-[#fafafe] px-5 py-2.5 text-sm font-semibold text-[#666071] transition hover:bg-white">
                    자세히 보기
                  </button>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="mb-12">
          <div className="mb-5 flex items-end justify-between">
            <h2 className="text-3xl font-extrabold text-[#2f2d38]">
              장르별 추천 모아보기
            </h2>
            <span className="text-sm font-medium text-[#8a8498]">Mixed rows</span>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {fantasyCards.map((item) => (
              <MiniPoster key={item.title} {...item} />
            ))}
          </div>
        </section>

        <section className="pb-10 space-y-10">
          {mixedRows.map((row) => (
            <div key={row.title}>
              <div className="mb-5 flex items-end justify-between">
                <h2 className="text-2xl font-extrabold text-[#2f2d38]">{row.title}</h2>
                <span className="text-sm font-medium text-[#8a8498]">More →</span>
              </div>

              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                {row.items.map((item) => (
                  <article
                    key={item.name}
                    className="overflow-hidden rounded-[26px] border border-[#ebe7f1] bg-white shadow-[0_14px_34px_rgba(20,20,40,0.05)] transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(20,20,40,0.08)]"
                  >
                    <div className="relative aspect-[16/10]">
                      <Image
                        src={item.img}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 25vw"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-base font-bold text-[#2f2d38]">{item.name}</h3>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}