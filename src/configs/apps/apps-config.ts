import { createAppConfig } from '🍎/helpers/create-app-config';

const wallpapers = createAppConfig({
  title: '壁纸',
  resizable: true,

  height: 600,
  width: 800,

  dockBreaksBefore: true,
});

const calculator = createAppConfig({
  title: '计算器',

  expandable: true,
  resizable: false,

  height: 300 * 1.414,
  width: 300,
});

const calendar = createAppConfig({
  title: '日历',
  resizable: true,
});

const vscode = createAppConfig({
  title: 'VSCode',
  resizable: true,

  height: 600,
  width: 800,
});

const finder = createAppConfig({
  title: '访达',
  resizable: true,

  // dockBreaksBefore: true,
  shouldOpenWindow: false,
});

const safari = createAppConfig({
  title: 'Safari',
  resizable: true,
});

const systemPreferences = createAppConfig({
  title: '系统设置',
  resizable: true,
});

const purusTwitter = createAppConfig({
  title: `关于开发者`,
  resizable: true,

  dockBreaksBefore: true,

  height: 600,
  width: 800,
});

const viewSource = createAppConfig({
  title: `浏览代码`,
  resizable: true,

  shouldOpenWindow: false,
  externalAction: () => window.open('https://github.com/puruvj/macos-web', '_blank'),
});

const vercel = createAppConfig({
  title: `运行于Vercel`,
  resizable: true,

  shouldOpenWindow: false,
  externalAction: () =>
    window.open('https://vercel.com/?utm_source=purus-projects&utm_campaign=oss', '_blank'),

  dockBreaksBefore: true,
});

const appstore = createAppConfig({
  title: 'App Store',
  resizable: true,
});

export const appsConfig = {
  finder,
  wallpapers,
  calculator,
  calendar,
  vscode,
  appstore,
  // safari,

  // 'system-preferences': systemPreferences,

  'purus-twitter': purusTwitter,
  'view-source': viewSource,

  vercel,
};
