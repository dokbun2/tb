'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { Calendar, User, ArrowRight } from 'lucide-react';

export default function CommunityPage() {
    const posts = [
        {
            id: 1,
            title: 'AI 웹툰 제작의 미래: 툴비와 함께하는 새로운 시작',
            description: '인공지능 기술이 웹툰 산업에 가져올 혁신적인 변화와 툴비가 제시하는 새로운 창작의 길에 대해 알아봅니다.',
            author: 'ToolB Team',
            date: '2024.03.15',
            category: 'INSIGHT',
            image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop'
        },
        {
            id: 2,
            title: '초보자도 쉽게 따라하는 3D 스튜디오 활용법',
            description: '복잡한 3D 툴 없이도 웹툰 배경을 뚝딱 만들어내는 툴비 3D 스튜디오의 핵심 기능을 소개합니다.',
            author: 'Studio Master',
            date: '2024.03.12',
            category: 'TUTORIAL',
            image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1000&auto=format&fit=crop'
        },
        {
            id: 3,
            title: '웹툰 작가가 말하는 AI 협업의 장점',
            description: '현직 웹툰 작가들이 실제로 AI 도구를 활용하며 느낀 장점과 작업 효율성 변화에 대한 솔직한 인터뷰.',
            author: 'Editor Kim',
            date: '2024.03.10',
            category: 'INTERVIEW',
            image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1000&auto=format&fit=crop'
        },
        {
            id: 4,
            title: '캐릭터 일관성 유지하기: 더브 기능 완벽 가이드',
            description: 'AI로 생성한 캐릭터의 얼굴과 스타일을 일관되게 유지하는 노하우와 더브 기능의 심화 활용법.',
            author: 'Tech Lead',
            date: '2024.03.08',
            category: 'GUIDE',
            image: 'https://images.unsplash.com/photo-1535295972055-1c762f4483e5?q=80&w=1000&auto=format&fit=crop'
        },
        {
            id: 5,
            title: '툴비 업데이트 노트: 3월의 새로운 기능',
            description: '사용자 피드백을 반영하여 더욱 강력해진 툴비의 3월 업데이트 소식을 전해드립니다.',
            author: 'ToolB Team',
            date: '2024.03.01',
            category: 'UPDATE',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop'
        },
        {
            id: 6,
            title: '웹툰 스토리텔링의 정석',
            description: '독자를 사로잡는 매력적인 스토리텔링 기법과 콘티 작성의 기초를 다져봅니다.',
            author: 'Story Artist',
            date: '2024.02.28',
            category: 'TIP',
            image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1000&auto=format&fit=crop'
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <Header alwaysScrolled={true} />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        COMMUNITY
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        툴비와 함께하는 크리에이터들의 이야기.<br />
                        유용한 팁과 최신 소식을 만나보세요.
                    </p>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post) => (
                            <Link href={`/community/${post.id}`} key={post.id}>
                                <article
                                    className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full flex flex-col"
                                >
                                    <div className="relative h-48 overflow-hidden shrink-0">
                                        <div className="absolute top-4 left-4 z-10">
                                            <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-orange-500">
                                                {post.category}
                                            </span>
                                        </div>
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>

                                    <div className="p-6 flex flex-col flex-grow">
                                        <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="w-3 h-3" />
                                                {post.date}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <User className="w-3 h-3" />
                                                {post.author}
                                            </div>
                                        </div>

                                        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-orange-500 transition-colors">
                                            {post.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm line-clamp-2 mb-6 flex-grow">
                                            {post.description}
                                        </p>

                                        <div className="flex items-center text-orange-500 font-medium text-sm group/link mt-auto">
                                            Read More
                                            <ArrowRight className="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>

                    {/* Pagination (Mock) */}
                    <div className="mt-16 flex justify-center gap-2">
                        <button className="w-10 h-10 rounded-full bg-orange-500 text-white font-bold flex items-center justify-center">1</button>
                        <button className="w-10 h-10 rounded-full hover:bg-gray-100 text-gray-600 font-medium flex items-center justify-center transition-colors">2</button>
                        <button className="w-10 h-10 rounded-full hover:bg-gray-100 text-gray-600 font-medium flex items-center justify-center transition-colors">3</button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
