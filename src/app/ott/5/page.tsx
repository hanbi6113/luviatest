import Image from "next/image";
import Link from "next/link";

export default function OttPage5() {
  const warningTags = ["심리 공포", "폐쇄 공간", "괴담", "오컬트", "심야 추천"];

  const archiveList = [
    {
      title: "복도 끝의 문",
      category: "PSYCHOLOGICAL HORROR",
      desc: "열지 말라는 말을 들었을 때부터 이미 시작된 이야기.",
      image: "/images/img6.jpg",
    },
    {
      title: "마지막 통화 기록",
      category: "FOUND FOOTAGE",
      desc: "사라진 사람의 휴대폰에서 재생된 마지막 음성.",
      image: "/images/img7.jpg",
    },
    {
      title: "지하 4층",
      category: "CLOSED SPACE",
      desc: "분명 존재하지 않아야 하는 층에서 시작된 생존 기록.",
      image: "/images/img5.jpg",
    },
  ];

  const curationRows = [
    {
      label: "심야 편성",
      title: "지금 가장 무서운 이야기",
      text: "밤에 볼수록 더 선명해지는 심리 공포와 정적인 긴장감 중심 큐레이션.",
    },
    {
      label: "기록 아카이브",
      title: "문을 열면 안 되는 작품들",
      text: "금지된 공간, 남겨진 기록, 사라진 흔적 같은 설정이 강한 작품 모음.",
    },
    {
      label: "오래 남는 공포",
      title: "놀라기보다 기분이 나빠지는 작품",
      text: "단순 자극보다 불쾌한 여운과 몰입감이 긴 공포를 모았어.",
    },
  ];

  const rankingItems = [
    "Black Stairwell",
    "Night Tape 03",
    "Under the Sink",
    "Room Without Exit",
    "Silent Corridor",
  ];

  return (
    <main className="min-h-screen bg-[#090909] text-white">
      {/* background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#060606_0%,#0a0a0a_45%,#111111_100%)]" />
        <div className="absolute left-[-120px] top-[-100px] h-[320px] w-[320px] rounded-full bg-[#5a0d16]/25 blur-[110px]" />
        <div className="absolute right-[-90px] top-[120px] h-[260px] w-[260px] rounded-full bg-[#1e2a2d]/20 blur-[100px]" />
        <div className="absolute bottom-[-120px] left-[12%] h-[320px] w-[320px] rounded-full bg-[#3f0d12]/20 blur-[110px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 py-8 md:px-8 lg:px-10">
        {/* top bar */}
        <header className="mb-8 flex items-center justify-between border-b border-white/10 pb-5">
          <Link
            href="/"
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/75 transition hover:bg-white/10 hover:text-white"
          >
            ← 홈
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            <a href="#" className="text-sm text-white/60 transition hover:text-white">
              홈
            </a>
            <a href="#" className="text-sm text-white/60 transition hover:text-white">
              공포
            </a>
            <a href="#" className="text-sm text-white/60 transition hover:text-white">
              심리 스릴러
            </a>
            <a href="#" className="text-sm text-white/60 transition hover:text-white">
              오컬트
            </a>
            <a href="#" className="text-sm text-white/60 transition hover:text-white">
              생존
            </a>
          </div>

          <Link
            href="/creator/5"
            className="rounded-full bg-[#7f1822] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#68131c]"
          >
            작가 시안 5 보기 →
          </Link>
        </header>

        {/* hero area: 이전 시안과 다르게 좌/우 비대칭 + 오른쪽 스택 */}
        <section className="mb-12 grid gap-5 xl:grid-cols-[1.15fr_0.85fr]">
          {/* left main hero */}
          <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[#111111]">
            <div className="relative min-h-[620px]">
              <Image
                src="/images/img5.jpg"
                alt="horror main visual"
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 58vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.82)_8%,rgba(0,0,0,0.34)_40%,rgba(0,0,0,0.10)_100%)]" />
            </div>

            <div className="absolute left-0 right-0 top-0 flex items-center justify-between p-6">
              <div className="rounded-full border border-[#7f1822]/40 bg-black/35 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-[#d37b83] backdrop-blur-sm">
                Horror Zone · Concept 05
              </div>

              <div className="rounded-full border border-white/10 bg-black/35 px-4 py-2 text-xs font-medium text-white/65 backdrop-blur-sm">
                Restricted After Midnight
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.34em] text-[#c86b75]">
                NIGHT ARCHIVE
              </p>

              <h1 className="mt-3 max-w-3xl text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
                보고 나서도
                <br />
                계속 남는 공포
              </h1>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/72 sm:text-base">
                시안 5는 장난스러운 핼러윈 무드가 아니라,
                정적이고 불길하며 기록물처럼 오래 남는 공포를 보여주는 OTT야.
                놀라는 순간보다, 보고 난 뒤 더 기분이 나빠지는 심리 공포와 폐쇄 공간의 긴장감을 중심으로 잡았어.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <button className="rounded-full bg-[#7f1822] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#68131c]">
                  지금 재생
                </button>
                <button className="rounded-full border border-white/15 bg-black/35 px-5 py-3 text-sm font-medium text-white/85 transition hover:bg-white/10">
                  예고편 보기
                </button>
                <button className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/70 transition hover:bg-white/10">
                  기록 저장
                </button>
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                {warningTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-xs font-medium text-white/70 backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* right stack */}
          <div className="grid gap-5">
            <div className="overflow-hidden rounded-[30px] border border-white/10 bg-[#111111] shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
              <div className="relative h-[250px]">
                <Image
                  src="/images/img6.jpg"
                  alt="secondary horror visual"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 100vw, 35vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.68)_12%,rgba(0,0,0,0.10)_58%,rgba(0,0,0,0)_100%)]" />
              </div>

              <div className="p-5">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#b96c73]">
                  Warning
                </p>
                <h2 className="mt-2 text-2xl font-extrabold text-white">
                  새벽 이후 시청 권장
                </h2>
                <p className="mt-3 text-sm leading-7 text-white/65">
                  조용한 공간에서 볼수록 더 강하게 작동하는 공포 큐레이션.
                </p>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-1">
              <div className="rounded-[28px] border border-white/10 bg-[#101010] p-5 shadow-[0_18px_40px_rgba(0,0,0,0.30)]">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#b66d75]">
                  Fear Index
                </p>
                <p className="mt-3 text-5xl font-extrabold text-white">96</p>
                <p className="mt-2 text-sm text-white/55">오늘의 공포 지수</p>
                <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[96%] rounded-full bg-[linear-gradient(90deg,#7f1822,#c45c67)]" />
                </div>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-[#101010] p-5 shadow-[0_18px_40px_rgba(0,0,0,0.30)]">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#7f8c91]">
                  Archive Type
                </p>
                <p className="mt-3 text-2xl font-extrabold text-white">
                  Found Footage / Occult / Closed Space
                </p>
                <p className="mt-3 text-sm leading-7 text-white/55">
                  기록물과 공간형 공포 중심의 다크 큐레이션 구조
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* archive section: 이전 시안과 다르게 세로 나열 포스터 느낌 */}
        <section className="mb-12">
          <div className="mb-5 flex items-end justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.30em] text-[#b86e76]">
                Archive Selection
              </p>
              <h2 className="mt-2 text-3xl font-extrabold text-white">
                기록된 괴담 아카이브
              </h2>
            </div>
            <span className="text-sm font-medium text-white/45">Selected 3</span>
          </div>

          <div className="space-y-5">
            {archiveList.map((item) => (
              <article
                key={item.title}
                className="grid overflow-hidden rounded-[30px] border border-white/10 bg-[#111111] shadow-[0_18px_45px_rgba(0,0,0,0.35)] md:grid-cols-[0.85fr_1.15fr]"
              >
                <div className="relative min-h-[260px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.30)_10%,rgba(0,0,0,0.04)_48%,rgba(0,0,0,0)_100%)]" />
                </div>

                <div className="flex flex-col justify-center p-6 md:p-8">
                  <p className="text-xs font-bold uppercase tracking-[0.26em] text-[#b56c73]">
                    {item.category}
                  </p>
                  <h3 className="mt-3 text-3xl font-extrabold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-white/62 md:text-base">
                    {item.desc}
                  </p>

                  <div className="mt-6">
                    <button className="rounded-full border border-white/12 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white/80 transition hover:bg-white/10">
                      기록 열람
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* lower split */}
        <section className="grid gap-5 xl:grid-cols-[0.9fr_1.1fr]">
          {/* ranking */}
          <div className="rounded-[30px] border border-white/10 bg-[#101010] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.30)]">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-2xl font-extrabold text-white">실시간 공포 순위</h2>
              <span className="text-sm text-white/40">오늘 기준</span>
            </div>

            <div className="space-y-3">
              {rankingItems.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center justify-between rounded-[20px] border border-white/8 bg-white/[0.03] px-4 py-4"
                >
                  <div className="flex items-center gap-4">
                    <span className="w-7 text-lg font-extrabold text-[#b24f5a]">
                      {index + 1}
                    </span>
                    <span className="font-medium text-white/90">{item}</span>
                  </div>
                  <span className="text-sm text-white/40">Horror</span>
                </div>
              ))}
            </div>
          </div>

          {/* curation notes */}
          <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-1">
            {curationRows.map((row) => (
              <div
                key={row.title}
                className="rounded-[28px] border border-white/10 bg-[linear-gradient(135deg,#121212_0%,#0d0d0d_100%)] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.30)]"
              >
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#b46b73]">
                  {row.label}
                </p>
                <h3 className="mt-3 text-2xl font-extrabold leading-snug text-white">
                  {row.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/60">{row.text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}