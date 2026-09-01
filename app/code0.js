gdjs.Game_32SceneCode = {};
gdjs.Game_32SceneCode.localVariables = [];
gdjs.Game_32SceneCode.idToCallbackMap = new Map();
gdjs.Game_32SceneCode.GDRoad_95953DObjects1= [];
gdjs.Game_32SceneCode.GDRoad_95953DObjects2= [];
gdjs.Game_32SceneCode.GDRoad_95953DObjects3= [];
gdjs.Game_32SceneCode.GDGrass_95953DObjects1= [];
gdjs.Game_32SceneCode.GDGrass_95953DObjects2= [];
gdjs.Game_32SceneCode.GDGrass_95953DObjects3= [];
gdjs.Game_32SceneCode.GDPlayerCarObjects1= [];
gdjs.Game_32SceneCode.GDPlayerCarObjects2= [];
gdjs.Game_32SceneCode.GDPlayerCarObjects3= [];
gdjs.Game_32SceneCode.GDSpeed_9595JoystickObjects1= [];
gdjs.Game_32SceneCode.GDSpeed_9595JoystickObjects2= [];
gdjs.Game_32SceneCode.GDSpeed_9595JoystickObjects3= [];
gdjs.Game_32SceneCode.GDSteer_9595JoystickObjects1= [];
gdjs.Game_32SceneCode.GDSteer_9595JoystickObjects2= [];
gdjs.Game_32SceneCode.GDSteer_9595JoystickObjects3= [];
gdjs.Game_32SceneCode.GDTrafficConeObjects1= [];
gdjs.Game_32SceneCode.GDTrafficConeObjects2= [];
gdjs.Game_32SceneCode.GDTrafficConeObjects3= [];
gdjs.Game_32SceneCode.GDWalls_95953DObjects1= [];
gdjs.Game_32SceneCode.GDWalls_95953DObjects2= [];
gdjs.Game_32SceneCode.GDWalls_95953DObjects3= [];
gdjs.Game_32SceneCode.GDTree_95953DObjects1= [];
gdjs.Game_32SceneCode.GDTree_95953DObjects2= [];
gdjs.Game_32SceneCode.GDTree_95953DObjects3= [];
gdjs.Game_32SceneCode.GDCoin_95953DObjects1= [];
gdjs.Game_32SceneCode.GDCoin_95953DObjects2= [];
gdjs.Game_32SceneCode.GDCoin_95953DObjects3= [];
gdjs.Game_32SceneCode.GDScoreTextObjects1= [];
gdjs.Game_32SceneCode.GDScoreTextObjects2= [];
gdjs.Game_32SceneCode.GDScoreTextObjects3= [];
gdjs.Game_32SceneCode.GDWinTextObjects1= [];
gdjs.Game_32SceneCode.GDWinTextObjects2= [];
gdjs.Game_32SceneCode.GDWinTextObjects3= [];
gdjs.Game_32SceneCode.GDRoadLine_95953DObjects1= [];
gdjs.Game_32SceneCode.GDRoadLine_95953DObjects2= [];
gdjs.Game_32SceneCode.GDRoadLine_95953DObjects3= [];
gdjs.Game_32SceneCode.GDRamp_95953DObjects1= [];
gdjs.Game_32SceneCode.GDRamp_95953DObjects2= [];
gdjs.Game_32SceneCode.GDRamp_95953DObjects3= [];


gdjs.Game_32SceneCode.mapOfEmptyGDCoin_95953DObjects = Hashtable.newFrom({"Coin_3D": []});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerCarObjects1Objects = Hashtable.newFrom({"PlayerCar": gdjs.Game_32SceneCode.GDPlayerCarObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDCoin_959595953DObjects1Objects = Hashtable.newFrom({"Coin_3D": gdjs.Game_32SceneCode.GDCoin_95953DObjects1});
gdjs.Game_32SceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Game_32SceneCode.GDPlayerCarObjects1, gdjs.Game_32SceneCode.GDPlayerCarObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.Game_32SceneCode.GDPlayerCarObjects2.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerCarObjects2[0].getBehavior("Object3D").getZ()) <= 45);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDCoin_95953DObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "sfx_coin.ogg", false, 100, 1);
}
{runtimeScene.getScene().getVariables().getFromIndex(2).add(1);
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDCoin_95953DObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDCoin_95953DObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


};gdjs.Game_32SceneCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("WinText"), gdjs.Game_32SceneCode.GDWinTextObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.Game_32SceneCode.mapOfEmptyGDCoin_95953DObjects));
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(0);
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDWinTextObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDWinTextObjects1[i].getBehavior("Text").setText("You Win! Press R to restart");
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Coin_3D"), gdjs.Game_32SceneCode.GDCoin_95953DObjects1);
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.Game_32SceneCode.GDScoreTextObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDCoin_95953DObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDCoin_95953DObjects1[i].setAngle(gdjs.Game_32SceneCode.GDCoin_95953DObjects1[i].getAngle() + (120 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDScoreTextObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDScoreTextObjects1[i].getBehavior("Text").setText("Coins: " + runtimeScene.getScene().getVariables().getFromIndex(2).getAsString() + " / " + runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Coin_3D"), gdjs.Game_32SceneCode.GDCoin_95953DObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerCar"), gdjs.Game_32SceneCode.GDPlayerCarObjects1);

{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("CoinTopZ", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("CarZ", variable);
}
gdjs.Game_32SceneCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerCarObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDCoin_959595953DObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14238268);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}

{ //Subevents
gdjs.Game_32SceneCode.eventsList0(runtimeScene);} //End of subevents
}
gdjs.Game_32SceneCode.localVariables.pop();

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() > 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() >= runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber());
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14243948);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("WinText"), gdjs.Game_32SceneCode.GDWinTextObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDWinTextObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDWinTextObjects1[i].hide(false);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Powerup 1.aac", false, 100, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "r");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Scene", false);
}
}

}


};

gdjs.Game_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32SceneCode.GDRoad_95953DObjects1.length = 0;
gdjs.Game_32SceneCode.GDRoad_95953DObjects2.length = 0;
gdjs.Game_32SceneCode.GDRoad_95953DObjects3.length = 0;
gdjs.Game_32SceneCode.GDGrass_95953DObjects1.length = 0;
gdjs.Game_32SceneCode.GDGrass_95953DObjects2.length = 0;
gdjs.Game_32SceneCode.GDGrass_95953DObjects3.length = 0;
gdjs.Game_32SceneCode.GDPlayerCarObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlayerCarObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlayerCarObjects3.length = 0;
gdjs.Game_32SceneCode.GDSpeed_9595JoystickObjects1.length = 0;
gdjs.Game_32SceneCode.GDSpeed_9595JoystickObjects2.length = 0;
gdjs.Game_32SceneCode.GDSpeed_9595JoystickObjects3.length = 0;
gdjs.Game_32SceneCode.GDSteer_9595JoystickObjects1.length = 0;
gdjs.Game_32SceneCode.GDSteer_9595JoystickObjects2.length = 0;
gdjs.Game_32SceneCode.GDSteer_9595JoystickObjects3.length = 0;
gdjs.Game_32SceneCode.GDTrafficConeObjects1.length = 0;
gdjs.Game_32SceneCode.GDTrafficConeObjects2.length = 0;
gdjs.Game_32SceneCode.GDTrafficConeObjects3.length = 0;
gdjs.Game_32SceneCode.GDWalls_95953DObjects1.length = 0;
gdjs.Game_32SceneCode.GDWalls_95953DObjects2.length = 0;
gdjs.Game_32SceneCode.GDWalls_95953DObjects3.length = 0;
gdjs.Game_32SceneCode.GDTree_95953DObjects1.length = 0;
gdjs.Game_32SceneCode.GDTree_95953DObjects2.length = 0;
gdjs.Game_32SceneCode.GDTree_95953DObjects3.length = 0;
gdjs.Game_32SceneCode.GDCoin_95953DObjects1.length = 0;
gdjs.Game_32SceneCode.GDCoin_95953DObjects2.length = 0;
gdjs.Game_32SceneCode.GDCoin_95953DObjects3.length = 0;
gdjs.Game_32SceneCode.GDScoreTextObjects1.length = 0;
gdjs.Game_32SceneCode.GDScoreTextObjects2.length = 0;
gdjs.Game_32SceneCode.GDScoreTextObjects3.length = 0;
gdjs.Game_32SceneCode.GDWinTextObjects1.length = 0;
gdjs.Game_32SceneCode.GDWinTextObjects2.length = 0;
gdjs.Game_32SceneCode.GDWinTextObjects3.length = 0;
gdjs.Game_32SceneCode.GDRoadLine_95953DObjects1.length = 0;
gdjs.Game_32SceneCode.GDRoadLine_95953DObjects2.length = 0;
gdjs.Game_32SceneCode.GDRoadLine_95953DObjects3.length = 0;
gdjs.Game_32SceneCode.GDRamp_95953DObjects1.length = 0;
gdjs.Game_32SceneCode.GDRamp_95953DObjects2.length = 0;
gdjs.Game_32SceneCode.GDRamp_95953DObjects3.length = 0;

gdjs.Game_32SceneCode.eventsList1(runtimeScene);
gdjs.Game_32SceneCode.GDRoad_95953DObjects1.length = 0;
gdjs.Game_32SceneCode.GDRoad_95953DObjects2.length = 0;
gdjs.Game_32SceneCode.GDRoad_95953DObjects3.length = 0;
gdjs.Game_32SceneCode.GDGrass_95953DObjects1.length = 0;
gdjs.Game_32SceneCode.GDGrass_95953DObjects2.length = 0;
gdjs.Game_32SceneCode.GDGrass_95953DObjects3.length = 0;
gdjs.Game_32SceneCode.GDPlayerCarObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlayerCarObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlayerCarObjects3.length = 0;
gdjs.Game_32SceneCode.GDSpeed_9595JoystickObjects1.length = 0;
gdjs.Game_32SceneCode.GDSpeed_9595JoystickObjects2.length = 0;
gdjs.Game_32SceneCode.GDSpeed_9595JoystickObjects3.length = 0;
gdjs.Game_32SceneCode.GDSteer_9595JoystickObjects1.length = 0;
gdjs.Game_32SceneCode.GDSteer_9595JoystickObjects2.length = 0;
gdjs.Game_32SceneCode.GDSteer_9595JoystickObjects3.length = 0;
gdjs.Game_32SceneCode.GDTrafficConeObjects1.length = 0;
gdjs.Game_32SceneCode.GDTrafficConeObjects2.length = 0;
gdjs.Game_32SceneCode.GDTrafficConeObjects3.length = 0;
gdjs.Game_32SceneCode.GDWalls_95953DObjects1.length = 0;
gdjs.Game_32SceneCode.GDWalls_95953DObjects2.length = 0;
gdjs.Game_32SceneCode.GDWalls_95953DObjects3.length = 0;
gdjs.Game_32SceneCode.GDTree_95953DObjects1.length = 0;
gdjs.Game_32SceneCode.GDTree_95953DObjects2.length = 0;
gdjs.Game_32SceneCode.GDTree_95953DObjects3.length = 0;
gdjs.Game_32SceneCode.GDCoin_95953DObjects1.length = 0;
gdjs.Game_32SceneCode.GDCoin_95953DObjects2.length = 0;
gdjs.Game_32SceneCode.GDCoin_95953DObjects3.length = 0;
gdjs.Game_32SceneCode.GDScoreTextObjects1.length = 0;
gdjs.Game_32SceneCode.GDScoreTextObjects2.length = 0;
gdjs.Game_32SceneCode.GDScoreTextObjects3.length = 0;
gdjs.Game_32SceneCode.GDWinTextObjects1.length = 0;
gdjs.Game_32SceneCode.GDWinTextObjects2.length = 0;
gdjs.Game_32SceneCode.GDWinTextObjects3.length = 0;
gdjs.Game_32SceneCode.GDRoadLine_95953DObjects1.length = 0;
gdjs.Game_32SceneCode.GDRoadLine_95953DObjects2.length = 0;
gdjs.Game_32SceneCode.GDRoadLine_95953DObjects3.length = 0;
gdjs.Game_32SceneCode.GDRamp_95953DObjects1.length = 0;
gdjs.Game_32SceneCode.GDRamp_95953DObjects2.length = 0;
gdjs.Game_32SceneCode.GDRamp_95953DObjects3.length = 0;


return;

}

gdjs['Game_32SceneCode'] = gdjs.Game_32SceneCode;
