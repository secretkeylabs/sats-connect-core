import { type Method } from '../methods';

export const supportStates = {
  active: 'active',
  deprecated: 'deprecated',
  removed: 'removed',
} as const;

export type SupportState = (typeof supportStates)[keyof typeof supportStates];

export const defineMethodSupport = (
  supportDefinition: Record<Method, SupportState>
): Record<Method, SupportState> => {
  return supportDefinition;
};
