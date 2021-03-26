

 //read the value of gameState tht is stored in DB
    //update the new gameState in the DB

    //getState() it will be used to read gameState from the DB
    //update(state) it will update the new state in the DB
    //start() functions is used to start the game , gameState==0
    class Contestant {
        constructor(){
          this.index = null;
          this.answer = null;
          this.name = null;
          
        }
      
        getCount(){
          var contestantCountRef = database.ref('contestantCount');
          contestantCountRef.on("value",(data)=>{
            contestantCount = data.val();
          })
        }
      
        updateCount(count){
          database.ref('/').update({
            contestantCount: count
          });
        }
      
        update(){
          var contestantIndex = "contestants/contestant" + this.index;
          database.ref(contestantIndex).set({
            name:this.name,
            answer:this.answer
          });
        }
      
        static getContestantInfo(){
          var contestantInfoRef = database.ref('contestant');
          contestantInfoRef.on("value",(data)=>{
            allContestants = data.val();
          })
        }
      }