import type { ProjectDetail } from '../../types/resume';

export const waybestKyc: ProjectDetail = {
  id: 'waybest-kyc',
  title: 'KYC 인증 시스템 개발',
  company: '웨이비스트',
  period: '2025.05 ~ 2025.08',
  role: '백엔드 개발자',
  techStack: ['Go', 'Gin', 'MySQL', 'Redis', 'AWS'],
  status: 'completed',

  overview:
    'Sumsub을 연동한 신원 인증(KYC) 시스템을 설계하고, 비동기 처리 최적화를 통해 인증 처리 속도와 안정성을 향상시켰습니다. 금융 서비스에 필요한 규정 준수(Compliance) 요구사항을 충족하는 시스템을 구현했습니다.',

  background:
    'Web3 금융 서비스를 위해 법적 규정 준수가 필요한 KYC 인증 시스템이 필요했습니다. 사용자 경험을 해치지 않으면서도 정확하고 빠른 신원 검증이 핵심 과제였습니다.',

  sections: [
    {
      title: 'Sumsub KYC 연동 설계',
      content:
        'Sumsub SDK를 활용하여 여권/신분증 스캔, 셀피 인증, 주소 인증 등 다단계 KYC 플로우를 구현했습니다. Sumsub의 웹훅을 수신하여 인증 결과를 실시간으로 처리하고 사용자 상태를 업데이트합니다. 인증 레벨에 따라 서비스 접근 권한을 차등 부여하는 정책을 설계했습니다.',
    },
    {
      title: '비동기 처리 최적화',
      content:
        'KYC 인증 결과 처리를 비동기 파이프라인으로 설계하여 Sumsub 웹훅 응답 지연이 서비스에 영향을 미치지 않도록 했습니다. Go 고루틴 풀을 사용하여 다수의 인증 이벤트를 병렬 처리하고, Redis를 통해 처리 상태를 추적했습니다.',
      codeSnippet: {
        language: 'go',
        code: `// Sumsub 웹훅 비동기 처리
func (h *KYCHandler) HandleWebhook(c *gin.Context) {
    var event SumsubEvent
    if err := c.ShouldBindJSON(&event); err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
        return
    }
    // 웹훅 즉시 응답 후 비동기 처리
    c.JSON(http.StatusOK, gin.H{"status": "received"})
    go h.processKYCEvent(context.Background(), event)
}`,
      },
    },
    {
      title: '보안 및 데이터 관리',
      content:
        'KYC 관련 민감 데이터는 암호화하여 저장하고 접근 로그를 관리했습니다. Sumsub 웹훅 서명 검증으로 위변조된 요청을 차단했습니다. 개인정보보호법 및 GDPR 요구사항에 맞게 데이터 보존 기간 정책을 적용했습니다.',
    },
  ],

  results: [
    'Sumsub 연동 다단계 KYC 플로우 구현 및 운영',
    '비동기 웹훅 처리로 서비스 안정성 향상',
    '인증 레벨별 권한 제어 시스템 구현',
    '보안 요구사항(서명 검증, 암호화) 충족',
  ],

  lessons: [
    '서드파티 KYC 서비스 연동 시 신뢰성과 보안 설계의 중요성',
    '금융 서비스의 규정 준수(Compliance) 요구사항 이해',
    '웹훅 기반 비동기 이벤트 처리 패턴',
  ],
};
