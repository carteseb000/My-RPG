const toolbox = {
  'kind': 'flyoutToolbox',
  'contents': [
    {
      'kind': 'block',
      'type': 'controls_repeat_ext',
      'inputs': {
        'TIMES': {
          'shadow': {
            'type': 'math_number',
            'fields': {
              'NUM': 5
            }
          }
        }
      }
    }
  ]
}
Blockly.inject('blocklyDiv', {
  toolbox: toolbox,
  scrollbars: false
})

//var Player = function(x,y,size,speed) {
  //this.x = x;
  //this.y = y;
//   this.size = size; 
//   this.speed = speed;
//   update();
//    this.update = function() {
//       ellipse(this.x,this.y,this.size,this.size);
//    };
// };

// var player = new Player(100,100,9,3);

// draw = function() {
//    player.update();
// };

// function update() {
//    if(key.a) {move(-5, 0);}
//    if(key.d) {move(5 , 0);}
//    if(key.w) {move(0, -5);}
//    if(key.s) {move(0 , 5);}
// }
