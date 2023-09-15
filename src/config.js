const SERVE = false; // 是否使用线上服务器

const HOST = ""; // 线上服务器地址，如果不使用请留空

const BLOG_NAME = "学妹爱补习"; // 个人网站名字

const BLOG_URL = "http://xuemei.xyz"; // 个人网站链接（请填写完整链接）

const GITHUB = "https://img.r10086.com/"; // 右上角 Github 图标链接，留空不显示

const BACKGROUND_IMG_URL = "https://api.r10086.com/%E5%9B%BE%E5%8C%85webp/%E5%8A%A8%E6%BC%AB%E7%BB%BC%E5%90%8818/img212.webp"; // 背景图片url，默认为必应每日图片（第三方接口）

const SORT_DATA = [
  { sortId: 1, title: "校内" },
  { sortId: 2, title: "资源" },
  { sortId: 3, title: "娱乐" },
  { sortId: 4, title: "学习" },
]; // 网站分类列表，请按照API.md中'/getSort'接口中返回的data格式填写

const RECORD_NUMBER = ""; // 网站备案号，留空不显示

const PAGES_DATA = [
  {
    pageId: 1,
    sortId: 1,
    title: "学校官网",
    subtitle: "河北环境工程学院",
    url: "https://www.hebuee.edu.cn/",
    icon: "https://www.hebuee.edu.cn/images/logo.png"
  },{
    pageId: 1,
    sortId: 1,
    title: "教务系统",
    subtitle: "河北环境工程学院教务系统",
    url: "https://webvpn.hebuee.edu.cn/",
    icon: "https://webvpn.hebuee.edu.cn/wengine-vpn/js/image/logo.png"
  },{
    pageId: 1,
    sortId: 1,
    title: "超星",
    subtitle: "超星学习通",
    url: "https://www.chaoxing.com/",
    icon: "https://www.chaoxing.com/images/logo.png"
  },{
    pageId: 1,
    sortId: 1,
    title: "智慧树",
    subtitle: "智慧树",
    url: "https://www.zhihuishu.com/",
    icon: "https://www.zhihuishu.com/assets/images/home-logo-dark.png"
  },{
    pageId: 1,
    sortId: 1,
    title: "四六级报名官网",
    subtitle: "四六级报名地址",
    url: "https://cet-bm.neea.edu.cn/Student/DetailsAG.html",
    icon: "https://cet.neea.edu.cn/favicon.ico"
  },
  {
    pageId: 2,
    sortId: 2,
    title: "吾爱破解",
    subtitle: "吾爱破解论坛致力于软件安全与病毒分析的前沿，丰富的技术版块交相辉映...",
    url: "https://www.52pojie.cn/forum.php",
    icon: "https://attach.52pojie.cn/logo.gif"
  },
  {
    pageId: 2,
    sortId: 2,
    title: "佛系软件",
    subtitle: "吾爱破解论坛致力于软件安全与病毒分析的前沿，丰富的技术版块交相辉映...",
    url: "https://foxirj.com",
    icon: "https://foxirj.com/wp-content/themes/foxirj-child/static/img/logo.png"
  },
  {
    pageId: 3,
    sortId: 3,
    title: "MyFreeMp3音乐网",
    subtitle: "MyFreeMp3音乐网",
    url: "https://tools.liumingye.cn/music/#/",
    icon: "https://npm.elemecdn.com/@liumingye/cdn2/favicon.ico"
  },
  {
    pageId: 3,
    sortId: 3,
    title: "哔哩哔哩",
    subtitle: "哔哩哔哩 (゜-゜)つロ 干杯~-bilibili",
    url: "https://www.bilibili.com",
    icon: "https://e-assets.gitee.com/gitee-community-web/_next/static/media/logo-black.0c964084.svg"
  },
  {
    pageId: 3,
    sortId: 3,
    title: "A站 ",
    subtitle: "AcFun是国内首家弹幕视频网站",
    url: "https://www.acfun.cn/",
    icon: "https://ts3.cn.mm.bing.net/th?id=ODLS.56b7b92a-ac78-4437-b18f-0734e7e23163&w=32&h=32&o=6&pid=13.1"
  },
  {
    pageId: 4,
    sortId: 4,
    title: "GitHub官网",
    subtitle: "github",
    url: "https://github.com",
    icon: "https://github.githubassets.com/favicons/favicon.png"
  },
  {
    pageId: 4,
    sortId: 4,
    title: "Gitee官网",
    subtitle: "Gitee官网",
    url: "https://gitee.com/",
    icon: "https://e-assets.gitee.com/gitee-community-web/_next/static/media/logo-black.0c964084.svg"
  },
  {
    pageId: 4,
    sortId: 4,
    title: "Stack Overflow",
    subtitle: "国外程序员交流网站",
    url: "https://stackoverflow.co/",
    icon: "https://stackoverflow.co/favicon.ico"
  }
]; // 网站分类列表，请按照API.md中'/getPages'接口中返回的data格式填写

const SLOGAN = [
  "欢迎拜访",
  "歡迎拜訪",
  "Welcome, my friend!",
  "訪問へようこそ",
  "嗨，别来无恙",
  "不忘初心，一生浪漫",
  "最近还好吗？",
  "流星，落花，萤火",
  "马车越空，晃荡越响"
]; // 在Logo下方显示的标题

const FOOTER_INFO = false; // 是否显示抽屉右下角的文字信息

export default {
  SERVE,
  HOST,
  BLOG_URL,
  BLOG_NAME,
  SORT_DATA,
  PAGES_DATA,
  SLOGAN,
  GITHUB,
  FOOTER_INFO,
  BACKGROUND_IMG_URL,
  RECORD_NUMBER
};
