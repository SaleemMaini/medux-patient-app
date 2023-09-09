import { axios } from '.'

export const getDoctorDetails = (doctorId: number) => {
  return axios.post(`/`, {
    query: `query Doctor {
        doctor(id: "${doctorId}") {
          id
          name
          email
          city {
              id
              name
          }
          specialization {
              id
              name
          }
          district {
            id
            name
        }
        summary
        avatar
        phone
        gender
        fees
        }
    }
    `
  })
}

export const getDoctors = () => {
  return axios.post(`/`, {
    query: `query Doctors {
      doctors {
          id
          name
          specialization {
              id
              name
          }
          district {
            id
            name
        }
          city {
              id
              name
          }
          summary
        avatar
        phone
        gender
        fees
      }
  }`
  })
}
