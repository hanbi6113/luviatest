import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export default function Page() {
  const cards = [
    { title: "솜사탕 별나라", sub: "판타지 · 힐링", img: "/images/img1.jpg" },
    { title: "핑크 레터", sub: "로맨스 · 감성", img: "/images/img2.jpg" },
    { title: "하늘빛 멜로디", sub: "음악 · 청춘", img: "/images/img3.jpg" },
    { title: "토끼구름 스튜디오", sub: "일상 · 귀여움", img: "/images/img1.jpg" },
    { title: "딸기 유니버스", sub: "SF · 큐트", img: "/images/img2.jpg" },
    { title: "캔디 하우스", sub: "모험 · 코미디", img: "/images/img3.jpg" },
    { title: "플라워 코드", sub: "미스터리 · 소녀", img: "/images/img1.jpg" },
    { title: "버블 드림", sub: "드라마 · 성장", img: "/images/img2.jpg" },
  ];

  function Chip({ children }: { children: ReactNode }) {
    return (
      <span className="inline-flex items-center rounded-full border border-[#f7bfd6] bg-white/75 px-3 py-1 text-xs font-semibold text-[#c76790] shadow-sm">
        {children}
      </span>
    );
  }

  function PosterCard({
    title,
    sub,
    img,
  }: {
    title: string;
    sub: string;
    img: string;
  }) {
    return (
      <article className="group overflow-hidden rounded-[28px] border border-[#ffd8e6] bg-white/85 shadow-[0_18px_40px_rgba(255,170,196,0.18)] transition hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(255,170,196,0.28)]">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={img}
            alt={title}
            fill
            className="object-cover transition duration-300 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#ffffffcc] via-[#ffffff22] to-transparent" />
          <div className="absolute left-3 top-3">
            <Chip>추천작</Chip>
          </div>
        </div>

        <div className="p-4">
          <h3 className="text-base font-bold text-[#6f4b67]">{title}</h3>
          <p className="mt-1 text-sm text-[#9d7891]">{sub}</p>
        </div>
      </article>
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
        {/* top nav */}
        <div className="mb-7 flex items-center justify-between">
          <Link
            href="/"
            className="rounded-full border border-[#f5d4e1] bg-white/80 px-4 py-2 text-sm font-medium text-[#b46b89] shadow-sm transition hover:bg-white"
          >
            ← 홈
          </Link>
          <div className="hidden items-center gap-6 md:flex">
          <a href="#" className="text-sm font-medium text-[#b46b89] transition hover:text-[#c76790]">
            홈
          </a>
          <a href="#" className="text-sm font-medium text-[#b46b89] transition hover:text-[#c76790]">
            로판
          </a>
          <a href="#" className="text-sm font-medium text-[#b46b89] transition hover:text-[#c76790]">
            황궁
          </a>
          <a href="#" className="text-sm font-medium text-[#b46b89] transition hover:text-[#c76790]">
            귀족
          </a>
          <a href="#" className="text-sm font-medium text-[#b46b89] transition hover:text-[#c76790]">
            회귀·빙의
          </a>
          <a href="#" className="text-sm font-medium text-[#b46b89] transition hover:text-[#c76790]">
            운명 로맨스
          </a>
        </div>
          <Link
            href="/creator/2"
            className="rounded-full border border-[#f6bfd8] bg-[#fff0f7] px-4 py-2 text-sm font-medium text-[#c76790] shadow-sm transition hover:bg-[#ffe8f3]"
          >
            작가 시안 2 보기 →
          </Link>
        </div>

        {/* hero */}
        <section className="mb-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="overflow-hidden rounded-[34px] border border-[#ffe0eb] bg-white/80 p-5 shadow-[0_24px_60px_rgba(255,192,218,0.18)] backdrop-blur-xl">
            <div className="relative min-h-[430px] overflow-hidden rounded-[28px] border border-[#ffe2ef]">
              <Image
                src="/images/img1.jpg"
                alt="메인 작품"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(255,250,252,0.95)_10%,rgba(255,250,252,0.35)_48%,rgba(255,250,252,0.08)_100%)]" />

              <div className="absolute left-5 top-5 flex flex-wrap gap-2">
                <Chip>NEW</Chip>
                <Chip>CUTE PICK</Chip>
                <Chip>BEST MOOD</Chip>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <p className="mb-2 text-sm font-semibold tracking-[0.18em] text-[#d17fa2]">
                  SWEET & LOVELY OTT
                </p>
                <h1 className="text-3xl font-extrabold text-[#6f4b67] sm:text-5xl">
                  솜사탕 별나라
                </h1>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-[#8f7186] sm:text-base">
                  엄청 밝고, 귀엽고, 예쁘고, 기분 좋아지는 분위기의 OTT 메인.
                  넷플릭스처럼 바로 보고 싶게 하되 훨씬 더 사랑스럽고 부드러운 방향으로 잡은 시안이야.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <button className="rounded-full bg-[linear-gradient(135deg,#ff9cc3,#ffc7df)] px-5 py-3 text-sm font-bold text-white shadow-[0_12px_24px_rgba(255,160,200,0.35)] transition hover:brightness-105">
                    지금 재생
                  </button>
                  <button className="rounded-full border border-[#f6c8da] bg-white/80 px-5 py-3 text-sm font-medium text-[#bb7391] transition hover:bg-white">
                    예고편 보기
                  </button>
                  <button className="rounded-full border border-[#f7d7e5] bg-[#fff7fb] px-5 py-3 text-sm font-medium text-[#b67a95] transition hover:bg-white">
                    찜하기 +
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {["오늘의 달달한 추천", "귀여운 세계관", "가볍게 보기 좋은 작품", "비주얼 예쁜 작품"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#f7d8e7] bg-[#fff8fc] px-4 py-2 text-xs font-medium text-[#b67a95]"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          {/* right box */}
          <div className="grid gap-4">
            <div className="rounded-[26px] border border-[#ffe0eb] bg-white/82 p-5 shadow-[0_18px_40px_rgba(255,186,211,0.18)]">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#cf89a7]">
                Trending
              </p>
              <p className="mt-2 text-3xl font-extrabold text-[#6f4b67]">93%</p>
              <p className="mt-2 text-sm text-[#9a7f91]">오늘의 취향 일치도</p>
              <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-[#ffeaf2]">
                <div className="h-full w-[93%] rounded-full bg-[linear-gradient(90deg,#ff9cc3,#ffd5e5)]" />
              </div>
            </div>

            <div className="rounded-[26px] border border-[#ffe8c8] bg-[#fffaf0] p-5 shadow-[0_18px_40px_rgba(255,221,165,0.18)]">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#d0a160]">
                Mood
              </p>
              <p className="mt-2 text-2xl font-extrabold text-[#7f6658]">Lovely / Bright</p>
              <p className="mt-2 text-sm text-[#a28b80]">
                솜사탕, 버블, 리본, 파스텔 같은 무드
              </p>
            </div>

            <div className="rounded-[26px] border border-[#ddecff] bg-[#f5fbff] p-5 shadow-[0_18px_40px_rgba(191,224,255,0.18)]">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#6fa9ca]">
                Picks
              </p>
              <p className="mt-2 text-2xl font-extrabold text-[#557c94]">8 Curated Titles</p>
              <p className="mt-2 text-sm text-[#7898ab]">
                예쁜 색감이 강한 작품들 중심의 메인
              </p>
            </div>
          </div>
        </section>

        {/* rows */}
        <section className="mb-10">
          <div className="mb-4 flex items-end justify-between">
            <h2 className="text-xl font-extrabold text-[#7b5770]">오늘의 러블리 추천</h2>
            <span className="text-sm font-medium text-[#be8aa3]">See all →</span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {cards.slice(0, 4).map((item) => (
              <PosterCard key={item.title} {...item} />
            ))}
          </div>
        </section>

        <section className="pb-10">
          <div className="mb-4 flex items-end justify-between">
            <h2 className="text-xl font-extrabold text-[#7b5770]">비주얼이 예쁜 애니화 작품</h2>
            <span className="text-sm font-medium text-[#be8aa3]">See all →</span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {cards.slice(4, 8).map((item) => (
              <PosterCard key={item.title} {...item} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}