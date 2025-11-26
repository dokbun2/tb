'use client';

import { useState, useEffect } from 'react';
import { ChevronDown, LayoutDashboard, Settings, Lock } from 'lucide-react';
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton, useUser } from '@clerk/nextjs';

export default function Header({ alwaysScrolled = false }) {
  const { isSignedIn, user } = useUser();
  const [isScrolled, setIsScrolled] = useState(alwaysScrolled);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);
  const [portfolioDropdownOpen, setPortfolioDropdownOpen] = useState(false);
  const [mobileServiceDropdownOpen, setMobileServiceDropdownOpen] = useState(false);
  const [mobilePortfolioDropdownOpen, setMobilePortfolioDropdownOpen] = useState(false);
  const [showLoginAlert, setShowLoginAlert] = useState(false);

  const handleAuthRequired = () => {
    setShowLoginAlert(true);
    setTimeout(() => setShowLoginAlert(false), 3000);
  };

  useEffect(() => {
    if (alwaysScrolled) return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [alwaysScrolled]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (serviceDropdownOpen && !event.target.closest('.service-dropdown-container')) {
        setServiceDropdownOpen(false);
      }
      if (portfolioDropdownOpen && !event.target.closest('.portfolio-dropdown-container')) {
        setPortfolioDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [serviceDropdownOpen, portfolioDropdownOpen]);

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
        className={`max-w-7xl mx-auto transition-all duration-300 rounded-full ${isScrolled
          ? 'bg-white text-black shadow-md border border-gray-200'
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
            <span className="text-xl font-bold">TOOLB PLUS</span>
            <span
              className={`text-xs px-2 py-0.5 rounded-full border ${isScrolled
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
                onClick={() => {
                  if (isSignedIn) {
                    setServiceDropdownOpen(!serviceDropdownOpen);
                  } else {
                    handleAuthRequired();
                  }
                }}
                onMouseEnter={() => {
                  if (isSignedIn) {
                    setServiceDropdownOpen(true);
                    setPortfolioDropdownOpen(false);
                  }
                }}
                className={`flex items-center gap-1 transition-colors ${isScrolled
                  ? 'text-black hover:text-gray-600'
                  : 'text-white hover:text-gray-200'
                  } ${!isSignedIn ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                SERVICE
                <ChevronDown className="w-4 h-4" />
              </button>

              {/* 드롭다운 메뉴 */}
              {isSignedIn && serviceDropdownOpen && (
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

            {/* 포트폴리오 드롭다운 */}
            <div className="relative portfolio-dropdown-container">
              <button
                onClick={() => {
                  if (isSignedIn) {
                    setPortfolioDropdownOpen(!portfolioDropdownOpen);
                  } else {
                    handleAuthRequired();
                  }
                }}
                onMouseEnter={() => {
                  if (isSignedIn) {
                    setPortfolioDropdownOpen(true);
                    setServiceDropdownOpen(false);
                  }
                }}
                className={`flex items-center gap-1 transition-colors ${isScrolled
                  ? 'text-black hover:text-gray-600'
                  : 'text-white hover:text-gray-200'
                  } ${!isSignedIn ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                PORTFOLIO
                <ChevronDown className="w-4 h-4" />
              </button>

              {/* 드롭다운 메뉴 */}
              {isSignedIn && portfolioDropdownOpen && (
                <div
                  onMouseEnter={() => setPortfolioDropdownOpen(true)}
                  onMouseLeave={() => setPortfolioDropdownOpen(false)}
                  className="absolute left-1/2 -translate-x-1/2 top-[45px] w-[200px] bg-white rounded-2xl shadow-2xl p-2 animate-fadeIn z-50"
                >
                  <a
                    href="/portfolio#tool"
                    className="block px-6 py-3 text-gray-900 hover:bg-orange-50 hover:text-orange-500 rounded-xl transition-colors font-medium"
                    onClick={() => setPortfolioDropdownOpen(false)}
                  >
                    TOOL
                  </a>
                  <a
                    href="/portfolio#coding"
                    className="block px-6 py-3 text-gray-900 hover:bg-orange-50 hover:text-orange-500 rounded-xl transition-colors font-medium"
                    onClick={() => setPortfolioDropdownOpen(false)}
                  >
                    CODING
                  </a>
                </div>
              )}
            </div>

            {/* 커뮤니티 링크 */}
            <a
              href="/community"
              className={`transition-colors font-medium ${isScrolled
                ? 'text-black hover:text-gray-600'
                : 'text-white hover:text-gray-200'
                }`}
            >
              COMMUNITY
            </a>

            <a
              href="#pricing"
              className={`transition-colors ${isScrolled
                ? 'text-black hover:text-gray-600'
                : 'text-white hover:text-gray-200'
                }`}
            >
              요금제
            </a>
          </nav>

          {/* 우측 메뉴 */}
          <div className="hidden md:flex items-center gap-3">
            <SignedOut>
              <SignInButton mode="modal">
                <button
                  className={`px-6 py-2.5 rounded-full font-medium transition-all ${isScrolled
                    ? 'text-black hover:bg-gray-100'
                    : 'text-white hover:bg-white/10'
                    }`}
                >
                  로그인
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button
                  className={`px-6 py-2.5 rounded-full font-medium transition-all overflow-hidden relative group ${isScrolled
                    ? 'bg-black text-white hover:shadow-lg'
                    : 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:shadow-lg hover:scale-105'
                    }`}
                >
                  <span className="relative z-10">회원가입</span>
                  {!isScrolled && (
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "w-10 h-10"
                  }
                }}
                userProfileMode="navigation"
                userProfileUrl="/profile"
              >
                <UserButton.MenuItems>
                  <UserButton.Link
                    label="대시보드"
                    labelIcon={<LayoutDashboard size={16} />}
                    href="/dashboard"
                  />
                  <UserButton.Link
                    label="프로필 설정"
                    labelIcon={<Settings size={16} />}
                    href="/profile"
                  />
                </UserButton.MenuItems>
              </UserButton>
            </SignedIn>
          </div>

          {/* 모바일 햄버거 메뉴 버튼 */}
          <button
            className="md:hidden w-6 h-6 flex flex-col justify-center gap-1.5"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="메뉴"
          >
            <span
              className={`block h-0.5 w-6 transition-all ${isScrolled ? 'bg-black' : 'bg-white'
                } ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span
              className={`block h-0.5 w-6 transition-all ${isScrolled ? 'bg-black' : 'bg-white'
                } ${isMobileMenuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block h-0.5 w-6 transition-all ${isScrolled ? 'bg-black' : 'bg-white'
                } ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </button>
        </div>

      </div>

      {/* 모바일 메뉴 */}
      <div
        className={`md:hidden absolute left-0 right-0 top-[80px] transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <nav className="bg-white mx-4 rounded-2xl shadow-xl px-6 py-4 space-y-2 border border-gray-100">
          {/* SERVICE 드롭다운 */}
          <div className={`space-y-1 ${!isSignedIn ? 'opacity-50' : ''}`}>
            <button
              className={`flex items-center justify-between w-full py-2 text-gray-800 transition-colors font-medium ${isSignedIn ? 'hover:text-orange-500' : 'cursor-not-allowed'
                }`}
              onClick={(e) => {
                if (!isSignedIn) {
                  e.preventDefault();
                  handleAuthRequired();
                } else {
                  setMobileServiceDropdownOpen(!mobileServiceDropdownOpen);
                }
              }}
            >
              SERVICE
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileServiceDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {isSignedIn && mobileServiceDropdownOpen && (
              <div className="pl-4 space-y-2">
                {serviceItems.map((item, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-xl p-4 border border-gray-200"
                  >
                    <div className="flex items-start gap-3">
                      <div className="text-2xl">{item.icon}</div>
                      <div>
                        <h3 className="text-sm font-bold text-gray-900 mb-1">
                          {item.title}
                        </h3>
                        <p className="text-xs text-gray-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* PORTFOLIO 드롭다운 */}
          <div className={`space-y-1 ${!isSignedIn ? 'opacity-50' : ''}`}>
            <button
              className={`flex items-center justify-between w-full py-2 text-gray-800 transition-colors font-medium ${isSignedIn ? 'hover:text-orange-500' : 'cursor-not-allowed'
                }`}
              onClick={(e) => {
                if (!isSignedIn) {
                  e.preventDefault();
                  handleAuthRequired();
                } else {
                  setMobilePortfolioDropdownOpen(!mobilePortfolioDropdownOpen);
                }
              }}
            >
              PORTFOLIO
              <ChevronDown className={`w-4 h-4 transition-transform ${mobilePortfolioDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {isSignedIn && mobilePortfolioDropdownOpen && (
              <div className="pl-4 space-y-1">
                <button
                  className="block w-full text-left py-2 text-gray-600 hover:text-orange-500 transition-colors"
                  onClick={() => {
                    window.location.href = '/portfolio#tool';
                    setIsMobileMenuOpen(false);
                  }}
                >
                  TOOL
                </button>
                <button
                  className="block w-full text-left py-2 text-gray-600 hover:text-orange-500 transition-colors"
                  onClick={() => {
                    window.location.href = '/portfolio#coding';
                    setIsMobileMenuOpen(false);
                  }}
                >
                  CODING
                </button>
              </div>
            )}
          </div>
          <a
            href="/community"
            className="block py-2 text-gray-800 hover:text-orange-500 transition-colors font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            COMMUNITY
          </a>
          <a
            href="#pricing"
            className="block py-2 text-gray-800 hover:text-orange-500 transition-colors font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            요금제
          </a>
          <SignedOut>
            <SignInButton mode="modal">
              <button
                className="block w-full text-left py-2 text-gray-800 hover:text-orange-500 transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                로그인
              </button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button
                className="w-full py-2.5 px-6 rounded-full font-medium transition-all bg-gradient-to-r from-orange-500 to-red-500 text-white hover:shadow-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                회원가입
              </button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <div className="flex items-center gap-3 py-2">
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "w-10 h-10"
                  }
                }}
                userProfileMode="navigation"
                userProfileUrl="/profile"
              >
                <UserButton.MenuItems>
                  <UserButton.Link
                    label="대시보드"
                    labelIcon={<LayoutDashboard size={16} />}
                    href="/dashboard"
                  />
                  <UserButton.Link
                    label="프로필 설정"
                    labelIcon={<Settings size={16} />}
                    href="/profile"
                  />
                </UserButton.MenuItems>
              </UserButton>
              <span className="text-gray-800 font-medium">{user?.fullName || user?.firstName || '내 계정'}</span>
            </div>
          </SignedIn>
        </nav>
      </div>

      {/* 로그인 알림 */}
      {showLoginAlert && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[100] animate-fadeIn">
          <div className="bg-orange-500 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3">
            <Lock className="w-6 h-6" />
            <div>
              <p className="font-bold">로그인이 필요합니다</p>
              <p className="text-sm opacity-90">서비스를 이용하려면 로그인해주세요</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
