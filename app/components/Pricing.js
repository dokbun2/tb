import React from 'react';

export default function Pricing() {
    return (
        <section id="pricing" className="py-32 px-4 bg-black relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-40 left-20 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-40 right-20 w-96 h-96 bg-orange-900/20 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        합리적인 요금제
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        당신의 창작 여정에 딱 맞는 플랜을 선택하세요.
                        <br />
                        언제든지 변경하고 해지할 수 있습니다.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Free Plan */}
                    <div className="group relative p-8 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:-translate-y-1">
                        <h3 className="text-2xl font-bold text-white mb-2">Starter</h3>
                        <div className="flex items-baseline mb-6">
                            <span className="text-4xl font-bold text-white">₩0</span>
                            <span className="text-gray-500 ml-2">/월</span>
                        </div>
                        <p className="text-gray-400 mb-8 h-12">
                            가볍게 시작하는 창작자를 위한<br />기본 패키지
                        </p>
                        <button className="w-full py-4 rounded-xl bg-gray-800 text-white font-semibold hover:bg-gray-700 transition-colors mb-8">
                            무료로 시작하기
                        </button>
                        <ul className="space-y-4 text-gray-300">
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                기본 AI 도구 접근
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                월 5개 프로젝트
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                커뮤니티 지원
                            </li>
                        </ul>
                    </div>

                    {/* Pro Plan */}
                    <div className="group relative p-8 rounded-2xl bg-gray-900/80 border border-purple-500/30 hover:border-purple-500 transition-all duration-300 hover:-translate-y-2 shadow-2xl shadow-purple-900/20">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-xs font-bold text-white tracking-wider uppercase">
                            Most Popular
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
                        <div className="flex items-baseline mb-6">
                            <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">₩29,000</span>
                            <span className="text-gray-500 ml-2">/월</span>
                        </div>
                        <p className="text-gray-400 mb-8 h-12">
                            본격적인 작품 활동을 위한<br />모든 기능 잠금 해제
                        </p>
                        <button className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold hover:opacity-90 transition-opacity mb-8 shadow-lg shadow-purple-900/30">
                            지금 시작하기
                        </button>
                        <ul className="space-y-4 text-gray-300">
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-purple-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                모든 AI 도구 무제한
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-purple-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                무제한 프로젝트 생성
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-purple-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                4K 고화질 내보내기
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-purple-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                우선 고객 지원
                            </li>
                        </ul>
                    </div>

                    {/* Enterprise Plan */}
                    <div className="group relative p-8 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:-translate-y-1">
                        <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
                        <div className="flex items-baseline mb-6">
                            <span className="text-4xl font-bold text-white">문의</span>
                        </div>
                        <p className="text-gray-400 mb-8 h-12">
                            팀과 스튜디오를 위한<br />맞춤형 솔루션
                        </p>
                        <button className="w-full py-4 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition-colors mb-8">
                            문의하기
                        </button>
                        <ul className="space-y-4 text-gray-300">
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                API 액세스
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                전담 매니저 배정
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                SSO 및 보안 강화
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
