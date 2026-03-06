import Image from "next/image";
import Link from "next/link";

export default function CreatorPage8() {
  const workflow = [
    {
      title: "새 이야기 만들기",
      desc: "아이들이 좋아할 세계와 주인공을 쉽게 시작해요.",
      color: "yellow",
    },
    {
      title: "캐릭터 추가하기",
      desc: "동물 친구, 아이 주인공, 귀여운 조연을 설정해요.",
      color: "blue",
    },
    {
      title: "장면 순서 정리",
      desc: "처음, 모험, 위기, 해결, 교훈 흐름을 나눠요.",
      color: "pink",
    },
    {
      title: "연령대 고르기",
      desc: "유아용, 키즈용, 가족용 중에 맞는 톤을 골라요.",
      color: "purple",
    },
  ];

  const previewCards = [
    {
      title: "동물 친구 프로젝트",
      desc: "말하고 뛰어노는 친구들이 중심이 되는 이야기.",
      image: "/images/img15.jpg",
    },
    {
      title: "노래와 율동 시리즈",
      desc: "쉽게 따라 할 수 있는 노래형 콘텐츠.",
      image: "/images/img16.jpg",
    },
    {
      title: "상상력 모험 동화",
      desc: "별, 구름, 마을, 놀이터를 무대로 한 모험형 콘텐츠.",
      image: "/images/img17.jpg",
    },
  ];

  const sideMenu = [
    "대시보드",
    "작품 만들기",
    "캐릭터",
    "장면 흐름",
    "연령 설정",
    "공개하기",
  ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#fff9f1] text-[#5b4b5f]">
      {/* background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#fffdf8_0%,#fff7ea_28%,#f4fbff_60%,#f8f1ff_100%)]" />
        <div className="absolute left-[-90px] top-[-60px] h-[280px] w-[280px] rounded-full bg-[#ffd866]/35 blur-[90px]" />
        <div className="absolute right-[-80px] top-[30px] h-[280px] w-[280px] rounded-full bg-[#8ed8ff]/32 blur-[90px]" />
        <div className="absolute bottom-[-80px] left-[16%] h-[250px] w-[250px] rounded-full bg-[#ff9fd4]/25 blur-[90px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 py-8 md:px-8 lg:px-10">
        {/* nav */}
        <div className="mb-8 flex items-center justify-between">
          <Link
            href="/"
            className="rounded-full border-2 border-[#ffd98c] bg-white px-4 py-2 text-sm font-bold text-[#c7882d] shadow-sm transition hover:-translate-y-0.5"
          >
            ← 홈
          </Link>

          <Link
            href="/ott/8"
            className="rounded-full bg-[linear-gradient(135deg,#ffb84d,#ff7fc7,#7fcfff)] px-4 py-2 text-sm font-bold text-white shadow-[0_10px_22px_rgba(255,160,120,0.25)] transition hover:brightness-105"
          >
            OTT 시안 8 보기 →
          </Link>
        </div>

        {/* studio layout */}
        <section className="grid gap-6 xl:grid-cols-[290px_1fr]">
          {/* left menu */}
          <aside className="space-y-5">
            <div className="rounded-[34px] border-2 border-[#ffd98c] bg-white/85 p-6 shadow-[0_18px_40px_rgba(255,210,120,0.14)]">
              <p className="text-xs font-extrabold uppercase tracking-[0.30em] text-[#ff944d]">
                Kids Creator
              </p>
              <h1 className="mt-3 text-3xl font-extrabold leading-tight text-[#5b4b5f]">
                쉽고 귀여운
                <br />
                키즈 콘텐츠 작업실
              </h1>
              <p className="mt-4 text-sm leading-7 text-[#857990]">
                복잡한 설정 없이 아이들이 좋아할 콘텐츠를 쉽게 만들 수 있게 잡은 시안이야.
              </p>
            </div>

            <div className="rounded-[34px] border-2 border-[#d7e8ff] bg-white/85 p-4 shadow-[0_18px_40px_rgba(180,205,255,0.14)]">
              <div className="space-y-2">
                {sideMenu.map((item, index) => (
                  <button
                    key={item}
                    className={`flex w-full items-center justify-between rounded-[18px] px-4 py-3 text-left text-sm font-extrabold transition ${
                      index === 0
                        ? "bg-[linear-gradient(135deg,#fff0b2,#ffe1f1)] text-[#5b4b5f]"
                        : "bg-white text-[#8a7f97] hover:bg-[#fffaf3] hover:text-[#5b4b5f]"
                    }`}
                  >
                    <span>{item}</span>
                    {index === 0 && <span className="text-[#ff9d54]">●</span>}
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-[34px] border-2 border-[#bfe9ff] bg-[#eefaff] p-5 shadow-[0_18px_40px_rgba(130,210,255,0.14)]">
              <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#58a4cf]">
                Easy Level
              </p>
              <p className="mt-3 text-5xl font-extrabold text-[#5b4b5f]">95</p>
              <p className="mt-2 text-sm text-[#7b87a1]">쉬운 제작 흐름 지수</p>
            </div>
          </aside>

          {/* right content */}
          <div className="space-y-6">
            {/* top hero */}
            <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
              <div className="rounded-[38px] border-2 border-[#ffd98c] bg-white/88 p-6 shadow-[0_22px_48px_rgba(255,210,120,0.14)]">
                <p className="text-xs font-extrabold uppercase tracking-[0.30em] text-[#ff944d]">
                  Kids Studio Board
                </p>
                <h2 className="mt-4 text-4xl font-extrabold leading-tight text-[#5b4b5f]">
                  아이들이 좋아할
                  <br />
                  이야기를 만드는 곳
                </h2>
                <p className="mt-5 max-w-2xl text-sm leading-7 text-[#857990] sm:text-base">
                  유아·키즈형 시안이라서 전체 구조도 쉽고 직관적으로 잡았어.
                  캐릭터, 장면, 연령, 이야기 흐름을 어렵지 않게 만드는 작업실 느낌이야.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <button className="rounded-full bg-[linear-gradient(135deg,#ffb84d,#ff8e4d)] px-5 py-3 text-sm font-extrabold text-white shadow-[0_12px_22px_rgba(255,170,90,0.28)] transition hover:brightness-105">
                    새 작품 만들기
                  </button>
                  <button className="rounded-full border-2 border-[#ffd995] bg-white px-5 py-3 text-sm font-bold text-[#bf8531] transition hover:bg-[#fff9ef]">
                    미리보기 보기
                  </button>
                </div>
              </div>

              <div className="overflow-hidden rounded-[38px] border-2 border-[#d7e8ff] bg-white/88 shadow-[0_22px_48px_rgba(180,205,255,0.14)]">
                <div className="relative min-h-[360px]">
                  <Image
                    src="/images/img16.jpg"
                    alt="kids creator hero"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1280px) 100vw, 45vw"
                  />
                </div>
              </div>
            </div>

            {/* workflow cards */}
            <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
              {workflow.map((item) => (
                <div
                  key={item.title}
                  className={`rounded-[30px] border-2 p-5 shadow-[0_18px_40px_rgba(180,180,220,0.12)] ${
                    item.color === "yellow"
                      ? "border-[#ffd98c] bg-[#fff8e7]"
                      : item.color === "blue"
                      ? "border-[#bfe9ff] bg-[#effaff]"
                      : item.color === "pink"
                      ? "border-[#ffd4e8] bg-[#fff5fa]"
                      : "border-[#e0d0ff] bg-[#f8f3ff]"
                  }`}
                >
                  <h3 className="text-2xl font-extrabold text-[#5b4b5f]">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#857990]">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* preview cards */}
            <div>
              <div className="mb-5 flex items-end justify-between">
                <h2 className="text-3xl font-extrabold text-[#5b4b5f]">
                  키즈 제작 미리보기
                </h2>
                <span className="text-sm font-bold text-[#8a7f97]">3 previews</span>
              </div>

              <div className="grid gap-5 lg:grid-cols-3">
                {previewCards.map((card, index) => (
                  <article
                    key={card.title}
                    className={`overflow-hidden rounded-[34px] border-2 bg-white/88 shadow-[0_20px_45px_rgba(200,180,255,0.12)] ${
                      index === 0
                        ? "border-[#ffd98c]"
                        : index === 1
                        ? "border-[#bfe9ff]"
                        : "border-[#e0d0ff]"
                    }`}
                  >
                    <div className="relative h-[250px]">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 33vw"
                      />
                    </div>

                    <div className="p-6">
                      <h3 className="text-2xl font-extrabold text-[#5b4b5f]">
                        {card.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-[#857990]">{card.desc}</p>
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