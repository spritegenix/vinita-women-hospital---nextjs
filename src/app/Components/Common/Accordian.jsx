import Accordion from 'react-bootstrap/Accordion';
import AccordionItem from 'react-bootstrap/AccordionItem';
import AccordionHeader from 'react-bootstrap/AccordionHeader';
import AccordionBody from 'react-bootstrap/AccordionBody';

function FaqSection({ data }) {
  return (
    <Accordion className="container">
      {data.map((item) => (
        <AccordionItem eventKey={item.id} key={item.id}>
          <AccordionHeader className="questionbox">
            {item.question}
          </AccordionHeader>
          <AccordionBody className="answerbox">{item.answer}</AccordionBody>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default FaqSection;
