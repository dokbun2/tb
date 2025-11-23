'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
  {
    name: 'Hyerin Kim',
    job: '웹툰 스토리 작가 지망생',
    service: '스토리즈',
    serviceColor: 'text-green-600',
    title: '처음 글쓰기를 도전하는 사람에게 추천해요',
    description: '평소 글을 길게 써본 적이 없어 막막하게 느껴졌는데, 스토리즈로 글쓰기를 시작하니 이야기가 자연스럽게 전개되더라고요. 초보자도 쉽게 적응할 수 있어서 처음 글을 쓰는 사람에게 강력히 추천하고 싶어요.',
    avatar: '/images/avatar-1.png',
  },
  {
    name: 'Dasol Jeong',
    job: '웹툰 작가',
    service: '3D 스튜디오',
    serviceColor: 'text-orange-600',
    title: '컷 연출에 있어서 큰 도움을 받고 있어요.',
    description: '액션 씬처럼 역동적인 컷을 연출하는 데에 있어 3D Studio에서는 미리 준비된 카메라 구도와 캐릭터의 동작으로 쉽게 연출할 수 있어 매일 시간에 쫓기는 저에게는 매우 큰 도움이 됩니다.',
    avatar: '/images/avatar-2.png',
  },
  {
    name: 'Yuki Tanaka',
    job: '시나리오 작가',
    service: '에디터',
    serviceColor: 'text-pink-600',
    title: '아이디어를 빠르게 시각화할 수 있는 최고의 파트너입니다.',
    description: '다른 서비스들은 어렵고 복잡한 기능이 많아서 초보인 제가 사용하기 어려웠는데, 이 툴은 직관적이고 필요한 기능을 갖추고 있어요. 덕분에 스토리 작가에게 보내는 콘티를 더 쉽게 만들고 있어요.',
    avatar: '/images/avatar-3.png',
  },
  {
    name: 'Li Chen',
    job: '웹소설 작가',
    service: '스토리즈',
    serviceColor: 'text-green-600',
    title: '아이디어를 작품으로 만들어주는 서비스',
    description: '아이디어가 생생한 이야기로 발전하는 경험은 정말 놀라웠어요. 간단한 키워드 설정을 바탕으로 AI가 다양한 전개를 제안해서, 이야기를 확장하는 데 큰 도움을 받을 수 있었어요.',
    avatar: '/images/avatar-4.png',
  },
  {
    name: 'Lucia Martinez',
    job: '영상 스튜디오 PD',
    service: '3D 스튜디오',
    serviceColor: 'text-orange-600',
    title: '영상 기획안, 이제는 직접 만들어서 보여줄 수 있어요.',
    description: '시네마틱 영상을 제작하는데 캐릭터의 포즈와 표정을 다양하게 조정할 수 있어요. 원하는 의도를 스케치로 전달하는 것과 비교해 훨씬 직관적이고 빠르며, 작업 속도가 크게 향상됐습니다.',
    avatar: '/images/avatar-5.png',
  },
  {
    name: 'Ana Martínez',
    job: '광고 디자이너',
    service: '에디터',
    serviceColor: 'text-pink-600',
    title: '직관적이고 효율적인 도구, 작업의 질이 달라졌어요.',
    description: '광고 시안을 빠르게 제작해야 하는 일이 많은데, 이 에디터는 직관적이라 처음 써도 금방 익숙해졌어요. 특히 프레임 기능이 정말 유용해요.',
    avatar: '/images/avatar-6.png',
  },
];

export default function Reviews() {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* 헤더 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            내 세계에 플러스가 되는
            <br />
            TOOLB PLUS 후기
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            영상 제작에 필요한 모든 서비스를 TOOLB PLUS에서 한 번에 경험하세요.
          </p>
        </div>

        {/* 리뷰 캐러셀 */}
        <div className="relative">
          {/* 좌측 그림자 */}
          {canScrollLeft && (
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          )}

          {/* 리뷰 컨테이너 */}
          <div
            ref={scrollContainerRef}
            onScroll={checkScroll}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 px-1"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {reviews.map((review, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[380px] bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow cursor-pointer border border-gray-100"
              >
                {/* 프로필 */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-white text-xl font-bold">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{review.name}</div>
                    <div className="text-sm text-gray-600">{review.job}</div>
                  </div>
                </div>

                {/* 제목 */}
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 leading-relaxed">
                    <span className={`${review.serviceColor} font-bold`}>
                      {review.service}
                    </span>{' '}
                    {review.title}
                  </h3>
                </div>

                {/* 설명 */}
                <p className="text-gray-600 leading-relaxed line-clamp-5">
                  {review.description}
                </p>
              </div>
            ))}
          </div>

          {/* 우측 그림자 */}
          {canScrollRight && (
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />
          )}

          {/* 네비게이션 버튼 */}
          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-20"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
          )}

          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-20"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
