/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/polyfill/lib/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@babel/polyfill/lib/index.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./noConflict */ \"./node_modules/@babel/polyfill/lib/noConflict.js\");\n\nvar _global = _interopRequireDefault(__webpack_require__(/*! core-js/library/fn/global */ \"./node_modules/core-js/library/fn/global.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nif (_global[\"default\"]._babelPolyfill && typeof console !== \"undefined\" && console.warn) {\n  console.warn(\"@babel/polyfill is loaded more than once on this page. This is probably not desirable/intended \" + \"and may have consequences if different versions of the polyfills are applied sequentially. \" + \"If you do need to load the polyfill more than once, use @babel/polyfill/noConflict \" + \"instead to bypass the warning.\");\n}\n\n_global[\"default\"]._babelPolyfill = true;\n\n//# sourceURL=webpack://stakhanovets/./node_modules/@babel/polyfill/lib/index.js?");

/***/ }),

/***/ "./node_modules/@babel/polyfill/lib/noConflict.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/polyfill/lib/noConflict.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! core-js/es6 */ \"./node_modules/core-js/es6/index.js\");\n\n__webpack_require__(/*! core-js/fn/array/includes */ \"./node_modules/core-js/fn/array/includes.js\");\n\n__webpack_require__(/*! core-js/fn/array/flat-map */ \"./node_modules/core-js/fn/array/flat-map.js\");\n\n__webpack_require__(/*! core-js/fn/string/pad-start */ \"./node_modules/core-js/fn/string/pad-start.js\");\n\n__webpack_require__(/*! core-js/fn/string/pad-end */ \"./node_modules/core-js/fn/string/pad-end.js\");\n\n__webpack_require__(/*! core-js/fn/string/trim-start */ \"./node_modules/core-js/fn/string/trim-start.js\");\n\n__webpack_require__(/*! core-js/fn/string/trim-end */ \"./node_modules/core-js/fn/string/trim-end.js\");\n\n__webpack_require__(/*! core-js/fn/symbol/async-iterator */ \"./node_modules/core-js/fn/symbol/async-iterator.js\");\n\n__webpack_require__(/*! core-js/fn/object/get-own-property-descriptors */ \"./node_modules/core-js/fn/object/get-own-property-descriptors.js\");\n\n__webpack_require__(/*! core-js/fn/object/values */ \"./node_modules/core-js/fn/object/values.js\");\n\n__webpack_require__(/*! core-js/fn/object/entries */ \"./node_modules/core-js/fn/object/entries.js\");\n\n__webpack_require__(/*! core-js/fn/promise/finally */ \"./node_modules/core-js/fn/promise/finally.js\");\n\n__webpack_require__(/*! core-js/web */ \"./node_modules/core-js/web/index.js\");\n\n__webpack_require__(/*! regenerator-runtime/runtime */ \"./node_modules/regenerator-runtime/runtime.js\");\n\n//# sourceURL=webpack://stakhanovets/./node_modules/@babel/polyfill/lib/noConflict.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_loaders_FBXLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/loaders/FBXLoader */ \"./node_modules/three/examples/jsm/loaders/FBXLoader.js\");\n\n\nvar scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();\nvar frontSpot = new three__WEBPACK_IMPORTED_MODULE_0__.SpotLight();\nfrontSpot.position.set(1000, 1000, 1000);\nscene.add(frontSpot);\nvar frontSpot2 = new three__WEBPACK_IMPORTED_MODULE_0__.SpotLight();\nfrontSpot2.position.set(-300, -300, -300);\nscene.add(frontSpot2);\nvar camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(25, window.innerWidth / window.innerHeight, 0.1, 1000);\nvar renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer({\n  alpha: true\n});\nrenderer.setSize(window.innerWidth, window.innerHeight);\nrenderer.setClearColor(0x000000, 0);\ndocument.querySelector('#root').appendChild(renderer.domElement);\nvar geometry = new three__WEBPACK_IMPORTED_MODULE_0__.TorusGeometry(10, 3, 20, 100);\nvar material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshPhongMaterial({\n  color: 0xdaa520,\n  specular: 0xbcbcbc\n});\nvar mesh = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geometry, material);\nscene.add(mesh); // const light = new THREE.AmbientLight( 0xffffff, 0.1 ); // soft white light\n// scene.add( light );\n\nconsole.log(scene);\ncamera.position.z = 25;\n\nfunction render() {\n  requestAnimationFrame(render);\n  mesh.rotation.y += 0.01;\n  mesh.rotation.z += 0.01;\n  renderer.render(scene, camera);\n}\n\nrender(); // console.log(sphere)\n// console.log(FBXLoader)\n// console.log(THREE.FBXLoader)\n\nvar fbxLoader = new three_examples_jsm_loaders_FBXLoader__WEBPACK_IMPORTED_MODULE_1__.FBXLoader(); // fbxLoader.load('src/models/wasd.fbx', function ( object ) {\n\nfbxLoader.load('/static/wasd.fbx', function (object) {\n  // fbxLoader.load('https://ikaznacheev.com/threejs/wasd.fbx', function ( object ) {\n  // https://ikaznacheev.com/threejs/wasd.fbx\n  console.log(object);\n  object.traverse(function (child) {\n    // if (child.isMesh) {\n    //     child.castShadow = true;\n    //     child.receiveShadow = true;\n    //     child.frustumCulled = false;\n    //     child.position.x = 0\n    //     child.position.y = 0\n    //     child.position.z = 0\n    // }\n    if (child.type === \"Group\") {\n      child.castShadow = true;\n      child.receiveShadow = true;\n      child.frustumCulled = false;\n      child.position.x = 0;\n      child.position.y = 0;\n      child.position.z = 0;\n    } // if (child.type === \"PerspectiveCamera\") {\n    // }\n\n  }); //Анимация\n  // object.mixer = new THREE.AnimationMixer( object );\n  // mixers.push( object.mixer )\n  // var action = object.mixer.clipAction( object.animations[ 0 ] );\n  // action.play();\n  // // Что, текстура может быть, вы ошиблись, укажите на это\n  // object.traverse( function ( child ) {\n  //     if ( child.isMesh ) {\n  //         child.castShadow = true;\n  //         child.receiveShadow = true;\n  //     }\n  // } );\n  // object.rotation.x = Math.PI / 2\n  // object.position.x = 11;\n\n  camera.position.z = 150;\n  scene.add(object);\n  console.log('mesh', mesh);\n  console.log('scene', scene);\n  renderer.render(scene, camera);\n});\n\nwindow.onload = function () {\n  window.addEventListener('scroll', function (e) {// render2(25 + (window.scrollY / 10000));\n  });\n};\n\n//# sourceURL=webpack://stakhanovets/./src/index.js?");

/***/ }),

/***/ "./node_modules/core-js/es6/index.js":
/*!*******************************************!*\
  !*** ./node_modules/core-js/es6/index.js ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("__webpack_require__(/*! ../modules/es6.symbol */ \"./node_modules/core-js/modules/es6.symbol.js\");\n__webpack_require__(/*! ../modules/es6.object.create */ \"./node_modules/core-js/modules/es6.object.create.js\");\n__webpack_require__(/*! ../modules/es6.object.define-property */ \"./node_modules/core-js/modules/es6.object.define-property.js\");\n__webpack_require__(/*! ../modules/es6.object.define-properties */ \"./node_modules/core-js/modules/es6.object.define-properties.js\");\n__webpack_require__(/*! ../modules/es6.object.get-own-property-descriptor */ \"./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js\");\n__webpack_require__(/*! ../modules/es6.object.get-prototype-of */ \"./node_modules/core-js/modules/es6.object.get-prototype-of.js\");\n__webpack_require__(/*! ../modules/es6.object.keys */ \"./node_modules/core-js/modules/es6.object.keys.js\");\n__webpack_require__(/*! ../modules/es6.object.get-own-property-names */ \"./node_modules/core-js/modules/es6.object.get-own-property-names.js\");\n__webpack_require__(/*! ../modules/es6.object.freeze */ \"./node_modules/core-js/modules/es6.object.freeze.js\");\n__webpack_require__(/*! ../modules/es6.object.seal */ \"./node_modules/core-js/modules/es6.object.seal.js\");\n__webpack_require__(/*! ../modules/es6.object.prevent-extensions */ \"./node_modules/core-js/modules/es6.object.prevent-extensions.js\");\n__webpack_require__(/*! ../modules/es6.object.is-frozen */ \"./node_modules/core-js/modules/es6.object.is-frozen.js\");\n__webpack_require__(/*! ../modules/es6.object.is-sealed */ \"./node_modules/core-js/modules/es6.object.is-sealed.js\");\n__webpack_require__(/*! ../modules/es6.object.is-extensible */ \"./node_modules/core-js/modules/es6.object.is-extensible.js\");\n__webpack_require__(/*! ../modules/es6.object.assign */ \"./node_modules/core-js/modules/es6.object.assign.js\");\n__webpack_require__(/*! ../modules/es6.object.is */ \"./node_modules/core-js/modules/es6.object.is.js\");\n__webpack_require__(/*! ../modules/es6.object.set-prototype-of */ \"./node_modules/core-js/modules/es6.object.set-prototype-of.js\");\n__webpack_require__(/*! ../modules/es6.object.to-string */ \"./node_modules/core-js/modules/es6.object.to-string.js\");\n__webpack_require__(/*! ../modules/es6.function.bind */ \"./node_modules/core-js/modules/es6.function.bind.js\");\n__webpack_require__(/*! ../modules/es6.function.name */ \"./node_modules/core-js/modules/es6.function.name.js\");\n__webpack_require__(/*! ../modules/es6.function.has-instance */ \"./node_modules/core-js/modules/es6.function.has-instance.js\");\n__webpack_require__(/*! ../modules/es6.parse-int */ \"./node_modules/core-js/modules/es6.parse-int.js\");\n__webpack_require__(/*! ../modules/es6.parse-float */ \"./node_modules/core-js/modules/es6.parse-float.js\");\n__webpack_require__(/*! ../modules/es6.number.constructor */ \"./node_modules/core-js/modules/es6.number.constructor.js\");\n__webpack_require__(/*! ../modules/es6.number.to-fixed */ \"./node_modules/core-js/modules/es6.number.to-fixed.js\");\n__webpack_require__(/*! ../modules/es6.number.to-precision */ \"./node_modules/core-js/modules/es6.number.to-precision.js\");\n__webpack_require__(/*! ../modules/es6.number.epsilon */ \"./node_modules/core-js/modules/es6.number.epsilon.js\");\n__webpack_require__(/*! ../modules/es6.number.is-finite */ \"./node_modules/core-js/modules/es6.number.is-finite.js\");\n__webpack_require__(/*! ../modules/es6.number.is-integer */ \"./node_modules/core-js/modules/es6.number.is-integer.js\");\n__webpack_require__(/*! ../modules/es6.number.is-nan */ \"./node_modules/core-js/modules/es6.number.is-nan.js\");\n__webpack_require__(/*! ../modules/es6.number.is-safe-integer */ \"./node_modules/core-js/modules/es6.number.is-safe-integer.js\");\n__webpack_require__(/*! ../modules/es6.number.max-safe-integer */ \"./node_modules/core-js/modules/es6.number.max-safe-integer.js\");\n__webpack_require__(/*! ../modules/es6.number.min-safe-integer */ \"./node_modules/core-js/modules/es6.number.min-safe-integer.js\");\n__webpack_require__(/*! ../modules/es6.number.parse-float */ \"./node_modules/core-js/modules/es6.number.parse-float.js\");\n__webpack_require__(/*! ../modules/es6.number.parse-int */ \"./node_modules/core-js/modules/es6.number.parse-int.js\");\n__webpack_require__(/*! ../modules/es6.math.acosh */ \"./node_modules/core-js/modules/es6.math.acosh.js\");\n__webpack_require__(/*! ../modules/es6.math.asinh */ \"./node_modules/core-js/modules/es6.math.asinh.js\");\n__webpack_require__(/*! ../modules/es6.math.atanh */ \"./node_modules/core-js/modules/es6.math.atanh.js\");\n__webpack_require__(/*! ../modules/es6.math.cbrt */ \"./node_modules/core-js/modules/es6.math.cbrt.js\");\n__webpack_require__(/*! ../modules/es6.math.clz32 */ \"./node_modules/core-js/modules/es6.math.clz32.js\");\n__webpack_require__(/*! ../modules/es6.math.cosh */ \"./node_modules/core-js/modules/es6.math.cosh.js\");\n__webpack_require__(/*! ../modules/es6.math.expm1 */ \"./node_modules/core-js/modules/es6.math.expm1.js\");\n__webpack_require__(/*! ../modules/es6.math.fround */ \"./node_modules/core-js/modules/es6.math.fround.js\");\n__webpack_require__(/*! ../modules/es6.math.hypot */ \"./node_modules/core-js/modules/es6.math.hypot.js\");\n__webpack_require__(/*! ../modules/es6.math.imul */ \"./node_modules/core-js/modules/es6.math.imul.js\");\n__webpack_require__(/*! ../modules/es6.math.log10 */ \"./node_modules/core-js/modules/es6.math.log10.js\");\n__webpack_require__(/*! ../modules/es6.math.log1p */ \"./node_modules/core-js/modules/es6.math.log1p.js\");\n__webpack_require__(/*! ../modules/es6.math.log2 */ \"./node_modules/core-js/modules/es6.math.log2.js\");\n__webpack_require__(/*! ../modules/es6.math.sign */ \"./node_modules/core-js/modules/es6.math.sign.js\");\n__webpack_require__(/*! ../modules/es6.math.sinh */ \"./node_modules/core-js/modules/es6.math.sinh.js\");\n__webpack_require__(/*! ../modules/es6.math.tanh */ \"./node_modules/core-js/modules/es6.math.tanh.js\");\n__webpack_require__(/*! ../modules/es6.math.trunc */ \"./node_modules/core-js/modules/es6.math.trunc.js\");\n__webpack_require__(/*! ../modules/es6.string.from-code-point */ \"./node_modules/core-js/modules/es6.string.from-code-point.js\");\n__webpack_require__(/*! ../modules/es6.string.raw */ \"./node_modules/core-js/modules/es6.string.raw.js\");\n__webpack_require__(/*! ../modules/es6.string.trim */ \"./node_modules/core-js/modules/es6.string.trim.js\");\n__webpack_require__(/*! ../modules/es6.string.iterator */ \"./node_modules/core-js/modules/es6.string.iterator.js\");\n__webpack_require__(/*! ../modules/es6.string.code-point-at */ \"./node_modules/core-js/modules/es6.string.code-point-at.js\");\n__webpack_require__(/*! ../modules/es6.string.ends-with */ \"./node_modules/core-js/modules/es6.string.ends-with.js\");\n__webpack_require__(/*! ../modules/es6.string.includes */ \"./node_modules/core-js/modules/es6.string.includes.js\");\n__webpack_require__(/*! ../modules/es6.string.repeat */ \"./node_modules/core-js/modules/es6.string.repeat.js\");\n__webpack_require__(/*! ../modules/es6.string.starts-with */ \"./node_modules/core-js/modules/es6.string.starts-with.js\");\n__webpack_require__(/*! ../modules/es6.string.anchor */ \"./node_modules/core-js/modules/es6.string.anchor.js\");\n__webpack_require__(/*! ../modules/es6.string.big */ \"./node_modules/core-js/modules/es6.string.big.js\");\n__webpack_require__(/*! ../modules/es6.string.blink */ \"./node_modules/core-js/modules/es6.string.blink.js\");\n__webpack_require__(/*! ../modules/es6.string.bold */ \"./node_modules/core-js/modules/es6.string.bold.js\");\n__webpack_require__(/*! ../modules/es6.string.fixed */ \"./node_modules/core-js/modules/es6.string.fixed.js\");\n__webpack_require__(/*! ../modules/es6.string.fontcolor */ \"./node_modules/core-js/modules/es6.string.fontcolor.js\");\n__webpack_require__(/*! ../modules/es6.string.fontsize */ \"./node_modules/core-js/modules/es6.string.fontsize.js\");\n__webpack_require__(/*! ../modules/es6.string.italics */ \"./node_modules/core-js/modules/es6.string.italics.js\");\n__webpack_require__(/*! ../modules/es6.string.link */ \"./node_modules/core-js/modules/es6.string.link.js\");\n__webpack_require__(/*! ../modules/es6.string.small */ \"./node_modules/core-js/modules/es6.string.small.js\");\n__webpack_require__(/*! ../modules/es6.string.strike */ \"./node_modules/core-js/modules/es6.string.strike.js\");\n__webpack_require__(/*! ../modules/es6.string.sub */ \"./node_modules/core-js/modules/es6.string.sub.js\");\n__webpack_require__(/*! ../modules/es6.string.sup */ \"./node_modules/core-js/modules/es6.string.sup.js\");\n__webpack_require__(/*! ../modules/es6.date.now */ \"./node_modules/core-js/modules/es6.date.now.js\");\n__webpack_require__(/*! ../modules/es6.date.to-json */ \"./node_modules/core-js/modules/es6.date.to-json.js\");\n__webpack_require__(/*! ../modules/es6.date.to-iso-string */ \"./node_modules/core-js/modules/es6.date.to-iso-string.js\");\n__webpack_require__(/*! ../modules/es6.date.to-string */ \"./node_modules/core-js/modules/es6.date.to-string.js\");\n__webpack_require__(/*! ../modules/es6.date.to-primitive */ \"./node_modules/core-js/modules/es6.date.to-primitive.js\");\n__webpack_require__(/*! ../modules/es6.array.is-array */ \"./node_modules/core-js/modules/es6.array.is-array.js\");\n__webpack_require__(/*! ../modules/es6.array.from */ \"./node_modules/core-js/modules/es6.array.from.js\");\n__webpack_require__(/*! ../modules/es6.array.of */ \"./node_modules/core-js/modules/es6.array.of.js\");\n__webpack_require__(/*! ../modules/es6.array.join */ \"./node_modules/core-js/modules/es6.array.join.js\");\n__webpack_require__(/*! ../modules/es6.array.slice */ \"./node_modules/core-js/modules/es6.array.slice.js\");\n__webpack_require__(/*! ../modules/es6.array.sort */ \"./node_modules/core-js/modules/es6.array.sort.js\");\n__webpack_require__(/*! ../modules/es6.array.for-each */ \"./node_modules/core-js/modules/es6.array.for-each.js\");\n__webpack_require__(/*! ../modules/es6.array.map */ \"./node_modules/core-js/modules/es6.array.map.js\");\n__webpack_require__(/*! ../modules/es6.array.filter */ \"./node_modules/core-js/modules/es6.array.filter.js\");\n__webpack_require__(/*! ../modules/es6.array.some */ \"./node_modules/core-js/modules/es6.array.some.js\");\n__webpack_require__(/*! ../modules/es6.array.every */ \"./node_modules/core-js/modules/es6.array.every.js\");\n__webpack_require__(/*! ../modules/es6.array.reduce */ \"./node_modules/core-js/modules/es6.array.reduce.js\");\n__webpack_require__(/*! ../modules/es6.array.reduce-right */ \"./node_modules/core-js/modules/es6.array.reduce-right.js\");\n__webpack_require__(/*! ../modules/es6.array.index-of */ \"./node_modules/core-js/modules/es6.array.index-of.js\");\n__webpack_require__(/*! ../modules/es6.array.last-index-of */ \"./node_modules/core-js/modules/es6.array.last-index-of.js\");\n__webpack_require__(/*! ../modules/es6.array.copy-within */ \"./node_modules/core-js/modules/es6.array.copy-within.js\");\n__webpack_require__(/*! ../modules/es6.array.fill */ \"./node_modules/core-js/modules/es6.array.fill.js\");\n__webpack_require__(/*! ../modules/es6.array.find */ \"./node_modules/core-js/modules/es6.array.find.js\");\n__webpack_require__(/*! ../modules/es6.array.find-index */ \"./node_modules/core-js/modules/es6.array.find-index.js\");\n__webpack_require__(/*! ../modules/es6.array.species */ \"./node_modules/core-js/modules/es6.array.species.js\");\n__webpack_require__(/*! ../modules/es6.array.iterator */ \"./node_modules/core-js/modules/es6.array.iterator.js\");\n__webpack_require__(/*! ../modules/es6.regexp.constructor */ \"./node_modules/core-js/modules/es6.regexp.constructor.js\");\n__webpack_require__(/*! ../modules/es6.regexp.exec */ \"./node_modules/core-js/modules/es6.regexp.exec.js\");\n__webpack_require__(/*! ../modules/es6.regexp.to-string */ \"./node_modules/core-js/modules/es6.regexp.to-string.js\");\n__webpack_require__(/*! ../modules/es6.regexp.flags */ \"./node_modules/core-js/modules/es6.regexp.flags.js\");\n__webpack_require__(/*! ../modules/es6.regexp.match */ \"./node_modules/core-js/modules/es6.regexp.match.js\");\n__webpack_require__(/*! ../modules/es6.regexp.replace */ \"./node_modules/core-js/modules/es6.regexp.replace.js\");\n__webpack_require__(/*! ../modules/es6.regexp.search */ \"./node_modules/core-js/modules/es6.regexp.search.js\");\n__webpack_require__(/*! ../modules/es6.regexp.split */ \"./node_modules/core-js/modules/es6.regexp.split.js\");\n__webpack_require__(/*! ../modules/es6.promise */ \"./node_modules/core-js/modules/es6.promise.js\");\n__webpack_require__(/*! ../modules/es6.map */ \"./node_modules/core-js/modules/es6.map.js\");\n__webpack_require__(/*! ../modules/es6.set */ \"./node_modules/core-js/modules/es6.set.js\");\n__webpack_require__(/*! ../modules/es6.weak-map */ \"./node_modules/core-js/modules/es6.weak-map.js\");\n__webpack_require__(/*! ../modules/es6.weak-set */ \"./node_modules/core-js/modules/es6.weak-set.js\");\n__webpack_require__(/*! ../modules/es6.typed.array-buffer */ \"./node_modules/core-js/modules/es6.typed.array-buffer.js\");\n__webpack_require__(/*! ../modules/es6.typed.data-view */ \"./node_modules/core-js/modules/es6.typed.data-view.js\");\n__webpack_require__(/*! ../modules/es6.typed.int8-array */ \"./node_modules/core-js/modules/es6.typed.int8-array.js\");\n__webpack_require__(/*! ../modules/es6.typed.uint8-array */ \"./node_modules/core-js/modules/es6.typed.uint8-array.js\");\n__webpack_require__(/*! ../modules/es6.typed.uint8-clamped-array */ \"./node_modules/core-js/modules/es6.typed.uint8-clamped-array.js\");\n__webpack_require__(/*! ../modules/es6.typed.int16-array */ \"./node_modules/core-js/modules/es6.typed.int16-array.js\");\n__webpack_require__(/*! ../modules/es6.typed.uint16-array */ \"./node_modules/core-js/modules/es6.typed.uint16-array.js\");\n__webpack_require__(/*! ../modules/es6.typed.int32-array */ \"./node_modules/core-js/modules/es6.typed.int32-array.js\");\n__webpack_require__(/*! ../modules/es6.typed.uint32-array */ \"./node_modules/core-js/modules/es6.typed.uint32-array.js\");\n__webpack_require__(/*! ../modules/es6.typed.float32-array */ \"./node_modules/core-js/modules/es6.typed.float32-array.js\");\n__webpack_require__(/*! ../modules/es6.typed.float64-array */ \"./node_modules/core-js/modules/es6.typed.float64-array.js\");\n__webpack_require__(/*! ../modules/es6.reflect.apply */ \"./node_modules/core-js/modules/es6.reflect.apply.js\");\n__webpack_require__(/*! ../modules/es6.reflect.construct */ \"./node_modules/core-js/modules/es6.reflect.construct.js\");\n__webpack_require__(/*! ../modules/es6.reflect.define-property */ \"./node_modules/core-js/modules/es6.reflect.define-property.js\");\n__webpack_require__(/*! ../modules/es6.reflect.delete-property */ \"./node_modules/core-js/modules/es6.reflect.delete-property.js\");\n__webpack_require__(/*! ../modules/es6.reflect.enumerate */ \"./node_modules/core-js/modules/es6.reflect.enumerate.js\");\n__webpack_require__(/*! ../modules/es6.reflect.get */ \"./node_modules/core-js/modules/es6.reflect.get.js\");\n__webpack_require__(/*! ../modules/es6.reflect.get-own-property-descriptor */ \"./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js\");\n__webpack_require__(/*! ../modules/es6.reflect.get-prototype-of */ \"./node_modules/core-js/modules/es6.reflect.get-prototype-of.js\");\n__webpack_require__(/*! ../modules/es6.reflect.has */ \"./node_modules/core-js/modules/es6.reflect.has.js\");\n__webpack_require__(/*! ../modules/es6.reflect.is-extensible */ \"./node_modules/core-js/modules/es6.reflect.is-extensible.js\");\n__webpack_require__(/*! ../modules/es6.reflect.own-keys */ \"./node_modules/core-js/modules/es6.reflect.own-keys.js\");\n__webpack_require__(/*! ../modules/es6.reflect.prevent-extensions */ \"./node_modules/core-js/modules/es6.reflect.prevent-extensions.js\");\n__webpack_require__(/*! ../modules/es6.reflect.set */ \"./node_modules/core-js/modules/es6.reflect.set.js\");\n__webpack_require__(/*! ../modules/es6.reflect.set-prototype-of */ \"./node_modules/core-js/modules/es6.reflect.set-prototype-of.js\");\nmodule.exports = __webpack_require__(/*! ../modules/_core */ \"./node_modules/core-js/modules/_core.js\");\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/es6/index.js?");

/***/ }),

/***/ "./node_modules/core-js/fn/array/flat-map.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/fn/array/flat-map.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es7.array.flat-map */ \"./node_modules/core-js/modules/es7.array.flat-map.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/modules/_core.js\").Array.flatMap;\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/fn/array/flat-map.js?");

/***/ }),

/***/ "./node_modules/core-js/fn/array/includes.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/fn/array/includes.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es7.array.includes */ \"./node_modules/core-js/modules/es7.array.includes.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/modules/_core.js\").Array.includes;\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/fn/array/includes.js?");

/***/ }),

/***/ "./node_modules/core-js/fn/object/entries.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/fn/object/entries.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es7.object.entries */ \"./node_modules/core-js/modules/es7.object.entries.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/modules/_core.js\").Object.entries;\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/fn/object/entries.js?");

/***/ }),

/***/ "./node_modules/core-js/fn/object/get-own-property-descriptors.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js/fn/object/get-own-property-descriptors.js ***!
  \************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es7.object.get-own-property-descriptors */ \"./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/modules/_core.js\").Object.getOwnPropertyDescriptors;\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/fn/object/get-own-property-descriptors.js?");

/***/ }),

/***/ "./node_modules/core-js/fn/object/values.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/fn/object/values.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es7.object.values */ \"./node_modules/core-js/modules/es7.object.values.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/modules/_core.js\").Object.values;\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/fn/object/values.js?");

/***/ }),

/***/ "./node_modules/core-js/fn/promise/finally.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/fn/promise/finally.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n__webpack_require__(/*! ../../modules/es6.promise */ \"./node_modules/core-js/modules/es6.promise.js\");\n__webpack_require__(/*! ../../modules/es7.promise.finally */ \"./node_modules/core-js/modules/es7.promise.finally.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/modules/_core.js\").Promise[\"finally\"];\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/fn/promise/finally.js?");

/***/ }),

/***/ "./node_modules/core-js/fn/string/pad-end.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/fn/string/pad-end.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es7.string.pad-end */ \"./node_modules/core-js/modules/es7.string.pad-end.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/modules/_core.js\").String.padEnd;\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/fn/string/pad-end.js?");

/***/ }),

/***/ "./node_modules/core-js/fn/string/pad-start.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/fn/string/pad-start.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es7.string.pad-start */ \"./node_modules/core-js/modules/es7.string.pad-start.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/modules/_core.js\").String.padStart;\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/fn/string/pad-start.js?");

/***/ }),

/***/ "./node_modules/core-js/fn/string/trim-end.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/fn/string/trim-end.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es7.string.trim-right */ \"./node_modules/core-js/modules/es7.string.trim-right.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/modules/_core.js\").String.trimRight;\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/fn/string/trim-end.js?");

/***/ }),

/***/ "./node_modules/core-js/fn/string/trim-start.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/fn/string/trim-start.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es7.string.trim-left */ \"./node_modules/core-js/modules/es7.string.trim-left.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/modules/_core.js\").String.trimLeft;\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/fn/string/trim-start.js?");

/***/ }),

/***/ "./node_modules/core-js/fn/symbol/async-iterator.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/fn/symbol/async-iterator.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ \"./node_modules/core-js/modules/es7.symbol.async-iterator.js\");\nmodule.exports = (__webpack_require__(/*! ../../modules/_wks-ext */ \"./node_modules/core-js/modules/_wks-ext.js\").f)('asyncIterator');\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/fn/symbol/async-iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/library/fn/global.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/library/fn/global.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("__webpack_require__(/*! ../modules/es7.global */ \"./node_modules/core-js/library/modules/es7.global.js\");\nmodule.exports = __webpack_require__(/*! ../modules/_core */ \"./node_modules/core-js/library/modules/_core.js\").global;\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/library/fn/global.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_a-function.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************/
/***/ (function(module) {

eval("module.exports = function (it) {\n  if (typeof it != 'function') throw TypeError(it + ' is not a function!');\n  return it;\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/library/modules/_a-function.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\nmodule.exports = function (it) {\n  if (!isObject(it)) throw TypeError(it + ' is not an object!');\n  return it;\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/library/modules/_an-object.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_core.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************/
/***/ (function(module) {

eval("var core = module.exports = { version: '2.6.12' };\nif (typeof __e == 'number') __e = core; // eslint-disable-line no-undef\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/library/modules/_core.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_ctx.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// optional / simple context binding\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/library/modules/_a-function.js\");\nmodule.exports = function (fn, that, length) {\n  aFunction(fn);\n  if (that === undefined) return fn;\n  switch (length) {\n    case 1: return function (a) {\n      return fn.call(that, a);\n    };\n    case 2: return function (a, b) {\n      return fn.call(that, a, b);\n    };\n    case 3: return function (a, b, c) {\n      return fn.call(that, a, b, c);\n    };\n  }\n  return function (/* ...args */) {\n    return fn.apply(that, arguments);\n  };\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/library/modules/_ctx.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_descriptors.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// Thank's IE8 for his funny defineProperty\nmodule.exports = !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/library/modules/_fails.js\")(function () {\n  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/library/modules/_descriptors.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_dom-create.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\nvar document = (__webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\").document);\n// typeof document.createElement is 'object' in old IE\nvar is = isObject(document) && isObject(document.createElement);\nmodule.exports = function (it) {\n  return is ? document.createElement(it) : {};\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/library/modules/_dom-create.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_export.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\nvar core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/library/modules/_core.js\");\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/library/modules/_ctx.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/library/modules/_hide.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/library/modules/_has.js\");\nvar PROTOTYPE = 'prototype';\n\nvar $export = function (type, name, source) {\n  var IS_FORCED = type & $export.F;\n  var IS_GLOBAL = type & $export.G;\n  var IS_STATIC = type & $export.S;\n  var IS_PROTO = type & $export.P;\n  var IS_BIND = type & $export.B;\n  var IS_WRAP = type & $export.W;\n  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});\n  var expProto = exports[PROTOTYPE];\n  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];\n  var key, own, out;\n  if (IS_GLOBAL) source = name;\n  for (key in source) {\n    // contains in native\n    own = !IS_FORCED && target && target[key] !== undefined;\n    if (own && has(exports, key)) continue;\n    // export native or passed\n    out = own ? target[key] : source[key];\n    // prevent global pollution for namespaces\n    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]\n    // bind timers to global for call from export context\n    : IS_BIND && own ? ctx(out, global)\n    // wrap global constructors for prevent change them in library\n    : IS_WRAP && target[key] == out ? (function (C) {\n      var F = function (a, b, c) {\n        if (this instanceof C) {\n          switch (arguments.length) {\n            case 0: return new C();\n            case 1: return new C(a);\n            case 2: return new C(a, b);\n          } return new C(a, b, c);\n        } return C.apply(this, arguments);\n      };\n      F[PROTOTYPE] = C[PROTOTYPE];\n      return F;\n    // make static versions for prototype methods\n    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;\n    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%\n    if (IS_PROTO) {\n      (exports.virtual || (exports.virtual = {}))[key] = out;\n      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%\n      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);\n    }\n  }\n};\n// type bitmap\n$export.F = 1;   // forced\n$export.G = 2;   // global\n$export.S = 4;   // static\n$export.P = 8;   // proto\n$export.B = 16;  // bind\n$export.W = 32;  // wrap\n$export.U = 64;  // safe\n$export.R = 128; // real proto method for `library`\nmodule.exports = $export;\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/library/modules/_export.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_fails.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************/
/***/ (function(module) {

eval("module.exports = function (exec) {\n  try {\n    return !!exec();\n  } catch (e) {\n    return true;\n  }\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/library/modules/_fails.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_global.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************/
/***/ (function(module) {

eval("// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\nvar global = module.exports = typeof window != 'undefined' && window.Math == Math\n  ? window : typeof self != 'undefined' && self.Math == Math ? self\n  // eslint-disable-next-line no-new-func\n  : Function('return this')();\nif (typeof __g == 'number') __g = global; // eslint-disable-line no-undef\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/library/modules/_global.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_has.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_has.js ***!
  \******************************************************/
/***/ (function(module) {

eval("var hasOwnProperty = {}.hasOwnProperty;\nmodule.exports = function (it, key) {\n  return hasOwnProperty.call(it, key);\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/library/modules/_has.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_hide.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/library/modules/_property-desc.js\");\nmodule.exports = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\") ? function (object, key, value) {\n  return dP.f(object, key, createDesc(1, value));\n} : function (object, key, value) {\n  object[key] = value;\n  return object;\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/library/modules/_hide.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = !__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\") && !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/library/modules/_fails.js\")(function () {\n  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ \"./node_modules/core-js/library/modules/_dom-create.js\")('div'), 'a', { get: function () { return 7; } }).a != 7;\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/library/modules/_ie8-dom-define.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************/
/***/ (function(module) {

eval("module.exports = function (it) {\n  return typeof it === 'object' ? it !== null : typeof it === 'function';\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/library/modules/_is-object.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dp.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ \"./node_modules/core-js/library/modules/_ie8-dom-define.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/library/modules/_to-primitive.js\");\nvar dP = Object.defineProperty;\n\nexports.f = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\") ? Object.defineProperty : function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPrimitive(P, true);\n  anObject(Attributes);\n  if (IE8_DOM_DEFINE) try {\n    return dP(O, P, Attributes);\n  } catch (e) { /* empty */ }\n  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');\n  if ('value' in Attributes) O[P] = Attributes.value;\n  return O;\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/library/modules/_object-dp.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_property-desc.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************/
/***/ (function(module) {

eval("module.exports = function (bitmap, value) {\n  return {\n    enumerable: !(bitmap & 1),\n    configurable: !(bitmap & 2),\n    writable: !(bitmap & 4),\n    value: value\n  };\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/library/modules/_property-desc.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// 7.1.1 ToPrimitive(input [, PreferredType])\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\n// instead of the ES6 spec version, we didn't implement @@toPrimitive case\n// and the second argument - flag - preferred type is a string\nmodule.exports = function (it, S) {\n  if (!isObject(it)) return it;\n  var fn, val;\n  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  throw TypeError(\"Can't convert object to primitive value\");\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/library/modules/_to-primitive.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.global.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.global.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("// https://github.com/tc39/proposal-global\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\n\n$export($export.G, { global: __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\") });\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/library/modules/es7.global.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/***/ (function(module) {

eval("module.exports = function (it) {\n  if (typeof it != 'function') throw TypeError(it + ' is not a function!');\n  return it;\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_a-function.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_a-number-value.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_a-number-value.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/modules/_cof.js\");\nmodule.exports = function (it, msg) {\n  if (typeof it != 'number' && cof(it) != 'Number') throw TypeError(msg);\n  return +it;\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_a-number-value.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_add-to-unscopables.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_add-to-unscopables.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// 22.1.3.31 Array.prototype[@@unscopables]\nvar UNSCOPABLES = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('unscopables');\nvar ArrayProto = Array.prototype;\nif (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\")(ArrayProto, UNSCOPABLES, {});\nmodule.exports = function (key) {\n  ArrayProto[UNSCOPABLES][key] = true;\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_add-to-unscopables.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_advance-string-index.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_advance-string-index.js ***!
  \***************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar at = __webpack_require__(/*! ./_string-at */ \"./node_modules/core-js/modules/_string-at.js\")(true);\n\n // `AdvanceStringIndex` abstract operation\n// https://tc39.github.io/ecma262/#sec-advancestringindex\nmodule.exports = function (S, index, unicode) {\n  return index + (unicode ? at(S, index).length : 1);\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_advance-string-index.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_an-instance.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_an-instance.js ***!
  \******************************************************/
/***/ (function(module) {

eval("module.exports = function (it, Constructor, name, forbiddenField) {\n  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {\n    throw TypeError(name + ': incorrect invocation!');\n  } return it;\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_an-instance.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nmodule.exports = function (it) {\n  if (!isObject(it)) throw TypeError(it + ' is not an object!');\n  return it;\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_an-object.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_array-copy-within.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-copy-within.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)\n\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"./node_modules/core-js/modules/_to-absolute-index.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\n\nmodule.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {\n  var O = toObject(this);\n  var len = toLength(O.length);\n  var to = toAbsoluteIndex(target, len);\n  var from = toAbsoluteIndex(start, len);\n  var end = arguments.length > 2 ? arguments[2] : undefined;\n  var count = Math.min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);\n  var inc = 1;\n  if (from < to && to < from + count) {\n    inc = -1;\n    from += count - 1;\n    to += count - 1;\n  }\n  while (count-- > 0) {\n    if (from in O) O[to] = O[from];\n    else delete O[to];\n    to += inc;\n    from += inc;\n  } return O;\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_array-copy-within.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_array-fill.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_array-fill.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)\n\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"./node_modules/core-js/modules/_to-absolute-index.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nmodule.exports = function fill(value /* , start = 0, end = @length */) {\n  var O = toObject(this);\n  var length = toLength(O.length);\n  var aLen = arguments.length;\n  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);\n  var end = aLen > 2 ? arguments[2] : undefined;\n  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);\n  while (endPos > index) O[index++] = value;\n  return O;\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_array-fill.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_array-includes.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// false -> Array#indexOf\n// true  -> Array#includes\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"./node_modules/core-js/modules/_to-absolute-index.js\");\nmodule.exports = function (IS_INCLUDES) {\n  return function ($this, el, fromIndex) {\n    var O = toIObject($this);\n    var length = toLength(O.length);\n    var index = toAbsoluteIndex(fromIndex, length);\n    var value;\n    // Array#includes uses SameValueZero equality algorithm\n    // eslint-disable-next-line no-self-compare\n    if (IS_INCLUDES && el != el) while (length > index) {\n      value = O[index++];\n      // eslint-disable-next-line no-self-compare\n      if (value != value) return true;\n    // Array#indexOf ignores holes, Array#includes - not\n    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {\n      if (O[index] === el) return IS_INCLUDES || index || 0;\n    } return !IS_INCLUDES && -1;\n  };\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_array-includes.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_array-methods.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-methods.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// 0 -> Array#forEach\n// 1 -> Array#map\n// 2 -> Array#filter\n// 3 -> Array#some\n// 4 -> Array#every\n// 5 -> Array#find\n// 6 -> Array#findIndex\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/modules/_ctx.js\");\nvar IObject = __webpack_require__(/*! ./_iobject */ \"./node_modules/core-js/modules/_iobject.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar asc = __webpack_require__(/*! ./_array-species-create */ \"./node_modules/core-js/modules/_array-species-create.js\");\nmodule.exports = function (TYPE, $create) {\n  var IS_MAP = TYPE == 1;\n  var IS_FILTER = TYPE == 2;\n  var IS_SOME = TYPE == 3;\n  var IS_EVERY = TYPE == 4;\n  var IS_FIND_INDEX = TYPE == 6;\n  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;\n  var create = $create || asc;\n  return function ($this, callbackfn, that) {\n    var O = toObject($this);\n    var self = IObject(O);\n    var f = ctx(callbackfn, that, 3);\n    var length = toLength(self.length);\n    var index = 0;\n    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;\n    var val, res;\n    for (;length > index; index++) if (NO_HOLES || index in self) {\n      val = self[index];\n      res = f(val, index, O);\n      if (TYPE) {\n        if (IS_MAP) result[index] = res;   // map\n        else if (res) switch (TYPE) {\n          case 3: return true;             // some\n          case 5: return val;              // find\n          case 6: return index;            // findIndex\n          case 2: result.push(val);        // filter\n        } else if (IS_EVERY) return false; // every\n      }\n    }\n    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;\n  };\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_array-methods.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_array-reduce.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_array-reduce.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar IObject = __webpack_require__(/*! ./_iobject */ \"./node_modules/core-js/modules/_iobject.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\n\nmodule.exports = function (that, callbackfn, aLen, memo, isRight) {\n  aFunction(callbackfn);\n  var O = toObject(that);\n  var self = IObject(O);\n  var length = toLength(O.length);\n  var index = isRight ? length - 1 : 0;\n  var i = isRight ? -1 : 1;\n  if (aLen < 2) for (;;) {\n    if (index in self) {\n      memo = self[index];\n      index += i;\n      break;\n    }\n    index += i;\n    if (isRight ? index < 0 : length <= index) {\n      throw TypeError('Reduce of empty array with no initial value');\n    }\n  }\n  for (;isRight ? index >= 0 : length > index; index += i) if (index in self) {\n    memo = callbackfn(memo, self[index], index, O);\n  }\n  return memo;\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_array-reduce.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-constructor.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-constructor.js ***!
  \********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar isArray = __webpack_require__(/*! ./_is-array */ \"./node_modules/core-js/modules/_is-array.js\");\nvar SPECIES = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('species');\n\nmodule.exports = function (original) {\n  var C;\n  if (isArray(original)) {\n    C = original.constructor;\n    // cross-realm fallback\n    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;\n    if (isObject(C)) {\n      C = C[SPECIES];\n      if (C === null) C = undefined;\n    }\n  } return C === undefined ? Array : C;\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_array-species-constructor.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-create.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-create.js ***!
  \***************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// 9.4.2.3 ArraySpeciesCreate(originalArray, length)\nvar speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ \"./node_modules/core-js/modules/_array-species-constructor.js\");\n\nmodule.exports = function (original, length) {\n  return new (speciesConstructor(original))(length);\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_array-species-create.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_bind.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_bind.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar invoke = __webpack_require__(/*! ./_invoke */ \"./node_modules/core-js/modules/_invoke.js\");\nvar arraySlice = [].slice;\nvar factories = {};\n\nvar construct = function (F, len, args) {\n  if (!(len in factories)) {\n    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';\n    // eslint-disable-next-line no-new-func\n    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');\n  } return factories[len](F, args);\n};\n\nmodule.exports = Function.bind || function bind(that /* , ...args */) {\n  var fn = aFunction(this);\n  var partArgs = arraySlice.call(arguments, 1);\n  var bound = function (/* args... */) {\n    var args = partArgs.concat(arraySlice.call(arguments));\n    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);\n  };\n  if (isObject(fn.prototype)) bound.prototype = fn.prototype;\n  return bound;\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_bind.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_classof.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// getting tag from 19.1.3.6 Object.prototype.toString()\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/modules/_cof.js\");\nvar TAG = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('toStringTag');\n// ES3 wrong here\nvar ARG = cof(function () { return arguments; }()) == 'Arguments';\n\n// fallback for IE11 Script Access Denied error\nvar tryGet = function (it, key) {\n  try {\n    return it[key];\n  } catch (e) { /* empty */ }\n};\n\nmodule.exports = function (it) {\n  var O, T, B;\n  return it === undefined ? 'Undefined' : it === null ? 'Null'\n    // @@toStringTag case\n    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T\n    // builtinTag case\n    : ARG ? cof(O)\n    // ES3 arguments fallback\n    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_classof.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/***/ (function(module) {

eval("var toString = {}.toString;\n\nmodule.exports = function (it) {\n  return toString.call(it).slice(8, -1);\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_cof.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_collection-strong.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-strong.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar dP = (__webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\").f);\nvar create = __webpack_require__(/*! ./_object-create */ \"./node_modules/core-js/modules/_object-create.js\");\nvar redefineAll = __webpack_require__(/*! ./_redefine-all */ \"./node_modules/core-js/modules/_redefine-all.js\");\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/modules/_ctx.js\");\nvar anInstance = __webpack_require__(/*! ./_an-instance */ \"./node_modules/core-js/modules/_an-instance.js\");\nvar forOf = __webpack_require__(/*! ./_for-of */ \"./node_modules/core-js/modules/_for-of.js\");\nvar $iterDefine = __webpack_require__(/*! ./_iter-define */ \"./node_modules/core-js/modules/_iter-define.js\");\nvar step = __webpack_require__(/*! ./_iter-step */ \"./node_modules/core-js/modules/_iter-step.js\");\nvar setSpecies = __webpack_require__(/*! ./_set-species */ \"./node_modules/core-js/modules/_set-species.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\");\nvar fastKey = (__webpack_require__(/*! ./_meta */ \"./node_modules/core-js/modules/_meta.js\").fastKey);\nvar validate = __webpack_require__(/*! ./_validate-collection */ \"./node_modules/core-js/modules/_validate-collection.js\");\nvar SIZE = DESCRIPTORS ? '_s' : 'size';\n\nvar getEntry = function (that, key) {\n  // fast case\n  var index = fastKey(key);\n  var entry;\n  if (index !== 'F') return that._i[index];\n  // frozen object case\n  for (entry = that._f; entry; entry = entry.n) {\n    if (entry.k == key) return entry;\n  }\n};\n\nmodule.exports = {\n  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {\n    var C = wrapper(function (that, iterable) {\n      anInstance(that, C, NAME, '_i');\n      that._t = NAME;         // collection type\n      that._i = create(null); // index\n      that._f = undefined;    // first entry\n      that._l = undefined;    // last entry\n      that[SIZE] = 0;         // size\n      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);\n    });\n    redefineAll(C.prototype, {\n      // 23.1.3.1 Map.prototype.clear()\n      // 23.2.3.2 Set.prototype.clear()\n      clear: function clear() {\n        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {\n          entry.r = true;\n          if (entry.p) entry.p = entry.p.n = undefined;\n          delete data[entry.i];\n        }\n        that._f = that._l = undefined;\n        that[SIZE] = 0;\n      },\n      // 23.1.3.3 Map.prototype.delete(key)\n      // 23.2.3.4 Set.prototype.delete(value)\n      'delete': function (key) {\n        var that = validate(this, NAME);\n        var entry = getEntry(that, key);\n        if (entry) {\n          var next = entry.n;\n          var prev = entry.p;\n          delete that._i[entry.i];\n          entry.r = true;\n          if (prev) prev.n = next;\n          if (next) next.p = prev;\n          if (that._f == entry) that._f = next;\n          if (that._l == entry) that._l = prev;\n          that[SIZE]--;\n        } return !!entry;\n      },\n      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)\n      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)\n      forEach: function forEach(callbackfn /* , that = undefined */) {\n        validate(this, NAME);\n        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);\n        var entry;\n        while (entry = entry ? entry.n : this._f) {\n          f(entry.v, entry.k, this);\n          // revert to the last existing entry\n          while (entry && entry.r) entry = entry.p;\n        }\n      },\n      // 23.1.3.7 Map.prototype.has(key)\n      // 23.2.3.7 Set.prototype.has(value)\n      has: function has(key) {\n        return !!getEntry(validate(this, NAME), key);\n      }\n    });\n    if (DESCRIPTORS) dP(C.prototype, 'size', {\n      get: function () {\n        return validate(this, NAME)[SIZE];\n      }\n    });\n    return C;\n  },\n  def: function (that, key, value) {\n    var entry = getEntry(that, key);\n    var prev, index;\n    // change existing entry\n    if (entry) {\n      entry.v = value;\n    // create new entry\n    } else {\n      that._l = entry = {\n        i: index = fastKey(key, true), // <- index\n        k: key,                        // <- key\n        v: value,                      // <- value\n        p: prev = that._l,             // <- previous entry\n        n: undefined,                  // <- next entry\n        r: false                       // <- removed\n      };\n      if (!that._f) that._f = entry;\n      if (prev) prev.n = entry;\n      that[SIZE]++;\n      // add to index\n      if (index !== 'F') that._i[index] = entry;\n    } return that;\n  },\n  getEntry: getEntry,\n  setStrong: function (C, NAME, IS_MAP) {\n    // add .keys, .values, .entries, [@@iterator]\n    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11\n    $iterDefine(C, NAME, function (iterated, kind) {\n      this._t = validate(iterated, NAME); // target\n      this._k = kind;                     // kind\n      this._l = undefined;                // previous\n    }, function () {\n      var that = this;\n      var kind = that._k;\n      var entry = that._l;\n      // revert to the last existing entry\n      while (entry && entry.r) entry = entry.p;\n      // get next entry\n      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {\n        // or finish the iteration\n        that._t = undefined;\n        return step(1);\n      }\n      // return step by kind\n      if (kind == 'keys') return step(0, entry.k);\n      if (kind == 'values') return step(0, entry.v);\n      return step(0, [entry.k, entry.v]);\n    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);\n\n    // add [@@species], 23.1.2.2, 23.2.2.2\n    setSpecies(NAME);\n  }\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_collection-strong.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_collection-weak.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-weak.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar redefineAll = __webpack_require__(/*! ./_redefine-all */ \"./node_modules/core-js/modules/_redefine-all.js\");\nvar getWeak = (__webpack_require__(/*! ./_meta */ \"./node_modules/core-js/modules/_meta.js\").getWeak);\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar anInstance = __webpack_require__(/*! ./_an-instance */ \"./node_modules/core-js/modules/_an-instance.js\");\nvar forOf = __webpack_require__(/*! ./_for-of */ \"./node_modules/core-js/modules/_for-of.js\");\nvar createArrayMethod = __webpack_require__(/*! ./_array-methods */ \"./node_modules/core-js/modules/_array-methods.js\");\nvar $has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar validate = __webpack_require__(/*! ./_validate-collection */ \"./node_modules/core-js/modules/_validate-collection.js\");\nvar arrayFind = createArrayMethod(5);\nvar arrayFindIndex = createArrayMethod(6);\nvar id = 0;\n\n// fallback for uncaught frozen keys\nvar uncaughtFrozenStore = function (that) {\n  return that._l || (that._l = new UncaughtFrozenStore());\n};\nvar UncaughtFrozenStore = function () {\n  this.a = [];\n};\nvar findUncaughtFrozen = function (store, key) {\n  return arrayFind(store.a, function (it) {\n    return it[0] === key;\n  });\n};\nUncaughtFrozenStore.prototype = {\n  get: function (key) {\n    var entry = findUncaughtFrozen(this, key);\n    if (entry) return entry[1];\n  },\n  has: function (key) {\n    return !!findUncaughtFrozen(this, key);\n  },\n  set: function (key, value) {\n    var entry = findUncaughtFrozen(this, key);\n    if (entry) entry[1] = value;\n    else this.a.push([key, value]);\n  },\n  'delete': function (key) {\n    var index = arrayFindIndex(this.a, function (it) {\n      return it[0] === key;\n    });\n    if (~index) this.a.splice(index, 1);\n    return !!~index;\n  }\n};\n\nmodule.exports = {\n  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {\n    var C = wrapper(function (that, iterable) {\n      anInstance(that, C, NAME, '_i');\n      that._t = NAME;      // collection type\n      that._i = id++;      // collection id\n      that._l = undefined; // leak store for uncaught frozen objects\n      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);\n    });\n    redefineAll(C.prototype, {\n      // 23.3.3.2 WeakMap.prototype.delete(key)\n      // 23.4.3.3 WeakSet.prototype.delete(value)\n      'delete': function (key) {\n        if (!isObject(key)) return false;\n        var data = getWeak(key);\n        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);\n        return data && $has(data, this._i) && delete data[this._i];\n      },\n      // 23.3.3.4 WeakMap.prototype.has(key)\n      // 23.4.3.4 WeakSet.prototype.has(value)\n      has: function has(key) {\n        if (!isObject(key)) return false;\n        var data = getWeak(key);\n        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);\n        return data && $has(data, this._i);\n      }\n    });\n    return C;\n  },\n  def: function (that, key, value) {\n    var data = getWeak(anObject(key), true);\n    if (data === true) uncaughtFrozenStore(that).set(key, value);\n    else data[that._i] = value;\n    return that;\n  },\n  ufstore: uncaughtFrozenStore\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_collection-weak.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_collection.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_collection.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\");\nvar redefineAll = __webpack_require__(/*! ./_redefine-all */ \"./node_modules/core-js/modules/_redefine-all.js\");\nvar meta = __webpack_require__(/*! ./_meta */ \"./node_modules/core-js/modules/_meta.js\");\nvar forOf = __webpack_require__(/*! ./_for-of */ \"./node_modules/core-js/modules/_for-of.js\");\nvar anInstance = __webpack_require__(/*! ./_an-instance */ \"./node_modules/core-js/modules/_an-instance.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar $iterDetect = __webpack_require__(/*! ./_iter-detect */ \"./node_modules/core-js/modules/_iter-detect.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/modules/_set-to-string-tag.js\");\nvar inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ \"./node_modules/core-js/modules/_inherit-if-required.js\");\n\nmodule.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {\n  var Base = global[NAME];\n  var C = Base;\n  var ADDER = IS_MAP ? 'set' : 'add';\n  var proto = C && C.prototype;\n  var O = {};\n  var fixMethod = function (KEY) {\n    var fn = proto[KEY];\n    redefine(proto, KEY,\n      KEY == 'delete' ? function (a) {\n        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);\n      } : KEY == 'has' ? function has(a) {\n        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);\n      } : KEY == 'get' ? function get(a) {\n        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);\n      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }\n        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }\n    );\n  };\n  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {\n    new C().entries().next();\n  }))) {\n    // create collection constructor\n    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);\n    redefineAll(C.prototype, methods);\n    meta.NEED = true;\n  } else {\n    var instance = new C();\n    // early implementations not supports chaining\n    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;\n    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false\n    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });\n    // most early implementations doesn't supports iterables, most modern - not close it correctly\n    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new\n    // for early implementations -0 and +0 not the same\n    var BUGGY_ZERO = !IS_WEAK && fails(function () {\n      // V8 ~ Chromium 42- fails only with 5+ elements\n      var $instance = new C();\n      var index = 5;\n      while (index--) $instance[ADDER](index, index);\n      return !$instance.has(-0);\n    });\n    if (!ACCEPT_ITERABLES) {\n      C = wrapper(function (target, iterable) {\n        anInstance(target, C, NAME);\n        var that = inheritIfRequired(new Base(), target, C);\n        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);\n        return that;\n      });\n      C.prototype = proto;\n      proto.constructor = C;\n    }\n    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {\n      fixMethod('delete');\n      fixMethod('has');\n      IS_MAP && fixMethod('get');\n    }\n    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);\n    // weak collections should not contains .clear method\n    if (IS_WEAK && proto.clear) delete proto.clear;\n  }\n\n  setToStringTag(C, NAME);\n\n  O[NAME] = C;\n  $export($export.G + $export.W + $export.F * (C != Base), O);\n\n  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);\n\n  return C;\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_collection.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/***/ (function(module) {

eval("var core = module.exports = { version: '2.6.12' };\nif (typeof __e == 'number') __e = core; // eslint-disable-line no-undef\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_core.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_create-property.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_create-property.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar $defineProperty = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/modules/_property-desc.js\");\n\nmodule.exports = function (object, index, value) {\n  if (index in object) $defineProperty.f(object, index, createDesc(0, value));\n  else object[index] = value;\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_create-property.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// optional / simple context binding\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\nmodule.exports = function (fn, that, length) {\n  aFunction(fn);\n  if (that === undefined) return fn;\n  switch (length) {\n    case 1: return function (a) {\n      return fn.call(that, a);\n    };\n    case 2: return function (a, b) {\n      return fn.call(that, a, b);\n    };\n    case 3: return function (a, b, c) {\n      return fn.call(that, a, b, c);\n    };\n  }\n  return function (/* ...args */) {\n    return fn.apply(that, arguments);\n  };\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_ctx.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_date-to-iso-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_date-to-iso-string.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar getTime = Date.prototype.getTime;\nvar $toISOString = Date.prototype.toISOString;\n\nvar lz = function (num) {\n  return num > 9 ? num : '0' + num;\n};\n\n// PhantomJS / old WebKit has a broken implementations\nmodule.exports = (fails(function () {\n  return $toISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';\n}) || !fails(function () {\n  $toISOString.call(new Date(NaN));\n})) ? function toISOString() {\n  if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');\n  var d = this;\n  var y = d.getUTCFullYear();\n  var m = d.getUTCMilliseconds();\n  var s = y < 0 ? '-' : y > 9999 ? '+' : '';\n  return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +\n    '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +\n    'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +\n    ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';\n} : $toISOString;\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_date-to-iso-string.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_date-to-primitive.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_date-to-primitive.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/modules/_to-primitive.js\");\nvar NUMBER = 'number';\n\nmodule.exports = function (hint) {\n  if (hint !== 'string' && hint !== NUMBER && hint !== 'default') throw TypeError('Incorrect hint');\n  return toPrimitive(anObject(this), hint != NUMBER);\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_date-to-primitive.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/***/ (function(module) {

eval("// 7.2.1 RequireObjectCoercible(argument)\nmodule.exports = function (it) {\n  if (it == undefined) throw TypeError(\"Can't call method on  \" + it);\n  return it;\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_defined.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// Thank's IE8 for his funny defineProperty\nmodule.exports = !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_descriptors.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar document = (__webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\").document);\n// typeof document.createElement is 'object' in old IE\nvar is = isObject(document) && isObject(document.createElement);\nmodule.exports = function (it) {\n  return is ? document.createElement(it) : {};\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_dom-create.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_enum-bug-keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/***/ (function(module) {

eval("// IE 8- don't enum bug keys\nmodule.exports = (\n  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'\n).split(',');\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_enum-bug-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_enum-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-keys.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// all enumerable object keys, includes symbols\nvar getKeys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/modules/_object-keys.js\");\nvar gOPS = __webpack_require__(/*! ./_object-gops */ \"./node_modules/core-js/modules/_object-gops.js\");\nvar pIE = __webpack_require__(/*! ./_object-pie */ \"./node_modules/core-js/modules/_object-pie.js\");\nmodule.exports = function (it) {\n  var result = getKeys(it);\n  var getSymbols = gOPS.f;\n  if (getSymbols) {\n    var symbols = getSymbols(it);\n    var isEnum = pIE.f;\n    var i = 0;\n    var key;\n    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);\n  } return result;\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_enum-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/modules/_core.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\");\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/modules/_ctx.js\");\nvar PROTOTYPE = 'prototype';\n\nvar $export = function (type, name, source) {\n  var IS_FORCED = type & $export.F;\n  var IS_GLOBAL = type & $export.G;\n  var IS_STATIC = type & $export.S;\n  var IS_PROTO = type & $export.P;\n  var IS_BIND = type & $export.B;\n  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];\n  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});\n  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});\n  var key, own, out, exp;\n  if (IS_GLOBAL) source = name;\n  for (key in source) {\n    // contains in native\n    own = !IS_FORCED && target && target[key] !== undefined;\n    // export native or passed\n    out = (own ? target : source)[key];\n    // bind timers to global for call from export context\n    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;\n    // extend global\n    if (target) redefine(target, key, out, type & $export.U);\n    // export\n    if (exports[key] != out) hide(exports, key, exp);\n    if (IS_PROTO && expProto[key] != out) expProto[key] = out;\n  }\n};\nglobal.core = core;\n// type bitmap\n$export.F = 1;   // forced\n$export.G = 2;   // global\n$export.S = 4;   // static\n$export.P = 8;   // proto\n$export.B = 16;  // bind\n$export.W = 32;  // wrap\n$export.U = 64;  // safe\n$export.R = 128; // real proto method for `library`\nmodule.exports = $export;\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_export.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_fails-is-regexp.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_fails-is-regexp.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var MATCH = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('match');\nmodule.exports = function (KEY) {\n  var re = /./;\n  try {\n    '/./'[KEY](re);\n  } catch (e) {\n    try {\n      re[MATCH] = false;\n      return !'/./'[KEY](re);\n    } catch (f) { /* empty */ }\n  } return true;\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_fails-is-regexp.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/***/ (function(module) {

eval("module.exports = function (exec) {\n  try {\n    return !!exec();\n  } catch (e) {\n    return true;\n  }\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_fails.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_fix-re-wks.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_fix-re-wks.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n__webpack_require__(/*! ./es6.regexp.exec */ \"./node_modules/core-js/modules/es6.regexp.exec.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/modules/_defined.js\");\nvar wks = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\");\nvar regexpExec = __webpack_require__(/*! ./_regexp-exec */ \"./node_modules/core-js/modules/_regexp-exec.js\");\n\nvar SPECIES = wks('species');\n\nvar REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {\n  // #replace needs built-in support for named groups.\n  // #match works fine because it just return the exec results, even if it has\n  // a \"grops\" property.\n  var re = /./;\n  re.exec = function () {\n    var result = [];\n    result.groups = { a: '7' };\n    return result;\n  };\n  return ''.replace(re, '$<a>') !== '7';\n});\n\nvar SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {\n  // Chrome 51 has a buggy \"split\" implementation when RegExp#exec !== nativeExec\n  var re = /(?:)/;\n  var originalExec = re.exec;\n  re.exec = function () { return originalExec.apply(this, arguments); };\n  var result = 'ab'.split(re);\n  return result.length === 2 && result[0] === 'a' && result[1] === 'b';\n})();\n\nmodule.exports = function (KEY, length, exec) {\n  var SYMBOL = wks(KEY);\n\n  var DELEGATES_TO_SYMBOL = !fails(function () {\n    // String methods call symbol-named RegEp methods\n    var O = {};\n    O[SYMBOL] = function () { return 7; };\n    return ''[KEY](O) != 7;\n  });\n\n  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {\n    // Symbol-named RegExp methods call .exec\n    var execCalled = false;\n    var re = /a/;\n    re.exec = function () { execCalled = true; return null; };\n    if (KEY === 'split') {\n      // RegExp[@@split] doesn't call the regex's exec method, but first creates\n      // a new one. We need to return the patched regex when creating the new one.\n      re.constructor = {};\n      re.constructor[SPECIES] = function () { return re; };\n    }\n    re[SYMBOL]('');\n    return !execCalled;\n  }) : undefined;\n\n  if (\n    !DELEGATES_TO_SYMBOL ||\n    !DELEGATES_TO_EXEC ||\n    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||\n    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)\n  ) {\n    var nativeRegExpMethod = /./[SYMBOL];\n    var fns = exec(\n      defined,\n      SYMBOL,\n      ''[KEY],\n      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {\n        if (regexp.exec === regexpExec) {\n          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {\n            // The native String method already delegates to @@method (this\n            // polyfilled function), leasing to infinite recursion.\n            // We avoid it by directly calling the native @@method method.\n            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };\n          }\n          return { done: true, value: nativeMethod.call(str, regexp, arg2) };\n        }\n        return { done: false };\n      }\n    );\n    var strfn = fns[0];\n    var rxfn = fns[1];\n\n    redefine(String.prototype, KEY, strfn);\n    hide(RegExp.prototype, SYMBOL, length == 2\n      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)\n      // 21.2.5.11 RegExp.prototype[@@split](string, limit)\n      ? function (string, arg) { return rxfn.call(string, this, arg); }\n      // 21.2.5.6 RegExp.prototype[@@match](string)\n      // 21.2.5.9 RegExp.prototype[@@search](string)\n      : function (string) { return rxfn.call(string, this); }\n    );\n  }\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_fix-re-wks.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_flags.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_flags.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n// 21.2.5.3 get RegExp.prototype.flags\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nmodule.exports = function () {\n  var that = anObject(this);\n  var result = '';\n  if (that.global) result += 'g';\n  if (that.ignoreCase) result += 'i';\n  if (that.multiline) result += 'm';\n  if (that.unicode) result += 'u';\n  if (that.sticky) result += 'y';\n  return result;\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_flags.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_flatten-into-array.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_flatten-into-array.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray\nvar isArray = __webpack_require__(/*! ./_is-array */ \"./node_modules/core-js/modules/_is-array.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/modules/_ctx.js\");\nvar IS_CONCAT_SPREADABLE = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('isConcatSpreadable');\n\nfunction flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {\n  var targetIndex = start;\n  var sourceIndex = 0;\n  var mapFn = mapper ? ctx(mapper, thisArg, 3) : false;\n  var element, spreadable;\n\n  while (sourceIndex < sourceLen) {\n    if (sourceIndex in source) {\n      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];\n\n      spreadable = false;\n      if (isObject(element)) {\n        spreadable = element[IS_CONCAT_SPREADABLE];\n        spreadable = spreadable !== undefined ? !!spreadable : isArray(element);\n      }\n\n      if (spreadable && depth > 0) {\n        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;\n      } else {\n        if (targetIndex >= 0x1fffffffffffff) throw TypeError();\n        target[targetIndex] = element;\n      }\n\n      targetIndex++;\n    }\n    sourceIndex++;\n  }\n  return targetIndex;\n}\n\nmodule.exports = flattenIntoArray;\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_flatten-into-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_for-of.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_for-of.js ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/modules/_ctx.js\");\nvar call = __webpack_require__(/*! ./_iter-call */ \"./node_modules/core-js/modules/_iter-call.js\");\nvar isArrayIter = __webpack_require__(/*! ./_is-array-iter */ \"./node_modules/core-js/modules/_is-array-iter.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ \"./node_modules/core-js/modules/core.get-iterator-method.js\");\nvar BREAK = {};\nvar RETURN = {};\nvar exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {\n  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);\n  var f = ctx(fn, that, entries ? 2 : 1);\n  var index = 0;\n  var length, step, iterator, result;\n  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');\n  // fast case for arrays with default iterator\n  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {\n    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);\n    if (result === BREAK || result === RETURN) return result;\n  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {\n    result = call(iterator, f, step.value, entries);\n    if (result === BREAK || result === RETURN) return result;\n  }\n};\nexports.BREAK = BREAK;\nexports.RETURN = RETURN;\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_for-of.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_function-to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_function-to-string.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./_shared */ \"./node_modules/core-js/modules/_shared.js\")('native-function-to-string', Function.toString);\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_function-to-string.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/***/ (function(module) {

eval("// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\nvar global = module.exports = typeof window != 'undefined' && window.Math == Math\n  ? window : typeof self != 'undefined' && self.Math == Math ? self\n  // eslint-disable-next-line no-new-func\n  : Function('return this')();\nif (typeof __g == 'number') __g = global; // eslint-disable-line no-undef\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_global.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/***/ (function(module) {

eval("var hasOwnProperty = {}.hasOwnProperty;\nmodule.exports = function (it, key) {\n  return hasOwnProperty.call(it, key);\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_has.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/modules/_property-desc.js\");\nmodule.exports = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") ? function (object, key, value) {\n  return dP.f(object, key, createDesc(1, value));\n} : function (object, key, value) {\n  object[key] = value;\n  return object;\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_hide.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_html.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var document = (__webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\").document);\nmodule.exports = document && document.documentElement;\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_html.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = !__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") && !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ \"./node_modules/core-js/modules/_dom-create.js\")('div'), 'a', { get: function () { return 7; } }).a != 7;\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_ie8-dom-define.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_inherit-if-required.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_inherit-if-required.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar setPrototypeOf = (__webpack_require__(/*! ./_set-proto */ \"./node_modules/core-js/modules/_set-proto.js\").set);\nmodule.exports = function (that, target, C) {\n  var S = target.constructor;\n  var P;\n  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {\n    setPrototypeOf(that, P);\n  } return that;\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_inherit-if-required.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_invoke.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_invoke.js ***!
  \*************************************************/
/***/ (function(module) {

eval("// fast apply, http://jsperf.lnkit.com/fast-apply/5\nmodule.exports = function (fn, args, that) {\n  var un = that === undefined;\n  switch (args.length) {\n    case 0: return un ? fn()\n                      : fn.call(that);\n    case 1: return un ? fn(args[0])\n                      : fn.call(that, args[0]);\n    case 2: return un ? fn(args[0], args[1])\n                      : fn.call(that, args[0], args[1]);\n    case 3: return un ? fn(args[0], args[1], args[2])\n                      : fn.call(that, args[0], args[1], args[2]);\n    case 4: return un ? fn(args[0], args[1], args[2], args[3])\n                      : fn.call(that, args[0], args[1], args[2], args[3]);\n  } return fn.apply(that, args);\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_invoke.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_iobject.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// fallback for non-array-like ES3 and non-enumerable old V8 strings\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/modules/_cof.js\");\n// eslint-disable-next-line no-prototype-builtins\nmodule.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {\n  return cof(it) == 'String' ? it.split('') : Object(it);\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_iobject.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_is-array-iter.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array-iter.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// check on default Array iterator\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/modules/_iterators.js\");\nvar ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('iterator');\nvar ArrayProto = Array.prototype;\n\nmodule.exports = function (it) {\n  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_is-array-iter.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_is-array.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// 7.2.2 IsArray(argument)\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/modules/_cof.js\");\nmodule.exports = Array.isArray || function isArray(arg) {\n  return cof(arg) == 'Array';\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_is-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_is-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-integer.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// 20.1.2.3 Number.isInteger(number)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar floor = Math.floor;\nmodule.exports = function isInteger(it) {\n  return !isObject(it) && isFinite(it) && floor(it) === it;\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_is-integer.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/***/ (function(module) {

eval("module.exports = function (it) {\n  return typeof it === 'object' ? it !== null : typeof it === 'function';\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_is-object.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_is-regexp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-regexp.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// 7.2.8 IsRegExp(argument)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/modules/_cof.js\");\nvar MATCH = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('match');\nmodule.exports = function (it) {\n  var isRegExp;\n  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_is-regexp.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-call.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-call.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// call something on iterator step with safe closing on error\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nmodule.exports = function (iterator, fn, value, entries) {\n  try {\n    return entries ? fn(anObject(value)[0], value[1]) : fn(value);\n  // 7.4.6 IteratorClose(iterator, completion)\n  } catch (e) {\n    var ret = iterator['return'];\n    if (ret !== undefined) anObject(ret.call(iterator));\n    throw e;\n  }\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_iter-call.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-create.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar create = __webpack_require__(/*! ./_object-create */ \"./node_modules/core-js/modules/_object-create.js\");\nvar descriptor = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/modules/_property-desc.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/modules/_set-to-string-tag.js\");\nvar IteratorPrototype = {};\n\n// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()\n__webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\")(IteratorPrototype, __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('iterator'), function () { return this; });\n\nmodule.exports = function (Constructor, NAME, next) {\n  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });\n  setToStringTag(Constructor, NAME + ' Iterator');\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_iter-create.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-define.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-define.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar LIBRARY = __webpack_require__(/*! ./_library */ \"./node_modules/core-js/modules/_library.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\");\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/modules/_iterators.js\");\nvar $iterCreate = __webpack_require__(/*! ./_iter-create */ \"./node_modules/core-js/modules/_iter-create.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/modules/_set-to-string-tag.js\");\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/core-js/modules/_object-gpo.js\");\nvar ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('iterator');\nvar BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`\nvar FF_ITERATOR = '@@iterator';\nvar KEYS = 'keys';\nvar VALUES = 'values';\n\nvar returnThis = function () { return this; };\n\nmodule.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {\n  $iterCreate(Constructor, NAME, next);\n  var getMethod = function (kind) {\n    if (!BUGGY && kind in proto) return proto[kind];\n    switch (kind) {\n      case KEYS: return function keys() { return new Constructor(this, kind); };\n      case VALUES: return function values() { return new Constructor(this, kind); };\n    } return function entries() { return new Constructor(this, kind); };\n  };\n  var TAG = NAME + ' Iterator';\n  var DEF_VALUES = DEFAULT == VALUES;\n  var VALUES_BUG = false;\n  var proto = Base.prototype;\n  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];\n  var $default = $native || getMethod(DEFAULT);\n  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;\n  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;\n  var methods, key, IteratorPrototype;\n  // Fix native\n  if ($anyNative) {\n    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));\n    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {\n      // Set @@toStringTag to native iterators\n      setToStringTag(IteratorPrototype, TAG, true);\n      // fix for some old engines\n      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);\n    }\n  }\n  // fix Array#{values, @@iterator}.name in V8 / FF\n  if (DEF_VALUES && $native && $native.name !== VALUES) {\n    VALUES_BUG = true;\n    $default = function values() { return $native.call(this); };\n  }\n  // Define iterator\n  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {\n    hide(proto, ITERATOR, $default);\n  }\n  // Plug for library\n  Iterators[NAME] = $default;\n  Iterators[TAG] = returnThis;\n  if (DEFAULT) {\n    methods = {\n      values: DEF_VALUES ? $default : getMethod(VALUES),\n      keys: IS_SET ? $default : getMethod(KEYS),\n      entries: $entries\n    };\n    if (FORCED) for (key in methods) {\n      if (!(key in proto)) redefine(proto, key, methods[key]);\n    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);\n  }\n  return methods;\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_iter-define.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-detect.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-detect.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('iterator');\nvar SAFE_CLOSING = false;\n\ntry {\n  var riter = [7][ITERATOR]();\n  riter['return'] = function () { SAFE_CLOSING = true; };\n  // eslint-disable-next-line no-throw-literal\n  Array.from(riter, function () { throw 2; });\n} catch (e) { /* empty */ }\n\nmodule.exports = function (exec, skipClosing) {\n  if (!skipClosing && !SAFE_CLOSING) return false;\n  var safe = false;\n  try {\n    var arr = [7];\n    var iter = arr[ITERATOR]();\n    iter.next = function () { return { done: safe = true }; };\n    arr[ITERATOR] = function () { return iter; };\n    exec(arr);\n  } catch (e) { /* empty */ }\n  return safe;\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_iter-detect.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-step.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-step.js ***!
  \****************************************************/
/***/ (function(module) {

eval("module.exports = function (done, value) {\n  return { value: value, done: !!done };\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_iter-step.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_iterators.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \****************************************************/
/***/ (function(module) {

eval("module.exports = {};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_iterators.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/***/ (function(module) {

eval("module.exports = false;\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_library.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_math-expm1.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-expm1.js ***!
  \*****************************************************/
/***/ (function(module) {

eval("// 20.2.2.14 Math.expm1(x)\nvar $expm1 = Math.expm1;\nmodule.exports = (!$expm1\n  // Old FF bug\n  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168\n  // Tor Browser bug\n  || $expm1(-2e-17) != -2e-17\n) ? function expm1(x) {\n  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;\n} : $expm1;\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_math-expm1.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_math-fround.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_math-fround.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// 20.2.2.16 Math.fround(x)\nvar sign = __webpack_require__(/*! ./_math-sign */ \"./node_modules/core-js/modules/_math-sign.js\");\nvar pow = Math.pow;\nvar EPSILON = pow(2, -52);\nvar EPSILON32 = pow(2, -23);\nvar MAX32 = pow(2, 127) * (2 - EPSILON32);\nvar MIN32 = pow(2, -126);\n\nvar roundTiesToEven = function (n) {\n  return n + 1 / EPSILON - 1 / EPSILON;\n};\n\nmodule.exports = Math.fround || function fround(x) {\n  var $abs = Math.abs(x);\n  var $sign = sign(x);\n  var a, result;\n  if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;\n  a = (1 + EPSILON32 / EPSILON) * $abs;\n  result = a - (a - $abs);\n  // eslint-disable-next-line no-self-compare\n  if (result > MAX32 || result != result) return $sign * Infinity;\n  return $sign * result;\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_math-fround.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_math-log1p.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-log1p.js ***!
  \*****************************************************/
/***/ (function(module) {

eval("// 20.2.2.20 Math.log1p(x)\nmodule.exports = Math.log1p || function log1p(x) {\n  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_math-log1p.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_math-sign.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-sign.js ***!
  \****************************************************/
/***/ (function(module) {

eval("// 20.2.2.28 Math.sign(x)\nmodule.exports = Math.sign || function sign(x) {\n  // eslint-disable-next-line no-self-compare\n  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_math-sign.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_meta.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_meta.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var META = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/modules/_uid.js\")('meta');\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar setDesc = (__webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\").f);\nvar id = 0;\nvar isExtensible = Object.isExtensible || function () {\n  return true;\n};\nvar FREEZE = !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  return isExtensible(Object.preventExtensions({}));\n});\nvar setMeta = function (it) {\n  setDesc(it, META, { value: {\n    i: 'O' + ++id, // object ID\n    w: {}          // weak collections IDs\n  } });\n};\nvar fastKey = function (it, create) {\n  // return primitive with prefix\n  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;\n  if (!has(it, META)) {\n    // can't set metadata to uncaught frozen object\n    if (!isExtensible(it)) return 'F';\n    // not necessary to add metadata\n    if (!create) return 'E';\n    // add missing metadata\n    setMeta(it);\n  // return object ID\n  } return it[META].i;\n};\nvar getWeak = function (it, create) {\n  if (!has(it, META)) {\n    // can't set metadata to uncaught frozen object\n    if (!isExtensible(it)) return true;\n    // not necessary to add metadata\n    if (!create) return false;\n    // add missing metadata\n    setMeta(it);\n  // return hash weak collections IDs\n  } return it[META].w;\n};\n// add metadata on freeze-family methods calling\nvar onFreeze = function (it) {\n  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);\n  return it;\n};\nvar meta = module.exports = {\n  KEY: META,\n  NEED: false,\n  fastKey: fastKey,\n  getWeak: getWeak,\n  onFreeze: onFreeze\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_meta.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_microtask.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_microtask.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar macrotask = (__webpack_require__(/*! ./_task */ \"./node_modules/core-js/modules/_task.js\").set);\nvar Observer = global.MutationObserver || global.WebKitMutationObserver;\nvar process = global.process;\nvar Promise = global.Promise;\nvar isNode = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/modules/_cof.js\")(process) == 'process';\n\nmodule.exports = function () {\n  var head, last, notify;\n\n  var flush = function () {\n    var parent, fn;\n    if (isNode && (parent = process.domain)) parent.exit();\n    while (head) {\n      fn = head.fn;\n      head = head.next;\n      try {\n        fn();\n      } catch (e) {\n        if (head) notify();\n        else last = undefined;\n        throw e;\n      }\n    } last = undefined;\n    if (parent) parent.enter();\n  };\n\n  // Node.js\n  if (isNode) {\n    notify = function () {\n      process.nextTick(flush);\n    };\n  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339\n  } else if (Observer && !(global.navigator && global.navigator.standalone)) {\n    var toggle = true;\n    var node = document.createTextNode('');\n    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new\n    notify = function () {\n      node.data = toggle = !toggle;\n    };\n  // environments with maybe non-completely correct, but existent Promise\n  } else if (Promise && Promise.resolve) {\n    // Promise.resolve without an argument throws an error in LG WebOS 2\n    var promise = Promise.resolve(undefined);\n    notify = function () {\n      promise.then(flush);\n    };\n  // for other environments - macrotask based on:\n  // - setImmediate\n  // - MessageChannel\n  // - window.postMessag\n  // - onreadystatechange\n  // - setTimeout\n  } else {\n    notify = function () {\n      // strange IE + webpack dev server bug - use .call(global)\n      macrotask.call(global, flush);\n    };\n  }\n\n  return function (fn) {\n    var task = { fn: fn, next: undefined };\n    if (last) last.next = task;\n    if (!head) {\n      head = task;\n      notify();\n    } last = task;\n  };\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_microtask.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_new-promise-capability.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/_new-promise-capability.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n// 25.4.1.5 NewPromiseCapability(C)\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\n\nfunction PromiseCapability(C) {\n  var resolve, reject;\n  this.promise = new C(function ($$resolve, $$reject) {\n    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');\n    resolve = $$resolve;\n    reject = $$reject;\n  });\n  this.resolve = aFunction(resolve);\n  this.reject = aFunction(reject);\n}\n\nmodule.exports.f = function (C) {\n  return new PromiseCapability(C);\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_new-promise-capability.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-assign.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-assign.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n// 19.1.2.1 Object.assign(target, source, ...)\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\");\nvar getKeys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/modules/_object-keys.js\");\nvar gOPS = __webpack_require__(/*! ./_object-gops */ \"./node_modules/core-js/modules/_object-gops.js\");\nvar pIE = __webpack_require__(/*! ./_object-pie */ \"./node_modules/core-js/modules/_object-pie.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar IObject = __webpack_require__(/*! ./_iobject */ \"./node_modules/core-js/modules/_iobject.js\");\nvar $assign = Object.assign;\n\n// should work with symbols and should have deterministic property order (V8 bug)\nmodule.exports = !$assign || __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  var A = {};\n  var B = {};\n  // eslint-disable-next-line no-undef\n  var S = Symbol();\n  var K = 'abcdefghijklmnopqrst';\n  A[S] = 7;\n  K.split('').forEach(function (k) { B[k] = k; });\n  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;\n}) ? function assign(target, source) { // eslint-disable-line no-unused-vars\n  var T = toObject(target);\n  var aLen = arguments.length;\n  var index = 1;\n  var getSymbols = gOPS.f;\n  var isEnum = pIE.f;\n  while (aLen > index) {\n    var S = IObject(arguments[index++]);\n    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);\n    var length = keys.length;\n    var j = 0;\n    var key;\n    while (length > j) {\n      key = keys[j++];\n      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];\n    }\n  } return T;\n} : $assign;\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_object-assign.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-create.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar dPs = __webpack_require__(/*! ./_object-dps */ \"./node_modules/core-js/modules/_object-dps.js\");\nvar enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ \"./node_modules/core-js/modules/_enum-bug-keys.js\");\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ \"./node_modules/core-js/modules/_shared-key.js\")('IE_PROTO');\nvar Empty = function () { /* empty */ };\nvar PROTOTYPE = 'prototype';\n\n// Create object with fake `null` prototype: use iframe Object with cleared prototype\nvar createDict = function () {\n  // Thrash, waste and sodomy: IE GC bug\n  var iframe = __webpack_require__(/*! ./_dom-create */ \"./node_modules/core-js/modules/_dom-create.js\")('iframe');\n  var i = enumBugKeys.length;\n  var lt = '<';\n  var gt = '>';\n  var iframeDocument;\n  iframe.style.display = 'none';\n  (__webpack_require__(/*! ./_html */ \"./node_modules/core-js/modules/_html.js\").appendChild)(iframe);\n  iframe.src = 'javascript:'; // eslint-disable-line no-script-url\n  // createDict = iframe.contentWindow.Object;\n  // html.removeChild(iframe);\n  iframeDocument = iframe.contentWindow.document;\n  iframeDocument.open();\n  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);\n  iframeDocument.close();\n  createDict = iframeDocument.F;\n  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];\n  return createDict();\n};\n\nmodule.exports = Object.create || function create(O, Properties) {\n  var result;\n  if (O !== null) {\n    Empty[PROTOTYPE] = anObject(O);\n    result = new Empty();\n    Empty[PROTOTYPE] = null;\n    // add \"__proto__\" for Object.getPrototypeOf polyfill\n    result[IE_PROTO] = O;\n  } else result = createDict();\n  return Properties === undefined ? result : dPs(result, Properties);\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_object-create.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ \"./node_modules/core-js/modules/_ie8-dom-define.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/modules/_to-primitive.js\");\nvar dP = Object.defineProperty;\n\nexports.f = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") ? Object.defineProperty : function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPrimitive(P, true);\n  anObject(Attributes);\n  if (IE8_DOM_DEFINE) try {\n    return dP(O, P, Attributes);\n  } catch (e) { /* empty */ }\n  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');\n  if ('value' in Attributes) O[P] = Attributes.value;\n  return O;\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_object-dp.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-dps.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar getKeys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/modules/_object-keys.js\");\n\nmodule.exports = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") ? Object.defineProperties : function defineProperties(O, Properties) {\n  anObject(O);\n  var keys = getKeys(Properties);\n  var length = keys.length;\n  var i = 0;\n  var P;\n  while (length > i) dP.f(O, P = keys[i++], Properties[P]);\n  return O;\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_object-dps.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopd.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopd.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("var pIE = __webpack_require__(/*! ./_object-pie */ \"./node_modules/core-js/modules/_object-pie.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/modules/_property-desc.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/modules/_to-primitive.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ \"./node_modules/core-js/modules/_ie8-dom-define.js\");\nvar gOPD = Object.getOwnPropertyDescriptor;\n\nexports.f = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") ? gOPD : function getOwnPropertyDescriptor(O, P) {\n  O = toIObject(O);\n  P = toPrimitive(P, true);\n  if (IE8_DOM_DEFINE) try {\n    return gOPD(O, P);\n  } catch (e) { /* empty */ }\n  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_object-gopd.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn-ext.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn-ext.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar gOPN = (__webpack_require__(/*! ./_object-gopn */ \"./node_modules/core-js/modules/_object-gopn.js\").f);\nvar toString = {}.toString;\n\nvar windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames\n  ? Object.getOwnPropertyNames(window) : [];\n\nvar getWindowNames = function (it) {\n  try {\n    return gOPN(it);\n  } catch (e) {\n    return windowNames.slice();\n  }\n};\n\nmodule.exports.f = function getOwnPropertyNames(it) {\n  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_object-gopn-ext.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)\nvar $keys = __webpack_require__(/*! ./_object-keys-internal */ \"./node_modules/core-js/modules/_object-keys-internal.js\");\nvar hiddenKeys = (__webpack_require__(/*! ./_enum-bug-keys */ \"./node_modules/core-js/modules/_enum-bug-keys.js\").concat)('length', 'prototype');\n\nexports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {\n  return $keys(O, hiddenKeys);\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_object-gopn.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gops.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gops.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports) {

eval("exports.f = Object.getOwnPropertySymbols;\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_object-gops.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gpo.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ \"./node_modules/core-js/modules/_shared-key.js\")('IE_PROTO');\nvar ObjectProto = Object.prototype;\n\nmodule.exports = Object.getPrototypeOf || function (O) {\n  O = toObject(O);\n  if (has(O, IE_PROTO)) return O[IE_PROTO];\n  if (typeof O.constructor == 'function' && O instanceof O.constructor) {\n    return O.constructor.prototype;\n  } return O instanceof Object ? ObjectProto : null;\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_object-gpo.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys-internal.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar arrayIndexOf = __webpack_require__(/*! ./_array-includes */ \"./node_modules/core-js/modules/_array-includes.js\")(false);\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ \"./node_modules/core-js/modules/_shared-key.js\")('IE_PROTO');\n\nmodule.exports = function (object, names) {\n  var O = toIObject(object);\n  var i = 0;\n  var result = [];\n  var key;\n  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);\n  // Don't enum bug & hidden keys\n  while (names.length > i) if (has(O, key = names[i++])) {\n    ~arrayIndexOf(result, key) || result.push(key);\n  }\n  return result;\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_object-keys-internal.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// 19.1.2.14 / 15.2.3.14 Object.keys(O)\nvar $keys = __webpack_require__(/*! ./_object-keys-internal */ \"./node_modules/core-js/modules/_object-keys-internal.js\");\nvar enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ \"./node_modules/core-js/modules/_enum-bug-keys.js\");\n\nmodule.exports = Object.keys || function keys(O) {\n  return $keys(O, enumBugKeys);\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_object-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-pie.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-pie.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports) {

eval("exports.f = {}.propertyIsEnumerable;\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_object-pie.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-sap.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-sap.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// most Object methods by ES6 should accept primitives\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/modules/_core.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nmodule.exports = function (KEY, exec) {\n  var fn = (core.Object || {})[KEY] || Object[KEY];\n  var exp = {};\n  exp[KEY] = exec(fn);\n  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_object-sap.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-to-array.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-to-array.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\");\nvar getKeys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/modules/_object-keys.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar isEnum = (__webpack_require__(/*! ./_object-pie */ \"./node_modules/core-js/modules/_object-pie.js\").f);\nmodule.exports = function (isEntries) {\n  return function (it) {\n    var O = toIObject(it);\n    var keys = getKeys(O);\n    var length = keys.length;\n    var i = 0;\n    var result = [];\n    var key;\n    while (length > i) {\n      key = keys[i++];\n      if (!DESCRIPTORS || isEnum.call(O, key)) {\n        result.push(isEntries ? [key, O[key]] : O[key]);\n      }\n    }\n    return result;\n  };\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_object-to-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_own-keys.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_own-keys.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// all object keys, includes non-enumerable and symbols\nvar gOPN = __webpack_require__(/*! ./_object-gopn */ \"./node_modules/core-js/modules/_object-gopn.js\");\nvar gOPS = __webpack_require__(/*! ./_object-gops */ \"./node_modules/core-js/modules/_object-gops.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar Reflect = (__webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\").Reflect);\nmodule.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {\n  var keys = gOPN.f(anObject(it));\n  var getSymbols = gOPS.f;\n  return getSymbols ? keys.concat(getSymbols(it)) : keys;\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_own-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_parse-float.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_parse-float.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var $parseFloat = (__webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\").parseFloat);\nvar $trim = (__webpack_require__(/*! ./_string-trim */ \"./node_modules/core-js/modules/_string-trim.js\").trim);\n\nmodule.exports = 1 / $parseFloat(__webpack_require__(/*! ./_string-ws */ \"./node_modules/core-js/modules/_string-ws.js\") + '-0') !== -Infinity ? function parseFloat(str) {\n  var string = $trim(String(str), 3);\n  var result = $parseFloat(string);\n  return result === 0 && string.charAt(0) == '-' ? -0 : result;\n} : $parseFloat;\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_parse-float.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_parse-int.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_parse-int.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var $parseInt = (__webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\").parseInt);\nvar $trim = (__webpack_require__(/*! ./_string-trim */ \"./node_modules/core-js/modules/_string-trim.js\").trim);\nvar ws = __webpack_require__(/*! ./_string-ws */ \"./node_modules/core-js/modules/_string-ws.js\");\nvar hex = /^[-+]?0[xX]/;\n\nmodule.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {\n  var string = $trim(String(str), 3);\n  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));\n} : $parseInt;\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_parse-int.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_perform.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_perform.js ***!
  \**************************************************/
/***/ (function(module) {

eval("module.exports = function (exec) {\n  try {\n    return { e: false, v: exec() };\n  } catch (e) {\n    return { e: true, v: e };\n  }\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_perform.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_promise-resolve.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_promise-resolve.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ \"./node_modules/core-js/modules/_new-promise-capability.js\");\n\nmodule.exports = function (C, x) {\n  anObject(C);\n  if (isObject(x) && x.constructor === C) return x;\n  var promiseCapability = newPromiseCapability.f(C);\n  var resolve = promiseCapability.resolve;\n  resolve(x);\n  return promiseCapability.promise;\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_promise-resolve.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/***/ (function(module) {

eval("module.exports = function (bitmap, value) {\n  return {\n    enumerable: !(bitmap & 1),\n    configurable: !(bitmap & 2),\n    writable: !(bitmap & 4),\n    value: value\n  };\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_property-desc.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_redefine-all.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine-all.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\");\nmodule.exports = function (target, src, safe) {\n  for (var key in src) redefine(target, key, src[key], safe);\n  return target;\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_redefine-all.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar SRC = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/modules/_uid.js\")('src');\nvar $toString = __webpack_require__(/*! ./_function-to-string */ \"./node_modules/core-js/modules/_function-to-string.js\");\nvar TO_STRING = 'toString';\nvar TPL = ('' + $toString).split(TO_STRING);\n\n(__webpack_require__(/*! ./_core */ \"./node_modules/core-js/modules/_core.js\").inspectSource) = function (it) {\n  return $toString.call(it);\n};\n\n(module.exports = function (O, key, val, safe) {\n  var isFunction = typeof val == 'function';\n  if (isFunction) has(val, 'name') || hide(val, 'name', key);\n  if (O[key] === val) return;\n  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));\n  if (O === global) {\n    O[key] = val;\n  } else if (!safe) {\n    delete O[key];\n    hide(O, key, val);\n  } else if (O[key]) {\n    O[key] = val;\n  } else {\n    hide(O, key, val);\n  }\n// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative\n})(Function.prototype, TO_STRING, function toString() {\n  return typeof this == 'function' && this[SRC] || $toString.call(this);\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_redefine.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_regexp-exec-abstract.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_regexp-exec-abstract.js ***!
  \***************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar classof = __webpack_require__(/*! ./_classof */ \"./node_modules/core-js/modules/_classof.js\");\nvar builtinExec = RegExp.prototype.exec;\n\n // `RegExpExec` abstract operation\n// https://tc39.github.io/ecma262/#sec-regexpexec\nmodule.exports = function (R, S) {\n  var exec = R.exec;\n  if (typeof exec === 'function') {\n    var result = exec.call(R, S);\n    if (typeof result !== 'object') {\n      throw new TypeError('RegExp exec method returned something other than an Object or null');\n    }\n    return result;\n  }\n  if (classof(R) !== 'RegExp') {\n    throw new TypeError('RegExp#exec called on incompatible receiver');\n  }\n  return builtinExec.call(R, S);\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_regexp-exec-abstract.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_regexp-exec.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_regexp-exec.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar regexpFlags = __webpack_require__(/*! ./_flags */ \"./node_modules/core-js/modules/_flags.js\");\n\nvar nativeExec = RegExp.prototype.exec;\n// This always refers to the native implementation, because the\n// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,\n// which loads this file before patching the method.\nvar nativeReplace = String.prototype.replace;\n\nvar patchedExec = nativeExec;\n\nvar LAST_INDEX = 'lastIndex';\n\nvar UPDATES_LAST_INDEX_WRONG = (function () {\n  var re1 = /a/,\n      re2 = /b*/g;\n  nativeExec.call(re1, 'a');\n  nativeExec.call(re2, 'a');\n  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;\n})();\n\n// nonparticipating capturing group, copied from es5-shim's String#split patch.\nvar NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;\n\nvar PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;\n\nif (PATCH) {\n  patchedExec = function exec(str) {\n    var re = this;\n    var lastIndex, reCopy, match, i;\n\n    if (NPCG_INCLUDED) {\n      reCopy = new RegExp('^' + re.source + '$(?!\\\\s)', regexpFlags.call(re));\n    }\n    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];\n\n    match = nativeExec.call(re, str);\n\n    if (UPDATES_LAST_INDEX_WRONG && match) {\n      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;\n    }\n    if (NPCG_INCLUDED && match && match.length > 1) {\n      // Fix browsers whose `exec` methods don't consistently return `undefined`\n      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/\n      // eslint-disable-next-line no-loop-func\n      nativeReplace.call(match[0], reCopy, function () {\n        for (i = 1; i < arguments.length - 2; i++) {\n          if (arguments[i] === undefined) match[i] = undefined;\n        }\n      });\n    }\n\n    return match;\n  };\n}\n\nmodule.exports = patchedExec;\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_regexp-exec.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_same-value.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_same-value.js ***!
  \*****************************************************/
/***/ (function(module) {

eval("// 7.2.9 SameValue(x, y)\nmodule.exports = Object.is || function is(x, y) {\n  // eslint-disable-next-line no-self-compare\n  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_same-value.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_set-proto.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_set-proto.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// Works with __proto__ only. Old v8 can't work with null proto objects.\n/* eslint-disable no-proto */\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar check = function (O, proto) {\n  anObject(O);\n  if (!isObject(proto) && proto !== null) throw TypeError(proto + \": can't set as prototype!\");\n};\nmodule.exports = {\n  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line\n    function (test, buggy, set) {\n      try {\n        set = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/modules/_ctx.js\")(Function.call, (__webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/modules/_object-gopd.js\").f)(Object.prototype, '__proto__').set, 2);\n        set(test, []);\n        buggy = !(test instanceof Array);\n      } catch (e) { buggy = true; }\n      return function setPrototypeOf(O, proto) {\n        check(O, proto);\n        if (buggy) O.__proto__ = proto;\n        else set(O, proto);\n        return O;\n      };\n    }({}, false) : undefined),\n  check: check\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_set-proto.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_set-species.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_set-species.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\");\nvar SPECIES = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('species');\n\nmodule.exports = function (KEY) {\n  var C = global[KEY];\n  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {\n    configurable: true,\n    get: function () { return this; }\n  });\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_set-species.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_set-to-string-tag.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var def = (__webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\").f);\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar TAG = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('toStringTag');\n\nmodule.exports = function (it, tag, stat) {\n  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_set-to-string-tag.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_shared-key.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var shared = __webpack_require__(/*! ./_shared */ \"./node_modules/core-js/modules/_shared.js\")('keys');\nvar uid = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/modules/_uid.js\");\nmodule.exports = function (key) {\n  return shared[key] || (shared[key] = uid(key));\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_shared-key.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/modules/_core.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar SHARED = '__core-js_shared__';\nvar store = global[SHARED] || (global[SHARED] = {});\n\n(module.exports = function (key, value) {\n  return store[key] || (store[key] = value !== undefined ? value : {});\n})('versions', []).push({\n  version: core.version,\n  mode: __webpack_require__(/*! ./_library */ \"./node_modules/core-js/modules/_library.js\") ? 'pure' : 'global',\n  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_shared.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_species-constructor.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_species-constructor.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// 7.3.20 SpeciesConstructor(O, defaultConstructor)\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\nvar SPECIES = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('species');\nmodule.exports = function (O, D) {\n  var C = anObject(O).constructor;\n  var S;\n  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_species-constructor.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_strict-method.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_strict-method.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\n\nmodule.exports = function (method, arg) {\n  return !!method && fails(function () {\n    // eslint-disable-next-line no-useless-call\n    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);\n  });\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_strict-method.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_string-at.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-at.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/modules/_to-integer.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/modules/_defined.js\");\n// true  -> String#at\n// false -> String#codePointAt\nmodule.exports = function (TO_STRING) {\n  return function (that, pos) {\n    var s = String(defined(that));\n    var i = toInteger(pos);\n    var l = s.length;\n    var a, b;\n    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;\n    a = s.charCodeAt(i);\n    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff\n      ? TO_STRING ? s.charAt(i) : a\n      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;\n  };\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_string-at.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_string-context.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_string-context.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// helper for String#{startsWith, endsWith, includes}\nvar isRegExp = __webpack_require__(/*! ./_is-regexp */ \"./node_modules/core-js/modules/_is-regexp.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/modules/_defined.js\");\n\nmodule.exports = function (that, searchString, NAME) {\n  if (isRegExp(searchString)) throw TypeError('String#' + NAME + \" doesn't accept regex!\");\n  return String(defined(that));\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_string-context.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_string-html.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_string-html.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/modules/_defined.js\");\nvar quot = /\"/g;\n// B.2.3.2.1 CreateHTML(string, tag, attribute, value)\nvar createHTML = function (string, tag, attribute, value) {\n  var S = String(defined(string));\n  var p1 = '<' + tag;\n  if (attribute !== '') p1 += ' ' + attribute + '=\"' + String(value).replace(quot, '&quot;') + '\"';\n  return p1 + '>' + S + '</' + tag + '>';\n};\nmodule.exports = function (NAME, exec) {\n  var O = {};\n  O[NAME] = exec(createHTML);\n  $export($export.P + $export.F * fails(function () {\n    var test = ''[NAME]('\"');\n    return test !== test.toLowerCase() || test.split('\"').length > 3;\n  }), 'String', O);\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_string-html.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_string-pad.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-pad.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// https://github.com/tc39/proposal-string-pad-start-end\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar repeat = __webpack_require__(/*! ./_string-repeat */ \"./node_modules/core-js/modules/_string-repeat.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/modules/_defined.js\");\n\nmodule.exports = function (that, maxLength, fillString, left) {\n  var S = String(defined(that));\n  var stringLength = S.length;\n  var fillStr = fillString === undefined ? ' ' : String(fillString);\n  var intMaxLength = toLength(maxLength);\n  if (intMaxLength <= stringLength || fillStr == '') return S;\n  var fillLen = intMaxLength - stringLength;\n  var stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));\n  if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);\n  return left ? stringFiller + S : S + stringFiller;\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_string-pad.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_string-repeat.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_string-repeat.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/modules/_to-integer.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/modules/_defined.js\");\n\nmodule.exports = function repeat(count) {\n  var str = String(defined(this));\n  var res = '';\n  var n = toInteger(count);\n  if (n < 0 || n == Infinity) throw RangeError(\"Count can't be negative\");\n  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;\n  return res;\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_string-repeat.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_string-trim.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_string-trim.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/modules/_defined.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar spaces = __webpack_require__(/*! ./_string-ws */ \"./node_modules/core-js/modules/_string-ws.js\");\nvar space = '[' + spaces + ']';\nvar non = '\\u200b\\u0085';\nvar ltrim = RegExp('^' + space + space + '*');\nvar rtrim = RegExp(space + space + '*$');\n\nvar exporter = function (KEY, exec, ALIAS) {\n  var exp = {};\n  var FORCE = fails(function () {\n    return !!spaces[KEY]() || non[KEY]() != non;\n  });\n  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];\n  if (ALIAS) exp[ALIAS] = fn;\n  $export($export.P + $export.F * FORCE, 'String', exp);\n};\n\n// 1 -> String#trimLeft\n// 2 -> String#trimRight\n// 3 -> String#trim\nvar trim = exporter.trim = function (string, TYPE) {\n  string = String(defined(string));\n  if (TYPE & 1) string = string.replace(ltrim, '');\n  if (TYPE & 2) string = string.replace(rtrim, '');\n  return string;\n};\n\nmodule.exports = exporter;\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_string-trim.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_string-ws.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-ws.js ***!
  \****************************************************/
/***/ (function(module) {

eval("module.exports = '\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003' +\n  '\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF';\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_string-ws.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_task.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_task.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/modules/_ctx.js\");\nvar invoke = __webpack_require__(/*! ./_invoke */ \"./node_modules/core-js/modules/_invoke.js\");\nvar html = __webpack_require__(/*! ./_html */ \"./node_modules/core-js/modules/_html.js\");\nvar cel = __webpack_require__(/*! ./_dom-create */ \"./node_modules/core-js/modules/_dom-create.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar process = global.process;\nvar setTask = global.setImmediate;\nvar clearTask = global.clearImmediate;\nvar MessageChannel = global.MessageChannel;\nvar Dispatch = global.Dispatch;\nvar counter = 0;\nvar queue = {};\nvar ONREADYSTATECHANGE = 'onreadystatechange';\nvar defer, channel, port;\nvar run = function () {\n  var id = +this;\n  // eslint-disable-next-line no-prototype-builtins\n  if (queue.hasOwnProperty(id)) {\n    var fn = queue[id];\n    delete queue[id];\n    fn();\n  }\n};\nvar listener = function (event) {\n  run.call(event.data);\n};\n// Node.js 0.9+ & IE10+ has setImmediate, otherwise:\nif (!setTask || !clearTask) {\n  setTask = function setImmediate(fn) {\n    var args = [];\n    var i = 1;\n    while (arguments.length > i) args.push(arguments[i++]);\n    queue[++counter] = function () {\n      // eslint-disable-next-line no-new-func\n      invoke(typeof fn == 'function' ? fn : Function(fn), args);\n    };\n    defer(counter);\n    return counter;\n  };\n  clearTask = function clearImmediate(id) {\n    delete queue[id];\n  };\n  // Node.js 0.8-\n  if (__webpack_require__(/*! ./_cof */ \"./node_modules/core-js/modules/_cof.js\")(process) == 'process') {\n    defer = function (id) {\n      process.nextTick(ctx(run, id, 1));\n    };\n  // Sphere (JS game engine) Dispatch API\n  } else if (Dispatch && Dispatch.now) {\n    defer = function (id) {\n      Dispatch.now(ctx(run, id, 1));\n    };\n  // Browsers with MessageChannel, includes WebWorkers\n  } else if (MessageChannel) {\n    channel = new MessageChannel();\n    port = channel.port2;\n    channel.port1.onmessage = listener;\n    defer = ctx(port.postMessage, port, 1);\n  // Browsers with postMessage, skip WebWorkers\n  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'\n  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {\n    defer = function (id) {\n      global.postMessage(id + '', '*');\n    };\n    global.addEventListener('message', listener, false);\n  // IE8-\n  } else if (ONREADYSTATECHANGE in cel('script')) {\n    defer = function (id) {\n      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {\n        html.removeChild(this);\n        run.call(id);\n      };\n    };\n  // Rest old browsers\n  } else {\n    defer = function (id) {\n      setTimeout(ctx(run, id, 1), 0);\n    };\n  }\n}\nmodule.exports = {\n  set: setTask,\n  clear: clearTask\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_task.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_to-absolute-index.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/modules/_to-integer.js\");\nvar max = Math.max;\nvar min = Math.min;\nmodule.exports = function (index, length) {\n  index = toInteger(index);\n  return index < 0 ? max(index + length, 0) : min(index, length);\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_to-absolute-index.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_to-index.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_to-index.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// https://tc39.github.io/ecma262/#sec-toindex\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/modules/_to-integer.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nmodule.exports = function (it) {\n  if (it === undefined) return 0;\n  var number = toInteger(it);\n  var length = toLength(number);\n  if (number !== length) throw RangeError('Wrong length!');\n  return length;\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_to-index.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/***/ (function(module) {

eval("// 7.1.4 ToInteger\nvar ceil = Math.ceil;\nvar floor = Math.floor;\nmodule.exports = function (it) {\n  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_to-integer.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_to-iobject.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// to indexed object, toObject with fallback for non-array-like ES3 strings\nvar IObject = __webpack_require__(/*! ./_iobject */ \"./node_modules/core-js/modules/_iobject.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/modules/_defined.js\");\nmodule.exports = function (it) {\n  return IObject(defined(it));\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_to-iobject.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// 7.1.15 ToLength\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/modules/_to-integer.js\");\nvar min = Math.min;\nmodule.exports = function (it) {\n  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_to-length.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// 7.1.13 ToObject(argument)\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/modules/_defined.js\");\nmodule.exports = function (it) {\n  return Object(defined(it));\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_to-object.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// 7.1.1 ToPrimitive(input [, PreferredType])\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\n// instead of the ES6 spec version, we didn't implement @@toPrimitive case\n// and the second argument - flag - preferred type is a string\nmodule.exports = function (it, S) {\n  if (!isObject(it)) return it;\n  var fn, val;\n  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  throw TypeError(\"Can't convert object to primitive value\");\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_to-primitive.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_typed-array.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_typed-array.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nif (__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\")) {\n  var LIBRARY = __webpack_require__(/*! ./_library */ \"./node_modules/core-js/modules/_library.js\");\n  var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\n  var fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\n  var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n  var $typed = __webpack_require__(/*! ./_typed */ \"./node_modules/core-js/modules/_typed.js\");\n  var $buffer = __webpack_require__(/*! ./_typed-buffer */ \"./node_modules/core-js/modules/_typed-buffer.js\");\n  var ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/modules/_ctx.js\");\n  var anInstance = __webpack_require__(/*! ./_an-instance */ \"./node_modules/core-js/modules/_an-instance.js\");\n  var propertyDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/modules/_property-desc.js\");\n  var hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\");\n  var redefineAll = __webpack_require__(/*! ./_redefine-all */ \"./node_modules/core-js/modules/_redefine-all.js\");\n  var toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/modules/_to-integer.js\");\n  var toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\n  var toIndex = __webpack_require__(/*! ./_to-index */ \"./node_modules/core-js/modules/_to-index.js\");\n  var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"./node_modules/core-js/modules/_to-absolute-index.js\");\n  var toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/modules/_to-primitive.js\");\n  var has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\n  var classof = __webpack_require__(/*! ./_classof */ \"./node_modules/core-js/modules/_classof.js\");\n  var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\n  var toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\n  var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ \"./node_modules/core-js/modules/_is-array-iter.js\");\n  var create = __webpack_require__(/*! ./_object-create */ \"./node_modules/core-js/modules/_object-create.js\");\n  var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/core-js/modules/_object-gpo.js\");\n  var gOPN = (__webpack_require__(/*! ./_object-gopn */ \"./node_modules/core-js/modules/_object-gopn.js\").f);\n  var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ \"./node_modules/core-js/modules/core.get-iterator-method.js\");\n  var uid = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/modules/_uid.js\");\n  var wks = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\");\n  var createArrayMethod = __webpack_require__(/*! ./_array-methods */ \"./node_modules/core-js/modules/_array-methods.js\");\n  var createArrayIncludes = __webpack_require__(/*! ./_array-includes */ \"./node_modules/core-js/modules/_array-includes.js\");\n  var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ \"./node_modules/core-js/modules/_species-constructor.js\");\n  var ArrayIterators = __webpack_require__(/*! ./es6.array.iterator */ \"./node_modules/core-js/modules/es6.array.iterator.js\");\n  var Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/modules/_iterators.js\");\n  var $iterDetect = __webpack_require__(/*! ./_iter-detect */ \"./node_modules/core-js/modules/_iter-detect.js\");\n  var setSpecies = __webpack_require__(/*! ./_set-species */ \"./node_modules/core-js/modules/_set-species.js\");\n  var arrayFill = __webpack_require__(/*! ./_array-fill */ \"./node_modules/core-js/modules/_array-fill.js\");\n  var arrayCopyWithin = __webpack_require__(/*! ./_array-copy-within */ \"./node_modules/core-js/modules/_array-copy-within.js\");\n  var $DP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\");\n  var $GOPD = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/modules/_object-gopd.js\");\n  var dP = $DP.f;\n  var gOPD = $GOPD.f;\n  var RangeError = global.RangeError;\n  var TypeError = global.TypeError;\n  var Uint8Array = global.Uint8Array;\n  var ARRAY_BUFFER = 'ArrayBuffer';\n  var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;\n  var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';\n  var PROTOTYPE = 'prototype';\n  var ArrayProto = Array[PROTOTYPE];\n  var $ArrayBuffer = $buffer.ArrayBuffer;\n  var $DataView = $buffer.DataView;\n  var arrayForEach = createArrayMethod(0);\n  var arrayFilter = createArrayMethod(2);\n  var arraySome = createArrayMethod(3);\n  var arrayEvery = createArrayMethod(4);\n  var arrayFind = createArrayMethod(5);\n  var arrayFindIndex = createArrayMethod(6);\n  var arrayIncludes = createArrayIncludes(true);\n  var arrayIndexOf = createArrayIncludes(false);\n  var arrayValues = ArrayIterators.values;\n  var arrayKeys = ArrayIterators.keys;\n  var arrayEntries = ArrayIterators.entries;\n  var arrayLastIndexOf = ArrayProto.lastIndexOf;\n  var arrayReduce = ArrayProto.reduce;\n  var arrayReduceRight = ArrayProto.reduceRight;\n  var arrayJoin = ArrayProto.join;\n  var arraySort = ArrayProto.sort;\n  var arraySlice = ArrayProto.slice;\n  var arrayToString = ArrayProto.toString;\n  var arrayToLocaleString = ArrayProto.toLocaleString;\n  var ITERATOR = wks('iterator');\n  var TAG = wks('toStringTag');\n  var TYPED_CONSTRUCTOR = uid('typed_constructor');\n  var DEF_CONSTRUCTOR = uid('def_constructor');\n  var ALL_CONSTRUCTORS = $typed.CONSTR;\n  var TYPED_ARRAY = $typed.TYPED;\n  var VIEW = $typed.VIEW;\n  var WRONG_LENGTH = 'Wrong length!';\n\n  var $map = createArrayMethod(1, function (O, length) {\n    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);\n  });\n\n  var LITTLE_ENDIAN = fails(function () {\n    // eslint-disable-next-line no-undef\n    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;\n  });\n\n  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {\n    new Uint8Array(1).set({});\n  });\n\n  var toOffset = function (it, BYTES) {\n    var offset = toInteger(it);\n    if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');\n    return offset;\n  };\n\n  var validate = function (it) {\n    if (isObject(it) && TYPED_ARRAY in it) return it;\n    throw TypeError(it + ' is not a typed array!');\n  };\n\n  var allocate = function (C, length) {\n    if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {\n      throw TypeError('It is not a typed array constructor!');\n    } return new C(length);\n  };\n\n  var speciesFromList = function (O, list) {\n    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);\n  };\n\n  var fromList = function (C, list) {\n    var index = 0;\n    var length = list.length;\n    var result = allocate(C, length);\n    while (length > index) result[index] = list[index++];\n    return result;\n  };\n\n  var addGetter = function (it, key, internal) {\n    dP(it, key, { get: function () { return this._d[internal]; } });\n  };\n\n  var $from = function from(source /* , mapfn, thisArg */) {\n    var O = toObject(source);\n    var aLen = arguments.length;\n    var mapfn = aLen > 1 ? arguments[1] : undefined;\n    var mapping = mapfn !== undefined;\n    var iterFn = getIterFn(O);\n    var i, length, values, result, step, iterator;\n    if (iterFn != undefined && !isArrayIter(iterFn)) {\n      for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {\n        values.push(step.value);\n      } O = values;\n    }\n    if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);\n    for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {\n      result[i] = mapping ? mapfn(O[i], i) : O[i];\n    }\n    return result;\n  };\n\n  var $of = function of(/* ...items */) {\n    var index = 0;\n    var length = arguments.length;\n    var result = allocate(this, length);\n    while (length > index) result[index] = arguments[index++];\n    return result;\n  };\n\n  // iOS Safari 6.x fails here\n  var TO_LOCALE_BUG = !!Uint8Array && fails(function () { arrayToLocaleString.call(new Uint8Array(1)); });\n\n  var $toLocaleString = function toLocaleString() {\n    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);\n  };\n\n  var proto = {\n    copyWithin: function copyWithin(target, start /* , end */) {\n      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);\n    },\n    every: function every(callbackfn /* , thisArg */) {\n      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n    },\n    fill: function fill(value /* , start, end */) { // eslint-disable-line no-unused-vars\n      return arrayFill.apply(validate(this), arguments);\n    },\n    filter: function filter(callbackfn /* , thisArg */) {\n      return speciesFromList(this, arrayFilter(validate(this), callbackfn,\n        arguments.length > 1 ? arguments[1] : undefined));\n    },\n    find: function find(predicate /* , thisArg */) {\n      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);\n    },\n    findIndex: function findIndex(predicate /* , thisArg */) {\n      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);\n    },\n    forEach: function forEach(callbackfn /* , thisArg */) {\n      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n    },\n    indexOf: function indexOf(searchElement /* , fromIndex */) {\n      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);\n    },\n    includes: function includes(searchElement /* , fromIndex */) {\n      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);\n    },\n    join: function join(separator) { // eslint-disable-line no-unused-vars\n      return arrayJoin.apply(validate(this), arguments);\n    },\n    lastIndexOf: function lastIndexOf(searchElement /* , fromIndex */) { // eslint-disable-line no-unused-vars\n      return arrayLastIndexOf.apply(validate(this), arguments);\n    },\n    map: function map(mapfn /* , thisArg */) {\n      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);\n    },\n    reduce: function reduce(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars\n      return arrayReduce.apply(validate(this), arguments);\n    },\n    reduceRight: function reduceRight(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars\n      return arrayReduceRight.apply(validate(this), arguments);\n    },\n    reverse: function reverse() {\n      var that = this;\n      var length = validate(that).length;\n      var middle = Math.floor(length / 2);\n      var index = 0;\n      var value;\n      while (index < middle) {\n        value = that[index];\n        that[index++] = that[--length];\n        that[length] = value;\n      } return that;\n    },\n    some: function some(callbackfn /* , thisArg */) {\n      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n    },\n    sort: function sort(comparefn) {\n      return arraySort.call(validate(this), comparefn);\n    },\n    subarray: function subarray(begin, end) {\n      var O = validate(this);\n      var length = O.length;\n      var $begin = toAbsoluteIndex(begin, length);\n      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(\n        O.buffer,\n        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,\n        toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin)\n      );\n    }\n  };\n\n  var $slice = function slice(start, end) {\n    return speciesFromList(this, arraySlice.call(validate(this), start, end));\n  };\n\n  var $set = function set(arrayLike /* , offset */) {\n    validate(this);\n    var offset = toOffset(arguments[1], 1);\n    var length = this.length;\n    var src = toObject(arrayLike);\n    var len = toLength(src.length);\n    var index = 0;\n    if (len + offset > length) throw RangeError(WRONG_LENGTH);\n    while (index < len) this[offset + index] = src[index++];\n  };\n\n  var $iterators = {\n    entries: function entries() {\n      return arrayEntries.call(validate(this));\n    },\n    keys: function keys() {\n      return arrayKeys.call(validate(this));\n    },\n    values: function values() {\n      return arrayValues.call(validate(this));\n    }\n  };\n\n  var isTAIndex = function (target, key) {\n    return isObject(target)\n      && target[TYPED_ARRAY]\n      && typeof key != 'symbol'\n      && key in target\n      && String(+key) == String(key);\n  };\n  var $getDesc = function getOwnPropertyDescriptor(target, key) {\n    return isTAIndex(target, key = toPrimitive(key, true))\n      ? propertyDesc(2, target[key])\n      : gOPD(target, key);\n  };\n  var $setDesc = function defineProperty(target, key, desc) {\n    if (isTAIndex(target, key = toPrimitive(key, true))\n      && isObject(desc)\n      && has(desc, 'value')\n      && !has(desc, 'get')\n      && !has(desc, 'set')\n      // TODO: add validation descriptor w/o calling accessors\n      && !desc.configurable\n      && (!has(desc, 'writable') || desc.writable)\n      && (!has(desc, 'enumerable') || desc.enumerable)\n    ) {\n      target[key] = desc.value;\n      return target;\n    } return dP(target, key, desc);\n  };\n\n  if (!ALL_CONSTRUCTORS) {\n    $GOPD.f = $getDesc;\n    $DP.f = $setDesc;\n  }\n\n  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {\n    getOwnPropertyDescriptor: $getDesc,\n    defineProperty: $setDesc\n  });\n\n  if (fails(function () { arrayToString.call({}); })) {\n    arrayToString = arrayToLocaleString = function toString() {\n      return arrayJoin.call(this);\n    };\n  }\n\n  var $TypedArrayPrototype$ = redefineAll({}, proto);\n  redefineAll($TypedArrayPrototype$, $iterators);\n  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);\n  redefineAll($TypedArrayPrototype$, {\n    slice: $slice,\n    set: $set,\n    constructor: function () { /* noop */ },\n    toString: arrayToString,\n    toLocaleString: $toLocaleString\n  });\n  addGetter($TypedArrayPrototype$, 'buffer', 'b');\n  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');\n  addGetter($TypedArrayPrototype$, 'byteLength', 'l');\n  addGetter($TypedArrayPrototype$, 'length', 'e');\n  dP($TypedArrayPrototype$, TAG, {\n    get: function () { return this[TYPED_ARRAY]; }\n  });\n\n  // eslint-disable-next-line max-statements\n  module.exports = function (KEY, BYTES, wrapper, CLAMPED) {\n    CLAMPED = !!CLAMPED;\n    var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';\n    var GETTER = 'get' + KEY;\n    var SETTER = 'set' + KEY;\n    var TypedArray = global[NAME];\n    var Base = TypedArray || {};\n    var TAC = TypedArray && getPrototypeOf(TypedArray);\n    var FORCED = !TypedArray || !$typed.ABV;\n    var O = {};\n    var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];\n    var getter = function (that, index) {\n      var data = that._d;\n      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);\n    };\n    var setter = function (that, index, value) {\n      var data = that._d;\n      if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;\n      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);\n    };\n    var addElement = function (that, index) {\n      dP(that, index, {\n        get: function () {\n          return getter(this, index);\n        },\n        set: function (value) {\n          return setter(this, index, value);\n        },\n        enumerable: true\n      });\n    };\n    if (FORCED) {\n      TypedArray = wrapper(function (that, data, $offset, $length) {\n        anInstance(that, TypedArray, NAME, '_d');\n        var index = 0;\n        var offset = 0;\n        var buffer, byteLength, length, klass;\n        if (!isObject(data)) {\n          length = toIndex(data);\n          byteLength = length * BYTES;\n          buffer = new $ArrayBuffer(byteLength);\n        } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {\n          buffer = data;\n          offset = toOffset($offset, BYTES);\n          var $len = data.byteLength;\n          if ($length === undefined) {\n            if ($len % BYTES) throw RangeError(WRONG_LENGTH);\n            byteLength = $len - offset;\n            if (byteLength < 0) throw RangeError(WRONG_LENGTH);\n          } else {\n            byteLength = toLength($length) * BYTES;\n            if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);\n          }\n          length = byteLength / BYTES;\n        } else if (TYPED_ARRAY in data) {\n          return fromList(TypedArray, data);\n        } else {\n          return $from.call(TypedArray, data);\n        }\n        hide(that, '_d', {\n          b: buffer,\n          o: offset,\n          l: byteLength,\n          e: length,\n          v: new $DataView(buffer)\n        });\n        while (index < length) addElement(that, index++);\n      });\n      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);\n      hide(TypedArrayPrototype, 'constructor', TypedArray);\n    } else if (!fails(function () {\n      TypedArray(1);\n    }) || !fails(function () {\n      new TypedArray(-1); // eslint-disable-line no-new\n    }) || !$iterDetect(function (iter) {\n      new TypedArray(); // eslint-disable-line no-new\n      new TypedArray(null); // eslint-disable-line no-new\n      new TypedArray(1.5); // eslint-disable-line no-new\n      new TypedArray(iter); // eslint-disable-line no-new\n    }, true)) {\n      TypedArray = wrapper(function (that, data, $offset, $length) {\n        anInstance(that, TypedArray, NAME);\n        var klass;\n        // `ws` module bug, temporarily remove validation length for Uint8Array\n        // https://github.com/websockets/ws/pull/645\n        if (!isObject(data)) return new Base(toIndex(data));\n        if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {\n          return $length !== undefined\n            ? new Base(data, toOffset($offset, BYTES), $length)\n            : $offset !== undefined\n              ? new Base(data, toOffset($offset, BYTES))\n              : new Base(data);\n        }\n        if (TYPED_ARRAY in data) return fromList(TypedArray, data);\n        return $from.call(TypedArray, data);\n      });\n      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {\n        if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);\n      });\n      TypedArray[PROTOTYPE] = TypedArrayPrototype;\n      if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;\n    }\n    var $nativeIterator = TypedArrayPrototype[ITERATOR];\n    var CORRECT_ITER_NAME = !!$nativeIterator\n      && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);\n    var $iterator = $iterators.values;\n    hide(TypedArray, TYPED_CONSTRUCTOR, true);\n    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);\n    hide(TypedArrayPrototype, VIEW, true);\n    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);\n\n    if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {\n      dP(TypedArrayPrototype, TAG, {\n        get: function () { return NAME; }\n      });\n    }\n\n    O[NAME] = TypedArray;\n\n    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);\n\n    $export($export.S, NAME, {\n      BYTES_PER_ELEMENT: BYTES\n    });\n\n    $export($export.S + $export.F * fails(function () { Base.of.call(TypedArray, 1); }), NAME, {\n      from: $from,\n      of: $of\n    });\n\n    if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);\n\n    $export($export.P, NAME, proto);\n\n    setSpecies(NAME);\n\n    $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });\n\n    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);\n\n    if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;\n\n    $export($export.P + $export.F * fails(function () {\n      new TypedArray(1).slice();\n    }), NAME, { slice: $slice });\n\n    $export($export.P + $export.F * (fails(function () {\n      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();\n    }) || !fails(function () {\n      TypedArrayPrototype.toLocaleString.call([1, 2]);\n    })), NAME, { toLocaleString: $toLocaleString });\n\n    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;\n    if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);\n  };\n} else module.exports = function () { /* empty */ };\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_typed-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_typed-buffer.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_typed-buffer.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\");\nvar LIBRARY = __webpack_require__(/*! ./_library */ \"./node_modules/core-js/modules/_library.js\");\nvar $typed = __webpack_require__(/*! ./_typed */ \"./node_modules/core-js/modules/_typed.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\");\nvar redefineAll = __webpack_require__(/*! ./_redefine-all */ \"./node_modules/core-js/modules/_redefine-all.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar anInstance = __webpack_require__(/*! ./_an-instance */ \"./node_modules/core-js/modules/_an-instance.js\");\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/modules/_to-integer.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar toIndex = __webpack_require__(/*! ./_to-index */ \"./node_modules/core-js/modules/_to-index.js\");\nvar gOPN = (__webpack_require__(/*! ./_object-gopn */ \"./node_modules/core-js/modules/_object-gopn.js\").f);\nvar dP = (__webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\").f);\nvar arrayFill = __webpack_require__(/*! ./_array-fill */ \"./node_modules/core-js/modules/_array-fill.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/modules/_set-to-string-tag.js\");\nvar ARRAY_BUFFER = 'ArrayBuffer';\nvar DATA_VIEW = 'DataView';\nvar PROTOTYPE = 'prototype';\nvar WRONG_LENGTH = 'Wrong length!';\nvar WRONG_INDEX = 'Wrong index!';\nvar $ArrayBuffer = global[ARRAY_BUFFER];\nvar $DataView = global[DATA_VIEW];\nvar Math = global.Math;\nvar RangeError = global.RangeError;\n// eslint-disable-next-line no-shadow-restricted-names\nvar Infinity = global.Infinity;\nvar BaseBuffer = $ArrayBuffer;\nvar abs = Math.abs;\nvar pow = Math.pow;\nvar floor = Math.floor;\nvar log = Math.log;\nvar LN2 = Math.LN2;\nvar BUFFER = 'buffer';\nvar BYTE_LENGTH = 'byteLength';\nvar BYTE_OFFSET = 'byteOffset';\nvar $BUFFER = DESCRIPTORS ? '_b' : BUFFER;\nvar $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH;\nvar $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET;\n\n// IEEE754 conversions based on https://github.com/feross/ieee754\nfunction packIEEE754(value, mLen, nBytes) {\n  var buffer = new Array(nBytes);\n  var eLen = nBytes * 8 - mLen - 1;\n  var eMax = (1 << eLen) - 1;\n  var eBias = eMax >> 1;\n  var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;\n  var i = 0;\n  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;\n  var e, m, c;\n  value = abs(value);\n  // eslint-disable-next-line no-self-compare\n  if (value != value || value === Infinity) {\n    // eslint-disable-next-line no-self-compare\n    m = value != value ? 1 : 0;\n    e = eMax;\n  } else {\n    e = floor(log(value) / LN2);\n    if (value * (c = pow(2, -e)) < 1) {\n      e--;\n      c *= 2;\n    }\n    if (e + eBias >= 1) {\n      value += rt / c;\n    } else {\n      value += rt * pow(2, 1 - eBias);\n    }\n    if (value * c >= 2) {\n      e++;\n      c /= 2;\n    }\n    if (e + eBias >= eMax) {\n      m = 0;\n      e = eMax;\n    } else if (e + eBias >= 1) {\n      m = (value * c - 1) * pow(2, mLen);\n      e = e + eBias;\n    } else {\n      m = value * pow(2, eBias - 1) * pow(2, mLen);\n      e = 0;\n    }\n  }\n  for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);\n  e = e << mLen | m;\n  eLen += mLen;\n  for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);\n  buffer[--i] |= s * 128;\n  return buffer;\n}\nfunction unpackIEEE754(buffer, mLen, nBytes) {\n  var eLen = nBytes * 8 - mLen - 1;\n  var eMax = (1 << eLen) - 1;\n  var eBias = eMax >> 1;\n  var nBits = eLen - 7;\n  var i = nBytes - 1;\n  var s = buffer[i--];\n  var e = s & 127;\n  var m;\n  s >>= 7;\n  for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);\n  m = e & (1 << -nBits) - 1;\n  e >>= -nBits;\n  nBits += mLen;\n  for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);\n  if (e === 0) {\n    e = 1 - eBias;\n  } else if (e === eMax) {\n    return m ? NaN : s ? -Infinity : Infinity;\n  } else {\n    m = m + pow(2, mLen);\n    e = e - eBias;\n  } return (s ? -1 : 1) * m * pow(2, e - mLen);\n}\n\nfunction unpackI32(bytes) {\n  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];\n}\nfunction packI8(it) {\n  return [it & 0xff];\n}\nfunction packI16(it) {\n  return [it & 0xff, it >> 8 & 0xff];\n}\nfunction packI32(it) {\n  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];\n}\nfunction packF64(it) {\n  return packIEEE754(it, 52, 8);\n}\nfunction packF32(it) {\n  return packIEEE754(it, 23, 4);\n}\n\nfunction addGetter(C, key, internal) {\n  dP(C[PROTOTYPE], key, { get: function () { return this[internal]; } });\n}\n\nfunction get(view, bytes, index, isLittleEndian) {\n  var numIndex = +index;\n  var intIndex = toIndex(numIndex);\n  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);\n  var store = view[$BUFFER]._b;\n  var start = intIndex + view[$OFFSET];\n  var pack = store.slice(start, start + bytes);\n  return isLittleEndian ? pack : pack.reverse();\n}\nfunction set(view, bytes, index, conversion, value, isLittleEndian) {\n  var numIndex = +index;\n  var intIndex = toIndex(numIndex);\n  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);\n  var store = view[$BUFFER]._b;\n  var start = intIndex + view[$OFFSET];\n  var pack = conversion(+value);\n  for (var i = 0; i < bytes; i++) store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];\n}\n\nif (!$typed.ABV) {\n  $ArrayBuffer = function ArrayBuffer(length) {\n    anInstance(this, $ArrayBuffer, ARRAY_BUFFER);\n    var byteLength = toIndex(length);\n    this._b = arrayFill.call(new Array(byteLength), 0);\n    this[$LENGTH] = byteLength;\n  };\n\n  $DataView = function DataView(buffer, byteOffset, byteLength) {\n    anInstance(this, $DataView, DATA_VIEW);\n    anInstance(buffer, $ArrayBuffer, DATA_VIEW);\n    var bufferLength = buffer[$LENGTH];\n    var offset = toInteger(byteOffset);\n    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');\n    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);\n    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);\n    this[$BUFFER] = buffer;\n    this[$OFFSET] = offset;\n    this[$LENGTH] = byteLength;\n  };\n\n  if (DESCRIPTORS) {\n    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');\n    addGetter($DataView, BUFFER, '_b');\n    addGetter($DataView, BYTE_LENGTH, '_l');\n    addGetter($DataView, BYTE_OFFSET, '_o');\n  }\n\n  redefineAll($DataView[PROTOTYPE], {\n    getInt8: function getInt8(byteOffset) {\n      return get(this, 1, byteOffset)[0] << 24 >> 24;\n    },\n    getUint8: function getUint8(byteOffset) {\n      return get(this, 1, byteOffset)[0];\n    },\n    getInt16: function getInt16(byteOffset /* , littleEndian */) {\n      var bytes = get(this, 2, byteOffset, arguments[1]);\n      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;\n    },\n    getUint16: function getUint16(byteOffset /* , littleEndian */) {\n      var bytes = get(this, 2, byteOffset, arguments[1]);\n      return bytes[1] << 8 | bytes[0];\n    },\n    getInt32: function getInt32(byteOffset /* , littleEndian */) {\n      return unpackI32(get(this, 4, byteOffset, arguments[1]));\n    },\n    getUint32: function getUint32(byteOffset /* , littleEndian */) {\n      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;\n    },\n    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {\n      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);\n    },\n    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {\n      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);\n    },\n    setInt8: function setInt8(byteOffset, value) {\n      set(this, 1, byteOffset, packI8, value);\n    },\n    setUint8: function setUint8(byteOffset, value) {\n      set(this, 1, byteOffset, packI8, value);\n    },\n    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {\n      set(this, 2, byteOffset, packI16, value, arguments[2]);\n    },\n    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {\n      set(this, 2, byteOffset, packI16, value, arguments[2]);\n    },\n    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {\n      set(this, 4, byteOffset, packI32, value, arguments[2]);\n    },\n    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {\n      set(this, 4, byteOffset, packI32, value, arguments[2]);\n    },\n    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {\n      set(this, 4, byteOffset, packF32, value, arguments[2]);\n    },\n    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {\n      set(this, 8, byteOffset, packF64, value, arguments[2]);\n    }\n  });\n} else {\n  if (!fails(function () {\n    $ArrayBuffer(1);\n  }) || !fails(function () {\n    new $ArrayBuffer(-1); // eslint-disable-line no-new\n  }) || fails(function () {\n    new $ArrayBuffer(); // eslint-disable-line no-new\n    new $ArrayBuffer(1.5); // eslint-disable-line no-new\n    new $ArrayBuffer(NaN); // eslint-disable-line no-new\n    return $ArrayBuffer.name != ARRAY_BUFFER;\n  })) {\n    $ArrayBuffer = function ArrayBuffer(length) {\n      anInstance(this, $ArrayBuffer);\n      return new BaseBuffer(toIndex(length));\n    };\n    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];\n    for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {\n      if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);\n    }\n    if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;\n  }\n  // iOS Safari 7.x bug\n  var view = new $DataView(new $ArrayBuffer(2));\n  var $setInt8 = $DataView[PROTOTYPE].setInt8;\n  view.setInt8(0, 2147483648);\n  view.setInt8(1, 2147483649);\n  if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {\n    setInt8: function setInt8(byteOffset, value) {\n      $setInt8.call(this, byteOffset, value << 24 >> 24);\n    },\n    setUint8: function setUint8(byteOffset, value) {\n      $setInt8.call(this, byteOffset, value << 24 >> 24);\n    }\n  }, true);\n}\nsetToStringTag($ArrayBuffer, ARRAY_BUFFER);\nsetToStringTag($DataView, DATA_VIEW);\nhide($DataView[PROTOTYPE], $typed.VIEW, true);\nexports[ARRAY_BUFFER] = $ArrayBuffer;\nexports[DATA_VIEW] = $DataView;\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_typed-buffer.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_typed.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_typed.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\");\nvar uid = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/modules/_uid.js\");\nvar TYPED = uid('typed_array');\nvar VIEW = uid('view');\nvar ABV = !!(global.ArrayBuffer && global.DataView);\nvar CONSTR = ABV;\nvar i = 0;\nvar l = 9;\nvar Typed;\n\nvar TypedArrayConstructors = (\n  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'\n).split(',');\n\nwhile (i < l) {\n  if (Typed = global[TypedArrayConstructors[i++]]) {\n    hide(Typed.prototype, TYPED, true);\n    hide(Typed.prototype, VIEW, true);\n  } else CONSTR = false;\n}\n\nmodule.exports = {\n  ABV: ABV,\n  CONSTR: CONSTR,\n  TYPED: TYPED,\n  VIEW: VIEW\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_typed.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/***/ (function(module) {

eval("var id = 0;\nvar px = Math.random();\nmodule.exports = function (key) {\n  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_uid.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_user-agent.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_user-agent.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar navigator = global.navigator;\n\nmodule.exports = navigator && navigator.userAgent || '';\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_user-agent.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_validate-collection.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_validate-collection.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nmodule.exports = function (it, TYPE) {\n  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');\n  return it;\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_validate-collection.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_wks-define.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-define.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/modules/_core.js\");\nvar LIBRARY = __webpack_require__(/*! ./_library */ \"./node_modules/core-js/modules/_library.js\");\nvar wksExt = __webpack_require__(/*! ./_wks-ext */ \"./node_modules/core-js/modules/_wks-ext.js\");\nvar defineProperty = (__webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\").f);\nmodule.exports = function (name) {\n  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});\n  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_wks-define.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_wks-ext.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-ext.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("exports.f = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\");\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_wks-ext.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var store = __webpack_require__(/*! ./_shared */ \"./node_modules/core-js/modules/_shared.js\")('wks');\nvar uid = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/modules/_uid.js\");\nvar Symbol = (__webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\").Symbol);\nvar USE_SYMBOL = typeof Symbol == 'function';\n\nvar $exports = module.exports = function (name) {\n  return store[name] || (store[name] =\n    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));\n};\n\n$exports.store = store;\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/_wks.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/core.get-iterator-method.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/core.get-iterator-method.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var classof = __webpack_require__(/*! ./_classof */ \"./node_modules/core-js/modules/_classof.js\");\nvar ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('iterator');\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/modules/_iterators.js\");\nmodule.exports = (__webpack_require__(/*! ./_core */ \"./node_modules/core-js/modules/_core.js\").getIteratorMethod) = function (it) {\n  if (it != undefined) return it[ITERATOR]\n    || it['@@iterator']\n    || Iterators[classof(it)];\n};\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/core.get-iterator-method.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.copy-within.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.copy-within.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.P, 'Array', { copyWithin: __webpack_require__(/*! ./_array-copy-within */ \"./node_modules/core-js/modules/_array-copy-within.js\") });\n\n__webpack_require__(/*! ./_add-to-unscopables */ \"./node_modules/core-js/modules/_add-to-unscopables.js\")('copyWithin');\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.array.copy-within.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.every.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.every.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $every = __webpack_require__(/*! ./_array-methods */ \"./node_modules/core-js/modules/_array-methods.js\")(4);\n\n$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ \"./node_modules/core-js/modules/_strict-method.js\")([].every, true), 'Array', {\n  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])\n  every: function every(callbackfn /* , thisArg */) {\n    return $every(this, callbackfn, arguments[1]);\n  }\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.array.every.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.fill.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.fill.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.P, 'Array', { fill: __webpack_require__(/*! ./_array-fill */ \"./node_modules/core-js/modules/_array-fill.js\") });\n\n__webpack_require__(/*! ./_add-to-unscopables */ \"./node_modules/core-js/modules/_add-to-unscopables.js\")('fill');\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.array.fill.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.filter.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.filter.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $filter = __webpack_require__(/*! ./_array-methods */ \"./node_modules/core-js/modules/_array-methods.js\")(2);\n\n$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ \"./node_modules/core-js/modules/_strict-method.js\")([].filter, true), 'Array', {\n  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])\n  filter: function filter(callbackfn /* , thisArg */) {\n    return $filter(this, callbackfn, arguments[1]);\n  }\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.array.filter.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.find-index.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.find-index.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $find = __webpack_require__(/*! ./_array-methods */ \"./node_modules/core-js/modules/_array-methods.js\")(6);\nvar KEY = 'findIndex';\nvar forced = true;\n// Shouldn't skip holes\nif (KEY in []) Array(1)[KEY](function () { forced = false; });\n$export($export.P + $export.F * forced, 'Array', {\n  findIndex: function findIndex(callbackfn /* , that = undefined */) {\n    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n__webpack_require__(/*! ./_add-to-unscopables */ \"./node_modules/core-js/modules/_add-to-unscopables.js\")(KEY);\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.array.find-index.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.find.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.find.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $find = __webpack_require__(/*! ./_array-methods */ \"./node_modules/core-js/modules/_array-methods.js\")(5);\nvar KEY = 'find';\nvar forced = true;\n// Shouldn't skip holes\nif (KEY in []) Array(1)[KEY](function () { forced = false; });\n$export($export.P + $export.F * forced, 'Array', {\n  find: function find(callbackfn /* , that = undefined */) {\n    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n__webpack_require__(/*! ./_add-to-unscopables */ \"./node_modules/core-js/modules/_add-to-unscopables.js\")(KEY);\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.array.find.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.for-each.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.for-each.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $forEach = __webpack_require__(/*! ./_array-methods */ \"./node_modules/core-js/modules/_array-methods.js\")(0);\nvar STRICT = __webpack_require__(/*! ./_strict-method */ \"./node_modules/core-js/modules/_strict-method.js\")([].forEach, true);\n\n$export($export.P + $export.F * !STRICT, 'Array', {\n  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])\n  forEach: function forEach(callbackfn /* , thisArg */) {\n    return $forEach(this, callbackfn, arguments[1]);\n  }\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.array.for-each.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.from.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.from.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/modules/_ctx.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar call = __webpack_require__(/*! ./_iter-call */ \"./node_modules/core-js/modules/_iter-call.js\");\nvar isArrayIter = __webpack_require__(/*! ./_is-array-iter */ \"./node_modules/core-js/modules/_is-array-iter.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar createProperty = __webpack_require__(/*! ./_create-property */ \"./node_modules/core-js/modules/_create-property.js\");\nvar getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ \"./node_modules/core-js/modules/core.get-iterator-method.js\");\n\n$export($export.S + $export.F * !__webpack_require__(/*! ./_iter-detect */ \"./node_modules/core-js/modules/_iter-detect.js\")(function (iter) { Array.from(iter); }), 'Array', {\n  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)\n  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {\n    var O = toObject(arrayLike);\n    var C = typeof this == 'function' ? this : Array;\n    var aLen = arguments.length;\n    var mapfn = aLen > 1 ? arguments[1] : undefined;\n    var mapping = mapfn !== undefined;\n    var index = 0;\n    var iterFn = getIterFn(O);\n    var length, result, step, iterator;\n    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);\n    // if object isn't iterable or it's array with default iterator - use simple case\n    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {\n      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {\n        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);\n      }\n    } else {\n      length = toLength(O.length);\n      for (result = new C(length); length > index; index++) {\n        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);\n      }\n    }\n    result.length = index;\n    return result;\n  }\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.array.from.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.index-of.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.index-of.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $indexOf = __webpack_require__(/*! ./_array-includes */ \"./node_modules/core-js/modules/_array-includes.js\")(false);\nvar $native = [].indexOf;\nvar NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;\n\n$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(/*! ./_strict-method */ \"./node_modules/core-js/modules/_strict-method.js\")($native)), 'Array', {\n  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])\n  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {\n    return NEGATIVE_ZERO\n      // convert -0 to +0\n      ? $native.apply(this, arguments) || 0\n      : $indexOf(this, searchElement, arguments[1]);\n  }\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.array.index-of.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.is-array.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.is-array.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Array', { isArray: __webpack_require__(/*! ./_is-array */ \"./node_modules/core-js/modules/_is-array.js\") });\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.array.is-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.iterator.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ \"./node_modules/core-js/modules/_add-to-unscopables.js\");\nvar step = __webpack_require__(/*! ./_iter-step */ \"./node_modules/core-js/modules/_iter-step.js\");\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/modules/_iterators.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\n\n// 22.1.3.4 Array.prototype.entries()\n// 22.1.3.13 Array.prototype.keys()\n// 22.1.3.29 Array.prototype.values()\n// 22.1.3.30 Array.prototype[@@iterator]()\nmodule.exports = __webpack_require__(/*! ./_iter-define */ \"./node_modules/core-js/modules/_iter-define.js\")(Array, 'Array', function (iterated, kind) {\n  this._t = toIObject(iterated); // target\n  this._i = 0;                   // next index\n  this._k = kind;                // kind\n// 22.1.5.2.1 %ArrayIteratorPrototype%.next()\n}, function () {\n  var O = this._t;\n  var kind = this._k;\n  var index = this._i++;\n  if (!O || index >= O.length) {\n    this._t = undefined;\n    return step(1);\n  }\n  if (kind == 'keys') return step(0, index);\n  if (kind == 'values') return step(0, O[index]);\n  return step(0, [index, O[index]]);\n}, 'values');\n\n// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)\nIterators.Arguments = Iterators.Array;\n\naddToUnscopables('keys');\naddToUnscopables('values');\naddToUnscopables('entries');\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.array.iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.join.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.join.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n// 22.1.3.13 Array.prototype.join(separator)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar arrayJoin = [].join;\n\n// fallback for not array-like strings\n$export($export.P + $export.F * (__webpack_require__(/*! ./_iobject */ \"./node_modules/core-js/modules/_iobject.js\") != Object || !__webpack_require__(/*! ./_strict-method */ \"./node_modules/core-js/modules/_strict-method.js\")(arrayJoin)), 'Array', {\n  join: function join(separator) {\n    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);\n  }\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.array.join.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.last-index-of.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.last-index-of.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/modules/_to-integer.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar $native = [].lastIndexOf;\nvar NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;\n\n$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(/*! ./_strict-method */ \"./node_modules/core-js/modules/_strict-method.js\")($native)), 'Array', {\n  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])\n  lastIndexOf: function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {\n    // convert -0 to +0\n    if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;\n    var O = toIObject(this);\n    var length = toLength(O.length);\n    var index = length - 1;\n    if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));\n    if (index < 0) index = length + index;\n    for (;index >= 0; index--) if (index in O) if (O[index] === searchElement) return index || 0;\n    return -1;\n  }\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.array.last-index-of.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.map.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.map.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $map = __webpack_require__(/*! ./_array-methods */ \"./node_modules/core-js/modules/_array-methods.js\")(1);\n\n$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ \"./node_modules/core-js/modules/_strict-method.js\")([].map, true), 'Array', {\n  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])\n  map: function map(callbackfn /* , thisArg */) {\n    return $map(this, callbackfn, arguments[1]);\n  }\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.array.map.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.of.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.of.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar createProperty = __webpack_require__(/*! ./_create-property */ \"./node_modules/core-js/modules/_create-property.js\");\n\n// WebKit Array.of isn't generic\n$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  function F() { /* empty */ }\n  return !(Array.of.call(F) instanceof F);\n}), 'Array', {\n  // 22.1.2.3 Array.of( ...items)\n  of: function of(/* ...args */) {\n    var index = 0;\n    var aLen = arguments.length;\n    var result = new (typeof this == 'function' ? this : Array)(aLen);\n    while (aLen > index) createProperty(result, index, arguments[index++]);\n    result.length = aLen;\n    return result;\n  }\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.array.of.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.reduce-right.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.reduce-right.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $reduce = __webpack_require__(/*! ./_array-reduce */ \"./node_modules/core-js/modules/_array-reduce.js\");\n\n$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ \"./node_modules/core-js/modules/_strict-method.js\")([].reduceRight, true), 'Array', {\n  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])\n  reduceRight: function reduceRight(callbackfn /* , initialValue */) {\n    return $reduce(this, callbackfn, arguments.length, arguments[1], true);\n  }\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.array.reduce-right.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.reduce.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.reduce.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $reduce = __webpack_require__(/*! ./_array-reduce */ \"./node_modules/core-js/modules/_array-reduce.js\");\n\n$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ \"./node_modules/core-js/modules/_strict-method.js\")([].reduce, true), 'Array', {\n  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])\n  reduce: function reduce(callbackfn /* , initialValue */) {\n    return $reduce(this, callbackfn, arguments.length, arguments[1], false);\n  }\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.array.reduce.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.slice.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.slice.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar html = __webpack_require__(/*! ./_html */ \"./node_modules/core-js/modules/_html.js\");\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/modules/_cof.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"./node_modules/core-js/modules/_to-absolute-index.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar arraySlice = [].slice;\n\n// fallback for not array-like ES3 strings and DOM objects\n$export($export.P + $export.F * __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  if (html) arraySlice.call(html);\n}), 'Array', {\n  slice: function slice(begin, end) {\n    var len = toLength(this.length);\n    var klass = cof(this);\n    end = end === undefined ? len : end;\n    if (klass == 'Array') return arraySlice.call(this, begin, end);\n    var start = toAbsoluteIndex(begin, len);\n    var upTo = toAbsoluteIndex(end, len);\n    var size = toLength(upTo - start);\n    var cloned = new Array(size);\n    var i = 0;\n    for (; i < size; i++) cloned[i] = klass == 'String'\n      ? this.charAt(start + i)\n      : this[start + i];\n    return cloned;\n  }\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.array.slice.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.some.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.some.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $some = __webpack_require__(/*! ./_array-methods */ \"./node_modules/core-js/modules/_array-methods.js\")(3);\n\n$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ \"./node_modules/core-js/modules/_strict-method.js\")([].some, true), 'Array', {\n  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])\n  some: function some(callbackfn /* , thisArg */) {\n    return $some(this, callbackfn, arguments[1]);\n  }\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.array.some.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.sort.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.sort.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar $sort = [].sort;\nvar test = [1, 2, 3];\n\n$export($export.P + $export.F * (fails(function () {\n  // IE8-\n  test.sort(undefined);\n}) || !fails(function () {\n  // V8 bug\n  test.sort(null);\n  // Old WebKit\n}) || !__webpack_require__(/*! ./_strict-method */ \"./node_modules/core-js/modules/_strict-method.js\")($sort)), 'Array', {\n  // 22.1.3.25 Array.prototype.sort(comparefn)\n  sort: function sort(comparefn) {\n    return comparefn === undefined\n      ? $sort.call(toObject(this))\n      : $sort.call(toObject(this), aFunction(comparefn));\n  }\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.array.sort.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.species.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.species.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("__webpack_require__(/*! ./_set-species */ \"./node_modules/core-js/modules/_set-species.js\")('Array');\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.array.species.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.now.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.now.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("// 20.3.3.1 / 15.9.4.4 Date.now()\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Date', { now: function () { return new Date().getTime(); } });\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.date.now.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-iso-string.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-iso-string.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar toISOString = __webpack_require__(/*! ./_date-to-iso-string */ \"./node_modules/core-js/modules/_date-to-iso-string.js\");\n\n// PhantomJS / old WebKit has a broken implementations\n$export($export.P + $export.F * (Date.prototype.toISOString !== toISOString), 'Date', {\n  toISOString: toISOString\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.date.to-iso-string.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-json.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-json.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/modules/_to-primitive.js\");\n\n$export($export.P + $export.F * __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  return new Date(NaN).toJSON() !== null\n    || Date.prototype.toJSON.call({ toISOString: function () { return 1; } }) !== 1;\n}), 'Date', {\n  // eslint-disable-next-line no-unused-vars\n  toJSON: function toJSON(key) {\n    var O = toObject(this);\n    var pv = toPrimitive(O);\n    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();\n  }\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.date.to-json.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-primitive.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("var TO_PRIMITIVE = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('toPrimitive');\nvar proto = Date.prototype;\n\nif (!(TO_PRIMITIVE in proto)) __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\")(proto, TO_PRIMITIVE, __webpack_require__(/*! ./_date-to-primitive */ \"./node_modules/core-js/modules/_date-to-primitive.js\"));\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.date.to-primitive.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-string.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-string.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("var DateProto = Date.prototype;\nvar INVALID_DATE = 'Invalid Date';\nvar TO_STRING = 'toString';\nvar $toString = DateProto[TO_STRING];\nvar getTime = DateProto.getTime;\nif (new Date(NaN) + '' != INVALID_DATE) {\n  __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\")(DateProto, TO_STRING, function toString() {\n    var value = getTime.call(this);\n    // eslint-disable-next-line no-self-compare\n    return value === value ? $toString.call(this) : INVALID_DATE;\n  });\n}\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.date.to-string.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.bind.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.bind.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.P, 'Function', { bind: __webpack_require__(/*! ./_bind */ \"./node_modules/core-js/modules/_bind.js\") });\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.function.bind.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.has-instance.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.has-instance.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/core-js/modules/_object-gpo.js\");\nvar HAS_INSTANCE = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('hasInstance');\nvar FunctionProto = Function.prototype;\n// 19.2.3.6 Function.prototype[@@hasInstance](V)\nif (!(HAS_INSTANCE in FunctionProto)) (__webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\").f)(FunctionProto, HAS_INSTANCE, { value: function (O) {\n  if (typeof this != 'function' || !isObject(O)) return false;\n  if (!isObject(this.prototype)) return O instanceof this;\n  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:\n  while (O = getPrototypeOf(O)) if (this.prototype === O) return true;\n  return false;\n} });\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.function.has-instance.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.name.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.name.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("var dP = (__webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\").f);\nvar FProto = Function.prototype;\nvar nameRE = /^\\s*function ([^ (]*)/;\nvar NAME = 'name';\n\n// 19.2.4.2 name\nNAME in FProto || __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") && dP(FProto, NAME, {\n  configurable: true,\n  get: function () {\n    try {\n      return ('' + this).match(nameRE)[1];\n    } catch (e) {\n      return '';\n    }\n  }\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.function.name.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.map.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/es6.map.js ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar strong = __webpack_require__(/*! ./_collection-strong */ \"./node_modules/core-js/modules/_collection-strong.js\");\nvar validate = __webpack_require__(/*! ./_validate-collection */ \"./node_modules/core-js/modules/_validate-collection.js\");\nvar MAP = 'Map';\n\n// 23.1 Map Objects\nmodule.exports = __webpack_require__(/*! ./_collection */ \"./node_modules/core-js/modules/_collection.js\")(MAP, function (get) {\n  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };\n}, {\n  // 23.1.3.6 Map.prototype.get(key)\n  get: function get(key) {\n    var entry = strong.getEntry(validate(this, MAP), key);\n    return entry && entry.v;\n  },\n  // 23.1.3.9 Map.prototype.set(key, value)\n  set: function set(key, value) {\n    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);\n  }\n}, strong, true);\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.map.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.acosh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.acosh.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("// 20.2.2.3 Math.acosh(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar log1p = __webpack_require__(/*! ./_math-log1p */ \"./node_modules/core-js/modules/_math-log1p.js\");\nvar sqrt = Math.sqrt;\nvar $acosh = Math.acosh;\n\n$export($export.S + $export.F * !($acosh\n  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509\n  && Math.floor($acosh(Number.MAX_VALUE)) == 710\n  // Tor Browser bug: Math.acosh(Infinity) -> NaN\n  && $acosh(Infinity) == Infinity\n), 'Math', {\n  acosh: function acosh(x) {\n    return (x = +x) < 1 ? NaN : x > 94906265.62425156\n      ? Math.log(x) + Math.LN2\n      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));\n  }\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.math.acosh.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.asinh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.asinh.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("// 20.2.2.5 Math.asinh(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $asinh = Math.asinh;\n\nfunction asinh(x) {\n  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));\n}\n\n// Tor Browser bug: Math.asinh(0) -> -0\n$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', { asinh: asinh });\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.math.asinh.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.atanh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.atanh.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("// 20.2.2.7 Math.atanh(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $atanh = Math.atanh;\n\n// Tor Browser bug: Math.atanh(-0) -> 0\n$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {\n  atanh: function atanh(x) {\n    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;\n  }\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.math.atanh.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.cbrt.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.cbrt.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("// 20.2.2.9 Math.cbrt(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar sign = __webpack_require__(/*! ./_math-sign */ \"./node_modules/core-js/modules/_math-sign.js\");\n\n$export($export.S, 'Math', {\n  cbrt: function cbrt(x) {\n    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);\n  }\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.math.cbrt.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.clz32.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.clz32.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("// 20.2.2.11 Math.clz32(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', {\n  clz32: function clz32(x) {\n    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;\n  }\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.math.clz32.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.cosh.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.cosh.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("// 20.2.2.12 Math.cosh(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar exp = Math.exp;\n\n$export($export.S, 'Math', {\n  cosh: function cosh(x) {\n    return (exp(x = +x) + exp(-x)) / 2;\n  }\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.math.cosh.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.expm1.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.expm1.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("// 20.2.2.14 Math.expm1(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $expm1 = __webpack_require__(/*! ./_math-expm1 */ \"./node_modules/core-js/modules/_math-expm1.js\");\n\n$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', { expm1: $expm1 });\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.math.expm1.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.fround.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.fround.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("// 20.2.2.16 Math.fround(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', { fround: __webpack_require__(/*! ./_math-fround */ \"./node_modules/core-js/modules/_math-fround.js\") });\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.math.fround.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.hypot.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.hypot.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar abs = Math.abs;\n\n$export($export.S, 'Math', {\n  hypot: function hypot(value1, value2) { // eslint-disable-line no-unused-vars\n    var sum = 0;\n    var i = 0;\n    var aLen = arguments.length;\n    var larg = 0;\n    var arg, div;\n    while (i < aLen) {\n      arg = abs(arguments[i++]);\n      if (larg < arg) {\n        div = larg / arg;\n        sum = sum * div * div + 1;\n        larg = arg;\n      } else if (arg > 0) {\n        div = arg / larg;\n        sum += div * div;\n      } else sum += arg;\n    }\n    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);\n  }\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.math.hypot.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.imul.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.imul.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("// 20.2.2.18 Math.imul(x, y)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $imul = Math.imul;\n\n// some WebKit versions fails with big numbers, some has wrong arity\n$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;\n}), 'Math', {\n  imul: function imul(x, y) {\n    var UINT16 = 0xffff;\n    var xn = +x;\n    var yn = +y;\n    var xl = UINT16 & xn;\n    var yl = UINT16 & yn;\n    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);\n  }\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.math.imul.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.log10.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.log10.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("// 20.2.2.21 Math.log10(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', {\n  log10: function log10(x) {\n    return Math.log(x) * Math.LOG10E;\n  }\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.math.log10.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.log1p.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.log1p.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("// 20.2.2.20 Math.log1p(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', { log1p: __webpack_require__(/*! ./_math-log1p */ \"./node_modules/core-js/modules/_math-log1p.js\") });\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.math.log1p.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.log2.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.log2.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("// 20.2.2.22 Math.log2(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', {\n  log2: function log2(x) {\n    return Math.log(x) / Math.LN2;\n  }\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.math.log2.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.sign.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.sign.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("// 20.2.2.28 Math.sign(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', { sign: __webpack_require__(/*! ./_math-sign */ \"./node_modules/core-js/modules/_math-sign.js\") });\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.math.sign.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.sinh.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.sinh.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("// 20.2.2.30 Math.sinh(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar expm1 = __webpack_require__(/*! ./_math-expm1 */ \"./node_modules/core-js/modules/_math-expm1.js\");\nvar exp = Math.exp;\n\n// V8 near Chromium 38 has a problem with very small numbers\n$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  return !Math.sinh(-2e-17) != -2e-17;\n}), 'Math', {\n  sinh: function sinh(x) {\n    return Math.abs(x = +x) < 1\n      ? (expm1(x) - expm1(-x)) / 2\n      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);\n  }\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.math.sinh.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.tanh.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.tanh.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("// 20.2.2.33 Math.tanh(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar expm1 = __webpack_require__(/*! ./_math-expm1 */ \"./node_modules/core-js/modules/_math-expm1.js\");\nvar exp = Math.exp;\n\n$export($export.S, 'Math', {\n  tanh: function tanh(x) {\n    var a = expm1(x = +x);\n    var b = expm1(-x);\n    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));\n  }\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.math.tanh.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.trunc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.trunc.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("// 20.2.2.34 Math.trunc(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', {\n  trunc: function trunc(it) {\n    return (it > 0 ? Math.floor : Math.ceil)(it);\n  }\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.math.trunc.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.constructor.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.constructor.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/modules/_cof.js\");\nvar inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ \"./node_modules/core-js/modules/_inherit-if-required.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/modules/_to-primitive.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar gOPN = (__webpack_require__(/*! ./_object-gopn */ \"./node_modules/core-js/modules/_object-gopn.js\").f);\nvar gOPD = (__webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/modules/_object-gopd.js\").f);\nvar dP = (__webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\").f);\nvar $trim = (__webpack_require__(/*! ./_string-trim */ \"./node_modules/core-js/modules/_string-trim.js\").trim);\nvar NUMBER = 'Number';\nvar $Number = global[NUMBER];\nvar Base = $Number;\nvar proto = $Number.prototype;\n// Opera ~12 has broken Object#toString\nvar BROKEN_COF = cof(__webpack_require__(/*! ./_object-create */ \"./node_modules/core-js/modules/_object-create.js\")(proto)) == NUMBER;\nvar TRIM = 'trim' in String.prototype;\n\n// 7.1.3 ToNumber(argument)\nvar toNumber = function (argument) {\n  var it = toPrimitive(argument, false);\n  if (typeof it == 'string' && it.length > 2) {\n    it = TRIM ? it.trim() : $trim(it, 3);\n    var first = it.charCodeAt(0);\n    var third, radix, maxCode;\n    if (first === 43 || first === 45) {\n      third = it.charCodeAt(2);\n      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix\n    } else if (first === 48) {\n      switch (it.charCodeAt(1)) {\n        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i\n        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i\n        default: return +it;\n      }\n      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {\n        code = digits.charCodeAt(i);\n        // parseInt parses a string to a first unavailable symbol\n        // but ToNumber should return NaN if a string contains unavailable symbols\n        if (code < 48 || code > maxCode) return NaN;\n      } return parseInt(digits, radix);\n    }\n  } return +it;\n};\n\nif (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {\n  $Number = function Number(value) {\n    var it = arguments.length < 1 ? 0 : value;\n    var that = this;\n    return that instanceof $Number\n      // check on 1..constructor(foo) case\n      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)\n        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);\n  };\n  for (var keys = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") ? gOPN(Base) : (\n    // ES3:\n    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +\n    // ES6 (in case, if modules with ES6 Number statics required before):\n    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +\n    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'\n  ).split(','), j = 0, key; keys.length > j; j++) {\n    if (has(Base, key = keys[j]) && !has($Number, key)) {\n      dP($Number, key, gOPD(Base, key));\n    }\n  }\n  $Number.prototype = proto;\n  proto.constructor = $Number;\n  __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\")(global, NUMBER, $Number);\n}\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.number.constructor.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.epsilon.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.epsilon.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("// 20.1.2.1 Number.EPSILON\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Number', { EPSILON: Math.pow(2, -52) });\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.number.epsilon.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-finite.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-finite.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("// 20.1.2.2 Number.isFinite(number)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar _isFinite = (__webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\").isFinite);\n\n$export($export.S, 'Number', {\n  isFinite: function isFinite(it) {\n    return typeof it == 'number' && _isFinite(it);\n  }\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.number.is-finite.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-integer.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-integer.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("// 20.1.2.3 Number.isInteger(number)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Number', { isInteger: __webpack_require__(/*! ./_is-integer */ \"./node_modules/core-js/modules/_is-integer.js\") });\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.number.is-integer.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-nan.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-nan.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("// 20.1.2.4 Number.isNaN(number)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Number', {\n  isNaN: function isNaN(number) {\n    // eslint-disable-next-line no-self-compare\n    return number != number;\n  }\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.number.is-nan.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-safe-integer.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-safe-integer.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("// 20.1.2.5 Number.isSafeInteger(number)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar isInteger = __webpack_require__(/*! ./_is-integer */ \"./node_modules/core-js/modules/_is-integer.js\");\nvar abs = Math.abs;\n\n$export($export.S, 'Number', {\n  isSafeInteger: function isSafeInteger(number) {\n    return isInteger(number) && abs(number) <= 0x1fffffffffffff;\n  }\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.number.is-safe-integer.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.max-safe-integer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.max-safe-integer.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("// 20.1.2.6 Number.MAX_SAFE_INTEGER\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Number', { MAX_SAFE_INTEGER: 0x1fffffffffffff });\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.number.max-safe-integer.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.min-safe-integer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.min-safe-integer.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("// 20.1.2.10 Number.MIN_SAFE_INTEGER\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Number', { MIN_SAFE_INTEGER: -0x1fffffffffffff });\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.number.min-safe-integer.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.parse-float.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.parse-float.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $parseFloat = __webpack_require__(/*! ./_parse-float */ \"./node_modules/core-js/modules/_parse-float.js\");\n// 20.1.2.12 Number.parseFloat(string)\n$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', { parseFloat: $parseFloat });\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.number.parse-float.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.parse-int.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.parse-int.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $parseInt = __webpack_require__(/*! ./_parse-int */ \"./node_modules/core-js/modules/_parse-int.js\");\n// 20.1.2.13 Number.parseInt(string, radix)\n$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', { parseInt: $parseInt });\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.number.parse-int.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.to-fixed.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.to-fixed.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/modules/_to-integer.js\");\nvar aNumberValue = __webpack_require__(/*! ./_a-number-value */ \"./node_modules/core-js/modules/_a-number-value.js\");\nvar repeat = __webpack_require__(/*! ./_string-repeat */ \"./node_modules/core-js/modules/_string-repeat.js\");\nvar $toFixed = 1.0.toFixed;\nvar floor = Math.floor;\nvar data = [0, 0, 0, 0, 0, 0];\nvar ERROR = 'Number.toFixed: incorrect invocation!';\nvar ZERO = '0';\n\nvar multiply = function (n, c) {\n  var i = -1;\n  var c2 = c;\n  while (++i < 6) {\n    c2 += n * data[i];\n    data[i] = c2 % 1e7;\n    c2 = floor(c2 / 1e7);\n  }\n};\nvar divide = function (n) {\n  var i = 6;\n  var c = 0;\n  while (--i >= 0) {\n    c += data[i];\n    data[i] = floor(c / n);\n    c = (c % n) * 1e7;\n  }\n};\nvar numToString = function () {\n  var i = 6;\n  var s = '';\n  while (--i >= 0) {\n    if (s !== '' || i === 0 || data[i] !== 0) {\n      var t = String(data[i]);\n      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;\n    }\n  } return s;\n};\nvar pow = function (x, n, acc) {\n  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);\n};\nvar log = function (x) {\n  var n = 0;\n  var x2 = x;\n  while (x2 >= 4096) {\n    n += 12;\n    x2 /= 4096;\n  }\n  while (x2 >= 2) {\n    n += 1;\n    x2 /= 2;\n  } return n;\n};\n\n$export($export.P + $export.F * (!!$toFixed && (\n  0.00008.toFixed(3) !== '0.000' ||\n  0.9.toFixed(0) !== '1' ||\n  1.255.toFixed(2) !== '1.25' ||\n  1000000000000000128.0.toFixed(0) !== '1000000000000000128'\n) || !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  // V8 ~ Android 4.3-\n  $toFixed.call({});\n})), 'Number', {\n  toFixed: function toFixed(fractionDigits) {\n    var x = aNumberValue(this, ERROR);\n    var f = toInteger(fractionDigits);\n    var s = '';\n    var m = ZERO;\n    var e, z, j, k;\n    if (f < 0 || f > 20) throw RangeError(ERROR);\n    // eslint-disable-next-line no-self-compare\n    if (x != x) return 'NaN';\n    if (x <= -1e21 || x >= 1e21) return String(x);\n    if (x < 0) {\n      s = '-';\n      x = -x;\n    }\n    if (x > 1e-21) {\n      e = log(x * pow(2, 69, 1)) - 69;\n      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);\n      z *= 0x10000000000000;\n      e = 52 - e;\n      if (e > 0) {\n        multiply(0, z);\n        j = f;\n        while (j >= 7) {\n          multiply(1e7, 0);\n          j -= 7;\n        }\n        multiply(pow(10, j, 1), 0);\n        j = e - 1;\n        while (j >= 23) {\n          divide(1 << 23);\n          j -= 23;\n        }\n        divide(1 << j);\n        multiply(1, 1);\n        divide(2);\n        m = numToString();\n      } else {\n        multiply(0, z);\n        multiply(1 << -e, 0);\n        m = numToString() + repeat.call(ZERO, f);\n      }\n    }\n    if (f > 0) {\n      k = m.length;\n      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));\n    } else {\n      m = s + m;\n    } return m;\n  }\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.number.to-fixed.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.to-precision.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.to-precision.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar aNumberValue = __webpack_require__(/*! ./_a-number-value */ \"./node_modules/core-js/modules/_a-number-value.js\");\nvar $toPrecision = 1.0.toPrecision;\n\n$export($export.P + $export.F * ($fails(function () {\n  // IE7-\n  return $toPrecision.call(1, undefined) !== '1';\n}) || !$fails(function () {\n  // V8 ~ Android 4.3-\n  $toPrecision.call({});\n})), 'Number', {\n  toPrecision: function toPrecision(precision) {\n    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');\n    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);\n  }\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.number.to-precision.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.assign.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.assign.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("// 19.1.3.1 Object.assign(target, source)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ \"./node_modules/core-js/modules/_object-assign.js\") });\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.object.assign.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.create.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.create.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])\n$export($export.S, 'Object', { create: __webpack_require__(/*! ./_object-create */ \"./node_modules/core-js/modules/_object-create.js\") });\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.object.create.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.define-properties.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.define-properties.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)\n$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\"), 'Object', { defineProperties: __webpack_require__(/*! ./_object-dps */ \"./node_modules/core-js/modules/_object-dps.js\") });\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.object.define-properties.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.define-property.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.define-property.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)\n$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\"), 'Object', { defineProperty: (__webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\").f) });\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.object.define-property.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.freeze.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.freeze.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("// 19.1.2.5 Object.freeze(O)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar meta = (__webpack_require__(/*! ./_meta */ \"./node_modules/core-js/modules/_meta.js\").onFreeze);\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/core-js/modules/_object-sap.js\")('freeze', function ($freeze) {\n  return function freeze(it) {\n    return $freeze && isObject(it) ? $freeze(meta(it)) : it;\n  };\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.object.freeze.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js":
/*!********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar $getOwnPropertyDescriptor = (__webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/modules/_object-gopd.js\").f);\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/core-js/modules/_object-sap.js\")('getOwnPropertyDescriptor', function () {\n  return function getOwnPropertyDescriptor(it, key) {\n    return $getOwnPropertyDescriptor(toIObject(it), key);\n  };\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.get-own-property-names.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.get-own-property-names.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("// 19.1.2.7 Object.getOwnPropertyNames(O)\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/core-js/modules/_object-sap.js\")('getOwnPropertyNames', function () {\n  return (__webpack_require__(/*! ./_object-gopn-ext */ \"./node_modules/core-js/modules/_object-gopn-ext.js\").f);\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.object.get-own-property-names.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.get-prototype-of.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.get-prototype-of.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("// 19.1.2.9 Object.getPrototypeOf(O)\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar $getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/core-js/modules/_object-gpo.js\");\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/core-js/modules/_object-sap.js\")('getPrototypeOf', function () {\n  return function getPrototypeOf(it) {\n    return $getPrototypeOf(toObject(it));\n  };\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.object.get-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is-extensible.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is-extensible.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("// 19.1.2.11 Object.isExtensible(O)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/core-js/modules/_object-sap.js\")('isExtensible', function ($isExtensible) {\n  return function isExtensible(it) {\n    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;\n  };\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.object.is-extensible.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is-frozen.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is-frozen.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("// 19.1.2.12 Object.isFrozen(O)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/core-js/modules/_object-sap.js\")('isFrozen', function ($isFrozen) {\n  return function isFrozen(it) {\n    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;\n  };\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.object.is-frozen.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is-sealed.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is-sealed.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("// 19.1.2.13 Object.isSealed(O)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/core-js/modules/_object-sap.js\")('isSealed', function ($isSealed) {\n  return function isSealed(it) {\n    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;\n  };\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.object.is-sealed.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("// 19.1.3.10 Object.is(value1, value2)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n$export($export.S, 'Object', { is: __webpack_require__(/*! ./_same-value */ \"./node_modules/core-js/modules/_same-value.js\") });\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.object.is.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.keys.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("// 19.1.2.14 Object.keys(O)\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar $keys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/modules/_object-keys.js\");\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/core-js/modules/_object-sap.js\")('keys', function () {\n  return function keys(it) {\n    return $keys(toObject(it));\n  };\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.object.keys.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.prevent-extensions.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.prevent-extensions.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("// 19.1.2.15 Object.preventExtensions(O)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar meta = (__webpack_require__(/*! ./_meta */ \"./node_modules/core-js/modules/_meta.js\").onFreeze);\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/core-js/modules/_object-sap.js\")('preventExtensions', function ($preventExtensions) {\n  return function preventExtensions(it) {\n    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;\n  };\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.object.prevent-extensions.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.seal.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.seal.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("// 19.1.2.17 Object.seal(O)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar meta = (__webpack_require__(/*! ./_meta */ \"./node_modules/core-js/modules/_meta.js\").onFreeze);\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/core-js/modules/_object-sap.js\")('seal', function ($seal) {\n  return function seal(it) {\n    return $seal && isObject(it) ? $seal(meta(it)) : it;\n  };\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.object.seal.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.set-prototype-of.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.set-prototype-of.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("// 19.1.3.19 Object.setPrototypeOf(O, proto)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n$export($export.S, 'Object', { setPrototypeOf: (__webpack_require__(/*! ./_set-proto */ \"./node_modules/core-js/modules/_set-proto.js\").set) });\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.object.set-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.to-string.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n// 19.1.3.6 Object.prototype.toString()\nvar classof = __webpack_require__(/*! ./_classof */ \"./node_modules/core-js/modules/_classof.js\");\nvar test = {};\ntest[__webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('toStringTag')] = 'z';\nif (test + '' != '[object z]') {\n  __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\")(Object.prototype, 'toString', function toString() {\n    return '[object ' + classof(this) + ']';\n  }, true);\n}\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.object.to-string.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.parse-float.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.parse-float.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $parseFloat = __webpack_require__(/*! ./_parse-float */ \"./node_modules/core-js/modules/_parse-float.js\");\n// 18.2.4 parseFloat(string)\n$export($export.G + $export.F * (parseFloat != $parseFloat), { parseFloat: $parseFloat });\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.parse-float.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.parse-int.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.parse-int.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $parseInt = __webpack_require__(/*! ./_parse-int */ \"./node_modules/core-js/modules/_parse-int.js\");\n// 18.2.5 parseInt(string, radix)\n$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.parse-int.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.promise.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/es6.promise.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar LIBRARY = __webpack_require__(/*! ./_library */ \"./node_modules/core-js/modules/_library.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/modules/_ctx.js\");\nvar classof = __webpack_require__(/*! ./_classof */ \"./node_modules/core-js/modules/_classof.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\nvar anInstance = __webpack_require__(/*! ./_an-instance */ \"./node_modules/core-js/modules/_an-instance.js\");\nvar forOf = __webpack_require__(/*! ./_for-of */ \"./node_modules/core-js/modules/_for-of.js\");\nvar speciesConstructor = __webpack_require__(/*! ./_species-constructor */ \"./node_modules/core-js/modules/_species-constructor.js\");\nvar task = (__webpack_require__(/*! ./_task */ \"./node_modules/core-js/modules/_task.js\").set);\nvar microtask = __webpack_require__(/*! ./_microtask */ \"./node_modules/core-js/modules/_microtask.js\")();\nvar newPromiseCapabilityModule = __webpack_require__(/*! ./_new-promise-capability */ \"./node_modules/core-js/modules/_new-promise-capability.js\");\nvar perform = __webpack_require__(/*! ./_perform */ \"./node_modules/core-js/modules/_perform.js\");\nvar userAgent = __webpack_require__(/*! ./_user-agent */ \"./node_modules/core-js/modules/_user-agent.js\");\nvar promiseResolve = __webpack_require__(/*! ./_promise-resolve */ \"./node_modules/core-js/modules/_promise-resolve.js\");\nvar PROMISE = 'Promise';\nvar TypeError = global.TypeError;\nvar process = global.process;\nvar versions = process && process.versions;\nvar v8 = versions && versions.v8 || '';\nvar $Promise = global[PROMISE];\nvar isNode = classof(process) == 'process';\nvar empty = function () { /* empty */ };\nvar Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;\nvar newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;\n\nvar USE_NATIVE = !!function () {\n  try {\n    // correct subclassing with @@species support\n    var promise = $Promise.resolve(1);\n    var FakePromise = (promise.constructor = {})[__webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('species')] = function (exec) {\n      exec(empty, empty);\n    };\n    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test\n    return (isNode || typeof PromiseRejectionEvent == 'function')\n      && promise.then(empty) instanceof FakePromise\n      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables\n      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565\n      // we can't detect it synchronously, so just check versions\n      && v8.indexOf('6.6') !== 0\n      && userAgent.indexOf('Chrome/66') === -1;\n  } catch (e) { /* empty */ }\n}();\n\n// helpers\nvar isThenable = function (it) {\n  var then;\n  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;\n};\nvar notify = function (promise, isReject) {\n  if (promise._n) return;\n  promise._n = true;\n  var chain = promise._c;\n  microtask(function () {\n    var value = promise._v;\n    var ok = promise._s == 1;\n    var i = 0;\n    var run = function (reaction) {\n      var handler = ok ? reaction.ok : reaction.fail;\n      var resolve = reaction.resolve;\n      var reject = reaction.reject;\n      var domain = reaction.domain;\n      var result, then, exited;\n      try {\n        if (handler) {\n          if (!ok) {\n            if (promise._h == 2) onHandleUnhandled(promise);\n            promise._h = 1;\n          }\n          if (handler === true) result = value;\n          else {\n            if (domain) domain.enter();\n            result = handler(value); // may throw\n            if (domain) {\n              domain.exit();\n              exited = true;\n            }\n          }\n          if (result === reaction.promise) {\n            reject(TypeError('Promise-chain cycle'));\n          } else if (then = isThenable(result)) {\n            then.call(result, resolve, reject);\n          } else resolve(result);\n        } else reject(value);\n      } catch (e) {\n        if (domain && !exited) domain.exit();\n        reject(e);\n      }\n    };\n    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach\n    promise._c = [];\n    promise._n = false;\n    if (isReject && !promise._h) onUnhandled(promise);\n  });\n};\nvar onUnhandled = function (promise) {\n  task.call(global, function () {\n    var value = promise._v;\n    var unhandled = isUnhandled(promise);\n    var result, handler, console;\n    if (unhandled) {\n      result = perform(function () {\n        if (isNode) {\n          process.emit('unhandledRejection', value, promise);\n        } else if (handler = global.onunhandledrejection) {\n          handler({ promise: promise, reason: value });\n        } else if ((console = global.console) && console.error) {\n          console.error('Unhandled promise rejection', value);\n        }\n      });\n      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should\n      promise._h = isNode || isUnhandled(promise) ? 2 : 1;\n    } promise._a = undefined;\n    if (unhandled && result.e) throw result.v;\n  });\n};\nvar isUnhandled = function (promise) {\n  return promise._h !== 1 && (promise._a || promise._c).length === 0;\n};\nvar onHandleUnhandled = function (promise) {\n  task.call(global, function () {\n    var handler;\n    if (isNode) {\n      process.emit('rejectionHandled', promise);\n    } else if (handler = global.onrejectionhandled) {\n      handler({ promise: promise, reason: promise._v });\n    }\n  });\n};\nvar $reject = function (value) {\n  var promise = this;\n  if (promise._d) return;\n  promise._d = true;\n  promise = promise._w || promise; // unwrap\n  promise._v = value;\n  promise._s = 2;\n  if (!promise._a) promise._a = promise._c.slice();\n  notify(promise, true);\n};\nvar $resolve = function (value) {\n  var promise = this;\n  var then;\n  if (promise._d) return;\n  promise._d = true;\n  promise = promise._w || promise; // unwrap\n  try {\n    if (promise === value) throw TypeError(\"Promise can't be resolved itself\");\n    if (then = isThenable(value)) {\n      microtask(function () {\n        var wrapper = { _w: promise, _d: false }; // wrap\n        try {\n          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));\n        } catch (e) {\n          $reject.call(wrapper, e);\n        }\n      });\n    } else {\n      promise._v = value;\n      promise._s = 1;\n      notify(promise, false);\n    }\n  } catch (e) {\n    $reject.call({ _w: promise, _d: false }, e); // wrap\n  }\n};\n\n// constructor polyfill\nif (!USE_NATIVE) {\n  // 25.4.3.1 Promise(executor)\n  $Promise = function Promise(executor) {\n    anInstance(this, $Promise, PROMISE, '_h');\n    aFunction(executor);\n    Internal.call(this);\n    try {\n      executor(ctx($resolve, this, 1), ctx($reject, this, 1));\n    } catch (err) {\n      $reject.call(this, err);\n    }\n  };\n  // eslint-disable-next-line no-unused-vars\n  Internal = function Promise(executor) {\n    this._c = [];             // <- awaiting reactions\n    this._a = undefined;      // <- checked in isUnhandled reactions\n    this._s = 0;              // <- state\n    this._d = false;          // <- done\n    this._v = undefined;      // <- value\n    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled\n    this._n = false;          // <- notify\n  };\n  Internal.prototype = __webpack_require__(/*! ./_redefine-all */ \"./node_modules/core-js/modules/_redefine-all.js\")($Promise.prototype, {\n    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)\n    then: function then(onFulfilled, onRejected) {\n      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));\n      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;\n      reaction.fail = typeof onRejected == 'function' && onRejected;\n      reaction.domain = isNode ? process.domain : undefined;\n      this._c.push(reaction);\n      if (this._a) this._a.push(reaction);\n      if (this._s) notify(this, false);\n      return reaction.promise;\n    },\n    // 25.4.5.1 Promise.prototype.catch(onRejected)\n    'catch': function (onRejected) {\n      return this.then(undefined, onRejected);\n    }\n  });\n  OwnPromiseCapability = function () {\n    var promise = new Internal();\n    this.promise = promise;\n    this.resolve = ctx($resolve, promise, 1);\n    this.reject = ctx($reject, promise, 1);\n  };\n  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {\n    return C === $Promise || C === Wrapper\n      ? new OwnPromiseCapability(C)\n      : newGenericPromiseCapability(C);\n  };\n}\n\n$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });\n__webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/modules/_set-to-string-tag.js\")($Promise, PROMISE);\n__webpack_require__(/*! ./_set-species */ \"./node_modules/core-js/modules/_set-species.js\")(PROMISE);\nWrapper = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/modules/_core.js\")[PROMISE];\n\n// statics\n$export($export.S + $export.F * !USE_NATIVE, PROMISE, {\n  // 25.4.4.5 Promise.reject(r)\n  reject: function reject(r) {\n    var capability = newPromiseCapability(this);\n    var $$reject = capability.reject;\n    $$reject(r);\n    return capability.promise;\n  }\n});\n$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {\n  // 25.4.4.6 Promise.resolve(x)\n  resolve: function resolve(x) {\n    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);\n  }\n});\n$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(/*! ./_iter-detect */ \"./node_modules/core-js/modules/_iter-detect.js\")(function (iter) {\n  $Promise.all(iter)['catch'](empty);\n})), PROMISE, {\n  // 25.4.4.1 Promise.all(iterable)\n  all: function all(iterable) {\n    var C = this;\n    var capability = newPromiseCapability(C);\n    var resolve = capability.resolve;\n    var reject = capability.reject;\n    var result = perform(function () {\n      var values = [];\n      var index = 0;\n      var remaining = 1;\n      forOf(iterable, false, function (promise) {\n        var $index = index++;\n        var alreadyCalled = false;\n        values.push(undefined);\n        remaining++;\n        C.resolve(promise).then(function (value) {\n          if (alreadyCalled) return;\n          alreadyCalled = true;\n          values[$index] = value;\n          --remaining || resolve(values);\n        }, reject);\n      });\n      --remaining || resolve(values);\n    });\n    if (result.e) reject(result.v);\n    return capability.promise;\n  },\n  // 25.4.4.4 Promise.race(iterable)\n  race: function race(iterable) {\n    var C = this;\n    var capability = newPromiseCapability(C);\n    var reject = capability.reject;\n    var result = perform(function () {\n      forOf(iterable, false, function (promise) {\n        C.resolve(promise).then(capability.resolve, reject);\n      });\n    });\n    if (result.e) reject(result.v);\n    return capability.promise;\n  }\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.promise.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.apply.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.apply.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar rApply = ((__webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\").Reflect) || {}).apply;\nvar fApply = Function.apply;\n// MS Edge argumentsList argument is optional\n$export($export.S + $export.F * !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  rApply(function () { /* empty */ });\n}), 'Reflect', {\n  apply: function apply(target, thisArgument, argumentsList) {\n    var T = aFunction(target);\n    var L = anObject(argumentsList);\n    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);\n  }\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.reflect.apply.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.construct.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.construct.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar create = __webpack_require__(/*! ./_object-create */ \"./node_modules/core-js/modules/_object-create.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar bind = __webpack_require__(/*! ./_bind */ \"./node_modules/core-js/modules/_bind.js\");\nvar rConstruct = ((__webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\").Reflect) || {}).construct;\n\n// MS Edge supports only 2 arguments and argumentsList argument is optional\n// FF Nightly sets third argument as `new.target`, but does not create `this` from it\nvar NEW_TARGET_BUG = fails(function () {\n  function F() { /* empty */ }\n  return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);\n});\nvar ARGS_BUG = !fails(function () {\n  rConstruct(function () { /* empty */ });\n});\n\n$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {\n  construct: function construct(Target, args /* , newTarget */) {\n    aFunction(Target);\n    anObject(args);\n    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);\n    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);\n    if (Target == newTarget) {\n      // w/o altered newTarget, optimization for 0-4 arguments\n      switch (args.length) {\n        case 0: return new Target();\n        case 1: return new Target(args[0]);\n        case 2: return new Target(args[0], args[1]);\n        case 3: return new Target(args[0], args[1], args[2]);\n        case 4: return new Target(args[0], args[1], args[2], args[3]);\n      }\n      // w/o altered newTarget, lot of arguments case\n      var $args = [null];\n      $args.push.apply($args, args);\n      return new (bind.apply(Target, $args))();\n    }\n    // with altered newTarget, not support built-in constructors\n    var proto = newTarget.prototype;\n    var instance = create(isObject(proto) ? proto : Object.prototype);\n    var result = Function.apply.call(Target, instance, args);\n    return isObject(result) ? result : instance;\n  }\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.reflect.construct.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.define-property.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.define-property.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)\nvar dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/modules/_to-primitive.js\");\n\n// MS Edge has broken Reflect.defineProperty - throwing instead of returning false\n$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  // eslint-disable-next-line no-undef\n  Reflect.defineProperty(dP.f({}, 1, { value: 1 }), 1, { value: 2 });\n}), 'Reflect', {\n  defineProperty: function defineProperty(target, propertyKey, attributes) {\n    anObject(target);\n    propertyKey = toPrimitive(propertyKey, true);\n    anObject(attributes);\n    try {\n      dP.f(target, propertyKey, attributes);\n      return true;\n    } catch (e) {\n      return false;\n    }\n  }\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.reflect.define-property.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.delete-property.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.delete-property.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("// 26.1.4 Reflect.deleteProperty(target, propertyKey)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar gOPD = (__webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/modules/_object-gopd.js\").f);\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\n\n$export($export.S, 'Reflect', {\n  deleteProperty: function deleteProperty(target, propertyKey) {\n    var desc = gOPD(anObject(target), propertyKey);\n    return desc && !desc.configurable ? false : delete target[propertyKey];\n  }\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.reflect.delete-property.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.enumerate.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.enumerate.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n// 26.1.5 Reflect.enumerate(target)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar Enumerate = function (iterated) {\n  this._t = anObject(iterated); // target\n  this._i = 0;                  // next index\n  var keys = this._k = [];      // keys\n  var key;\n  for (key in iterated) keys.push(key);\n};\n__webpack_require__(/*! ./_iter-create */ \"./node_modules/core-js/modules/_iter-create.js\")(Enumerate, 'Object', function () {\n  var that = this;\n  var keys = that._k;\n  var key;\n  do {\n    if (that._i >= keys.length) return { value: undefined, done: true };\n  } while (!((key = keys[that._i++]) in that._t));\n  return { value: key, done: false };\n});\n\n$export($export.S, 'Reflect', {\n  enumerate: function enumerate(target) {\n    return new Enumerate(target);\n  }\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.reflect.enumerate.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)\nvar gOPD = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/modules/_object-gopd.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\n\n$export($export.S, 'Reflect', {\n  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {\n    return gOPD.f(anObject(target), propertyKey);\n  }\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get-prototype-of.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get-prototype-of.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("// 26.1.8 Reflect.getPrototypeOf(target)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar getProto = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/core-js/modules/_object-gpo.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\n\n$export($export.S, 'Reflect', {\n  getPrototypeOf: function getPrototypeOf(target) {\n    return getProto(anObject(target));\n  }\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.reflect.get-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("// 26.1.6 Reflect.get(target, propertyKey [, receiver])\nvar gOPD = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/modules/_object-gopd.js\");\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/core-js/modules/_object-gpo.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\n\nfunction get(target, propertyKey /* , receiver */) {\n  var receiver = arguments.length < 3 ? target : arguments[2];\n  var desc, proto;\n  if (anObject(target) === receiver) return target[propertyKey];\n  if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value')\n    ? desc.value\n    : desc.get !== undefined\n      ? desc.get.call(receiver)\n      : undefined;\n  if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);\n}\n\n$export($export.S, 'Reflect', { get: get });\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.reflect.get.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.has.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.has.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("// 26.1.9 Reflect.has(target, propertyKey)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Reflect', {\n  has: function has(target, propertyKey) {\n    return propertyKey in target;\n  }\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.reflect.has.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.is-extensible.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.is-extensible.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("// 26.1.10 Reflect.isExtensible(target)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar $isExtensible = Object.isExtensible;\n\n$export($export.S, 'Reflect', {\n  isExtensible: function isExtensible(target) {\n    anObject(target);\n    return $isExtensible ? $isExtensible(target) : true;\n  }\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.reflect.is-extensible.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.own-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.own-keys.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("// 26.1.11 Reflect.ownKeys(target)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Reflect', { ownKeys: __webpack_require__(/*! ./_own-keys */ \"./node_modules/core-js/modules/_own-keys.js\") });\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.reflect.own-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.prevent-extensions.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.prevent-extensions.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("// 26.1.12 Reflect.preventExtensions(target)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar $preventExtensions = Object.preventExtensions;\n\n$export($export.S, 'Reflect', {\n  preventExtensions: function preventExtensions(target) {\n    anObject(target);\n    try {\n      if ($preventExtensions) $preventExtensions(target);\n      return true;\n    } catch (e) {\n      return false;\n    }\n  }\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.reflect.prevent-extensions.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.set-prototype-of.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.set-prototype-of.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("// 26.1.14 Reflect.setPrototypeOf(target, proto)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar setProto = __webpack_require__(/*! ./_set-proto */ \"./node_modules/core-js/modules/_set-proto.js\");\n\nif (setProto) $export($export.S, 'Reflect', {\n  setPrototypeOf: function setPrototypeOf(target, proto) {\n    setProto.check(target, proto);\n    try {\n      setProto.set(target, proto);\n      return true;\n    } catch (e) {\n      return false;\n    }\n  }\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.reflect.set-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.set.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.set.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])\nvar dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\");\nvar gOPD = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/modules/_object-gopd.js\");\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/core-js/modules/_object-gpo.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/modules/_property-desc.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\n\nfunction set(target, propertyKey, V /* , receiver */) {\n  var receiver = arguments.length < 4 ? target : arguments[3];\n  var ownDesc = gOPD.f(anObject(target), propertyKey);\n  var existingDescriptor, proto;\n  if (!ownDesc) {\n    if (isObject(proto = getPrototypeOf(target))) {\n      return set(proto, propertyKey, V, receiver);\n    }\n    ownDesc = createDesc(0);\n  }\n  if (has(ownDesc, 'value')) {\n    if (ownDesc.writable === false || !isObject(receiver)) return false;\n    if (existingDescriptor = gOPD.f(receiver, propertyKey)) {\n      if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;\n      existingDescriptor.value = V;\n      dP.f(receiver, propertyKey, existingDescriptor);\n    } else dP.f(receiver, propertyKey, createDesc(0, V));\n    return true;\n  }\n  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);\n}\n\n$export($export.S, 'Reflect', { set: set });\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.reflect.set.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.constructor.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.constructor.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ \"./node_modules/core-js/modules/_inherit-if-required.js\");\nvar dP = (__webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\").f);\nvar gOPN = (__webpack_require__(/*! ./_object-gopn */ \"./node_modules/core-js/modules/_object-gopn.js\").f);\nvar isRegExp = __webpack_require__(/*! ./_is-regexp */ \"./node_modules/core-js/modules/_is-regexp.js\");\nvar $flags = __webpack_require__(/*! ./_flags */ \"./node_modules/core-js/modules/_flags.js\");\nvar $RegExp = global.RegExp;\nvar Base = $RegExp;\nvar proto = $RegExp.prototype;\nvar re1 = /a/g;\nvar re2 = /a/g;\n// \"new\" creates a new object, old webkit buggy here\nvar CORRECT_NEW = new $RegExp(re1) !== re1;\n\nif (__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") && (!CORRECT_NEW || __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  re2[__webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('match')] = false;\n  // RegExp constructor can alter flags and IsRegExp works correct with @@match\n  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';\n}))) {\n  $RegExp = function RegExp(p, f) {\n    var tiRE = this instanceof $RegExp;\n    var piRE = isRegExp(p);\n    var fiU = f === undefined;\n    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p\n      : inheritIfRequired(CORRECT_NEW\n        ? new Base(piRE && !fiU ? p.source : p, f)\n        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)\n      , tiRE ? this : proto, $RegExp);\n  };\n  var proxy = function (key) {\n    key in $RegExp || dP($RegExp, key, {\n      configurable: true,\n      get: function () { return Base[key]; },\n      set: function (it) { Base[key] = it; }\n    });\n  };\n  for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);\n  proto.constructor = $RegExp;\n  $RegExp.prototype = proto;\n  __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\")(global, 'RegExp', $RegExp);\n}\n\n__webpack_require__(/*! ./_set-species */ \"./node_modules/core-js/modules/_set-species.js\")('RegExp');\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.regexp.constructor.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.exec.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.exec.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar regexpExec = __webpack_require__(/*! ./_regexp-exec */ \"./node_modules/core-js/modules/_regexp-exec.js\");\n__webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\")({\n  target: 'RegExp',\n  proto: true,\n  forced: regexpExec !== /./.exec\n}, {\n  exec: regexpExec\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.regexp.exec.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.flags.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.flags.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("// 21.2.5.3 get RegExp.prototype.flags()\nif (__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") && /./g.flags != 'g') (__webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\").f)(RegExp.prototype, 'flags', {\n  configurable: true,\n  get: __webpack_require__(/*! ./_flags */ \"./node_modules/core-js/modules/_flags.js\")\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.regexp.flags.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.match.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.match.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ \"./node_modules/core-js/modules/_advance-string-index.js\");\nvar regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ \"./node_modules/core-js/modules/_regexp-exec-abstract.js\");\n\n// @@match logic\n__webpack_require__(/*! ./_fix-re-wks */ \"./node_modules/core-js/modules/_fix-re-wks.js\")('match', 1, function (defined, MATCH, $match, maybeCallNative) {\n  return [\n    // `String.prototype.match` method\n    // https://tc39.github.io/ecma262/#sec-string.prototype.match\n    function match(regexp) {\n      var O = defined(this);\n      var fn = regexp == undefined ? undefined : regexp[MATCH];\n      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));\n    },\n    // `RegExp.prototype[@@match]` method\n    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match\n    function (regexp) {\n      var res = maybeCallNative($match, regexp, this);\n      if (res.done) return res.value;\n      var rx = anObject(regexp);\n      var S = String(this);\n      if (!rx.global) return regExpExec(rx, S);\n      var fullUnicode = rx.unicode;\n      rx.lastIndex = 0;\n      var A = [];\n      var n = 0;\n      var result;\n      while ((result = regExpExec(rx, S)) !== null) {\n        var matchStr = String(result[0]);\n        A[n] = matchStr;\n        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);\n        n++;\n      }\n      return n === 0 ? null : A;\n    }\n  ];\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.regexp.match.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.replace.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.replace.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/modules/_to-integer.js\");\nvar advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ \"./node_modules/core-js/modules/_advance-string-index.js\");\nvar regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ \"./node_modules/core-js/modules/_regexp-exec-abstract.js\");\nvar max = Math.max;\nvar min = Math.min;\nvar floor = Math.floor;\nvar SUBSTITUTION_SYMBOLS = /\\$([$&`']|\\d\\d?|<[^>]*>)/g;\nvar SUBSTITUTION_SYMBOLS_NO_NAMED = /\\$([$&`']|\\d\\d?)/g;\n\nvar maybeToString = function (it) {\n  return it === undefined ? it : String(it);\n};\n\n// @@replace logic\n__webpack_require__(/*! ./_fix-re-wks */ \"./node_modules/core-js/modules/_fix-re-wks.js\")('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {\n  return [\n    // `String.prototype.replace` method\n    // https://tc39.github.io/ecma262/#sec-string.prototype.replace\n    function replace(searchValue, replaceValue) {\n      var O = defined(this);\n      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];\n      return fn !== undefined\n        ? fn.call(searchValue, O, replaceValue)\n        : $replace.call(String(O), searchValue, replaceValue);\n    },\n    // `RegExp.prototype[@@replace]` method\n    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace\n    function (regexp, replaceValue) {\n      var res = maybeCallNative($replace, regexp, this, replaceValue);\n      if (res.done) return res.value;\n\n      var rx = anObject(regexp);\n      var S = String(this);\n      var functionalReplace = typeof replaceValue === 'function';\n      if (!functionalReplace) replaceValue = String(replaceValue);\n      var global = rx.global;\n      if (global) {\n        var fullUnicode = rx.unicode;\n        rx.lastIndex = 0;\n      }\n      var results = [];\n      while (true) {\n        var result = regExpExec(rx, S);\n        if (result === null) break;\n        results.push(result);\n        if (!global) break;\n        var matchStr = String(result[0]);\n        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);\n      }\n      var accumulatedResult = '';\n      var nextSourcePosition = 0;\n      for (var i = 0; i < results.length; i++) {\n        result = results[i];\n        var matched = String(result[0]);\n        var position = max(min(toInteger(result.index), S.length), 0);\n        var captures = [];\n        // NOTE: This is equivalent to\n        //   captures = result.slice(1).map(maybeToString)\n        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in\n        // the slice polyfill when slicing native arrays) \"doesn't work\" in safari 9 and\n        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.\n        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));\n        var namedCaptures = result.groups;\n        if (functionalReplace) {\n          var replacerArgs = [matched].concat(captures, position, S);\n          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);\n          var replacement = String(replaceValue.apply(undefined, replacerArgs));\n        } else {\n          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);\n        }\n        if (position >= nextSourcePosition) {\n          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;\n          nextSourcePosition = position + matched.length;\n        }\n      }\n      return accumulatedResult + S.slice(nextSourcePosition);\n    }\n  ];\n\n    // https://tc39.github.io/ecma262/#sec-getsubstitution\n  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {\n    var tailPos = position + matched.length;\n    var m = captures.length;\n    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;\n    if (namedCaptures !== undefined) {\n      namedCaptures = toObject(namedCaptures);\n      symbols = SUBSTITUTION_SYMBOLS;\n    }\n    return $replace.call(replacement, symbols, function (match, ch) {\n      var capture;\n      switch (ch.charAt(0)) {\n        case '$': return '$';\n        case '&': return matched;\n        case '`': return str.slice(0, position);\n        case \"'\": return str.slice(tailPos);\n        case '<':\n          capture = namedCaptures[ch.slice(1, -1)];\n          break;\n        default: // \\d\\d?\n          var n = +ch;\n          if (n === 0) return match;\n          if (n > m) {\n            var f = floor(n / 10);\n            if (f === 0) return match;\n            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);\n            return match;\n          }\n          capture = captures[n - 1];\n      }\n      return capture === undefined ? '' : capture;\n    });\n  }\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.regexp.replace.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.search.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.search.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar sameValue = __webpack_require__(/*! ./_same-value */ \"./node_modules/core-js/modules/_same-value.js\");\nvar regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ \"./node_modules/core-js/modules/_regexp-exec-abstract.js\");\n\n// @@search logic\n__webpack_require__(/*! ./_fix-re-wks */ \"./node_modules/core-js/modules/_fix-re-wks.js\")('search', 1, function (defined, SEARCH, $search, maybeCallNative) {\n  return [\n    // `String.prototype.search` method\n    // https://tc39.github.io/ecma262/#sec-string.prototype.search\n    function search(regexp) {\n      var O = defined(this);\n      var fn = regexp == undefined ? undefined : regexp[SEARCH];\n      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));\n    },\n    // `RegExp.prototype[@@search]` method\n    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search\n    function (regexp) {\n      var res = maybeCallNative($search, regexp, this);\n      if (res.done) return res.value;\n      var rx = anObject(regexp);\n      var S = String(this);\n      var previousLastIndex = rx.lastIndex;\n      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;\n      var result = regExpExec(rx, S);\n      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;\n      return result === null ? -1 : result.index;\n    }\n  ];\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.regexp.search.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.split.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.split.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar isRegExp = __webpack_require__(/*! ./_is-regexp */ \"./node_modules/core-js/modules/_is-regexp.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar speciesConstructor = __webpack_require__(/*! ./_species-constructor */ \"./node_modules/core-js/modules/_species-constructor.js\");\nvar advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ \"./node_modules/core-js/modules/_advance-string-index.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar callRegExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ \"./node_modules/core-js/modules/_regexp-exec-abstract.js\");\nvar regexpExec = __webpack_require__(/*! ./_regexp-exec */ \"./node_modules/core-js/modules/_regexp-exec.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar $min = Math.min;\nvar $push = [].push;\nvar $SPLIT = 'split';\nvar LENGTH = 'length';\nvar LAST_INDEX = 'lastIndex';\nvar MAX_UINT32 = 0xffffffff;\n\n// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError\nvar SUPPORTS_Y = !fails(function () { RegExp(MAX_UINT32, 'y'); });\n\n// @@split logic\n__webpack_require__(/*! ./_fix-re-wks */ \"./node_modules/core-js/modules/_fix-re-wks.js\")('split', 2, function (defined, SPLIT, $split, maybeCallNative) {\n  var internalSplit;\n  if (\n    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||\n    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||\n    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||\n    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||\n    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||\n    ''[$SPLIT](/.?/)[LENGTH]\n  ) {\n    // based on es5-shim implementation, need to rework it\n    internalSplit = function (separator, limit) {\n      var string = String(this);\n      if (separator === undefined && limit === 0) return [];\n      // If `separator` is not a regex, use native split\n      if (!isRegExp(separator)) return $split.call(string, separator, limit);\n      var output = [];\n      var flags = (separator.ignoreCase ? 'i' : '') +\n                  (separator.multiline ? 'm' : '') +\n                  (separator.unicode ? 'u' : '') +\n                  (separator.sticky ? 'y' : '');\n      var lastLastIndex = 0;\n      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;\n      // Make `global` and avoid `lastIndex` issues by working with a copy\n      var separatorCopy = new RegExp(separator.source, flags + 'g');\n      var match, lastIndex, lastLength;\n      while (match = regexpExec.call(separatorCopy, string)) {\n        lastIndex = separatorCopy[LAST_INDEX];\n        if (lastIndex > lastLastIndex) {\n          output.push(string.slice(lastLastIndex, match.index));\n          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));\n          lastLength = match[0][LENGTH];\n          lastLastIndex = lastIndex;\n          if (output[LENGTH] >= splitLimit) break;\n        }\n        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop\n      }\n      if (lastLastIndex === string[LENGTH]) {\n        if (lastLength || !separatorCopy.test('')) output.push('');\n      } else output.push(string.slice(lastLastIndex));\n      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;\n    };\n  // Chakra, V8\n  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {\n    internalSplit = function (separator, limit) {\n      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);\n    };\n  } else {\n    internalSplit = $split;\n  }\n\n  return [\n    // `String.prototype.split` method\n    // https://tc39.github.io/ecma262/#sec-string.prototype.split\n    function split(separator, limit) {\n      var O = defined(this);\n      var splitter = separator == undefined ? undefined : separator[SPLIT];\n      return splitter !== undefined\n        ? splitter.call(separator, O, limit)\n        : internalSplit.call(String(O), separator, limit);\n    },\n    // `RegExp.prototype[@@split]` method\n    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split\n    //\n    // NOTE: This cannot be properly polyfilled in engines that don't support\n    // the 'y' flag.\n    function (regexp, limit) {\n      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);\n      if (res.done) return res.value;\n\n      var rx = anObject(regexp);\n      var S = String(this);\n      var C = speciesConstructor(rx, RegExp);\n\n      var unicodeMatching = rx.unicode;\n      var flags = (rx.ignoreCase ? 'i' : '') +\n                  (rx.multiline ? 'm' : '') +\n                  (rx.unicode ? 'u' : '') +\n                  (SUPPORTS_Y ? 'y' : 'g');\n\n      // ^(? + rx + ) is needed, in combination with some S slicing, to\n      // simulate the 'y' flag.\n      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);\n      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;\n      if (lim === 0) return [];\n      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];\n      var p = 0;\n      var q = 0;\n      var A = [];\n      while (q < S.length) {\n        splitter.lastIndex = SUPPORTS_Y ? q : 0;\n        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));\n        var e;\n        if (\n          z === null ||\n          (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p\n        ) {\n          q = advanceStringIndex(S, q, unicodeMatching);\n        } else {\n          A.push(S.slice(p, q));\n          if (A.length === lim) return A;\n          for (var i = 1; i <= z.length - 1; i++) {\n            A.push(z[i]);\n            if (A.length === lim) return A;\n          }\n          q = p = e;\n        }\n      }\n      A.push(S.slice(p));\n      return A;\n    }\n  ];\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.regexp.split.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.to-string.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n__webpack_require__(/*! ./es6.regexp.flags */ \"./node_modules/core-js/modules/es6.regexp.flags.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar $flags = __webpack_require__(/*! ./_flags */ \"./node_modules/core-js/modules/_flags.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\");\nvar TO_STRING = 'toString';\nvar $toString = /./[TO_STRING];\n\nvar define = function (fn) {\n  __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\")(RegExp.prototype, TO_STRING, fn, true);\n};\n\n// 21.2.5.14 RegExp.prototype.toString()\nif (__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {\n  define(function toString() {\n    var R = anObject(this);\n    return '/'.concat(R.source, '/',\n      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);\n  });\n// FF44- RegExp#toString has a wrong name\n} else if ($toString.name != TO_STRING) {\n  define(function toString() {\n    return $toString.call(this);\n  });\n}\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.regexp.to-string.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.set.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/es6.set.js ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar strong = __webpack_require__(/*! ./_collection-strong */ \"./node_modules/core-js/modules/_collection-strong.js\");\nvar validate = __webpack_require__(/*! ./_validate-collection */ \"./node_modules/core-js/modules/_validate-collection.js\");\nvar SET = 'Set';\n\n// 23.2 Set Objects\nmodule.exports = __webpack_require__(/*! ./_collection */ \"./node_modules/core-js/modules/_collection.js\")(SET, function (get) {\n  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };\n}, {\n  // 23.2.3.1 Set.prototype.add(value)\n  add: function add(value) {\n    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);\n  }\n}, strong);\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.set.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.anchor.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.anchor.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.2 String.prototype.anchor(name)\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('anchor', function (createHTML) {\n  return function anchor(name) {\n    return createHTML(this, 'a', 'name', name);\n  };\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.string.anchor.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.big.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.big.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.3 String.prototype.big()\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('big', function (createHTML) {\n  return function big() {\n    return createHTML(this, 'big', '', '');\n  };\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.string.big.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.blink.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.blink.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.4 String.prototype.blink()\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('blink', function (createHTML) {\n  return function blink() {\n    return createHTML(this, 'blink', '', '');\n  };\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.string.blink.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.bold.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.bold.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.5 String.prototype.bold()\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('bold', function (createHTML) {\n  return function bold() {\n    return createHTML(this, 'b', '', '');\n  };\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.string.bold.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.code-point-at.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.code-point-at.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $at = __webpack_require__(/*! ./_string-at */ \"./node_modules/core-js/modules/_string-at.js\")(false);\n$export($export.P, 'String', {\n  // 21.1.3.3 String.prototype.codePointAt(pos)\n  codePointAt: function codePointAt(pos) {\n    return $at(this, pos);\n  }\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.string.code-point-at.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.ends-with.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.ends-with.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar context = __webpack_require__(/*! ./_string-context */ \"./node_modules/core-js/modules/_string-context.js\");\nvar ENDS_WITH = 'endsWith';\nvar $endsWith = ''[ENDS_WITH];\n\n$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ \"./node_modules/core-js/modules/_fails-is-regexp.js\")(ENDS_WITH), 'String', {\n  endsWith: function endsWith(searchString /* , endPosition = @length */) {\n    var that = context(this, searchString, ENDS_WITH);\n    var endPosition = arguments.length > 1 ? arguments[1] : undefined;\n    var len = toLength(that.length);\n    var end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);\n    var search = String(searchString);\n    return $endsWith\n      ? $endsWith.call(that, search, end)\n      : that.slice(end - search.length, end) === search;\n  }\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.string.ends-with.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.fixed.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.fixed.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.6 String.prototype.fixed()\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('fixed', function (createHTML) {\n  return function fixed() {\n    return createHTML(this, 'tt', '', '');\n  };\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.string.fixed.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.fontcolor.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.fontcolor.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.7 String.prototype.fontcolor(color)\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('fontcolor', function (createHTML) {\n  return function fontcolor(color) {\n    return createHTML(this, 'font', 'color', color);\n  };\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.string.fontcolor.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.fontsize.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.fontsize.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.8 String.prototype.fontsize(size)\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('fontsize', function (createHTML) {\n  return function fontsize(size) {\n    return createHTML(this, 'font', 'size', size);\n  };\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.string.fontsize.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.from-code-point.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.from-code-point.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"./node_modules/core-js/modules/_to-absolute-index.js\");\nvar fromCharCode = String.fromCharCode;\nvar $fromCodePoint = String.fromCodePoint;\n\n// length should be 1, old FF problem\n$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {\n  // 21.1.2.2 String.fromCodePoint(...codePoints)\n  fromCodePoint: function fromCodePoint(x) { // eslint-disable-line no-unused-vars\n    var res = [];\n    var aLen = arguments.length;\n    var i = 0;\n    var code;\n    while (aLen > i) {\n      code = +arguments[i++];\n      if (toAbsoluteIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');\n      res.push(code < 0x10000\n        ? fromCharCode(code)\n        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)\n      );\n    } return res.join('');\n  }\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.string.from-code-point.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.includes.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.includes.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("// 21.1.3.7 String.prototype.includes(searchString, position = 0)\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar context = __webpack_require__(/*! ./_string-context */ \"./node_modules/core-js/modules/_string-context.js\");\nvar INCLUDES = 'includes';\n\n$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ \"./node_modules/core-js/modules/_fails-is-regexp.js\")(INCLUDES), 'String', {\n  includes: function includes(searchString /* , position = 0 */) {\n    return !!~context(this, searchString, INCLUDES)\n      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.string.includes.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.italics.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.italics.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.9 String.prototype.italics()\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('italics', function (createHTML) {\n  return function italics() {\n    return createHTML(this, 'i', '', '');\n  };\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.string.italics.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.iterator.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.iterator.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar $at = __webpack_require__(/*! ./_string-at */ \"./node_modules/core-js/modules/_string-at.js\")(true);\n\n// 21.1.3.27 String.prototype[@@iterator]()\n__webpack_require__(/*! ./_iter-define */ \"./node_modules/core-js/modules/_iter-define.js\")(String, 'String', function (iterated) {\n  this._t = String(iterated); // target\n  this._i = 0;                // next index\n// 21.1.5.2.1 %StringIteratorPrototype%.next()\n}, function () {\n  var O = this._t;\n  var index = this._i;\n  var point;\n  if (index >= O.length) return { value: undefined, done: true };\n  point = $at(O, index);\n  this._i += point.length;\n  return { value: point, done: false };\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.string.iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.link.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.link.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.10 String.prototype.link(url)\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('link', function (createHTML) {\n  return function link(url) {\n    return createHTML(this, 'a', 'href', url);\n  };\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.string.link.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.raw.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.raw.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\n\n$export($export.S, 'String', {\n  // 21.1.2.4 String.raw(callSite, ...substitutions)\n  raw: function raw(callSite) {\n    var tpl = toIObject(callSite.raw);\n    var len = toLength(tpl.length);\n    var aLen = arguments.length;\n    var res = [];\n    var i = 0;\n    while (len > i) {\n      res.push(String(tpl[i++]));\n      if (i < aLen) res.push(String(arguments[i]));\n    } return res.join('');\n  }\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.string.raw.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.repeat.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.repeat.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.P, 'String', {\n  // 21.1.3.13 String.prototype.repeat(count)\n  repeat: __webpack_require__(/*! ./_string-repeat */ \"./node_modules/core-js/modules/_string-repeat.js\")\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.string.repeat.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.small.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.small.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.11 String.prototype.small()\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('small', function (createHTML) {\n  return function small() {\n    return createHTML(this, 'small', '', '');\n  };\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.string.small.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.starts-with.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.starts-with.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("// 21.1.3.18 String.prototype.startsWith(searchString [, position ])\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar context = __webpack_require__(/*! ./_string-context */ \"./node_modules/core-js/modules/_string-context.js\");\nvar STARTS_WITH = 'startsWith';\nvar $startsWith = ''[STARTS_WITH];\n\n$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ \"./node_modules/core-js/modules/_fails-is-regexp.js\")(STARTS_WITH), 'String', {\n  startsWith: function startsWith(searchString /* , position = 0 */) {\n    var that = context(this, searchString, STARTS_WITH);\n    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));\n    var search = String(searchString);\n    return $startsWith\n      ? $startsWith.call(that, search, index)\n      : that.slice(index, index + search.length) === search;\n  }\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.string.starts-with.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.strike.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.strike.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.12 String.prototype.strike()\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('strike', function (createHTML) {\n  return function strike() {\n    return createHTML(this, 'strike', '', '');\n  };\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.string.strike.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.sub.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.sub.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.13 String.prototype.sub()\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('sub', function (createHTML) {\n  return function sub() {\n    return createHTML(this, 'sub', '', '');\n  };\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.string.sub.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.sup.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.sup.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.14 String.prototype.sup()\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('sup', function (createHTML) {\n  return function sup() {\n    return createHTML(this, 'sup', '', '');\n  };\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.string.sup.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.trim.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.trim.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n// 21.1.3.25 String.prototype.trim()\n__webpack_require__(/*! ./_string-trim */ \"./node_modules/core-js/modules/_string-trim.js\")('trim', function ($trim) {\n  return function trim() {\n    return $trim(this, 3);\n  };\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.string.trim.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.symbol.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es6.symbol.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n// ECMAScript 6 symbols shim\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\");\nvar META = (__webpack_require__(/*! ./_meta */ \"./node_modules/core-js/modules/_meta.js\").KEY);\nvar $fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar shared = __webpack_require__(/*! ./_shared */ \"./node_modules/core-js/modules/_shared.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/modules/_set-to-string-tag.js\");\nvar uid = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/modules/_uid.js\");\nvar wks = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\");\nvar wksExt = __webpack_require__(/*! ./_wks-ext */ \"./node_modules/core-js/modules/_wks-ext.js\");\nvar wksDefine = __webpack_require__(/*! ./_wks-define */ \"./node_modules/core-js/modules/_wks-define.js\");\nvar enumKeys = __webpack_require__(/*! ./_enum-keys */ \"./node_modules/core-js/modules/_enum-keys.js\");\nvar isArray = __webpack_require__(/*! ./_is-array */ \"./node_modules/core-js/modules/_is-array.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/modules/_to-primitive.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/modules/_property-desc.js\");\nvar _create = __webpack_require__(/*! ./_object-create */ \"./node_modules/core-js/modules/_object-create.js\");\nvar gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ \"./node_modules/core-js/modules/_object-gopn-ext.js\");\nvar $GOPD = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/modules/_object-gopd.js\");\nvar $GOPS = __webpack_require__(/*! ./_object-gops */ \"./node_modules/core-js/modules/_object-gops.js\");\nvar $DP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\");\nvar $keys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/modules/_object-keys.js\");\nvar gOPD = $GOPD.f;\nvar dP = $DP.f;\nvar gOPN = gOPNExt.f;\nvar $Symbol = global.Symbol;\nvar $JSON = global.JSON;\nvar _stringify = $JSON && $JSON.stringify;\nvar PROTOTYPE = 'prototype';\nvar HIDDEN = wks('_hidden');\nvar TO_PRIMITIVE = wks('toPrimitive');\nvar isEnum = {}.propertyIsEnumerable;\nvar SymbolRegistry = shared('symbol-registry');\nvar AllSymbols = shared('symbols');\nvar OPSymbols = shared('op-symbols');\nvar ObjectProto = Object[PROTOTYPE];\nvar USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;\nvar QObject = global.QObject;\n// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173\nvar setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;\n\n// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687\nvar setSymbolDesc = DESCRIPTORS && $fails(function () {\n  return _create(dP({}, 'a', {\n    get: function () { return dP(this, 'a', { value: 7 }).a; }\n  })).a != 7;\n}) ? function (it, key, D) {\n  var protoDesc = gOPD(ObjectProto, key);\n  if (protoDesc) delete ObjectProto[key];\n  dP(it, key, D);\n  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);\n} : dP;\n\nvar wrap = function (tag) {\n  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);\n  sym._k = tag;\n  return sym;\n};\n\nvar isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {\n  return typeof it == 'symbol';\n} : function (it) {\n  return it instanceof $Symbol;\n};\n\nvar $defineProperty = function defineProperty(it, key, D) {\n  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);\n  anObject(it);\n  key = toPrimitive(key, true);\n  anObject(D);\n  if (has(AllSymbols, key)) {\n    if (!D.enumerable) {\n      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));\n      it[HIDDEN][key] = true;\n    } else {\n      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;\n      D = _create(D, { enumerable: createDesc(0, false) });\n    } return setSymbolDesc(it, key, D);\n  } return dP(it, key, D);\n};\nvar $defineProperties = function defineProperties(it, P) {\n  anObject(it);\n  var keys = enumKeys(P = toIObject(P));\n  var i = 0;\n  var l = keys.length;\n  var key;\n  while (l > i) $defineProperty(it, key = keys[i++], P[key]);\n  return it;\n};\nvar $create = function create(it, P) {\n  return P === undefined ? _create(it) : $defineProperties(_create(it), P);\n};\nvar $propertyIsEnumerable = function propertyIsEnumerable(key) {\n  var E = isEnum.call(this, key = toPrimitive(key, true));\n  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;\n  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;\n};\nvar $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {\n  it = toIObject(it);\n  key = toPrimitive(key, true);\n  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;\n  var D = gOPD(it, key);\n  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;\n  return D;\n};\nvar $getOwnPropertyNames = function getOwnPropertyNames(it) {\n  var names = gOPN(toIObject(it));\n  var result = [];\n  var i = 0;\n  var key;\n  while (names.length > i) {\n    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);\n  } return result;\n};\nvar $getOwnPropertySymbols = function getOwnPropertySymbols(it) {\n  var IS_OP = it === ObjectProto;\n  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));\n  var result = [];\n  var i = 0;\n  var key;\n  while (names.length > i) {\n    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);\n  } return result;\n};\n\n// 19.4.1.1 Symbol([description])\nif (!USE_NATIVE) {\n  $Symbol = function Symbol() {\n    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');\n    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);\n    var $set = function (value) {\n      if (this === ObjectProto) $set.call(OPSymbols, value);\n      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;\n      setSymbolDesc(this, tag, createDesc(1, value));\n    };\n    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });\n    return wrap(tag);\n  };\n  redefine($Symbol[PROTOTYPE], 'toString', function toString() {\n    return this._k;\n  });\n\n  $GOPD.f = $getOwnPropertyDescriptor;\n  $DP.f = $defineProperty;\n  (__webpack_require__(/*! ./_object-gopn */ \"./node_modules/core-js/modules/_object-gopn.js\").f) = gOPNExt.f = $getOwnPropertyNames;\n  (__webpack_require__(/*! ./_object-pie */ \"./node_modules/core-js/modules/_object-pie.js\").f) = $propertyIsEnumerable;\n  $GOPS.f = $getOwnPropertySymbols;\n\n  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ \"./node_modules/core-js/modules/_library.js\")) {\n    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);\n  }\n\n  wksExt.f = function (name) {\n    return wrap(wks(name));\n  };\n}\n\n$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });\n\nfor (var es6Symbols = (\n  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14\n  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'\n).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);\n\nfor (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);\n\n$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {\n  // 19.4.2.1 Symbol.for(key)\n  'for': function (key) {\n    return has(SymbolRegistry, key += '')\n      ? SymbolRegistry[key]\n      : SymbolRegistry[key] = $Symbol(key);\n  },\n  // 19.4.2.5 Symbol.keyFor(sym)\n  keyFor: function keyFor(sym) {\n    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');\n    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;\n  },\n  useSetter: function () { setter = true; },\n  useSimple: function () { setter = false; }\n});\n\n$export($export.S + $export.F * !USE_NATIVE, 'Object', {\n  // 19.1.2.2 Object.create(O [, Properties])\n  create: $create,\n  // 19.1.2.4 Object.defineProperty(O, P, Attributes)\n  defineProperty: $defineProperty,\n  // 19.1.2.3 Object.defineProperties(O, Properties)\n  defineProperties: $defineProperties,\n  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)\n  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,\n  // 19.1.2.7 Object.getOwnPropertyNames(O)\n  getOwnPropertyNames: $getOwnPropertyNames,\n  // 19.1.2.8 Object.getOwnPropertySymbols(O)\n  getOwnPropertySymbols: $getOwnPropertySymbols\n});\n\n// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives\n// https://bugs.chromium.org/p/v8/issues/detail?id=3443\nvar FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });\n\n$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {\n  getOwnPropertySymbols: function getOwnPropertySymbols(it) {\n    return $GOPS.f(toObject(it));\n  }\n});\n\n// 24.3.2 JSON.stringify(value [, replacer [, space]])\n$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {\n  var S = $Symbol();\n  // MS Edge converts symbol values to JSON as {}\n  // WebKit converts symbol values to JSON as null\n  // V8 throws on boxed symbols\n  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';\n})), 'JSON', {\n  stringify: function stringify(it) {\n    var args = [it];\n    var i = 1;\n    var replacer, $replacer;\n    while (arguments.length > i) args.push(arguments[i++]);\n    $replacer = replacer = args[1];\n    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined\n    if (!isArray(replacer)) replacer = function (key, value) {\n      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);\n      if (!isSymbol(value)) return value;\n    };\n    args[1] = replacer;\n    return _stringify.apply($JSON, args);\n  }\n});\n\n// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)\n$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);\n// 19.4.3.5 Symbol.prototype[@@toStringTag]\nsetToStringTag($Symbol, 'Symbol');\n// 20.2.1.9 Math[@@toStringTag]\nsetToStringTag(Math, 'Math', true);\n// 24.3.3 JSON[@@toStringTag]\nsetToStringTag(global.JSON, 'JSON', true);\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.symbol.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.array-buffer.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.array-buffer.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $typed = __webpack_require__(/*! ./_typed */ \"./node_modules/core-js/modules/_typed.js\");\nvar buffer = __webpack_require__(/*! ./_typed-buffer */ \"./node_modules/core-js/modules/_typed-buffer.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"./node_modules/core-js/modules/_to-absolute-index.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar ArrayBuffer = (__webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\").ArrayBuffer);\nvar speciesConstructor = __webpack_require__(/*! ./_species-constructor */ \"./node_modules/core-js/modules/_species-constructor.js\");\nvar $ArrayBuffer = buffer.ArrayBuffer;\nvar $DataView = buffer.DataView;\nvar $isView = $typed.ABV && ArrayBuffer.isView;\nvar $slice = $ArrayBuffer.prototype.slice;\nvar VIEW = $typed.VIEW;\nvar ARRAY_BUFFER = 'ArrayBuffer';\n\n$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), { ArrayBuffer: $ArrayBuffer });\n\n$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {\n  // 24.1.3.1 ArrayBuffer.isView(arg)\n  isView: function isView(it) {\n    return $isView && $isView(it) || isObject(it) && VIEW in it;\n  }\n});\n\n$export($export.P + $export.U + $export.F * __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;\n}), ARRAY_BUFFER, {\n  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)\n  slice: function slice(start, end) {\n    if ($slice !== undefined && end === undefined) return $slice.call(anObject(this), start); // FF fix\n    var len = anObject(this).byteLength;\n    var first = toAbsoluteIndex(start, len);\n    var fin = toAbsoluteIndex(end === undefined ? len : end, len);\n    var result = new (speciesConstructor(this, $ArrayBuffer))(toLength(fin - first));\n    var viewS = new $DataView(this);\n    var viewT = new $DataView(result);\n    var index = 0;\n    while (first < fin) {\n      viewT.setUint8(index++, viewS.getUint8(first++));\n    } return result;\n  }\n});\n\n__webpack_require__(/*! ./_set-species */ \"./node_modules/core-js/modules/_set-species.js\")(ARRAY_BUFFER);\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.typed.array-buffer.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.data-view.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.data-view.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n$export($export.G + $export.W + $export.F * !(__webpack_require__(/*! ./_typed */ \"./node_modules/core-js/modules/_typed.js\").ABV), {\n  DataView: (__webpack_require__(/*! ./_typed-buffer */ \"./node_modules/core-js/modules/_typed-buffer.js\").DataView)\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.typed.data-view.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.float32-array.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.float32-array.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("__webpack_require__(/*! ./_typed-array */ \"./node_modules/core-js/modules/_typed-array.js\")('Float32', 4, function (init) {\n  return function Float32Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.typed.float32-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.float64-array.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.float64-array.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("__webpack_require__(/*! ./_typed-array */ \"./node_modules/core-js/modules/_typed-array.js\")('Float64', 8, function (init) {\n  return function Float64Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.typed.float64-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.int16-array.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.int16-array.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("__webpack_require__(/*! ./_typed-array */ \"./node_modules/core-js/modules/_typed-array.js\")('Int16', 2, function (init) {\n  return function Int16Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.typed.int16-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.int32-array.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.int32-array.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("__webpack_require__(/*! ./_typed-array */ \"./node_modules/core-js/modules/_typed-array.js\")('Int32', 4, function (init) {\n  return function Int32Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.typed.int32-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.int8-array.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.int8-array.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("__webpack_require__(/*! ./_typed-array */ \"./node_modules/core-js/modules/_typed-array.js\")('Int8', 1, function (init) {\n  return function Int8Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.typed.int8-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint16-array.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint16-array.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("__webpack_require__(/*! ./_typed-array */ \"./node_modules/core-js/modules/_typed-array.js\")('Uint16', 2, function (init) {\n  return function Uint16Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.typed.uint16-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint32-array.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint32-array.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("__webpack_require__(/*! ./_typed-array */ \"./node_modules/core-js/modules/_typed-array.js\")('Uint32', 4, function (init) {\n  return function Uint32Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.typed.uint32-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint8-array.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint8-array.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("__webpack_require__(/*! ./_typed-array */ \"./node_modules/core-js/modules/_typed-array.js\")('Uint8', 1, function (init) {\n  return function Uint8Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.typed.uint8-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint8-clamped-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint8-clamped-array.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("__webpack_require__(/*! ./_typed-array */ \"./node_modules/core-js/modules/_typed-array.js\")('Uint8', 1, function (init) {\n  return function Uint8ClampedArray(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n}, true);\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.typed.uint8-clamped-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.weak-map.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.weak-map.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar each = __webpack_require__(/*! ./_array-methods */ \"./node_modules/core-js/modules/_array-methods.js\")(0);\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\");\nvar meta = __webpack_require__(/*! ./_meta */ \"./node_modules/core-js/modules/_meta.js\");\nvar assign = __webpack_require__(/*! ./_object-assign */ \"./node_modules/core-js/modules/_object-assign.js\");\nvar weak = __webpack_require__(/*! ./_collection-weak */ \"./node_modules/core-js/modules/_collection-weak.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar validate = __webpack_require__(/*! ./_validate-collection */ \"./node_modules/core-js/modules/_validate-collection.js\");\nvar NATIVE_WEAK_MAP = __webpack_require__(/*! ./_validate-collection */ \"./node_modules/core-js/modules/_validate-collection.js\");\nvar IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global;\nvar WEAK_MAP = 'WeakMap';\nvar getWeak = meta.getWeak;\nvar isExtensible = Object.isExtensible;\nvar uncaughtFrozenStore = weak.ufstore;\nvar InternalMap;\n\nvar wrapper = function (get) {\n  return function WeakMap() {\n    return get(this, arguments.length > 0 ? arguments[0] : undefined);\n  };\n};\n\nvar methods = {\n  // 23.3.3.3 WeakMap.prototype.get(key)\n  get: function get(key) {\n    if (isObject(key)) {\n      var data = getWeak(key);\n      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);\n      return data ? data[this._i] : undefined;\n    }\n  },\n  // 23.3.3.5 WeakMap.prototype.set(key, value)\n  set: function set(key, value) {\n    return weak.def(validate(this, WEAK_MAP), key, value);\n  }\n};\n\n// 23.3 WeakMap Objects\nvar $WeakMap = module.exports = __webpack_require__(/*! ./_collection */ \"./node_modules/core-js/modules/_collection.js\")(WEAK_MAP, wrapper, methods, weak, true, true);\n\n// IE11 WeakMap frozen keys fix\nif (NATIVE_WEAK_MAP && IS_IE11) {\n  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);\n  assign(InternalMap.prototype, methods);\n  meta.NEED = true;\n  each(['delete', 'has', 'get', 'set'], function (key) {\n    var proto = $WeakMap.prototype;\n    var method = proto[key];\n    redefine(proto, key, function (a, b) {\n      // store frozen objects on internal weakmap shim\n      if (isObject(a) && !isExtensible(a)) {\n        if (!this._f) this._f = new InternalMap();\n        var result = this._f[key](a, b);\n        return key == 'set' ? this : result;\n      // store all the rest on native weakmap\n      } return method.call(this, a, b);\n    });\n  });\n}\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.weak-map.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.weak-set.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.weak-set.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar weak = __webpack_require__(/*! ./_collection-weak */ \"./node_modules/core-js/modules/_collection-weak.js\");\nvar validate = __webpack_require__(/*! ./_validate-collection */ \"./node_modules/core-js/modules/_validate-collection.js\");\nvar WEAK_SET = 'WeakSet';\n\n// 23.4 WeakSet Objects\n__webpack_require__(/*! ./_collection */ \"./node_modules/core-js/modules/_collection.js\")(WEAK_SET, function (get) {\n  return function WeakSet() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };\n}, {\n  // 23.4.3.1 WeakSet.prototype.add(value)\n  add: function add(value) {\n    return weak.def(validate(this, WEAK_SET), value, true);\n  }\n}, weak, false, true);\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es6.weak-set.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.array.flat-map.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.array.flat-map.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar flattenIntoArray = __webpack_require__(/*! ./_flatten-into-array */ \"./node_modules/core-js/modules/_flatten-into-array.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\nvar arraySpeciesCreate = __webpack_require__(/*! ./_array-species-create */ \"./node_modules/core-js/modules/_array-species-create.js\");\n\n$export($export.P, 'Array', {\n  flatMap: function flatMap(callbackfn /* , thisArg */) {\n    var O = toObject(this);\n    var sourceLen, A;\n    aFunction(callbackfn);\n    sourceLen = toLength(O.length);\n    A = arraySpeciesCreate(O, 0);\n    flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);\n    return A;\n  }\n});\n\n__webpack_require__(/*! ./_add-to-unscopables */ \"./node_modules/core-js/modules/_add-to-unscopables.js\")('flatMap');\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es7.array.flat-map.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.array.includes.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.array.includes.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n// https://github.com/tc39/Array.prototype.includes\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $includes = __webpack_require__(/*! ./_array-includes */ \"./node_modules/core-js/modules/_array-includes.js\")(true);\n\n$export($export.P, 'Array', {\n  includes: function includes(el /* , fromIndex = 0 */) {\n    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n\n__webpack_require__(/*! ./_add-to-unscopables */ \"./node_modules/core-js/modules/_add-to-unscopables.js\")('includes');\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es7.array.includes.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.entries.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.entries.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("// https://github.com/tc39/proposal-object-values-entries\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $entries = __webpack_require__(/*! ./_object-to-array */ \"./node_modules/core-js/modules/_object-to-array.js\")(true);\n\n$export($export.S, 'Object', {\n  entries: function entries(it) {\n    return $entries(it);\n  }\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es7.object.entries.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("// https://github.com/tc39/proposal-object-getownpropertydescriptors\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar ownKeys = __webpack_require__(/*! ./_own-keys */ \"./node_modules/core-js/modules/_own-keys.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar gOPD = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/modules/_object-gopd.js\");\nvar createProperty = __webpack_require__(/*! ./_create-property */ \"./node_modules/core-js/modules/_create-property.js\");\n\n$export($export.S, 'Object', {\n  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {\n    var O = toIObject(object);\n    var getDesc = gOPD.f;\n    var keys = ownKeys(O);\n    var result = {};\n    var i = 0;\n    var key, desc;\n    while (keys.length > i) {\n      desc = getDesc(O, key = keys[i++]);\n      if (desc !== undefined) createProperty(result, key, desc);\n    }\n    return result;\n  }\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.values.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.values.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("// https://github.com/tc39/proposal-object-values-entries\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $values = __webpack_require__(/*! ./_object-to-array */ \"./node_modules/core-js/modules/_object-to-array.js\")(false);\n\n$export($export.S, 'Object', {\n  values: function values(it) {\n    return $values(it);\n  }\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es7.object.values.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.promise.finally.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.promise.finally.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("// https://github.com/tc39/proposal-promise-finally\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/modules/_core.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar speciesConstructor = __webpack_require__(/*! ./_species-constructor */ \"./node_modules/core-js/modules/_species-constructor.js\");\nvar promiseResolve = __webpack_require__(/*! ./_promise-resolve */ \"./node_modules/core-js/modules/_promise-resolve.js\");\n\n$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {\n  var C = speciesConstructor(this, core.Promise || global.Promise);\n  var isFunction = typeof onFinally == 'function';\n  return this.then(\n    isFunction ? function (x) {\n      return promiseResolve(C, onFinally()).then(function () { return x; });\n    } : onFinally,\n    isFunction ? function (e) {\n      return promiseResolve(C, onFinally()).then(function () { throw e; });\n    } : onFinally\n  );\n} });\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es7.promise.finally.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.pad-end.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.pad-end.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n// https://github.com/tc39/proposal-string-pad-start-end\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $pad = __webpack_require__(/*! ./_string-pad */ \"./node_modules/core-js/modules/_string-pad.js\");\nvar userAgent = __webpack_require__(/*! ./_user-agent */ \"./node_modules/core-js/modules/_user-agent.js\");\n\n// https://github.com/zloirock/core-js/issues/280\nvar WEBKIT_BUG = /Version\\/10\\.\\d+(\\.\\d+)?( Mobile\\/\\w+)? Safari\\//.test(userAgent);\n\n$export($export.P + $export.F * WEBKIT_BUG, 'String', {\n  padEnd: function padEnd(maxLength /* , fillString = ' ' */) {\n    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);\n  }\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es7.string.pad-end.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.pad-start.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.pad-start.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n// https://github.com/tc39/proposal-string-pad-start-end\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $pad = __webpack_require__(/*! ./_string-pad */ \"./node_modules/core-js/modules/_string-pad.js\");\nvar userAgent = __webpack_require__(/*! ./_user-agent */ \"./node_modules/core-js/modules/_user-agent.js\");\n\n// https://github.com/zloirock/core-js/issues/280\nvar WEBKIT_BUG = /Version\\/10\\.\\d+(\\.\\d+)?( Mobile\\/\\w+)? Safari\\//.test(userAgent);\n\n$export($export.P + $export.F * WEBKIT_BUG, 'String', {\n  padStart: function padStart(maxLength /* , fillString = ' ' */) {\n    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);\n  }\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es7.string.pad-start.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.trim-left.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.trim-left.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n// https://github.com/sebmarkbage/ecmascript-string-left-right-trim\n__webpack_require__(/*! ./_string-trim */ \"./node_modules/core-js/modules/_string-trim.js\")('trimLeft', function ($trim) {\n  return function trimLeft() {\n    return $trim(this, 1);\n  };\n}, 'trimStart');\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es7.string.trim-left.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.trim-right.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.trim-right.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n// https://github.com/sebmarkbage/ecmascript-string-left-right-trim\n__webpack_require__(/*! ./_string-trim */ \"./node_modules/core-js/modules/_string-trim.js\")('trimRight', function ($trim) {\n  return function trimRight() {\n    return $trim(this, 2);\n  };\n}, 'trimEnd');\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es7.string.trim-right.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.symbol.async-iterator.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.symbol.async-iterator.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("__webpack_require__(/*! ./_wks-define */ \"./node_modules/core-js/modules/_wks-define.js\")('asyncIterator');\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/es7.symbol.async-iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/web.dom.iterable.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom.iterable.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("var $iterators = __webpack_require__(/*! ./es6.array.iterator */ \"./node_modules/core-js/modules/es6.array.iterator.js\");\nvar getKeys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/modules/_object-keys.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\");\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/modules/_iterators.js\");\nvar wks = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\");\nvar ITERATOR = wks('iterator');\nvar TO_STRING_TAG = wks('toStringTag');\nvar ArrayValues = Iterators.Array;\n\nvar DOMIterables = {\n  CSSRuleList: true, // TODO: Not spec compliant, should be false.\n  CSSStyleDeclaration: false,\n  CSSValueList: false,\n  ClientRectList: false,\n  DOMRectList: false,\n  DOMStringList: false,\n  DOMTokenList: true,\n  DataTransferItemList: false,\n  FileList: false,\n  HTMLAllCollection: false,\n  HTMLCollection: false,\n  HTMLFormElement: false,\n  HTMLSelectElement: false,\n  MediaList: true, // TODO: Not spec compliant, should be false.\n  MimeTypeArray: false,\n  NamedNodeMap: false,\n  NodeList: true,\n  PaintRequestList: false,\n  Plugin: false,\n  PluginArray: false,\n  SVGLengthList: false,\n  SVGNumberList: false,\n  SVGPathSegList: false,\n  SVGPointList: false,\n  SVGStringList: false,\n  SVGTransformList: false,\n  SourceBufferList: false,\n  StyleSheetList: true, // TODO: Not spec compliant, should be false.\n  TextTrackCueList: false,\n  TextTrackList: false,\n  TouchList: false\n};\n\nfor (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {\n  var NAME = collections[i];\n  var explicit = DOMIterables[NAME];\n  var Collection = global[NAME];\n  var proto = Collection && Collection.prototype;\n  var key;\n  if (proto) {\n    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);\n    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);\n    Iterators[NAME] = ArrayValues;\n    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);\n  }\n}\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/web.dom.iterable.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/web.immediate.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/web.immediate.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $task = __webpack_require__(/*! ./_task */ \"./node_modules/core-js/modules/_task.js\");\n$export($export.G + $export.B, {\n  setImmediate: $task.set,\n  clearImmediate: $task.clear\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/web.immediate.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/web.timers.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/web.timers.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("// ie9- setTimeout & setInterval additional parameters fix\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar userAgent = __webpack_require__(/*! ./_user-agent */ \"./node_modules/core-js/modules/_user-agent.js\");\nvar slice = [].slice;\nvar MSIE = /MSIE .\\./.test(userAgent); // <- dirty ie9- check\nvar wrap = function (set) {\n  return function (fn, time /* , ...args */) {\n    var boundArgs = arguments.length > 2;\n    var args = boundArgs ? slice.call(arguments, 2) : false;\n    return set(boundArgs ? function () {\n      // eslint-disable-next-line no-new-func\n      (typeof fn == 'function' ? fn : Function(fn)).apply(this, args);\n    } : fn, time);\n  };\n};\n$export($export.G + $export.B + $export.F * MSIE, {\n  setTimeout: wrap(global.setTimeout),\n  setInterval: wrap(global.setInterval)\n});\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/modules/web.timers.js?");

/***/ }),

/***/ "./node_modules/core-js/web/index.js":
/*!*******************************************!*\
  !*** ./node_modules/core-js/web/index.js ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("__webpack_require__(/*! ../modules/web.timers */ \"./node_modules/core-js/modules/web.timers.js\");\n__webpack_require__(/*! ../modules/web.immediate */ \"./node_modules/core-js/modules/web.immediate.js\");\n__webpack_require__(/*! ../modules/web.dom.iterable */ \"./node_modules/core-js/modules/web.dom.iterable.js\");\nmodule.exports = __webpack_require__(/*! ../modules/_core */ \"./node_modules/core-js/modules/_core.js\");\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/core-js/web/index.js?");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ (function(module) {

eval("/**\n * Copyright (c) 2014-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nvar runtime = (function (exports) {\n  \"use strict\";\n\n  var Op = Object.prototype;\n  var hasOwn = Op.hasOwnProperty;\n  var undefined; // More compressible than void 0.\n  var $Symbol = typeof Symbol === \"function\" ? Symbol : {};\n  var iteratorSymbol = $Symbol.iterator || \"@@iterator\";\n  var asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\";\n  var toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\";\n\n  function define(obj, key, value) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n    return obj[key];\n  }\n  try {\n    // IE 8 has a broken Object.defineProperty that only works on DOM objects.\n    define({}, \"\");\n  } catch (err) {\n    define = function(obj, key, value) {\n      return obj[key] = value;\n    };\n  }\n\n  function wrap(innerFn, outerFn, self, tryLocsList) {\n    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.\n    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;\n    var generator = Object.create(protoGenerator.prototype);\n    var context = new Context(tryLocsList || []);\n\n    // The ._invoke method unifies the implementations of the .next,\n    // .throw, and .return methods.\n    generator._invoke = makeInvokeMethod(innerFn, self, context);\n\n    return generator;\n  }\n  exports.wrap = wrap;\n\n  // Try/catch helper to minimize deoptimizations. Returns a completion\n  // record like context.tryEntries[i].completion. This interface could\n  // have been (and was previously) designed to take a closure to be\n  // invoked without arguments, but in all the cases we care about we\n  // already have an existing method we want to call, so there's no need\n  // to create a new function object. We can even get away with assuming\n  // the method takes exactly one argument, since that happens to be true\n  // in every case, so we don't have to touch the arguments object. The\n  // only additional allocation required is the completion record, which\n  // has a stable shape and so hopefully should be cheap to allocate.\n  function tryCatch(fn, obj, arg) {\n    try {\n      return { type: \"normal\", arg: fn.call(obj, arg) };\n    } catch (err) {\n      return { type: \"throw\", arg: err };\n    }\n  }\n\n  var GenStateSuspendedStart = \"suspendedStart\";\n  var GenStateSuspendedYield = \"suspendedYield\";\n  var GenStateExecuting = \"executing\";\n  var GenStateCompleted = \"completed\";\n\n  // Returning this object from the innerFn has the same effect as\n  // breaking out of the dispatch switch statement.\n  var ContinueSentinel = {};\n\n  // Dummy constructor functions that we use as the .constructor and\n  // .constructor.prototype properties for functions that return Generator\n  // objects. For full spec compliance, you may wish to configure your\n  // minifier not to mangle the names of these two functions.\n  function Generator() {}\n  function GeneratorFunction() {}\n  function GeneratorFunctionPrototype() {}\n\n  // This is a polyfill for %IteratorPrototype% for environments that\n  // don't natively support it.\n  var IteratorPrototype = {};\n  IteratorPrototype[iteratorSymbol] = function () {\n    return this;\n  };\n\n  var getProto = Object.getPrototypeOf;\n  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));\n  if (NativeIteratorPrototype &&\n      NativeIteratorPrototype !== Op &&\n      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {\n    // This environment has a native %IteratorPrototype%; use it instead\n    // of the polyfill.\n    IteratorPrototype = NativeIteratorPrototype;\n  }\n\n  var Gp = GeneratorFunctionPrototype.prototype =\n    Generator.prototype = Object.create(IteratorPrototype);\n  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;\n  GeneratorFunctionPrototype.constructor = GeneratorFunction;\n  GeneratorFunction.displayName = define(\n    GeneratorFunctionPrototype,\n    toStringTagSymbol,\n    \"GeneratorFunction\"\n  );\n\n  // Helper for defining the .next, .throw, and .return methods of the\n  // Iterator interface in terms of a single ._invoke method.\n  function defineIteratorMethods(prototype) {\n    [\"next\", \"throw\", \"return\"].forEach(function(method) {\n      define(prototype, method, function(arg) {\n        return this._invoke(method, arg);\n      });\n    });\n  }\n\n  exports.isGeneratorFunction = function(genFun) {\n    var ctor = typeof genFun === \"function\" && genFun.constructor;\n    return ctor\n      ? ctor === GeneratorFunction ||\n        // For the native GeneratorFunction constructor, the best we can\n        // do is to check its .name property.\n        (ctor.displayName || ctor.name) === \"GeneratorFunction\"\n      : false;\n  };\n\n  exports.mark = function(genFun) {\n    if (Object.setPrototypeOf) {\n      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);\n    } else {\n      genFun.__proto__ = GeneratorFunctionPrototype;\n      define(genFun, toStringTagSymbol, \"GeneratorFunction\");\n    }\n    genFun.prototype = Object.create(Gp);\n    return genFun;\n  };\n\n  // Within the body of any async function, `await x` is transformed to\n  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test\n  // `hasOwn.call(value, \"__await\")` to determine if the yielded value is\n  // meant to be awaited.\n  exports.awrap = function(arg) {\n    return { __await: arg };\n  };\n\n  function AsyncIterator(generator, PromiseImpl) {\n    function invoke(method, arg, resolve, reject) {\n      var record = tryCatch(generator[method], generator, arg);\n      if (record.type === \"throw\") {\n        reject(record.arg);\n      } else {\n        var result = record.arg;\n        var value = result.value;\n        if (value &&\n            typeof value === \"object\" &&\n            hasOwn.call(value, \"__await\")) {\n          return PromiseImpl.resolve(value.__await).then(function(value) {\n            invoke(\"next\", value, resolve, reject);\n          }, function(err) {\n            invoke(\"throw\", err, resolve, reject);\n          });\n        }\n\n        return PromiseImpl.resolve(value).then(function(unwrapped) {\n          // When a yielded Promise is resolved, its final value becomes\n          // the .value of the Promise<{value,done}> result for the\n          // current iteration.\n          result.value = unwrapped;\n          resolve(result);\n        }, function(error) {\n          // If a rejected Promise was yielded, throw the rejection back\n          // into the async generator function so it can be handled there.\n          return invoke(\"throw\", error, resolve, reject);\n        });\n      }\n    }\n\n    var previousPromise;\n\n    function enqueue(method, arg) {\n      function callInvokeWithMethodAndArg() {\n        return new PromiseImpl(function(resolve, reject) {\n          invoke(method, arg, resolve, reject);\n        });\n      }\n\n      return previousPromise =\n        // If enqueue has been called before, then we want to wait until\n        // all previous Promises have been resolved before calling invoke,\n        // so that results are always delivered in the correct order. If\n        // enqueue has not been called before, then it is important to\n        // call invoke immediately, without waiting on a callback to fire,\n        // so that the async generator function has the opportunity to do\n        // any necessary setup in a predictable way. This predictability\n        // is why the Promise constructor synchronously invokes its\n        // executor callback, and why async functions synchronously\n        // execute code before the first await. Since we implement simple\n        // async functions in terms of async generators, it is especially\n        // important to get this right, even though it requires care.\n        previousPromise ? previousPromise.then(\n          callInvokeWithMethodAndArg,\n          // Avoid propagating failures to Promises returned by later\n          // invocations of the iterator.\n          callInvokeWithMethodAndArg\n        ) : callInvokeWithMethodAndArg();\n    }\n\n    // Define the unified helper method that is used to implement .next,\n    // .throw, and .return (see defineIteratorMethods).\n    this._invoke = enqueue;\n  }\n\n  defineIteratorMethods(AsyncIterator.prototype);\n  AsyncIterator.prototype[asyncIteratorSymbol] = function () {\n    return this;\n  };\n  exports.AsyncIterator = AsyncIterator;\n\n  // Note that simple async functions are implemented on top of\n  // AsyncIterator objects; they just return a Promise for the value of\n  // the final result produced by the iterator.\n  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {\n    if (PromiseImpl === void 0) PromiseImpl = Promise;\n\n    var iter = new AsyncIterator(\n      wrap(innerFn, outerFn, self, tryLocsList),\n      PromiseImpl\n    );\n\n    return exports.isGeneratorFunction(outerFn)\n      ? iter // If outerFn is a generator, return the full iterator.\n      : iter.next().then(function(result) {\n          return result.done ? result.value : iter.next();\n        });\n  };\n\n  function makeInvokeMethod(innerFn, self, context) {\n    var state = GenStateSuspendedStart;\n\n    return function invoke(method, arg) {\n      if (state === GenStateExecuting) {\n        throw new Error(\"Generator is already running\");\n      }\n\n      if (state === GenStateCompleted) {\n        if (method === \"throw\") {\n          throw arg;\n        }\n\n        // Be forgiving, per 25.3.3.3.3 of the spec:\n        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume\n        return doneResult();\n      }\n\n      context.method = method;\n      context.arg = arg;\n\n      while (true) {\n        var delegate = context.delegate;\n        if (delegate) {\n          var delegateResult = maybeInvokeDelegate(delegate, context);\n          if (delegateResult) {\n            if (delegateResult === ContinueSentinel) continue;\n            return delegateResult;\n          }\n        }\n\n        if (context.method === \"next\") {\n          // Setting context._sent for legacy support of Babel's\n          // function.sent implementation.\n          context.sent = context._sent = context.arg;\n\n        } else if (context.method === \"throw\") {\n          if (state === GenStateSuspendedStart) {\n            state = GenStateCompleted;\n            throw context.arg;\n          }\n\n          context.dispatchException(context.arg);\n\n        } else if (context.method === \"return\") {\n          context.abrupt(\"return\", context.arg);\n        }\n\n        state = GenStateExecuting;\n\n        var record = tryCatch(innerFn, self, context);\n        if (record.type === \"normal\") {\n          // If an exception is thrown from innerFn, we leave state ===\n          // GenStateExecuting and loop back for another invocation.\n          state = context.done\n            ? GenStateCompleted\n            : GenStateSuspendedYield;\n\n          if (record.arg === ContinueSentinel) {\n            continue;\n          }\n\n          return {\n            value: record.arg,\n            done: context.done\n          };\n\n        } else if (record.type === \"throw\") {\n          state = GenStateCompleted;\n          // Dispatch the exception by looping back around to the\n          // context.dispatchException(context.arg) call above.\n          context.method = \"throw\";\n          context.arg = record.arg;\n        }\n      }\n    };\n  }\n\n  // Call delegate.iterator[context.method](context.arg) and handle the\n  // result, either by returning a { value, done } result from the\n  // delegate iterator, or by modifying context.method and context.arg,\n  // setting context.delegate to null, and returning the ContinueSentinel.\n  function maybeInvokeDelegate(delegate, context) {\n    var method = delegate.iterator[context.method];\n    if (method === undefined) {\n      // A .throw or .return when the delegate iterator has no .throw\n      // method always terminates the yield* loop.\n      context.delegate = null;\n\n      if (context.method === \"throw\") {\n        // Note: [\"return\"] must be used for ES3 parsing compatibility.\n        if (delegate.iterator[\"return\"]) {\n          // If the delegate iterator has a return method, give it a\n          // chance to clean up.\n          context.method = \"return\";\n          context.arg = undefined;\n          maybeInvokeDelegate(delegate, context);\n\n          if (context.method === \"throw\") {\n            // If maybeInvokeDelegate(context) changed context.method from\n            // \"return\" to \"throw\", let that override the TypeError below.\n            return ContinueSentinel;\n          }\n        }\n\n        context.method = \"throw\";\n        context.arg = new TypeError(\n          \"The iterator does not provide a 'throw' method\");\n      }\n\n      return ContinueSentinel;\n    }\n\n    var record = tryCatch(method, delegate.iterator, context.arg);\n\n    if (record.type === \"throw\") {\n      context.method = \"throw\";\n      context.arg = record.arg;\n      context.delegate = null;\n      return ContinueSentinel;\n    }\n\n    var info = record.arg;\n\n    if (! info) {\n      context.method = \"throw\";\n      context.arg = new TypeError(\"iterator result is not an object\");\n      context.delegate = null;\n      return ContinueSentinel;\n    }\n\n    if (info.done) {\n      // Assign the result of the finished delegate to the temporary\n      // variable specified by delegate.resultName (see delegateYield).\n      context[delegate.resultName] = info.value;\n\n      // Resume execution at the desired location (see delegateYield).\n      context.next = delegate.nextLoc;\n\n      // If context.method was \"throw\" but the delegate handled the\n      // exception, let the outer generator proceed normally. If\n      // context.method was \"next\", forget context.arg since it has been\n      // \"consumed\" by the delegate iterator. If context.method was\n      // \"return\", allow the original .return call to continue in the\n      // outer generator.\n      if (context.method !== \"return\") {\n        context.method = \"next\";\n        context.arg = undefined;\n      }\n\n    } else {\n      // Re-yield the result returned by the delegate method.\n      return info;\n    }\n\n    // The delegate iterator is finished, so forget it and continue with\n    // the outer generator.\n    context.delegate = null;\n    return ContinueSentinel;\n  }\n\n  // Define Generator.prototype.{next,throw,return} in terms of the\n  // unified ._invoke helper method.\n  defineIteratorMethods(Gp);\n\n  define(Gp, toStringTagSymbol, \"Generator\");\n\n  // A Generator should always return itself as the iterator object when the\n  // @@iterator function is called on it. Some browsers' implementations of the\n  // iterator prototype chain incorrectly implement this, causing the Generator\n  // object to not be returned from this call. This ensures that doesn't happen.\n  // See https://github.com/facebook/regenerator/issues/274 for more details.\n  Gp[iteratorSymbol] = function() {\n    return this;\n  };\n\n  Gp.toString = function() {\n    return \"[object Generator]\";\n  };\n\n  function pushTryEntry(locs) {\n    var entry = { tryLoc: locs[0] };\n\n    if (1 in locs) {\n      entry.catchLoc = locs[1];\n    }\n\n    if (2 in locs) {\n      entry.finallyLoc = locs[2];\n      entry.afterLoc = locs[3];\n    }\n\n    this.tryEntries.push(entry);\n  }\n\n  function resetTryEntry(entry) {\n    var record = entry.completion || {};\n    record.type = \"normal\";\n    delete record.arg;\n    entry.completion = record;\n  }\n\n  function Context(tryLocsList) {\n    // The root entry object (effectively a try statement without a catch\n    // or a finally block) gives us a place to store values thrown from\n    // locations where there is no enclosing try statement.\n    this.tryEntries = [{ tryLoc: \"root\" }];\n    tryLocsList.forEach(pushTryEntry, this);\n    this.reset(true);\n  }\n\n  exports.keys = function(object) {\n    var keys = [];\n    for (var key in object) {\n      keys.push(key);\n    }\n    keys.reverse();\n\n    // Rather than returning an object with a next method, we keep\n    // things simple and return the next function itself.\n    return function next() {\n      while (keys.length) {\n        var key = keys.pop();\n        if (key in object) {\n          next.value = key;\n          next.done = false;\n          return next;\n        }\n      }\n\n      // To avoid creating an additional object, we just hang the .value\n      // and .done properties off the next function object itself. This\n      // also ensures that the minifier will not anonymize the function.\n      next.done = true;\n      return next;\n    };\n  };\n\n  function values(iterable) {\n    if (iterable) {\n      var iteratorMethod = iterable[iteratorSymbol];\n      if (iteratorMethod) {\n        return iteratorMethod.call(iterable);\n      }\n\n      if (typeof iterable.next === \"function\") {\n        return iterable;\n      }\n\n      if (!isNaN(iterable.length)) {\n        var i = -1, next = function next() {\n          while (++i < iterable.length) {\n            if (hasOwn.call(iterable, i)) {\n              next.value = iterable[i];\n              next.done = false;\n              return next;\n            }\n          }\n\n          next.value = undefined;\n          next.done = true;\n\n          return next;\n        };\n\n        return next.next = next;\n      }\n    }\n\n    // Return an iterator with no values.\n    return { next: doneResult };\n  }\n  exports.values = values;\n\n  function doneResult() {\n    return { value: undefined, done: true };\n  }\n\n  Context.prototype = {\n    constructor: Context,\n\n    reset: function(skipTempReset) {\n      this.prev = 0;\n      this.next = 0;\n      // Resetting context._sent for legacy support of Babel's\n      // function.sent implementation.\n      this.sent = this._sent = undefined;\n      this.done = false;\n      this.delegate = null;\n\n      this.method = \"next\";\n      this.arg = undefined;\n\n      this.tryEntries.forEach(resetTryEntry);\n\n      if (!skipTempReset) {\n        for (var name in this) {\n          // Not sure about the optimal order of these conditions:\n          if (name.charAt(0) === \"t\" &&\n              hasOwn.call(this, name) &&\n              !isNaN(+name.slice(1))) {\n            this[name] = undefined;\n          }\n        }\n      }\n    },\n\n    stop: function() {\n      this.done = true;\n\n      var rootEntry = this.tryEntries[0];\n      var rootRecord = rootEntry.completion;\n      if (rootRecord.type === \"throw\") {\n        throw rootRecord.arg;\n      }\n\n      return this.rval;\n    },\n\n    dispatchException: function(exception) {\n      if (this.done) {\n        throw exception;\n      }\n\n      var context = this;\n      function handle(loc, caught) {\n        record.type = \"throw\";\n        record.arg = exception;\n        context.next = loc;\n\n        if (caught) {\n          // If the dispatched exception was caught by a catch block,\n          // then let that catch block handle the exception normally.\n          context.method = \"next\";\n          context.arg = undefined;\n        }\n\n        return !! caught;\n      }\n\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        var record = entry.completion;\n\n        if (entry.tryLoc === \"root\") {\n          // Exception thrown outside of any try block that could handle\n          // it, so set the completion value of the entire function to\n          // throw the exception.\n          return handle(\"end\");\n        }\n\n        if (entry.tryLoc <= this.prev) {\n          var hasCatch = hasOwn.call(entry, \"catchLoc\");\n          var hasFinally = hasOwn.call(entry, \"finallyLoc\");\n\n          if (hasCatch && hasFinally) {\n            if (this.prev < entry.catchLoc) {\n              return handle(entry.catchLoc, true);\n            } else if (this.prev < entry.finallyLoc) {\n              return handle(entry.finallyLoc);\n            }\n\n          } else if (hasCatch) {\n            if (this.prev < entry.catchLoc) {\n              return handle(entry.catchLoc, true);\n            }\n\n          } else if (hasFinally) {\n            if (this.prev < entry.finallyLoc) {\n              return handle(entry.finallyLoc);\n            }\n\n          } else {\n            throw new Error(\"try statement without catch or finally\");\n          }\n        }\n      }\n    },\n\n    abrupt: function(type, arg) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc <= this.prev &&\n            hasOwn.call(entry, \"finallyLoc\") &&\n            this.prev < entry.finallyLoc) {\n          var finallyEntry = entry;\n          break;\n        }\n      }\n\n      if (finallyEntry &&\n          (type === \"break\" ||\n           type === \"continue\") &&\n          finallyEntry.tryLoc <= arg &&\n          arg <= finallyEntry.finallyLoc) {\n        // Ignore the finally entry if control is not jumping to a\n        // location outside the try/catch block.\n        finallyEntry = null;\n      }\n\n      var record = finallyEntry ? finallyEntry.completion : {};\n      record.type = type;\n      record.arg = arg;\n\n      if (finallyEntry) {\n        this.method = \"next\";\n        this.next = finallyEntry.finallyLoc;\n        return ContinueSentinel;\n      }\n\n      return this.complete(record);\n    },\n\n    complete: function(record, afterLoc) {\n      if (record.type === \"throw\") {\n        throw record.arg;\n      }\n\n      if (record.type === \"break\" ||\n          record.type === \"continue\") {\n        this.next = record.arg;\n      } else if (record.type === \"return\") {\n        this.rval = this.arg = record.arg;\n        this.method = \"return\";\n        this.next = \"end\";\n      } else if (record.type === \"normal\" && afterLoc) {\n        this.next = afterLoc;\n      }\n\n      return ContinueSentinel;\n    },\n\n    finish: function(finallyLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.finallyLoc === finallyLoc) {\n          this.complete(entry.completion, entry.afterLoc);\n          resetTryEntry(entry);\n          return ContinueSentinel;\n        }\n      }\n    },\n\n    \"catch\": function(tryLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc === tryLoc) {\n          var record = entry.completion;\n          if (record.type === \"throw\") {\n            var thrown = record.arg;\n            resetTryEntry(entry);\n          }\n          return thrown;\n        }\n      }\n\n      // The context.catch method must only be called with a location\n      // argument that corresponds to a known catch block.\n      throw new Error(\"illegal catch attempt\");\n    },\n\n    delegateYield: function(iterable, resultName, nextLoc) {\n      this.delegate = {\n        iterator: values(iterable),\n        resultName: resultName,\n        nextLoc: nextLoc\n      };\n\n      if (this.method === \"next\") {\n        // Deliberately forget the last sent value so that we don't\n        // accidentally pass it on to the delegate.\n        this.arg = undefined;\n      }\n\n      return ContinueSentinel;\n    }\n  };\n\n  // Regardless of whether this script is executing as a CommonJS module\n  // or not, return the runtime object so that we can declare the variable\n  // regeneratorRuntime in the outer scope, which allows this module to be\n  // injected easily by `bin/regenerator --include-runtime script.js`.\n  return exports;\n\n}(\n  // If this script is executing as a CommonJS module, use module.exports\n  // as the regeneratorRuntime namespace. Otherwise create a new empty\n  // object. Either way, the resulting object will be used to initialize\n  // the regeneratorRuntime variable at the top of this file.\n   true ? module.exports : 0\n));\n\ntry {\n  regeneratorRuntime = runtime;\n} catch (accidentalStrictMode) {\n  // This module should not be running in strict mode, so the above\n  // assignment should always work unless something is misconfigured. Just\n  // in case runtime.js accidentally runs in strict mode, we can escape\n  // strict mode using a global Function call. This could conceivably fail\n  // if a Content Security Policy forbids using Function, but in that case\n  // the proper solution is to fix the accidental strict mode problem. If\n  // you've misconfigured your bundler to force strict mode and applied a\n  // CSP to forbid Function, and you're not willing to fix either of those\n  // problems, please detail your unique predicament in a GitHub issue.\n  Function(\"r\", \"regeneratorRuntime = r\")(runtime);\n}\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/regenerator-runtime/runtime.js?");

/***/ }),

/***/ "./node_modules/three/build/three.module.js":
/*!**************************************************!*\
  !*** ./node_modules/three/build/three.module.js ***!
  \**************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";

/***/ }),

/***/ "./node_modules/three/examples/jsm/curves/NURBSCurve.js":
/*!**************************************************************!*\
  !*** ./node_modules/three/examples/jsm/curves/NURBSCurve.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NURBSCurve\": function() { return /* binding */ NURBSCurve; }\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _curves_NURBSUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../curves/NURBSUtils.js */ \"./node_modules/three/examples/jsm/curves/NURBSUtils.js\");\n\n\n\n/**\n * NURBS curve object\n *\n * Derives from Curve, overriding getPoint and getTangent.\n *\n * Implementation is based on (x, y [, z=0 [, w=1]]) control points with w=weight.\n *\n **/\n\nclass NURBSCurve extends three__WEBPACK_IMPORTED_MODULE_0__.Curve {\n\n\tconstructor(\n\t\tdegree,\n\t\tknots /* array of reals */,\n\t\tcontrolPoints /* array of Vector(2|3|4) */,\n\t\tstartKnot /* index in knots */,\n\t\tendKnot /* index in knots */\n\t) {\n\n\t\tsuper();\n\n\t\tthis.degree = degree;\n\t\tthis.knots = knots;\n\t\tthis.controlPoints = [];\n\t\t// Used by periodic NURBS to remove hidden spans\n\t\tthis.startKnot = startKnot || 0;\n\t\tthis.endKnot = endKnot || ( this.knots.length - 1 );\n\n\t\tfor ( let i = 0; i < controlPoints.length; ++ i ) {\n\n\t\t\t// ensure Vector4 for control points\n\t\t\tconst point = controlPoints[ i ];\n\t\t\tthis.controlPoints[ i ] = new three__WEBPACK_IMPORTED_MODULE_0__.Vector4( point.x, point.y, point.z, point.w );\n\n\t\t}\n\n\t}\n\n\tgetPoint( t, optionalTarget = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3() ) {\n\n\t\tconst point = optionalTarget;\n\n\t\tconst u = this.knots[ this.startKnot ] + t * ( this.knots[ this.endKnot ] - this.knots[ this.startKnot ] ); // linear mapping t->u\n\n\t\t// following results in (wx, wy, wz, w) homogeneous point\n\t\tconst hpoint = _curves_NURBSUtils_js__WEBPACK_IMPORTED_MODULE_1__.calcBSplinePoint( this.degree, this.knots, this.controlPoints, u );\n\n\t\tif ( hpoint.w !== 1.0 ) {\n\n\t\t\t// project to 3D space: (wx, wy, wz, w) -> (x, y, z, 1)\n\t\t\thpoint.divideScalar( hpoint.w );\n\n\t\t}\n\n\t\treturn point.set( hpoint.x, hpoint.y, hpoint.z );\n\n\t}\n\n\tgetTangent( t, optionalTarget = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3() ) {\n\n\t\tconst tangent = optionalTarget;\n\n\t\tconst u = this.knots[ 0 ] + t * ( this.knots[ this.knots.length - 1 ] - this.knots[ 0 ] );\n\t\tconst ders = _curves_NURBSUtils_js__WEBPACK_IMPORTED_MODULE_1__.calcNURBSDerivatives( this.degree, this.knots, this.controlPoints, u, 1 );\n\t\ttangent.copy( ders[ 1 ] ).normalize();\n\n\t\treturn tangent;\n\n\t}\n\n}\n\n\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/three/examples/jsm/curves/NURBSCurve.js?");

/***/ }),

/***/ "./node_modules/three/examples/jsm/curves/NURBSUtils.js":
/*!**************************************************************!*\
  !*** ./node_modules/three/examples/jsm/curves/NURBSUtils.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"findSpan\": function() { return /* binding */ findSpan; },\n/* harmony export */   \"calcBasisFunctions\": function() { return /* binding */ calcBasisFunctions; },\n/* harmony export */   \"calcBSplinePoint\": function() { return /* binding */ calcBSplinePoint; },\n/* harmony export */   \"calcBasisFunctionDerivatives\": function() { return /* binding */ calcBasisFunctionDerivatives; },\n/* harmony export */   \"calcBSplineDerivatives\": function() { return /* binding */ calcBSplineDerivatives; },\n/* harmony export */   \"calcKoverI\": function() { return /* binding */ calcKoverI; },\n/* harmony export */   \"calcRationalCurveDerivatives\": function() { return /* binding */ calcRationalCurveDerivatives; },\n/* harmony export */   \"calcNURBSDerivatives\": function() { return /* binding */ calcNURBSDerivatives; },\n/* harmony export */   \"calcSurfacePoint\": function() { return /* binding */ calcSurfacePoint; }\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\n\n/**\n * NURBS utils\n *\n * See NURBSCurve and NURBSSurface.\n **/\n\n\n/**************************************************************\n *\tNURBS Utils\n **************************************************************/\n\n/*\nFinds knot vector span.\n\np : degree\nu : parametric value\nU : knot vector\n\nreturns the span\n*/\nfunction findSpan( p, u, U ) {\n\n\tconst n = U.length - p - 1;\n\n\tif ( u >= U[ n ] ) {\n\n\t\treturn n - 1;\n\n\t}\n\n\tif ( u <= U[ p ] ) {\n\n\t\treturn p;\n\n\t}\n\n\tlet low = p;\n\tlet high = n;\n\tlet mid = Math.floor( ( low + high ) / 2 );\n\n\twhile ( u < U[ mid ] || u >= U[ mid + 1 ] ) {\n\n\t\tif ( u < U[ mid ] ) {\n\n\t\t\thigh = mid;\n\n\t\t} else {\n\n\t\t\tlow = mid;\n\n\t\t}\n\n\t\tmid = Math.floor( ( low + high ) / 2 );\n\n\t}\n\n\treturn mid;\n\n}\n\n\n/*\nCalculate basis functions. See The NURBS Book, page 70, algorithm A2.2\n\nspan : span in which u lies\nu    : parametric point\np    : degree\nU    : knot vector\n\nreturns array[p+1] with basis functions values.\n*/\nfunction calcBasisFunctions( span, u, p, U ) {\n\n\tconst N = [];\n\tconst left = [];\n\tconst right = [];\n\tN[ 0 ] = 1.0;\n\n\tfor ( let j = 1; j <= p; ++ j ) {\n\n\t\tleft[ j ] = u - U[ span + 1 - j ];\n\t\tright[ j ] = U[ span + j ] - u;\n\n\t\tlet saved = 0.0;\n\n\t\tfor ( let r = 0; r < j; ++ r ) {\n\n\t\t\tconst rv = right[ r + 1 ];\n\t\t\tconst lv = left[ j - r ];\n\t\t\tconst temp = N[ r ] / ( rv + lv );\n\t\t\tN[ r ] = saved + rv * temp;\n\t\t\tsaved = lv * temp;\n\n\t\t}\n\n\t\tN[ j ] = saved;\n\n\t}\n\n\treturn N;\n\n}\n\n\n/*\nCalculate B-Spline curve points. See The NURBS Book, page 82, algorithm A3.1.\n\np : degree of B-Spline\nU : knot vector\nP : control points (x, y, z, w)\nu : parametric point\n\nreturns point for given u\n*/\nfunction calcBSplinePoint( p, U, P, u ) {\n\n\tconst span = findSpan( p, u, U );\n\tconst N = calcBasisFunctions( span, u, p, U );\n\tconst C = new three__WEBPACK_IMPORTED_MODULE_0__.Vector4( 0, 0, 0, 0 );\n\n\tfor ( let j = 0; j <= p; ++ j ) {\n\n\t\tconst point = P[ span - p + j ];\n\t\tconst Nj = N[ j ];\n\t\tconst wNj = point.w * Nj;\n\t\tC.x += point.x * wNj;\n\t\tC.y += point.y * wNj;\n\t\tC.z += point.z * wNj;\n\t\tC.w += point.w * Nj;\n\n\t}\n\n\treturn C;\n\n}\n\n\n/*\nCalculate basis functions derivatives. See The NURBS Book, page 72, algorithm A2.3.\n\nspan : span in which u lies\nu    : parametric point\np    : degree\nn    : number of derivatives to calculate\nU    : knot vector\n\nreturns array[n+1][p+1] with basis functions derivatives\n*/\nfunction calcBasisFunctionDerivatives( span, u, p, n, U ) {\n\n\tconst zeroArr = [];\n\tfor ( let i = 0; i <= p; ++ i )\n\t\tzeroArr[ i ] = 0.0;\n\n\tconst ders = [];\n\n\tfor ( let i = 0; i <= n; ++ i )\n\t\tders[ i ] = zeroArr.slice( 0 );\n\n\tconst ndu = [];\n\n\tfor ( let i = 0; i <= p; ++ i )\n\t\tndu[ i ] = zeroArr.slice( 0 );\n\n\tndu[ 0 ][ 0 ] = 1.0;\n\n\tconst left = zeroArr.slice( 0 );\n\tconst right = zeroArr.slice( 0 );\n\n\tfor ( let j = 1; j <= p; ++ j ) {\n\n\t\tleft[ j ] = u - U[ span + 1 - j ];\n\t\tright[ j ] = U[ span + j ] - u;\n\n\t\tlet saved = 0.0;\n\n\t\tfor ( let r = 0; r < j; ++ r ) {\n\n\t\t\tconst rv = right[ r + 1 ];\n\t\t\tconst lv = left[ j - r ];\n\t\t\tndu[ j ][ r ] = rv + lv;\n\n\t\t\tconst temp = ndu[ r ][ j - 1 ] / ndu[ j ][ r ];\n\t\t\tndu[ r ][ j ] = saved + rv * temp;\n\t\t\tsaved = lv * temp;\n\n\t\t}\n\n\t\tndu[ j ][ j ] = saved;\n\n\t}\n\n\tfor ( let j = 0; j <= p; ++ j ) {\n\n\t\tders[ 0 ][ j ] = ndu[ j ][ p ];\n\n\t}\n\n\tfor ( let r = 0; r <= p; ++ r ) {\n\n\t\tlet s1 = 0;\n\t\tlet s2 = 1;\n\n\t\tconst a = [];\n\t\tfor ( let i = 0; i <= p; ++ i ) {\n\n\t\t\ta[ i ] = zeroArr.slice( 0 );\n\n\t\t}\n\n\t\ta[ 0 ][ 0 ] = 1.0;\n\n\t\tfor ( let k = 1; k <= n; ++ k ) {\n\n\t\t\tlet d = 0.0;\n\t\t\tconst rk = r - k;\n\t\t\tconst pk = p - k;\n\n\t\t\tif ( r >= k ) {\n\n\t\t\t\ta[ s2 ][ 0 ] = a[ s1 ][ 0 ] / ndu[ pk + 1 ][ rk ];\n\t\t\t\td = a[ s2 ][ 0 ] * ndu[ rk ][ pk ];\n\n\t\t\t}\n\n\t\t\tconst j1 = ( rk >= - 1 ) ? 1 : - rk;\n\t\t\tconst j2 = ( r - 1 <= pk ) ? k - 1 : p - r;\n\n\t\t\tfor ( let j = j1; j <= j2; ++ j ) {\n\n\t\t\t\ta[ s2 ][ j ] = ( a[ s1 ][ j ] - a[ s1 ][ j - 1 ] ) / ndu[ pk + 1 ][ rk + j ];\n\t\t\t\td += a[ s2 ][ j ] * ndu[ rk + j ][ pk ];\n\n\t\t\t}\n\n\t\t\tif ( r <= pk ) {\n\n\t\t\t\ta[ s2 ][ k ] = - a[ s1 ][ k - 1 ] / ndu[ pk + 1 ][ r ];\n\t\t\t\td += a[ s2 ][ k ] * ndu[ r ][ pk ];\n\n\t\t\t}\n\n\t\t\tders[ k ][ r ] = d;\n\n\t\t\tconst j = s1;\n\t\t\ts1 = s2;\n\t\t\ts2 = j;\n\n\t\t}\n\n\t}\n\n\tlet r = p;\n\n\tfor ( let k = 1; k <= n; ++ k ) {\n\n\t\tfor ( let j = 0; j <= p; ++ j ) {\n\n\t\t\tders[ k ][ j ] *= r;\n\n\t\t}\n\n\t\tr *= p - k;\n\n\t}\n\n\treturn ders;\n\n}\n\n\n/*\n\tCalculate derivatives of a B-Spline. See The NURBS Book, page 93, algorithm A3.2.\n\n\tp  : degree\n\tU  : knot vector\n\tP  : control points\n\tu  : Parametric points\n\tnd : number of derivatives\n\n\treturns array[d+1] with derivatives\n\t*/\nfunction calcBSplineDerivatives( p, U, P, u, nd ) {\n\n\tconst du = nd < p ? nd : p;\n\tconst CK = [];\n\tconst span = findSpan( p, u, U );\n\tconst nders = calcBasisFunctionDerivatives( span, u, p, du, U );\n\tconst Pw = [];\n\n\tfor ( let i = 0; i < P.length; ++ i ) {\n\n\t\tconst point = P[ i ].clone();\n\t\tconst w = point.w;\n\n\t\tpoint.x *= w;\n\t\tpoint.y *= w;\n\t\tpoint.z *= w;\n\n\t\tPw[ i ] = point;\n\n\t}\n\n\tfor ( let k = 0; k <= du; ++ k ) {\n\n\t\tconst point = Pw[ span - p ].clone().multiplyScalar( nders[ k ][ 0 ] );\n\n\t\tfor ( let j = 1; j <= p; ++ j ) {\n\n\t\t\tpoint.add( Pw[ span - p + j ].clone().multiplyScalar( nders[ k ][ j ] ) );\n\n\t\t}\n\n\t\tCK[ k ] = point;\n\n\t}\n\n\tfor ( let k = du + 1; k <= nd + 1; ++ k ) {\n\n\t\tCK[ k ] = new three__WEBPACK_IMPORTED_MODULE_0__.Vector4( 0, 0, 0 );\n\n\t}\n\n\treturn CK;\n\n}\n\n\n/*\nCalculate \"K over I\"\n\nreturns k!/(i!(k-i)!)\n*/\nfunction calcKoverI( k, i ) {\n\n\tlet nom = 1;\n\n\tfor ( let j = 2; j <= k; ++ j ) {\n\n\t\tnom *= j;\n\n\t}\n\n\tlet denom = 1;\n\n\tfor ( let j = 2; j <= i; ++ j ) {\n\n\t\tdenom *= j;\n\n\t}\n\n\tfor ( let j = 2; j <= k - i; ++ j ) {\n\n\t\tdenom *= j;\n\n\t}\n\n\treturn nom / denom;\n\n}\n\n\n/*\nCalculate derivatives (0-nd) of rational curve. See The NURBS Book, page 127, algorithm A4.2.\n\nPders : result of function calcBSplineDerivatives\n\nreturns array with derivatives for rational curve.\n*/\nfunction calcRationalCurveDerivatives( Pders ) {\n\n\tconst nd = Pders.length;\n\tconst Aders = [];\n\tconst wders = [];\n\n\tfor ( let i = 0; i < nd; ++ i ) {\n\n\t\tconst point = Pders[ i ];\n\t\tAders[ i ] = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3( point.x, point.y, point.z );\n\t\twders[ i ] = point.w;\n\n\t}\n\n\tconst CK = [];\n\n\tfor ( let k = 0; k < nd; ++ k ) {\n\n\t\tconst v = Aders[ k ].clone();\n\n\t\tfor ( let i = 1; i <= k; ++ i ) {\n\n\t\t\tv.sub( CK[ k - i ].clone().multiplyScalar( calcKoverI( k, i ) * wders[ i ] ) );\n\n\t\t}\n\n\t\tCK[ k ] = v.divideScalar( wders[ 0 ] );\n\n\t}\n\n\treturn CK;\n\n}\n\n\n/*\nCalculate NURBS curve derivatives. See The NURBS Book, page 127, algorithm A4.2.\n\np  : degree\nU  : knot vector\nP  : control points in homogeneous space\nu  : parametric points\nnd : number of derivatives\n\nreturns array with derivatives.\n*/\nfunction calcNURBSDerivatives( p, U, P, u, nd ) {\n\n\tconst Pders = calcBSplineDerivatives( p, U, P, u, nd );\n\treturn calcRationalCurveDerivatives( Pders );\n\n}\n\n\n/*\nCalculate rational B-Spline surface point. See The NURBS Book, page 134, algorithm A4.3.\n\np1, p2 : degrees of B-Spline surface\nU1, U2 : knot vectors\nP      : control points (x, y, z, w)\nu, v   : parametric values\n\nreturns point for given (u, v)\n*/\nfunction calcSurfacePoint( p, q, U, V, P, u, v, target ) {\n\n\tconst uspan = findSpan( p, u, U );\n\tconst vspan = findSpan( q, v, V );\n\tconst Nu = calcBasisFunctions( uspan, u, p, U );\n\tconst Nv = calcBasisFunctions( vspan, v, q, V );\n\tconst temp = [];\n\n\tfor ( let l = 0; l <= q; ++ l ) {\n\n\t\ttemp[ l ] = new three__WEBPACK_IMPORTED_MODULE_0__.Vector4( 0, 0, 0, 0 );\n\t\tfor ( let k = 0; k <= p; ++ k ) {\n\n\t\t\tconst point = P[ uspan - p + k ][ vspan - q + l ].clone();\n\t\t\tconst w = point.w;\n\t\t\tpoint.x *= w;\n\t\t\tpoint.y *= w;\n\t\t\tpoint.z *= w;\n\t\t\ttemp[ l ].add( point.multiplyScalar( Nu[ k ] ) );\n\n\t\t}\n\n\t}\n\n\tconst Sw = new three__WEBPACK_IMPORTED_MODULE_0__.Vector4( 0, 0, 0, 0 );\n\tfor ( let l = 0; l <= q; ++ l ) {\n\n\t\tSw.add( temp[ l ].multiplyScalar( Nv[ l ] ) );\n\n\t}\n\n\tSw.divideScalar( Sw.w );\n\ttarget.set( Sw.x, Sw.y, Sw.z );\n\n}\n\n\n\n\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/three/examples/jsm/curves/NURBSUtils.js?");

/***/ }),

/***/ "./node_modules/three/examples/jsm/libs/fflate.module.js":
/*!***************************************************************!*\
  !*** ./node_modules/three/examples/jsm/libs/fflate.module.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Deflate\": function() { return /* binding */ Deflate; },\n/* harmony export */   \"AsyncDeflate\": function() { return /* binding */ AsyncDeflate; },\n/* harmony export */   \"deflate\": function() { return /* binding */ deflate; },\n/* harmony export */   \"deflateSync\": function() { return /* binding */ deflateSync; },\n/* harmony export */   \"Inflate\": function() { return /* binding */ Inflate; },\n/* harmony export */   \"AsyncInflate\": function() { return /* binding */ AsyncInflate; },\n/* harmony export */   \"inflate\": function() { return /* binding */ inflate; },\n/* harmony export */   \"inflateSync\": function() { return /* binding */ inflateSync; },\n/* harmony export */   \"Gzip\": function() { return /* binding */ Gzip; },\n/* harmony export */   \"AsyncGzip\": function() { return /* binding */ AsyncGzip; },\n/* harmony export */   \"gzip\": function() { return /* binding */ gzip; },\n/* harmony export */   \"gzipSync\": function() { return /* binding */ gzipSync; },\n/* harmony export */   \"Gunzip\": function() { return /* binding */ Gunzip; },\n/* harmony export */   \"AsyncGunzip\": function() { return /* binding */ AsyncGunzip; },\n/* harmony export */   \"gunzip\": function() { return /* binding */ gunzip; },\n/* harmony export */   \"gunzipSync\": function() { return /* binding */ gunzipSync; },\n/* harmony export */   \"Zlib\": function() { return /* binding */ Zlib; },\n/* harmony export */   \"AsyncZlib\": function() { return /* binding */ AsyncZlib; },\n/* harmony export */   \"zlib\": function() { return /* binding */ zlib; },\n/* harmony export */   \"zlibSync\": function() { return /* binding */ zlibSync; },\n/* harmony export */   \"Unzlib\": function() { return /* binding */ Unzlib; },\n/* harmony export */   \"AsyncUnzlib\": function() { return /* binding */ AsyncUnzlib; },\n/* harmony export */   \"unzlib\": function() { return /* binding */ unzlib; },\n/* harmony export */   \"unzlibSync\": function() { return /* binding */ unzlibSync; },\n/* harmony export */   \"compress\": function() { return /* binding */ gzip; },\n/* harmony export */   \"AsyncCompress\": function() { return /* binding */ AsyncGzip; },\n/* harmony export */   \"compressSync\": function() { return /* binding */ gzipSync; },\n/* harmony export */   \"Compress\": function() { return /* binding */ Gzip; },\n/* harmony export */   \"Decompress\": function() { return /* binding */ Decompress; },\n/* harmony export */   \"AsyncDecompress\": function() { return /* binding */ AsyncDecompress; },\n/* harmony export */   \"decompress\": function() { return /* binding */ decompress; },\n/* harmony export */   \"decompressSync\": function() { return /* binding */ decompressSync; },\n/* harmony export */   \"DecodeUTF8\": function() { return /* binding */ DecodeUTF8; },\n/* harmony export */   \"EncodeUTF8\": function() { return /* binding */ EncodeUTF8; },\n/* harmony export */   \"strToU8\": function() { return /* binding */ strToU8; },\n/* harmony export */   \"strFromU8\": function() { return /* binding */ strFromU8; },\n/* harmony export */   \"ZipPassThrough\": function() { return /* binding */ ZipPassThrough; },\n/* harmony export */   \"ZipDeflate\": function() { return /* binding */ ZipDeflate; },\n/* harmony export */   \"AsyncZipDeflate\": function() { return /* binding */ AsyncZipDeflate; },\n/* harmony export */   \"Zip\": function() { return /* binding */ Zip; },\n/* harmony export */   \"zip\": function() { return /* binding */ zip; },\n/* harmony export */   \"zipSync\": function() { return /* binding */ zipSync; },\n/* harmony export */   \"UnzipPassThrough\": function() { return /* binding */ UnzipPassThrough; },\n/* harmony export */   \"UnzipInflate\": function() { return /* binding */ UnzipInflate; },\n/* harmony export */   \"AsyncUnzipInflate\": function() { return /* binding */ AsyncUnzipInflate; },\n/* harmony export */   \"Unzip\": function() { return /* binding */ Unzip; },\n/* harmony export */   \"unzip\": function() { return /* binding */ unzip; },\n/* harmony export */   \"unzipSync\": function() { return /* binding */ unzipSync; }\n/* harmony export */ });\n/*!\nfflate - fast JavaScript compression/decompression\n<https://101arrowz.github.io/fflate>\nLicensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE\nversion 0.6.9\n*/\n\n// DEFLATE is a complex format; to read this code, you should probably check the RFC first:\n// https://tools.ietf.org/html/rfc1951\n// You may also wish to take a look at the guide I made about this program:\n// https://gist.github.com/101arrowz/253f31eb5abc3d9275ab943003ffecad\n// Some of the following code is similar to that of UZIP.js:\n// https://github.com/photopea/UZIP.js\n// However, the vast majority of the codebase has diverged from UZIP.js to increase performance and reduce bundle size.\n// Sometimes 0 will appear where -1 would be more appropriate. This is because using a uint\n// is better for memory in most engines (I *think*).\nvar ch2 = {};\nvar durl = function (c) { return URL.createObjectURL(new Blob([c], { type: 'text/javascript' })); };\nvar cwk = function (u) { return new Worker(u); };\ntry {\n    URL.revokeObjectURL(durl(''));\n}\ncatch (e) {\n    // We're in Deno or a very old browser\n    durl = function (c) { return 'data:application/javascript;charset=UTF-8,' + encodeURI(c); };\n    // If Deno, this is necessary; if not, this changes nothing\n    cwk = function (u) { return new Worker(u, { type: 'module' }); };\n}\nvar wk = (function (c, id, msg, transfer, cb) {\n    var w = cwk(ch2[id] || (ch2[id] = durl(c)));\n    w.onerror = function (e) { return cb(e.error, null); };\n    w.onmessage = function (e) { return cb(null, e.data); };\n    w.postMessage(msg, transfer);\n    return w;\n});\n\n// aliases for shorter compressed code (most minifers don't do this)\nvar u8 = Uint8Array, u16 = Uint16Array, u32 = Uint32Array;\n// fixed length extra bits\nvar fleb = new u8([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, /* unused */ 0, 0, /* impossible */ 0]);\n// fixed distance extra bits\n// see fleb note\nvar fdeb = new u8([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, /* unused */ 0, 0]);\n// code length index map\nvar clim = new u8([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);\n// get base, reverse index map from extra bits\nvar freb = function (eb, start) {\n    var b = new u16(31);\n    for (var i = 0; i < 31; ++i) {\n        b[i] = start += 1 << eb[i - 1];\n    }\n    // numbers here are at max 18 bits\n    var r = new u32(b[30]);\n    for (var i = 1; i < 30; ++i) {\n        for (var j = b[i]; j < b[i + 1]; ++j) {\n            r[j] = ((j - b[i]) << 5) | i;\n        }\n    }\n    return [b, r];\n};\nvar _a = freb(fleb, 2), fl = _a[0], revfl = _a[1];\n// we can ignore the fact that the other numbers are wrong; they never happen anyway\nfl[28] = 258, revfl[258] = 28;\nvar _b = freb(fdeb, 0), fd = _b[0], revfd = _b[1];\n// map of value to reverse (assuming 16 bits)\nvar rev = new u16(32768);\nfor (var i = 0; i < 32768; ++i) {\n    // reverse table algorithm from SO\n    var x = ((i & 0xAAAA) >>> 1) | ((i & 0x5555) << 1);\n    x = ((x & 0xCCCC) >>> 2) | ((x & 0x3333) << 2);\n    x = ((x & 0xF0F0) >>> 4) | ((x & 0x0F0F) << 4);\n    rev[i] = (((x & 0xFF00) >>> 8) | ((x & 0x00FF) << 8)) >>> 1;\n}\n// create huffman tree from u8 \"map\": index -> code length for code index\n// mb (max bits) must be at most 15\n// TODO: optimize/split up?\nvar hMap = (function (cd, mb, r) {\n    var s = cd.length;\n    // index\n    var i = 0;\n    // u16 \"map\": index -> # of codes with bit length = index\n    var l = new u16(mb);\n    // length of cd must be 288 (total # of codes)\n    for (; i < s; ++i)\n        ++l[cd[i] - 1];\n    // u16 \"map\": index -> minimum code for bit length = index\n    var le = new u16(mb);\n    for (i = 0; i < mb; ++i) {\n        le[i] = (le[i - 1] + l[i - 1]) << 1;\n    }\n    var co;\n    if (r) {\n        // u16 \"map\": index -> number of actual bits, symbol for code\n        co = new u16(1 << mb);\n        // bits to remove for reverser\n        var rvb = 15 - mb;\n        for (i = 0; i < s; ++i) {\n            // ignore 0 lengths\n            if (cd[i]) {\n                // num encoding both symbol and bits read\n                var sv = (i << 4) | cd[i];\n                // free bits\n                var r_1 = mb - cd[i];\n                // start value\n                var v = le[cd[i] - 1]++ << r_1;\n                // m is end value\n                for (var m = v | ((1 << r_1) - 1); v <= m; ++v) {\n                    // every 16 bit value starting with the code yields the same result\n                    co[rev[v] >>> rvb] = sv;\n                }\n            }\n        }\n    }\n    else {\n        co = new u16(s);\n        for (i = 0; i < s; ++i) {\n            if (cd[i]) {\n                co[i] = rev[le[cd[i] - 1]++] >>> (15 - cd[i]);\n            }\n        }\n    }\n    return co;\n});\n// fixed length tree\nvar flt = new u8(288);\nfor (var i = 0; i < 144; ++i)\n    flt[i] = 8;\nfor (var i = 144; i < 256; ++i)\n    flt[i] = 9;\nfor (var i = 256; i < 280; ++i)\n    flt[i] = 7;\nfor (var i = 280; i < 288; ++i)\n    flt[i] = 8;\n// fixed distance tree\nvar fdt = new u8(32);\nfor (var i = 0; i < 32; ++i)\n    fdt[i] = 5;\n// fixed length map\nvar flm = /*#__PURE__*/ hMap(flt, 9, 0), flrm = /*#__PURE__*/ hMap(flt, 9, 1);\n// fixed distance map\nvar fdm = /*#__PURE__*/ hMap(fdt, 5, 0), fdrm = /*#__PURE__*/ hMap(fdt, 5, 1);\n// find max of array\nvar max = function (a) {\n    var m = a[0];\n    for (var i = 1; i < a.length; ++i) {\n        if (a[i] > m)\n            m = a[i];\n    }\n    return m;\n};\n// read d, starting at bit p and mask with m\nvar bits = function (d, p, m) {\n    var o = (p / 8) | 0;\n    return ((d[o] | (d[o + 1] << 8)) >> (p & 7)) & m;\n};\n// read d, starting at bit p continuing for at least 16 bits\nvar bits16 = function (d, p) {\n    var o = (p / 8) | 0;\n    return ((d[o] | (d[o + 1] << 8) | (d[o + 2] << 16)) >> (p & 7));\n};\n// get end of byte\nvar shft = function (p) { return ((p / 8) | 0) + (p & 7 && 1); };\n// typed array slice - allows garbage collector to free original reference,\n// while being more compatible than .slice\nvar slc = function (v, s, e) {\n    if (s == null || s < 0)\n        s = 0;\n    if (e == null || e > v.length)\n        e = v.length;\n    // can't use .constructor in case user-supplied\n    var n = new (v instanceof u16 ? u16 : v instanceof u32 ? u32 : u8)(e - s);\n    n.set(v.subarray(s, e));\n    return n;\n};\n// expands raw DEFLATE data\nvar inflt = function (dat, buf, st) {\n    // source length\n    var sl = dat.length;\n    if (!sl || (st && !st.l && sl < 5))\n        return buf || new u8(0);\n    // have to estimate size\n    var noBuf = !buf || st;\n    // no state\n    var noSt = !st || st.i;\n    if (!st)\n        st = {};\n    // Assumes roughly 33% compression ratio average\n    if (!buf)\n        buf = new u8(sl * 3);\n    // ensure buffer can fit at least l elements\n    var cbuf = function (l) {\n        var bl = buf.length;\n        // need to increase size to fit\n        if (l > bl) {\n            // Double or set to necessary, whichever is greater\n            var nbuf = new u8(Math.max(bl * 2, l));\n            nbuf.set(buf);\n            buf = nbuf;\n        }\n    };\n    //  last chunk         bitpos           bytes\n    var final = st.f || 0, pos = st.p || 0, bt = st.b || 0, lm = st.l, dm = st.d, lbt = st.m, dbt = st.n;\n    // total bits\n    var tbts = sl * 8;\n    do {\n        if (!lm) {\n            // BFINAL - this is only 1 when last chunk is next\n            st.f = final = bits(dat, pos, 1);\n            // type: 0 = no compression, 1 = fixed huffman, 2 = dynamic huffman\n            var type = bits(dat, pos + 1, 3);\n            pos += 3;\n            if (!type) {\n                // go to end of byte boundary\n                var s = shft(pos) + 4, l = dat[s - 4] | (dat[s - 3] << 8), t = s + l;\n                if (t > sl) {\n                    if (noSt)\n                        throw 'unexpected EOF';\n                    break;\n                }\n                // ensure size\n                if (noBuf)\n                    cbuf(bt + l);\n                // Copy over uncompressed data\n                buf.set(dat.subarray(s, t), bt);\n                // Get new bitpos, update byte count\n                st.b = bt += l, st.p = pos = t * 8;\n                continue;\n            }\n            else if (type == 1)\n                lm = flrm, dm = fdrm, lbt = 9, dbt = 5;\n            else if (type == 2) {\n                //  literal                            lengths\n                var hLit = bits(dat, pos, 31) + 257, hcLen = bits(dat, pos + 10, 15) + 4;\n                var tl = hLit + bits(dat, pos + 5, 31) + 1;\n                pos += 14;\n                // length+distance tree\n                var ldt = new u8(tl);\n                // code length tree\n                var clt = new u8(19);\n                for (var i = 0; i < hcLen; ++i) {\n                    // use index map to get real code\n                    clt[clim[i]] = bits(dat, pos + i * 3, 7);\n                }\n                pos += hcLen * 3;\n                // code lengths bits\n                var clb = max(clt), clbmsk = (1 << clb) - 1;\n                // code lengths map\n                var clm = hMap(clt, clb, 1);\n                for (var i = 0; i < tl;) {\n                    var r = clm[bits(dat, pos, clbmsk)];\n                    // bits read\n                    pos += r & 15;\n                    // symbol\n                    var s = r >>> 4;\n                    // code length to copy\n                    if (s < 16) {\n                        ldt[i++] = s;\n                    }\n                    else {\n                        //  copy   count\n                        var c = 0, n = 0;\n                        if (s == 16)\n                            n = 3 + bits(dat, pos, 3), pos += 2, c = ldt[i - 1];\n                        else if (s == 17)\n                            n = 3 + bits(dat, pos, 7), pos += 3;\n                        else if (s == 18)\n                            n = 11 + bits(dat, pos, 127), pos += 7;\n                        while (n--)\n                            ldt[i++] = c;\n                    }\n                }\n                //    length tree                 distance tree\n                var lt = ldt.subarray(0, hLit), dt = ldt.subarray(hLit);\n                // max length bits\n                lbt = max(lt);\n                // max dist bits\n                dbt = max(dt);\n                lm = hMap(lt, lbt, 1);\n                dm = hMap(dt, dbt, 1);\n            }\n            else\n                throw 'invalid block type';\n            if (pos > tbts) {\n                if (noSt)\n                    throw 'unexpected EOF';\n                break;\n            }\n        }\n        // Make sure the buffer can hold this + the largest possible addition\n        // Maximum chunk size (practically, theoretically infinite) is 2^17;\n        if (noBuf)\n            cbuf(bt + 131072);\n        var lms = (1 << lbt) - 1, dms = (1 << dbt) - 1;\n        var lpos = pos;\n        for (;; lpos = pos) {\n            // bits read, code\n            var c = lm[bits16(dat, pos) & lms], sym = c >>> 4;\n            pos += c & 15;\n            if (pos > tbts) {\n                if (noSt)\n                    throw 'unexpected EOF';\n                break;\n            }\n            if (!c)\n                throw 'invalid length/literal';\n            if (sym < 256)\n                buf[bt++] = sym;\n            else if (sym == 256) {\n                lpos = pos, lm = null;\n                break;\n            }\n            else {\n                var add = sym - 254;\n                // no extra bits needed if less\n                if (sym > 264) {\n                    // index\n                    var i = sym - 257, b = fleb[i];\n                    add = bits(dat, pos, (1 << b) - 1) + fl[i];\n                    pos += b;\n                }\n                // dist\n                var d = dm[bits16(dat, pos) & dms], dsym = d >>> 4;\n                if (!d)\n                    throw 'invalid distance';\n                pos += d & 15;\n                var dt = fd[dsym];\n                if (dsym > 3) {\n                    var b = fdeb[dsym];\n                    dt += bits16(dat, pos) & ((1 << b) - 1), pos += b;\n                }\n                if (pos > tbts) {\n                    if (noSt)\n                        throw 'unexpected EOF';\n                    break;\n                }\n                if (noBuf)\n                    cbuf(bt + 131072);\n                var end = bt + add;\n                for (; bt < end; bt += 4) {\n                    buf[bt] = buf[bt - dt];\n                    buf[bt + 1] = buf[bt + 1 - dt];\n                    buf[bt + 2] = buf[bt + 2 - dt];\n                    buf[bt + 3] = buf[bt + 3 - dt];\n                }\n                bt = end;\n            }\n        }\n        st.l = lm, st.p = lpos, st.b = bt;\n        if (lm)\n            final = 1, st.m = lbt, st.d = dm, st.n = dbt;\n    } while (!final);\n    return bt == buf.length ? buf : slc(buf, 0, bt);\n};\n// starting at p, write the minimum number of bits that can hold v to d\nvar wbits = function (d, p, v) {\n    v <<= p & 7;\n    var o = (p / 8) | 0;\n    d[o] |= v;\n    d[o + 1] |= v >>> 8;\n};\n// starting at p, write the minimum number of bits (>8) that can hold v to d\nvar wbits16 = function (d, p, v) {\n    v <<= p & 7;\n    var o = (p / 8) | 0;\n    d[o] |= v;\n    d[o + 1] |= v >>> 8;\n    d[o + 2] |= v >>> 16;\n};\n// creates code lengths from a frequency table\nvar hTree = function (d, mb) {\n    // Need extra info to make a tree\n    var t = [];\n    for (var i = 0; i < d.length; ++i) {\n        if (d[i])\n            t.push({ s: i, f: d[i] });\n    }\n    var s = t.length;\n    var t2 = t.slice();\n    if (!s)\n        return [et, 0];\n    if (s == 1) {\n        var v = new u8(t[0].s + 1);\n        v[t[0].s] = 1;\n        return [v, 1];\n    }\n    t.sort(function (a, b) { return a.f - b.f; });\n    // after i2 reaches last ind, will be stopped\n    // freq must be greater than largest possible number of symbols\n    t.push({ s: -1, f: 25001 });\n    var l = t[0], r = t[1], i0 = 0, i1 = 1, i2 = 2;\n    t[0] = { s: -1, f: l.f + r.f, l: l, r: r };\n    // efficient algorithm from UZIP.js\n    // i0 is lookbehind, i2 is lookahead - after processing two low-freq\n    // symbols that combined have high freq, will start processing i2 (high-freq,\n    // non-composite) symbols instead\n    // see https://reddit.com/r/photopea/comments/ikekht/uzipjs_questions/\n    while (i1 != s - 1) {\n        l = t[t[i0].f < t[i2].f ? i0++ : i2++];\n        r = t[i0 != i1 && t[i0].f < t[i2].f ? i0++ : i2++];\n        t[i1++] = { s: -1, f: l.f + r.f, l: l, r: r };\n    }\n    var maxSym = t2[0].s;\n    for (var i = 1; i < s; ++i) {\n        if (t2[i].s > maxSym)\n            maxSym = t2[i].s;\n    }\n    // code lengths\n    var tr = new u16(maxSym + 1);\n    // max bits in tree\n    var mbt = ln(t[i1 - 1], tr, 0);\n    if (mbt > mb) {\n        // more algorithms from UZIP.js\n        // TODO: find out how this code works (debt)\n        //  ind    debt\n        var i = 0, dt = 0;\n        //    left            cost\n        var lft = mbt - mb, cst = 1 << lft;\n        t2.sort(function (a, b) { return tr[b.s] - tr[a.s] || a.f - b.f; });\n        for (; i < s; ++i) {\n            var i2_1 = t2[i].s;\n            if (tr[i2_1] > mb) {\n                dt += cst - (1 << (mbt - tr[i2_1]));\n                tr[i2_1] = mb;\n            }\n            else\n                break;\n        }\n        dt >>>= lft;\n        while (dt > 0) {\n            var i2_2 = t2[i].s;\n            if (tr[i2_2] < mb)\n                dt -= 1 << (mb - tr[i2_2]++ - 1);\n            else\n                ++i;\n        }\n        for (; i >= 0 && dt; --i) {\n            var i2_3 = t2[i].s;\n            if (tr[i2_3] == mb) {\n                --tr[i2_3];\n                ++dt;\n            }\n        }\n        mbt = mb;\n    }\n    return [new u8(tr), mbt];\n};\n// get the max length and assign length codes\nvar ln = function (n, l, d) {\n    return n.s == -1\n        ? Math.max(ln(n.l, l, d + 1), ln(n.r, l, d + 1))\n        : (l[n.s] = d);\n};\n// length codes generation\nvar lc = function (c) {\n    var s = c.length;\n    // Note that the semicolon was intentional\n    while (s && !c[--s])\n        ;\n    var cl = new u16(++s);\n    //  ind      num         streak\n    var cli = 0, cln = c[0], cls = 1;\n    var w = function (v) { cl[cli++] = v; };\n    for (var i = 1; i <= s; ++i) {\n        if (c[i] == cln && i != s)\n            ++cls;\n        else {\n            if (!cln && cls > 2) {\n                for (; cls > 138; cls -= 138)\n                    w(32754);\n                if (cls > 2) {\n                    w(cls > 10 ? ((cls - 11) << 5) | 28690 : ((cls - 3) << 5) | 12305);\n                    cls = 0;\n                }\n            }\n            else if (cls > 3) {\n                w(cln), --cls;\n                for (; cls > 6; cls -= 6)\n                    w(8304);\n                if (cls > 2)\n                    w(((cls - 3) << 5) | 8208), cls = 0;\n            }\n            while (cls--)\n                w(cln);\n            cls = 1;\n            cln = c[i];\n        }\n    }\n    return [cl.subarray(0, cli), s];\n};\n// calculate the length of output from tree, code lengths\nvar clen = function (cf, cl) {\n    var l = 0;\n    for (var i = 0; i < cl.length; ++i)\n        l += cf[i] * cl[i];\n    return l;\n};\n// writes a fixed block\n// returns the new bit pos\nvar wfblk = function (out, pos, dat) {\n    // no need to write 00 as type: TypedArray defaults to 0\n    var s = dat.length;\n    var o = shft(pos + 2);\n    out[o] = s & 255;\n    out[o + 1] = s >>> 8;\n    out[o + 2] = out[o] ^ 255;\n    out[o + 3] = out[o + 1] ^ 255;\n    for (var i = 0; i < s; ++i)\n        out[o + i + 4] = dat[i];\n    return (o + 4 + s) * 8;\n};\n// writes a block\nvar wblk = function (dat, out, final, syms, lf, df, eb, li, bs, bl, p) {\n    wbits(out, p++, final);\n    ++lf[256];\n    var _a = hTree(lf, 15), dlt = _a[0], mlb = _a[1];\n    var _b = hTree(df, 15), ddt = _b[0], mdb = _b[1];\n    var _c = lc(dlt), lclt = _c[0], nlc = _c[1];\n    var _d = lc(ddt), lcdt = _d[0], ndc = _d[1];\n    var lcfreq = new u16(19);\n    for (var i = 0; i < lclt.length; ++i)\n        lcfreq[lclt[i] & 31]++;\n    for (var i = 0; i < lcdt.length; ++i)\n        lcfreq[lcdt[i] & 31]++;\n    var _e = hTree(lcfreq, 7), lct = _e[0], mlcb = _e[1];\n    var nlcc = 19;\n    for (; nlcc > 4 && !lct[clim[nlcc - 1]]; --nlcc)\n        ;\n    var flen = (bl + 5) << 3;\n    var ftlen = clen(lf, flt) + clen(df, fdt) + eb;\n    var dtlen = clen(lf, dlt) + clen(df, ddt) + eb + 14 + 3 * nlcc + clen(lcfreq, lct) + (2 * lcfreq[16] + 3 * lcfreq[17] + 7 * lcfreq[18]);\n    if (flen <= ftlen && flen <= dtlen)\n        return wfblk(out, p, dat.subarray(bs, bs + bl));\n    var lm, ll, dm, dl;\n    wbits(out, p, 1 + (dtlen < ftlen)), p += 2;\n    if (dtlen < ftlen) {\n        lm = hMap(dlt, mlb, 0), ll = dlt, dm = hMap(ddt, mdb, 0), dl = ddt;\n        var llm = hMap(lct, mlcb, 0);\n        wbits(out, p, nlc - 257);\n        wbits(out, p + 5, ndc - 1);\n        wbits(out, p + 10, nlcc - 4);\n        p += 14;\n        for (var i = 0; i < nlcc; ++i)\n            wbits(out, p + 3 * i, lct[clim[i]]);\n        p += 3 * nlcc;\n        var lcts = [lclt, lcdt];\n        for (var it = 0; it < 2; ++it) {\n            var clct = lcts[it];\n            for (var i = 0; i < clct.length; ++i) {\n                var len = clct[i] & 31;\n                wbits(out, p, llm[len]), p += lct[len];\n                if (len > 15)\n                    wbits(out, p, (clct[i] >>> 5) & 127), p += clct[i] >>> 12;\n            }\n        }\n    }\n    else {\n        lm = flm, ll = flt, dm = fdm, dl = fdt;\n    }\n    for (var i = 0; i < li; ++i) {\n        if (syms[i] > 255) {\n            var len = (syms[i] >>> 18) & 31;\n            wbits16(out, p, lm[len + 257]), p += ll[len + 257];\n            if (len > 7)\n                wbits(out, p, (syms[i] >>> 23) & 31), p += fleb[len];\n            var dst = syms[i] & 31;\n            wbits16(out, p, dm[dst]), p += dl[dst];\n            if (dst > 3)\n                wbits16(out, p, (syms[i] >>> 5) & 8191), p += fdeb[dst];\n        }\n        else {\n            wbits16(out, p, lm[syms[i]]), p += ll[syms[i]];\n        }\n    }\n    wbits16(out, p, lm[256]);\n    return p + ll[256];\n};\n// deflate options (nice << 13) | chain\nvar deo = /*#__PURE__*/ new u32([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]);\n// empty\nvar et = /*#__PURE__*/ new u8(0);\n// compresses data into a raw DEFLATE buffer\nvar dflt = function (dat, lvl, plvl, pre, post, lst) {\n    var s = dat.length;\n    var o = new u8(pre + s + 5 * (1 + Math.ceil(s / 7000)) + post);\n    // writing to this writes to the output buffer\n    var w = o.subarray(pre, o.length - post);\n    var pos = 0;\n    if (!lvl || s < 8) {\n        for (var i = 0; i <= s; i += 65535) {\n            // end\n            var e = i + 65535;\n            if (e < s) {\n                // write full block\n                pos = wfblk(w, pos, dat.subarray(i, e));\n            }\n            else {\n                // write final block\n                w[i] = lst;\n                pos = wfblk(w, pos, dat.subarray(i, s));\n            }\n        }\n    }\n    else {\n        var opt = deo[lvl - 1];\n        var n = opt >>> 13, c = opt & 8191;\n        var msk_1 = (1 << plvl) - 1;\n        //    prev 2-byte val map    curr 2-byte val map\n        var prev = new u16(32768), head = new u16(msk_1 + 1);\n        var bs1_1 = Math.ceil(plvl / 3), bs2_1 = 2 * bs1_1;\n        var hsh = function (i) { return (dat[i] ^ (dat[i + 1] << bs1_1) ^ (dat[i + 2] << bs2_1)) & msk_1; };\n        // 24576 is an arbitrary number of maximum symbols per block\n        // 424 buffer for last block\n        var syms = new u32(25000);\n        // length/literal freq   distance freq\n        var lf = new u16(288), df = new u16(32);\n        //  l/lcnt  exbits  index  l/lind  waitdx  bitpos\n        var lc_1 = 0, eb = 0, i = 0, li = 0, wi = 0, bs = 0;\n        for (; i < s; ++i) {\n            // hash value\n            // deopt when i > s - 3 - at end, deopt acceptable\n            var hv = hsh(i);\n            // index mod 32768    previous index mod\n            var imod = i & 32767, pimod = head[hv];\n            prev[imod] = pimod;\n            head[hv] = imod;\n            // We always should modify head and prev, but only add symbols if\n            // this data is not yet processed (\"wait\" for wait index)\n            if (wi <= i) {\n                // bytes remaining\n                var rem = s - i;\n                if ((lc_1 > 7000 || li > 24576) && rem > 423) {\n                    pos = wblk(dat, w, 0, syms, lf, df, eb, li, bs, i - bs, pos);\n                    li = lc_1 = eb = 0, bs = i;\n                    for (var j = 0; j < 286; ++j)\n                        lf[j] = 0;\n                    for (var j = 0; j < 30; ++j)\n                        df[j] = 0;\n                }\n                //  len    dist   chain\n                var l = 2, d = 0, ch_1 = c, dif = (imod - pimod) & 32767;\n                if (rem > 2 && hv == hsh(i - dif)) {\n                    var maxn = Math.min(n, rem) - 1;\n                    var maxd = Math.min(32767, i);\n                    // max possible length\n                    // not capped at dif because decompressors implement \"rolling\" index population\n                    var ml = Math.min(258, rem);\n                    while (dif <= maxd && --ch_1 && imod != pimod) {\n                        if (dat[i + l] == dat[i + l - dif]) {\n                            var nl = 0;\n                            for (; nl < ml && dat[i + nl] == dat[i + nl - dif]; ++nl)\n                                ;\n                            if (nl > l) {\n                                l = nl, d = dif;\n                                // break out early when we reach \"nice\" (we are satisfied enough)\n                                if (nl > maxn)\n                                    break;\n                                // now, find the rarest 2-byte sequence within this\n                                // length of literals and search for that instead.\n                                // Much faster than just using the start\n                                var mmd = Math.min(dif, nl - 2);\n                                var md = 0;\n                                for (var j = 0; j < mmd; ++j) {\n                                    var ti = (i - dif + j + 32768) & 32767;\n                                    var pti = prev[ti];\n                                    var cd = (ti - pti + 32768) & 32767;\n                                    if (cd > md)\n                                        md = cd, pimod = ti;\n                                }\n                            }\n                        }\n                        // check the previous match\n                        imod = pimod, pimod = prev[imod];\n                        dif += (imod - pimod + 32768) & 32767;\n                    }\n                }\n                // d will be nonzero only when a match was found\n                if (d) {\n                    // store both dist and len data in one Uint32\n                    // Make sure this is recognized as a len/dist with 28th bit (2^28)\n                    syms[li++] = 268435456 | (revfl[l] << 18) | revfd[d];\n                    var lin = revfl[l] & 31, din = revfd[d] & 31;\n                    eb += fleb[lin] + fdeb[din];\n                    ++lf[257 + lin];\n                    ++df[din];\n                    wi = i + l;\n                    ++lc_1;\n                }\n                else {\n                    syms[li++] = dat[i];\n                    ++lf[dat[i]];\n                }\n            }\n        }\n        pos = wblk(dat, w, lst, syms, lf, df, eb, li, bs, i - bs, pos);\n        // this is the easiest way to avoid needing to maintain state\n        if (!lst && pos & 7)\n            pos = wfblk(w, pos + 1, et);\n    }\n    return slc(o, 0, pre + shft(pos) + post);\n};\n// CRC32 table\nvar crct = /*#__PURE__*/ (function () {\n    var t = new u32(256);\n    for (var i = 0; i < 256; ++i) {\n        var c = i, k = 9;\n        while (--k)\n            c = ((c & 1) && 0xEDB88320) ^ (c >>> 1);\n        t[i] = c;\n    }\n    return t;\n})();\n// CRC32\nvar crc = function () {\n    var c = -1;\n    return {\n        p: function (d) {\n            // closures have awful performance\n            var cr = c;\n            for (var i = 0; i < d.length; ++i)\n                cr = crct[(cr & 255) ^ d[i]] ^ (cr >>> 8);\n            c = cr;\n        },\n        d: function () { return ~c; }\n    };\n};\n// Alder32\nvar adler = function () {\n    var a = 1, b = 0;\n    return {\n        p: function (d) {\n            // closures have awful performance\n            var n = a, m = b;\n            var l = d.length;\n            for (var i = 0; i != l;) {\n                var e = Math.min(i + 2655, l);\n                for (; i < e; ++i)\n                    m += n += d[i];\n                n = (n & 65535) + 15 * (n >> 16), m = (m & 65535) + 15 * (m >> 16);\n            }\n            a = n, b = m;\n        },\n        d: function () {\n            a %= 65521, b %= 65521;\n            return (a & 255) << 24 | (a >>> 8) << 16 | (b & 255) << 8 | (b >>> 8);\n        }\n    };\n};\n;\n// deflate with opts\nvar dopt = function (dat, opt, pre, post, st) {\n    return dflt(dat, opt.level == null ? 6 : opt.level, opt.mem == null ? Math.ceil(Math.max(8, Math.min(13, Math.log(dat.length))) * 1.5) : (12 + opt.mem), pre, post, !st);\n};\n// Walmart object spread\nvar mrg = function (a, b) {\n    var o = {};\n    for (var k in a)\n        o[k] = a[k];\n    for (var k in b)\n        o[k] = b[k];\n    return o;\n};\n// worker clone\n// This is possibly the craziest part of the entire codebase, despite how simple it may seem.\n// The only parameter to this function is a closure that returns an array of variables outside of the function scope.\n// We're going to try to figure out the variable names used in the closure as strings because that is crucial for workerization.\n// We will return an object mapping of true variable name to value (basically, the current scope as a JS object).\n// The reason we can't just use the original variable names is minifiers mangling the toplevel scope.\n// This took me three weeks to figure out how to do.\nvar wcln = function (fn, fnStr, td) {\n    var dt = fn();\n    var st = fn.toString();\n    var ks = st.slice(st.indexOf('[') + 1, st.lastIndexOf(']')).replace(/ /g, '').split(',');\n    for (var i = 0; i < dt.length; ++i) {\n        var v = dt[i], k = ks[i];\n        if (typeof v == 'function') {\n            fnStr += ';' + k + '=';\n            var st_1 = v.toString();\n            if (v.prototype) {\n                // for global objects\n                if (st_1.indexOf('[native code]') != -1) {\n                    var spInd = st_1.indexOf(' ', 8) + 1;\n                    fnStr += st_1.slice(spInd, st_1.indexOf('(', spInd));\n                }\n                else {\n                    fnStr += st_1;\n                    for (var t in v.prototype)\n                        fnStr += ';' + k + '.prototype.' + t + '=' + v.prototype[t].toString();\n                }\n            }\n            else\n                fnStr += st_1;\n        }\n        else\n            td[k] = v;\n    }\n    return [fnStr, td];\n};\nvar ch = [];\n// clone bufs\nvar cbfs = function (v) {\n    var tl = [];\n    for (var k in v) {\n        if (v[k] instanceof u8 || v[k] instanceof u16 || v[k] instanceof u32)\n            tl.push((v[k] = new v[k].constructor(v[k])).buffer);\n    }\n    return tl;\n};\n// use a worker to execute code\nvar wrkr = function (fns, init, id, cb) {\n    var _a;\n    if (!ch[id]) {\n        var fnStr = '', td_1 = {}, m = fns.length - 1;\n        for (var i = 0; i < m; ++i)\n            _a = wcln(fns[i], fnStr, td_1), fnStr = _a[0], td_1 = _a[1];\n        ch[id] = wcln(fns[m], fnStr, td_1);\n    }\n    var td = mrg({}, ch[id][1]);\n    return wk(ch[id][0] + ';onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage=' + init.toString() + '}', id, td, cbfs(td), cb);\n};\n// base async inflate fn\nvar bInflt = function () { return [u8, u16, u32, fleb, fdeb, clim, fl, fd, flrm, fdrm, rev, hMap, max, bits, bits16, shft, slc, inflt, inflateSync, pbf, gu8]; };\nvar bDflt = function () { return [u8, u16, u32, fleb, fdeb, clim, revfl, revfd, flm, flt, fdm, fdt, rev, deo, et, hMap, wbits, wbits16, hTree, ln, lc, clen, wfblk, wblk, shft, slc, dflt, dopt, deflateSync, pbf]; };\n// gzip extra\nvar gze = function () { return [gzh, gzhl, wbytes, crc, crct]; };\n// gunzip extra\nvar guze = function () { return [gzs, gzl]; };\n// zlib extra\nvar zle = function () { return [zlh, wbytes, adler]; };\n// unzlib extra\nvar zule = function () { return [zlv]; };\n// post buf\nvar pbf = function (msg) { return postMessage(msg, [msg.buffer]); };\n// get u8\nvar gu8 = function (o) { return o && o.size && new u8(o.size); };\n// async helper\nvar cbify = function (dat, opts, fns, init, id, cb) {\n    var w = wrkr(fns, init, id, function (err, dat) {\n        w.terminate();\n        cb(err, dat);\n    });\n    w.postMessage([dat, opts], opts.consume ? [dat.buffer] : []);\n    return function () { w.terminate(); };\n};\n// auto stream\nvar astrm = function (strm) {\n    strm.ondata = function (dat, final) { return postMessage([dat, final], [dat.buffer]); };\n    return function (ev) { return strm.push(ev.data[0], ev.data[1]); };\n};\n// async stream attach\nvar astrmify = function (fns, strm, opts, init, id) {\n    var t;\n    var w = wrkr(fns, init, id, function (err, dat) {\n        if (err)\n            w.terminate(), strm.ondata.call(strm, err);\n        else {\n            if (dat[1])\n                w.terminate();\n            strm.ondata.call(strm, err, dat[0], dat[1]);\n        }\n    });\n    w.postMessage(opts);\n    strm.push = function (d, f) {\n        if (t)\n            throw 'stream finished';\n        if (!strm.ondata)\n            throw 'no stream handler';\n        w.postMessage([d, t = f], [d.buffer]);\n    };\n    strm.terminate = function () { w.terminate(); };\n};\n// read 2 bytes\nvar b2 = function (d, b) { return d[b] | (d[b + 1] << 8); };\n// read 4 bytes\nvar b4 = function (d, b) { return (d[b] | (d[b + 1] << 8) | (d[b + 2] << 16) | (d[b + 3] << 24)) >>> 0; };\nvar b8 = function (d, b) { return b4(d, b) + (b4(d, b + 4) * 4294967296); };\n// write bytes\nvar wbytes = function (d, b, v) {\n    for (; v; ++b)\n        d[b] = v, v >>>= 8;\n};\n// gzip header\nvar gzh = function (c, o) {\n    var fn = o.filename;\n    c[0] = 31, c[1] = 139, c[2] = 8, c[8] = o.level < 2 ? 4 : o.level == 9 ? 2 : 0, c[9] = 3; // assume Unix\n    if (o.mtime != 0)\n        wbytes(c, 4, Math.floor(new Date(o.mtime || Date.now()) / 1000));\n    if (fn) {\n        c[3] = 8;\n        for (var i = 0; i <= fn.length; ++i)\n            c[i + 10] = fn.charCodeAt(i);\n    }\n};\n// gzip footer: -8 to -4 = CRC, -4 to -0 is length\n// gzip start\nvar gzs = function (d) {\n    if (d[0] != 31 || d[1] != 139 || d[2] != 8)\n        throw 'invalid gzip data';\n    var flg = d[3];\n    var st = 10;\n    if (flg & 4)\n        st += d[10] | (d[11] << 8) + 2;\n    for (var zs = (flg >> 3 & 1) + (flg >> 4 & 1); zs > 0; zs -= !d[st++])\n        ;\n    return st + (flg & 2);\n};\n// gzip length\nvar gzl = function (d) {\n    var l = d.length;\n    return ((d[l - 4] | d[l - 3] << 8 | d[l - 2] << 16) | (d[l - 1] << 24)) >>> 0;\n};\n// gzip header length\nvar gzhl = function (o) { return 10 + ((o.filename && (o.filename.length + 1)) || 0); };\n// zlib header\nvar zlh = function (c, o) {\n    var lv = o.level, fl = lv == 0 ? 0 : lv < 6 ? 1 : lv == 9 ? 3 : 2;\n    c[0] = 120, c[1] = (fl << 6) | (fl ? (32 - 2 * fl) : 1);\n};\n// zlib valid\nvar zlv = function (d) {\n    if ((d[0] & 15) != 8 || (d[0] >>> 4) > 7 || ((d[0] << 8 | d[1]) % 31))\n        throw 'invalid zlib data';\n    if (d[1] & 32)\n        throw 'invalid zlib data: preset dictionaries not supported';\n};\nfunction AsyncCmpStrm(opts, cb) {\n    if (!cb && typeof opts == 'function')\n        cb = opts, opts = {};\n    this.ondata = cb;\n    return opts;\n}\n// zlib footer: -4 to -0 is Adler32\n/**\n * Streaming DEFLATE compression\n */\nvar Deflate = /*#__PURE__*/ (function () {\n    function Deflate(opts, cb) {\n        if (!cb && typeof opts == 'function')\n            cb = opts, opts = {};\n        this.ondata = cb;\n        this.o = opts || {};\n    }\n    Deflate.prototype.p = function (c, f) {\n        this.ondata(dopt(c, this.o, 0, 0, !f), f);\n    };\n    /**\n     * Pushes a chunk to be deflated\n     * @param chunk The chunk to push\n     * @param final Whether this is the last chunk\n     */\n    Deflate.prototype.push = function (chunk, final) {\n        if (this.d)\n            throw 'stream finished';\n        if (!this.ondata)\n            throw 'no stream handler';\n        this.d = final;\n        this.p(chunk, final || false);\n    };\n    return Deflate;\n}());\n\n/**\n * Asynchronous streaming DEFLATE compression\n */\nvar AsyncDeflate = /*#__PURE__*/ (function () {\n    function AsyncDeflate(opts, cb) {\n        astrmify([\n            bDflt,\n            function () { return [astrm, Deflate]; }\n        ], this, AsyncCmpStrm.call(this, opts, cb), function (ev) {\n            var strm = new Deflate(ev.data);\n            onmessage = astrm(strm);\n        }, 6);\n    }\n    return AsyncDeflate;\n}());\n\nfunction deflate(data, opts, cb) {\n    if (!cb)\n        cb = opts, opts = {};\n    if (typeof cb != 'function')\n        throw 'no callback';\n    return cbify(data, opts, [\n        bDflt,\n    ], function (ev) { return pbf(deflateSync(ev.data[0], ev.data[1])); }, 0, cb);\n}\n/**\n * Compresses data with DEFLATE without any wrapper\n * @param data The data to compress\n * @param opts The compression options\n * @returns The deflated version of the data\n */\nfunction deflateSync(data, opts) {\n    return dopt(data, opts || {}, 0, 0);\n}\n/**\n * Streaming DEFLATE decompression\n */\nvar Inflate = /*#__PURE__*/ (function () {\n    /**\n     * Creates an inflation stream\n     * @param cb The callback to call whenever data is inflated\n     */\n    function Inflate(cb) {\n        this.s = {};\n        this.p = new u8(0);\n        this.ondata = cb;\n    }\n    Inflate.prototype.e = function (c) {\n        if (this.d)\n            throw 'stream finished';\n        if (!this.ondata)\n            throw 'no stream handler';\n        var l = this.p.length;\n        var n = new u8(l + c.length);\n        n.set(this.p), n.set(c, l), this.p = n;\n    };\n    Inflate.prototype.c = function (final) {\n        this.d = this.s.i = final || false;\n        var bts = this.s.b;\n        var dt = inflt(this.p, this.o, this.s);\n        this.ondata(slc(dt, bts, this.s.b), this.d);\n        this.o = slc(dt, this.s.b - 32768), this.s.b = this.o.length;\n        this.p = slc(this.p, (this.s.p / 8) | 0), this.s.p &= 7;\n    };\n    /**\n     * Pushes a chunk to be inflated\n     * @param chunk The chunk to push\n     * @param final Whether this is the final chunk\n     */\n    Inflate.prototype.push = function (chunk, final) {\n        this.e(chunk), this.c(final);\n    };\n    return Inflate;\n}());\n\n/**\n * Asynchronous streaming DEFLATE decompression\n */\nvar AsyncInflate = /*#__PURE__*/ (function () {\n    /**\n     * Creates an asynchronous inflation stream\n     * @param cb The callback to call whenever data is deflated\n     */\n    function AsyncInflate(cb) {\n        this.ondata = cb;\n        astrmify([\n            bInflt,\n            function () { return [astrm, Inflate]; }\n        ], this, 0, function () {\n            var strm = new Inflate();\n            onmessage = astrm(strm);\n        }, 7);\n    }\n    return AsyncInflate;\n}());\n\nfunction inflate(data, opts, cb) {\n    if (!cb)\n        cb = opts, opts = {};\n    if (typeof cb != 'function')\n        throw 'no callback';\n    return cbify(data, opts, [\n        bInflt\n    ], function (ev) { return pbf(inflateSync(ev.data[0], gu8(ev.data[1]))); }, 1, cb);\n}\n/**\n * Expands DEFLATE data with no wrapper\n * @param data The data to decompress\n * @param out Where to write the data. Saves memory if you know the decompressed size and provide an output buffer of that length.\n * @returns The decompressed version of the data\n */\nfunction inflateSync(data, out) {\n    return inflt(data, out);\n}\n// before you yell at me for not just using extends, my reason is that TS inheritance is hard to workerize.\n/**\n * Streaming GZIP compression\n */\nvar Gzip = /*#__PURE__*/ (function () {\n    function Gzip(opts, cb) {\n        this.c = crc();\n        this.l = 0;\n        this.v = 1;\n        Deflate.call(this, opts, cb);\n    }\n    /**\n     * Pushes a chunk to be GZIPped\n     * @param chunk The chunk to push\n     * @param final Whether this is the last chunk\n     */\n    Gzip.prototype.push = function (chunk, final) {\n        Deflate.prototype.push.call(this, chunk, final);\n    };\n    Gzip.prototype.p = function (c, f) {\n        this.c.p(c);\n        this.l += c.length;\n        var raw = dopt(c, this.o, this.v && gzhl(this.o), f && 8, !f);\n        if (this.v)\n            gzh(raw, this.o), this.v = 0;\n        if (f)\n            wbytes(raw, raw.length - 8, this.c.d()), wbytes(raw, raw.length - 4, this.l);\n        this.ondata(raw, f);\n    };\n    return Gzip;\n}());\n\n/**\n * Asynchronous streaming GZIP compression\n */\nvar AsyncGzip = /*#__PURE__*/ (function () {\n    function AsyncGzip(opts, cb) {\n        astrmify([\n            bDflt,\n            gze,\n            function () { return [astrm, Deflate, Gzip]; }\n        ], this, AsyncCmpStrm.call(this, opts, cb), function (ev) {\n            var strm = new Gzip(ev.data);\n            onmessage = astrm(strm);\n        }, 8);\n    }\n    return AsyncGzip;\n}());\n\nfunction gzip(data, opts, cb) {\n    if (!cb)\n        cb = opts, opts = {};\n    if (typeof cb != 'function')\n        throw 'no callback';\n    return cbify(data, opts, [\n        bDflt,\n        gze,\n        function () { return [gzipSync]; }\n    ], function (ev) { return pbf(gzipSync(ev.data[0], ev.data[1])); }, 2, cb);\n}\n/**\n * Compresses data with GZIP\n * @param data The data to compress\n * @param opts The compression options\n * @returns The gzipped version of the data\n */\nfunction gzipSync(data, opts) {\n    if (!opts)\n        opts = {};\n    var c = crc(), l = data.length;\n    c.p(data);\n    var d = dopt(data, opts, gzhl(opts), 8), s = d.length;\n    return gzh(d, opts), wbytes(d, s - 8, c.d()), wbytes(d, s - 4, l), d;\n}\n/**\n * Streaming GZIP decompression\n */\nvar Gunzip = /*#__PURE__*/ (function () {\n    /**\n     * Creates a GUNZIP stream\n     * @param cb The callback to call whenever data is inflated\n     */\n    function Gunzip(cb) {\n        this.v = 1;\n        Inflate.call(this, cb);\n    }\n    /**\n     * Pushes a chunk to be GUNZIPped\n     * @param chunk The chunk to push\n     * @param final Whether this is the last chunk\n     */\n    Gunzip.prototype.push = function (chunk, final) {\n        Inflate.prototype.e.call(this, chunk);\n        if (this.v) {\n            var s = this.p.length > 3 ? gzs(this.p) : 4;\n            if (s >= this.p.length && !final)\n                return;\n            this.p = this.p.subarray(s), this.v = 0;\n        }\n        if (final) {\n            if (this.p.length < 8)\n                throw 'invalid gzip stream';\n            this.p = this.p.subarray(0, -8);\n        }\n        // necessary to prevent TS from using the closure value\n        // This allows for workerization to function correctly\n        Inflate.prototype.c.call(this, final);\n    };\n    return Gunzip;\n}());\n\n/**\n * Asynchronous streaming GZIP decompression\n */\nvar AsyncGunzip = /*#__PURE__*/ (function () {\n    /**\n     * Creates an asynchronous GUNZIP stream\n     * @param cb The callback to call whenever data is deflated\n     */\n    function AsyncGunzip(cb) {\n        this.ondata = cb;\n        astrmify([\n            bInflt,\n            guze,\n            function () { return [astrm, Inflate, Gunzip]; }\n        ], this, 0, function () {\n            var strm = new Gunzip();\n            onmessage = astrm(strm);\n        }, 9);\n    }\n    return AsyncGunzip;\n}());\n\nfunction gunzip(data, opts, cb) {\n    if (!cb)\n        cb = opts, opts = {};\n    if (typeof cb != 'function')\n        throw 'no callback';\n    return cbify(data, opts, [\n        bInflt,\n        guze,\n        function () { return [gunzipSync]; }\n    ], function (ev) { return pbf(gunzipSync(ev.data[0])); }, 3, cb);\n}\n/**\n * Expands GZIP data\n * @param data The data to decompress\n * @param out Where to write the data. GZIP already encodes the output size, so providing this doesn't save memory.\n * @returns The decompressed version of the data\n */\nfunction gunzipSync(data, out) {\n    return inflt(data.subarray(gzs(data), -8), out || new u8(gzl(data)));\n}\n/**\n * Streaming Zlib compression\n */\nvar Zlib = /*#__PURE__*/ (function () {\n    function Zlib(opts, cb) {\n        this.c = adler();\n        this.v = 1;\n        Deflate.call(this, opts, cb);\n    }\n    /**\n     * Pushes a chunk to be zlibbed\n     * @param chunk The chunk to push\n     * @param final Whether this is the last chunk\n     */\n    Zlib.prototype.push = function (chunk, final) {\n        Deflate.prototype.push.call(this, chunk, final);\n    };\n    Zlib.prototype.p = function (c, f) {\n        this.c.p(c);\n        var raw = dopt(c, this.o, this.v && 2, f && 4, !f);\n        if (this.v)\n            zlh(raw, this.o), this.v = 0;\n        if (f)\n            wbytes(raw, raw.length - 4, this.c.d());\n        this.ondata(raw, f);\n    };\n    return Zlib;\n}());\n\n/**\n * Asynchronous streaming Zlib compression\n */\nvar AsyncZlib = /*#__PURE__*/ (function () {\n    function AsyncZlib(opts, cb) {\n        astrmify([\n            bDflt,\n            zle,\n            function () { return [astrm, Deflate, Zlib]; }\n        ], this, AsyncCmpStrm.call(this, opts, cb), function (ev) {\n            var strm = new Zlib(ev.data);\n            onmessage = astrm(strm);\n        }, 10);\n    }\n    return AsyncZlib;\n}());\n\nfunction zlib(data, opts, cb) {\n    if (!cb)\n        cb = opts, opts = {};\n    if (typeof cb != 'function')\n        throw 'no callback';\n    return cbify(data, opts, [\n        bDflt,\n        zle,\n        function () { return [zlibSync]; }\n    ], function (ev) { return pbf(zlibSync(ev.data[0], ev.data[1])); }, 4, cb);\n}\n/**\n * Compress data with Zlib\n * @param data The data to compress\n * @param opts The compression options\n * @returns The zlib-compressed version of the data\n */\nfunction zlibSync(data, opts) {\n    if (!opts)\n        opts = {};\n    var a = adler();\n    a.p(data);\n    var d = dopt(data, opts, 2, 4);\n    return zlh(d, opts), wbytes(d, d.length - 4, a.d()), d;\n}\n/**\n * Streaming Zlib decompression\n */\nvar Unzlib = /*#__PURE__*/ (function () {\n    /**\n     * Creates a Zlib decompression stream\n     * @param cb The callback to call whenever data is inflated\n     */\n    function Unzlib(cb) {\n        this.v = 1;\n        Inflate.call(this, cb);\n    }\n    /**\n     * Pushes a chunk to be unzlibbed\n     * @param chunk The chunk to push\n     * @param final Whether this is the last chunk\n     */\n    Unzlib.prototype.push = function (chunk, final) {\n        Inflate.prototype.e.call(this, chunk);\n        if (this.v) {\n            if (this.p.length < 2 && !final)\n                return;\n            this.p = this.p.subarray(2), this.v = 0;\n        }\n        if (final) {\n            if (this.p.length < 4)\n                throw 'invalid zlib stream';\n            this.p = this.p.subarray(0, -4);\n        }\n        // necessary to prevent TS from using the closure value\n        // This allows for workerization to function correctly\n        Inflate.prototype.c.call(this, final);\n    };\n    return Unzlib;\n}());\n\n/**\n * Asynchronous streaming Zlib decompression\n */\nvar AsyncUnzlib = /*#__PURE__*/ (function () {\n    /**\n     * Creates an asynchronous Zlib decompression stream\n     * @param cb The callback to call whenever data is deflated\n     */\n    function AsyncUnzlib(cb) {\n        this.ondata = cb;\n        astrmify([\n            bInflt,\n            zule,\n            function () { return [astrm, Inflate, Unzlib]; }\n        ], this, 0, function () {\n            var strm = new Unzlib();\n            onmessage = astrm(strm);\n        }, 11);\n    }\n    return AsyncUnzlib;\n}());\n\nfunction unzlib(data, opts, cb) {\n    if (!cb)\n        cb = opts, opts = {};\n    if (typeof cb != 'function')\n        throw 'no callback';\n    return cbify(data, opts, [\n        bInflt,\n        zule,\n        function () { return [unzlibSync]; }\n    ], function (ev) { return pbf(unzlibSync(ev.data[0], gu8(ev.data[1]))); }, 5, cb);\n}\n/**\n * Expands Zlib data\n * @param data The data to decompress\n * @param out Where to write the data. Saves memory if you know the decompressed size and provide an output buffer of that length.\n * @returns The decompressed version of the data\n */\nfunction unzlibSync(data, out) {\n    return inflt((zlv(data), data.subarray(2, -4)), out);\n}\n// Default algorithm for compression (used because having a known output size allows faster decompression)\n\n// Default algorithm for compression (used because having a known output size allows faster decompression)\n\n/**\n * Streaming GZIP, Zlib, or raw DEFLATE decompression\n */\nvar Decompress = /*#__PURE__*/ (function () {\n    /**\n     * Creates a decompression stream\n     * @param cb The callback to call whenever data is decompressed\n     */\n    function Decompress(cb) {\n        this.G = Gunzip;\n        this.I = Inflate;\n        this.Z = Unzlib;\n        this.ondata = cb;\n    }\n    /**\n     * Pushes a chunk to be decompressed\n     * @param chunk The chunk to push\n     * @param final Whether this is the last chunk\n     */\n    Decompress.prototype.push = function (chunk, final) {\n        if (!this.ondata)\n            throw 'no stream handler';\n        if (!this.s) {\n            if (this.p && this.p.length) {\n                var n = new u8(this.p.length + chunk.length);\n                n.set(this.p), n.set(chunk, this.p.length);\n            }\n            else\n                this.p = chunk;\n            if (this.p.length > 2) {\n                var _this_1 = this;\n                var cb = function () { _this_1.ondata.apply(_this_1, arguments); };\n                this.s = (this.p[0] == 31 && this.p[1] == 139 && this.p[2] == 8)\n                    ? new this.G(cb)\n                    : ((this.p[0] & 15) != 8 || (this.p[0] >> 4) > 7 || ((this.p[0] << 8 | this.p[1]) % 31))\n                        ? new this.I(cb)\n                        : new this.Z(cb);\n                this.s.push(this.p, final);\n                this.p = null;\n            }\n        }\n        else\n            this.s.push(chunk, final);\n    };\n    return Decompress;\n}());\n\n/**\n * Asynchronous streaming GZIP, Zlib, or raw DEFLATE decompression\n */\nvar AsyncDecompress = /*#__PURE__*/ (function () {\n    /**\n   * Creates an asynchronous decompression stream\n   * @param cb The callback to call whenever data is decompressed\n   */\n    function AsyncDecompress(cb) {\n        this.G = AsyncGunzip;\n        this.I = AsyncInflate;\n        this.Z = AsyncUnzlib;\n        this.ondata = cb;\n    }\n    /**\n     * Pushes a chunk to be decompressed\n     * @param chunk The chunk to push\n     * @param final Whether this is the last chunk\n     */\n    AsyncDecompress.prototype.push = function (chunk, final) {\n        Decompress.prototype.push.call(this, chunk, final);\n    };\n    return AsyncDecompress;\n}());\n\nfunction decompress(data, opts, cb) {\n    if (!cb)\n        cb = opts, opts = {};\n    if (typeof cb != 'function')\n        throw 'no callback';\n    return (data[0] == 31 && data[1] == 139 && data[2] == 8)\n        ? gunzip(data, opts, cb)\n        : ((data[0] & 15) != 8 || (data[0] >> 4) > 7 || ((data[0] << 8 | data[1]) % 31))\n            ? inflate(data, opts, cb)\n            : unzlib(data, opts, cb);\n}\n/**\n * Expands compressed GZIP, Zlib, or raw DEFLATE data, automatically detecting the format\n * @param data The data to decompress\n * @param out Where to write the data. Saves memory if you know the decompressed size and provide an output buffer of that length.\n * @returns The decompressed version of the data\n */\nfunction decompressSync(data, out) {\n    return (data[0] == 31 && data[1] == 139 && data[2] == 8)\n        ? gunzipSync(data, out)\n        : ((data[0] & 15) != 8 || (data[0] >> 4) > 7 || ((data[0] << 8 | data[1]) % 31))\n            ? inflateSync(data, out)\n            : unzlibSync(data, out);\n}\n// flatten a directory structure\nvar fltn = function (d, p, t, o) {\n    for (var k in d) {\n        var val = d[k], n = p + k;\n        if (val instanceof u8)\n            t[n] = [val, o];\n        else if (Array.isArray(val))\n            t[n] = [val[0], mrg(o, val[1])];\n        else\n            fltn(val, n + '/', t, o);\n    }\n};\n// text encoder\nvar te = typeof TextEncoder != 'undefined' && /*#__PURE__*/ new TextEncoder();\n// text decoder\nvar td = typeof TextDecoder != 'undefined' && /*#__PURE__*/ new TextDecoder();\n// text decoder stream\nvar tds = 0;\ntry {\n    td.decode(et, { stream: true });\n    tds = 1;\n}\ncatch (e) { }\n// decode UTF8\nvar dutf8 = function (d) {\n    for (var r = '', i = 0;;) {\n        var c = d[i++];\n        var eb = (c > 127) + (c > 223) + (c > 239);\n        if (i + eb > d.length)\n            return [r, slc(d, i - 1)];\n        if (!eb)\n            r += String.fromCharCode(c);\n        else if (eb == 3) {\n            c = ((c & 15) << 18 | (d[i++] & 63) << 12 | (d[i++] & 63) << 6 | (d[i++] & 63)) - 65536,\n                r += String.fromCharCode(55296 | (c >> 10), 56320 | (c & 1023));\n        }\n        else if (eb & 1)\n            r += String.fromCharCode((c & 31) << 6 | (d[i++] & 63));\n        else\n            r += String.fromCharCode((c & 15) << 12 | (d[i++] & 63) << 6 | (d[i++] & 63));\n    }\n};\n/**\n * Streaming UTF-8 decoding\n */\nvar DecodeUTF8 = /*#__PURE__*/ (function () {\n    /**\n     * Creates a UTF-8 decoding stream\n     * @param cb The callback to call whenever data is decoded\n     */\n    function DecodeUTF8(cb) {\n        this.ondata = cb;\n        if (tds)\n            this.t = new TextDecoder();\n        else\n            this.p = et;\n    }\n    /**\n     * Pushes a chunk to be decoded from UTF-8 binary\n     * @param chunk The chunk to push\n     * @param final Whether this is the last chunk\n     */\n    DecodeUTF8.prototype.push = function (chunk, final) {\n        if (!this.ondata)\n            throw 'no callback';\n        final = !!final;\n        if (this.t) {\n            this.ondata(this.t.decode(chunk, { stream: true }), final);\n            if (final) {\n                if (this.t.decode().length)\n                    throw 'invalid utf-8 data';\n                this.t = null;\n            }\n            return;\n        }\n        if (!this.p)\n            throw 'stream finished';\n        var dat = new u8(this.p.length + chunk.length);\n        dat.set(this.p);\n        dat.set(chunk, this.p.length);\n        var _a = dutf8(dat), ch = _a[0], np = _a[1];\n        if (final) {\n            if (np.length)\n                throw 'invalid utf-8 data';\n            this.p = null;\n        }\n        else\n            this.p = np;\n        this.ondata(ch, final);\n    };\n    return DecodeUTF8;\n}());\n\n/**\n * Streaming UTF-8 encoding\n */\nvar EncodeUTF8 = /*#__PURE__*/ (function () {\n    /**\n     * Creates a UTF-8 decoding stream\n     * @param cb The callback to call whenever data is encoded\n     */\n    function EncodeUTF8(cb) {\n        this.ondata = cb;\n    }\n    /**\n     * Pushes a chunk to be encoded to UTF-8\n     * @param chunk The string data to push\n     * @param final Whether this is the last chunk\n     */\n    EncodeUTF8.prototype.push = function (chunk, final) {\n        if (!this.ondata)\n            throw 'no callback';\n        if (this.d)\n            throw 'stream finished';\n        this.ondata(strToU8(chunk), this.d = final || false);\n    };\n    return EncodeUTF8;\n}());\n\n/**\n * Converts a string into a Uint8Array for use with compression/decompression methods\n * @param str The string to encode\n * @param latin1 Whether or not to interpret the data as Latin-1. This should\n *               not need to be true unless decoding a binary string.\n * @returns The string encoded in UTF-8/Latin-1 binary\n */\nfunction strToU8(str, latin1) {\n    if (latin1) {\n        var ar_1 = new u8(str.length);\n        for (var i = 0; i < str.length; ++i)\n            ar_1[i] = str.charCodeAt(i);\n        return ar_1;\n    }\n    if (te)\n        return te.encode(str);\n    var l = str.length;\n    var ar = new u8(str.length + (str.length >> 1));\n    var ai = 0;\n    var w = function (v) { ar[ai++] = v; };\n    for (var i = 0; i < l; ++i) {\n        if (ai + 5 > ar.length) {\n            var n = new u8(ai + 8 + ((l - i) << 1));\n            n.set(ar);\n            ar = n;\n        }\n        var c = str.charCodeAt(i);\n        if (c < 128 || latin1)\n            w(c);\n        else if (c < 2048)\n            w(192 | (c >> 6)), w(128 | (c & 63));\n        else if (c > 55295 && c < 57344)\n            c = 65536 + (c & 1023 << 10) | (str.charCodeAt(++i) & 1023),\n                w(240 | (c >> 18)), w(128 | ((c >> 12) & 63)), w(128 | ((c >> 6) & 63)), w(128 | (c & 63));\n        else\n            w(224 | (c >> 12)), w(128 | ((c >> 6) & 63)), w(128 | (c & 63));\n    }\n    return slc(ar, 0, ai);\n}\n/**\n * Converts a Uint8Array to a string\n * @param dat The data to decode to string\n * @param latin1 Whether or not to interpret the data as Latin-1. This should\n *               not need to be true unless encoding to binary string.\n * @returns The original UTF-8/Latin-1 string\n */\nfunction strFromU8(dat, latin1) {\n    if (latin1) {\n        var r = '';\n        for (var i = 0; i < dat.length; i += 16384)\n            r += String.fromCharCode.apply(null, dat.subarray(i, i + 16384));\n        return r;\n    }\n    else if (td)\n        return td.decode(dat);\n    else {\n        var _a = dutf8(dat), out = _a[0], ext = _a[1];\n        if (ext.length)\n            throw 'invalid utf-8 data';\n        return out;\n    }\n}\n;\n// deflate bit flag\nvar dbf = function (l) { return l == 1 ? 3 : l < 6 ? 2 : l == 9 ? 1 : 0; };\n// skip local zip header\nvar slzh = function (d, b) { return b + 30 + b2(d, b + 26) + b2(d, b + 28); };\n// read zip header\nvar zh = function (d, b, z) {\n    var fnl = b2(d, b + 28), fn = strFromU8(d.subarray(b + 46, b + 46 + fnl), !(b2(d, b + 8) & 2048)), es = b + 46 + fnl, bs = b4(d, b + 20);\n    var _a = z && bs == 4294967295 ? z64e(d, es) : [bs, b4(d, b + 24), b4(d, b + 42)], sc = _a[0], su = _a[1], off = _a[2];\n    return [b2(d, b + 10), sc, su, fn, es + b2(d, b + 30) + b2(d, b + 32), off];\n};\n// read zip64 extra field\nvar z64e = function (d, b) {\n    for (; b2(d, b) != 1; b += 4 + b2(d, b + 2))\n        ;\n    return [b8(d, b + 12), b8(d, b + 4), b8(d, b + 20)];\n};\n// extra field length\nvar exfl = function (ex) {\n    var le = 0;\n    if (ex) {\n        for (var k in ex) {\n            var l = ex[k].length;\n            if (l > 65535)\n                throw 'extra field too long';\n            le += l + 4;\n        }\n    }\n    return le;\n};\n// write zip header\nvar wzh = function (d, b, f, fn, u, c, ce, co) {\n    var fl = fn.length, ex = f.extra, col = co && co.length;\n    var exl = exfl(ex);\n    wbytes(d, b, ce != null ? 0x2014B50 : 0x4034B50), b += 4;\n    if (ce != null)\n        d[b++] = 20, d[b++] = f.os;\n    d[b] = 20, b += 2; // spec compliance? what's that?\n    d[b++] = (f.flag << 1) | (c == null && 8), d[b++] = u && 8;\n    d[b++] = f.compression & 255, d[b++] = f.compression >> 8;\n    var dt = new Date(f.mtime == null ? Date.now() : f.mtime), y = dt.getFullYear() - 1980;\n    if (y < 0 || y > 119)\n        throw 'date not in range 1980-2099';\n    wbytes(d, b, (y << 25) | ((dt.getMonth() + 1) << 21) | (dt.getDate() << 16) | (dt.getHours() << 11) | (dt.getMinutes() << 5) | (dt.getSeconds() >>> 1)), b += 4;\n    if (c != null) {\n        wbytes(d, b, f.crc);\n        wbytes(d, b + 4, c);\n        wbytes(d, b + 8, f.size);\n    }\n    wbytes(d, b + 12, fl);\n    wbytes(d, b + 14, exl), b += 16;\n    if (ce != null) {\n        wbytes(d, b, col);\n        wbytes(d, b + 6, f.attrs);\n        wbytes(d, b + 10, ce), b += 14;\n    }\n    d.set(fn, b);\n    b += fl;\n    if (exl) {\n        for (var k in ex) {\n            var exf = ex[k], l = exf.length;\n            wbytes(d, b, +k);\n            wbytes(d, b + 2, l);\n            d.set(exf, b + 4), b += 4 + l;\n        }\n    }\n    if (col)\n        d.set(co, b), b += col;\n    return b;\n};\n// write zip footer (end of central directory)\nvar wzf = function (o, b, c, d, e) {\n    wbytes(o, b, 0x6054B50); // skip disk\n    wbytes(o, b + 8, c);\n    wbytes(o, b + 10, c);\n    wbytes(o, b + 12, d);\n    wbytes(o, b + 16, e);\n};\n/**\n * A pass-through stream to keep data uncompressed in a ZIP archive.\n */\nvar ZipPassThrough = /*#__PURE__*/ (function () {\n    /**\n     * Creates a pass-through stream that can be added to ZIP archives\n     * @param filename The filename to associate with this data stream\n     */\n    function ZipPassThrough(filename) {\n        this.filename = filename;\n        this.c = crc();\n        this.size = 0;\n        this.compression = 0;\n    }\n    /**\n     * Processes a chunk and pushes to the output stream. You can override this\n     * method in a subclass for custom behavior, but by default this passes\n     * the data through. You must call this.ondata(err, chunk, final) at some\n     * point in this method.\n     * @param chunk The chunk to process\n     * @param final Whether this is the last chunk\n     */\n    ZipPassThrough.prototype.process = function (chunk, final) {\n        this.ondata(null, chunk, final);\n    };\n    /**\n     * Pushes a chunk to be added. If you are subclassing this with a custom\n     * compression algorithm, note that you must push data from the source\n     * file only, pre-compression.\n     * @param chunk The chunk to push\n     * @param final Whether this is the last chunk\n     */\n    ZipPassThrough.prototype.push = function (chunk, final) {\n        if (!this.ondata)\n            throw 'no callback - add to ZIP archive before pushing';\n        this.c.p(chunk);\n        this.size += chunk.length;\n        if (final)\n            this.crc = this.c.d();\n        this.process(chunk, final || false);\n    };\n    return ZipPassThrough;\n}());\n\n// I don't extend because TypeScript extension adds 1kB of runtime bloat\n/**\n * Streaming DEFLATE compression for ZIP archives. Prefer using AsyncZipDeflate\n * for better performance\n */\nvar ZipDeflate = /*#__PURE__*/ (function () {\n    /**\n     * Creates a DEFLATE stream that can be added to ZIP archives\n     * @param filename The filename to associate with this data stream\n     * @param opts The compression options\n     */\n    function ZipDeflate(filename, opts) {\n        var _this_1 = this;\n        if (!opts)\n            opts = {};\n        ZipPassThrough.call(this, filename);\n        this.d = new Deflate(opts, function (dat, final) {\n            _this_1.ondata(null, dat, final);\n        });\n        this.compression = 8;\n        this.flag = dbf(opts.level);\n    }\n    ZipDeflate.prototype.process = function (chunk, final) {\n        try {\n            this.d.push(chunk, final);\n        }\n        catch (e) {\n            this.ondata(e, null, final);\n        }\n    };\n    /**\n     * Pushes a chunk to be deflated\n     * @param chunk The chunk to push\n     * @param final Whether this is the last chunk\n     */\n    ZipDeflate.prototype.push = function (chunk, final) {\n        ZipPassThrough.prototype.push.call(this, chunk, final);\n    };\n    return ZipDeflate;\n}());\n\n/**\n * Asynchronous streaming DEFLATE compression for ZIP archives\n */\nvar AsyncZipDeflate = /*#__PURE__*/ (function () {\n    /**\n     * Creates a DEFLATE stream that can be added to ZIP archives\n     * @param filename The filename to associate with this data stream\n     * @param opts The compression options\n     */\n    function AsyncZipDeflate(filename, opts) {\n        var _this_1 = this;\n        if (!opts)\n            opts = {};\n        ZipPassThrough.call(this, filename);\n        this.d = new AsyncDeflate(opts, function (err, dat, final) {\n            _this_1.ondata(err, dat, final);\n        });\n        this.compression = 8;\n        this.flag = dbf(opts.level);\n        this.terminate = this.d.terminate;\n    }\n    AsyncZipDeflate.prototype.process = function (chunk, final) {\n        this.d.push(chunk, final);\n    };\n    /**\n     * Pushes a chunk to be deflated\n     * @param chunk The chunk to push\n     * @param final Whether this is the last chunk\n     */\n    AsyncZipDeflate.prototype.push = function (chunk, final) {\n        ZipPassThrough.prototype.push.call(this, chunk, final);\n    };\n    return AsyncZipDeflate;\n}());\n\n// TODO: Better tree shaking\n/**\n * A zippable archive to which files can incrementally be added\n */\nvar Zip = /*#__PURE__*/ (function () {\n    /**\n     * Creates an empty ZIP archive to which files can be added\n     * @param cb The callback to call whenever data for the generated ZIP archive\n     *           is available\n     */\n    function Zip(cb) {\n        this.ondata = cb;\n        this.u = [];\n        this.d = 1;\n    }\n    /**\n     * Adds a file to the ZIP archive\n     * @param file The file stream to add\n     */\n    Zip.prototype.add = function (file) {\n        var _this_1 = this;\n        if (this.d & 2)\n            throw 'stream finished';\n        var f = strToU8(file.filename), fl = f.length;\n        var com = file.comment, o = com && strToU8(com);\n        var u = fl != file.filename.length || (o && (com.length != o.length));\n        var hl = fl + exfl(file.extra) + 30;\n        if (fl > 65535)\n            throw 'filename too long';\n        var header = new u8(hl);\n        wzh(header, 0, file, f, u);\n        var chks = [header];\n        var pAll = function () {\n            for (var _i = 0, chks_1 = chks; _i < chks_1.length; _i++) {\n                var chk = chks_1[_i];\n                _this_1.ondata(null, chk, false);\n            }\n            chks = [];\n        };\n        var tr = this.d;\n        this.d = 0;\n        var ind = this.u.length;\n        var uf = mrg(file, {\n            f: f,\n            u: u,\n            o: o,\n            t: function () {\n                if (file.terminate)\n                    file.terminate();\n            },\n            r: function () {\n                pAll();\n                if (tr) {\n                    var nxt = _this_1.u[ind + 1];\n                    if (nxt)\n                        nxt.r();\n                    else\n                        _this_1.d = 1;\n                }\n                tr = 1;\n            }\n        });\n        var cl = 0;\n        file.ondata = function (err, dat, final) {\n            if (err) {\n                _this_1.ondata(err, dat, final);\n                _this_1.terminate();\n            }\n            else {\n                cl += dat.length;\n                chks.push(dat);\n                if (final) {\n                    var dd = new u8(16);\n                    wbytes(dd, 0, 0x8074B50);\n                    wbytes(dd, 4, file.crc);\n                    wbytes(dd, 8, cl);\n                    wbytes(dd, 12, file.size);\n                    chks.push(dd);\n                    uf.c = cl, uf.b = hl + cl + 16, uf.crc = file.crc, uf.size = file.size;\n                    if (tr)\n                        uf.r();\n                    tr = 1;\n                }\n                else if (tr)\n                    pAll();\n            }\n        };\n        this.u.push(uf);\n    };\n    /**\n     * Ends the process of adding files and prepares to emit the final chunks.\n     * This *must* be called after adding all desired files for the resulting\n     * ZIP file to work properly.\n     */\n    Zip.prototype.end = function () {\n        var _this_1 = this;\n        if (this.d & 2) {\n            if (this.d & 1)\n                throw 'stream finishing';\n            throw 'stream finished';\n        }\n        if (this.d)\n            this.e();\n        else\n            this.u.push({\n                r: function () {\n                    if (!(_this_1.d & 1))\n                        return;\n                    _this_1.u.splice(-1, 1);\n                    _this_1.e();\n                },\n                t: function () { }\n            });\n        this.d = 3;\n    };\n    Zip.prototype.e = function () {\n        var bt = 0, l = 0, tl = 0;\n        for (var _i = 0, _a = this.u; _i < _a.length; _i++) {\n            var f = _a[_i];\n            tl += 46 + f.f.length + exfl(f.extra) + (f.o ? f.o.length : 0);\n        }\n        var out = new u8(tl + 22);\n        for (var _b = 0, _c = this.u; _b < _c.length; _b++) {\n            var f = _c[_b];\n            wzh(out, bt, f, f.f, f.u, f.c, l, f.o);\n            bt += 46 + f.f.length + exfl(f.extra) + (f.o ? f.o.length : 0), l += f.b;\n        }\n        wzf(out, bt, this.u.length, tl, l);\n        this.ondata(null, out, true);\n        this.d = 2;\n    };\n    /**\n     * A method to terminate any internal workers used by the stream. Subsequent\n     * calls to add() will fail.\n     */\n    Zip.prototype.terminate = function () {\n        for (var _i = 0, _a = this.u; _i < _a.length; _i++) {\n            var f = _a[_i];\n            f.t();\n        }\n        this.d = 2;\n    };\n    return Zip;\n}());\n\nfunction zip(data, opts, cb) {\n    if (!cb)\n        cb = opts, opts = {};\n    if (typeof cb != 'function')\n        throw 'no callback';\n    var r = {};\n    fltn(data, '', r, opts);\n    var k = Object.keys(r);\n    var lft = k.length, o = 0, tot = 0;\n    var slft = lft, files = new Array(lft);\n    var term = [];\n    var tAll = function () {\n        for (var i = 0; i < term.length; ++i)\n            term[i]();\n    };\n    var cbf = function () {\n        var out = new u8(tot + 22), oe = o, cdl = tot - o;\n        tot = 0;\n        for (var i = 0; i < slft; ++i) {\n            var f = files[i];\n            try {\n                var l = f.c.length;\n                wzh(out, tot, f, f.f, f.u, l);\n                var badd = 30 + f.f.length + exfl(f.extra);\n                var loc = tot + badd;\n                out.set(f.c, loc);\n                wzh(out, o, f, f.f, f.u, l, tot, f.m), o += 16 + badd + (f.m ? f.m.length : 0), tot = loc + l;\n            }\n            catch (e) {\n                return cb(e, null);\n            }\n        }\n        wzf(out, o, files.length, cdl, oe);\n        cb(null, out);\n    };\n    if (!lft)\n        cbf();\n    var _loop_1 = function (i) {\n        var fn = k[i];\n        var _a = r[fn], file = _a[0], p = _a[1];\n        var c = crc(), size = file.length;\n        c.p(file);\n        var f = strToU8(fn), s = f.length;\n        var com = p.comment, m = com && strToU8(com), ms = m && m.length;\n        var exl = exfl(p.extra);\n        var compression = p.level == 0 ? 0 : 8;\n        var cbl = function (e, d) {\n            if (e) {\n                tAll();\n                cb(e, null);\n            }\n            else {\n                var l = d.length;\n                files[i] = mrg(p, {\n                    size: size,\n                    crc: c.d(),\n                    c: d,\n                    f: f,\n                    m: m,\n                    u: s != fn.length || (m && (com.length != ms)),\n                    compression: compression\n                });\n                o += 30 + s + exl + l;\n                tot += 76 + 2 * (s + exl) + (ms || 0) + l;\n                if (!--lft)\n                    cbf();\n            }\n        };\n        if (s > 65535)\n            cbl('filename too long', null);\n        if (!compression)\n            cbl(null, file);\n        else if (size < 160000) {\n            try {\n                cbl(null, deflateSync(file, p));\n            }\n            catch (e) {\n                cbl(e, null);\n            }\n        }\n        else\n            term.push(deflate(file, p, cbl));\n    };\n    // Cannot use lft because it can decrease\n    for (var i = 0; i < slft; ++i) {\n        _loop_1(i);\n    }\n    return tAll;\n}\n/**\n * Synchronously creates a ZIP file. Prefer using `zip` for better performance\n * with more than one file.\n * @param data The directory structure for the ZIP archive\n * @param opts The main options, merged with per-file options\n * @returns The generated ZIP archive\n */\nfunction zipSync(data, opts) {\n    if (!opts)\n        opts = {};\n    var r = {};\n    var files = [];\n    fltn(data, '', r, opts);\n    var o = 0;\n    var tot = 0;\n    for (var fn in r) {\n        var _a = r[fn], file = _a[0], p = _a[1];\n        var compression = p.level == 0 ? 0 : 8;\n        var f = strToU8(fn), s = f.length;\n        var com = p.comment, m = com && strToU8(com), ms = m && m.length;\n        var exl = exfl(p.extra);\n        if (s > 65535)\n            throw 'filename too long';\n        var d = compression ? deflateSync(file, p) : file, l = d.length;\n        var c = crc();\n        c.p(file);\n        files.push(mrg(p, {\n            size: file.length,\n            crc: c.d(),\n            c: d,\n            f: f,\n            m: m,\n            u: s != fn.length || (m && (com.length != ms)),\n            o: o,\n            compression: compression\n        }));\n        o += 30 + s + exl + l;\n        tot += 76 + 2 * (s + exl) + (ms || 0) + l;\n    }\n    var out = new u8(tot + 22), oe = o, cdl = tot - o;\n    for (var i = 0; i < files.length; ++i) {\n        var f = files[i];\n        wzh(out, f.o, f, f.f, f.u, f.c.length);\n        var badd = 30 + f.f.length + exfl(f.extra);\n        out.set(f.c, f.o + badd);\n        wzh(out, o, f, f.f, f.u, f.c.length, f.o, f.m), o += 16 + badd + (f.m ? f.m.length : 0);\n    }\n    wzf(out, o, files.length, cdl, oe);\n    return out;\n}\n/**\n * Streaming pass-through decompression for ZIP archives\n */\nvar UnzipPassThrough = /*#__PURE__*/ (function () {\n    function UnzipPassThrough() {\n    }\n    UnzipPassThrough.prototype.push = function (data, final) {\n        this.ondata(null, data, final);\n    };\n    UnzipPassThrough.compression = 0;\n    return UnzipPassThrough;\n}());\n\n/**\n * Streaming DEFLATE decompression for ZIP archives. Prefer AsyncZipInflate for\n * better performance.\n */\nvar UnzipInflate = /*#__PURE__*/ (function () {\n    /**\n     * Creates a DEFLATE decompression that can be used in ZIP archives\n     */\n    function UnzipInflate() {\n        var _this_1 = this;\n        this.i = new Inflate(function (dat, final) {\n            _this_1.ondata(null, dat, final);\n        });\n    }\n    UnzipInflate.prototype.push = function (data, final) {\n        try {\n            this.i.push(data, final);\n        }\n        catch (e) {\n            this.ondata(e, data, final);\n        }\n    };\n    UnzipInflate.compression = 8;\n    return UnzipInflate;\n}());\n\n/**\n * Asynchronous streaming DEFLATE decompression for ZIP archives\n */\nvar AsyncUnzipInflate = /*#__PURE__*/ (function () {\n    /**\n     * Creates a DEFLATE decompression that can be used in ZIP archives\n     */\n    function AsyncUnzipInflate(_, sz) {\n        var _this_1 = this;\n        if (sz < 320000) {\n            this.i = new Inflate(function (dat, final) {\n                _this_1.ondata(null, dat, final);\n            });\n        }\n        else {\n            this.i = new AsyncInflate(function (err, dat, final) {\n                _this_1.ondata(err, dat, final);\n            });\n            this.terminate = this.i.terminate;\n        }\n    }\n    AsyncUnzipInflate.prototype.push = function (data, final) {\n        if (this.i.terminate)\n            data = slc(data, 0);\n        this.i.push(data, final);\n    };\n    AsyncUnzipInflate.compression = 8;\n    return AsyncUnzipInflate;\n}());\n\n/**\n * A ZIP archive decompression stream that emits files as they are discovered\n */\nvar Unzip = /*#__PURE__*/ (function () {\n    /**\n     * Creates a ZIP decompression stream\n     * @param cb The callback to call whenever a file in the ZIP archive is found\n     */\n    function Unzip(cb) {\n        this.onfile = cb;\n        this.k = [];\n        this.o = {\n            0: UnzipPassThrough\n        };\n        this.p = et;\n    }\n    /**\n     * Pushes a chunk to be unzipped\n     * @param chunk The chunk to push\n     * @param final Whether this is the last chunk\n     */\n    Unzip.prototype.push = function (chunk, final) {\n        var _this_1 = this;\n        if (!this.onfile)\n            throw 'no callback';\n        if (!this.p)\n            throw 'stream finished';\n        if (this.c > 0) {\n            var len = Math.min(this.c, chunk.length);\n            var toAdd = chunk.subarray(0, len);\n            this.c -= len;\n            if (this.d)\n                this.d.push(toAdd, !this.c);\n            else\n                this.k[0].push(toAdd);\n            chunk = chunk.subarray(len);\n            if (chunk.length)\n                return this.push(chunk, final);\n        }\n        else {\n            var f = 0, i = 0, is = void 0, buf = void 0;\n            if (!this.p.length)\n                buf = chunk;\n            else if (!chunk.length)\n                buf = this.p;\n            else {\n                buf = new u8(this.p.length + chunk.length);\n                buf.set(this.p), buf.set(chunk, this.p.length);\n            }\n            var l = buf.length, oc = this.c, add = oc && this.d;\n            var _loop_2 = function () {\n                var _a;\n                var sig = b4(buf, i);\n                if (sig == 0x4034B50) {\n                    f = 1, is = i;\n                    this_1.d = null;\n                    this_1.c = 0;\n                    var bf = b2(buf, i + 6), cmp_1 = b2(buf, i + 8), u = bf & 2048, dd = bf & 8, fnl = b2(buf, i + 26), es = b2(buf, i + 28);\n                    if (l > i + 30 + fnl + es) {\n                        var chks_2 = [];\n                        this_1.k.unshift(chks_2);\n                        f = 2;\n                        var sc_1 = b4(buf, i + 18), su_1 = b4(buf, i + 22);\n                        var fn_1 = strFromU8(buf.subarray(i + 30, i += 30 + fnl), !u);\n                        if (sc_1 == 4294967295) {\n                            _a = dd ? [-2] : z64e(buf, i), sc_1 = _a[0], su_1 = _a[1];\n                        }\n                        else if (dd)\n                            sc_1 = -1;\n                        i += es;\n                        this_1.c = sc_1;\n                        var d_1;\n                        var file_1 = {\n                            name: fn_1,\n                            compression: cmp_1,\n                            start: function () {\n                                if (!file_1.ondata)\n                                    throw 'no callback';\n                                if (!sc_1)\n                                    file_1.ondata(null, et, true);\n                                else {\n                                    var ctr = _this_1.o[cmp_1];\n                                    if (!ctr)\n                                        throw 'unknown compression type ' + cmp_1;\n                                    d_1 = sc_1 < 0 ? new ctr(fn_1) : new ctr(fn_1, sc_1, su_1);\n                                    d_1.ondata = function (err, dat, final) { file_1.ondata(err, dat, final); };\n                                    for (var _i = 0, chks_3 = chks_2; _i < chks_3.length; _i++) {\n                                        var dat = chks_3[_i];\n                                        d_1.push(dat, false);\n                                    }\n                                    if (_this_1.k[0] == chks_2 && _this_1.c)\n                                        _this_1.d = d_1;\n                                    else\n                                        d_1.push(et, true);\n                                }\n                            },\n                            terminate: function () {\n                                if (d_1 && d_1.terminate)\n                                    d_1.terminate();\n                            }\n                        };\n                        if (sc_1 >= 0)\n                            file_1.size = sc_1, file_1.originalSize = su_1;\n                        this_1.onfile(file_1);\n                    }\n                    return \"break\";\n                }\n                else if (oc) {\n                    if (sig == 0x8074B50) {\n                        is = i += 12 + (oc == -2 && 8), f = 3, this_1.c = 0;\n                        return \"break\";\n                    }\n                    else if (sig == 0x2014B50) {\n                        is = i -= 4, f = 3, this_1.c = 0;\n                        return \"break\";\n                    }\n                }\n            };\n            var this_1 = this;\n            for (; i < l - 4; ++i) {\n                var state_1 = _loop_2();\n                if (state_1 === \"break\")\n                    break;\n            }\n            this.p = et;\n            if (oc < 0) {\n                var dat = f ? buf.subarray(0, is - 12 - (oc == -2 && 8) - (b4(buf, is - 16) == 0x8074B50 && 4)) : buf.subarray(0, i);\n                if (add)\n                    add.push(dat, !!f);\n                else\n                    this.k[+(f == 2)].push(dat);\n            }\n            if (f & 2)\n                return this.push(buf.subarray(i), final);\n            this.p = buf.subarray(i);\n        }\n        if (final) {\n            if (this.c)\n                throw 'invalid zip file';\n            this.p = null;\n        }\n    };\n    /**\n     * Registers a decoder with the stream, allowing for files compressed with\n     * the compression type provided to be expanded correctly\n     * @param decoder The decoder constructor\n     */\n    Unzip.prototype.register = function (decoder) {\n        this.o[decoder.compression] = decoder;\n    };\n    return Unzip;\n}());\n\n/**\n * Asynchronously decompresses a ZIP archive\n * @param data The raw compressed ZIP file\n * @param cb The callback to call with the decompressed files\n * @returns A function that can be used to immediately terminate the unzipping\n */\nfunction unzip(data, cb) {\n    if (typeof cb != 'function')\n        throw 'no callback';\n    var term = [];\n    var tAll = function () {\n        for (var i = 0; i < term.length; ++i)\n            term[i]();\n    };\n    var files = {};\n    var e = data.length - 22;\n    for (; b4(data, e) != 0x6054B50; --e) {\n        if (!e || data.length - e > 65558) {\n            cb('invalid zip file', null);\n            return;\n        }\n    }\n    ;\n    var lft = b2(data, e + 8);\n    if (!lft)\n        cb(null, {});\n    var c = lft;\n    var o = b4(data, e + 16);\n    var z = o == 4294967295;\n    if (z) {\n        e = b4(data, e - 12);\n        if (b4(data, e) != 0x6064B50) {\n            cb('invalid zip file', null);\n            return;\n        }\n        c = lft = b4(data, e + 32);\n        o = b4(data, e + 48);\n    }\n    var _loop_3 = function (i) {\n        var _a = zh(data, o, z), c_1 = _a[0], sc = _a[1], su = _a[2], fn = _a[3], no = _a[4], off = _a[5], b = slzh(data, off);\n        o = no;\n        var cbl = function (e, d) {\n            if (e) {\n                tAll();\n                cb(e, null);\n            }\n            else {\n                files[fn] = d;\n                if (!--lft)\n                    cb(null, files);\n            }\n        };\n        if (!c_1)\n            cbl(null, slc(data, b, b + sc));\n        else if (c_1 == 8) {\n            var infl = data.subarray(b, b + sc);\n            if (sc < 320000) {\n                try {\n                    cbl(null, inflateSync(infl, new u8(su)));\n                }\n                catch (e) {\n                    cbl(e, null);\n                }\n            }\n            else\n                term.push(inflate(infl, { size: su }, cbl));\n        }\n        else\n            cbl('unknown compression type ' + c_1, null);\n    };\n    for (var i = 0; i < c; ++i) {\n        _loop_3(i);\n    }\n    return tAll;\n}\n/**\n * Synchronously decompresses a ZIP archive. Prefer using `unzip` for better\n * performance with more than one file.\n * @param data The raw compressed ZIP file\n * @returns The decompressed files\n */\nfunction unzipSync(data) {\n    var files = {};\n    var e = data.length - 22;\n    for (; b4(data, e) != 0x6054B50; --e) {\n        if (!e || data.length - e > 65558)\n            throw 'invalid zip file';\n    }\n    ;\n    var c = b2(data, e + 8);\n    if (!c)\n        return {};\n    var o = b4(data, e + 16);\n    var z = o == 4294967295;\n    if (z) {\n        e = b4(data, e - 12);\n        if (b4(data, e) != 0x6064B50)\n            throw 'invalid zip file';\n        c = b4(data, e + 32);\n        o = b4(data, e + 48);\n    }\n    for (var i = 0; i < c; ++i) {\n        var _a = zh(data, o, z), c_2 = _a[0], sc = _a[1], su = _a[2], fn = _a[3], no = _a[4], off = _a[5], b = slzh(data, off);\n        o = no;\n        if (!c_2)\n            files[fn] = slc(data, b, b + sc);\n        else if (c_2 == 8)\n            files[fn] = inflateSync(data.subarray(b, b + sc), new u8(su));\n        else\n            throw 'unknown compression type ' + c_2;\n    }\n    return files;\n}\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/three/examples/jsm/libs/fflate.module.js?");

/***/ }),

/***/ "./node_modules/three/examples/jsm/loaders/FBXLoader.js":
/*!**************************************************************!*\
  !*** ./node_modules/three/examples/jsm/loaders/FBXLoader.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FBXLoader\": function() { return /* binding */ FBXLoader; }\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _libs_fflate_module_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../libs/fflate.module.js */ \"./node_modules/three/examples/jsm/libs/fflate.module.js\");\n/* harmony import */ var _curves_NURBSCurve_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../curves/NURBSCurve.js */ \"./node_modules/three/examples/jsm/curves/NURBSCurve.js\");\n\n\n\n\n/**\n * Loader loads FBX file and generates Group representing FBX scene.\n * Requires FBX file to be >= 7.0 and in ASCII or >= 6400 in Binary format\n * Versions lower than this may load but will probably have errors\n *\n * Needs Support:\n *  Morph normals / blend shape normals\n *\n * FBX format references:\n * \thttps://help.autodesk.com/view/FBX/2017/ENU/?guid=__cpp_ref_index_html (C++ SDK reference)\n *\n * Binary format specification:\n *\thttps://code.blender.org/2013/08/fbx-binary-file-format-specification/\n */\n\n\nlet fbxTree;\nlet connections;\nlet sceneGraph;\n\nclass FBXLoader extends three__WEBPACK_IMPORTED_MODULE_0__.Loader {\n\n\tconstructor( manager ) {\n\n\t\tsuper( manager );\n\n\t}\n\n\tload( url, onLoad, onProgress, onError ) {\n\n\t\tconst scope = this;\n\n\t\tconst path = ( scope.path === '' ) ? three__WEBPACK_IMPORTED_MODULE_0__.LoaderUtils.extractUrlBase( url ) : scope.path;\n\n\t\tconst loader = new three__WEBPACK_IMPORTED_MODULE_0__.FileLoader( this.manager );\n\t\tloader.setPath( scope.path );\n\t\tloader.setResponseType( 'arraybuffer' );\n\t\tloader.setRequestHeader( scope.requestHeader );\n\t\tloader.setWithCredentials( scope.withCredentials );\n\n\t\tloader.load( url, function ( buffer ) {\n\n\t\t\ttry {\n\n\t\t\t\tonLoad( scope.parse( buffer, path ) );\n\n\t\t\t} catch ( e ) {\n\n\t\t\t\tif ( onError ) {\n\n\t\t\t\t\tonError( e );\n\n\t\t\t\t} else {\n\n\t\t\t\t\tconsole.error( e );\n\n\t\t\t\t}\n\n\t\t\t\tscope.manager.itemError( url );\n\n\t\t\t}\n\n\t\t}, onProgress, onError );\n\n\t}\n\n\tparse( FBXBuffer, path ) {\n\n\t\tif ( isFbxFormatBinary( FBXBuffer ) ) {\n\n\t\t\tfbxTree = new BinaryParser().parse( FBXBuffer );\n\n\t\t} else {\n\n\t\t\tconst FBXText = convertArrayBufferToString( FBXBuffer );\n\n\t\t\tif ( ! isFbxFormatASCII( FBXText ) ) {\n\n\t\t\t\tthrow new Error( 'THREE.FBXLoader: Unknown format.' );\n\n\t\t\t}\n\n\t\t\tif ( getFbxVersion( FBXText ) < 7000 ) {\n\n\t\t\t\tthrow new Error( 'THREE.FBXLoader: FBX version not supported, FileVersion: ' + getFbxVersion( FBXText ) );\n\n\t\t\t}\n\n\t\t\tfbxTree = new TextParser().parse( FBXText );\n\n\t\t}\n\n\t\t// console.log( fbxTree );\n\n\t\tconst textureLoader = new three__WEBPACK_IMPORTED_MODULE_0__.TextureLoader( this.manager ).setPath( this.resourcePath || path ).setCrossOrigin( this.crossOrigin );\n\n\t\treturn new FBXTreeParser( textureLoader, this.manager ).parse( fbxTree );\n\n\t}\n\n}\n\n// Parse the FBXTree object returned by the BinaryParser or TextParser and return a Group\nclass FBXTreeParser {\n\n\tconstructor( textureLoader, manager ) {\n\n\t\tthis.textureLoader = textureLoader;\n\t\tthis.manager = manager;\n\n\t}\n\n\tparse() {\n\n\t\tconnections = this.parseConnections();\n\n\t\tconst images = this.parseImages();\n\t\tconst textures = this.parseTextures( images );\n\t\tconst materials = this.parseMaterials( textures );\n\t\tconst deformers = this.parseDeformers();\n\t\tconst geometryMap = new GeometryParser().parse( deformers );\n\n\t\tthis.parseScene( deformers, geometryMap, materials );\n\n\t\treturn sceneGraph;\n\n\t}\n\n\t// Parses FBXTree.Connections which holds parent-child connections between objects (e.g. material -> texture, model->geometry )\n\t// and details the connection type\n\tparseConnections() {\n\n\t\tconst connectionMap = new Map();\n\n\t\tif ( 'Connections' in fbxTree ) {\n\n\t\t\tconst rawConnections = fbxTree.Connections.connections;\n\n\t\t\trawConnections.forEach( function ( rawConnection ) {\n\n\t\t\t\tconst fromID = rawConnection[ 0 ];\n\t\t\t\tconst toID = rawConnection[ 1 ];\n\t\t\t\tconst relationship = rawConnection[ 2 ];\n\n\t\t\t\tif ( ! connectionMap.has( fromID ) ) {\n\n\t\t\t\t\tconnectionMap.set( fromID, {\n\t\t\t\t\t\tparents: [],\n\t\t\t\t\t\tchildren: []\n\t\t\t\t\t} );\n\n\t\t\t\t}\n\n\t\t\t\tconst parentRelationship = { ID: toID, relationship: relationship };\n\t\t\t\tconnectionMap.get( fromID ).parents.push( parentRelationship );\n\n\t\t\t\tif ( ! connectionMap.has( toID ) ) {\n\n\t\t\t\t\tconnectionMap.set( toID, {\n\t\t\t\t\t\tparents: [],\n\t\t\t\t\t\tchildren: []\n\t\t\t\t\t} );\n\n\t\t\t\t}\n\n\t\t\t\tconst childRelationship = { ID: fromID, relationship: relationship };\n\t\t\t\tconnectionMap.get( toID ).children.push( childRelationship );\n\n\t\t\t} );\n\n\t\t}\n\n\t\treturn connectionMap;\n\n\t}\n\n\t// Parse FBXTree.Objects.Video for embedded image data\n\t// These images are connected to textures in FBXTree.Objects.Textures\n\t// via FBXTree.Connections.\n\tparseImages() {\n\n\t\tconst images = {};\n\t\tconst blobs = {};\n\n\t\tif ( 'Video' in fbxTree.Objects ) {\n\n\t\t\tconst videoNodes = fbxTree.Objects.Video;\n\n\t\t\tfor ( const nodeID in videoNodes ) {\n\n\t\t\t\tconst videoNode = videoNodes[ nodeID ];\n\n\t\t\t\tconst id = parseInt( nodeID );\n\n\t\t\t\timages[ id ] = videoNode.RelativeFilename || videoNode.Filename;\n\n\t\t\t\t// raw image data is in videoNode.Content\n\t\t\t\tif ( 'Content' in videoNode ) {\n\n\t\t\t\t\tconst arrayBufferContent = ( videoNode.Content instanceof ArrayBuffer ) && ( videoNode.Content.byteLength > 0 );\n\t\t\t\t\tconst base64Content = ( typeof videoNode.Content === 'string' ) && ( videoNode.Content !== '' );\n\n\t\t\t\t\tif ( arrayBufferContent || base64Content ) {\n\n\t\t\t\t\t\tconst image = this.parseImage( videoNodes[ nodeID ] );\n\n\t\t\t\t\t\tblobs[ videoNode.RelativeFilename || videoNode.Filename ] = image;\n\n\t\t\t\t\t}\n\n\t\t\t\t}\n\n\t\t\t}\n\n\t\t}\n\n\t\tfor ( const id in images ) {\n\n\t\t\tconst filename = images[ id ];\n\n\t\t\tif ( blobs[ filename ] !== undefined ) images[ id ] = blobs[ filename ];\n\t\t\telse images[ id ] = images[ id ].split( '\\\\' ).pop();\n\n\t\t}\n\n\t\treturn images;\n\n\t}\n\n\t// Parse embedded image data in FBXTree.Video.Content\n\tparseImage( videoNode ) {\n\n\t\tconst content = videoNode.Content;\n\t\tconst fileName = videoNode.RelativeFilename || videoNode.Filename;\n\t\tconst extension = fileName.slice( fileName.lastIndexOf( '.' ) + 1 ).toLowerCase();\n\n\t\tlet type;\n\n\t\tswitch ( extension ) {\n\n\t\t\tcase 'bmp':\n\n\t\t\t\ttype = 'image/bmp';\n\t\t\t\tbreak;\n\n\t\t\tcase 'jpg':\n\t\t\tcase 'jpeg':\n\n\t\t\t\ttype = 'image/jpeg';\n\t\t\t\tbreak;\n\n\t\t\tcase 'png':\n\n\t\t\t\ttype = 'image/png';\n\t\t\t\tbreak;\n\n\t\t\tcase 'tif':\n\n\t\t\t\ttype = 'image/tiff';\n\t\t\t\tbreak;\n\n\t\t\tcase 'tga':\n\n\t\t\t\tif ( this.manager.getHandler( '.tga' ) === null ) {\n\n\t\t\t\t\tconsole.warn( 'FBXLoader: TGA loader not found, skipping ', fileName );\n\n\t\t\t\t}\n\n\t\t\t\ttype = 'image/tga';\n\t\t\t\tbreak;\n\n\t\t\tdefault:\n\n\t\t\t\tconsole.warn( 'FBXLoader: Image type \"' + extension + '\" is not supported.' );\n\t\t\t\treturn;\n\n\t\t}\n\n\t\tif ( typeof content === 'string' ) { // ASCII format\n\n\t\t\treturn 'data:' + type + ';base64,' + content;\n\n\t\t} else { // Binary Format\n\n\t\t\tconst array = new Uint8Array( content );\n\t\t\treturn window.URL.createObjectURL( new Blob( [ array ], { type: type } ) );\n\n\t\t}\n\n\t}\n\n\t// Parse nodes in FBXTree.Objects.Texture\n\t// These contain details such as UV scaling, cropping, rotation etc and are connected\n\t// to images in FBXTree.Objects.Video\n\tparseTextures( images ) {\n\n\t\tconst textureMap = new Map();\n\n\t\tif ( 'Texture' in fbxTree.Objects ) {\n\n\t\t\tconst textureNodes = fbxTree.Objects.Texture;\n\t\t\tfor ( const nodeID in textureNodes ) {\n\n\t\t\t\tconst texture = this.parseTexture( textureNodes[ nodeID ], images );\n\t\t\t\ttextureMap.set( parseInt( nodeID ), texture );\n\n\t\t\t}\n\n\t\t}\n\n\t\treturn textureMap;\n\n\t}\n\n\t// Parse individual node in FBXTree.Objects.Texture\n\tparseTexture( textureNode, images ) {\n\n\t\tconst texture = this.loadTexture( textureNode, images );\n\n\t\ttexture.ID = textureNode.id;\n\n\t\ttexture.name = textureNode.attrName;\n\n\t\tconst wrapModeU = textureNode.WrapModeU;\n\t\tconst wrapModeV = textureNode.WrapModeV;\n\n\t\tconst valueU = wrapModeU !== undefined ? wrapModeU.value : 0;\n\t\tconst valueV = wrapModeV !== undefined ? wrapModeV.value : 0;\n\n\t\t// http://download.autodesk.com/us/fbx/SDKdocs/FBX_SDK_Help/files/fbxsdkref/class_k_fbx_texture.html#889640e63e2e681259ea81061b85143a\n\t\t// 0: repeat(default), 1: clamp\n\n\t\ttexture.wrapS = valueU === 0 ? three__WEBPACK_IMPORTED_MODULE_0__.RepeatWrapping : three__WEBPACK_IMPORTED_MODULE_0__.ClampToEdgeWrapping;\n\t\ttexture.wrapT = valueV === 0 ? three__WEBPACK_IMPORTED_MODULE_0__.RepeatWrapping : three__WEBPACK_IMPORTED_MODULE_0__.ClampToEdgeWrapping;\n\n\t\tif ( 'Scaling' in textureNode ) {\n\n\t\t\tconst values = textureNode.Scaling.value;\n\n\t\t\ttexture.repeat.x = values[ 0 ];\n\t\t\ttexture.repeat.y = values[ 1 ];\n\n\t\t}\n\n\t\tif ( 'Translation' in textureNode ) {\n\n\t\t\tconst values = textureNode.Translation.value;\n\n\t\t\ttexture.offset.x = values[ 0 ];\n\t\t\ttexture.offset.y = values[ 1 ];\n\n\t\t}\n\n\t\treturn texture;\n\n\t}\n\n\t// load a texture specified as a blob or data URI, or via an external URL using TextureLoader\n\tloadTexture( textureNode, images ) {\n\n\t\tlet fileName;\n\n\t\tconst currentPath = this.textureLoader.path;\n\n\t\tconst children = connections.get( textureNode.id ).children;\n\n\t\tif ( children !== undefined && children.length > 0 && images[ children[ 0 ].ID ] !== undefined ) {\n\n\t\t\tfileName = images[ children[ 0 ].ID ];\n\n\t\t\tif ( fileName.indexOf( 'blob:' ) === 0 || fileName.indexOf( 'data:' ) === 0 ) {\n\n\t\t\t\tthis.textureLoader.setPath( undefined );\n\n\t\t\t}\n\n\t\t}\n\n\t\tlet texture;\n\n\t\tconst extension = textureNode.FileName.slice( - 3 ).toLowerCase();\n\n\t\tif ( extension === 'tga' ) {\n\n\t\t\tconst loader = this.manager.getHandler( '.tga' );\n\n\t\t\tif ( loader === null ) {\n\n\t\t\t\tconsole.warn( 'FBXLoader: TGA loader not found, creating placeholder texture for', textureNode.RelativeFilename );\n\t\t\t\ttexture = new three__WEBPACK_IMPORTED_MODULE_0__.Texture();\n\n\t\t\t} else {\n\n\t\t\t\tloader.setPath( this.textureLoader.path );\n\t\t\t\ttexture = loader.load( fileName );\n\n\t\t\t}\n\n\t\t} else if ( extension === 'psd' ) {\n\n\t\t\tconsole.warn( 'FBXLoader: PSD textures are not supported, creating placeholder texture for', textureNode.RelativeFilename );\n\t\t\ttexture = new three__WEBPACK_IMPORTED_MODULE_0__.Texture();\n\n\t\t} else {\n\n\t\t\ttexture = this.textureLoader.load( fileName );\n\n\t\t}\n\n\t\tthis.textureLoader.setPath( currentPath );\n\n\t\treturn texture;\n\n\t}\n\n\t// Parse nodes in FBXTree.Objects.Material\n\tparseMaterials( textureMap ) {\n\n\t\tconst materialMap = new Map();\n\n\t\tif ( 'Material' in fbxTree.Objects ) {\n\n\t\t\tconst materialNodes = fbxTree.Objects.Material;\n\n\t\t\tfor ( const nodeID in materialNodes ) {\n\n\t\t\t\tconst material = this.parseMaterial( materialNodes[ nodeID ], textureMap );\n\n\t\t\t\tif ( material !== null ) materialMap.set( parseInt( nodeID ), material );\n\n\t\t\t}\n\n\t\t}\n\n\t\treturn materialMap;\n\n\t}\n\n\t// Parse single node in FBXTree.Objects.Material\n\t// Materials are connected to texture maps in FBXTree.Objects.Textures\n\t// FBX format currently only supports Lambert and Phong shading models\n\tparseMaterial( materialNode, textureMap ) {\n\n\t\tconst ID = materialNode.id;\n\t\tconst name = materialNode.attrName;\n\t\tlet type = materialNode.ShadingModel;\n\n\t\t// Case where FBX wraps shading model in property object.\n\t\tif ( typeof type === 'object' ) {\n\n\t\t\ttype = type.value;\n\n\t\t}\n\n\t\t// Ignore unused materials which don't have any connections.\n\t\tif ( ! connections.has( ID ) ) return null;\n\n\t\tconst parameters = this.parseParameters( materialNode, textureMap, ID );\n\n\t\tlet material;\n\n\t\tswitch ( type.toLowerCase() ) {\n\n\t\t\tcase 'phong':\n\t\t\t\tmaterial = new three__WEBPACK_IMPORTED_MODULE_0__.MeshPhongMaterial();\n\t\t\t\tbreak;\n\t\t\tcase 'lambert':\n\t\t\t\tmaterial = new three__WEBPACK_IMPORTED_MODULE_0__.MeshLambertMaterial();\n\t\t\t\tbreak;\n\t\t\tdefault:\n\t\t\t\tconsole.warn( 'THREE.FBXLoader: unknown material type \"%s\". Defaulting to MeshPhongMaterial.', type );\n\t\t\t\tmaterial = new three__WEBPACK_IMPORTED_MODULE_0__.MeshPhongMaterial();\n\t\t\t\tbreak;\n\n\t\t}\n\n\t\tmaterial.setValues( parameters );\n\t\tmaterial.name = name;\n\n\t\treturn material;\n\n\t}\n\n\t// Parse FBX material and return parameters suitable for a three.js material\n\t// Also parse the texture map and return any textures associated with the material\n\tparseParameters( materialNode, textureMap, ID ) {\n\n\t\tconst parameters = {};\n\n\t\tif ( materialNode.BumpFactor ) {\n\n\t\t\tparameters.bumpScale = materialNode.BumpFactor.value;\n\n\t\t}\n\n\t\tif ( materialNode.Diffuse ) {\n\n\t\t\tparameters.color = new three__WEBPACK_IMPORTED_MODULE_0__.Color().fromArray( materialNode.Diffuse.value );\n\n\t\t} else if ( materialNode.DiffuseColor && ( materialNode.DiffuseColor.type === 'Color' || materialNode.DiffuseColor.type === 'ColorRGB' ) ) {\n\n\t\t\t// The blender exporter exports diffuse here instead of in materialNode.Diffuse\n\t\t\tparameters.color = new three__WEBPACK_IMPORTED_MODULE_0__.Color().fromArray( materialNode.DiffuseColor.value );\n\n\t\t}\n\n\t\tif ( materialNode.DisplacementFactor ) {\n\n\t\t\tparameters.displacementScale = materialNode.DisplacementFactor.value;\n\n\t\t}\n\n\t\tif ( materialNode.Emissive ) {\n\n\t\t\tparameters.emissive = new three__WEBPACK_IMPORTED_MODULE_0__.Color().fromArray( materialNode.Emissive.value );\n\n\t\t} else if ( materialNode.EmissiveColor && ( materialNode.EmissiveColor.type === 'Color' || materialNode.EmissiveColor.type === 'ColorRGB' ) ) {\n\n\t\t\t// The blender exporter exports emissive color here instead of in materialNode.Emissive\n\t\t\tparameters.emissive = new three__WEBPACK_IMPORTED_MODULE_0__.Color().fromArray( materialNode.EmissiveColor.value );\n\n\t\t}\n\n\t\tif ( materialNode.EmissiveFactor ) {\n\n\t\t\tparameters.emissiveIntensity = parseFloat( materialNode.EmissiveFactor.value );\n\n\t\t}\n\n\t\tif ( materialNode.Opacity ) {\n\n\t\t\tparameters.opacity = parseFloat( materialNode.Opacity.value );\n\n\t\t}\n\n\t\tif ( parameters.opacity < 1.0 ) {\n\n\t\t\tparameters.transparent = true;\n\n\t\t}\n\n\t\tif ( materialNode.ReflectionFactor ) {\n\n\t\t\tparameters.reflectivity = materialNode.ReflectionFactor.value;\n\n\t\t}\n\n\t\tif ( materialNode.Shininess ) {\n\n\t\t\tparameters.shininess = materialNode.Shininess.value;\n\n\t\t}\n\n\t\tif ( materialNode.Specular ) {\n\n\t\t\tparameters.specular = new three__WEBPACK_IMPORTED_MODULE_0__.Color().fromArray( materialNode.Specular.value );\n\n\t\t} else if ( materialNode.SpecularColor && materialNode.SpecularColor.type === 'Color' ) {\n\n\t\t\t// The blender exporter exports specular color here instead of in materialNode.Specular\n\t\t\tparameters.specular = new three__WEBPACK_IMPORTED_MODULE_0__.Color().fromArray( materialNode.SpecularColor.value );\n\n\t\t}\n\n\t\tconst scope = this;\n\t\tconnections.get( ID ).children.forEach( function ( child ) {\n\n\t\t\tconst type = child.relationship;\n\n\t\t\tswitch ( type ) {\n\n\t\t\t\tcase 'Bump':\n\t\t\t\t\tparameters.bumpMap = scope.getTexture( textureMap, child.ID );\n\t\t\t\t\tbreak;\n\n\t\t\t\tcase 'Maya|TEX_ao_map':\n\t\t\t\t\tparameters.aoMap = scope.getTexture( textureMap, child.ID );\n\t\t\t\t\tbreak;\n\n\t\t\t\tcase 'DiffuseColor':\n\t\t\t\tcase 'Maya|TEX_color_map':\n\t\t\t\t\tparameters.map = scope.getTexture( textureMap, child.ID );\n\t\t\t\t\tif ( parameters.map !== undefined ) {\n\n\t\t\t\t\t\tparameters.map.encoding = three__WEBPACK_IMPORTED_MODULE_0__.sRGBEncoding;\n\n\t\t\t\t\t}\n\n\t\t\t\t\tbreak;\n\n\t\t\t\tcase 'DisplacementColor':\n\t\t\t\t\tparameters.displacementMap = scope.getTexture( textureMap, child.ID );\n\t\t\t\t\tbreak;\n\n\t\t\t\tcase 'EmissiveColor':\n\t\t\t\t\tparameters.emissiveMap = scope.getTexture( textureMap, child.ID );\n\t\t\t\t\tif ( parameters.emissiveMap !== undefined ) {\n\n\t\t\t\t\t\tparameters.emissiveMap.encoding = three__WEBPACK_IMPORTED_MODULE_0__.sRGBEncoding;\n\n\t\t\t\t\t}\n\n\t\t\t\t\tbreak;\n\n\t\t\t\tcase 'NormalMap':\n\t\t\t\tcase 'Maya|TEX_normal_map':\n\t\t\t\t\tparameters.normalMap = scope.getTexture( textureMap, child.ID );\n\t\t\t\t\tbreak;\n\n\t\t\t\tcase 'ReflectionColor':\n\t\t\t\t\tparameters.envMap = scope.getTexture( textureMap, child.ID );\n\t\t\t\t\tif ( parameters.envMap !== undefined ) {\n\n\t\t\t\t\t\tparameters.envMap.mapping = three__WEBPACK_IMPORTED_MODULE_0__.EquirectangularReflectionMapping;\n\t\t\t\t\t\tparameters.envMap.encoding = three__WEBPACK_IMPORTED_MODULE_0__.sRGBEncoding;\n\n\t\t\t\t\t}\n\n\t\t\t\t\tbreak;\n\n\t\t\t\tcase 'SpecularColor':\n\t\t\t\t\tparameters.specularMap = scope.getTexture( textureMap, child.ID );\n\t\t\t\t\tif ( parameters.specularMap !== undefined ) {\n\n\t\t\t\t\t\tparameters.specularMap.encoding = three__WEBPACK_IMPORTED_MODULE_0__.sRGBEncoding;\n\n\t\t\t\t\t}\n\n\t\t\t\t\tbreak;\n\n\t\t\t\tcase 'TransparentColor':\n\t\t\t\tcase 'TransparencyFactor':\n\t\t\t\t\tparameters.alphaMap = scope.getTexture( textureMap, child.ID );\n\t\t\t\t\tparameters.transparent = true;\n\t\t\t\t\tbreak;\n\n\t\t\t\tcase 'AmbientColor':\n\t\t\t\tcase 'ShininessExponent': // AKA glossiness map\n\t\t\t\tcase 'SpecularFactor': // AKA specularLevel\n\t\t\t\tcase 'VectorDisplacementColor': // NOTE: Seems to be a copy of DisplacementColor\n\t\t\t\tdefault:\n\t\t\t\t\tconsole.warn( 'THREE.FBXLoader: %s map is not supported in three.js, skipping texture.', type );\n\t\t\t\t\tbreak;\n\n\t\t\t}\n\n\t\t} );\n\n\t\treturn parameters;\n\n\t}\n\n\t// get a texture from the textureMap for use by a material.\n\tgetTexture( textureMap, id ) {\n\n\t\t// if the texture is a layered texture, just use the first layer and issue a warning\n\t\tif ( 'LayeredTexture' in fbxTree.Objects && id in fbxTree.Objects.LayeredTexture ) {\n\n\t\t\tconsole.warn( 'THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer.' );\n\t\t\tid = connections.get( id ).children[ 0 ].ID;\n\n\t\t}\n\n\t\treturn textureMap.get( id );\n\n\t}\n\n\t// Parse nodes in FBXTree.Objects.Deformer\n\t// Deformer node can contain skinning or Vertex Cache animation data, however only skinning is supported here\n\t// Generates map of Skeleton-like objects for use later when generating and binding skeletons.\n\tparseDeformers() {\n\n\t\tconst skeletons = {};\n\t\tconst morphTargets = {};\n\n\t\tif ( 'Deformer' in fbxTree.Objects ) {\n\n\t\t\tconst DeformerNodes = fbxTree.Objects.Deformer;\n\n\t\t\tfor ( const nodeID in DeformerNodes ) {\n\n\t\t\t\tconst deformerNode = DeformerNodes[ nodeID ];\n\n\t\t\t\tconst relationships = connections.get( parseInt( nodeID ) );\n\n\t\t\t\tif ( deformerNode.attrType === 'Skin' ) {\n\n\t\t\t\t\tconst skeleton = this.parseSkeleton( relationships, DeformerNodes );\n\t\t\t\t\tskeleton.ID = nodeID;\n\n\t\t\t\t\tif ( relationships.parents.length > 1 ) console.warn( 'THREE.FBXLoader: skeleton attached to more than one geometry is not supported.' );\n\t\t\t\t\tskeleton.geometryID = relationships.parents[ 0 ].ID;\n\n\t\t\t\t\tskeletons[ nodeID ] = skeleton;\n\n\t\t\t\t} else if ( deformerNode.attrType === 'BlendShape' ) {\n\n\t\t\t\t\tconst morphTarget = {\n\t\t\t\t\t\tid: nodeID,\n\t\t\t\t\t};\n\n\t\t\t\t\tmorphTarget.rawTargets = this.parseMorphTargets( relationships, DeformerNodes );\n\t\t\t\t\tmorphTarget.id = nodeID;\n\n\t\t\t\t\tif ( relationships.parents.length > 1 ) console.warn( 'THREE.FBXLoader: morph target attached to more than one geometry is not supported.' );\n\n\t\t\t\t\tmorphTargets[ nodeID ] = morphTarget;\n\n\t\t\t\t}\n\n\t\t\t}\n\n\t\t}\n\n\t\treturn {\n\n\t\t\tskeletons: skeletons,\n\t\t\tmorphTargets: morphTargets,\n\n\t\t};\n\n\t}\n\n\t// Parse single nodes in FBXTree.Objects.Deformer\n\t// The top level skeleton node has type 'Skin' and sub nodes have type 'Cluster'\n\t// Each skin node represents a skeleton and each cluster node represents a bone\n\tparseSkeleton( relationships, deformerNodes ) {\n\n\t\tconst rawBones = [];\n\n\t\trelationships.children.forEach( function ( child ) {\n\n\t\t\tconst boneNode = deformerNodes[ child.ID ];\n\n\t\t\tif ( boneNode.attrType !== 'Cluster' ) return;\n\n\t\t\tconst rawBone = {\n\n\t\t\t\tID: child.ID,\n\t\t\t\tindices: [],\n\t\t\t\tweights: [],\n\t\t\t\ttransformLink: new three__WEBPACK_IMPORTED_MODULE_0__.Matrix4().fromArray( boneNode.TransformLink.a ),\n\t\t\t\t// transform: new Matrix4().fromArray( boneNode.Transform.a ),\n\t\t\t\t// linkMode: boneNode.Mode,\n\n\t\t\t};\n\n\t\t\tif ( 'Indexes' in boneNode ) {\n\n\t\t\t\trawBone.indices = boneNode.Indexes.a;\n\t\t\t\trawBone.weights = boneNode.Weights.a;\n\n\t\t\t}\n\n\t\t\trawBones.push( rawBone );\n\n\t\t} );\n\n\t\treturn {\n\n\t\t\trawBones: rawBones,\n\t\t\tbones: []\n\n\t\t};\n\n\t}\n\n\t// The top level morph deformer node has type \"BlendShape\" and sub nodes have type \"BlendShapeChannel\"\n\tparseMorphTargets( relationships, deformerNodes ) {\n\n\t\tconst rawMorphTargets = [];\n\n\t\tfor ( let i = 0; i < relationships.children.length; i ++ ) {\n\n\t\t\tconst child = relationships.children[ i ];\n\n\t\t\tconst morphTargetNode = deformerNodes[ child.ID ];\n\n\t\t\tconst rawMorphTarget = {\n\n\t\t\t\tname: morphTargetNode.attrName,\n\t\t\t\tinitialWeight: morphTargetNode.DeformPercent,\n\t\t\t\tid: morphTargetNode.id,\n\t\t\t\tfullWeights: morphTargetNode.FullWeights.a\n\n\t\t\t};\n\n\t\t\tif ( morphTargetNode.attrType !== 'BlendShapeChannel' ) return;\n\n\t\t\trawMorphTarget.geoID = connections.get( parseInt( child.ID ) ).children.filter( function ( child ) {\n\n\t\t\t\treturn child.relationship === undefined;\n\n\t\t\t} )[ 0 ].ID;\n\n\t\t\trawMorphTargets.push( rawMorphTarget );\n\n\t\t}\n\n\t\treturn rawMorphTargets;\n\n\t}\n\n\t// create the main Group() to be returned by the loader\n\tparseScene( deformers, geometryMap, materialMap ) {\n\n\t\tsceneGraph = new three__WEBPACK_IMPORTED_MODULE_0__.Group();\n\n\t\tconst modelMap = this.parseModels( deformers.skeletons, geometryMap, materialMap );\n\n\t\tconst modelNodes = fbxTree.Objects.Model;\n\n\t\tconst scope = this;\n\t\tmodelMap.forEach( function ( model ) {\n\n\t\t\tconst modelNode = modelNodes[ model.ID ];\n\t\t\tscope.setLookAtProperties( model, modelNode );\n\n\t\t\tconst parentConnections = connections.get( model.ID ).parents;\n\n\t\t\tparentConnections.forEach( function ( connection ) {\n\n\t\t\t\tconst parent = modelMap.get( connection.ID );\n\t\t\t\tif ( parent !== undefined ) parent.add( model );\n\n\t\t\t} );\n\n\t\t\tif ( model.parent === null ) {\n\n\t\t\t\tsceneGraph.add( model );\n\n\t\t\t}\n\n\n\t\t} );\n\n\t\tthis.bindSkeleton( deformers.skeletons, geometryMap, modelMap );\n\n\t\tthis.createAmbientLight();\n\n\t\tsceneGraph.traverse( function ( node ) {\n\n\t\t\tif ( node.userData.transformData ) {\n\n\t\t\t\tif ( node.parent ) {\n\n\t\t\t\t\tnode.userData.transformData.parentMatrix = node.parent.matrix;\n\t\t\t\t\tnode.userData.transformData.parentMatrixWorld = node.parent.matrixWorld;\n\n\t\t\t\t}\n\n\t\t\t\tconst transform = generateTransform( node.userData.transformData );\n\n\t\t\t\tnode.applyMatrix4( transform );\n\t\t\t\tnode.updateWorldMatrix();\n\n\t\t\t}\n\n\t\t} );\n\n\t\tconst animations = new AnimationParser().parse();\n\n\t\t// if all the models where already combined in a single group, just return that\n\t\tif ( sceneGraph.children.length === 1 && sceneGraph.children[ 0 ].isGroup ) {\n\n\t\t\tsceneGraph.children[ 0 ].animations = animations;\n\t\t\tsceneGraph = sceneGraph.children[ 0 ];\n\n\t\t}\n\n\t\tsceneGraph.animations = animations;\n\n\t}\n\n\t// parse nodes in FBXTree.Objects.Model\n\tparseModels( skeletons, geometryMap, materialMap ) {\n\n\t\tconst modelMap = new Map();\n\t\tconst modelNodes = fbxTree.Objects.Model;\n\n\t\tfor ( const nodeID in modelNodes ) {\n\n\t\t\tconst id = parseInt( nodeID );\n\t\t\tconst node = modelNodes[ nodeID ];\n\t\t\tconst relationships = connections.get( id );\n\n\t\t\tlet model = this.buildSkeleton( relationships, skeletons, id, node.attrName );\n\n\t\t\tif ( ! model ) {\n\n\t\t\t\tswitch ( node.attrType ) {\n\n\t\t\t\t\tcase 'Camera':\n\t\t\t\t\t\tmodel = this.createCamera( relationships );\n\t\t\t\t\t\tbreak;\n\t\t\t\t\tcase 'Light':\n\t\t\t\t\t\tmodel = this.createLight( relationships );\n\t\t\t\t\t\tbreak;\n\t\t\t\t\tcase 'Mesh':\n\t\t\t\t\t\tmodel = this.createMesh( relationships, geometryMap, materialMap );\n\t\t\t\t\t\tbreak;\n\t\t\t\t\tcase 'NurbsCurve':\n\t\t\t\t\t\tmodel = this.createCurve( relationships, geometryMap );\n\t\t\t\t\t\tbreak;\n\t\t\t\t\tcase 'LimbNode':\n\t\t\t\t\tcase 'Root':\n\t\t\t\t\t\tmodel = new three__WEBPACK_IMPORTED_MODULE_0__.Bone();\n\t\t\t\t\t\tbreak;\n\t\t\t\t\tcase 'Null':\n\t\t\t\t\tdefault:\n\t\t\t\t\t\tmodel = new three__WEBPACK_IMPORTED_MODULE_0__.Group();\n\t\t\t\t\t\tbreak;\n\n\t\t\t\t}\n\n\t\t\t\tmodel.name = node.attrName ? three__WEBPACK_IMPORTED_MODULE_0__.PropertyBinding.sanitizeNodeName( node.attrName ) : '';\n\n\t\t\t\tmodel.ID = id;\n\n\t\t\t}\n\n\t\t\tthis.getTransformData( model, node );\n\t\t\tmodelMap.set( id, model );\n\n\t\t}\n\n\t\treturn modelMap;\n\n\t}\n\n\tbuildSkeleton( relationships, skeletons, id, name ) {\n\n\t\tlet bone = null;\n\n\t\trelationships.parents.forEach( function ( parent ) {\n\n\t\t\tfor ( const ID in skeletons ) {\n\n\t\t\t\tconst skeleton = skeletons[ ID ];\n\n\t\t\t\tskeleton.rawBones.forEach( function ( rawBone, i ) {\n\n\t\t\t\t\tif ( rawBone.ID === parent.ID ) {\n\n\t\t\t\t\t\tconst subBone = bone;\n\t\t\t\t\t\tbone = new three__WEBPACK_IMPORTED_MODULE_0__.Bone();\n\n\t\t\t\t\t\tbone.matrixWorld.copy( rawBone.transformLink );\n\n\t\t\t\t\t\t// set name and id here - otherwise in cases where \"subBone\" is created it will not have a name / id\n\n\t\t\t\t\t\tbone.name = name ? three__WEBPACK_IMPORTED_MODULE_0__.PropertyBinding.sanitizeNodeName( name ) : '';\n\t\t\t\t\t\tbone.ID = id;\n\n\t\t\t\t\t\tskeleton.bones[ i ] = bone;\n\n\t\t\t\t\t\t// In cases where a bone is shared between multiple meshes\n\t\t\t\t\t\t// duplicate the bone here and and it as a child of the first bone\n\t\t\t\t\t\tif ( subBone !== null ) {\n\n\t\t\t\t\t\t\tbone.add( subBone );\n\n\t\t\t\t\t\t}\n\n\t\t\t\t\t}\n\n\t\t\t\t} );\n\n\t\t\t}\n\n\t\t} );\n\n\t\treturn bone;\n\n\t}\n\n\t// create a PerspectiveCamera or OrthographicCamera\n\tcreateCamera( relationships ) {\n\n\t\tlet model;\n\t\tlet cameraAttribute;\n\n\t\trelationships.children.forEach( function ( child ) {\n\n\t\t\tconst attr = fbxTree.Objects.NodeAttribute[ child.ID ];\n\n\t\t\tif ( attr !== undefined ) {\n\n\t\t\t\tcameraAttribute = attr;\n\n\t\t\t}\n\n\t\t} );\n\n\t\tif ( cameraAttribute === undefined ) {\n\n\t\t\tmodel = new three__WEBPACK_IMPORTED_MODULE_0__.Object3D();\n\n\t\t} else {\n\n\t\t\tlet type = 0;\n\t\t\tif ( cameraAttribute.CameraProjectionType !== undefined && cameraAttribute.CameraProjectionType.value === 1 ) {\n\n\t\t\t\ttype = 1;\n\n\t\t\t}\n\n\t\t\tlet nearClippingPlane = 1;\n\t\t\tif ( cameraAttribute.NearPlane !== undefined ) {\n\n\t\t\t\tnearClippingPlane = cameraAttribute.NearPlane.value / 1000;\n\n\t\t\t}\n\n\t\t\tlet farClippingPlane = 1000;\n\t\t\tif ( cameraAttribute.FarPlane !== undefined ) {\n\n\t\t\t\tfarClippingPlane = cameraAttribute.FarPlane.value / 1000;\n\n\t\t\t}\n\n\n\t\t\tlet width = window.innerWidth;\n\t\t\tlet height = window.innerHeight;\n\n\t\t\tif ( cameraAttribute.AspectWidth !== undefined && cameraAttribute.AspectHeight !== undefined ) {\n\n\t\t\t\twidth = cameraAttribute.AspectWidth.value;\n\t\t\t\theight = cameraAttribute.AspectHeight.value;\n\n\t\t\t}\n\n\t\t\tconst aspect = width / height;\n\n\t\t\tlet fov = 45;\n\t\t\tif ( cameraAttribute.FieldOfView !== undefined ) {\n\n\t\t\t\tfov = cameraAttribute.FieldOfView.value;\n\n\t\t\t}\n\n\t\t\tconst focalLength = cameraAttribute.FocalLength ? cameraAttribute.FocalLength.value : null;\n\n\t\t\tswitch ( type ) {\n\n\t\t\t\tcase 0: // Perspective\n\t\t\t\t\tmodel = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera( fov, aspect, nearClippingPlane, farClippingPlane );\n\t\t\t\t\tif ( focalLength !== null ) model.setFocalLength( focalLength );\n\t\t\t\t\tbreak;\n\n\t\t\t\tcase 1: // Orthographic\n\t\t\t\t\tmodel = new three__WEBPACK_IMPORTED_MODULE_0__.OrthographicCamera( - width / 2, width / 2, height / 2, - height / 2, nearClippingPlane, farClippingPlane );\n\t\t\t\t\tbreak;\n\n\t\t\t\tdefault:\n\t\t\t\t\tconsole.warn( 'THREE.FBXLoader: Unknown camera type ' + type + '.' );\n\t\t\t\t\tmodel = new three__WEBPACK_IMPORTED_MODULE_0__.Object3D();\n\t\t\t\t\tbreak;\n\n\t\t\t}\n\n\t\t}\n\n\t\treturn model;\n\n\t}\n\n\t// Create a DirectionalLight, PointLight or SpotLight\n\tcreateLight( relationships ) {\n\n\t\tlet model;\n\t\tlet lightAttribute;\n\n\t\trelationships.children.forEach( function ( child ) {\n\n\t\t\tconst attr = fbxTree.Objects.NodeAttribute[ child.ID ];\n\n\t\t\tif ( attr !== undefined ) {\n\n\t\t\t\tlightAttribute = attr;\n\n\t\t\t}\n\n\t\t} );\n\n\t\tif ( lightAttribute === undefined ) {\n\n\t\t\tmodel = new three__WEBPACK_IMPORTED_MODULE_0__.Object3D();\n\n\t\t} else {\n\n\t\t\tlet type;\n\n\t\t\t// LightType can be undefined for Point lights\n\t\t\tif ( lightAttribute.LightType === undefined ) {\n\n\t\t\t\ttype = 0;\n\n\t\t\t} else {\n\n\t\t\t\ttype = lightAttribute.LightType.value;\n\n\t\t\t}\n\n\t\t\tlet color = 0xffffff;\n\n\t\t\tif ( lightAttribute.Color !== undefined ) {\n\n\t\t\t\tcolor = new three__WEBPACK_IMPORTED_MODULE_0__.Color().fromArray( lightAttribute.Color.value );\n\n\t\t\t}\n\n\t\t\tlet intensity = ( lightAttribute.Intensity === undefined ) ? 1 : lightAttribute.Intensity.value / 100;\n\n\t\t\t// light disabled\n\t\t\tif ( lightAttribute.CastLightOnObject !== undefined && lightAttribute.CastLightOnObject.value === 0 ) {\n\n\t\t\t\tintensity = 0;\n\n\t\t\t}\n\n\t\t\tlet distance = 0;\n\t\t\tif ( lightAttribute.FarAttenuationEnd !== undefined ) {\n\n\t\t\t\tif ( lightAttribute.EnableFarAttenuation !== undefined && lightAttribute.EnableFarAttenuation.value === 0 ) {\n\n\t\t\t\t\tdistance = 0;\n\n\t\t\t\t} else {\n\n\t\t\t\t\tdistance = lightAttribute.FarAttenuationEnd.value;\n\n\t\t\t\t}\n\n\t\t\t}\n\n\t\t\t// TODO: could this be calculated linearly from FarAttenuationStart to FarAttenuationEnd?\n\t\t\tconst decay = 1;\n\n\t\t\tswitch ( type ) {\n\n\t\t\t\tcase 0: // Point\n\t\t\t\t\tmodel = new three__WEBPACK_IMPORTED_MODULE_0__.PointLight( color, intensity, distance, decay );\n\t\t\t\t\tbreak;\n\n\t\t\t\tcase 1: // Directional\n\t\t\t\t\tmodel = new three__WEBPACK_IMPORTED_MODULE_0__.DirectionalLight( color, intensity );\n\t\t\t\t\tbreak;\n\n\t\t\t\tcase 2: // Spot\n\t\t\t\t\tlet angle = Math.PI / 3;\n\n\t\t\t\t\tif ( lightAttribute.InnerAngle !== undefined ) {\n\n\t\t\t\t\t\tangle = three__WEBPACK_IMPORTED_MODULE_0__.MathUtils.degToRad( lightAttribute.InnerAngle.value );\n\n\t\t\t\t\t}\n\n\t\t\t\t\tlet penumbra = 0;\n\t\t\t\t\tif ( lightAttribute.OuterAngle !== undefined ) {\n\n\t\t\t\t\t\t// TODO: this is not correct - FBX calculates outer and inner angle in degrees\n\t\t\t\t\t\t// with OuterAngle > InnerAngle && OuterAngle <= Math.PI\n\t\t\t\t\t\t// while three.js uses a penumbra between (0, 1) to attenuate the inner angle\n\t\t\t\t\t\tpenumbra = three__WEBPACK_IMPORTED_MODULE_0__.MathUtils.degToRad( lightAttribute.OuterAngle.value );\n\t\t\t\t\t\tpenumbra = Math.max( penumbra, 1 );\n\n\t\t\t\t\t}\n\n\t\t\t\t\tmodel = new three__WEBPACK_IMPORTED_MODULE_0__.SpotLight( color, intensity, distance, angle, penumbra, decay );\n\t\t\t\t\tbreak;\n\n\t\t\t\tdefault:\n\t\t\t\t\tconsole.warn( 'THREE.FBXLoader: Unknown light type ' + lightAttribute.LightType.value + ', defaulting to a PointLight.' );\n\t\t\t\t\tmodel = new three__WEBPACK_IMPORTED_MODULE_0__.PointLight( color, intensity );\n\t\t\t\t\tbreak;\n\n\t\t\t}\n\n\t\t\tif ( lightAttribute.CastShadows !== undefined && lightAttribute.CastShadows.value === 1 ) {\n\n\t\t\t\tmodel.castShadow = true;\n\n\t\t\t}\n\n\t\t}\n\n\t\treturn model;\n\n\t}\n\n\tcreateMesh( relationships, geometryMap, materialMap ) {\n\n\t\tlet model;\n\t\tlet geometry = null;\n\t\tlet material = null;\n\t\tconst materials = [];\n\n\t\t// get geometry and materials(s) from connections\n\t\trelationships.children.forEach( function ( child ) {\n\n\t\t\tif ( geometryMap.has( child.ID ) ) {\n\n\t\t\t\tgeometry = geometryMap.get( child.ID );\n\n\t\t\t}\n\n\t\t\tif ( materialMap.has( child.ID ) ) {\n\n\t\t\t\tmaterials.push( materialMap.get( child.ID ) );\n\n\t\t\t}\n\n\t\t} );\n\n\t\tif ( materials.length > 1 ) {\n\n\t\t\tmaterial = materials;\n\n\t\t} else if ( materials.length > 0 ) {\n\n\t\t\tmaterial = materials[ 0 ];\n\n\t\t} else {\n\n\t\t\tmaterial = new three__WEBPACK_IMPORTED_MODULE_0__.MeshPhongMaterial( { color: 0xcccccc } );\n\t\t\tmaterials.push( material );\n\n\t\t}\n\n\t\tif ( 'color' in geometry.attributes ) {\n\n\t\t\tmaterials.forEach( function ( material ) {\n\n\t\t\t\tmaterial.vertexColors = true;\n\n\t\t\t} );\n\n\t\t}\n\n\t\tif ( geometry.FBX_Deformer ) {\n\n\t\t\tmodel = new three__WEBPACK_IMPORTED_MODULE_0__.SkinnedMesh( geometry, material );\n\t\t\tmodel.normalizeSkinWeights();\n\n\t\t} else {\n\n\t\t\tmodel = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh( geometry, material );\n\n\t\t}\n\n\t\treturn model;\n\n\t}\n\n\tcreateCurve( relationships, geometryMap ) {\n\n\t\tconst geometry = relationships.children.reduce( function ( geo, child ) {\n\n\t\t\tif ( geometryMap.has( child.ID ) ) geo = geometryMap.get( child.ID );\n\n\t\t\treturn geo;\n\n\t\t}, null );\n\n\t\t// FBX does not list materials for Nurbs lines, so we'll just put our own in here.\n\t\tconst material = new three__WEBPACK_IMPORTED_MODULE_0__.LineBasicMaterial( { color: 0x3300ff, linewidth: 1 } );\n\t\treturn new three__WEBPACK_IMPORTED_MODULE_0__.Line( geometry, material );\n\n\t}\n\n\t// parse the model node for transform data\n\tgetTransformData( model, modelNode ) {\n\n\t\tconst transformData = {};\n\n\t\tif ( 'InheritType' in modelNode ) transformData.inheritType = parseInt( modelNode.InheritType.value );\n\n\t\tif ( 'RotationOrder' in modelNode ) transformData.eulerOrder = getEulerOrder( modelNode.RotationOrder.value );\n\t\telse transformData.eulerOrder = 'ZYX';\n\n\t\tif ( 'Lcl_Translation' in modelNode ) transformData.translation = modelNode.Lcl_Translation.value;\n\n\t\tif ( 'PreRotation' in modelNode ) transformData.preRotation = modelNode.PreRotation.value;\n\t\tif ( 'Lcl_Rotation' in modelNode ) transformData.rotation = modelNode.Lcl_Rotation.value;\n\t\tif ( 'PostRotation' in modelNode ) transformData.postRotation = modelNode.PostRotation.value;\n\n\t\tif ( 'Lcl_Scaling' in modelNode ) transformData.scale = modelNode.Lcl_Scaling.value;\n\n\t\tif ( 'ScalingOffset' in modelNode ) transformData.scalingOffset = modelNode.ScalingOffset.value;\n\t\tif ( 'ScalingPivot' in modelNode ) transformData.scalingPivot = modelNode.ScalingPivot.value;\n\n\t\tif ( 'RotationOffset' in modelNode ) transformData.rotationOffset = modelNode.RotationOffset.value;\n\t\tif ( 'RotationPivot' in modelNode ) transformData.rotationPivot = modelNode.RotationPivot.value;\n\n\t\tmodel.userData.transformData = transformData;\n\n\t}\n\n\tsetLookAtProperties( model, modelNode ) {\n\n\t\tif ( 'LookAtProperty' in modelNode ) {\n\n\t\t\tconst children = connections.get( model.ID ).children;\n\n\t\t\tchildren.forEach( function ( child ) {\n\n\t\t\t\tif ( child.relationship === 'LookAtProperty' ) {\n\n\t\t\t\t\tconst lookAtTarget = fbxTree.Objects.Model[ child.ID ];\n\n\t\t\t\t\tif ( 'Lcl_Translation' in lookAtTarget ) {\n\n\t\t\t\t\t\tconst pos = lookAtTarget.Lcl_Translation.value;\n\n\t\t\t\t\t\t// DirectionalLight, SpotLight\n\t\t\t\t\t\tif ( model.target !== undefined ) {\n\n\t\t\t\t\t\t\tmodel.target.position.fromArray( pos );\n\t\t\t\t\t\t\tsceneGraph.add( model.target );\n\n\t\t\t\t\t\t} else { // Cameras and other Object3Ds\n\n\t\t\t\t\t\t\tmodel.lookAt( new three__WEBPACK_IMPORTED_MODULE_0__.Vector3().fromArray( pos ) );\n\n\t\t\t\t\t\t}\n\n\t\t\t\t\t}\n\n\t\t\t\t}\n\n\t\t\t} );\n\n\t\t}\n\n\t}\n\n\tbindSkeleton( skeletons, geometryMap, modelMap ) {\n\n\t\tconst bindMatrices = this.parsePoseNodes();\n\n\t\tfor ( const ID in skeletons ) {\n\n\t\t\tconst skeleton = skeletons[ ID ];\n\n\t\t\tconst parents = connections.get( parseInt( skeleton.ID ) ).parents;\n\n\t\t\tparents.forEach( function ( parent ) {\n\n\t\t\t\tif ( geometryMap.has( parent.ID ) ) {\n\n\t\t\t\t\tconst geoID = parent.ID;\n\t\t\t\t\tconst geoRelationships = connections.get( geoID );\n\n\t\t\t\t\tgeoRelationships.parents.forEach( function ( geoConnParent ) {\n\n\t\t\t\t\t\tif ( modelMap.has( geoConnParent.ID ) ) {\n\n\t\t\t\t\t\t\tconst model = modelMap.get( geoConnParent.ID );\n\n\t\t\t\t\t\t\tmodel.bind( new three__WEBPACK_IMPORTED_MODULE_0__.Skeleton( skeleton.bones ), bindMatrices[ geoConnParent.ID ] );\n\n\t\t\t\t\t\t}\n\n\t\t\t\t\t} );\n\n\t\t\t\t}\n\n\t\t\t} );\n\n\t\t}\n\n\t}\n\n\tparsePoseNodes() {\n\n\t\tconst bindMatrices = {};\n\n\t\tif ( 'Pose' in fbxTree.Objects ) {\n\n\t\t\tconst BindPoseNode = fbxTree.Objects.Pose;\n\n\t\t\tfor ( const nodeID in BindPoseNode ) {\n\n\t\t\t\tif ( BindPoseNode[ nodeID ].attrType === 'BindPose' && BindPoseNode[ nodeID ].NbPoseNodes > 0 ) {\n\n\t\t\t\t\tconst poseNodes = BindPoseNode[ nodeID ].PoseNode;\n\n\t\t\t\t\tif ( Array.isArray( poseNodes ) ) {\n\n\t\t\t\t\t\tposeNodes.forEach( function ( poseNode ) {\n\n\t\t\t\t\t\t\tbindMatrices[ poseNode.Node ] = new three__WEBPACK_IMPORTED_MODULE_0__.Matrix4().fromArray( poseNode.Matrix.a );\n\n\t\t\t\t\t\t} );\n\n\t\t\t\t\t} else {\n\n\t\t\t\t\t\tbindMatrices[ poseNodes.Node ] = new three__WEBPACK_IMPORTED_MODULE_0__.Matrix4().fromArray( poseNodes.Matrix.a );\n\n\t\t\t\t\t}\n\n\t\t\t\t}\n\n\t\t\t}\n\n\t\t}\n\n\t\treturn bindMatrices;\n\n\t}\n\n\t// Parse ambient color in FBXTree.GlobalSettings - if it's not set to black (default), create an ambient light\n\tcreateAmbientLight() {\n\n\t\tif ( 'GlobalSettings' in fbxTree && 'AmbientColor' in fbxTree.GlobalSettings ) {\n\n\t\t\tconst ambientColor = fbxTree.GlobalSettings.AmbientColor.value;\n\t\t\tconst r = ambientColor[ 0 ];\n\t\t\tconst g = ambientColor[ 1 ];\n\t\t\tconst b = ambientColor[ 2 ];\n\n\t\t\tif ( r !== 0 || g !== 0 || b !== 0 ) {\n\n\t\t\t\tconst color = new three__WEBPACK_IMPORTED_MODULE_0__.Color( r, g, b );\n\t\t\t\tsceneGraph.add( new three__WEBPACK_IMPORTED_MODULE_0__.AmbientLight( color, 1 ) );\n\n\t\t\t}\n\n\t\t}\n\n\t}\n\n}\n\n// parse Geometry data from FBXTree and return map of BufferGeometries\nclass GeometryParser {\n\n\t// Parse nodes in FBXTree.Objects.Geometry\n\tparse( deformers ) {\n\n\t\tconst geometryMap = new Map();\n\n\t\tif ( 'Geometry' in fbxTree.Objects ) {\n\n\t\t\tconst geoNodes = fbxTree.Objects.Geometry;\n\n\t\t\tfor ( const nodeID in geoNodes ) {\n\n\t\t\t\tconst relationships = connections.get( parseInt( nodeID ) );\n\t\t\t\tconst geo = this.parseGeometry( relationships, geoNodes[ nodeID ], deformers );\n\n\t\t\t\tgeometryMap.set( parseInt( nodeID ), geo );\n\n\t\t\t}\n\n\t\t}\n\n\t\treturn geometryMap;\n\n\t}\n\n\t// Parse single node in FBXTree.Objects.Geometry\n\tparseGeometry( relationships, geoNode, deformers ) {\n\n\t\tswitch ( geoNode.attrType ) {\n\n\t\t\tcase 'Mesh':\n\t\t\t\treturn this.parseMeshGeometry( relationships, geoNode, deformers );\n\t\t\t\tbreak;\n\n\t\t\tcase 'NurbsCurve':\n\t\t\t\treturn this.parseNurbsGeometry( geoNode );\n\t\t\t\tbreak;\n\n\t\t}\n\n\t}\n\n\t// Parse single node mesh geometry in FBXTree.Objects.Geometry\n\tparseMeshGeometry( relationships, geoNode, deformers ) {\n\n\t\tconst skeletons = deformers.skeletons;\n\t\tconst morphTargets = [];\n\n\t\tconst modelNodes = relationships.parents.map( function ( parent ) {\n\n\t\t\treturn fbxTree.Objects.Model[ parent.ID ];\n\n\t\t} );\n\n\t\t// don't create geometry if it is not associated with any models\n\t\tif ( modelNodes.length === 0 ) return;\n\n\t\tconst skeleton = relationships.children.reduce( function ( skeleton, child ) {\n\n\t\t\tif ( skeletons[ child.ID ] !== undefined ) skeleton = skeletons[ child.ID ];\n\n\t\t\treturn skeleton;\n\n\t\t}, null );\n\n\t\trelationships.children.forEach( function ( child ) {\n\n\t\t\tif ( deformers.morphTargets[ child.ID ] !== undefined ) {\n\n\t\t\t\tmorphTargets.push( deformers.morphTargets[ child.ID ] );\n\n\t\t\t}\n\n\t\t} );\n\n\t\t// Assume one model and get the preRotation from that\n\t\t// if there is more than one model associated with the geometry this may cause problems\n\t\tconst modelNode = modelNodes[ 0 ];\n\n\t\tconst transformData = {};\n\n\t\tif ( 'RotationOrder' in modelNode ) transformData.eulerOrder = getEulerOrder( modelNode.RotationOrder.value );\n\t\tif ( 'InheritType' in modelNode ) transformData.inheritType = parseInt( modelNode.InheritType.value );\n\n\t\tif ( 'GeometricTranslation' in modelNode ) transformData.translation = modelNode.GeometricTranslation.value;\n\t\tif ( 'GeometricRotation' in modelNode ) transformData.rotation = modelNode.GeometricRotation.value;\n\t\tif ( 'GeometricScaling' in modelNode ) transformData.scale = modelNode.GeometricScaling.value;\n\n\t\tconst transform = generateTransform( transformData );\n\n\t\treturn this.genGeometry( geoNode, skeleton, morphTargets, transform );\n\n\t}\n\n\t// Generate a BufferGeometry from a node in FBXTree.Objects.Geometry\n\tgenGeometry( geoNode, skeleton, morphTargets, preTransform ) {\n\n\t\tconst geo = new three__WEBPACK_IMPORTED_MODULE_0__.BufferGeometry();\n\t\tif ( geoNode.attrName ) geo.name = geoNode.attrName;\n\n\t\tconst geoInfo = this.parseGeoNode( geoNode, skeleton );\n\t\tconst buffers = this.genBuffers( geoInfo );\n\n\t\tconst positionAttribute = new three__WEBPACK_IMPORTED_MODULE_0__.Float32BufferAttribute( buffers.vertex, 3 );\n\n\t\tpositionAttribute.applyMatrix4( preTransform );\n\n\t\tgeo.setAttribute( 'position', positionAttribute );\n\n\t\tif ( buffers.colors.length > 0 ) {\n\n\t\t\tgeo.setAttribute( 'color', new three__WEBPACK_IMPORTED_MODULE_0__.Float32BufferAttribute( buffers.colors, 3 ) );\n\n\t\t}\n\n\t\tif ( skeleton ) {\n\n\t\t\tgeo.setAttribute( 'skinIndex', new three__WEBPACK_IMPORTED_MODULE_0__.Uint16BufferAttribute( buffers.weightsIndices, 4 ) );\n\n\t\t\tgeo.setAttribute( 'skinWeight', new three__WEBPACK_IMPORTED_MODULE_0__.Float32BufferAttribute( buffers.vertexWeights, 4 ) );\n\n\t\t\t// used later to bind the skeleton to the model\n\t\t\tgeo.FBX_Deformer = skeleton;\n\n\t\t}\n\n\t\tif ( buffers.normal.length > 0 ) {\n\n\t\t\tconst normalMatrix = new three__WEBPACK_IMPORTED_MODULE_0__.Matrix3().getNormalMatrix( preTransform );\n\n\t\t\tconst normalAttribute = new three__WEBPACK_IMPORTED_MODULE_0__.Float32BufferAttribute( buffers.normal, 3 );\n\t\t\tnormalAttribute.applyNormalMatrix( normalMatrix );\n\n\t\t\tgeo.setAttribute( 'normal', normalAttribute );\n\n\t\t}\n\n\t\tbuffers.uvs.forEach( function ( uvBuffer, i ) {\n\n\t\t\t// subsequent uv buffers are called 'uv1', 'uv2', ...\n\t\t\tlet name = 'uv' + ( i + 1 ).toString();\n\n\t\t\t// the first uv buffer is just called 'uv'\n\t\t\tif ( i === 0 ) {\n\n\t\t\t\tname = 'uv';\n\n\t\t\t}\n\n\t\t\tgeo.setAttribute( name, new three__WEBPACK_IMPORTED_MODULE_0__.Float32BufferAttribute( buffers.uvs[ i ], 2 ) );\n\n\t\t} );\n\n\t\tif ( geoInfo.material && geoInfo.material.mappingType !== 'AllSame' ) {\n\n\t\t\t// Convert the material indices of each vertex into rendering groups on the geometry.\n\t\t\tlet prevMaterialIndex = buffers.materialIndex[ 0 ];\n\t\t\tlet startIndex = 0;\n\n\t\t\tbuffers.materialIndex.forEach( function ( currentIndex, i ) {\n\n\t\t\t\tif ( currentIndex !== prevMaterialIndex ) {\n\n\t\t\t\t\tgeo.addGroup( startIndex, i - startIndex, prevMaterialIndex );\n\n\t\t\t\t\tprevMaterialIndex = currentIndex;\n\t\t\t\t\tstartIndex = i;\n\n\t\t\t\t}\n\n\t\t\t} );\n\n\t\t\t// the loop above doesn't add the last group, do that here.\n\t\t\tif ( geo.groups.length > 0 ) {\n\n\t\t\t\tconst lastGroup = geo.groups[ geo.groups.length - 1 ];\n\t\t\t\tconst lastIndex = lastGroup.start + lastGroup.count;\n\n\t\t\t\tif ( lastIndex !== buffers.materialIndex.length ) {\n\n\t\t\t\t\tgeo.addGroup( lastIndex, buffers.materialIndex.length - lastIndex, prevMaterialIndex );\n\n\t\t\t\t}\n\n\t\t\t}\n\n\t\t\t// case where there are multiple materials but the whole geometry is only\n\t\t\t// using one of them\n\t\t\tif ( geo.groups.length === 0 ) {\n\n\t\t\t\tgeo.addGroup( 0, buffers.materialIndex.length, buffers.materialIndex[ 0 ] );\n\n\t\t\t}\n\n\t\t}\n\n\t\tthis.addMorphTargets( geo, geoNode, morphTargets, preTransform );\n\n\t\treturn geo;\n\n\t}\n\n\tparseGeoNode( geoNode, skeleton ) {\n\n\t\tconst geoInfo = {};\n\n\t\tgeoInfo.vertexPositions = ( geoNode.Vertices !== undefined ) ? geoNode.Vertices.a : [];\n\t\tgeoInfo.vertexIndices = ( geoNode.PolygonVertexIndex !== undefined ) ? geoNode.PolygonVertexIndex.a : [];\n\n\t\tif ( geoNode.LayerElementColor ) {\n\n\t\t\tgeoInfo.color = this.parseVertexColors( geoNode.LayerElementColor[ 0 ] );\n\n\t\t}\n\n\t\tif ( geoNode.LayerElementMaterial ) {\n\n\t\t\tgeoInfo.material = this.parseMaterialIndices( geoNode.LayerElementMaterial[ 0 ] );\n\n\t\t}\n\n\t\tif ( geoNode.LayerElementNormal ) {\n\n\t\t\tgeoInfo.normal = this.parseNormals( geoNode.LayerElementNormal[ 0 ] );\n\n\t\t}\n\n\t\tif ( geoNode.LayerElementUV ) {\n\n\t\t\tgeoInfo.uv = [];\n\n\t\t\tlet i = 0;\n\t\t\twhile ( geoNode.LayerElementUV[ i ] ) {\n\n\t\t\t\tif ( geoNode.LayerElementUV[ i ].UV ) {\n\n\t\t\t\t\tgeoInfo.uv.push( this.parseUVs( geoNode.LayerElementUV[ i ] ) );\n\n\t\t\t\t}\n\n\t\t\t\ti ++;\n\n\t\t\t}\n\n\t\t}\n\n\t\tgeoInfo.weightTable = {};\n\n\t\tif ( skeleton !== null ) {\n\n\t\t\tgeoInfo.skeleton = skeleton;\n\n\t\t\tskeleton.rawBones.forEach( function ( rawBone, i ) {\n\n\t\t\t\t// loop over the bone's vertex indices and weights\n\t\t\t\trawBone.indices.forEach( function ( index, j ) {\n\n\t\t\t\t\tif ( geoInfo.weightTable[ index ] === undefined ) geoInfo.weightTable[ index ] = [];\n\n\t\t\t\t\tgeoInfo.weightTable[ index ].push( {\n\n\t\t\t\t\t\tid: i,\n\t\t\t\t\t\tweight: rawBone.weights[ j ],\n\n\t\t\t\t\t} );\n\n\t\t\t\t} );\n\n\t\t\t} );\n\n\t\t}\n\n\t\treturn geoInfo;\n\n\t}\n\n\tgenBuffers( geoInfo ) {\n\n\t\tconst buffers = {\n\t\t\tvertex: [],\n\t\t\tnormal: [],\n\t\t\tcolors: [],\n\t\t\tuvs: [],\n\t\t\tmaterialIndex: [],\n\t\t\tvertexWeights: [],\n\t\t\tweightsIndices: [],\n\t\t};\n\n\t\tlet polygonIndex = 0;\n\t\tlet faceLength = 0;\n\t\tlet displayedWeightsWarning = false;\n\n\t\t// these will hold data for a single face\n\t\tlet facePositionIndexes = [];\n\t\tlet faceNormals = [];\n\t\tlet faceColors = [];\n\t\tlet faceUVs = [];\n\t\tlet faceWeights = [];\n\t\tlet faceWeightIndices = [];\n\n\t\tconst scope = this;\n\t\tgeoInfo.vertexIndices.forEach( function ( vertexIndex, polygonVertexIndex ) {\n\n\t\t\tlet materialIndex;\n\t\t\tlet endOfFace = false;\n\n\t\t\t// Face index and vertex index arrays are combined in a single array\n\t\t\t// A cube with quad faces looks like this:\n\t\t\t// PolygonVertexIndex: *24 {\n\t\t\t//  a: 0, 1, 3, -3, 2, 3, 5, -5, 4, 5, 7, -7, 6, 7, 1, -1, 1, 7, 5, -4, 6, 0, 2, -5\n\t\t\t//  }\n\t\t\t// Negative numbers mark the end of a face - first face here is 0, 1, 3, -3\n\t\t\t// to find index of last vertex bit shift the index: ^ - 1\n\t\t\tif ( vertexIndex < 0 ) {\n\n\t\t\t\tvertexIndex = vertexIndex ^ - 1; // equivalent to ( x * -1 ) - 1\n\t\t\t\tendOfFace = true;\n\n\t\t\t}\n\n\t\t\tlet weightIndices = [];\n\t\t\tlet weights = [];\n\n\t\t\tfacePositionIndexes.push( vertexIndex * 3, vertexIndex * 3 + 1, vertexIndex * 3 + 2 );\n\n\t\t\tif ( geoInfo.color ) {\n\n\t\t\t\tconst data = getData( polygonVertexIndex, polygonIndex, vertexIndex, geoInfo.color );\n\n\t\t\t\tfaceColors.push( data[ 0 ], data[ 1 ], data[ 2 ] );\n\n\t\t\t}\n\n\t\t\tif ( geoInfo.skeleton ) {\n\n\t\t\t\tif ( geoInfo.weightTable[ vertexIndex ] !== undefined ) {\n\n\t\t\t\t\tgeoInfo.weightTable[ vertexIndex ].forEach( function ( wt ) {\n\n\t\t\t\t\t\tweights.push( wt.weight );\n\t\t\t\t\t\tweightIndices.push( wt.id );\n\n\t\t\t\t\t} );\n\n\n\t\t\t\t}\n\n\t\t\t\tif ( weights.length > 4 ) {\n\n\t\t\t\t\tif ( ! displayedWeightsWarning ) {\n\n\t\t\t\t\t\tconsole.warn( 'THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights.' );\n\t\t\t\t\t\tdisplayedWeightsWarning = true;\n\n\t\t\t\t\t}\n\n\t\t\t\t\tconst wIndex = [ 0, 0, 0, 0 ];\n\t\t\t\t\tconst Weight = [ 0, 0, 0, 0 ];\n\n\t\t\t\t\tweights.forEach( function ( weight, weightIndex ) {\n\n\t\t\t\t\t\tlet currentWeight = weight;\n\t\t\t\t\t\tlet currentIndex = weightIndices[ weightIndex ];\n\n\t\t\t\t\t\tWeight.forEach( function ( comparedWeight, comparedWeightIndex, comparedWeightArray ) {\n\n\t\t\t\t\t\t\tif ( currentWeight > comparedWeight ) {\n\n\t\t\t\t\t\t\t\tcomparedWeightArray[ comparedWeightIndex ] = currentWeight;\n\t\t\t\t\t\t\t\tcurrentWeight = comparedWeight;\n\n\t\t\t\t\t\t\t\tconst tmp = wIndex[ comparedWeightIndex ];\n\t\t\t\t\t\t\t\twIndex[ comparedWeightIndex ] = currentIndex;\n\t\t\t\t\t\t\t\tcurrentIndex = tmp;\n\n\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t} );\n\n\t\t\t\t\t} );\n\n\t\t\t\t\tweightIndices = wIndex;\n\t\t\t\t\tweights = Weight;\n\n\t\t\t\t}\n\n\t\t\t\t// if the weight array is shorter than 4 pad with 0s\n\t\t\t\twhile ( weights.length < 4 ) {\n\n\t\t\t\t\tweights.push( 0 );\n\t\t\t\t\tweightIndices.push( 0 );\n\n\t\t\t\t}\n\n\t\t\t\tfor ( let i = 0; i < 4; ++ i ) {\n\n\t\t\t\t\tfaceWeights.push( weights[ i ] );\n\t\t\t\t\tfaceWeightIndices.push( weightIndices[ i ] );\n\n\t\t\t\t}\n\n\t\t\t}\n\n\t\t\tif ( geoInfo.normal ) {\n\n\t\t\t\tconst data = getData( polygonVertexIndex, polygonIndex, vertexIndex, geoInfo.normal );\n\n\t\t\t\tfaceNormals.push( data[ 0 ], data[ 1 ], data[ 2 ] );\n\n\t\t\t}\n\n\t\t\tif ( geoInfo.material && geoInfo.material.mappingType !== 'AllSame' ) {\n\n\t\t\t\tmaterialIndex = getData( polygonVertexIndex, polygonIndex, vertexIndex, geoInfo.material )[ 0 ];\n\n\t\t\t\tif ( materialIndex < 0 ) {\n\n\t\t\t\t\tconsole.warn( 'THREE.FBXLoader: Invalid material index:', materialIndex );\n\t\t\t\t\tmaterialIndex = 0;\n\n\t\t\t\t}\n\n\t\t\t}\n\n\t\t\tif ( geoInfo.uv ) {\n\n\t\t\t\tgeoInfo.uv.forEach( function ( uv, i ) {\n\n\t\t\t\t\tconst data = getData( polygonVertexIndex, polygonIndex, vertexIndex, uv );\n\n\t\t\t\t\tif ( faceUVs[ i ] === undefined ) {\n\n\t\t\t\t\t\tfaceUVs[ i ] = [];\n\n\t\t\t\t\t}\n\n\t\t\t\t\tfaceUVs[ i ].push( data[ 0 ] );\n\t\t\t\t\tfaceUVs[ i ].push( data[ 1 ] );\n\n\t\t\t\t} );\n\n\t\t\t}\n\n\t\t\tfaceLength ++;\n\n\t\t\tif ( endOfFace ) {\n\n\t\t\t\tscope.genFace( buffers, geoInfo, facePositionIndexes, materialIndex, faceNormals, faceColors, faceUVs, faceWeights, faceWeightIndices, faceLength );\n\n\t\t\t\tpolygonIndex ++;\n\t\t\t\tfaceLength = 0;\n\n\t\t\t\t// reset arrays for the next face\n\t\t\t\tfacePositionIndexes = [];\n\t\t\t\tfaceNormals = [];\n\t\t\t\tfaceColors = [];\n\t\t\t\tfaceUVs = [];\n\t\t\t\tfaceWeights = [];\n\t\t\t\tfaceWeightIndices = [];\n\n\t\t\t}\n\n\t\t} );\n\n\t\treturn buffers;\n\n\t}\n\n\t// Generate data for a single face in a geometry. If the face is a quad then split it into 2 tris\n\tgenFace( buffers, geoInfo, facePositionIndexes, materialIndex, faceNormals, faceColors, faceUVs, faceWeights, faceWeightIndices, faceLength ) {\n\n\t\tfor ( let i = 2; i < faceLength; i ++ ) {\n\n\t\t\tbuffers.vertex.push( geoInfo.vertexPositions[ facePositionIndexes[ 0 ] ] );\n\t\t\tbuffers.vertex.push( geoInfo.vertexPositions[ facePositionIndexes[ 1 ] ] );\n\t\t\tbuffers.vertex.push( geoInfo.vertexPositions[ facePositionIndexes[ 2 ] ] );\n\n\t\t\tbuffers.vertex.push( geoInfo.vertexPositions[ facePositionIndexes[ ( i - 1 ) * 3 ] ] );\n\t\t\tbuffers.vertex.push( geoInfo.vertexPositions[ facePositionIndexes[ ( i - 1 ) * 3 + 1 ] ] );\n\t\t\tbuffers.vertex.push( geoInfo.vertexPositions[ facePositionIndexes[ ( i - 1 ) * 3 + 2 ] ] );\n\n\t\t\tbuffers.vertex.push( geoInfo.vertexPositions[ facePositionIndexes[ i * 3 ] ] );\n\t\t\tbuffers.vertex.push( geoInfo.vertexPositions[ facePositionIndexes[ i * 3 + 1 ] ] );\n\t\t\tbuffers.vertex.push( geoInfo.vertexPositions[ facePositionIndexes[ i * 3 + 2 ] ] );\n\n\t\t\tif ( geoInfo.skeleton ) {\n\n\t\t\t\tbuffers.vertexWeights.push( faceWeights[ 0 ] );\n\t\t\t\tbuffers.vertexWeights.push( faceWeights[ 1 ] );\n\t\t\t\tbuffers.vertexWeights.push( faceWeights[ 2 ] );\n\t\t\t\tbuffers.vertexWeights.push( faceWeights[ 3 ] );\n\n\t\t\t\tbuffers.vertexWeights.push( faceWeights[ ( i - 1 ) * 4 ] );\n\t\t\t\tbuffers.vertexWeights.push( faceWeights[ ( i - 1 ) * 4 + 1 ] );\n\t\t\t\tbuffers.vertexWeights.push( faceWeights[ ( i - 1 ) * 4 + 2 ] );\n\t\t\t\tbuffers.vertexWeights.push( faceWeights[ ( i - 1 ) * 4 + 3 ] );\n\n\t\t\t\tbuffers.vertexWeights.push( faceWeights[ i * 4 ] );\n\t\t\t\tbuffers.vertexWeights.push( faceWeights[ i * 4 + 1 ] );\n\t\t\t\tbuffers.vertexWeights.push( faceWeights[ i * 4 + 2 ] );\n\t\t\t\tbuffers.vertexWeights.push( faceWeights[ i * 4 + 3 ] );\n\n\t\t\t\tbuffers.weightsIndices.push( faceWeightIndices[ 0 ] );\n\t\t\t\tbuffers.weightsIndices.push( faceWeightIndices[ 1 ] );\n\t\t\t\tbuffers.weightsIndices.push( faceWeightIndices[ 2 ] );\n\t\t\t\tbuffers.weightsIndices.push( faceWeightIndices[ 3 ] );\n\n\t\t\t\tbuffers.weightsIndices.push( faceWeightIndices[ ( i - 1 ) * 4 ] );\n\t\t\t\tbuffers.weightsIndices.push( faceWeightIndices[ ( i - 1 ) * 4 + 1 ] );\n\t\t\t\tbuffers.weightsIndices.push( faceWeightIndices[ ( i - 1 ) * 4 + 2 ] );\n\t\t\t\tbuffers.weightsIndices.push( faceWeightIndices[ ( i - 1 ) * 4 + 3 ] );\n\n\t\t\t\tbuffers.weightsIndices.push( faceWeightIndices[ i * 4 ] );\n\t\t\t\tbuffers.weightsIndices.push( faceWeightIndices[ i * 4 + 1 ] );\n\t\t\t\tbuffers.weightsIndices.push( faceWeightIndices[ i * 4 + 2 ] );\n\t\t\t\tbuffers.weightsIndices.push( faceWeightIndices[ i * 4 + 3 ] );\n\n\t\t\t}\n\n\t\t\tif ( geoInfo.color ) {\n\n\t\t\t\tbuffers.colors.push( faceColors[ 0 ] );\n\t\t\t\tbuffers.colors.push( faceColors[ 1 ] );\n\t\t\t\tbuffers.colors.push( faceColors[ 2 ] );\n\n\t\t\t\tbuffers.colors.push( faceColors[ ( i - 1 ) * 3 ] );\n\t\t\t\tbuffers.colors.push( faceColors[ ( i - 1 ) * 3 + 1 ] );\n\t\t\t\tbuffers.colors.push( faceColors[ ( i - 1 ) * 3 + 2 ] );\n\n\t\t\t\tbuffers.colors.push( faceColors[ i * 3 ] );\n\t\t\t\tbuffers.colors.push( faceColors[ i * 3 + 1 ] );\n\t\t\t\tbuffers.colors.push( faceColors[ i * 3 + 2 ] );\n\n\t\t\t}\n\n\t\t\tif ( geoInfo.material && geoInfo.material.mappingType !== 'AllSame' ) {\n\n\t\t\t\tbuffers.materialIndex.push( materialIndex );\n\t\t\t\tbuffers.materialIndex.push( materialIndex );\n\t\t\t\tbuffers.materialIndex.push( materialIndex );\n\n\t\t\t}\n\n\t\t\tif ( geoInfo.normal ) {\n\n\t\t\t\tbuffers.normal.push( faceNormals[ 0 ] );\n\t\t\t\tbuffers.normal.push( faceNormals[ 1 ] );\n\t\t\t\tbuffers.normal.push( faceNormals[ 2 ] );\n\n\t\t\t\tbuffers.normal.push( faceNormals[ ( i - 1 ) * 3 ] );\n\t\t\t\tbuffers.normal.push( faceNormals[ ( i - 1 ) * 3 + 1 ] );\n\t\t\t\tbuffers.normal.push( faceNormals[ ( i - 1 ) * 3 + 2 ] );\n\n\t\t\t\tbuffers.normal.push( faceNormals[ i * 3 ] );\n\t\t\t\tbuffers.normal.push( faceNormals[ i * 3 + 1 ] );\n\t\t\t\tbuffers.normal.push( faceNormals[ i * 3 + 2 ] );\n\n\t\t\t}\n\n\t\t\tif ( geoInfo.uv ) {\n\n\t\t\t\tgeoInfo.uv.forEach( function ( uv, j ) {\n\n\t\t\t\t\tif ( buffers.uvs[ j ] === undefined ) buffers.uvs[ j ] = [];\n\n\t\t\t\t\tbuffers.uvs[ j ].push( faceUVs[ j ][ 0 ] );\n\t\t\t\t\tbuffers.uvs[ j ].push( faceUVs[ j ][ 1 ] );\n\n\t\t\t\t\tbuffers.uvs[ j ].push( faceUVs[ j ][ ( i - 1 ) * 2 ] );\n\t\t\t\t\tbuffers.uvs[ j ].push( faceUVs[ j ][ ( i - 1 ) * 2 + 1 ] );\n\n\t\t\t\t\tbuffers.uvs[ j ].push( faceUVs[ j ][ i * 2 ] );\n\t\t\t\t\tbuffers.uvs[ j ].push( faceUVs[ j ][ i * 2 + 1 ] );\n\n\t\t\t\t} );\n\n\t\t\t}\n\n\t\t}\n\n\t}\n\n\taddMorphTargets( parentGeo, parentGeoNode, morphTargets, preTransform ) {\n\n\t\tif ( morphTargets.length === 0 ) return;\n\n\t\tparentGeo.morphTargetsRelative = true;\n\n\t\tparentGeo.morphAttributes.position = [];\n\t\t// parentGeo.morphAttributes.normal = []; // not implemented\n\n\t\tconst scope = this;\n\t\tmorphTargets.forEach( function ( morphTarget ) {\n\n\t\t\tmorphTarget.rawTargets.forEach( function ( rawTarget ) {\n\n\t\t\t\tconst morphGeoNode = fbxTree.Objects.Geometry[ rawTarget.geoID ];\n\n\t\t\t\tif ( morphGeoNode !== undefined ) {\n\n\t\t\t\t\tscope.genMorphGeometry( parentGeo, parentGeoNode, morphGeoNode, preTransform, rawTarget.name );\n\n\t\t\t\t}\n\n\t\t\t} );\n\n\t\t} );\n\n\t}\n\n\t// a morph geometry node is similar to a standard  node, and the node is also contained\n\t// in FBXTree.Objects.Geometry, however it can only have attributes for position, normal\n\t// and a special attribute Index defining which vertices of the original geometry are affected\n\t// Normal and position attributes only have data for the vertices that are affected by the morph\n\tgenMorphGeometry( parentGeo, parentGeoNode, morphGeoNode, preTransform, name ) {\n\n\t\tconst vertexIndices = ( parentGeoNode.PolygonVertexIndex !== undefined ) ? parentGeoNode.PolygonVertexIndex.a : [];\n\n\t\tconst morphPositionsSparse = ( morphGeoNode.Vertices !== undefined ) ? morphGeoNode.Vertices.a : [];\n\t\tconst indices = ( morphGeoNode.Indexes !== undefined ) ? morphGeoNode.Indexes.a : [];\n\n\t\tconst length = parentGeo.attributes.position.count * 3;\n\t\tconst morphPositions = new Float32Array( length );\n\n\t\tfor ( let i = 0; i < indices.length; i ++ ) {\n\n\t\t\tconst morphIndex = indices[ i ] * 3;\n\n\t\t\tmorphPositions[ morphIndex ] = morphPositionsSparse[ i * 3 ];\n\t\t\tmorphPositions[ morphIndex + 1 ] = morphPositionsSparse[ i * 3 + 1 ];\n\t\t\tmorphPositions[ morphIndex + 2 ] = morphPositionsSparse[ i * 3 + 2 ];\n\n\t\t}\n\n\t\t// TODO: add morph normal support\n\t\tconst morphGeoInfo = {\n\t\t\tvertexIndices: vertexIndices,\n\t\t\tvertexPositions: morphPositions,\n\n\t\t};\n\n\t\tconst morphBuffers = this.genBuffers( morphGeoInfo );\n\n\t\tconst positionAttribute = new three__WEBPACK_IMPORTED_MODULE_0__.Float32BufferAttribute( morphBuffers.vertex, 3 );\n\t\tpositionAttribute.name = name || morphGeoNode.attrName;\n\n\t\tpositionAttribute.applyMatrix4( preTransform );\n\n\t\tparentGeo.morphAttributes.position.push( positionAttribute );\n\n\t}\n\n\t// Parse normal from FBXTree.Objects.Geometry.LayerElementNormal if it exists\n\tparseNormals( NormalNode ) {\n\n\t\tconst mappingType = NormalNode.MappingInformationType;\n\t\tconst referenceType = NormalNode.ReferenceInformationType;\n\t\tconst buffer = NormalNode.Normals.a;\n\t\tlet indexBuffer = [];\n\t\tif ( referenceType === 'IndexToDirect' ) {\n\n\t\t\tif ( 'NormalIndex' in NormalNode ) {\n\n\t\t\t\tindexBuffer = NormalNode.NormalIndex.a;\n\n\t\t\t} else if ( 'NormalsIndex' in NormalNode ) {\n\n\t\t\t\tindexBuffer = NormalNode.NormalsIndex.a;\n\n\t\t\t}\n\n\t\t}\n\n\t\treturn {\n\t\t\tdataSize: 3,\n\t\t\tbuffer: buffer,\n\t\t\tindices: indexBuffer,\n\t\t\tmappingType: mappingType,\n\t\t\treferenceType: referenceType\n\t\t};\n\n\t}\n\n\t// Parse UVs from FBXTree.Objects.Geometry.LayerElementUV if it exists\n\tparseUVs( UVNode ) {\n\n\t\tconst mappingType = UVNode.MappingInformationType;\n\t\tconst referenceType = UVNode.ReferenceInformationType;\n\t\tconst buffer = UVNode.UV.a;\n\t\tlet indexBuffer = [];\n\t\tif ( referenceType === 'IndexToDirect' ) {\n\n\t\t\tindexBuffer = UVNode.UVIndex.a;\n\n\t\t}\n\n\t\treturn {\n\t\t\tdataSize: 2,\n\t\t\tbuffer: buffer,\n\t\t\tindices: indexBuffer,\n\t\t\tmappingType: mappingType,\n\t\t\treferenceType: referenceType\n\t\t};\n\n\t}\n\n\t// Parse Vertex Colors from FBXTree.Objects.Geometry.LayerElementColor if it exists\n\tparseVertexColors( ColorNode ) {\n\n\t\tconst mappingType = ColorNode.MappingInformationType;\n\t\tconst referenceType = ColorNode.ReferenceInformationType;\n\t\tconst buffer = ColorNode.Colors.a;\n\t\tlet indexBuffer = [];\n\t\tif ( referenceType === 'IndexToDirect' ) {\n\n\t\t\tindexBuffer = ColorNode.ColorIndex.a;\n\n\t\t}\n\n\t\treturn {\n\t\t\tdataSize: 4,\n\t\t\tbuffer: buffer,\n\t\t\tindices: indexBuffer,\n\t\t\tmappingType: mappingType,\n\t\t\treferenceType: referenceType\n\t\t};\n\n\t}\n\n\t// Parse mapping and material data in FBXTree.Objects.Geometry.LayerElementMaterial if it exists\n\tparseMaterialIndices( MaterialNode ) {\n\n\t\tconst mappingType = MaterialNode.MappingInformationType;\n\t\tconst referenceType = MaterialNode.ReferenceInformationType;\n\n\t\tif ( mappingType === 'NoMappingInformation' ) {\n\n\t\t\treturn {\n\t\t\t\tdataSize: 1,\n\t\t\t\tbuffer: [ 0 ],\n\t\t\t\tindices: [ 0 ],\n\t\t\t\tmappingType: 'AllSame',\n\t\t\t\treferenceType: referenceType\n\t\t\t};\n\n\t\t}\n\n\t\tconst materialIndexBuffer = MaterialNode.Materials.a;\n\n\t\t// Since materials are stored as indices, there's a bit of a mismatch between FBX and what\n\t\t// we expect.So we create an intermediate buffer that points to the index in the buffer,\n\t\t// for conforming with the other functions we've written for other data.\n\t\tconst materialIndices = [];\n\n\t\tfor ( let i = 0; i < materialIndexBuffer.length; ++ i ) {\n\n\t\t\tmaterialIndices.push( i );\n\n\t\t}\n\n\t\treturn {\n\t\t\tdataSize: 1,\n\t\t\tbuffer: materialIndexBuffer,\n\t\t\tindices: materialIndices,\n\t\t\tmappingType: mappingType,\n\t\t\treferenceType: referenceType\n\t\t};\n\n\t}\n\n\t// Generate a NurbGeometry from a node in FBXTree.Objects.Geometry\n\tparseNurbsGeometry( geoNode ) {\n\n\t\tif ( _curves_NURBSCurve_js__WEBPACK_IMPORTED_MODULE_1__.NURBSCurve === undefined ) {\n\n\t\t\tconsole.error( 'THREE.FBXLoader: The loader relies on NURBSCurve for any nurbs present in the model. Nurbs will show up as empty geometry.' );\n\t\t\treturn new three__WEBPACK_IMPORTED_MODULE_0__.BufferGeometry();\n\n\t\t}\n\n\t\tconst order = parseInt( geoNode.Order );\n\n\t\tif ( isNaN( order ) ) {\n\n\t\t\tconsole.error( 'THREE.FBXLoader: Invalid Order %s given for geometry ID: %s', geoNode.Order, geoNode.id );\n\t\t\treturn new three__WEBPACK_IMPORTED_MODULE_0__.BufferGeometry();\n\n\t\t}\n\n\t\tconst degree = order - 1;\n\n\t\tconst knots = geoNode.KnotVector.a;\n\t\tconst controlPoints = [];\n\t\tconst pointsValues = geoNode.Points.a;\n\n\t\tfor ( let i = 0, l = pointsValues.length; i < l; i += 4 ) {\n\n\t\t\tcontrolPoints.push( new three__WEBPACK_IMPORTED_MODULE_0__.Vector4().fromArray( pointsValues, i ) );\n\n\t\t}\n\n\t\tlet startKnot, endKnot;\n\n\t\tif ( geoNode.Form === 'Closed' ) {\n\n\t\t\tcontrolPoints.push( controlPoints[ 0 ] );\n\n\t\t} else if ( geoNode.Form === 'Periodic' ) {\n\n\t\t\tstartKnot = degree;\n\t\t\tendKnot = knots.length - 1 - startKnot;\n\n\t\t\tfor ( let i = 0; i < degree; ++ i ) {\n\n\t\t\t\tcontrolPoints.push( controlPoints[ i ] );\n\n\t\t\t}\n\n\t\t}\n\n\t\tconst curve = new _curves_NURBSCurve_js__WEBPACK_IMPORTED_MODULE_1__.NURBSCurve( degree, knots, controlPoints, startKnot, endKnot );\n\t\tconst points = curve.getPoints( controlPoints.length * 12 );\n\n\t\treturn new three__WEBPACK_IMPORTED_MODULE_0__.BufferGeometry().setFromPoints( points );\n\n\t}\n\n}\n\n// parse animation data from FBXTree\nclass AnimationParser {\n\n\t// take raw animation clips and turn them into three.js animation clips\n\tparse() {\n\n\t\tconst animationClips = [];\n\n\t\tconst rawClips = this.parseClips();\n\n\t\tif ( rawClips !== undefined ) {\n\n\t\t\tfor ( const key in rawClips ) {\n\n\t\t\t\tconst rawClip = rawClips[ key ];\n\n\t\t\t\tconst clip = this.addClip( rawClip );\n\n\t\t\t\tanimationClips.push( clip );\n\n\t\t\t}\n\n\t\t}\n\n\t\treturn animationClips;\n\n\t}\n\n\tparseClips() {\n\n\t\t// since the actual transformation data is stored in FBXTree.Objects.AnimationCurve,\n\t\t// if this is undefined we can safely assume there are no animations\n\t\tif ( fbxTree.Objects.AnimationCurve === undefined ) return undefined;\n\n\t\tconst curveNodesMap = this.parseAnimationCurveNodes();\n\n\t\tthis.parseAnimationCurves( curveNodesMap );\n\n\t\tconst layersMap = this.parseAnimationLayers( curveNodesMap );\n\t\tconst rawClips = this.parseAnimStacks( layersMap );\n\n\t\treturn rawClips;\n\n\t}\n\n\t// parse nodes in FBXTree.Objects.AnimationCurveNode\n\t// each AnimationCurveNode holds data for an animation transform for a model (e.g. left arm rotation )\n\t// and is referenced by an AnimationLayer\n\tparseAnimationCurveNodes() {\n\n\t\tconst rawCurveNodes = fbxTree.Objects.AnimationCurveNode;\n\n\t\tconst curveNodesMap = new Map();\n\n\t\tfor ( const nodeID in rawCurveNodes ) {\n\n\t\t\tconst rawCurveNode = rawCurveNodes[ nodeID ];\n\n\t\t\tif ( rawCurveNode.attrName.match( /S|R|T|DeformPercent/ ) !== null ) {\n\n\t\t\t\tconst curveNode = {\n\n\t\t\t\t\tid: rawCurveNode.id,\n\t\t\t\t\tattr: rawCurveNode.attrName,\n\t\t\t\t\tcurves: {},\n\n\t\t\t\t};\n\n\t\t\t\tcurveNodesMap.set( curveNode.id, curveNode );\n\n\t\t\t}\n\n\t\t}\n\n\t\treturn curveNodesMap;\n\n\t}\n\n\t// parse nodes in FBXTree.Objects.AnimationCurve and connect them up to\n\t// previously parsed AnimationCurveNodes. Each AnimationCurve holds data for a single animated\n\t// axis ( e.g. times and values of x rotation)\n\tparseAnimationCurves( curveNodesMap ) {\n\n\t\tconst rawCurves = fbxTree.Objects.AnimationCurve;\n\n\t\t// TODO: Many values are identical up to roundoff error, but won't be optimised\n\t\t// e.g. position times: [0, 0.4, 0. 8]\n\t\t// position values: [7.23538335023477e-7, 93.67518615722656, -0.9982695579528809, 7.23538335023477e-7, 93.67518615722656, -0.9982695579528809, 7.235384487103147e-7, 93.67520904541016, -0.9982695579528809]\n\t\t// clearly, this should be optimised to\n\t\t// times: [0], positions [7.23538335023477e-7, 93.67518615722656, -0.9982695579528809]\n\t\t// this shows up in nearly every FBX file, and generally time array is length > 100\n\n\t\tfor ( const nodeID in rawCurves ) {\n\n\t\t\tconst animationCurve = {\n\n\t\t\t\tid: rawCurves[ nodeID ].id,\n\t\t\t\ttimes: rawCurves[ nodeID ].KeyTime.a.map( convertFBXTimeToSeconds ),\n\t\t\t\tvalues: rawCurves[ nodeID ].KeyValueFloat.a,\n\n\t\t\t};\n\n\t\t\tconst relationships = connections.get( animationCurve.id );\n\n\t\t\tif ( relationships !== undefined ) {\n\n\t\t\t\tconst animationCurveID = relationships.parents[ 0 ].ID;\n\t\t\t\tconst animationCurveRelationship = relationships.parents[ 0 ].relationship;\n\n\t\t\t\tif ( animationCurveRelationship.match( /X/ ) ) {\n\n\t\t\t\t\tcurveNodesMap.get( animationCurveID ).curves[ 'x' ] = animationCurve;\n\n\t\t\t\t} else if ( animationCurveRelationship.match( /Y/ ) ) {\n\n\t\t\t\t\tcurveNodesMap.get( animationCurveID ).curves[ 'y' ] = animationCurve;\n\n\t\t\t\t} else if ( animationCurveRelationship.match( /Z/ ) ) {\n\n\t\t\t\t\tcurveNodesMap.get( animationCurveID ).curves[ 'z' ] = animationCurve;\n\n\t\t\t\t} else if ( animationCurveRelationship.match( /d|DeformPercent/ ) && curveNodesMap.has( animationCurveID ) ) {\n\n\t\t\t\t\tcurveNodesMap.get( animationCurveID ).curves[ 'morph' ] = animationCurve;\n\n\t\t\t\t}\n\n\t\t\t}\n\n\t\t}\n\n\t}\n\n\t// parse nodes in FBXTree.Objects.AnimationLayer. Each layers holds references\n\t// to various AnimationCurveNodes and is referenced by an AnimationStack node\n\t// note: theoretically a stack can have multiple layers, however in practice there always seems to be one per stack\n\tparseAnimationLayers( curveNodesMap ) {\n\n\t\tconst rawLayers = fbxTree.Objects.AnimationLayer;\n\n\t\tconst layersMap = new Map();\n\n\t\tfor ( const nodeID in rawLayers ) {\n\n\t\t\tconst layerCurveNodes = [];\n\n\t\t\tconst connection = connections.get( parseInt( nodeID ) );\n\n\t\t\tif ( connection !== undefined ) {\n\n\t\t\t\t// all the animationCurveNodes used in the layer\n\t\t\t\tconst children = connection.children;\n\n\t\t\t\tchildren.forEach( function ( child, i ) {\n\n\t\t\t\t\tif ( curveNodesMap.has( child.ID ) ) {\n\n\t\t\t\t\t\tconst curveNode = curveNodesMap.get( child.ID );\n\n\t\t\t\t\t\t// check that the curves are defined for at least one axis, otherwise ignore the curveNode\n\t\t\t\t\t\tif ( curveNode.curves.x !== undefined || curveNode.curves.y !== undefined || curveNode.curves.z !== undefined ) {\n\n\t\t\t\t\t\t\tif ( layerCurveNodes[ i ] === undefined ) {\n\n\t\t\t\t\t\t\t\tconst modelID = connections.get( child.ID ).parents.filter( function ( parent ) {\n\n\t\t\t\t\t\t\t\t\treturn parent.relationship !== undefined;\n\n\t\t\t\t\t\t\t\t} )[ 0 ].ID;\n\n\t\t\t\t\t\t\t\tif ( modelID !== undefined ) {\n\n\t\t\t\t\t\t\t\t\tconst rawModel = fbxTree.Objects.Model[ modelID.toString() ];\n\n\t\t\t\t\t\t\t\t\tif ( rawModel === undefined ) {\n\n\t\t\t\t\t\t\t\t\t\tconsole.warn( 'THREE.FBXLoader: Encountered a unused curve.', child );\n\t\t\t\t\t\t\t\t\t\treturn;\n\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\tconst node = {\n\n\t\t\t\t\t\t\t\t\t\tmodelName: rawModel.attrName ? three__WEBPACK_IMPORTED_MODULE_0__.PropertyBinding.sanitizeNodeName( rawModel.attrName ) : '',\n\t\t\t\t\t\t\t\t\t\tID: rawModel.id,\n\t\t\t\t\t\t\t\t\t\tinitialPosition: [ 0, 0, 0 ],\n\t\t\t\t\t\t\t\t\t\tinitialRotation: [ 0, 0, 0 ],\n\t\t\t\t\t\t\t\t\t\tinitialScale: [ 1, 1, 1 ],\n\n\t\t\t\t\t\t\t\t\t};\n\n\t\t\t\t\t\t\t\t\tsceneGraph.traverse( function ( child ) {\n\n\t\t\t\t\t\t\t\t\t\tif ( child.ID === rawModel.id ) {\n\n\t\t\t\t\t\t\t\t\t\t\tnode.transform = child.matrix;\n\n\t\t\t\t\t\t\t\t\t\t\tif ( child.userData.transformData ) node.eulerOrder = child.userData.transformData.eulerOrder;\n\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t} );\n\n\t\t\t\t\t\t\t\t\tif ( ! node.transform ) node.transform = new three__WEBPACK_IMPORTED_MODULE_0__.Matrix4();\n\n\t\t\t\t\t\t\t\t\t// if the animated model is pre rotated, we'll have to apply the pre rotations to every\n\t\t\t\t\t\t\t\t\t// animation value as well\n\t\t\t\t\t\t\t\t\tif ( 'PreRotation' in rawModel ) node.preRotation = rawModel.PreRotation.value;\n\t\t\t\t\t\t\t\t\tif ( 'PostRotation' in rawModel ) node.postRotation = rawModel.PostRotation.value;\n\n\t\t\t\t\t\t\t\t\tlayerCurveNodes[ i ] = node;\n\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\tif ( layerCurveNodes[ i ] ) layerCurveNodes[ i ][ curveNode.attr ] = curveNode;\n\n\t\t\t\t\t\t} else if ( curveNode.curves.morph !== undefined ) {\n\n\t\t\t\t\t\t\tif ( layerCurveNodes[ i ] === undefined ) {\n\n\t\t\t\t\t\t\t\tconst deformerID = connections.get( child.ID ).parents.filter( function ( parent ) {\n\n\t\t\t\t\t\t\t\t\treturn parent.relationship !== undefined;\n\n\t\t\t\t\t\t\t\t} )[ 0 ].ID;\n\n\t\t\t\t\t\t\t\tconst morpherID = connections.get( deformerID ).parents[ 0 ].ID;\n\t\t\t\t\t\t\t\tconst geoID = connections.get( morpherID ).parents[ 0 ].ID;\n\n\t\t\t\t\t\t\t\t// assuming geometry is not used in more than one model\n\t\t\t\t\t\t\t\tconst modelID = connections.get( geoID ).parents[ 0 ].ID;\n\n\t\t\t\t\t\t\t\tconst rawModel = fbxTree.Objects.Model[ modelID ];\n\n\t\t\t\t\t\t\t\tconst node = {\n\n\t\t\t\t\t\t\t\t\tmodelName: rawModel.attrName ? three__WEBPACK_IMPORTED_MODULE_0__.PropertyBinding.sanitizeNodeName( rawModel.attrName ) : '',\n\t\t\t\t\t\t\t\t\tmorphName: fbxTree.Objects.Deformer[ deformerID ].attrName,\n\n\t\t\t\t\t\t\t\t};\n\n\t\t\t\t\t\t\t\tlayerCurveNodes[ i ] = node;\n\n\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\tlayerCurveNodes[ i ][ curveNode.attr ] = curveNode;\n\n\t\t\t\t\t\t}\n\n\t\t\t\t\t}\n\n\t\t\t\t} );\n\n\t\t\t\tlayersMap.set( parseInt( nodeID ), layerCurveNodes );\n\n\t\t\t}\n\n\t\t}\n\n\t\treturn layersMap;\n\n\t}\n\n\t// parse nodes in FBXTree.Objects.AnimationStack. These are the top level node in the animation\n\t// hierarchy. Each Stack node will be used to create a AnimationClip\n\tparseAnimStacks( layersMap ) {\n\n\t\tconst rawStacks = fbxTree.Objects.AnimationStack;\n\n\t\t// connect the stacks (clips) up to the layers\n\t\tconst rawClips = {};\n\n\t\tfor ( const nodeID in rawStacks ) {\n\n\t\t\tconst children = connections.get( parseInt( nodeID ) ).children;\n\n\t\t\tif ( children.length > 1 ) {\n\n\t\t\t\t// it seems like stacks will always be associated with a single layer. But just in case there are files\n\t\t\t\t// where there are multiple layers per stack, we'll display a warning\n\t\t\t\tconsole.warn( 'THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.' );\n\n\t\t\t}\n\n\t\t\tconst layer = layersMap.get( children[ 0 ].ID );\n\n\t\t\trawClips[ nodeID ] = {\n\n\t\t\t\tname: rawStacks[ nodeID ].attrName,\n\t\t\t\tlayer: layer,\n\n\t\t\t};\n\n\t\t}\n\n\t\treturn rawClips;\n\n\t}\n\n\taddClip( rawClip ) {\n\n\t\tlet tracks = [];\n\n\t\tconst scope = this;\n\t\trawClip.layer.forEach( function ( rawTracks ) {\n\n\t\t\ttracks = tracks.concat( scope.generateTracks( rawTracks ) );\n\n\t\t} );\n\n\t\treturn new three__WEBPACK_IMPORTED_MODULE_0__.AnimationClip( rawClip.name, - 1, tracks );\n\n\t}\n\n\tgenerateTracks( rawTracks ) {\n\n\t\tconst tracks = [];\n\n\t\tlet initialPosition = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();\n\t\tlet initialRotation = new three__WEBPACK_IMPORTED_MODULE_0__.Quaternion();\n\t\tlet initialScale = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();\n\n\t\tif ( rawTracks.transform ) rawTracks.transform.decompose( initialPosition, initialRotation, initialScale );\n\n\t\tinitialPosition = initialPosition.toArray();\n\t\tinitialRotation = new three__WEBPACK_IMPORTED_MODULE_0__.Euler().setFromQuaternion( initialRotation, rawTracks.eulerOrder ).toArray();\n\t\tinitialScale = initialScale.toArray();\n\n\t\tif ( rawTracks.T !== undefined && Object.keys( rawTracks.T.curves ).length > 0 ) {\n\n\t\t\tconst positionTrack = this.generateVectorTrack( rawTracks.modelName, rawTracks.T.curves, initialPosition, 'position' );\n\t\t\tif ( positionTrack !== undefined ) tracks.push( positionTrack );\n\n\t\t}\n\n\t\tif ( rawTracks.R !== undefined && Object.keys( rawTracks.R.curves ).length > 0 ) {\n\n\t\t\tconst rotationTrack = this.generateRotationTrack( rawTracks.modelName, rawTracks.R.curves, initialRotation, rawTracks.preRotation, rawTracks.postRotation, rawTracks.eulerOrder );\n\t\t\tif ( rotationTrack !== undefined ) tracks.push( rotationTrack );\n\n\t\t}\n\n\t\tif ( rawTracks.S !== undefined && Object.keys( rawTracks.S.curves ).length > 0 ) {\n\n\t\t\tconst scaleTrack = this.generateVectorTrack( rawTracks.modelName, rawTracks.S.curves, initialScale, 'scale' );\n\t\t\tif ( scaleTrack !== undefined ) tracks.push( scaleTrack );\n\n\t\t}\n\n\t\tif ( rawTracks.DeformPercent !== undefined ) {\n\n\t\t\tconst morphTrack = this.generateMorphTrack( rawTracks );\n\t\t\tif ( morphTrack !== undefined ) tracks.push( morphTrack );\n\n\t\t}\n\n\t\treturn tracks;\n\n\t}\n\n\tgenerateVectorTrack( modelName, curves, initialValue, type ) {\n\n\t\tconst times = this.getTimesForAllAxes( curves );\n\t\tconst values = this.getKeyframeTrackValues( times, curves, initialValue );\n\n\t\treturn new three__WEBPACK_IMPORTED_MODULE_0__.VectorKeyframeTrack( modelName + '.' + type, times, values );\n\n\t}\n\n\tgenerateRotationTrack( modelName, curves, initialValue, preRotation, postRotation, eulerOrder ) {\n\n\t\tif ( curves.x !== undefined ) {\n\n\t\t\tthis.interpolateRotations( curves.x );\n\t\t\tcurves.x.values = curves.x.values.map( three__WEBPACK_IMPORTED_MODULE_0__.MathUtils.degToRad );\n\n\t\t}\n\n\t\tif ( curves.y !== undefined ) {\n\n\t\t\tthis.interpolateRotations( curves.y );\n\t\t\tcurves.y.values = curves.y.values.map( three__WEBPACK_IMPORTED_MODULE_0__.MathUtils.degToRad );\n\n\t\t}\n\n\t\tif ( curves.z !== undefined ) {\n\n\t\t\tthis.interpolateRotations( curves.z );\n\t\t\tcurves.z.values = curves.z.values.map( three__WEBPACK_IMPORTED_MODULE_0__.MathUtils.degToRad );\n\n\t\t}\n\n\t\tconst times = this.getTimesForAllAxes( curves );\n\t\tconst values = this.getKeyframeTrackValues( times, curves, initialValue );\n\n\t\tif ( preRotation !== undefined ) {\n\n\t\t\tpreRotation = preRotation.map( three__WEBPACK_IMPORTED_MODULE_0__.MathUtils.degToRad );\n\t\t\tpreRotation.push( eulerOrder );\n\n\t\t\tpreRotation = new three__WEBPACK_IMPORTED_MODULE_0__.Euler().fromArray( preRotation );\n\t\t\tpreRotation = new three__WEBPACK_IMPORTED_MODULE_0__.Quaternion().setFromEuler( preRotation );\n\n\t\t}\n\n\t\tif ( postRotation !== undefined ) {\n\n\t\t\tpostRotation = postRotation.map( three__WEBPACK_IMPORTED_MODULE_0__.MathUtils.degToRad );\n\t\t\tpostRotation.push( eulerOrder );\n\n\t\t\tpostRotation = new three__WEBPACK_IMPORTED_MODULE_0__.Euler().fromArray( postRotation );\n\t\t\tpostRotation = new three__WEBPACK_IMPORTED_MODULE_0__.Quaternion().setFromEuler( postRotation ).invert();\n\n\t\t}\n\n\t\tconst quaternion = new three__WEBPACK_IMPORTED_MODULE_0__.Quaternion();\n\t\tconst euler = new three__WEBPACK_IMPORTED_MODULE_0__.Euler();\n\n\t\tconst quaternionValues = [];\n\n\t\tfor ( let i = 0; i < values.length; i += 3 ) {\n\n\t\t\teuler.set( values[ i ], values[ i + 1 ], values[ i + 2 ], eulerOrder );\n\n\t\t\tquaternion.setFromEuler( euler );\n\n\t\t\tif ( preRotation !== undefined ) quaternion.premultiply( preRotation );\n\t\t\tif ( postRotation !== undefined ) quaternion.multiply( postRotation );\n\n\t\t\tquaternion.toArray( quaternionValues, ( i / 3 ) * 4 );\n\n\t\t}\n\n\t\treturn new three__WEBPACK_IMPORTED_MODULE_0__.QuaternionKeyframeTrack( modelName + '.quaternion', times, quaternionValues );\n\n\t}\n\n\tgenerateMorphTrack( rawTracks ) {\n\n\t\tconst curves = rawTracks.DeformPercent.curves.morph;\n\t\tconst values = curves.values.map( function ( val ) {\n\n\t\t\treturn val / 100;\n\n\t\t} );\n\n\t\tconst morphNum = sceneGraph.getObjectByName( rawTracks.modelName ).morphTargetDictionary[ rawTracks.morphName ];\n\n\t\treturn new three__WEBPACK_IMPORTED_MODULE_0__.NumberKeyframeTrack( rawTracks.modelName + '.morphTargetInfluences[' + morphNum + ']', curves.times, values );\n\n\t}\n\n\t// For all animated objects, times are defined separately for each axis\n\t// Here we'll combine the times into one sorted array without duplicates\n\tgetTimesForAllAxes( curves ) {\n\n\t\tlet times = [];\n\n\t\t// first join together the times for each axis, if defined\n\t\tif ( curves.x !== undefined ) times = times.concat( curves.x.times );\n\t\tif ( curves.y !== undefined ) times = times.concat( curves.y.times );\n\t\tif ( curves.z !== undefined ) times = times.concat( curves.z.times );\n\n\t\t// then sort them\n\t\ttimes = times.sort( function ( a, b ) {\n\n\t\t\treturn a - b;\n\n\t\t} );\n\n\t\t// and remove duplicates\n\t\tif ( times.length > 1 ) {\n\n\t\t\tlet targetIndex = 1;\n\t\t\tlet lastValue = times[ 0 ];\n\t\t\tfor ( let i = 1; i < times.length; i ++ ) {\n\n\t\t\t\tconst currentValue = times[ i ];\n\t\t\t\tif ( currentValue !== lastValue ) {\n\n\t\t\t\t\ttimes[ targetIndex ] = currentValue;\n\t\t\t\t\tlastValue = currentValue;\n\t\t\t\t\ttargetIndex ++;\n\n\t\t\t\t}\n\n\t\t\t}\n\n\t\t\ttimes = times.slice( 0, targetIndex );\n\n\t\t}\n\n\t\treturn times;\n\n\t}\n\n\tgetKeyframeTrackValues( times, curves, initialValue ) {\n\n\t\tconst prevValue = initialValue;\n\n\t\tconst values = [];\n\n\t\tlet xIndex = - 1;\n\t\tlet yIndex = - 1;\n\t\tlet zIndex = - 1;\n\n\t\ttimes.forEach( function ( time ) {\n\n\t\t\tif ( curves.x ) xIndex = curves.x.times.indexOf( time );\n\t\t\tif ( curves.y ) yIndex = curves.y.times.indexOf( time );\n\t\t\tif ( curves.z ) zIndex = curves.z.times.indexOf( time );\n\n\t\t\t// if there is an x value defined for this frame, use that\n\t\t\tif ( xIndex !== - 1 ) {\n\n\t\t\t\tconst xValue = curves.x.values[ xIndex ];\n\t\t\t\tvalues.push( xValue );\n\t\t\t\tprevValue[ 0 ] = xValue;\n\n\t\t\t} else {\n\n\t\t\t\t// otherwise use the x value from the previous frame\n\t\t\t\tvalues.push( prevValue[ 0 ] );\n\n\t\t\t}\n\n\t\t\tif ( yIndex !== - 1 ) {\n\n\t\t\t\tconst yValue = curves.y.values[ yIndex ];\n\t\t\t\tvalues.push( yValue );\n\t\t\t\tprevValue[ 1 ] = yValue;\n\n\t\t\t} else {\n\n\t\t\t\tvalues.push( prevValue[ 1 ] );\n\n\t\t\t}\n\n\t\t\tif ( zIndex !== - 1 ) {\n\n\t\t\t\tconst zValue = curves.z.values[ zIndex ];\n\t\t\t\tvalues.push( zValue );\n\t\t\t\tprevValue[ 2 ] = zValue;\n\n\t\t\t} else {\n\n\t\t\t\tvalues.push( prevValue[ 2 ] );\n\n\t\t\t}\n\n\t\t} );\n\n\t\treturn values;\n\n\t}\n\n\t// Rotations are defined as Euler angles which can have values  of any size\n\t// These will be converted to quaternions which don't support values greater than\n\t// PI, so we'll interpolate large rotations\n\tinterpolateRotations( curve ) {\n\n\t\tfor ( let i = 1; i < curve.values.length; i ++ ) {\n\n\t\t\tconst initialValue = curve.values[ i - 1 ];\n\t\t\tconst valuesSpan = curve.values[ i ] - initialValue;\n\n\t\t\tconst absoluteSpan = Math.abs( valuesSpan );\n\n\t\t\tif ( absoluteSpan >= 180 ) {\n\n\t\t\t\tconst numSubIntervals = absoluteSpan / 180;\n\n\t\t\t\tconst step = valuesSpan / numSubIntervals;\n\t\t\t\tlet nextValue = initialValue + step;\n\n\t\t\t\tconst initialTime = curve.times[ i - 1 ];\n\t\t\t\tconst timeSpan = curve.times[ i ] - initialTime;\n\t\t\t\tconst interval = timeSpan / numSubIntervals;\n\t\t\t\tlet nextTime = initialTime + interval;\n\n\t\t\t\tconst interpolatedTimes = [];\n\t\t\t\tconst interpolatedValues = [];\n\n\t\t\t\twhile ( nextTime < curve.times[ i ] ) {\n\n\t\t\t\t\tinterpolatedTimes.push( nextTime );\n\t\t\t\t\tnextTime += interval;\n\n\t\t\t\t\tinterpolatedValues.push( nextValue );\n\t\t\t\t\tnextValue += step;\n\n\t\t\t\t}\n\n\t\t\t\tcurve.times = inject( curve.times, i, interpolatedTimes );\n\t\t\t\tcurve.values = inject( curve.values, i, interpolatedValues );\n\n\t\t\t}\n\n\t\t}\n\n\t}\n\n}\n\n// parse an FBX file in ASCII format\nclass TextParser {\n\n\tgetPrevNode() {\n\n\t\treturn this.nodeStack[ this.currentIndent - 2 ];\n\n\t}\n\n\tgetCurrentNode() {\n\n\t\treturn this.nodeStack[ this.currentIndent - 1 ];\n\n\t}\n\n\tgetCurrentProp() {\n\n\t\treturn this.currentProp;\n\n\t}\n\n\tpushStack( node ) {\n\n\t\tthis.nodeStack.push( node );\n\t\tthis.currentIndent += 1;\n\n\t}\n\n\tpopStack() {\n\n\t\tthis.nodeStack.pop();\n\t\tthis.currentIndent -= 1;\n\n\t}\n\n\tsetCurrentProp( val, name ) {\n\n\t\tthis.currentProp = val;\n\t\tthis.currentPropName = name;\n\n\t}\n\n\tparse( text ) {\n\n\t\tthis.currentIndent = 0;\n\n\t\tthis.allNodes = new FBXTree();\n\t\tthis.nodeStack = [];\n\t\tthis.currentProp = [];\n\t\tthis.currentPropName = '';\n\n\t\tconst scope = this;\n\n\t\tconst split = text.split( /[\\r\\n]+/ );\n\n\t\tsplit.forEach( function ( line, i ) {\n\n\t\t\tconst matchComment = line.match( /^[\\s\\t]*;/ );\n\t\t\tconst matchEmpty = line.match( /^[\\s\\t]*$/ );\n\n\t\t\tif ( matchComment || matchEmpty ) return;\n\n\t\t\tconst matchBeginning = line.match( '^\\\\t{' + scope.currentIndent + '}(\\\\w+):(.*){', '' );\n\t\t\tconst matchProperty = line.match( '^\\\\t{' + ( scope.currentIndent ) + '}(\\\\w+):[\\\\s\\\\t\\\\r\\\\n](.*)' );\n\t\t\tconst matchEnd = line.match( '^\\\\t{' + ( scope.currentIndent - 1 ) + '}}' );\n\n\t\t\tif ( matchBeginning ) {\n\n\t\t\t\tscope.parseNodeBegin( line, matchBeginning );\n\n\t\t\t} else if ( matchProperty ) {\n\n\t\t\t\tscope.parseNodeProperty( line, matchProperty, split[ ++ i ] );\n\n\t\t\t} else if ( matchEnd ) {\n\n\t\t\t\tscope.popStack();\n\n\t\t\t} else if ( line.match( /^[^\\s\\t}]/ ) ) {\n\n\t\t\t\t// large arrays are split over multiple lines terminated with a ',' character\n\t\t\t\t// if this is encountered the line needs to be joined to the previous line\n\t\t\t\tscope.parseNodePropertyContinued( line );\n\n\t\t\t}\n\n\t\t} );\n\n\t\treturn this.allNodes;\n\n\t}\n\n\tparseNodeBegin( line, property ) {\n\n\t\tconst nodeName = property[ 1 ].trim().replace( /^\"/, '' ).replace( /\"$/, '' );\n\n\t\tconst nodeAttrs = property[ 2 ].split( ',' ).map( function ( attr ) {\n\n\t\t\treturn attr.trim().replace( /^\"/, '' ).replace( /\"$/, '' );\n\n\t\t} );\n\n\t\tconst node = { name: nodeName };\n\t\tconst attrs = this.parseNodeAttr( nodeAttrs );\n\n\t\tconst currentNode = this.getCurrentNode();\n\n\t\t// a top node\n\t\tif ( this.currentIndent === 0 ) {\n\n\t\t\tthis.allNodes.add( nodeName, node );\n\n\t\t} else { // a subnode\n\n\t\t\t// if the subnode already exists, append it\n\t\t\tif ( nodeName in currentNode ) {\n\n\t\t\t\t// special case Pose needs PoseNodes as an array\n\t\t\t\tif ( nodeName === 'PoseNode' ) {\n\n\t\t\t\t\tcurrentNode.PoseNode.push( node );\n\n\t\t\t\t} else if ( currentNode[ nodeName ].id !== undefined ) {\n\n\t\t\t\t\tcurrentNode[ nodeName ] = {};\n\t\t\t\t\tcurrentNode[ nodeName ][ currentNode[ nodeName ].id ] = currentNode[ nodeName ];\n\n\t\t\t\t}\n\n\t\t\t\tif ( attrs.id !== '' ) currentNode[ nodeName ][ attrs.id ] = node;\n\n\t\t\t} else if ( typeof attrs.id === 'number' ) {\n\n\t\t\t\tcurrentNode[ nodeName ] = {};\n\t\t\t\tcurrentNode[ nodeName ][ attrs.id ] = node;\n\n\t\t\t} else if ( nodeName !== 'Properties70' ) {\n\n\t\t\t\tif ( nodeName === 'PoseNode' )\tcurrentNode[ nodeName ] = [ node ];\n\t\t\t\telse currentNode[ nodeName ] = node;\n\n\t\t\t}\n\n\t\t}\n\n\t\tif ( typeof attrs.id === 'number' ) node.id = attrs.id;\n\t\tif ( attrs.name !== '' ) node.attrName = attrs.name;\n\t\tif ( attrs.type !== '' ) node.attrType = attrs.type;\n\n\t\tthis.pushStack( node );\n\n\t}\n\n\tparseNodeAttr( attrs ) {\n\n\t\tlet id = attrs[ 0 ];\n\n\t\tif ( attrs[ 0 ] !== '' ) {\n\n\t\t\tid = parseInt( attrs[ 0 ] );\n\n\t\t\tif ( isNaN( id ) ) {\n\n\t\t\t\tid = attrs[ 0 ];\n\n\t\t\t}\n\n\t\t}\n\n\t\tlet name = '', type = '';\n\n\t\tif ( attrs.length > 1 ) {\n\n\t\t\tname = attrs[ 1 ].replace( /^(\\w+)::/, '' );\n\t\t\ttype = attrs[ 2 ];\n\n\t\t}\n\n\t\treturn { id: id, name: name, type: type };\n\n\t}\n\n\tparseNodeProperty( line, property, contentLine ) {\n\n\t\tlet propName = property[ 1 ].replace( /^\"/, '' ).replace( /\"$/, '' ).trim();\n\t\tlet propValue = property[ 2 ].replace( /^\"/, '' ).replace( /\"$/, '' ).trim();\n\n\t\t// for special case: base64 image data follows \"Content: ,\" line\n\t\t//\tContent: ,\n\t\t//\t \"/9j/4RDaRXhpZgAATU0A...\"\n\t\tif ( propName === 'Content' && propValue === ',' ) {\n\n\t\t\tpropValue = contentLine.replace( /\"/g, '' ).replace( /,$/, '' ).trim();\n\n\t\t}\n\n\t\tconst currentNode = this.getCurrentNode();\n\t\tconst parentName = currentNode.name;\n\n\t\tif ( parentName === 'Properties70' ) {\n\n\t\t\tthis.parseNodeSpecialProperty( line, propName, propValue );\n\t\t\treturn;\n\n\t\t}\n\n\t\t// Connections\n\t\tif ( propName === 'C' ) {\n\n\t\t\tconst connProps = propValue.split( ',' ).slice( 1 );\n\t\t\tconst from = parseInt( connProps[ 0 ] );\n\t\t\tconst to = parseInt( connProps[ 1 ] );\n\n\t\t\tlet rest = propValue.split( ',' ).slice( 3 );\n\n\t\t\trest = rest.map( function ( elem ) {\n\n\t\t\t\treturn elem.trim().replace( /^\"/, '' );\n\n\t\t\t} );\n\n\t\t\tpropName = 'connections';\n\t\t\tpropValue = [ from, to ];\n\t\t\tappend( propValue, rest );\n\n\t\t\tif ( currentNode[ propName ] === undefined ) {\n\n\t\t\t\tcurrentNode[ propName ] = [];\n\n\t\t\t}\n\n\t\t}\n\n\t\t// Node\n\t\tif ( propName === 'Node' ) currentNode.id = propValue;\n\n\t\t// connections\n\t\tif ( propName in currentNode && Array.isArray( currentNode[ propName ] ) ) {\n\n\t\t\tcurrentNode[ propName ].push( propValue );\n\n\t\t} else {\n\n\t\t\tif ( propName !== 'a' ) currentNode[ propName ] = propValue;\n\t\t\telse currentNode.a = propValue;\n\n\t\t}\n\n\t\tthis.setCurrentProp( currentNode, propName );\n\n\t\t// convert string to array, unless it ends in ',' in which case more will be added to it\n\t\tif ( propName === 'a' && propValue.slice( - 1 ) !== ',' ) {\n\n\t\t\tcurrentNode.a = parseNumberArray( propValue );\n\n\t\t}\n\n\t}\n\n\tparseNodePropertyContinued( line ) {\n\n\t\tconst currentNode = this.getCurrentNode();\n\n\t\tcurrentNode.a += line;\n\n\t\t// if the line doesn't end in ',' we have reached the end of the property value\n\t\t// so convert the string to an array\n\t\tif ( line.slice( - 1 ) !== ',' ) {\n\n\t\t\tcurrentNode.a = parseNumberArray( currentNode.a );\n\n\t\t}\n\n\t}\n\n\t// parse \"Property70\"\n\tparseNodeSpecialProperty( line, propName, propValue ) {\n\n\t\t// split this\n\t\t// P: \"Lcl Scaling\", \"Lcl Scaling\", \"\", \"A\",1,1,1\n\t\t// into array like below\n\t\t// [\"Lcl Scaling\", \"Lcl Scaling\", \"\", \"A\", \"1,1,1\" ]\n\t\tconst props = propValue.split( '\",' ).map( function ( prop ) {\n\n\t\t\treturn prop.trim().replace( /^\\\"/, '' ).replace( /\\s/, '_' );\n\n\t\t} );\n\n\t\tconst innerPropName = props[ 0 ];\n\t\tconst innerPropType1 = props[ 1 ];\n\t\tconst innerPropType2 = props[ 2 ];\n\t\tconst innerPropFlag = props[ 3 ];\n\t\tlet innerPropValue = props[ 4 ];\n\n\t\t// cast values where needed, otherwise leave as strings\n\t\tswitch ( innerPropType1 ) {\n\n\t\t\tcase 'int':\n\t\t\tcase 'enum':\n\t\t\tcase 'bool':\n\t\t\tcase 'ULongLong':\n\t\t\tcase 'double':\n\t\t\tcase 'Number':\n\t\t\tcase 'FieldOfView':\n\t\t\t\tinnerPropValue = parseFloat( innerPropValue );\n\t\t\t\tbreak;\n\n\t\t\tcase 'Color':\n\t\t\tcase 'ColorRGB':\n\t\t\tcase 'Vector3D':\n\t\t\tcase 'Lcl_Translation':\n\t\t\tcase 'Lcl_Rotation':\n\t\t\tcase 'Lcl_Scaling':\n\t\t\t\tinnerPropValue = parseNumberArray( innerPropValue );\n\t\t\t\tbreak;\n\n\t\t}\n\n\t\t// CAUTION: these props must append to parent's parent\n\t\tthis.getPrevNode()[ innerPropName ] = {\n\n\t\t\t'type': innerPropType1,\n\t\t\t'type2': innerPropType2,\n\t\t\t'flag': innerPropFlag,\n\t\t\t'value': innerPropValue\n\n\t\t};\n\n\t\tthis.setCurrentProp( this.getPrevNode(), innerPropName );\n\n\t}\n\n}\n\n// Parse an FBX file in Binary format\nclass BinaryParser {\n\n\tparse( buffer ) {\n\n\t\tconst reader = new BinaryReader( buffer );\n\t\treader.skip( 23 ); // skip magic 23 bytes\n\n\t\tconst version = reader.getUint32();\n\n\t\tif ( version < 6400 ) {\n\n\t\t\tthrow new Error( 'THREE.FBXLoader: FBX version not supported, FileVersion: ' + version );\n\n\t\t}\n\n\t\tconst allNodes = new FBXTree();\n\n\t\twhile ( ! this.endOfContent( reader ) ) {\n\n\t\t\tconst node = this.parseNode( reader, version );\n\t\t\tif ( node !== null ) allNodes.add( node.name, node );\n\n\t\t}\n\n\t\treturn allNodes;\n\n\t}\n\n\t// Check if reader has reached the end of content.\n\tendOfContent( reader ) {\n\n\t\t// footer size: 160bytes + 16-byte alignment padding\n\t\t// - 16bytes: magic\n\t\t// - padding til 16-byte alignment (at least 1byte?)\n\t\t//\t(seems like some exporters embed fixed 15 or 16bytes?)\n\t\t// - 4bytes: magic\n\t\t// - 4bytes: version\n\t\t// - 120bytes: zero\n\t\t// - 16bytes: magic\n\t\tif ( reader.size() % 16 === 0 ) {\n\n\t\t\treturn ( ( reader.getOffset() + 160 + 16 ) & ~ 0xf ) >= reader.size();\n\n\t\t} else {\n\n\t\t\treturn reader.getOffset() + 160 + 16 >= reader.size();\n\n\t\t}\n\n\t}\n\n\t// recursively parse nodes until the end of the file is reached\n\tparseNode( reader, version ) {\n\n\t\tconst node = {};\n\n\t\t// The first three data sizes depends on version.\n\t\tconst endOffset = ( version >= 7500 ) ? reader.getUint64() : reader.getUint32();\n\t\tconst numProperties = ( version >= 7500 ) ? reader.getUint64() : reader.getUint32();\n\n\t\t( version >= 7500 ) ? reader.getUint64() : reader.getUint32(); // the returned propertyListLen is not used\n\n\t\tconst nameLen = reader.getUint8();\n\t\tconst name = reader.getString( nameLen );\n\n\t\t// Regards this node as NULL-record if endOffset is zero\n\t\tif ( endOffset === 0 ) return null;\n\n\t\tconst propertyList = [];\n\n\t\tfor ( let i = 0; i < numProperties; i ++ ) {\n\n\t\t\tpropertyList.push( this.parseProperty( reader ) );\n\n\t\t}\n\n\t\t// Regards the first three elements in propertyList as id, attrName, and attrType\n\t\tconst id = propertyList.length > 0 ? propertyList[ 0 ] : '';\n\t\tconst attrName = propertyList.length > 1 ? propertyList[ 1 ] : '';\n\t\tconst attrType = propertyList.length > 2 ? propertyList[ 2 ] : '';\n\n\t\t// check if this node represents just a single property\n\t\t// like (name, 0) set or (name2, [0, 1, 2]) set of {name: 0, name2: [0, 1, 2]}\n\t\tnode.singleProperty = ( numProperties === 1 && reader.getOffset() === endOffset ) ? true : false;\n\n\t\twhile ( endOffset > reader.getOffset() ) {\n\n\t\t\tconst subNode = this.parseNode( reader, version );\n\n\t\t\tif ( subNode !== null ) this.parseSubNode( name, node, subNode );\n\n\t\t}\n\n\t\tnode.propertyList = propertyList; // raw property list used by parent\n\n\t\tif ( typeof id === 'number' ) node.id = id;\n\t\tif ( attrName !== '' ) node.attrName = attrName;\n\t\tif ( attrType !== '' ) node.attrType = attrType;\n\t\tif ( name !== '' ) node.name = name;\n\n\t\treturn node;\n\n\t}\n\n\tparseSubNode( name, node, subNode ) {\n\n\t\t// special case: child node is single property\n\t\tif ( subNode.singleProperty === true ) {\n\n\t\t\tconst value = subNode.propertyList[ 0 ];\n\n\t\t\tif ( Array.isArray( value ) ) {\n\n\t\t\t\tnode[ subNode.name ] = subNode;\n\n\t\t\t\tsubNode.a = value;\n\n\t\t\t} else {\n\n\t\t\t\tnode[ subNode.name ] = value;\n\n\t\t\t}\n\n\t\t} else if ( name === 'Connections' && subNode.name === 'C' ) {\n\n\t\t\tconst array = [];\n\n\t\t\tsubNode.propertyList.forEach( function ( property, i ) {\n\n\t\t\t\t// first Connection is FBX type (OO, OP, etc.). We'll discard these\n\t\t\t\tif ( i !== 0 ) array.push( property );\n\n\t\t\t} );\n\n\t\t\tif ( node.connections === undefined ) {\n\n\t\t\t\tnode.connections = [];\n\n\t\t\t}\n\n\t\t\tnode.connections.push( array );\n\n\t\t} else if ( subNode.name === 'Properties70' ) {\n\n\t\t\tconst keys = Object.keys( subNode );\n\n\t\t\tkeys.forEach( function ( key ) {\n\n\t\t\t\tnode[ key ] = subNode[ key ];\n\n\t\t\t} );\n\n\t\t} else if ( name === 'Properties70' && subNode.name === 'P' ) {\n\n\t\t\tlet innerPropName = subNode.propertyList[ 0 ];\n\t\t\tlet innerPropType1 = subNode.propertyList[ 1 ];\n\t\t\tconst innerPropType2 = subNode.propertyList[ 2 ];\n\t\t\tconst innerPropFlag = subNode.propertyList[ 3 ];\n\t\t\tlet innerPropValue;\n\n\t\t\tif ( innerPropName.indexOf( 'Lcl ' ) === 0 ) innerPropName = innerPropName.replace( 'Lcl ', 'Lcl_' );\n\t\t\tif ( innerPropType1.indexOf( 'Lcl ' ) === 0 ) innerPropType1 = innerPropType1.replace( 'Lcl ', 'Lcl_' );\n\n\t\t\tif ( innerPropType1 === 'Color' || innerPropType1 === 'ColorRGB' || innerPropType1 === 'Vector' || innerPropType1 === 'Vector3D' || innerPropType1.indexOf( 'Lcl_' ) === 0 ) {\n\n\t\t\t\tinnerPropValue = [\n\t\t\t\t\tsubNode.propertyList[ 4 ],\n\t\t\t\t\tsubNode.propertyList[ 5 ],\n\t\t\t\t\tsubNode.propertyList[ 6 ]\n\t\t\t\t];\n\n\t\t\t} else {\n\n\t\t\t\tinnerPropValue = subNode.propertyList[ 4 ];\n\n\t\t\t}\n\n\t\t\t// this will be copied to parent, see above\n\t\t\tnode[ innerPropName ] = {\n\n\t\t\t\t'type': innerPropType1,\n\t\t\t\t'type2': innerPropType2,\n\t\t\t\t'flag': innerPropFlag,\n\t\t\t\t'value': innerPropValue\n\n\t\t\t};\n\n\t\t} else if ( node[ subNode.name ] === undefined ) {\n\n\t\t\tif ( typeof subNode.id === 'number' ) {\n\n\t\t\t\tnode[ subNode.name ] = {};\n\t\t\t\tnode[ subNode.name ][ subNode.id ] = subNode;\n\n\t\t\t} else {\n\n\t\t\t\tnode[ subNode.name ] = subNode;\n\n\t\t\t}\n\n\t\t} else {\n\n\t\t\tif ( subNode.name === 'PoseNode' ) {\n\n\t\t\t\tif ( ! Array.isArray( node[ subNode.name ] ) ) {\n\n\t\t\t\t\tnode[ subNode.name ] = [ node[ subNode.name ] ];\n\n\t\t\t\t}\n\n\t\t\t\tnode[ subNode.name ].push( subNode );\n\n\t\t\t} else if ( node[ subNode.name ][ subNode.id ] === undefined ) {\n\n\t\t\t\tnode[ subNode.name ][ subNode.id ] = subNode;\n\n\t\t\t}\n\n\t\t}\n\n\t}\n\n\tparseProperty( reader ) {\n\n\t\tconst type = reader.getString( 1 );\n\t\tlet length;\n\n\t\tswitch ( type ) {\n\n\t\t\tcase 'C':\n\t\t\t\treturn reader.getBoolean();\n\n\t\t\tcase 'D':\n\t\t\t\treturn reader.getFloat64();\n\n\t\t\tcase 'F':\n\t\t\t\treturn reader.getFloat32();\n\n\t\t\tcase 'I':\n\t\t\t\treturn reader.getInt32();\n\n\t\t\tcase 'L':\n\t\t\t\treturn reader.getInt64();\n\n\t\t\tcase 'R':\n\t\t\t\tlength = reader.getUint32();\n\t\t\t\treturn reader.getArrayBuffer( length );\n\n\t\t\tcase 'S':\n\t\t\t\tlength = reader.getUint32();\n\t\t\t\treturn reader.getString( length );\n\n\t\t\tcase 'Y':\n\t\t\t\treturn reader.getInt16();\n\n\t\t\tcase 'b':\n\t\t\tcase 'c':\n\t\t\tcase 'd':\n\t\t\tcase 'f':\n\t\t\tcase 'i':\n\t\t\tcase 'l':\n\n\t\t\t\tconst arrayLength = reader.getUint32();\n\t\t\t\tconst encoding = reader.getUint32(); // 0: non-compressed, 1: compressed\n\t\t\t\tconst compressedLength = reader.getUint32();\n\n\t\t\t\tif ( encoding === 0 ) {\n\n\t\t\t\t\tswitch ( type ) {\n\n\t\t\t\t\t\tcase 'b':\n\t\t\t\t\t\tcase 'c':\n\t\t\t\t\t\t\treturn reader.getBooleanArray( arrayLength );\n\n\t\t\t\t\t\tcase 'd':\n\t\t\t\t\t\t\treturn reader.getFloat64Array( arrayLength );\n\n\t\t\t\t\t\tcase 'f':\n\t\t\t\t\t\t\treturn reader.getFloat32Array( arrayLength );\n\n\t\t\t\t\t\tcase 'i':\n\t\t\t\t\t\t\treturn reader.getInt32Array( arrayLength );\n\n\t\t\t\t\t\tcase 'l':\n\t\t\t\t\t\t\treturn reader.getInt64Array( arrayLength );\n\n\t\t\t\t\t}\n\n\t\t\t\t}\n\n\t\t\t\tif ( typeof _libs_fflate_module_js__WEBPACK_IMPORTED_MODULE_2__ === 'undefined' ) {\n\n\t\t\t\t\tconsole.error( 'THREE.FBXLoader: External library fflate.min.js required.' );\n\n\t\t\t\t}\n\n\t\t\t\tconst data = _libs_fflate_module_js__WEBPACK_IMPORTED_MODULE_2__.unzlibSync( new Uint8Array( reader.getArrayBuffer( compressedLength ) ) ); // eslint-disable-line no-undef\n\t\t\t\tconst reader2 = new BinaryReader( data.buffer );\n\n\t\t\t\tswitch ( type ) {\n\n\t\t\t\t\tcase 'b':\n\t\t\t\t\tcase 'c':\n\t\t\t\t\t\treturn reader2.getBooleanArray( arrayLength );\n\n\t\t\t\t\tcase 'd':\n\t\t\t\t\t\treturn reader2.getFloat64Array( arrayLength );\n\n\t\t\t\t\tcase 'f':\n\t\t\t\t\t\treturn reader2.getFloat32Array( arrayLength );\n\n\t\t\t\t\tcase 'i':\n\t\t\t\t\t\treturn reader2.getInt32Array( arrayLength );\n\n\t\t\t\t\tcase 'l':\n\t\t\t\t\t\treturn reader2.getInt64Array( arrayLength );\n\n\t\t\t\t}\n\n\t\t\t\tbreak; // cannot happen but is required by the DeepScan\n\n\t\t\tdefault:\n\t\t\t\tthrow new Error( 'THREE.FBXLoader: Unknown property type ' + type );\n\n\t\t}\n\n\t}\n\n}\n\nclass BinaryReader {\n\n\tconstructor( buffer, littleEndian ) {\n\n\t\tthis.dv = new DataView( buffer );\n\t\tthis.offset = 0;\n\t\tthis.littleEndian = ( littleEndian !== undefined ) ? littleEndian : true;\n\n\t}\n\n\tgetOffset() {\n\n\t\treturn this.offset;\n\n\t}\n\n\tsize() {\n\n\t\treturn this.dv.buffer.byteLength;\n\n\t}\n\n\tskip( length ) {\n\n\t\tthis.offset += length;\n\n\t}\n\n\t// seems like true/false representation depends on exporter.\n\t// true: 1 or 'Y'(=0x59), false: 0 or 'T'(=0x54)\n\t// then sees LSB.\n\tgetBoolean() {\n\n\t\treturn ( this.getUint8() & 1 ) === 1;\n\n\t}\n\n\tgetBooleanArray( size ) {\n\n\t\tconst a = [];\n\n\t\tfor ( let i = 0; i < size; i ++ ) {\n\n\t\t\ta.push( this.getBoolean() );\n\n\t\t}\n\n\t\treturn a;\n\n\t}\n\n\tgetUint8() {\n\n\t\tconst value = this.dv.getUint8( this.offset );\n\t\tthis.offset += 1;\n\t\treturn value;\n\n\t}\n\n\tgetInt16() {\n\n\t\tconst value = this.dv.getInt16( this.offset, this.littleEndian );\n\t\tthis.offset += 2;\n\t\treturn value;\n\n\t}\n\n\tgetInt32() {\n\n\t\tconst value = this.dv.getInt32( this.offset, this.littleEndian );\n\t\tthis.offset += 4;\n\t\treturn value;\n\n\t}\n\n\tgetInt32Array( size ) {\n\n\t\tconst a = [];\n\n\t\tfor ( let i = 0; i < size; i ++ ) {\n\n\t\t\ta.push( this.getInt32() );\n\n\t\t}\n\n\t\treturn a;\n\n\t}\n\n\tgetUint32() {\n\n\t\tconst value = this.dv.getUint32( this.offset, this.littleEndian );\n\t\tthis.offset += 4;\n\t\treturn value;\n\n\t}\n\n\t// JavaScript doesn't support 64-bit integer so calculate this here\n\t// 1 << 32 will return 1 so using multiply operation instead here.\n\t// There's a possibility that this method returns wrong value if the value\n\t// is out of the range between Number.MAX_SAFE_INTEGER and Number.MIN_SAFE_INTEGER.\n\t// TODO: safely handle 64-bit integer\n\tgetInt64() {\n\n\t\tlet low, high;\n\n\t\tif ( this.littleEndian ) {\n\n\t\t\tlow = this.getUint32();\n\t\t\thigh = this.getUint32();\n\n\t\t} else {\n\n\t\t\thigh = this.getUint32();\n\t\t\tlow = this.getUint32();\n\n\t\t}\n\n\t\t// calculate negative value\n\t\tif ( high & 0x80000000 ) {\n\n\t\t\thigh = ~ high & 0xFFFFFFFF;\n\t\t\tlow = ~ low & 0xFFFFFFFF;\n\n\t\t\tif ( low === 0xFFFFFFFF ) high = ( high + 1 ) & 0xFFFFFFFF;\n\n\t\t\tlow = ( low + 1 ) & 0xFFFFFFFF;\n\n\t\t\treturn - ( high * 0x100000000 + low );\n\n\t\t}\n\n\t\treturn high * 0x100000000 + low;\n\n\t}\n\n\tgetInt64Array( size ) {\n\n\t\tconst a = [];\n\n\t\tfor ( let i = 0; i < size; i ++ ) {\n\n\t\t\ta.push( this.getInt64() );\n\n\t\t}\n\n\t\treturn a;\n\n\t}\n\n\t// Note: see getInt64() comment\n\tgetUint64() {\n\n\t\tlet low, high;\n\n\t\tif ( this.littleEndian ) {\n\n\t\t\tlow = this.getUint32();\n\t\t\thigh = this.getUint32();\n\n\t\t} else {\n\n\t\t\thigh = this.getUint32();\n\t\t\tlow = this.getUint32();\n\n\t\t}\n\n\t\treturn high * 0x100000000 + low;\n\n\t}\n\n\tgetFloat32() {\n\n\t\tconst value = this.dv.getFloat32( this.offset, this.littleEndian );\n\t\tthis.offset += 4;\n\t\treturn value;\n\n\t}\n\n\tgetFloat32Array( size ) {\n\n\t\tconst a = [];\n\n\t\tfor ( let i = 0; i < size; i ++ ) {\n\n\t\t\ta.push( this.getFloat32() );\n\n\t\t}\n\n\t\treturn a;\n\n\t}\n\n\tgetFloat64() {\n\n\t\tconst value = this.dv.getFloat64( this.offset, this.littleEndian );\n\t\tthis.offset += 8;\n\t\treturn value;\n\n\t}\n\n\tgetFloat64Array( size ) {\n\n\t\tconst a = [];\n\n\t\tfor ( let i = 0; i < size; i ++ ) {\n\n\t\t\ta.push( this.getFloat64() );\n\n\t\t}\n\n\t\treturn a;\n\n\t}\n\n\tgetArrayBuffer( size ) {\n\n\t\tconst value = this.dv.buffer.slice( this.offset, this.offset + size );\n\t\tthis.offset += size;\n\t\treturn value;\n\n\t}\n\n\tgetString( size ) {\n\n\t\t// note: safari 9 doesn't support Uint8Array.indexOf; create intermediate array instead\n\t\tlet a = [];\n\n\t\tfor ( let i = 0; i < size; i ++ ) {\n\n\t\t\ta[ i ] = this.getUint8();\n\n\t\t}\n\n\t\tconst nullByte = a.indexOf( 0 );\n\t\tif ( nullByte >= 0 ) a = a.slice( 0, nullByte );\n\n\t\treturn three__WEBPACK_IMPORTED_MODULE_0__.LoaderUtils.decodeText( new Uint8Array( a ) );\n\n\t}\n\n}\n\n// FBXTree holds a representation of the FBX data, returned by the TextParser ( FBX ASCII format)\n// and BinaryParser( FBX Binary format)\nclass FBXTree {\n\n\tadd( key, val ) {\n\n\t\tthis[ key ] = val;\n\n\t}\n\n}\n\n// ************** UTILITY FUNCTIONS **************\n\nfunction isFbxFormatBinary( buffer ) {\n\n\tconst CORRECT = 'Kaydara\\u0020FBX\\u0020Binary\\u0020\\u0020\\0';\n\n\treturn buffer.byteLength >= CORRECT.length && CORRECT === convertArrayBufferToString( buffer, 0, CORRECT.length );\n\n}\n\nfunction isFbxFormatASCII( text ) {\n\n\tconst CORRECT = [ 'K', 'a', 'y', 'd', 'a', 'r', 'a', '\\\\', 'F', 'B', 'X', '\\\\', 'B', 'i', 'n', 'a', 'r', 'y', '\\\\', '\\\\' ];\n\n\tlet cursor = 0;\n\n\tfunction read( offset ) {\n\n\t\tconst result = text[ offset - 1 ];\n\t\ttext = text.slice( cursor + offset );\n\t\tcursor ++;\n\t\treturn result;\n\n\t}\n\n\tfor ( let i = 0; i < CORRECT.length; ++ i ) {\n\n\t\tconst num = read( 1 );\n\t\tif ( num === CORRECT[ i ] ) {\n\n\t\t\treturn false;\n\n\t\t}\n\n\t}\n\n\treturn true;\n\n}\n\nfunction getFbxVersion( text ) {\n\n\tconst versionRegExp = /FBXVersion: (\\d+)/;\n\tconst match = text.match( versionRegExp );\n\n\tif ( match ) {\n\n\t\tconst version = parseInt( match[ 1 ] );\n\t\treturn version;\n\n\t}\n\n\tthrow new Error( 'THREE.FBXLoader: Cannot find the version number for the file given.' );\n\n}\n\n// Converts FBX ticks into real time seconds.\nfunction convertFBXTimeToSeconds( time ) {\n\n\treturn time / 46186158000;\n\n}\n\nconst dataArray = [];\n\n// extracts the data from the correct position in the FBX array based on indexing type\nfunction getData( polygonVertexIndex, polygonIndex, vertexIndex, infoObject ) {\n\n\tlet index;\n\n\tswitch ( infoObject.mappingType ) {\n\n\t\tcase 'ByPolygonVertex' :\n\t\t\tindex = polygonVertexIndex;\n\t\t\tbreak;\n\t\tcase 'ByPolygon' :\n\t\t\tindex = polygonIndex;\n\t\t\tbreak;\n\t\tcase 'ByVertice' :\n\t\t\tindex = vertexIndex;\n\t\t\tbreak;\n\t\tcase 'AllSame' :\n\t\t\tindex = infoObject.indices[ 0 ];\n\t\t\tbreak;\n\t\tdefault :\n\t\t\tconsole.warn( 'THREE.FBXLoader: unknown attribute mapping type ' + infoObject.mappingType );\n\n\t}\n\n\tif ( infoObject.referenceType === 'IndexToDirect' ) index = infoObject.indices[ index ];\n\n\tconst from = index * infoObject.dataSize;\n\tconst to = from + infoObject.dataSize;\n\n\treturn slice( dataArray, infoObject.buffer, from, to );\n\n}\n\nconst tempEuler = new three__WEBPACK_IMPORTED_MODULE_0__.Euler();\nconst tempVec = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();\n\n// generate transformation from FBX transform data\n// ref: https://help.autodesk.com/view/FBX/2017/ENU/?guid=__files_GUID_10CDD63C_79C1_4F2D_BB28_AD2BE65A02ED_htm\n// ref: http://docs.autodesk.com/FBX/2014/ENU/FBX-SDK-Documentation/index.html?url=cpp_ref/_transformations_2main_8cxx-example.html,topicNumber=cpp_ref__transformations_2main_8cxx_example_htmlfc10a1e1-b18d-4e72-9dc0-70d0f1959f5e\nfunction generateTransform( transformData ) {\n\n\tconst lTranslationM = new three__WEBPACK_IMPORTED_MODULE_0__.Matrix4();\n\tconst lPreRotationM = new three__WEBPACK_IMPORTED_MODULE_0__.Matrix4();\n\tconst lRotationM = new three__WEBPACK_IMPORTED_MODULE_0__.Matrix4();\n\tconst lPostRotationM = new three__WEBPACK_IMPORTED_MODULE_0__.Matrix4();\n\n\tconst lScalingM = new three__WEBPACK_IMPORTED_MODULE_0__.Matrix4();\n\tconst lScalingPivotM = new three__WEBPACK_IMPORTED_MODULE_0__.Matrix4();\n\tconst lScalingOffsetM = new three__WEBPACK_IMPORTED_MODULE_0__.Matrix4();\n\tconst lRotationOffsetM = new three__WEBPACK_IMPORTED_MODULE_0__.Matrix4();\n\tconst lRotationPivotM = new three__WEBPACK_IMPORTED_MODULE_0__.Matrix4();\n\n\tconst lParentGX = new three__WEBPACK_IMPORTED_MODULE_0__.Matrix4();\n\tconst lParentLX = new three__WEBPACK_IMPORTED_MODULE_0__.Matrix4();\n\tconst lGlobalT = new three__WEBPACK_IMPORTED_MODULE_0__.Matrix4();\n\n\tconst inheritType = ( transformData.inheritType ) ? transformData.inheritType : 0;\n\n\tif ( transformData.translation ) lTranslationM.setPosition( tempVec.fromArray( transformData.translation ) );\n\n\tif ( transformData.preRotation ) {\n\n\t\tconst array = transformData.preRotation.map( three__WEBPACK_IMPORTED_MODULE_0__.MathUtils.degToRad );\n\t\tarray.push( transformData.eulerOrder || three__WEBPACK_IMPORTED_MODULE_0__.Euler.DefaultOrder );\n\t\tlPreRotationM.makeRotationFromEuler( tempEuler.fromArray( array ) );\n\n\t}\n\n\tif ( transformData.rotation ) {\n\n\t\tconst array = transformData.rotation.map( three__WEBPACK_IMPORTED_MODULE_0__.MathUtils.degToRad );\n\t\tarray.push( transformData.eulerOrder || three__WEBPACK_IMPORTED_MODULE_0__.Euler.DefaultOrder );\n\t\tlRotationM.makeRotationFromEuler( tempEuler.fromArray( array ) );\n\n\t}\n\n\tif ( transformData.postRotation ) {\n\n\t\tconst array = transformData.postRotation.map( three__WEBPACK_IMPORTED_MODULE_0__.MathUtils.degToRad );\n\t\tarray.push( transformData.eulerOrder || three__WEBPACK_IMPORTED_MODULE_0__.Euler.DefaultOrder );\n\t\tlPostRotationM.makeRotationFromEuler( tempEuler.fromArray( array ) );\n\t\tlPostRotationM.invert();\n\n\t}\n\n\tif ( transformData.scale ) lScalingM.scale( tempVec.fromArray( transformData.scale ) );\n\n\t// Pivots and offsets\n\tif ( transformData.scalingOffset ) lScalingOffsetM.setPosition( tempVec.fromArray( transformData.scalingOffset ) );\n\tif ( transformData.scalingPivot ) lScalingPivotM.setPosition( tempVec.fromArray( transformData.scalingPivot ) );\n\tif ( transformData.rotationOffset ) lRotationOffsetM.setPosition( tempVec.fromArray( transformData.rotationOffset ) );\n\tif ( transformData.rotationPivot ) lRotationPivotM.setPosition( tempVec.fromArray( transformData.rotationPivot ) );\n\n\t// parent transform\n\tif ( transformData.parentMatrixWorld ) {\n\n\t\tlParentLX.copy( transformData.parentMatrix );\n\t\tlParentGX.copy( transformData.parentMatrixWorld );\n\n\t}\n\n\tconst lLRM = lPreRotationM.clone().multiply( lRotationM ).multiply( lPostRotationM );\n\t// Global Rotation\n\tconst lParentGRM = new three__WEBPACK_IMPORTED_MODULE_0__.Matrix4();\n\tlParentGRM.extractRotation( lParentGX );\n\n\t// Global Shear*Scaling\n\tconst lParentTM = new three__WEBPACK_IMPORTED_MODULE_0__.Matrix4();\n\tlParentTM.copyPosition( lParentGX );\n\n\tconst lParentGRSM = lParentTM.clone().invert().multiply( lParentGX );\n\tconst lParentGSM = lParentGRM.clone().invert().multiply( lParentGRSM );\n\tconst lLSM = lScalingM;\n\n\tconst lGlobalRS = new three__WEBPACK_IMPORTED_MODULE_0__.Matrix4();\n\n\tif ( inheritType === 0 ) {\n\n\t\tlGlobalRS.copy( lParentGRM ).multiply( lLRM ).multiply( lParentGSM ).multiply( lLSM );\n\n\t} else if ( inheritType === 1 ) {\n\n\t\tlGlobalRS.copy( lParentGRM ).multiply( lParentGSM ).multiply( lLRM ).multiply( lLSM );\n\n\t} else {\n\n\t\tconst lParentLSM = new three__WEBPACK_IMPORTED_MODULE_0__.Matrix4().scale( new three__WEBPACK_IMPORTED_MODULE_0__.Vector3().setFromMatrixScale( lParentLX ) );\n\t\tconst lParentLSM_inv = lParentLSM.clone().invert();\n\t\tconst lParentGSM_noLocal = lParentGSM.clone().multiply( lParentLSM_inv );\n\n\t\tlGlobalRS.copy( lParentGRM ).multiply( lLRM ).multiply( lParentGSM_noLocal ).multiply( lLSM );\n\n\t}\n\n\tconst lRotationPivotM_inv = lRotationPivotM.clone().invert();\n\tconst lScalingPivotM_inv = lScalingPivotM.clone().invert();\n\t// Calculate the local transform matrix\n\tlet lTransform = lTranslationM.clone().multiply( lRotationOffsetM ).multiply( lRotationPivotM ).multiply( lPreRotationM ).multiply( lRotationM ).multiply( lPostRotationM ).multiply( lRotationPivotM_inv ).multiply( lScalingOffsetM ).multiply( lScalingPivotM ).multiply( lScalingM ).multiply( lScalingPivotM_inv );\n\n\tconst lLocalTWithAllPivotAndOffsetInfo = new three__WEBPACK_IMPORTED_MODULE_0__.Matrix4().copyPosition( lTransform );\n\n\tconst lGlobalTranslation = lParentGX.clone().multiply( lLocalTWithAllPivotAndOffsetInfo );\n\tlGlobalT.copyPosition( lGlobalTranslation );\n\n\tlTransform = lGlobalT.clone().multiply( lGlobalRS );\n\n\t// from global to local\n\tlTransform.premultiply( lParentGX.invert() );\n\n\treturn lTransform;\n\n}\n\n// Returns the three.js intrinsic Euler order corresponding to FBX extrinsic Euler order\n// ref: http://help.autodesk.com/view/FBX/2017/ENU/?guid=__cpp_ref_class_fbx_euler_html\nfunction getEulerOrder( order ) {\n\n\torder = order || 0;\n\n\tconst enums = [\n\t\t'ZYX', // -> XYZ extrinsic\n\t\t'YZX', // -> XZY extrinsic\n\t\t'XZY', // -> YZX extrinsic\n\t\t'ZXY', // -> YXZ extrinsic\n\t\t'YXZ', // -> ZXY extrinsic\n\t\t'XYZ', // -> ZYX extrinsic\n\t\t//'SphericXYZ', // not possible to support\n\t];\n\n\tif ( order === 6 ) {\n\n\t\tconsole.warn( 'THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect.' );\n\t\treturn enums[ 0 ];\n\n\t}\n\n\treturn enums[ order ];\n\n}\n\n// Parses comma separated list of numbers and returns them an array.\n// Used internally by the TextParser\nfunction parseNumberArray( value ) {\n\n\tconst array = value.split( ',' ).map( function ( val ) {\n\n\t\treturn parseFloat( val );\n\n\t} );\n\n\treturn array;\n\n}\n\nfunction convertArrayBufferToString( buffer, from, to ) {\n\n\tif ( from === undefined ) from = 0;\n\tif ( to === undefined ) to = buffer.byteLength;\n\n\treturn three__WEBPACK_IMPORTED_MODULE_0__.LoaderUtils.decodeText( new Uint8Array( buffer, from, to ) );\n\n}\n\nfunction append( a, b ) {\n\n\tfor ( let i = 0, j = a.length, l = b.length; i < l; i ++, j ++ ) {\n\n\t\ta[ j ] = b[ i ];\n\n\t}\n\n}\n\nfunction slice( a, b, from, to ) {\n\n\tfor ( let i = from, j = 0; i < to; i ++, j ++ ) {\n\n\t\ta[ j ] = b[ i ];\n\n\t}\n\n\treturn a;\n\n}\n\n// inject array a2 into array a1 at index\nfunction inject( a1, index, a2 ) {\n\n\treturn a1.slice( 0, index ).concat( a2 ).concat( a1.slice( index ) );\n\n}\n\n\n\n\n//# sourceURL=webpack://stakhanovets/./node_modules/three/examples/jsm/loaders/FBXLoader.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.miniCssF = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	!function() {
/******/ 		__webpack_require__.hmrF = function() { return "main." + __webpack_require__.h() + ".hot-update.json"; };
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	!function() {
/******/ 		__webpack_require__.h = function() { return "c3272c54eb1c50ecd244"; }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	!function() {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "stakhanovets:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = function(url, done, key, chunkId) {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = function(prev, event) {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach(function(fn) { return fn(event); });
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	!function() {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises;
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 					blockingPromises.push(promise);
/******/ 					waitForBlockingPromises(function () {
/******/ 						return setStatus("ready");
/******/ 					});
/******/ 					return promise;
/******/ 				case "prepare":
/******/ 					blockingPromises.push(promise);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises.length === 0) return fn();
/******/ 			var blocker = blockingPromises;
/******/ 			blockingPromises = [];
/******/ 			return Promise.all(blocker).then(function () {
/******/ 				return waitForBlockingPromises(fn);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						blockingPromises = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error("apply() is only allowed in ready status");
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/css loading */
/******/ 	!function() {
/******/ 		var createStylesheet = function(chunkId, fullhref, resolve, reject) {
/******/ 			var linkTag = document.createElement("link");
/******/ 		
/******/ 			linkTag.rel = "stylesheet";
/******/ 			linkTag.type = "text/css";
/******/ 			var onLinkComplete = function(event) {
/******/ 				// avoid mem leaks.
/******/ 				linkTag.onerror = linkTag.onload = null;
/******/ 				if (event.type === 'load') {
/******/ 					resolve();
/******/ 				} else {
/******/ 					var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 					var realHref = event && event.target && event.target.href || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + realHref + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.type = errorType;
/******/ 					err.request = realHref;
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				}
/******/ 			}
/******/ 			linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 			linkTag.href = fullhref;
/******/ 		
/******/ 			document.head.appendChild(linkTag);
/******/ 			return linkTag;
/******/ 		};
/******/ 		var findStylesheet = function(href, fullhref) {
/******/ 			var existingLinkTags = document.getElementsByTagName("link");
/******/ 			for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 				var tag = existingLinkTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 				if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
/******/ 			}
/******/ 			var existingStyleTags = document.getElementsByTagName("style");
/******/ 			for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 				var tag = existingStyleTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href");
/******/ 				if(dataHref === href || dataHref === fullhref) return tag;
/******/ 			}
/******/ 		};
/******/ 		var loadStylesheet = function(chunkId) {
/******/ 			return new Promise(function(resolve, reject) {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				if(findStylesheet(href, fullhref)) return resolve();
/******/ 				createStylesheet(chunkId, fullhref, resolve, reject);
/******/ 			});
/******/ 		}
/******/ 		// no chunk loading
/******/ 		
/******/ 		var oldTags = [];
/******/ 		var newTags = [];
/******/ 		var applyHandler = function(options) {
/******/ 			return { dispose: function() {
/******/ 				for(var i = 0; i < oldTags.length; i++) {
/******/ 					var oldTag = oldTags[i];
/******/ 					if(oldTag.parentNode) oldTag.parentNode.removeChild(oldTag);
/******/ 				}
/******/ 				oldTags.length = 0;
/******/ 			}, apply: function() {
/******/ 				for(var i = 0; i < newTags.length; i++) newTags[i].rel = "stylesheet";
/******/ 				newTags.length = 0;
/******/ 			} };
/******/ 		}
/******/ 		__webpack_require__.hmrC.miniCss = function(chunkIds, removedChunks, removedModules, promises, applyHandlers, updatedModulesList) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			chunkIds.forEach(function(chunkId) {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var oldTag = findStylesheet(href, fullhref);
/******/ 				if(!oldTag) return;
/******/ 				promises.push(new Promise(function(resolve, reject) {
/******/ 					var tag = createStylesheet(chunkId, fullhref, function() {
/******/ 						tag.as = "style";
/******/ 						tag.rel = "preload";
/******/ 						resolve();
/******/ 					}, reject);
/******/ 					oldTags.push(oldTag);
/******/ 					newTags.push(tag);
/******/ 				}));
/******/ 			});
/******/ 		}
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId) {
/******/ 			return new Promise(function(resolve, reject) {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = function(event) {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdatestakhanovets"] = function(chunkId, moreModules, runtime) {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						!__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						__webpack_require__.o(installedChunks, chunkId) &&
/******/ 						installedChunks[chunkId] !== undefined
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = function() {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then(function(response) {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("./node_modules/@babel/polyfill/lib/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;