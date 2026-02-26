import type { ProjectDetail } from '../../types/resume';

export const ixQueue: ProjectDetail = {
  id: 'ix-queue',
  title: '대기 등록 시스템 개발',
  company: '익스',
  period: '2025.03 ~ 2025.05',
  role: '백엔드 개발자',
  techStack: ['Go', 'Gin', 'MySQL', 'Redis', 'AWS'],
  status: 'completed',

  overview:
    'Redis Sorted Set 기반 우선순위 대기열과 Kubernetes 오토스케일링을 결합한 고가용성 대기 등록 시스템을 설계·개발했습니다. 트래픽 급증 시에도 안정적인 서비스 운영이 가능하도록 인프라를 구성했습니다.',

  background:
    '특정 이벤트 시간대에 트래픽이 급격히 증가하는 서비스 특성상, 일반적인 선착순 방식으로는 서버 과부하와 공정성 문제가 발생했습니다. 우선순위 기반 대기열과 탄력적 인프라가 필요했습니다.',

  sections: [
    {
      title: 'Redis Sorted Set 기반 우선순위 대기열',
      content:
        'Redis Sorted Set을 활용하여 대기열을 구현했습니다. 등록 시각을 score로 사용하여 선입선출(FIFO) 순서를 보장하고, VIP 사용자에게 가중치를 부여해 우선순위 처리를 구현했습니다. Lua 스크립트를 활용한 원자적 연산으로 동시 접근 시에도 데이터 정합성을 유지했습니다.',
      codeSnippet: {
        language: 'go',
        code: `// Redis Sorted Set에 대기 등록 (score: 타임스탬프, 낮을수록 우선)
func (r *QueueRepo) Enqueue(ctx context.Context, userID string, priority float64) error {
    score := float64(time.Now().UnixNano()) - priority*1e12
    return r.rdb.ZAdd(ctx, queueKey, redis.Z{
        Score:  score,
        Member: userID,
    }).Err()
}`,
      },
    },
    {
      title: 'Kubernetes HPA 기반 오토스케일링',
      content:
        'Kubernetes Horizontal Pod Autoscaler(HPA)를 설정하여 CPU/메모리 사용률에 따라 파드가 자동으로 확장·축소되도록 구성했습니다. 대기열 처리 워커는 별도 Deployment로 분리하여 독립적인 스케일링이 가능하도록 설계했습니다.',
    },
    {
      title: '실시간 대기 상태 폴링 API',
      content:
        'Go의 고루틴과 채널을 활용하여 대기 순번 조회 API를 구현했습니다. 클라이언트는 주기적으로 폴링하여 현재 대기 순번과 예상 대기 시간을 확인합니다. Redis TTL을 활용한 세션 관리로 이탈 사용자의 대기열 자동 정리를 구현했습니다.',
    },
  ],

  results: [
    'Redis Sorted Set 기반 공정한 우선순위 대기열 구현',
    'K8s HPA 오토스케일링으로 트래픽 급증 대응',
    '동시성 이슈 없는 원자적 대기열 연산 보장',
    '이탈 사용자 자동 정리로 대기열 정합성 유지',
  ],

  lessons: [
    'Redis를 단순 캐시가 아닌 데이터 구조로 활용하는 설계 패턴',
    'Kubernetes HPA와 커스텀 메트릭을 활용한 오토스케일링 전략',
    '대규모 동시 접근 환경에서의 원자적 연산 중요성',
  ],
};