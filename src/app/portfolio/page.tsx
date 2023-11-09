import { FC } from 'react'

type pageProps = {
  
}

const Portfolio: FC<pageProps> = async ({}) => {

  // const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=${process.env.INSTAGRAM_KEY}`;


  // const data = await fetch(url);
  // const feed = await data.json();
  // console.log(feed);

  return (
     <div className='h-screen bg-gray-600 flex justify-center pt-32'>
      <div id="container" className='w-full lg:w-[1200px] text-white px-2'>
        Portfolio
        
      </div>
     </div>
)



}

export default Portfolio


