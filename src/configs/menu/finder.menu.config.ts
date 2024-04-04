import { createMenuConfig } from '🍎/helpers/create-menu-config';

export const finderMenuConfig = createMenuConfig({
  default: {
    title: '访达',
    menu: {
      'about-finder': {
        title: '关于访达',
        breakAfter: true,
      },
      preferences: {
        title: '设置',
        breakAfter: true,
      },
      'empty-trash': {
        title: '清空回收站',
        breakAfter: true,
      },
      'hide-finder': {
        title: '隐藏访达',
      },
      'hide-others': {
        title: '隐藏其他',
      },
      'show-all': {
        title: '显示全部',
        disabled: true,
      },
    },
  },

  file: {
    title: 'File',
    menu: {
      'new-finder-window': {
        title: '新建访达窗口',
      },
      'new-folder': {
        title: '新建文件夹',
      },
      'new-folder-with-selection': {
        title: '用所选文件新建文件夹',
        disabled: true,
      },
      'new-smart-folder': {
        title: '新建智能文件夹',
      },
      'new-tab': {
        title: '新标签页',
      },
      open: {
        title: '打开',
        disabled: true,
      },
      'open-with': {
        title: '打开方式',
        disabled: true,
      },
      print: {
        title: '打印',
        disabled: true,
      },
      'close-window': {
        title: '关闭窗口',
        disabled: true,
        breakAfter: true,
      },

      'get-info': {
        title: '详细信息',
      },
      rename: {
        title: '重命名',
        disabled: true,
        breakAfter: true,
      },

      compress: {
        title: '压缩',
        disabled: true,
        breakAfter: true,
      },

      duplicate: {
        title: '复制',
        disabled: true,
      },
      'make-alias': {
        title: '制作替身',
        disabled: true,
      },
      'quick-look': {
        title: '快速查看',
        disabled: true,
      },
      'show-original': {
        title: '显示原始',
        disabled: true,
      },
      'add-to-sidebar': {
        title: '添加到边栏',
        disabled: true,
        breakAfter: true,
      },

      'move-to-trash': {
        title: '移到废纸篓',
        disabled: true,
      },
      eject: {
        title: '弹出',
        disabled: true,
        breakAfter: true,
      },

      find: {
        title: '寻找',
        breakAfter: true,
      },

      tags: {
        title: '标签...',
        disabled: true,
      },
    },
  },

  edit: {
    title: '编辑',
    menu: {
      undo: {
        title: '取消',
        disabled: true,
      },
      redo: {
        title: '撤销',
        disabled: true,
        breakAfter: true,
      },

      cut: {
        title: '剪切',
        disabled: true,
      },
      copy: {
        title: '复制',
        disabled: true,
      },
      paste: {
        title: '粘贴',
        disabled: true,
      },
      'select-all': {
        title: '选择全部',
        disabled: true,
        breakAfter: true,
      },

      'show-clipboard': {
        title: '显示剪贴板',
        breakAfter: true,
      },

      'start-dictation': {
        title: '开始听写...',
      },
      'emoji-and-symbols': {
        title: '表情符号和符号',
      },
    },
  },

  view: {
    title: '查看',
    menu: {
      'as-icons': {
        title: '以图标显示',
        disabled: true,
      },
      'as-list': {
        title: '以文字列表显示',
        disabled: true,
      },
      'as-columns': {
        title: '作为列',
        disabled: true,
      },
      'as-gallery': {
        title: '作为库',
        disabled: true,
        breakAfter: true,
      },

      'use-stacks': {
        title: '使用堆栈',
      },
      'sort-by': {
        title: '排序方式',
        menu: {},
      },
      'clean-up': {
        title: '整理',
        disabled: true,
      },
      'clean-up-by': {
        title: '整理方式',
        disabled: true,
        breakAfter: true,
        menu: {},
      },

      'hide-sidebar': {
        title: '隐藏边栏',
        disabled: true,
      },
      'show-preview': {
        title: '显示预览',
        disabled: true,
        breakAfter: true,
      },

      'hide-toolbar': {
        title: '隐藏工具栏',
        disabled: true,
      },
      'show-all-tabs': {
        title: '显示所有选项卡',
        disabled: true,
      },
      'show-tab-bar': {
        title: '显示选项卡栏',
        disabled: true,
      },
      'show-path-bar': {
        title: '显示路径栏',
        disabled: true,
      },
      'show-status-bar': {
        title: '显示状态栏',
        disabled: true,
        breakAfter: true,
      },

      'customize-toolbar': {
        title: '自定义工具栏',
        disabled: true,
        breakAfter: true,
      },

      'show-view-options': {
        title: '显示视图选项',
      },
      'show-preview-options': {
        title: '显示预览选项',
        disabled: true,
        breakAfter: true,
      },

      'enter-full-screen': {
        title: '全屏显示',
        disabled: true,
      },
    },
  },

  go: {
    title: '前往',
    menu: {
      back: {
        title: '前往',
        disabled: true,
      },
      forward: {
        title: '前进',
        disabled: true,
      },
      'enclosing-folder': {
        title: '正在封装文件夹',
        breakAfter: true,
      },

      recents: {
        title: '最近打开',
      },
      documents: {
        title: '文稿',
      },
      desktop: {
        title: '桌面',
      },
      downloads: {
        title: '下载',
      },
      home: {
        title: '主页',
      },
      computer: {
        title: '此电脑',
      },
      airdrop: {
        title: '隔空投送',
      },
      network: {
        title: '网络',
      },
      'icloud-drive': {
        title: 'iCloud',
      },
      applications: {
        title: '应用程序',
      },
      utilities: {
        title: '公共',
        breakAfter: true,
      },

      'go-to-folder': {
        title: '前往文件夹',
      },
      'connect-to-server': {
        title: '连接到服务器',
      },
    },
  },

  window: {
    title: '窗口',
    menu: {
      minimize: {
        title: '最小化',
        disabled: true,
      },
      zoom: {
        title: '最大化',
        disabled: true,
      },
      'move-window-to-left-side-of-screen': {
        title: '将窗口移动到屏幕左侧',
        disabled: true,
      },
      'move-window-to-right-side-of-screen': {
        title: '将窗口移动到屏幕右侧',
        disabled: true,
      },
      'cycle-through-windows': {
        title: '在Windows中循环',
        breakAfter: true,
      },

      'show-previous-tab': {
        title: '显示上一个选项卡',
        disabled: true,
      },
      'show-next-tab': {
        title: '显示下一个选项卡',
        disabled: true,
      },
      'move-tab-to-new-window': {
        title: '将选项卡移动到新窗口',
        disabled: true,
      },
      'merge-all-windows': {
        title: '合并所有窗口',
        disabled: true,
        breakAfter: true,
      },

      'bring-all-to-front': {
        title: '将所有内容置于最前面',
      },
    },
  },

  help: {
    title: '帮助',
    menu: {
      'send-finder-feedback': {
        title: '发送访达反馈',
        breakAfter: true,
      },
      'macos-help': {
        title: 'macOS帮助',
      },
    },
  },
});
