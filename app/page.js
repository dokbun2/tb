import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import ServiceDetail from './components/ServiceDetail';
import Reviews from './components/Reviews';
import Pricing from './components/Pricing';

export default function Home() {
  return (
    <>
      <Header />

      <main className="min-h-screen">
        <Hero />
        <Features />
        <ServiceDetail />
        <Reviews />

        {/* CTA 섹션 */}
        <section className="py-32 px-4 bg-black">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              나만의 영감에 집중하세요.
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                TOOLBEE PLUS가 창작의 가능성을 현실로 만듭니다.
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-12">
              스토리즈로 이야기를 만들고, 3D 스튜디오로 화면을 연출하고, 에디터로 함께 편집하고, 마지막으로 더브에서 연재하세요.
            </p>
            <button className="px-10 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full text-lg font-bold hover:from-orange-600 hover:to-red-600 transition-all hover:scale-105 shadow-lg hover:shadow-xl">
              지금 시작하기 →
            </button>
          </div>
        </section>

        {/* 요금제 섹션 */}
        <Pricing />

        {/* 푸터 */}
        <footer className="bg-gray-900 text-white py-12 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-gray-400">© 2025 TOOLBEE PLUS. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </>
  );
}
