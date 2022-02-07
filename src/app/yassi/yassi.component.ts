import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ExgModalService } from 'exc-controls-v2';
import { ExcTranslation } from 'exc-core-v2';
interface Point {
  x: number,
  y: number
}
interface Bouderys {
  left: number,
  right: number,
  top: number,
  bottom: number
}
@Component({
  selector: 'app-yassi',
  templateUrl: './yassi.component.html',
  styleUrls: ['./yassi.component.css']
})
export class YassiComponent extends ExcTranslation implements AfterViewInit {
  @ViewChild('pictureCanvas')
  picCanvas!: ElementRef<HTMLCanvasElement>;
  @Input()
  img!: HTMLImageElement;
  @Output() imgChange = new EventEmitter<HTMLImageElement>();
  @Input() width = 600;
  @Input() height = 600;
  @Input() outWidth = 240;
  @Input() outHeight = 240;
  @Input() exgModalService!: ExgModalService;
  private context!: CanvasRenderingContext2D;
  private canvas!: HTMLCanvasElement;
  private mouseDown: boolean = false;
  private oldMousePoint: Point = { x: 0, y: 0 };
  private imageSize = { width: this.width / 2, height: this.height / 2, start: { x: this.width / 4, y: this.height / 4 } };
  private d: number = this.imageSize.height < this.imageSize.width ? this.imageSize.height / 2 : this.imageSize.width / 2;
  private mid: Point = { x: this.width / 2, y: this.height / 2 };
  public zoom = { max: 10, min: 0, factor: 5 / 4, scaleValue: 0, current: 1, step: .1 };
  constructor() {
    super()
  }
  ngAfterViewInit(): void {
    this.canvas = this.picCanvas.nativeElement;
    this.context = this.canvas.getContext('2d')!;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.img.onload = (ev) => {
      // rebuild startparameters
      // zoomfactor = 1
      this.scrollhelper(1 / this.zoom.current);
      this.zoom.current = 1.;
      this.zoom.scaleValue = 0;
      // translate to middlepoint
      this.context.translate((this.mid.x - this.width / 2), this.mid.y - this.height / 2);
      this.mid = { x: this.width / 2, y: this.height / 2 };
      // draw (new) image to canvas
      this.picIntoCanvasRatio();
      this.redraw();
    }
    this.imgChange.emit(this.img);
  }
  private picIntoCanvasRatio(): void {
    var wrh = this.img.naturalWidth / this.img.naturalHeight;
    this.imageSize.width = this.width;
    this.imageSize.height = Math.floor(this.imageSize.width / wrh);
    this.imageSize.start.y = Math.floor((this.height - this.imageSize.height) / 2);
    this.imageSize.start.x = 0;
    if (this.imageSize.height > this.height) {
      this.imageSize.height = this.height;
      this.imageSize.width = Math.floor(this.imageSize.height * wrh);
      this.imageSize.start.x = Math.floor((this.width - this.imageSize.width) / 2);
      this.imageSize.start.y = 0;
    }
    this.d = this.imageSize.height < this.imageSize.width ? this.imageSize.height / 2 : this.imageSize.width / 2;
  }

  public setMouseDown(set: boolean, event: MouseEvent): void {
    this.mouseDown = set;
    this.oldMousePoint.x = event.pageX;
    this.oldMousePoint.y = event.pageY;
  }
  move(event: MouseEvent): void {
    if (!this.mouseDown)
      return;

    let dp: Point = { x: event.pageX - this.oldMousePoint.x, y: event.pageY - this.oldMousePoint.y }
    this.oldMousePoint.x = event.pageX;
    this.oldMousePoint.y = event.pageY;
    let check: Point = { x: this.mid.x - dp.x, y: this.mid.y - dp.y }
    let boundaries: Bouderys = {
      left: this.d + this.imageSize.start.x,
      right: this.imageSize.start.x + this.imageSize.width - this.d,
      top: this.d + this.imageSize.start.y,
      bottom: this.imageSize.start.y + this.imageSize.height - this.d
    }
    let elseCase: Bouderys = {
      left: 0, right: 0, top: 0, bottom: 0
    }

    dp = this.BounderyCheck(dp, boundaries, check, elseCase);
    this.mid.x -= dp.x;
    this.mid.y -= dp.y;
    this.context.translate(dp.x, dp.y);
    this.redraw();
  }

  onScrollScale(event: string) {
    let tmp = parseFloat(event);
    let pow = tmp - Math.round(10 * Math.log(this.zoom.current) / Math.log(this.zoom.factor)) / 10;
    const zoom = Math.pow(this.zoom.factor, pow);
    this.zoom.current *= zoom;
    this.zoom.scaleValue = tmp;
    //console.log(tmp, zoom, this.zoom.scaleValue);
    this.scrollhelper(zoom)
    this.redraw();
  }
  /**
   * Nebenbedingung zoom factor zoom_in / zoom_out = 1
   * @param event 
   * @returns 
   */
  onScrollCanvas(event: Event): void {
    console.log("test");

    event.preventDefault();
    let wheel: WheelEvent = (event as WheelEvent);
    let zoom = Math.pow(this.zoom.factor, wheel.deltaY > 0 ? 1 : -1);
    this.zoom.current *= zoom;
    // max || min zoom 
    if (this.zoom.current > Math.pow(this.zoom.factor, this.zoom.max)
      || this.zoom.current < Math.pow(this.zoom.factor, this.zoom.min)) {
      let tmp = this.zoom.current / zoom;
      let current = Math.pow(this.zoom.factor, this.zoom.current < Math.pow(this.zoom.factor, this.zoom.min) ? this.zoom.min : this.zoom.max);
      zoom = current / tmp;
      this.zoom.current = current;
      //this.zoom.current /= zoom;
      //return;
    }
    this.zoom.scaleValue = this.zoom.max * Math.log(this.zoom.current) / Math.log(Math.pow(this.zoom.factor, this.zoom.max));
    this.scrollhelper(zoom);
    this.redraw();
  }
  private scrollhelper(zoom: number): void {
    // if everting is in the pictures
    let movement = { x: this.width * (zoom - 1) / 2, y: this.height * (zoom - 1) / 2 };
    let toCheck: Point = { x: (this.mid.x + movement.x) / zoom, y: (this.mid.y + movement.y) / zoom };
    let delta: Point = { x: 0, y: 0 };
    this.d /= zoom;
    this.d = Math.round(this.d * 100) / 100;
    let boundaries: Bouderys = {
      left: this.d + this.imageSize.start.x,
      right: this.imageSize.start.x + this.imageSize.width - this.d,
      top: this.d + this.imageSize.start.y,
      bottom: this.imageSize.start.y + this.imageSize.height - this.d
    }
    let elseCases: Bouderys = {
      left: boundaries.left - toCheck.x,
      right: boundaries.right - toCheck.x,
      top: boundaries.top - toCheck.y,
      bottom: boundaries.bottom - toCheck.y
    }
    delta = this.BounderyCheck(delta, boundaries, toCheck, elseCases)
    this.mid.x = (this.mid.x + movement.x) / zoom + delta.x;
    this.mid.y = (this.mid.y + movement.y) / zoom + delta.y;
    this.context.translate(- movement.x - delta.x * zoom, -movement.y - delta.y * zoom);
    this.context.scale(zoom, zoom);
  }

  private BounderyCheck(delta: Point, bounds: Bouderys, toCheck: Point, elsecase: Bouderys): Point {
    delta.x = toCheck.x < bounds.left ? elsecase.left : delta.x;
    delta.x = toCheck.x > bounds.right ? elsecase.right : delta.x;
    delta.y = toCheck.y < bounds.top ? elsecase.top : delta.y;
    delta.y = toCheck.y > bounds.bottom ? elsecase.bottom : delta.y;
    return delta
  }

  save(): void {
    let recaled_r = this.d * this.zoom.current;
    let diameter = 2 * recaled_r;
    this.clear()
    this.drawImg();
    let imgdata = this.context.getImageData(this.width / 2 - recaled_r, (this.height / 2) - recaled_r, diameter, diameter);
    this.drawCircle();
    let newcanvas = document.createElement('canvas') as HTMLCanvasElement;
    newcanvas.height = this.outHeight;
    newcanvas.width = this.outWidth;
    createImageBitmap(imgdata).then(v => {
      newcanvas.getContext('2d')!.drawImage(v, 0, 0, this.outWidth, this.outHeight);
      this.exgModalService.action({ img: newcanvas.toDataURL() })
    });
  }

  private redraw(): void {
    this.clear();
    this.drawImg();
    this.drawCircle();
  }
  private clear(): void {
    this.context.clearRect(-1 * this.width, -1 * this.height, 3 * this.width, 3 * this.height);
  }
  private drawImg(): void {
    this.context.globalAlpha = 1;
    this.context.drawImage(this.img, this.imageSize.start.x, this.imageSize.start.y, this.imageSize.width, this.imageSize.height);
  }
  private drawCircle(): void {
    this.context.globalAlpha = 0.5;
    this.context.beginPath();
    this.context.arc(this.mid.x, this.mid.y, this.d, 0, 2 * Math.PI);
    this.context.rect(-this.width, 2 * this.height, 3 * this.width, -3 * this.height);
    //this.context.fillStyle = "gray";
    this.context.fill();
    this.context.beginPath();
    this.context.arc(this.mid.x, this.mid.y, this.d - 2.5 / this.zoom.current, 0, 2 * Math.PI);
    this.context.lineWidth = 5 / this.zoom.current;
    this.context.strokeStyle = "yellow";
    this.context.stroke()
  }
}
