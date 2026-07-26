# Salt & Hawthorn — mobile-first restaurant demo

这是一个虚构的英国 Whitby 海边餐厅网站，用来模拟“Google Maps 负责发现，官网负责补充细节”的产品。

## 产品范围

- 手机端优先，主验收视口为 390 × 844
- 展示菜单、推荐菜、环境、位置、营业时间、电话入口与游客关心的细节
- 不包含在线预订、支付、账户或后台
- 底部固定 `Menu / Directions / Call`，方便游客单手操作
- 演示站使用虚构品牌、概念地址和无效联系方式，并设置 `noindex`

## 本地运行

```bash
pnpm install
pnpm dev
```

打开 `http://localhost:3000`。

## 交付给真实商家前

1. 用商家书面确认的信息替换品牌、菜单、价格、营业时间、电话和地址。
2. 使用商家授权照片；AI 生成图片必须向商家说明，不应冒充真实菜品。
3. 把 Google Maps 链接替换为商家的真实 Google Business Profile。
4. 移除概念演示提示和 `noindex`，添加真实的 Restaurant 结构化数据。
5. 在真实手机上测试电话、导航、菜单阅读和加载速度。
