
import moment from 'moment'

export const GetDay = ({date}) => {
    return moment(date).format('DD');
}


export const GetMonth = ({date}) => {
    return moment(date).format('MMM');
  }