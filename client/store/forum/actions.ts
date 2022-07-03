
import axios from 'axios';
import { Dispatch } from 'react';

export const ActionType = {
  GET_TOPICS: 'GET_TOPICS',
  LOAD_TOPICS: 'LOAD_TOPICS',
  DELETE_TOPIC: 'DELETE_TOPIC',
  ADD_TOPIC: 'ADD_TOPIC',

  
  UPDATE_TOPIC: 'UPDATE_TOPIC',
  LOAD_COMMENTS: 'LOAD_COMMENTS',
  ADD_COMMENTS: 'CREATE_COMMENTS',
};


const REACT_APP_API = '/api/topic'


export const getTopics = (topics: any) => ({
  type: ActionType.GET_TOPICS,
  payload: topics,
});

export const topicDeleted = () => ({
  type: ActionType.DELETE_TOPIC,
 
});

export const topicAdded = () => ({
  type: ActionType.ADD_TOPIC,
});



// запрос
export const loadTopics = () => {
  return async(dispatch: Dispatch<any>) => {
    await axios.get(`${REACT_APP_API}`)
    .then(response =>  {
      console.log('loadTopics.response.data',response.data)
      dispatch(getTopics(response.data))
    })
    .catch(error => {
      console.log('response.data',error)
    })
  }
  
}


export const deleteTopic = (id:number) => {
  return async(dispatch: Dispatch<any>) => {
     axios.delete(`${REACT_APP_API}/${id}`)
    .then(response =>  {
      console.log('deleteTopiclresponse',response)
      dispatch(topicDeleted());
      dispatch(loadTopics());
    })
    .catch(error => {
      console.log('response.data',error)
    })
  }
  
}


export const addTopic = (topic:any) => {
  return async(dispatch: Dispatch<any>) => {
    await axios.post(`${REACT_APP_API}`, topic)
    .then(response =>  {
      console.log('loadTopics.response.data',response.data)
      dispatch(topicAdded());
      dispatch(loadTopics());
    })
    .catch(error => {
      console.log('response.data',error)
    })
  }
  
}




