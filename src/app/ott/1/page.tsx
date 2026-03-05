import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const covers = [
    { title: "별의 심해", sub: "웹소설 원작 · 오리지널", img: "/images/img1.jpg" },
    { title: "유리숲 연대기", sub: "판타지 · 감성", img: "/images/img2.jpg" },
    { title: "네온 블러드", sub: "SF · 액션", img: "/images/img3.jpg" },
    { title: "달 아래의 기사", sub: "로맨스 · 서사", img: "/images/img1.jpg" },
    { title: "기억 수집가", sub: "미스터리 · 스릴", img: "/images/img2.jpg" },
    { title: "아틀라스 9", sub: "어드벤처 · 팀플", img: "/images/img3.jpg" },
    { title: "블랙 루프", sub: "다크 · 심리", img: "/images/img1.jpg" },
    { title: "천공의 아이", sub: "하이 판타지", img: "/images/img2.jpg" },
  ];

  function Chip({ children }: { children: React.ReactNode }) {
    return (
      <span className="inline-flex items-center rounded-full border border-[#d4b26b]/35 bg-[#d4b26b]/10 px-3 py-1 text-xs font-medium text-[#f4e6c0]">
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
      <article className="group overflow-hidden rounded-[22px] border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-white/25">
        <div className="relative aspect-[16/10]">
          <Image
            src={img}
            alt={title}
            fill
            className="object-cover opacity-90 transition group-hover:opacity-100"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/18 to-transparent" />
        </div>

        <div className="p-4">
          <h3 className="text-base font-semibold text-white">{title}</h3>
          <p className="mt-1 text-sm text-white/65">{sub}</p>
        </div>
      </article>
    );
  }

  return (
    <main className="min-h-screen text-white">
      {/* Cinematic premium background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#4a0f26_0%,#12070c_45%,#07060a_100%)]" />
        <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:30px_30px]" />
        <div className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#d4b26b]/12 blur-[90px]" />
        <div className="absolute -bottom-48 right-[-120px] h-[560px] w-[560px] rounded-full bg-[#8a2b55]/25 blur-[110px]" />
      </div>

      <div className="mx-auto max-w-6xl px-5 py-8">
        {/* Top nav */}
        <div className="mb-7 flex items-center justify-between">
          <Link
            href="/"
            className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 hover:border-white/25 hover:bg-white/10"
          >
            ← 홈
          </Link>
          <Link
            href="/creator/1"
            className="rounded-full border border-[#d4b26b]/35 bg-[#d4b26b]/10 px-4 py-2 text-sm text-[#f4e6c0] hover:bg-[#d4b26b]/15"
          >
            작가 시안 1 보기 →
          </Link>
        </div>

        {/* Hero */}
        <section className="mb-10 grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
            <div className="relative overflow-hidden rounded-[22px] border border-white/10">
              <div className="relative min-h-[420px]">
                <Image
                  src="/images/img1.jpg"
                  alt="Hero"
                  fill
                  className="object-cover opacity-95"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

                {/* “Stage lights” */}
                <div className="absolute -top-24 left-10 h-56 w-56 rounded-full bg-[#d4b26b]/18 blur-[70px]" />
                <div className="absolute -top-24 right-10 h-56 w-56 rounded-full bg-[#ff2a6d]/14 blur-[70px]" />

                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <div className="mb-3 flex flex-wrap gap-2">
                    <Chip>PREMIUM ORIGINAL</Chip>
                    <Chip>AI-ANIMATED</Chip>
                    <Chip>4K HDR</Chip>
                  </div>

                  <h1 className="text-3xl font-semibold sm:text-5xl">별의 심해</h1>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-white/75 sm:text-base">
                    넷플릭스처럼 “바로 보고 싶게” 만들되, 와인빛 + 골드 조명으로
                    극장 무드를 강하게 잡은 프리미엄 메인.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <button className="rounded-full bg-[#d4b26b] px-5 py-3 text-sm font-semibold text-[#1a0c10] hover:brightness-105">
                      지금 재생
                    </button>
                    <button className="rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white hover:bg-white/15">
                      예고편
                    </button>
                    <button className="rounded-full border border-white/15 bg-black/10 px-5 py-3 text-sm text-white/85 hover:border-white/25">
                      내 리스트 +
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Shelf tabs */}
            <div className="mt-5 flex flex-wrap gap-2">
              {["오늘의 프리미엄", "원작 인기작", "감정선 강한 작품", "액션/전투"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/75 hover:border-white/20"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right stats */}
          <div className="grid gap-4">
            <div className="rounded-[24px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.24em] text-white/55">
                Live
              </p>
              <p className="mt-2 text-3xl font-semibold">28.4K</p>
              <p className="mt-2 text-sm text-white/65">
                지금 시청 중인 사용자
              </p>
              <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[72%] rounded-full bg-[#d4b26b]/70" />
              </div>
            </div>

            <div className="rounded-[24px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.24em] text-white/55">
                Exclusive
              </p>
              <p className="mt-2 text-3xl font-semibold">11</p>
              <p className="mt-2 text-sm text-white/65">
                독점 공개 예정작
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Chip>01</Chip>
                <Chip>02</Chip>
                <Chip>03</Chip>
                <Chip>04</Chip>
              </div>
            </div>

            <div className="rounded-[24px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.24em] text-white/55">
                Mood
              </p>
              <p className="mt-2 text-2xl font-semibold">Cinematic / Premium</p>
              <p className="mt-2 text-sm text-white/65">
                1번 시안 공통 톤: 와인 + 골드 + 극장 조명
              </p>
            </div>
          </div>
        </section>

        {/* Rows */}
        <section className="mb-10">
          <div className="mb-4 flex items-end justify-between">
            <h2 className="text-xl font-semibold">오늘의 프리미엄 큐레이션</h2>
            <span className="text-sm text-white/55">See all →</span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {covers.slice(0, 4).map((c) => (
              <PosterCard key={c.title} {...c} />
            ))}
          </div>
        </section>

        <section className="pb-10">
          <div className="mb-4 flex items-end justify-between">
            <h2 className="text-xl font-semibold">원작 인기작 애니화</h2>
            <span className="text-sm text-white/55">See all →</span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {covers.slice(4, 8).map((c) => (
              <PosterCard key={c.title} {...c} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}