const appleMenu = {
  title: '苹果',
  menu: {
    'about-this-mac': {
      title: '关于本机',
      breakAfter: true,
    },
    'system-preferences': {
      title: '系统偏好设置...',
    },
    'app-store': {
      title: 'App Store...',
      breakAfter: true,
    },
    'recent-items': {
      title: '最近项目',
      breakAfter: true,
    },
    'force-quit': {
      title: '强制退出...',
      breakAfter: true,
    },
    sleep: {
      title: '睡眠',
    },
    restart: {
      title: '重新启动...',
    },
    shutdown: {
      title: '关闭...',
      breakAfter: true,
    },
    'lock-screen': {
      title: '锁定屏幕',
    },
    logout: {
      title: '登出用户...',
    },
  },
};

export const createMenuConfig = <T extends {}>(et: T) => ({ apple: appleMenu, ...et });
