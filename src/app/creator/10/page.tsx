import Image from "next/image";
import Link from "next/link";

export default function CreatorPage10() {
  const dashboardCards = [
    { title: "새 작품 시작", sub: "Start", tone: "dark" },
    { title: "임시저장 이어서", sub: "Continue", tone: "light" },
    { title: "표지 업로드", sub: "Cover", tone: "light" },
    { title: "장르 설정", sub: "Genre", tone: "light" },
  ];

  const featuredChallenge = [
    { title: "유리숲 연대기", sub: "판타지 · 인기", image: "/images/img2.jpg" },
    { title: "네온 블러드", sub: "SF · 상승중", image: "/images/img3.jpg" },
    { title: "사랑의 잔상", sub: "멜로 · 추천", image: "/images/img4.jpg" },
    { title: "심야 복도", sub: "공포 · 주목", image: "/images/img5.jpg" },
  ];

  const workbenchRows = [
    {
      title: "최근 작업 중",
      items: [
        { name: "새벽의 정원", image: "/images/img6.jpg" },
        { name: "When Love Stays", image: "/images/img7.jpg" },
        { name: "정령의 숲", image: "/images/img9.jpg" },
        { name: "Neon Axis City", image: "/images/img13.jpg" },
      ],
    },
    {
      title: "지금 많이 만드는 장르",
      items: [
        { name: "로맨스", image: "/images/img4.jpg" },
        { name: "판타지", image: "/images/img10.jpg" },
        { name: "SF", image: "/images/img12.jpg" },
        { name: "키즈", image: "/images/img15.jpg" },
      ],
    },
    {
      title: "추천 시작점",
      items: [
        { name: "동화형 기획", image: "/images/img16.jpg" },
        { name: "비주얼 강한 기획", image: "/images/img11.jpg" },
        { name: "미스터리 플롯", image: "/images/img14.jpg" },
        { name: "서사형 로맨스", image: "/images/img1.jpg" },
      ],
    },
  ];

  const sideTools = [
    "대시보드",
    "작품 만들기",
    "회차 편집",
    "표지/썸네일",
    "장르/태그",
    "연재 관리",
    "베스트 도전",
    "통계 보기",
  ];

  function Poster({
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
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#918aa1]">
            {sub}
          </p>
          <h3 className="mt-2 text-base font-bold text-[#2f2d38]">{title}</h3>
        </div>
      </article>
    );
  }

  return (
    <main className="min-h-screen bg-white text-[#2f2d38]">
      {/* background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#fbfbfd_44%,#f7f7fb_100%)]" />
        <div className="absolute left-[-100px] top-[-90px] h-[280px] w-[280px] rounded-full bg-[#ffe1eb]/48 blur-[95px]" />
        <div className="absolute right-[-80px] top-[30px] h-[300px] w-[300px] rounded-full bg-[#e0f4ff]/58 blur-[105px]" />
        <div className="absolute bottom-[-100px] left-[14%] h-[260px] w-[260px] rounded-full bg-[#efe5ff]/45 blur-[95px]" />
        <div className="absolute bottom-[-110px] right-[10%] h-[300px] w-[300px] rounded-full bg-[#fff0cb]/55 blur-[105px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 py-8 md:px-8 lg:px-10">
        {/* top nav */}
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
              만들기
            </a>
            <a href="#" className="text-sm font-medium text-[#7b7589] transition hover:text-[#2f2d38]">
              베스트 도전
            </a>
            <a href="#" className="text-sm font-medium text-[#7b7589] transition hover:text-[#2f2d38]">
              내 작품
            </a>
            <a href="#" className="text-sm font-medium text-[#7b7589] transition hover:text-[#2f2d38]">
              관리
            </a>
          </div>

          <Link
            href="/ott/10"
            className="rounded-full bg-[#1f1d25] px-4 py-2 text-sm font-semibold !text-white transition hover:bg-[#15131a]"
          >
            OTT 시안 10 보기 →
          </Link>
        </header>

        {/* upper hub */}
        <section className="mb-12 grid gap-6 xl:grid-cols-[290px_1fr]">
          {/* side tools */}
          <aside className="space-y-5">
            <div className="rounded-[32px] border border-[#ebe7f1] bg-white p-6 shadow-[0_18px_44px_rgba(20,20,40,0.05)]">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#8f84a8]">
                Creator 10
              </p>
              <h1 className="mt-3 text-3xl font-extrabold leading-tight text-[#2f2d38]">
                만들기와
                <br />
                발견이 함께 있는 메인
              </h1>
            </div>

            <div className="rounded-[32px] border border-[#ebe7f1] bg-white p-4 shadow-[0_18px_44px_rgba(20,20,40,0.05)]">
              <div className="space-y-2">
                {sideTools.map((item, index) => (
                  <button
                    key={item}
                    className={`flex w-full items-center justify-between rounded-[18px] px-4 py-3 text-left text-sm font-medium transition ${
                      index === 0
                        ? "bg-[#2f2d38] text-white"
                        : "bg-[#fafafe] text-[#6b6578] hover:bg-white"
                    }`}
                  >
                    <span>{item}</span>
                    {index === 0 && <span>●</span>}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* main canvas */}
          <div className="space-y-6">
            <div className="grid gap-6 xl:grid-cols-[1.06fr_0.94fr]">
              <div className="overflow-hidden rounded-[36px] border border-[#ebe7f1] bg-white p-5 shadow-[0_22px_54px_rgba(20,20,40,0.06)]">
                <div className="relative min-h-[460px] overflow-hidden rounded-[30px] border border-[#efebf5]">
                  <Image
                    src="/images/img10.jpg"
                    alt="creator 10 hero"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1280px) 100vw, 58vw"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(255,255,255,0.94)_10%,rgba(255,255,255,0.18)_48%,rgba(255,255,255,0.04)_100%)]" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                    <p className="text-xs font-bold uppercase tracking-[0.30em] text-[#8f84a8]">
                      CREATOR GALLERY HUB
                    </p>
                    <h2 className="mt-3 text-4xl font-extrabold leading-[1.05] text-[#2f2d38] sm:text-5xl">
                      구경하다가
                      <br />
                      바로 만들고 싶어지는 구조
                    </h2>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <button className="rounded-full bg-[#2f2d38] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1f1d25]">
                        새 작품 시작
                      </button>
                      <button className="rounded-full border border-[#e4deec] bg-white px-5 py-3 text-sm font-medium text-[#6b6578] transition hover:bg-[#fafafe]">
                        임시저장 열기
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-2">
                {dashboardCards.map((item) => (
                  <div
                    key={item.title}
                    className={`rounded-[28px] border p-5 shadow-[0_16px_38px_rgba(20,20,40,0.05)] ${
                      item.tone === "dark"
                        ? "border-[#2f2d38] bg-[#2f2d38] text-white"
                        : "border-[#ebe7f1] bg-white text-[#2f2d38]"
                    }`}
                  >
                    <p
                      className={`text-xs font-bold uppercase tracking-[0.24em] ${
                        item.tone === "dark" ? "text-white/65" : "text-[#8d86a0]"
                      }`}
                    >
                      {item.sub}
                    </p>
                    <h3 className="mt-3 text-2xl font-extrabold">{item.title}</h3>
                  </div>
                ))}
              </div>
            </div>

            {/* featured challenge */}
            <div>
              <div className="mb-5 flex items-end justify-between">
                <h2 className="text-3xl font-extrabold text-[#2f2d38]">
                  베스트 도전 메인
                </h2>
                <span className="text-sm font-medium text-[#8a8498]">More →</span>
              </div>

              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                {featuredChallenge.map((item) => (
                  <Poster key={item.title} {...item} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* long rows */}
        <section className="pb-10 space-y-10">
          {workbenchRows.map((row) => (
            <div key={row.title}>
              <div className="mb-5 flex items-end justify-between">
                <h2 className="text-2xl font-extrabold text-[#2f2d38]">{row.title}</h2>
                <span className="text-sm font-medium text-[#8a8498]">More →</span>
              </div>

              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                {row.items.map((item) => (
                  <article
                    key={item.name}
                    className="overflow-hidden rounded-[28px] border border-[#ebe7f1] bg-white shadow-[0_14px_34px_rgba(20,20,40,0.05)] transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(20,20,40,0.08)]"
                  >
                    <div className="relative aspect-[16/10]">
                      <Image
                        src={item.image}
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