// transactions
app.route('/trasactions')
    .get((req,res)=>{
        //show user transactions data from transactions table
    })

app.route('/withdrawal')
    .get((req,res)=>{
        //give a user a simple form\
        //form should contain:
        //amount
    })
    .post((req,res)=>{
        //first authenticate user
        //then authenticate user
        //take the amount from the user database
        //subtract the amount taken
        //create a history of the transaction
        //
    })

app.route('/transfer')
    .post('transfer',(req,res)=>{

    })