
function findBalance (transactions = [], category, start, end) {
    // date conversion
    function dateConversion (date_string) {
        const string = date_string;
        return new Date(string.split('').splice(0,10).join(""));
    };

    let balance = 0;

    // filter transactions & add to balance
    transactions.forEach((transaction) => {
        if (transaction.category == category){
            if (dateConversion(transaction.time) >= new Date(start) && dateConversion(transaction.time) <= new Date(end)){
                balance += transaction.amount;
            }
        } 
    })

    return balance;    
};



module.exports = findBalance; 