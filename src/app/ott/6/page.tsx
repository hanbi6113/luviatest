import Image from "next/image";
import Link from "next/link";

export default function OttPage6() {
  const fantasyTags = [
    "정령 세계",
    "차원문",
    "빛의 숲",
    "에너지 흐름",
    "신화적 모험",
    "오묘한 세계",
  ];

  const orbitCards = [
    {
      title: "Azure Bloom",
      sub: "빛이 피어나는 숲",
      image: "/images/img9.jpg",
    },
    {
      title: "Violet Gate",
      sub: "차원이 열리는 문",
      image: "/images/img10.jpg",
    },
    {
      title: "Emerald Tide",
      sub: "정령이 흐르는 바다",
      image: "/images/img11.jpg",
    },
  ];

  const fantasyRows = [
    {
      label: "MAGIC ENTRY",
      title: "지금 가장 눈을 사로잡는 판타지",
      text: "밝고 화려한 색의 흐름, 신비로운 공기감, 환상적인 생태가 살아 있는 판타지 큐레이션.",
    },
    {
      label: "SPIRIT WORLD",
      title: "정령과 자연이 살아 있는 작품",
      text: "초록과 파랑, 보라가 겹치며 세계가 직접 숨 쉬는 것처럼 느껴지는 판타지들.",
    },
    {
      label: "MYSTIC QUEST",
      title: "오묘한 세계를 탐험하는 여정",
      text: "이세계, 차원문, 신화적 존재와 함께 더 깊은 곳으로 내려가는 모험 중심 작품.",
    },
  ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#eef8ff] text-[#2d3553]">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#f6fdff_0%,#eefbff_18%,#eef6ff_38%,#f2f1ff_62%,#f8efff_100%)]" />
        <div className="absolute left-[-120px] top-[-80px] h-[360px] w-[360px] rounded-full bg-[#61f0bd]/35 blur-[120px]" />
        <div className="absolute right-[-90px] top-[10px] h-[360px] w-[360px] rounded-full bg-[#7a7cff]/28 blur-[120px]" />
        <div className="absolute bottom-[-120px] left-[10%] h-[320px] w-[320px] rounded-full bg-[#54cfff]/30 blur-[120px]" />
        <div className="absolute bottom-[-80px] right-[12%] h-[320px] w-[320px] rounded-full bg-[#d88fff]/28 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 py-8 md:px-8 lg:px-10">
        <header className="mb-8 flex items-center justify-between border-b border-[#cfe7f6] pb-5">
          <Link
            href="/"
            className="rounded-full border border-[#d8ebf7] bg-white/70 px-4 py-2 text-sm font-medium text-[#60729b] transition hover:bg-white"
          >
            ← 홈
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            <a href="#" className="text-sm text-[#6c7aa0] transition hover:text-[#33406a]">
              홈
            </a>
            <a href="#" className="text-sm text-[#6c7aa0] transition hover:text-[#33406a]">
              판타지
            </a>
            <a href="#" className="text-sm text-[#6c7aa0] transition hover:text-[#33406a]">
              이세계
            </a>
            <a href="#" className="text-sm text-[#6c7aa0] transition hover:text-[#33406a]">
              정령
            </a>
            <a href="#" className="text-sm text-[#6c7aa0] transition hover:text-[#33406a]">
              세계관
            </a>
          </div>

          <Link
            href="/creator/6"
            className="rounded-full bg-[linear-gradient(135deg,#55e0b0,#57b6ff,#9778ff)] px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(103,147,255,0.25)] transition hover:brightness-110"
          >
            작가 시안 6 보기 →
          </Link>
        </header>

        <section className="relative mb-14 overflow-hidden rounded-[42px] border border-white/60 bg-white/35 px-5 py-8 shadow-[0_24px_70px_rgba(122,144,209,0.18)] backdrop-blur-xl md:px-8 md:py-10">
          <div className="grid gap-8 xl:grid-cols-[0.9fr_1.2fr_0.9fr]">
           <div className="flex flex-col gap-5">
            <div className="rounded-[28px] border border-white/60 bg-white/45 p-5 shadow-[0_16px_35px_rgba(139,181,232,0.14)]">
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#4dbf9d]">
                Realm Mood
                </p>
                <p className="mt-3 text-3xl font-extrabold text-[#314065]">
                Bright / Mystic / Luminous
                </p>
                <p className="mt-3 text-sm leading-7 text-[#6b7598]">
                어둡기보다 빛이 많은 판타지, 화면 전체가 살아 움직이는 듯한 신비로운 무드.
                </p>
            </div>

            <div className="rounded-[28px] border border-white/60 bg-[linear-gradient(135deg,rgba(97,240,189,0.18),rgba(255,255,255,0.45),rgba(122,124,255,0.12))] p-5 shadow-[0_16px_35px_rgba(139,181,232,0.14)]">
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#6a78ff]">
                Fantasy Depth
                </p>
                <p className="mt-3 text-5xl font-extrabold text-[#314065]">98</p>
                <p className="mt-2 text-sm text-[#6b7598]">오늘의 판타지 몰입 지수</p>
            </div>

            <div className="rounded-[28px] border border-white/55 bg-white/40 p-6 text-left shadow-[0_18px_44px_rgba(122,144,209,0.20)] backdrop-blur-xl">
                <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#7a7cff]">
                Fantasy Zone · Concept 06
                </p>

                <h1 className="mt-4 text-4xl font-extrabold leading-[1.08] text-[#314065] sm:text-5xl">
                빛나는 세계가
                <br />
                열리는 판타지존
                </h1>

                <p className="mt-4 text-sm leading-7 text-[#6b7598] sm:text-base">
                초록, 파랑, 보라의 에너지가 서로 흐르면서
                신비롭고 화려하고 오묘한 세계를 보여주는 메인 시안.
                차원문 안으로 빨려 들어가는 듯한 중심 구조로 잡았어.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                <button className="rounded-full bg-[linear-gradient(135deg,#55e0b0,#57b6ff)] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(87,182,255,0.24)] transition hover:brightness-110">
                    세계로 들어가기
                </button>
                <button className="rounded-full border border-white/60 bg-white/65 px-5 py-3 text-sm font-medium text-[#62749d] transition hover:bg-white">
                    예고편 보기
                </button>
                </div>
            </div>
            </div>

            <div className="relative flex items-center justify-center py-6">
              <div className="absolute h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(103,240,198,0.26)_0%,rgba(92,170,255,0.18)_35%,rgba(151,120,255,0.16)_58%,rgba(255,255,255,0)_72%)] blur-[18px]" />

              <div className="relative h-[560px] w-full max-w-[560px]">
                <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/40 bg-white/15 backdrop-blur-md" />
                <div className="absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border border-white/50 shadow-[0_24px_60px_rgba(113,143,255,0.25)]">
                  <Image
                    src="/images/img9.jpg"
                    alt="fantasy portal main"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(240,248,255,0.12)_5%,rgba(255,255,255,0.00)_45%,rgba(255,255,255,0.10)_100%)]" />
                </div>


                <div className="absolute left-[6%] top-[10%] h-24 w-24 rounded-full border border-white/40 bg-[linear-gradient(135deg,rgba(97,240,189,0.35),rgba(87,182,255,0.18))] backdrop-blur-md" />
                <div className="absolute right-[6%] top-[18%] h-16 w-16 rounded-full border border-white/40 bg-[linear-gradient(135deg,rgba(151,120,255,0.34),rgba(255,255,255,0.15))] backdrop-blur-md" />
                <div className="absolute left-[12%] bottom-[22%] h-14 w-14 rounded-full border border-white/40 bg-[linear-gradient(135deg,rgba(84,207,255,0.30),rgba(255,255,255,0.18))] backdrop-blur-md" />
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="relative overflow-hidden rounded-[30px] border border-white/60 bg-white/35 shadow-[0_18px_40px_rgba(122,144,209,0.16)]">
                <div className="relative h-[250px]">
                  <Image
                    src="/images/img10.jpg"
                    alt="fantasy visual 2"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 25vw"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#4ebc9c]">
                    Spirit Layer
                  </p>
                  <p className="mt-2 text-2xl font-extrabold text-[#314065]">
                    숲과 빛이 겹쳐지는 세계
                  </p>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[30px] border border-white/60 bg-white/35 shadow-[0_18px_40px_rgba(122,144,209,0.16)]">
                <div className="relative h-[250px]">
                  <Image
                    src="/images/img11.jpg"
                    alt="fantasy visual 3"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 25vw"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#8c73ff]">
                    Mystic Flow
                  </p>
                  <p className="mt-2 text-2xl font-extrabold text-[#314065]">
                    차원이 물결치듯 열리는 순간
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {fantasyTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/60 bg-white/45 px-4 py-2 text-sm font-medium text-[#62749d] shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <div className="mb-5 flex items-end justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#4fbf9d]">
                Glowing Portals
              </p>
              <h2 className="mt-2 text-3xl font-extrabold text-[#314065]">
                판타지 세계의 입구들
              </h2>
            </div>
            <span className="text-sm font-medium text-[#7280a0]">3 portals</span>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {orbitCards.map((card, index) => (
              <article
                key={card.title}
                className={`overflow-hidden rounded-[32px] border border-white/60 bg-white/42 shadow-[0_20px_45px_rgba(122,144,209,0.16)] backdrop-blur-xl ${
                  index === 1 ? "lg:-translate-y-6" : index === 2 ? "lg:translate-y-4" : ""
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
                  <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(255,255,255,0.18)_10%,rgba(255,255,255,0.00)_52%,rgba(255,255,255,0.10)_100%)]" />
                </div>

                <div className="p-6">
                  <p
                    className={`text-sm font-semibold ${
                      index === 0
                        ? "text-[#4dbb9b]"
                        : index === 1
                        ? "text-[#648fff]"
                        : "text-[#8d72ff]"
                    }`}
                  >
                    {card.sub}
                  </p>
                  <h3 className="mt-2 text-2xl font-extrabold text-[#314065]">
                    {card.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-5 xl:grid-cols-[1.05fr_0.95fr]">
          <div className="grid gap-4">
            {fantasyRows.map((row, index) => (
              <div
                key={row.title}
                className={`rounded-[30px] border border-white/60 p-6 shadow-[0_18px_40px_rgba(122,144,209,0.14)] backdrop-blur-xl ${
                  index === 0
                    ? "bg-[linear-gradient(135deg,rgba(97,240,189,0.18),rgba(255,255,255,0.45),rgba(87,182,255,0.12))]"
                    : index === 1
                    ? "bg-[linear-gradient(135deg,rgba(87,182,255,0.18),rgba(255,255,255,0.45),rgba(151,120,255,0.12))]"
                    : "bg-[linear-gradient(135deg,rgba(151,120,255,0.18),rgba(255,255,255,0.45),rgba(97,240,189,0.10))]"
                }`}
              >
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#6d7cff]">
                  {row.label}
                </p>
                <h3 className="mt-3 text-2xl font-extrabold text-[#314065]">
                  {row.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#6b7598]">{row.text}</p>
              </div>
            ))}
          </div>

          <div className="overflow-hidden rounded-[34px] border border-white/60 bg-white/40 shadow-[0_20px_50px_rgba(122,144,209,0.16)] backdrop-blur-xl">
            <div className="relative min-h-[520px]">
              <Image
                src="/images/img10.jpg"
                alt="fantasy final visual"
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(245,250,255,0.25)_8%,rgba(255,255,255,0.00)_52%,rgba(255,255,255,0.12)_100%)]" />
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#8d72ff]">
                  Final Fantasy Mood
                </p>
                <h2 className="mt-3 text-4xl font-extrabold text-[#314065]">
                  판타지는
                  <br />
                  밝을수록 더 신비로울 수 있어
                </h2>
                <p className="mt-4 max-w-lg text-sm leading-7 text-[#667493]">
                  시안 6은 어두운 웅장함보다, 빛과 색이 가득한 차원 세계로 재해석한 판타지존이야.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}