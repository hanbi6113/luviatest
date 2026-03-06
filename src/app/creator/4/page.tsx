import Image from "next/image";
import Link from "next/link";

export default function CreatorPage4() {
  const notes = [
    {
      label: "감정선 노트",
      title: "고백 직전의 거리감",
      desc: "두 인물이 아직 완전히 가까워지지 않은 상태에서 시선과 침묵으로 긴장감을 만드는 장면.",
    },
    {
      label: "관계 변화",
      title: "재회 이후의 미묘한 온도",
      desc: "과거의 감정과 현재의 거리감이 동시에 느껴지도록 대사 톤을 조정하는 구간.",
    },
  ];

  const quickActions = [
    "새 로맨스 작품 시작",
    "인물 관계 편집",
    "감정 장면 정리",
    "대사 톤 점검",
  ];

  const sceneCards = [
    {
      title: "관계도 정리",
      desc: "주인공 사이의 감정 변화와 관계 축을 정리합니다.",
      image: "/images/img2.jpg",
    },
    {
      title: "장면 흐름 구성",
      desc: "설렘, 갈등, 재회 등 핵심 장면의 순서를 구성합니다.",
      image: "/images/img3.jpg",
    },
    {
      title: "공개 준비",
      desc: "소개 문구, 대표 장면, 표지 톤을 최종 확인합니다.",
      image: "/images/img4.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-[#faf6f2] text-[#3d3032]">
      {/* 배경 */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#faf6f2_0%,#f8f3ef_35%,#f6f1ed_100%)]" />
        <div className="absolute left-[-90px] top-[-70px] h-[260px] w-[260px] rounded-full bg-[#e7d0cf]/60 blur-[90px]" />
        <div className="absolute right-[-70px] top-[110px] h-[230px] w-[230px] rounded-full bg-[#e8ddd3]/60 blur-[90px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 py-8 md:px-8 lg:px-10">
        {/* nav */}
        <div className="mb-8 flex items-center justify-between border-b border-[#cfb8b8]/40 pb-5">
          <Link
            href="/"
            className="rounded-full border border-[#d4bfc0] bg-white/75 px-4 py-2 text-sm font-medium text-[#7a6264] transition hover:bg-white"
          >
            ← 홈
          </Link>

          <Link
            href="/ott/4"
            className="rounded-full bg-[#8a6266] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#724d51]"
          >
            OTT 시안 4 보기 →
          </Link>
        </div>

        {/* header */}
        <section className="mb-10 grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[34px] border border-[#ddcbcb] bg-white/78 p-7 shadow-[0_24px_54px_rgba(120,80,86,0.10)]">
            <p className="text-xs font-bold uppercase tracking-[0.34em] text-[#9b7277]">
              Romance Creator Studio
            </p>

            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-[#433133] sm:text-5xl">
              사랑의 흐름을
              <br />
              설계하는 작업실
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#6e5d60] sm:text-base">
              시안 2처럼 귀엽고 화사한 제작실이 아니라,
              이번 시안 4는 로맨스 작품의 감정선과 관계를 더 정교하게 다루는 편집형 작업 공간이야.
              예쁨보다 정리와 집중, 판타지보다 사랑의 흐름 자체에 초점을 맞췄어.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <button className="rounded-full bg-[#8a6266] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#724d51]">
                새 작품 만들기
              </button>
              <button className="rounded-full border border-[#d1bcbc] bg-white/80 px-5 py-3 text-sm font-medium text-[#7a6064] transition hover:bg-white">
                감정선 편집
              </button>
              <button className="rounded-full border border-[#ddd1cf] bg-[#f8f3f0] px-5 py-3 text-sm font-medium text-[#8a6d6b] transition hover:bg-white">
                공개 준비
              </button>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[22px] border border-[#dbc9c8] bg-[#faf6f3] p-4">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#a2787d]">
                  Current Work
                </p>
                <p className="mt-3 text-3xl font-extrabold text-[#433032]">05</p>
                <p className="mt-2 text-sm text-[#7a6769]">진행 중인 로맨스 작품</p>
              </div>

              <div className="rounded-[22px] border border-[#ddd0c7] bg-[#faf5ef] p-4">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#9c7f6d]">
                  Scene Notes
                </p>
                <p className="mt-3 text-3xl font-extrabold text-[#433032]">18</p>
                <p className="mt-2 text-sm text-[#7a6769]">저장된 감정 장면</p>
              </div>

              <div className="rounded-[22px] border border-[#d8c9ca] bg-[#f8f3f2] p-4">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#9e7378]">
                  Relationships
                </p>
                <p className="mt-3 text-3xl font-extrabold text-[#433032]">08</p>
                <p className="mt-2 text-sm text-[#7a6769]">관리 중인 관계 축</p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[34px] border border-[#dbc8c9] shadow-[0_24px_54px_rgba(120,80,86,0.10)] min-h-[520px]">
            <Image
              src="/images/img1.jpg"
              alt="creator romance main"
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 45vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(41,25,28,0.46)_10%,rgba(41,25,28,0.12)_45%,rgba(255,255,255,0)_100%)]" />
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/75">
                ACTIVE PROJECT
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-white">
                Love, Written Slowly
              </h2>
              <p className="mt-3 max-w-md text-sm leading-6 text-white/80">
                현재 작업 중인 대표 프로젝트. 감정선과 관계 변화 중심으로 구성된 로맨스 작품.
              </p>
            </div>
          </div>
        </section>

        {/* 본문: 시안2와 다르게 workflow 박스 나열 대신 편집 패널형 */}
        <section className="mb-10 grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
          {/* 왼쪽 큰 패널 */}
          <div className="rounded-[34px] border border-[#dccaca] bg-white/80 p-6 shadow-[0_20px_45px_rgba(120,80,86,0.08)]">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#9f757a]">
                  Main Editing Panel
                </p>
                <h2 className="mt-2 text-3xl font-extrabold text-[#433032]">
                  현재 작업 중인 작품
                </h2>
              </div>

              <button className="rounded-full border border-[#ceb7b7] bg-[#faf6f4] px-4 py-2 text-sm font-medium text-[#7b6064] transition hover:bg-white">
                전체 보기
              </button>
            </div>

            <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="relative min-h-[320px] overflow-hidden rounded-[28px] border border-[#d9c6c7]">
                <Image
                  src="/images/img4.jpg"
                  alt="current work preview"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>

              <div className="flex flex-col justify-center">
                <p className="text-xs font-bold uppercase tracking-[0.26em] text-[#9c7177]">
                  WORK IN PROGRESS
                </p>
                <h3 className="mt-3 text-3xl font-extrabold text-[#433032]">
                  The Moment We Stayed
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#6f5f62]">
                  재회 이후 다시 가까워지는 두 인물의 감정 흐름을 중심으로 작업 중인 로맨스 작품.
                  이번 회차에서는 대사보다 거리감과 시선의 온도를 더 중요하게 다루고 있어.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[20px] border border-[#dcc8c8] bg-[#faf6f3] p-4">
                    <p className="text-sm font-bold text-[#4b3638]">현재 회차</p>
                    <p className="mt-2 text-sm text-[#796466]">EP 12 · 고백 직전</p>
                  </div>

                  <div className="rounded-[20px] border border-[#ddd1c9] bg-[#faf6f0] p-4">
                    <p className="text-sm font-bold text-[#4b3638]">상태</p>
                    <p className="mt-2 text-sm text-[#796466]">감정선 점검 중</p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <button className="rounded-full bg-[#8a6266] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#724d51]">
                    작품 수정
                  </button>
                  <button className="rounded-full border border-[#cfbaba] bg-white/80 px-5 py-3 text-sm font-medium text-[#7b6064] transition hover:bg-white">
                    장면 노트 보기
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 오른쪽 노트 패널 */}
          <div className="space-y-5">
            {notes.map((item) => (
              <div
                key={item.title}
                className="rounded-[28px] border border-[#dccaca] bg-white/82 p-6 shadow-[0_18px_40px_rgba(120,80,86,0.08)]"
              >
                <p className="text-xs font-bold uppercase tracking-[0.26em] text-[#9f757a]">
                  {item.label}
                </p>
                <h3 className="mt-3 text-2xl font-extrabold text-[#433032]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#6f5f62]">{item.desc}</p>
              </div>
            ))}

            <div className="rounded-[28px] border border-[#dccaca] bg-[#f8f3f1] p-6 shadow-[0_18px_40px_rgba(120,80,86,0.06)]">
              <p className="text-xs font-bold uppercase tracking-[0.26em] text-[#9f757a]">
                Quick Actions
              </p>
              <div className="mt-4 flex flex-col gap-3">
                {quickActions.map((action) => (
                  <button
                    key={action}
                    className="rounded-full border border-[#d2bebe] bg-white/85 px-4 py-3 text-left text-sm font-medium text-[#765f62] transition hover:bg-white"
                  >
                    {action}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 하단 3개 기능 카드 */}
        <section className="pb-10">
          <div className="mb-5 flex items-end justify-between">
            <h2 className="text-3xl font-extrabold text-[#433032]">
              로맨스 제작 핵심 패널
            </h2>
            <span className="text-sm font-medium text-[#8f6e73]">3 panels</span>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {sceneCards.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-[28px] border border-[#dbc9c9] bg-white/82 shadow-[0_18px_40px_rgba(120,80,86,0.08)]"
              >
                <div className="relative h-[220px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-extrabold text-[#433032]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#6f5f62]">{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}