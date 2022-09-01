import express, {json} from "express";
import cors from "cors";
import chalk from "chalk";
import dotenv from "dotenv"
//import jwt from "jwt-simple";

dotenv.config()

const app = express();

const PORT = process.env.PORTA;

const NOME = process.env.NOMEE;

app.use(cors());
app.use(json());

let datatweets = {
  "tweets": [
    {
      username: "refwire",
      avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
      tweet: "eu amo o dinheiro",
    },
    {
      username: "refwire",
      avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
      tweet: "eu amo o dinheiro",
    },
    {
      username: "refwire",
      avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
      tweet: "eu amo o dinheiro",
    },
    {
      username: "refwire",
      avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
      tweet: "eu amo o dinheiro",
    },
    {
      username: "refwire",
      avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
      tweet: "eu amo o dinheiro",
    },
    {
      username: "refwire",
      avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
      tweet: "eu amo o dinheiro",
    },
    {
      username: "refwire",
      avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
      tweet: "eu amo o dinheiro",
    },
    {
      username: "refwire",
      avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
      tweet: "eu amo o dinheiro",
    },
    {
      username: "refwire",
      avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
      tweet: "eu amo o dinheiro",
    },
    {
      username: "refwire",
      avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
      tweet: "eu amo o dinheiro",
    },
    {
      username: "refwire",
      avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
      tweet: "eu amo o dinheiro",
    },
    {
      username: "refwire",
      avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
      tweet: "eu amo o dinheiro",
    },
    {
      username: "refwire",
      avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
      tweet: "eu amo o dinheiro",
    },
    {
      username: "refwire",
      avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
      tweet: "eu amo o dinheiro",
    },
    {
      username: "refwire",
      avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
      tweet: "eu amo o dinheiro",
    },
    {
      username: "refwire",
      avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
      tweet: "eu amo o dinheiro",
    },
    {
      username: "refwire",
      avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
      tweet: "eu amo o dinheiro",
    },
    {
      username: "refwire",
      avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
      tweet: "eu amo o dinheiro",
    },
    {
      username: "refwire",
      avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
      tweet: "eu amo o dinheiro",
    },
    {
      username: "refwire",
      avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
      tweet: "eu amo o dinheiro",
    },
    {
      username: "refwire",
      avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
      tweet: "eu amo o dinheiro",
    },
    {
      username: "refwire",
      avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
      tweet: "eu amo o dinheiro",
    },
  ]
};

const datauser = {
  "users": [
    {
      username: "refwire",
      avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
      id:"1",
    },
    {
      username: "Refszin",
      avatar: "https://saude.abril.com.br/wp-content/uploads/2016/10/11-sinais-que-seu-gato-esta-doente.jpg?quality=85&strip=info&w=1024&resize=1200,800",
      id:"2",
    }
  ]
};

app.post("/sign-up", (req, res) => {
  const { username, avatar } = req.body;

  if(!username || !avatar){
    res.status(400).send(
      'Todos os campos são obrigatórios!'
    );
  return
  };
  
  const newUser = {
    ...req.body,
    id: datauser.users.length + 1,
  };

  datauser.users.push({
    newUser, //token: jwt.sign({id},'issoNãoEUmToken'),
  }
);

  res.status(201).send(
    'OK'
    );
  return
});

app.post("/tweets", (req, res) => {
  const { tweet } = req.body;
  const { user } = req.headers;

  if(!user||!tweet){
    res.status(400).send(
      'Todos os campos são obrigatórios!'
      ); 
    return
  };

  const newTweet = {
    username: user,
    tweet,
    avatar: datauser.users.find((datauser) => datauser.username === user).avatar,
    id: datatweets.tweets.length + 1,
  };

  datatweets.tweets.push(newTweet);
  res.status(201).send(
    "OK"
  );
  return
});

app.get("/tweets", (req, res) => {
  const list = datatweets.tweets;
  const page = parseInt(req.query.page);
  const pageTweets = [...list];

  if(page >= 1 && page <= Math.round(list.length/10)+1 ){
    res.status(201).send(
      pageTweets.reverse().splice(
        0+10*(page-1),
        10+10*(page-1)
      )
    );
    return;
  }
  else{
    res.status(400).send("Informe uma página válida!")
    return;
  };
});

app.get("/tweets/:USERNAME",(req,res)=>{
  const list = datatweets.tweets;
  const userName = req.params.USERNAME;

  const tweets = list.filter(e => e.username === userName).slice(-10);
  res.status(201).send(
    tweets
  );
  return;
})

app.listen(PORT, () => { console.log(chalk.green.bold(`Rodando ${NOME} Lisu na Porta: ${PORT}`))});
