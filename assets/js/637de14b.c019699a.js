"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([["626318"],{306497:function(e,a,s){s.r(a),s.d(a,{frontMatter:()=>c,toc:()=>l,default:()=>m,metadata:()=>r,assets:()=>o,contentTitle:()=>i});var r=JSON.parse('{"id":"zh-CN/cn_Edge_Robotics","title":"\u673A\u5668\u4EBA\u6280\u672F","description":"\u672C\u4E3B\u9898\u4ECB\u7ECD Seeed Studio \u7684\u673A\u5668\u4EBA\u4EA7\u54C1\u6587\u6863\u3002","source":"@site/docs/zh-CN/cn_Edge_Robotics.md","sourceDirName":"zh-CN","slug":"/cn/robotics_page","permalink":"/cn/robotics_page","draft":false,"unlisted":false,"editUrl":"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/zh-CN/cn_Edge_Robotics.md","tags":[],"version":"current","lastUpdatedBy":"ZhuYaohui","lastUpdatedAt":1748476800000,"frontMatter":{"description":"\u672C\u4E3B\u9898\u4ECB\u7ECD Seeed Studio \u7684\u673A\u5668\u4EBA\u4EA7\u54C1\u6587\u6863\u3002","title":"\u673A\u5668\u4EBA\u6280\u672F","keywords":["robotics","nvidia","ros","isaac"],"image":"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png","slug":"/cn/robotics_page","last_update":{"date":"05/29/2025","author":"ZhuYaohui"}},"sidebar":"CNSidebar","previous":{"title":"Quantum Mini Linux \u5F00\u53D1\u5957\u4EF6","permalink":"/cn/Quantum-Mini-Linux-Development-Kit"},"next":{"title":"\u57FA\u4E8E LeRobot \u7684\u534E\u99A8\u4EAC StarAI \u673A\u68B0\u81C2\u5165\u95E8\u6559\u7A0B","permalink":"/cn/lerobot_starai_arm"}}'),t=s(785893),n=s(250065);let c={description:"\u672C\u4E3B\u9898\u4ECB\u7ECD Seeed Studio \u7684\u673A\u5668\u4EBA\u4EA7\u54C1\u6587\u6863\u3002",title:"\u673A\u5668\u4EBA\u6280\u672F",keywords:["robotics","nvidia","ros","isaac"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/robotics_page",last_update:{date:"05/29/2025",author:"ZhuYaohui"}},i="\u{1F916} \u673A\u5668\u4EBA\u6280\u672F",o={},l=[{value:"\u{1F4E6} \u673A\u5668\u4EBA\u5957\u4EF6",id:"robot-kits",level:2},{value:"\u{1F917} Lerobot",id:"-lerobot",level:2},{value:"\u2699\uFE0F \u6267\u884C\u5668",id:"actuators",level:2},{value:"\u{1F441}\uFE0F \u4F20\u611F\u5668",id:"sensors",level:2},{value:"\u{1F4BB} \u8F6F\u4EF6",id:"software",level:2}];function d(e){let a={blockquote:"blockquote",em:"em",h1:"h1",h2:"h2",header:"header",p:"p",strong:"strong",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.header,{children:(0,t.jsx)(a.h1,{id:"-\u673A\u5668\u4EBA\u6280\u672F",children:"\u{1F916} \u673A\u5668\u4EBA\u6280\u672F"})}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.em,{children:'"\u4ECA\u5929\u7684\u79D1\u5B66\u5C31\u662F\u660E\u5929\u7684\u6280\u672F\u3002" - Edward Teller'})}),"\n"]}),"\n",(0,t.jsx)("div",{className:"quick-nav-container",children:(0,t.jsxs)("nav",{className:"quick-nav",children:[(0,t.jsxs)("a",{href:"#robot-kits",className:"nav-item",children:[(0,t.jsx)("span",{className:"icon",children:"\u{1F4E6}"}),(0,t.jsx)("span",{className:"text",children:"\u673A\u5668\u4EBA\u5957\u4EF6"}),(0,t.jsx)("div",{className:"hover-effect"})]}),(0,t.jsxs)("a",{href:"#actuators",className:"nav-item",children:[(0,t.jsx)("span",{className:"icon",children:"\u2699\uFE0F"}),(0,t.jsx)("span",{className:"text",children:"\u5173\u8282\u6267\u884C\u5668"}),(0,t.jsx)("div",{className:"hover-effect"})]}),(0,t.jsxs)("a",{href:"#sensors",className:"nav-item",children:[(0,t.jsx)("span",{className:"icon",children:"\u{1F441}\uFE0F"}),(0,t.jsx)("span",{className:"text",children:"\u4F20\u611F\u5668"}),(0,t.jsx)("div",{className:"hover-effect"})]}),(0,t.jsxs)("a",{href:"#software",className:"nav-item",children:[(0,t.jsx)("span",{className:"icon",children:"\u{1F4BB}"}),(0,t.jsx)("span",{className:"text",children:"\u8F6F\u4EF6"}),(0,t.jsx)("div",{className:"hover-effect"})]})]})}),"\n",(0,t.jsxs)("div",{className:"nav-grid",children:[(0,t.jsx)(a.h2,{id:"robot-kits",children:"\u{1F4E6} \u673A\u5668\u4EBA\u5957\u4EF6"}),(0,t.jsx)("div",{class:"category-group",children:(0,t.jsxs)("div",{class:"category-card robot-kits",children:[(0,t.jsx)(a.h2,{id:"-lerobot",children:"\u{1F917} Lerobot"}),(0,t.jsxs)("div",{className:"card-container",children:[(0,t.jsxs)("a",{href:"/cn/lerobot_starai_arm/",className:"nav-item",children:[(0,t.jsx)("span",{className:"text",children:"Starai \u673A\u68B0\u81C2"}),(0,t.jsx)("span",{className:"tag recommended",children:"New"})]}),(0,t.jsxs)("a",{href:"/cn/starai_arm_ros_moveit/",className:"nav-item",children:[(0,t.jsx)("span",{className:"text",children:"Starai \u673A\u68B0\u81C2 Moveit"}),(0,t.jsx)("span",{className:"tag recommended",children:"New"})]}),(0,t.jsxs)("a",{href:"/cn/lerobot_so100m_new/",className:"nav-item",children:[(0,t.jsx)("span",{className:"text",children:"SO100/101 \u673A\u68B0\u81C2"}),(0,t.jsx)("span",{className:"tag stable",children:"Update"})]}),(0,t.jsxs)("a",{href:"/cn/simulate_soarm101_by_leisaac/",className:"nav-item",children:[(0,t.jsx)("span",{className:"text",children:"SO100 \u673A\u68B0\u81C2\u4E0E IsaacSim"}),(0,t.jsx)("span",{className:"tag recommended",children:"New"})]}),(0,t.jsxs)("a",{href:"/cn/lerobot_lekiwi/",className:"nav-item",children:[(0,t.jsx)("span",{className:"text",children:"Lekiwi \u79FB\u52A8\u5E95\u76D8"}),(0,t.jsx)("span",{className:"tag recommended",children:"New"})]}),(0,t.jsx)("a",{href:"/cn/sound_follow_robot/",className:"nav-item",children:(0,t.jsx)("span",{className:"text",children:"Lekiwi \u58F0\u97F3\u8DDF\u968F"})}),(0,t.jsxs)("a",{href:"/cn/control_robotic_arm_via_phospho/",className:"nav-item",children:[(0,t.jsx)("span",{className:"text",children:"Phospho Lerobot"}),(0,t.jsx)("span",{className:"tag recommended",children:"New"})]})]})]})}),(0,t.jsx)(a.h2,{id:"actuators",children:"\u2699\uFE0F \u6267\u884C\u5668"}),(0,t.jsx)("div",{class:"category-group",children:(0,t.jsx)("div",{className:"category-card actuators",children:(0,t.jsxs)("div",{className:"card-container",children:[(0,t.jsx)("a",{href:"/cn/myactuator_series/",className:"nav-item",children:(0,t.jsx)("span",{className:"text",children:"MyActuator X \u7CFB\u5217"})}),(0,t.jsx)("a",{href:"/cn/damiao_series/",className:"nav-item",children:(0,t.jsx)("span",{className:"text",children:"\u8FBE\u5999 DM43 \u7CFB\u5217"})}),(0,t.jsx)("a",{href:"/cn/feetech_servo/",className:"nav-item",children:(0,t.jsx)("span",{className:"text",children:"\u98DE\u7279 STS3215 \u8235\u673A"})}),(0,t.jsx)("a",{href:"/cn/hightorque_series/",className:"nav-item",children:(0,t.jsx)("span",{className:"text",children:"\u9AD8\u626D\u77E9\u7CFB\u5217"})})]})})}),(0,t.jsx)(a.h2,{id:"sensors",children:"\u{1F441}\uFE0F \u4F20\u611F\u5668"}),(0,t.jsx)("div",{class:"category-group",children:(0,t.jsxs)("div",{className:"category-card sensors",children:[(0,t.jsx)(a.p,{children:(0,t.jsx)(a.strong,{children:"\u6FC0\u5149\u96F7\u8FBE"})}),(0,t.jsxs)("div",{className:"card-container",children:[(0,t.jsx)("a",{href:"/cn/robosense_lidar/",className:"nav-item",children:(0,t.jsx)("span",{className:"text",children:"\u901F\u817E\u805A\u521B"})}),(0,t.jsx)("a",{href:"/cn/mid360/",className:"nav-item",children:(0,t.jsx)("span",{className:"text",children:"MID360"})}),(0,t.jsx)("a",{href:"/cn/a_loam/",className:"nav-item",children:(0,t.jsx)("span",{className:"text",children:"A-LOAM \u7B97\u6CD5"})}),(0,t.jsx)("a",{href:"/cn/slamtec/",className:"nav-item",children:(0,t.jsx)("span",{className:"text",children:"\u601D\u5C9A\u79D1\u6280\u7CFB\u5217"})})]}),(0,t.jsx)(a.p,{children:(0,t.jsx)(a.strong,{children:"\u6444\u50CF\u5934"})}),(0,t.jsxs)("div",{className:"card-container",children:[(0,t.jsx)("a",{href:"/cn/orbbec_gemini2/",className:"nav-item",children:(0,t.jsx)("span",{className:"text",children:"\u5965\u6BD4\u4E2D\u5149 Gemini2 3D \u6444\u50CF\u5934\u5165\u95E8"})}),(0,t.jsx)("a",{href:"/cn/orbbec_depth_camera_on_ros/",className:"nav-item",children:(0,t.jsx)("span",{className:"text",children:"\u5965\u6BD4\u4E2D\u5149\u6DF1\u5EA6\u6444\u50CF\u5934"})}),(0,t.jsxs)("a",{href:"/cn/orbbec_gemini_335lg",className:"nav-item",children:[(0,t.jsx)("span",{className:"text",children:"\u5965\u6BD4\u4E2D\u5149 Gemini 335Lg \u7ACB\u4F53\u6444\u50CF\u5934"}),(0,t.jsx)("span",{className:"tag recommended",children:"New"})]}),(0,t.jsxs)("a",{href:"/cn/sensing_gmsl_cameras",className:"nav-item",children:[(0,t.jsx)("span",{className:"text",children:"SENSING GMSL2 \u6444\u50CF\u5934"}),(0,t.jsx)("span",{className:"tag recommended",children:"New"})]}),(0,t.jsx)("a",{href:"/cn/orb_slam3_orbbec_gemini2/",className:"nav-item",children:(0,t.jsx)("span",{className:"text",children:"ORB-SLAM3 \u4E0E\u5965\u6BD4\u4E2D\u5149 Gemini2"})}),(0,t.jsx)("a",{href:"/cn/csi_camera_on_ros/",className:"nav-item",children:(0,t.jsx)("span",{className:"text",children:"CSI \u6444\u50CF\u5934"})})]}),(0,t.jsx)(a.p,{children:(0,t.jsx)(a.strong,{children:"\u8BED\u97F3"})}),(0,t.jsxs)("div",{className:"card-container",children:[(0,t.jsx)("a",{href:"/cn/ReSpeaker_Core_v2.0/",className:"nav-item",children:(0,t.jsx)("span",{className:"text",children:"ReSpeaker Core v2.0"})}),(0,t.jsx)("a",{href:"/cn/ReSpeaker_Mic_Array_v2.0/",className:"nav-item",children:(0,t.jsx)("span",{className:"text",children:"ReSpeaker \u9EA6\u514B\u98CE\u9635\u5217 v2.0"})})]}),(0,t.jsx)(a.p,{children:(0,t.jsx)(a.strong,{children:"IMU"})}),(0,t.jsx)("div",{className:"card-container",children:(0,t.jsx)("a",{href:"/cn/hexfellow_y200/",className:"nav-item",children:(0,t.jsx)("span",{className:"text",children:"HEXFELLOW Y200"})})})]})}),(0,t.jsx)(a.h2,{id:"software",children:"\u{1F4BB} \u8F6F\u4EF6"}),(0,t.jsx)("div",{class:"category-group",children:(0,t.jsxs)("div",{className:"category-card software",children:[(0,t.jsx)(a.p,{children:(0,t.jsx)(a.strong,{children:"ROS \u751F\u6001\u7CFB\u7EDF"})}),(0,t.jsxs)("div",{className:"card-container",children:[(0,t.jsx)("a",{href:"/cn/installing_ros1/",className:"nav-item",children:(0,t.jsx)("span",{className:"text",children:"ROS1 \u5B89\u88C5"})}),(0,t.jsx)("a",{href:"/cn/install_ros2_humble/",className:"nav-item",children:(0,t.jsx)("span",{className:"text",children:"ROS2 \u5B89\u88C5"})}),(0,t.jsx)("a",{href:"/cn/install_isaacros/",className:"nav-item",children:(0,t.jsx)("span",{className:"text",children:"IsaacROS \u5B89\u88C5"})}),(0,t.jsx)("a",{href:"/cn/isaac_ros_apriltag/",className:"nav-item",children:(0,t.jsx)("span",{className:"text",children:"AprilTag"})}),(0,t.jsx)("a",{href:"/cn/isaac_ros_visual_slam/",className:"nav-item",children:(0,t.jsx)("span",{className:"text",children:"\u89C6\u89C9 SLAM"})})]}),(0,t.jsx)(a.p,{children:(0,t.jsx)(a.strong,{children:"PX4"})}),(0,t.jsxs)("div",{className:"card-container",children:[(0,t.jsxs)("a",{href:"/cn/control_px4_with_recomputer_jetson/",className:"nav-item",children:[(0,t.jsx)("span",{className:"text",children:"PX4 \u4E0E Jetson"}),(0,t.jsx)("span",{className:"tag recommended",children:"New"})]}),(0,t.jsxs)("a",{href:"/cn/object_tracking_with_reComputer_jetson_and_pX4/",className:"nav-item",children:[(0,t.jsx)("span",{className:"text",children:"PX4 \u76EE\u6807\u8DDF\u8E2A"}),(0,t.jsx)("span",{className:"tag recommended",children:"New"})]})]}),(0,t.jsx)(a.p,{children:(0,t.jsx)(a.strong,{children:"NVIDIA Isaac"})}),(0,t.jsxs)("div",{className:"card-container",children:[(0,t.jsx)("a",{href:"/cn/install_isaaclab/",className:"nav-item",children:(0,t.jsx)("span",{className:"text",children:"Isaac Lab \u5B89\u88C5"})}),(0,t.jsxs)("a",{href:"/cn/simulate_soarm101_by_leisaac/",className:"nav-item",children:[(0,t.jsx)("span",{className:"text",children:"SO100 \u673A\u68B0\u81C2\u4E0E IsaacSim"}),(0,t.jsx)("span",{className:"tag recommended",children:"New"})]})]}),(0,t.jsx)(a.p,{children:(0,t.jsx)(a.strong,{children:"VLA"})}),(0,t.jsx)("div",{className:"card-container",children:(0,t.jsx)("a",{href:"/cn/control_robotic_arm_via_gr00t",className:"nav-item",children:(0,t.jsx)("span",{className:"text",children:"NVIDIA \u7684 GR00T"})})})]})})]}),"\n",(0,t.jsx)("style",{children:`
/* \u{5BFC}\u{822A}\u{5BB9}\u{5668} */
.quick-nav-container {
margin: 2rem 0;
padding: 1rem;
background: 
radial-gradient(at 10% 20%, #f0fdf4 0%, transparent 50%),
radial-gradient(at 90% 80%, #f0f7ff 0%, transparent 50%),
white;
border-radius: 16px;
box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}

/* Dark \u{6A21}\u{5F0F} - \u{5BFC}\u{822A}\u{5BB9}\u{5668} */
html[data-theme='dark'] .quick-nav-container {
background: 
  radial-gradient(at 10% 20%, rgba(16, 185, 129, 0.1) 0%, transparent 50%),
  radial-gradient(at 90% 80%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
  linear-gradient(135deg,rgb(42, 44, 49) 0%,rgb(32, 32, 33) 100%);
box-shadow: 
  0 4px 6px rgba(0, 0, 0, 0.3),
  inset 0 0 12px rgba(99, 102, 241, 0.1); /* \u{5185}\u{53D1}\u{5149}\u{589E}\u{5F3A}\u{6DF1}\u{5EA6} */
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

/* Dark \u{6A21}\u{5F0F} - \u{5BFC}\u{822A}\u{9879} */
html[data-theme='dark'] .nav-item {
color: #e5e7eb;
background:rgb(47, 50, 57);
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

/* Dark \u{6A21}\u{5F0F} - \u{60AC}\u{6D6E}\u{52A8}\u{753B} */
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
`}),"\n",(0,t.jsx)("style",{children:`
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

/* Dark \u{6A21}\u{5F0F} - \u{5185}\u{5BB9}\u{5361}\u{7247} */
html[data-theme='dark'] .category-card {
background:rgb(30, 30, 32);
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

/* Dark \u{6A21}\u{5F0F} - \u{60AC}\u{6D6E}\u{7279}\u{6548} */

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

/* Dark \u{6A21}\u{5F0F} - \u{60AC}\u{6D6E}\u{5149}\u{6548} */
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

/* Dark \u{6A21}\u{5F0F} - \u{94FE}\u{63A5} */
html[data-theme='dark'] .category-card a {
color: #d1d5db;
}

.category-card a:hover {
color: #4a90e2;
transform: translateX(5px);
}

/* Dark \u{6A21}\u{5F0F} - \u{94FE}\u{63A5}\u{60AC}\u{6D6E} */
html[data-theme='dark'] .category-card a:hover {
color: #60a5fa;
}

.category-card a::after {
content: "";
position: absolute;
bottom: 2px;
left: 0;
width: 0;
height: 2px;
background: #4a90e2;
transition: width 0.3s;
}

/* Dark \u{6A21}\u{5F0F} - \u{94FE}\u{63A5}\u{4E0B}\u{5212}\u{7EBF} */
html[data-theme='dark'] .category-card a::after {
background: #60a5fa;
}

.category-card a:hover::after {
width: 100%;
}

.card-container {
margin-bottom: 1.5rem; /* \u{539F}\u{4E3A} 0.1rem */
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

/* Dark \u{6A21}\u{5F0F} - Stable \u{6807}\u{7B7E} */
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

/* Dark \u{6A21}\u{5F0F} - Recommended \u{6807}\u{7B7E} */
html[data-theme='dark'] .recommended {
background: #7f1d1d;
color: #fca5a5;
box-shadow: 0 2px 4px rgba(200,0,0,0.3);
}

.category-card:active {
transform: translateY(-2px) scale(0.98);
box-shadow: 0 6px 10px rgba(0,0,0,0.1);
}

/* Dark \u{6A21}\u{5F0F} - \u{70B9}\u{51FB}\u{6548}\u{679C} */
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

/* Dark \u{6A21}\u{5F0F} - \u{6807}\u{9898}\u{6587}\u{5B57} */
html[data-theme='dark'] h1,
html[data-theme='dark'] h2,
html[data-theme='dark'] h3,
html[data-theme='dark'] h4,
html[data-theme='dark'] h5,
html[data-theme='dark'] h6 {
color: #f9fafb;
}

/* Dark \u{6A21}\u{5F0F} - \u{6B63}\u{6587}\u{6587}\u{5B57} */
html[data-theme='dark'] p,
html[data-theme='dark'] li,
html[data-theme='dark'] strong {
color: #e5e7eb;
}

/* Dark \u{6A21}\u{5F0F} - \u{5F15}\u{7528}\u{5757} */
html[data-theme='dark'] blockquote {
color: #9ca3af;
border-left-color: #4b5563;
}
`})]})}function m(e={}){let{wrapper:a}={...(0,n.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},250065:function(e,a,s){s.d(a,{Z:()=>i,a:()=>c});var r=s(667294);let t={},n=r.createContext(t);function c(e){let a=r.useContext(n);return r.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(n.Provider,{value:a},e.children)}}}]);