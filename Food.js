class Food {
    constructor() {
       this.image = loadImage("Milk.png");
       this.foodStock = 20;
       
       
    }

    display() {
        this.foodStock = foodS;
        var x = 100,y = 120;
        imageMode(CENTER);
        image(this.image,1130,440,80,80);

        if(this.foodStock !== 0) {
           for(var i = 0;i<this.foodStock;i++) {
               if(i%15 === 0) {
                 x = 100;
                 y = y + 75;
               }

               image(this.image,x,y,65,65);
               x = x + 50;
           }
        }
    }
}