//---------------------WEB3 Config---------------------------

const web3 = new Web3("ws://127.0.0.1:7545");
const dwitter = new web3.eth.Contract(DwitterAbi, DwitterAddress);

let defaultAccount;

web3.eth.getAccounts()
    .then(
        accounts => defaultAccount=accounts[0]
        );

dwitter.defaultAccount = defaultAccount;
//---------------------WEB3 Config----------------------------
userAddress = sessionStorage.getItem("logs");
var tweetAddress;
var account = [];
var i;
    dwitter
    .methods.showAccount().call({
        from: userAddress,
        gas: "3000000",
        gasPrice: "1000000"
    })
    .then(
        (data)=>{
            for(i=0;i<data.length;i++){
                tweetAddress = data[i];
                dwitter.methods.showTweets(data[i]).call({
                    from: userAddress,
                    gas: "3000000",
                    gasPrice: "1000000"
                })
                .then(
                    (data)=>{
                        document.getElementById("show_tweets").innerHTML +=tweetAddress+":" + data;
                    }
                );
            }
            
        }
    );
    for(i=0;i<account.length;i++){
        
    }
