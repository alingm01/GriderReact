import axios from "axios";

const searchImages = async () => {
   const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID 3uMMxuRXkvezNOmtPPWxiKr42VWTxyNvTIoHf2Qe76o'
    },
    params: {
      query: 'cars'
    }
  })

  console.log(response)
  return response;
}

export default searchImages;