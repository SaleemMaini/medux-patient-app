import axios from 'axios'

export const getHomePageData = () => {
  return axios.post(`/`, {
    query: `query HomePage {
        specializations {
            id
            name
        }
        cities {
            id
            name
        }
        doctors {
            id
            name
            city {
                id
                name
            }
            specialization {
                id
                name
            }
        }
    }
    `
  })
}
