
let India = async ()=>{

    try{

        let url = `https://masai-api.herokuapp.com/news/top-headlines?country=in`;
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.articles)
        Append(data.articles)


    }
    catch(error){
        console.log(error)
    };
}

let China = async ()=>{

    try{

        let url = `https://masai-api.herokuapp.com/news/top-headlines?country=ch`;
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.articles)
        Append(data.articles)

    }catch(error){
        console.log(error)
    };
}

let Usa = async ()=>{

    try{

        let url = `https://masai-api.herokuapp.com/news/top-headlines?country=us`;
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.articles)
        Append(data.articles)

    }catch(error){
        console.log(error)
    };
}

let Uk = async ()=>{

    try{

        let url = `https://masai-api.herokuapp.com/news/top-headlines?country=uk`;
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.articles)
        Append(data.articles)

    }catch(error){
        console.log(error)
    };
}

let Newzeland = async ()=>{

    try{

        let url = `https://masai-api.herokuapp.com/news/top-headlines?country=nz`;
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.articles)
        Append(data.articles)

    }catch(error){
        console.log(error)
    };
}

export {India,China,Usa,Uk,Newzeland};