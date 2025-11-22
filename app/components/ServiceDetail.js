'use client';

import { FileEdit, Video, Wand2, Mic } from 'lucide-react';
import Image from 'next/image';

const services = [
  {
    icon: FileEdit,
    title: '스토리즈',
    subtitle: 'AI 에이전트와 함께\n나만의 이야기를 만들어요.',
    description: 'AI와 대화하며 쉽고 빠르게 이야기를 만들어보세요.\n이야기에 원하는 설정을 반영하고, 글을 고도화할 수 있어요.',
    image: 'https://cdn.midjourney.com/9ff1acc2-9298-4cc5-9c2c-dd2807c7779e/0_0.png',
    reverse: false,
  },
  {
    icon: Video,
    title: '3D 스튜디오',
    subtitle: 'AI 시나리오를 스토리보드,\n웹툰의 완성으로 쉽게 만들어요.',
    description: '3D 캐릭터와 배경으로 손쉽게 장면을 구성하고,\n자동 레이아웃으로 웹툰을 완성하세요.',
    image: 'https://cdn.midjourney.com/5d3dd455-e0f3-493c-82d0-60ab8e904afb/0_0.png',
    reverse: true,
  },
  {
    icon: Wand2,
    title: '에디터',
    subtitle: '다면 사용자와 협업하여\n웹툰을 편집하고 맞춤 작품을 완성하세요.',
    description: '실시간 협업 기능으로 팀원들과 함께 작업하고,\n강력한 편집 도구로 작품을 완성하세요.',
    image: '/images/subbanner.jpg',
    reverse: false,
  },
  {
    icon: Mic,
    title: '더브',
    subtitle: 'AI 세팅에 딥-아카 베대니\n블람을 수 위에 없는 캐릭터 보다 팝핸 웰트까지.',
    description: 'AI 음성 합성 기술로 캐릭터에 생동감을 더하고,\n다양한 보이스로 몰입감 있는 콘텐츠를 제작하세요.',
    image: '/images/feature-4.png',
    reverse: true,
  },
];

export default function ServiceDetail() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto space-y-32">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className={`flex flex-col ${
                service.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
              } items-center gap-12 lg:gap-20`}
            >
              {/* 이미지 */}
              <div className="flex-1 w-full">
                <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-100 to-gray-200">
                  {service.image ? (
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                      <Icon className="w-24 h-24" />
                    </div>
                  )}
                </div>
              </div>

              {/* 텍스트 */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">{service.title}</h3>
                </div>

                <h4 className="text-2xl font-semibold text-gray-800 leading-relaxed whitespace-pre-line">
                  {service.subtitle}
                </h4>

                <p className="text-lg text-gray-600 leading-relaxed whitespace-pre-line">
                  {service.description}
                </p>

                <button className="group mt-4 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-bold hover:from-orange-600 hover:to-red-600 transition-all hover:scale-105 shadow-lg hover:shadow-xl">
                  <span className="flex items-center gap-2">
                    자세히 보기
                    <span className="inline-block group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
