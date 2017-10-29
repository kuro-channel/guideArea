import {AfterViewInit, Component, DoCheck, ViewChild, Input , Output , OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  /**
   *  content-groupの幅
   */
  @Input() width : number;
  /**
   *  content-heightの幅
   */
  @Input() height : number;
  /**
   *  title-text
   */
  @Input() _title : string;
  /**
   *  guide-text
   */
  @Input() _guide : string;

  /**
   *  title-set
   */
  set setTitle(value: string){
    if(value != ""){
      this._title = value;
    }
  }

  /**
   *  title-set
   */
  set setGuide(value: string){
    if(value != ""){
      this._guide = value;
    }
  }


  rectW = 260;
  rectH = 100;
  rectColor = '#FFFFFF';
  // rectColor = '#FF0000';
  context: CanvasRenderingContext2D;

  @ViewChild('content') content;
  @ViewChild('title') title;
  @ViewChild('guides') guides;

  ngOnInit(): void {
    // content-Groupのwidth/heightの設定
    if(this.width != 0){

    }
    if(this.height != 0){

    }
    // canvasの描写
    this.drawRect();
  }

  drawRect() {
    // title側描写
    let canvas = this.title.nativeElement;
    this.context = canvas.getContext('2d');
    let ctx = this.context;
    if (ctx) {
      // ctx.clearRect(20, 20, 400, 400);
      ctx.fillStyle = this.rectColor;
      // const grad = ctx.createLinearGradient(0,0, 140,0);
      // grad.addColorStop(0,'rgb(192, 80, 77)');    // 赤
      // grad.addColorStop(0.5,'rgb(155, 187, 89)'); // 緑
      // grad.addColorStop(1,'rgb(128, 100, 162)');  // 紫
      var grad  = ctx.createRadialGradient(70,70,20,70,70,70);
      /* グラデーション終点のオフセットと色をセット */
      // grad.addColorStop(0,'red');      // 赤
      // grad.addColorStop(0.5,'yellow'); // 黄
      // grad.addColorStop(1,'blue');     // 青
      // /* グラデーションをfillStyleプロパティにセット */
      // ctx.fillStyle = grad;s
      ctx.strokeText('描きたい文字列',10,30);
      ctx.fillText(this._guide,70,50,200);
      ctx.fillRect(70, 30, 150, 80);
      
    }

    // guide側描写
    canvas = this.guides.nativeElement;
    this.context = canvas.getContext('2d');
    ctx = this.context;
    if (ctx) {
      // ctx.clearRect(0, 0, 400, 400);
      ctx.fillStyle = this.rectColor;
      ctx.fillRect(20, 15, this.rectW, this.rectH);
    }
  }
}

