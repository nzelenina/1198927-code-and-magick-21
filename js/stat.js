'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var TITLE_HEIGHT = 60;
var GAP = 50;
var FONT_GAP = 10;
var TEXT_HEIGHT = 20;
var BAR_WIDTH = 40;
var BAR_Y = 250;
var barHeight = GAP+TEXT_HEIGHT + FONT_GAP + TITLE_HEIGHT - CLOUD_HEIGHT;

var renderClouds = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement){
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx,players,times) {
  renderClouds(ctx, 110, 20, 'rgba(0, 0, 0, 0.3)');
  renderClouds(ctx, 100, 10, '#fff');

  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили', 110, 20);
  ctx.fillText('Список результатов', 110, 40);

 var maxTime = getMaxElement(times);


  for (var i = 0; i < players.length; i++) {
  ctx.fillStyle = '#000';
  ctx.fillText(players[i],CLOUD_X + GAP + (BAR_WIDTH + GAP) * i, BAR_Y);
  ctx.fillStyle = 'blue';
  ctx.fillRect(CLOUD_X + GAP + (BAR_WIDTH + GAP) * i, BAR_Y - TEXT_HEIGHT - FONT_GAP, BAR_WIDTH, (barHeight * times[i]) / maxTime);
  var round = Math.round(times[i]);
  ctx.fillStyle = '#000';
  ctx.fillText(round,CLOUD_X + GAP + (BAR_WIDTH + GAP) * i, BAR_Y - TEXT_HEIGHT - FONT_GAP + ((barHeight * times[i]) / maxTime) - FONT_GAP);

}

};
