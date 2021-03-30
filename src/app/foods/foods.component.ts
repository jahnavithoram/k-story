import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css']
})
export class FoodsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }public sum=0;
   public c1=0;
   public c2=0;
   public c3=0;
   public c4=0;
  CountV(){
    this.sum+=699;
    this.c1++;
    console.log(localStorage.setItem("c1", JSON.stringify(this.c1)));
    }
    CountF(){
      this.sum+=735;
      this.c2++;
      localStorage.setItem("c2", JSON.stringify(this.c2));}
    CountS(){
      this.sum+=399;
      this.c3++;localStorage.setItem("c3", JSON.stringify(this.c3));
    }
    CountMBE(){
      this.sum+=249;
      this.c4++;
      console.log(this.sum); localStorage.setItem("c4", JSON.stringify(this.c4));
    }

    REMOVEF(){
      this.sum-=735;
      this.c2--;
      localStorage.setItem("c2", JSON.stringify(this.c2));}
      REMOVEV(){
        this.sum-=699;
        this.c1--;
        localStorage.setItem("c1", JSON.stringify(this.c1));}
        REMOVES(){
          this.sum-=399;
          this.c3--;
          localStorage.setItem("c3", JSON.stringify(this.c3));}
          REMOVEB(){
            this.sum-=249;
            this.c4--;
            localStorage.setItem("c4", JSON.stringify(this.c4));}
    Cartopen(){
      console.log(localStorage.setItem("c1", JSON.stringify(this.c1)));
      localStorage.setItem("c2", JSON.stringify(this.c2));
      localStorage.setItem("c3", JSON.stringify(this.c3));
      localStorage.setItem("c4", JSON.stringify(this.c4));
    }

}
