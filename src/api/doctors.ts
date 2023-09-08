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
        }
    }
    `
  })
}
