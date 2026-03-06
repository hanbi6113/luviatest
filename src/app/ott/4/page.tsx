import Image from "next/image";
import Link from "next/link";

export default function OttPage4() {
  const heroTags = ["첫사랑", "재회", "감정선", "관계성", "멜로"];

  const featureRows = [
    {
      title: "지금 가장 설레는 이야기",
      desc: "가볍고 귀여운 로맨스가 아니라, 감정이 천천히 쌓이고 관계가 깊어지는 작품들.",
      image: "/images/img2.jpg",
      genre: "ROMANCE · NOW",
    },
    {
      title: "관계가 오래 남는 작품",
      desc: "한 장면의 예쁨보다 두 사람의 거리와 타이밍이 기억에 남는 로맨스 큐레이션.",
      image: "/images/img3.jpg",
      genre: "RELATIONSHIP · PICK",
    },
  ];

  const editorialCards = [
    {
      title: "Moonlight Letter",
      subtitle: "재회 끝에 다시 마주한 사랑",
      desc: "말하지 못했던 시간들이 다시 이어지는 조용한 멜로.",
      image: "/images/img4.jpg",
    },
    {
      title: "Your Slow Season",
      subtitle: "천천히 스며드는 감정",
      desc: "급하게 타오르기보다, 오래 마음에 머무는 사랑 이야기.",
      image: "/images/img1.jpg",
    },
    {
      title: "The Distance Between Us",
      subtitle: "멀어질수록 선명해지는 마음",
      desc: "관계의 균열과 그 안에서 피어나는 진심을 담은 로맨스.",
      image: "/images/img2.jpg",
    },
  ];

  const themeCards = [
    {
      title: "재회와 타이밍",
      text: "다시 만난 두 사람의 늦은 감정선.",
    },
    {
      title: "밤에 보기 좋은 멜로",
      text: "조용한 여운이 오래 남는 사랑 이야기.",
    },
    {
      title: "감정선이 진한 작품",
      text: "대사보다 눈빛과 거리감이 중요한 로맨스.",
    },
    {
      title: "관계성이 좋은 이야기",
      text: "설정이 아니라 관계로 끌고 가는 작품들.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#fff7f8] text-[#4b343a]">
      {/* 배경 */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#fff8f9_0%,#fff1f4_30%,#fff4f1_62%,#fffaf8_100%)]" />
        <div className="absolute left-[-80px] top-[-60px] h-[280px] w-[280px] rounded-full bg-[#f2bfd0]/55 blur-[90px]" />
        <div className="absolute right-[-80px] top-[90px] h-[260px] w-[260px] rounded-full bg-[#f7cfd8]/45 blur-[90px]" />
        <div className="absolute bottom-[-90px] left-[12%] h-[260px] w-[260px] rounded-full bg-[#ffe4d9]/55 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 py-8 md:px-8 lg:px-10">
        {/* top bar */}
        <div className="mb-8 flex items-center justify-between border-b border-[#f0cfd8]/70 pb-5">
          <Link
            href="/"
            className="rounded-full border border-[#efc9d3] bg-white/80 px-4 py-2 text-sm font-medium text-[#a7687d] transition hover:bg-white"
          >
            ← 홈
          </Link>

          <div className="hidden items-center gap-7 md:flex">
            <a href="#" className="text-sm text-[#b06c82] transition hover:text-[#8f4f66]">
              홈
            </a>
            <a href="#" className="text-sm text-[#b06c82] transition hover:text-[#8f4f66]">
              로맨스
            </a>
            <a href="#" className="text-sm text-[#b06c82] transition hover:text-[#8f4f66]">
              멜로
            </a>
            <a href="#" className="text-sm text-[#b06c82] transition hover:text-[#8f4f66]">
              청춘
            </a>
            <a href="#" className="text-sm text-[#b06c82] transition hover:text-[#8f4f66]">
              관계 중심
            </a>
          </div>

          <Link
            href="/creator/4"
            className="rounded-full bg-[#cf6f8d] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#b95f7d]"
          >
            작가 시안 4 보기 →
          </Link>
        </div>

        {/* hero */}
        <section className="mb-14 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="flex flex-col justify-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.34em] text-[#c06f87]">
              Romance Zone · Concept 04
            </p>

            <h1 className="max-w-xl text-4xl font-extrabold leading-[1.12] text-[#553840] sm:text-5xl lg:text-6xl">
              사랑이
              <br />
              가장 선명해지는 순간
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-7 text-[#7e6570] sm:text-base">
              시안 2의 몽글몽글한 로맨스 판타지와 다르게,
              이번 시안 4는 사랑의 감정과 관계 자체를 더 직접적으로 보여주는 로맨스존이야.
              귀엽고 신비로운 분위기보다, 설렘과 거리감, 타이밍과 여운이 남는 로맨스로 잡았어.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <button className="rounded-full bg-[#cf6f8d] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#b95f7d]">
                지금 보기
              </button>
              <button className="rounded-full border border-[#f0c8d4] bg-white/75 px-5 py-3 text-sm font-medium text-[#9a6475] transition hover:bg-white">
                예고편 보기
              </button>
              <button className="rounded-full border border-[#f3d7df] bg-[#fff9fb] px-5 py-3 text-sm font-medium text-[#b16f84] transition hover:bg-white">
                찜하기 +
              </button>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {heroTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#f0c8d4] bg-[#fff8fb] px-3 py-1.5 text-xs font-medium text-[#b06c82]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[24px] border border-[#f1d6de] bg-white/75 p-5">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#c07a92]">
                  Emotion Match
                </p>
                <p className="mt-3 text-4xl font-extrabold text-[#553840]">94%</p>
                <p className="mt-2 text-sm text-[#846975]">오늘의 감정선 일치도</p>
              </div>

              <div className="rounded-[24px] border border-[#f3ddd5] bg-[#fff8f5] p-5">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#c28b77]">
                  Romance Tone
                </p>
                <p className="mt-3 text-2xl font-extrabold text-[#6b4f4d]">
                  Warm / Deep / Intimate
                </p>
                <p className="mt-2 text-sm text-[#8c726d]">
                  사랑이라는 감정 자체를 더 진하게 보여주는 톤
                </p>
              </div>
            </div>
          </div>

          {/* 오른쪽 이미지 중심 레이아웃 */}
          <div className="grid gap-4 md:grid-cols-[1.05fr_0.95fr]">
            <div className="relative min-h-[560px] overflow-hidden rounded-[34px] border border-[#f1d4dc] shadow-[0_28px_60px_rgba(192,116,142,0.14)]">
              <Image
                src="/images/img1.jpg"
                alt="romance hero main"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(78,42,49,0.38)_8%,rgba(78,42,49,0.08)_45%,rgba(255,255,255,0)_100%)]" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/78">
                  MAIN PICK
                </p>
                <h2 className="mt-2 text-3xl font-extrabold text-white">
                  When Love Stays
                </h2>
                <p className="mt-3 max-w-md text-sm leading-6 text-white/82">
                  가장 예쁜 장면보다, 가장 오래 남는 마음을 보여주는 대표 로맨스.
                </p>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="relative min-h-[272px] overflow-hidden rounded-[30px] border border-[#f1d6de] shadow-[0_20px_45px_rgba(192,116,142,0.10)]">
                <Image
                  src="/images/img4.jpg"
                  alt="romance sub visual 1"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 25vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(82,46,53,0.30)_10%,rgba(82,46,53,0.06)_48%,rgba(255,255,255,0)_100%)]" />
              </div>

              <div className="rounded-[30px] border border-[#f2ddd7] bg-[#fff7f4] p-6 shadow-[0_18px_40px_rgba(192,116,142,0.08)]">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#c37c92]">
                  Editor&apos;s Note
                </p>
                <p className="mt-3 text-2xl font-extrabold leading-snug text-[#5a3d43]">
                  사랑은
                  <br />
                  화려함보다 타이밍에 가까워
                </p>
                <p className="mt-3 text-sm leading-7 text-[#80656c]">
                  이번 시안은 판타지적 세계관보다, 서로를 바라보는 시선과 감정의 온도를 중심으로 구성했어.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 가로형 큐레이션 */}
        <section className="mb-14">
          <div className="mb-5 flex items-end justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#c06f87]">
                Editorial Curation
              </p>
              <h2 className="mt-2 text-3xl font-extrabold text-[#553840]">
                지금 가장 설레는 이야기
              </h2>
            </div>
            <span className="text-sm font-medium text-[#a17a84]">See all →</span>
          </div>

          <div className="space-y-5">
            {featureRows.map((item) => (
              <article
                key={item.title}
                className="grid overflow-hidden rounded-[30px] border border-[#f1d6de] bg-white/78 shadow-[0_20px_45px_rgba(192,116,142,0.08)] md:grid-cols-[0.95fr_1.05fr]"
              >
                <div className="relative min-h-[240px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 45vw"
                  />
                </div>

                <div className="flex flex-col justify-center p-7 md:p-9">
                  <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#c07a92]">
                    {item.genre}
                  </p>
                  <h3 className="mt-3 text-3xl font-extrabold leading-tight text-[#563b41]">
                    {item.title}
                  </h3>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-[#78656a] md:text-base">
                    {item.desc}
                  </p>

                  <div className="mt-6">
                    <button className="rounded-full border border-[#efc9d3] bg-[#fff8fb] px-5 py-2.5 text-sm font-semibold text-[#a96e80] transition hover:bg-white">
                      자세히 보기
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 3단 에디토리얼 카드 */}
        <section className="mb-14">
          <div className="mb-5 flex items-end justify-between">
            <h2 className="text-3xl font-extrabold text-[#553840]">
              여운이 오래 남는 로맨스
            </h2>
            <span className="text-sm font-medium text-[#a17a84]">Selected 3</span>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {editorialCards.map((card) => (
              <article
                key={card.title}
                className="overflow-hidden rounded-[28px] border border-[#f1d6de] bg-white/82 shadow-[0_18px_40px_rgba(192,116,142,0.08)]"
              >
                <div className="relative h-[280px]">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>

                <div className="p-6">
                  <p className="text-sm font-semibold text-[#c07a92]">{card.subtitle}</p>
                  <h3 className="mt-2 text-2xl font-extrabold text-[#563b41]">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#79666b]">{card.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* theme section */}
        <section className="pb-10">
          <div className="mb-5 flex items-end justify-between">
            <h2 className="text-3xl font-extrabold text-[#553840]">
              사랑의 테마별 큐레이션
            </h2>
            <span className="text-sm font-medium text-[#a17a84]">Theme based</span>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {themeCards.map((item) => (
              <div
                key={item.title}
                className="rounded-[24px] border border-[#f0d7de] bg-[#fffafc] p-5 shadow-[0_14px_30px_rgba(192,116,142,0.06)]"
              >
                <p className="text-lg font-extrabold text-[#563b41]">{item.title}</p>
                <p className="mt-3 text-sm leading-7 text-[#7a676c]">{item.text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}