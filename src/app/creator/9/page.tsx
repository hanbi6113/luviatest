import Image from "next/image";
import Link from "next/link";

export default function CreatorPage9() {
  const bestChallengeCards = [
    {
      title: "유리숲 연대기",
      sub: "판타지 · 12화 연재중",
      image: "/images/img2.jpg",
    },
    {
      title: "네온 블러드",
      sub: "SF · 액션 · 8화",
      image: "/images/img3.jpg",
    },
    {
      title: "달 아래의 기사",
      sub: "로맨스 · 서사 · 15화",
      image: "/images/img1.jpg",
    },
    {
      title: "기억 수집가",
      sub: "미스터리 · 심리 · 6화",
      image: "/images/img4.jpg",
    },
  ];

  const continueCards = [
    {
      title: "새벽의 정원",
      sub: "임시저장 · 3화 작업중",
      image: "/images/img5.jpg",
    },
    {
      title: "Orbit Kids",
      sub: "기획안 저장됨",
      image: "/images/img15.jpg",
    },
  ];

  const quickMenus = [
    "새 작품 만들기",
    "표지 등록",
    "회차 작성",
    "임시저장 보기",
    "장르 설정",
    "연재 관리",
  ];

  const challengeRows = [
    {
      title: "베스트 도전 인기작",
      items: [
        { name: "별의 심해", img: "/images/img1.jpg" },
        { name: "정령의 숲", img: "/images/img9.jpg" },
        { name: "심야 복도", img: "/images/img6.jpg" },
        { name: "네온 시티", img: "/images/img12.jpg" },
      ],
    },
    {
      title: "지금 많이 시작하는 장르",
      items: [
        { name: "로맨스", img: "/images/img4.jpg" },
        { name: "판타지", img: "/images/img10.jpg" },
        { name: "SF", img: "/images/img13.jpg" },
        { name: "키즈", img: "/images/img16.jpg" },
      ],
    },
  ];

  function MiniCard({
    title,
    sub,
    image,
  }: {
    title: string;
    sub: string;
    image: string;
  }) {
    return (
      <article className="group overflow-hidden rounded-[26px] border border-[#ebe7f1] bg-white shadow-[0_14px_34px_rgba(20,20,40,0.05)] transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(20,20,40,0.08)]">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition duration-300 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 25vw"
          />
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
              베스트 도전
            </a>
            <a href="#" className="text-sm font-medium text-[#7b7589] transition hover:text-[#2f2d38]">
              작품 만들기
            </a>
            <a href="#" className="text-sm font-medium text-[#7b7589] transition hover:text-[#2f2d38]">
              내 작품
            </a>
            <a href="#" className="text-sm font-medium text-[#7b7589] transition hover:text-[#2f2d38]">
              연재 관리
            </a>
          </div>

          <Link
            href="/ott/9"
            className="rounded-full bg-[#1f1d25] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#15131a]"
          >
            OTT 시안 9 보기 →
          </Link>
        </header>

        <section className="mb-12 grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
          <div className="overflow-hidden rounded-[34px] border border-[#ebe7f1] bg-white p-5 shadow-[0_20px_50px_rgba(20,20,40,0.06)]">
            <div className="mb-5 flex items-end justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#8f84a8]">
                  Best Challenge
                </p>
                <h1 className="mt-2 text-3xl font-extrabold text-[#2f2d38]">
                  베스트 도전 메인
                </h1>
              </div>
              <span className="text-sm font-medium text-[#8a8498]">More →</span>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {bestChallengeCards.map((item) => (
                <MiniCard key={item.title} {...item} />
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            <div className="rounded-[30px] border border-[#ebe7f1] bg-white p-6 shadow-[0_16px_38px_rgba(20,20,40,0.05)]">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8d86a0]">
                Creator Home
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-[#2f2d38]">
                바로 시작하는
                <br />
                작품 만들기
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#757082]">
                베스트 도전을 구경하다가 바로 새 작품을 만들고,
                임시저장했던 작업도 이어서 볼 수 있는 작가 메인 홈 구조야.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <button className="rounded-full bg-[#2f2d38] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1f1d25]">
                  새 작품 만들기
                </button>
                <button className="rounded-full border border-[#e4deec] bg-[#fafafe] px-5 py-3 text-sm font-semibold text-[#666071] transition hover:bg-white">
                  임시저장 이어보기
                </button>
              </div>
            </div>

            <div className="rounded-[30px] border border-[#ebe7f1] bg-white p-5 shadow-[0_16px_38px_rgba(20,20,40,0.05)]">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8d86a0]">
                Quick Menu
              </p>

              <div className="mt-4 grid grid-cols-2 gap-3">
                {quickMenus.map((item) => (
                  <button
                    key={item}
                    className="rounded-[18px] border border-[#efebf5] bg-[#fafafe] px-4 py-4 text-sm font-semibold text-[#655f73] transition hover:bg-white"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-1">
              {continueCards.map((item) => (
                <article
                  key={item.title}
                  className="grid overflow-hidden rounded-[28px] border border-[#ebe7f1] bg-white shadow-[0_16px_38px_rgba(20,20,40,0.05)] md:grid-cols-[0.9fr_1.1fr] xl:grid-cols-[0.9fr_1.1fr]"
                >
                  <div className="relative min-h-[180px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 30vw"
                    />
                  </div>

                  <div className="flex flex-col justify-center p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#9a90b0]">
                      Continue Work
                    </p>
                    <h3 className="mt-2 text-2xl font-extrabold text-[#2f2d38]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-[#777385]">{item.sub}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-10 space-y-10">
          {challengeRows.map((row) => (
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