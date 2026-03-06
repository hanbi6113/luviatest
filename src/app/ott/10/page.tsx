import Image from "next/image";
import Link from "next/link";

export default function OttPage10() {
  const genres = [
    "전체",
    "로맨스",
    "액션",
    "공포",
    "판타지",
    "SF",
    "키즈",
    "미스터리",
  ];

  const heroCards = [
    {
      title: "별의 심해",
      sub: "Premium",
      desc: "고급 서사와 강한 몰입감",
      image: "/images/img1.jpg",
    },
    {
      title: "유리숲 연대기",
      sub: "Fantasy",
      desc: "감성과 세계관이 강한 판타지",
      image: "/images/img2.jpg",
    },
    {
      title: "네온 블러드",
      sub: "SF Action",
      desc: "도시형 SF 액션의 시작점",
      image: "/images/img3.jpg",
    },
    {
      title: "Moonlight Letter",
      sub: "Melodrama",
      desc: "잔잔한 감정선이 오래 남는 멜로",
      image: "/images/img11.jpg",
    },
  ];

  const continueWatching = [
    {
      title: "사랑의 잔상",
      desc: "조용한 멜로의 여운",
      image: "/images/img4.jpg",
    },
    {
      title: "심야 복도",
      desc: "긴장감이 계속 이어지는 공포",
      image: "/images/img5.jpg",
    },
    {
      title: "달 아래의 기사",
      desc: "서사 중심의 로맨스",
      image: "/images/img6.jpg",
    },
    {
      title: "When Love Stays",
      desc: "감정의 결이 선명한 작품",
      image: "/images/img7.jpg",
    },
    {
      title: "Glass Core Lab",
      desc: "유리 질감의 미래형 비주얼",
      image: "/images/img13.jpg",
    },
    {
      title: "Orbit Signal",
      desc: "우주 신호와 도시가 겹친 SF",
      image: "/images/img14.jpg",
    },
  ];

  const editorsLarge = [
    {
      title: "정령의 숲",
      sub: "Fantasy",
      desc: "밝고 신비로운 판타지 비주얼",
      image: "/images/img9.jpg",
      size: "large",
    },
    {
      title: "Blue Rift",
      sub: "Mystic",
      desc: "색감이 강한 미스틱 무드",
      image: "/images/img11.jpg",
      size: "small",
    },
    {
      title: "Glass Core Lab",
      sub: "Future",
      desc: "유리 질감의 미래형 비주얼",
      image: "/images/img13.jpg",
      size: "small",
    },
    {
      title: "Orbit Signal",
      sub: "Sci-Fi",
      desc: "우주 신호와 도시가 겹친 SF",
      image: "/images/img14.jpg",
      size: "wide",
    },
  ];

  const ranking = [
    {
      rank: "01",
      title: "Moonlight Letter",
      desc: "감정선 중심 멜로",
      image: "/images/img10.jpg",
    },
    {
      rank: "02",
      title: "Neon Axis",
      desc: "미래도시 SF",
      image: "/images/img12.jpg",
    },
    {
      rank: "03",
      title: "말랑 구름 마을",
      desc: "유아용 키즈 스토리",
      image: "/images/img15.jpg",
    },
    {
      rank: "04",
      title: "토끼 우체국",
      desc: "밝고 귀여운 키즈물",
      image: "/images/img16.jpg",
    },
    {
      rank: "05",
      title: "반짝별 놀이터",
      desc: "노래와 놀이 중심",
      image: "/images/img17.jpg",
    },
  ];

  const shelves = [
    {
      title: "오늘의 메인 큐레이션",
      items: [
        {
          name: "유리숲 연대기",
          sub: "판타지",
          desc: "감성과 모험이 함께 있는 작품",
          image: "/images/img2.jpg",
        },
        {
          name: "네온 블러드",
          sub: "SF",
          desc: "빠른 전개와 미래도시 액션",
          image: "/images/img3.jpg",
        },
        {
          name: "사랑의 잔상",
          sub: "멜로",
          desc: "잔잔한 감정선이 남는 이야기",
          image: "/images/img4.jpg",
        },
        {
          name: "심야 복도",
          sub: "공포",
          desc: "어두운 긴장감이 이어지는 작품",
          image: "/images/img5.jpg",
        },
      ],
    },
    {
      title: "장르 시작점",
      items: [
        {
          name: "달 아래의 기사",
          sub: "로맨스",
          desc: "서사형 로맨스 입문작",
          image: "/images/img6.jpg",
        },
        {
          name: "정령의 숲",
          sub: "판타지",
          desc: "신비로운 판타지 시작점",
          image: "/images/img10.jpg",
        },
        {
          name: "Glass Core Lab",
          sub: "SF",
          desc: "미래형 세계관의 출발점",
          image: "/images/img13.jpg",
        },
        {
          name: "토끼 우체국",
          sub: "키즈",
          desc: "귀엽고 쉬운 키즈 시작점",
          image: "/images/img16.jpg",
        },
      ],
    },
    {
      title: "비주얼 강한 작품",
      items: [
        {
          name: "When Love Stays",
          sub: "Romance",
          desc: "무드가 강한 멜로 비주얼",
          image: "/images/img7.jpg",
        },
        {
          name: "Blue Rift",
          sub: "Fantasy",
          desc: "색감이 강한 판타지 화면",
          image: "/images/img11.jpg",
        },
        {
          name: "Orbit Signal",
          sub: "Sci-Fi",
          desc: "우주와 신호가 중심인 SF",
          image: "/images/img14.jpg",
        },
        {
          name: "반짝별 놀이터",
          sub: "Kids",
          desc: "밝고 경쾌한 키즈 비주얼",
          image: "/images/img17.jpg",
        },
      ],
    },
  ];

  function SmallPoster({
    title,
    sub,
    desc,
    image,
  }: {
    title: string;
    sub: string;
    desc: string;
    image: string;
  }) {
    return (
      <article className="group overflow-hidden rounded-[20px] border border-[#ebe7f1] bg-white shadow-[0_8px_18px_rgba(25,25,45,0.05)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(25,25,45,0.08)]">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition duration-300 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, 25vw"
          />
        </div>

        <div className="p-2.5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#918aa1]">
            {sub}
          </p>
          <h3 className="mt-1 text-sm font-bold leading-5 text-[#2f2d38]">{title}</h3>
          <p className="mt-0.5 text-[11px] leading-4 text-[#7e788e]">{desc}</p>
        </div>
      </article>
    );
  }

  return (
    <main className="min-h-screen bg-white text-[#2f2d38]">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#fbfbfd_44%,#f7f7fb_100%)]" />
        <div className="absolute left-[-100px] top-[-80px] h-[280px] w-[280px] rounded-full bg-[#ffe3ec]/48 blur-[95px]" />
        <div className="absolute right-[-80px] top-[40px] h-[320px] w-[320px] rounded-full bg-[#e2f5ff]/56 blur-[110px]" />
        <div className="absolute bottom-[-120px] left-[12%] h-[280px] w-[280px] rounded-full bg-[#eee3ff]/44 blur-[100px]" />
        <div className="absolute bottom-[-100px] right-[8%] h-[300px] w-[300px] rounded-full bg-[#fff2cc]/54 blur-[105px]" />
      </div>

      <div className="mx-auto max-w-7xl px-3 py-4 md:px-4 lg:px-5">
        <header className="mb-3 flex items-center justify-between border-b border-[#ece8f3] pb-2">
          <Link
            href="/"
            className="rounded-full border border-[#e7e1ee] bg-white px-3 py-1 text-sm font-medium text-[#6f6a7b] shadow-sm transition hover:bg-[#fafafe]"
          >
            ← 홈
          </Link>

          <div className="hidden items-center gap-3 md:flex">
            {genres.map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm font-medium text-[#7b7589] transition hover:text-[#2f2d38]"
              >
                {item}
              </a>
            ))}
          </div>

          <Link
            href="/creator/10"
            className="inline-flex items-center rounded-full bg-[#1f1d25] px-4 py-1.5 text-sm font-semibold !text-white transition hover:bg-[#15131a]"
          >
            작가 시안 10 보기 →
          </Link>
        </header>

        <section className="mb-4 grid gap-3 xl:grid-cols-[1.12fr_0.88fr]">
          <div className="overflow-hidden rounded-[24px] border border-[#ebe7f1] bg-white p-2 shadow-[0_10px_24px_rgba(20,20,40,0.05)]">
            <div className="relative min-h-[560px] overflow-hidden rounded-[20px] border border-[#efebf5]">
              <Image
                src="/images/img10.jpg"
                alt="ott 10 hero"
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 58vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(255,255,255,0.95)_10%,rgba(255,255,255,0.22)_48%,rgba(255,255,255,0.04)_100%)]" />

              <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
                <span className="rounded-full border border-[#ece5f5] bg-white/88 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#7b6f97] shadow-sm">
                  Finale
                </span>
                <span className="rounded-full border border-[#f2d7e4] bg-[#fff8fb] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#c56e8f] shadow-sm">
                  OTT 10
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#8f84a8]">
                  CURATION EXHIBITION HOME
                </p>

                <h1 className="mt-1.5 max-w-4xl text-2xl font-extrabold leading-[1.02] text-[#2f2d38] sm:text-4xl">
                  한 화면 안에서
                  <br />
                  더 많이 보고 더 다양하게 고르는 메인
                </h1>

                <div className="mt-3 flex flex-wrap gap-2">
                  <button className="rounded-full bg-[#2f2d38] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#1f1d25]">
                    지금 탐색하기
                  </button>
                  <button className="rounded-full border border-[#e4deec] bg-white px-4 py-2 text-sm font-medium text-[#6b6578] transition hover:bg-[#fafafe]">
                    전체 보기
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-3">
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-2">
              {heroCards.map((item) => (
                <SmallPoster
                  key={item.title}
                  title={item.title}
                  sub={item.sub}
                  desc={item.desc}
                  image={item.image}
                />
              ))}
            </div>

            <div className="rounded-[20px] border border-[#ebe7f1] bg-white p-3 shadow-[0_8px_20px_rgba(20,20,40,0.04)]">
              <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
                {["신작", "실시간", "베스트", "오리지널"].map((item) => (
                  <div
                    key={item}
                    className="rounded-[14px] border border-[#efebf5] bg-[#fafafe] px-2 py-2.5 text-center text-sm font-semibold text-[#686274]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mb-4 grid gap-3 xl:grid-cols-[1.04fr_0.96fr]">
          <div className="rounded-[22px] border border-[#ebe7f1] bg-white p-3 shadow-[0_10px_24px_rgba(20,20,40,0.04)]">
            <div className="mb-3 flex items-end justify-between">
              <h2 className="text-xl font-extrabold text-[#2f2d38]">이어서 보기</h2>
              <span className="text-sm font-medium text-[#8a8498]">Continue</span>
            </div>

            <div className="grid gap-2.5 sm:grid-cols-2 xl:grid-cols-4">
              {continueWatching.map((item) => (
                <article
                  key={item.title}
                  className="overflow-hidden rounded-[18px] border border-[#ebe7f1] bg-white shadow-[0_6px_14px_rgba(20,20,40,0.04)]"
                >
                  <div className="relative h-[205px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                  </div>
                  <div className="px-2.5 py-2">
                    <h3 className="text-sm font-bold leading-4 text-[#2f2d38]">
                      {item.title}
                    </h3>
                    <p className="mt-0.5 text-[10px] leading-4 text-[#7e788e]">
                      {item.desc}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-[22px] border border-[#ebe7f1] bg-white p-3 shadow-[0_10px_24px_rgba(20,20,40,0.04)]">
            <div className="mb-3 flex items-end justify-between">
              <h2 className="text-xl font-extrabold text-[#2f2d38]">실시간 랭킹</h2>
              <span className="text-sm font-medium text-[#8a8498]">Top 5</span>
            </div>

            <div className="space-y-2.5">
              {ranking.map((item) => (
                <article
                  key={item.rank}
                  className="grid items-center gap-2 rounded-[16px] border border-[#efebf5] bg-[#fafafe] p-2.5 md:grid-cols-[44px_76px_1fr]"
                >
                  <div className="text-lg font-extrabold text-[#7d7691]">{item.rank}</div>

                  <div className="relative h-[64px] overflow-hidden rounded-[12px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="120px"
                    />
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-[#2f2d38]">{item.title}</h3>
                    <p className="mt-0.5 text-[10px] text-[#7e788e]">{item.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-4">
          <div className="mb-3 flex items-end justify-between">
            <h2 className="text-xl font-extrabold text-[#2f2d38]">에디터 픽 모자이크</h2>
            <span className="text-sm font-medium text-[#8a8498]">Mosaic</span>
          </div>

          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {editorsLarge.map((card) => (
              <article
                key={card.title}
                className={`group overflow-hidden rounded-[20px] border border-[#ebe7f1] bg-white shadow-[0_10px_24px_rgba(20,20,40,0.05)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(20,20,40,0.08)] ${
                  card.size === "large"
                    ? "md:col-span-2 xl:row-span-2"
                    : card.size === "wide"
                    ? "md:col-span-2"
                    : ""
                }`}
              >
                <div
                  className={`relative overflow-hidden ${
                    card.size === "large"
                      ? "h-[320px] xl:h-[380px]"
                      : card.size === "wide"
                      ? "h-[180px]"
                      : "h-[170px]"
                  }`}
                >
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-[1.02]"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>

                <div className="p-3">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#918aa1]">
                    {card.sub}
                  </p>
                  <h3 className="mt-1 text-sm font-bold text-[#2f2d38]">{card.title}</h3>
                  <p className="mt-0.5 text-[11px] leading-4 text-[#7e788e]">{card.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="pb-3 space-y-4">
          {shelves.map((row) => (
            <div key={row.title}>
              <div className="mb-3 flex items-end justify-between">
                <h2 className="text-lg font-extrabold text-[#2f2d38]">{row.title}</h2>
                <span className="text-sm font-medium text-[#8a8498]">More →</span>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {row.items.map((item) => (
                  <SmallPoster
                    key={item.name}
                    title={item.name}
                    sub={item.sub}
                    desc={item.desc}
                    image={item.image}
                  />
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}