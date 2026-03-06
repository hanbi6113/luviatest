import Image from "next/image";
import Link from "next/link";

export default function OttPage8() {
  const topTags = ["동화", "노래", "동물 친구", "모험", "잘자요", "놀이"];

  const storyCards = [
    {
      title: "말랑 구름 마을",
      sub: "구름 위에서 만나는 친구들",
      image: "/images/img15.jpg",
      color: "yellow",
    },
    {
      title: "토끼 우체국",
      sub: "편지를 전하는 귀여운 하루",
      image: "/images/img16.jpg",
      color: "blue",
    },
    {
      title: "반짝별 놀이터",
      sub: "노래와 웃음이 가득한 곳",
      image: "/images/img17.jpg",
      color: "purple",
    },
  ];

  const bigMenus = [
    { label: "동화 보기", color: "yellow" },
    { label: "노래 듣기", color: "blue" },
    { label: "동물 친구", color: "pink" },
    { label: "잘자요", color: "purple" },
  ];

  const bottomMenus = [
    {
      title: "인기 영상",
      desc: "아이들이 좋아하는 즐거운 영상",
      color: "yellow",
    },
    {
      title: "율동 시간",
      desc: "함께 따라 하는 신나는 율동",
      color: "blue",
    },
    {
      title: "자장가 시간",
      desc: "편안하게 보는 부드러운 영상",
      color: "pink",
    },
  ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#fff9f0] text-[#5c4c60]">
      {/* background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#fffdf8_0%,#fff7ea_24%,#f3fbff_56%,#f8f2ff_100%)]" />
        <div className="absolute left-[-90px] top-[-70px] h-[280px] w-[280px] rounded-full bg-[#ffd96c]/38 blur-[95px]" />
        <div className="absolute right-[-80px] top-[30px] h-[280px] w-[280px] rounded-full bg-[#8ed8ff]/34 blur-[95px]" />
        <div className="absolute bottom-[-90px] left-[14%] h-[260px] w-[260px] rounded-full bg-[#ffabd7]/26 blur-[95px]" />
        <div className="absolute bottom-[-90px] right-[14%] h-[260px] w-[260px] rounded-full bg-[#b5a0ff]/26 blur-[95px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 py-8 md:px-8 lg:px-10">
        {/* nav */}
        <header className="mb-8 flex items-center justify-between">
          <Link
            href="/"
            className="rounded-full border-2 border-[#ffd98c] bg-white px-4 py-2 text-sm font-extrabold text-[#c7872f] shadow-sm transition hover:-translate-y-0.5"
          >
            ← 홈
          </Link>

          <div className="hidden items-center gap-5 md:flex">
            <a href="#" className="text-sm font-extrabold text-[#8a7ea1] transition hover:text-[#5c4c60]">
              키즈
            </a>
            <a href="#" className="text-sm font-extrabold text-[#8a7ea1] transition hover:text-[#5c4c60]">
              동화
            </a>
            <a href="#" className="text-sm font-extrabold text-[#8a7ea1] transition hover:text-[#5c4c60]">
              노래
            </a>
            <a href="#" className="text-sm font-extrabold text-[#8a7ea1] transition hover:text-[#5c4c60]">
              친구들
            </a>
          </div>

          <Link
            href="/creator/8"
            className="rounded-full bg-[linear-gradient(135deg,#ffbe55,#ff8ec2,#7fcfff)] px-4 py-2 text-sm font-extrabold text-white shadow-[0_10px_22px_rgba(255,170,110,0.24)] transition hover:brightness-105"
          >
            작가 시안 8 보기 →
          </Link>
        </header>

        {/* hero playground */}
        <section className="mb-14 grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
          {/* left large visual */}
          <div className="rounded-[40px] border-2 border-[#ffe2a7] bg-white/88 p-5 shadow-[0_22px_50px_rgba(255,210,120,0.16)]">
            <div className="relative min-h-[620px] overflow-hidden rounded-[32px] border-2 border-[#fff0c5]">
              <Image
                src="/images/img15.jpg"
                alt="kids main visual"
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 58vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(255,250,240,0.95)_10%,rgba(255,250,240,0.28)_48%,rgba(255,250,240,0.06)_100%)]" />

              <div className="absolute left-5 top-5 flex flex-wrap gap-2">
                <span className="rounded-full bg-[#fff0ad] px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-[#b27d0f] shadow-sm">
                  Kids Zone
                </span>
                <span className="rounded-full bg-[#dff5ff] px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-[#4c9cc7] shadow-sm">
                  Concept 08
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <p className="text-xs font-extrabold uppercase tracking-[0.26em] text-[#ff8f52]">
                  PLAY · STORY · SONG
                </p>

                <h1 className="mt-3 text-4xl font-extrabold leading-[1.04] text-[#5c4c60] sm:text-5xl">
                  반짝반짝
                  <br />
                  재미있는 시간이 시작돼요!
                </h1>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-[#84798f] sm:text-base">
                  동화도 보고, 노래도 듣고, 귀여운 친구들도 만날 수 있는
                  아기들을 위한 밝고 쉬운 키즈존이야.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <button className="rounded-full bg-[linear-gradient(135deg,#ffb84d,#ff8f4d)] px-5 py-3 text-sm font-extrabold text-white shadow-[0_12px_22px_rgba(255,170,90,0.28)] transition hover:brightness-105">
                    지금 보기
                  </button>
                  <button className="rounded-full border-2 border-[#ffd89b] bg-white px-5 py-3 text-sm font-extrabold text-[#c0872f] transition hover:bg-[#fff9ef]">
                    바로 재생
                  </button>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {topTags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#eadfff] bg-white/85 px-3 py-1.5 text-xs font-extrabold text-[#8770b1]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* right baby buttons board */}
          <div className="grid gap-5">
            <div className="overflow-hidden rounded-[34px] border-2 border-[#d9e7ff] bg-white/88 shadow-[0_18px_40px_rgba(180,205,255,0.14)]">
              <div className="relative h-[280px]">
                <Image
                  src="/images/img16.jpg"
                  alt="kids side visual"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 100vw, 32vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(255,250,245,0.30)_10%,rgba(255,255,255,0.00)_50%,rgba(255,255,255,0.10)_100%)]" />
              </div>

              <div className="p-5 text-center">
                <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#7a89e5]">
                  Baby Play
                </p>
                <h2 className="mt-2 text-2xl font-extrabold text-[#5c4c60]">
                  아기들이 좋아할
                  <br />
                  반짝반짝 놀이터
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {bigMenus.map((menu) => (
                <button
                  key={menu.label}
                  className={`rounded-[28px] border-2 px-4 py-7 text-base font-extrabold shadow-sm transition hover:-translate-y-0.5 ${
                    menu.color === "yellow"
                      ? "border-[#ffd98c] bg-[#fff8df] text-[#bf8736]"
                      : menu.color === "blue"
                      ? "border-[#bfe9ff] bg-[#eefaff] text-[#4f9cc8]"
                      : menu.color === "pink"
                      ? "border-[#ffd4e8] bg-[#fff5fa] text-[#cf6f9f]"
                      : "border-[#e0d0ff] bg-[#f8f3ff] text-[#8267be]"
                  }`}
                >
                  {menu.label}
                </button>
              ))}
            </div>

            <div className="rounded-[30px] border-2 border-[#ffe4a8] bg-[#fffaf0] px-5 py-5 text-center shadow-[0_14px_30px_rgba(255,210,120,0.12)]">
              <p className="text-xl font-extrabold text-[#5c4c60]">
                귀여운 친구들이 기다리고 있어요!
              </p>
            </div>
          </div>
        </section>

        {/* story cards */}
        <section className="mb-14">
          <div className="mb-5 flex items-end justify-between">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-[#ff8f52]">
                Favorite Stories
              </p>
              <h2 className="mt-2 text-3xl font-extrabold text-[#5c4c60]">
                보고 싶은 이야기
              </h2>
            </div>
            <span className="text-sm font-extrabold text-[#8a7f97]">3 stories</span>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {storyCards.map((card) => (
              <article
                key={card.title}
                className={`overflow-hidden rounded-[34px] border-2 bg-white/90 shadow-[0_20px_45px_rgba(200,180,255,0.12)] ${
                  card.color === "yellow"
                    ? "border-[#ffd98c]"
                    : card.color === "blue"
                    ? "border-[#bfe9ff]"
                    : "border-[#e0d0ff]"
                }`}
              >
                <div className="relative h-[320px]">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(255,250,242,0.16)_12%,rgba(255,255,255,0.00)_52%,rgba(255,255,255,0.08)_100%)]" />
                </div>

                <div className="p-6">
                  <p
                    className={`text-sm font-extrabold ${
                      card.color === "yellow"
                        ? "text-[#bf8732]"
                        : card.color === "blue"
                        ? "text-[#549dc5]"
                        : "text-[#866fbd]"
                    }`}
                  >
                    {card.sub}
                  </p>
                  <h3 className="mt-2 text-2xl font-extrabold text-[#5c4c60]">
                    {card.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* bottom easy cards */}
        <section className="grid gap-5 xl:grid-cols-3">
          {bottomMenus.map((menu, index) => (
            <div
              key={menu.title}
              className={`rounded-[32px] border-2 p-6 shadow-[0_18px_40px_rgba(180,180,220,0.12)] ${
                menu.color === "yellow"
                  ? "border-[#ffd98c] bg-[#fff8e7]"
                  : menu.color === "blue"
                  ? "border-[#bfe9ff] bg-[#effaff]"
                  : "border-[#ffd4e8] bg-[#fff5fa]"
              }`}
            >
              <h3 className="text-2xl font-extrabold text-[#5c4c60]">{menu.title}</h3>
              <p className="mt-4 text-sm leading-7 text-[#857990]">{menu.desc}</p>

              <button
                className={`mt-6 rounded-full px-5 py-3 text-sm font-extrabold text-white shadow-sm transition hover:brightness-105 ${
                  index === 0
                    ? "bg-[linear-gradient(135deg,#ffcf58,#ff9f4d)]"
                    : index === 1
                    ? "bg-[linear-gradient(135deg,#7fd4ff,#63b3ff)]"
                    : "bg-[linear-gradient(135deg,#ff91c5,#c487ff)]"
                }`}
              >
                더 보기
              </button>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}