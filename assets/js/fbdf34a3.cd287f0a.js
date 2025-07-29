"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([["877512"],{256266:function(e,a,r){r.r(a),r.d(a,{frontMatter:()=>o,toc:()=>c,default:()=>h,metadata:()=>t,assets:()=>d,contentTitle:()=>n});var t=JSON.parse('{"id":"ja/ja_Edge_Robotics","title":"\u30ED\u30DC\u30C6\u30A3\u30AF\u30B9\u30DA\u30FC\u30B8","description":"\u3053\u306E\u30C8\u30D4\u30C3\u30AF\u3067\u306F\u3001Seeed Studio\u306E\u30ED\u30DC\u30C6\u30A3\u30AF\u30B9\u88FD\u54C1\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3092\u7D39\u4ECB\u3057\u307E\u3059\u3002","source":"@site/docs/ja/ja_Edge_Robotics.md","sourceDirName":"ja","slug":"/ja/robotics_page","permalink":"/ja/robotics_page","draft":false,"unlisted":false,"editUrl":"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/ja/ja_Edge_Robotics.md","tags":[],"version":"current","lastUpdatedBy":"ZhuYaohui","lastUpdatedAt":1748476800000,"frontMatter":{"description":"\u3053\u306E\u30C8\u30D4\u30C3\u30AF\u3067\u306F\u3001Seeed Studio\u306E\u30ED\u30DC\u30C6\u30A3\u30AF\u30B9\u88FD\u54C1\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3092\u7D39\u4ECB\u3057\u307E\u3059\u3002","title":"\u30ED\u30DC\u30C6\u30A3\u30AF\u30B9\u30DA\u30FC\u30B8","keywords":["\u30ED\u30DC\u30C6\u30A3\u30AF\u30B9","nvidia","ros","isaac"],"image":"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png","slug":"/ja/robotics_page","last_update":{"date":"2025/05/29","author":"ZhuYaohui"}},"sidebar":"jaSidebar","previous":{"title":"Quantum Mini Linux \u958B\u767A\u30AD\u30C3\u30C8","permalink":"/ja/Quantum-Mini-Linux-Development-Kit"},"next":{"title":"Lerobot\u3067SO10xArm\u30ED\u30DC\u30C3\u30C8\u30A2\u30FC\u30E0\u3092\u4F7F\u7528\u3059\u308B\u65B9\u6CD5","permalink":"/ja/lerobot_so100m"}}'),s=r(785893),i=r(250065);let o={description:"\u3053\u306E\u30C8\u30D4\u30C3\u30AF\u3067\u306F\u3001Seeed Studio\u306E\u30ED\u30DC\u30C6\u30A3\u30AF\u30B9\u88FD\u54C1\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3092\u7D39\u4ECB\u3057\u307E\u3059\u3002",title:"\u30ED\u30DC\u30C6\u30A3\u30AF\u30B9\u30DA\u30FC\u30B8",keywords:["\u30ED\u30DC\u30C6\u30A3\u30AF\u30B9","nvidia","ros","isaac"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/ja/robotics_page",last_update:{date:"2025/05/29",author:"ZhuYaohui"}},n="\u{1F916} \u30ED\u30DC\u30C6\u30A3\u30AF\u30B9\u30CA\u30D3\u30B2\u30FC\u30B7\u30E7\u30F3",d={},c=[{value:"\u{1F4E6} \u30ED\u30DC\u30C3\u30C8\u30AD\u30C3\u30C8",id:"robot-kits",level:2},{value:"\u{1F917} Lerobot",id:"-lerobot",level:2},{value:"\u305D\u306E\u4ED6",id:"\u305D\u306E\u4ED6",level:2},{value:"\u2699\uFE0F \u30A2\u30AF\u30C1\u30E5\u30A8\u30FC\u30BF",id:"actuators",level:2},{value:"\u{1F441}\uFE0F \u30BB\u30F3\u30B5\u30FC",id:"sensors",level:2},{value:"\u{1F4BB} \u30BD\u30D5\u30C8\u30A6\u30A7\u30A2",id:"software",level:2}];function l(e){let a={a:"a",blockquote:"blockquote",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.header,{children:(0,s.jsx)(a.h1,{id:"-\u30ED\u30DC\u30C6\u30A3\u30AF\u30B9\u30CA\u30D3\u30B2\u30FC\u30B7\u30E7\u30F3",children:"\u{1F916} \u30ED\u30DC\u30C6\u30A3\u30AF\u30B9\u30CA\u30D3\u30B2\u30FC\u30B7\u30E7\u30F3"})}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.em,{children:"\u300C\u4ECA\u65E5\u306E\u79D1\u5B66\u306F\u660E\u65E5\u306E\u6280\u8853\u3067\u3042\u308B\u3002\u300D - \u30A8\u30C9\u30EF\u30FC\u30C9\u30FB\u30C6\u30E9\u30FC"})}),"\n"]}),"\n",(0,s.jsx)("div",{className:"quick-nav-container",children:(0,s.jsxs)("nav",{className:"quick-nav",children:[(0,s.jsxs)("a",{href:"#robot-kits",className:"nav-item",children:[(0,s.jsx)("span",{className:"icon",children:"\u{1F4E6}"}),(0,s.jsx)("span",{className:"text",children:"\u30ED\u30DC\u30C3\u30C8\u30AD\u30C3\u30C8"}),(0,s.jsx)("div",{className:"hover-effect"})]}),(0,s.jsxs)("a",{href:"#actuators",className:"nav-item",children:[(0,s.jsx)("span",{className:"icon",children:"\u2699\uFE0F"}),(0,s.jsx)("span",{className:"text",children:"\u30A2\u30AF\u30C1\u30E5\u30A8\u30FC\u30BF"}),(0,s.jsx)("div",{className:"hover-effect"})]}),(0,s.jsxs)("a",{href:"#sensors",className:"nav-item",children:[(0,s.jsx)("span",{className:"icon",children:"\u{1F441}\uFE0F"}),(0,s.jsx)("span",{className:"text",children:"\u30BB\u30F3\u30B5\u30FC"}),(0,s.jsx)("div",{className:"hover-effect"})]}),(0,s.jsxs)("a",{href:"#software",className:"nav-item",children:[(0,s.jsx)("span",{className:"icon",children:"\u{1F4BB}"}),(0,s.jsx)("span",{className:"text",children:"\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2"}),(0,s.jsx)("div",{className:"hover-effect"})]})]})}),"\n",(0,s.jsxs)("div",{className:"nav-grid",children:[(0,s.jsx)(a.h2,{id:"robot-kits",children:"\u{1F4E6} \u30ED\u30DC\u30C3\u30C8\u30AD\u30C3\u30C8"}),(0,s.jsx)("div",{class:"category-group",children:(0,s.jsxs)("div",{className:"category-card robot-kits",children:[(0,s.jsx)(a.h2,{id:"-lerobot",children:"\u{1F917} Lerobot"}),(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.a,{href:"/ja/lerobot_so100m/",children:"SO100/101 \u30A2\u30FC\u30E0"})," ",(0,s.jsx)("span",{className:"tag stable",children:"\u66F4\u65B0"})]}),"\n",(0,s.jsx)(a.li,{children:(0,s.jsx)(a.a,{href:"/ja/lerobot_so100m_isaacsim/",children:"SO100 \u30A2\u30FC\u30E0\uFF08IsaacSim\u5BFE\u5FDC\uFF09"})}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.a,{href:"/ja/lerobot_lekiwi/",children:"Lekiwi \u30E2\u30D0\u30A4\u30EB\u30D9\u30FC\u30B9"})," ",(0,s.jsx)("span",{className:"tag recommended",children:"\u65B0\u7740"})]}),"\n"]}),(0,s.jsx)(a.h2,{id:"\u305D\u306E\u4ED6",children:"\u305D\u306E\u4ED6"}),(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:(0,s.jsx)(a.strong,{children:"\u8FD1\u65E5\u516C\u958B\u4E88\u5B9A"})}),"\n"]})]})}),(0,s.jsx)(a.h2,{id:"actuators",children:"\u2699\uFE0F \u30A2\u30AF\u30C1\u30E5\u30A8\u30FC\u30BF"}),(0,s.jsx)("div",{class:"category-group",children:(0,s.jsx)("div",{className:"category-card actuators",children:(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.a,{href:"/ja/myactuator_series/",children:"MyActuator \u30B7\u30EA\u30FC\u30BA\u30E2\u30FC\u30BF\u30FC"})," ",(0,s.jsx)("span",{className:"tag recommended",children:"\u65B0\u7740"})]}),"\n"]})})}),(0,s.jsx)(a.h2,{id:"sensors",children:"\u{1F441}\uFE0F \u30BB\u30F3\u30B5\u30FC"}),(0,s.jsx)("div",{class:"category-group",children:(0,s.jsxs)("div",{className:"category-card sensors",children:[(0,s.jsx)(a.p,{children:(0,s.jsx)(a.strong,{children:"LiDAR \u30B7\u30B9\u30C6\u30E0"})}),(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:(0,s.jsx)(a.a,{href:"/ja/robosense_lidar/",children:"Robosense LiDAR"})}),"\n",(0,s.jsx)(a.li,{children:(0,s.jsx)(a.a,{href:"/ja/mid360/",children:"MID360 LiDAR"})}),"\n",(0,s.jsx)(a.li,{children:(0,s.jsx)(a.a,{href:"/ja/a_loam/",children:"A-LOAM \u30A2\u30EB\u30B4\u30EA\u30BA\u30E0"})}),"\n"]}),(0,s.jsx)(a.p,{children:(0,s.jsx)(a.strong,{children:"\u30D3\u30B8\u30E7\u30F3\u30B7\u30B9\u30C6\u30E0"})}),(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:(0,s.jsx)(a.a,{href:"/ja/orbbec_depth_camera_on_ros/",children:"Orbbec \u6DF1\u5EA6\u30AB\u30E1\u30E9"})}),"\n",(0,s.jsx)(a.li,{children:(0,s.jsx)(a.a,{href:"/ja/csi_camera_on_ros/",children:"CSI \u30AB\u30E1\u30E9\u30BB\u30C3\u30C8\u30A2\u30C3\u30D7"})}),"\n"]})]})}),(0,s.jsx)(a.h2,{id:"software",children:"\u{1F4BB} \u30BD\u30D5\u30C8\u30A6\u30A7\u30A2"}),(0,s.jsx)("div",{class:"category-group",children:(0,s.jsxs)("div",{className:"category-card software",children:[(0,s.jsx)(a.p,{children:(0,s.jsx)(a.strong,{children:"ROS \u30A8\u30B3\u30B7\u30B9\u30C6\u30E0"})}),(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.a,{href:"/ja/installing_ros1/",children:"ROS1 \u30A4\u30F3\u30B9\u30C8\u30FC\u30EB"})," ",(0,s.jsx)("span",{className:"tag recommended",children:"\u65B0\u7740"})]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.a,{href:"/ja/install_isaacros/",children:"IsaacROS \u30BB\u30C3\u30C8\u30A2\u30C3\u30D7"})," ",(0,s.jsx)("span",{className:"tag recommended",children:"\u65B0\u7740"})]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.a,{href:"/ja/install_ros2_humble/",children:"ROS2 Humble"})," ",(0,s.jsx)("span",{className:"tag recommended",children:"\u65B0\u7740"})]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.a,{href:"/ja/isaac_ros_apriltag/",children:"AprilTag \u30E2\u30B8\u30E5\u30FC\u30EB"})," ",(0,s.jsx)("span",{className:"tag recommended",children:"\u65B0\u7740"})]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.a,{href:"/ja/isaac_ros_visual_slam/",children:"Visual SLAM"})," ",(0,s.jsx)("span",{className:"tag recommended",children:"\u65B0\u7740"})]}),"\n"]}),(0,s.jsx)(a.p,{children:(0,s.jsx)(a.strong,{children:"NVIDIA Isaac"})}),(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:(0,s.jsx)(a.a,{href:"/ja/install_isaaclab/",children:"Isaac Lab \u30A4\u30F3\u30B9\u30C8\u30FC\u30EB"})}),"\n"]})]})})]}),"\n",(0,s.jsx)("style",{children:`
/* \u{5BFC}\u{822A}\u{5BB9}\u{5668} */
.quick-nav-container {
margin: 2rem 0;
padding: 1rem;
background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
border-radius: 16px;
box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}

/* Dark\u{6A21}\u{5F0F} - \u{5BFC}\u{822A}\u{5BB9}\u{5668} */
html[data-theme='dark'] .quick-nav-container {
background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
box-shadow: 0 4px 6px rgba(0,0,0,0.3);
}

/* \u{5BFC}\u{822A}\u{4E3B}\u{4F53} */
.quick-nav {
display: flex;
justify-content: space-around;
gap: 1rem;
}

/* \u{5BFC}\u{822A}\u{9879} */
.nav-item {
position: relative;
padding: 0.8rem 1.5rem;
border-radius: 12px;
display: flex;
flex-direction: column;
align-items: center;
text-decoration: none !important;
color: #333;
font-weight: 500;
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
background: white;
box-shadow: 0 2px 4px rgba(0,0,0,0.05);
z-index: 1;
}

/* Dark\u{6A21}\u{5F0F} - \u{5BFC}\u{822A}\u{9879} */
html[data-theme='dark'] .nav-item {
color: #e5e7eb;
background: #374151;
box-shadow: 0 2px 4px rgba(0,0,0,0.4);
}

/* \u{56FE}\u{6807}\u{6837}\u{5F0F} */
.nav-item .icon {
font-size: 1.8rem;
margin-bottom: 0.5rem;
transition: transform 0.3s;
}

/* \u{6587}\u{5B57}\u{6837}\u{5F0F} */
.nav-item .text {
font-size: 0.95rem;
white-space: nowrap;
}

/* \u{60AC}\u{6D6E}\u{7279}\u{6548} */
.nav-item .hover-effect {
position: absolute;
bottom: 0;
left: 0;
width: 100%;
height: 0;
background: linear-gradient(135deg, #4a90e2 0%, #50e3c2 100%);
border-radius: 12px;
transition: height 0.3s ease;
z-index: -1;
}

/* \u{60AC}\u{6D6E}\u{52A8}\u{753B} */
.nav-item:hover {
transform: translateY(-3px);
box-shadow: 0 6px 12px rgba(0,0,0,0.1);
color: white;
}

/* Dark\u{6A21}\u{5F0F} - \u{60AC}\u{6D6E}\u{52A8}\u{753B} */
html[data-theme='dark'] .nav-item:hover {
box-shadow: 0 6px 12px rgba(0,0,0,0.6);
color: white;
}

.nav-item:hover .icon {
transform: scale(1.2) rotate(10deg);
}

.nav-item:hover .hover-effect {
height: 100%;
}

/* \u{54CD}\u{5E94}\u{5F0F}\u{8BBE}\u{8BA1} */
@media (max-width: 768px) {
.quick-nav {
  flex-direction: column;
  gap: 0.5rem;
}
.nav-item {
  flex-direction: row;
  justify-content: start;
  padding: 0.8rem 1rem;
}
.nav-item .icon {
  margin-bottom: 0;
  margin-right: 0.8rem;
}
}
`}),"\n",(0,s.jsx)("style",{children:`
/* \u{5185}\u{5BB9}\u{5361}\u{7247}\u{589E}\u{5F3A}\u{7248}\u{6837}\u{5F0F} */
.nav-grid {
display: block;
gap: 2rem;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
margin-top: 2rem;
}

.category-card {
position: relative;
padding: 1.5rem;
border-radius: 16px;
background: white;
box-shadow: 0 4px 6px rgba(0,0,0,0.05);
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
overflow: hidden;
z-index: 1;
}

/* Dark\u{6A21}\u{5F0F} - \u{5185}\u{5BB9}\u{5361}\u{7247} */
html[data-theme='dark'] .category-card {
background: #374151;
box-shadow: 0 4px 6px rgba(0,0,0,0.4);
color: #e5e7eb;
}

.category-group {
margin-bottom: 2rem;
}

/* \u{5206}\u{7C7B}\u{8272}\u{6807} */
.category-card::before {
content: "";
position: absolute;
top: 0;
left: 0;
width: 6px;
height: 100%;
}

.robot-kits::before { background: linear-gradient(to bottom, #4a90e2, #50e3c2); }
.actuators::before { background: linear-gradient(to bottom, #50e3c2, #a0e3c2); }
.sensors::before { background: linear-gradient(to bottom, #ff6b6b, #ff8e8e); }
.software::before { background: linear-gradient(to bottom, #f5a623, #f5c623); }

/* \u{60AC}\u{6D6E}\u{7279}\u{6548} */
.category-card:hover {
transform: translateY(-5px);
box-shadow: 0 12px 20px rgba(0,0,0,0.1);
}

/* Dark\u{6A21}\u{5F0F} - \u{60AC}\u{6D6E}\u{7279}\u{6548} */
html[data-theme='dark'] .category-card:hover {
box-shadow: 0 12px 20px rgba(0,0,0,0.6);
}

.category-card:hover::after {
content: "";
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%);
z-index: -1;
}

/* Dark\u{6A21}\u{5F0F} - \u{60AC}\u{6D6E}\u{5149}\u{6548} */
html[data-theme='dark'] .category-card:hover::after {
background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%);
}

/* \u{94FE}\u{63A5}\u{52A8}\u{753B} */
.category-card a {
position: relative;
display: inline-block;
transition: all 0.2s;
text-decoration: none !important;
color: #333;
}

/* Dark\u{6A21}\u{5F0F} - \u{94FE}\u{63A5} */
html[data-theme='dark'] .category-card a {
color: #d1d5db;
}

.category-card a:hover {
color: #4a90e2;
transform: translateX(5px);
}

/* Dark\u{6A21}\u{5F0F} - \u{94FE}\u{63A5}\u{60AC}\u{6D6E} */
html[data-theme='dark'] .category-card a:hover {
color: #60a5fa;
}

.category-card a::after {
content: "";
position: absolute;
bottom: -2px;
left: 0;
width: 0;
height: 2px;
background: #4a90e2;
transition: width 0.3s;
}

/* Dark\u{6A21}\u{5F0F} - \u{94FE}\u{63A5}\u{4E0B}\u{5212}\u{7EBF} */
html[data-theme='dark'] .category-card a::after {
background: #60a5fa;
}

.category-card a:hover::after {
width: 100%;
}

/* \u{6807}\u{7B7E}\u{6837}\u{5F0F}\u{589E}\u{5F3A} */
.tag {
font-size: 0.75rem;
padding: 2px 8px;
border-radius: 12px;
margin-left: 8px;
transition: all 0.3s;
}

.stable { 
background: #e6f4ea; 
color: #137333;
box-shadow: 0 2px 4px rgba(0,100,0,0.1);
}

/* Dark\u{6A21}\u{5F0F} - Stable\u{6807}\u{7B7E} */
html[data-theme='dark'] .stable {
background: #065f46;
color: #a7f3d0;
box-shadow: 0 2px 4px rgba(0,100,0,0.3);
}

.recommended { 
background: #fce8e6; 
color: #a50e0e;
box-shadow: 0 2px 4px rgba(200,0,0,0.1);
}

/* Dark\u{6A21}\u{5F0F} - Recommended\u{6807}\u{7B7E} */
html[data-theme='dark'] .recommended {
background: #7f1d1d;
color: #fca5a5;
box-shadow: 0 2px 4px rgba(200,0,0,0.3);
}

.category-card:active {
transform: translateY(-2px) scale(0.98);
box-shadow: 0 6px 10px rgba(0,0,0,0.1);
}

/* Dark\u{6A21}\u{5F0F} - \u{70B9}\u{51FB}\u{6548}\u{679C} */
html[data-theme='dark'] .category-card:active {
box-shadow: 0 6px 10px rgba(0,0,0,0.4);
}

/* \u{54CD}\u{5E94}\u{5F0F}\u{4F18}\u{5316} */
@media (max-width: 768px) {
.nav-grid {
  grid-template-columns: 1fr;
}

.category-card {
  width: 100%;
  margin-top: 0.5rem; /* \u{5361}\u{7247}\u{7D27}\u{8D34}\u{6807}\u{9898} */
}
}

/* Dark\u{6A21}\u{5F0F} - \u{6807}\u{9898}\u{6587}\u{5B57} */
html[data-theme='dark'] h1,
html[data-theme='dark'] h2,
html[data-theme='dark'] h3,
html[data-theme='dark'] h4,
html[data-theme='dark'] h5,
html[data-theme='dark'] h6 {
color: #f9fafb;
}

/* Dark\u{6A21}\u{5F0F} - \u{6B63}\u{6587}\u{6587}\u{5B57} */
html[data-theme='dark'] p,
html[data-theme='dark'] li,
html[data-theme='dark'] strong {
color: #e5e7eb;
}

/* Dark\u{6A21}\u{5F0F} - \u{5F15}\u{7528}\u{5757} */
html[data-theme='dark'] blockquote {
color: #9ca3af;
border-left-color: #4b5563;
}
`})]})}function h(e={}){let{wrapper:a}={...(0,i.a)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,a,r){r.d(a,{Z:()=>n,a:()=>o});var t=r(667294);let s={},i=t.createContext(s);function o(e){let a=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function n(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:a},e.children)}}}]);