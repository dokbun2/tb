'use client';

import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (serviceDropdownOpen && !event.target.closest('.service-dropdown-container')) {
        setServiceDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [serviceDropdownOpen]);

  const serviceItems = [
    {
      title: 'AI툴비강의',
      description: '다양한 장르의 웹툰, AI 나라의 아바타드를 다 잡고 빠르게 만들어보세요.',
      icon: '📖',
    },
    {
      title: '3D 스튜디오',
      description: 'AI 나리오를 스토리보드, 웹툰의 완성으로 쉽게 만들을 해보세요.',
      icon: '🎬',
    },
    {
      title: '에디터',
      description: '다면 사용자와 협업하여 웹툰을 편집하고 맞춤 작품을 완성하세요.',
      icon: '✏️',
    },
    {
      title: '더브',
      description: 'AI 세팅에 딥-아카 베대니 블람을 수 위에 없는 캐릭터 보다 팝핸 웰트까지.',
      icon: '🎭',
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 mt-[30px] px-4 sm:px-6 lg:px-8">
      <div
        className={`max-w-6xl mx-auto transition-all duration-300 rounded-full ${
          isScrolled
            ? 'bg-white text-black shadow-md'
            : 'bg-transparent text-white'
        }`}
      >
        <div className="flex items-center justify-between h-16 px-6">
          {/* 로고 */}
          <a href="/" className="flex items-center gap-2 cursor-pointer">
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
              </div>
              <div className="flex gap-1">
              </div>
            </div>
            <span className="text-xl font-bold">TOOLBEE PLUS</span>
            <span
              className={`text-xs px-2 py-0.5 rounded-full border ${
                isScrolled
                  ? 'border-gray-400 text-gray-600'
                  : 'border-white/50 text-white/80'
              }`}
            >
              beta
            </span>
          </a>

          {/* 중앙 메뉴 */}
          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {/* 서비스 드롭다운 */}
            <div className="relative service-dropdown-container">
              <button
                onClick={() => setServiceDropdownOpen(!serviceDropdownOpen)}
                onMouseEnter={() => setServiceDropdownOpen(true)}
                className={`flex items-center gap-1 transition-colors ${
                  isScrolled
                    ? 'text-black hover:text-gray-600'
                    : 'text-white hover:text-gray-200'
                }`}
              >
                서비스
                <ChevronDown className="w-4 h-4" />
              </button>

              {/* 드롭다운 메뉴 */}
              {serviceDropdownOpen && (
                <div
                  onMouseEnter={() => setServiceDropdownOpen(true)}
                  onMouseLeave={() => setServiceDropdownOpen(false)}
                  className="fixed left-1/2 -translate-x-1/2 top-[45px] w-[900px] bg-white rounded-3xl shadow-2xl p-4 animate-fadeIn z-50"
                >
                  <div className="grid grid-cols-4 gap-6">
                    {serviceItems.map((item, index) => (
                      <div
                        key={index}
                        className="group/item cursor-pointer"
                      >
                        <div className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors border border-gray-200">
                          <div className="text-4xl mb-4">{item.icon}</div>
                          <h3 className="text-lg font-bold text-gray-900 mb-2">
                            {item.title}
                          </h3>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a
              href="#pricing"
              className={`transition-colors ${
                isScrolled
                  ? 'text-black hover:text-gray-600'
                  : 'text-white hover:text-gray-200'
              }`}
            >
              요금제
            </a>
          </nav>

          {/* 우측 메뉴 */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setIsLoginModalOpen(true)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all ${
                isScrolled
                  ? 'text-black hover:bg-gray-100'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              로그인
            </button>
            <button
              onClick={() => setIsSignupModalOpen(true)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all overflow-hidden relative group ${
                isScrolled
                  ? 'bg-black text-white hover:shadow-lg'
                  : 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:shadow-lg hover:scale-105'
              }`}
            >
              <span className="relative z-10">회원가입</span>
              {!isScrolled && (
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              )}
            </button>
          </div>

          {/* 모바일 햄버거 메뉴 버튼 */}
          <button
            className="md:hidden w-6 h-6 flex flex-col justify-center gap-1.5"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="메뉴"
          >
            <span
              className={`block h-0.5 w-6 transition-all ${
                isScrolled ? 'bg-black' : 'bg-white'
              } ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span
              className={`block h-0.5 w-6 transition-all ${
                isScrolled ? 'bg-black' : 'bg-white'
              } ${isMobileMenuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block h-0.5 w-6 transition-all ${
                isScrolled ? 'bg-black' : 'bg-white'
              } ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </button>
        </div>

        {/* 모바일 메뉴 */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden rounded-b-3xl ${
            isMobileMenuOpen ? 'max-h-64' : 'max-h-0'
          }`}
        >
          <nav className="px-6 py-4 space-y-4">
            <a
              href="#service"
              className={`block py-2 transition-colors ${
                isScrolled
                  ? 'text-black hover:text-gray-600'
                  : 'text-white hover:text-gray-200'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              서비스
            </a>
            <a
              href="#pricing"
              className={`block py-2 transition-colors ${
                isScrolled
                  ? 'text-black hover:text-gray-600'
                  : 'text-white hover:text-gray-200'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              요금제
            </a>
            <button
              className={`block px-6 py-2.5 rounded-full font-medium transition-all text-left ${
                isScrolled
                  ? 'text-black hover:bg-gray-100'
                  : 'text-white hover:bg-white/10'
              }`}
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsLoginModalOpen(true);
              }}
            >
              로그인
            </button>
            <button
              className={`w-full py-2.5 px-6 rounded-full font-medium transition-all ${
                isScrolled
                  ? 'bg-black text-white hover:shadow-lg'
                  : 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:shadow-lg'
              }`}
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsSignupModalOpen(true);
              }}
            >
              회원가입
            </button>
          </nav>
        </div>
      </div>

      {/* 로그인 모달 */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onSwitchToSignup={() => {
          setIsLoginModalOpen(false);
          setIsSignupModalOpen(true);
        }}
      />

      {/* 회원가입 모달 */}
      <SignupModal
        isOpen={isSignupModalOpen}
        onClose={() => setIsSignupModalOpen(false)}
        onSwitchToLogin={() => {
          setIsSignupModalOpen(false);
          setIsLoginModalOpen(true);
        }}
      />
    </header>
  );
}
