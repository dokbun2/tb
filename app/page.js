import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import ServiceDetail from './components/ServiceDetail';
import Reviews from './components/Reviews';

export default function Home() {
  return (
    <>
      <Header />

      <main className="min-h-screen">
        <Hero />
        <Features />
        <ServiceDetail />
        <Reviews />

        {/* 요금제 섹션 */}
        <section id="pricing" className="min-h-screen bg-gray-50 py-40 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
              요금제
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">무료</h3>
                <p className="text-4xl font-bold mb-6 text-gray-900">
                  ₩0<span className="text-lg text-gray-600">/월</span>
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-600">
                    <span className="mr-2">✓</span> 기본 기능
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="mr-2">✓</span> 5개 프로젝트
                  </li>
                </ul>
                <button className="w-full py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-gray-900">
                  시작하기
                </button>
              </div>
              <div className="bg-purple-600 p-8 rounded-xl shadow-xl transform md:scale-105">
                <h3 className="text-2xl font-bold mb-4 text-white">프로</h3>
                <p className="text-4xl font-bold mb-6 text-white">
                  ₩29,000<span className="text-lg text-purple-200">/월</span>
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-white">
                    <span className="mr-2">✓</span> 모든 기능
                  </li>
                  <li className="flex items-center text-white">
                    <span className="mr-2">✓</span> 무제한 프로젝트
                  </li>
                  <li className="flex items-center text-white">
                    <span className="mr-2">✓</span> 우선 지원
                  </li>
                </ul>
                <button className="w-full py-3 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                  시작하기
                </button>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">엔터프라이즈</h3>
                <p className="text-4xl font-bold mb-6 text-gray-900">
                  문의<span className="text-lg text-gray-600"></span>
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-600">
                    <span className="mr-2">✓</span> 맞춤 솔루션
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="mr-2">✓</span> 전담 지원
                  </li>
                </ul>
                <button className="w-full py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-gray-900">
                  문의하기
                </button>
              </div>
            </div>
          </div>
        </section>

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
