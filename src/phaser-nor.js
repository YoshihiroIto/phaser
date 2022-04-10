/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var CONST = require('./const');
var Extend = require('./utils/object/Extend');

/**
 * @namespace Phaser
 */

var Phaser = {
  // Actions: require('./actions'),
  //Animations: require('./animations'),
  BlendModes: require('./renderer/BlendModes'),
  Cache: require('./cache'),
  // Cameras: require('./cameras'),
  Cameras: {
    Scene2D: require('./cameras/2d'),
  },
  Core: require('./core'),
  Class: require('./utils/Class'),
  // Create: require('./create'),
  //Curves: require('./curves'),
  Curves: {
    Path: require('./curves/path/Path'),
  },
  Data: require('./data'),
  // Display: require('./display'),
  DOM: require('./dom'),
  Events: require('./events'),
  Game: require('./core/Game'),
  // GameObjects: require('./gameobjects'),
  GameObjects: {
    Events: require('./gameobjects/events'),
    DisplayList: require('./gameobjects/DisplayList'),
    GameObjectCreator: require('./gameobjects/GameObjectCreator'),
    GameObjectFactory: require('./gameobjects/GameObjectFactory'),
    UpdateList: require('./gameobjects/UpdateList'),
    Components: require('./gameobjects/components'),
    GetCalcMatrix: require('./gameobjects/GetCalcMatrix'),
    BuildGameObject: require('./gameobjects/BuildGameObject'),
    GameObject: require('./gameobjects/GameObject'),
    Graphics: require('./gameobjects/graphics/Graphics.js'),
    Image: require('./gameobjects/image/Image'),
    TileSprite: require('./gameobjects/tilesprite/TileSprite'),
    Rectangle: require('./gameobjects/shape/rectangle/Rectangle'),
    Factories: {
      Graphics: require('./gameobjects/graphics/GraphicsFactory'),
      Image: require('./gameobjects/image/ImageFactory'),
      Particles: require('./gameobjects/particles/ParticleManagerFactory'),
      TileSprite: require('./gameobjects/tilesprite/TileSpriteFactory'),
      Rectangle: require('./gameobjects/shape/rectangle/RectangleFactory'),
    },
    Creators: {
      Graphics: require('./gameobjects/graphics/GraphicsCreator'),
      Image: require('./gameobjects/image/ImageCreator'),
      Particles: require('./gameobjects/particles/ParticleManagerCreator'),
      TileSprite: require('./gameobjects/tilesprite/TileSpriteCreator'),
    },
  },
  // Geom: require('./geom'),
  Geom: {
    Circle: require('./geom/circle'),
    Intersects: require('./geom/intersects'),
    Line: require('./geom/line'),
    Point: require('./geom/point'),
    Rectangle: require('./geom/rectangle'),
  },
  // Input: require('./input'),
  // Loader: require('./loader'),
  Loader: {
    Events: require('./loader/events'),
    FileTypes: {
      AtlasJSONFile: require('./loader/filetypes/AtlasJSONFile'),
      ImageFile: require('./loader/filetypes/ImageFile'),
      TextFile: require('./loader/filetypes/TextFile'),
    },
    File: require('./loader/File'),
    FileTypesManager: require('./loader/FileTypesManager'),
    GetURL: require('./loader/GetURL'),
    LoaderPlugin: require('./loader/LoaderPlugin'),
    MergeXHRSettings: require('./loader/MergeXHRSettings'),
    MultiFile: require('./loader/MultiFile'),
    XHRLoader: require('./loader/XHRLoader'),
    XHRSettings: require('./loader/XHRSettings'),
  },
  Math: require('./math'),
  //Physics: require('./physics'),
  Physics: {
    Matter: require('./physics/matter-js'),
  },
  Plugins: require('./plugins'),
  Renderer: require('./renderer'),
  Scale: require('./scale'),
  ScaleModes: require('./renderer/ScaleModes'),
  Scene: require('./scene/Scene'),
  Scenes: require('./scene'),
  Structs: require('./structs'),
  // Textures: require('./textures'),
  // Tilemaps: require('./tilemaps'),
  Time: require('./time'),
  // Tweens: require('./tweens'),
  Utils: require('./utils'),
};

//  Merge in the optional plugins and WebGL only features

if (typeof FEATURE_SOUND) {
  Phaser.Sound = require('./sound');
}

if (typeof PLUGIN_CAMERA3D) {
  Phaser.Cameras.Sprite3D = require('../plugins/camera3d/src');
  Phaser.GameObjects.Sprite3D = require('../plugins/camera3d/src/sprite3d/Sprite3D');
  Phaser.GameObjects.Factories.Sprite3D = require('../plugins/camera3d/src/sprite3d/Sprite3DFactory');
  Phaser.GameObjects.Creators.Sprite3D = require('../plugins/camera3d/src/sprite3d/Sprite3DCreator');
}

if (typeof PLUGIN_FBINSTANT) {
  Phaser.FacebookInstantGamesPlugin = require('../plugins/fbinstant/src/FacebookInstantGamesPlugin');
}

//   Merge in the consts

Phaser = Extend(false, Phaser, CONST);

/**
 * The root types namespace.
 *
 * @namespace Phaser.Types
 * @since 3.17.0
 */

//  Export it

module.exports = Phaser;

global.Phaser = Phaser;

/*
 * "Documentation is like pizza: when it is good, it is very, very good;
 * and when it is bad, it is better than nothing."
 *  -- Dick Brandon
 */
