'use client';

import { useState, useEffect } from 'react';
import Header from '../components/Header';

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('TOOL');

  useEffect(() => {
    // URL 해시를 기반으로 카테고리 설정
    const hash = window.location.hash.slice(1); // # 제거
    if (hash === 'tool') {
      setActiveCategory('TOOL');
    } else if (hash === 'coding') {
      setActiveCategory('CODING');
    }

    // 해시 변경 감지
    const handleHashChange = () => {
      const newHash = window.location.hash.slice(1);
      if (newHash === 'tool') {
        setActiveCategory('TOOL');
      } else if (newHash === 'coding') {
        setActiveCategory('CODING');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // 카테고리별 카드 데이터 (예시 데이터)
  const portfolioData = {
    TOOL: [
      {
        id: 1,
        title: [
          { text: 'TB CODE', color: 'text-red-500' },
          { text: ' 코드편집기', color: 'text-red-500' }
        ],
        description: '심플하고 간편한 코드편집기의 끝판왕',
        image: '/images/tool1.png',
        tags: ['Code', 'Editor', 'Simple'],
        link: 'https://aitoolb.com/66'
      },
      {
        id: 2,
        title: '웹툰 편집 도구',
        description: '웹툰 제작에 필요한 모든 편집 기능을 제공합니다.',
        image: '/placeholder-2.jpg',
        tags: ['Webtoon', 'Editor', 'Design']
      },
      {
        id: 3,
        title: '캐릭터 생성기',
        description: '원하는 스타일의 캐릭터를 빠르게 생성할 수 있습니다.',
        image: '/placeholder-3.jpg',
        tags: ['Character', 'AI', 'Design']
      },
      {
        id: 4,
        title: '배경 제작 도구',
        description: '다양한 배경을 손쉽게 만들 수 있는 도구입니다.',
        image: '/placeholder-4.jpg',
        tags: ['Background', 'Tool', 'Design']
      },
    ],
    CODING: [
      {
        id: 5,
        title: 'React 컴포넌트 라이브러리',
        description: '재사용 가능한 React 컴포넌트 모음입니다.',
        image: '/placeholder-5.jpg',
        tags: ['React', 'Component', 'Library']
      },
      {
        id: 6,
        title: 'API 통합 시스템',
        description: '다양한 API를 쉽게 통합할 수 있는 시스템입니다.',
        image: '/placeholder-6.jpg',
        tags: ['API', 'Integration', 'System']
      },
      {
        id: 7,
        title: '데이터 시각화 대시보드',
        description: '실시간 데이터를 시각화하는 대시보드입니다.',
        image: '/placeholder-7.jpg',
        tags: ['Dashboard', 'Data', 'Visualization']
      },
      {
        id: 8,
        title: '자동화 스크립트',
        description: '반복 작업을 자동화하는 스크립트 모음입니다.',
        image: '/placeholder-8.jpg',
        tags: ['Automation', 'Script', 'Productivity']
      },
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <Header alwaysScrolled={true} />

      {/* 메인 컨텐츠 */}
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* 페이지 타이틀 */}
          <div className="text-center mb-6">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              {activeCategory === 'TOOL' ? 'TOOL' : 'CODING'}
            </h1>
            <p className="text-gray-600 text-lg">
              {activeCategory === 'TOOL'
                ? 'AI 툴과 디자인 작업물을 확인해보세요'
                : '코딩 프로젝트와 개발 작업물을 확인해보세요'}
            </p>
          </div>

          {/* 배너 섹션 */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl px-12 py-8 text-white shadow-xl">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-bold mb-4">
                  {activeCategory === 'TOOL' ? 'AI 툴 모음' : '코딩 프로젝트'}
                </h2>
                <p className="text-lg opacity-90">
                  {activeCategory === 'TOOL'
                    ? '최신 AI 기술을 활용한 다양한 툴들을 만나보세요. 웹툰 제작부터 이미지 생성까지 모든 것이 가능합니다.'
                    : '실무에서 사용 가능한 코딩 프로젝트들입니다. React, API, 데이터 시각화 등 다양한 기술 스택을 확인하세요.'}
                </p>
              </div>
            </div>
          </div>

          {/* 카드 섹션 (4열 그리드) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioData[activeCategory].map((item) => (
              <div
                key={item.id}
                onClick={() => item.link && window.open(item.link, '_blank')}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
              >
                {/* 이미지 영역 */}
                <div className="relative h-48 bg-gradient-to-br from-orange-100 to-pink-100 flex items-center justify-center overflow-hidden">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                      {activeCategory === 'TOOL' ? '🛠️' : '💻'}
                    </div>
                  )}
                </div>

                {/* 콘텐츠 영역 */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 transition-colors">
                    {Array.isArray(item.title) ? (
                      <>
                        {item.title.map((part, index) => (
                          <span key={index} className={part.color}>
                            {part.text}
                          </span>
                        ))}
                      </>
                    ) : (
                      <span className="text-gray-900 group-hover:text-orange-500">{item.title}</span>
                    )}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {item.description}
                  </p>

                  {/* 태그 */}
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-orange-50 text-orange-600 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 더보기 버튼 */}
          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-full hover:shadow-lg hover:scale-105 transition-all">
              더 많은 프로젝트 보기
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
