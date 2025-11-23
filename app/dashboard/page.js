'use client';

import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Header from '../components/Header';

export default function DashboardPage() {
  const { isLoaded, isSignedIn, user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push('/');
    }
  }, [isLoaded, isSignedIn, router]);

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">로딩 중...</p>
        </div>
      </div>
    );
  }

  if (!isSignedIn) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header alwaysScrolled={true} />

      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* 환영 메시지 */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              안녕하세요, {user.firstName || user.username || '사용자'}님! 👋
            </h1>
            <p className="text-gray-600">
              TOOLB PLUS 대시보드에 오신 것을 환영합니다.
            </p>
          </div>

          {/* 통계 카드 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">프로젝트</h3>
                <span className="text-3xl">📁</span>
              </div>
              <p className="text-3xl font-bold text-orange-500">12</p>
              <p className="text-sm text-gray-600 mt-2">진행 중인 프로젝트</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">작업물</h3>
                <span className="text-3xl">🎨</span>
              </div>
              <p className="text-3xl font-bold text-orange-500">48</p>
              <p className="text-sm text-gray-600 mt-2">완성된 작업물</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">크레딧</h3>
                <span className="text-3xl">💎</span>
              </div>
              <p className="text-3xl font-bold text-orange-500">250</p>
              <p className="text-sm text-gray-600 mt-2">사용 가능한 크레딧</p>
            </div>
          </div>

          {/* 사용자 정보 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">내 정보</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-gray-600 mb-1">이름</p>
                <p className="text-lg font-medium text-gray-900">
                  {user.fullName || '설정되지 않음'}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">이메일</p>
                <p className="text-lg font-medium text-gray-900">
                  {user.primaryEmailAddress?.emailAddress || '이메일 없음'}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">사용자명</p>
                <p className="text-lg font-medium text-gray-900">
                  {user.username || '설정되지 않음'}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">가입일</p>
                <p className="text-lg font-medium text-gray-900">
                  {new Date(user.createdAt).toLocaleDateString('ko-KR')}
                </p>
              </div>
            </div>
          </div>

          {/* 최근 활동 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">최근 활동</h2>
            <div className="space-y-4">
              {[
                { title: 'TB CODE 편집기 사용', time: '2시간 전', icon: '💻' },
                { title: '새 프로젝트 생성', time: '5시간 전', icon: '✨' },
                { title: '웹툰 편집 완료', time: '1일 전', icon: '🎨' },
                { title: '크레딧 충전', time: '3일 전', icon: '💰' },
              ].map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">{activity.icon}</span>
                    <div>
                      <p className="font-medium text-gray-900">{activity.title}</p>
                      <p className="text-sm text-gray-600">{activity.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
