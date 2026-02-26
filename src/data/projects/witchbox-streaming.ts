import type { ProjectDetail } from '../../types/resume';

export const witchboxStreaming: ProjectDetail = {
  id: 'witchbox-streaming',
  title: '비디오 스트리밍 숏폼 플랫폼 개발',
  company: '위치박스',
  period: '2024.06 ~ 2025.06',
  role: '백엔드 개발자',
  techStack: ['Go', 'Gin', 'MySQL', 'Redis', 'Java', 'Spring Boot', 'AWS', 'Python'],
  status: 'completed',

  overview:
    'AWS 기반 비디오 인코딩 파이프라인, CDN 최적화, 푸시 알림 시스템을 갖춘 숏폼 비디오 스트리밍 플랫폼의 백엔드를 개발했습니다. 대용량 비디오 처리와 효율적인 콘텐츠 전송을 위한 인프라를 설계했습니다.',

  background:
    '숏폼 비디오 서비스의 핵심은 빠른 업로드 처리와 글로벌 사용자 대상 저지연 스트리밍입니다. 다양한 디바이스와 네트워크 환경을 지원하기 위한 인코딩 파이프라인과 CDN 전략이 필요했습니다.',

  sections: [
    {
      title: 'AWS 비디오 인코딩 파이프라인',
      content:
        'AWS MediaConvert를 활용한 비디오 인코딩 파이프라인을 구축했습니다. S3 업로드 이벤트를 트리거로 Lambda 함수가 MediaConvert 작업을 생성하고, 완료 시 HLS 세그먼트를 CloudFront CDN으로 배포하는 자동화된 워크플로우를 설계했습니다. Python으로 Lambda 함수를 구현했습니다.',
    },
    {
      title: 'CDN 최적화 및 스트리밍 성능 개선',
      content:
        'CloudFront 캐시 정책을 최적화하여 CDN 히트율을 향상시켰습니다. HLS 적응형 비트레이트 스트리밍으로 네트워크 상태에 따라 화질이 자동 조절됩니다. 또한 Redis를 활용한 콘텐츠 메타데이터 캐싱으로 API 응답 속도를 개선했습니다.',
    },
    {
      title: '푸시 알림 시스템 개발',
      content:
        'Spring Boot 기반 푸시 알림 서버를 개발하여 새 콘텐츠 업로드, 팔로우 알림, 좋아요 등의 이벤트를 실시간으로 사용자에게 전달합니다. FCM(Firebase Cloud Messaging)을 연동하고 RabbitMQ 메시지 큐를 통해 알림 처리를 비동기화하여 안정성을 확보했습니다.',
    },
  ],

  results: [
    'AWS MediaConvert 기반 자동화 비디오 인코딩 파이프라인 구축',
    'HLS 적응형 비트레이트로 다양한 네트워크 환경 지원',
    '푸시 알림 시스템 구축 및 안정적 운영',
    'Redis 캐싱을 통한 API 응답 속도 개선',
  ],

  lessons: [
    'AWS 서버리스 아키텍처(Lambda, MediaConvert, S3)를 조합한 미디어 파이프라인 설계',
    'CDN 캐시 전략과 HLS 스트리밍 프로토콜에 대한 이해',
    '비동기 메시지 큐를 활용한 알림 시스템 설계',
  ],
};