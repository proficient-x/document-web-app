import { ROUTE_CONFIG } from '../constants/route-config.constants';

const portMapping = new Map<string, number>([
  [ROUTE_CONFIG.AUTHORING, 4201],
  [ROUTE_CONFIG.EDITOR, 4202],
]);

export const isAppRunningInLocal = () =>
  window.location.href.includes('localhost');

export const getRemoteUrl = (path: string) =>
  isAppRunningInLocal()
    ? 'http://localhost:' + portMapping.get(path)
    : window.location.origin + `/${path}`;
