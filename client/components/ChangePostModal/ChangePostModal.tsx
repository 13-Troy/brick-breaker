import React, { FC , useState, useEffect} from 'react';

import Modal from '../Modal';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Button from '../../components/Button';

import { useDispatch, useSelector } from 'react-redux';
import { getTopicById} from '../../store/forum/actions';
import { ThunkDispatch } from 'redux-thunk';
import { useParams } from 'react-router-dom';

interface ModalProps {
  isShown?: boolean;
  toggleVisible?: () => void;
  headerText?: string;
  handleAdd?: () => void;
  handleChange?: any;
  topic: any;
}

const ChangePostModal: FC<ModalProps> = ({
  isShown,
  toggleVisible,
  headerText,
  handleAdd,
  handleChange,
}) => {
  if (!isShown) {
    return null;
  }


  const [state, setState] = useState ({
    topicName: "",
    topicText: "",
    ownerId:  ""
  })
  // let { id } = useParams();

  // const [loaded, setLoaded] = useState(false)
  // const dispatch = useDispatch() as ThunkDispatch<any, any, any>;

  // useEffect(() => {
  //   if (loaded) return;
  //   dispatch(getTopicById(id))
  //   setLoaded(true)
  // }, [loaded])
  
  const {topic } = useSelector((state: any) => state.forum)

  useEffect(() => {
    if (topic) { 
      setState({ ...topic })
    }
  }, [topic])


  return (
    <Modal isShown={isShown} hide={toggleVisible} headerText={headerText}>
      <Input
        name={'name'}
        type={'text'}
        placeholder={'название'}
        value ={topic.topicName}
        onChange={handleChange}
      />
      <Textarea
        name={'content'}
        value = {topic.topicText}
        placeholder={'текст поста'}
        onChange={handleChange}
      />
      <Button onClick={handleAdd}>сохранить</Button>
    </Modal>
  );
};
export default ChangePostModal;
