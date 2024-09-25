import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  'en-US': {
    translation: {
      "Ant Nav": "🧭🐜Ant Nav",
      "Real-time GPS and IMU Dashboard": "Real-time GPS and IMU Dashboard",
      "Ant Find": "🔍🐜Ant Find",
      "Image Detection Demo": "Image Detection Demo",
      "Ant Visual Tree": "🌲🐜Ant Visual Tree",
      "Binary Tree Visualization Tool": "Binary Tree Visualization Tool",
      "Language": "English"
    }
  },
  'zh-CN': {
    translation: {
      "Ant Nav": "🧭🐜蚂蚁导航",
      "Real-time GPS and IMU Dashboard": "实时GPS与惯性仪表盘",
      "Ant Find": "🔍🐜蚂蚁找找",
      "Image Detection Demo": "图像检测Demo",
      "Ant Visual Tree": "🌲🐜蚂蚁可视化树",
      "Binary Tree Visualization Tool": "二叉树可视化工具",
      "Language": "中文(简体)"
    }
  },
  'ja-JP': {
    translation: {
      "Ant Nav": "🧭🐜アントナビ",
      "Real-time GPS and IMU Dashboard": "リアルタイム GPS および IMU ダッシュボード",
      "Ant Find": "🔍🐜アントファインド",
      "Image Detection Demo": "画像検出デモ",
      "Ant Visual Tree": "🌲🐜アント可視化ツリー",
      "Binary Tree Visualization Tool": "バイナリツリー可視化ツール",
      "Language": "日本語"
    }
  }
};

const userLang = navigator.language || navigator.userLanguage;

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: userLang, 
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;