
$( document ).ready(function(e) {

    const values = ["one","two","three","four","five","six","seven","eight","nine","zero","div","mult","minus","plus","dot"];
    const operations_check = ["+","*","/"];
    const logic_check = ["+","*","/","-","."];
    const buttons = $("button");
    
    for (var i=0;i<buttons.length;i++){ 
        buttons[i].addEventListener('click', evt => {
            
            let evt_id = evt.target.id;
            let current_text =   $("#top").text(); 

            if (values.includes(evt_id)){

                let value = $("#"+evt_id).data("val");
               
                // if no value and user types 0
                if (current_text === "0" && value === 0) {
                    
                }

                // if no value and user types an operation other than -
                else if ((current_text === "0")  && (operations_check.includes(value))) {   
                    $("#top").text("0");
                   
                }

                // if no value and user types anything other than a dot
                else if (current_text === "0" && value === ".") {
                    $("#top").text("0"+value);
                  
                }

                // if value 0. and user types operations
                else if (current_text === "0." && (logic_check.includes(value))){
                   
                }

                 // check if user is typing two operations in a row (or dots)
                else if ((logic_check.includes(current_text.slice(-1))&& (logic_check.includes(value)))){      
                    
                    if (current_text !== "-")           
                        $("#top").text($("#top").text().slice(0,-1)+value);
                   
                }

                // no value and user types 0
                else if ($("#top").text() === "0") {
                    $("#top").empty();
                    $("#top").append(value);
                   
                }


                else if (["+","*","/","-"].includes(value)){
                    var isNegative = false;
                   if (current_text.charAt(0) === '-'){
                       isNegative = true;
                       current_text = current_text.substring(1);
                   };
               
                    if (current_text.includes("+")){
                        nums = current_text.split("+");
                        let r;
                        if (isNegative){
                           r = add(-1 * Number(nums[0]),Number(nums[1]));
                        }
                        else {
                            r = add(Number(nums[0]),Number(nums[1]));
                        }
                        
                        $("#top").text(r+value);
                      
                    } else if (current_text.includes("-")){
                        nums = current_text.split("-");
                        let r;
                        if (isNegative){
                            r = subtract(-1 * Number(nums[0]),Number(nums[1]));
                         }
                        else {
                            r = subtract(Number(nums[0]),Number(nums[1]));
                        }
                    
                        $("#top").text(r+value);
                       
                    } else if (current_text.includes("*")){
                        nums = current_text.split("*");
                        console.log(nums)   
                        let r;
                        r = multiply(Number(nums[0]),Number(nums[1]));
                        if (isNegative){
                            r = (r * -1);
                        }
                        $("#top").text(r+value);
                      
                    } else if (current_text.includes("/")){
                      
                        nums = current_text.split("/");
                        let r;
                        r = divide(Number(nums[0]),Number(nums[1]));
                        if (isNegative){
                            r = (r * -1);
                        }
                        
                        $("#top").text(r+value);
                   
                    }
                    
                    else {
                        $("#top").append(value);
                    }
                }
                else {
                    $("#top").append(value);
                }
            }

            else if (evt_id === "clear"){
                $("#top").empty();
                $("#top").append("0");
                $("#bottom").empty();
            }

            if (evt_id === "del"){
                if (current_text.length === 1){
                    $("#top").text("0");
                } else {
                $("#top").text($("#top").text().slice(0,-1));
                }
            }

            else if (evt_id === "equal") {
                    let answer = doMath($("#top").text());
                    $("#top").text("0");
                    $("#bottom").text(answer);
            }
           
          })
        }


    function doMath(exp){
        let r = 0;
        
        console.log(exp);

        var isNegative = false;
        if (exp.charAt(0) === '-'){
            isNegative = true;
            exp = exp.substring(1);
        };
    
        if (exp.includes("+")){
            nums = exp.split("+");
            if (isNegative){
                r = add(-1 * Number(nums[0]),Number(nums[1]));
            } else {
            r = add(Number(nums[0]),Number(nums[1]));
            }
            
           
        } else if (exp.includes("-")){
            nums = exp.split("-");
            if (isNegative){
                r = subtract(-1 * Number(nums[0]),Number(nums[1]));
            } else {
            r = subtract(Number(nums[0]),Number(nums[1]));
            }
           
        } else if (exp.includes("*")){
            nums = exp.split("*");
            r = multiply(Number(nums[0]),Number(nums[1]));
             if (isNegative){
                 r = (r * -1);
             }
          
        } else if (exp.includes("/")){
            nums = exp.split("/");
            r = divide(Number(nums[0]),Number(nums[1]));
             if (isNegative){
                 r = (r * -1);
             }
                  
        }
        
        return r;
       

    }


});

        
    function add (num1,num2){
        return num1+num2;
    }

   

    function subtract(num1,num2){
        return num1-num2;
    }

    function multiply(num1, num2) {
        return num1 * num2;
    }

    function divide(num1, num2) {
        let value = num1 * 1.0 / num2;
        if (!isFinite(value))
            throw new RangeError('Divide-by-zero');
        else {
            
            return value;
        }
          
    }
  