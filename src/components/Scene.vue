<template>
  <div class="animate__animated animate__fadeInUp">
    <div class="change">
      <router-link to="/CampusOverview">
        <div id="one" @click="noImage()">
          <img src="../assets/智慧校园.png" /><b>校园总览</b>
        </div>
      </router-link>

      <router-link to="/EarlyWarn">
        <div id="two" @click="noImage()">
          <img src="../assets/学生.png" /><b>预警平台</b>
        </div>
      </router-link>

      <router-link to="/Distribute" value="1">
        <div id="three" @click="loadImage()">
          <img src="../assets/地图.png" /><b>人员分布</b>
        </div>
      </router-link>
    </div>
  </div>

  <router-view></router-view>
</template>

<script setup>
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

//初始化场景
const scene = new THREE.Scene();

//初始化相机
const camera = new THREE.PerspectiveCamera(
  45,
  1920 / 1080,
  0.1,
  2000
);

//加载模型
const loader = new GLTFLoader();
loader.load(
  "src/assets/校园模型（省赛）.glb",
  function (gltf) {
    scene.add(gltf.scene);
  },
  // function (xhr) {
  //   // 侦听模型加载进度
  //   console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
  // },
  undefined,
  function (error) {
    console.error(error);
  }
);

//初始化渲染器
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(1920, 1080);
//色调映射
renderer.toneMapping = THREE.ACESFilmicToneMapping;
//曝光
renderer.toneMappingExposure = 1;
renderer.setPixelRatio(window.devicePixelRatio);
renderer.outputEncoding = THREE.sRGBEncoding;
renderer.setClearColor(0x666666, 0);
document.body.appendChild(renderer.domElement);

const pmremGenerator = new THREE.PMREMGenerator(renderer);

//设置相机位置
camera.position.set(-170, 145, 0);

//加载轨道控制
const controls = new OrbitControls(camera, renderer.domElement);
controls.target = new THREE.Vector3(50, 0, 0);

//设置灯光
function addLights(level) {
  scene.add(new THREE.AmbientLight(0xffffff, 0.5));
  var light = new THREE.DirectionalLight(0xffffff, 0.1 * Math.PI);
  light.position.set(100, 200, 100);
  scene.add(light);
}
addLights();

//添加热力图
function loadImage() {
  new THREE.TextureLoader().load("src/assets/heatmap.png", (texture) => {
    const SIZE = 1500;
    const img = texture.image;
    let height = (img && img.height) || SIZE;
    let width = (img && img.width) || SIZE;
    height = (SIZE / width) * height;
    width = SIZE;
    const mat = new THREE.MeshBasicMaterial({
      map: texture,
      side: THREE.DoubleSide,
      transparent: true,
    });
    const geom = new THREE.PlaneGeometry(width, height);
    const mesh = new THREE.Mesh(geom, mat);
    mesh.rotateX((3 * Math.PI) / 2);
    mesh.rotateZ(Math.PI / 2);
    mesh.translateZ(20);
    mesh.translateX(-400); //右
    mesh.translateY(-200); //上
    scene.add(mesh);
  });
}

//移除热力图
function noImage() {
  var allChildren = scene.children;
  console.log(allChildren);
  var lastObject = allChildren[allChildren.length - 1];
  if (lastObject instanceof THREE.Mesh) {
    scene.remove(lastObject);
    this.numberOfObjects = scene.children.length;
  }
}

/**
 * 创建点精灵模型
 */
// 创建精灵材质对象SpriteMaterial
var spriteMaterial = new THREE.SpriteMaterial({
  map: new THREE.TextureLoader().load("src/assets/标识/图书馆.png"), //设置精灵纹理贴图
  // transparent: true, //开启透明(纹理图片png有透明信息)
});
// 创建精灵模型对象，不需要几何体geometry参数
var sprite = new THREE.Sprite(spriteMaterial);
sprite.name = "图书馆";
sprite.scale.set(24.2, 7.3, 1); //精灵大小
// 把精灵模型插入到模型对象的父对象下面
scene.add(sprite);
// 父对象group位置变化,网格模型及其对象的标签同样发生变化
//scene.position.set(0, 0, 0);
// 表示标签信息的精灵模型对象相对父对象设置一定的偏移
sprite.translateY(60);
sprite.translateX(0);

var spriteMaterial2 = new THREE.SpriteMaterial({
  map: new THREE.TextureLoader().load("src/assets/标识/容器 18.png"), //设置精灵纹理贴图
});
var sprite2 = new THREE.Sprite(spriteMaterial2);
sprite2.scale.set(24.2, 7.3, 1); //精灵大小
scene.add(sprite2);
sprite2.translateY(40);
sprite2.translateX(-160);
sprite2.translateZ(100);

var spriteMaterial3 = new THREE.SpriteMaterial({
  map: new THREE.TextureLoader().load("src/assets/标识/容器 40.png"), //设置精灵纹理贴图
});
var sprite3 = new THREE.Sprite(spriteMaterial3);
sprite3.scale.set(24.2, 7.3, 1); //精灵大小
scene.add(sprite3);
sprite3.translateY(40);
sprite3.translateX(-70);
sprite3.translateZ(130);

var spriteMaterial4 = new THREE.SpriteMaterial({
  map: new THREE.TextureLoader().load("src/assets/标识/容器 19.png"), //设置精灵纹理贴图
});
var sprite4 = new THREE.Sprite(spriteMaterial4);
sprite4.scale.set(24.2, 7.3, 1); //精灵大小
scene.add(sprite4);
sprite4.translateY(40);
sprite4.translateX(-70);
sprite4.translateZ(230);

var spriteMaterial5 = new THREE.SpriteMaterial({
  map: new THREE.TextureLoader().load("src/assets/标识/容器 27.png"), //设置精灵纹理贴图
});
var sprite5 = new THREE.Sprite(spriteMaterial5);
sprite5.scale.set(24.2, 7.3, 1); //精灵大小
scene.add(sprite5);
sprite5.translateY(50);
sprite5.translateX(-20);
sprite5.translateZ(-130);

var spriteMaterial6 = new THREE.SpriteMaterial({
  map: new THREE.TextureLoader().load("src/assets/标识/容器 24.png"), //设置精灵纹理贴图
});
var sprite6 = new THREE.Sprite(spriteMaterial6);
sprite6.scale.set(24.2, 7.3, 1); //精灵大小
scene.add(sprite6);
sprite6.translateY(40);
sprite6.translateX(40);
sprite6.translateZ(-180);

var spriteMaterial7 = new THREE.SpriteMaterial({
  map: new THREE.TextureLoader().load("src/assets/标识/容器 25.png"), //设置精灵纹理贴图
});
var sprite7 = new THREE.Sprite(spriteMaterial7);
sprite7.scale.set(24.2, 7.3, 1); //精灵大小
scene.add(sprite7);
sprite7.translateY(40);
sprite7.translateX(70);
sprite7.translateZ(-160);

var spriteMaterial8 = new THREE.SpriteMaterial({
  map: new THREE.TextureLoader().load("src/assets/标识/容器 24 (1).png"), //设置精灵纹理贴图
});
var sprite8 = new THREE.Sprite(spriteMaterial8);
sprite8.scale.set(24.2, 7.3, 1); //精灵大小
scene.add(sprite8);
sprite8.translateY(40);
sprite8.translateX(100);
sprite8.translateZ(-140);

var spriteMaterial9 = new THREE.SpriteMaterial({
  map: new THREE.TextureLoader().load("src/assets/标识/容器 24 (1).png"), //设置精灵纹理贴图
});
var sprite9 = new THREE.Sprite(spriteMaterial9);
sprite9.scale.set(24.2, 7.3, 1); //精灵大小
scene.add(sprite9);
sprite9.translateY(40);
sprite9.translateX(100);
sprite9.translateZ(-140);

var spriteMaterial10 = new THREE.SpriteMaterial({
  map: new THREE.TextureLoader().load("src/assets/标识/容器 42.png"), //设置精灵纹理贴图
});
var sprite10 = new THREE.Sprite(spriteMaterial10);
sprite10.scale.set(24.2, 7.3, 1); //精灵大小
scene.add(sprite10);
sprite10.translateY(40);
sprite10.translateX(220);
sprite10.translateZ(-230);

var spriteMaterial11 = new THREE.SpriteMaterial({
  map: new THREE.TextureLoader().load("src/assets/标识/容器 22.png"), //设置精灵纹理贴图
});
var sprite11 = new THREE.Sprite(spriteMaterial11);
sprite11.scale.set(24.2, 7.3, 1); //精灵大小
scene.add(sprite11);
sprite11.translateY(30);
sprite11.translateX(240);
sprite11.translateZ(-70);

var spriteMaterial12 = new THREE.SpriteMaterial({
  map: new THREE.TextureLoader().load("src/assets/标识/容器 43.png"), //设置精灵纹理贴图
});
var sprite12 = new THREE.Sprite(spriteMaterial12);
sprite12.scale.set(24.2, 7.3, 1); //精灵大小
scene.add(sprite12);
sprite12.translateY(30);
sprite12.translateX(270);
sprite12.translateZ(-70);

var spriteMaterial13 = new THREE.SpriteMaterial({
  map: new THREE.TextureLoader().load("src/assets/标识/容器 29.png"), //设置精灵纹理贴图
});
var sprite13 = new THREE.Sprite(spriteMaterial13);
sprite13.scale.set(24.2, 7.3, 1); //精灵大小
scene.add(sprite13);
sprite13.translateY(30);
sprite13.translateX(320);
sprite13.translateZ(-130);

var spriteMaterial14 = new THREE.SpriteMaterial({
  map: new THREE.TextureLoader().load("src/assets/标识/容器 44.png"), //设置精灵纹理贴图
});
var sprite14 = new THREE.Sprite(spriteMaterial14);
sprite14.scale.set(24.2, 7.3, 1); //精灵大小
scene.add(sprite14);
sprite14.translateY(30);
sprite14.translateX(400);
sprite14.translateZ(-70);

var spriteMaterial15 = new THREE.SpriteMaterial({
  map: new THREE.TextureLoader().load("src/assets/标识/容器 17.png"), //设置精灵纹理贴图
});
var sprite15 = new THREE.Sprite(spriteMaterial15);
sprite15.scale.set(24.2, 7.3, 1); //精灵大小
scene.add(sprite15);
sprite15.translateY(40);
sprite15.translateX(360);
sprite15.translateZ(15);

var spriteMaterial16 = new THREE.SpriteMaterial({
  map: new THREE.TextureLoader().load("src/assets/标识/容器 31.png"), //设置精灵纹理贴图
});
var sprite16 = new THREE.Sprite(spriteMaterial16);
sprite16.scale.set(24.2, 7.3, 1); //精灵大小
scene.add(sprite16);
sprite16.translateY(30);
sprite16.translateX(290);
sprite16.translateZ(15);

var spriteMaterial16 = new THREE.SpriteMaterial({
  map: new THREE.TextureLoader().load("src/assets/标识/容器 32.png"), //设置精灵纹理贴图
});
var sprite16 = new THREE.Sprite(spriteMaterial16);
sprite16.scale.set(24.2, 7.3, 1); //精灵大小
scene.add(sprite16);
sprite16.translateY(20);
sprite16.translateX(275);
sprite16.translateZ(110);

var spriteMaterial17 = new THREE.SpriteMaterial({
  map: new THREE.TextureLoader().load("src/assets/标识/容器 28.png"), //设置精灵纹理贴图
});
var sprite17 = new THREE.Sprite(spriteMaterial17);
sprite17.scale.set(24.2, 7.3, 1); //精灵大小
scene.add(sprite17);
sprite17.translateY(30);
sprite17.translateX(440);
sprite17.translateZ(100);

var spriteMaterial18 = new THREE.SpriteMaterial({
  map: new THREE.TextureLoader().load("src/assets/标识/容器 45.png"), //设置精灵纹理贴图
});
var sprite18 = new THREE.Sprite(spriteMaterial18);
sprite18.scale.set(24.2, 7.3, 1); //精灵大小
scene.add(sprite18);
sprite18.translateY(30);
sprite18.translateX(255);
sprite18.translateZ(200);

var spriteMaterial19 = new THREE.SpriteMaterial({
  map: new THREE.TextureLoader().load("src/assets/标识/容器 16.png"), //设置精灵纹理贴图
});
var sprite19 = new THREE.Sprite(spriteMaterial19);
sprite19.scale.set(24.2, 7.3, 1); //精灵大小
scene.add(sprite19);
sprite19.translateY(30);
sprite19.translateX(190);
sprite19.translateZ(200);

var spriteMaterial20 = new THREE.SpriteMaterial({
  map: new THREE.TextureLoader().load("src/assets/标识/容器 30.png"), //设置精灵纹理贴图
});
var sprite20 = new THREE.Sprite(spriteMaterial20);
sprite20.scale.set(24.2, 7.3, 1); //精灵大小
scene.add(sprite20);
sprite20.translateY(30);
sprite20.translateX(300);
sprite20.translateZ(260);

var spriteMaterial21 = new THREE.SpriteMaterial({
  map: new THREE.TextureLoader().load("src/assets/标识/容器 33.png"), //设置精灵纹理贴图
});
var sprite21 = new THREE.Sprite(spriteMaterial21);
sprite21.scale.set(24.2, 7.3, 1); //精灵大小
scene.add(sprite21);
sprite21.translateY(30);
sprite21.translateX(350);
sprite21.translateZ(320);

var spriteMaterial22 = new THREE.SpriteMaterial({
  map: new THREE.TextureLoader().load("src/assets/标识/容器 15.png"), //设置精灵纹理贴图
});
var sprite22 = new THREE.Sprite(spriteMaterial22);
sprite22.scale.set(24.2, 7.3, 1); //精灵大小
scene.add(sprite22);
sprite22.translateY(30);
sprite22.translateX(410);
sprite22.translateZ(320);

var spriteMaterial23 = new THREE.SpriteMaterial({
  map: new THREE.TextureLoader().load("src/assets/标识/容器 9.png"), //设置精灵纹理贴图
});
var sprite23 = new THREE.Sprite(spriteMaterial23);
sprite23.scale.set(24.2, 7.3, 1); //精灵大小
scene.add(sprite23);
sprite23.translateY(30);
sprite23.translateX(330);
sprite23.translateZ(420);

var spriteMaterial24 = new THREE.SpriteMaterial({
  map: new THREE.TextureLoader().load("src/assets/标识/容器 10.png"), //设置精灵纹理贴图
});
var sprite24 = new THREE.Sprite(spriteMaterial24);
sprite24.scale.set(24.2, 7.3, 1); //精灵大小
scene.add(sprite24);
sprite24.translateY(30);
sprite24.translateX(230);
sprite24.translateZ(380);

var spriteMaterial25 = new THREE.SpriteMaterial({
  map: new THREE.TextureLoader().load("src/assets/标识/容器 11.png"), //设置精灵纹理贴图
});
var sprite25 = new THREE.Sprite(spriteMaterial25);
sprite25.scale.set(24.2, 7.3, 1); //精灵大小
scene.add(sprite25);
sprite25.translateY(30);
sprite25.translateX(170);
sprite25.translateZ(390);

var spriteMaterial26 = new THREE.SpriteMaterial({
  map: new THREE.TextureLoader().load("src/assets/标识/容器 12.png"), //设置精灵纹理贴图
});
var sprite26 = new THREE.Sprite(spriteMaterial26);
sprite26.scale.set(24.2, 7.3, 1); //精灵大小
scene.add(sprite26);
sprite26.translateY(30);
sprite26.translateX(150);
sprite26.translateZ(370);

var spriteMaterial27 = new THREE.SpriteMaterial({
  map: new THREE.TextureLoader().load("src/assets/标识/容器 27.png"), //设置精灵纹理贴图
});
var sprite27 = new THREE.Sprite(spriteMaterial27);
sprite27.scale.set(24.2, 7.3, 1); //精灵大小
scene.add(sprite27);
sprite27.translateY(30);
sprite27.translateX(230);
sprite27.translateZ(550);

var spriteMaterial28 = new THREE.SpriteMaterial({
  map: new THREE.TextureLoader().load("src/assets/标识/容器 6.png"), //设置精灵纹理贴图
});
var sprite28 = new THREE.Sprite(spriteMaterial28);
sprite28.scale.set(24.2, 7.3, 1); //精灵大小
scene.add(sprite28);
sprite28.translateY(30);
sprite28.translateX(230);
sprite28.translateZ(650);

var spriteMaterial29 = new THREE.SpriteMaterial({
  map: new THREE.TextureLoader().load("src/assets/标识/容器 5 (1).png"), //设置精灵纹理贴图
});
var sprite29 = new THREE.Sprite(spriteMaterial29);
sprite29.scale.set(24.2, 7.3, 1); //精灵大小
scene.add(sprite29);
sprite29.translateY(30);
sprite29.translateX(320);
sprite29.translateZ(510);

var spriteMaterial30 = new THREE.SpriteMaterial({
  map: new THREE.TextureLoader().load("src/assets/标识/容器 5 (2).png"), //设置精灵纹理贴图
});
var sprite30 = new THREE.Sprite(spriteMaterial30);
sprite30.scale.set(24.2, 7.3, 1); //精灵大小
scene.add(sprite30);
sprite30.translateY(30);
sprite30.translateX(320);
sprite30.translateZ(650);

var spriteMaterial31 = new THREE.SpriteMaterial({
  map: new THREE.TextureLoader().load("src/assets/标识/容器 5 (1).png"), //设置精灵纹理贴图
});
var sprite31 = new THREE.Sprite(spriteMaterial31);
sprite31.scale.set(24.2, 7.3, 1); //精灵大小
scene.add(sprite31);
sprite31.translateY(30);
sprite31.translateX(320);
sprite31.translateZ(510);

var spriteMaterial32 = new THREE.SpriteMaterial({
  map: new THREE.TextureLoader().load("src/assets/标识/容器 5.png"), //设置精灵纹理贴图
});
var sprite32 = new THREE.Sprite(spriteMaterial32);
sprite32.scale.set(24.2, 7.3, 1); //精灵大小
scene.add(sprite32);
sprite32.translateY(30);
sprite32.translateX(380);
sprite32.translateZ(510);

var spriteMaterial33 = new THREE.SpriteMaterial({
  map: new THREE.TextureLoader().load("src/assets/标识/容器 4.png"), //设置精灵纹理贴图
});
var sprite33 = new THREE.Sprite(spriteMaterial33);
sprite33.scale.set(24.2, 7.3, 1); //精灵大小
scene.add(sprite33);
sprite33.translateY(30);
sprite33.translateX(410);
sprite33.translateZ(490);

var spriteMaterial34 = new THREE.SpriteMaterial({
  map: new THREE.TextureLoader().load("src/assets/标识/容器 1 (15).png"), //设置精灵纹理贴图
});
var sprite34 = new THREE.Sprite(spriteMaterial34);
sprite34.scale.set(24.2, 7.3, 1); //精灵大小
scene.add(sprite34);
sprite34.translateY(30);
sprite34.translateX(410);
sprite34.translateZ(690);

var spriteMaterial35 = new THREE.SpriteMaterial({
  map: new THREE.TextureLoader().load("src/assets/标识/容器 7.png"), //设置精灵纹理贴图
});
var sprite35 = new THREE.Sprite(spriteMaterial35);
sprite35.scale.set(24.2, 7.3, 1); //精灵大小
scene.add(sprite35);
sprite35.translateY(30);
sprite35.translateX(280);
sprite35.translateZ(800);

var spriteMaterial36 = new THREE.SpriteMaterial({
  map: new THREE.TextureLoader().load("src/assets/标识/容器 37-3.png"), //设置精灵纹理贴图
});
var sprite36 = new THREE.Sprite(spriteMaterial36);
sprite36.scale.set(24.2, 7.3, 1); //精灵大小
scene.add(sprite36);
sprite36.translateY(30);
sprite36.translateX(390);
sprite36.translateZ(940);

var spriteMaterial37 = new THREE.SpriteMaterial({
  map: new THREE.TextureLoader().load("src/assets/标识/容器 37-6.png"), //设置精灵纹理贴图
});
var sprite37 = new THREE.Sprite(spriteMaterial37);
sprite37.scale.set(24.2, 7.3, 1); //精灵大小
scene.add(sprite37);
sprite37.translateY(30);
sprite37.translateX(490);
sprite37.translateZ(940);

var spriteMaterial38 = new THREE.SpriteMaterial({
  map: new THREE.TextureLoader().load("src/assets/标识/容器 37-2.png"), //设置精灵纹理贴图
});
var sprite38 = new THREE.Sprite(spriteMaterial38);
sprite38.scale.set(24.2, 7.3, 1); //精灵大小
scene.add(sprite38);
sprite38.translateY(30);
sprite38.translateX(490);
sprite38.translateZ(1030);

var spriteMaterial39 = new THREE.SpriteMaterial({
  map: new THREE.TextureLoader().load("src/assets/标识/容器 38.png"), //设置精灵纹理贴图
});
var sprite39 = new THREE.Sprite(spriteMaterial39);
sprite39.scale.set(24.2, 7.3, 1); //精灵大小
scene.add(sprite39);
sprite39.translateY(30);
sprite39.translateX(440);
sprite39.translateZ(1040);

var spriteMaterial40 = new THREE.SpriteMaterial({
  map: new THREE.TextureLoader().load("src/assets/标识/容器 37.png"), //设置精灵纹理贴图
});
var sprite40 = new THREE.Sprite(spriteMaterial40);
sprite40.scale.set(24.2, 7.3, 1); //精灵大小
scene.add(sprite40);
sprite40.translateY(30);
sprite40.translateX(380);
sprite40.translateZ(1040);

var spriteMaterial41 = new THREE.SpriteMaterial({
  map: new THREE.TextureLoader().load("src/assets/标识/容器 37-4.png"), //设置精灵纹理贴图
});
var sprite41 = new THREE.Sprite(spriteMaterial41);
sprite41.scale.set(24.2, 7.3, 1); //精灵大小
scene.add(sprite41);
sprite41.translateY(30);
sprite41.translateX(420);
sprite41.translateZ(975);

var spriteMaterial42 = new THREE.SpriteMaterial({
  map: new THREE.TextureLoader().load("src/assets/标识/容器 37-5.png"), //设置精灵纹理贴图
});
var sprite42 = new THREE.Sprite(spriteMaterial42);
sprite42.scale.set(24.2, 7.3, 1); //精灵大小
scene.add(sprite42);
sprite42.translateY(30);
sprite42.translateX(460);
sprite42.translateZ(975);

var spriteMaterial43 = new THREE.SpriteMaterial({
  map: new THREE.TextureLoader().load("src/assets/保安.png"), //设置精灵纹理贴图
});
var sprite43 = new THREE.Sprite(spriteMaterial43);
sprite43.scale.set(10, 10, 1); //精灵大小
scene.add(sprite43);
sprite43.translateY(5);
sprite43.translateX(230);
sprite43.translateZ(420);

var spriteMaterial43 = new THREE.SpriteMaterial({
  map: new THREE.TextureLoader().load("src/assets/保安.png"), //设置精灵纹理贴图
});
var sprite43 = new THREE.Sprite(spriteMaterial43);
sprite43.scale.set(10, 10, 1); //精灵大小
scene.add(sprite43);
sprite43.translateY(5);
sprite43.translateX(230);
sprite43.translateZ(430);

var spriteMaterial43 = new THREE.SpriteMaterial({
  map: new THREE.TextureLoader().load("src/assets/保安.png"), //设置精灵纹理贴图
});
var sprite43 = new THREE.Sprite(spriteMaterial43);
sprite43.scale.set(10, 10, 1); //精灵大小
scene.add(sprite43);
sprite43.translateY(5);
sprite43.translateX(275);
sprite43.translateZ(440);

var spriteMaterial43 = new THREE.SpriteMaterial({
  map: new THREE.TextureLoader().load("src/assets/保安.png"), //设置精灵纹理贴图
});
var sprite43 = new THREE.Sprite(spriteMaterial43);
sprite43.scale.set(10, 10, 1); //精灵大小
scene.add(sprite43);
sprite43.translateY(5);
sprite43.translateX(275);
sprite43.translateZ(450);

var spriteMaterial43 = new THREE.SpriteMaterial({
  map: new THREE.TextureLoader().load("src/assets/保安.png"), //设置精灵纹理贴图
});
var sprite43 = new THREE.Sprite(spriteMaterial43);
sprite43.scale.set(10, 10, 1); //精灵大小
scene.add(sprite43);
sprite43.translateY(5);
sprite43.translateX(275);
sprite43.translateZ(550);

var spriteMaterial43 = new THREE.SpriteMaterial({
  map: new THREE.TextureLoader().load("src/assets/保安.png"), //设置精灵纹理贴图
});
var sprite43 = new THREE.Sprite(spriteMaterial43);
sprite43.scale.set(10, 10, 1); //精灵大小
scene.add(sprite43);
sprite43.translateY(5);
sprite43.translateX(275);
sprite43.translateZ(560);

var spriteMaterial43 = new THREE.SpriteMaterial({
  map: new THREE.TextureLoader().load("src/assets/保安.png"), //设置精灵纹理贴图
});
var sprite43 = new THREE.Sprite(spriteMaterial43);
sprite43.scale.set(10, 10, 1); //精灵大小
scene.add(sprite43);
sprite43.translateY(5);
sprite43.translateX(355);
sprite43.translateZ(570);

var spriteMaterial43 = new THREE.SpriteMaterial({
  map: new THREE.TextureLoader().load("src/assets/保安.png"), //设置精灵纹理贴图
});
var sprite43 = new THREE.Sprite(spriteMaterial43);
sprite43.scale.set(10, 10, 1); //精灵大小
scene.add(sprite43);
sprite43.translateY(5);
sprite43.translateX(355);
sprite43.translateZ(580);

//渲染动画
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

animate();
</script>

<style scoped>
b {
  position: relative;
  top: -8px;
  left: 15px;
}

#two {
  position: relative;
  left: 220px;
  top: -48px;
  color: #fff;
  font-size: 28px;
  font-family: "box font", -apple-system, BlinkMacSystemFont;
}

#three {
  width: 190px;
  position: absolute;
  left: 450px;
  top: 0px;
  color: #fff;
  font-size: 28px;
  font-family: "box font", -apple-system, BlinkMacSystemFont;
}
.router-link-active {
  text-decoration: none;
}
.change {
  /* border: 1px solid red; */
  width: 200px;
  height: 100px;
  position: absolute;
  left: 655px;
  top: 960px;
}

img {
  height: 40px;
  width: auto;
}

#one {
  color: #fff;
  font-size: 28px;
  font-family: "box font", -apple-system, BlinkMacSystemFont;
}

.router-link-active {
  text-decoration: none;
}

a {
  text-decoration: none;
}
</style>
