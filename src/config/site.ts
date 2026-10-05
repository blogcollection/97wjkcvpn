export const SITE_CONFIG = {
  name: '网际快车',
  tagline: '稳定连接世界，体验更快一步。',
  description: '网际快车提供高速、稳定、低延迟的全球网络连接体验，支持多地区节点、多设备客户端与影音使用场景。',
  url: 'https://97.wjkcvpn.cfd',
  // All register, buy, get started, try now buttons must point to this official affiliate link:
  registerUrl: 'https://yinxingren1.invisibleaff.com/#/register?code=Gcp1CRso',
  navLinks: [
    { label: '首页', href: '#' },
    { label: '为什么选择我们', href: '#features' },
    { label: '全球节点', href: '#nodes' },
    { label: '套餐方案', href: '#pricing' },
    { label: '客户端', href: '#clients' },
    { label: '常见问题', href: '#faq' },
  ],
  highlights: [
    {
      title: '高速专线',
      desc: '全球优质线路，极速稳定',
      icon: 'bolt'
    },
    {
      title: '多地区节点',
      desc: '覆盖 50+ 国家和地区',
      icon: 'globe'
    },
    {
      title: '流媒体支持',
      desc: '畅享 Netflix、YouTube 等',
      icon: 'play'
    },
    {
      title: '24小时客服',
      desc: '专业团队，随时为你服务',
      icon: 'headset'
    },
  ],
  nodes: [
    {
      name: '香港',
      tag: '低延迟 · 优质线路',
      ping: '18ms',
      status: '推荐',
      color: 'from-blue-500/10 to-indigo-500/10',
      description: '极速直连骨干网，适合全天候日常浏览与高速下载'
    },
    {
      name: '台湾',
      tag: '稳定高速连接',
      ping: '32ms',
      status: '高速',
      color: 'from-emerald-500/10 to-teal-500/10',
      description: '优质海缆直连，专线低丢包率'
    },
    {
      name: '日本',
      tag: '影音 / 游戏常用',
      ping: '36ms',
      status: '专线',
      color: 'from-rose-500/10 to-pink-500/10',
      description: '东京优质机房，游戏与高画质流媒体加速优选'
    },
    {
      name: '新加坡',
      tag: '东南亚优选',
      ping: '48ms',
      status: '低阻',
      color: 'from-amber-500/10 to-orange-500/10',
      description: '跨国亚太核心枢纽，多线 BGP 自动容灾分流'
    },
    {
      name: '美国',
      tag: '国际内容访问',
      ping: '120ms',
      status: '大带宽',
      color: 'from-violet-500/10 to-purple-500/10',
      description: '超大出海带宽通道，海量国际站点畅行无阻'
    },
  ],
  pricing: [
    {
      name: '轻量体验',
      badge: '灵活起步',
      desc: '适合日常轻量网络连接与基础使用需求',
      price: '¥28',
      period: '/月',
      features: [
        '全速访问全球热门节点',
        '支持所有主流操作系统与客户端',
        '智能 BGP 专线路由优化',
        '7×24 小时在线工单支持',
      ],
      isPopular: false,
      ctaText: '立即体验',
    },
    {
      name: '长期使用',
      badge: '最受欢迎 · 推荐',
      desc: '适合高频连接、远程办公与影音重度用户',
      price: '¥78',
      period: '/3个月',
      features: [
        '全速访问全球热门与大带宽专线',
        '支持多设备同时连接与订阅导入',
        '主流流媒体与高清视频加速优化',
        '深度智能分流与低延迟保障',
        '优先客服响应与技术支持',
      ],
      isPopular: true,
      ctaText: '立即购买',
    },
    {
      name: '更多需求',
      badge: '尊享体验',
      desc: '适合多设备协同、团队协作及长期稳定使用',
      price: '¥268',
      period: '/年',
      features: [
        '全量节点与独享高优先级专线',
        '多设备极速畅联，不限终端类型',
        '最高级别链路负载均衡与容灾',
        '超高性价比，全年无忧畅联',
        '专属 VIP 快速服务通道',
      ],
      isPopular: false,
      ctaText: '查看套餐',
    },
  ],
  devices: [
    { name: 'Windows', sub: '支持 Windows 10 / 11', type: 'os' },
    { name: 'macOS', sub: '支持 Intel 与 Apple 芯片', type: 'os' },
    { name: 'iPhone / iPad', sub: 'iOS App 与通用规则', type: 'os' },
    { name: 'Android', sub: '支持主流安卓设备与系统', type: 'os' },
    { name: 'Clash', sub: '一键导入，开箱即用', type: 'client' },
    { name: 'Shadowrocket', sub: 'iOS 热门轻量客户端', type: 'client' },
    { name: 'Surge', sub: '高级网络规则配置工具', type: 'client' },
    { name: 'Sing-box', sub: '新一代通用网络核心', type: 'client' },
  ],
  streaming: [
    { name: 'YouTube', desc: '4K / 8K 超高清秒开', badge: 'Ultra HD' },
    { name: 'Netflix', desc: '畅享海量原创剧集', badge: 'HDR' },
    { name: 'Disney+', desc: '精彩动画与影视专区', badge: 'Dolby' },
    { name: 'Spotify', desc: '无损音频随时随地', badge: 'Hi-Fi' },
    { name: 'HBO Max', desc: '顶级美剧与院线大片', badge: 'Cinematic' },
    { name: 'Twitch', desc: '海外游戏直播低延迟', badge: 'Live 60fps' },
  ],
  faqs: [
    {
      q: '什么是网际快车？',
      a: '网际快车是一项面向全球的高速网络加速与节点连接服务，致力于通过智能线路优选与全球骨干专线部署，为用户提供低延迟、高稳定性的跨地域网络优化体验，满足日常办公、跨境协作、学术查阅与影音娱乐等多种场景。'
    },
    {
      q: '网际快车支持哪些设备与客户端？',
      a: '全面支持 Windows、macOS、iOS (iPhone/iPad)、Android 操作系统，并兼容 Clash、Shadowrocket、Sing-box、Surge 等主流客户端。用户在后台可直接一键导入订阅，无需繁琐的手动配置。'
    },
    {
      q: '如何快速开始使用？',
      a: '只需三步：① 点击网站上的“立即注册”按钮创建账号；② 在用户中心选择并订购适合您的套餐方案；③ 复制订阅链接并导入您所喜爱的客户端，一键开启高速连接。'
    },
    {
      q: '有哪些节点地区可供选择？',
      a: '我们部署了覆盖中国香港、中国台湾、日本、新加坡、美国等热门核心网络枢纽节点，多线 BGP 直连，系统根据您当前的网络环境自动匹配最低延迟路径。'
    },
    {
      q: '连接速度与稳定性表现如何？',
      a: '我们采用高带宽优质专线与智能负载均衡架构，全天候监控链路质量，自动规避拥塞节点。无论是日常网页浏览、远程办公还是大文件下载，均能保持稳定流畅。'
    },
    {
      q: '是否支持主流海外影音与流媒体平台？',
      a: '大部分节点均针对海外主流流媒体（如 YouTube 4K/8K、Netflix、Disney+、Spotify 等）进行了传输优化。实际可用性可能受第三方流媒体平台风控策略影响，我们将持续维护与更新线路。'
    },
    {
      q: '使用过程中遇到连接问题怎么办？',
      a: '用户中心内置了图文并茂的客户端配置教程与常见问题排查手册。如果仍需帮助，可以随时提交工单联系 7×24 小时技术支持团队获得实时解答。'
    },
    {
      q: '如何查看和购买套餐？',
      a: '点击页面中的“立即注册”或“查看套餐”按钮即可跳转至官方用户平台，查看各方案的详细流量、周期优惠与最新活动，支持主流安全便捷的支付方式。'
    }
  ]
};
