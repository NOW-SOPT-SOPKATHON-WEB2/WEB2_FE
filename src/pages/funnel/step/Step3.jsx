import { AnimatePresence, motion } from 'framer-motion';
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { HistoryTextContext } from '../Funnel';
import AnswerBox from '../answerBox/AnswerBox';
import ChatBox from '../chatbox/ChatBox';
import MyChat from '../chatbox/MyChat';

const variant = {
  initial: { opacity: 0, x: 400, transition: { duration: 0.5 } },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, delay: 0.5 },
  },
  exit: { opacity: 0, x: -400, transition: { duration: 0.3 } },
};

const Step3 = ({ current, onChangeStep }) => {
  const [clickedId, setClickedId] = useState(0);
  const [isSelected, setIsSelected] = useState(false);

  const { texts, setTexts } = useContext(HistoryTextContext);

  useEffect(() => {
    if (isSelected) {
      setTimeout(() => {
        onChangeStep(2);
      }, 1000);
    }
  }, [isSelected]);

  const handleSelect = () => {
    setIsSelected(true);
  };

  return (
    <AnimatePresence>
      {current === 3 && (
        <Container
          variants={variant}
          initial="initial"
          animate="animate"
          exit="exit"
          step={current}
        >
          <ChatsWrapper>
            <ChatBox>질문입니다 질문입니다 질문입니다 질문입니다</ChatBox>
            <MyChat>나입니다 나입니다 나입니다 나입니다</MyChat>
          </ChatsWrapper>

          <AnswerBox selectedId={clickedId} onChange={setClickedId} onSelect={handleSelect} />
        </Container>
      )}
    </AnimatePresence>
  );
};

const ChatsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 48px;

  padding: 0px 16px;
`;

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 95vh;
`;

export default Step3;