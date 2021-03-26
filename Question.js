class Question{

    constructor(){
        this.input1 =  createInput("Enter Your Name Here");
        this.input2 = createInput("Type Your Option Here")
      
        this.title =  createElement('h2');
        this.question =  createElement('h2');
        this.option1 =  createElement('h2');
        this.option2 =  createElement('h2');
        this.button = createButton('Submit');
    }

    hide(){
        this.input1.hide();
        this.input2.hide();
        this.button.hide();
        
        this.title.hide();
    }

    display(){
        this.title.html("My Quiz Game");
        this.title.position(350,0);

        this.question.html("Question:- What is always in front of you but can’t be seen? ");
        this.question.position(70,80);
        this.option1.html("1: The Future " );
        this.option1.position(150,125);
        this.option2.html("2: The past");
        this.option2.position(150,155);

        this.input1.position(150,230);
        this.input2.position(150,250);
        this.button.position(225,280);

        this.button.mousePressed(()=>{
            this.title.hide();
            this.input1.hide();
            this.input2.hide();
            this.button.hide();
            contestant.name = this.input1.value();
            contestant.answer=this.input2.value();
            contestantCount+=1;
            contestant.index = contestantCount;
            contestant.update();
            contestant.updateCount(contestantCount);
    }
)}

};