"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([["54651"],{383177:function(e,a,r){r.r(a),r.d(a,{frontMatter:()=>o,toc:()=>i,default:()=>m,metadata:()=>s,assets:()=>d,contentTitle:()=>l});var s=JSON.parse('{"id":"es/Robotics/Robot_Sensor/Lidar/es_SLAMTEC","title":"Serie LiDAR de Slamtec","description":"Introducci\xf3n a los productos LiDAR de Slamtec y documentaci\xf3n de uso.","source":"@site/docs/es/Robotics/Robot_Sensor/Lidar/es_SLAMTEC.md","sourceDirName":"es/Robotics/Robot_Sensor/Lidar","slug":"/es/slamtec","permalink":"/es/slamtec","draft":false,"unlisted":false,"editUrl":"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/es/Robotics/Robot_Sensor/Lidar/es_SLAMTEC.md","tags":[],"version":"current","lastUpdatedBy":"ZhuYaohui","lastUpdatedAt":1750204800000,"frontMatter":{"description":"Introducci\xf3n a los productos LiDAR de Slamtec y documentaci\xf3n de uso.","title":"Serie LiDAR de Slamtec","keywords":["LiDAR","Robotics","ROS","SLAM","Lidar"],"image":"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png","slug":"/es/slamtec","last_update":{"date":"2025/06/18","author":"ZhuYaohui"}},"sidebar":"esSidebar","previous":{"title":"Ejecutar A-LOAM 3D SLAM","permalink":"/es/a_loam"},"next":{"title":"Comenzando con la C\xe1mara 3D Orbbec Gemini2","permalink":"/es/orbbec_gemini2"}}'),t=r(785893),n=r(250065);let o={description:"Introducci\xf3n a los productos LiDAR de Slamtec y documentaci\xf3n de uso.",title:"Serie LiDAR de Slamtec",keywords:["LiDAR","Robotics","ROS","SLAM","Lidar"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/es/slamtec",last_update:{date:"2025/06/18",author:"ZhuYaohui"}},l="\u{1F4E1} Centro de Documentaci\xf3n LiDAR de Slamtec",d={},i=[{value:"\u{1F4E6} LiDAR Serie A1",id:"A1-series",level:2},{value:"Hoja de Datos",id:"hoja-de-datos",level:3},{value:"Manual de Usuario",id:"manual-de-usuario",level:3},{value:"SDK",id:"sdk",level:3},{value:"Modelos 3D",id:"modelos-3d",level:3},{value:"\u{1F4E6} LiDAR Serie S",id:"S2-series",level:2},{value:"Hoja de Datos",id:"hoja-de-datos-1",level:3},{value:"Manual de Usuario",id:"manual-de-usuario-1",level:3},{value:"SDK",id:"sdk-1",level:3},{value:"Modelos 3D",id:"modelos-3d-1",level:3},{value:"\u{1F4E6} LiDAR Serie C",id:"C1-series",level:2},{value:"Hoja de Datos",id:"hoja-de-datos-2",level:3},{value:"Manual de Usuario",id:"manual-de-usuario-2",level:3},{value:"SDK",id:"sdk-2",level:3},{value:"Modelos 3D",id:"modelos-3d-2",level:3}];function c(e){let a={h1:"h1",h2:"h2",h3:"h3",header:"header",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.header,{children:(0,t.jsx)(a.h1,{id:"-centro-de-documentaci\xf3n-lidar-de-slamtec",children:"\u{1F4E1} Centro de Documentaci\xf3n LiDAR de Slamtec"})}),"\n",(0,t.jsx)("div",{className:"quick-nav-container",children:(0,t.jsxs)("nav",{className:"quick-nav",children:[(0,t.jsxs)("a",{href:"#A1-series",className:"nav-item",children:[(0,t.jsx)("img",{width:100,src:"https://files.seeedstudio.com/wiki/robotics/Sensor/Lidar/slamtec/A1M8.png",className:"nav-icon",alt:"Slamtec LiDAR"}),(0,t.jsx)("span",{className:"text",children:"A1M8"}),(0,t.jsx)("div",{className:"hover-effect"})]}),(0,t.jsxs)("a",{href:"#A1-series",className:"nav-item",children:[(0,t.jsx)("img",{width:100,src:"https://files.seeedstudio.com/wiki/robotics/Sensor/Lidar/slamtec/A2_1.png",className:"nav-icon",alt:"Slamtec LiDAR"}),(0,t.jsx)("span",{className:"text",children:"A2M8"}),(0,t.jsx)("div",{className:"hover-effect"})]}),(0,t.jsxs)("a",{href:"#A1-series",className:"nav-item",children:[(0,t.jsx)("img",{width:100,src:"https://files.seeedstudio.com/wiki/robotics/Sensor/Lidar/slamtec/A2M12.png",className:"nav-icon",alt:"Slamtec LiDAR"}),(0,t.jsx)("span",{className:"text",children:"A2M12"}),(0,t.jsx)("div",{className:"hover-effect"})]}),(0,t.jsxs)("a",{href:"#A1-series",className:"nav-item",children:[(0,t.jsx)("img",{width:100,src:"https://files.seeedstudio.com/wiki/robotics/Sensor/Lidar/slamtec/A3M1.png",className:"nav-icon",alt:"Slamtec LiDAR"}),(0,t.jsx)("span",{className:"text",children:"A3M1"}),(0,t.jsx)("div",{className:"hover-effect"})]}),(0,t.jsxs)("a",{href:"#S2-series",className:"nav-item",children:[(0,t.jsx)("img",{width:100,src:"https://files.seeedstudio.com/wiki/robotics/Sensor/Lidar/slamtec/S2.png",className:"nav-icon",alt:"Slamtec LiDAR"}),(0,t.jsx)("span",{className:"text",children:"Serie S2"}),(0,t.jsx)("div",{className:"hover-effect"})]}),(0,t.jsxs)("a",{href:"#S2-series",className:"nav-item",children:[(0,t.jsx)("img",{width:100,src:"https://files.seeedstudio.com/wiki/robotics/Sensor/Lidar/slamtec/S3.png",className:"nav-icon",alt:"Slamtec LiDAR"}),(0,t.jsx)("span",{className:"text",children:"S3"}),(0,t.jsx)("div",{className:"hover-effect"})]}),(0,t.jsxs)("a",{href:"#C1-series",className:"nav-item",children:[(0,t.jsx)("img",{width:100,src:"https://files.seeedstudio.com/wiki/robotics/Sensor/Lidar/slamtec/C1.png",className:"nav-icon",alt:"Slamtec LiDAR"}),(0,t.jsx)("span",{className:"text",children:"C1M1"}),(0,t.jsx)("div",{className:"hover-effect"})]})]})}),"\n",(0,t.jsxs)("div",{className:"nav-grid",children:[(0,t.jsx)(a.h2,{id:"A1-series",children:"\u{1F4E6} LiDAR Serie A1"}),(0,t.jsx)("div",{class:"category-group",children:(0,t.jsxs)("div",{className:"category-card robot-kits",children:[(0,t.jsx)(a.h3,{id:"hoja-de-datos",children:"Hoja de Datos"}),(0,t.jsxs)("div",{className:"card-container",children:[(0,t.jsx)("a",{href:"https://download.slamtec.com/api/download/rplidar-a3m1-datasheet/1.9?lang=en",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,t.jsx)("span",{className:"text",children:"A3M1"})}),(0,t.jsx)("a",{href:"https://download.slamtec.com/api/download/rplidar-a2m8-datasheet/2.6?lang=en",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,t.jsx)("span",{className:"text",children:"A2M8"})}),(0,t.jsx)("a",{href:"https://download.slamtec.com/api/download/rplidar-a2m12-datasheet/1.0?lang=en",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,t.jsx)("span",{className:"text",children:"A2M12"})}),(0,t.jsx)("a",{href:"https://download.slamtec.com/api/download/rplidar-a1m8-datasheet/3.2?lang=en",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,t.jsx)("span",{className:"text",children:"A1M8"})})]}),(0,t.jsx)(a.h3,{id:"manual-de-usuario",children:"Manual de Usuario"}),(0,t.jsx)("div",{className:"card-container",children:(0,t.jsxs)("nav",{className:"quick-nav",children:[(0,t.jsx)("a",{href:"https://download.slamtec.com/api/download/rplidarkit-a3m1-usermanual/1.4?lang=en",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,t.jsx)("span",{className:"text",children:"A3M1"})}),(0,t.jsx)("a",{href:"https://download.slamtec.com/api/download/rplidarkit-a2-manual/1.2?lang=en",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,t.jsx)("span",{className:"text",children:"Serie A2"})}),(0,t.jsx)("a",{href:"https://download.slamtec.com/api/download/rplidarkit-a1m8-usermaunal/2.2?lang=en",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,t.jsx)("span",{className:"text",children:"A1M8"})})]})}),(0,t.jsx)(a.h3,{id:"sdk",children:"SDK"}),(0,t.jsxs)("div",{className:"card-container",children:[(0,t.jsx)("a",{href:"https://wiki.slamtec.com/display/SD#Slamtec%E5%BC%80%E5%8F%91%E8%80%85%E4%B8%AD%E5%BF%83-rplidar",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,t.jsx)("span",{className:"text",children:"Centro de Desarrolladores"})}),(0,t.jsx)("a",{href:"https://download.slamtec.com/api/download/rplidar-protocol/2.4?lang=en",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,t.jsx)("span",{className:"text",children:"Protocolo de Comunicaci\xf3n"})}),(0,t.jsx)("a",{href:"https://download.slamtec.com/api/download/rplidar-sdk-manual/2.0?lang=en",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,t.jsx)("span",{className:"text",children:"Manual de Usuario SDK"})}),(0,t.jsx)("a",{href:"https://github.com/slamtec/rplidar_sdk",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,t.jsx)("span",{className:"text",children:"Github"})}),(0,t.jsx)("a",{href:"https://github.com/slamtec/rplidar_ros",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,t.jsx)("span",{className:"text",children:"ROS1"})}),(0,t.jsx)("a",{href:"https://github.com/Slamtec/rplidar_ros/tree/ros2",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,t.jsx)("span",{className:"text",children:"ROS2"})})]}),(0,t.jsx)(a.h3,{id:"modelos-3d",children:"Modelos 3D"}),(0,t.jsxs)("div",{className:"card-container",children:[(0,t.jsx)("a",{href:"https://download.slamtec.com/api/download/rplidar-a2m4-r1-model-3d-stl/1.0?lang=netural",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,t.jsx)("span",{className:"text",children:"A3M1.stl"})}),(0,t.jsx)("a",{href:"https://download.slamtec.com/api/download/rplidar-a2m4-r1-model-2d-pdf/1.0?lang=en",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,t.jsx)("span",{className:"text",children:"A3M1.pdf"})}),(0,t.jsx)("a",{href:"https://download.slamtec.com/api/download/rplidar-a2m4-r1-model-3d-stl/1.0?lang=netural",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,t.jsx)("span",{className:"text",children:"A2.stl"})}),(0,t.jsx)("a",{href:"https://download.slamtec.com/api/download/rplidar-a2m4-r1-model-2d-pdf/1.0?lang=en",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,t.jsx)("span",{className:"text",children:"A2.pdf"})}),(0,t.jsx)("a",{href:"https://download.slamtec.com/api/download/rplidar-devkit-a1m8-r1-model-3d-stl/2.0?lang=netural",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,t.jsx)("span",{className:"text",children:"A1.stl"})}),(0,t.jsx)("a",{href:"https://download.slamtec.com/api/download/rplidar-devkit-a1m8-r1-model-2d-pdf/2.0?lang=en",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,t.jsx)("span",{className:"text",children:"A1.pdf"})})]})]})}),(0,t.jsx)(a.h2,{id:"S2-series",children:"\u{1F4E6} LiDAR Serie S"}),(0,t.jsx)("div",{class:"category-group",children:(0,t.jsxs)("div",{className:"category-card robot-kits",children:[(0,t.jsx)(a.h3,{id:"hoja-de-datos-1",children:"Hoja de Datos"}),(0,t.jsxs)("div",{className:"card-container",children:[(0,t.jsx)("a",{href:"https://download.slamtec.com/api/download/rplidar-s2m1-Rx-datasheet/2.3?lang=en",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,t.jsx)("span",{className:"text",children:"S2"})}),(0,t.jsx)("a",{href:"https://download.slamtec.com/api/download/rplidar-s2m1-RxE-datasheet/1.8?lang=en",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,t.jsx)("span",{className:"text",children:"S2E"})}),(0,t.jsx)("a",{href:"https://download.slamtec.com/api/download/rplidar-s2m1-RxL-datasheet/2.2?lang=en",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,t.jsx)("span",{className:"text",children:"S2L"})}),(0,t.jsx)("a",{href:"https://download.slamtec.com/api/download/rplidar-s3-datasheet/2?lang=en",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,t.jsx)("span",{className:"text",children:"S3"})})]}),(0,t.jsx)(a.h3,{id:"manual-de-usuario-1",children:"Manual de Usuario"}),(0,t.jsxs)("div",{className:"card-container",children:[(0,t.jsx)("a",{href:"https://download.slamtec.com/api/download/rplidar-s2-usermanual/1.2?lang=en",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,t.jsx)("span",{className:"text",children:"S2 S2L"})}),(0,t.jsx)("a",{href:"https://download.slamtec.com/api/download/rplidar-s2e-usermaunal/1.1?lang=en",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,t.jsx)("span",{className:"text",children:"S2E"})}),(0,t.jsx)("a",{href:"https://download.slamtec.com/api/download/rplidar-s3-usermanual/1?lang=en",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,t.jsx)("span",{className:"text",children:"S3"})})]}),(0,t.jsx)(a.h3,{id:"sdk-1",children:"SDK"}),(0,t.jsxs)("div",{className:"card-container",children:[(0,t.jsx)("a",{href:"https://wiki.slamtec.com/display/SD#Slamtec%E5%BC%80%E5%8F%91%E8%80%85%E4%B8%AD%E5%BF%83-rplidar",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,t.jsx)("span",{className:"text",children:"Centro de Desarrolladores"})}),(0,t.jsx)("a",{href:"https://download.slamtec.com/api/download/rplidar-s2-protocol/2.4?lang=en",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,t.jsx)("span",{className:"text",children:"Protocolo S2 S2L"})}),(0,t.jsx)("a",{href:"https://download.slamtec.com/api/download/rplidar-s2e-protocol/1.0?lang=en",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,t.jsx)("span",{className:"text",children:"Protocolo S2E"})}),(0,t.jsx)("a",{href:"https://download.slamtec.com/api/download/rplidar-s3-protocol/1?lang=en",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,t.jsx)("span",{className:"text",children:"Protocolo S3"})}),(0,t.jsx)("a",{href:"https://download.slamtec.com/api/download/rplidar-sdk-s2-manual/2.0?lang=en",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,t.jsx)("span",{className:"text",children:"Manual de Usuario SDK"})}),(0,t.jsx)("a",{href:"https://github.com/slamtec/rplidar_sdk",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,t.jsx)("span",{className:"text",children:"Github"})}),(0,t.jsx)("a",{href:"https://github.com/slamtec/rplidar_ros",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,t.jsx)("span",{className:"text",children:"ROS1"})}),(0,t.jsx)("a",{href:"https://github.com/Slamtec/rplidar_ros/tree/ros2",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,t.jsx)("span",{className:"text",children:"ROS2"})})]}),(0,t.jsx)(a.h3,{id:"modelos-3d-1",children:"Modelos 3D"}),(0,t.jsx)("div",{className:"card-container",children:(0,t.jsxs)("nav",{className:"quick-nav",children:[(0,t.jsx)("a",{href:"https://download.slamtec.com/api/download/rplidar-s2-model-3d-stl/1.0?lang=netural",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,t.jsx)("span",{className:"text",children:"S2.stl"})}),(0,t.jsx)("a",{href:"https://download.slamtec.com/api/download/rplidar-s2-model-2d-pdf/1.0?lang=netural",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,t.jsx)("span",{className:"text",children:"S2.pdf"})}),(0,t.jsx)("a",{href:"https://download.slamtec.com/api/download/rplidar-s3-model-3d-stp/1?lang=netural",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,t.jsx)("span",{className:"text",children:"S3.stp"})})]})})]})}),(0,t.jsx)(a.h2,{id:"C1-series",children:"\u{1F4E6} LiDAR Serie C"}),(0,t.jsx)("div",{class:"category-group",children:(0,t.jsxs)("div",{className:"category-card robot-kits",children:[(0,t.jsx)(a.h3,{id:"hoja-de-datos-2",children:"Hoja de Datos"}),(0,t.jsx)("div",{className:"card-container",children:(0,t.jsx)("a",{href:"https://download.slamtec.com/api/download/rplidar-c1-datasheet/1?lang=zh-cn",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,t.jsx)("span",{className:"text",children:"C1M1"})})}),(0,t.jsx)(a.h3,{id:"manual-de-usuario-2",children:"Manual de Usuario"}),(0,t.jsx)("div",{className:"card-container",children:(0,t.jsx)("a",{href:"https://download.slamtec.com/api/download/rplidar-c1-usermanual/1.1?lang=zh-cn",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,t.jsx)("span",{className:"text",children:"C1M1"})})}),(0,t.jsx)(a.h3,{id:"sdk-2",children:"SDK"}),(0,t.jsxs)("div",{className:"card-container",children:[(0,t.jsx)("a",{href:"https://wiki.slamtec.com/display/SD#Slamtec%E5%BC%80%E5%8F%91%E8%80%85%E4%B8%AD%E5%BF%83-rplidar",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,t.jsx)("span",{className:"text",children:"Centro de Desarrolladores"})}),(0,t.jsx)("a",{href:"https://download.slamtec.com/api/download/rplidar-c1-protocol/1?lang=zh-cn",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,t.jsx)("span",{className:"text",children:"Protocolo C1"})}),(0,t.jsx)("a",{href:"https://bucket-download.slamtec.com/6a128ec31e98b713a855a4f40648f5accb0a699a/LR002_SLAMTEC_rplidar_sdk_v2.0_cn.pdf",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,t.jsx)("span",{className:"text",children:"Manual de Usuario SDK"})}),(0,t.jsx)("a",{href:"https://github.com/slamtec/rplidar_sdk",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,t.jsx)("span",{className:"text",children:"Github"})}),(0,t.jsx)("a",{href:"https://github.com/slamtec/rplidar_ros",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,t.jsx)("span",{className:"text",children:"ROS1"})}),(0,t.jsx)("a",{href:"https://github.com/Slamtec/rplidar_ros/tree/ros2",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,t.jsx)("span",{className:"text",children:"ROS2"})})]}),(0,t.jsx)(a.h3,{id:"modelos-3d-2",children:"Modelos 3D"}),(0,t.jsx)("div",{className:"card-container",children:(0,t.jsx)("nav",{className:"quick-nav",children:(0,t.jsx)("a",{href:"https://download.slamtec.com/api/download/rplidar-c1-model-3d-stp/1?lang=netural",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,t.jsx)("span",{className:"text",children:"C1.stp"})})})})]})})]}),"\n",(0,t.jsx)("style",{children:`
/* \u{5BFC}\u{822A}\u{5BB9}\u{5668} */
.quick-nav-container {
margin: 2rem 0;
padding: 1rem;
background: linear-gradient(135deg, #f8f9fa 0%, #f8f9fa 100%);
border-radius: 16px;
box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}

.card-container {
margin: 0.1rem 0;
padding: 0.5rem;
border-radius: 16px;
box-shadow: 0 2px 4px rgba(0,0,0,0.05);
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
flex-wrap: wrap; /* \u{5173}\u{952E}\u{5C5E}\u{6027} */
justify-content: left; /* \u{53EF}\u{9009}\u{5C45}\u{4E2D} */
}

/* \u{5BFC}\u{822A}\u{9879} */
.nav-item {
position: relative;
padding: 0.8rem 1.5rem;
border-radius: 12px;
display: flex;
flex-direction: column;
flex: 0 0 calc(20% - 20px);
margin-bottom: 20px;
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

.nav-item img {
pointer-events: none;
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

/* Modo Dark - Efecto de luz flotante */
html[data-theme='dark'] .category-card:hover::after {
background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%);
}

/* Animaci\xf3n de enlaces */
.category-card a {
position: relative;
display: inline-block;
transition: all 0.2s;
text-decoration: none !important;
color: #333;
}

/* Modo Dark - Enlaces */
html[data-theme='dark'] .category-card a {
color: #d1d5db;
}

.category-card a:hover {
color: #4a90e2;
transform: translateX(5px);
}

/* Modo Dark - Hover de enlaces */
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

/* Modo Dark - Subrayado de enlaces */
html[data-theme='dark'] .category-card a::after {
background: #60a5fa;
}

.category-card a:hover::after {
width: 100%;
}

/* Mejora de estilos de etiquetas */
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

/* Modo Dark - Etiqueta Stable */
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

/* Modo Dark - Etiqueta Recommended */
html[data-theme='dark'] .recommended {
background: #7f1d1d;
color: #fca5a5;
box-shadow: 0 2px 4px rgba(200,0,0,0.3);
}

.category-card:active {
transform: translateY(-2px) scale(0.98);
box-shadow: 0 6px 10px rgba(0,0,0,0.1);
}

/* Modo Dark - Efecto de clic */
html[data-theme='dark'] .category-card:active {
box-shadow: 0 6px 10px rgba(0,0,0,0.4);
}

/* Optimizaci\xf3n responsiva */
@media (max-width: 768px) {
.nav-grid {
  grid-template-columns: 1fr;
}

.category-card {
  width: 100%;
  margin-top: 0.5rem; /* Tarjeta pegada al t\xedtulo */
}
}

/* Modo Dark - Texto de t\xedtulos */
html[data-theme='dark'] h1,
html[data-theme='dark'] h2,
html[data-theme='dark'] h3,
html[data-theme='dark'] h4,
html[data-theme='dark'] h5,
html[data-theme='dark'] h6 {
color: #f9fafb;
}

/* Modo Dark - Texto del cuerpo */
html[data-theme='dark'] p,
html[data-theme='dark'] li,
html[data-theme='dark'] strong {
color: #e5e7eb;
}

/* Modo Dark - Bloques de cita */
html[data-theme='dark'] blockquote {
color: #9ca3af;
border-left-color: #4b5563;
}
`})]})}function m(e={}){let{wrapper:a}={...(0,n.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,a,r){r.d(a,{Z:()=>l,a:()=>o});var s=r(667294);let t={},n=s.createContext(t);function o(e){let a=s.useContext(n);return s.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(n.Provider,{value:a},e.children)}}}]);