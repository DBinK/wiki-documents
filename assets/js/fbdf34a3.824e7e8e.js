"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([["877512"],{256266:function(a,e,s){s.r(e),s.d(e,{frontMatter:()=>n,toc:()=>o,default:()=>m,metadata:()=>r,assets:()=>l,contentTitle:()=>c});var r=JSON.parse('{"id":"ja/ja_Edge_Robotics","title":"\u30ED\u30DC\u30C6\u30A3\u30AF\u30B9","description":"\u3053\u306E\u30C8\u30D4\u30C3\u30AF\u3067\u306F\u3001Seeed Studio\u306E\u30ED\u30DC\u30C6\u30A3\u30AF\u30B9\u88FD\u54C1\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3092\u7D39\u4ECB\u3057\u307E\u3059\u3002","source":"@site/docs/ja/ja_Edge_Robotics.md","sourceDirName":"ja","slug":"/ja/robotics_page","permalink":"/ja/robotics_page","draft":false,"unlisted":false,"editUrl":"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/ja/ja_Edge_Robotics.md","tags":[],"version":"current","lastUpdatedBy":"ZhuYaohui","lastUpdatedAt":1748476800000,"frontMatter":{"description":"\u3053\u306E\u30C8\u30D4\u30C3\u30AF\u3067\u306F\u3001Seeed Studio\u306E\u30ED\u30DC\u30C6\u30A3\u30AF\u30B9\u88FD\u54C1\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3092\u7D39\u4ECB\u3057\u307E\u3059\u3002","title":"\u30ED\u30DC\u30C6\u30A3\u30AF\u30B9","keywords":["robotics","nvidia","ros","isaac"],"image":"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png","slug":"/ja/robotics_page","last_update":{"date":"05/29/2025","author":"ZhuYaohui"}},"sidebar":"jaSidebar","previous":{"title":"Quantum Mini Linux Development Kit","permalink":"/ja/Quantum-Mini-Linux-Development-Kit"},"next":{"title":"Lerobot\u3067SO10xArm\u30ED\u30DC\u30C3\u30C8\u30A2\u30FC\u30E0\u3092\u4F7F\u7528\u3059\u308B\u65B9\u6CD5","permalink":"/ja/lerobot_so100m"}}'),t=s(785893),i=s(250065);let n={description:"\u3053\u306E\u30C8\u30D4\u30C3\u30AF\u3067\u306F\u3001Seeed Studio\u306E\u30ED\u30DC\u30C6\u30A3\u30AF\u30B9\u88FD\u54C1\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3092\u7D39\u4ECB\u3057\u307E\u3059\u3002",title:"\u30ED\u30DC\u30C6\u30A3\u30AF\u30B9",keywords:["robotics","nvidia","ros","isaac"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/ja/robotics_page",last_update:{date:"05/29/2025",author:"ZhuYaohui"}},c="\u{1F916} \u30ED\u30DC\u30C6\u30A3\u30AF\u30B9",l={},o=[{value:"\u{1F4E6} \u30ED\u30DC\u30C3\u30C8\u30AD\u30C3\u30C8",id:"robot-kits",level:2},{value:"\u{1F917} SO-Arm",id:"-so-arm",level:2},{value:"\u{1F697} Lekiwi",id:"-lekiwi",level:2},{value:"\u{1F9BE} StarAI Arm",id:"-starai-arm",level:2},{value:"\u{1F590}\uFE0F \u30CF\u30F3\u30C9",id:"\uFE0F-\u30CF\u30F3\u30C9",level:2},{value:"\u2699\uFE0F \u30A2\u30AF\u30C1\u30E5\u30A8\u30FC\u30BF",id:"actuators",level:2},{value:"\u{1F441}\uFE0F \u30BB\u30F3\u30B5\u30FC",id:"sensors",level:2},{value:"\u{1F4BB} \u30BD\u30D5\u30C8\u30A6\u30A7\u30A2",id:"software",level:2}];function d(a){let e={blockquote:"blockquote",em:"em",h1:"h1",h2:"h2",header:"header",p:"p",strong:"strong",...(0,i.a)(),...a.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"-\u30ED\u30DC\u30C6\u30A3\u30AF\u30B9",children:"\u{1F916} \u30ED\u30DC\u30C6\u30A3\u30AF\u30B9"})}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.em,{children:'"\u4ECA\u65E5\u306E\u79D1\u5B66\u306F\u660E\u65E5\u306E\u6280\u8853\u3067\u3042\u308B\u3002" - \u30A8\u30C9\u30EF\u30FC\u30C9\u30FB\u30C6\u30E9\u30FC'})}),"\n"]}),"\n",(0,t.jsx)("div",{className:"quick-nav-container",children:(0,t.jsxs)("nav",{className:"quick-nav",children:[(0,t.jsxs)("a",{href:"#robot-kits",className:"nav-item",children:[(0,t.jsx)("span",{className:"icon",children:"\u{1F4E6}"}),(0,t.jsx)("span",{className:"text",children:"\u30ED\u30DC\u30C3\u30C8\u30AD\u30C3\u30C8"}),(0,t.jsx)("div",{className:"hover-effect"})]}),(0,t.jsxs)("a",{href:"#actuators",className:"nav-item",children:[(0,t.jsx)("span",{className:"icon",children:"\u2699\uFE0F"}),(0,t.jsx)("span",{className:"text",children:"\u95A2\u7BC0\u30A2\u30AF\u30C1\u30E5\u30A8\u30FC\u30BF"}),(0,t.jsx)("div",{className:"hover-effect"})]}),(0,t.jsxs)("a",{href:"#sensors",className:"nav-item",children:[(0,t.jsx)("span",{className:"icon",children:"\u{1F441}\uFE0F"}),(0,t.jsx)("span",{className:"text",children:"\u30BB\u30F3\u30B5\u30FC"}),(0,t.jsx)("div",{className:"hover-effect"})]}),(0,t.jsxs)("a",{href:"#software",className:"nav-item",children:[(0,t.jsx)("span",{className:"icon",children:"\u{1F4BB}"}),(0,t.jsx)("span",{className:"text",children:"\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2"}),(0,t.jsx)("div",{className:"hover-effect"})]})]})}),"\n",(0,t.jsxs)("div",{className:"nav-grid",children:[(0,t.jsx)(e.h2,{id:"robot-kits",children:"\u{1F4E6} \u30ED\u30DC\u30C3\u30C8\u30AD\u30C3\u30C8"}),(0,t.jsx)("div",{class:"category-group",children:(0,t.jsxs)("div",{class:"category-card robot-kits",children:[(0,t.jsx)(e.h2,{id:"-so-arm",children:"\u{1F917} SO-Arm"}),(0,t.jsxs)("div",{className:"card-container",children:[(0,t.jsx)("a",{href:"/ja/lerobot_so100m_new/",className:"nav-item",children:(0,t.jsx)("span",{className:"text",children:"SO100/101 Arm"})}),(0,t.jsx)("a",{href:"/ja/simulate_soarm101_by_leisaac/",className:"nav-item",children:(0,t.jsx)("span",{className:"text",children:"SO100 Arm with IsaacSim"})}),(0,t.jsx)("a",{href:"/ja/control_robotic_arm_via_phospho/",className:"nav-item",children:(0,t.jsx)("span",{className:"text",children:"Phospho Lerobot"})}),(0,t.jsxs)("a",{href:"/ja//training_soarm101_policy_with_isaacLab/",className:"nav-item",children:[(0,t.jsx)("span",{className:"text",children:"So Arm\u5F37\u5316\u5B66\u7FD2"}),(0,t.jsx)("span",{className:"tag recommended",children:"New"})]}),(0,t.jsxs)("a",{href:"/ja/simulate_soarm101_by_leisaac/",className:"nav-item",children:[(0,t.jsx)("span",{className:"text",children:"SO100 Arm with IsaacSim"}),(0,t.jsx)("span",{className:"tag recommended",children:"New"})]})]}),(0,t.jsx)(e.h2,{id:"-lekiwi",children:"\u{1F697} Lekiwi"}),(0,t.jsxs)("div",{className:"card-container",children:[(0,t.jsx)("a",{href:"/ja/lerobot_lekiwi/",className:"nav-item",children:(0,t.jsx)("span",{className:"text",children:"Lekiwi\u30E2\u30D0\u30A4\u30EB\u30D9\u30FC\u30B9"})}),(0,t.jsx)("a",{href:"/ja/sound_follow_robot/",className:"nav-item",children:(0,t.jsx)("span",{className:"text",children:"Lekiwi\u97F3\u58F0\u8FFD\u5F93"})})]}),(0,t.jsx)(e.h2,{id:"-starai-arm",children:"\u{1F9BE} StarAI Arm"}),(0,t.jsxs)("div",{className:"card-container",children:[(0,t.jsxs)("a",{href:"/ja/lerobot_starai_arm/",className:"nav-item",children:[(0,t.jsx)("span",{className:"text",children:"Starai\u30ED\u30DC\u30C3\u30C8\u30A2\u30FC\u30E0"}),(0,t.jsx)("span",{className:"tag recommended",children:"New"})]}),(0,t.jsxs)("a",{href:"/ja/starai_arm_ros_moveit/",className:"nav-item",children:[(0,t.jsx)("span",{className:"text",children:"Starai\u30ED\u30DC\u30C3\u30C8\u30A2\u30FC\u30E0Moveit2"}),(0,t.jsx)("span",{className:"tag recommended",children:"New"})]}),(0,t.jsx)("a",{href:"/ja/control_robotic_arm_via_gr00t",className:"nav-item",children:(0,t.jsx)("span",{className:"text",children:"Star AI with NVIDIA's GR00T"})})]}),(0,t.jsx)(e.h2,{id:"\uFE0F-\u30CF\u30F3\u30C9",children:"\u{1F590}\uFE0F \u30CF\u30F3\u30C9"}),(0,t.jsx)("div",{className:"card-container",children:(0,t.jsxs)("a",{href:"/ja/hand_amazinghand/",className:"nav-item",children:[(0,t.jsx)("span",{className:"text",children:"AmazingHand"}),(0,t.jsx)("span",{className:"tag recommended",children:"New"})]})})]})}),(0,t.jsx)(e.h2,{id:"actuators",children:"\u2699\uFE0F \u30A2\u30AF\u30C1\u30E5\u30A8\u30FC\u30BF"}),(0,t.jsx)("div",{class:"category-group",children:(0,t.jsx)("div",{className:"category-card actuators",children:(0,t.jsxs)("div",{className:"card-container",children:[(0,t.jsx)("a",{href:"/ja/myactuator_series/",className:"nav-item",children:(0,t.jsx)("span",{className:"text",children:"0\uFE0F\u20E3MyActuator X\u30B7\u30EA\u30FC\u30BA"})}),(0,t.jsx)("a",{href:"/ja/damiao_series/",className:"nav-item",children:(0,t.jsx)("span",{className:"text",children:"1\uFE0F\u20E3Damiao DM43\u30B7\u30EA\u30FC\u30BA"})}),(0,t.jsx)("a",{href:"/ja/feetech_servo/",className:"nav-item",children:(0,t.jsx)("span",{className:"text",children:"2\uFE0F\u20E3Feetech STS3215\u30B5\u30FC\u30DC\u30E2\u30FC\u30BF\u30FC"})}),(0,t.jsx)("a",{href:"/ja/hightorque_series/",className:"nav-item",children:(0,t.jsx)("span",{className:"text",children:"3\uFE0F\u20E3HighTorque\u30B7\u30EA\u30FC\u30BA"})})]})})}),(0,t.jsx)(e.h2,{id:"sensors",children:"\u{1F441}\uFE0F \u30BB\u30F3\u30B5\u30FC"}),(0,t.jsx)("div",{class:"category-group",children:(0,t.jsxs)("div",{className:"category-card sensors",children:[(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"\u{1F4E1}LiDAR"})}),(0,t.jsxs)("div",{className:"card-container",children:[(0,t.jsx)("a",{href:"/ja/robosense_lidar/",className:"nav-item",children:(0,t.jsx)("span",{className:"text",children:"Robosense"})}),(0,t.jsx)("a",{href:"/ja/mid360/",className:"nav-item",children:(0,t.jsx)("span",{className:"text",children:"MID360"})}),(0,t.jsx)("a",{href:"/ja/a_loam/",className:"nav-item",children:(0,t.jsx)("span",{className:"text",children:"A-LOAM\u30A2\u30EB\u30B4\u30EA\u30BA\u30E0"})}),(0,t.jsx)("a",{href:"/ja/slamtec/",className:"nav-item",children:(0,t.jsx)("span",{className:"text",children:"Slamtec\u30B7\u30EA\u30FC\u30BA"})})]}),(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"\u{1F4F7}\u30AB\u30E1\u30E9"})}),(0,t.jsxs)("div",{className:"card-container",children:[(0,t.jsx)("a",{href:"/ja/orbbec_gemini2/",className:"nav-item",children:(0,t.jsx)("span",{className:"text",children:"Orbbec Gemini2"})}),(0,t.jsx)("a",{href:"/ja/orbbec_depth_camera_on_ros/",className:"nav-item",children:(0,t.jsx)("span",{className:"text",children:"Orbbec\u6DF1\u5EA6\u30AB\u30E1\u30E9 with ROS"})}),(0,t.jsxs)("a",{href:"/ja/orbbec_gemini_335lg",className:"nav-item",children:[(0,t.jsx)("span",{className:"text",children:"Orbbec Gemini 335Lg\u30B9\u30C6\u30EC\u30AA\u30AB\u30E1\u30E9"}),(0,t.jsx)("span",{className:"tag recommended",children:"New"})]}),(0,t.jsxs)("a",{href:"/ja/sensing_gmsl_cameras",className:"nav-item",children:[(0,t.jsx)("span",{className:"text",children:"SENSING GMSL2\u30AB\u30E1\u30E9"}),(0,t.jsx)("span",{className:"tag recommended",children:"New"})]}),(0,t.jsx)("a",{href:"/ja/orb_slam3_orbbec_gemini2/",className:"nav-item",children:(0,t.jsx)("span",{className:"text",children:"ORB-SLAM3 with Orbbec Gemini2"})}),(0,t.jsx)("a",{href:"/ja/csi_camera_on_ros/",className:"nav-item",children:(0,t.jsx)("span",{className:"text",children:"CSI\u30AB\u30E1\u30E9"})})]}),(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"\u{1F3A4}\u97F3\u58F0"})}),(0,t.jsxs)("div",{className:"card-container",children:[(0,t.jsx)("a",{href:"/ja/ReSpeaker_Core_v2.0/",className:"nav-item",children:(0,t.jsx)("span",{className:"text",children:"ReSpeaker Core v2.0"})}),(0,t.jsx)("a",{href:"/ja/ReSpeaker_Mic_Array_v2.0/",className:"nav-item",children:(0,t.jsx)("span",{className:"text",children:"ReSpeaker Mic Array v2.0"})})]}),(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"\u{1F9ED}IMU"})}),(0,t.jsx)("div",{className:"card-container",children:(0,t.jsx)("a",{href:"/ja/hexfellow_y200/",className:"nav-item",children:(0,t.jsx)("span",{className:"text",children:"HEXFELLOW Y200"})})})]})}),(0,t.jsx)(e.h2,{id:"software",children:"\u{1F4BB} \u30BD\u30D5\u30C8\u30A6\u30A7\u30A2"}),(0,t.jsx)("div",{class:"category-group",children:(0,t.jsxs)("div",{className:"category-card software",children:[(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"ROS\u30A8\u30B3\u30B7\u30B9\u30C6\u30E0"})}),(0,t.jsxs)("div",{className:"card-container",children:[(0,t.jsx)("a",{href:"/ja/installing_ros1/",className:"nav-item",children:(0,t.jsx)("span",{className:"text",children:"ROS1\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB"})}),(0,t.jsx)("a",{href:"/ja/install_ros2_humble/",className:"nav-item",children:(0,t.jsx)("span",{className:"text",children:"ROS2\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB"})}),(0,t.jsx)("a",{href:"/ja/install_isaacros/",className:"nav-item",children:(0,t.jsx)("span",{className:"text",children:"IsaacROS\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB"})}),(0,t.jsx)("a",{href:"/ja/isaac_ros_apriltag/",className:"nav-item",children:(0,t.jsx)("span",{className:"text",children:"AprilTag"})}),(0,t.jsx)("a",{href:"/ja/isaac_ros_visual_slam/",className:"nav-item",children:(0,t.jsx)("span",{className:"text",children:"Visual SLAM"})})]}),(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"PX4"})}),(0,t.jsxs)("div",{className:"card-container",children:[(0,t.jsx)("a",{href:"/ja/control_px4_with_recomputer_jetson/",className:"nav-item",children:(0,t.jsx)("span",{className:"text",children:"PX4 with Jetson"})}),(0,t.jsx)("a",{href:"/ja/object_tracking_with_reComputer_jetson_and_pX4/",className:"nav-item",children:(0,t.jsx)("span",{className:"text",children:"PX4\u3067\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u8FFD\u8DE1"})})]}),(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"NVIDIA Isaac"})}),(0,t.jsxs)("div",{className:"card-container",children:[(0,t.jsx)("a",{href:"/ja/install_isaaclab/",className:"nav-item",children:(0,t.jsx)("span",{className:"text",children:"Isaac Lab\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB"})}),(0,t.jsxs)("a",{href:"/ja//training_soarm101_policy_with_isaacLab/",className:"nav-item",children:[(0,t.jsx)("span",{className:"text",children:"So Arm\u5F37\u5316\u5B66\u7FD2"}),(0,t.jsx)("span",{className:"tag recommended",children:"New"})]}),(0,t.jsxs)("a",{href:"/ja/simulate_soarm101_by_leisaac/",className:"nav-item",children:[(0,t.jsx)("span",{className:"text",children:"SO100 Arm with IsaacSim"}),(0,t.jsx)("span",{className:"tag recommended",children:"New"})]})]}),(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"VLA"})}),(0,t.jsx)("div",{className:"card-container",children:(0,t.jsx)("a",{href:"/ja/control_robotic_arm_via_gr00t",className:"nav-item",children:(0,t.jsx)("span",{className:"text",children:"Star AI with NVIDIA's GR00T"})})})]})})]}),"\n",(0,t.jsx)("style",{children:`
/* \u{5C0E}\u{822A}\u{5BB9}\u{5668} */
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

/* Dark\u{6A21}\u{5F0F} - \u{5C0E}\u{822A}\u{5BB9}\u{5668} */
html[data-theme='dark'] .quick-nav-container {
background:
  radial-gradient(at 10% 20%, rgba(16, 185, 129, 0.1) 0%, transparent 50%),
  radial-gradient(at 90% 80%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
  linear-gradient(135deg,rgb(42, 44, 49) 0%,rgb(32, 32, 33) 100%);
box-shadow:
  0 4px 6px rgba(0, 0, 0, 0.3),
  inset 0 0 12px rgba(99, 102, 241, 0.1); /* \u{5185}\u{767A}\u{5149}\u{5897}\u{5F37}\u{6DF1}\u{5EA6} */
}

/* \u{5C0E}\u{822A}\u{4E3B}\u{4F53} */
.quick-nav {
display: flex;
justify-content: space-around;
gap: 1rem;
}

/* \u{5C0E}\u{822A}\u{9805} */
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

/* Dark\u{6A21}\u{5F0F} - \u{5C0E}\u{822A}\u{9805} */
html[data-theme='dark'] .nav-item {
color: #e5e7eb;
background:rgb(47, 50, 57);
box-shadow: 0 2px 4px rgba(0,0,0,0.4);
}

/* \u{56F3}\u{6A19}\u{69D8}\u{5F0F} */
.nav-item .icon {
font-size: 1.8rem;
margin-bottom: 0.5rem;
transition: transform 0.3s;
}

/* \u{6587}\u{5B57}\u{69D8}\u{5F0F} */
.nav-item .text {
font-size: 0.95rem;
white-space: nowrap;
}

/* \u{60AC}\u{6D6E}\u{7279}\u{52B9} */
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

/* \u{60AC}\u{6D6E}\u{52D5}\u{753B} */
.nav-item:hover {
transform: translateY(-3px);
box-shadow: 0 6px 12px rgba(0,0,0,0.1);
color: white;
}

/* Dark\u{6A21}\u{5F0F} - \u{60AC}\u{6D6E}\u{52D5}\u{753B} */
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

/* \u{97FF}\u{5FDC}\u{5F0F}\u{8A2D}\u{8A08} */
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
/* \u{5185}\u{5BB9}\u{5361}\u{7247}\u{5897}\u{5F37}\u{7248}\u{69D8}\u{5F0F} */
.nav-grid {  display: block;
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

/* \u{60AC}\u{6D6E}\u{7279}\u{52B9} */
.category-card:hover {
transform: translateY(-5px);
box-shadow: 0 12px 20px rgba(0,0,0,0.1);
}

/* Dark\u{6A21}\u{5F0F} - \u{60AC}\u{6D6E}\u{7279}\u{52B9} */
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

/* Dark\u{6A21}\u{5F0F} - \u{60AC}\u{6D6E}\u{5149}\u{52B9} */
html[data-theme='dark'] .category-card:hover::after {
background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%);
}

/* \u{30EA}\u{30F3}\u{30AF}\u{30A2}\u{30CB}\u{30E1}\u{30FC}\u{30B7}\u{30E7}\u{30F3} */
.category-card a {
position: relative;
display: inline-block;
transition: all 0.2s;
text-decoration: none !important;
color: #333;
}

/* Dark\u{6A21}\u{5F0F} - \u{30EA}\u{30F3}\u{30AF} */
html[data-theme='dark'] .category-card a {
color: #d1d5db;
}

.category-card a:hover {
color: #4a90e2;
transform: translateX(5px);
}

/* Dark\u{6A21}\u{5F0F} - \u{30EA}\u{30F3}\u{30AF}\u{30DB}\u{30D0}\u{30FC} */
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

/* Dark\u{6A21}\u{5F0F} - \u{30EA}\u{30F3}\u{30AF}\u{4E0B}\u{7DDA} */
html[data-theme='dark'] .category-card a::after {
background: #60a5fa;
}

.category-card a:hover::after {
width: 100%;
}

.card-container {
margin-bottom: 1.5rem; /* \u{539F}\u{4E3A}0.1rem */
}

/* \u{30BF}\u{30B0}\u{30B9}\u{30BF}\u{30A4}\u{30EB}\u{5F37}\u{5316} */
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

/* Dark\u{6A21}\u{5F0F} - Stable\u{30BF}\u{30B0} */
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

/* Dark\u{6A21}\u{5F0F} - Recommended\u{30BF}\u{30B0} */
html[data-theme='dark'] .recommended {
background: #7f1d1d;
color: #fca5a5;
box-shadow: 0 2px 4px rgba(200,0,0,0.3);
}

.category-card:active {
transform: translateY(-2px) scale(0.98);
box-shadow: 0 6px 10px rgba(0,0,0,0.1);
}

/* Dark\u{6A21}\u{5F0F} - \u{30AF}\u{30EA}\u{30C3}\u{30AF}\u{52B9}\u{679C} */
html[data-theme='dark'] .category-card:active {
box-shadow: 0 6px 10px rgba(0,0,0,0.4);
}

/* \u{30EC}\u{30B9}\u{30DD}\u{30F3}\u{30B7}\u{30D6}\u{6700}\u{9069}\u{5316} */
@media (max-width: 768px) {
.nav-grid {
  grid-template-columns: 1fr;
}

.category-card {
  width: 100%;
  margin-top: 0.5rem; /* \u{30AB}\u{30FC}\u{30C9}\u{3092}\u{30BF}\u{30A4}\u{30C8}\u{30EB}\u{306B}\u{5BC6}\u{7740} */
}
}

/* Dark\u{6A21}\u{5F0F} - \u{30BF}\u{30A4}\u{30C8}\u{30EB}\u{6587}\u{5B57} */
html[data-theme='dark'] h1,
html[data-theme='dark'] h2,
html[data-theme='dark'] h3,
html[data-theme='dark'] h4,
html[data-theme='dark'] h5,
html[data-theme='dark'] h6 {
color: #f9fafb;
}

/* Dark\u{6A21}\u{5F0F} - \u{672C}\u{6587}\u{6587}\u{5B57} */
html[data-theme='dark'] p,
html[data-theme='dark'] li,
html[data-theme='dark'] strong {
color: #e5e7eb;
}

/* Dark\u{6A21}\u{5F0F} - \u{5F15}\u{7528}\u{30D6}\u{30ED}\u{30C3}\u{30AF} */
html[data-theme='dark'] blockquote {
color: #9ca3af;
border-left-color: #4b5563;
}
`})]})}function m(a={}){let{wrapper:e}={...(0,i.a)(),...a.components};return e?(0,t.jsx)(e,{...a,children:(0,t.jsx)(d,{...a})}):d(a)}},250065:function(a,e,s){s.d(e,{Z:()=>c,a:()=>n});var r=s(667294);let t={},i=r.createContext(t);function n(a){let e=r.useContext(i);return r.useMemo(function(){return"function"==typeof a?a(e):{...e,...a}},[e,a])}function c(a){let e;return e=a.disableParentContext?"function"==typeof a.components?a.components(t):a.components||t:n(a.components),r.createElement(i.Provider,{value:e},a.children)}}}]);