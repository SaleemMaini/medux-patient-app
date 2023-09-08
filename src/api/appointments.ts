import { getPatientData } from '@/app/utils'
import { axios } from '.'

export const bookAppointment = ({ date, doctorId }: { date: string; doctorId: number }) => {
  return axios.post('/', {
    query: `mutation CreateAppointment {
    createAppointment(date: "${date}", doctor_id: "${doctorId}", patient_id: "${getPatientData()?.id}") {
        id
        date
    }
}`
  })
}

export const getDoctorAppointments = (doctorId: number) => {
  return axios.post(`/`, {
    query: `query Doctor {
      doctor(id: "${doctorId}") {
          appointments {
              id
              date
          }
          workingHours
      }
  }
  `
  })
}
