'use client';

import { Wand2, Timer, Share2 } from 'lucide-react';

const features = [
  {
    icon: Wand2,
    title: 'AI 어시스트',
    description: 'AI 기술로 웹툰 제작을 더 쉽고 빠르게. 자동 배경 생성, 컬러링, 효과음 제안까지.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Timer,
    title: '빠른 제작',
    description: '직관적인 툴로 제작 시간을 50% 단축. 드래그 앤 드롭으로 간편하게 작업하세요.',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Share2,
    title: '간편한 배포',
    description: '클릭 한 번으로 작품 공유. 다양한 플랫폼에 동시 배포하고 독자를 만나보세요.',
    color: 'from-blue-500 to-cyan-500',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* 섹션 헤더 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            TOOLB PLUS란?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            창작자를 위한 최고의 도구로 당신의 아이디어를 현실로 만드세요
          </p>
        </div>

        {/* 특징 카드 그리드 */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                {/* 아이콘 배경 그라데이션 */}
                <div
                  className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.color} mb-6 shadow-lg`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* 제목 */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 transition-all">
                  {feature.title}
                </h3>

                {/* 설명 */}
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* 호버 시 나타나는 장식 요소 */}
                <div
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 bg-gradient-to-br ${feature.color} transition-opacity duration-300 pointer-events-none`}
                />
              </div>
            );
          })}
        </div>

        {/* 추가 정보 */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            이미 <span className="font-bold text-purple-600">1,000명 이상</span>의 창작자가 사용하고 있습니다
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all hover:scale-105 shadow-lg hover:shadow-xl">
            무료로 시작하기 →
          </button>
        </div>
      </div>
    </section>
  );
}
