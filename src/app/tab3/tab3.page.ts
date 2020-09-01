import { Component, OnInit, ElementRef } from '@angular/core';
import * as p5 from 'p5';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})


export class Tab3Page implements OnInit {


  constructor(private el: ElementRef) { }  

  ngOnInit() {

    const sketch = (p: any) => {
      let snowflakes = [];

      p.setup = () => {
        const c = document.querySelector('#canvasContainer');
        p.createCanvas(p.windowWidth , p.windowHeight ).parent(c);
        p.fill(240);
        p.noStroke();
      }

      p.draw = () => {
        let t: number = p.frameCount / 60;
        p.background('#62c3e3');

        // create snowflakes each frame
        for (let i = 0; i < p.random(5); i++) {
          snowflakes.push(new snowflake());     
        }
        // update each snowflake
        for(let flake of snowflakes) {
          flake.update(t);
          flake.display();
        }
      }

      function snowflake() {
        // initialize
        let posX = 0;
        let posY = p.random(-50, 0);
        let initialangle = p.random(0, 2 * p.PI);
        let size = p.random(2, 5);
        // radius of snowflake spiral
        let radius = p.sqrt(p.random(p.pow(p.windowWidth / 2, 2)));
      
        this.update = (time: number) => {
          let w = 0.6;
          let angel = w * time + initialangle;
          posX = p.windowWidth / 2 + radius * p.sin(angel);  
          
          // different size snowflakes fall at slightly different y speeds
          posY += p.pow(size, 0.5);
          // delete snowflake if past end of screen
          if (posY > p.windowHeight) {
            let index = snowflakes.indexOf(this);
            snowflakes.splice(index, 1);
          }
        }
      
        this.display = function() {
          p.ellipse(posX, posY, size);
        };
      } // Snowflake

    } // Sketch

    const myp5 = new p5(sketch, this.el.nativeElement);
  } // OnInit

}


