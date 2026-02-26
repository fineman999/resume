import type { ProjectDetail } from '../../types/resume';
import { witchworldMetaverse } from './witchworld-metaverse';
import { witchboxStreaming } from './witchbox-streaming';
import { ixQueue } from './ix-queue';
import { waybestKyc } from './waybest-kyc';
import { witchpayWeb3 } from './witchpay-web3';

export const projectDetails: Record<string, ProjectDetail> = {
  'witchworld-metaverse': witchworldMetaverse,
  'witchbox-streaming': witchboxStreaming,
  'ix-queue': ixQueue,
  'waybest-kyc': waybestKyc,
  'witchpay-web3': witchpayWeb3,
};
