const API_KEY= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweENiZDdlMjk4N0ZDN2UzYzNFNGE1MTdFM2I1MjVGQUVCOTgzOUY3MzEiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY3NTYxMzgzMjczNSwibmFtZSI6ImRydWdzIn0.W9LQldZpnUG7fywB7WWHp0CJB1Rcv74PRBofLlueHR4';
    // const client = new NFTStorage({ token: NFT_STORAGE_TOKEN });

    async function getExampleImage() {
      const imageOriginUrl = "https://www.oerlive.com/wp-content/uploads/2019/04/jonsnowonthronegot.jpg"
      const r = await fetch(imageOriginUrl)
      if (!r.ok) {
        throw new Error(`error fetching image: [${r.statusCode}]: ${r.status}`)
      }
      return r.blob()
    }
    
    async function storeExampleNFT() {
      const image = await getExampleImage()
      const nft = {
        image, 
        name: "Storing the World's Most Valuable Virtual Assets with NFT.Storage",
        description: "The metaverse is here. Where is it all being stored?",
        properties: {
          type: "blog-post",
          origins: {
            http: "https://blog.nft.storage/posts/2021-11-30-hello-world-nft-storage/",
            ipfs: "ipfs://bafybeieh4gpvatp32iqaacs6xqxqitla4drrkyyzq6dshqqsilkk3fqmti/blog/post/2021-11-30-hello-world-nft-storage/"
          },
          authors: [{ name: "David Choi" }],
          content: {
            "text/markdown": "The last year has witnessed the explosion of NFTs onto the world’s mainstage. From fine art to collectibles to music and media, NFTs are quickly demonstrating just how quickly grassroots Web3 communities can grow, and perhaps how much closer we are to mass adoption than we may have previously thought. <... remaining content omitted ...>"
          }
        }
      }
    
      const client = new NFTStorage({ token: API_KEY })
      const metadata = await client.store(nft)
    
      console.log('NFT data stored!')
      console.log('Metadata URI: ', metadata.url)
    }

    useEffect(async()=>{
      await fetch('https://ipfs.io/ipfs/bafyreigioucvk6fz6d4rmiweaeb774n4wr7ozaty3qurfhlmv7m2eahjoe/metadata.json').then((response) => response.json())
      .then((data) => console.log(data));
      // const result=await axios.post('https://ipfs.io/ipfs/bafyreigioucvk6fz6d4rmiweaeb774n4wr7ozaty3qurfhlmv7m2eahjoe',{});
    
      // console.log(result.data);

    },[])
    
   // storeExampleNFT();

