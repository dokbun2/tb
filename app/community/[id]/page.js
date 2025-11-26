'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Calendar, User, ArrowLeft, Share2, Bookmark, Check } from 'lucide-react';

export default function CommunityDetailPage() {
    const params = useParams();
    const { id } = params;
    const [isCopied, setIsCopied] = useState(false);

    const handleShare = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    // Mock Data (In a real app, this would be fetched from an API)
    const posts = [
        {
            id: 1,
            title: 'AI 웹툰 제작의 미래: 툴비와 함께하는 새로운 시작',
            description: '인공지능 기술이 웹툰 산업에 가져올 혁신적인 변화와 툴비가 제시하는 새로운 창작의 길에 대해 알아봅니다.',
            content: `
        <p>인공지능(AI) 기술이 급격하게 발전하면서 웹툰 산업에도 새로운 바람이 불고 있습니다. 과거에는 수작업으로 오랜 시간이 걸리던 배경 채색, 캐릭터 디자인, 콘티 작성 등이 이제는 AI의 도움으로 획기적으로 단축되고 있습니다.</p>
        <br/>
        <h3>툴비가 그리는 미래</h3>
        <p>툴비는 이러한 변화의 중심에서 작가님들의 창작 활동을 돕는 강력한 도구입니다. 단순히 작업을 대신하는 것을 넘어, 작가님의 상상력을 현실로 구현하는 파트너가 되고자 합니다.</p>
        <br/>
        <h3>주요 기능 소개</h3>
        <p>1. <strong>AI 배경 생성</strong>: 텍스트 몇 줄이면 원하는 분위기의 배경이 뚝딱 만들어집니다.<br/>
        2. <strong>캐릭터 일관성 유지</strong>: 툴비만의 독자적인 기술로 캐릭터의 얼굴과 스타일을 컷마다 일정하게 유지할 수 있습니다.<br/>
        3. <strong>자동 채색</strong>: 스케치만 있으면 AI가 어울리는 색감을 찾아 자동으로 채색해줍니다.</p>
        <br/>
        <p>이제 툴비와 함께 더 빠르고, 더 퀄리티 높은 웹툰을 만들어보세요. 여러분의 이야기가 세상에 더 멋지게 전달될 수 있도록 툴비가 함께하겠습니다.</p>
      `,
            author: 'ToolB Team',
            date: '2024.03.15',
            category: 'INSIGHT',
            image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop'
        },
        {
            id: 2,
            title: '초보자도 쉽게 따라하는 3D 스튜디오 활용법',
            description: '복잡한 3D 툴 없이도 웹툰 배경을 뚝딱 만들어내는 툴비 3D 스튜디오의 핵심 기능을 소개합니다.',
            content: `
        <p>웹툰 배경 작업, 매번 3D 툴을 켜고 렌더링하느라 지치셨나요? 툴비 3D 스튜디오를 사용하면 복잡한 과정 없이 직관적으로 배경을 구성하고 웹툰 스타일에 맞게 변환할 수 있습니다.</p>
        <br/>
        <h3>1. 에셋 배치하기</h3>
        <p>라이브러리에서 원하는 건물, 가구, 소품을 드래그 앤 드롭으로 배치하세요. 크기 조절과 회전도 마우스 클릭 몇 번이면 충분합니다.</p>
        <br/>
        <h3>2. 카메라 구도 잡기</h3>
        <p>원하는 앵글로 카메라를 이동시켜 보세요. 하이앵글, 로우앵글 등 다양한 연출이 가능합니다.</p>
        <br/>
        <h3>3. 웹툰 스타일 필터 적용</h3>
        <p>마지막으로 '웹툰 필터'를 적용하면 3D 모델링 특유의 이질감은 사라지고, 손으로 그린 듯한 자연스러운 배경이 완성됩니다.</p>
      `,
            author: 'Studio Master',
            date: '2024.03.12',
            category: 'TUTORIAL',
            image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1000&auto=format&fit=crop'
        },
        // ... (Add other posts if needed, or just rely on fallback for demo)
    ];

    // Find the post by ID (handling string/number mismatch)
    const post = posts.find(p => p.id.toString() === id) || posts[0]; // Fallback to first post if not found for demo

    return (
        <div className="min-h-screen bg-white">
            <Header alwaysScrolled={true} />

            {/* Hero / Cover Image */}
            <div className="relative h-[60vh] w-full mt-[80px]">
                <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 max-w-4xl mx-auto text-white">
                    <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider bg-orange-500 rounded-full">
                        {post.category}
                    </span>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
                        {post.title}
                    </h1>
                    <div className="flex items-center gap-6 text-sm sm:text-base text-gray-200">
                        <div className="flex items-center gap-2">
                            <User className="w-4 h-4" />
                            {post.author}
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {post.date}
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
                {/* Actions */}
                <div className="flex justify-between items-center mb-12 border-b border-gray-100 pb-6">
                    <Link
                        href="/community"
                        className="flex items-center gap-2 text-gray-600 hover:text-orange-500 transition-colors font-medium"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        목록으로 돌아가기
                    </Link>
                    <div className="flex gap-4">
                        <button
                            onClick={handleShare}
                            className={`p-2 transition-all rounded-full relative group ${isCopied
                                    ? 'bg-green-50 text-green-500'
                                    : 'text-gray-400 hover:text-orange-500 hover:bg-orange-50'
                                }`}
                            aria-label="Share"
                        >
                            {isCopied ? <Check className="w-5 h-5" /> : <Share2 className="w-5 h-5" />}

                            {/* Tooltip */}
                            <span className={`absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 transition-opacity whitespace-nowrap ${isCopied ? 'opacity-100' : 'group-hover:opacity-100'}`}>
                                {isCopied ? 'Copied!' : 'Copy Link'}
                            </span>
                        </button>
                        <button className="p-2 text-gray-400 hover:text-orange-500 transition-colors rounded-full hover:bg-orange-50">
                            <Bookmark className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Article Body */}
                <article className="prose prose-lg prose-orange max-w-none w-full text-gray-900 prose-headings:text-gray-900 prose-p:text-2xl prose-p:leading-[2.5] prose-strong:text-gray-900 prose-li:text-xl prose-li:leading-[2.5]">
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </article>

                {/* Author Box (Optional) */}
                <div className="mt-16 p-8 bg-gray-50 rounded-2xl flex items-center gap-6">
                    <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-2xl">
                        👤
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 mb-1">{post.author}</h4>
                        <p className="text-sm text-gray-600">
                            웹툰과 AI 기술에 관심이 많은 에디터입니다. 새로운 기술을 탐구하고 공유하는 것을 좋아합니다.
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
