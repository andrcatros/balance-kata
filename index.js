
function findBalance (transactions = [], category, start, end) {
    let balance = 0;

    // filter transactions & add to balance
    transactions.forEach((transaction) => {
        if (transaction.category == category){
            if (new Date(transaction.time) >= new Date(start) && new Date(transaction.time) <= new Date(end)){
                balance += transaction.amount;
            }
        } 
    })

    return balance;    
};



module.exports = findBalance; 