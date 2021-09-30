class Security {

    constructor(){

        this.access1 = createInput("Code1")
        this.access1.position(100,90);
        this.access1.style('background', 'white');  

        this.button1 = createButton('Check');
        this.button1.position(100,120);
        this.button1.style('background', 'lightgrey');    

        this.access2 = createInput("Code1")
        this.access2.position(700,190);
        this.access2.style('background', 'white');  

        this.button2 = createButton('Check');
        this.button2.position(700,220);
        this.button2.style('background', 'lightgrey');

        this.access3 = createInput("Code1")
        this.access3.position(100,290);
        this.access3.style('background', 'white');  

        //Debug the code to create the third button.
        this.button3 = createButton('Check');
        this.button3.position(100,320);
        this.button3.style('background', 'lightgrey'); 
    }

    display(){

        this.button1.mousePressed(() => {
            if(system.authenticate(accessCode1,this.access1.value())){
                this.button1.hide();
                this.access1.hide();
                score++;
                coin1.velocityY = 8;
                coin1.visible = true;
                coin2.velocityY = 7;
                coin2.visible = true;
                coin3.velocityY = 6;
                coin3.visible = true;
                coin4.velocityY = 5;
                coin4.visible = true;
                coin5.velocityY = 4;
                coin5.visible = true;
            }
        });

        this.button2.mousePressed(() => {
            if(system.authenticate(accessCode2,this.access2.value())){
                this.button2.hide();
                this.access2.hide();
                score++;
                jenie1.velocityY = 8;
                jenie1.visible = true;
                jenie2.velocityY = 8;
                jenie2.visible = true;
            }
        });

        // On mousePressed, check the input condition. 
        this.button3.mousePressed(() => {
            if(system.authenticate(accessCode3,this.access3.value())){
                this.button3.hide();
                this.access3.hide();
                score++;
                princess.velocityY = 5;
                princess.visible = true;
            }
        });

    }
}