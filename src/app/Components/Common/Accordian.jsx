import Accordion from 'react-bootstrap/Accordion';
import AccordionItem from 'react-bootstrap/AccordionItem';
import AccordionHeader from 'react-bootstrap/AccordionHeader';
import AccordionBody from 'react-bootstrap/AccordionBody';
import SectionHeading from '../SectionHeading';

function FaqSection({ data }) {
  return (
    <div>
      <SectionHeading
        SectionSubtitle="Questions"
        SectionTitle="FAQ'S"
        variant={'text-center'}
      />
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
    </div>
  );
}

export default FaqSection;
