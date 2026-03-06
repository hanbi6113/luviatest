import Image from "next/image";
import Link from "next/link";

export default function CreatorPage5() {
  const sideMenu = [
    "대시보드",
    "작품 관리",
    "장면 연출",
    "긴장 타이밍",
    "사운드/분위기 메모",
    "공개 설정",
  ];

  const sceneNotes = [
    {
      title: "불 꺼진 복도",
      desc: "카메라 이동 없이 정적만으로 압박을 주는 오프닝 장면.",
      status: "연출 메모",
    },
    {
      title: "두 번째 발소리",
      desc: "관객이 먼저 이상함을 눈치채게 만드는 사운드 중심 장면.",
      status: "사운드 체크",
    },
    {
      title: "문 안쪽의 그림자",
      desc: "직접 보여주지 않고 존재감을 남기는 클로징 컷.",
      status: "최종 수정",
    },
  ];

  const toolPanels = [
    {
      title: "공포 톤 조절",
      desc: "고어보다 심리 압박 위주인지, 점프스케어를 얼마나 사용할지 조절합니다.",
      image: "/images/img5.jpg",
    },
    {
      title: "장면 전환 설계",
      desc: "침묵, 정지, 컷 전환 타이밍으로 긴장감을 설계합니다.",
      image: "/images/img6.jpg",
    },
    {
      title: "괴담 설정 정리",
      desc: "공간 규칙, 금기 사항, 반복되는 징후를 문서화합니다.",
      image: "/images/img7.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white">
      {/* background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#070707_0%,#0b0b0b_50%,#111111_100%)]" />
        <div className="absolute left-[-110px] top-[-70px] h-[280px] w-[280px] rounded-full bg-[#4c1118]/20 blur-[100px]" />
        <div className="absolute right-[-90px] top-[120px] h-[250px] w-[250px] rounded-full bg-[#182326]/15 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 py-8 md:px-8 lg:px-10">
        {/* nav */}
        <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-5">
          <Link
            href="/"
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/75 transition hover:bg-white/10 hover:text-white"
          >
            ← 홈
          </Link>

          <Link
            href="/ott/5"
            className="rounded-full bg-[#7f1822] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#68131c]"
          >
            OTT 시안 5 보기 →
          </Link>
        </div>

        {/* 전체 구조: 좌측 컨트롤 컬럼 + 우측 작업 보드 */}
        <section className="grid gap-6 xl:grid-cols-[280px_1fr]">
          {/* left control column */}
          <aside className="space-y-5">
            <div className="rounded-[30px] border border-white/10 bg-[#111111] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
              <p className="text-xs font-bold uppercase tracking-[0.30em] text-[#b46e76]">
                Horror Creator
              </p>
              <h1 className="mt-3 text-3xl font-extrabold leading-tight text-white">
                공포를 설계하는
                <br />
                작업 보드
              </h1>
              <p className="mt-4 text-sm leading-7 text-white/58">
                공포 작품의 장면 연출, 긴장 타이밍, 사운드 포인트를 정리하는 시안 5 작가 페이지야.
                단순히 어두운 관리자 화면이 아니라, 공포를 만드는 스튜디오처럼 보이도록 구성했어.
              </p>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-[#101010] p-4 shadow-[0_18px_40px_rgba(0,0,0,0.30)]">
              <div className="space-y-2">
                {sideMenu.map((menu, index) => (
                  <button
                    key={menu}
                    className={`flex w-full items-center justify-between rounded-[18px] px-4 py-3 text-left text-sm font-medium transition ${
                      index === 0
                        ? "bg-[#7f1822]/15 text-white"
                        : "bg-transparent text-white/62 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <span>{menu}</span>
                    {index === 0 && <span className="text-[#d17a82]">●</span>}
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-[#101010] p-5 shadow-[0_18px_40px_rgba(0,0,0,0.30)]">
              <p className="text-xs font-bold uppercase tracking-[0.26em] text-[#7d8c90]">
                Tension Level
              </p>
              <p className="mt-3 text-5xl font-extrabold text-white">89</p>
              <p className="mt-2 text-sm text-white/52">현재 작품 긴장도 지수</p>
              <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[89%] rounded-full bg-[linear-gradient(90deg,#7f1822,#ba5c67)]" />
              </div>
            </div>
          </aside>

          {/* right workspace */}
          <div className="space-y-6">
            {/* top workspace header */}
            <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
              <div className="overflow-hidden rounded-[34px] border border-white/10 bg-[#111111] shadow-[0_22px_50px_rgba(0,0,0,0.35)]">
                <div className="relative min-h-[420px]">
                  <Image
                    src="/images/img7.jpg"
                    alt="current horror project"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1280px) 100vw, 55vw"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.82)_10%,rgba(0,0,0,0.20)_50%,rgba(0,0,0,0.02)_100%)]" />

                  <div className="absolute bottom-0 left-0 right-0 p-7">
                    <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#c16b74]">
                      Active Project
                    </p>
                    <h2 className="mt-3 text-4xl font-extrabold text-white">
                      Night Log 07
                    </h2>
                    <p className="mt-4 max-w-2xl text-sm leading-7 text-white/72">
                      현재 작업 중인 대표 공포 프로젝트. 기록물 구조를 기반으로,
                      정적인 공간 안에서 관객이 먼저 이상 징후를 눈치채게 만드는 흐름으로 설계 중이야.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <button className="rounded-full bg-[#7f1822] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#68131c]">
                        작품 수정
                      </button>
                      <button className="rounded-full border border-white/12 bg-white/5 px-5 py-3 text-sm font-medium text-white/78 transition hover:bg-white/10">
                        연출 메모 열기
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-5">
                <div className="rounded-[30px] border border-white/10 bg-[#101010] p-5 shadow-[0_18px_40px_rgba(0,0,0,0.30)]">
                  <p className="text-xs font-bold uppercase tracking-[0.26em] text-[#b16b73]">
                    Current Status
                  </p>
                  <div className="mt-4 space-y-3">
                    <div className="rounded-[18px] border border-white/8 bg-white/[0.03] px-4 py-4">
                      <p className="text-sm font-semibold text-white">EP 08 편집 중</p>
                      <p className="mt-2 text-sm text-white/55">지하 주차장 시퀀스 최종 조정</p>
                    </div>
                    <div className="rounded-[18px] border border-white/8 bg-white/[0.03] px-4 py-4">
                      <p className="text-sm font-semibold text-white">사운드 메모 4건</p>
                      <p className="mt-2 text-sm text-white/55">발소리, 노이즈, 정전 구간 체크</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-[30px] border border-white/10 bg-[#101010] p-5 shadow-[0_18px_40px_rgba(0,0,0,0.30)]">
                  <p className="text-xs font-bold uppercase tracking-[0.26em] text-[#7d8c90]">
                    Studio Note
                  </p>
                  <p className="mt-3 text-2xl font-extrabold leading-snug text-white">
                    보여주는 것보다
                    <br />
                    기다리게 만드는 공포
                  </p>
                  <p className="mt-3 text-sm leading-7 text-white/58">
                    시안 5는 자극적인 고어보다, 침묵과 공간감을 이용한 심리 압박을 중심으로 구성한 제작실이야.
                  </p>
                </div>
              </div>
            </div>

            {/* scene notes board */}
            <div className="rounded-[34px] border border-white/10 bg-[#111111] p-6 shadow-[0_20px_45px_rgba(0,0,0,0.35)]">
              <div className="mb-5 flex items-end justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#b16c73]">
                    Scene Notes Board
                  </p>
                  <h2 className="mt-2 text-3xl font-extrabold text-white">
                    장면 연출 메모
                  </h2>
                </div>
                <span className="text-sm text-white/40">3 notes</span>
              </div>

              <div className="grid gap-4 lg:grid-cols-3">
                {sceneNotes.map((note) => (
                  <article
                    key={note.title}
                    className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5"
                  >
                    <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#be727a]">
                      {note.status}
                    </p>
                    <h3 className="mt-3 text-2xl font-extrabold text-white">
                      {note.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-white/58">{note.desc}</p>
                  </article>
                ))}
              </div>
            </div>

            {/* bottom tool panels */}
            <div>
              <div className="mb-5 flex items-end justify-between">
                <h2 className="text-3xl font-extrabold text-white">핵심 제작 패널</h2>
                <span className="text-sm text-white/40">3 tools</span>
              </div>

              <div className="grid gap-5 xl:grid-cols-3">
                {toolPanels.map((panel) => (
                  <article
                    key={panel.title}
                    className="overflow-hidden rounded-[30px] border border-white/10 bg-[#111111] shadow-[0_18px_40px_rgba(0,0,0,0.30)]"
                  >
                    <div className="relative h-[220px]">
                      <Image
                        src={panel.image}
                        alt={panel.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1280px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.38)_10%,rgba(0,0,0,0.05)_50%,rgba(0,0,0,0)_100%)]" />
                    </div>

                    <div className="p-6">
                      <h3 className="text-2xl font-extrabold text-white">{panel.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-white/58">{panel.desc}</p>
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